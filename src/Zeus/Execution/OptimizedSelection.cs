using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Zeus.Abstractions;
using Zeus.Resolvers;

namespace Zeus.Execution
{
    public class OptimizedSelection
        : IOptimizedSelection
    {
        private readonly object _sync = new object();
        private readonly OperationContext _operationContext;
        private readonly SelectionContext _selectionContext;
        private ImmutableDictionary<NamedType, IImmutableList<IOptimizedSelection>> _selections
            = ImmutableDictionary<NamedType, IImmutableList<IOptimizedSelection>>.Empty;

        private OptimizedSelection(OperationContext operationContext, SelectionContext selectionContext)
        {
            _operationContext = operationContext
                ?? throw new ArgumentNullException(nameof(operationContext));

            _selectionContext = selectionContext
                ?? throw new ArgumentNullException(nameof(selectionContext));
        }

        public string Name
        {
            get
            {
                if (string.IsNullOrEmpty(_selectionContext.Field.Alias))
                {
                    return _selectionContext.Field.Name;
                }
                return _selectionContext.Field.Alias;
            }
        }

        public ObjectTypeDefinition TypeDefinition => _selectionContext.TypeDefinition;

        public FieldDefinition FieldDefinition => _selectionContext.FieldDefinition;

        public Field Field => _selectionContext.Field;

        public IResolver Resolver { get; }

        public IEnumerable<IOptimizedSelection> GetSelections(IType type)
        {
            NamedType namedType = type.NamedType();
            if (_selections.TryGetValue(namedType, out var selections))
            {
                return selections;
            }

            ISelectionSet fieldSelectionSet = _selectionContext.Field.SelectionSet;
            selections = ResolveSelections(fieldSelectionSet, namedType).ToImmutableList();

            lock (_sync)
            {
                _selections = _selections.SetItem(namedType, selections);
            }

            return selections;
        }

        private IEnumerable<IOptimizedSelection> ResolveSelections(
            IEnumerable<ISelection> selections,
            NamedType typeCondition)
        {
            foreach (ISelection selection in _selectionContext.Field.SelectionSet)
            {
                if (selection is Field f
                    && TryCreateSelectionContext(f, out var sc))
                {
                    yield return new OptimizedSelection(_operationContext, sc);
                }

                if (selection is InlineFragment frag
                    && frag.TypeCondition.Equals(typeCondition))
                {
                    foreach (IOptimizedSelection optimizedSelection 
                        in ResolveSelections(frag.SelectionSet, typeCondition))
                    {
                        yield return optimizedSelection;
                    }
                }

                if (selection is FragmentSpread fragSpread)
                {
                    foreach (IOptimizedSelection optimizedSelection 
                        in ResolveFragmentSpread(fragSpread, typeCondition))
                    {
                        yield return optimizedSelection;
                    }
                }
            }
        }

        private bool TryCreateSelectionContext(Field field, out SelectionContext selectionContext)
        {
            string typeName = _selectionContext.FieldDefinition.Type.TypeName();

            if (_operationContext.Schema.ObjectTypes.TryGetValue(typeName, out var typeDefinition)
                && typeDefinition.Fields.TryGetValue(field.Name, out var fieldDefinition))
            {
                selectionContext = new SelectionContext(typeDefinition, fieldDefinition, field);
                return true;
            }

            selectionContext = null;
            return false;
        }

        private IEnumerable<IOptimizedSelection> ResolveFragmentSpread(
            FragmentSpread fragmentSpread, 
            NamedType typeCondition)
        {
            FragmentDefinition fragmentDefinition = _operationContext.QueryDocument
               .Fragments[fragmentSpread.Name]
               .FirstOrDefault(t => t.TypeCondition.Equals(typeCondition));

            if (fragmentDefinition != null)
            {
                return ResolveSelections(fragmentDefinition.SelectionSet, typeCondition);
            }

            return Enumerable.Empty<IOptimizedSelection>();
        }

        public IResolverContext CreateContext(
            IResolverContext parentContext,
            object parentResult)
        {
            return parentContext.Create(_selectionContext, parentResult);
        }
    }
}