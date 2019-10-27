﻿using System;
using System.Collections;
using System.Collections.Generic;
using StrawberryShake;

namespace  StrawberryShake.Client.GraphQL
{
    public class GetHumanOperation
        : IOperation<IGetHuman>
    {
        private bool _modified_id;

        private string _value_id;

        public string Name => "getHuman";

        public IDocument Document => Queries.Default;

        public Type ResultType => typeof(IGetHuman);

        public string Id
        {
            get => _value_id;
            set
            {
                _value_id = value;
                _modified_id = true;
            }
        }

        public IReadOnlyList<InputValue> GetVariableValues()
        {
            var variables = new List<InputValue>();

            if(_modified_id)
            {
                variables.Add(new InputValue("id", "String", Id));
            }

            return variables;
        }
    }
}
