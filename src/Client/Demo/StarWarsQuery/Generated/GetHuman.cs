﻿using System;
using System.Collections;
using System.Collections.Generic;
using StrawberryShake;

namespace StrawberryShake.Client.StarWarsQuery
{
    [System.CodeDom.Compiler.GeneratedCode("StrawberryShake", "11.0.0")]
    public partial class GetHuman
        : IGetHuman
    {
        public GetHuman(
            global::StrawberryShake.Client.StarWarsQuery.IHuman? human)
        {
            Human = human;
        }

        public global::StrawberryShake.Client.StarWarsQuery.IHuman? Human { get; }
    }
}
