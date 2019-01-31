﻿using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using HotChocolate.Execution.Instrumentation;
using HotChocolate.Language;
using Moq;
using Xunit;

namespace HotChocolate.Execution
{
    public class ExecutionContextTests
    {
        [Fact]
        public void ContextDataArePassedOn()
        {
            // arrange
            var schema = Schema.Create(
                "type Query { foo: String }",
                c => c.Use(next => context => Task.CompletedTask));

            var query = Parser.Default.Parse("{ foo }");

            var errorHandler = new Mock<IErrorHandler>();

            var services = new Mock<IServiceProvider>();
            services.Setup(t => t.GetService(typeof(IErrorHandler)))
                .Returns(errorHandler.Object);

            IRequestServiceScope serviceScope =
                services.Object.CreateRequestServiceScope();

            var operation = new Mock<IOperation>();
            operation.Setup(t => t.Document).Returns(query);

            var variables = new Mock<IVariableCollection>();

            var contextData = new Dictionary<string, object>
            {
                { "abc", "123" }
            };

            // act
            var executionContext = new ExecutionContext(
                schema, serviceScope, operation.Object,
                variables.Object, fs => null, contextData,
                CancellationToken.None);

            // assert
            Assert.True(object.ReferenceEquals(
                contextData, executionContext.ContextData));
        }

        [Fact]
        public void CloneExecutionContext()
        {
            // arrange
            var schema = Schema.Create(
                "type Query { foo: String }",
                c => c.Use(next => context => Task.CompletedTask));

            var query = Parser.Default.Parse("{ foo }");

            var errorHandler = new Mock<IErrorHandler>();

            var services = new Mock<IServiceProvider>();
            services.Setup(t => t.GetService(typeof(IErrorHandler)))
                .Returns(errorHandler.Object);

            IRequestServiceScope serviceScope = services.Object
                .CreateRequestServiceScope();

            var operation = new Mock<IOperation>();
            operation.Setup(t => t.Document).Returns(query);

            var variables = new Mock<IVariableCollection>();

            var contextData = new Dictionary<string, object>
            {
                { "abc", "123" }
            };

            // act
            var executionContext = new ExecutionContext(
                schema, serviceScope, operation.Object,
                variables.Object, fs => null, contextData,
                CancellationToken.None);
            IExecutionContext cloned = executionContext.Clone();

            // assert
            Assert.Equal(contextData, executionContext.ContextData);
            Assert.Equal(contextData, cloned.ContextData);
            Assert.False(object.ReferenceEquals(
                executionContext.Result, cloned.Result));
            Assert.False(object.ReferenceEquals(
                executionContext.ContextData, cloned.ContextData));
        }
    }
}
