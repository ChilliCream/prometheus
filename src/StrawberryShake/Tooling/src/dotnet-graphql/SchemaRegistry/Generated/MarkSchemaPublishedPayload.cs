﻿using System;
using System.Collections;
using System.Collections.Generic;
using StrawberryShake;

namespace StrawberryShake.Tools.SchemaRegistry
{
    [System.CodeDom.Compiler.GeneratedCode("StrawberryShake", "11.0.0")]
    public partial class MarkSchemaPublishedPayload
        : IMarkSchemaPublishedPayload
    {
        public MarkSchemaPublishedPayload(
            global::StrawberryShake.Tools.SchemaRegistry.IEnvironmentName environment)
        {
            Environment = environment;
        }

        public global::StrawberryShake.Tools.SchemaRegistry.IEnvironmentName Environment { get; }
    }
}
