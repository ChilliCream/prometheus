﻿using System;
using System.Collections;
using System.Collections.Generic;
using StrawberryShake;

namespace StrawberryShake
{
    [System.CodeDom.Compiler.GeneratedCode("StrawberryShake", "11.0.0")]
    public partial class PublishClientPayload
        : IPublishClientPayload
    {
        public PublishClientPayload(
            string sessionId)
        {
            SessionId = sessionId;
        }

        public string SessionId { get; }
    }
}
