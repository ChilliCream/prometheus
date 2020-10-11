/*! For license information please see schema.worker.js.LICENSE.txt */
!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "/"),
    n((n.s = 94));
})([
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    });
    var r = Object.freeze({
      NAME: "Name",
      DOCUMENT: "Document",
      OPERATION_DEFINITION: "OperationDefinition",
      VARIABLE_DEFINITION: "VariableDefinition",
      SELECTION_SET: "SelectionSet",
      FIELD: "Field",
      ARGUMENT: "Argument",
      FRAGMENT_SPREAD: "FragmentSpread",
      INLINE_FRAGMENT: "InlineFragment",
      FRAGMENT_DEFINITION: "FragmentDefinition",
      VARIABLE: "Variable",
      INT: "IntValue",
      FLOAT: "FloatValue",
      STRING: "StringValue",
      BOOLEAN: "BooleanValue",
      NULL: "NullValue",
      ENUM: "EnumValue",
      LIST: "ListValue",
      OBJECT: "ObjectValue",
      OBJECT_FIELD: "ObjectField",
      DIRECTIVE: "Directive",
      NAMED_TYPE: "NamedType",
      LIST_TYPE: "ListType",
      NON_NULL_TYPE: "NonNullType",
      SCHEMA_DEFINITION: "SchemaDefinition",
      OPERATION_TYPE_DEFINITION: "OperationTypeDefinition",
      SCALAR_TYPE_DEFINITION: "ScalarTypeDefinition",
      OBJECT_TYPE_DEFINITION: "ObjectTypeDefinition",
      FIELD_DEFINITION: "FieldDefinition",
      INPUT_VALUE_DEFINITION: "InputValueDefinition",
      INTERFACE_TYPE_DEFINITION: "InterfaceTypeDefinition",
      UNION_TYPE_DEFINITION: "UnionTypeDefinition",
      ENUM_TYPE_DEFINITION: "EnumTypeDefinition",
      ENUM_VALUE_DEFINITION: "EnumValueDefinition",
      INPUT_OBJECT_TYPE_DEFINITION: "InputObjectTypeDefinition",
      DIRECTIVE_DEFINITION: "DirectiveDefinition",
      SCHEMA_EXTENSION: "SchemaExtension",
      SCALAR_TYPE_EXTENSION: "ScalarTypeExtension",
      OBJECT_TYPE_EXTENSION: "ObjectTypeExtension",
      INTERFACE_TYPE_EXTENSION: "InterfaceTypeExtension",
      UNION_TYPE_EXTENSION: "UnionTypeExtension",
      ENUM_TYPE_EXTENSION: "EnumTypeExtension",
      INPUT_OBJECT_TYPE_EXTENSION: "InputObjectTypeExtension",
    });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var r = n(17);
    function i(e) {
      return (i =
        "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" === typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function o(e) {
      return a(e, []);
    }
    function a(e, t) {
      switch (i(e)) {
        case "string":
          return JSON.stringify(e);
        case "function":
          return e.name ? "[function ".concat(e.name, "]") : "[function]";
        case "object":
          return null === e
            ? "null"
            : (function (e, t) {
                if (-1 !== t.indexOf(e)) return "[Circular]";
                var n = [].concat(t, [e]),
                  i = (function (e) {
                    var t = e[String(r.a)];
                    if ("function" === typeof t) return t;
                    if ("function" === typeof e.inspect) return e.inspect;
                  })(e);
                if (void 0 !== i) {
                  var o = i.call(e);
                  if (o !== e) return "string" === typeof o ? o : a(o, n);
                } else if (Array.isArray(e))
                  return (function (e, t) {
                    if (0 === e.length) return "[]";
                    if (t.length > 2) return "[Array]";
                    for (
                      var n = Math.min(10, e.length),
                        r = e.length - n,
                        i = [],
                        o = 0;
                      o < n;
                      ++o
                    )
                      i.push(a(e[o], t));
                    1 === r
                      ? i.push("... 1 more item")
                      : r > 1 && i.push("... ".concat(r, " more items"));
                    return "[" + i.join(", ") + "]";
                  })(e, n);
                return (function (e, t) {
                  var n = Object.keys(e);
                  if (0 === n.length) return "{}";
                  if (t.length > 2)
                    return (
                      "[" +
                      (function (e) {
                        var t = Object.prototype.toString
                          .call(e)
                          .replace(/^\[object /, "")
                          .replace(/]$/, "");
                        if (
                          "Object" === t &&
                          "function" === typeof e.constructor
                        ) {
                          var n = e.constructor.name;
                          if ("string" === typeof n && "" !== n) return n;
                        }
                        return t;
                      })(e) +
                      "]"
                    );
                  return (
                    "{ " +
                    n
                      .map(function (n) {
                        return n + ": " + a(e[n], t);
                      })
                      .join(", ") +
                    " }"
                  );
                })(e, n);
              })(e, t);
        default:
          return String(e);
      }
    }
  },
  function (e, t, n) {
    e.exports = n(79);
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    }),
      n.d(t, "b", function () {
        return o;
      }),
      n.d(t, "c", function () {
        return a;
      });
    var r = n(8),
      i = (function () {
        function e(e, t, n) {
          (this.start = e.start),
            (this.end = t.end),
            (this.startToken = e),
            (this.endToken = t),
            (this.source = n);
        }
        return (
          (e.prototype.toJSON = function () {
            return { start: this.start, end: this.end };
          }),
          e
        );
      })();
    Object(r.a)(i);
    var o = (function () {
      function e(e, t, n, r, i, o, a) {
        (this.kind = e),
          (this.start = t),
          (this.end = n),
          (this.line = r),
          (this.column = i),
          (this.value = a),
          (this.prev = o),
          (this.next = null);
      }
      return (
        (e.prototype.toJSON = function () {
          return {
            kind: this.kind,
            value: this.value,
            line: this.line,
            column: this.column,
          };
        }),
        e
      );
    })();
    function a(e) {
      return null != e && "string" === typeof e.kind;
    }
    Object(r.a)(o);
  },
  function (e, t, n) {
    "use strict";
    var r = n(31);
    n.d(t, "Message", function () {
      return r.a;
    });
    n(32), n(33);
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "print", function () {
        return o;
      });
    var r = n(10),
      i = n(19);
    function o(e) {
      return Object(r.b)(e, { leave: a });
    }
    var a = {
      Name: function (e) {
        return e.value;
      },
      Variable: function (e) {
        return "$" + e.name;
      },
      Document: function (e) {
        return c(e.definitions, "\n\n") + "\n";
      },
      OperationDefinition: function (e) {
        var t = e.operation,
          n = e.name,
          r = l("(", c(e.variableDefinitions, ", "), ")"),
          i = c(e.directives, " "),
          o = e.selectionSet;
        return n || i || r || "query" !== t ? c([t, c([n, r]), i, o], " ") : o;
      },
      VariableDefinition: function (e) {
        var t = e.variable,
          n = e.type,
          r = e.defaultValue,
          i = e.directives;
        return t + ": " + n + l(" = ", r) + l(" ", c(i, " "));
      },
      SelectionSet: function (e) {
        return u(e.selections);
      },
      Field: function (e) {
        var t = e.alias,
          n = e.name,
          r = e.arguments,
          i = e.directives,
          o = e.selectionSet;
        return c(
          [l("", t, ": ") + n + l("(", c(r, ", "), ")"), c(i, " "), o],
          " "
        );
      },
      Argument: function (e) {
        return e.name + ": " + e.value;
      },
      FragmentSpread: function (e) {
        return "..." + e.name + l(" ", c(e.directives, " "));
      },
      InlineFragment: function (e) {
        var t = e.typeCondition,
          n = e.directives,
          r = e.selectionSet;
        return c(["...", l("on ", t), c(n, " "), r], " ");
      },
      FragmentDefinition: function (e) {
        var t = e.name,
          n = e.typeCondition,
          r = e.variableDefinitions,
          i = e.directives,
          o = e.selectionSet;
        return (
          "fragment ".concat(t).concat(l("(", c(r, ", "), ")"), " ") +
          "on ".concat(n, " ").concat(l("", c(i, " "), " ")) +
          o
        );
      },
      IntValue: function (e) {
        return e.value;
      },
      FloatValue: function (e) {
        return e.value;
      },
      StringValue: function (e, t) {
        var n = e.value;
        return e.block
          ? Object(i.b)(n, "description" === t ? "" : "  ")
          : JSON.stringify(n);
      },
      BooleanValue: function (e) {
        return e.value ? "true" : "false";
      },
      NullValue: function () {
        return "null";
      },
      EnumValue: function (e) {
        return e.value;
      },
      ListValue: function (e) {
        return "[" + c(e.values, ", ") + "]";
      },
      ObjectValue: function (e) {
        return "{" + c(e.fields, ", ") + "}";
      },
      ObjectField: function (e) {
        return e.name + ": " + e.value;
      },
      Directive: function (e) {
        return "@" + e.name + l("(", c(e.arguments, ", "), ")");
      },
      NamedType: function (e) {
        return e.name;
      },
      ListType: function (e) {
        return "[" + e.type + "]";
      },
      NonNullType: function (e) {
        return e.type + "!";
      },
      SchemaDefinition: s(function (e) {
        var t = e.directives,
          n = e.operationTypes;
        return c(["schema", c(t, " "), u(n)], " ");
      }),
      OperationTypeDefinition: function (e) {
        return e.operation + ": " + e.type;
      },
      ScalarTypeDefinition: s(function (e) {
        return c(["scalar", e.name, c(e.directives, " ")], " ");
      }),
      ObjectTypeDefinition: s(function (e) {
        var t = e.name,
          n = e.interfaces,
          r = e.directives,
          i = e.fields;
        return c(
          ["type", t, l("implements ", c(n, " & ")), c(r, " "), u(i)],
          " "
        );
      }),
      FieldDefinition: s(function (e) {
        var t = e.name,
          n = e.arguments,
          r = e.type,
          i = e.directives;
        return (
          t +
          (d(n) ? l("(\n", f(c(n, "\n")), "\n)") : l("(", c(n, ", "), ")")) +
          ": " +
          r +
          l(" ", c(i, " "))
        );
      }),
      InputValueDefinition: s(function (e) {
        var t = e.name,
          n = e.type,
          r = e.defaultValue,
          i = e.directives;
        return c([t + ": " + n, l("= ", r), c(i, " ")], " ");
      }),
      InterfaceTypeDefinition: s(function (e) {
        var t = e.name,
          n = e.interfaces,
          r = e.directives,
          i = e.fields;
        return c(
          ["interface", t, l("implements ", c(n, " & ")), c(r, " "), u(i)],
          " "
        );
      }),
      UnionTypeDefinition: s(function (e) {
        var t = e.name,
          n = e.directives,
          r = e.types;
        return c(
          [
            "union",
            t,
            c(n, " "),
            r && 0 !== r.length ? "= " + c(r, " | ") : "",
          ],
          " "
        );
      }),
      EnumTypeDefinition: s(function (e) {
        var t = e.name,
          n = e.directives,
          r = e.values;
        return c(["enum", t, c(n, " "), u(r)], " ");
      }),
      EnumValueDefinition: s(function (e) {
        return c([e.name, c(e.directives, " ")], " ");
      }),
      InputObjectTypeDefinition: s(function (e) {
        var t = e.name,
          n = e.directives,
          r = e.fields;
        return c(["input", t, c(n, " "), u(r)], " ");
      }),
      DirectiveDefinition: s(function (e) {
        var t = e.name,
          n = e.arguments,
          r = e.repeatable,
          i = e.locations;
        return (
          "directive @" +
          t +
          (d(n) ? l("(\n", f(c(n, "\n")), "\n)") : l("(", c(n, ", "), ")")) +
          (r ? " repeatable" : "") +
          " on " +
          c(i, " | ")
        );
      }),
      SchemaExtension: function (e) {
        var t = e.directives,
          n = e.operationTypes;
        return c(["extend schema", c(t, " "), u(n)], " ");
      },
      ScalarTypeExtension: function (e) {
        return c(["extend scalar", e.name, c(e.directives, " ")], " ");
      },
      ObjectTypeExtension: function (e) {
        var t = e.name,
          n = e.interfaces,
          r = e.directives,
          i = e.fields;
        return c(
          ["extend type", t, l("implements ", c(n, " & ")), c(r, " "), u(i)],
          " "
        );
      },
      InterfaceTypeExtension: function (e) {
        var t = e.name,
          n = e.interfaces,
          r = e.directives,
          i = e.fields;
        return c(
          [
            "extend interface",
            t,
            l("implements ", c(n, " & ")),
            c(r, " "),
            u(i),
          ],
          " "
        );
      },
      UnionTypeExtension: function (e) {
        var t = e.name,
          n = e.directives,
          r = e.types;
        return c(
          [
            "extend union",
            t,
            c(n, " "),
            r && 0 !== r.length ? "= " + c(r, " | ") : "",
          ],
          " "
        );
      },
      EnumTypeExtension: function (e) {
        var t = e.name,
          n = e.directives,
          r = e.values;
        return c(["extend enum", t, c(n, " "), u(r)], " ");
      },
      InputObjectTypeExtension: function (e) {
        var t = e.name,
          n = e.directives,
          r = e.fields;
        return c(["extend input", t, c(n, " "), u(r)], " ");
      },
    };
    function s(e) {
      return function (t) {
        return c([t.description, e(t)], "\n");
      };
    }
    function c(e) {
      var t,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      return null !==
        (t =
          null === e || void 0 === e
            ? void 0
            : e
                .filter(function (e) {
                  return e;
                })
                .join(n)) && void 0 !== t
        ? t
        : "";
    }
    function u(e) {
      return e && 0 !== e.length ? "{\n" + f(c(e, "\n")) + "\n}" : "";
    }
    function l(e, t) {
      var n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return t ? e + t + n : "";
    }
    function f(e) {
      return e && "  " + e.replace(/\n/g, "\n  ");
    }
    function p(e) {
      return -1 !== e.indexOf("\n");
    }
    function d(e) {
      return e && e.some(p);
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    }),
      n.d(t, "b", function () {
        return s;
      }),
      n.d(t, "d", function () {
        return c;
      }),
      n.d(t, "e", function () {
        return l;
      }),
      n.d(t, "c", function () {
        return u;
      });
    var r = n(61),
      i = n.n(r);
    function o() {
      for (
        var e = new i.a(), t = arguments.length, n = new Array(t), r = 0;
        r < t;
        r++
      )
        n[r] = arguments[r];
      return (
        n.forEach(function (t) {
          return (e = e.update(t));
        }),
        e.digest("hex")
      );
    }
    var a = function () {
      for (
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21,
          t = "",
          n = crypto.getRandomValues(new Uint8Array(e));
        e--;

      ) {
        var r = 63 & n[e];
        t +=
          r < 36
            ? r.toString(36)
            : r < 62
            ? (r - 26).toString(36).toUpperCase()
            : r < 63
            ? "_"
            : "-";
      }
      return t;
    };
    function s(e) {
      return e && e.length > 0 ? "".concat(e, "|").concat(a()) : a();
    }
    function c(e) {
      return "OperationDefinition" === e.kind;
    }
    function u(e, t) {
      if (e > t) throw new Error("'start' must be smaller than 'end'.");
      return t - e;
    }
    function l() {
      return Date.now();
    }
  },
  function (e, t, n) {
    "use strict";
    function r(e, t) {
      if (!Boolean(e))
        throw new Error(null != t ? t : "Unexpected invariant triggered.");
    }
    n.d(t, "a", function () {
      return r;
    });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var r = n(7),
      i = n(17);
    function o(e) {
      var t = e.prototype.toJSON;
      "function" === typeof t || Object(r.a)(0),
        (e.prototype.inspect = t),
        i.a && (e.prototype[i.a] = t);
    }
  },
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return s;
    }),
      n.d(t, "c", function () {
        return c;
      }),
      n.d(t, "a", function () {
        return u;
      });
    var r = n(1),
      i = n(3),
      o = {
        Name: [],
        Document: ["definitions"],
        OperationDefinition: [
          "name",
          "variableDefinitions",
          "directives",
          "selectionSet",
        ],
        VariableDefinition: ["variable", "type", "defaultValue", "directives"],
        Variable: ["name"],
        SelectionSet: ["selections"],
        Field: ["alias", "name", "arguments", "directives", "selectionSet"],
        Argument: ["name", "value"],
        FragmentSpread: ["name", "directives"],
        InlineFragment: ["typeCondition", "directives", "selectionSet"],
        FragmentDefinition: [
          "name",
          "variableDefinitions",
          "typeCondition",
          "directives",
          "selectionSet",
        ],
        IntValue: [],
        FloatValue: [],
        StringValue: [],
        BooleanValue: [],
        NullValue: [],
        EnumValue: [],
        ListValue: ["values"],
        ObjectValue: ["fields"],
        ObjectField: ["name", "value"],
        Directive: ["name", "arguments"],
        NamedType: ["name"],
        ListType: ["type"],
        NonNullType: ["type"],
        SchemaDefinition: ["description", "directives", "operationTypes"],
        OperationTypeDefinition: ["type"],
        ScalarTypeDefinition: ["description", "name", "directives"],
        ObjectTypeDefinition: [
          "description",
          "name",
          "interfaces",
          "directives",
          "fields",
        ],
        FieldDefinition: [
          "description",
          "name",
          "arguments",
          "type",
          "directives",
        ],
        InputValueDefinition: [
          "description",
          "name",
          "type",
          "defaultValue",
          "directives",
        ],
        InterfaceTypeDefinition: [
          "description",
          "name",
          "interfaces",
          "directives",
          "fields",
        ],
        UnionTypeDefinition: ["description", "name", "directives", "types"],
        EnumTypeDefinition: ["description", "name", "directives", "values"],
        EnumValueDefinition: ["description", "name", "directives"],
        InputObjectTypeDefinition: [
          "description",
          "name",
          "directives",
          "fields",
        ],
        DirectiveDefinition: ["description", "name", "arguments", "locations"],
        SchemaExtension: ["directives", "operationTypes"],
        ScalarTypeExtension: ["name", "directives"],
        ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
        InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
        UnionTypeExtension: ["name", "directives", "types"],
        EnumTypeExtension: ["name", "directives", "values"],
        InputObjectTypeExtension: ["name", "directives", "fields"],
      },
      a = Object.freeze({});
    function s(e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o,
        s = void 0,
        c = Array.isArray(e),
        l = [e],
        f = -1,
        p = [],
        d = void 0,
        h = void 0,
        v = void 0,
        y = [],
        m = [],
        g = e;
      do {
        var b = ++f === l.length,
          E = b && 0 !== p.length;
        if (b) {
          if (
            ((h = 0 === m.length ? void 0 : y[y.length - 1]),
            (d = v),
            (v = m.pop()),
            E)
          ) {
            if (c) d = d.slice();
            else {
              for (var T = {}, _ = 0, w = Object.keys(d); _ < w.length; _++) {
                var O = w[_];
                T[O] = d[O];
              }
              d = T;
            }
            for (var N = 0, S = 0; S < p.length; S++) {
              var I = p[S][0],
                k = p[S][1];
              c && (I -= N),
                c && null === k ? (d.splice(I, 1), N++) : (d[I] = k);
            }
          }
          (f = s.index),
            (l = s.keys),
            (p = s.edits),
            (c = s.inArray),
            (s = s.prev);
        } else {
          if (
            ((h = v ? (c ? f : l[f]) : void 0),
            null === (d = v ? v[h] : g) || void 0 === d)
          )
            continue;
          v && y.push(h);
        }
        var x,
          A = void 0;
        if (!Array.isArray(d)) {
          if (!Object(i.c)(d))
            throw new Error("Invalid AST Node: ".concat(Object(r.a)(d), "."));
          var D = u(t, d.kind, b);
          if (D) {
            if ((A = D.call(t, d, h, v, y, m)) === a) break;
            if (!1 === A) {
              if (!b) {
                y.pop();
                continue;
              }
            } else if (void 0 !== A && (p.push([h, A]), !b)) {
              if (!Object(i.c)(A)) {
                y.pop();
                continue;
              }
              d = A;
            }
          }
        }
        if ((void 0 === A && E && p.push([h, d]), b)) y.pop();
        else
          (s = { inArray: c, index: f, keys: l, edits: p, prev: s }),
            (l = (c = Array.isArray(d))
              ? d
              : null !== (x = n[d.kind]) && void 0 !== x
              ? x
              : []),
            (f = -1),
            (p = []),
            v && m.push(v),
            (v = d);
      } while (void 0 !== s);
      return 0 !== p.length && (g = p[p.length - 1][1]), g;
    }
    function c(e) {
      var t = new Array(e.length);
      return {
        enter: function (n) {
          for (var r = 0; r < e.length; r++)
            if (null == t[r]) {
              var i = u(e[r], n.kind, !1);
              if (i) {
                var o = i.apply(e[r], arguments);
                if (!1 === o) t[r] = n;
                else if (o === a) t[r] = a;
                else if (void 0 !== o) return o;
              }
            }
        },
        leave: function (n) {
          for (var r = 0; r < e.length; r++)
            if (null == t[r]) {
              var i = u(e[r], n.kind, !0);
              if (i) {
                var o = i.apply(e[r], arguments);
                if (o === a) t[r] = a;
                else if (void 0 !== o && !1 !== o) return o;
              }
            } else t[r] === n && (t[r] = null);
        },
      };
    }
    function u(e, t, n) {
      var r = e[t];
      if (r) {
        if (!n && "function" === typeof r) return r;
        var i = n ? r.leave : r.enter;
        if ("function" === typeof i) return i;
      } else {
        var o = n ? e.leave : e.enter;
        if (o) {
          if ("function" === typeof o) return o;
          var a = o[t];
          if ("function" === typeof a) return a;
        }
      }
    }
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var r = n(80);
      function i(e, t) {
        if (e === t) return 0;
        for (
          var n = e.length, r = t.length, i = 0, o = Math.min(n, r);
          i < o;
          ++i
        )
          if (e[i] !== t[i]) {
            (n = e[i]), (r = t[i]);
            break;
          }
        return n < r ? -1 : r < n ? 1 : 0;
      }
      function o(e) {
        return t.Buffer && "function" === typeof t.Buffer.isBuffer
          ? t.Buffer.isBuffer(e)
          : !(null == e || !e._isBuffer);
      }
      var a = n(81),
        s = Object.prototype.hasOwnProperty,
        c = Array.prototype.slice,
        u = "foo" === function () {}.name;
      function l(e) {
        return Object.prototype.toString.call(e);
      }
      function f(e) {
        return (
          !o(e) &&
          "function" === typeof t.ArrayBuffer &&
          ("function" === typeof ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : !!e &&
              (e instanceof DataView ||
                !!(e.buffer && e.buffer instanceof ArrayBuffer)))
        );
      }
      var p = (e.exports = g),
        d = /\s*function\s+([^\(\s]*)\s*/;
      function h(e) {
        if (a.isFunction(e)) {
          if (u) return e.name;
          var t = e.toString().match(d);
          return t && t[1];
        }
      }
      function v(e, t) {
        return "string" === typeof e ? (e.length < t ? e : e.slice(0, t)) : e;
      }
      function y(e) {
        if (u || !a.isFunction(e)) return a.inspect(e);
        var t = h(e);
        return "[Function" + (t ? ": " + t : "") + "]";
      }
      function m(e, t, n, r, i) {
        throw new p.AssertionError({
          message: n,
          actual: e,
          expected: t,
          operator: r,
          stackStartFunction: i,
        });
      }
      function g(e, t) {
        e || m(e, !0, t, "==", p.ok);
      }
      function b(e, t, n, r) {
        if (e === t) return !0;
        if (o(e) && o(t)) return 0 === i(e, t);
        if (a.isDate(e) && a.isDate(t)) return e.getTime() === t.getTime();
        if (a.isRegExp(e) && a.isRegExp(t))
          return (
            e.source === t.source &&
            e.global === t.global &&
            e.multiline === t.multiline &&
            e.lastIndex === t.lastIndex &&
            e.ignoreCase === t.ignoreCase
          );
        if (
          (null !== e && "object" === typeof e) ||
          (null !== t && "object" === typeof t)
        ) {
          if (
            f(e) &&
            f(t) &&
            l(e) === l(t) &&
            !(e instanceof Float32Array || e instanceof Float64Array)
          )
            return 0 === i(new Uint8Array(e.buffer), new Uint8Array(t.buffer));
          if (o(e) !== o(t)) return !1;
          var s = (r = r || { actual: [], expected: [] }).actual.indexOf(e);
          return (
            (-1 !== s && s === r.expected.indexOf(t)) ||
            (r.actual.push(e),
            r.expected.push(t),
            (function (e, t, n, r) {
              if (null === e || void 0 === e || null === t || void 0 === t)
                return !1;
              if (a.isPrimitive(e) || a.isPrimitive(t)) return e === t;
              if (n && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t))
                return !1;
              var i = E(e),
                o = E(t);
              if ((i && !o) || (!i && o)) return !1;
              if (i) return (e = c.call(e)), (t = c.call(t)), b(e, t, n);
              var s,
                u,
                l = w(e),
                f = w(t);
              if (l.length !== f.length) return !1;
              for (l.sort(), f.sort(), u = l.length - 1; u >= 0; u--)
                if (l[u] !== f[u]) return !1;
              for (u = l.length - 1; u >= 0; u--)
                if (((s = l[u]), !b(e[s], t[s], n, r))) return !1;
              return !0;
            })(e, t, n, r))
          );
        }
        return n ? e === t : e == t;
      }
      function E(e) {
        return "[object Arguments]" == Object.prototype.toString.call(e);
      }
      function T(e, t) {
        if (!e || !t) return !1;
        if ("[object RegExp]" == Object.prototype.toString.call(t))
          return t.test(e);
        try {
          if (e instanceof t) return !0;
        } catch (n) {}
        return !Error.isPrototypeOf(t) && !0 === t.call({}, e);
      }
      function _(e, t, n, r) {
        var i;
        if ("function" !== typeof t)
          throw new TypeError('"block" argument must be a function');
        "string" === typeof n && ((r = n), (n = null)),
          (i = (function (e) {
            var t;
            try {
              e();
            } catch (n) {
              t = n;
            }
            return t;
          })(t)),
          (r =
            (n && n.name ? " (" + n.name + ")." : ".") + (r ? " " + r : ".")),
          e && !i && m(i, n, "Missing expected exception" + r);
        var o = "string" === typeof r,
          s = !e && i && !n;
        if (
          (((!e && a.isError(i) && o && T(i, n)) || s) &&
            m(i, n, "Got unwanted exception" + r),
          (e && i && n && !T(i, n)) || (!e && i))
        )
          throw i;
      }
      (p.AssertionError = function (e) {
        (this.name = "AssertionError"),
          (this.actual = e.actual),
          (this.expected = e.expected),
          (this.operator = e.operator),
          e.message
            ? ((this.message = e.message), (this.generatedMessage = !1))
            : ((this.message = (function (e) {
                return (
                  v(y(e.actual), 128) +
                  " " +
                  e.operator +
                  " " +
                  v(y(e.expected), 128)
                );
              })(this)),
              (this.generatedMessage = !0));
        var t = e.stackStartFunction || m;
        if (Error.captureStackTrace) Error.captureStackTrace(this, t);
        else {
          var n = new Error();
          if (n.stack) {
            var r = n.stack,
              i = h(t),
              o = r.indexOf("\n" + i);
            if (o >= 0) {
              var a = r.indexOf("\n", o + 1);
              r = r.substring(a + 1);
            }
            this.stack = r;
          }
        }
      }),
        a.inherits(p.AssertionError, Error),
        (p.fail = m),
        (p.ok = g),
        (p.equal = function (e, t, n) {
          e != t && m(e, t, n, "==", p.equal);
        }),
        (p.notEqual = function (e, t, n) {
          e == t && m(e, t, n, "!=", p.notEqual);
        }),
        (p.deepEqual = function (e, t, n) {
          b(e, t, !1) || m(e, t, n, "deepEqual", p.deepEqual);
        }),
        (p.deepStrictEqual = function (e, t, n) {
          b(e, t, !0) || m(e, t, n, "deepStrictEqual", p.deepStrictEqual);
        }),
        (p.notDeepEqual = function (e, t, n) {
          b(e, t, !1) && m(e, t, n, "notDeepEqual", p.notDeepEqual);
        }),
        (p.notDeepStrictEqual = function e(t, n, r) {
          b(t, n, !0) && m(t, n, r, "notDeepStrictEqual", e);
        }),
        (p.strictEqual = function (e, t, n) {
          e !== t && m(e, t, n, "===", p.strictEqual);
        }),
        (p.notStrictEqual = function (e, t, n) {
          e === t && m(e, t, n, "!==", p.notStrictEqual);
        }),
        (p.throws = function (e, t, n) {
          _(!0, e, t, n);
        }),
        (p.doesNotThrow = function (e, t, n) {
          _(!1, e, t, n);
        }),
        (p.ifError = function (e) {
          if (e) throw e;
        }),
        (p.strict = r(
          function e(t, n) {
            t || m(t, !0, n, "==", e);
          },
          p,
          {
            equal: p.strictEqual,
            deepEqual: p.deepStrictEqual,
            notEqual: p.notStrictEqual,
            notDeepEqual: p.notDeepStrictEqual,
          }
        )),
        (p.strict.strict = p.strict);
      var w =
        Object.keys ||
        function (e) {
          var t = [];
          for (var n in e) s.call(e, n) && t.push(n);
          return t;
        };
    }.call(this, n(13)));
  },
  function (e, t) {
    "function" === typeof Object.create
      ? (e.exports = function (e, t) {
          t &&
            ((e.super_ = t),
            (e.prototype = Object.create(t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })));
        })
      : (e.exports = function (e, t) {
          if (t) {
            e.super_ = t;
            var n = function () {};
            (n.prototype = t.prototype),
              (e.prototype = new n()),
              (e.prototype.constructor = e);
          }
        });
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (r) {
      "object" === typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t) {
    var n,
      r,
      i = (e.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === o || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" === typeof setTimeout ? setTimeout : o;
      } catch (e) {
        n = o;
      }
      try {
        r = "function" === typeof clearTimeout ? clearTimeout : a;
      } catch (e) {
        r = a;
      }
    })();
    var c,
      u = [],
      l = !1,
      f = -1;
    function p() {
      l &&
        c &&
        ((l = !1), c.length ? (u = c.concat(u)) : (f = -1), u.length && d());
    }
    function d() {
      if (!l) {
        var e = s(p);
        l = !0;
        for (var t = u.length; t; ) {
          for (c = u, u = []; ++f < t; ) c && c[f].run();
          (f = -1), (t = u.length);
        }
        (c = null),
          (l = !1),
          (function (e) {
            if (r === clearTimeout) return clearTimeout(e);
            if ((r === a || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(e);
            try {
              r(e);
            } catch (t) {
              try {
                return r.call(null, e);
              } catch (t) {
                return r.call(this, e);
              }
            }
          })(e);
      }
    }
    function h(e, t) {
      (this.fun = e), (this.array = t);
    }
    function v() {}
    (i.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      u.push(new h(e, t)), 1 !== u.length || l || s(d);
    }),
      (h.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (i.title = "browser"),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ""),
      (i.versions = {}),
      (i.on = v),
      (i.addListener = v),
      (i.once = v),
      (i.off = v),
      (i.removeListener = v),
      (i.removeAllListeners = v),
      (i.emit = v),
      (i.prependListener = v),
      (i.prependOnceListener = v),
      (i.listeners = function (e) {
        return [];
      }),
      (i.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (i.cwd = function () {
        return "/";
      }),
      (i.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (i.umask = function () {
        return 0;
      });
  },
  function (e, t, n) {
    "use strict";
    var r = {};
    function i(e, t, n) {
      n || (n = Error);
      var i = (function (e) {
        var n, r;
        function i(n, r, i) {
          return (
            e.call(
              this,
              (function (e, n, r) {
                return "string" === typeof t ? t : t(e, n, r);
              })(n, r, i)
            ) || this
          );
        }
        return (
          (r = e),
          ((n = i).prototype = Object.create(r.prototype)),
          (n.prototype.constructor = n),
          (n.__proto__ = r),
          i
        );
      })(n);
      (i.prototype.name = n.name), (i.prototype.code = e), (r[e] = i);
    }
    function o(e, t) {
      if (Array.isArray(e)) {
        var n = e.length;
        return (
          (e = e.map(function (e) {
            return String(e);
          })),
          n > 2
            ? "one of "
                .concat(t, " ")
                .concat(e.slice(0, n - 1).join(", "), ", or ") + e[n - 1]
            : 2 === n
            ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1])
            : "of ".concat(t, " ").concat(e[0])
        );
      }
      return "of ".concat(t, " ").concat(String(e));
    }
    i(
      "ERR_INVALID_OPT_VALUE",
      function (e, t) {
        return 'The value "' + t + '" is invalid for option "' + e + '"';
      },
      TypeError
    ),
      i(
        "ERR_INVALID_ARG_TYPE",
        function (e, t, n) {
          var r, i, a, s;
          if (
            ("string" === typeof t &&
            ((i = "not "), t.substr(!a || a < 0 ? 0 : +a, i.length) === i)
              ? ((r = "must not be"), (t = t.replace(/^not /, "")))
              : (r = "must be"),
            (function (e, t, n) {
              return (
                (void 0 === n || n > e.length) && (n = e.length),
                e.substring(n - t.length, n) === t
              );
            })(e, " argument"))
          )
            s = "The ".concat(e, " ").concat(r, " ").concat(o(t, "type"));
          else {
            var c = (function (e, t, n) {
              return (
                "number" !== typeof n && (n = 0),
                !(n + t.length > e.length) && -1 !== e.indexOf(t, n)
              );
            })(e, ".")
              ? "property"
              : "argument";
            s = 'The "'
              .concat(e, '" ')
              .concat(c, " ")
              .concat(r, " ")
              .concat(o(t, "type"));
          }
          return (s += ". Received type ".concat(typeof n));
        },
        TypeError
      ),
      i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
      i("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
        return "The " + e + " method is not implemented";
      }),
      i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
      i("ERR_STREAM_DESTROYED", function (e) {
        return "Cannot call " + e + " after a stream was destroyed";
      }),
      i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
      i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
      i("ERR_STREAM_WRITE_AFTER_END", "write after end"),
      i(
        "ERR_STREAM_NULL_VALUES",
        "May not write null values to stream",
        TypeError
      ),
      i(
        "ERR_UNKNOWN_ENCODING",
        function (e) {
          return "Unknown encoding: " + e;
        },
        TypeError
      ),
      i(
        "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
        "stream.unshift() after end event"
      ),
      (e.exports.codes = r);
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var r =
        Object.keys ||
        function (e) {
          var t = [];
          for (var n in e) t.push(n);
          return t;
        };
      e.exports = u;
      var i = n(23),
        o = n(28);
      n(12)(u, i);
      for (var a = r(o.prototype), s = 0; s < a.length; s++) {
        var c = a[s];
        u.prototype[c] || (u.prototype[c] = o.prototype[c]);
      }
      function u(e) {
        if (!(this instanceof u)) return new u(e);
        i.call(this, e),
          o.call(this, e),
          (this.allowHalfOpen = !0),
          e &&
            (!1 === e.readable && (this.readable = !1),
            !1 === e.writable && (this.writable = !1),
            !1 === e.allowHalfOpen &&
              ((this.allowHalfOpen = !1), this.once("end", l)));
      }
      function l() {
        this._writableState.ended || t.nextTick(f, this);
      }
      function f(e) {
        e.end();
      }
      Object.defineProperty(u.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function () {
          return this._writableState.highWaterMark;
        },
      }),
        Object.defineProperty(u.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(u.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(u.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed &&
              this._writableState.destroyed
            );
          },
          set: function (e) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = e),
              (this._writableState.destroyed = e));
          },
        });
    }.call(this, n(14)));
  },
  function (e, t, n) {
    "use strict";
    var r =
      "function" === typeof Symbol && "function" === typeof Symbol.for
        ? Symbol.for("nodejs.util.inspect.custom")
        : void 0;
    t.a = r;
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      var r = n(67),
        i = n(68),
        o = n(69);
      function a() {
        return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function s(e, t) {
        if (a() < t) throw new RangeError("Invalid typed array length");
        return (
          c.TYPED_ARRAY_SUPPORT
            ? ((e = new Uint8Array(t)).__proto__ = c.prototype)
            : (null === e && (e = new c(t)), (e.length = t)),
          e
        );
      }
      function c(e, t, n) {
        if (!c.TYPED_ARRAY_SUPPORT && !(this instanceof c))
          return new c(e, t, n);
        if ("number" === typeof e) {
          if ("string" === typeof t)
            throw new Error(
              "If encoding is specified then the first argument must be a string"
            );
          return f(this, e);
        }
        return u(this, e, t, n);
      }
      function u(e, t, n, r) {
        if ("number" === typeof t)
          throw new TypeError('"value" argument must not be a number');
        return "undefined" !== typeof ArrayBuffer && t instanceof ArrayBuffer
          ? (function (e, t, n, r) {
              if ((t.byteLength, n < 0 || t.byteLength < n))
                throw new RangeError("'offset' is out of bounds");
              if (t.byteLength < n + (r || 0))
                throw new RangeError("'length' is out of bounds");
              t =
                void 0 === n && void 0 === r
                  ? new Uint8Array(t)
                  : void 0 === r
                  ? new Uint8Array(t, n)
                  : new Uint8Array(t, n, r);
              c.TYPED_ARRAY_SUPPORT
                ? ((e = t).__proto__ = c.prototype)
                : (e = p(e, t));
              return e;
            })(e, t, n, r)
          : "string" === typeof t
          ? (function (e, t, n) {
              ("string" === typeof n && "" !== n) || (n = "utf8");
              if (!c.isEncoding(n))
                throw new TypeError(
                  '"encoding" must be a valid string encoding'
                );
              var r = 0 | h(t, n),
                i = (e = s(e, r)).write(t, n);
              i !== r && (e = e.slice(0, i));
              return e;
            })(e, t, n)
          : (function (e, t) {
              if (c.isBuffer(t)) {
                var n = 0 | d(t.length);
                return 0 === (e = s(e, n)).length || t.copy(e, 0, 0, n), e;
              }
              if (t) {
                if (
                  ("undefined" !== typeof ArrayBuffer &&
                    t.buffer instanceof ArrayBuffer) ||
                  "length" in t
                )
                  return "number" !== typeof t.length || (r = t.length) !== r
                    ? s(e, 0)
                    : p(e, t);
                if ("Buffer" === t.type && o(t.data)) return p(e, t.data);
              }
              var r;
              throw new TypeError(
                "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
              );
            })(e, t);
      }
      function l(e) {
        if ("number" !== typeof e)
          throw new TypeError('"size" argument must be a number');
        if (e < 0) throw new RangeError('"size" argument must not be negative');
      }
      function f(e, t) {
        if ((l(t), (e = s(e, t < 0 ? 0 : 0 | d(t))), !c.TYPED_ARRAY_SUPPORT))
          for (var n = 0; n < t; ++n) e[n] = 0;
        return e;
      }
      function p(e, t) {
        var n = t.length < 0 ? 0 : 0 | d(t.length);
        e = s(e, n);
        for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
        return e;
      }
      function d(e) {
        if (e >= a())
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              a().toString(16) +
              " bytes"
          );
        return 0 | e;
      }
      function h(e, t) {
        if (c.isBuffer(e)) return e.length;
        if (
          "undefined" !== typeof ArrayBuffer &&
          "function" === typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
        )
          return e.byteLength;
        "string" !== typeof e && (e = "" + e);
        var n = e.length;
        if (0 === n) return 0;
        for (var r = !1; ; )
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return n;
            case "utf8":
            case "utf-8":
            case void 0:
              return V(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * n;
            case "hex":
              return n >>> 1;
            case "base64":
              return B(e).length;
            default:
              if (r) return V(e).length;
              (t = ("" + t).toLowerCase()), (r = !0);
          }
      }
      function v(e, t, n) {
        var r = !1;
        if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
        if (((void 0 === n || n > this.length) && (n = this.length), n <= 0))
          return "";
        if ((n >>>= 0) <= (t >>>= 0)) return "";
        for (e || (e = "utf8"); ; )
          switch (e) {
            case "hex":
              return x(this, t, n);
            case "utf8":
            case "utf-8":
              return S(this, t, n);
            case "ascii":
              return I(this, t, n);
            case "latin1":
            case "binary":
              return k(this, t, n);
            case "base64":
              return N(this, t, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return A(this, t, n);
            default:
              if (r) throw new TypeError("Unknown encoding: " + e);
              (e = (e + "").toLowerCase()), (r = !0);
          }
      }
      function y(e, t, n) {
        var r = e[t];
        (e[t] = e[n]), (e[n] = r);
      }
      function m(e, t, n, r, i) {
        if (0 === e.length) return -1;
        if (
          ("string" === typeof n
            ? ((r = n), (n = 0))
            : n > 2147483647
            ? (n = 2147483647)
            : n < -2147483648 && (n = -2147483648),
          (n = +n),
          isNaN(n) && (n = i ? 0 : e.length - 1),
          n < 0 && (n = e.length + n),
          n >= e.length)
        ) {
          if (i) return -1;
          n = e.length - 1;
        } else if (n < 0) {
          if (!i) return -1;
          n = 0;
        }
        if (("string" === typeof t && (t = c.from(t, r)), c.isBuffer(t)))
          return 0 === t.length ? -1 : g(e, t, n, r, i);
        if ("number" === typeof t)
          return (
            (t &= 255),
            c.TYPED_ARRAY_SUPPORT &&
            "function" === typeof Uint8Array.prototype.indexOf
              ? i
                ? Uint8Array.prototype.indexOf.call(e, t, n)
                : Uint8Array.prototype.lastIndexOf.call(e, t, n)
              : g(e, [t], n, r, i)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function g(e, t, n, r, i) {
        var o,
          a = 1,
          s = e.length,
          c = t.length;
        if (
          void 0 !== r &&
          ("ucs2" === (r = String(r).toLowerCase()) ||
            "ucs-2" === r ||
            "utf16le" === r ||
            "utf-16le" === r)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (a = 2), (s /= 2), (c /= 2), (n /= 2);
        }
        function u(e, t) {
          return 1 === a ? e[t] : e.readUInt16BE(t * a);
        }
        if (i) {
          var l = -1;
          for (o = n; o < s; o++)
            if (u(e, o) === u(t, -1 === l ? 0 : o - l)) {
              if ((-1 === l && (l = o), o - l + 1 === c)) return l * a;
            } else -1 !== l && (o -= o - l), (l = -1);
        } else
          for (n + c > s && (n = s - c), o = n; o >= 0; o--) {
            for (var f = !0, p = 0; p < c; p++)
              if (u(e, o + p) !== u(t, p)) {
                f = !1;
                break;
              }
            if (f) return o;
          }
        return -1;
      }
      function b(e, t, n, r) {
        n = Number(n) || 0;
        var i = e.length - n;
        r ? (r = Number(r)) > i && (r = i) : (r = i);
        var o = t.length;
        if (o % 2 !== 0) throw new TypeError("Invalid hex string");
        r > o / 2 && (r = o / 2);
        for (var a = 0; a < r; ++a) {
          var s = parseInt(t.substr(2 * a, 2), 16);
          if (isNaN(s)) return a;
          e[n + a] = s;
        }
        return a;
      }
      function E(e, t, n, r) {
        return G(V(t, e.length - n), e, n, r);
      }
      function T(e, t, n, r) {
        return G(
          (function (e) {
            for (var t = [], n = 0; n < e.length; ++n)
              t.push(255 & e.charCodeAt(n));
            return t;
          })(t),
          e,
          n,
          r
        );
      }
      function _(e, t, n, r) {
        return T(e, t, n, r);
      }
      function w(e, t, n, r) {
        return G(B(t), e, n, r);
      }
      function O(e, t, n, r) {
        return G(
          (function (e, t) {
            for (
              var n, r, i, o = [], a = 0;
              a < e.length && !((t -= 2) < 0);
              ++a
            )
              (n = e.charCodeAt(a)),
                (r = n >> 8),
                (i = n % 256),
                o.push(i),
                o.push(r);
            return o;
          })(t, e.length - n),
          e,
          n,
          r
        );
      }
      function N(e, t, n) {
        return 0 === t && n === e.length
          ? r.fromByteArray(e)
          : r.fromByteArray(e.slice(t, n));
      }
      function S(e, t, n) {
        n = Math.min(e.length, n);
        for (var r = [], i = t; i < n; ) {
          var o,
            a,
            s,
            c,
            u = e[i],
            l = null,
            f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
          if (i + f <= n)
            switch (f) {
              case 1:
                u < 128 && (l = u);
                break;
              case 2:
                128 === (192 & (o = e[i + 1])) &&
                  (c = ((31 & u) << 6) | (63 & o)) > 127 &&
                  (l = c);
                break;
              case 3:
                (o = e[i + 1]),
                  (a = e[i + 2]),
                  128 === (192 & o) &&
                    128 === (192 & a) &&
                    (c = ((15 & u) << 12) | ((63 & o) << 6) | (63 & a)) >
                      2047 &&
                    (c < 55296 || c > 57343) &&
                    (l = c);
                break;
              case 4:
                (o = e[i + 1]),
                  (a = e[i + 2]),
                  (s = e[i + 3]),
                  128 === (192 & o) &&
                    128 === (192 & a) &&
                    128 === (192 & s) &&
                    (c =
                      ((15 & u) << 18) |
                      ((63 & o) << 12) |
                      ((63 & a) << 6) |
                      (63 & s)) > 65535 &&
                    c < 1114112 &&
                    (l = c);
            }
          null === l
            ? ((l = 65533), (f = 1))
            : l > 65535 &&
              ((l -= 65536),
              r.push(((l >>> 10) & 1023) | 55296),
              (l = 56320 | (1023 & l))),
            r.push(l),
            (i += f);
        }
        return (function (e) {
          var t = e.length;
          if (t <= 4096) return String.fromCharCode.apply(String, e);
          var n = "",
            r = 0;
          for (; r < t; )
            n += String.fromCharCode.apply(String, e.slice(r, (r += 4096)));
          return n;
        })(r);
      }
      (t.Buffer = c),
        (t.SlowBuffer = function (e) {
          +e != e && (e = 0);
          return c.alloc(+e);
        }),
        (t.INSPECT_MAX_BYTES = 50),
        (c.TYPED_ARRAY_SUPPORT =
          void 0 !== e.TYPED_ARRAY_SUPPORT
            ? e.TYPED_ARRAY_SUPPORT
            : (function () {
                try {
                  var e = new Uint8Array(1);
                  return (
                    (e.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42;
                      },
                    }),
                    42 === e.foo() &&
                      "function" === typeof e.subarray &&
                      0 === e.subarray(1, 1).byteLength
                  );
                } catch (t) {
                  return !1;
                }
              })()),
        (t.kMaxLength = a()),
        (c.poolSize = 8192),
        (c._augment = function (e) {
          return (e.__proto__ = c.prototype), e;
        }),
        (c.from = function (e, t, n) {
          return u(null, e, t, n);
        }),
        c.TYPED_ARRAY_SUPPORT &&
          ((c.prototype.__proto__ = Uint8Array.prototype),
          (c.__proto__ = Uint8Array),
          "undefined" !== typeof Symbol &&
            Symbol.species &&
            c[Symbol.species] === c &&
            Object.defineProperty(c, Symbol.species, {
              value: null,
              configurable: !0,
            })),
        (c.alloc = function (e, t, n) {
          return (function (e, t, n, r) {
            return (
              l(t),
              t <= 0
                ? s(e, t)
                : void 0 !== n
                ? "string" === typeof r
                  ? s(e, t).fill(n, r)
                  : s(e, t).fill(n)
                : s(e, t)
            );
          })(null, e, t, n);
        }),
        (c.allocUnsafe = function (e) {
          return f(null, e);
        }),
        (c.allocUnsafeSlow = function (e) {
          return f(null, e);
        }),
        (c.isBuffer = function (e) {
          return !(null == e || !e._isBuffer);
        }),
        (c.compare = function (e, t) {
          if (!c.isBuffer(e) || !c.isBuffer(t))
            throw new TypeError("Arguments must be Buffers");
          if (e === t) return 0;
          for (
            var n = e.length, r = t.length, i = 0, o = Math.min(n, r);
            i < o;
            ++i
          )
            if (e[i] !== t[i]) {
              (n = e[i]), (r = t[i]);
              break;
            }
          return n < r ? -1 : r < n ? 1 : 0;
        }),
        (c.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (c.concat = function (e, t) {
          if (!o(e))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return c.alloc(0);
          var n;
          if (void 0 === t)
            for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
          var r = c.allocUnsafe(t),
            i = 0;
          for (n = 0; n < e.length; ++n) {
            var a = e[n];
            if (!c.isBuffer(a))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            a.copy(r, i), (i += a.length);
          }
          return r;
        }),
        (c.byteLength = h),
        (c.prototype._isBuffer = !0),
        (c.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 !== 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var t = 0; t < e; t += 2) y(this, t, t + 1);
          return this;
        }),
        (c.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var t = 0; t < e; t += 4)
            y(this, t, t + 3), y(this, t + 1, t + 2);
          return this;
        }),
        (c.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var t = 0; t < e; t += 8)
            y(this, t, t + 7),
              y(this, t + 1, t + 6),
              y(this, t + 2, t + 5),
              y(this, t + 3, t + 4);
          return this;
        }),
        (c.prototype.toString = function () {
          var e = 0 | this.length;
          return 0 === e
            ? ""
            : 0 === arguments.length
            ? S(this, 0, e)
            : v.apply(this, arguments);
        }),
        (c.prototype.equals = function (e) {
          if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          return this === e || 0 === c.compare(this, e);
        }),
        (c.prototype.inspect = function () {
          var e = "",
            n = t.INSPECT_MAX_BYTES;
          return (
            this.length > 0 &&
              ((e = this.toString("hex", 0, n).match(/.{2}/g).join(" ")),
              this.length > n && (e += " ... ")),
            "<Buffer " + e + ">"
          );
        }),
        (c.prototype.compare = function (e, t, n, r, i) {
          if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          if (
            (void 0 === t && (t = 0),
            void 0 === n && (n = e ? e.length : 0),
            void 0 === r && (r = 0),
            void 0 === i && (i = this.length),
            t < 0 || n > e.length || r < 0 || i > this.length)
          )
            throw new RangeError("out of range index");
          if (r >= i && t >= n) return 0;
          if (r >= i) return -1;
          if (t >= n) return 1;
          if (this === e) return 0;
          for (
            var o = (i >>>= 0) - (r >>>= 0),
              a = (n >>>= 0) - (t >>>= 0),
              s = Math.min(o, a),
              u = this.slice(r, i),
              l = e.slice(t, n),
              f = 0;
            f < s;
            ++f
          )
            if (u[f] !== l[f]) {
              (o = u[f]), (a = l[f]);
              break;
            }
          return o < a ? -1 : a < o ? 1 : 0;
        }),
        (c.prototype.includes = function (e, t, n) {
          return -1 !== this.indexOf(e, t, n);
        }),
        (c.prototype.indexOf = function (e, t, n) {
          return m(this, e, t, n, !0);
        }),
        (c.prototype.lastIndexOf = function (e, t, n) {
          return m(this, e, t, n, !1);
        }),
        (c.prototype.write = function (e, t, n, r) {
          if (void 0 === t) (r = "utf8"), (n = this.length), (t = 0);
          else if (void 0 === n && "string" === typeof t)
            (r = t), (n = this.length), (t = 0);
          else {
            if (!isFinite(t))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            (t |= 0),
              isFinite(n)
                ? ((n |= 0), void 0 === r && (r = "utf8"))
                : ((r = n), (n = void 0));
          }
          var i = this.length - t;
          if (
            ((void 0 === n || n > i) && (n = i),
            (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          r || (r = "utf8");
          for (var o = !1; ; )
            switch (r) {
              case "hex":
                return b(this, e, t, n);
              case "utf8":
              case "utf-8":
                return E(this, e, t, n);
              case "ascii":
                return T(this, e, t, n);
              case "latin1":
              case "binary":
                return _(this, e, t, n);
              case "base64":
                return w(this, e, t, n);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return O(this, e, t, n);
              default:
                if (o) throw new TypeError("Unknown encoding: " + r);
                (r = ("" + r).toLowerCase()), (o = !0);
            }
        }),
        (c.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      function I(e, t, n) {
        var r = "";
        n = Math.min(e.length, n);
        for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
        return r;
      }
      function k(e, t, n) {
        var r = "";
        n = Math.min(e.length, n);
        for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
        return r;
      }
      function x(e, t, n) {
        var r = e.length;
        (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
        for (var i = "", o = t; o < n; ++o) i += U(e[o]);
        return i;
      }
      function A(e, t, n) {
        for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2)
          i += String.fromCharCode(r[o] + 256 * r[o + 1]);
        return i;
      }
      function D(e, t, n) {
        if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + t > n)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function j(e, t, n, r, i, o) {
        if (!c.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < o)
          throw new RangeError('"value" argument is out of bounds');
        if (n + r > e.length) throw new RangeError("Index out of range");
      }
      function R(e, t, n, r) {
        t < 0 && (t = 65535 + t + 1);
        for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i)
          e[n + i] =
            (t & (255 << (8 * (r ? i : 1 - i)))) >>> (8 * (r ? i : 1 - i));
      }
      function L(e, t, n, r) {
        t < 0 && (t = 4294967295 + t + 1);
        for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i)
          e[n + i] = (t >>> (8 * (r ? i : 3 - i))) & 255;
      }
      function P(e, t, n, r, i, o) {
        if (n + r > e.length) throw new RangeError("Index out of range");
        if (n < 0) throw new RangeError("Index out of range");
      }
      function F(e, t, n, r, o) {
        return o || P(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4;
      }
      function C(e, t, n, r, o) {
        return o || P(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8;
      }
      (c.prototype.slice = function (e, t) {
        var n,
          r = this.length;
        if (
          ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
          (t = void 0 === t ? r : ~~t) < 0
            ? (t += r) < 0 && (t = 0)
            : t > r && (t = r),
          t < e && (t = e),
          c.TYPED_ARRAY_SUPPORT)
        )
          (n = this.subarray(e, t)).__proto__ = c.prototype;
        else {
          var i = t - e;
          n = new c(i, void 0);
          for (var o = 0; o < i; ++o) n[o] = this[o + e];
        }
        return n;
      }),
        (c.prototype.readUIntLE = function (e, t, n) {
          (e |= 0), (t |= 0), n || D(e, t, this.length);
          for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
            r += this[e + o] * i;
          return r;
        }),
        (c.prototype.readUIntBE = function (e, t, n) {
          (e |= 0), (t |= 0), n || D(e, t, this.length);
          for (var r = this[e + --t], i = 1; t > 0 && (i *= 256); )
            r += this[e + --t] * i;
          return r;
        }),
        (c.prototype.readUInt8 = function (e, t) {
          return t || D(e, 1, this.length), this[e];
        }),
        (c.prototype.readUInt16LE = function (e, t) {
          return t || D(e, 2, this.length), this[e] | (this[e + 1] << 8);
        }),
        (c.prototype.readUInt16BE = function (e, t) {
          return t || D(e, 2, this.length), (this[e] << 8) | this[e + 1];
        }),
        (c.prototype.readUInt32LE = function (e, t) {
          return (
            t || D(e, 4, this.length),
            (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
              16777216 * this[e + 3]
          );
        }),
        (c.prototype.readUInt32BE = function (e, t) {
          return (
            t || D(e, 4, this.length),
            16777216 * this[e] +
              ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
          );
        }),
        (c.prototype.readIntLE = function (e, t, n) {
          (e |= 0), (t |= 0), n || D(e, t, this.length);
          for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
            r += this[e + o] * i;
          return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
        }),
        (c.prototype.readIntBE = function (e, t, n) {
          (e |= 0), (t |= 0), n || D(e, t, this.length);
          for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256); )
            o += this[e + --r] * i;
          return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
        }),
        (c.prototype.readInt8 = function (e, t) {
          return (
            t || D(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
          );
        }),
        (c.prototype.readInt16LE = function (e, t) {
          t || D(e, 2, this.length);
          var n = this[e] | (this[e + 1] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (c.prototype.readInt16BE = function (e, t) {
          t || D(e, 2, this.length);
          var n = this[e + 1] | (this[e] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (c.prototype.readInt32LE = function (e, t) {
          return (
            t || D(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (c.prototype.readInt32BE = function (e, t) {
          return (
            t || D(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (c.prototype.readFloatLE = function (e, t) {
          return t || D(e, 4, this.length), i.read(this, e, !0, 23, 4);
        }),
        (c.prototype.readFloatBE = function (e, t) {
          return t || D(e, 4, this.length), i.read(this, e, !1, 23, 4);
        }),
        (c.prototype.readDoubleLE = function (e, t) {
          return t || D(e, 8, this.length), i.read(this, e, !0, 52, 8);
        }),
        (c.prototype.readDoubleBE = function (e, t) {
          return t || D(e, 8, this.length), i.read(this, e, !1, 52, 8);
        }),
        (c.prototype.writeUIntLE = function (e, t, n, r) {
          ((e = +e), (t |= 0), (n |= 0), r) ||
            j(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
          var i = 1,
            o = 0;
          for (this[t] = 255 & e; ++o < n && (i *= 256); )
            this[t + o] = (e / i) & 255;
          return t + n;
        }),
        (c.prototype.writeUIntBE = function (e, t, n, r) {
          ((e = +e), (t |= 0), (n |= 0), r) ||
            j(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
          var i = n - 1,
            o = 1;
          for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
            this[t + i] = (e / o) & 255;
          return t + n;
        }),
        (c.prototype.writeUInt8 = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || j(this, e, t, 1, 255, 0),
            c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (c.prototype.writeUInt16LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || j(this, e, t, 2, 65535, 0),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : R(this, e, t, !0),
            t + 2
          );
        }),
        (c.prototype.writeUInt16BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || j(this, e, t, 2, 65535, 0),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : R(this, e, t, !1),
            t + 2
          );
        }),
        (c.prototype.writeUInt32LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || j(this, e, t, 4, 4294967295, 0),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t + 3] = e >>> 24),
                (this[t + 2] = e >>> 16),
                (this[t + 1] = e >>> 8),
                (this[t] = 255 & e))
              : L(this, e, t, !0),
            t + 4
          );
        }),
        (c.prototype.writeUInt32BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || j(this, e, t, 4, 4294967295, 0),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : L(this, e, t, !1),
            t + 4
          );
        }),
        (c.prototype.writeIntLE = function (e, t, n, r) {
          if (((e = +e), (t |= 0), !r)) {
            var i = Math.pow(2, 8 * n - 1);
            j(this, e, t, n, i - 1, -i);
          }
          var o = 0,
            a = 1,
            s = 0;
          for (this[t] = 255 & e; ++o < n && (a *= 256); )
            e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1),
              (this[t + o] = (((e / a) >> 0) - s) & 255);
          return t + n;
        }),
        (c.prototype.writeIntBE = function (e, t, n, r) {
          if (((e = +e), (t |= 0), !r)) {
            var i = Math.pow(2, 8 * n - 1);
            j(this, e, t, n, i - 1, -i);
          }
          var o = n - 1,
            a = 1,
            s = 0;
          for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); )
            e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1),
              (this[t + o] = (((e / a) >> 0) - s) & 255);
          return t + n;
        }),
        (c.prototype.writeInt8 = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || j(this, e, t, 1, 127, -128),
            c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (c.prototype.writeInt16LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || j(this, e, t, 2, 32767, -32768),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : R(this, e, t, !0),
            t + 2
          );
        }),
        (c.prototype.writeInt16BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || j(this, e, t, 2, 32767, -32768),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : R(this, e, t, !1),
            t + 2
          );
        }),
        (c.prototype.writeInt32LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || j(this, e, t, 4, 2147483647, -2147483648),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                (this[t + 2] = e >>> 16),
                (this[t + 3] = e >>> 24))
              : L(this, e, t, !0),
            t + 4
          );
        }),
        (c.prototype.writeInt32BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || j(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : L(this, e, t, !1),
            t + 4
          );
        }),
        (c.prototype.writeFloatLE = function (e, t, n) {
          return F(this, e, t, !0, n);
        }),
        (c.prototype.writeFloatBE = function (e, t, n) {
          return F(this, e, t, !1, n);
        }),
        (c.prototype.writeDoubleLE = function (e, t, n) {
          return C(this, e, t, !0, n);
        }),
        (c.prototype.writeDoubleBE = function (e, t, n) {
          return C(this, e, t, !1, n);
        }),
        (c.prototype.copy = function (e, t, n, r) {
          if (
            (n || (n = 0),
            r || 0 === r || (r = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            r > 0 && r < n && (r = n),
            r === n)
          )
            return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError("targetStart out of bounds");
          if (n < 0 || n >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (r < 0) throw new RangeError("sourceEnd out of bounds");
          r > this.length && (r = this.length),
            e.length - t < r - n && (r = e.length - t + n);
          var i,
            o = r - n;
          if (this === e && n < t && t < r)
            for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];
          else if (o < 1e3 || !c.TYPED_ARRAY_SUPPORT)
            for (i = 0; i < o; ++i) e[i + t] = this[i + n];
          else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
          return o;
        }),
        (c.prototype.fill = function (e, t, n, r) {
          if ("string" === typeof e) {
            if (
              ("string" === typeof t
                ? ((r = t), (t = 0), (n = this.length))
                : "string" === typeof n && ((r = n), (n = this.length)),
              1 === e.length)
            ) {
              var i = e.charCodeAt(0);
              i < 256 && (e = i);
            }
            if (void 0 !== r && "string" !== typeof r)
              throw new TypeError("encoding must be a string");
            if ("string" === typeof r && !c.isEncoding(r))
              throw new TypeError("Unknown encoding: " + r);
          } else "number" === typeof e && (e &= 255);
          if (t < 0 || this.length < t || this.length < n)
            throw new RangeError("Out of range index");
          if (n <= t) return this;
          var o;
          if (
            ((t >>>= 0),
            (n = void 0 === n ? this.length : n >>> 0),
            e || (e = 0),
            "number" === typeof e)
          )
            for (o = t; o < n; ++o) this[o] = e;
          else {
            var a = c.isBuffer(e) ? e : V(new c(e, r).toString()),
              s = a.length;
            for (o = 0; o < n - t; ++o) this[o + t] = a[o % s];
          }
          return this;
        });
      var M = /[^+\/0-9A-Za-z-_]/g;
      function U(e) {
        return e < 16 ? "0" + e.toString(16) : e.toString(16);
      }
      function V(e, t) {
        var n;
        t = t || 1 / 0;
        for (var r = e.length, i = null, o = [], a = 0; a < r; ++a) {
          if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
            if (!i) {
              if (n > 56319) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              if (a + 1 === r) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = n;
              continue;
            }
            if (n < 56320) {
              (t -= 3) > -1 && o.push(239, 191, 189), (i = n);
              continue;
            }
            n = 65536 + (((i - 55296) << 10) | (n - 56320));
          } else i && (t -= 3) > -1 && o.push(239, 191, 189);
          if (((i = null), n < 128)) {
            if ((t -= 1) < 0) break;
            o.push(n);
          } else if (n < 2048) {
            if ((t -= 2) < 0) break;
            o.push((n >> 6) | 192, (63 & n) | 128);
          } else if (n < 65536) {
            if ((t -= 3) < 0) break;
            o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
          } else {
            if (!(n < 1114112)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;
            o.push(
              (n >> 18) | 240,
              ((n >> 12) & 63) | 128,
              ((n >> 6) & 63) | 128,
              (63 & n) | 128
            );
          }
        }
        return o;
      }
      function B(e) {
        return r.toByteArray(
          (function (e) {
            if (
              (e = (function (e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
              })(e).replace(M, "")).length < 2
            )
              return "";
            for (; e.length % 4 !== 0; ) e += "=";
            return e;
          })(e)
        );
      }
      function G(e, t, n, r) {
        for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i)
          t[i + n] = e[i];
        return i;
      }
    }.call(this, n(13)));
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      var t = e.split(/\r\n|[\n\r]/g),
        n = (function (e) {
          for (var t = null, n = 1; n < e.length; n++) {
            var r = e[n],
              o = i(r);
            if (o !== r.length && (null === t || o < t) && 0 === (t = o)) break;
          }
          return null === t ? 0 : t;
        })(t);
      if (0 !== n) for (var r = 1; r < t.length; r++) t[r] = t[r].slice(n);
      for (; t.length > 0 && o(t[0]); ) t.shift();
      for (; t.length > 0 && o(t[t.length - 1]); ) t.pop();
      return t.join("\n");
    }
    function i(e) {
      for (var t = 0; t < e.length && (" " === e[t] || "\t" === e[t]); ) t++;
      return t;
    }
    function o(e) {
      return i(e) === e.length;
    }
    function a(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = -1 === e.indexOf("\n"),
        i = " " === e[0] || "\t" === e[0],
        o = '"' === e[e.length - 1],
        a = "\\" === e[e.length - 1],
        s = !r || o || a || n,
        c = "";
      return (
        !s || (r && i) || (c += "\n" + t),
        (c += t ? e.replace(/\n/g, "\n" + t) : e),
        s && (c += "\n"),
        '"""' + c.replace(/"""/g, '\\"""') + '"""'
      );
    }
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
  },
  function (e, t, n) {
    "use strict";
    var r = n(48);
    n.o(r, "LogLevel") &&
      n.d(t, "LogLevel", function () {
        return r.LogLevel;
      });
    var i = n(49);
    n.o(i, "LogLevel") &&
      n.d(t, "LogLevel", function () {
        return i.LogLevel;
      });
    var o = n(50);
    n.o(o, "LogLevel") &&
      n.d(t, "LogLevel", function () {
        return o.LogLevel;
      });
    var a = n(51);
    n.o(a, "LogLevel") &&
      n.d(t, "LogLevel", function () {
        return a.LogLevel;
      });
    var s = n(52);
    n.o(s, "LogLevel") &&
      n.d(t, "LogLevel", function () {
        return s.LogLevel;
      });
    var c = n(53);
    n.o(c, "LogLevel") &&
      n.d(t, "LogLevel", function () {
        return c.LogLevel;
      });
    var u = n(54);
    n.d(t, "LogLevel", function () {
      return u.a;
    });
    n(55), n(56), n(57), n(58), n(59), n(60);
  },
  function (e, t, n) {
    var r = n(18),
      i = r.Buffer;
    function o(e, t) {
      for (var n in e) t[n] = e[n];
    }
    function a(e, t, n) {
      return i(e, t, n);
    }
    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
      ? (e.exports = r)
      : (o(r, t), (t.Buffer = a)),
      (a.prototype = Object.create(i.prototype)),
      o(i, a),
      (a.from = function (e, t, n) {
        if ("number" === typeof e)
          throw new TypeError("Argument must not be a number");
        return i(e, t, n);
      }),
      (a.alloc = function (e, t, n) {
        if ("number" !== typeof e)
          throw new TypeError("Argument must be a number");
        var r = i(e);
        return (
          void 0 !== t
            ? "string" === typeof n
              ? r.fill(t, n)
              : r.fill(t)
            : r.fill(0),
          r
        );
      }),
      (a.allocUnsafe = function (e) {
        if ("number" !== typeof e)
          throw new TypeError("Argument must be a number");
        return i(e);
      }),
      (a.allocUnsafeSlow = function (e) {
        if ("number" !== typeof e)
          throw new TypeError("Argument must be a number");
        return r.SlowBuffer(e);
      });
  },
  function (e, t, n) {
    "use strict";
    var r = n(15).codes.ERR_STREAM_PREMATURE_CLOSE;
    function i() {}
    e.exports = function e(t, n, o) {
      if ("function" === typeof n) return e(t, null, n);
      n || (n = {}),
        (o = (function (e) {
          var t = !1;
          return function () {
            if (!t) {
              t = !0;
              for (
                var n = arguments.length, r = new Array(n), i = 0;
                i < n;
                i++
              )
                r[i] = arguments[i];
              e.apply(this, r);
            }
          };
        })(o || i));
      var a = n.readable || (!1 !== n.readable && t.readable),
        s = n.writable || (!1 !== n.writable && t.writable),
        c = function () {
          t.writable || l();
        },
        u = t._writableState && t._writableState.finished,
        l = function () {
          (s = !1), (u = !0), a || o.call(t);
        },
        f = t._readableState && t._readableState.endEmitted,
        p = function () {
          (a = !1), (f = !0), s || o.call(t);
        },
        d = function (e) {
          o.call(t, e);
        },
        h = function () {
          var e;
          return a && !f
            ? ((t._readableState && t._readableState.ended) || (e = new r()),
              o.call(t, e))
            : s && !u
            ? ((t._writableState && t._writableState.ended) || (e = new r()),
              o.call(t, e))
            : void 0;
        },
        v = function () {
          t.req.on("finish", l);
        };
      return (
        !(function (e) {
          return e.setHeader && "function" === typeof e.abort;
        })(t)
          ? s && !t._writableState && (t.on("end", c), t.on("close", c))
          : (t.on("complete", l),
            t.on("abort", h),
            t.req ? v() : t.on("request", v)),
        t.on("end", p),
        t.on("finish", l),
        !1 !== n.error && t.on("error", d),
        t.on("close", h),
        function () {
          t.removeListener("complete", l),
            t.removeListener("abort", h),
            t.removeListener("request", v),
            t.req && t.req.removeListener("finish", l),
            t.removeListener("end", c),
            t.removeListener("close", c),
            t.removeListener("finish", l),
            t.removeListener("end", p),
            t.removeListener("error", d),
            t.removeListener("close", h);
        }
      );
    };
  },
  function (e, t, n) {
    "use strict";
    (function (t, r) {
      var i;
      (e.exports = N), (N.ReadableState = O);
      n(24).EventEmitter;
      var o = function (e, t) {
          return e.listeners(t).length;
        },
        a = n(25),
        s = n(18).Buffer,
        c = t.Uint8Array || function () {};
      var u,
        l = n(71);
      u = l && l.debuglog ? l.debuglog("stream") : function () {};
      var f,
        p,
        d,
        h = n(72),
        v = n(26),
        y = n(27).getHighWaterMark,
        m = n(15).codes,
        g = m.ERR_INVALID_ARG_TYPE,
        b = m.ERR_STREAM_PUSH_AFTER_EOF,
        E = m.ERR_METHOD_NOT_IMPLEMENTED,
        T = m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
      n(12)(N, a);
      var _ = v.errorOrDestroy,
        w = ["error", "close", "destroy", "pause", "resume"];
      function O(e, t, r) {
        (i = i || n(16)),
          (e = e || {}),
          "boolean" !== typeof r && (r = t instanceof i),
          (this.objectMode = !!e.objectMode),
          r && (this.objectMode = this.objectMode || !!e.readableObjectMode),
          (this.highWaterMark = y(this, e, "readableHighWaterMark", r)),
          (this.buffer = new h()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.paused = !0),
          (this.emitClose = !1 !== e.emitClose),
          (this.autoDestroy = !!e.autoDestroy),
          (this.destroyed = !1),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          e.encoding &&
            (f || (f = n(29).StringDecoder),
            (this.decoder = new f(e.encoding)),
            (this.encoding = e.encoding));
      }
      function N(e) {
        if (((i = i || n(16)), !(this instanceof N))) return new N(e);
        var t = this instanceof i;
        (this._readableState = new O(e, this, t)),
          (this.readable = !0),
          e &&
            ("function" === typeof e.read && (this._read = e.read),
            "function" === typeof e.destroy && (this._destroy = e.destroy)),
          a.call(this);
      }
      function S(e, t, n, r, i) {
        u("readableAddChunk", t);
        var o,
          a = e._readableState;
        if (null === t)
          (a.reading = !1),
            (function (e, t) {
              if ((u("onEofChunk"), t.ended)) return;
              if (t.decoder) {
                var n = t.decoder.end();
                n &&
                  n.length &&
                  (t.buffer.push(n), (t.length += t.objectMode ? 1 : n.length));
              }
              (t.ended = !0),
                t.sync
                  ? x(e)
                  : ((t.needReadable = !1),
                    t.emittedReadable || ((t.emittedReadable = !0), A(e)));
            })(e, a);
        else if (
          (i ||
            (o = (function (e, t) {
              var n;
              (r = t),
                s.isBuffer(r) ||
                  r instanceof c ||
                  "string" === typeof t ||
                  void 0 === t ||
                  e.objectMode ||
                  (n = new g("chunk", ["string", "Buffer", "Uint8Array"], t));
              var r;
              return n;
            })(a, t)),
          o)
        )
          _(e, o);
        else if (a.objectMode || (t && t.length > 0))
          if (
            ("string" === typeof t ||
              a.objectMode ||
              Object.getPrototypeOf(t) === s.prototype ||
              (t = (function (e) {
                return s.from(e);
              })(t)),
            r)
          )
            a.endEmitted ? _(e, new T()) : I(e, a, t, !0);
          else if (a.ended) _(e, new b());
          else {
            if (a.destroyed) return !1;
            (a.reading = !1),
              a.decoder && !n
                ? ((t = a.decoder.write(t)),
                  a.objectMode || 0 !== t.length ? I(e, a, t, !1) : D(e, a))
                : I(e, a, t, !1);
          }
        else r || ((a.reading = !1), D(e, a));
        return !a.ended && (a.length < a.highWaterMark || 0 === a.length);
      }
      function I(e, t, n, r) {
        t.flowing && 0 === t.length && !t.sync
          ? ((t.awaitDrain = 0), e.emit("data", n))
          : ((t.length += t.objectMode ? 1 : n.length),
            r ? t.buffer.unshift(n) : t.buffer.push(n),
            t.needReadable && x(e)),
          D(e, t);
      }
      Object.defineProperty(N.prototype, "destroyed", {
        enumerable: !1,
        get: function () {
          return (
            void 0 !== this._readableState && this._readableState.destroyed
          );
        },
        set: function (e) {
          this._readableState && (this._readableState.destroyed = e);
        },
      }),
        (N.prototype.destroy = v.destroy),
        (N.prototype._undestroy = v.undestroy),
        (N.prototype._destroy = function (e, t) {
          t(e);
        }),
        (N.prototype.push = function (e, t) {
          var n,
            r = this._readableState;
          return (
            r.objectMode
              ? (n = !0)
              : "string" === typeof e &&
                ((t = t || r.defaultEncoding) !== r.encoding &&
                  ((e = s.from(e, t)), (t = "")),
                (n = !0)),
            S(this, e, t, !1, n)
          );
        }),
        (N.prototype.unshift = function (e) {
          return S(this, e, null, !0, !1);
        }),
        (N.prototype.isPaused = function () {
          return !1 === this._readableState.flowing;
        }),
        (N.prototype.setEncoding = function (e) {
          f || (f = n(29).StringDecoder);
          var t = new f(e);
          (this._readableState.decoder = t),
            (this._readableState.encoding = this._readableState.decoder.encoding);
          for (var r = this._readableState.buffer.head, i = ""; null !== r; )
            (i += t.write(r.data)), (r = r.next);
          return (
            this._readableState.buffer.clear(),
            "" !== i && this._readableState.buffer.push(i),
            (this._readableState.length = i.length),
            this
          );
        });
      function k(e, t) {
        return e <= 0 || (0 === t.length && t.ended)
          ? 0
          : t.objectMode
          ? 1
          : e !== e
          ? t.flowing && t.length
            ? t.buffer.head.data.length
            : t.length
          : (e > t.highWaterMark &&
              (t.highWaterMark = (function (e) {
                return (
                  e >= 1073741824
                    ? (e = 1073741824)
                    : (e--,
                      (e |= e >>> 1),
                      (e |= e >>> 2),
                      (e |= e >>> 4),
                      (e |= e >>> 8),
                      (e |= e >>> 16),
                      e++),
                  e
                );
              })(e)),
            e <= t.length
              ? e
              : t.ended
              ? t.length
              : ((t.needReadable = !0), 0));
      }
      function x(e) {
        var t = e._readableState;
        u("emitReadable", t.needReadable, t.emittedReadable),
          (t.needReadable = !1),
          t.emittedReadable ||
            (u("emitReadable", t.flowing),
            (t.emittedReadable = !0),
            r.nextTick(A, e));
      }
      function A(e) {
        var t = e._readableState;
        u("emitReadable_", t.destroyed, t.length, t.ended),
          t.destroyed ||
            (!t.length && !t.ended) ||
            (e.emit("readable"), (t.emittedReadable = !1)),
          (t.needReadable =
            !t.flowing && !t.ended && t.length <= t.highWaterMark),
          F(e);
      }
      function D(e, t) {
        t.readingMore || ((t.readingMore = !0), r.nextTick(j, e, t));
      }
      function j(e, t) {
        for (
          ;
          !t.reading &&
          !t.ended &&
          (t.length < t.highWaterMark || (t.flowing && 0 === t.length));

        ) {
          var n = t.length;
          if ((u("maybeReadMore read 0"), e.read(0), n === t.length)) break;
        }
        t.readingMore = !1;
      }
      function R(e) {
        var t = e._readableState;
        (t.readableListening = e.listenerCount("readable") > 0),
          t.resumeScheduled && !t.paused
            ? (t.flowing = !0)
            : e.listenerCount("data") > 0 && e.resume();
      }
      function L(e) {
        u("readable nexttick read 0"), e.read(0);
      }
      function P(e, t) {
        u("resume", t.reading),
          t.reading || e.read(0),
          (t.resumeScheduled = !1),
          e.emit("resume"),
          F(e),
          t.flowing && !t.reading && e.read(0);
      }
      function F(e) {
        var t = e._readableState;
        for (u("flow", t.flowing); t.flowing && null !== e.read(); );
      }
      function C(e, t) {
        return 0 === t.length
          ? null
          : (t.objectMode
              ? (n = t.buffer.shift())
              : !e || e >= t.length
              ? ((n = t.decoder
                  ? t.buffer.join("")
                  : 1 === t.buffer.length
                  ? t.buffer.first()
                  : t.buffer.concat(t.length)),
                t.buffer.clear())
              : (n = t.buffer.consume(e, t.decoder)),
            n);
        var n;
      }
      function M(e) {
        var t = e._readableState;
        u("endReadable", t.endEmitted),
          t.endEmitted || ((t.ended = !0), r.nextTick(U, t, e));
      }
      function U(e, t) {
        if (
          (u("endReadableNT", e.endEmitted, e.length),
          !e.endEmitted &&
            0 === e.length &&
            ((e.endEmitted = !0),
            (t.readable = !1),
            t.emit("end"),
            e.autoDestroy))
        ) {
          var n = t._writableState;
          (!n || (n.autoDestroy && n.finished)) && t.destroy();
        }
      }
      function V(e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      }
      (N.prototype.read = function (e) {
        u("read", e), (e = parseInt(e, 10));
        var t = this._readableState,
          n = e;
        if (
          (0 !== e && (t.emittedReadable = !1),
          0 === e &&
            t.needReadable &&
            ((0 !== t.highWaterMark
              ? t.length >= t.highWaterMark
              : t.length > 0) ||
              t.ended))
        )
          return (
            u("read: emitReadable", t.length, t.ended),
            0 === t.length && t.ended ? M(this) : x(this),
            null
          );
        if (0 === (e = k(e, t)) && t.ended)
          return 0 === t.length && M(this), null;
        var r,
          i = t.needReadable;
        return (
          u("need readable", i),
          (0 === t.length || t.length - e < t.highWaterMark) &&
            u("length less than watermark", (i = !0)),
          t.ended || t.reading
            ? u("reading or ended", (i = !1))
            : i &&
              (u("do read"),
              (t.reading = !0),
              (t.sync = !0),
              0 === t.length && (t.needReadable = !0),
              this._read(t.highWaterMark),
              (t.sync = !1),
              t.reading || (e = k(n, t))),
          null === (r = e > 0 ? C(e, t) : null)
            ? ((t.needReadable = t.length <= t.highWaterMark), (e = 0))
            : ((t.length -= e), (t.awaitDrain = 0)),
          0 === t.length &&
            (t.ended || (t.needReadable = !0), n !== e && t.ended && M(this)),
          null !== r && this.emit("data", r),
          r
        );
      }),
        (N.prototype._read = function (e) {
          _(this, new E("_read()"));
        }),
        (N.prototype.pipe = function (e, t) {
          var n = this,
            i = this._readableState;
          switch (i.pipesCount) {
            case 0:
              i.pipes = e;
              break;
            case 1:
              i.pipes = [i.pipes, e];
              break;
            default:
              i.pipes.push(e);
          }
          (i.pipesCount += 1), u("pipe count=%d opts=%j", i.pipesCount, t);
          var a =
            (!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr ? c : y;
          function s(t, r) {
            u("onunpipe"),
              t === n &&
                r &&
                !1 === r.hasUnpiped &&
                ((r.hasUnpiped = !0),
                u("cleanup"),
                e.removeListener("close", h),
                e.removeListener("finish", v),
                e.removeListener("drain", l),
                e.removeListener("error", d),
                e.removeListener("unpipe", s),
                n.removeListener("end", c),
                n.removeListener("end", y),
                n.removeListener("data", p),
                (f = !0),
                !i.awaitDrain ||
                  (e._writableState && !e._writableState.needDrain) ||
                  l());
          }
          function c() {
            u("onend"), e.end();
          }
          i.endEmitted ? r.nextTick(a) : n.once("end", a), e.on("unpipe", s);
          var l = (function (e) {
            return function () {
              var t = e._readableState;
              u("pipeOnDrain", t.awaitDrain),
                t.awaitDrain && t.awaitDrain--,
                0 === t.awaitDrain && o(e, "data") && ((t.flowing = !0), F(e));
            };
          })(n);
          e.on("drain", l);
          var f = !1;
          function p(t) {
            u("ondata");
            var r = e.write(t);
            u("dest.write", r),
              !1 === r &&
                (((1 === i.pipesCount && i.pipes === e) ||
                  (i.pipesCount > 1 && -1 !== V(i.pipes, e))) &&
                  !f &&
                  (u("false write response, pause", i.awaitDrain),
                  i.awaitDrain++),
                n.pause());
          }
          function d(t) {
            u("onerror", t),
              y(),
              e.removeListener("error", d),
              0 === o(e, "error") && _(e, t);
          }
          function h() {
            e.removeListener("finish", v), y();
          }
          function v() {
            u("onfinish"), e.removeListener("close", h), y();
          }
          function y() {
            u("unpipe"), n.unpipe(e);
          }
          return (
            n.on("data", p),
            (function (e, t, n) {
              if ("function" === typeof e.prependListener)
                return e.prependListener(t, n);
              e._events && e._events[t]
                ? Array.isArray(e._events[t])
                  ? e._events[t].unshift(n)
                  : (e._events[t] = [n, e._events[t]])
                : e.on(t, n);
            })(e, "error", d),
            e.once("close", h),
            e.once("finish", v),
            e.emit("pipe", n),
            i.flowing || (u("pipe resume"), n.resume()),
            e
          );
        }),
        (N.prototype.unpipe = function (e) {
          var t = this._readableState,
            n = { hasUnpiped: !1 };
          if (0 === t.pipesCount) return this;
          if (1 === t.pipesCount)
            return (
              (e && e !== t.pipes) ||
                (e || (e = t.pipes),
                (t.pipes = null),
                (t.pipesCount = 0),
                (t.flowing = !1),
                e && e.emit("unpipe", this, n)),
              this
            );
          if (!e) {
            var r = t.pipes,
              i = t.pipesCount;
            (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
            for (var o = 0; o < i; o++)
              r[o].emit("unpipe", this, { hasUnpiped: !1 });
            return this;
          }
          var a = V(t.pipes, e);
          return (
            -1 === a ||
              (t.pipes.splice(a, 1),
              (t.pipesCount -= 1),
              1 === t.pipesCount && (t.pipes = t.pipes[0]),
              e.emit("unpipe", this, n)),
            this
          );
        }),
        (N.prototype.on = function (e, t) {
          var n = a.prototype.on.call(this, e, t),
            i = this._readableState;
          return (
            "data" === e
              ? ((i.readableListening = this.listenerCount("readable") > 0),
                !1 !== i.flowing && this.resume())
              : "readable" === e &&
                (i.endEmitted ||
                  i.readableListening ||
                  ((i.readableListening = i.needReadable = !0),
                  (i.flowing = !1),
                  (i.emittedReadable = !1),
                  u("on readable", i.length, i.reading),
                  i.length ? x(this) : i.reading || r.nextTick(L, this))),
            n
          );
        }),
        (N.prototype.addListener = N.prototype.on),
        (N.prototype.removeListener = function (e, t) {
          var n = a.prototype.removeListener.call(this, e, t);
          return "readable" === e && r.nextTick(R, this), n;
        }),
        (N.prototype.removeAllListeners = function (e) {
          var t = a.prototype.removeAllListeners.apply(this, arguments);
          return ("readable" !== e && void 0 !== e) || r.nextTick(R, this), t;
        }),
        (N.prototype.resume = function () {
          var e = this._readableState;
          return (
            e.flowing ||
              (u("resume"),
              (e.flowing = !e.readableListening),
              (function (e, t) {
                t.resumeScheduled ||
                  ((t.resumeScheduled = !0), r.nextTick(P, e, t));
              })(this, e)),
            (e.paused = !1),
            this
          );
        }),
        (N.prototype.pause = function () {
          return (
            u("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (u("pause"),
              (this._readableState.flowing = !1),
              this.emit("pause")),
            (this._readableState.paused = !0),
            this
          );
        }),
        (N.prototype.wrap = function (e) {
          var t = this,
            n = this._readableState,
            r = !1;
          for (var i in (e.on("end", function () {
            if ((u("wrapped end"), n.decoder && !n.ended)) {
              var e = n.decoder.end();
              e && e.length && t.push(e);
            }
            t.push(null);
          }),
          e.on("data", function (i) {
            (u("wrapped data"),
            n.decoder && (i = n.decoder.write(i)),
            !n.objectMode || (null !== i && void 0 !== i)) &&
              (n.objectMode || (i && i.length)) &&
              (t.push(i) || ((r = !0), e.pause()));
          }),
          e))
            void 0 === this[i] &&
              "function" === typeof e[i] &&
              (this[i] = (function (t) {
                return function () {
                  return e[t].apply(e, arguments);
                };
              })(i));
          for (var o = 0; o < w.length; o++)
            e.on(w[o], this.emit.bind(this, w[o]));
          return (
            (this._read = function (t) {
              u("wrapped _read", t), r && ((r = !1), e.resume());
            }),
            this
          );
        }),
        "function" === typeof Symbol &&
          (N.prototype[Symbol.asyncIterator] = function () {
            return void 0 === p && (p = n(75)), p(this);
          }),
        Object.defineProperty(N.prototype, "readableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._readableState.highWaterMark;
          },
        }),
        Object.defineProperty(N.prototype, "readableBuffer", {
          enumerable: !1,
          get: function () {
            return this._readableState && this._readableState.buffer;
          },
        }),
        Object.defineProperty(N.prototype, "readableFlowing", {
          enumerable: !1,
          get: function () {
            return this._readableState.flowing;
          },
          set: function (e) {
            this._readableState && (this._readableState.flowing = e);
          },
        }),
        (N._fromList = C),
        Object.defineProperty(N.prototype, "readableLength", {
          enumerable: !1,
          get: function () {
            return this._readableState.length;
          },
        }),
        "function" === typeof Symbol &&
          (N.from = function (e, t) {
            return void 0 === d && (d = n(76)), d(N, e, t);
          });
    }.call(this, n(13), n(14)));
  },
  function (e, t, n) {
    "use strict";
    var r,
      i = "object" === typeof Reflect ? Reflect : null,
      o =
        i && "function" === typeof i.apply
          ? i.apply
          : function (e, t, n) {
              return Function.prototype.apply.call(e, t, n);
            };
    r =
      i && "function" === typeof i.ownKeys
        ? i.ownKeys
        : Object.getOwnPropertySymbols
        ? function (e) {
            return Object.getOwnPropertyNames(e).concat(
              Object.getOwnPropertySymbols(e)
            );
          }
        : function (e) {
            return Object.getOwnPropertyNames(e);
          };
    var a =
      Number.isNaN ||
      function (e) {
        return e !== e;
      };
    function s() {
      s.init.call(this);
    }
    (e.exports = s),
      (e.exports.once = function (e, t) {
        return new Promise(function (n, r) {
          function i() {
            void 0 !== o && e.removeListener("error", o),
              n([].slice.call(arguments));
          }
          var o;
          "error" !== t &&
            ((o = function (n) {
              e.removeListener(t, i), r(n);
            }),
            e.once("error", o)),
            e.once(t, i);
        });
      }),
      (s.EventEmitter = s),
      (s.prototype._events = void 0),
      (s.prototype._eventsCount = 0),
      (s.prototype._maxListeners = void 0);
    var c = 10;
    function u(e) {
      if ("function" !== typeof e)
        throw new TypeError(
          'The "listener" argument must be of type Function. Received type ' +
            typeof e
        );
    }
    function l(e) {
      return void 0 === e._maxListeners
        ? s.defaultMaxListeners
        : e._maxListeners;
    }
    function f(e, t, n, r) {
      var i, o, a, s;
      if (
        (u(n),
        void 0 === (o = e._events)
          ? ((o = e._events = Object.create(null)), (e._eventsCount = 0))
          : (void 0 !== o.newListener &&
              (e.emit("newListener", t, n.listener ? n.listener : n),
              (o = e._events)),
            (a = o[t])),
        void 0 === a)
      )
        (a = o[t] = n), ++e._eventsCount;
      else if (
        ("function" === typeof a
          ? (a = o[t] = r ? [n, a] : [a, n])
          : r
          ? a.unshift(n)
          : a.push(n),
        (i = l(e)) > 0 && a.length > i && !a.warned)
      ) {
        a.warned = !0;
        var c = new Error(
          "Possible EventEmitter memory leak detected. " +
            a.length +
            " " +
            String(t) +
            " listeners added. Use emitter.setMaxListeners() to increase limit"
        );
        (c.name = "MaxListenersExceededWarning"),
          (c.emitter = e),
          (c.type = t),
          (c.count = a.length),
          (s = c),
          console && console.warn && console.warn(s);
      }
      return e;
    }
    function p() {
      if (!this.fired)
        return (
          this.target.removeListener(this.type, this.wrapFn),
          (this.fired = !0),
          0 === arguments.length
            ? this.listener.call(this.target)
            : this.listener.apply(this.target, arguments)
        );
    }
    function d(e, t, n) {
      var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
        i = p.bind(r);
      return (i.listener = n), (r.wrapFn = i), i;
    }
    function h(e, t, n) {
      var r = e._events;
      if (void 0 === r) return [];
      var i = r[t];
      return void 0 === i
        ? []
        : "function" === typeof i
        ? n
          ? [i.listener || i]
          : [i]
        : n
        ? (function (e) {
            for (var t = new Array(e.length), n = 0; n < t.length; ++n)
              t[n] = e[n].listener || e[n];
            return t;
          })(i)
        : y(i, i.length);
    }
    function v(e) {
      var t = this._events;
      if (void 0 !== t) {
        var n = t[e];
        if ("function" === typeof n) return 1;
        if (void 0 !== n) return n.length;
      }
      return 0;
    }
    function y(e, t) {
      for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
      return n;
    }
    Object.defineProperty(s, "defaultMaxListeners", {
      enumerable: !0,
      get: function () {
        return c;
      },
      set: function (e) {
        if ("number" !== typeof e || e < 0 || a(e))
          throw new RangeError(
            'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
              e +
              "."
          );
        c = e;
      },
    }),
      (s.init = function () {
        (void 0 !== this._events &&
          this._events !== Object.getPrototypeOf(this)._events) ||
          ((this._events = Object.create(null)), (this._eventsCount = 0)),
          (this._maxListeners = this._maxListeners || void 0);
      }),
      (s.prototype.setMaxListeners = function (e) {
        if ("number" !== typeof e || e < 0 || a(e))
          throw new RangeError(
            'The value of "n" is out of range. It must be a non-negative number. Received ' +
              e +
              "."
          );
        return (this._maxListeners = e), this;
      }),
      (s.prototype.getMaxListeners = function () {
        return l(this);
      }),
      (s.prototype.emit = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
        var r = "error" === e,
          i = this._events;
        if (void 0 !== i) r = r && void 0 === i.error;
        else if (!r) return !1;
        if (r) {
          var a;
          if ((t.length > 0 && (a = t[0]), a instanceof Error)) throw a;
          var s = new Error(
            "Unhandled error." + (a ? " (" + a.message + ")" : "")
          );
          throw ((s.context = a), s);
        }
        var c = i[e];
        if (void 0 === c) return !1;
        if ("function" === typeof c) o(c, this, t);
        else {
          var u = c.length,
            l = y(c, u);
          for (n = 0; n < u; ++n) o(l[n], this, t);
        }
        return !0;
      }),
      (s.prototype.addListener = function (e, t) {
        return f(this, e, t, !1);
      }),
      (s.prototype.on = s.prototype.addListener),
      (s.prototype.prependListener = function (e, t) {
        return f(this, e, t, !0);
      }),
      (s.prototype.once = function (e, t) {
        return u(t), this.on(e, d(this, e, t)), this;
      }),
      (s.prototype.prependOnceListener = function (e, t) {
        return u(t), this.prependListener(e, d(this, e, t)), this;
      }),
      (s.prototype.removeListener = function (e, t) {
        var n, r, i, o, a;
        if ((u(t), void 0 === (r = this._events))) return this;
        if (void 0 === (n = r[e])) return this;
        if (n === t || n.listener === t)
          0 === --this._eventsCount
            ? (this._events = Object.create(null))
            : (delete r[e],
              r.removeListener &&
                this.emit("removeListener", e, n.listener || t));
        else if ("function" !== typeof n) {
          for (i = -1, o = n.length - 1; o >= 0; o--)
            if (n[o] === t || n[o].listener === t) {
              (a = n[o].listener), (i = o);
              break;
            }
          if (i < 0) return this;
          0 === i
            ? n.shift()
            : (function (e, t) {
                for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                e.pop();
              })(n, i),
            1 === n.length && (r[e] = n[0]),
            void 0 !== r.removeListener &&
              this.emit("removeListener", e, a || t);
        }
        return this;
      }),
      (s.prototype.off = s.prototype.removeListener),
      (s.prototype.removeAllListeners = function (e) {
        var t, n, r;
        if (void 0 === (n = this._events)) return this;
        if (void 0 === n.removeListener)
          return (
            0 === arguments.length
              ? ((this._events = Object.create(null)), (this._eventsCount = 0))
              : void 0 !== n[e] &&
                (0 === --this._eventsCount
                  ? (this._events = Object.create(null))
                  : delete n[e]),
            this
          );
        if (0 === arguments.length) {
          var i,
            o = Object.keys(n);
          for (r = 0; r < o.length; ++r)
            "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
          return (
            this.removeAllListeners("removeListener"),
            (this._events = Object.create(null)),
            (this._eventsCount = 0),
            this
          );
        }
        if ("function" === typeof (t = n[e])) this.removeListener(e, t);
        else if (void 0 !== t)
          for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
        return this;
      }),
      (s.prototype.listeners = function (e) {
        return h(this, e, !0);
      }),
      (s.prototype.rawListeners = function (e) {
        return h(this, e, !1);
      }),
      (s.listenerCount = function (e, t) {
        return "function" === typeof e.listenerCount
          ? e.listenerCount(t)
          : v.call(e, t);
      }),
      (s.prototype.listenerCount = v),
      (s.prototype.eventNames = function () {
        return this._eventsCount > 0 ? r(this._events) : [];
      });
  },
  function (e, t, n) {
    e.exports = n(24).EventEmitter;
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      function n(e, t) {
        i(e, t), r(e);
      }
      function r(e) {
        (e._writableState && !e._writableState.emitClose) ||
          (e._readableState && !e._readableState.emitClose) ||
          e.emit("close");
      }
      function i(e, t) {
        e.emit("error", t);
      }
      e.exports = {
        destroy: function (e, o) {
          var a = this,
            s = this._readableState && this._readableState.destroyed,
            c = this._writableState && this._writableState.destroyed;
          return s || c
            ? (o
                ? o(e)
                : e &&
                  (this._writableState
                    ? this._writableState.errorEmitted ||
                      ((this._writableState.errorEmitted = !0),
                      t.nextTick(i, this, e))
                    : t.nextTick(i, this, e)),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(e || null, function (e) {
                !o && e
                  ? a._writableState
                    ? a._writableState.errorEmitted
                      ? t.nextTick(r, a)
                      : ((a._writableState.errorEmitted = !0),
                        t.nextTick(n, a, e))
                    : t.nextTick(n, a, e)
                  : o
                  ? (t.nextTick(r, a), o(e))
                  : t.nextTick(r, a);
              }),
              this);
        },
        undestroy: function () {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finalCalled = !1),
              (this._writableState.prefinished = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1));
        },
        errorOrDestroy: function (e, t) {
          var n = e._readableState,
            r = e._writableState;
          (n && n.autoDestroy) || (r && r.autoDestroy)
            ? e.destroy(t)
            : e.emit("error", t);
        },
      };
    }.call(this, n(14)));
  },
  function (e, t, n) {
    "use strict";
    var r = n(15).codes.ERR_INVALID_OPT_VALUE;
    e.exports = {
      getHighWaterMark: function (e, t, n, i) {
        var o = (function (e, t, n) {
          return null != e.highWaterMark ? e.highWaterMark : t ? e[n] : null;
        })(t, i, n);
        if (null != o) {
          if (!isFinite(o) || Math.floor(o) !== o || o < 0)
            throw new r(i ? n : "highWaterMark", o);
          return Math.floor(o);
        }
        return e.objectMode ? 16 : 16384;
      },
    };
  },
  function (e, t, n) {
    "use strict";
    (function (t, r) {
      function i(e) {
        var t = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function () {
            !(function (e, t, n) {
              var r = e.entry;
              e.entry = null;
              for (; r; ) {
                var i = r.callback;
                t.pendingcb--, i(n), (r = r.next);
              }
              t.corkedRequestsFree.next = e;
            })(t, e);
          });
      }
      var o;
      (e.exports = N), (N.WritableState = O);
      var a = { deprecate: n(74) },
        s = n(25),
        c = n(18).Buffer,
        u = t.Uint8Array || function () {};
      var l,
        f = n(26),
        p = n(27).getHighWaterMark,
        d = n(15).codes,
        h = d.ERR_INVALID_ARG_TYPE,
        v = d.ERR_METHOD_NOT_IMPLEMENTED,
        y = d.ERR_MULTIPLE_CALLBACK,
        m = d.ERR_STREAM_CANNOT_PIPE,
        g = d.ERR_STREAM_DESTROYED,
        b = d.ERR_STREAM_NULL_VALUES,
        E = d.ERR_STREAM_WRITE_AFTER_END,
        T = d.ERR_UNKNOWN_ENCODING,
        _ = f.errorOrDestroy;
      function w() {}
      function O(e, t, a) {
        (o = o || n(16)),
          (e = e || {}),
          "boolean" !== typeof a && (a = t instanceof o),
          (this.objectMode = !!e.objectMode),
          a && (this.objectMode = this.objectMode || !!e.writableObjectMode),
          (this.highWaterMark = p(this, e, "writableHighWaterMark", a)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var s = !1 === e.decodeStrings;
        (this.decodeStrings = !s),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (e) {
            !(function (e, t) {
              var n = e._writableState,
                i = n.sync,
                o = n.writecb;
              if ("function" !== typeof o) throw new y();
              if (
                ((function (e) {
                  (e.writing = !1),
                    (e.writecb = null),
                    (e.length -= e.writelen),
                    (e.writelen = 0);
                })(n),
                t)
              )
                !(function (e, t, n, i, o) {
                  --t.pendingcb,
                    n
                      ? (r.nextTick(o, i),
                        r.nextTick(D, e, t),
                        (e._writableState.errorEmitted = !0),
                        _(e, i))
                      : (o(i),
                        (e._writableState.errorEmitted = !0),
                        _(e, i),
                        D(e, t));
                })(e, n, i, t, o);
              else {
                var a = x(n) || e.destroyed;
                a ||
                  n.corked ||
                  n.bufferProcessing ||
                  !n.bufferedRequest ||
                  k(e, n),
                  i ? r.nextTick(I, e, n, a, o) : I(e, n, a, o);
              }
            })(t, e);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.emitClose = !1 !== e.emitClose),
          (this.autoDestroy = !!e.autoDestroy),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new i(this));
      }
      function N(e) {
        var t = this instanceof (o = o || n(16));
        if (!t && !l.call(N, this)) return new N(e);
        (this._writableState = new O(e, this, t)),
          (this.writable = !0),
          e &&
            ("function" === typeof e.write && (this._write = e.write),
            "function" === typeof e.writev && (this._writev = e.writev),
            "function" === typeof e.destroy && (this._destroy = e.destroy),
            "function" === typeof e.final && (this._final = e.final)),
          s.call(this);
      }
      function S(e, t, n, r, i, o, a) {
        (t.writelen = r),
          (t.writecb = a),
          (t.writing = !0),
          (t.sync = !0),
          t.destroyed
            ? t.onwrite(new g("write"))
            : n
            ? e._writev(i, t.onwrite)
            : e._write(i, o, t.onwrite),
          (t.sync = !1);
      }
      function I(e, t, n, r) {
        n ||
          (function (e, t) {
            0 === t.length &&
              t.needDrain &&
              ((t.needDrain = !1), e.emit("drain"));
          })(e, t),
          t.pendingcb--,
          r(),
          D(e, t);
      }
      function k(e, t) {
        t.bufferProcessing = !0;
        var n = t.bufferedRequest;
        if (e._writev && n && n.next) {
          var r = t.bufferedRequestCount,
            o = new Array(r),
            a = t.corkedRequestsFree;
          a.entry = n;
          for (var s = 0, c = !0; n; )
            (o[s] = n), n.isBuf || (c = !1), (n = n.next), (s += 1);
          (o.allBuffers = c),
            S(e, t, !0, t.length, o, "", a.finish),
            t.pendingcb++,
            (t.lastBufferedRequest = null),
            a.next
              ? ((t.corkedRequestsFree = a.next), (a.next = null))
              : (t.corkedRequestsFree = new i(t)),
            (t.bufferedRequestCount = 0);
        } else {
          for (; n; ) {
            var u = n.chunk,
              l = n.encoding,
              f = n.callback;
            if (
              (S(e, t, !1, t.objectMode ? 1 : u.length, u, l, f),
              (n = n.next),
              t.bufferedRequestCount--,
              t.writing)
            )
              break;
          }
          null === n && (t.lastBufferedRequest = null);
        }
        (t.bufferedRequest = n), (t.bufferProcessing = !1);
      }
      function x(e) {
        return (
          e.ending &&
          0 === e.length &&
          null === e.bufferedRequest &&
          !e.finished &&
          !e.writing
        );
      }
      function A(e, t) {
        e._final(function (n) {
          t.pendingcb--,
            n && _(e, n),
            (t.prefinished = !0),
            e.emit("prefinish"),
            D(e, t);
        });
      }
      function D(e, t) {
        var n = x(t);
        if (
          n &&
          ((function (e, t) {
            t.prefinished ||
              t.finalCalled ||
              ("function" !== typeof e._final || t.destroyed
                ? ((t.prefinished = !0), e.emit("prefinish"))
                : (t.pendingcb++, (t.finalCalled = !0), r.nextTick(A, e, t)));
          })(e, t),
          0 === t.pendingcb &&
            ((t.finished = !0), e.emit("finish"), t.autoDestroy))
        ) {
          var i = e._readableState;
          (!i || (i.autoDestroy && i.endEmitted)) && e.destroy();
        }
        return n;
      }
      n(12)(N, s),
        (O.prototype.getBuffer = function () {
          for (var e = this.bufferedRequest, t = []; e; )
            t.push(e), (e = e.next);
          return t;
        }),
        (function () {
          try {
            Object.defineProperty(O.prototype, "buffer", {
              get: a.deprecate(
                function () {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              ),
            });
          } catch (e) {}
        })(),
        "function" === typeof Symbol &&
        Symbol.hasInstance &&
        "function" === typeof Function.prototype[Symbol.hasInstance]
          ? ((l = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(N, Symbol.hasInstance, {
              value: function (e) {
                return (
                  !!l.call(this, e) ||
                  (this === N && e && e._writableState instanceof O)
                );
              },
            }))
          : (l = function (e) {
              return e instanceof this;
            }),
        (N.prototype.pipe = function () {
          _(this, new m());
        }),
        (N.prototype.write = function (e, t, n) {
          var i,
            o = this._writableState,
            a = !1,
            s = !o.objectMode && ((i = e), c.isBuffer(i) || i instanceof u);
          return (
            s &&
              !c.isBuffer(e) &&
              (e = (function (e) {
                return c.from(e);
              })(e)),
            "function" === typeof t && ((n = t), (t = null)),
            s ? (t = "buffer") : t || (t = o.defaultEncoding),
            "function" !== typeof n && (n = w),
            o.ending
              ? (function (e, t) {
                  var n = new E();
                  _(e, n), r.nextTick(t, n);
                })(this, n)
              : (s ||
                  (function (e, t, n, i) {
                    var o;
                    return (
                      null === n
                        ? (o = new b())
                        : "string" === typeof n ||
                          t.objectMode ||
                          (o = new h("chunk", ["string", "Buffer"], n)),
                      !o || (_(e, o), r.nextTick(i, o), !1)
                    );
                  })(this, o, e, n)) &&
                (o.pendingcb++,
                (a = (function (e, t, n, r, i, o) {
                  if (!n) {
                    var a = (function (e, t, n) {
                      e.objectMode ||
                        !1 === e.decodeStrings ||
                        "string" !== typeof t ||
                        (t = c.from(t, n));
                      return t;
                    })(t, r, i);
                    r !== a && ((n = !0), (i = "buffer"), (r = a));
                  }
                  var s = t.objectMode ? 1 : r.length;
                  t.length += s;
                  var u = t.length < t.highWaterMark;
                  u || (t.needDrain = !0);
                  if (t.writing || t.corked) {
                    var l = t.lastBufferedRequest;
                    (t.lastBufferedRequest = {
                      chunk: r,
                      encoding: i,
                      isBuf: n,
                      callback: o,
                      next: null,
                    }),
                      l
                        ? (l.next = t.lastBufferedRequest)
                        : (t.bufferedRequest = t.lastBufferedRequest),
                      (t.bufferedRequestCount += 1);
                  } else S(e, t, !1, s, r, i, o);
                  return u;
                })(this, o, s, e, t, n))),
            a
          );
        }),
        (N.prototype.cork = function () {
          this._writableState.corked++;
        }),
        (N.prototype.uncork = function () {
          var e = this._writableState;
          e.corked &&
            (e.corked--,
            e.writing ||
              e.corked ||
              e.bufferProcessing ||
              !e.bufferedRequest ||
              k(this, e));
        }),
        (N.prototype.setDefaultEncoding = function (e) {
          if (
            ("string" === typeof e && (e = e.toLowerCase()),
            !(
              [
                "hex",
                "utf8",
                "utf-8",
                "ascii",
                "binary",
                "base64",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "raw",
              ].indexOf((e + "").toLowerCase()) > -1
            ))
          )
            throw new T(e);
          return (this._writableState.defaultEncoding = e), this;
        }),
        Object.defineProperty(N.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(N.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
        (N.prototype._write = function (e, t, n) {
          n(new v("_write()"));
        }),
        (N.prototype._writev = null),
        (N.prototype.end = function (e, t, n) {
          var i = this._writableState;
          return (
            "function" === typeof e
              ? ((n = e), (e = null), (t = null))
              : "function" === typeof t && ((n = t), (t = null)),
            null !== e && void 0 !== e && this.write(e, t),
            i.corked && ((i.corked = 1), this.uncork()),
            i.ending ||
              (function (e, t, n) {
                (t.ending = !0),
                  D(e, t),
                  n && (t.finished ? r.nextTick(n) : e.once("finish", n));
                (t.ended = !0), (e.writable = !1);
              })(this, i, n),
            this
          );
        }),
        Object.defineProperty(N.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(N.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            );
          },
          set: function (e) {
            this._writableState && (this._writableState.destroyed = e);
          },
        }),
        (N.prototype.destroy = f.destroy),
        (N.prototype._undestroy = f.undestroy),
        (N.prototype._destroy = function (e, t) {
          t(e);
        });
    }.call(this, n(13), n(14)));
  },
  function (e, t, n) {
    "use strict";
    var r = n(21).Buffer,
      i =
        r.isEncoding ||
        function (e) {
          switch ((e = "" + e) && e.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
              return !0;
            default:
              return !1;
          }
        };
    function o(e) {
      var t;
      switch (
        ((this.encoding = (function (e) {
          var t = (function (e) {
            if (!e) return "utf8";
            for (var t; ; )
              switch (e) {
                case "utf8":
                case "utf-8":
                  return "utf8";
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return "utf16le";
                case "latin1":
                case "binary":
                  return "latin1";
                case "base64":
                case "ascii":
                case "hex":
                  return e;
                default:
                  if (t) return;
                  (e = ("" + e).toLowerCase()), (t = !0);
              }
          })(e);
          if ("string" !== typeof t && (r.isEncoding === i || !i(e)))
            throw new Error("Unknown encoding: " + e);
          return t || e;
        })(e)),
        this.encoding)
      ) {
        case "utf16le":
          (this.text = c), (this.end = u), (t = 4);
          break;
        case "utf8":
          (this.fillLast = s), (t = 4);
          break;
        case "base64":
          (this.text = l), (this.end = f), (t = 3);
          break;
        default:
          return (this.write = p), void (this.end = d);
      }
      (this.lastNeed = 0),
        (this.lastTotal = 0),
        (this.lastChar = r.allocUnsafe(t));
    }
    function a(e) {
      return e <= 127
        ? 0
        : e >> 5 === 6
        ? 2
        : e >> 4 === 14
        ? 3
        : e >> 3 === 30
        ? 4
        : e >> 6 === 2
        ? -1
        : -2;
    }
    function s(e) {
      var t = this.lastTotal - this.lastNeed,
        n = (function (e, t, n) {
          if (128 !== (192 & t[0])) return (e.lastNeed = 0), "\ufffd";
          if (e.lastNeed > 1 && t.length > 1) {
            if (128 !== (192 & t[1])) return (e.lastNeed = 1), "\ufffd";
            if (e.lastNeed > 2 && t.length > 2 && 128 !== (192 & t[2]))
              return (e.lastNeed = 2), "\ufffd";
          }
        })(this, e);
      return void 0 !== n
        ? n
        : this.lastNeed <= e.length
        ? (e.copy(this.lastChar, t, 0, this.lastNeed),
          this.lastChar.toString(this.encoding, 0, this.lastTotal))
        : (e.copy(this.lastChar, t, 0, e.length),
          void (this.lastNeed -= e.length));
    }
    function c(e, t) {
      if ((e.length - t) % 2 === 0) {
        var n = e.toString("utf16le", t);
        if (n) {
          var r = n.charCodeAt(n.length - 1);
          if (r >= 55296 && r <= 56319)
            return (
              (this.lastNeed = 2),
              (this.lastTotal = 4),
              (this.lastChar[0] = e[e.length - 2]),
              (this.lastChar[1] = e[e.length - 1]),
              n.slice(0, -1)
            );
        }
        return n;
      }
      return (
        (this.lastNeed = 1),
        (this.lastTotal = 2),
        (this.lastChar[0] = e[e.length - 1]),
        e.toString("utf16le", t, e.length - 1)
      );
    }
    function u(e) {
      var t = e && e.length ? this.write(e) : "";
      if (this.lastNeed) {
        var n = this.lastTotal - this.lastNeed;
        return t + this.lastChar.toString("utf16le", 0, n);
      }
      return t;
    }
    function l(e, t) {
      var n = (e.length - t) % 3;
      return 0 === n
        ? e.toString("base64", t)
        : ((this.lastNeed = 3 - n),
          (this.lastTotal = 3),
          1 === n
            ? (this.lastChar[0] = e[e.length - 1])
            : ((this.lastChar[0] = e[e.length - 2]),
              (this.lastChar[1] = e[e.length - 1])),
          e.toString("base64", t, e.length - n));
    }
    function f(e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed
        ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
        : t;
    }
    function p(e) {
      return e.toString(this.encoding);
    }
    function d(e) {
      return e && e.length ? this.write(e) : "";
    }
    (t.StringDecoder = o),
      (o.prototype.write = function (e) {
        if (0 === e.length) return "";
        var t, n;
        if (this.lastNeed) {
          if (void 0 === (t = this.fillLast(e))) return "";
          (n = this.lastNeed), (this.lastNeed = 0);
        } else n = 0;
        return n < e.length
          ? t
            ? t + this.text(e, n)
            : this.text(e, n)
          : t || "";
      }),
      (o.prototype.end = function (e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed ? t + "\ufffd" : t;
      }),
      (o.prototype.text = function (e, t) {
        var n = (function (e, t, n) {
          var r = t.length - 1;
          if (r < n) return 0;
          var i = a(t[r]);
          if (i >= 0) return i > 0 && (e.lastNeed = i - 1), i;
          if (--r < n || -2 === i) return 0;
          if ((i = a(t[r])) >= 0) return i > 0 && (e.lastNeed = i - 2), i;
          if (--r < n || -2 === i) return 0;
          if ((i = a(t[r])) >= 0)
            return i > 0 && (2 === i ? (i = 0) : (e.lastNeed = i - 3)), i;
          return 0;
        })(this, e, t);
        if (!this.lastNeed) return e.toString("utf8", t);
        this.lastTotal = n;
        var r = e.length - (n - this.lastNeed);
        return e.copy(this.lastChar, 0, r), e.toString("utf8", t, r);
      }),
      (o.prototype.fillLast = function (e) {
        if (this.lastNeed <= e.length)
          return (
            e.copy(
              this.lastChar,
              this.lastTotal - this.lastNeed,
              0,
              this.lastNeed
            ),
            this.lastChar.toString(this.encoding, 0, this.lastTotal)
          );
        e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
          (this.lastNeed -= e.length);
      });
  },
  function (e, t, n) {
    "use strict";
    e.exports = l;
    var r = n(15).codes,
      i = r.ERR_METHOD_NOT_IMPLEMENTED,
      o = r.ERR_MULTIPLE_CALLBACK,
      a = r.ERR_TRANSFORM_ALREADY_TRANSFORMING,
      s = r.ERR_TRANSFORM_WITH_LENGTH_0,
      c = n(16);
    function u(e, t) {
      var n = this._transformState;
      n.transforming = !1;
      var r = n.writecb;
      if (null === r) return this.emit("error", new o());
      (n.writechunk = null),
        (n.writecb = null),
        null != t && this.push(t),
        r(e);
      var i = this._readableState;
      (i.reading = !1),
        (i.needReadable || i.length < i.highWaterMark) &&
          this._read(i.highWaterMark);
    }
    function l(e) {
      if (!(this instanceof l)) return new l(e);
      c.call(this, e),
        (this._transformState = {
          afterTransform: u.bind(this),
          needTransform: !1,
          transforming: !1,
          writecb: null,
          writechunk: null,
          writeencoding: null,
        }),
        (this._readableState.needReadable = !0),
        (this._readableState.sync = !1),
        e &&
          ("function" === typeof e.transform && (this._transform = e.transform),
          "function" === typeof e.flush && (this._flush = e.flush)),
        this.on("prefinish", f);
    }
    function f() {
      var e = this;
      "function" !== typeof this._flush || this._readableState.destroyed
        ? p(this, null, null)
        : this._flush(function (t, n) {
            p(e, t, n);
          });
    }
    function p(e, t, n) {
      if (t) return e.emit("error", t);
      if ((null != n && e.push(n), e._writableState.length)) throw new s();
      if (e._transformState.transforming) throw new a();
      return e.push(null);
    }
    n(12)(l, c),
      (l.prototype.push = function (e, t) {
        return (
          (this._transformState.needTransform = !1),
          c.prototype.push.call(this, e, t)
        );
      }),
      (l.prototype._transform = function (e, t, n) {
        n(new i("_transform()"));
      }),
      (l.prototype._write = function (e, t, n) {
        var r = this._transformState;
        if (
          ((r.writecb = n),
          (r.writechunk = e),
          (r.writeencoding = t),
          !r.transforming)
        ) {
          var i = this._readableState;
          (r.needTransform || i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark);
        }
      }),
      (l.prototype._read = function (e) {
        var t = this._transformState;
        null === t.writechunk || t.transforming
          ? (t.needTransform = !0)
          : ((t.transforming = !0),
            this._transform(t.writechunk, t.writeencoding, t.afterTransform));
      }),
      (l.prototype._destroy = function (e, t) {
        c.prototype._destroy.call(this, e, function (e) {
          t(e);
        });
      });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var r = n(6);
    function i(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var o = function e(t) {
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, e),
        i(this, "id", void 0),
        i(this, "type", void 0),
        i(this, "createdAt", void 0),
        i(this, "payload", void 0),
        (this.id = t.id || Object(r.b)()),
        (this.type = t.type),
        (this.createdAt = t.createdAt || Object(r.e)()),
        (this.payload = t.payload);
    };
  },
  function (e, t) {},
  function (e, t, n) {
    "use strict";
    n(34),
      n(35),
      n(36),
      n(37),
      n(38),
      n(39),
      n(40),
      n(41),
      n(42),
      n(43),
      n(44),
      n(45),
      n(46),
      n(47);
  },
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t, n) {
    "use strict";
    var r;
    n.d(t, "a", function () {
      return r;
    }),
      (function (e) {
        (e[(e.error = 0)] = "error"),
          (e[(e.warning = 1)] = "warning"),
          (e[(e.info = 2)] = "info");
      })(r || (r = {}));
  },
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t, n) {
    "use strict";
    var r = n(12),
      i = n(66),
      o = n(21).Buffer,
      a = new Array(16);
    function s() {
      i.call(this, 64),
        (this._a = 1732584193),
        (this._b = 4023233417),
        (this._c = 2562383102),
        (this._d = 271733878);
    }
    function c(e, t) {
      return (e << t) | (e >>> (32 - t));
    }
    function u(e, t, n, r, i, o, a) {
      return (c((e + ((t & n) | (~t & r)) + i + o) | 0, a) + t) | 0;
    }
    function l(e, t, n, r, i, o, a) {
      return (c((e + ((t & r) | (n & ~r)) + i + o) | 0, a) + t) | 0;
    }
    function f(e, t, n, r, i, o, a) {
      return (c((e + (t ^ n ^ r) + i + o) | 0, a) + t) | 0;
    }
    function p(e, t, n, r, i, o, a) {
      return (c((e + (n ^ (t | ~r)) + i + o) | 0, a) + t) | 0;
    }
    r(s, i),
      (s.prototype._update = function () {
        for (var e = a, t = 0; t < 16; ++t)
          e[t] = this._block.readInt32LE(4 * t);
        var n = this._a,
          r = this._b,
          i = this._c,
          o = this._d;
        (n = u(n, r, i, o, e[0], 3614090360, 7)),
          (o = u(o, n, r, i, e[1], 3905402710, 12)),
          (i = u(i, o, n, r, e[2], 606105819, 17)),
          (r = u(r, i, o, n, e[3], 3250441966, 22)),
          (n = u(n, r, i, o, e[4], 4118548399, 7)),
          (o = u(o, n, r, i, e[5], 1200080426, 12)),
          (i = u(i, o, n, r, e[6], 2821735955, 17)),
          (r = u(r, i, o, n, e[7], 4249261313, 22)),
          (n = u(n, r, i, o, e[8], 1770035416, 7)),
          (o = u(o, n, r, i, e[9], 2336552879, 12)),
          (i = u(i, o, n, r, e[10], 4294925233, 17)),
          (r = u(r, i, o, n, e[11], 2304563134, 22)),
          (n = u(n, r, i, o, e[12], 1804603682, 7)),
          (o = u(o, n, r, i, e[13], 4254626195, 12)),
          (i = u(i, o, n, r, e[14], 2792965006, 17)),
          (n = l(
            n,
            (r = u(r, i, o, n, e[15], 1236535329, 22)),
            i,
            o,
            e[1],
            4129170786,
            5
          )),
          (o = l(o, n, r, i, e[6], 3225465664, 9)),
          (i = l(i, o, n, r, e[11], 643717713, 14)),
          (r = l(r, i, o, n, e[0], 3921069994, 20)),
          (n = l(n, r, i, o, e[5], 3593408605, 5)),
          (o = l(o, n, r, i, e[10], 38016083, 9)),
          (i = l(i, o, n, r, e[15], 3634488961, 14)),
          (r = l(r, i, o, n, e[4], 3889429448, 20)),
          (n = l(n, r, i, o, e[9], 568446438, 5)),
          (o = l(o, n, r, i, e[14], 3275163606, 9)),
          (i = l(i, o, n, r, e[3], 4107603335, 14)),
          (r = l(r, i, o, n, e[8], 1163531501, 20)),
          (n = l(n, r, i, o, e[13], 2850285829, 5)),
          (o = l(o, n, r, i, e[2], 4243563512, 9)),
          (i = l(i, o, n, r, e[7], 1735328473, 14)),
          (n = f(
            n,
            (r = l(r, i, o, n, e[12], 2368359562, 20)),
            i,
            o,
            e[5],
            4294588738,
            4
          )),
          (o = f(o, n, r, i, e[8], 2272392833, 11)),
          (i = f(i, o, n, r, e[11], 1839030562, 16)),
          (r = f(r, i, o, n, e[14], 4259657740, 23)),
          (n = f(n, r, i, o, e[1], 2763975236, 4)),
          (o = f(o, n, r, i, e[4], 1272893353, 11)),
          (i = f(i, o, n, r, e[7], 4139469664, 16)),
          (r = f(r, i, o, n, e[10], 3200236656, 23)),
          (n = f(n, r, i, o, e[13], 681279174, 4)),
          (o = f(o, n, r, i, e[0], 3936430074, 11)),
          (i = f(i, o, n, r, e[3], 3572445317, 16)),
          (r = f(r, i, o, n, e[6], 76029189, 23)),
          (n = f(n, r, i, o, e[9], 3654602809, 4)),
          (o = f(o, n, r, i, e[12], 3873151461, 11)),
          (i = f(i, o, n, r, e[15], 530742520, 16)),
          (n = p(
            n,
            (r = f(r, i, o, n, e[2], 3299628645, 23)),
            i,
            o,
            e[0],
            4096336452,
            6
          )),
          (o = p(o, n, r, i, e[7], 1126891415, 10)),
          (i = p(i, o, n, r, e[14], 2878612391, 15)),
          (r = p(r, i, o, n, e[5], 4237533241, 21)),
          (n = p(n, r, i, o, e[12], 1700485571, 6)),
          (o = p(o, n, r, i, e[3], 2399980690, 10)),
          (i = p(i, o, n, r, e[10], 4293915773, 15)),
          (r = p(r, i, o, n, e[1], 2240044497, 21)),
          (n = p(n, r, i, o, e[8], 1873313359, 6)),
          (o = p(o, n, r, i, e[15], 4264355552, 10)),
          (i = p(i, o, n, r, e[6], 2734768916, 15)),
          (r = p(r, i, o, n, e[13], 1309151649, 21)),
          (n = p(n, r, i, o, e[4], 4149444226, 6)),
          (o = p(o, n, r, i, e[11], 3174756917, 10)),
          (i = p(i, o, n, r, e[2], 718787259, 15)),
          (r = p(r, i, o, n, e[9], 3951481745, 21)),
          (this._a = (this._a + n) | 0),
          (this._b = (this._b + r) | 0),
          (this._c = (this._c + i) | 0),
          (this._d = (this._d + o) | 0);
      }),
      (s.prototype._digest = function () {
        (this._block[this._blockOffset++] = 128),
          this._blockOffset > 56 &&
            (this._block.fill(0, this._blockOffset, 64),
            this._update(),
            (this._blockOffset = 0)),
          this._block.fill(0, this._blockOffset, 56),
          this._block.writeUInt32LE(this._length[0], 56),
          this._block.writeUInt32LE(this._length[1], 60),
          this._update();
        var e = o.allocUnsafe(16);
        return (
          e.writeInt32LE(this._a, 0),
          e.writeInt32LE(this._b, 4),
          e.writeInt32LE(this._c, 8),
          e.writeInt32LE(this._d, 12),
          e
        );
      }),
      (e.exports = s);
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      var r =
          (this && this.__assign) ||
          function () {
            return (r =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          },
        i =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function a(e) {
                try {
                  c(r.next(e));
                } catch (t) {
                  o(t);
                }
              }
              function s(e) {
                try {
                  c(r.throw(e));
                } catch (t) {
                  o(t);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              c((r = r.apply(e, t || [])).next());
            });
          },
        o =
          (this && this.__generator) ||
          function (e, t) {
            var n,
              r,
              i,
              o,
              a = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: s(0), throw: s(1), return: s(2) }),
              "function" === typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function s(o) {
              return function (s) {
                return (function (o) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (i =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((i = r.return) && i.call(r), 0)
                              : r.next) &&
                          !(i = i.call(r, o[1])).done)
                      )
                        return i;
                      switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                        case 0:
                        case 1:
                          i = o;
                          break;
                        case 4:
                          return a.label++, { value: o[1], done: !1 };
                        case 5:
                          a.label++, (r = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (
                            !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                            (6 === o[0] || 2 === o[0])
                          ) {
                            a = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!i || (o[1] > i[0] && o[1] < i[3]))
                          ) {
                            a.label = o[1];
                            break;
                          }
                          if (6 === o[0] && a.label < i[1]) {
                            (a.label = i[1]), (i = o);
                            break;
                          }
                          if (i && a.label < i[2]) {
                            (a.label = i[2]), a.ops.push(o);
                            break;
                          }
                          i[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      o = t.call(e, a);
                    } catch (s) {
                      (o = [6, s]), (r = 0);
                    } finally {
                      n = i = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, s]);
              };
            }
          },
        a =
          (this && this.__spreadArrays) ||
          function () {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++)
              e += arguments[t].length;
            var r = Array(e),
              i = 0;
            for (t = 0; t < n; t++)
              for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++)
                r[i] = o[a];
            return r;
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SubscriptionClient = void 0);
      var s =
          "undefined" !== typeof e
            ? e
            : "undefined" !== typeof window
            ? window
            : {},
        c = s.WebSocket || s.MozWebSocket,
        u = n(84),
        l = n(85),
        f = n(86),
        p = n(87),
        d = n(5),
        h = n(88),
        v = n(89),
        y = n(91),
        m = n(92),
        g = n(93),
        b = (function () {
          function e(e, t, n, r) {
            var i = t || {},
              o = i.connectionCallback,
              a = void 0 === o ? void 0 : o,
              s = i.connectionParams,
              f = void 0 === s ? {} : s,
              p = i.minTimeout,
              d = void 0 === p ? m.MIN_WS_TIMEOUT : p,
              h = i.timeout,
              v = void 0 === h ? m.WS_TIMEOUT : h,
              g = i.reconnect,
              b = void 0 !== g && g,
              E = i.reconnectionAttempts,
              T = void 0 === E ? 1 / 0 : E,
              _ = i.lazy,
              w = void 0 !== _ && _,
              O = i.inactivityTimeout,
              N = void 0 === O ? 0 : O,
              S = i.wsOptionArguments,
              I = void 0 === S ? [] : S;
            if (((this.wsImpl = n || c), !this.wsImpl))
              throw new Error(
                "Unable to find native implementation, or alternative implementation for WebSocket!"
              );
            (this.wsProtocols = r || y.GRAPHQL_WS),
              (this.connectionCallback = a),
              (this.url = e),
              (this.operations = {}),
              (this.nextOperationId = 0),
              (this.minWsTimeout = d),
              (this.wsTimeout = v),
              (this.unsentMessagesQueue = []),
              (this.reconnect = b),
              (this.reconnecting = !1),
              (this.reconnectionAttempts = T),
              (this.lazy = !!w),
              (this.inactivityTimeout = N),
              (this.closedByUser = !1),
              (this.backoff = new u({ jitter: 0.5 })),
              (this.eventEmitter = new l.EventEmitter()),
              (this.middlewares = []),
              (this.client = null),
              (this.maxConnectTimeGenerator = this.createMaxConnectTimeGenerator()),
              (this.connectionParams = this.getConnectionParams(f)),
              (this.wsOptionArguments = I),
              this.lazy || this.connect();
          }
          return (
            Object.defineProperty(e.prototype, "status", {
              get: function () {
                return null === this.client
                  ? this.wsImpl.CLOSED
                  : this.client.readyState;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.close = function (e, t) {
              void 0 === e && (e = !0),
                void 0 === t && (t = !0),
                this.clearInactivityTimeout(),
                null !== this.client &&
                  ((this.closedByUser = t),
                  e &&
                    (this.clearCheckConnectionInterval(),
                    this.clearMaxConnectTimeout(),
                    this.clearTryReconnectTimeout(),
                    this.unsubscribeAll(),
                    this.sendMessage(
                      void 0,
                      g.default.GQL_CONNECTION_TERMINATE,
                      null
                    )),
                  this.client.close(),
                  (this.client.onopen = null),
                  (this.client.onclose = null),
                  (this.client.onerror = null),
                  (this.client.onmessage = null),
                  (this.client = null),
                  this.eventEmitter.emit("disconnected"),
                  e || this.tryReconnect());
            }),
            (e.prototype.request = function (e) {
              var t,
                n,
                r = this.getObserver.bind(this),
                i = this.executeOperation.bind(this),
                o = this.unsubscribe.bind(this);
              return (
                this.clearInactivityTimeout(),
                ((t = {})[v.default] = function () {
                  return this;
                }),
                (t.subscribe = function (t, a, s) {
                  var c = r(t, a, s);
                  return (
                    (n = i(e, function (e, t) {
                      null === e && null === t
                        ? c.complete && c.complete()
                        : e
                        ? c.error && c.error(e[0])
                        : c.next && c.next(t);
                    })),
                    {
                      unsubscribe: function () {
                        n && (o(n), (n = null));
                      },
                    }
                  );
                }),
                t
              );
            }),
            (e.prototype.on = function (e, t, n) {
              var r = this.eventEmitter.on(e, t, n);
              return function () {
                r.off(e, t, n);
              };
            }),
            (e.prototype.onConnected = function (e, t) {
              return this.on("connected", e, t);
            }),
            (e.prototype.onConnecting = function (e, t) {
              return this.on("connecting", e, t);
            }),
            (e.prototype.onDisconnected = function (e, t) {
              return this.on("disconnected", e, t);
            }),
            (e.prototype.onReconnected = function (e, t) {
              return this.on("reconnected", e, t);
            }),
            (e.prototype.onReconnecting = function (e, t) {
              return this.on("reconnecting", e, t);
            }),
            (e.prototype.onError = function (e, t) {
              return this.on("error", e, t);
            }),
            (e.prototype.unsubscribeAll = function () {
              var e = this;
              Object.keys(this.operations).forEach(function (t) {
                e.unsubscribe(t);
              });
            }),
            (e.prototype.applyMiddlewares = function (e) {
              var t = this;
              return new Promise(function (n, r) {
                var i, o;
                (i = a(t.middlewares)),
                  (o = t),
                  (function t(a) {
                    if (a) r(a);
                    else if (i.length > 0) {
                      var s = i.shift();
                      s && s.applyMiddleware.apply(o, [e, t]);
                    } else n(e);
                  })();
              });
            }),
            (e.prototype.use = function (e) {
              var t = this;
              return (
                e.map(function (e) {
                  if ("function" !== typeof e.applyMiddleware)
                    throw new Error(
                      "Middleware must implement the applyMiddleware function."
                    );
                  t.middlewares.push(e);
                }),
                this
              );
            }),
            (e.prototype.getConnectionParams = function (e) {
              return function () {
                return new Promise(function (t, n) {
                  if ("function" === typeof e)
                    try {
                      return t(e.call(null));
                    } catch (r) {
                      return n(r);
                    }
                  t(e);
                });
              };
            }),
            (e.prototype.executeOperation = function (e, t) {
              var n = this;
              null === this.client && this.connect();
              var r = this.generateOperationId();
              return (
                (this.operations[r] = { options: e, handler: t }),
                this.applyMiddlewares(e)
                  .then(function (e) {
                    n.checkOperationOptions(e, t),
                      n.operations[r] &&
                        ((n.operations[r] = { options: e, handler: t }),
                        n.sendMessage(r, g.default.GQL_START, e));
                  })
                  .catch(function (e) {
                    n.unsubscribe(r), t(n.formatErrors(e));
                  }),
                r
              );
            }),
            (e.prototype.getObserver = function (e, t, n) {
              return "function" === typeof e
                ? {
                    next: function (t) {
                      return e(t);
                    },
                    error: function (e) {
                      return t && t(e);
                    },
                    complete: function () {
                      return n && n();
                    },
                  }
                : e;
            }),
            (e.prototype.createMaxConnectTimeGenerator = function () {
              var e = this.minWsTimeout,
                t = this.wsTimeout;
              return new u({ min: e, max: t, factor: 1.2 });
            }),
            (e.prototype.clearCheckConnectionInterval = function () {
              this.checkConnectionIntervalId &&
                (clearInterval(this.checkConnectionIntervalId),
                (this.checkConnectionIntervalId = null));
            }),
            (e.prototype.clearMaxConnectTimeout = function () {
              this.maxConnectTimeoutId &&
                (clearTimeout(this.maxConnectTimeoutId),
                (this.maxConnectTimeoutId = null));
            }),
            (e.prototype.clearTryReconnectTimeout = function () {
              this.tryReconnectTimeoutId &&
                (clearTimeout(this.tryReconnectTimeoutId),
                (this.tryReconnectTimeoutId = null));
            }),
            (e.prototype.clearInactivityTimeout = function () {
              this.inactivityTimeoutId &&
                (clearTimeout(this.inactivityTimeoutId),
                (this.inactivityTimeoutId = null));
            }),
            (e.prototype.setInactivityTimeout = function () {
              var e = this;
              this.inactivityTimeout > 0 &&
                0 === Object.keys(this.operations).length &&
                (this.inactivityTimeoutId = setTimeout(function () {
                  0 === Object.keys(e.operations).length && e.close();
                }, this.inactivityTimeout));
            }),
            (e.prototype.checkOperationOptions = function (e, t) {
              var n = e.query,
                r = e.variables,
                i = e.operationName;
              if (!n) throw new Error("Must provide a query.");
              if (!t) throw new Error("Must provide an handler.");
              if (
                (!f.default(n) && !h.getOperationAST(n, i)) ||
                (i && !f.default(i)) ||
                (r && !p.default(r))
              )
                throw new Error(
                  "Incorrect option types. query must be a string or a document,`operationName` must be a string, and `variables` must be an object."
                );
            }),
            (e.prototype.buildMessage = function (e, t, n) {
              return {
                id: e,
                type: t,
                payload:
                  n && n.query
                    ? r(r({}, n), {
                        query:
                          "string" === typeof n.query
                            ? n.query
                            : d.print(n.query),
                      })
                    : n,
              };
            }),
            (e.prototype.formatErrors = function (e) {
              return Array.isArray(e)
                ? e
                : e && e.errors
                ? this.formatErrors(e.errors)
                : e && e.message
                ? [e]
                : [
                    {
                      name: "FormatedError",
                      message: "Unknown error",
                      originalError: e,
                    },
                  ];
            }),
            (e.prototype.sendMessage = function (e, t, n) {
              this.sendMessageRaw(this.buildMessage(e, t, n));
            }),
            (e.prototype.sendMessageRaw = function (e) {
              switch (this.status) {
                case this.wsImpl.OPEN:
                  var t = JSON.stringify(e);
                  try {
                    JSON.parse(t);
                  } catch (n) {
                    this.eventEmitter.emit(
                      "error",
                      new Error("Message must be JSON-serializable. Got: " + e)
                    );
                  }
                  this.client.send(t);
                  break;
                case this.wsImpl.CONNECTING:
                  this.unsentMessagesQueue.push(e);
                  break;
                default:
                  this.reconnecting ||
                    this.eventEmitter.emit(
                      "error",
                      new Error(
                        "A message was not sent because socket is not connected, is closing or is already closed. Message was: " +
                          JSON.stringify(e)
                      )
                    );
              }
            }),
            (e.prototype.generateOperationId = function () {
              return String(++this.nextOperationId);
            }),
            (e.prototype.tryReconnect = function () {
              var e = this;
              if (
                this.reconnect &&
                !(this.backoff.attempts >= this.reconnectionAttempts)
              ) {
                this.reconnecting ||
                  (Object.keys(this.operations).forEach(function (t) {
                    e.unsentMessagesQueue.push(
                      e.buildMessage(
                        t,
                        g.default.GQL_START,
                        e.operations[t].options
                      )
                    );
                  }),
                  (this.reconnecting = !0)),
                  this.clearTryReconnectTimeout();
                var t = this.backoff.duration();
                this.tryReconnectTimeoutId = setTimeout(function () {
                  e.connect();
                }, t);
              }
            }),
            (e.prototype.flushUnsentMessagesQueue = function () {
              var e = this;
              this.unsentMessagesQueue.forEach(function (t) {
                e.sendMessageRaw(t);
              }),
                (this.unsentMessagesQueue = []);
            }),
            (e.prototype.checkConnection = function () {
              this.wasKeepAliveReceived
                ? (this.wasKeepAliveReceived = !1)
                : this.reconnecting || this.close(!1, !0);
            }),
            (e.prototype.checkMaxConnectTimeout = function () {
              var e = this;
              this.clearMaxConnectTimeout(),
                (this.maxConnectTimeoutId = setTimeout(function () {
                  e.status !== e.wsImpl.OPEN &&
                    ((e.reconnecting = !0), e.close(!1, !0));
                }, this.maxConnectTimeGenerator.duration()));
            }),
            (e.prototype.connect = function () {
              var e,
                t = this;
              (this.client = new ((e = this.wsImpl).bind.apply(
                e,
                a([void 0, this.url, this.wsProtocols], this.wsOptionArguments)
              ))()),
                this.checkMaxConnectTimeout(),
                (this.client.onopen = function () {
                  return i(t, void 0, void 0, function () {
                    var e, t;
                    return o(this, function (n) {
                      switch (n.label) {
                        case 0:
                          if (this.status !== this.wsImpl.OPEN) return [3, 4];
                          this.clearMaxConnectTimeout(),
                            (this.closedByUser = !1),
                            this.eventEmitter.emit(
                              this.reconnecting ? "reconnecting" : "connecting"
                            ),
                            (n.label = 1);
                        case 1:
                          return (
                            n.trys.push([1, 3, , 4]),
                            [4, this.connectionParams()]
                          );
                        case 2:
                          return (
                            (e = n.sent()),
                            this.sendMessage(
                              void 0,
                              g.default.GQL_CONNECTION_INIT,
                              e
                            ),
                            this.flushUnsentMessagesQueue(),
                            [3, 4]
                          );
                        case 3:
                          return (
                            (t = n.sent()),
                            this.sendMessage(
                              void 0,
                              g.default.GQL_CONNECTION_ERROR,
                              t
                            ),
                            this.flushUnsentMessagesQueue(),
                            [3, 4]
                          );
                        case 4:
                          return [2];
                      }
                    });
                  });
                }),
                (this.client.onclose = function () {
                  t.closedByUser || t.close(!1, !1);
                }),
                (this.client.onerror = function (e) {
                  t.eventEmitter.emit("error", e);
                }),
                (this.client.onmessage = function (e) {
                  var n = e.data;
                  t.processReceivedData(n);
                });
            }),
            (e.prototype.processReceivedData = function (e) {
              var t, n;
              try {
                n = (t = JSON.parse(e)).id;
              } catch (s) {
                throw new Error("Message must be JSON-parseable. Got: " + e);
              }
              if (
                -1 ===
                  [
                    g.default.GQL_DATA,
                    g.default.GQL_COMPLETE,
                    g.default.GQL_ERROR,
                  ].indexOf(t.type) ||
                this.operations[n]
              )
                switch (t.type) {
                  case g.default.GQL_CONNECTION_ERROR:
                    this.connectionCallback &&
                      this.connectionCallback(t.payload);
                    break;
                  case g.default.GQL_CONNECTION_ACK:
                    this.eventEmitter.emit(
                      this.reconnecting ? "reconnected" : "connected",
                      t.payload
                    ),
                      (this.reconnecting = !1),
                      this.backoff.reset(),
                      this.maxConnectTimeGenerator.reset(),
                      this.connectionCallback && this.connectionCallback();
                    break;
                  case g.default.GQL_COMPLETE:
                    var i = this.operations[n].handler;
                    delete this.operations[n], i.call(this, null, null);
                    break;
                  case g.default.GQL_ERROR:
                    this.operations[n].handler(
                      this.formatErrors(t.payload),
                      null
                    ),
                      delete this.operations[n];
                    break;
                  case g.default.GQL_DATA:
                    var o = t.payload.errors
                      ? r(r({}, t.payload), {
                          errors: this.formatErrors(t.payload.errors),
                        })
                      : t.payload;
                    this.operations[n].handler(null, o);
                    break;
                  case g.default.GQL_CONNECTION_KEEP_ALIVE:
                    var a = "undefined" === typeof this.wasKeepAliveReceived;
                    (this.wasKeepAliveReceived = !0),
                      a && this.checkConnection(),
                      this.checkConnectionIntervalId &&
                        (clearInterval(this.checkConnectionIntervalId),
                        this.checkConnection()),
                      (this.checkConnectionIntervalId = setInterval(
                        this.checkConnection.bind(this),
                        this.wsTimeout
                      ));
                    break;
                  default:
                    throw new Error("Invalid message type!");
                }
              else this.unsubscribe(n);
            }),
            (e.prototype.unsubscribe = function (e) {
              this.operations[e] &&
                (delete this.operations[e],
                this.setInactivityTimeout(),
                this.sendMessage(e, g.default.GQL_STOP, void 0));
            }),
            e
          );
        })();
      t.SubscriptionClient = b;
    }.call(this, n(13)));
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      var t,
        n = e.Symbol;
      return (
        "function" === typeof n
          ? n.observable
            ? (t = n.observable)
            : ((t = n("observable")), (n.observable = t))
          : (t = "@@observable"),
        t
      );
    }
    n.d(t, "a", function () {
      return r;
    });
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    var r = n(21).Buffer,
      i = n(70).Transform;
    function o(e) {
      i.call(this),
        (this._block = r.allocUnsafe(e)),
        (this._blockSize = e),
        (this._blockOffset = 0),
        (this._length = [0, 0, 0, 0]),
        (this._finalized = !1);
    }
    n(12)(o, i),
      (o.prototype._transform = function (e, t, n) {
        var r = null;
        try {
          this.update(e, t);
        } catch (i) {
          r = i;
        }
        n(r);
      }),
      (o.prototype._flush = function (e) {
        var t = null;
        try {
          this.push(this.digest());
        } catch (n) {
          t = n;
        }
        e(t);
      }),
      (o.prototype.update = function (e, t) {
        if (
          ((function (e, t) {
            if (!r.isBuffer(e) && "string" !== typeof e)
              throw new TypeError(t + " must be a string or a buffer");
          })(e, "Data"),
          this._finalized)
        )
          throw new Error("Digest already called");
        r.isBuffer(e) || (e = r.from(e, t));
        for (
          var n = this._block, i = 0;
          this._blockOffset + e.length - i >= this._blockSize;

        ) {
          for (var o = this._blockOffset; o < this._blockSize; )
            n[o++] = e[i++];
          this._update(), (this._blockOffset = 0);
        }
        for (; i < e.length; ) n[this._blockOffset++] = e[i++];
        for (var a = 0, s = 8 * e.length; s > 0; ++a)
          (this._length[a] += s),
            (s = (this._length[a] / 4294967296) | 0) > 0 &&
              (this._length[a] -= 4294967296 * s);
        return this;
      }),
      (o.prototype._update = function () {
        throw new Error("_update is not implemented");
      }),
      (o.prototype.digest = function (e) {
        if (this._finalized) throw new Error("Digest already called");
        this._finalized = !0;
        var t = this._digest();
        void 0 !== e && (t = t.toString(e)),
          this._block.fill(0),
          (this._blockOffset = 0);
        for (var n = 0; n < 4; ++n) this._length[n] = 0;
        return t;
      }),
      (o.prototype._digest = function () {
        throw new Error("_digest is not implemented");
      }),
      (e.exports = o);
  },
  function (e, t, n) {
    "use strict";
    (t.byteLength = function (e) {
      var t = u(e),
        n = t[0],
        r = t[1];
      return (3 * (n + r)) / 4 - r;
    }),
      (t.toByteArray = function (e) {
        var t,
          n,
          r = u(e),
          a = r[0],
          s = r[1],
          c = new o(
            (function (e, t, n) {
              return (3 * (t + n)) / 4 - n;
            })(0, a, s)
          ),
          l = 0,
          f = s > 0 ? a - 4 : a;
        for (n = 0; n < f; n += 4)
          (t =
            (i[e.charCodeAt(n)] << 18) |
            (i[e.charCodeAt(n + 1)] << 12) |
            (i[e.charCodeAt(n + 2)] << 6) |
            i[e.charCodeAt(n + 3)]),
            (c[l++] = (t >> 16) & 255),
            (c[l++] = (t >> 8) & 255),
            (c[l++] = 255 & t);
        2 === s &&
          ((t = (i[e.charCodeAt(n)] << 2) | (i[e.charCodeAt(n + 1)] >> 4)),
          (c[l++] = 255 & t));
        1 === s &&
          ((t =
            (i[e.charCodeAt(n)] << 10) |
            (i[e.charCodeAt(n + 1)] << 4) |
            (i[e.charCodeAt(n + 2)] >> 2)),
          (c[l++] = (t >> 8) & 255),
          (c[l++] = 255 & t));
        return c;
      }),
      (t.fromByteArray = function (e) {
        for (
          var t, n = e.length, i = n % 3, o = [], a = 0, s = n - i;
          a < s;
          a += 16383
        )
          o.push(l(e, a, a + 16383 > s ? s : a + 16383));
        1 === i
          ? ((t = e[n - 1]), o.push(r[t >> 2] + r[(t << 4) & 63] + "=="))
          : 2 === i &&
            ((t = (e[n - 2] << 8) + e[n - 1]),
            o.push(r[t >> 10] + r[(t >> 4) & 63] + r[(t << 2) & 63] + "="));
        return o.join("");
      });
    for (
      var r = [],
        i = [],
        o = "undefined" !== typeof Uint8Array ? Uint8Array : Array,
        a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        s = 0,
        c = a.length;
      s < c;
      ++s
    )
      (r[s] = a[s]), (i[a.charCodeAt(s)] = s);
    function u(e) {
      var t = e.length;
      if (t % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var n = e.indexOf("=");
      return -1 === n && (n = t), [n, n === t ? 0 : 4 - (n % 4)];
    }
    function l(e, t, n) {
      for (var i, o, a = [], s = t; s < n; s += 3)
        (i =
          ((e[s] << 16) & 16711680) +
          ((e[s + 1] << 8) & 65280) +
          (255 & e[s + 2])),
          a.push(
            r[((o = i) >> 18) & 63] +
              r[(o >> 12) & 63] +
              r[(o >> 6) & 63] +
              r[63 & o]
          );
      return a.join("");
    }
    (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
  },
  function (e, t) {
    (t.read = function (e, t, n, r, i) {
      var o,
        a,
        s = 8 * i - r - 1,
        c = (1 << s) - 1,
        u = c >> 1,
        l = -7,
        f = n ? i - 1 : 0,
        p = n ? -1 : 1,
        d = e[t + f];
      for (
        f += p, o = d & ((1 << -l) - 1), d >>= -l, l += s;
        l > 0;
        o = 256 * o + e[t + f], f += p, l -= 8
      );
      for (
        a = o & ((1 << -l) - 1), o >>= -l, l += r;
        l > 0;
        a = 256 * a + e[t + f], f += p, l -= 8
      );
      if (0 === o) o = 1 - u;
      else {
        if (o === c) return a ? NaN : (1 / 0) * (d ? -1 : 1);
        (a += Math.pow(2, r)), (o -= u);
      }
      return (d ? -1 : 1) * a * Math.pow(2, o - r);
    }),
      (t.write = function (e, t, n, r, i, o) {
        var a,
          s,
          c,
          u = 8 * o - i - 1,
          l = (1 << u) - 1,
          f = l >> 1,
          p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          d = r ? 0 : o - 1,
          h = r ? 1 : -1,
          v = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
        for (
          t = Math.abs(t),
            isNaN(t) || t === 1 / 0
              ? ((s = isNaN(t) ? 1 : 0), (a = l))
              : ((a = Math.floor(Math.log(t) / Math.LN2)),
                t * (c = Math.pow(2, -a)) < 1 && (a--, (c *= 2)),
                (t += a + f >= 1 ? p / c : p * Math.pow(2, 1 - f)) * c >= 2 &&
                  (a++, (c /= 2)),
                a + f >= l
                  ? ((s = 0), (a = l))
                  : a + f >= 1
                  ? ((s = (t * c - 1) * Math.pow(2, i)), (a += f))
                  : ((s = t * Math.pow(2, f - 1) * Math.pow(2, i)), (a = 0)));
          i >= 8;
          e[n + d] = 255 & s, d += h, s /= 256, i -= 8
        );
        for (
          a = (a << i) | s, u += i;
          u > 0;
          e[n + d] = 255 & a, d += h, a /= 256, u -= 8
        );
        e[n + d - h] |= 128 * v;
      });
  },
  function (e, t) {
    var n = {}.toString;
    e.exports =
      Array.isArray ||
      function (e) {
        return "[object Array]" == n.call(e);
      };
  },
  function (e, t, n) {
    ((t = e.exports = n(23)).Stream = t),
      (t.Readable = t),
      (t.Writable = n(28)),
      (t.Duplex = n(16)),
      (t.Transform = n(30)),
      (t.PassThrough = n(77)),
      (t.finished = n(22)),
      (t.pipeline = n(78));
  },
  function (e, t) {},
  function (e, t, n) {
    "use strict";
    function r(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function i(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var a = n(18).Buffer,
      s = n(73).inspect,
      c = (s && s.custom) || "inspect";
    e.exports = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.head = null),
          (this.tail = null),
          (this.length = 0);
      }
      var t, n, u;
      return (
        (t = e),
        (n = [
          {
            key: "push",
            value: function (e) {
              var t = { data: e, next: null };
              this.length > 0 ? (this.tail.next = t) : (this.head = t),
                (this.tail = t),
                ++this.length;
            },
          },
          {
            key: "unshift",
            value: function (e) {
              var t = { data: e, next: this.head };
              0 === this.length && (this.tail = t),
                (this.head = t),
                ++this.length;
            },
          },
          {
            key: "shift",
            value: function () {
              if (0 !== this.length) {
                var e = this.head.data;
                return (
                  1 === this.length
                    ? (this.head = this.tail = null)
                    : (this.head = this.head.next),
                  --this.length,
                  e
                );
              }
            },
          },
          {
            key: "clear",
            value: function () {
              (this.head = this.tail = null), (this.length = 0);
            },
          },
          {
            key: "join",
            value: function (e) {
              if (0 === this.length) return "";
              for (var t = this.head, n = "" + t.data; (t = t.next); )
                n += e + t.data;
              return n;
            },
          },
          {
            key: "concat",
            value: function (e) {
              if (0 === this.length) return a.alloc(0);
              for (
                var t, n, r, i = a.allocUnsafe(e >>> 0), o = this.head, s = 0;
                o;

              )
                (t = o.data),
                  (n = i),
                  (r = s),
                  a.prototype.copy.call(t, n, r),
                  (s += o.data.length),
                  (o = o.next);
              return i;
            },
          },
          {
            key: "consume",
            value: function (e, t) {
              var n;
              return (
                e < this.head.data.length
                  ? ((n = this.head.data.slice(0, e)),
                    (this.head.data = this.head.data.slice(e)))
                  : (n =
                      e === this.head.data.length
                        ? this.shift()
                        : t
                        ? this._getString(e)
                        : this._getBuffer(e)),
                n
              );
            },
          },
          {
            key: "first",
            value: function () {
              return this.head.data;
            },
          },
          {
            key: "_getString",
            value: function (e) {
              var t = this.head,
                n = 1,
                r = t.data;
              for (e -= r.length; (t = t.next); ) {
                var i = t.data,
                  o = e > i.length ? i.length : e;
                if (
                  (o === i.length ? (r += i) : (r += i.slice(0, e)),
                  0 === (e -= o))
                ) {
                  o === i.length
                    ? (++n,
                      t.next
                        ? (this.head = t.next)
                        : (this.head = this.tail = null))
                    : ((this.head = t), (t.data = i.slice(o)));
                  break;
                }
                ++n;
              }
              return (this.length -= n), r;
            },
          },
          {
            key: "_getBuffer",
            value: function (e) {
              var t = a.allocUnsafe(e),
                n = this.head,
                r = 1;
              for (n.data.copy(t), e -= n.data.length; (n = n.next); ) {
                var i = n.data,
                  o = e > i.length ? i.length : e;
                if ((i.copy(t, t.length - e, 0, o), 0 === (e -= o))) {
                  o === i.length
                    ? (++r,
                      n.next
                        ? (this.head = n.next)
                        : (this.head = this.tail = null))
                    : ((this.head = n), (n.data = i.slice(o)));
                  break;
                }
                ++r;
              }
              return (this.length -= r), t;
            },
          },
          {
            key: c,
            value: function (e, t) {
              return s(
                this,
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? r(Object(n), !0).forEach(function (t) {
                          i(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : r(Object(n)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t)
                          );
                        });
                  }
                  return e;
                })({}, t, { depth: 0, customInspect: !1 })
              );
            },
          },
        ]) && o(t.prototype, n),
        u && o(t, u),
        e
      );
    })();
  },
  function (e, t) {},
  function (e, t, n) {
    (function (t) {
      function n(e) {
        try {
          if (!t.localStorage) return !1;
        } catch (r) {
          return !1;
        }
        var n = t.localStorage[e];
        return null != n && "true" === String(n).toLowerCase();
      }
      e.exports = function (e, t) {
        if (n("noDeprecation")) return e;
        var r = !1;
        return function () {
          if (!r) {
            if (n("throwDeprecation")) throw new Error(t);
            n("traceDeprecation") ? console.trace(t) : console.warn(t),
              (r = !0);
          }
          return e.apply(this, arguments);
        };
      };
    }.call(this, n(13)));
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var r;
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var o = n(22),
        a = Symbol("lastResolve"),
        s = Symbol("lastReject"),
        c = Symbol("error"),
        u = Symbol("ended"),
        l = Symbol("lastPromise"),
        f = Symbol("handlePromise"),
        p = Symbol("stream");
      function d(e, t) {
        return { value: e, done: t };
      }
      function h(e) {
        var t = e[a];
        if (null !== t) {
          var n = e[p].read();
          null !== n &&
            ((e[l] = null), (e[a] = null), (e[s] = null), t(d(n, !1)));
        }
      }
      function v(e) {
        t.nextTick(h, e);
      }
      var y = Object.getPrototypeOf(function () {}),
        m = Object.setPrototypeOf(
          (i(
            (r = {
              get stream() {
                return this[p];
              },
              next: function () {
                var e = this,
                  n = this[c];
                if (null !== n) return Promise.reject(n);
                if (this[u]) return Promise.resolve(d(void 0, !0));
                if (this[p].destroyed)
                  return new Promise(function (n, r) {
                    t.nextTick(function () {
                      e[c] ? r(e[c]) : n(d(void 0, !0));
                    });
                  });
                var r,
                  i = this[l];
                if (i)
                  r = new Promise(
                    (function (e, t) {
                      return function (n, r) {
                        e.then(function () {
                          t[u] ? n(d(void 0, !0)) : t[f](n, r);
                        }, r);
                      };
                    })(i, this)
                  );
                else {
                  var o = this[p].read();
                  if (null !== o) return Promise.resolve(d(o, !1));
                  r = new Promise(this[f]);
                }
                return (this[l] = r), r;
              },
            }),
            Symbol.asyncIterator,
            function () {
              return this;
            }
          ),
          i(r, "return", function () {
            var e = this;
            return new Promise(function (t, n) {
              e[p].destroy(null, function (e) {
                e ? n(e) : t(d(void 0, !0));
              });
            });
          }),
          r),
          y
        );
      e.exports = function (e) {
        var t,
          n = Object.create(
            m,
            (i((t = {}), p, { value: e, writable: !0 }),
            i(t, a, { value: null, writable: !0 }),
            i(t, s, { value: null, writable: !0 }),
            i(t, c, { value: null, writable: !0 }),
            i(t, u, { value: e._readableState.endEmitted, writable: !0 }),
            i(t, f, {
              value: function (e, t) {
                var r = n[p].read();
                r
                  ? ((n[l] = null), (n[a] = null), (n[s] = null), e(d(r, !1)))
                  : ((n[a] = e), (n[s] = t));
              },
              writable: !0,
            }),
            t)
          );
        return (
          (n[l] = null),
          o(e, function (e) {
            if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
              var t = n[s];
              return (
                null !== t &&
                  ((n[l] = null), (n[a] = null), (n[s] = null), t(e)),
                void (n[c] = e)
              );
            }
            var r = n[a];
            null !== r &&
              ((n[l] = null), (n[a] = null), (n[s] = null), r(d(void 0, !0))),
              (n[u] = !0);
          }),
          e.on("readable", v.bind(null, n)),
          n
        );
      };
    }.call(this, n(14)));
  },
  function (e, t) {
    e.exports = function () {
      throw new Error("Readable.from is not available in the browser");
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = i;
    var r = n(30);
    function i(e) {
      if (!(this instanceof i)) return new i(e);
      r.call(this, e);
    }
    n(12)(i, r),
      (i.prototype._transform = function (e, t, n) {
        n(null, e);
      });
  },
  function (e, t, n) {
    "use strict";
    var r;
    var i = n(15).codes,
      o = i.ERR_MISSING_ARGS,
      a = i.ERR_STREAM_DESTROYED;
    function s(e) {
      if (e) throw e;
    }
    function c(e, t, i, o) {
      o = (function (e) {
        var t = !1;
        return function () {
          t || ((t = !0), e.apply(void 0, arguments));
        };
      })(o);
      var s = !1;
      e.on("close", function () {
        s = !0;
      }),
        void 0 === r && (r = n(22)),
        r(e, { readable: t, writable: i }, function (e) {
          if (e) return o(e);
          (s = !0), o();
        });
      var c = !1;
      return function (t) {
        if (!s && !c)
          return (
            (c = !0),
            (function (e) {
              return e.setHeader && "function" === typeof e.abort;
            })(e)
              ? e.abort()
              : "function" === typeof e.destroy
              ? e.destroy()
              : void o(t || new a("pipe"))
          );
      };
    }
    function u(e) {
      e();
    }
    function l(e, t) {
      return e.pipe(t);
    }
    function f(e) {
      return e.length
        ? "function" !== typeof e[e.length - 1]
          ? s
          : e.pop()
        : s;
    }
    e.exports = function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r,
        i = f(t);
      if ((Array.isArray(t[0]) && (t = t[0]), t.length < 2))
        throw new o("streams");
      var a = t.map(function (e, n) {
        var o = n < t.length - 1;
        return c(e, o, n > 0, function (e) {
          r || (r = e), e && a.forEach(u), o || (a.forEach(u), i(r));
        });
      });
      return t.reduce(l);
    };
  },
  function (e, t, n) {
    var r = (function (e) {
      "use strict";
      var t = Object.prototype,
        n = t.hasOwnProperty,
        r = "function" === typeof Symbol ? Symbol : {},
        i = r.iterator || "@@iterator",
        o = r.asyncIterator || "@@asyncIterator",
        a = r.toStringTag || "@@toStringTag";
      function s(e, t, n) {
        return (
          Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          e[t]
        );
      }
      try {
        s({}, "");
      } catch (S) {
        s = function (e, t, n) {
          return (e[t] = n);
        };
      }
      function c(e, t, n, r) {
        var i = t && t.prototype instanceof f ? t : f,
          o = Object.create(i.prototype),
          a = new w(r || []);
        return (
          (o._invoke = (function (e, t, n) {
            var r = "suspendedStart";
            return function (i, o) {
              if ("executing" === r)
                throw new Error("Generator is already running");
              if ("completed" === r) {
                if ("throw" === i) throw o;
                return N();
              }
              for (n.method = i, n.arg = o; ; ) {
                var a = n.delegate;
                if (a) {
                  var s = E(a, n);
                  if (s) {
                    if (s === l) continue;
                    return s;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = "executing";
                var c = u(e, t, n);
                if ("normal" === c.type) {
                  if (
                    ((r = n.done ? "completed" : "suspendedYield"), c.arg === l)
                  )
                    continue;
                  return { value: c.arg, done: n.done };
                }
                "throw" === c.type &&
                  ((r = "completed"), (n.method = "throw"), (n.arg = c.arg));
              }
            };
          })(e, n, a)),
          o
        );
      }
      function u(e, t, n) {
        try {
          return { type: "normal", arg: e.call(t, n) };
        } catch (S) {
          return { type: "throw", arg: S };
        }
      }
      e.wrap = c;
      var l = {};
      function f() {}
      function p() {}
      function d() {}
      var h = {};
      h[i] = function () {
        return this;
      };
      var v = Object.getPrototypeOf,
        y = v && v(v(O([])));
      y && y !== t && n.call(y, i) && (h = y);
      var m = (d.prototype = f.prototype = Object.create(h));
      function g(e) {
        ["next", "throw", "return"].forEach(function (t) {
          s(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function b(e, t) {
        var r;
        this._invoke = function (i, o) {
          function a() {
            return new t(function (r, a) {
              !(function r(i, o, a, s) {
                var c = u(e[i], e, o);
                if ("throw" !== c.type) {
                  var l = c.arg,
                    f = l.value;
                  return f && "object" === typeof f && n.call(f, "__await")
                    ? t.resolve(f.__await).then(
                        function (e) {
                          r("next", e, a, s);
                        },
                        function (e) {
                          r("throw", e, a, s);
                        }
                      )
                    : t.resolve(f).then(
                        function (e) {
                          (l.value = e), a(l);
                        },
                        function (e) {
                          return r("throw", e, a, s);
                        }
                      );
                }
                s(c.arg);
              })(i, o, r, a);
            });
          }
          return (r = r ? r.then(a, a) : a());
        };
      }
      function E(e, t) {
        var n = e.iterator[t.method];
        if (void 0 === n) {
          if (((t.delegate = null), "throw" === t.method)) {
            if (
              e.iterator.return &&
              ((t.method = "return"),
              (t.arg = void 0),
              E(e, t),
              "throw" === t.method)
            )
              return l;
            (t.method = "throw"),
              (t.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return l;
        }
        var r = u(n, e.iterator, t.arg);
        if ("throw" === r.type)
          return (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), l;
        var i = r.arg;
        return i
          ? i.done
            ? ((t[e.resultName] = i.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
              (t.delegate = null),
              l)
            : i
          : ((t.method = "throw"),
            (t.arg = new TypeError("iterator result is not an object")),
            (t.delegate = null),
            l);
      }
      function T(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function _(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function w(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(T, this),
          this.reset(!0);
      }
      function O(e) {
        if (e) {
          var t = e[i];
          if (t) return t.call(e);
          if ("function" === typeof e.next) return e;
          if (!isNaN(e.length)) {
            var r = -1,
              o = function t() {
                for (; ++r < e.length; )
                  if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
            return (o.next = o);
          }
        }
        return { next: N };
      }
      function N() {
        return { value: void 0, done: !0 };
      }
      return (
        (p.prototype = m.constructor = d),
        (d.constructor = p),
        (p.displayName = s(d, a, "GeneratorFunction")),
        (e.isGeneratorFunction = function (e) {
          var t = "function" === typeof e && e.constructor;
          return (
            !!t &&
            (t === p || "GeneratorFunction" === (t.displayName || t.name))
          );
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, d)
              : ((e.__proto__ = d), s(e, a, "GeneratorFunction")),
            (e.prototype = Object.create(m)),
            e
          );
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        g(b.prototype),
        (b.prototype[o] = function () {
          return this;
        }),
        (e.AsyncIterator = b),
        (e.async = function (t, n, r, i, o) {
          void 0 === o && (o = Promise);
          var a = new b(c(t, n, r, i), o);
          return e.isGeneratorFunction(n)
            ? a
            : a.next().then(function (e) {
                return e.done ? e.value : a.next();
              });
        }),
        g(m),
        s(m, a, "Generator"),
        (m[i] = function () {
          return this;
        }),
        (m.toString = function () {
          return "[object Generator]";
        }),
        (e.keys = function (e) {
          var t = [];
          for (var n in e) t.push(n);
          return (
            t.reverse(),
            function n() {
              for (; t.length; ) {
                var r = t.pop();
                if (r in e) return (n.value = r), (n.done = !1), n;
              }
              return (n.done = !0), n;
            }
          );
        }),
        (e.values = O),
        (w.prototype = {
          constructor: w,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(_),
              !e)
            )
              for (var t in this)
                "t" === t.charAt(0) &&
                  n.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = void 0);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var t = this;
            function r(n, r) {
              return (
                (a.type = "throw"),
                (a.arg = e),
                (t.next = n),
                r && ((t.method = "next"), (t.arg = void 0)),
                !!r
              );
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var o = this.tryEntries[i],
                a = o.completion;
              if ("root" === o.tryLoc) return r("end");
              if (o.tryLoc <= this.prev) {
                var s = n.call(o, "catchLoc"),
                  c = n.call(o, "finallyLoc");
                if (s && c) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                } else if (s) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                } else {
                  if (!c)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var i = this.tryEntries[r];
              if (
                i.tryLoc <= this.prev &&
                n.call(i, "finallyLoc") &&
                this.prev < i.finallyLoc
              ) {
                var o = i;
                break;
              }
            }
            o &&
              ("break" === e || "continue" === e) &&
              o.tryLoc <= t &&
              t <= o.finallyLoc &&
              (o = null);
            var a = o ? o.completion : {};
            return (
              (a.type = e),
              (a.arg = t),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), l)
                : this.complete(a)
            );
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              l
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.finallyLoc === e)
                return this.complete(n.completion, n.afterLoc), _(n), l;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc === e) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var i = r.arg;
                  _(n);
                }
                return i;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, n) {
            return (
              (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
              "next" === this.method && (this.arg = void 0),
              l
            );
          },
        }),
        e
      );
    })(e.exports);
    try {
      regeneratorRuntime = r;
    } catch (i) {
      Function("r", "regeneratorRuntime = r")(r);
    }
  },
  function (e, t, n) {
    "use strict";
    var r = Object.getOwnPropertySymbols,
      i = Object.prototype.hasOwnProperty,
      o = Object.prototype.propertyIsEnumerable;
    function a(e) {
      if (null === e || void 0 === e)
        throw new TypeError(
          "Object.assign cannot be called with null or undefined"
        );
      return Object(e);
    }
    e.exports = (function () {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
          return !1;
        for (var t = {}, n = 0; n < 10; n++)
          t["_" + String.fromCharCode(n)] = n;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(t)
            .map(function (e) {
              return t[e];
            })
            .join("")
        )
          return !1;
        var r = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (e) {
            r[e] = e;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        );
      } catch (i) {
        return !1;
      }
    })()
      ? Object.assign
      : function (e, t) {
          for (var n, s, c = a(e), u = 1; u < arguments.length; u++) {
            for (var l in (n = Object(arguments[u])))
              i.call(n, l) && (c[l] = n[l]);
            if (r) {
              s = r(n);
              for (var f = 0; f < s.length; f++)
                o.call(n, s[f]) && (c[s[f]] = n[s[f]]);
            }
          }
          return c;
        };
  },
  function (e, t, n) {
    (function (e) {
      var r =
          Object.getOwnPropertyDescriptors ||
          function (e) {
            for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++)
              n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
            return n;
          },
        i = /%[sdj%]/g;
      (t.format = function (e) {
        if (!m(e)) {
          for (var t = [], n = 0; n < arguments.length; n++)
            t.push(s(arguments[n]));
          return t.join(" ");
        }
        n = 1;
        for (
          var r = arguments,
            o = r.length,
            a = String(e).replace(i, function (e) {
              if ("%%" === e) return "%";
              if (n >= o) return e;
              switch (e) {
                case "%s":
                  return String(r[n++]);
                case "%d":
                  return Number(r[n++]);
                case "%j":
                  try {
                    return JSON.stringify(r[n++]);
                  } catch (t) {
                    return "[Circular]";
                  }
                default:
                  return e;
              }
            }),
            c = r[n];
          n < o;
          c = r[++n]
        )
          v(c) || !E(c) ? (a += " " + c) : (a += " " + s(c));
        return a;
      }),
        (t.deprecate = function (n, r) {
          if ("undefined" !== typeof e && !0 === e.noDeprecation) return n;
          if ("undefined" === typeof e)
            return function () {
              return t.deprecate(n, r).apply(this, arguments);
            };
          var i = !1;
          return function () {
            if (!i) {
              if (e.throwDeprecation) throw new Error(r);
              e.traceDeprecation ? console.trace(r) : console.error(r),
                (i = !0);
            }
            return n.apply(this, arguments);
          };
        });
      var o,
        a = {};
      function s(e, n) {
        var r = { seen: [], stylize: u };
        return (
          arguments.length >= 3 && (r.depth = arguments[2]),
          arguments.length >= 4 && (r.colors = arguments[3]),
          h(n) ? (r.showHidden = n) : n && t._extend(r, n),
          g(r.showHidden) && (r.showHidden = !1),
          g(r.depth) && (r.depth = 2),
          g(r.colors) && (r.colors = !1),
          g(r.customInspect) && (r.customInspect = !0),
          r.colors && (r.stylize = c),
          l(r, e, r.depth)
        );
      }
      function c(e, t) {
        var n = s.styles[t];
        return n
          ? "\x1b[" + s.colors[n][0] + "m" + e + "\x1b[" + s.colors[n][1] + "m"
          : e;
      }
      function u(e, t) {
        return e;
      }
      function l(e, n, r) {
        if (
          e.customInspect &&
          n &&
          w(n.inspect) &&
          n.inspect !== t.inspect &&
          (!n.constructor || n.constructor.prototype !== n)
        ) {
          var i = n.inspect(r, e);
          return m(i) || (i = l(e, i, r)), i;
        }
        var o = (function (e, t) {
          if (g(t)) return e.stylize("undefined", "undefined");
          if (m(t)) {
            var n =
              "'" +
              JSON.stringify(t)
                .replace(/^"|"$/g, "")
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"') +
              "'";
            return e.stylize(n, "string");
          }
          if (y(t)) return e.stylize("" + t, "number");
          if (h(t)) return e.stylize("" + t, "boolean");
          if (v(t)) return e.stylize("null", "null");
        })(e, n);
        if (o) return o;
        var a = Object.keys(n),
          s = (function (e) {
            var t = {};
            return (
              e.forEach(function (e, n) {
                t[e] = !0;
              }),
              t
            );
          })(a);
        if (
          (e.showHidden && (a = Object.getOwnPropertyNames(n)),
          _(n) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0))
        )
          return f(n);
        if (0 === a.length) {
          if (w(n)) {
            var c = n.name ? ": " + n.name : "";
            return e.stylize("[Function" + c + "]", "special");
          }
          if (b(n))
            return e.stylize(RegExp.prototype.toString.call(n), "regexp");
          if (T(n)) return e.stylize(Date.prototype.toString.call(n), "date");
          if (_(n)) return f(n);
        }
        var u,
          E = "",
          O = !1,
          N = ["{", "}"];
        (d(n) && ((O = !0), (N = ["[", "]"])), w(n)) &&
          (E = " [Function" + (n.name ? ": " + n.name : "") + "]");
        return (
          b(n) && (E = " " + RegExp.prototype.toString.call(n)),
          T(n) && (E = " " + Date.prototype.toUTCString.call(n)),
          _(n) && (E = " " + f(n)),
          0 !== a.length || (O && 0 != n.length)
            ? r < 0
              ? b(n)
                ? e.stylize(RegExp.prototype.toString.call(n), "regexp")
                : e.stylize("[Object]", "special")
              : (e.seen.push(n),
                (u = O
                  ? (function (e, t, n, r, i) {
                      for (var o = [], a = 0, s = t.length; a < s; ++a)
                        k(t, String(a))
                          ? o.push(p(e, t, n, r, String(a), !0))
                          : o.push("");
                      return (
                        i.forEach(function (i) {
                          i.match(/^\d+$/) || o.push(p(e, t, n, r, i, !0));
                        }),
                        o
                      );
                    })(e, n, r, s, a)
                  : a.map(function (t) {
                      return p(e, n, r, s, t, O);
                    })),
                e.seen.pop(),
                (function (e, t, n) {
                  if (
                    e.reduce(function (e, t) {
                      return (
                        t.indexOf("\n") >= 0 && 0,
                        e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                      );
                    }, 0) > 60
                  )
                    return (
                      n[0] +
                      ("" === t ? "" : t + "\n ") +
                      " " +
                      e.join(",\n  ") +
                      " " +
                      n[1]
                    );
                  return n[0] + t + " " + e.join(", ") + " " + n[1];
                })(u, E, N))
            : N[0] + E + N[1]
        );
      }
      function f(e) {
        return "[" + Error.prototype.toString.call(e) + "]";
      }
      function p(e, t, n, r, i, o) {
        var a, s, c;
        if (
          ((c = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] }).get
            ? (s = c.set
                ? e.stylize("[Getter/Setter]", "special")
                : e.stylize("[Getter]", "special"))
            : c.set && (s = e.stylize("[Setter]", "special")),
          k(r, i) || (a = "[" + i + "]"),
          s ||
            (e.seen.indexOf(c.value) < 0
              ? (s = v(n) ? l(e, c.value, null) : l(e, c.value, n - 1)).indexOf(
                  "\n"
                ) > -1 &&
                (s = o
                  ? s
                      .split("\n")
                      .map(function (e) {
                        return "  " + e;
                      })
                      .join("\n")
                      .substr(2)
                  : "\n" +
                    s
                      .split("\n")
                      .map(function (e) {
                        return "   " + e;
                      })
                      .join("\n"))
              : (s = e.stylize("[Circular]", "special"))),
          g(a))
        ) {
          if (o && i.match(/^\d+$/)) return s;
          (a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
            ? ((a = a.substr(1, a.length - 2)), (a = e.stylize(a, "name")))
            : ((a = a
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"')
                .replace(/(^"|"$)/g, "'")),
              (a = e.stylize(a, "string")));
        }
        return a + ": " + s;
      }
      function d(e) {
        return Array.isArray(e);
      }
      function h(e) {
        return "boolean" === typeof e;
      }
      function v(e) {
        return null === e;
      }
      function y(e) {
        return "number" === typeof e;
      }
      function m(e) {
        return "string" === typeof e;
      }
      function g(e) {
        return void 0 === e;
      }
      function b(e) {
        return E(e) && "[object RegExp]" === O(e);
      }
      function E(e) {
        return "object" === typeof e && null !== e;
      }
      function T(e) {
        return E(e) && "[object Date]" === O(e);
      }
      function _(e) {
        return E(e) && ("[object Error]" === O(e) || e instanceof Error);
      }
      function w(e) {
        return "function" === typeof e;
      }
      function O(e) {
        return Object.prototype.toString.call(e);
      }
      function N(e) {
        return e < 10 ? "0" + e.toString(10) : e.toString(10);
      }
      (t.debuglog = function (n) {
        if (
          (g(o) &&
            (o =
              Object({
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
              }).NODE_DEBUG || ""),
          (n = n.toUpperCase()),
          !a[n])
        )
          if (new RegExp("\\b" + n + "\\b", "i").test(o)) {
            var r = e.pid;
            a[n] = function () {
              var e = t.format.apply(t, arguments);
              console.error("%s %d: %s", n, r, e);
            };
          } else a[n] = function () {};
        return a[n];
      }),
        (t.inspect = s),
        (s.colors = {
          bold: [1, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          white: [37, 39],
          grey: [90, 39],
          black: [30, 39],
          blue: [34, 39],
          cyan: [36, 39],
          green: [32, 39],
          magenta: [35, 39],
          red: [31, 39],
          yellow: [33, 39],
        }),
        (s.styles = {
          special: "cyan",
          number: "yellow",
          boolean: "yellow",
          undefined: "grey",
          null: "bold",
          string: "green",
          date: "magenta",
          regexp: "red",
        }),
        (t.isArray = d),
        (t.isBoolean = h),
        (t.isNull = v),
        (t.isNullOrUndefined = function (e) {
          return null == e;
        }),
        (t.isNumber = y),
        (t.isString = m),
        (t.isSymbol = function (e) {
          return "symbol" === typeof e;
        }),
        (t.isUndefined = g),
        (t.isRegExp = b),
        (t.isObject = E),
        (t.isDate = T),
        (t.isError = _),
        (t.isFunction = w),
        (t.isPrimitive = function (e) {
          return (
            null === e ||
            "boolean" === typeof e ||
            "number" === typeof e ||
            "string" === typeof e ||
            "symbol" === typeof e ||
            "undefined" === typeof e
          );
        }),
        (t.isBuffer = n(82));
      var S = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      function I() {
        var e = new Date(),
          t = [N(e.getHours()), N(e.getMinutes()), N(e.getSeconds())].join(":");
        return [e.getDate(), S[e.getMonth()], t].join(" ");
      }
      function k(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      (t.log = function () {
        console.log("%s - %s", I(), t.format.apply(t, arguments));
      }),
        (t.inherits = n(83)),
        (t._extend = function (e, t) {
          if (!t || !E(t)) return e;
          for (var n = Object.keys(t), r = n.length; r--; ) e[n[r]] = t[n[r]];
          return e;
        });
      var x =
        "undefined" !== typeof Symbol
          ? Symbol("util.promisify.custom")
          : void 0;
      function A(e, t) {
        if (!e) {
          var n = new Error("Promise was rejected with a falsy value");
          (n.reason = e), (e = n);
        }
        return t(e);
      }
      (t.promisify = function (e) {
        if ("function" !== typeof e)
          throw new TypeError(
            'The "original" argument must be of type Function'
          );
        if (x && e[x]) {
          var t;
          if ("function" !== typeof (t = e[x]))
            throw new TypeError(
              'The "util.promisify.custom" argument must be of type Function'
            );
          return (
            Object.defineProperty(t, x, {
              value: t,
              enumerable: !1,
              writable: !1,
              configurable: !0,
            }),
            t
          );
        }
        function t() {
          for (
            var t,
              n,
              r = new Promise(function (e, r) {
                (t = e), (n = r);
              }),
              i = [],
              o = 0;
            o < arguments.length;
            o++
          )
            i.push(arguments[o]);
          i.push(function (e, r) {
            e ? n(e) : t(r);
          });
          try {
            e.apply(this, i);
          } catch (a) {
            n(a);
          }
          return r;
        }
        return (
          Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
          x &&
            Object.defineProperty(t, x, {
              value: t,
              enumerable: !1,
              writable: !1,
              configurable: !0,
            }),
          Object.defineProperties(t, r(e))
        );
      }),
        (t.promisify.custom = x),
        (t.callbackify = function (t) {
          if ("function" !== typeof t)
            throw new TypeError(
              'The "original" argument must be of type Function'
            );
          function n() {
            for (var n = [], r = 0; r < arguments.length; r++)
              n.push(arguments[r]);
            var i = n.pop();
            if ("function" !== typeof i)
              throw new TypeError("The last argument must be of type Function");
            var o = this,
              a = function () {
                return i.apply(o, arguments);
              };
            t.apply(this, n).then(
              function (t) {
                e.nextTick(a, null, t);
              },
              function (t) {
                e.nextTick(A, t, a);
              }
            );
          }
          return (
            Object.setPrototypeOf(n, Object.getPrototypeOf(t)),
            Object.defineProperties(n, r(t)),
            n
          );
        });
    }.call(this, n(14)));
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e &&
        "object" === typeof e &&
        "function" === typeof e.copy &&
        "function" === typeof e.fill &&
        "function" === typeof e.readUInt8
      );
    };
  },
  function (e, t) {
    "function" === typeof Object.create
      ? (e.exports = function (e, t) {
          (e.super_ = t),
            (e.prototype = Object.create(t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            }));
        })
      : (e.exports = function (e, t) {
          e.super_ = t;
          var n = function () {};
          (n.prototype = t.prototype),
            (e.prototype = new n()),
            (e.prototype.constructor = e);
        });
  },
  function (e, t) {
    function n(e) {
      (e = e || {}),
        (this.ms = e.min || 100),
        (this.max = e.max || 1e4),
        (this.factor = e.factor || 2),
        (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
        (this.attempts = 0);
    }
    (e.exports = n),
      (n.prototype.duration = function () {
        var e = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var t = Math.random(),
            n = Math.floor(t * this.jitter * e);
          e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n;
        }
        return 0 | Math.min(e, this.max);
      }),
      (n.prototype.reset = function () {
        this.attempts = 0;
      }),
      (n.prototype.setMin = function (e) {
        this.ms = e;
      }),
      (n.prototype.setMax = function (e) {
        this.max = e;
      }),
      (n.prototype.setJitter = function (e) {
        this.jitter = e;
      });
  },
  function (e, t, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty,
      i = "~";
    function o() {}
    function a(e, t, n) {
      (this.fn = e), (this.context = t), (this.once = n || !1);
    }
    function s(e, t, n, r, o) {
      if ("function" !== typeof n)
        throw new TypeError("The listener must be a function");
      var s = new a(n, r || e, o),
        c = i ? i + t : t;
      return (
        e._events[c]
          ? e._events[c].fn
            ? (e._events[c] = [e._events[c], s])
            : e._events[c].push(s)
          : ((e._events[c] = s), e._eventsCount++),
        e
      );
    }
    function c(e, t) {
      0 === --e._eventsCount ? (e._events = new o()) : delete e._events[t];
    }
    function u() {
      (this._events = new o()), (this._eventsCount = 0);
    }
    Object.create &&
      ((o.prototype = Object.create(null)), new o().__proto__ || (i = !1)),
      (u.prototype.eventNames = function () {
        var e,
          t,
          n = [];
        if (0 === this._eventsCount) return n;
        for (t in (e = this._events))
          r.call(e, t) && n.push(i ? t.slice(1) : t);
        return Object.getOwnPropertySymbols
          ? n.concat(Object.getOwnPropertySymbols(e))
          : n;
      }),
      (u.prototype.listeners = function (e) {
        var t = i ? i + e : e,
          n = this._events[t];
        if (!n) return [];
        if (n.fn) return [n.fn];
        for (var r = 0, o = n.length, a = new Array(o); r < o; r++)
          a[r] = n[r].fn;
        return a;
      }),
      (u.prototype.listenerCount = function (e) {
        var t = i ? i + e : e,
          n = this._events[t];
        return n ? (n.fn ? 1 : n.length) : 0;
      }),
      (u.prototype.emit = function (e, t, n, r, o, a) {
        var s = i ? i + e : e;
        if (!this._events[s]) return !1;
        var c,
          u,
          l = this._events[s],
          f = arguments.length;
        if (l.fn) {
          switch ((l.once && this.removeListener(e, l.fn, void 0, !0), f)) {
            case 1:
              return l.fn.call(l.context), !0;
            case 2:
              return l.fn.call(l.context, t), !0;
            case 3:
              return l.fn.call(l.context, t, n), !0;
            case 4:
              return l.fn.call(l.context, t, n, r), !0;
            case 5:
              return l.fn.call(l.context, t, n, r, o), !0;
            case 6:
              return l.fn.call(l.context, t, n, r, o, a), !0;
          }
          for (u = 1, c = new Array(f - 1); u < f; u++) c[u - 1] = arguments[u];
          l.fn.apply(l.context, c);
        } else {
          var p,
            d = l.length;
          for (u = 0; u < d; u++)
            switch (
              (l[u].once && this.removeListener(e, l[u].fn, void 0, !0), f)
            ) {
              case 1:
                l[u].fn.call(l[u].context);
                break;
              case 2:
                l[u].fn.call(l[u].context, t);
                break;
              case 3:
                l[u].fn.call(l[u].context, t, n);
                break;
              case 4:
                l[u].fn.call(l[u].context, t, n, r);
                break;
              default:
                if (!c)
                  for (p = 1, c = new Array(f - 1); p < f; p++)
                    c[p - 1] = arguments[p];
                l[u].fn.apply(l[u].context, c);
            }
        }
        return !0;
      }),
      (u.prototype.on = function (e, t, n) {
        return s(this, e, t, n, !1);
      }),
      (u.prototype.once = function (e, t, n) {
        return s(this, e, t, n, !0);
      }),
      (u.prototype.removeListener = function (e, t, n, r) {
        var o = i ? i + e : e;
        if (!this._events[o]) return this;
        if (!t) return c(this, o), this;
        var a = this._events[o];
        if (a.fn)
          a.fn !== t || (r && !a.once) || (n && a.context !== n) || c(this, o);
        else {
          for (var s = 0, u = [], l = a.length; s < l; s++)
            (a[s].fn !== t || (r && !a[s].once) || (n && a[s].context !== n)) &&
              u.push(a[s]);
          u.length ? (this._events[o] = 1 === u.length ? u[0] : u) : c(this, o);
        }
        return this;
      }),
      (u.prototype.removeAllListeners = function (e) {
        var t;
        return (
          e
            ? ((t = i ? i + e : e), this._events[t] && c(this, t))
            : ((this._events = new o()), (this._eventsCount = 0)),
          this
        );
      }),
      (u.prototype.off = u.prototype.removeListener),
      (u.prototype.addListener = u.prototype.on),
      (u.prefixed = i),
      (u.EventEmitter = u),
      (e.exports = u);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function (e) {
        return "string" === typeof e;
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function (e) {
        return null !== e && "object" === typeof e;
      });
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "getOperationAST", function () {
        return i;
      });
    var r = n(0);
    function i(e, t) {
      for (var n = null, i = 0, o = e.definitions; i < o.length; i++) {
        var a,
          s = o[i];
        if (s.kind === r.a.OPERATION_DEFINITION)
          if (null == t) {
            if (n) return null;
            n = s;
          } else if (
            (null === (a = s.name) || void 0 === a ? void 0 : a.value) === t
          )
            return s;
      }
      return n;
    }
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      function (e, r) {
        var i,
          o = n(63);
        i =
          "undefined" !== typeof self
            ? self
            : "undefined" !== typeof window
            ? window
            : "undefined" !== typeof e
            ? e
            : r;
        var a = Object(o.a)(i);
        t.default = a;
      }.call(this, n(13), n(90)(e));
  },
  function (e, t) {
    e.exports = function (e) {
      if (!e.webpackPolyfill) {
        var t = Object.create(e);
        t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
              return t.l;
            },
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
              return t.i;
            },
          }),
          Object.defineProperty(t, "exports", { enumerable: !0 }),
          (t.webpackPolyfill = 1);
      }
      return t;
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.GRAPHQL_SUBSCRIPTIONS = t.GRAPHQL_WS = void 0);
    t.GRAPHQL_WS = "graphql-ws";
    t.GRAPHQL_SUBSCRIPTIONS = "graphql-subscriptions";
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.WS_TIMEOUT = t.MIN_WS_TIMEOUT = void 0);
    t.MIN_WS_TIMEOUT = 1e3;
    t.WS_TIMEOUT = 3e4;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function () {
      function e() {
        throw new Error("Static Class");
      }
      return (
        (e.GQL_CONNECTION_INIT = "connection_init"),
        (e.GQL_CONNECTION_ACK = "connection_ack"),
        (e.GQL_CONNECTION_ERROR = "connection_error"),
        (e.GQL_CONNECTION_KEEP_ALIVE = "ka"),
        (e.GQL_CONNECTION_TERMINATE = "connection_terminate"),
        (e.GQL_START = "start"),
        (e.GQL_DATA = "data"),
        (e.GQL_ERROR = "error"),
        (e.GQL_COMPLETE = "complete"),
        (e.GQL_STOP = "stop"),
        (e.SUBSCRIPTION_START = "subscription_start"),
        (e.SUBSCRIPTION_DATA = "subscription_data"),
        (e.SUBSCRIPTION_SUCCESS = "subscription_success"),
        (e.SUBSCRIPTION_FAIL = "subscription_fail"),
        (e.SUBSCRIPTION_END = "subscription_end"),
        (e.INIT = "init"),
        (e.INIT_SUCCESS = "init_success"),
        (e.INIT_FAIL = "init_fail"),
        (e.KEEP_ALIVE = "keepalive"),
        e
      );
    })();
    t.default = r;
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(6),
      i = function (e, t) {
        return (i =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          })(e, t);
      };
    function o(e, t) {
      function n() {
        this.constructor = e;
      }
      i(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((n.prototype = t.prototype), new n()));
    }
    function a(e) {
      return "function" === typeof e;
    }
    var s = !1,
      c = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(e) {
          e && new Error().stack;
          s = e;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return s;
        },
      };
    function u(e) {
      setTimeout(function () {
        throw e;
      }, 0);
    }
    var l = {
        closed: !0,
        next: function (e) {},
        error: function (e) {
          if (c.useDeprecatedSynchronousErrorHandling) throw e;
          u(e);
        },
        complete: function () {},
      },
      f = (function () {
        return (
          Array.isArray ||
          function (e) {
            return e && "number" === typeof e.length;
          }
        );
      })();
    function p(e) {
      return null !== e && "object" === typeof e;
    }
    var d = (function () {
        function e(e) {
          return (
            Error.call(this),
            (this.message = e
              ? e.length +
                " errors occurred during unsubscription:\n" +
                e
                  .map(function (e, t) {
                    return t + 1 + ") " + e.toString();
                  })
                  .join("\n  ")
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = e),
            this
          );
        }
        return (e.prototype = Object.create(Error.prototype)), e;
      })(),
      h = (function () {
        function e(e) {
          (this.closed = !1),
            (this._parentOrParents = null),
            (this._subscriptions = null),
            e && ((this._ctorUnsubscribe = !0), (this._unsubscribe = e));
        }
        return (
          (e.prototype.unsubscribe = function () {
            var t;
            if (!this.closed) {
              var n = this._parentOrParents,
                r = this._ctorUnsubscribe,
                i = this._unsubscribe,
                o = this._subscriptions;
              if (
                ((this.closed = !0),
                (this._parentOrParents = null),
                (this._subscriptions = null),
                n instanceof e)
              )
                n.remove(this);
              else if (null !== n)
                for (var s = 0; s < n.length; ++s) {
                  n[s].remove(this);
                }
              if (a(i)) {
                r && (this._unsubscribe = void 0);
                try {
                  i.call(this);
                } catch (l) {
                  t = l instanceof d ? v(l.errors) : [l];
                }
              }
              if (f(o)) {
                s = -1;
                for (var c = o.length; ++s < c; ) {
                  var u = o[s];
                  if (p(u))
                    try {
                      u.unsubscribe();
                    } catch (l) {
                      (t = t || []),
                        l instanceof d
                          ? (t = t.concat(v(l.errors)))
                          : t.push(l);
                    }
                }
              }
              if (t) throw new d(t);
            }
          }),
          (e.prototype.add = function (t) {
            var n = t;
            if (!t) return e.EMPTY;
            switch (typeof t) {
              case "function":
                n = new e(t);
              case "object":
                if (
                  n === this ||
                  n.closed ||
                  "function" !== typeof n.unsubscribe
                )
                  return n;
                if (this.closed) return n.unsubscribe(), n;
                if (!(n instanceof e)) {
                  var r = n;
                  (n = new e())._subscriptions = [r];
                }
                break;
              default:
                throw new Error(
                  "unrecognized teardown " + t + " added to Subscription."
                );
            }
            var i = n._parentOrParents;
            if (null === i) n._parentOrParents = this;
            else if (i instanceof e) {
              if (i === this) return n;
              n._parentOrParents = [i, this];
            } else {
              if (-1 !== i.indexOf(this)) return n;
              i.push(this);
            }
            var o = this._subscriptions;
            return null === o ? (this._subscriptions = [n]) : o.push(n), n;
          }),
          (e.prototype.remove = function (e) {
            var t = this._subscriptions;
            if (t) {
              var n = t.indexOf(e);
              -1 !== n && t.splice(n, 1);
            }
          }),
          (e.EMPTY = (function (e) {
            return (e.closed = !0), e;
          })(new e())),
          e
        );
      })();
    function v(e) {
      return e.reduce(function (e, t) {
        return e.concat(t instanceof d ? t.errors : t);
      }, []);
    }
    var y = (function () {
        return "function" === typeof Symbol
          ? Symbol("rxSubscriber")
          : "@@rxSubscriber_" + Math.random();
      })(),
      m = (function (e) {
        function t(n, r, i) {
          var o = e.call(this) || this;
          switch (
            ((o.syncErrorValue = null),
            (o.syncErrorThrown = !1),
            (o.syncErrorThrowable = !1),
            (o.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              o.destination = l;
              break;
            case 1:
              if (!n) {
                o.destination = l;
                break;
              }
              if ("object" === typeof n) {
                n instanceof t
                  ? ((o.syncErrorThrowable = n.syncErrorThrowable),
                    (o.destination = n),
                    n.add(o))
                  : ((o.syncErrorThrowable = !0),
                    (o.destination = new g(o, n)));
                break;
              }
            default:
              (o.syncErrorThrowable = !0), (o.destination = new g(o, n, r, i));
          }
          return o;
        }
        return (
          o(t, e),
          (t.prototype[y] = function () {
            return this;
          }),
          (t.create = function (e, n, r) {
            var i = new t(e, n, r);
            return (i.syncErrorThrowable = !1), i;
          }),
          (t.prototype.next = function (e) {
            this.isStopped || this._next(e);
          }),
          (t.prototype.error = function (e) {
            this.isStopped || ((this.isStopped = !0), this._error(e));
          }),
          (t.prototype.complete = function () {
            this.isStopped || ((this.isStopped = !0), this._complete());
          }),
          (t.prototype.unsubscribe = function () {
            this.closed ||
              ((this.isStopped = !0), e.prototype.unsubscribe.call(this));
          }),
          (t.prototype._next = function (e) {
            this.destination.next(e);
          }),
          (t.prototype._error = function (e) {
            this.destination.error(e), this.unsubscribe();
          }),
          (t.prototype._complete = function () {
            this.destination.complete(), this.unsubscribe();
          }),
          (t.prototype._unsubscribeAndRecycle = function () {
            var e = this._parentOrParents;
            return (
              (this._parentOrParents = null),
              this.unsubscribe(),
              (this.closed = !1),
              (this.isStopped = !1),
              (this._parentOrParents = e),
              this
            );
          }),
          t
        );
      })(h),
      g = (function (e) {
        function t(t, n, r, i) {
          var o,
            s = e.call(this) || this;
          s._parentSubscriber = t;
          var c = s;
          return (
            a(n)
              ? (o = n)
              : n &&
                ((o = n.next),
                (r = n.error),
                (i = n.complete),
                n !== l &&
                  (a((c = Object.create(n)).unsubscribe) &&
                    s.add(c.unsubscribe.bind(c)),
                  (c.unsubscribe = s.unsubscribe.bind(s)))),
            (s._context = c),
            (s._next = o),
            (s._error = r),
            (s._complete = i),
            s
          );
        }
        return (
          o(t, e),
          (t.prototype.next = function (e) {
            if (!this.isStopped && this._next) {
              var t = this._parentSubscriber;
              c.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe()
                : this.__tryOrUnsub(this._next, e);
            }
          }),
          (t.prototype.error = function (e) {
            if (!this.isStopped) {
              var t = this._parentSubscriber,
                n = c.useDeprecatedSynchronousErrorHandling;
              if (this._error)
                n && t.syncErrorThrowable
                  ? (this.__tryOrSetError(t, this._error, e),
                    this.unsubscribe())
                  : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
              else if (t.syncErrorThrowable)
                n ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0)) : u(e),
                  this.unsubscribe();
              else {
                if ((this.unsubscribe(), n)) throw e;
                u(e);
              }
            }
          }),
          (t.prototype.complete = function () {
            var e = this;
            if (!this.isStopped) {
              var t = this._parentSubscriber;
              if (this._complete) {
                var n = function () {
                  return e._complete.call(e._context);
                };
                c.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                  ? (this.__tryOrSetError(t, n), this.unsubscribe())
                  : (this.__tryOrUnsub(n), this.unsubscribe());
              } else this.unsubscribe();
            }
          }),
          (t.prototype.__tryOrUnsub = function (e, t) {
            try {
              e.call(this._context, t);
            } catch (n) {
              if ((this.unsubscribe(), c.useDeprecatedSynchronousErrorHandling))
                throw n;
              u(n);
            }
          }),
          (t.prototype.__tryOrSetError = function (e, t, n) {
            if (!c.useDeprecatedSynchronousErrorHandling)
              throw new Error("bad call");
            try {
              t.call(this._context, n);
            } catch (r) {
              return c.useDeprecatedSynchronousErrorHandling
                ? ((e.syncErrorValue = r), (e.syncErrorThrown = !0), !0)
                : (u(r), !0);
            }
            return !1;
          }),
          (t.prototype._unsubscribe = function () {
            var e = this._parentSubscriber;
            (this._context = null),
              (this._parentSubscriber = null),
              e.unsubscribe();
          }),
          t
        );
      })(m);
    var b = (function () {
      return (
        ("function" === typeof Symbol && Symbol.observable) || "@@observable"
      );
    })();
    function E(e) {
      return e;
    }
    function T(e) {
      return 0 === e.length
        ? E
        : 1 === e.length
        ? e[0]
        : function (t) {
            return e.reduce(function (e, t) {
              return t(e);
            }, t);
          };
    }
    var _ = (function () {
      function e(e) {
        (this._isScalar = !1), e && (this._subscribe = e);
      }
      return (
        (e.prototype.lift = function (t) {
          var n = new e();
          return (n.source = this), (n.operator = t), n;
        }),
        (e.prototype.subscribe = function (e, t, n) {
          var r = this.operator,
            i = (function (e, t, n) {
              if (e) {
                if (e instanceof m) return e;
                if (e[y]) return e[y]();
              }
              return e || t || n ? new m(e, t, n) : new m(l);
            })(e, t, n);
          if (
            (r
              ? i.add(r.call(i, this.source))
              : i.add(
                  this.source ||
                    (c.useDeprecatedSynchronousErrorHandling &&
                      !i.syncErrorThrowable)
                    ? this._subscribe(i)
                    : this._trySubscribe(i)
                ),
            c.useDeprecatedSynchronousErrorHandling &&
              i.syncErrorThrowable &&
              ((i.syncErrorThrowable = !1), i.syncErrorThrown))
          )
            throw i.syncErrorValue;
          return i;
        }),
        (e.prototype._trySubscribe = function (e) {
          try {
            return this._subscribe(e);
          } catch (t) {
            c.useDeprecatedSynchronousErrorHandling &&
              ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
              !(function (e) {
                for (; e; ) {
                  var t = e,
                    n = t.closed,
                    r = t.destination,
                    i = t.isStopped;
                  if (n || i) return !1;
                  e = r && r instanceof m ? r : null;
                }
                return !0;
              })(e)
                ? console.warn(t)
                : e.error(t);
          }
        }),
        (e.prototype.forEach = function (e, t) {
          var n = this;
          return new (t = w(t))(function (t, r) {
            var i;
            i = n.subscribe(
              function (t) {
                try {
                  e(t);
                } catch (n) {
                  r(n), i && i.unsubscribe();
                }
              },
              r,
              t
            );
          });
        }),
        (e.prototype._subscribe = function (e) {
          var t = this.source;
          return t && t.subscribe(e);
        }),
        (e.prototype[b] = function () {
          return this;
        }),
        (e.prototype.pipe = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          return 0 === e.length ? this : T(e)(this);
        }),
        (e.prototype.toPromise = function (e) {
          var t = this;
          return new (e = w(e))(function (e, n) {
            var r;
            t.subscribe(
              function (e) {
                return (r = e);
              },
              function (e) {
                return n(e);
              },
              function () {
                return e(r);
              }
            );
          });
        }),
        (e.create = function (t) {
          return new e(t);
        }),
        e
      );
    })();
    function w(e) {
      if ((e || (e = c.Promise || Promise), !e))
        throw new Error("no Promise impl found");
      return e;
    }
    var O = (function () {
        function e() {
          return (
            Error.call(this),
            (this.message = "object unsubscribed"),
            (this.name = "ObjectUnsubscribedError"),
            this
          );
        }
        return (e.prototype = Object.create(Error.prototype)), e;
      })(),
      N = (function (e) {
        function t(t, n) {
          var r = e.call(this) || this;
          return (r.subject = t), (r.subscriber = n), (r.closed = !1), r;
        }
        return (
          o(t, e),
          (t.prototype.unsubscribe = function () {
            if (!this.closed) {
              this.closed = !0;
              var e = this.subject,
                t = e.observers;
              if (
                ((this.subject = null),
                t && 0 !== t.length && !e.isStopped && !e.closed)
              ) {
                var n = t.indexOf(this.subscriber);
                -1 !== n && t.splice(n, 1);
              }
            }
          }),
          t
        );
      })(h),
      S = (function (e) {
        function t(t) {
          var n = e.call(this, t) || this;
          return (n.destination = t), n;
        }
        return o(t, e), t;
      })(m),
      I = (function (e) {
        function t() {
          var t = e.call(this) || this;
          return (
            (t.observers = []),
            (t.closed = !1),
            (t.isStopped = !1),
            (t.hasError = !1),
            (t.thrownError = null),
            t
          );
        }
        return (
          o(t, e),
          (t.prototype[y] = function () {
            return new S(this);
          }),
          (t.prototype.lift = function (e) {
            var t = new k(this, this);
            return (t.operator = e), t;
          }),
          (t.prototype.next = function (e) {
            if (this.closed) throw new O();
            if (!this.isStopped)
              for (
                var t = this.observers, n = t.length, r = t.slice(), i = 0;
                i < n;
                i++
              )
                r[i].next(e);
          }),
          (t.prototype.error = function (e) {
            if (this.closed) throw new O();
            (this.hasError = !0), (this.thrownError = e), (this.isStopped = !0);
            for (
              var t = this.observers, n = t.length, r = t.slice(), i = 0;
              i < n;
              i++
            )
              r[i].error(e);
            this.observers.length = 0;
          }),
          (t.prototype.complete = function () {
            if (this.closed) throw new O();
            this.isStopped = !0;
            for (
              var e = this.observers, t = e.length, n = e.slice(), r = 0;
              r < t;
              r++
            )
              n[r].complete();
            this.observers.length = 0;
          }),
          (t.prototype.unsubscribe = function () {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }),
          (t.prototype._trySubscribe = function (t) {
            if (this.closed) throw new O();
            return e.prototype._trySubscribe.call(this, t);
          }),
          (t.prototype._subscribe = function (e) {
            if (this.closed) throw new O();
            return this.hasError
              ? (e.error(this.thrownError), h.EMPTY)
              : this.isStopped
              ? (e.complete(), h.EMPTY)
              : (this.observers.push(e), new N(this, e));
          }),
          (t.prototype.asObservable = function () {
            var e = new _();
            return (e.source = this), e;
          }),
          (t.create = function (e, t) {
            return new k(e, t);
          }),
          t
        );
      })(_),
      k = (function (e) {
        function t(t, n) {
          var r = e.call(this) || this;
          return (r.destination = t), (r.source = n), r;
        }
        return (
          o(t, e),
          (t.prototype.next = function (e) {
            var t = this.destination;
            t && t.next && t.next(e);
          }),
          (t.prototype.error = function (e) {
            var t = this.destination;
            t && t.error && this.destination.error(e);
          }),
          (t.prototype.complete = function () {
            var e = this.destination;
            e && e.complete && this.destination.complete();
          }),
          (t.prototype._subscribe = function (e) {
            return this.source ? this.source.subscribe(e) : h.EMPTY;
          }),
          t
        );
      })(I),
      x = (function (e) {
        function t(t) {
          var n = e.call(this) || this;
          return (n._value = t), n;
        }
        return (
          o(t, e),
          Object.defineProperty(t.prototype, "value", {
            get: function () {
              return this.getValue();
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype._subscribe = function (t) {
            var n = e.prototype._subscribe.call(this, t);
            return n && !n.closed && t.next(this._value), n;
          }),
          (t.prototype.getValue = function () {
            if (this.hasError) throw this.thrownError;
            if (this.closed) throw new O();
            return this._value;
          }),
          (t.prototype.next = function (t) {
            e.prototype.next.call(this, (this._value = t));
          }),
          t
        );
      })(I);
    function A(e, t) {
      return function (n) {
        if ("function" !== typeof e)
          throw new TypeError(
            "argument is not a function. Are you looking for `mapTo()`?"
          );
        return n.lift(new D(e, t));
      };
    }
    var D = (function () {
        function e(e, t) {
          (this.project = e), (this.thisArg = t);
        }
        return (
          (e.prototype.call = function (e, t) {
            return t.subscribe(new j(e, this.project, this.thisArg));
          }),
          e
        );
      })(),
      j = (function (e) {
        function t(t, n, r) {
          var i = e.call(this, t) || this;
          return (i.project = n), (i.count = 0), (i.thisArg = r || i), i;
        }
        return (
          o(t, e),
          (t.prototype._next = function (e) {
            var t;
            try {
              t = this.project.call(this.thisArg, e, this.count++);
            } catch (n) {
              return void this.destination.error(n);
            }
            this.destination.next(t);
          }),
          t
        );
      })(m);
    function R(e, t) {
      return function (n) {
        return n.lift(new L(e, t));
      };
    }
    var L = (function () {
        function e(e, t) {
          (this.compare = e), (this.keySelector = t);
        }
        return (
          (e.prototype.call = function (e, t) {
            return t.subscribe(new P(e, this.compare, this.keySelector));
          }),
          e
        );
      })(),
      P = (function (e) {
        function t(t, n, r) {
          var i = e.call(this, t) || this;
          return (
            (i.keySelector = r),
            (i.hasKey = !1),
            "function" === typeof n && (i.compare = n),
            i
          );
        }
        return (
          o(t, e),
          (t.prototype.compare = function (e, t) {
            return e === t;
          }),
          (t.prototype._next = function (e) {
            var t;
            try {
              var n = this.keySelector;
              t = n ? n(e) : e;
            } catch (i) {
              return this.destination.error(i);
            }
            var r = !1;
            if (this.hasKey)
              try {
                r = (0, this.compare)(this.key, t);
              } catch (i) {
                return this.destination.error(i);
              }
            else this.hasKey = !0;
            r || ((this.key = t), this.destination.next(e));
          }),
          t
        );
      })(m),
      F = n(4);
    function C(e) {
      return e && "function" === typeof e.schedule;
    }
    var M = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          o(t, e),
          (t.prototype.notifyNext = function (e, t, n, r, i) {
            this.destination.next(t);
          }),
          (t.prototype.notifyError = function (e, t) {
            this.destination.error(e);
          }),
          (t.prototype.notifyComplete = function (e) {
            this.destination.complete();
          }),
          t
        );
      })(m),
      U = (function (e) {
        function t(t, n, r) {
          var i = e.call(this) || this;
          return (
            (i.parent = t),
            (i.outerValue = n),
            (i.outerIndex = r),
            (i.index = 0),
            i
          );
        }
        return (
          o(t, e),
          (t.prototype._next = function (e) {
            this.parent.notifyNext(
              this.outerValue,
              e,
              this.outerIndex,
              this.index++,
              this
            );
          }),
          (t.prototype._error = function (e) {
            this.parent.notifyError(e, this), this.unsubscribe();
          }),
          (t.prototype._complete = function () {
            this.parent.notifyComplete(this), this.unsubscribe();
          }),
          t
        );
      })(m),
      V = function (e) {
        return function (t) {
          for (var n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
          t.complete();
        };
      };
    function B() {
      return "function" === typeof Symbol && Symbol.iterator
        ? Symbol.iterator
        : "@@iterator";
    }
    var G = B();
    var Y = function (e) {
      if (e && "function" === typeof e[b])
        return (
          (i = e),
          function (e) {
            var t = i[b]();
            if ("function" !== typeof t.subscribe)
              throw new TypeError(
                "Provided object does not correctly implement Symbol.observable"
              );
            return t.subscribe(e);
          }
        );
      if ((r = e) && "number" === typeof r.length && "function" !== typeof r)
        return V(e);
      if (
        (function (e) {
          return (
            !!e &&
            "function" !== typeof e.subscribe &&
            "function" === typeof e.then
          );
        })(e)
      )
        return (
          (n = e),
          function (e) {
            return (
              n
                .then(
                  function (t) {
                    e.closed || (e.next(t), e.complete());
                  },
                  function (t) {
                    return e.error(t);
                  }
                )
                .then(null, u),
              e
            );
          }
        );
      if (e && "function" === typeof e[G])
        return (
          (t = e),
          function (e) {
            for (var n = t[G](); ; ) {
              var r = void 0;
              try {
                r = n.next();
              } catch (i) {
                return e.error(i), e;
              }
              if (r.done) {
                e.complete();
                break;
              }
              if ((e.next(r.value), e.closed)) break;
            }
            return (
              "function" === typeof n.return &&
                e.add(function () {
                  n.return && n.return();
                }),
              e
            );
          }
        );
      var t,
        n,
        r,
        i,
        o = p(e) ? "an invalid object" : "'" + e + "'";
      throw new TypeError(
        "You provided " +
          o +
          " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable."
      );
    };
    function q(e, t, n, r, i) {
      if ((void 0 === i && (i = new U(e, n, r)), !i.closed))
        return t instanceof _ ? t.subscribe(i) : Y(t)(i);
    }
    function Q(e, t) {
      return t
        ? (function (e, t) {
            return new _(function (n) {
              var r = new h(),
                i = 0;
              return (
                r.add(
                  t.schedule(function () {
                    i !== e.length
                      ? (n.next(e[i++]), n.closed || r.add(this.schedule()))
                      : n.complete();
                  })
                ),
                r
              );
            });
          })(e, t)
        : new _(V(e));
    }
    var J = {};
    var z = (function () {
        function e(e) {
          this.resultSelector = e;
        }
        return (
          (e.prototype.call = function (e, t) {
            return t.subscribe(new H(e, this.resultSelector));
          }),
          e
        );
      })(),
      H = (function (e) {
        function t(t, n) {
          var r = e.call(this, t) || this;
          return (
            (r.resultSelector = n),
            (r.active = 0),
            (r.values = []),
            (r.observables = []),
            r
          );
        }
        return (
          o(t, e),
          (t.prototype._next = function (e) {
            this.values.push(J), this.observables.push(e);
          }),
          (t.prototype._complete = function () {
            var e = this.observables,
              t = e.length;
            if (0 === t) this.destination.complete();
            else {
              (this.active = t), (this.toRespond = t);
              for (var n = 0; n < t; n++) {
                var r = e[n];
                this.add(q(this, r, void 0, n));
              }
            }
          }),
          (t.prototype.notifyComplete = function (e) {
            0 === (this.active -= 1) && this.destination.complete();
          }),
          (t.prototype.notifyNext = function (e, t, n) {
            var r = this.values,
              i = r[n],
              o = this.toRespond
                ? i === J
                  ? --this.toRespond
                  : this.toRespond
                : 0;
            (r[n] = t),
              0 === o &&
                (this.resultSelector
                  ? this._tryResultSelector(r)
                  : this.destination.next(r.slice()));
          }),
          (t.prototype._tryResultSelector = function (e) {
            var t;
            try {
              t = this.resultSelector.apply(this, e);
            } catch (n) {
              return void this.destination.error(n);
            }
            this.destination.next(t);
          }),
          t
        );
      })(M);
    var K = (function () {
        function e(e, t) {
          (this.predicate = e), (this.thisArg = t);
        }
        return (
          (e.prototype.call = function (e, t) {
            return t.subscribe(new W(e, this.predicate, this.thisArg));
          }),
          e
        );
      })(),
      W = (function (e) {
        function t(t, n, r) {
          var i = e.call(this, t) || this;
          return (i.predicate = n), (i.thisArg = r), (i.count = 0), i;
        }
        return (
          o(t, e),
          (t.prototype._next = function (e) {
            var t;
            try {
              t = this.predicate.call(this.thisArg, e, this.count++);
            } catch (n) {
              return void this.destination.error(n);
            }
            t && this.destination.next(e);
          }),
          t
        );
      })(m),
      X = n(2),
      $ = n.n(X);
    function Z(e, t, n, r, i, o, a) {
      try {
        var s = e[o](a),
          c = s.value;
      } catch (u) {
        return void n(u);
      }
      s.done ? t(c) : Promise.resolve(c).then(r, i);
    }
    function ee(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function te(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var ne = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
      re = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.execute = t),
            te(this, "count", 0),
            te(this, "running", !1),
            te(this, "timeout", void 0);
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: "start",
              value: function (e) {
                var t = this,
                  n = (function () {
                    var r,
                      i =
                        ((r = $.a.mark(function r() {
                          var i;
                          return $.a.wrap(
                            function (r) {
                              for (;;)
                                switch ((r.prev = r.next)) {
                                  case 0:
                                    return (
                                      (t.running = !0),
                                      (r.prev = 1),
                                      (r.next = 4),
                                      t.execute(t.count++)
                                    );
                                  case 4:
                                    if (!r.sent) {
                                      r.next = 7;
                                      break;
                                    }
                                    t.stop(), e();
                                  case 7:
                                    r.next = 12;
                                    break;
                                  case 9:
                                    (r.prev = 9),
                                      (r.t0 = r.catch(1)),
                                      console.error(r.t0);
                                  case 12:
                                    t.running &&
                                      (t.count < 10
                                        ? ((i = Math.floor(
                                            Math.random() * ne[t.count] * 250
                                          )),
                                          (t.timeout = self.setTimeout(n, i)))
                                        : e());
                                  case 13:
                                  case "end":
                                    return r.stop();
                                }
                            },
                            r,
                            null,
                            [[1, 9]]
                          );
                        })),
                        function () {
                          var e = this,
                            t = arguments;
                          return new Promise(function (n, i) {
                            var o = r.apply(e, t);
                            function a(e) {
                              Z(o, n, i, a, s, "next", e);
                            }
                            function s(e) {
                              Z(o, n, i, a, s, "throw", e);
                            }
                            a(void 0);
                          });
                        });
                    return function () {
                      return i.apply(this, arguments);
                    };
                  })();
                n();
              },
            },
            {
              key: "stop",
              value: function () {
                (this.running = !1), self.clearTimeout(this.timeout);
              },
            },
          ]) && ee(t.prototype, n),
          r && ee(t, r),
          e
        );
      })();
    function ie(e) {
      var t = [];
      return (
        e &&
          e.definitions.forEach(function (e) {
            var n;
            Object(r.d)(e) &&
              (null === (n = e.name) || void 0 === n ? void 0 : n.value) &&
              t.push({ name: e.name.value, type: e.operation });
          }),
        t
      );
    }
    function oe(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function ae(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? oe(Object(n), !0).forEach(function (t) {
              se(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : oe(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function se(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function ce(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e)))
            return;
          var n = [],
            r = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var a, s = e[Symbol.iterator]();
              !(r = (a = s.next()).done) &&
              (n.push(a.value), !t || n.length !== t);
              r = !0
            );
          } catch (c) {
            (i = !0), (o = c);
          } finally {
            try {
              r || null == s.return || s.return();
            } finally {
              if (i) throw o;
            }
          }
          return n;
        })(e, t) ||
        (function (e, t) {
          if (!e) return;
          if ("string" === typeof e) return ue(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return ue(e, t);
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function ue(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    var le = new x({});
    function fe() {
      iu("document-cache-delete-item", function (e, t) {
        !(function (e) {
          le.next(ae(ae({}, le.value), {}, se({}, e, void 0)));
        })(t.session.documentId);
      }),
        iu("document-cache-set-item", function (e, t) {
          var n = e.payload;
          !(function (e, t) {
            le.next(ae(ae({}, le.value), {}, se({}, e, t)));
          })(t.session.documentId, n);
        });
    }
    function pe(e) {
      return (function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = void 0,
          r = void 0;
        return (
          C(e[e.length - 1]) && (r = e.pop()),
          "function" === typeof e[e.length - 1] && (n = e.pop()),
          1 === e.length && f(e[0]) && (e = e[0]),
          Q(e, r).lift(new z(n))
        );
      })([
        e.select(function (e) {
          return e.documentId;
        }),
        le,
      ])
        .pipe(
          A(function (e) {
            var t = ce(e, 2),
              n = t[0];
            return { documentId: n, document: t[1][n] };
          }),
          R(),
          ((t = function (e) {
            var t = e.document,
              n = e.documentId;
            return !!t && "" !== n;
          }),
          function (e) {
            return e.lift(new K(t, n));
          })
        )
        .subscribe(function (t) {
          var n = t.document;
          e.sendMessage(
            new F.Message({
              type: "document-operations-update",
              payload: ie(n),
            })
          );
        });
      var t, n;
    }
    function de(e) {
      return le.value[e];
    }
    function he(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function ve(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function ye(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var me = (function () {
      function e(t) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.port = t),
          ye(this, "id", Object(r.b)("context")),
          ye(
            this,
            "session$",
            new x({ documentId: "", httpMethod: "POST", schemaEndpoint: "" })
          ),
          ye(this, "subscriptions", []),
          this.initialize();
      }
      var t, n, i;
      return (
        (t = e),
        (n = [
          {
            key: "dispose",
            value: function () {
              this.session$.complete(),
                this.subscriptions.forEach(function (e) {
                  return e.unsubscribe();
                });
            },
          },
          {
            key: "initialize",
            value: function () {
              var e = this;
              iu("set-session", function (t) {
                var n = t.payload;
                e.session$.next(
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? he(Object(n), !0).forEach(function (t) {
                            ye(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : he(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                    }
                    return e;
                  })({}, n)
                );
              }),
                this.subscriptions.push(pe(this));
            },
          },
          {
            key: "select",
            value: function (e) {
              return this.session$.pipe(A(e), R());
            },
          },
          {
            key: "sendMessage",
            value: function (e) {
              this.port.postMessage(e);
            },
          },
          {
            key: "session",
            get: function () {
              return this.session$.value;
            },
          },
        ]) && ve(t.prototype, n),
        i && ve(t, i),
        e
      );
    })();
    function ge(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function be(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ge(Object(n), !0).forEach(function (t) {
              Ee(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ge(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Ee(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var Te = {};
    function _e() {
      iu("http-headers-cache-delete-item", function (e, t) {
        !(function (e) {
          Te = be(be({}, Te), {}, Ee({}, e, void 0));
        })(t.session.documentId);
      }),
        iu("http-headers-cache-set-item", function (e, t) {
          var n = e.payload;
          !(function (e, t) {
            Te = be(be({}, Te), {}, Ee({}, e, t));
          })(t.session.documentId, n);
        });
    }
    function we(e) {
      return Te[e];
    }
    var Oe =
        Object.entries ||
        function (e) {
          return Object.keys(e).map(function (t) {
            return [t, e[t]];
          });
        },
      Ne = "function" === typeof Symbol ? Symbol.iterator : "@@iterator",
      Se =
        ("function" === typeof Symbol && Symbol.asyncIterator,
        "function" === typeof Symbol ? Symbol.toStringTag : "@@toStringTag"),
      Ie = n(1);
    function ke(e, t) {
      return e.reduce(function (e, n) {
        return (e[t(n)] = n), e;
      }, Object.create(null));
    }
    function xe(e, t) {
      for (var n = Object.create(null), r = 0, i = Oe(e); r < i.length; r++) {
        var o = i[r],
          a = o[0],
          s = o[1];
        n[a] = t(s, a);
      }
      return n;
    }
    function Ae(e) {
      if (null === Object.getPrototypeOf(e)) return e;
      for (var t = Object.create(null), n = 0, r = Oe(e); n < r.length; n++) {
        var i = r[n],
          o = i[0],
          a = i[1];
        t[o] = a;
      }
      return t;
    }
    function De(e, t) {
      if (!Boolean(e)) throw new Error(t);
    }
    function je(e, t, n) {
      return e.reduce(function (e, r) {
        return (e[t(r)] = n(r)), e;
      }, Object.create(null));
    }
    var Re = function (e, t) {
      return e instanceof t;
    };
    function Le(e, t) {
      var n = "string" === typeof e ? [e, t] : [void 0, e],
        r = n[0],
        i = " Did you mean ";
      r && (i += r + " ");
      var o = n[1].map(function (e) {
        return '"'.concat(e, '"');
      });
      switch (o.length) {
        case 0:
          return "";
        case 1:
          return i + o[0] + "?";
        case 2:
          return i + o[0] + " or " + o[1] + "?";
      }
      var a = o.slice(0, 5),
        s = a.pop();
      return i + a.join(", ") + ", or " + s + "?";
    }
    function Pe(e) {
      return (Pe =
        "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" === typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Fe(e) {
      return "object" == Pe(e) && null !== e;
    }
    function Ce(e) {
      return e;
    }
    var Me = n(8);
    function Ue(e, t) {
      for (
        var n = Object.create(null),
          r = new Ve(e),
          i = Math.floor(0.4 * e.length) + 1,
          o = 0;
        o < t.length;
        o++
      ) {
        var a = t[o],
          s = r.measure(a, i);
        void 0 !== s && (n[a] = s);
      }
      return Object.keys(n).sort(function (e, t) {
        var r = n[e] - n[t];
        return 0 !== r ? r : e.localeCompare(t);
      });
    }
    var Ve = (function () {
      function e(e) {
        (this._input = e),
          (this._inputLowerCase = e.toLowerCase()),
          (this._inputArray = Be(this._inputLowerCase)),
          (this._rows = [
            new Array(e.length + 1).fill(0),
            new Array(e.length + 1).fill(0),
            new Array(e.length + 1).fill(0),
          ]);
      }
      return (
        (e.prototype.measure = function (e, t) {
          if (this._input === e) return 0;
          var n = e.toLowerCase();
          if (this._inputLowerCase === n) return 1;
          var r = Be(n),
            i = this._inputArray;
          if (r.length < i.length) {
            var o = r;
            (r = i), (i = o);
          }
          var a = r.length,
            s = i.length;
          if (!(a - s > t)) {
            for (var c = this._rows, u = 0; u <= s; u++) c[0][u] = u;
            for (var l = 1; l <= a; l++) {
              for (
                var f = c[(l - 1) % 3], p = c[l % 3], d = (p[0] = l), h = 1;
                h <= s;
                h++
              ) {
                var v = r[l - 1] === i[h - 1] ? 0 : 1,
                  y = Math.min(f[h] + 1, p[h - 1] + 1, f[h - 1] + v);
                if (
                  l > 1 &&
                  h > 1 &&
                  r[l - 1] === i[h - 2] &&
                  r[l - 2] === i[h - 1]
                ) {
                  var m = c[(l - 2) % 3][h - 2];
                  y = Math.min(y, m + 1);
                }
                y < d && (d = y), (p[h] = y);
              }
              if (d > t) return;
            }
            var g = c[a % 3][s];
            return g <= t ? g : void 0;
          }
        }),
        e
      );
    })();
    function Be(e) {
      for (var t = e.length, n = new Array(t), r = 0; r < t; ++r)
        n[r] = e.charCodeAt(r);
      return n;
    }
    function Ge(e, t) {
      for (
        var n, r = /\r\n|[\n\r]/g, i = 1, o = t + 1;
        (n = r.exec(e.body)) && n.index < t;

      )
        (i += 1), (o = t + 1 - (n.index + n[0].length));
      return { line: i, column: o };
    }
    function Ye(e) {
      return qe(e.source, Ge(e.source, e.start));
    }
    function qe(e, t) {
      var n = e.locationOffset.column - 1,
        r = Je(n) + e.body,
        i = t.line - 1,
        o = e.locationOffset.line - 1,
        a = t.line + o,
        s = 1 === t.line ? n : 0,
        c = t.column + s,
        u = "".concat(e.name, ":").concat(a, ":").concat(c, "\n"),
        l = r.split(/\r\n|[\n\r]/g),
        f = l[i];
      if (f.length > 120) {
        for (
          var p = Math.floor(c / 80), d = c % 80, h = [], v = 0;
          v < f.length;
          v += 80
        )
          h.push(f.slice(v, v + 80));
        return (
          u +
          Qe(
            [["".concat(a), h[0]]].concat(
              h.slice(1, p + 1).map(function (e) {
                return ["", e];
              }),
              [
                [" ", Je(d - 1) + "^"],
                ["", h[p + 1]],
              ]
            )
          )
        );
      }
      return (
        u +
        Qe([
          ["".concat(a - 1), l[i - 1]],
          ["".concat(a), f],
          ["", Je(c - 1) + "^"],
          ["".concat(a + 1), l[i + 1]],
        ])
      );
    }
    function Qe(e) {
      var t = e.filter(function (e) {
          e[0];
          return void 0 !== e[1];
        }),
        n = Math.max.apply(
          Math,
          t.map(function (e) {
            return e[0].length;
          })
        );
      return t
        .map(function (e) {
          var t,
            r = e[0],
            i = e[1];
          return Je(n - (t = r).length) + t + (i ? " | " + i : " |");
        })
        .join("\n");
    }
    function Je(e) {
      return Array(e + 1).join(" ");
    }
    function ze(e) {
      return (ze =
        "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" === typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function He(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Ke(e, t) {
      return !t || ("object" !== ze(t) && "function" !== typeof t) ? We(e) : t;
    }
    function We(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function Xe(e) {
      var t = "function" === typeof Map ? new Map() : void 0;
      return (Xe = function (e) {
        if (
          null === e ||
          ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
        )
          return e;
        var n;
        if ("function" !== typeof e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if ("undefined" !== typeof t) {
          if (t.has(e)) return t.get(e);
          t.set(e, r);
        }
        function r() {
          return $e(e, arguments, tt(this).constructor);
        }
        return (
          (r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          et(r, e)
        );
      })(e);
    }
    function $e(e, t, n) {
      return ($e = Ze()
        ? Reflect.construct
        : function (e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var i = new (Function.bind.apply(e, r))();
            return n && et(i, n.prototype), i;
          }).apply(null, arguments);
    }
    function Ze() {
      if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" === typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    function et(e, t) {
      return (et =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function tt(e) {
      return (tt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var nt = (function (e) {
      !(function (e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && et(e, t);
      })(o, e);
      var t,
        n,
        r,
        i = (function (e) {
          var t = Ze();
          return function () {
            var n,
              r = tt(e);
            if (t) {
              var i = tt(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Ke(this, n);
          };
        })(o);
      function o(e, t, n, r, a, s, c) {
        var u, l, f, p, d;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, o),
          (d = i.call(this, e));
        var h,
          v = Array.isArray(t)
            ? 0 !== t.length
              ? t
              : void 0
            : t
            ? [t]
            : void 0,
          y = n;
        !y &&
          v &&
          (y = null === (h = v[0].loc) || void 0 === h ? void 0 : h.source);
        var m,
          g = r;
        !g &&
          v &&
          (g = v.reduce(function (e, t) {
            return t.loc && e.push(t.loc.start), e;
          }, [])),
          g && 0 === g.length && (g = void 0),
          r && n
            ? (m = r.map(function (e) {
                return Ge(n, e);
              }))
            : v &&
              (m = v.reduce(function (e, t) {
                return t.loc && e.push(Ge(t.loc.source, t.loc.start)), e;
              }, []));
        var b = c;
        if (null == b && null != s) {
          var E = s.extensions;
          Fe(E) && (b = E);
        }
        return (
          Object.defineProperties(We(d), {
            name: { value: "GraphQLError" },
            message: { value: e, enumerable: !0, writable: !0 },
            locations: {
              value: null !== (u = m) && void 0 !== u ? u : void 0,
              enumerable: null != m,
            },
            path: {
              value: null !== a && void 0 !== a ? a : void 0,
              enumerable: null != a,
            },
            nodes: { value: null !== v && void 0 !== v ? v : void 0 },
            source: { value: null !== (l = y) && void 0 !== l ? l : void 0 },
            positions: { value: null !== (f = g) && void 0 !== f ? f : void 0 },
            originalError: { value: s },
            extensions: {
              value: null !== (p = b) && void 0 !== p ? p : void 0,
              enumerable: null != b,
            },
          }),
          (null === s || void 0 === s ? void 0 : s.stack)
            ? (Object.defineProperty(We(d), "stack", {
                value: s.stack,
                writable: !0,
                configurable: !0,
              }),
              Ke(d))
            : (Error.captureStackTrace
                ? Error.captureStackTrace(We(d), o)
                : Object.defineProperty(We(d), "stack", {
                    value: Error().stack,
                    writable: !0,
                    configurable: !0,
                  }),
              d)
        );
      }
      return (
        (t = o),
        (n = [
          {
            key: "toString",
            value: function () {
              return (function (e) {
                var t = e.message;
                if (e.nodes)
                  for (var n = 0, r = e.nodes; n < r.length; n++) {
                    var i = r[n];
                    i.loc && (t += "\n\n" + Ye(i.loc));
                  }
                else if (e.source && e.locations)
                  for (var o = 0, a = e.locations; o < a.length; o++) {
                    var s = a[o];
                    t += "\n\n" + qe(e.source, s);
                  }
                return t;
              })(this);
            },
          },
          {
            key: Se,
            get: function () {
              return "Object";
            },
          },
        ]) && He(t.prototype, n),
        r && He(t, r),
        o
      );
    })(Xe(Error));
    var rt = n(0),
      it = n(5),
      ot = n(7);
    function at(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function st(e, t, n) {
      return t && at(e.prototype, t), n && at(e, n), e;
    }
    function ct(e) {
      return (
        ut(e) || lt(e) || ft(e) || pt(e) || dt(e) || ht(e) || vt(e) || yt(e)
      );
    }
    function ut(e) {
      return Re(e, Dt);
    }
    function lt(e) {
      return Re(e, jt);
    }
    function ft(e) {
      return Re(e, Ut);
    }
    function pt(e) {
      return Re(e, Vt);
    }
    function dt(e) {
      return Re(e, Gt);
    }
    function ht(e) {
      return Re(e, qt);
    }
    function vt(e) {
      return Re(e, _t);
    }
    function yt(e) {
      return Re(e, wt);
    }
    function mt(e) {
      return ut(e) || dt(e) || ht(e) || (Ot(e) && mt(e.ofType));
    }
    function gt(e) {
      return (
        ut(e) || lt(e) || ft(e) || pt(e) || dt(e) || (Ot(e) && gt(e.ofType))
      );
    }
    function bt(e) {
      return ut(e) || dt(e);
    }
    function Et(e) {
      return lt(e) || ft(e) || pt(e);
    }
    function Tt(e) {
      return ft(e) || pt(e);
    }
    function _t(e) {
      if (!(this instanceof _t)) return new _t(e);
      this.ofType = (function (e) {
        if (!ct(e))
          throw new Error(
            "Expected ".concat(Object(Ie.a)(e), " to be a GraphQL type.")
          );
        return e;
      })(e);
    }
    function wt(e) {
      if (!(this instanceof wt)) return new wt(e);
      this.ofType = Nt(e);
    }
    function Ot(e) {
      return vt(e) || yt(e);
    }
    function Nt(e) {
      if (
        !(function (e) {
          return ct(e) && !yt(e);
        })(e)
      )
        throw new Error(
          "Expected ".concat(Object(Ie.a)(e), " to be a GraphQL nullable type.")
        );
      return e;
    }
    function St(e) {
      if (e) return yt(e) ? e.ofType : e;
    }
    function It(e) {
      return ut(e) || lt(e) || ft(e) || pt(e) || dt(e) || ht(e);
    }
    function kt(e) {
      if (e) {
        for (var t = e; Ot(t); ) t = t.ofType;
        return t;
      }
    }
    function xt(e) {
      return "function" === typeof e ? e() : e;
    }
    function At(e) {
      return e && e.length > 0 ? e : void 0;
    }
    (_t.prototype.toString = function () {
      return "[" + String(this.ofType) + "]";
    }),
      (_t.prototype.toJSON = function () {
        return this.toString();
      }),
      Object.defineProperty(_t.prototype, Se, {
        get: function () {
          return "GraphQLList";
        },
      }),
      Object(Me.a)(_t),
      (wt.prototype.toString = function () {
        return String(this.ofType) + "!";
      }),
      (wt.prototype.toJSON = function () {
        return this.toString();
      }),
      Object.defineProperty(wt.prototype, Se, {
        get: function () {
          return "GraphQLNonNull";
        },
      }),
      Object(Me.a)(wt);
    var Dt = (function () {
      function e(e) {
        var t,
          n,
          r,
          i = null !== (t = e.parseValue) && void 0 !== t ? t : Ce;
        (this.name = e.name),
          (this.description = e.description),
          (this.specifiedByUrl = e.specifiedByUrl),
          (this.serialize =
            null !== (n = e.serialize) && void 0 !== n ? n : Ce),
          (this.parseValue = i),
          (this.parseLiteral =
            null !== (r = e.parseLiteral) && void 0 !== r
              ? r
              : function (e) {
                  return i(
                    (function e(t, n) {
                      switch (t.kind) {
                        case rt.a.NULL:
                          return null;
                        case rt.a.INT:
                          return parseInt(t.value, 10);
                        case rt.a.FLOAT:
                          return parseFloat(t.value);
                        case rt.a.STRING:
                        case rt.a.ENUM:
                        case rt.a.BOOLEAN:
                          return t.value;
                        case rt.a.LIST:
                          return t.values.map(function (t) {
                            return e(t, n);
                          });
                        case rt.a.OBJECT:
                          return je(
                            t.fields,
                            function (e) {
                              return e.name.value;
                            },
                            function (t) {
                              return e(t.value, n);
                            }
                          );
                        case rt.a.VARIABLE:
                          return null === n || void 0 === n
                            ? void 0
                            : n[t.name.value];
                      }
                      Object(ot.a)(
                        0,
                        "Unexpected value node: " + Object(Ie.a)(t)
                      );
                    })(e)
                  );
                }),
          (this.extensions = e.extensions && Ae(e.extensions)),
          (this.astNode = e.astNode),
          (this.extensionASTNodes = At(e.extensionASTNodes)),
          "string" === typeof e.name || De(0, "Must provide name."),
          null == e.specifiedByUrl ||
            "string" === typeof e.specifiedByUrl ||
            De(
              0,
              "".concat(
                this.name,
                ' must provide "specifiedByUrl" as a string, '
              ) + "but got: ".concat(Object(Ie.a)(e.specifiedByUrl), ".")
            ),
          null == e.serialize ||
            "function" === typeof e.serialize ||
            De(
              0,
              "".concat(
                this.name,
                ' must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.'
              )
            ),
          e.parseLiteral &&
            (("function" === typeof e.parseValue &&
              "function" === typeof e.parseLiteral) ||
              De(
                0,
                "".concat(
                  this.name,
                  ' must provide both "parseValue" and "parseLiteral" functions.'
                )
              ));
      }
      var t = e.prototype;
      return (
        (t.toConfig = function () {
          var e;
          return {
            name: this.name,
            description: this.description,
            specifiedByUrl: this.specifiedByUrl,
            serialize: this.serialize,
            parseValue: this.parseValue,
            parseLiteral: this.parseLiteral,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes:
              null !== (e = this.extensionASTNodes) && void 0 !== e ? e : [],
          };
        }),
        (t.toString = function () {
          return this.name;
        }),
        (t.toJSON = function () {
          return this.toString();
        }),
        st(e, [
          {
            key: Se,
            get: function () {
              return "GraphQLScalarType";
            },
          },
        ]),
        e
      );
    })();
    Object(Me.a)(Dt);
    var jt = (function () {
      function e(e) {
        (this.name = e.name),
          (this.description = e.description),
          (this.isTypeOf = e.isTypeOf),
          (this.extensions = e.extensions && Ae(e.extensions)),
          (this.astNode = e.astNode),
          (this.extensionASTNodes = At(e.extensionASTNodes)),
          (this._fields = Lt.bind(void 0, e)),
          (this._interfaces = Rt.bind(void 0, e)),
          "string" === typeof e.name || De(0, "Must provide name."),
          null == e.isTypeOf ||
            "function" === typeof e.isTypeOf ||
            De(
              0,
              "".concat(this.name, ' must provide "isTypeOf" as a function, ') +
                "but got: ".concat(Object(Ie.a)(e.isTypeOf), ".")
            );
      }
      var t = e.prototype;
      return (
        (t.getFields = function () {
          return (
            "function" === typeof this._fields &&
              (this._fields = this._fields()),
            this._fields
          );
        }),
        (t.getInterfaces = function () {
          return (
            "function" === typeof this._interfaces &&
              (this._interfaces = this._interfaces()),
            this._interfaces
          );
        }),
        (t.toConfig = function () {
          return {
            name: this.name,
            description: this.description,
            interfaces: this.getInterfaces(),
            fields: Ft(this.getFields()),
            isTypeOf: this.isTypeOf,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes || [],
          };
        }),
        (t.toString = function () {
          return this.name;
        }),
        (t.toJSON = function () {
          return this.toString();
        }),
        st(e, [
          {
            key: Se,
            get: function () {
              return "GraphQLObjectType";
            },
          },
        ]),
        e
      );
    })();
    function Rt(e) {
      var t,
        n = null !== (t = xt(e.interfaces)) && void 0 !== t ? t : [];
      return (
        Array.isArray(n) ||
          De(
            0,
            "".concat(
              e.name,
              " interfaces must be an Array or a function which returns an Array."
            )
          ),
        n
      );
    }
    function Lt(e) {
      var t = xt(e.fields);
      return (
        Pt(t) ||
          De(
            0,
            "".concat(
              e.name,
              " fields must be an object with field names as keys or a function which returns such an object."
            )
          ),
        xe(t, function (t, n) {
          var r;
          Pt(t) ||
            De(
              0,
              ""
                .concat(e.name, ".")
                .concat(n, " field config must be an object.")
            ),
            !("isDeprecated" in t) ||
              De(
                0,
                ""
                  .concat(e.name, ".")
                  .concat(
                    n,
                    ' should provide "deprecationReason" instead of "isDeprecated".'
                  )
              ),
            null == t.resolve ||
              "function" === typeof t.resolve ||
              De(
                0,
                ""
                  .concat(e.name, ".")
                  .concat(n, " field resolver must be a function if ") +
                  "provided, but got: ".concat(Object(Ie.a)(t.resolve), ".")
              );
          var i = null !== (r = t.args) && void 0 !== r ? r : {};
          Pt(i) ||
            De(
              0,
              ""
                .concat(e.name, ".")
                .concat(
                  n,
                  " args must be an object with argument names as keys."
                )
            );
          var o = Oe(i).map(function (e) {
            var t = e[0],
              n = e[1];
            return {
              name: t,
              description: n.description,
              type: n.type,
              defaultValue: n.defaultValue,
              extensions: n.extensions && Ae(n.extensions),
              astNode: n.astNode,
            };
          });
          return {
            name: n,
            description: t.description,
            type: t.type,
            args: o,
            resolve: t.resolve,
            subscribe: t.subscribe,
            isDeprecated: null != t.deprecationReason,
            deprecationReason: t.deprecationReason,
            extensions: t.extensions && Ae(t.extensions),
            astNode: t.astNode,
          };
        })
      );
    }
    function Pt(e) {
      return Fe(e) && !Array.isArray(e);
    }
    function Ft(e) {
      return xe(e, function (e) {
        return {
          description: e.description,
          type: e.type,
          args: Ct(e.args),
          resolve: e.resolve,
          subscribe: e.subscribe,
          deprecationReason: e.deprecationReason,
          extensions: e.extensions,
          astNode: e.astNode,
        };
      });
    }
    function Ct(e) {
      return je(
        e,
        function (e) {
          return e.name;
        },
        function (e) {
          return {
            description: e.description,
            type: e.type,
            defaultValue: e.defaultValue,
            extensions: e.extensions,
            astNode: e.astNode,
          };
        }
      );
    }
    function Mt(e) {
      return yt(e.type) && void 0 === e.defaultValue;
    }
    Object(Me.a)(jt);
    var Ut = (function () {
      function e(e) {
        (this.name = e.name),
          (this.description = e.description),
          (this.resolveType = e.resolveType),
          (this.extensions = e.extensions && Ae(e.extensions)),
          (this.astNode = e.astNode),
          (this.extensionASTNodes = At(e.extensionASTNodes)),
          (this._fields = Lt.bind(void 0, e)),
          (this._interfaces = Rt.bind(void 0, e)),
          "string" === typeof e.name || De(0, "Must provide name."),
          null == e.resolveType ||
            "function" === typeof e.resolveType ||
            De(
              0,
              "".concat(
                this.name,
                ' must provide "resolveType" as a function, '
              ) + "but got: ".concat(Object(Ie.a)(e.resolveType), ".")
            );
      }
      var t = e.prototype;
      return (
        (t.getFields = function () {
          return (
            "function" === typeof this._fields &&
              (this._fields = this._fields()),
            this._fields
          );
        }),
        (t.getInterfaces = function () {
          return (
            "function" === typeof this._interfaces &&
              (this._interfaces = this._interfaces()),
            this._interfaces
          );
        }),
        (t.toConfig = function () {
          var e;
          return {
            name: this.name,
            description: this.description,
            interfaces: this.getInterfaces(),
            fields: Ft(this.getFields()),
            resolveType: this.resolveType,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes:
              null !== (e = this.extensionASTNodes) && void 0 !== e ? e : [],
          };
        }),
        (t.toString = function () {
          return this.name;
        }),
        (t.toJSON = function () {
          return this.toString();
        }),
        st(e, [
          {
            key: Se,
            get: function () {
              return "GraphQLInterfaceType";
            },
          },
        ]),
        e
      );
    })();
    Object(Me.a)(Ut);
    var Vt = (function () {
      function e(e) {
        (this.name = e.name),
          (this.description = e.description),
          (this.resolveType = e.resolveType),
          (this.extensions = e.extensions && Ae(e.extensions)),
          (this.astNode = e.astNode),
          (this.extensionASTNodes = At(e.extensionASTNodes)),
          (this._types = Bt.bind(void 0, e)),
          "string" === typeof e.name || De(0, "Must provide name."),
          null == e.resolveType ||
            "function" === typeof e.resolveType ||
            De(
              0,
              "".concat(
                this.name,
                ' must provide "resolveType" as a function, '
              ) + "but got: ".concat(Object(Ie.a)(e.resolveType), ".")
            );
      }
      var t = e.prototype;
      return (
        (t.getTypes = function () {
          return (
            "function" === typeof this._types && (this._types = this._types()),
            this._types
          );
        }),
        (t.toConfig = function () {
          var e;
          return {
            name: this.name,
            description: this.description,
            types: this.getTypes(),
            resolveType: this.resolveType,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes:
              null !== (e = this.extensionASTNodes) && void 0 !== e ? e : [],
          };
        }),
        (t.toString = function () {
          return this.name;
        }),
        (t.toJSON = function () {
          return this.toString();
        }),
        st(e, [
          {
            key: Se,
            get: function () {
              return "GraphQLUnionType";
            },
          },
        ]),
        e
      );
    })();
    function Bt(e) {
      var t = xt(e.types);
      return (
        Array.isArray(t) ||
          De(
            0,
            "Must provide Array of types or a function which returns such an array for Union ".concat(
              e.name,
              "."
            )
          ),
        t
      );
    }
    Object(Me.a)(Vt);
    var Gt = (function () {
      function e(e) {
        var t, n;
        (this.name = e.name),
          (this.description = e.description),
          (this.extensions = e.extensions && Ae(e.extensions)),
          (this.astNode = e.astNode),
          (this.extensionASTNodes = At(e.extensionASTNodes)),
          (this._values =
            ((t = this.name),
            Pt((n = e.values)) ||
              De(
                0,
                "".concat(
                  t,
                  " values must be an object with value names as keys."
                )
              ),
            Oe(n).map(function (e) {
              var n = e[0],
                r = e[1];
              return (
                Pt(r) ||
                  De(
                    0,
                    ""
                      .concat(t, ".")
                      .concat(
                        n,
                        ' must refer to an object with a "value" key '
                      ) +
                      "representing an internal value but got: ".concat(
                        Object(Ie.a)(r),
                        "."
                      )
                  ),
                !("isDeprecated" in r) ||
                  De(
                    0,
                    ""
                      .concat(t, ".")
                      .concat(
                        n,
                        ' should provide "deprecationReason" instead of "isDeprecated".'
                      )
                  ),
                {
                  name: n,
                  description: r.description,
                  value: void 0 !== r.value ? r.value : n,
                  isDeprecated: null != r.deprecationReason,
                  deprecationReason: r.deprecationReason,
                  extensions: r.extensions && Ae(r.extensions),
                  astNode: r.astNode,
                }
              );
            }))),
          (this._valueLookup = new Map(
            this._values.map(function (e) {
              return [e.value, e];
            })
          )),
          (this._nameLookup = ke(this._values, function (e) {
            return e.name;
          })),
          "string" === typeof e.name || De(0, "Must provide name.");
      }
      var t = e.prototype;
      return (
        (t.getValues = function () {
          return this._values;
        }),
        (t.getValue = function (e) {
          return this._nameLookup[e];
        }),
        (t.serialize = function (e) {
          var t = this._valueLookup.get(e);
          if (void 0 === t)
            throw new nt(
              'Enum "'
                .concat(this.name, '" cannot represent value: ')
                .concat(Object(Ie.a)(e))
            );
          return t.name;
        }),
        (t.parseValue = function (e) {
          if ("string" !== typeof e) {
            var t = Object(Ie.a)(e);
            throw new nt(
              'Enum "'
                .concat(this.name, '" cannot represent non-string value: ')
                .concat(t, ".") + Yt(this, t)
            );
          }
          var n = this.getValue(e);
          if (null == n)
            throw new nt(
              'Value "'
                .concat(e, '" does not exist in "')
                .concat(this.name, '" enum.') + Yt(this, e)
            );
          return n.value;
        }),
        (t.parseLiteral = function (e, t) {
          if (e.kind !== rt.a.ENUM) {
            var n = Object(it.print)(e);
            throw new nt(
              'Enum "'
                .concat(this.name, '" cannot represent non-enum value: ')
                .concat(n, ".") + Yt(this, n),
              e
            );
          }
          var r = this.getValue(e.value);
          if (null == r) {
            var i = Object(it.print)(e);
            throw new nt(
              'Value "'
                .concat(i, '" does not exist in "')
                .concat(this.name, '" enum.') + Yt(this, i),
              e
            );
          }
          return r.value;
        }),
        (t.toConfig = function () {
          var e,
            t = je(
              this.getValues(),
              function (e) {
                return e.name;
              },
              function (e) {
                return {
                  description: e.description,
                  value: e.value,
                  deprecationReason: e.deprecationReason,
                  extensions: e.extensions,
                  astNode: e.astNode,
                };
              }
            );
          return {
            name: this.name,
            description: this.description,
            values: t,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes:
              null !== (e = this.extensionASTNodes) && void 0 !== e ? e : [],
          };
        }),
        (t.toString = function () {
          return this.name;
        }),
        (t.toJSON = function () {
          return this.toString();
        }),
        st(e, [
          {
            key: Se,
            get: function () {
              return "GraphQLEnumType";
            },
          },
        ]),
        e
      );
    })();
    function Yt(e, t) {
      return Le(
        "the enum value",
        Ue(
          t,
          e.getValues().map(function (e) {
            return e.name;
          })
        )
      );
    }
    Object(Me.a)(Gt);
    var qt = (function () {
      function e(e) {
        (this.name = e.name),
          (this.description = e.description),
          (this.extensions = e.extensions && Ae(e.extensions)),
          (this.astNode = e.astNode),
          (this.extensionASTNodes = At(e.extensionASTNodes)),
          (this._fields = Qt.bind(void 0, e)),
          "string" === typeof e.name || De(0, "Must provide name.");
      }
      var t = e.prototype;
      return (
        (t.getFields = function () {
          return (
            "function" === typeof this._fields &&
              (this._fields = this._fields()),
            this._fields
          );
        }),
        (t.toConfig = function () {
          var e,
            t = xe(this.getFields(), function (e) {
              return {
                description: e.description,
                type: e.type,
                defaultValue: e.defaultValue,
                extensions: e.extensions,
                astNode: e.astNode,
              };
            });
          return {
            name: this.name,
            description: this.description,
            fields: t,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes:
              null !== (e = this.extensionASTNodes) && void 0 !== e ? e : [],
          };
        }),
        (t.toString = function () {
          return this.name;
        }),
        (t.toJSON = function () {
          return this.toString();
        }),
        st(e, [
          {
            key: Se,
            get: function () {
              return "GraphQLInputObjectType";
            },
          },
        ]),
        e
      );
    })();
    function Qt(e) {
      var t = xt(e.fields);
      return (
        Pt(t) ||
          De(
            0,
            "".concat(
              e.name,
              " fields must be an object with field names as keys or a function which returns such an object."
            )
          ),
        xe(t, function (t, n) {
          return (
            !("resolve" in t) ||
              De(
                0,
                ""
                  .concat(e.name, ".")
                  .concat(
                    n,
                    " field has a resolve property, but Input Types cannot define resolvers."
                  )
              ),
            {
              name: n,
              description: t.description,
              type: t.type,
              defaultValue: t.defaultValue,
              extensions: t.extensions && Ae(t.extensions),
              astNode: t.astNode,
            }
          );
        })
      );
    }
    Object(Me.a)(qt);
    var Jt =
        Object.values ||
        function (e) {
          return Object.keys(e).map(function (t) {
            return e[t];
          });
        },
      zt = Object.freeze({
        QUERY: "QUERY",
        MUTATION: "MUTATION",
        SUBSCRIPTION: "SUBSCRIPTION",
        FIELD: "FIELD",
        FRAGMENT_DEFINITION: "FRAGMENT_DEFINITION",
        FRAGMENT_SPREAD: "FRAGMENT_SPREAD",
        INLINE_FRAGMENT: "INLINE_FRAGMENT",
        VARIABLE_DEFINITION: "VARIABLE_DEFINITION",
        SCHEMA: "SCHEMA",
        SCALAR: "SCALAR",
        OBJECT: "OBJECT",
        FIELD_DEFINITION: "FIELD_DEFINITION",
        ARGUMENT_DEFINITION: "ARGUMENT_DEFINITION",
        INTERFACE: "INTERFACE",
        UNION: "UNION",
        ENUM: "ENUM",
        ENUM_VALUE: "ENUM_VALUE",
        INPUT_OBJECT: "INPUT_OBJECT",
        INPUT_FIELD_DEFINITION: "INPUT_FIELD_DEFINITION",
      }),
      Ht =
        Number.isFinite ||
        function (e) {
          return "number" === typeof e && isFinite(e);
        },
      Kt =
        Array.from ||
        function (e, t, n) {
          if (null == e)
            throw new TypeError(
              "Array.from requires an array-like object - not null or undefined"
            );
          var r = e[Ne];
          if ("function" === typeof r) {
            for (var i, o = r.call(e), a = [], s = 0; !(i = o.next()).done; ++s)
              if ((a.push(t.call(n, i.value, s)), s > 9999999))
                throw new TypeError("Near-infinite iteration.");
            return a;
          }
          var c = e.length;
          if ("number" === typeof c && c >= 0 && c % 1 === 0) {
            for (var u = [], l = 0; l < c; ++l)
              Object.prototype.hasOwnProperty.call(e, l) &&
                u.push(t.call(n, e[l], l));
            return u;
          }
          return [];
        };
    function Wt(e) {
      return (Wt =
        "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" === typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var Xt =
      Number.isInteger ||
      function (e) {
        return "number" === typeof e && isFinite(e) && Math.floor(e) === e;
      };
    var $t = new Dt({
      name: "Int",
      description:
        "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
      serialize: function (e) {
        var t = en(e);
        if ("boolean" === typeof t) return t ? 1 : 0;
        var n = t;
        if (("string" === typeof t && "" !== t && (n = Number(t)), !Xt(n)))
          throw new nt(
            "Int cannot represent non-integer value: ".concat(Object(Ie.a)(t))
          );
        if (n > 2147483647 || n < -2147483648)
          throw new nt(
            "Int cannot represent non 32-bit signed integer value: " +
              Object(Ie.a)(t)
          );
        return n;
      },
      parseValue: function (e) {
        if (!Xt(e))
          throw new nt(
            "Int cannot represent non-integer value: ".concat(Object(Ie.a)(e))
          );
        if (e > 2147483647 || e < -2147483648)
          throw new nt(
            "Int cannot represent non 32-bit signed integer value: ".concat(e)
          );
        return e;
      },
      parseLiteral: function (e) {
        if (e.kind !== rt.a.INT)
          throw new nt(
            "Int cannot represent non-integer value: ".concat(
              Object(it.print)(e)
            ),
            e
          );
        var t = parseInt(e.value, 10);
        if (t > 2147483647 || t < -2147483648)
          throw new nt(
            "Int cannot represent non 32-bit signed integer value: ".concat(
              e.value
            ),
            e
          );
        return t;
      },
    });
    var Zt = new Dt({
      name: "Float",
      description:
        "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
      serialize: function (e) {
        var t = en(e);
        if ("boolean" === typeof t) return t ? 1 : 0;
        var n = t;
        if (("string" === typeof t && "" !== t && (n = Number(t)), !Ht(n)))
          throw new nt(
            "Float cannot represent non numeric value: ".concat(Object(Ie.a)(t))
          );
        return n;
      },
      parseValue: function (e) {
        if (!Ht(e))
          throw new nt(
            "Float cannot represent non numeric value: ".concat(Object(Ie.a)(e))
          );
        return e;
      },
      parseLiteral: function (e) {
        if (e.kind !== rt.a.FLOAT && e.kind !== rt.a.INT)
          throw new nt(
            "Float cannot represent non numeric value: ".concat(
              Object(it.print)(e)
            ),
            e
          );
        return parseFloat(e.value);
      },
    });
    function en(e) {
      if (Fe(e)) {
        if ("function" === typeof e.valueOf) {
          var t = e.valueOf();
          if (!Fe(t)) return t;
        }
        if ("function" === typeof e.toJSON) return e.toJSON();
      }
      return e;
    }
    var tn = new Dt({
      name: "String",
      description:
        "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
      serialize: function (e) {
        var t = en(e);
        if ("string" === typeof t) return t;
        if ("boolean" === typeof t) return t ? "true" : "false";
        if (Ht(t)) return t.toString();
        throw new nt("String cannot represent value: ".concat(Object(Ie.a)(e)));
      },
      parseValue: function (e) {
        if ("string" !== typeof e)
          throw new nt(
            "String cannot represent a non string value: ".concat(
              Object(Ie.a)(e)
            )
          );
        return e;
      },
      parseLiteral: function (e) {
        if (e.kind !== rt.a.STRING)
          throw new nt(
            "String cannot represent a non string value: ".concat(
              Object(it.print)(e)
            ),
            e
          );
        return e.value;
      },
    });
    var nn = new Dt({
      name: "Boolean",
      description: "The `Boolean` scalar type represents `true` or `false`.",
      serialize: function (e) {
        var t = en(e);
        if ("boolean" === typeof t) return t;
        if (Ht(t)) return 0 !== t;
        throw new nt(
          "Boolean cannot represent a non boolean value: ".concat(
            Object(Ie.a)(t)
          )
        );
      },
      parseValue: function (e) {
        if ("boolean" !== typeof e)
          throw new nt(
            "Boolean cannot represent a non boolean value: ".concat(
              Object(Ie.a)(e)
            )
          );
        return e;
      },
      parseLiteral: function (e) {
        if (e.kind !== rt.a.BOOLEAN)
          throw new nt(
            "Boolean cannot represent a non boolean value: ".concat(
              Object(it.print)(e)
            ),
            e
          );
        return e.value;
      },
    });
    var rn = new Dt({
        name: "ID",
        description:
          'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
        serialize: function (e) {
          var t = en(e);
          if ("string" === typeof t) return t;
          if (Xt(t)) return String(t);
          throw new nt("ID cannot represent value: ".concat(Object(Ie.a)(e)));
        },
        parseValue: function (e) {
          if ("string" === typeof e) return e;
          if (Xt(e)) return e.toString();
          throw new nt("ID cannot represent value: ".concat(Object(Ie.a)(e)));
        },
        parseLiteral: function (e) {
          if (e.kind !== rt.a.STRING && e.kind !== rt.a.INT)
            throw new nt(
              "ID cannot represent a non-string and non-integer value: " +
                Object(it.print)(e),
              e
            );
          return e.value;
        },
      }),
      on = Object.freeze([tn, $t, Zt, nn, rn]);
    function an(e, t) {
      if (yt(t)) {
        var n = an(e, t.ofType);
        return (null === n || void 0 === n ? void 0 : n.kind) === rt.a.NULL
          ? null
          : n;
      }
      if (null === e) return { kind: rt.a.NULL };
      if (void 0 === e) return null;
      if (vt(t)) {
        var r = t.ofType;
        if (
          (function (e) {
            if (null == e || "object" !== Wt(e)) return !1;
            var t = e.length;
            return (
              ("number" === typeof t && t >= 0 && t % 1 === 0) ||
              "function" === typeof e[Ne]
            );
          })(e)
        ) {
          for (var i = [], o = 0, a = Kt(e); o < a.length; o++) {
            var s = an(a[o], r);
            null != s && i.push(s);
          }
          return { kind: rt.a.LIST, values: i };
        }
        return an(e, r);
      }
      if (ht(t)) {
        if (!Fe(e)) return null;
        for (var c = [], u = 0, l = Jt(t.getFields()); u < l.length; u++) {
          var f = l[u],
            p = an(e[f.name], f.type);
          p &&
            c.push({
              kind: rt.a.OBJECT_FIELD,
              name: { kind: rt.a.NAME, value: f.name },
              value: p,
            });
        }
        return { kind: rt.a.OBJECT, fields: c };
      }
      if (bt(t)) {
        var d = t.serialize(e);
        if (null == d) return null;
        if ("boolean" === typeof d) return { kind: rt.a.BOOLEAN, value: d };
        if ("number" === typeof d && Ht(d)) {
          var h = String(d);
          return xn.test(h)
            ? { kind: rt.a.INT, value: h }
            : { kind: rt.a.FLOAT, value: h };
        }
        if ("string" === typeof d)
          return dt(t)
            ? { kind: rt.a.ENUM, value: d }
            : t === rn && xn.test(d)
            ? { kind: rt.a.INT, value: d }
            : { kind: rt.a.STRING, value: d };
        throw new TypeError(
          "Cannot convert value to AST: ".concat(Object(Ie.a)(d), ".")
        );
      }
      Object(ot.a)(0, "Unexpected input type: " + Object(Ie.a)(t));
    }
    var sn,
      cn,
      un,
      ln,
      fn,
      pn,
      dn,
      hn,
      vn,
      yn,
      mn,
      gn,
      bn,
      En,
      Tn,
      _n,
      wn,
      On,
      Nn,
      Sn,
      In,
      kn,
      xn = /^-?(?:0|[1-9][0-9]*)$/,
      An = new jt({
        name: "__Schema",
        description:
          "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
        fields: function () {
          return {
            description: {
              type: tn,
              resolve: function (e) {
                return e.description;
              },
            },
            types: {
              description: "A list of all types supported by this server.",
              type: wt(_t(wt(Rn))),
              resolve: function (e) {
                return Jt(e.getTypeMap());
              },
            },
            queryType: {
              description: "The type that query operations will be rooted at.",
              type: wt(Rn),
              resolve: function (e) {
                return e.getQueryType();
              },
            },
            mutationType: {
              description:
                "If this server supports mutation, the type that mutation operations will be rooted at.",
              type: Rn,
              resolve: function (e) {
                return e.getMutationType();
              },
            },
            subscriptionType: {
              description:
                "If this server support subscription, the type that subscription operations will be rooted at.",
              type: Rn,
              resolve: function (e) {
                return e.getSubscriptionType();
              },
            },
            directives: {
              description: "A list of all directives supported by this server.",
              type: wt(_t(wt(Dn))),
              resolve: function (e) {
                return e.getDirectives();
              },
            },
          };
        },
      }),
      Dn = new jt({
        name: "__Directive",
        description:
          "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
        fields: function () {
          return {
            name: {
              type: wt(tn),
              resolve: function (e) {
                return e.name;
              },
            },
            description: {
              type: tn,
              resolve: function (e) {
                return e.description;
              },
            },
            isRepeatable: {
              type: wt(nn),
              resolve: function (e) {
                return e.isRepeatable;
              },
            },
            locations: {
              type: wt(_t(wt(jn))),
              resolve: function (e) {
                return e.locations;
              },
            },
            args: {
              type: wt(_t(wt(Pn))),
              resolve: function (e) {
                return e.args;
              },
            },
          };
        },
      }),
      jn = new Gt({
        name: "__DirectiveLocation",
        description:
          "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
        values: {
          QUERY: {
            value: zt.QUERY,
            description: "Location adjacent to a query operation.",
          },
          MUTATION: {
            value: zt.MUTATION,
            description: "Location adjacent to a mutation operation.",
          },
          SUBSCRIPTION: {
            value: zt.SUBSCRIPTION,
            description: "Location adjacent to a subscription operation.",
          },
          FIELD: {
            value: zt.FIELD,
            description: "Location adjacent to a field.",
          },
          FRAGMENT_DEFINITION: {
            value: zt.FRAGMENT_DEFINITION,
            description: "Location adjacent to a fragment definition.",
          },
          FRAGMENT_SPREAD: {
            value: zt.FRAGMENT_SPREAD,
            description: "Location adjacent to a fragment spread.",
          },
          INLINE_FRAGMENT: {
            value: zt.INLINE_FRAGMENT,
            description: "Location adjacent to an inline fragment.",
          },
          VARIABLE_DEFINITION: {
            value: zt.VARIABLE_DEFINITION,
            description: "Location adjacent to a variable definition.",
          },
          SCHEMA: {
            value: zt.SCHEMA,
            description: "Location adjacent to a schema definition.",
          },
          SCALAR: {
            value: zt.SCALAR,
            description: "Location adjacent to a scalar definition.",
          },
          OBJECT: {
            value: zt.OBJECT,
            description: "Location adjacent to an object type definition.",
          },
          FIELD_DEFINITION: {
            value: zt.FIELD_DEFINITION,
            description: "Location adjacent to a field definition.",
          },
          ARGUMENT_DEFINITION: {
            value: zt.ARGUMENT_DEFINITION,
            description: "Location adjacent to an argument definition.",
          },
          INTERFACE: {
            value: zt.INTERFACE,
            description: "Location adjacent to an interface definition.",
          },
          UNION: {
            value: zt.UNION,
            description: "Location adjacent to a union definition.",
          },
          ENUM: {
            value: zt.ENUM,
            description: "Location adjacent to an enum definition.",
          },
          ENUM_VALUE: {
            value: zt.ENUM_VALUE,
            description: "Location adjacent to an enum value definition.",
          },
          INPUT_OBJECT: {
            value: zt.INPUT_OBJECT,
            description:
              "Location adjacent to an input object type definition.",
          },
          INPUT_FIELD_DEFINITION: {
            value: zt.INPUT_FIELD_DEFINITION,
            description:
              "Location adjacent to an input object field definition.",
          },
        },
      }),
      Rn = new jt({
        name: "__Type",
        description:
          "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
        fields: function () {
          return {
            kind: {
              type: wt(Mn),
              resolve: function (e) {
                return ut(e)
                  ? Cn.SCALAR
                  : lt(e)
                  ? Cn.OBJECT
                  : ft(e)
                  ? Cn.INTERFACE
                  : pt(e)
                  ? Cn.UNION
                  : dt(e)
                  ? Cn.ENUM
                  : ht(e)
                  ? Cn.INPUT_OBJECT
                  : vt(e)
                  ? Cn.LIST
                  : yt(e)
                  ? Cn.NON_NULL
                  : void Object(ot.a)(
                      0,
                      'Unexpected type: "'.concat(Object(Ie.a)(e), '".')
                    );
              },
            },
            name: {
              type: tn,
              resolve: function (e) {
                return void 0 !== e.name ? e.name : void 0;
              },
            },
            description: {
              type: tn,
              resolve: function (e) {
                return void 0 !== e.description ? e.description : void 0;
              },
            },
            specifiedByUrl: {
              type: tn,
              resolve: function (e) {
                return void 0 !== e.specifiedByUrl ? e.specifiedByUrl : void 0;
              },
            },
            fields: {
              type: _t(wt(Ln)),
              args: { includeDeprecated: { type: nn, defaultValue: !1 } },
              resolve: function (e, t) {
                var n = t.includeDeprecated;
                if (lt(e) || ft(e)) {
                  var r = Jt(e.getFields());
                  return (
                    n ||
                      (r = r.filter(function (e) {
                        return !e.isDeprecated;
                      })),
                    r
                  );
                }
                return null;
              },
            },
            interfaces: {
              type: _t(wt(Rn)),
              resolve: function (e) {
                if (lt(e) || ft(e)) return e.getInterfaces();
              },
            },
            possibleTypes: {
              type: _t(wt(Rn)),
              resolve: function (e, t, n, r) {
                var i = r.schema;
                if (Tt(e)) return i.getPossibleTypes(e);
              },
            },
            enumValues: {
              type: _t(wt(Fn)),
              args: { includeDeprecated: { type: nn, defaultValue: !1 } },
              resolve: function (e, t) {
                var n = t.includeDeprecated;
                if (dt(e)) {
                  var r = e.getValues();
                  return (
                    n ||
                      (r = r.filter(function (e) {
                        return !e.isDeprecated;
                      })),
                    r
                  );
                }
              },
            },
            inputFields: {
              type: _t(wt(Pn)),
              resolve: function (e) {
                if (ht(e)) return Jt(e.getFields());
              },
            },
            ofType: {
              type: Rn,
              resolve: function (e) {
                return void 0 !== e.ofType ? e.ofType : void 0;
              },
            },
          };
        },
      }),
      Ln = new jt({
        name: "__Field",
        description:
          "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
        fields: function () {
          return {
            name: {
              type: wt(tn),
              resolve: function (e) {
                return e.name;
              },
            },
            description: {
              type: tn,
              resolve: function (e) {
                return e.description;
              },
            },
            args: {
              type: wt(_t(wt(Pn))),
              resolve: function (e) {
                return e.args;
              },
            },
            type: {
              type: wt(Rn),
              resolve: function (e) {
                return e.type;
              },
            },
            isDeprecated: {
              type: wt(nn),
              resolve: function (e) {
                return e.isDeprecated;
              },
            },
            deprecationReason: {
              type: tn,
              resolve: function (e) {
                return e.deprecationReason;
              },
            },
          };
        },
      }),
      Pn = new jt({
        name: "__InputValue",
        description:
          "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
        fields: function () {
          return {
            name: {
              type: wt(tn),
              resolve: function (e) {
                return e.name;
              },
            },
            description: {
              type: tn,
              resolve: function (e) {
                return e.description;
              },
            },
            type: {
              type: wt(Rn),
              resolve: function (e) {
                return e.type;
              },
            },
            defaultValue: {
              type: tn,
              description:
                "A GraphQL-formatted string representing the default value for this input value.",
              resolve: function (e) {
                var t = e.type,
                  n = an(e.defaultValue, t);
                return n ? Object(it.print)(n) : null;
              },
            },
          };
        },
      }),
      Fn = new jt({
        name: "__EnumValue",
        description:
          "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
        fields: function () {
          return {
            name: {
              type: wt(tn),
              resolve: function (e) {
                return e.name;
              },
            },
            description: {
              type: tn,
              resolve: function (e) {
                return e.description;
              },
            },
            isDeprecated: {
              type: wt(nn),
              resolve: function (e) {
                return e.isDeprecated;
              },
            },
            deprecationReason: {
              type: tn,
              resolve: function (e) {
                return e.deprecationReason;
              },
            },
          };
        },
      }),
      Cn = Object.freeze({
        SCALAR: "SCALAR",
        OBJECT: "OBJECT",
        INTERFACE: "INTERFACE",
        UNION: "UNION",
        ENUM: "ENUM",
        INPUT_OBJECT: "INPUT_OBJECT",
        LIST: "LIST",
        NON_NULL: "NON_NULL",
      }),
      Mn = new Gt({
        name: "__TypeKind",
        description:
          "An enum describing what kind of type a given `__Type` is.",
        values: {
          SCALAR: {
            value: Cn.SCALAR,
            description: "Indicates this type is a scalar.",
          },
          OBJECT: {
            value: Cn.OBJECT,
            description:
              "Indicates this type is an object. `fields` and `interfaces` are valid fields.",
          },
          INTERFACE: {
            value: Cn.INTERFACE,
            description:
              "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields.",
          },
          UNION: {
            value: Cn.UNION,
            description:
              "Indicates this type is a union. `possibleTypes` is a valid field.",
          },
          ENUM: {
            value: Cn.ENUM,
            description:
              "Indicates this type is an enum. `enumValues` is a valid field.",
          },
          INPUT_OBJECT: {
            value: Cn.INPUT_OBJECT,
            description:
              "Indicates this type is an input object. `inputFields` is a valid field.",
          },
          LIST: {
            value: Cn.LIST,
            description:
              "Indicates this type is a list. `ofType` is a valid field.",
          },
          NON_NULL: {
            value: Cn.NON_NULL,
            description:
              "Indicates this type is a non-null. `ofType` is a valid field.",
          },
        },
      }),
      Un = {
        name: "__schema",
        type: wt(An),
        description: "Access the current type schema of this server.",
        args: [],
        resolve: function (e, t, n, r) {
          return r.schema;
        },
        isDeprecated: !1,
        deprecationReason: void 0,
        extensions: void 0,
        astNode: void 0,
      },
      Vn = {
        name: "__type",
        type: Rn,
        description: "Request the type information of a single type.",
        args: [
          {
            name: "name",
            description: void 0,
            type: wt(tn),
            defaultValue: void 0,
            extensions: void 0,
            astNode: void 0,
          },
        ],
        resolve: function (e, t, n, r) {
          var i = t.name;
          return r.schema.getType(i);
        },
        isDeprecated: !1,
        deprecationReason: void 0,
        extensions: void 0,
        astNode: void 0,
      },
      Bn = {
        name: "__typename",
        type: wt(tn),
        description: "The name of the current Object type at runtime.",
        args: [],
        resolve: function (e, t, n, r) {
          return r.parentType.name;
        },
        isDeprecated: !1,
        deprecationReason: void 0,
        extensions: void 0,
        astNode: void 0,
      },
      Gn = Object.freeze([An, Dn, jn, Rn, Ln, Pn, Fn, Mn]);
    function Yn(e) {
      return Gn.some(function (t) {
        var n = t.name;
        return e.name === n;
      });
    }
    function qn(e, t, n) {
      return n === Un.name && e.getQueryType() === t
        ? Un
        : n === Vn.name && e.getQueryType() === t
        ? Vn
        : n === Bn.name && Et(t)
        ? Bn
        : "getFields" in t
        ? t.getFields()[n]
        : null;
    }
    function Qn(e, t) {
      for (var n = [], r = e; r && r.kind; ) n.push(r), (r = r.prevState);
      for (var i = n.length - 1; i >= 0; i--) t(n[i]);
    }
    function Jn(e) {
      for (
        var t = Object.keys(e), n = t.length, r = new Array(n), i = 0;
        i < n;
        ++i
      )
        r[i] = e[t[i]];
      return r;
    }
    function zn(e, t) {
      return (function (e, t) {
        if (!t)
          return Hn(e, function (e) {
            return !e.isDeprecated;
          });
        return Hn(
          Hn(
            e.map(function (e) {
              return { proximity: Wn(Kn(e.label), t), entry: e };
            }),
            function (e) {
              return e.proximity <= 2;
            }
          ),
          function (e) {
            return !e.entry.isDeprecated;
          }
        )
          .sort(function (e, t) {
            return (
              (e.entry.isDeprecated ? 1 : 0) - (t.entry.isDeprecated ? 1 : 0) ||
              e.proximity - t.proximity ||
              e.entry.label.length - t.entry.label.length
            );
          })
          .map(function (e) {
            return e.entry;
          });
      })(t, Kn(e.string));
    }
    function Hn(e, t) {
      var n = e.filter(t);
      return 0 === n.length ? e : n;
    }
    function Kn(e) {
      return e.toLowerCase().replace(/\W/g, "");
    }
    function Wn(e, t) {
      var n = (function (e, t) {
        var n,
          r,
          i = [],
          o = e.length,
          a = t.length;
        for (n = 0; n <= o; n++) i[n] = [n];
        for (r = 1; r <= a; r++) i[0][r] = r;
        for (n = 1; n <= o; n++)
          for (r = 1; r <= a; r++) {
            var s = e[n - 1] === t[r - 1] ? 0 : 1;
            (i[n][r] = Math.min(
              i[n - 1][r] + 1,
              i[n][r - 1] + 1,
              i[n - 1][r - 1] + s
            )),
              n > 1 &&
                r > 1 &&
                e[n - 1] === t[r - 2] &&
                e[n - 2] === t[r - 1] &&
                (i[n][r] = Math.min(i[n][r], i[n - 2][r - 2] + s));
          }
        return i[o][a];
      })(t, e);
      return (
        e.length > t.length &&
          ((n -= e.length - t.length - 1), (n += 0 === e.indexOf(t) ? 0 : 0.5)),
        n
      );
    }
    ((cn = sn || (sn = {})).create = function (e, t) {
      return { line: e, character: t };
    }),
      (cn.is = function (e) {
        var t = e;
        return (
          Sr.objectLiteral(t) && Sr.number(t.line) && Sr.number(t.character)
        );
      }),
      ((ln = un || (un = {})).create = function (e, t, n, r) {
        if (Sr.number(e) && Sr.number(t) && Sr.number(n) && Sr.number(r))
          return { start: sn.create(e, t), end: sn.create(n, r) };
        if (sn.is(e) && sn.is(t)) return { start: e, end: t };
        throw new Error(
          "Range#create called with invalid arguments[" +
            e +
            ", " +
            t +
            ", " +
            n +
            ", " +
            r +
            "]"
        );
      }),
      (ln.is = function (e) {
        var t = e;
        return Sr.objectLiteral(t) && sn.is(t.start) && sn.is(t.end);
      }),
      (function (e) {
        (e.create = function (e, t) {
          return { uri: e, range: t };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              Sr.defined(t) &&
              un.is(t.range) &&
              (Sr.string(t.uri) || Sr.undefined(t.uri))
            );
          });
      })(fn || (fn = {})),
      (function (e) {
        (e.create = function (e, t, n, r) {
          return {
            targetUri: e,
            targetRange: t,
            targetSelectionRange: n,
            originSelectionRange: r,
          };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              Sr.defined(t) &&
              un.is(t.targetRange) &&
              Sr.string(t.targetUri) &&
              (un.is(t.targetSelectionRange) ||
                Sr.undefined(t.targetSelectionRange)) &&
              (un.is(t.originSelectionRange) ||
                Sr.undefined(t.originSelectionRange))
            );
          });
      })(pn || (pn = {})),
      (function (e) {
        (e.create = function (e, t, n, r) {
          return { red: e, green: t, blue: n, alpha: r };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              Sr.number(t.red) &&
              Sr.number(t.green) &&
              Sr.number(t.blue) &&
              Sr.number(t.alpha)
            );
          });
      })(dn || (dn = {})),
      (function (e) {
        (e.create = function (e, t) {
          return { range: e, color: t };
        }),
          (e.is = function (e) {
            var t = e;
            return un.is(t.range) && dn.is(t.color);
          });
      })(hn || (hn = {})),
      (function (e) {
        (e.create = function (e, t, n) {
          return { label: e, textEdit: t, additionalTextEdits: n };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              Sr.string(t.label) &&
              (Sr.undefined(t.textEdit) || wn.is(t)) &&
              (Sr.undefined(t.additionalTextEdits) ||
                Sr.typedArray(t.additionalTextEdits, wn.is))
            );
          });
      })(vn || (vn = {})),
      (function (e) {
        (e.Comment = "comment"), (e.Imports = "imports"), (e.Region = "region");
      })(yn || (yn = {})),
      (function (e) {
        (e.create = function (e, t, n, r, i) {
          var o = { startLine: e, endLine: t };
          return (
            Sr.defined(n) && (o.startCharacter = n),
            Sr.defined(r) && (o.endCharacter = r),
            Sr.defined(i) && (o.kind = i),
            o
          );
        }),
          (e.is = function (e) {
            var t = e;
            return (
              Sr.number(t.startLine) &&
              Sr.number(t.startLine) &&
              (Sr.undefined(t.startCharacter) || Sr.number(t.startCharacter)) &&
              (Sr.undefined(t.endCharacter) || Sr.number(t.endCharacter)) &&
              (Sr.undefined(t.kind) || Sr.string(t.kind))
            );
          });
      })(mn || (mn = {})),
      (function (e) {
        (e.create = function (e, t) {
          return { location: e, message: t };
        }),
          (e.is = function (e) {
            var t = e;
            return Sr.defined(t) && fn.is(t.location) && Sr.string(t.message);
          });
      })(gn || (gn = {})),
      (function (e) {
        (e.Error = 1), (e.Warning = 2), (e.Information = 3), (e.Hint = 4);
      })(bn || (bn = {})),
      (function (e) {
        (e.Unnecessary = 1), (e.Deprecated = 2);
      })(En || (En = {})),
      (function (e) {
        (e.create = function (e, t, n, r, i, o) {
          var a = { range: e, message: t };
          return (
            Sr.defined(n) && (a.severity = n),
            Sr.defined(r) && (a.code = r),
            Sr.defined(i) && (a.source = i),
            Sr.defined(o) && (a.relatedInformation = o),
            a
          );
        }),
          (e.is = function (e) {
            var t = e;
            return (
              Sr.defined(t) &&
              un.is(t.range) &&
              Sr.string(t.message) &&
              (Sr.number(t.severity) || Sr.undefined(t.severity)) &&
              (Sr.number(t.code) ||
                Sr.string(t.code) ||
                Sr.undefined(t.code)) &&
              (Sr.string(t.source) || Sr.undefined(t.source)) &&
              (Sr.undefined(t.relatedInformation) ||
                Sr.typedArray(t.relatedInformation, gn.is))
            );
          });
      })(Tn || (Tn = {})),
      (function (e) {
        (e.create = function (e, t) {
          for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r];
          var i = { title: e, command: t };
          return Sr.defined(n) && n.length > 0 && (i.arguments = n), i;
        }),
          (e.is = function (e) {
            var t = e;
            return Sr.defined(t) && Sr.string(t.title) && Sr.string(t.command);
          });
      })(_n || (_n = {})),
      (function (e) {
        (e.replace = function (e, t) {
          return { range: e, newText: t };
        }),
          (e.insert = function (e, t) {
            return { range: { start: e, end: e }, newText: t };
          }),
          (e.del = function (e) {
            return { range: e, newText: "" };
          }),
          (e.is = function (e) {
            var t = e;
            return (
              Sr.objectLiteral(t) && Sr.string(t.newText) && un.is(t.range)
            );
          });
      })(wn || (wn = {})),
      (function (e) {
        (e.create = function (e, t) {
          return { textDocument: e, edits: t };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              Sr.defined(t) && $n.is(t.textDocument) && Array.isArray(t.edits)
            );
          });
      })(On || (On = {})),
      (function (e) {
        (e.create = function (e, t) {
          var n = { kind: "create", uri: e };
          return (
            void 0 === t ||
              (void 0 === t.overwrite && void 0 === t.ignoreIfExists) ||
              (n.options = t),
            n
          );
        }),
          (e.is = function (e) {
            var t = e;
            return (
              t &&
              "create" === t.kind &&
              Sr.string(t.uri) &&
              (void 0 === t.options ||
                ((void 0 === t.options.overwrite ||
                  Sr.boolean(t.options.overwrite)) &&
                  (void 0 === t.options.ignoreIfExists ||
                    Sr.boolean(t.options.ignoreIfExists))))
            );
          });
      })(Nn || (Nn = {})),
      (function (e) {
        (e.create = function (e, t, n) {
          var r = { kind: "rename", oldUri: e, newUri: t };
          return (
            void 0 === n ||
              (void 0 === n.overwrite && void 0 === n.ignoreIfExists) ||
              (r.options = n),
            r
          );
        }),
          (e.is = function (e) {
            var t = e;
            return (
              t &&
              "rename" === t.kind &&
              Sr.string(t.oldUri) &&
              Sr.string(t.newUri) &&
              (void 0 === t.options ||
                ((void 0 === t.options.overwrite ||
                  Sr.boolean(t.options.overwrite)) &&
                  (void 0 === t.options.ignoreIfExists ||
                    Sr.boolean(t.options.ignoreIfExists))))
            );
          });
      })(Sn || (Sn = {})),
      (function (e) {
        (e.create = function (e, t) {
          var n = { kind: "delete", uri: e };
          return (
            void 0 === t ||
              (void 0 === t.recursive && void 0 === t.ignoreIfNotExists) ||
              (n.options = t),
            n
          );
        }),
          (e.is = function (e) {
            var t = e;
            return (
              t &&
              "delete" === t.kind &&
              Sr.string(t.uri) &&
              (void 0 === t.options ||
                ((void 0 === t.options.recursive ||
                  Sr.boolean(t.options.recursive)) &&
                  (void 0 === t.options.ignoreIfNotExists ||
                    Sr.boolean(t.options.ignoreIfNotExists))))
            );
          });
      })(In || (In = {})),
      (function (e) {
        e.is = function (e) {
          var t = e;
          return (
            t &&
            (void 0 !== t.changes || void 0 !== t.documentChanges) &&
            (void 0 === t.documentChanges ||
              t.documentChanges.every(function (e) {
                return Sr.string(e.kind)
                  ? Nn.is(e) || Sn.is(e) || In.is(e)
                  : On.is(e);
              }))
          );
        };
      })(kn || (kn = {}));
    var Xn,
      $n,
      Zn,
      er,
      tr,
      nr,
      rr,
      ir,
      or,
      ar,
      sr,
      cr,
      ur,
      lr,
      fr,
      pr,
      dr,
      hr,
      vr,
      yr,
      mr,
      gr,
      br,
      Er,
      Tr,
      _r,
      wr,
      Or = (function () {
        function e(e) {
          this.edits = e;
        }
        return (
          (e.prototype.insert = function (e, t) {
            this.edits.push(wn.insert(e, t));
          }),
          (e.prototype.replace = function (e, t) {
            this.edits.push(wn.replace(e, t));
          }),
          (e.prototype.delete = function (e) {
            this.edits.push(wn.del(e));
          }),
          (e.prototype.add = function (e) {
            this.edits.push(e);
          }),
          (e.prototype.all = function () {
            return this.edits;
          }),
          (e.prototype.clear = function () {
            this.edits.splice(0, this.edits.length);
          }),
          e
        );
      })();
    !(function () {
      function e(e) {
        var t = this;
        (this._textEditChanges = Object.create(null)),
          e &&
            ((this._workspaceEdit = e),
            e.documentChanges
              ? e.documentChanges.forEach(function (e) {
                  if (On.is(e)) {
                    var n = new Or(e.edits);
                    t._textEditChanges[e.textDocument.uri] = n;
                  }
                })
              : e.changes &&
                Object.keys(e.changes).forEach(function (n) {
                  var r = new Or(e.changes[n]);
                  t._textEditChanges[n] = r;
                }));
      }
      Object.defineProperty(e.prototype, "edit", {
        get: function () {
          return this._workspaceEdit;
        },
        enumerable: !0,
        configurable: !0,
      }),
        (e.prototype.getTextEditChange = function (e) {
          if ($n.is(e)) {
            if (
              (this._workspaceEdit ||
                (this._workspaceEdit = { documentChanges: [] }),
              !this._workspaceEdit.documentChanges)
            )
              throw new Error(
                "Workspace edit is not configured for document changes."
              );
            var t = e;
            if (!(r = this._textEditChanges[t.uri])) {
              var n = { textDocument: t, edits: (i = []) };
              this._workspaceEdit.documentChanges.push(n),
                (r = new Or(i)),
                (this._textEditChanges[t.uri] = r);
            }
            return r;
          }
          if (
            (this._workspaceEdit ||
              (this._workspaceEdit = { changes: Object.create(null) }),
            !this._workspaceEdit.changes)
          )
            throw new Error(
              "Workspace edit is not configured for normal text edit changes."
            );
          var r;
          if (!(r = this._textEditChanges[e])) {
            var i = [];
            (this._workspaceEdit.changes[e] = i),
              (r = new Or(i)),
              (this._textEditChanges[e] = r);
          }
          return r;
        }),
        (e.prototype.createFile = function (e, t) {
          this.checkDocumentChanges(),
            this._workspaceEdit.documentChanges.push(Nn.create(e, t));
        }),
        (e.prototype.renameFile = function (e, t, n) {
          this.checkDocumentChanges(),
            this._workspaceEdit.documentChanges.push(Sn.create(e, t, n));
        }),
        (e.prototype.deleteFile = function (e, t) {
          this.checkDocumentChanges(),
            this._workspaceEdit.documentChanges.push(In.create(e, t));
        }),
        (e.prototype.checkDocumentChanges = function () {
          if (!this._workspaceEdit || !this._workspaceEdit.documentChanges)
            throw new Error(
              "Workspace edit is not configured for document changes."
            );
        });
    })();
    !(function (e) {
      (e.create = function (e) {
        return { uri: e };
      }),
        (e.is = function (e) {
          var t = e;
          return Sr.defined(t) && Sr.string(t.uri);
        });
    })(Xn || (Xn = {})),
      (function (e) {
        (e.create = function (e, t) {
          return { uri: e, version: t };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              Sr.defined(t) &&
              Sr.string(t.uri) &&
              (null === t.version || Sr.number(t.version))
            );
          });
      })($n || ($n = {})),
      (function (e) {
        (e.create = function (e, t, n, r) {
          return { uri: e, languageId: t, version: n, text: r };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              Sr.defined(t) &&
              Sr.string(t.uri) &&
              Sr.string(t.languageId) &&
              Sr.number(t.version) &&
              Sr.string(t.text)
            );
          });
      })(Zn || (Zn = {})),
      (function (e) {
        (e.PlainText = "plaintext"), (e.Markdown = "markdown");
      })(er || (er = {})),
      (function (e) {
        e.is = function (t) {
          var n = t;
          return n === e.PlainText || n === e.Markdown;
        };
      })(er || (er = {})),
      (function (e) {
        e.is = function (e) {
          var t = e;
          return Sr.objectLiteral(e) && er.is(t.kind) && Sr.string(t.value);
        };
      })(tr || (tr = {})),
      (function (e) {
        (e.Text = 1),
          (e.Method = 2),
          (e.Function = 3),
          (e.Constructor = 4),
          (e.Field = 5),
          (e.Variable = 6),
          (e.Class = 7),
          (e.Interface = 8),
          (e.Module = 9),
          (e.Property = 10),
          (e.Unit = 11),
          (e.Value = 12),
          (e.Enum = 13),
          (e.Keyword = 14),
          (e.Snippet = 15),
          (e.Color = 16),
          (e.File = 17),
          (e.Reference = 18),
          (e.Folder = 19),
          (e.EnumMember = 20),
          (e.Constant = 21),
          (e.Struct = 22),
          (e.Event = 23),
          (e.Operator = 24),
          (e.TypeParameter = 25);
      })(nr || (nr = {})),
      (function (e) {
        (e.PlainText = 1), (e.Snippet = 2);
      })(rr || (rr = {})),
      (function (e) {
        e.Deprecated = 1;
      })(ir || (ir = {})),
      (function (e) {
        e.create = function (e) {
          return { label: e };
        };
      })(or || (or = {})),
      (function (e) {
        e.create = function (e, t) {
          return { items: e || [], isIncomplete: !!t };
        };
      })(ar || (ar = {})),
      (function (e) {
        (e.fromPlainText = function (e) {
          return e.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
        }),
          (e.is = function (e) {
            var t = e;
            return (
              Sr.string(t) ||
              (Sr.objectLiteral(t) &&
                Sr.string(t.language) &&
                Sr.string(t.value))
            );
          });
      })(sr || (sr = {})),
      (function (e) {
        e.is = function (e) {
          var t = e;
          return (
            !!t &&
            Sr.objectLiteral(t) &&
            (tr.is(t.contents) ||
              sr.is(t.contents) ||
              Sr.typedArray(t.contents, sr.is)) &&
            (void 0 === e.range || un.is(e.range))
          );
        };
      })(cr || (cr = {})),
      (function (e) {
        e.create = function (e, t) {
          return t ? { label: e, documentation: t } : { label: e };
        };
      })(ur || (ur = {})),
      (function (e) {
        e.create = function (e, t) {
          for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r];
          var i = { label: e };
          return (
            Sr.defined(t) && (i.documentation = t),
            Sr.defined(n) ? (i.parameters = n) : (i.parameters = []),
            i
          );
        };
      })(lr || (lr = {})),
      (function (e) {
        (e.Text = 1), (e.Read = 2), (e.Write = 3);
      })(fr || (fr = {})),
      (function (e) {
        e.create = function (e, t) {
          var n = { range: e };
          return Sr.number(t) && (n.kind = t), n;
        };
      })(pr || (pr = {})),
      (function (e) {
        (e.File = 1),
          (e.Module = 2),
          (e.Namespace = 3),
          (e.Package = 4),
          (e.Class = 5),
          (e.Method = 6),
          (e.Property = 7),
          (e.Field = 8),
          (e.Constructor = 9),
          (e.Enum = 10),
          (e.Interface = 11),
          (e.Function = 12),
          (e.Variable = 13),
          (e.Constant = 14),
          (e.String = 15),
          (e.Number = 16),
          (e.Boolean = 17),
          (e.Array = 18),
          (e.Object = 19),
          (e.Key = 20),
          (e.Null = 21),
          (e.EnumMember = 22),
          (e.Struct = 23),
          (e.Event = 24),
          (e.Operator = 25),
          (e.TypeParameter = 26);
      })(dr || (dr = {})),
      (function (e) {
        e.Deprecated = 1;
      })(hr || (hr = {})),
      (function (e) {
        e.create = function (e, t, n, r, i) {
          var o = { name: e, kind: t, location: { uri: r, range: n } };
          return i && (o.containerName = i), o;
        };
      })(vr || (vr = {})),
      (function (e) {
        (e.create = function (e, t, n, r, i, o) {
          var a = { name: e, detail: t, kind: n, range: r, selectionRange: i };
          return void 0 !== o && (a.children = o), a;
        }),
          (e.is = function (e) {
            var t = e;
            return (
              t &&
              Sr.string(t.name) &&
              Sr.number(t.kind) &&
              un.is(t.range) &&
              un.is(t.selectionRange) &&
              (void 0 === t.detail || Sr.string(t.detail)) &&
              (void 0 === t.deprecated || Sr.boolean(t.deprecated)) &&
              (void 0 === t.children || Array.isArray(t.children))
            );
          });
      })(yr || (yr = {})),
      (function (e) {
        (e.Empty = ""),
          (e.QuickFix = "quickfix"),
          (e.Refactor = "refactor"),
          (e.RefactorExtract = "refactor.extract"),
          (e.RefactorInline = "refactor.inline"),
          (e.RefactorRewrite = "refactor.rewrite"),
          (e.Source = "source"),
          (e.SourceOrganizeImports = "source.organizeImports"),
          (e.SourceFixAll = "source.fixAll");
      })(mr || (mr = {})),
      (function (e) {
        (e.create = function (e, t) {
          var n = { diagnostics: e };
          return void 0 !== t && null !== t && (n.only = t), n;
        }),
          (e.is = function (e) {
            var t = e;
            return (
              Sr.defined(t) &&
              Sr.typedArray(t.diagnostics, Tn.is) &&
              (void 0 === t.only || Sr.typedArray(t.only, Sr.string))
            );
          });
      })(gr || (gr = {})),
      (function (e) {
        (e.create = function (e, t, n) {
          var r = { title: e };
          return (
            _n.is(t) ? (r.command = t) : (r.edit = t),
            void 0 !== n && (r.kind = n),
            r
          );
        }),
          (e.is = function (e) {
            var t = e;
            return (
              t &&
              Sr.string(t.title) &&
              (void 0 === t.diagnostics ||
                Sr.typedArray(t.diagnostics, Tn.is)) &&
              (void 0 === t.kind || Sr.string(t.kind)) &&
              (void 0 !== t.edit || void 0 !== t.command) &&
              (void 0 === t.command || _n.is(t.command)) &&
              (void 0 === t.isPreferred || Sr.boolean(t.isPreferred)) &&
              (void 0 === t.edit || kn.is(t.edit))
            );
          });
      })(br || (br = {})),
      (function (e) {
        (e.create = function (e, t) {
          var n = { range: e };
          return Sr.defined(t) && (n.data = t), n;
        }),
          (e.is = function (e) {
            var t = e;
            return (
              Sr.defined(t) &&
              un.is(t.range) &&
              (Sr.undefined(t.command) || _n.is(t.command))
            );
          });
      })(Er || (Er = {})),
      (function (e) {
        (e.create = function (e, t) {
          return { tabSize: e, insertSpaces: t };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              Sr.defined(t) &&
              Sr.number(t.tabSize) &&
              Sr.boolean(t.insertSpaces)
            );
          });
      })(Tr || (Tr = {})),
      (function (e) {
        (e.create = function (e, t, n) {
          return { range: e, target: t, data: n };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              Sr.defined(t) &&
              un.is(t.range) &&
              (Sr.undefined(t.target) || Sr.string(t.target))
            );
          });
      })(_r || (_r = {})),
      (function (e) {
        (e.create = function (e, t) {
          return { range: e, parent: t };
        }),
          (e.is = function (t) {
            var n = t;
            return (
              void 0 !== n &&
              un.is(n.range) &&
              (void 0 === n.parent || e.is(n.parent))
            );
          });
      })(wr || (wr = {}));
    var Nr;
    !(function (e) {
      (e.create = function (e, t, n, r) {
        return new Ir(e, t, n, r);
      }),
        (e.is = function (e) {
          var t = e;
          return !!(
            Sr.defined(t) &&
            Sr.string(t.uri) &&
            (Sr.undefined(t.languageId) || Sr.string(t.languageId)) &&
            Sr.number(t.lineCount) &&
            Sr.func(t.getText) &&
            Sr.func(t.positionAt) &&
            Sr.func(t.offsetAt)
          );
        }),
        (e.applyEdits = function (e, t) {
          for (
            var n = e.getText(),
              r = (function e(t, n) {
                if (t.length <= 1) return t;
                var r = (t.length / 2) | 0,
                  i = t.slice(0, r),
                  o = t.slice(r);
                e(i, n), e(o, n);
                var a = 0,
                  s = 0,
                  c = 0;
                for (; a < i.length && s < o.length; ) {
                  var u = n(i[a], o[s]);
                  t[c++] = u <= 0 ? i[a++] : o[s++];
                }
                for (; a < i.length; ) t[c++] = i[a++];
                for (; s < o.length; ) t[c++] = o[s++];
                return t;
              })(t, function (e, t) {
                var n = e.range.start.line - t.range.start.line;
                return 0 === n
                  ? e.range.start.character - t.range.start.character
                  : n;
              }),
              i = n.length,
              o = r.length - 1;
            o >= 0;
            o--
          ) {
            var a = r[o],
              s = e.offsetAt(a.range.start),
              c = e.offsetAt(a.range.end);
            if (!(c <= i)) throw new Error("Overlapping edit");
            (n = n.substring(0, s) + a.newText + n.substring(c, n.length)),
              (i = s);
          }
          return n;
        });
    })(Nr || (Nr = {}));
    var Sr,
      Ir = (function () {
        function e(e, t, n, r) {
          (this._uri = e),
            (this._languageId = t),
            (this._version = n),
            (this._content = r),
            (this._lineOffsets = void 0);
        }
        return (
          Object.defineProperty(e.prototype, "uri", {
            get: function () {
              return this._uri;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "languageId", {
            get: function () {
              return this._languageId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "version", {
            get: function () {
              return this._version;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.getText = function (e) {
            if (e) {
              var t = this.offsetAt(e.start),
                n = this.offsetAt(e.end);
              return this._content.substring(t, n);
            }
            return this._content;
          }),
          (e.prototype.update = function (e, t) {
            (this._content = e.text),
              (this._version = t),
              (this._lineOffsets = void 0);
          }),
          (e.prototype.getLineOffsets = function () {
            if (void 0 === this._lineOffsets) {
              for (
                var e = [], t = this._content, n = !0, r = 0;
                r < t.length;
                r++
              ) {
                n && (e.push(r), (n = !1));
                var i = t.charAt(r);
                (n = "\r" === i || "\n" === i),
                  "\r" === i &&
                    r + 1 < t.length &&
                    "\n" === t.charAt(r + 1) &&
                    r++;
              }
              n && t.length > 0 && e.push(t.length), (this._lineOffsets = e);
            }
            return this._lineOffsets;
          }),
          (e.prototype.positionAt = function (e) {
            e = Math.max(Math.min(e, this._content.length), 0);
            var t = this.getLineOffsets(),
              n = 0,
              r = t.length;
            if (0 === r) return sn.create(0, e);
            for (; n < r; ) {
              var i = Math.floor((n + r) / 2);
              t[i] > e ? (r = i) : (n = i + 1);
            }
            var o = n - 1;
            return sn.create(o, e - t[o]);
          }),
          (e.prototype.offsetAt = function (e) {
            var t = this.getLineOffsets();
            if (e.line >= t.length) return this._content.length;
            if (e.line < 0) return 0;
            var n = t[e.line],
              r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
            return Math.max(Math.min(n + e.character, r), n);
          }),
          Object.defineProperty(e.prototype, "lineCount", {
            get: function () {
              return this.getLineOffsets().length;
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
    !(function (e) {
      var t = Object.prototype.toString;
      (e.defined = function (e) {
        return "undefined" !== typeof e;
      }),
        (e.undefined = function (e) {
          return "undefined" === typeof e;
        }),
        (e.boolean = function (e) {
          return !0 === e || !1 === e;
        }),
        (e.string = function (e) {
          return "[object String]" === t.call(e);
        }),
        (e.number = function (e) {
          return "[object Number]" === t.call(e);
        }),
        (e.func = function (e) {
          return "[object Function]" === t.call(e);
        }),
        (e.objectLiteral = function (e) {
          return null !== e && "object" === typeof e;
        }),
        (e.typedArray = function (e, t) {
          return Array.isArray(e) && e.every(t);
        });
    })(Sr || (Sr = {}));
    var kr = n(10);
    function xr(e, t, n) {
      return new nt("Syntax Error: ".concat(n), void 0, e, [t]);
    }
    var Ar = n(3);
    function Dr(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var jr = (function () {
        function e(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "GraphQL request",
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { line: 1, column: 1 };
          (this.body = e),
            (this.name = t),
            (this.locationOffset = n),
            this.locationOffset.line > 0 ||
              De(
                0,
                "line in locationOffset is 1-indexed and must be positive."
              ),
            this.locationOffset.column > 0 ||
              De(
                0,
                "column in locationOffset is 1-indexed and must be positive."
              );
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: Se,
              get: function () {
                return "Source";
              },
            },
          ]) && Dr(t.prototype, n),
          r && Dr(t, r),
          e
        );
      })(),
      Rr = Object.freeze({
        SOF: "<SOF>",
        EOF: "<EOF>",
        BANG: "!",
        DOLLAR: "$",
        AMP: "&",
        PAREN_L: "(",
        PAREN_R: ")",
        SPREAD: "...",
        COLON: ":",
        EQUALS: "=",
        AT: "@",
        BRACKET_L: "[",
        BRACKET_R: "]",
        BRACE_L: "{",
        PIPE: "|",
        BRACE_R: "}",
        NAME: "Name",
        INT: "Int",
        FLOAT: "Float",
        STRING: "String",
        BLOCK_STRING: "BlockString",
        COMMENT: "Comment",
      }),
      Lr = n(19),
      Pr = (function () {
        function e(e) {
          var t = new Ar.b(Rr.SOF, 0, 0, 0, 0, null);
          (this.source = e),
            (this.lastToken = t),
            (this.token = t),
            (this.line = 1),
            (this.lineStart = 0);
        }
        var t = e.prototype;
        return (
          (t.advance = function () {
            return (
              (this.lastToken = this.token), (this.token = this.lookahead())
            );
          }),
          (t.lookahead = function () {
            var e = this.token;
            if (e.kind !== Rr.EOF)
              do {
                var t;
                e =
                  null !== (t = e.next) && void 0 !== t
                    ? t
                    : (e.next = Cr(this, e));
              } while (e.kind === Rr.COMMENT);
            return e;
          }),
          e
        );
      })();
    function Fr(e) {
      return isNaN(e)
        ? Rr.EOF
        : e < 127
        ? JSON.stringify(String.fromCharCode(e))
        : '"\\u'.concat(("00" + e.toString(16).toUpperCase()).slice(-4), '"');
    }
    function Cr(e, t) {
      var n = e.source,
        r = n.body,
        i = r.length,
        o = (function (e, t, n) {
          var r = e.length,
            i = t;
          for (; i < r; ) {
            var o = e.charCodeAt(i);
            if (9 === o || 32 === o || 44 === o || 65279 === o) ++i;
            else if (10 === o) ++i, ++n.line, (n.lineStart = i);
            else {
              if (13 !== o) break;
              10 === e.charCodeAt(i + 1) ? (i += 2) : ++i,
                ++n.line,
                (n.lineStart = i);
            }
          }
          return i;
        })(r, t.end, e),
        a = e.line,
        s = 1 + o - e.lineStart;
      if (o >= i) return new Ar.b(Rr.EOF, i, i, a, s, t);
      var c = r.charCodeAt(o);
      switch (c) {
        case 33:
          return new Ar.b(Rr.BANG, o, o + 1, a, s, t);
        case 35:
          return (function (e, t, n, r, i) {
            var o,
              a = e.body,
              s = t;
            do {
              o = a.charCodeAt(++s);
            } while (!isNaN(o) && (o > 31 || 9 === o));
            return new Ar.b(Rr.COMMENT, t, s, n, r, i, a.slice(t + 1, s));
          })(n, o, a, s, t);
        case 36:
          return new Ar.b(Rr.DOLLAR, o, o + 1, a, s, t);
        case 38:
          return new Ar.b(Rr.AMP, o, o + 1, a, s, t);
        case 40:
          return new Ar.b(Rr.PAREN_L, o, o + 1, a, s, t);
        case 41:
          return new Ar.b(Rr.PAREN_R, o, o + 1, a, s, t);
        case 46:
          if (46 === r.charCodeAt(o + 1) && 46 === r.charCodeAt(o + 2))
            return new Ar.b(Rr.SPREAD, o, o + 3, a, s, t);
          break;
        case 58:
          return new Ar.b(Rr.COLON, o, o + 1, a, s, t);
        case 61:
          return new Ar.b(Rr.EQUALS, o, o + 1, a, s, t);
        case 64:
          return new Ar.b(Rr.AT, o, o + 1, a, s, t);
        case 91:
          return new Ar.b(Rr.BRACKET_L, o, o + 1, a, s, t);
        case 93:
          return new Ar.b(Rr.BRACKET_R, o, o + 1, a, s, t);
        case 123:
          return new Ar.b(Rr.BRACE_L, o, o + 1, a, s, t);
        case 124:
          return new Ar.b(Rr.PIPE, o, o + 1, a, s, t);
        case 125:
          return new Ar.b(Rr.BRACE_R, o, o + 1, a, s, t);
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 95:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          return (function (e, t, n, r, i) {
            var o = e.body,
              a = o.length,
              s = t + 1,
              c = 0;
            for (
              ;
              s !== a &&
              !isNaN((c = o.charCodeAt(s))) &&
              (95 === c ||
                (c >= 48 && c <= 57) ||
                (c >= 65 && c <= 90) ||
                (c >= 97 && c <= 122));

            )
              ++s;
            return new Ar.b(Rr.NAME, t, s, n, r, i, o.slice(t, s));
          })(n, o, a, s, t);
        case 45:
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          return (function (e, t, n, r, i, o) {
            var a = e.body,
              s = n,
              c = t,
              u = !1;
            45 === s && (s = a.charCodeAt(++c));
            if (48 === s) {
              if ((s = a.charCodeAt(++c)) >= 48 && s <= 57)
                throw xr(
                  e,
                  c,
                  "Invalid number, unexpected digit after 0: ".concat(
                    Fr(s),
                    "."
                  )
                );
            } else (c = Mr(e, c, s)), (s = a.charCodeAt(c));
            46 === s &&
              ((u = !0),
              (s = a.charCodeAt(++c)),
              (c = Mr(e, c, s)),
              (s = a.charCodeAt(c)));
            (69 !== s && 101 !== s) ||
              ((u = !0),
              (43 !== (s = a.charCodeAt(++c)) && 45 !== s) ||
                (s = a.charCodeAt(++c)),
              (c = Mr(e, c, s)),
              (s = a.charCodeAt(c)));
            if (
              46 === s ||
              (function (e) {
                return (
                  95 === e || (e >= 65 && e <= 90) || (e >= 97 && e <= 122)
                );
              })(s)
            )
              throw xr(
                e,
                c,
                "Invalid number, expected digit but got: ".concat(Fr(s), ".")
              );
            return new Ar.b(
              u ? Rr.FLOAT : Rr.INT,
              t,
              c,
              r,
              i,
              o,
              a.slice(t, c)
            );
          })(n, o, c, a, s, t);
        case 34:
          return 34 === r.charCodeAt(o + 1) && 34 === r.charCodeAt(o + 2)
            ? (function (e, t, n, r, i, o) {
                var a = e.body,
                  s = t + 3,
                  c = s,
                  u = 0,
                  l = "";
                for (; s < a.length && !isNaN((u = a.charCodeAt(s))); ) {
                  if (
                    34 === u &&
                    34 === a.charCodeAt(s + 1) &&
                    34 === a.charCodeAt(s + 2)
                  )
                    return (
                      (l += a.slice(c, s)),
                      new Ar.b(
                        Rr.BLOCK_STRING,
                        t,
                        s + 3,
                        n,
                        r,
                        i,
                        Object(Lr.a)(l)
                      )
                    );
                  if (u < 32 && 9 !== u && 10 !== u && 13 !== u)
                    throw xr(
                      e,
                      s,
                      "Invalid character within String: ".concat(Fr(u), ".")
                    );
                  10 === u
                    ? (++s, ++o.line, (o.lineStart = s))
                    : 13 === u
                    ? (10 === a.charCodeAt(s + 1) ? (s += 2) : ++s,
                      ++o.line,
                      (o.lineStart = s))
                    : 92 === u &&
                      34 === a.charCodeAt(s + 1) &&
                      34 === a.charCodeAt(s + 2) &&
                      34 === a.charCodeAt(s + 3)
                    ? ((l += a.slice(c, s) + '"""'), (c = s += 4))
                    : ++s;
                }
                throw xr(e, s, "Unterminated string.");
              })(n, o, a, s, t, e)
            : (function (e, t, n, r, i) {
                var o = e.body,
                  a = t + 1,
                  s = a,
                  c = 0,
                  u = "";
                for (
                  ;
                  a < o.length &&
                  !isNaN((c = o.charCodeAt(a))) &&
                  10 !== c &&
                  13 !== c;

                ) {
                  if (34 === c)
                    return (
                      (u += o.slice(s, a)),
                      new Ar.b(Rr.STRING, t, a + 1, n, r, i, u)
                    );
                  if (c < 32 && 9 !== c)
                    throw xr(
                      e,
                      a,
                      "Invalid character within String: ".concat(Fr(c), ".")
                    );
                  if ((++a, 92 === c)) {
                    switch (((u += o.slice(s, a - 1)), (c = o.charCodeAt(a)))) {
                      case 34:
                        u += '"';
                        break;
                      case 47:
                        u += "/";
                        break;
                      case 92:
                        u += "\\";
                        break;
                      case 98:
                        u += "\b";
                        break;
                      case 102:
                        u += "\f";
                        break;
                      case 110:
                        u += "\n";
                        break;
                      case 114:
                        u += "\r";
                        break;
                      case 116:
                        u += "\t";
                        break;
                      case 117:
                        var l =
                          ((p = o.charCodeAt(a + 1)),
                          (d = o.charCodeAt(a + 2)),
                          (h = o.charCodeAt(a + 3)),
                          (v = o.charCodeAt(a + 4)),
                          (Ur(p) << 12) | (Ur(d) << 8) | (Ur(h) << 4) | Ur(v));
                        if (l < 0) {
                          var f = o.slice(a + 1, a + 5);
                          throw xr(
                            e,
                            a,
                            "Invalid character escape sequence: \\u".concat(
                              f,
                              "."
                            )
                          );
                        }
                        (u += String.fromCharCode(l)), (a += 4);
                        break;
                      default:
                        throw xr(
                          e,
                          a,
                          "Invalid character escape sequence: \\".concat(
                            String.fromCharCode(c),
                            "."
                          )
                        );
                    }
                    ++a, (s = a);
                  }
                }
                var p, d, h, v;
                throw xr(e, a, "Unterminated string.");
              })(n, o, a, s, t);
      }
      throw xr(
        n,
        o,
        (function (e) {
          if (e < 32 && 9 !== e && 10 !== e && 13 !== e)
            return "Cannot contain the invalid character ".concat(Fr(e), ".");
          if (39 === e)
            return "Unexpected single quote character ('), did you mean to use a double quote (\")?";
          return "Cannot parse the unexpected character ".concat(Fr(e), ".");
        })(c)
      );
    }
    function Mr(e, t, n) {
      var r = e.body,
        i = t,
        o = n;
      if (o >= 48 && o <= 57) {
        do {
          o = r.charCodeAt(++i);
        } while (o >= 48 && o <= 57);
        return i;
      }
      throw xr(
        e,
        i,
        "Invalid number, expected digit but got: ".concat(Fr(o), ".")
      );
    }
    function Ur(e) {
      return e >= 48 && e <= 57
        ? e - 48
        : e >= 65 && e <= 70
        ? e - 55
        : e >= 97 && e <= 102
        ? e - 87
        : -1;
    }
    function Vr(e, t) {
      return new Br(e, t).parseDocument();
    }
    var Br = (function () {
      function e(e, t) {
        var n = "string" === typeof e ? new jr(e) : e;
        n instanceof jr ||
          De(0, "Must provide Source. Received: ".concat(Object(Ie.a)(n), ".")),
          (this._lexer = new Pr(n)),
          (this._options = t);
      }
      var t = e.prototype;
      return (
        (t.parseName = function () {
          var e = this.expectToken(Rr.NAME);
          return { kind: rt.a.NAME, value: e.value, loc: this.loc(e) };
        }),
        (t.parseDocument = function () {
          var e = this._lexer.token;
          return {
            kind: rt.a.DOCUMENT,
            definitions: this.many(Rr.SOF, this.parseDefinition, Rr.EOF),
            loc: this.loc(e),
          };
        }),
        (t.parseDefinition = function () {
          if (this.peek(Rr.NAME))
            switch (this._lexer.token.value) {
              case "query":
              case "mutation":
              case "subscription":
                return this.parseOperationDefinition();
              case "fragment":
                return this.parseFragmentDefinition();
              case "schema":
              case "scalar":
              case "type":
              case "interface":
              case "union":
              case "enum":
              case "input":
              case "directive":
                return this.parseTypeSystemDefinition();
              case "extend":
                return this.parseTypeSystemExtension();
            }
          else {
            if (this.peek(Rr.BRACE_L)) return this.parseOperationDefinition();
            if (this.peekDescription()) return this.parseTypeSystemDefinition();
          }
          throw this.unexpected();
        }),
        (t.parseOperationDefinition = function () {
          var e = this._lexer.token;
          if (this.peek(Rr.BRACE_L))
            return {
              kind: rt.a.OPERATION_DEFINITION,
              operation: "query",
              name: void 0,
              variableDefinitions: [],
              directives: [],
              selectionSet: this.parseSelectionSet(),
              loc: this.loc(e),
            };
          var t,
            n = this.parseOperationType();
          return (
            this.peek(Rr.NAME) && (t = this.parseName()),
            {
              kind: rt.a.OPERATION_DEFINITION,
              operation: n,
              name: t,
              variableDefinitions: this.parseVariableDefinitions(),
              directives: this.parseDirectives(!1),
              selectionSet: this.parseSelectionSet(),
              loc: this.loc(e),
            }
          );
        }),
        (t.parseOperationType = function () {
          var e = this.expectToken(Rr.NAME);
          switch (e.value) {
            case "query":
              return "query";
            case "mutation":
              return "mutation";
            case "subscription":
              return "subscription";
          }
          throw this.unexpected(e);
        }),
        (t.parseVariableDefinitions = function () {
          return this.optionalMany(
            Rr.PAREN_L,
            this.parseVariableDefinition,
            Rr.PAREN_R
          );
        }),
        (t.parseVariableDefinition = function () {
          var e = this._lexer.token;
          return {
            kind: rt.a.VARIABLE_DEFINITION,
            variable: this.parseVariable(),
            type: (this.expectToken(Rr.COLON), this.parseTypeReference()),
            defaultValue: this.expectOptionalToken(Rr.EQUALS)
              ? this.parseValueLiteral(!0)
              : void 0,
            directives: this.parseDirectives(!0),
            loc: this.loc(e),
          };
        }),
        (t.parseVariable = function () {
          var e = this._lexer.token;
          return (
            this.expectToken(Rr.DOLLAR),
            { kind: rt.a.VARIABLE, name: this.parseName(), loc: this.loc(e) }
          );
        }),
        (t.parseSelectionSet = function () {
          var e = this._lexer.token;
          return {
            kind: rt.a.SELECTION_SET,
            selections: this.many(Rr.BRACE_L, this.parseSelection, Rr.BRACE_R),
            loc: this.loc(e),
          };
        }),
        (t.parseSelection = function () {
          return this.peek(Rr.SPREAD)
            ? this.parseFragment()
            : this.parseField();
        }),
        (t.parseField = function () {
          var e,
            t,
            n = this._lexer.token,
            r = this.parseName();
          return (
            this.expectOptionalToken(Rr.COLON)
              ? ((e = r), (t = this.parseName()))
              : (t = r),
            {
              kind: rt.a.FIELD,
              alias: e,
              name: t,
              arguments: this.parseArguments(!1),
              directives: this.parseDirectives(!1),
              selectionSet: this.peek(Rr.BRACE_L)
                ? this.parseSelectionSet()
                : void 0,
              loc: this.loc(n),
            }
          );
        }),
        (t.parseArguments = function (e) {
          var t = e ? this.parseConstArgument : this.parseArgument;
          return this.optionalMany(Rr.PAREN_L, t, Rr.PAREN_R);
        }),
        (t.parseArgument = function () {
          var e = this._lexer.token,
            t = this.parseName();
          return (
            this.expectToken(Rr.COLON),
            {
              kind: rt.a.ARGUMENT,
              name: t,
              value: this.parseValueLiteral(!1),
              loc: this.loc(e),
            }
          );
        }),
        (t.parseConstArgument = function () {
          var e = this._lexer.token;
          return {
            kind: rt.a.ARGUMENT,
            name: this.parseName(),
            value: (this.expectToken(Rr.COLON), this.parseValueLiteral(!0)),
            loc: this.loc(e),
          };
        }),
        (t.parseFragment = function () {
          var e = this._lexer.token;
          this.expectToken(Rr.SPREAD);
          var t = this.expectOptionalKeyword("on");
          return !t && this.peek(Rr.NAME)
            ? {
                kind: rt.a.FRAGMENT_SPREAD,
                name: this.parseFragmentName(),
                directives: this.parseDirectives(!1),
                loc: this.loc(e),
              }
            : {
                kind: rt.a.INLINE_FRAGMENT,
                typeCondition: t ? this.parseNamedType() : void 0,
                directives: this.parseDirectives(!1),
                selectionSet: this.parseSelectionSet(),
                loc: this.loc(e),
              };
        }),
        (t.parseFragmentDefinition = function () {
          var e,
            t = this._lexer.token;
          return (
            this.expectKeyword("fragment"),
            !0 ===
            (null === (e = this._options) || void 0 === e
              ? void 0
              : e.experimentalFragmentVariables)
              ? {
                  kind: rt.a.FRAGMENT_DEFINITION,
                  name: this.parseFragmentName(),
                  variableDefinitions: this.parseVariableDefinitions(),
                  typeCondition:
                    (this.expectKeyword("on"), this.parseNamedType()),
                  directives: this.parseDirectives(!1),
                  selectionSet: this.parseSelectionSet(),
                  loc: this.loc(t),
                }
              : {
                  kind: rt.a.FRAGMENT_DEFINITION,
                  name: this.parseFragmentName(),
                  typeCondition:
                    (this.expectKeyword("on"), this.parseNamedType()),
                  directives: this.parseDirectives(!1),
                  selectionSet: this.parseSelectionSet(),
                  loc: this.loc(t),
                }
          );
        }),
        (t.parseFragmentName = function () {
          if ("on" === this._lexer.token.value) throw this.unexpected();
          return this.parseName();
        }),
        (t.parseValueLiteral = function (e) {
          var t = this._lexer.token;
          switch (t.kind) {
            case Rr.BRACKET_L:
              return this.parseList(e);
            case Rr.BRACE_L:
              return this.parseObject(e);
            case Rr.INT:
              return (
                this._lexer.advance(),
                { kind: rt.a.INT, value: t.value, loc: this.loc(t) }
              );
            case Rr.FLOAT:
              return (
                this._lexer.advance(),
                { kind: rt.a.FLOAT, value: t.value, loc: this.loc(t) }
              );
            case Rr.STRING:
            case Rr.BLOCK_STRING:
              return this.parseStringLiteral();
            case Rr.NAME:
              switch ((this._lexer.advance(), t.value)) {
                case "true":
                  return { kind: rt.a.BOOLEAN, value: !0, loc: this.loc(t) };
                case "false":
                  return { kind: rt.a.BOOLEAN, value: !1, loc: this.loc(t) };
                case "null":
                  return { kind: rt.a.NULL, loc: this.loc(t) };
                default:
                  return { kind: rt.a.ENUM, value: t.value, loc: this.loc(t) };
              }
            case Rr.DOLLAR:
              if (!e) return this.parseVariable();
          }
          throw this.unexpected();
        }),
        (t.parseStringLiteral = function () {
          var e = this._lexer.token;
          return (
            this._lexer.advance(),
            {
              kind: rt.a.STRING,
              value: e.value,
              block: e.kind === Rr.BLOCK_STRING,
              loc: this.loc(e),
            }
          );
        }),
        (t.parseList = function (e) {
          var t = this,
            n = this._lexer.token;
          return {
            kind: rt.a.LIST,
            values: this.any(
              Rr.BRACKET_L,
              function () {
                return t.parseValueLiteral(e);
              },
              Rr.BRACKET_R
            ),
            loc: this.loc(n),
          };
        }),
        (t.parseObject = function (e) {
          var t = this,
            n = this._lexer.token;
          return {
            kind: rt.a.OBJECT,
            fields: this.any(
              Rr.BRACE_L,
              function () {
                return t.parseObjectField(e);
              },
              Rr.BRACE_R
            ),
            loc: this.loc(n),
          };
        }),
        (t.parseObjectField = function (e) {
          var t = this._lexer.token,
            n = this.parseName();
          return (
            this.expectToken(Rr.COLON),
            {
              kind: rt.a.OBJECT_FIELD,
              name: n,
              value: this.parseValueLiteral(e),
              loc: this.loc(t),
            }
          );
        }),
        (t.parseDirectives = function (e) {
          for (var t = []; this.peek(Rr.AT); ) t.push(this.parseDirective(e));
          return t;
        }),
        (t.parseDirective = function (e) {
          var t = this._lexer.token;
          return (
            this.expectToken(Rr.AT),
            {
              kind: rt.a.DIRECTIVE,
              name: this.parseName(),
              arguments: this.parseArguments(e),
              loc: this.loc(t),
            }
          );
        }),
        (t.parseTypeReference = function () {
          var e,
            t = this._lexer.token;
          return (
            this.expectOptionalToken(Rr.BRACKET_L)
              ? ((e = this.parseTypeReference()),
                this.expectToken(Rr.BRACKET_R),
                (e = { kind: rt.a.LIST_TYPE, type: e, loc: this.loc(t) }))
              : (e = this.parseNamedType()),
            this.expectOptionalToken(Rr.BANG)
              ? { kind: rt.a.NON_NULL_TYPE, type: e, loc: this.loc(t) }
              : e
          );
        }),
        (t.parseNamedType = function () {
          var e = this._lexer.token;
          return {
            kind: rt.a.NAMED_TYPE,
            name: this.parseName(),
            loc: this.loc(e),
          };
        }),
        (t.parseTypeSystemDefinition = function () {
          var e = this.peekDescription()
            ? this._lexer.lookahead()
            : this._lexer.token;
          if (e.kind === Rr.NAME)
            switch (e.value) {
              case "schema":
                return this.parseSchemaDefinition();
              case "scalar":
                return this.parseScalarTypeDefinition();
              case "type":
                return this.parseObjectTypeDefinition();
              case "interface":
                return this.parseInterfaceTypeDefinition();
              case "union":
                return this.parseUnionTypeDefinition();
              case "enum":
                return this.parseEnumTypeDefinition();
              case "input":
                return this.parseInputObjectTypeDefinition();
              case "directive":
                return this.parseDirectiveDefinition();
            }
          throw this.unexpected(e);
        }),
        (t.peekDescription = function () {
          return this.peek(Rr.STRING) || this.peek(Rr.BLOCK_STRING);
        }),
        (t.parseDescription = function () {
          if (this.peekDescription()) return this.parseStringLiteral();
        }),
        (t.parseSchemaDefinition = function () {
          var e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("schema");
          var n = this.parseDirectives(!0),
            r = this.many(
              Rr.BRACE_L,
              this.parseOperationTypeDefinition,
              Rr.BRACE_R
            );
          return {
            kind: rt.a.SCHEMA_DEFINITION,
            description: t,
            directives: n,
            operationTypes: r,
            loc: this.loc(e),
          };
        }),
        (t.parseOperationTypeDefinition = function () {
          var e = this._lexer.token,
            t = this.parseOperationType();
          this.expectToken(Rr.COLON);
          var n = this.parseNamedType();
          return {
            kind: rt.a.OPERATION_TYPE_DEFINITION,
            operation: t,
            type: n,
            loc: this.loc(e),
          };
        }),
        (t.parseScalarTypeDefinition = function () {
          var e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("scalar");
          var n = this.parseName(),
            r = this.parseDirectives(!0);
          return {
            kind: rt.a.SCALAR_TYPE_DEFINITION,
            description: t,
            name: n,
            directives: r,
            loc: this.loc(e),
          };
        }),
        (t.parseObjectTypeDefinition = function () {
          var e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("type");
          var n = this.parseName(),
            r = this.parseImplementsInterfaces(),
            i = this.parseDirectives(!0),
            o = this.parseFieldsDefinition();
          return {
            kind: rt.a.OBJECT_TYPE_DEFINITION,
            description: t,
            name: n,
            interfaces: r,
            directives: i,
            fields: o,
            loc: this.loc(e),
          };
        }),
        (t.parseImplementsInterfaces = function () {
          var e = [];
          if (this.expectOptionalKeyword("implements")) {
            this.expectOptionalToken(Rr.AMP);
            do {
              var t;
              e.push(this.parseNamedType());
            } while (
              this.expectOptionalToken(Rr.AMP) ||
              (!0 ===
                (null === (t = this._options) || void 0 === t
                  ? void 0
                  : t.allowLegacySDLImplementsInterfaces) &&
                this.peek(Rr.NAME))
            );
          }
          return e;
        }),
        (t.parseFieldsDefinition = function () {
          var e;
          return !0 ===
            (null === (e = this._options) || void 0 === e
              ? void 0
              : e.allowLegacySDLEmptyFields) &&
            this.peek(Rr.BRACE_L) &&
            this._lexer.lookahead().kind === Rr.BRACE_R
            ? (this._lexer.advance(), this._lexer.advance(), [])
            : this.optionalMany(
                Rr.BRACE_L,
                this.parseFieldDefinition,
                Rr.BRACE_R
              );
        }),
        (t.parseFieldDefinition = function () {
          var e = this._lexer.token,
            t = this.parseDescription(),
            n = this.parseName(),
            r = this.parseArgumentDefs();
          this.expectToken(Rr.COLON);
          var i = this.parseTypeReference(),
            o = this.parseDirectives(!0);
          return {
            kind: rt.a.FIELD_DEFINITION,
            description: t,
            name: n,
            arguments: r,
            type: i,
            directives: o,
            loc: this.loc(e),
          };
        }),
        (t.parseArgumentDefs = function () {
          return this.optionalMany(
            Rr.PAREN_L,
            this.parseInputValueDef,
            Rr.PAREN_R
          );
        }),
        (t.parseInputValueDef = function () {
          var e = this._lexer.token,
            t = this.parseDescription(),
            n = this.parseName();
          this.expectToken(Rr.COLON);
          var r,
            i = this.parseTypeReference();
          this.expectOptionalToken(Rr.EQUALS) &&
            (r = this.parseValueLiteral(!0));
          var o = this.parseDirectives(!0);
          return {
            kind: rt.a.INPUT_VALUE_DEFINITION,
            description: t,
            name: n,
            type: i,
            defaultValue: r,
            directives: o,
            loc: this.loc(e),
          };
        }),
        (t.parseInterfaceTypeDefinition = function () {
          var e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("interface");
          var n = this.parseName(),
            r = this.parseImplementsInterfaces(),
            i = this.parseDirectives(!0),
            o = this.parseFieldsDefinition();
          return {
            kind: rt.a.INTERFACE_TYPE_DEFINITION,
            description: t,
            name: n,
            interfaces: r,
            directives: i,
            fields: o,
            loc: this.loc(e),
          };
        }),
        (t.parseUnionTypeDefinition = function () {
          var e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("union");
          var n = this.parseName(),
            r = this.parseDirectives(!0),
            i = this.parseUnionMemberTypes();
          return {
            kind: rt.a.UNION_TYPE_DEFINITION,
            description: t,
            name: n,
            directives: r,
            types: i,
            loc: this.loc(e),
          };
        }),
        (t.parseUnionMemberTypes = function () {
          var e = [];
          if (this.expectOptionalToken(Rr.EQUALS)) {
            this.expectOptionalToken(Rr.PIPE);
            do {
              e.push(this.parseNamedType());
            } while (this.expectOptionalToken(Rr.PIPE));
          }
          return e;
        }),
        (t.parseEnumTypeDefinition = function () {
          var e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("enum");
          var n = this.parseName(),
            r = this.parseDirectives(!0),
            i = this.parseEnumValuesDefinition();
          return {
            kind: rt.a.ENUM_TYPE_DEFINITION,
            description: t,
            name: n,
            directives: r,
            values: i,
            loc: this.loc(e),
          };
        }),
        (t.parseEnumValuesDefinition = function () {
          return this.optionalMany(
            Rr.BRACE_L,
            this.parseEnumValueDefinition,
            Rr.BRACE_R
          );
        }),
        (t.parseEnumValueDefinition = function () {
          var e = this._lexer.token,
            t = this.parseDescription(),
            n = this.parseName(),
            r = this.parseDirectives(!0);
          return {
            kind: rt.a.ENUM_VALUE_DEFINITION,
            description: t,
            name: n,
            directives: r,
            loc: this.loc(e),
          };
        }),
        (t.parseInputObjectTypeDefinition = function () {
          var e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("input");
          var n = this.parseName(),
            r = this.parseDirectives(!0),
            i = this.parseInputFieldsDefinition();
          return {
            kind: rt.a.INPUT_OBJECT_TYPE_DEFINITION,
            description: t,
            name: n,
            directives: r,
            fields: i,
            loc: this.loc(e),
          };
        }),
        (t.parseInputFieldsDefinition = function () {
          return this.optionalMany(
            Rr.BRACE_L,
            this.parseInputValueDef,
            Rr.BRACE_R
          );
        }),
        (t.parseTypeSystemExtension = function () {
          var e = this._lexer.lookahead();
          if (e.kind === Rr.NAME)
            switch (e.value) {
              case "schema":
                return this.parseSchemaExtension();
              case "scalar":
                return this.parseScalarTypeExtension();
              case "type":
                return this.parseObjectTypeExtension();
              case "interface":
                return this.parseInterfaceTypeExtension();
              case "union":
                return this.parseUnionTypeExtension();
              case "enum":
                return this.parseEnumTypeExtension();
              case "input":
                return this.parseInputObjectTypeExtension();
            }
          throw this.unexpected(e);
        }),
        (t.parseSchemaExtension = function () {
          var e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("schema");
          var t = this.parseDirectives(!0),
            n = this.optionalMany(
              Rr.BRACE_L,
              this.parseOperationTypeDefinition,
              Rr.BRACE_R
            );
          if (0 === t.length && 0 === n.length) throw this.unexpected();
          return {
            kind: rt.a.SCHEMA_EXTENSION,
            directives: t,
            operationTypes: n,
            loc: this.loc(e),
          };
        }),
        (t.parseScalarTypeExtension = function () {
          var e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("scalar");
          var t = this.parseName(),
            n = this.parseDirectives(!0);
          if (0 === n.length) throw this.unexpected();
          return {
            kind: rt.a.SCALAR_TYPE_EXTENSION,
            name: t,
            directives: n,
            loc: this.loc(e),
          };
        }),
        (t.parseObjectTypeExtension = function () {
          var e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("type");
          var t = this.parseName(),
            n = this.parseImplementsInterfaces(),
            r = this.parseDirectives(!0),
            i = this.parseFieldsDefinition();
          if (0 === n.length && 0 === r.length && 0 === i.length)
            throw this.unexpected();
          return {
            kind: rt.a.OBJECT_TYPE_EXTENSION,
            name: t,
            interfaces: n,
            directives: r,
            fields: i,
            loc: this.loc(e),
          };
        }),
        (t.parseInterfaceTypeExtension = function () {
          var e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("interface");
          var t = this.parseName(),
            n = this.parseImplementsInterfaces(),
            r = this.parseDirectives(!0),
            i = this.parseFieldsDefinition();
          if (0 === n.length && 0 === r.length && 0 === i.length)
            throw this.unexpected();
          return {
            kind: rt.a.INTERFACE_TYPE_EXTENSION,
            name: t,
            interfaces: n,
            directives: r,
            fields: i,
            loc: this.loc(e),
          };
        }),
        (t.parseUnionTypeExtension = function () {
          var e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("union");
          var t = this.parseName(),
            n = this.parseDirectives(!0),
            r = this.parseUnionMemberTypes();
          if (0 === n.length && 0 === r.length) throw this.unexpected();
          return {
            kind: rt.a.UNION_TYPE_EXTENSION,
            name: t,
            directives: n,
            types: r,
            loc: this.loc(e),
          };
        }),
        (t.parseEnumTypeExtension = function () {
          var e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("enum");
          var t = this.parseName(),
            n = this.parseDirectives(!0),
            r = this.parseEnumValuesDefinition();
          if (0 === n.length && 0 === r.length) throw this.unexpected();
          return {
            kind: rt.a.ENUM_TYPE_EXTENSION,
            name: t,
            directives: n,
            values: r,
            loc: this.loc(e),
          };
        }),
        (t.parseInputObjectTypeExtension = function () {
          var e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("input");
          var t = this.parseName(),
            n = this.parseDirectives(!0),
            r = this.parseInputFieldsDefinition();
          if (0 === n.length && 0 === r.length) throw this.unexpected();
          return {
            kind: rt.a.INPUT_OBJECT_TYPE_EXTENSION,
            name: t,
            directives: n,
            fields: r,
            loc: this.loc(e),
          };
        }),
        (t.parseDirectiveDefinition = function () {
          var e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("directive"), this.expectToken(Rr.AT);
          var n = this.parseName(),
            r = this.parseArgumentDefs(),
            i = this.expectOptionalKeyword("repeatable");
          this.expectKeyword("on");
          var o = this.parseDirectiveLocations();
          return {
            kind: rt.a.DIRECTIVE_DEFINITION,
            description: t,
            name: n,
            arguments: r,
            repeatable: i,
            locations: o,
            loc: this.loc(e),
          };
        }),
        (t.parseDirectiveLocations = function () {
          this.expectOptionalToken(Rr.PIPE);
          var e = [];
          do {
            e.push(this.parseDirectiveLocation());
          } while (this.expectOptionalToken(Rr.PIPE));
          return e;
        }),
        (t.parseDirectiveLocation = function () {
          var e = this._lexer.token,
            t = this.parseName();
          if (void 0 !== zt[t.value]) return t;
          throw this.unexpected(e);
        }),
        (t.loc = function (e) {
          var t;
          if (
            !0 !==
            (null === (t = this._options) || void 0 === t
              ? void 0
              : t.noLocation)
          )
            return new Ar.a(e, this._lexer.lastToken, this._lexer.source);
        }),
        (t.peek = function (e) {
          return this._lexer.token.kind === e;
        }),
        (t.expectToken = function (e) {
          var t = this._lexer.token;
          if (t.kind === e) return this._lexer.advance(), t;
          throw xr(
            this._lexer.source,
            t.start,
            "Expected ".concat(Yr(e), ", found ").concat(Gr(t), ".")
          );
        }),
        (t.expectOptionalToken = function (e) {
          var t = this._lexer.token;
          if (t.kind === e) return this._lexer.advance(), t;
        }),
        (t.expectKeyword = function (e) {
          var t = this._lexer.token;
          if (t.kind !== Rr.NAME || t.value !== e)
            throw xr(
              this._lexer.source,
              t.start,
              'Expected "'.concat(e, '", found ').concat(Gr(t), ".")
            );
          this._lexer.advance();
        }),
        (t.expectOptionalKeyword = function (e) {
          var t = this._lexer.token;
          return (
            t.kind === Rr.NAME && t.value === e && (this._lexer.advance(), !0)
          );
        }),
        (t.unexpected = function (e) {
          var t = null !== e && void 0 !== e ? e : this._lexer.token;
          return xr(
            this._lexer.source,
            t.start,
            "Unexpected ".concat(Gr(t), ".")
          );
        }),
        (t.any = function (e, t, n) {
          this.expectToken(e);
          for (var r = []; !this.expectOptionalToken(n); ) r.push(t.call(this));
          return r;
        }),
        (t.optionalMany = function (e, t, n) {
          if (this.expectOptionalToken(e)) {
            var r = [];
            do {
              r.push(t.call(this));
            } while (!this.expectOptionalToken(n));
            return r;
          }
          return [];
        }),
        (t.many = function (e, t, n) {
          this.expectToken(e);
          var r = [];
          do {
            r.push(t.call(this));
          } while (!this.expectOptionalToken(n));
          return r;
        }),
        e
      );
    })();
    function Gr(e) {
      var t = e.value;
      return Yr(e.kind) + (null != t ? ' "'.concat(t, '"') : "");
    }
    function Yr(e) {
      return (function (e) {
        return (
          e === Rr.BANG ||
          e === Rr.DOLLAR ||
          e === Rr.AMP ||
          e === Rr.PAREN_L ||
          e === Rr.PAREN_R ||
          e === Rr.SPREAD ||
          e === Rr.COLON ||
          e === Rr.EQUALS ||
          e === Rr.AT ||
          e === Rr.BRACKET_L ||
          e === Rr.BRACKET_R ||
          e === Rr.BRACE_L ||
          e === Rr.PIPE ||
          e === Rr.BRACE_R
        );
      })(e)
        ? '"'.concat(e, '"')
        : e;
    }
    function qr(e, t) {
      return (
        e === t ||
        (((yt(e) && yt(t)) || !(!vt(e) || !vt(t))) && qr(e.ofType, t.ofType))
      );
    }
    function Qr(e, t, n) {
      return (
        t === n ||
        (yt(n)
          ? !!yt(t) && Qr(e, t.ofType, n.ofType)
          : yt(t)
          ? Qr(e, t.ofType, n)
          : vt(n)
          ? !!vt(t) && Qr(e, t.ofType, n.ofType)
          : !vt(t) && Tt(n) && (ft(t) || lt(t)) && e.isSubType(n, t))
      );
    }
    function Jr(e, t, n) {
      return (
        t === n ||
        (Tt(t)
          ? Tt(n)
            ? e.getPossibleTypes(t).some(function (t) {
                return e.isSubType(n, t);
              })
            : e.isSubType(t, n)
          : !!Tt(n) && e.isSubType(n, t))
      );
    }
    function zr(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function Hr(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Kr(e, t, n) {
      return t && Hr(e.prototype, t), n && Hr(e, n), e;
    }
    var Wr = (function () {
      function e(t) {
        var n = this;
        zr(this, e),
          (this.getStartOfToken = function () {
            return n._start;
          }),
          (this.getCurrentPosition = function () {
            return n._pos;
          }),
          (this.eol = function () {
            return n._sourceText.length === n._pos;
          }),
          (this.sol = function () {
            return 0 === n._pos;
          }),
          (this.peek = function () {
            return n._sourceText.charAt(n._pos)
              ? n._sourceText.charAt(n._pos)
              : null;
          }),
          (this.next = function () {
            var e = n._sourceText.charAt(n._pos);
            return n._pos++, e;
          }),
          (this.eat = function (e) {
            if (n._testNextCharacter(e))
              return (
                (n._start = n._pos), n._pos++, n._sourceText.charAt(n._pos - 1)
              );
          }),
          (this.eatWhile = function (e) {
            var t = n._testNextCharacter(e),
              r = !1;
            for (t && ((r = t), (n._start = n._pos)); t; )
              n._pos++, (t = n._testNextCharacter(e)), (r = !0);
            return r;
          }),
          (this.eatSpace = function () {
            return n.eatWhile(/[\s\u00a0]/);
          }),
          (this.skipToEnd = function () {
            n._pos = n._sourceText.length;
          }),
          (this.skipTo = function (e) {
            n._pos = e;
          }),
          (this.match = function (e) {
            var t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1],
              r =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              i = null,
              o = null;
            if ("string" === typeof e) {
              var a = new RegExp(e, r ? "i" : "g");
              (o = a.test(n._sourceText.substr(n._pos, e.length))), (i = e);
            } else
              e instanceof RegExp &&
                (i = (o = n._sourceText.slice(n._pos).match(e)) && o[0]);
            return (
              !(
                null == o ||
                !(
                  "string" === typeof e ||
                  (o instanceof Array && n._sourceText.startsWith(o[0], n._pos))
                )
              ) &&
              (t &&
                ((n._start = n._pos), i && i.length && (n._pos += i.length)),
              o)
            );
          }),
          (this.backUp = function (e) {
            n._pos -= e;
          }),
          (this.column = function () {
            return n._pos;
          }),
          (this.indentation = function () {
            var e = n._sourceText.match(/\s*/),
              t = 0;
            if (e && 0 === e.length)
              for (var r = e[0], i = 0; r.length > i; )
                9 === r.charCodeAt(i) ? (t += 2) : t++, i++;
            return t;
          }),
          (this.current = function () {
            return n._sourceText.slice(n._start, n._pos);
          }),
          (this._start = 0),
          (this._pos = 0),
          (this._sourceText = t);
      }
      return (
        Kr(e, [
          {
            key: "_testNextCharacter",
            value: function (e) {
              var t = this._sourceText.charAt(this._pos);
              return "string" === typeof e
                ? t === e
                : e instanceof RegExp
                ? e.test(t)
                : e(t);
            },
          },
        ]),
        e
      );
    })();
    function Xr(e) {
      return { ofRule: e };
    }
    function $r(e, t) {
      return { ofRule: e, isList: !0, separator: t };
    }
    function Zr(e, t) {
      return {
        style: t,
        match: function (t) {
          return t.kind === e;
        },
      };
    }
    function ei(e, t) {
      return {
        style: t || "punctuation",
        match: function (t) {
          return "Punctuation" === t.kind && t.value === e;
        },
      };
    }
    var ti,
      ni = function (e) {
        return (
          " " === e ||
          "\t" === e ||
          "," === e ||
          "\n" === e ||
          "\r" === e ||
          "\ufeff" === e ||
          "\xa0" === e
        );
      },
      ri = {
        Name: /^[_A-Za-z][_0-9A-Za-z]*/,
        Punctuation: /^(?:!|\$|\(|\)|\.\.\.|:|=|@|\[|]|\{|\||\})/,
        Number: /^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,
        String: /^(?:"""(?:\\"""|[^"]|"[^"]|""[^"])*(?:""")?|"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?)/,
        Comment: /^#.*/,
      },
      ii = {
        Document: [$r("Definition")],
        Definition: function (e) {
          switch (e.value) {
            case "{":
              return "ShortQuery";
            case "query":
              return "Query";
            case "mutation":
              return "Mutation";
            case "subscription":
              return "Subscription";
            case "fragment":
              return "FragmentDefinition";
            case "schema":
              return "SchemaDef";
            case "scalar":
              return "ScalarDef";
            case "type":
              return "ObjectTypeDef";
            case "interface":
              return "InterfaceDef";
            case "union":
              return "UnionDef";
            case "enum":
              return "EnumDef";
            case "input":
              return "InputDef";
            case "extend":
              return "ExtendDef";
            case "directive":
              return "DirectiveDef";
          }
        },
        ShortQuery: ["SelectionSet"],
        Query: [
          oi("query"),
          Xr(ai("def")),
          Xr("VariableDefinitions"),
          $r("Directive"),
          "SelectionSet",
        ],
        Mutation: [
          oi("mutation"),
          Xr(ai("def")),
          Xr("VariableDefinitions"),
          $r("Directive"),
          "SelectionSet",
        ],
        Subscription: [
          oi("subscription"),
          Xr(ai("def")),
          Xr("VariableDefinitions"),
          $r("Directive"),
          "SelectionSet",
        ],
        VariableDefinitions: [ei("("), $r("VariableDefinition"), ei(")")],
        VariableDefinition: ["Variable", ei(":"), "Type", Xr("DefaultValue")],
        Variable: [ei("$", "variable"), ai("variable")],
        DefaultValue: [ei("="), "Value"],
        SelectionSet: [ei("{"), $r("Selection"), ei("}")],
        Selection: function (e, t) {
          return "..." === e.value
            ? t.match(/[\s\u00a0,]*(on\b|@|{)/, !1)
              ? "InlineFragment"
              : "FragmentSpread"
            : t.match(/[\s\u00a0,]*:/, !1)
            ? "AliasedField"
            : "Field";
        },
        AliasedField: [
          ai("property"),
          ei(":"),
          ai("qualifier"),
          Xr("Arguments"),
          $r("Directive"),
          Xr("SelectionSet"),
        ],
        Field: [
          ai("property"),
          Xr("Arguments"),
          $r("Directive"),
          Xr("SelectionSet"),
        ],
        Arguments: [ei("("), $r("Argument"), ei(")")],
        Argument: [ai("attribute"), ei(":"), "Value"],
        FragmentSpread: [ei("..."), ai("def"), $r("Directive")],
        InlineFragment: [
          ei("..."),
          Xr("TypeCondition"),
          $r("Directive"),
          "SelectionSet",
        ],
        FragmentDefinition: [
          oi("fragment"),
          Xr(
            (function (e, t) {
              var n = e.match;
              return (
                (e.match = function (e) {
                  var r = !1;
                  return (
                    n && (r = n(e)),
                    r &&
                      t.every(function (t) {
                        return t.match && !t.match(e);
                      })
                  );
                }),
                e
              );
            })(ai("def"), [oi("on")])
          ),
          "TypeCondition",
          $r("Directive"),
          "SelectionSet",
        ],
        TypeCondition: [oi("on"), "NamedType"],
        Value: function (e) {
          switch (e.kind) {
            case "Number":
              return "NumberValue";
            case "String":
              return "StringValue";
            case "Punctuation":
              switch (e.value) {
                case "[":
                  return "ListValue";
                case "{":
                  return "ObjectValue";
                case "$":
                  return "Variable";
              }
              return null;
            case "Name":
              switch (e.value) {
                case "true":
                case "false":
                  return "BooleanValue";
              }
              return "null" === e.value ? "NullValue" : "EnumValue";
          }
        },
        NumberValue: [Zr("Number", "number")],
        StringValue: [Zr("String", "string")],
        BooleanValue: [Zr("Name", "builtin")],
        NullValue: [Zr("Name", "keyword")],
        EnumValue: [ai("string-2")],
        ListValue: [ei("["), $r("Value"), ei("]")],
        ObjectValue: [ei("{"), $r("ObjectField"), ei("}")],
        ObjectField: [ai("attribute"), ei(":"), "Value"],
        Type: function (e) {
          return "[" === e.value ? "ListType" : "NonNullType";
        },
        ListType: [ei("["), "Type", ei("]"), Xr(ei("!"))],
        NonNullType: ["NamedType", Xr(ei("!"))],
        NamedType: [
          ((ti = "atom"),
          {
            style: ti,
            match: function (e) {
              return "Name" === e.kind;
            },
            update: function (e, t) {
              e.prevState &&
                e.prevState.prevState &&
                ((e.name = t.value), (e.prevState.prevState.type = t.value));
            },
          }),
        ],
        Directive: [ei("@", "meta"), ai("meta"), Xr("Arguments")],
        SchemaDef: [
          oi("schema"),
          $r("Directive"),
          ei("{"),
          $r("OperationTypeDef"),
          ei("}"),
        ],
        OperationTypeDef: [ai("keyword"), ei(":"), ai("atom")],
        ScalarDef: [oi("scalar"), ai("atom"), $r("Directive")],
        ObjectTypeDef: [
          oi("type"),
          ai("atom"),
          Xr("Implements"),
          $r("Directive"),
          ei("{"),
          $r("FieldDef"),
          ei("}"),
        ],
        Implements: [oi("implements"), $r("NamedType")],
        FieldDef: [
          ai("property"),
          Xr("ArgumentsDef"),
          ei(":"),
          "Type",
          $r("Directive"),
        ],
        ArgumentsDef: [ei("("), $r("InputValueDef"), ei(")")],
        InputValueDef: [
          ai("attribute"),
          ei(":"),
          "Type",
          Xr("DefaultValue"),
          $r("Directive"),
        ],
        InterfaceDef: [
          oi("interface"),
          ai("atom"),
          $r("Directive"),
          ei("{"),
          $r("FieldDef"),
          ei("}"),
        ],
        UnionDef: [
          oi("union"),
          ai("atom"),
          $r("Directive"),
          ei("="),
          $r("UnionMember", ei("|")),
        ],
        UnionMember: ["NamedType"],
        EnumDef: [
          oi("enum"),
          ai("atom"),
          $r("Directive"),
          ei("{"),
          $r("EnumValueDef"),
          ei("}"),
        ],
        EnumValueDef: [ai("string-2"), $r("Directive")],
        InputDef: [
          oi("input"),
          ai("atom"),
          $r("Directive"),
          ei("{"),
          $r("InputValueDef"),
          ei("}"),
        ],
        ExtendDef: [oi("extend"), "ObjectTypeDef"],
        DirectiveDef: [
          oi("directive"),
          ei("@", "meta"),
          ai("meta"),
          Xr("ArgumentsDef"),
          oi("on"),
          $r("DirectiveLocation", ei("|")),
        ],
        DirectiveLocation: [ai("string-2")],
      };
    function oi(e) {
      return {
        style: "keyword",
        match: function (t) {
          return "Name" === t.kind && t.value === e;
        },
      };
    }
    function ai(e) {
      return {
        style: e,
        match: function (e) {
          return "Name" === e.kind;
        },
        update: function (e, t) {
          e.name = t.value;
        },
      };
    }
    function si() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : {
              eatWhitespace: function (e) {
                return e.eatWhile(ni);
              },
              lexRules: ri,
              parseRules: ii,
              editorConfig: {},
            };
      return {
        startState: function () {
          var t = {
            level: 0,
            step: 0,
            name: null,
            kind: null,
            type: null,
            rule: null,
            needsSeperator: !1,
            prevState: null,
          };
          return fi(e.parseRules, t, "Document"), t;
        },
        token: function (t, n) {
          return ci(t, n, e);
        },
      };
    }
    function ci(e, t, n) {
      var r = n.lexRules,
        i = n.parseRules,
        o = n.eatWhitespace,
        a = n.editorConfig;
      if (
        (t.rule && 0 === t.rule.length
          ? pi(t)
          : t.needsAdvance && ((t.needsAdvance = !1), di(t, !0)),
        e.sol())
      ) {
        var s = (a && a.tabSize) || 2;
        t.indentLevel = Math.floor(e.indentation() / s);
      }
      if (o(e)) return "ws";
      var c = (function (e, t) {
        for (var n = Object.keys(e), r = 0; r < n.length; r++) {
          var i = t.match(e[n[r]]);
          if (i && i instanceof Array) return { kind: n[r], value: i[0] };
        }
      })(r, e);
      if (!c)
        return (
          e.match(/\S+/) || e.match(/\s/), fi(li, t, "Invalid"), "invalidchar"
        );
      if ("Comment" === c.kind) return fi(li, t, "Comment"), "comment";
      var u = ui({}, t);
      if ("Punctuation" === c.kind)
        if (/^[{([]/.test(c.value))
          void 0 !== t.indentLevel &&
            (t.levels = (t.levels || []).concat(t.indentLevel + 1));
        else if (/^[})\]]/.test(c.value)) {
          var l = (t.levels = (t.levels || []).slice(0, -1));
          t.indentLevel &&
            l.length > 0 &&
            l[l.length - 1] < t.indentLevel &&
            (t.indentLevel = l[l.length - 1]);
        }
      for (; t.rule; ) {
        var f =
          "function" === typeof t.rule
            ? 0 === t.step
              ? t.rule(c, e)
              : null
            : t.rule[t.step];
        if ((t.needsSeperator && (f = f && f.separator), f)) {
          if ((f.ofRule && (f = f.ofRule), "string" === typeof f)) {
            fi(i, t, f);
            continue;
          }
          if (f.match && f.match(c))
            return (
              f.update && f.update(t, c),
              "Punctuation" === c.kind ? di(t, !0) : (t.needsAdvance = !0),
              f.style
            );
        }
        vi(t);
      }
      return ui(t, u), fi(li, t, "Invalid"), "invalidchar";
    }
    function ui(e, t) {
      for (var n = Object.keys(t), r = 0; r < n.length; r++) e[n[r]] = t[n[r]];
      return e;
    }
    var li = { Invalid: [], Comment: [] };
    function fi(e, t, n) {
      if (!e[n]) throw new TypeError("Unknown rule: " + n);
      (t.prevState = Object.assign({}, t)),
        (t.kind = n),
        (t.name = null),
        (t.type = null),
        (t.rule = e[n]),
        (t.step = 0),
        (t.needsSeperator = !1);
    }
    function pi(e) {
      e.prevState &&
        ((e.kind = e.prevState.kind),
        (e.name = e.prevState.name),
        (e.type = e.prevState.type),
        (e.rule = e.prevState.rule),
        (e.step = e.prevState.step),
        (e.needsSeperator = e.prevState.needsSeperator),
        (e.prevState = e.prevState.prevState));
    }
    function di(e, t) {
      if (hi(e) && e.rule) {
        var n = e.rule[e.step];
        if (n.separator) {
          var r = n.separator;
          if (
            ((e.needsSeperator = !e.needsSeperator),
            !e.needsSeperator && r.ofRule)
          )
            return;
        }
        if (t) return;
      }
      for (
        e.needsSeperator = !1, e.step++;
        e.rule && !(Array.isArray(e.rule) && e.step < e.rule.length);

      )
        pi(e),
          e.rule &&
            (hi(e)
              ? e.rule &&
                e.rule[e.step].separator &&
                (e.needsSeperator = !e.needsSeperator)
              : ((e.needsSeperator = !1), e.step++));
    }
    function hi(e) {
      var t =
        Array.isArray(e.rule) &&
        "string" !== typeof e.rule[e.step] &&
        e.rule[e.step];
      return t && t.isList;
    }
    function vi(e) {
      for (; e.rule && (!Array.isArray(e.rule) || !e.rule[e.step].ofRule); )
        pi(e);
      e.rule && di(e, !1);
    }
    var yi = Object.assign(Object.assign({}, rt.a), {
      ALIASED_FIELD: "AliasedField",
      ARGUMENTS: "Arguments",
      SHORT_QUERY: "ShortQuery",
      QUERY: "Query",
      MUTATION: "Mutation",
      SUBSCRIPTION: "Subscription",
      TYPE_CONDITION: "TypeCondition",
      INVALID: "Invalid",
      COMMENT: "Comment",
      SCHEMA_DEF: "SchemaDef",
      SCALAR_DEF: "ScalarDef",
      OBJECT_TYPE_DEF: "ObjectTypeDef",
      OBJECT_VALUE: "ObjectValue",
      LIST_VALUE: "ListValue",
      INTERFACE_DEF: "InterfaceDef",
      UNION_DEF: "UnionDef",
      ENUM_DEF: "EnumDef",
      ENUM_VALUE: "EnumValue",
      FIELD_DEF: "FieldDef",
      INPUT_DEF: "InputDef",
      INPUT_VALUE_DEF: "InputValueDef",
      ARGUMENTS_DEF: "ArgumentsDef",
      EXTEND_DEF: "ExtendDef",
      DIRECTIVE_DEF: "DirectiveDef",
    });
    function mi(e, t, n, r) {
      var i = r || gi(t, n),
        o = "Invalid" === i.state.kind ? i.state.prevState : i.state;
      if (!o) return [];
      var a = o.kind,
        s = o.step,
        c = Ei(e, i.state);
      if (a === yi.DOCUMENT)
        return zn(i, [
          { label: "query", kind: nr.Function },
          { label: "mutation", kind: nr.Function },
          { label: "subscription", kind: nr.Function },
          { label: "fragment", kind: nr.Function },
          { label: "{", kind: nr.Constructor },
        ]);
      if (a === yi.SELECTION_SET || a === yi.FIELD || a === yi.ALIASED_FIELD)
        return (function (e, t, n, r) {
          if (t.parentType) {
            var i = t.parentType,
              o = [];
            return (
              "getFields" in i && (o = Jn(i.getFields())),
              Et(i) && o.push(Bn),
              i === n.getQueryType() && o.push(Un, Vn),
              zn(
                e,
                o.map(function (e, t) {
                  var n;
                  return {
                    sortText: String(t) + e.name,
                    label: e.name,
                    detail: String(e.type),
                    documentation:
                      null !== (n = e.description) && void 0 !== n ? n : void 0,
                    deprecated: e.isDeprecated,
                    isDeprecated: e.isDeprecated,
                    deprecationReason: e.deprecationReason,
                    kind: nr.Field,
                  };
                })
              )
            );
          }
          return [];
        })(i, c, e);
      if (a === yi.ARGUMENTS || (a === yi.ARGUMENT && 0 === s)) {
        var u = c.argDefs;
        if (u)
          return zn(
            i,
            u.map(function (e) {
              var t;
              return {
                label: e.name,
                detail: String(e.type),
                documentation:
                  null !== (t = e.description) && void 0 !== t ? t : void 0,
                kind: nr.Variable,
              };
            })
          );
      }
      if (
        (a === yi.OBJECT_VALUE || (a === yi.OBJECT_FIELD && 0 === s)) &&
        c.objectFieldDefs
      ) {
        var l = Jn(c.objectFieldDefs),
          f = a === yi.OBJECT_VALUE ? nr.Value : nr.Field;
        return zn(
          i,
          l.map(function (e) {
            var t;
            return {
              label: e.name,
              detail: String(e.type),
              documentation:
                null !== (t = e.description) && void 0 !== t ? t : void 0,
              kind: f,
            };
          })
        );
      }
      if (
        a === yi.ENUM_VALUE ||
        (a === yi.LIST_VALUE && 1 === s) ||
        (a === yi.OBJECT_FIELD && 2 === s) ||
        (a === yi.ARGUMENT && 2 === s)
      )
        return (function (e, t, n) {
          var r = kt(t.inputType);
          if (r instanceof Gt) {
            var i = r.getValues();
            return zn(
              e,
              i.map(function (e) {
                var t;
                return {
                  label: e.name,
                  detail: String(r),
                  documentation:
                    null !== (t = e.description) && void 0 !== t ? t : void 0,
                  deprecated: e.isDeprecated,
                  isDeprecated: e.isDeprecated,
                  deprecationReason: e.deprecationReason,
                  kind: nr.EnumMember,
                };
              })
            );
          }
          if (r === nn)
            return zn(e, [
              {
                label: "true",
                detail: String(nn),
                documentation: "Not false.",
                kind: nr.Variable,
              },
              {
                label: "false",
                detail: String(nn),
                documentation: "Not true.",
                kind: nr.Variable,
              },
            ]);
          return [];
        })(i, c);
      if (a === yi.VARIABLE && 1 === s) {
        var p = [];
        return (
          Object(kr.b)(
            Vr(t, {
              allowLegacySDLEmptyFields: !0,
              allowLegacySDLImplementsInterfaces: !0,
            }),
            {
              VariableDefinition: function (e) {
                p.push(e);
              },
            }
          ),
          zn(
            i,
            p.map(function (e) {
              return {
                label: "$".concat(e.variable.name.value),
                kind: nr.Variable,
                detail: "name" in e.type ? e.type.name.value : "Variable",
              };
            })
          )
        );
      }
      return (a === yi.TYPE_CONDITION && 1 === s) ||
        (a === yi.NAMED_TYPE &&
          null != o.prevState &&
          o.prevState.kind === yi.TYPE_CONDITION)
        ? (function (e, t, n, r) {
            var i;
            if (t.parentType)
              if (Tt(t.parentType)) {
                var o = (function (e) {
                    if (!Tt(e))
                      throw new Error(
                        "Expected ".concat(
                          Object(Ie.a)(e),
                          " to be a GraphQL abstract type."
                        )
                      );
                    return e;
                  })(t.parentType),
                  a = n.getPossibleTypes(o),
                  s = Object.create(null);
                a.forEach(function (e) {
                  e.getInterfaces().forEach(function (e) {
                    s[e.name] = e;
                  });
                }),
                  (i = a.concat(Jn(s)));
              } else i = [t.parentType];
            else {
              var c = n.getTypeMap();
              i = Jn(c).filter(Et);
            }
            return zn(
              e,
              i.map(function (e) {
                var t = kt(e);
                return {
                  label: String(e),
                  documentation: (t && t.description) || "",
                  kind: nr.Field,
                };
              })
            );
          })(i, c, e)
        : a === yi.FRAGMENT_SPREAD && 1 === s
        ? (function (e, t, n, r, i) {
            var o = n.getTypeMap(),
              a = (function (e) {
                var t;
                return (
                  Qn(e, function (e) {
                    switch (e.kind) {
                      case "Query":
                      case "ShortQuery":
                      case "Mutation":
                      case "Subscription":
                      case "FragmentDefinition":
                        t = e;
                    }
                  }),
                  t
                );
              })(e.state),
              s = (function (e) {
                var t = [];
                return (
                  bi(e, function (e, n) {
                    n.kind === yi.FRAGMENT_DEFINITION &&
                      n.name &&
                      n.type &&
                      t.push({
                        kind: yi.FRAGMENT_DEFINITION,
                        name: { kind: "Name", value: n.name },
                        selectionSet: {
                          kind: yi.SELECTION_SET,
                          selections: [],
                        },
                        typeCondition: {
                          kind: yi.NAMED_TYPE,
                          name: { kind: "Name", value: n.type },
                        },
                      });
                  }),
                  t
                );
              })(r).filter(function (e) {
                return (
                  o[e.typeCondition.name.value] &&
                  !(
                    a &&
                    a.kind === yi.FRAGMENT_DEFINITION &&
                    a.name === e.name.value
                  ) &&
                  Et(t.parentType) &&
                  Et(o[e.typeCondition.name.value]) &&
                  Jr(n, t.parentType, o[e.typeCondition.name.value])
                );
              });
            return zn(
              e,
              s.map(function (e) {
                return {
                  label: e.name.value,
                  detail: String(o[e.typeCondition.name.value]),
                  documentation: "fragment "
                    .concat(e.name.value, " on ")
                    .concat(e.typeCondition.name.value),
                  kind: nr.Field,
                };
              })
            );
          })(i, c, e, t)
        : (a === yi.VARIABLE_DEFINITION && 2 === s) ||
          (a === yi.LIST_TYPE && 1 === s) ||
          (a === yi.NAMED_TYPE &&
            o.prevState &&
            (o.prevState.kind === yi.VARIABLE_DEFINITION ||
              o.prevState.kind === yi.LIST_TYPE ||
              o.prevState.kind === yi.NON_NULL_TYPE))
        ? (function (e, t, n) {
            var r = Jn(t.getTypeMap()).filter(mt);
            return zn(
              e,
              r.map(function (e) {
                return {
                  label: e.name,
                  documentation: e.description,
                  kind: nr.Variable,
                };
              })
            );
          })(i, e)
        : a === yi.DIRECTIVE
        ? (function (e, t, n, r) {
            if (t.prevState && t.prevState.kind) {
              var i = n.getDirectives().filter(function (e) {
                return (function (e, t) {
                  if (!e || !e.kind) return !1;
                  var n = e.kind,
                    r = t.locations;
                  switch (n) {
                    case yi.QUERY:
                      return -1 !== r.indexOf("QUERY");
                    case yi.MUTATION:
                      return -1 !== r.indexOf("MUTATION");
                    case yi.SUBSCRIPTION:
                      return -1 !== r.indexOf("SUBSCRIPTION");
                    case yi.FIELD:
                    case yi.ALIASED_FIELD:
                      return -1 !== r.indexOf("FIELD");
                    case yi.FRAGMENT_DEFINITION:
                      return -1 !== r.indexOf("FRAGMENT_DEFINITION");
                    case yi.FRAGMENT_SPREAD:
                      return -1 !== r.indexOf("FRAGMENT_SPREAD");
                    case yi.INLINE_FRAGMENT:
                      return -1 !== r.indexOf("INLINE_FRAGMENT");
                    case yi.SCHEMA_DEF:
                      return -1 !== r.indexOf("SCHEMA");
                    case yi.SCALAR_DEF:
                      return -1 !== r.indexOf("SCALAR");
                    case yi.OBJECT_TYPE_DEF:
                      return -1 !== r.indexOf("OBJECT");
                    case yi.FIELD_DEF:
                      return -1 !== r.indexOf("FIELD_DEFINITION");
                    case yi.INTERFACE_DEF:
                      return -1 !== r.indexOf("INTERFACE");
                    case yi.UNION_DEF:
                      return -1 !== r.indexOf("UNION");
                    case yi.ENUM_DEF:
                      return -1 !== r.indexOf("ENUM");
                    case yi.ENUM_VALUE:
                      return -1 !== r.indexOf("ENUM_VALUE");
                    case yi.INPUT_DEF:
                      return -1 !== r.indexOf("INPUT_OBJECT");
                    case yi.INPUT_VALUE_DEF:
                      switch (e.prevState && e.prevState.kind) {
                        case yi.ARGUMENTS_DEF:
                          return -1 !== r.indexOf("ARGUMENT_DEFINITION");
                        case yi.INPUT_DEF:
                          return -1 !== r.indexOf("INPUT_FIELD_DEFINITION");
                      }
                  }
                  return !1;
                })(t.prevState, e);
              });
              return zn(
                e,
                i.map(function (e) {
                  return {
                    label: e.name,
                    documentation: e.description || "",
                    kind: nr.Function,
                  };
                })
              );
            }
            return [];
          })(i, o, e)
        : [];
    }
    function gi(e, t) {
      var n = null,
        r = null,
        i = null,
        o = bi(e, function (e, o, a, s) {
          if (s === t.line && e.getCurrentPosition() >= t.character)
            return (
              (n = a), (r = Object.assign({}, o)), (i = e.current()), "BREAK"
            );
        });
      return {
        start: o.start,
        end: o.end,
        string: i || o.string,
        state: r || o.state,
        style: n || o.style,
      };
    }
    function bi(e, t) {
      for (
        var n = e.split("\n"),
          r = si(),
          i = r.startState(),
          o = "",
          a = new Wr(""),
          s = 0;
        s < n.length;
        s++
      ) {
        for (a = new Wr(n[s]); !a.eol(); ) {
          if ("BREAK" === t(a, i, (o = r.token(a, i)), s)) break;
        }
        t(a, i, o, s), i.kind || (i = r.startState());
      }
      return {
        start: a.getStartOfToken(),
        end: a.getCurrentPosition(),
        string: a.current(),
        state: i,
        style: o,
      };
    }
    function Ei(e, t) {
      var n, r, i, o, a, s, c, u, l;
      return (
        Qn(t, function (t) {
          switch (t.kind) {
            case yi.QUERY:
            case "ShortQuery":
              l = e.getQueryType();
              break;
            case yi.MUTATION:
              l = e.getMutationType();
              break;
            case yi.SUBSCRIPTION:
              l = e.getSubscriptionType();
              break;
            case yi.INLINE_FRAGMENT:
            case yi.FRAGMENT_DEFINITION:
              t.type && (l = e.getType(t.type));
              break;
            case yi.FIELD:
            case yi.ALIASED_FIELD:
              l && t.name
                ? ((a = u ? qn(e, u, t.name) : null), (l = a ? a.type : null))
                : (a = null);
              break;
            case yi.SELECTION_SET:
              u = kt(l);
              break;
            case yi.DIRECTIVE:
              i = t.name ? e.getDirective(t.name) : null;
              break;
            case yi.ARGUMENTS:
              if (t.prevState)
                switch (t.prevState.kind) {
                  case yi.FIELD:
                    r = a && a.args;
                    break;
                  case yi.DIRECTIVE:
                    r = i && i.args;
                    break;
                  case yi.ALIASED_FIELD:
                    var f = t.prevState && t.prevState.name;
                    if (!f) {
                      r = null;
                      break;
                    }
                    var p = u ? qn(e, u, f) : null;
                    if (!p) {
                      r = null;
                      break;
                    }
                    r = p.args;
                    break;
                  default:
                    r = null;
                }
              else r = null;
              break;
            case yi.ARGUMENT:
              if (r)
                for (var d = 0; d < r.length; d++)
                  if (r[d].name === t.name) {
                    n = r[d];
                    break;
                  }
              s = n && n.type;
              break;
            case yi.ENUM_VALUE:
              var h = kt(s);
              o =
                h instanceof Gt
                  ? (function (e, t) {
                      for (var n = 0; n < e.length; n++)
                        if (t(e[n])) return e[n];
                      return null;
                    })(h.getValues(), function (e) {
                      return e.value === t.name;
                    })
                  : null;
              break;
            case yi.LIST_VALUE:
              var v = St(s);
              s = v instanceof _t ? v.ofType : null;
              break;
            case yi.OBJECT_VALUE:
              var y = kt(s);
              c = y instanceof qt ? y.getFields() : null;
              break;
            case yi.OBJECT_FIELD:
              var m = t.name && c ? c[t.name] : null;
              s = m && m.type;
              break;
            case yi.NAMED_TYPE:
              t.name && (l = e.getType(t.name));
          }
        }),
        {
          argDef: n,
          argDefs: r,
          directiveDef: i,
          enumValue: o,
          fieldDef: a,
          inputType: s,
          objectFieldDefs: c,
          parentType: u,
          type: l,
        }
      );
    }
    var Ti = (function () {
        function e(t, n) {
          var r = this;
          zr(this, e),
            (this.containsPosition = function (e) {
              return r.start.line === e.line
                ? r.start.character <= e.character
                : r.end.line === e.line
                ? r.end.character >= e.character
                : r.start.line <= e.line && r.end.line >= e.line;
            }),
            (this.start = t),
            (this.end = n);
        }
        return (
          Kr(e, [
            {
              key: "setStart",
              value: function (e, t) {
                this.start = new _i(e, t);
              },
            },
            {
              key: "setEnd",
              value: function (e, t) {
                this.end = new _i(e, t);
              },
            },
          ]),
          e
        );
      })(),
      _i = (function () {
        function e(t, n) {
          var r = this;
          zr(this, e),
            (this.lessThanOrEqualTo = function (e) {
              return (
                r.line < e.line ||
                (r.line === e.line && r.character <= e.character)
              );
            }),
            (this.line = t),
            (this.character = n);
        }
        return (
          Kr(e, [
            {
              key: "setLine",
              value: function (e) {
                this.line = e;
              },
            },
            {
              key: "setCharacter",
              value: function (e) {
                this.character = e;
              },
            },
          ]),
          e
        );
      })();
    function wi(e) {
      return (
        e.kind === rt.a.OPERATION_DEFINITION ||
        e.kind === rt.a.FRAGMENT_DEFINITION
      );
    }
    function Oi(e) {
      return (
        e.kind === rt.a.SCHEMA_DEFINITION ||
        Ni(e) ||
        e.kind === rt.a.DIRECTIVE_DEFINITION
      );
    }
    function Ni(e) {
      return (
        e.kind === rt.a.SCALAR_TYPE_DEFINITION ||
        e.kind === rt.a.OBJECT_TYPE_DEFINITION ||
        e.kind === rt.a.INTERFACE_TYPE_DEFINITION ||
        e.kind === rt.a.UNION_TYPE_DEFINITION ||
        e.kind === rt.a.ENUM_TYPE_DEFINITION ||
        e.kind === rt.a.INPUT_OBJECT_TYPE_DEFINITION
      );
    }
    function Si(e) {
      return e.kind === rt.a.SCHEMA_EXTENSION || Ii(e);
    }
    function Ii(e) {
      return (
        e.kind === rt.a.SCALAR_TYPE_EXTENSION ||
        e.kind === rt.a.OBJECT_TYPE_EXTENSION ||
        e.kind === rt.a.INTERFACE_TYPE_EXTENSION ||
        e.kind === rt.a.UNION_TYPE_EXTENSION ||
        e.kind === rt.a.ENUM_TYPE_EXTENSION ||
        e.kind === rt.a.INPUT_OBJECT_TYPE_EXTENSION
      );
    }
    function ki(e) {
      return {
        Document: function (t) {
          for (var n = 0, r = t.definitions; n < r.length; n++) {
            var i = r[n];
            if (!wi(i)) {
              var o =
                i.kind === rt.a.SCHEMA_DEFINITION ||
                i.kind === rt.a.SCHEMA_EXTENSION
                  ? "schema"
                  : '"' + i.name.value + '"';
              e.reportError(
                new nt("The ".concat(o, " definition is not executable."), i)
              );
            }
          }
          return !1;
        },
      };
    }
    function xi(e) {
      for (
        var t = e.getSchema(),
          n = t ? t.getTypeMap() : Object.create(null),
          r = Object.create(null),
          i = 0,
          o = e.getDocument().definitions;
        i < o.length;
        i++
      ) {
        var a = o[i];
        Ni(a) && (r[a.name.value] = !0);
      }
      var s = Object.keys(n).concat(Object.keys(r));
      return {
        NamedType: function (t, i, o, a, c) {
          var u,
            l = t.name.value;
          if (!n[l] && !r[l]) {
            var f,
              p = null !== (f = c[2]) && void 0 !== f ? f : o,
              d = null != p && ((u = p), !Array.isArray(u) && (Oi(u) || Si(u)));
            if (
              d &&
              (function (e) {
                return -1 !== Ai.indexOf(e);
              })(l)
            )
              return;
            var h = Ue(l, d ? Ai.concat(s) : s);
            e.reportError(new nt('Unknown type "'.concat(l, '".') + Le(h), t));
          }
        },
      };
    }
    var Ai = [].concat(on, Gn).map(function (e) {
      return e.name;
    });
    function Di(e, t) {
      var n;
      return t.kind === rt.a.LIST_TYPE
        ? (n = Di(e, t.type)) && _t(n)
        : t.kind === rt.a.NON_NULL_TYPE
        ? (n = Di(e, t.type)) && wt(n)
        : t.kind === rt.a.NAMED_TYPE
        ? e.getType(t.name.value)
        : void Object(ot.a)(0, "Unexpected type node: " + Object(Ie.a)(t));
    }
    function ji(e) {
      return {
        FragmentSpread: function (t) {
          var n = t.name.value;
          e.getFragment(n) ||
            e.reportError(new nt('Unknown fragment "'.concat(n, '".'), t.name));
        },
      };
    }
    function Ri(e) {
      var t = [],
        n = [];
      return {
        OperationDefinition: function (e) {
          return t.push(e), !1;
        },
        FragmentDefinition: function (e) {
          return n.push(e), !1;
        },
        Document: {
          leave: function () {
            for (var r = Object.create(null), i = 0; i < t.length; i++)
              for (
                var o = t[i], a = 0, s = e.getRecursivelyReferencedFragments(o);
                a < s.length;
                a++
              ) {
                r[s[a].name.value] = !0;
              }
            for (var c = 0; c < n.length; c++) {
              var u = n[c],
                l = u.name.value;
              !0 !== r[l] &&
                e.reportError(
                  new nt('Fragment "'.concat(l, '" is never used.'), u)
                );
            }
          },
        },
      };
    }
    function Li(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Pi(e) {
      return Re(e, Fi);
    }
    var Fi = (function () {
      function e(e) {
        var t, n;
        (this.name = e.name),
          (this.description = e.description),
          (this.locations = e.locations),
          (this.isRepeatable =
            null !== (t = e.isRepeatable) && void 0 !== t && t),
          (this.extensions = e.extensions && Ae(e.extensions)),
          (this.astNode = e.astNode),
          e.name || De(0, "Directive must be named."),
          Array.isArray(e.locations) ||
            De(0, "@".concat(e.name, " locations must be an Array."));
        var r = null !== (n = e.args) && void 0 !== n ? n : {};
        (Fe(r) && !Array.isArray(r)) ||
          De(
            0,
            "@".concat(
              e.name,
              " args must be an object with argument names as keys."
            )
          ),
          (this.args = Oe(r).map(function (e) {
            var t = e[0],
              n = e[1];
            return {
              name: t,
              description: n.description,
              type: n.type,
              defaultValue: n.defaultValue,
              extensions: n.extensions && Ae(n.extensions),
              astNode: n.astNode,
            };
          }));
      }
      var t,
        n,
        r,
        i = e.prototype;
      return (
        (i.toConfig = function () {
          return {
            name: this.name,
            description: this.description,
            locations: this.locations,
            args: Ct(this.args),
            isRepeatable: this.isRepeatable,
            extensions: this.extensions,
            astNode: this.astNode,
          };
        }),
        (i.toString = function () {
          return "@" + this.name;
        }),
        (i.toJSON = function () {
          return this.toString();
        }),
        (t = e),
        (n = [
          {
            key: Se,
            get: function () {
              return "GraphQLDirective";
            },
          },
        ]) && Li(t.prototype, n),
        r && Li(t, r),
        e
      );
    })();
    Object(Me.a)(Fi);
    var Ci = new Fi({
        name: "include",
        description:
          "Directs the executor to include this field or fragment only when the `if` argument is true.",
        locations: [zt.FIELD, zt.FRAGMENT_SPREAD, zt.INLINE_FRAGMENT],
        args: { if: { type: wt(nn), description: "Included when true." } },
      }),
      Mi = new Fi({
        name: "skip",
        description:
          "Directs the executor to skip this field or fragment when the `if` argument is true.",
        locations: [zt.FIELD, zt.FRAGMENT_SPREAD, zt.INLINE_FRAGMENT],
        args: { if: { type: wt(nn), description: "Skipped when true." } },
      }),
      Ui = new Fi({
        name: "deprecated",
        description:
          "Marks an element of a GraphQL schema as no longer supported.",
        locations: [zt.FIELD_DEFINITION, zt.ENUM_VALUE],
        args: {
          reason: {
            type: tn,
            description:
              "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
            defaultValue: "No longer supported",
          },
        },
      }),
      Vi = new Fi({
        name: "specifiedBy",
        description:
          "Exposes a URL that specifies the behaviour of this scalar.",
        locations: [zt.SCALAR],
        args: {
          url: {
            type: wt(tn),
            description: "The URL that specifies the behaviour of this scalar.",
          },
        },
      }),
      Bi = Object.freeze([Ci, Mi, Ui, Vi]);
    function Gi(e) {
      for (
        var t = Object.create(null),
          n = e.getSchema(),
          r = n ? n.getDirectives() : Bi,
          i = 0;
        i < r.length;
        i++
      ) {
        var o = r[i];
        t[o.name] = o.locations;
      }
      for (var a = e.getDocument().definitions, s = 0; s < a.length; s++) {
        var c = a[s];
        c.kind === rt.a.DIRECTIVE_DEFINITION &&
          (t[c.name.value] = c.locations.map(function (e) {
            return e.value;
          }));
      }
      return {
        Directive: function (n, r, i, o, a) {
          var s = n.name.value,
            c = t[s];
          if (c) {
            var u = (function (e) {
              var t = e[e.length - 1];
              switch ((!Array.isArray(t) || Object(ot.a)(0), t.kind)) {
                case rt.a.OPERATION_DEFINITION:
                  return (function (e) {
                    switch (e) {
                      case "query":
                        return zt.QUERY;
                      case "mutation":
                        return zt.MUTATION;
                      case "subscription":
                        return zt.SUBSCRIPTION;
                    }
                    Object(ot.a)(0, "Unexpected operation: " + Object(Ie.a)(e));
                  })(t.operation);
                case rt.a.FIELD:
                  return zt.FIELD;
                case rt.a.FRAGMENT_SPREAD:
                  return zt.FRAGMENT_SPREAD;
                case rt.a.INLINE_FRAGMENT:
                  return zt.INLINE_FRAGMENT;
                case rt.a.FRAGMENT_DEFINITION:
                  return zt.FRAGMENT_DEFINITION;
                case rt.a.VARIABLE_DEFINITION:
                  return zt.VARIABLE_DEFINITION;
                case rt.a.SCHEMA_DEFINITION:
                case rt.a.SCHEMA_EXTENSION:
                  return zt.SCHEMA;
                case rt.a.SCALAR_TYPE_DEFINITION:
                case rt.a.SCALAR_TYPE_EXTENSION:
                  return zt.SCALAR;
                case rt.a.OBJECT_TYPE_DEFINITION:
                case rt.a.OBJECT_TYPE_EXTENSION:
                  return zt.OBJECT;
                case rt.a.FIELD_DEFINITION:
                  return zt.FIELD_DEFINITION;
                case rt.a.INTERFACE_TYPE_DEFINITION:
                case rt.a.INTERFACE_TYPE_EXTENSION:
                  return zt.INTERFACE;
                case rt.a.UNION_TYPE_DEFINITION:
                case rt.a.UNION_TYPE_EXTENSION:
                  return zt.UNION;
                case rt.a.ENUM_TYPE_DEFINITION:
                case rt.a.ENUM_TYPE_EXTENSION:
                  return zt.ENUM;
                case rt.a.ENUM_VALUE_DEFINITION:
                  return zt.ENUM_VALUE;
                case rt.a.INPUT_OBJECT_TYPE_DEFINITION:
                case rt.a.INPUT_OBJECT_TYPE_EXTENSION:
                  return zt.INPUT_OBJECT;
                case rt.a.INPUT_VALUE_DEFINITION:
                  return e[e.length - 3].kind ===
                    rt.a.INPUT_OBJECT_TYPE_DEFINITION
                    ? zt.INPUT_FIELD_DEFINITION
                    : zt.ARGUMENT_DEFINITION;
              }
            })(a);
            u &&
              -1 === c.indexOf(u) &&
              e.reportError(
                new nt(
                  'Directive "@'
                    .concat(s, '" may not be used on ')
                    .concat(u, "."),
                  n
                )
              );
          } else
            e.reportError(new nt('Unknown directive "@'.concat(s, '".'), n));
        },
      };
    }
    function Yi(e) {
      for (
        var t = Object.create(null),
          n = e.getSchema(),
          r = n ? n.getDirectives() : Bi,
          i = 0;
        i < r.length;
        i++
      ) {
        var o = r[i];
        t[o.name] = !o.isRepeatable;
      }
      for (var a = e.getDocument().definitions, s = 0; s < a.length; s++) {
        var c = a[s];
        c.kind === rt.a.DIRECTIVE_DEFINITION &&
          (t[c.name.value] = !c.repeatable);
      }
      var u = Object.create(null),
        l = Object.create(null);
      return {
        enter: function (n) {
          if (null != n.directives) {
            var r;
            if (
              n.kind === rt.a.SCHEMA_DEFINITION ||
              n.kind === rt.a.SCHEMA_EXTENSION
            )
              r = u;
            else if (Ni(n) || Ii(n)) {
              var i = n.name.value;
              void 0 === (r = l[i]) && (l[i] = r = Object.create(null));
            } else r = Object.create(null);
            for (var o = 0, a = n.directives; o < a.length; o++) {
              var s = a[o],
                c = s.name.value;
              t[c] &&
                (r[c]
                  ? e.reportError(
                      new nt(
                        'The directive "@'.concat(
                          c,
                          '" can only be used once at this location.'
                        ),
                        [r[c], s]
                      )
                    )
                  : (r[c] = s));
            }
          }
        },
      };
    }
    function qi(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Qi(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? qi(Object(n), !0).forEach(function (t) {
              Ji(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : qi(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Ji(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function zi(e) {
      for (
        var t = Object.create(null),
          n = e.getSchema(),
          r = n ? n.getDirectives() : Bi,
          i = 0;
        i < r.length;
        i++
      ) {
        var o = r[i];
        t[o.name] = o.args.map(function (e) {
          return e.name;
        });
      }
      for (var a = e.getDocument().definitions, s = 0; s < a.length; s++) {
        var c = a[s];
        if (c.kind === rt.a.DIRECTIVE_DEFINITION) {
          var u,
            l = null !== (u = c.arguments) && void 0 !== u ? u : [];
          t[c.name.value] = l.map(function (e) {
            return e.name.value;
          });
        }
      }
      return {
        Directive: function (n) {
          var r = n.name.value,
            i = t[r];
          if (n.arguments && i)
            for (var o = 0, a = n.arguments; o < a.length; o++) {
              var s = a[o],
                c = s.name.value;
              if (-1 === i.indexOf(c)) {
                var u = Ue(c, i);
                e.reportError(
                  new nt(
                    'Unknown argument "'
                      .concat(c, '" on directive "@')
                      .concat(r, '".') + Le(u),
                    s
                  )
                );
              }
            }
          return !1;
        },
      };
    }
    function Hi(e) {
      var t = Object.create(null);
      return {
        Field: function () {
          t = Object.create(null);
        },
        Directive: function () {
          t = Object.create(null);
        },
        Argument: function (n) {
          var r = n.name.value;
          return (
            t[r]
              ? e.reportError(
                  new nt(
                    'There can be only one argument named "'.concat(r, '".'),
                    [t[r], n.name]
                  )
                )
              : (t[r] = n.name),
            !1
          );
        },
      };
    }
    function Ki(e, t) {
      var n = e.getInputType();
      if (n) {
        var r = kt(n);
        if (bt(r))
          try {
            if (void 0 === r.parseLiteral(t, void 0)) {
              var i = Object(Ie.a)(n);
              e.reportError(
                new nt(
                  'Expected value of type "'
                    .concat(i, '", found ')
                    .concat(Object(it.print)(t), "."),
                  t
                )
              );
            }
          } catch (s) {
            var o = Object(Ie.a)(n);
            s instanceof nt
              ? e.reportError(s)
              : e.reportError(
                  new nt(
                    'Expected value of type "'
                      .concat(o, '", found ')
                      .concat(Object(it.print)(t), "; ") + s.message,
                    t,
                    void 0,
                    void 0,
                    void 0,
                    s
                  )
                );
          }
        else {
          var a = Object(Ie.a)(n);
          e.reportError(
            new nt(
              'Expected value of type "'
                .concat(a, '", found ')
                .concat(Object(it.print)(t), "."),
              t
            )
          );
        }
      }
    }
    function Wi(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Xi(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Wi(Object(n), !0).forEach(function (t) {
              $i(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Wi(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function $i(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function Zi(e) {
      for (
        var t = Object.create(null),
          n = e.getSchema(),
          r = n ? n.getDirectives() : Bi,
          i = 0;
        i < r.length;
        i++
      ) {
        var o = r[i];
        t[o.name] = ke(o.args.filter(Mt), function (e) {
          return e.name;
        });
      }
      for (var a = e.getDocument().definitions, s = 0; s < a.length; s++) {
        var c = a[s];
        if (c.kind === rt.a.DIRECTIVE_DEFINITION) {
          var u,
            l = null !== (u = c.arguments) && void 0 !== u ? u : [];
          t[c.name.value] = ke(l.filter(eo), function (e) {
            return e.name.value;
          });
        }
      }
      return {
        Directive: {
          leave: function (n) {
            var r = n.name.value,
              i = t[r];
            if (i)
              for (
                var o,
                  a = ke(
                    null !== (o = n.arguments) && void 0 !== o ? o : [],
                    function (e) {
                      return e.name.value;
                    }
                  ),
                  s = 0,
                  c = Object.keys(i);
                s < c.length;
                s++
              ) {
                var u = c[s];
                if (!a[u]) {
                  var l = i[u].type,
                    f = ct(l) ? Object(Ie.a)(l) : Object(it.print)(l);
                  e.reportError(
                    new nt(
                      'Directive "@'
                        .concat(r, '" argument "')
                        .concat(u, '" of type "')
                        .concat(f, '" is required, but it was not provided.'),
                      n
                    )
                  );
                }
              }
          },
        },
      };
    }
    function eo(e) {
      return e.type.kind === rt.a.NON_NULL_TYPE && null == e.defaultValue;
    }
    function to(e, t, n, r, i) {
      return yt(r) && !yt(t)
        ? ((null != n && n.kind !== rt.a.NULL) || void 0 !== i) &&
            Qr(e, t, r.ofType)
        : Qr(e, t, r);
    }
    var no = Array.prototype.find
      ? function (e, t) {
          return Array.prototype.find.call(e, t);
        }
      : function (e, t) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            if (t(r)) return r;
          }
        };
    function ro(e) {
      return Array.isArray(e)
        ? e
            .map(function (e) {
              var t = e[0],
                n = e[1];
              return 'subfields "'.concat(t, '" conflict because ') + ro(n);
            })
            .join(" and ")
        : e;
    }
    function io(e, t, n, r, i, o, a) {
      var s = e.getFragment(a);
      if (s) {
        var c = uo(e, n, s),
          u = c[0],
          l = c[1];
        if (o !== u) {
          ao(e, t, n, r, i, o, u);
          for (var f = 0; f < l.length; f++) io(e, t, n, r, i, o, l[f]);
        }
      }
    }
    function oo(e, t, n, r, i, o, a) {
      if (o !== a && !r.has(o, a, i)) {
        r.add(o, a, i);
        var s = e.getFragment(o),
          c = e.getFragment(a);
        if (s && c) {
          var u = uo(e, n, s),
            l = u[0],
            f = u[1],
            p = uo(e, n, c),
            d = p[0],
            h = p[1];
          ao(e, t, n, r, i, l, d);
          for (var v = 0; v < h.length; v++) oo(e, t, n, r, i, o, h[v]);
          for (var y = 0; y < f.length; y++) oo(e, t, n, r, i, f[y], a);
        }
      }
    }
    function ao(e, t, n, r, i, o, a) {
      for (var s = 0, c = Object.keys(o); s < c.length; s++) {
        var u = c[s],
          l = a[u];
        if (l)
          for (var f = o[u], p = 0; p < f.length; p++)
            for (var d = 0; d < l.length; d++) {
              var h = so(e, n, r, i, u, f[p], l[d]);
              h && t.push(h);
            }
      }
    }
    function so(e, t, n, r, i, o, a) {
      var s = o[0],
        c = o[1],
        u = o[2],
        l = a[0],
        f = a[1],
        p = a[2],
        d = r || (s !== l && lt(s) && lt(l));
      if (!d) {
        var h,
          v,
          y = c.name.value,
          m = f.name.value;
        if (y !== m)
          return [
            [i, '"'.concat(y, '" and "').concat(m, '" are different fields')],
            [c],
            [f],
          ];
        if (
          !(function (e, t) {
            if (e.length !== t.length) return !1;
            return e.every(function (e) {
              var n,
                r,
                i = no(t, function (t) {
                  return t.name.value === e.name.value;
                });
              return (
                !!i &&
                ((n = e.value),
                (r = i.value),
                Object(it.print)(n) === Object(it.print)(r))
              );
            });
          })(
            null !== (h = c.arguments) && void 0 !== h ? h : [],
            null !== (v = f.arguments) && void 0 !== v ? v : []
          )
        )
          return [[i, "they have differing arguments"], [c], [f]];
      }
      var g = null === u || void 0 === u ? void 0 : u.type,
        b = null === p || void 0 === p ? void 0 : p.type;
      if (
        g &&
        b &&
        (function e(t, n) {
          if (vt(t)) return !vt(n) || e(t.ofType, n.ofType);
          if (vt(n)) return !0;
          if (yt(t)) return !yt(n) || e(t.ofType, n.ofType);
          if (yt(n)) return !0;
          if (bt(t) || bt(n)) return t !== n;
          return !1;
        })(g, b)
      )
        return [
          [
            i,
            'they return conflicting types "'
              .concat(Object(Ie.a)(g), '" and "')
              .concat(Object(Ie.a)(b), '"'),
          ],
          [c],
          [f],
        ];
      var E = c.selectionSet,
        T = f.selectionSet;
      return E && T
        ? (function (e, t, n, r) {
            if (e.length > 0)
              return [
                [
                  t,
                  e.map(function (e) {
                    return e[0];
                  }),
                ],
                e.reduce(
                  function (e, t) {
                    var n = t[1];
                    return e.concat(n);
                  },
                  [n]
                ),
                e.reduce(
                  function (e, t) {
                    var n = t[2];
                    return e.concat(n);
                  },
                  [r]
                ),
              ];
          })(
            (function (e, t, n, r, i, o, a, s) {
              var c = [],
                u = co(e, t, i, o),
                l = u[0],
                f = u[1],
                p = co(e, t, a, s),
                d = p[0],
                h = p[1];
              if ((ao(e, c, t, n, r, l, d), 0 !== h.length))
                for (var v = 0; v < h.length; v++) io(e, c, t, n, r, l, h[v]);
              if (0 !== f.length)
                for (var y = 0; y < f.length; y++) io(e, c, t, n, r, d, f[y]);
              for (var m = 0; m < f.length; m++)
                for (var g = 0; g < h.length; g++)
                  oo(e, c, t, n, r, f[m], h[g]);
              return c;
            })(e, t, n, d, kt(g), E, kt(b), T),
            i,
            c,
            f
          )
        : void 0;
    }
    function co(e, t, n, r) {
      var i = t.get(r);
      if (!i) {
        var o = Object.create(null),
          a = Object.create(null);
        !(function e(t, n, r, i, o) {
          for (var a = 0, s = r.selections; a < s.length; a++) {
            var c = s[a];
            switch (c.kind) {
              case rt.a.FIELD:
                var u = c.name.value,
                  l = void 0;
                (lt(n) || ft(n)) && (l = n.getFields()[u]);
                var f = c.alias ? c.alias.value : u;
                i[f] || (i[f] = []), i[f].push([n, c, l]);
                break;
              case rt.a.FRAGMENT_SPREAD:
                o[c.name.value] = !0;
                break;
              case rt.a.INLINE_FRAGMENT:
                var p = c.typeCondition,
                  d = p ? Di(t.getSchema(), p) : n;
                e(t, d, c.selectionSet, i, o);
            }
          }
        })(e, n, r, o, a),
          (i = [o, Object.keys(a)]),
          t.set(r, i);
      }
      return i;
    }
    function uo(e, t, n) {
      var r = t.get(n.selectionSet);
      if (r) return r;
      var i = Di(e.getSchema(), n.typeCondition);
      return co(e, t, i, n.selectionSet);
    }
    var lo,
      fo = (function () {
        function e() {
          this._data = Object.create(null);
        }
        var t = e.prototype;
        return (
          (t.has = function (e, t, n) {
            var r = this._data[e],
              i = r && r[t];
            return void 0 !== i && (!1 !== n || !1 === i);
          }),
          (t.add = function (e, t, n) {
            po(this._data, e, t, n), po(this._data, t, e, n);
          }),
          e
        );
      })();
    function po(e, t, n, r) {
      var i = e[t];
      i || ((i = Object.create(null)), (e[t] = i)), (i[n] = r);
    }
    function ho(e) {
      var t = [],
        n = Object.create(null);
      return {
        ObjectValue: {
          enter: function () {
            t.push(n), (n = Object.create(null));
          },
          leave: function () {
            n = t.pop();
          },
        },
        ObjectField: function (t) {
          var r = t.name.value;
          n[r]
            ? e.reportError(
                new nt(
                  'There can be only one input field named "'.concat(r, '".'),
                  [n[r], t.name]
                )
              )
            : (n[r] = t.name);
        },
      };
    }
    function vo(e, t) {
      return !!(lt(e) || ft(e) || ht(e)) && e.getFields()[t];
    }
    function yo(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var mo =
      (yo((lo = {}), rt.a.SCALAR_TYPE_DEFINITION, rt.a.SCALAR_TYPE_EXTENSION),
      yo(lo, rt.a.OBJECT_TYPE_DEFINITION, rt.a.OBJECT_TYPE_EXTENSION),
      yo(lo, rt.a.INTERFACE_TYPE_DEFINITION, rt.a.INTERFACE_TYPE_EXTENSION),
      yo(lo, rt.a.UNION_TYPE_DEFINITION, rt.a.UNION_TYPE_EXTENSION),
      yo(lo, rt.a.ENUM_TYPE_DEFINITION, rt.a.ENUM_TYPE_EXTENSION),
      yo(
        lo,
        rt.a.INPUT_OBJECT_TYPE_DEFINITION,
        rt.a.INPUT_OBJECT_TYPE_EXTENSION
      ),
      lo);
    var go = Object.freeze([
        ki,
        function (e) {
          var t = Object.create(null);
          return {
            OperationDefinition: function (n) {
              var r = n.name;
              return (
                r &&
                  (t[r.value]
                    ? e.reportError(
                        new nt(
                          'There can be only one operation named "'.concat(
                            r.value,
                            '".'
                          ),
                          [t[r.value], r]
                        )
                      )
                    : (t[r.value] = r)),
                !1
              );
            },
            FragmentDefinition: function () {
              return !1;
            },
          };
        },
        function (e) {
          var t = 0;
          return {
            Document: function (e) {
              t = e.definitions.filter(function (e) {
                return e.kind === rt.a.OPERATION_DEFINITION;
              }).length;
            },
            OperationDefinition: function (n) {
              !n.name &&
                t > 1 &&
                e.reportError(
                  new nt(
                    "This anonymous operation must be the only defined operation.",
                    n
                  )
                );
            },
          };
        },
        function (e) {
          return {
            OperationDefinition: function (t) {
              "subscription" === t.operation &&
                1 !== t.selectionSet.selections.length &&
                e.reportError(
                  new nt(
                    t.name
                      ? 'Subscription "'.concat(
                          t.name.value,
                          '" must select only one top level field.'
                        )
                      : "Anonymous Subscription must select only one top level field.",
                    t.selectionSet.selections.slice(1)
                  )
                );
            },
          };
        },
        xi,
        function (e) {
          return {
            InlineFragment: function (t) {
              var n = t.typeCondition;
              if (n) {
                var r = Di(e.getSchema(), n);
                if (r && !Et(r)) {
                  var i = Object(it.print)(n);
                  e.reportError(
                    new nt(
                      'Fragment cannot condition on non composite type "'.concat(
                        i,
                        '".'
                      ),
                      n
                    )
                  );
                }
              }
            },
            FragmentDefinition: function (t) {
              var n = Di(e.getSchema(), t.typeCondition);
              if (n && !Et(n)) {
                var r = Object(it.print)(t.typeCondition);
                e.reportError(
                  new nt(
                    'Fragment "'
                      .concat(
                        t.name.value,
                        '" cannot condition on non composite type "'
                      )
                      .concat(r, '".'),
                    t.typeCondition
                  )
                );
              }
            },
          };
        },
        function (e) {
          return {
            VariableDefinition: function (t) {
              var n = Di(e.getSchema(), t.type);
              if (n && !mt(n)) {
                var r = t.variable.name.value,
                  i = Object(it.print)(t.type);
                e.reportError(
                  new nt(
                    'Variable "$'
                      .concat(r, '" cannot be non-input type "')
                      .concat(i, '".'),
                    t.type
                  )
                );
              }
            },
          };
        },
        function (e) {
          return {
            Field: function (t) {
              var n = e.getType(),
                r = t.selectionSet;
              if (n)
                if (bt(kt(n))) {
                  if (r) {
                    var i = t.name.value,
                      o = Object(Ie.a)(n);
                    e.reportError(
                      new nt(
                        'Field "'
                          .concat(i, '" must not have a selection since type "')
                          .concat(o, '" has no subfields.'),
                        r
                      )
                    );
                  }
                } else if (!r) {
                  var a = t.name.value,
                    s = Object(Ie.a)(n);
                  e.reportError(
                    new nt(
                      'Field "'
                        .concat(a, '" of type "')
                        .concat(
                          s,
                          '" must have a selection of subfields. Did you mean "'
                        )
                        .concat(a, ' { ... }"?'),
                      t
                    )
                  );
                }
            },
          };
        },
        function (e) {
          return {
            Field: function (t) {
              var n = e.getParentType();
              if (n && !e.getFieldDef()) {
                var r = e.getSchema(),
                  i = t.name.value,
                  o = Le(
                    "to use an inline fragment on",
                    (function (e, t, n) {
                      if (!Tt(t)) return [];
                      for (
                        var r = new Set(),
                          i = Object.create(null),
                          o = 0,
                          a = e.getPossibleTypes(t);
                        o < a.length;
                        o++
                      ) {
                        var s = a[o];
                        if (s.getFields()[n]) {
                          r.add(s), (i[s.name] = 1);
                          for (
                            var c = 0, u = s.getInterfaces();
                            c < u.length;
                            c++
                          ) {
                            var l,
                              f = u[c];
                            f.getFields()[n] &&
                              (r.add(f),
                              (i[f.name] =
                                (null !== (l = i[f.name]) && void 0 !== l
                                  ? l
                                  : 0) + 1));
                          }
                        }
                      }
                      return Kt(r)
                        .sort(function (t, n) {
                          var r = i[n.name] - i[t.name];
                          return 0 !== r
                            ? r
                            : ft(t) && e.isSubType(t, n)
                            ? -1
                            : ft(n) && e.isSubType(n, t)
                            ? 1
                            : t.name.localeCompare(n.name);
                        })
                        .map(function (e) {
                          return e.name;
                        });
                    })(r, n, i)
                  );
                "" === o &&
                  (o = Le(
                    (function (e, t) {
                      if (lt(e) || ft(e)) {
                        var n = Object.keys(e.getFields());
                        return Ue(t, n);
                      }
                      return [];
                    })(n, i)
                  )),
                  e.reportError(
                    new nt(
                      'Cannot query field "'
                        .concat(i, '" on type "')
                        .concat(n.name, '".') + o,
                      t
                    )
                  );
              }
            },
          };
        },
        function (e) {
          var t = Object.create(null);
          return {
            OperationDefinition: function () {
              return !1;
            },
            FragmentDefinition: function (n) {
              var r = n.name.value;
              return (
                t[r]
                  ? e.reportError(
                      new nt(
                        'There can be only one fragment named "'.concat(
                          r,
                          '".'
                        ),
                        [t[r], n.name]
                      )
                    )
                  : (t[r] = n.name),
                !1
              );
            },
          };
        },
        ji,
        Ri,
        function (e) {
          return {
            InlineFragment: function (t) {
              var n = e.getType(),
                r = e.getParentType();
              if (Et(n) && Et(r) && !Jr(e.getSchema(), n, r)) {
                var i = Object(Ie.a)(r),
                  o = Object(Ie.a)(n);
                e.reportError(
                  new nt(
                    'Fragment cannot be spread here as objects of type "'
                      .concat(i, '" can never be of type "')
                      .concat(o, '".'),
                    t
                  )
                );
              }
            },
            FragmentSpread: function (t) {
              var n = t.name.value,
                r = (function (e, t) {
                  var n = e.getFragment(t);
                  if (n) {
                    var r = Di(e.getSchema(), n.typeCondition);
                    if (Et(r)) return r;
                  }
                })(e, n),
                i = e.getParentType();
              if (r && i && !Jr(e.getSchema(), r, i)) {
                var o = Object(Ie.a)(i),
                  a = Object(Ie.a)(r);
                e.reportError(
                  new nt(
                    'Fragment "'
                      .concat(n, '" cannot be spread here as objects of type "')
                      .concat(o, '" can never be of type "')
                      .concat(a, '".'),
                    t
                  )
                );
              }
            },
          };
        },
        function (e) {
          var t = Object.create(null),
            n = [],
            r = Object.create(null);
          return {
            OperationDefinition: function () {
              return !1;
            },
            FragmentDefinition: function (i) {
              return (
                (function i(o) {
                  if (t[o.name.value]) return;
                  var a = o.name.value;
                  t[a] = !0;
                  var s = e.getFragmentSpreads(o.selectionSet);
                  if (0 === s.length) return;
                  r[a] = n.length;
                  for (var c = 0; c < s.length; c++) {
                    var u = s[c],
                      l = u.name.value,
                      f = r[l];
                    if ((n.push(u), void 0 === f)) {
                      var p = e.getFragment(l);
                      p && i(p);
                    } else {
                      var d = n.slice(f),
                        h = d
                          .slice(0, -1)
                          .map(function (e) {
                            return '"' + e.name.value + '"';
                          })
                          .join(", ");
                      e.reportError(
                        new nt(
                          'Cannot spread fragment "'.concat(
                            l,
                            '" within itself'
                          ) + ("" !== h ? " via ".concat(h, ".") : "."),
                          d
                        )
                      );
                    }
                    n.pop();
                  }
                  r[a] = void 0;
                })(i),
                !1
              );
            },
          };
        },
        function (e) {
          var t = Object.create(null);
          return {
            OperationDefinition: function () {
              t = Object.create(null);
            },
            VariableDefinition: function (n) {
              var r = n.variable.name.value;
              t[r]
                ? e.reportError(
                    new nt(
                      'There can be only one variable named "$'.concat(r, '".'),
                      [t[r], n.variable.name]
                    )
                  )
                : (t[r] = n.variable.name);
            },
          };
        },
        function (e) {
          var t = Object.create(null);
          return {
            OperationDefinition: {
              enter: function () {
                t = Object.create(null);
              },
              leave: function (n) {
                for (
                  var r = e.getRecursiveVariableUsages(n), i = 0;
                  i < r.length;
                  i++
                ) {
                  var o = r[i].node,
                    a = o.name.value;
                  !0 !== t[a] &&
                    e.reportError(
                      new nt(
                        n.name
                          ? 'Variable "$'
                              .concat(a, '" is not defined by operation "')
                              .concat(n.name.value, '".')
                          : 'Variable "$'.concat(a, '" is not defined.'),
                        [o, n]
                      )
                    );
                }
              },
            },
            VariableDefinition: function (e) {
              t[e.variable.name.value] = !0;
            },
          };
        },
        function (e) {
          var t = [];
          return {
            OperationDefinition: {
              enter: function () {
                t = [];
              },
              leave: function (n) {
                for (
                  var r = Object.create(null),
                    i = e.getRecursiveVariableUsages(n),
                    o = 0;
                  o < i.length;
                  o++
                ) {
                  r[i[o].node.name.value] = !0;
                }
                for (var a = 0, s = t; a < s.length; a++) {
                  var c = s[a],
                    u = c.variable.name.value;
                  !0 !== r[u] &&
                    e.reportError(
                      new nt(
                        n.name
                          ? 'Variable "$'
                              .concat(u, '" is never used in operation "')
                              .concat(n.name.value, '".')
                          : 'Variable "$'.concat(u, '" is never used.'),
                        c
                      )
                    );
                }
              },
            },
            VariableDefinition: function (e) {
              t.push(e);
            },
          };
        },
        Gi,
        Yi,
        function (e) {
          return Qi(
            Qi({}, zi(e)),
            {},
            {
              Argument: function (t) {
                var n = e.getArgument(),
                  r = e.getFieldDef(),
                  i = e.getParentType();
                if (!n && r && i) {
                  var o = t.name.value,
                    a = Ue(
                      o,
                      r.args.map(function (e) {
                        return e.name;
                      })
                    );
                  e.reportError(
                    new nt(
                      'Unknown argument "'
                        .concat(o, '" on field "')
                        .concat(i.name, ".")
                        .concat(r.name, '".') + Le(a),
                      t
                    )
                  );
                }
              },
            }
          );
        },
        Hi,
        function (e) {
          return {
            ListValue: function (t) {
              if (!vt(St(e.getParentInputType()))) return Ki(e, t), !1;
            },
            ObjectValue: function (t) {
              var n = kt(e.getInputType());
              if (!ht(n)) return Ki(e, t), !1;
              for (
                var r,
                  i = ke(t.fields, function (e) {
                    return e.name.value;
                  }),
                  o = 0,
                  a = Jt(n.getFields());
                o < a.length;
                o++
              ) {
                var s = a[o];
                if (
                  !i[s.name] &&
                  yt((r = s).type) &&
                  void 0 === r.defaultValue
                ) {
                  var c = Object(Ie.a)(s.type);
                  e.reportError(
                    new nt(
                      'Field "'
                        .concat(n.name, ".")
                        .concat(s.name, '" of required type "')
                        .concat(c, '" was not provided.'),
                      t
                    )
                  );
                }
              }
            },
            ObjectField: function (t) {
              var n = kt(e.getParentInputType());
              if (!e.getInputType() && ht(n)) {
                var r = Ue(t.name.value, Object.keys(n.getFields()));
                e.reportError(
                  new nt(
                    'Field "'
                      .concat(t.name.value, '" is not defined by type "')
                      .concat(n.name, '".') + Le(r),
                    t
                  )
                );
              }
            },
            NullValue: function (t) {
              var n = e.getInputType();
              yt(n) &&
                e.reportError(
                  new nt(
                    'Expected value of type "'
                      .concat(Object(Ie.a)(n), '", found ')
                      .concat(Object(it.print)(t), "."),
                    t
                  )
                );
            },
            EnumValue: function (t) {
              return Ki(e, t);
            },
            IntValue: function (t) {
              return Ki(e, t);
            },
            FloatValue: function (t) {
              return Ki(e, t);
            },
            StringValue: function (t) {
              return Ki(e, t);
            },
            BooleanValue: function (t) {
              return Ki(e, t);
            },
          };
        },
        function (e) {
          return Xi(
            Xi({}, Zi(e)),
            {},
            {
              Field: {
                leave: function (t) {
                  var n,
                    r = e.getFieldDef();
                  if (!r) return !1;
                  for (
                    var i = ke(
                        null !== (n = t.arguments) && void 0 !== n ? n : [],
                        function (e) {
                          return e.name.value;
                        }
                      ),
                      o = 0,
                      a = r.args;
                    o < a.length;
                    o++
                  ) {
                    var s = a[o];
                    if (!i[s.name] && Mt(s)) {
                      var c = Object(Ie.a)(s.type);
                      e.reportError(
                        new nt(
                          'Field "'
                            .concat(r.name, '" argument "')
                            .concat(s.name, '" of type "')
                            .concat(
                              c,
                              '" is required, but it was not provided.'
                            ),
                          t
                        )
                      );
                    }
                  }
                },
              },
            }
          );
        },
        function (e) {
          var t = Object.create(null);
          return {
            OperationDefinition: {
              enter: function () {
                t = Object.create(null);
              },
              leave: function (n) {
                for (
                  var r = e.getRecursiveVariableUsages(n), i = 0;
                  i < r.length;
                  i++
                ) {
                  var o = r[i],
                    a = o.node,
                    s = o.type,
                    c = o.defaultValue,
                    u = a.name.value,
                    l = t[u];
                  if (l && s) {
                    var f = e.getSchema(),
                      p = Di(f, l.type);
                    if (p && !to(f, p, l.defaultValue, s, c)) {
                      var d = Object(Ie.a)(p),
                        h = Object(Ie.a)(s);
                      e.reportError(
                        new nt(
                          'Variable "$'
                            .concat(u, '" of type "')
                            .concat(d, '" used in position expecting type "')
                            .concat(h, '".'),
                          [l, a]
                        )
                      );
                    }
                  }
                }
              },
            },
            VariableDefinition: function (e) {
              t[e.variable.name.value] = e;
            },
          };
        },
        function (e) {
          var t = new fo(),
            n = new Map();
          return {
            SelectionSet: function (r) {
              for (
                var i = (function (e, t, n, r, i) {
                    var o = [],
                      a = co(e, t, r, i),
                      s = a[0],
                      c = a[1];
                    if (
                      ((function (e, t, n, r, i) {
                        for (var o = 0, a = Oe(i); o < a.length; o++) {
                          var s = a[o],
                            c = s[0],
                            u = s[1];
                          if (u.length > 1)
                            for (var l = 0; l < u.length; l++)
                              for (var f = l + 1; f < u.length; f++) {
                                var p = so(e, n, r, !1, c, u[l], u[f]);
                                p && t.push(p);
                              }
                        }
                      })(e, o, t, n, s),
                      0 !== c.length)
                    )
                      for (var u = 0; u < c.length; u++) {
                        io(e, o, t, n, !1, s, c[u]);
                        for (var l = u + 1; l < c.length; l++)
                          oo(e, o, t, n, !1, c[u], c[l]);
                      }
                    return o;
                  })(e, n, t, e.getParentType(), r),
                  o = 0;
                o < i.length;
                o++
              ) {
                var a = i[o],
                  s = a[0],
                  c = s[0],
                  u = s[1],
                  l = a[1],
                  f = a[2],
                  p = ro(u);
                e.reportError(
                  new nt(
                    'Fields "'
                      .concat(c, '" conflict because ')
                      .concat(
                        p,
                        ". Use different aliases on the fields to fetch both if this was intentional."
                      ),
                    l.concat(f)
                  )
                );
              }
            },
          };
        },
        ho,
      ]),
      bo =
        (Object.freeze([
          function (e) {
            var t,
              n,
              r,
              i = e.getSchema(),
              o =
                null !==
                  (t =
                    null !==
                      (n =
                        null !==
                          (r =
                            null === i || void 0 === i ? void 0 : i.astNode) &&
                        void 0 !== r
                          ? r
                          : null === i || void 0 === i
                          ? void 0
                          : i.getQueryType()) && void 0 !== n
                      ? n
                      : null === i || void 0 === i
                      ? void 0
                      : i.getMutationType()) && void 0 !== t
                  ? t
                  : null === i || void 0 === i
                  ? void 0
                  : i.getSubscriptionType(),
              a = 0;
            return {
              SchemaDefinition: function (t) {
                o
                  ? e.reportError(
                      new nt(
                        "Cannot define a new schema within a schema extension.",
                        t
                      )
                    )
                  : (a > 0 &&
                      e.reportError(
                        new nt("Must provide only one schema definition.", t)
                      ),
                    ++a);
              },
            };
          },
          function (e) {
            var t = e.getSchema(),
              n = Object.create(null),
              r = t
                ? {
                    query: t.getQueryType(),
                    mutation: t.getMutationType(),
                    subscription: t.getSubscriptionType(),
                  }
                : {};
            return { SchemaDefinition: i, SchemaExtension: i };
            function i(t) {
              for (
                var i,
                  o = null !== (i = t.operationTypes) && void 0 !== i ? i : [],
                  a = 0;
                a < o.length;
                a++
              ) {
                var s = o[a],
                  c = s.operation,
                  u = n[c];
                r[c]
                  ? e.reportError(
                      new nt(
                        "Type for ".concat(
                          c,
                          " already defined in the schema. It cannot be redefined."
                        ),
                        s
                      )
                    )
                  : u
                  ? e.reportError(
                      new nt(
                        "There can be only one ".concat(c, " type in schema."),
                        [u, s]
                      )
                    )
                  : (n[c] = s);
              }
              return !1;
            }
          },
          function (e) {
            var t = Object.create(null),
              n = e.getSchema();
            return {
              ScalarTypeDefinition: r,
              ObjectTypeDefinition: r,
              InterfaceTypeDefinition: r,
              UnionTypeDefinition: r,
              EnumTypeDefinition: r,
              InputObjectTypeDefinition: r,
            };
            function r(r) {
              var i = r.name.value;
              if (!(null === n || void 0 === n ? void 0 : n.getType(i)))
                return (
                  t[i]
                    ? e.reportError(
                        new nt(
                          'There can be only one type named "'.concat(i, '".'),
                          [t[i], r.name]
                        )
                      )
                    : (t[i] = r.name),
                  !1
                );
              e.reportError(
                new nt(
                  'Type "'.concat(
                    i,
                    '" already exists in the schema. It cannot also be defined in this type definition.'
                  ),
                  r.name
                )
              );
            }
          },
          function (e) {
            var t = e.getSchema(),
              n = t ? t.getTypeMap() : Object.create(null),
              r = Object.create(null);
            return { EnumTypeDefinition: i, EnumTypeExtension: i };
            function i(t) {
              var i,
                o = t.name.value;
              r[o] || (r[o] = Object.create(null));
              for (
                var a = null !== (i = t.values) && void 0 !== i ? i : [],
                  s = r[o],
                  c = 0;
                c < a.length;
                c++
              ) {
                var u = a[c],
                  l = u.name.value,
                  f = n[o];
                dt(f) && f.getValue(l)
                  ? e.reportError(
                      new nt(
                        'Enum value "'
                          .concat(o, ".")
                          .concat(
                            l,
                            '" already exists in the schema. It cannot also be defined in this type extension.'
                          ),
                        u.name
                      )
                    )
                  : s[l]
                  ? e.reportError(
                      new nt(
                        'Enum value "'
                          .concat(o, ".")
                          .concat(l, '" can only be defined once.'),
                        [s[l], u.name]
                      )
                    )
                  : (s[l] = u.name);
              }
              return !1;
            }
          },
          function (e) {
            var t = e.getSchema(),
              n = t ? t.getTypeMap() : Object.create(null),
              r = Object.create(null);
            return {
              InputObjectTypeDefinition: i,
              InputObjectTypeExtension: i,
              InterfaceTypeDefinition: i,
              InterfaceTypeExtension: i,
              ObjectTypeDefinition: i,
              ObjectTypeExtension: i,
            };
            function i(t) {
              var i,
                o = t.name.value;
              r[o] || (r[o] = Object.create(null));
              for (
                var a = null !== (i = t.fields) && void 0 !== i ? i : [],
                  s = r[o],
                  c = 0;
                c < a.length;
                c++
              ) {
                var u = a[c],
                  l = u.name.value;
                vo(n[o], l)
                  ? e.reportError(
                      new nt(
                        'Field "'
                          .concat(o, ".")
                          .concat(
                            l,
                            '" already exists in the schema. It cannot also be defined in this type extension.'
                          ),
                        u.name
                      )
                    )
                  : s[l]
                  ? e.reportError(
                      new nt(
                        'Field "'
                          .concat(o, ".")
                          .concat(l, '" can only be defined once.'),
                        [s[l], u.name]
                      )
                    )
                  : (s[l] = u.name);
              }
              return !1;
            }
          },
          function (e) {
            var t = Object.create(null),
              n = e.getSchema();
            return {
              DirectiveDefinition: function (r) {
                var i = r.name.value;
                if (!(null === n || void 0 === n ? void 0 : n.getDirective(i)))
                  return (
                    t[i]
                      ? e.reportError(
                          new nt(
                            'There can be only one directive named "@'.concat(
                              i,
                              '".'
                            ),
                            [t[i], r.name]
                          )
                        )
                      : (t[i] = r.name),
                    !1
                  );
                e.reportError(
                  new nt(
                    'Directive "@'.concat(
                      i,
                      '" already exists in the schema. It cannot be redefined.'
                    ),
                    r.name
                  )
                );
              },
            };
          },
          xi,
          Gi,
          Yi,
          function (e) {
            for (
              var t = e.getSchema(),
                n = Object.create(null),
                r = 0,
                i = e.getDocument().definitions;
              r < i.length;
              r++
            ) {
              var o = i[r];
              Ni(o) && (n[o.name.value] = o);
            }
            return {
              ScalarTypeExtension: a,
              ObjectTypeExtension: a,
              InterfaceTypeExtension: a,
              UnionTypeExtension: a,
              EnumTypeExtension: a,
              InputObjectTypeExtension: a,
            };
            function a(r) {
              var i,
                o = r.name.value,
                a = n[o],
                s = null === t || void 0 === t ? void 0 : t.getType(o);
              if (
                (a
                  ? (i = mo[a.kind])
                  : s &&
                    (i = (function (e) {
                      if (ut(e)) return rt.a.SCALAR_TYPE_EXTENSION;
                      if (lt(e)) return rt.a.OBJECT_TYPE_EXTENSION;
                      if (ft(e)) return rt.a.INTERFACE_TYPE_EXTENSION;
                      if (pt(e)) return rt.a.UNION_TYPE_EXTENSION;
                      if (dt(e)) return rt.a.ENUM_TYPE_EXTENSION;
                      if (ht(e)) return rt.a.INPUT_OBJECT_TYPE_EXTENSION;
                      Object(ot.a)(0, "Unexpected type: " + Object(Ie.a)(e));
                    })(s)),
                i)
              ) {
                if (i !== r.kind) {
                  var c = (function (e) {
                    switch (e) {
                      case rt.a.SCALAR_TYPE_EXTENSION:
                        return "scalar";
                      case rt.a.OBJECT_TYPE_EXTENSION:
                        return "object";
                      case rt.a.INTERFACE_TYPE_EXTENSION:
                        return "interface";
                      case rt.a.UNION_TYPE_EXTENSION:
                        return "union";
                      case rt.a.ENUM_TYPE_EXTENSION:
                        return "enum";
                      case rt.a.INPUT_OBJECT_TYPE_EXTENSION:
                        return "input object";
                    }
                    Object(ot.a)(0, "Unexpected kind: " + Object(Ie.a)(e));
                  })(r.kind);
                  e.reportError(
                    new nt(
                      "Cannot extend non-".concat(c, ' type "').concat(o, '".'),
                      a ? [a, r] : r
                    )
                  );
                }
              } else {
                var u = Object.keys(n);
                t && (u = u.concat(Object.keys(t.getTypeMap())));
                var l = Ue(o, u);
                e.reportError(
                  new nt(
                    'Cannot extend type "'.concat(
                      o,
                      '" because it is not defined.'
                    ) + Le(l),
                    r.name
                  )
                );
              }
            }
          },
          zi,
          Hi,
          ho,
          Zi,
        ]),
        Array.prototype.flatMap),
      Eo = bo
        ? function (e, t) {
            return bo.call(e, t);
          }
        : function (e, t) {
            for (var n = [], r = 0; r < e.length; r++) {
              var i = t(e[r]);
              Array.isArray(i) ? (n = n.concat(i)) : n.push(i);
            }
            return n;
          };
    var To = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
    function _o(e) {
      return (
        "string" === typeof e || De(0, "Expected name to be a string."),
        e.length > 1 && "_" === e[0] && "_" === e[1]
          ? new nt(
              'Name "'.concat(
                e,
                '" must not begin with "__", which is reserved by GraphQL introspection.'
              )
            )
          : To.test(e)
          ? void 0
          : new nt(
              'Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but "'.concat(
                e,
                '" does not.'
              )
            )
      );
    }
    function wo(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Oo(e) {
      if (
        !(function (e) {
          return Re(e, No);
        })(e)
      )
        throw new Error(
          "Expected ".concat(Object(Ie.a)(e), " to be a GraphQL schema.")
        );
      return e;
    }
    var No = (function () {
      function e(e) {
        var t;
        (this.__validationErrors = !0 === e.assumeValid ? [] : void 0),
          Fe(e) || De(0, "Must provide configuration object."),
          !e.types ||
            Array.isArray(e.types) ||
            De(
              0,
              '"types" must be Array if provided but got: '.concat(
                Object(Ie.a)(e.types),
                "."
              )
            ),
          !e.directives ||
            Array.isArray(e.directives) ||
            De(
              0,
              '"directives" must be Array if provided but got: ' +
                "".concat(Object(Ie.a)(e.directives), ".")
            ),
          (this.description = e.description),
          (this.extensions = e.extensions && Ae(e.extensions)),
          (this.astNode = e.astNode),
          (this.extensionASTNodes = e.extensionASTNodes),
          (this._queryType = e.query),
          (this._mutationType = e.mutation),
          (this._subscriptionType = e.subscription),
          (this._directives =
            null !== (t = e.directives) && void 0 !== t ? t : Bi);
        var n = new Set(e.types);
        if (null != e.types)
          for (var r = 0, i = e.types; r < i.length; r++) {
            var o = i[r];
            n.delete(o), So(o, n);
          }
        null != this._queryType && So(this._queryType, n),
          null != this._mutationType && So(this._mutationType, n),
          null != this._subscriptionType && So(this._subscriptionType, n);
        for (var a = 0, s = this._directives; a < s.length; a++) {
          var c = s[a];
          if (Pi(c))
            for (var u = 0, l = c.args; u < l.length; u++) {
              So(l[u].type, n);
            }
        }
        So(An, n),
          (this._typeMap = Object.create(null)),
          (this._subTypeMap = Object.create(null)),
          (this._implementationsMap = Object.create(null));
        for (var f = 0, p = Kt(n); f < p.length; f++) {
          var d = p[f];
          if (null != d) {
            var h = d.name;
            if (
              (h ||
                De(
                  0,
                  "One of the provided types for building the Schema is missing a name."
                ),
              void 0 !== this._typeMap[h])
            )
              throw new Error(
                'Schema must contain uniquely named types but contains multiple types named "'.concat(
                  h,
                  '".'
                )
              );
            if (((this._typeMap[h] = d), ft(d)))
              for (var v = 0, y = d.getInterfaces(); v < y.length; v++) {
                var m = y[v];
                if (ft(m)) {
                  var g = this._implementationsMap[m.name];
                  void 0 === g &&
                    (g = this._implementationsMap[m.name] = {
                      objects: [],
                      interfaces: [],
                    }),
                    g.interfaces.push(d);
                }
              }
            else if (lt(d))
              for (var b = 0, E = d.getInterfaces(); b < E.length; b++) {
                var T = E[b];
                if (ft(T)) {
                  var _ = this._implementationsMap[T.name];
                  void 0 === _ &&
                    (_ = this._implementationsMap[T.name] = {
                      objects: [],
                      interfaces: [],
                    }),
                    _.objects.push(d);
                }
              }
          }
        }
      }
      var t,
        n,
        r,
        i = e.prototype;
      return (
        (i.getQueryType = function () {
          return this._queryType;
        }),
        (i.getMutationType = function () {
          return this._mutationType;
        }),
        (i.getSubscriptionType = function () {
          return this._subscriptionType;
        }),
        (i.getTypeMap = function () {
          return this._typeMap;
        }),
        (i.getType = function (e) {
          return this.getTypeMap()[e];
        }),
        (i.getPossibleTypes = function (e) {
          return pt(e) ? e.getTypes() : this.getImplementations(e).objects;
        }),
        (i.getImplementations = function (e) {
          var t = this._implementationsMap[e.name];
          return null !== t && void 0 !== t
            ? t
            : { objects: [], interfaces: [] };
        }),
        (i.isPossibleType = function (e, t) {
          return this.isSubType(e, t);
        }),
        (i.isSubType = function (e, t) {
          var n = this._subTypeMap[e.name];
          if (void 0 === n) {
            if (((n = Object.create(null)), pt(e)))
              for (var r = 0, i = e.getTypes(); r < i.length; r++) {
                n[i[r].name] = !0;
              }
            else {
              for (
                var o = this.getImplementations(e), a = 0, s = o.objects;
                a < s.length;
                a++
              ) {
                n[s[a].name] = !0;
              }
              for (var c = 0, u = o.interfaces; c < u.length; c++) {
                n[u[c].name] = !0;
              }
            }
            this._subTypeMap[e.name] = n;
          }
          return void 0 !== n[t.name];
        }),
        (i.getDirectives = function () {
          return this._directives;
        }),
        (i.getDirective = function (e) {
          return no(this.getDirectives(), function (t) {
            return t.name === e;
          });
        }),
        (i.toConfig = function () {
          var e;
          return {
            description: this.description,
            query: this.getQueryType(),
            mutation: this.getMutationType(),
            subscription: this.getSubscriptionType(),
            types: Jt(this.getTypeMap()),
            directives: this.getDirectives().slice(),
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes:
              null !== (e = this.extensionASTNodes) && void 0 !== e ? e : [],
            assumeValid: void 0 !== this.__validationErrors,
          };
        }),
        (t = e),
        (n = [
          {
            key: Se,
            get: function () {
              return "GraphQLSchema";
            },
          },
        ]) && wo(t.prototype, n),
        r && wo(t, r),
        e
      );
    })();
    function So(e, t) {
      var n = kt(e);
      if (!t.has(n))
        if ((t.add(n), pt(n)))
          for (var r = 0, i = n.getTypes(); r < i.length; r++) {
            So(i[r], t);
          }
        else if (lt(n) || ft(n)) {
          for (var o = 0, a = n.getInterfaces(); o < a.length; o++) {
            So(a[o], t);
          }
          for (var s = 0, c = Jt(n.getFields()); s < c.length; s++) {
            var u = c[s];
            So(u.type, t);
            for (var l = 0, f = u.args; l < f.length; l++) {
              So(f[l].type, t);
            }
          }
        } else if (ht(n))
          for (var p = 0, d = Jt(n.getFields()); p < d.length; p++) {
            So(d[p].type, t);
          }
      return t;
    }
    function Io(e) {
      if ((Oo(e), e.__validationErrors)) return e.__validationErrors;
      var t = new xo(e);
      !(function (e) {
        var t = e.schema,
          n = t.getQueryType();
        if (n) {
          if (!lt(n)) {
            var r;
            e.reportError(
              "Query root type must be Object type, it cannot be ".concat(
                Object(Ie.a)(n),
                "."
              ),
              null !== (r = Ao(t, "query")) && void 0 !== r ? r : n.astNode
            );
          }
        } else e.reportError("Query root type must be provided.", t.astNode);
        var i,
          o = t.getMutationType();
        o &&
          !lt(o) &&
          e.reportError(
            "Mutation root type must be Object type if provided, it cannot be " +
              "".concat(Object(Ie.a)(o), "."),
            null !== (i = Ao(t, "mutation")) && void 0 !== i ? i : o.astNode
          );
        var a,
          s = t.getSubscriptionType();
        s &&
          !lt(s) &&
          e.reportError(
            "Subscription root type must be Object type if provided, it cannot be " +
              "".concat(Object(Ie.a)(s), "."),
            null !== (a = Ao(t, "subscription")) && void 0 !== a ? a : s.astNode
          );
      })(t),
        (function (e) {
          for (var t = 0, n = e.schema.getDirectives(); t < n.length; t++) {
            var r = n[t];
            if (Pi(r)) {
              Do(e, r);
              for (var i = 0, o = r.args; i < o.length; i++) {
                var a = o[i];
                Do(e, a),
                  mt(a.type) ||
                    e.reportError(
                      "The type of @"
                        .concat(r.name, "(")
                        .concat(a.name, ":) must be Input Type ") +
                        "but got: ".concat(Object(Ie.a)(a.type), "."),
                      a.astNode
                    );
              }
            } else
              e.reportError(
                "Expected directive but got: ".concat(Object(Ie.a)(r), "."),
                null === r || void 0 === r ? void 0 : r.astNode
              );
          }
        })(t),
        (function (e) {
          for (
            var t = (function (e) {
                var t = Object.create(null),
                  n = [],
                  r = Object.create(null);
                return function i(o) {
                  if (t[o.name]) return;
                  (t[o.name] = !0), (r[o.name] = n.length);
                  for (var a = Jt(o.getFields()), s = 0; s < a.length; s++) {
                    var c = a[s];
                    if (yt(c.type) && ht(c.type.ofType)) {
                      var u = c.type.ofType,
                        l = r[u.name];
                      if ((n.push(c), void 0 === l)) i(u);
                      else {
                        var f = n.slice(l),
                          p = f
                            .map(function (e) {
                              return e.name;
                            })
                            .join(".");
                        e.reportError(
                          'Cannot reference Input Object "'
                            .concat(
                              u.name,
                              '" within itself through a series of non-null fields: "'
                            )
                            .concat(p, '".'),
                          f.map(function (e) {
                            return e.astNode;
                          })
                        );
                      }
                      n.pop();
                    }
                  }
                  r[o.name] = void 0;
                };
              })(e),
              n = e.schema.getTypeMap(),
              r = 0,
              i = Jt(n);
            r < i.length;
            r++
          ) {
            var o = i[r];
            It(o)
              ? (Yn(o) || Do(e, o),
                lt(o) || ft(o)
                  ? (jo(e, o), Ro(e, o))
                  : pt(o)
                  ? Fo(e, o)
                  : dt(o)
                  ? Co(e, o)
                  : ht(o) && (Mo(e, o), t(o)))
              : e.reportError(
                  "Expected GraphQL named type but got: ".concat(
                    Object(Ie.a)(o),
                    "."
                  ),
                  o.astNode
                );
          }
        })(t);
      var n = t.getErrors();
      return (e.__validationErrors = n), n;
    }
    function ko(e) {
      var t = Io(e);
      if (0 !== t.length)
        throw new Error(
          t
            .map(function (e) {
              return e.message;
            })
            .join("\n\n")
        );
    }
    var xo = (function () {
      function e(e) {
        (this._errors = []), (this.schema = e);
      }
      var t = e.prototype;
      return (
        (t.reportError = function (e, t) {
          var n = Array.isArray(t) ? t.filter(Boolean) : t;
          this.addError(new nt(e, n));
        }),
        (t.addError = function (e) {
          this._errors.push(e);
        }),
        (t.getErrors = function () {
          return this._errors;
        }),
        e
      );
    })();
    function Ao(e, t) {
      for (
        var n = Vo(e, function (e) {
            return e.operationTypes;
          }),
          r = 0;
        r < n.length;
        r++
      ) {
        var i = n[r];
        if (i.operation === t) return i.type;
      }
    }
    function Do(e, t) {
      var n = _o(t.name);
      n &&
        e.addError(
          (function (e, t, n) {
            var r;
            return Array.isArray(e.path)
              ? e
              : new nt(
                  e.message,
                  null !== (r = e.nodes) && void 0 !== r ? r : t,
                  e.source,
                  e.positions,
                  n,
                  e
                );
          })(n, t.astNode)
        );
    }
    function jo(e, t) {
      var n = Jt(t.getFields());
      0 === n.length &&
        e.reportError(
          "Type ".concat(t.name, " must define one or more fields."),
          Uo(t)
        );
      for (var r = 0; r < n.length; r++) {
        var i,
          o = n[r];
        if ((Do(e, o), !gt(o.type)))
          e.reportError(
            "The type of "
              .concat(t.name, ".")
              .concat(o.name, " must be Output Type ") +
              "but got: ".concat(Object(Ie.a)(o.type), "."),
            null === (i = o.astNode) || void 0 === i ? void 0 : i.type
          );
        for (var a = 0, s = o.args; a < s.length; a++) {
          var c,
            u = s[a],
            l = u.name;
          if ((Do(e, u), !mt(u.type)))
            e.reportError(
              "The type of "
                .concat(t.name, ".")
                .concat(o.name, "(")
                .concat(l, ":) must be Input ") +
                "Type but got: ".concat(Object(Ie.a)(u.type), "."),
              null === (c = u.astNode) || void 0 === c ? void 0 : c.type
            );
        }
      }
    }
    function Ro(e, t) {
      for (
        var n = Object.create(null), r = 0, i = t.getInterfaces();
        r < i.length;
        r++
      ) {
        var o = i[r];
        ft(o)
          ? t !== o
            ? n[o.name]
              ? e.reportError(
                  "Type "
                    .concat(t.name, " can only implement ")
                    .concat(o.name, " once."),
                  Bo(t, o)
                )
              : ((n[o.name] = !0), Po(e, t, o), Lo(e, t, o))
            : e.reportError(
                "Type ".concat(
                  t.name,
                  " cannot implement itself because it would create a circular reference."
                ),
                Bo(t, o)
              )
          : e.reportError(
              "Type ".concat(
                Object(Ie.a)(t),
                " must only implement Interface types, "
              ) + "it cannot implement ".concat(Object(Ie.a)(o), "."),
              Bo(t, o)
            );
      }
    }
    function Lo(e, t, n) {
      for (
        var r = t.getFields(), i = 0, o = Jt(n.getFields());
        i < o.length;
        i++
      ) {
        var a = o[i],
          s = a.name,
          c = r[s];
        if (c) {
          var u, l;
          if (!Qr(e.schema, c.type, a.type))
            e.reportError(
              "Interface field "
                .concat(n.name, ".")
                .concat(s, " expects type ") +
                ""
                  .concat(Object(Ie.a)(a.type), " but ")
                  .concat(t.name, ".")
                  .concat(s, " ") +
                "is type ".concat(Object(Ie.a)(c.type), "."),
              [
                null === (u = a.astNode) || void 0 === u ? void 0 : u.type,
                null === (l = c.astNode) || void 0 === l ? void 0 : l.type,
              ]
            );
          for (
            var f = function (r, i) {
                var o,
                  a,
                  u = i[r],
                  l = u.name,
                  f = no(c.args, function (e) {
                    return e.name === l;
                  });
                if (!f)
                  return (
                    e.reportError(
                      "Interface field argument "
                        .concat(n.name, ".")
                        .concat(s, "(")
                        .concat(l, ":) expected but ")
                        .concat(t.name, ".")
                        .concat(s, " does not provide it."),
                      [u.astNode, c.astNode]
                    ),
                    "continue"
                  );
                qr(u.type, f.type) ||
                  e.reportError(
                    "Interface field argument "
                      .concat(n.name, ".")
                      .concat(s, "(")
                      .concat(l, ":) ") +
                      "expects type ".concat(Object(Ie.a)(u.type), " but ") +
                      ""
                        .concat(t.name, ".")
                        .concat(s, "(")
                        .concat(l, ":) is type ") +
                      "".concat(Object(Ie.a)(f.type), "."),
                    [
                      null === (o = u.astNode) || void 0 === o
                        ? void 0
                        : o.type,
                      null === (a = f.astNode) || void 0 === a
                        ? void 0
                        : a.type,
                    ]
                  );
              },
              p = 0,
              d = a.args;
            p < d.length;
            p++
          )
            f(p, d);
          for (
            var h = function (r, i) {
                var o = i[r],
                  c = o.name;
                !no(a.args, function (e) {
                  return e.name === c;
                }) &&
                  Mt(o) &&
                  e.reportError(
                    "Object field "
                      .concat(t.name, ".")
                      .concat(s, " includes required argument ")
                      .concat(c, " that is missing from the Interface field ")
                      .concat(n.name, ".")
                      .concat(s, "."),
                    [o.astNode, a.astNode]
                  );
              },
              v = 0,
              y = c.args;
            v < y.length;
            v++
          )
            h(v, y);
        } else
          e.reportError(
            "Interface field "
              .concat(n.name, ".")
              .concat(s, " expected but ")
              .concat(t.name, " does not provide it."),
            [a.astNode].concat(Uo(t))
          );
      }
    }
    function Po(e, t, n) {
      for (
        var r = t.getInterfaces(), i = 0, o = n.getInterfaces();
        i < o.length;
        i++
      ) {
        var a = o[i];
        -1 === r.indexOf(a) &&
          e.reportError(
            a === t
              ? "Type "
                  .concat(t.name, " cannot implement ")
                  .concat(
                    n.name,
                    " because it would create a circular reference."
                  )
              : "Type "
                  .concat(t.name, " must implement ")
                  .concat(a.name, " because it is implemented by ")
                  .concat(n.name, "."),
            [].concat(Bo(n, a), Bo(t, n))
          );
      }
    }
    function Fo(e, t) {
      var n = t.getTypes();
      0 === n.length &&
        e.reportError(
          "Union type ".concat(
            t.name,
            " must define one or more member types."
          ),
          Uo(t)
        );
      for (var r = Object.create(null), i = 0; i < n.length; i++) {
        var o = n[i];
        r[o.name]
          ? e.reportError(
              "Union type "
                .concat(t.name, " can only include type ")
                .concat(o.name, " once."),
              Go(t, o.name)
            )
          : ((r[o.name] = !0),
            lt(o) ||
              e.reportError(
                "Union type ".concat(
                  t.name,
                  " can only include Object types, "
                ) + "it cannot include ".concat(Object(Ie.a)(o), "."),
                Go(t, String(o))
              ));
      }
    }
    function Co(e, t) {
      var n = t.getValues();
      0 === n.length &&
        e.reportError(
          "Enum type ".concat(t.name, " must define one or more values."),
          Uo(t)
        );
      for (var r = 0; r < n.length; r++) {
        var i = n[r],
          o = i.name;
        Do(e, i),
          ("true" !== o && "false" !== o && "null" !== o) ||
            e.reportError(
              "Enum type "
                .concat(t.name, " cannot include value: ")
                .concat(o, "."),
              i.astNode
            );
      }
    }
    function Mo(e, t) {
      var n = Jt(t.getFields());
      0 === n.length &&
        e.reportError(
          "Input Object type ".concat(
            t.name,
            " must define one or more fields."
          ),
          Uo(t)
        );
      for (var r = 0; r < n.length; r++) {
        var i,
          o = n[r];
        if ((Do(e, o), !mt(o.type)))
          e.reportError(
            "The type of "
              .concat(t.name, ".")
              .concat(o.name, " must be Input Type ") +
              "but got: ".concat(Object(Ie.a)(o.type), "."),
            null === (i = o.astNode) || void 0 === i ? void 0 : i.type
          );
      }
    }
    function Uo(e) {
      var t = e.astNode,
        n = e.extensionASTNodes;
      return t
        ? n
          ? [t].concat(n)
          : [t]
        : null !== n && void 0 !== n
        ? n
        : [];
    }
    function Vo(e, t) {
      return Eo(Uo(e), function (e) {
        var n;
        return null !== (n = t(e)) && void 0 !== n ? n : [];
      });
    }
    function Bo(e, t) {
      return Vo(e, function (e) {
        return e.interfaces;
      }).filter(function (e) {
        return e.name.value === t.name;
      });
    }
    function Go(e, t) {
      return Vo(e, function (e) {
        return e.types;
      }).filter(function (e) {
        return e.name.value === t;
      });
    }
    var Yo = (function () {
      function e(e, t, n) {
        (this._schema = e),
          (this._typeStack = []),
          (this._parentTypeStack = []),
          (this._inputTypeStack = []),
          (this._fieldDefStack = []),
          (this._defaultValueStack = []),
          (this._directive = null),
          (this._argument = null),
          (this._enumValue = null),
          (this._getFieldDef = null !== t && void 0 !== t ? t : qo),
          n &&
            (mt(n) && this._inputTypeStack.push(n),
            Et(n) && this._parentTypeStack.push(n),
            gt(n) && this._typeStack.push(n));
      }
      var t = e.prototype;
      return (
        (t.getType = function () {
          if (this._typeStack.length > 0)
            return this._typeStack[this._typeStack.length - 1];
        }),
        (t.getParentType = function () {
          if (this._parentTypeStack.length > 0)
            return this._parentTypeStack[this._parentTypeStack.length - 1];
        }),
        (t.getInputType = function () {
          if (this._inputTypeStack.length > 0)
            return this._inputTypeStack[this._inputTypeStack.length - 1];
        }),
        (t.getParentInputType = function () {
          if (this._inputTypeStack.length > 1)
            return this._inputTypeStack[this._inputTypeStack.length - 2];
        }),
        (t.getFieldDef = function () {
          if (this._fieldDefStack.length > 0)
            return this._fieldDefStack[this._fieldDefStack.length - 1];
        }),
        (t.getDefaultValue = function () {
          if (this._defaultValueStack.length > 0)
            return this._defaultValueStack[this._defaultValueStack.length - 1];
        }),
        (t.getDirective = function () {
          return this._directive;
        }),
        (t.getArgument = function () {
          return this._argument;
        }),
        (t.getEnumValue = function () {
          return this._enumValue;
        }),
        (t.enter = function (e) {
          var t = this._schema;
          switch (e.kind) {
            case rt.a.SELECTION_SET:
              var n = kt(this.getType());
              this._parentTypeStack.push(Et(n) ? n : void 0);
              break;
            case rt.a.FIELD:
              var r,
                i,
                o = this.getParentType();
              o && (r = this._getFieldDef(t, o, e)) && (i = r.type),
                this._fieldDefStack.push(r),
                this._typeStack.push(gt(i) ? i : void 0);
              break;
            case rt.a.DIRECTIVE:
              this._directive = t.getDirective(e.name.value);
              break;
            case rt.a.OPERATION_DEFINITION:
              var a;
              switch (e.operation) {
                case "query":
                  a = t.getQueryType();
                  break;
                case "mutation":
                  a = t.getMutationType();
                  break;
                case "subscription":
                  a = t.getSubscriptionType();
              }
              this._typeStack.push(lt(a) ? a : void 0);
              break;
            case rt.a.INLINE_FRAGMENT:
            case rt.a.FRAGMENT_DEFINITION:
              var s = e.typeCondition,
                c = s ? Di(t, s) : kt(this.getType());
              this._typeStack.push(gt(c) ? c : void 0);
              break;
            case rt.a.VARIABLE_DEFINITION:
              var u = Di(t, e.type);
              this._inputTypeStack.push(mt(u) ? u : void 0);
              break;
            case rt.a.ARGUMENT:
              var l,
                f,
                p,
                d =
                  null !== (l = this.getDirective()) && void 0 !== l
                    ? l
                    : this.getFieldDef();
              d &&
                (f = no(d.args, function (t) {
                  return t.name === e.name.value;
                })) &&
                (p = f.type),
                (this._argument = f),
                this._defaultValueStack.push(f ? f.defaultValue : void 0),
                this._inputTypeStack.push(mt(p) ? p : void 0);
              break;
            case rt.a.LIST:
              var h = St(this.getInputType()),
                v = vt(h) ? h.ofType : h;
              this._defaultValueStack.push(void 0),
                this._inputTypeStack.push(mt(v) ? v : void 0);
              break;
            case rt.a.OBJECT_FIELD:
              var y,
                m,
                g = kt(this.getInputType());
              ht(g) && (m = g.getFields()[e.name.value]) && (y = m.type),
                this._defaultValueStack.push(m ? m.defaultValue : void 0),
                this._inputTypeStack.push(mt(y) ? y : void 0);
              break;
            case rt.a.ENUM:
              var b,
                E = kt(this.getInputType());
              dt(E) && (b = E.getValue(e.value)), (this._enumValue = b);
          }
        }),
        (t.leave = function (e) {
          switch (e.kind) {
            case rt.a.SELECTION_SET:
              this._parentTypeStack.pop();
              break;
            case rt.a.FIELD:
              this._fieldDefStack.pop(), this._typeStack.pop();
              break;
            case rt.a.DIRECTIVE:
              this._directive = null;
              break;
            case rt.a.OPERATION_DEFINITION:
            case rt.a.INLINE_FRAGMENT:
            case rt.a.FRAGMENT_DEFINITION:
              this._typeStack.pop();
              break;
            case rt.a.VARIABLE_DEFINITION:
              this._inputTypeStack.pop();
              break;
            case rt.a.ARGUMENT:
              (this._argument = null),
                this._defaultValueStack.pop(),
                this._inputTypeStack.pop();
              break;
            case rt.a.LIST:
            case rt.a.OBJECT_FIELD:
              this._defaultValueStack.pop(), this._inputTypeStack.pop();
              break;
            case rt.a.ENUM:
              this._enumValue = null;
          }
        }),
        e
      );
    })();
    function qo(e, t, n) {
      var r = n.name.value;
      return r === Un.name && e.getQueryType() === t
        ? Un
        : r === Vn.name && e.getQueryType() === t
        ? Vn
        : r === Bn.name && Et(t)
        ? Bn
        : lt(t) || ft(t)
        ? t.getFields()[r]
        : void 0;
    }
    function Qo(e, t) {
      return {
        enter: function (n) {
          e.enter(n);
          var r = Object(kr.a)(t, n.kind, !1);
          if (r) {
            var i = r.apply(t, arguments);
            return (
              void 0 !== i && (e.leave(n), Object(Ar.c)(i) && e.enter(i)), i
            );
          }
        },
        leave: function (n) {
          var r,
            i = Object(kr.a)(t, n.kind, !0);
          return i && (r = i.apply(t, arguments)), e.leave(n), r;
        },
      };
    }
    function Jo(e, t) {
      (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = t);
    }
    var zo = (function () {
        function e(e, t) {
          (this._ast = e),
            (this._fragments = void 0),
            (this._fragmentSpreads = new Map()),
            (this._recursivelyReferencedFragments = new Map()),
            (this._onError = t);
        }
        var t = e.prototype;
        return (
          (t.reportError = function (e) {
            this._onError(e);
          }),
          (t.getDocument = function () {
            return this._ast;
          }),
          (t.getFragment = function (e) {
            var t = this._fragments;
            return (
              t ||
                (this._fragments = t = this.getDocument().definitions.reduce(
                  function (e, t) {
                    return (
                      t.kind === rt.a.FRAGMENT_DEFINITION &&
                        (e[t.name.value] = t),
                      e
                    );
                  },
                  Object.create(null)
                )),
              t[e]
            );
          }),
          (t.getFragmentSpreads = function (e) {
            var t = this._fragmentSpreads.get(e);
            if (!t) {
              t = [];
              for (var n = [e]; 0 !== n.length; )
                for (var r = 0, i = n.pop().selections; r < i.length; r++) {
                  var o = i[r];
                  o.kind === rt.a.FRAGMENT_SPREAD
                    ? t.push(o)
                    : o.selectionSet && n.push(o.selectionSet);
                }
              this._fragmentSpreads.set(e, t);
            }
            return t;
          }),
          (t.getRecursivelyReferencedFragments = function (e) {
            var t = this._recursivelyReferencedFragments.get(e);
            if (!t) {
              t = [];
              for (
                var n = Object.create(null), r = [e.selectionSet];
                0 !== r.length;

              )
                for (
                  var i = r.pop(), o = 0, a = this.getFragmentSpreads(i);
                  o < a.length;
                  o++
                ) {
                  var s = a[o].name.value;
                  if (!0 !== n[s]) {
                    n[s] = !0;
                    var c = this.getFragment(s);
                    c && (t.push(c), r.push(c.selectionSet));
                  }
                }
              this._recursivelyReferencedFragments.set(e, t);
            }
            return t;
          }),
          e
        );
      })(),
      Ho = (function (e) {
        function t(t, n, r, i) {
          var o;
          return (
            ((o = e.call(this, n, i) || this)._schema = t),
            (o._typeInfo = r),
            (o._variableUsages = new Map()),
            (o._recursiveVariableUsages = new Map()),
            o
          );
        }
        Jo(t, e);
        var n = t.prototype;
        return (
          (n.getSchema = function () {
            return this._schema;
          }),
          (n.getVariableUsages = function (e) {
            var t = this._variableUsages.get(e);
            if (!t) {
              var n = [],
                r = new Yo(this._schema);
              Object(kr.b)(
                e,
                Qo(r, {
                  VariableDefinition: function () {
                    return !1;
                  },
                  Variable: function (e) {
                    n.push({
                      node: e,
                      type: r.getInputType(),
                      defaultValue: r.getDefaultValue(),
                    });
                  },
                })
              ),
                (t = n),
                this._variableUsages.set(e, t);
            }
            return t;
          }),
          (n.getRecursiveVariableUsages = function (e) {
            var t = this._recursiveVariableUsages.get(e);
            if (!t) {
              t = this.getVariableUsages(e);
              for (
                var n = 0, r = this.getRecursivelyReferencedFragments(e);
                n < r.length;
                n++
              ) {
                var i = r[n];
                t = t.concat(this.getVariableUsages(i));
              }
              this._recursiveVariableUsages.set(e, t);
            }
            return t;
          }),
          (n.getType = function () {
            return this._typeInfo.getType();
          }),
          (n.getParentType = function () {
            return this._typeInfo.getParentType();
          }),
          (n.getInputType = function () {
            return this._typeInfo.getInputType();
          }),
          (n.getParentInputType = function () {
            return this._typeInfo.getParentInputType();
          }),
          (n.getFieldDef = function () {
            return this._typeInfo.getFieldDef();
          }),
          (n.getDirective = function () {
            return this._typeInfo.getDirective();
          }),
          (n.getArgument = function () {
            return this._typeInfo.getArgument();
          }),
          (n.getEnumValue = function () {
            return this._typeInfo.getEnumValue();
          }),
          t
        );
      })(zo);
    function Ko(e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : go,
        r =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : new Yo(e),
        i =
          arguments.length > 4 && void 0 !== arguments[4]
            ? arguments[4]
            : { maxErrors: void 0 };
      t || De(0, "Must provide document."), ko(e);
      var o = Object.freeze({}),
        a = [],
        s = new Ho(e, t, r, function (e) {
          if (null != i.maxErrors && a.length >= i.maxErrors)
            throw (
              (a.push(
                new nt(
                  "Too many validation errors, error limit reached. Validation aborted."
                )
              ),
              o)
            );
          a.push(e);
        }),
        c = Object(kr.c)(
          n.map(function (e) {
            return e(s);
          })
        );
      try {
        Object(kr.b)(t, Qo(r, c));
      } catch (u) {
        if (u !== o) throw u;
      }
      return a;
    }
    function Wo(e, t, n, r) {
      var i = go.filter(function (e) {
        return e !== Ri && e !== ki && (!r || e !== ji);
      });
      return (
        n && Array.prototype.push.apply(i, n),
        Ko(e, t, i).filter(function (e) {
          if (-1 !== e.message.indexOf("Unknown directive") && e.nodes) {
            var t = e.nodes[0];
            if (t && t.kind === rt.a.DIRECTIVE) {
              var n = t.name.value;
              if ("arguments" === n || "argumentDefinitions" === n) return !1;
            }
          }
          return !0;
        })
      );
    }
    var Xo,
      $o = n(11),
      Zo = n.n($o);
    function ea(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function ta(e) {
      return {
        Field: function (t) {
          var n = e.getFieldDef(),
            r = e.getParentType();
          r &&
            null !=
              (null === n || void 0 === n ? void 0 : n.deprecationReason) &&
            e.reportError(
              new nt(
                "The field "
                  .concat(r.name, ".")
                  .concat(n.name, " is deprecated. ") + n.deprecationReason,
                t
              )
            );
        },
        EnumValue: function (t) {
          var n = kt(e.getInputType()),
            r = e.getEnumValue();
          n &&
            null !=
              (null === r || void 0 === r ? void 0 : r.deprecationReason) &&
            e.reportError(
              new nt(
                'The enum value "'
                  .concat(n.name, ".")
                  .concat(r.name, '" is deprecated. ') + r.deprecationReason,
                t
              )
            );
        },
      };
    }
    function na(e, t) {
      return Ko(e, t, [ta]);
    }
    var ra = "Warning",
      ia = "Information",
      oa = "Hint",
      aa =
        (ea((Xo = {}), "Error", 1),
        ea(Xo, ra, 2),
        ea(Xo, ia, 3),
        ea(Xo, oa, 4),
        Xo);
    function sa(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 ? arguments[3] : void 0,
        i = null;
      try {
        i = Vr(e);
      } catch (a) {
        var o = fa(a.locations[0], e);
        return [
          {
            severity: aa.Error,
            message: a.message,
            source: "GraphQL: Syntax",
            range: o,
          },
        ];
      }
      return ca(i, t, n, r);
    }
    function ca(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 ? arguments[3] : void 0;
      if (!t) return [];
      var i = ua(Wo(t, e, n, r), function (e) {
          return la(e, aa.Error, "Validation");
        }),
        o = na
          ? ua(na(t, e), function (e) {
              return la(e, aa.Warning, "Deprecation");
            })
          : [];
      return i.concat(o);
    }
    function ua(e, t) {
      return Array.prototype.concat.apply([], e.map(t));
    }
    function la(e, t, n) {
      if (!e.nodes) return [];
      var r = [];
      return (
        e.nodes.forEach(function (i) {
          var o =
            "Variable" !== i.kind && "name" in i && void 0 !== i.name
              ? i.name
              : "variable" in i && void 0 !== i.variable
              ? i.variable
              : i;
          if (o) {
            Zo()(e.locations, "GraphQL validation error requires locations.");
            var a = e.locations[0],
              s = (function (e) {
                var t = e.loc;
                return Zo()(t, "Expected ASTNode to have a location."), t;
              })(o),
              c = a.column + (s.end - s.start);
            r.push({
              source: "GraphQL: ".concat(n),
              message: e.message,
              severity: t,
              range: new Ti(
                new _i(a.line - 1, a.column - 1),
                new _i(a.line - 1, c)
              ),
            });
          }
        }),
        r
      );
    }
    function fa(e, t) {
      var n = si(),
        r = n.startState(),
        i = t.split("\n");
      Zo()(
        i.length >= e.line,
        "Query text must have more lines than where the error happened"
      );
      for (var o = null, a = 0; a < e.line; a++)
        for (o = new Wr(i[a]); !o.eol(); ) {
          if ("invalidchar" === n.token(o, r)) break;
        }
      Zo()(o, "Expected Parser stream to be available.");
      var s = e.line - 1,
        c = o.getStartOfToken(),
        u = o.getCurrentPosition();
      return new Ti(new _i(s, c), new _i(s, u));
    }
    var pa;
    rt.a.INLINE_FRAGMENT;
    function da(e, t, n, r) {
      var i = r || gi(t, n);
      if (!e || !i || !i.state) return "";
      var o = i.state,
        a = o.kind,
        s = o.step,
        c = Ei(e, i.state),
        u = { schema: e };
      if (
        ("Field" === a && 0 === s && c.fieldDef) ||
        ("AliasedField" === a && 2 === s && c.fieldDef)
      ) {
        var l = [];
        return (
          (function (e, t, n) {
            ha(e, t, n), ya(e, t, n, t.type);
          })(l, c, u),
          ga(l, u, c.fieldDef),
          l.join("").trim()
        );
      }
      if ("Directive" === a && 1 === s && c.directiveDef) {
        var f = [];
        return va(f, c, u), ga(f, u, c.directiveDef), f.join("").trim();
      }
      if ("Argument" === a && 0 === s && c.argDef) {
        var p = [];
        return (
          (function (e, t, n) {
            t.directiveDef ? va(e, t, n) : t.fieldDef && ha(e, t, n);
            if (!t.argDef) return;
            var r = t.argDef.name;
            ba(e, "("), ba(e, r), ya(e, t, n, t.inputType), ba(e, ")");
          })(p, c, u),
          ga(p, u, c.argDef),
          p.join("").trim()
        );
      }
      if ("EnumValue" === a && c.enumValue && "description" in c.enumValue) {
        var d = [];
        return (
          (function (e, t, n) {
            if (!t.enumValue) return;
            var r = t.enumValue.name;
            ma(e, t, n, t.inputType), ba(e, "."), ba(e, r);
          })(d, c, u),
          ga(d, u, c.enumValue),
          d.join("").trim()
        );
      }
      if ("NamedType" === a && c.type && "description" in c.type) {
        var h = [];
        return ma(h, c, u, c.type), ga(h, u, c.type), h.join("").trim();
      }
      return "";
    }
    function ha(e, t, n) {
      if (t.fieldDef) {
        var r = t.fieldDef.name;
        "__" !== r.slice(0, 2) && (ma(e, t, n, t.parentType), ba(e, ".")),
          ba(e, r);
      }
    }
    function va(e, t, n) {
      t.directiveDef && ba(e, "@" + t.directiveDef.name);
    }
    function ya(e, t, n, r) {
      ba(e, ": "), ma(e, t, n, r);
    }
    function ma(e, t, n, r) {
      r &&
        (r instanceof wt
          ? (ma(e, t, n, r.ofType), ba(e, "!"))
          : r instanceof _t
          ? (ba(e, "["), ma(e, t, n, r.ofType), ba(e, "]"))
          : ba(e, r.name));
    }
    function ga(e, t, n) {
      if (n) {
        var r = "string" === typeof n.description ? n.description : null;
        r && (ba(e, "\n\n"), ba(e, r)),
          (function (e, t, n) {
            if (!n) return;
            var r = n.deprecationReason ? n.deprecationReason : null;
            if (!r) return;
            ba(e, "\n\n"), ba(e, "Deprecated: "), ba(e, r);
          })(e, 0, n);
      }
    }
    function ba(e, t) {
      e.push(t);
    }
    rt.a.FRAGMENT_DEFINITION,
      rt.a.OBJECT_TYPE_DEFINITION,
      rt.a.INTERFACE_TYPE_DEFINITION,
      rt.a.ENUM_TYPE_DEFINITION,
      rt.a.UNION_TYPE_DEFINITION,
      rt.a.SCALAR_TYPE_DEFINITION,
      rt.a.INPUT_OBJECT_TYPE_DEFINITION,
      rt.a.SCALAR_TYPE_EXTENSION,
      rt.a.OBJECT_TYPE_EXTENSION,
      rt.a.INTERFACE_TYPE_EXTENSION,
      rt.a.UNION_TYPE_EXTENSION,
      rt.a.ENUM_TYPE_EXTENSION,
      rt.a.INPUT_OBJECT_TYPE_EXTENSION,
      rt.a.DIRECTIVE_DEFINITION,
      rt.a.FRAGMENT_SPREAD,
      rt.a.OPERATION_DEFINITION,
      rt.a.NAMED_TYPE,
      ea((pa = {}), rt.a.FIELD, dr.Field),
      ea(pa, rt.a.OPERATION_DEFINITION, dr.Class),
      ea(pa, rt.a.FRAGMENT_DEFINITION, dr.Class),
      ea(pa, rt.a.FRAGMENT_SPREAD, dr.Struct),
      ea(pa, rt.a.OBJECT_TYPE_DEFINITION, dr.Class),
      ea(pa, rt.a.ENUM_TYPE_DEFINITION, dr.Enum),
      ea(pa, rt.a.ENUM_VALUE_DEFINITION, dr.EnumMember),
      ea(pa, rt.a.INPUT_OBJECT_TYPE_DEFINITION, dr.Class),
      ea(pa, rt.a.INPUT_VALUE_DEFINITION, dr.Field),
      ea(pa, rt.a.FIELD_DEFINITION, dr.Field),
      ea(pa, rt.a.INTERFACE_TYPE_DEFINITION, dr.Interface),
      ea(pa, rt.a.DOCUMENT, dr.File),
      ea(pa, "FieldWithArguments", dr.Method);
    function Ea(e, t) {
      return (
        e.kind === rt.a.VARIABLE && (null == t || void 0 === t[e.name.value])
      );
    }
    function Ta(e, t) {
      (Fe(e) && Fe(e.__schema)) ||
        De(
          0,
          'Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: '.concat(
            Object(Ie.a)(e),
            "."
          )
        );
      for (
        var n = e.__schema,
          r = je(
            n.types,
            function (e) {
              return e.name;
            },
            function (e) {
              return (function (e) {
                if (null != e && null != e.name && null != e.kind)
                  switch (e.kind) {
                    case Cn.SCALAR:
                      return new Dt({
                        name: (r = e).name,
                        description: r.description,
                        specifiedByUrl: r.specifiedByUrl,
                      });
                    case Cn.OBJECT:
                      return new jt({
                        name: (n = e).name,
                        description: n.description,
                        interfaces: function () {
                          return v(n);
                        },
                        fields: function () {
                          return y(n);
                        },
                      });
                    case Cn.INTERFACE:
                      return new Ut({
                        name: (t = e).name,
                        description: t.description,
                        interfaces: function () {
                          return v(t);
                        },
                        fields: function () {
                          return y(t);
                        },
                      });
                    case Cn.UNION:
                      return (function (e) {
                        if (!e.possibleTypes) {
                          var t = Object(Ie.a)(e);
                          throw new Error(
                            "Introspection result missing possibleTypes: ".concat(
                              t,
                              "."
                            )
                          );
                        }
                        return new Vt({
                          name: e.name,
                          description: e.description,
                          types: function () {
                            return e.possibleTypes.map(d);
                          },
                        });
                      })(e);
                    case Cn.ENUM:
                      return (function (e) {
                        if (!e.enumValues) {
                          var t = Object(Ie.a)(e);
                          throw new Error(
                            "Introspection result missing enumValues: ".concat(
                              t,
                              "."
                            )
                          );
                        }
                        return new Gt({
                          name: e.name,
                          description: e.description,
                          values: je(
                            e.enumValues,
                            function (e) {
                              return e.name;
                            },
                            function (e) {
                              return {
                                description: e.description,
                                deprecationReason: e.deprecationReason,
                              };
                            }
                          ),
                        });
                      })(e);
                    case Cn.INPUT_OBJECT:
                      return (function (e) {
                        if (!e.inputFields) {
                          var t = Object(Ie.a)(e);
                          throw new Error(
                            "Introspection result missing inputFields: ".concat(
                              t,
                              "."
                            )
                          );
                        }
                        return new qt({
                          name: e.name,
                          description: e.description,
                          fields: function () {
                            return g(e.inputFields);
                          },
                        });
                      })(e);
                  }
                var t;
                var n;
                var r;
                var i = Object(Ie.a)(e);
                throw new Error(
                  "Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ".concat(
                    i,
                    "."
                  )
                );
              })(e);
            }
          ),
          i = 0,
          o = [].concat(on, Gn);
        i < o.length;
        i++
      ) {
        var a = o[i];
        r[a.name] && (r[a.name] = a);
      }
      var s = n.queryType ? d(n.queryType) : null,
        c = n.mutationType ? d(n.mutationType) : null,
        u = n.subscriptionType ? d(n.subscriptionType) : null,
        l = n.directives
          ? n.directives.map(function (e) {
              if (!e.args) {
                var t = Object(Ie.a)(e);
                throw new Error(
                  "Introspection result missing directive args: ".concat(t, ".")
                );
              }
              if (!e.locations) {
                var n = Object(Ie.a)(e);
                throw new Error(
                  "Introspection result missing directive locations: ".concat(
                    n,
                    "."
                  )
                );
              }
              return new Fi({
                name: e.name,
                description: e.description,
                isRepeatable: e.isRepeatable,
                locations: e.locations.slice(),
                args: g(e.args),
              });
            })
          : [];
      return new No({
        description: n.description,
        query: s,
        mutation: c,
        subscription: u,
        types: Jt(r),
        directives: l,
        assumeValid: null === t || void 0 === t ? void 0 : t.assumeValid,
      });
      function f(e) {
        if (e.kind === Cn.LIST) {
          var t = e.ofType;
          if (!t)
            throw new Error("Decorated type deeper than introspection query.");
          return _t(f(t));
        }
        if (e.kind === Cn.NON_NULL) {
          var n = e.ofType;
          if (!n)
            throw new Error("Decorated type deeper than introspection query.");
          return wt(Nt(f(n)));
        }
        return p(e);
      }
      function p(e) {
        var t = e.name;
        if (!t)
          throw new Error(
            "Unknown type reference: ".concat(Object(Ie.a)(e), ".")
          );
        var n = r[t];
        if (!n)
          throw new Error(
            "Invalid or incomplete schema, unknown type: ".concat(
              t,
              ". Ensure that a full introspection query is used in order to build a client schema."
            )
          );
        return n;
      }
      function d(e) {
        return (function (e) {
          if (!lt(e))
            throw new Error(
              "Expected ".concat(
                Object(Ie.a)(e),
                " to be a GraphQL Object type."
              )
            );
          return e;
        })(p(e));
      }
      function h(e) {
        return (function (e) {
          if (!ft(e))
            throw new Error(
              "Expected ".concat(
                Object(Ie.a)(e),
                " to be a GraphQL Interface type."
              )
            );
          return e;
        })(p(e));
      }
      function v(e) {
        if (null === e.interfaces && e.kind === Cn.INTERFACE) return [];
        if (!e.interfaces) {
          var t = Object(Ie.a)(e);
          throw new Error(
            "Introspection result missing interfaces: ".concat(t, ".")
          );
        }
        return e.interfaces.map(h);
      }
      function y(e) {
        if (!e.fields)
          throw new Error(
            "Introspection result missing fields: ".concat(Object(Ie.a)(e), ".")
          );
        return je(
          e.fields,
          function (e) {
            return e.name;
          },
          m
        );
      }
      function m(e) {
        var t = f(e.type);
        if (!gt(t)) {
          var n = Object(Ie.a)(t);
          throw new Error(
            "Introspection must provide output type for fields, but received: ".concat(
              n,
              "."
            )
          );
        }
        if (!e.args) {
          var r = Object(Ie.a)(e);
          throw new Error(
            "Introspection result missing field args: ".concat(r, ".")
          );
        }
        return {
          description: e.description,
          deprecationReason: e.deprecationReason,
          type: t,
          args: g(e.args),
        };
      }
      function g(e) {
        return je(
          e,
          function (e) {
            return e.name;
          },
          b
        );
      }
      function b(e) {
        var t = f(e.type);
        if (!mt(t)) {
          var n = Object(Ie.a)(t);
          throw new Error(
            "Introspection must provide input type for arguments, but received: ".concat(
              n,
              "."
            )
          );
        }
        var r =
          null != e.defaultValue
            ? (function e(t, n, r) {
                if (t) {
                  if (t.kind === rt.a.VARIABLE) {
                    var i = t.name.value;
                    if (null == r || void 0 === r[i]) return;
                    var o = r[i];
                    if (null === o && yt(n)) return;
                    return o;
                  }
                  if (yt(n)) {
                    if (t.kind === rt.a.NULL) return;
                    return e(t, n.ofType, r);
                  }
                  if (t.kind === rt.a.NULL) return null;
                  if (vt(n)) {
                    var a = n.ofType;
                    if (t.kind === rt.a.LIST) {
                      for (var s = [], c = 0, u = t.values; c < u.length; c++) {
                        var l = u[c];
                        if (Ea(l, r)) {
                          if (yt(a)) return;
                          s.push(null);
                        } else {
                          var f = e(l, a, r);
                          if (void 0 === f) return;
                          s.push(f);
                        }
                      }
                      return s;
                    }
                    var p = e(t, a, r);
                    if (void 0 === p) return;
                    return [p];
                  }
                  if (ht(n)) {
                    if (t.kind !== rt.a.OBJECT) return;
                    for (
                      var d = Object.create(null),
                        h = ke(t.fields, function (e) {
                          return e.name.value;
                        }),
                        v = 0,
                        y = Jt(n.getFields());
                      v < y.length;
                      v++
                    ) {
                      var m = y[v],
                        g = h[m.name];
                      if (g && !Ea(g.value, r)) {
                        var b = e(g.value, m.type, r);
                        if (void 0 === b) return;
                        d[m.name] = b;
                      } else if (void 0 !== m.defaultValue)
                        d[m.name] = m.defaultValue;
                      else if (yt(m.type)) return;
                    }
                    return d;
                  }
                  if (bt(n)) {
                    var E;
                    try {
                      E = n.parseLiteral(t, r);
                    } catch (T) {
                      return;
                    }
                    if (void 0 === E) return;
                    return E;
                  }
                  Object(ot.a)(0, "Unexpected input type: " + Object(Ie.a)(n));
                }
              })(
                (function (e, t) {
                  var n = new Br(e, t);
                  n.expectToken(Rr.SOF);
                  var r = n.parseValueLiteral(!1);
                  return n.expectToken(Rr.EOF), r;
                })(e.defaultValue),
                t
              )
            : void 0;
        return { description: e.description, type: t, defaultValue: r };
      }
    }
    function _a(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function wa(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? _a(Object(n), !0).forEach(function (t) {
              ea(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : _a(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Oa(e, t, n, r, i, o, a) {
      try {
        var s = e[o](a),
          c = s.value;
      } catch (u) {
        return void n(u);
      }
      s.done ? t(c) : Promise.resolve(c).then(r, i);
    }
    var Na, Sa;
    var Ia = new WeakMap(),
      ka = new WeakMap(),
      xa = new WeakMap(),
      Aa = new WeakMap(),
      Da = new WeakMap();
    var ja = {
      get: function (e, t, n) {
        if (e instanceof IDBTransaction) {
          if ("done" === t) return ka.get(e);
          if ("objectStoreNames" === t) return e.objectStoreNames || xa.get(e);
          if ("store" === t)
            return n.objectStoreNames[1]
              ? void 0
              : n.objectStore(n.objectStoreNames[0]);
        }
        return Pa(e[t]);
      },
      set: function (e, t, n) {
        return (e[t] = n), !0;
      },
      has: function (e, t) {
        return (
          (e instanceof IDBTransaction && ("done" === t || "store" === t)) ||
          t in e
        );
      },
    };
    function Ra(e) {
      return e !== IDBDatabase.prototype.transaction ||
        "objectStoreNames" in IDBTransaction.prototype
        ? (
            Sa ||
            (Sa = [
              IDBCursor.prototype.advance,
              IDBCursor.prototype.continue,
              IDBCursor.prototype.continuePrimaryKey,
            ])
          ).includes(e)
          ? function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return e.apply(Fa(this), n), Pa(Ia.get(this));
            }
          : function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return Pa(e.apply(Fa(this), n));
            }
        : function (t) {
            for (
              var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
              i < n;
              i++
            )
              r[i - 1] = arguments[i];
            var o = e.call.apply(e, [Fa(this), t].concat(r));
            return xa.set(o, t.sort ? t.sort() : [t]), Pa(o);
          };
    }
    function La(e) {
      return "function" === typeof e
        ? Ra(e)
        : (e instanceof IDBTransaction &&
            (function (e) {
              if (!ka.has(e)) {
                var t = new Promise(function (t, n) {
                  var r = function () {
                      e.removeEventListener("complete", i),
                        e.removeEventListener("error", o),
                        e.removeEventListener("abort", o);
                    },
                    i = function () {
                      t(), r();
                    },
                    o = function () {
                      n(
                        e.error || new DOMException("AbortError", "AbortError")
                      ),
                        r();
                    };
                  e.addEventListener("complete", i),
                    e.addEventListener("error", o),
                    e.addEventListener("abort", o);
                });
                ka.set(e, t);
              }
            })(e),
          (t = e),
          (
            Na ||
            (Na = [
              IDBDatabase,
              IDBObjectStore,
              IDBIndex,
              IDBCursor,
              IDBTransaction,
            ])
          ).some(function (e) {
            return t instanceof e;
          })
            ? new Proxy(e, ja)
            : e);
      var t;
    }
    function Pa(e) {
      if (e instanceof IDBRequest)
        return (function (e) {
          var t = new Promise(function (t, n) {
            var r = function () {
                e.removeEventListener("success", i),
                  e.removeEventListener("error", o);
              },
              i = function () {
                t(Pa(e.result)), r();
              },
              o = function () {
                n(e.error), r();
              };
            e.addEventListener("success", i), e.addEventListener("error", o);
          });
          return (
            t
              .then(function (t) {
                t instanceof IDBCursor && Ia.set(t, e);
              })
              .catch(function () {}),
            Da.set(t, e),
            t
          );
        })(e);
      if (Aa.has(e)) return Aa.get(e);
      var t = La(e);
      return t !== e && (Aa.set(e, t), Da.set(t, e)), t;
    }
    var Fa = function (e) {
      return Da.get(e);
    };
    var Ca = ["get", "getKey", "getAll", "getAllKeys", "count"],
      Ma = ["put", "add", "delete", "clear"],
      Ua = new Map();
    function Va(e, t) {
      if (e instanceof IDBDatabase && !(t in e) && "string" === typeof t) {
        if (Ua.get(t)) return Ua.get(t);
        var n = t.replace(/FromIndex$/, ""),
          r = t !== n,
          i = Ma.includes(n);
        if (
          n in (r ? IDBIndex : IDBObjectStore).prototype &&
          (i || Ca.includes(n))
        ) {
          var o = (function () {
            var e,
              t =
                ((e = $.a.mark(function e(t) {
                  var o,
                    a,
                    s,
                    c,
                    u,
                    l,
                    f,
                    p = arguments;
                  return $.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            for (
                              a = this.transaction(
                                t,
                                i ? "readwrite" : "readonly"
                              ),
                                s = a.store,
                                c = p.length,
                                u = new Array(c > 1 ? c - 1 : 0),
                                l = 1;
                              l < c;
                              l++
                            )
                              u[l - 1] = p[l];
                            return (
                              r && (s = s.index(u.shift())),
                              (e.next = 6),
                              (o = s)[n].apply(o, u)
                            );
                          case 6:
                            if (((f = e.sent), !i)) {
                              e.next = 10;
                              break;
                            }
                            return (e.next = 10), a.done;
                          case 10:
                            return e.abrupt("return", f);
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })),
                function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (r, i) {
                    var o = e.apply(t, n);
                    function a(e) {
                      Oa(o, r, i, a, s, "next", e);
                    }
                    function s(e) {
                      Oa(o, r, i, a, s, "throw", e);
                    }
                    a(void 0);
                  });
                });
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
          return Ua.set(t, o), o;
        }
      }
    }
    function Ba(e, t, n, r, i, o, a) {
      try {
        var s = e[o](a),
          c = s.value;
      } catch (u) {
        return void n(u);
      }
      s.done ? t(c) : Promise.resolve(c).then(r, i);
    }
    function Ga(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (r, i) {
          var o = e.apply(t, n);
          function a(e) {
            Ba(o, r, i, a, s, "next", e);
          }
          function s(e) {
            Ba(o, r, i, a, s, "throw", e);
          }
          a(void 0);
        });
      };
    }
    function Ya(e) {
      return qa.apply(this, arguments);
    }
    function qa() {
      return (qa = Ga(
        $.a.mark(function e(t) {
          var n;
          return $.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), za();
                case 2:
                  return (n = e.sent), (e.next = 5), n.get("schema", t);
                case 5:
                  return e.abrupt("return", e.sent);
                case 6:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function Qa(e, t) {
      return Ja.apply(this, arguments);
    }
    function Ja() {
      return (Ja = Ga(
        $.a.mark(function e(t, n) {
          var r;
          return $.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), za();
                case 2:
                  return (r = e.sent), (e.next = 5), r.put("schema", n, t);
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function za() {
      return (function (e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.blocked,
          i = n.upgrade,
          o = n.blocking,
          a = n.terminated,
          s = indexedDB.open(e, t),
          c = Pa(s);
        return (
          i &&
            s.addEventListener("upgradeneeded", function (e) {
              i(Pa(s.result), e.oldVersion, e.newVersion, Pa(s.transaction));
            }),
          r &&
            s.addEventListener("blocked", function () {
              return r();
            }),
          c
            .then(function (e) {
              a &&
                e.addEventListener("close", function () {
                  return a();
                }),
                o &&
                  e.addEventListener("versionchange", function () {
                    return o();
                  });
            })
            .catch(function () {}),
          c
        );
      })("bcp-schema", 1, {
        upgrade: function (e) {
          e.createObjectStore("document"), e.createObjectStore("schema");
        },
      });
    }
    function Ha(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Ka(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Ha(Object(n), !0).forEach(function (t) {
              Wa(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Ha(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Wa(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function Xa(e, t, n, r, i, o, a) {
      try {
        var s = e[o](a),
          c = s.value;
      } catch (u) {
        return void n(u);
      }
      s.done ? t(c) : Promise.resolve(c).then(r, i);
    }
    function $a(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (r, i) {
          var o = e.apply(t, n);
          function a(e) {
            Xa(o, r, i, a, s, "next", e);
          }
          function s(e) {
            Xa(o, r, i, a, s, "throw", e);
          }
          a(void 0);
        });
      };
    }
    ja = (function (e) {
      return wa(
        wa({}, e),
        {},
        {
          get: function (t, n, r) {
            return Va(t, n) || e.get(t, n, r);
          },
          has: function (t, n) {
            return !!Va(t, n) || e.has(t, n);
          },
        }
      );
    })(ja);
    var Za = {};
    function es(e) {
      return ts.apply(this, arguments);
    }
    function ts() {
      return (ts = $a(
        $.a.mark(function e(t) {
          var n, r, i;
          return $.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (((n = t.session.schemaEndpoint), !(r = Za[n]))) {
                    e.next = 4;
                    break;
                  }
                  return e.abrupt("return", r);
                case 4:
                  return (e.next = 6), Ya(n);
                case 6:
                  return (
                    (i = e.sent) && is(t, n, i.schema, i.hash),
                    e.abrupt("return", Za[n])
                  );
                case 9:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function ns(e, t) {
      return rs.apply(this, arguments);
    }
    function rs() {
      return (rs = $a(
        $.a.mark(function e(t, n) {
          var i, o, a;
          return $.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (i = t.session.schemaEndpoint), (e.next = 3), es(t);
                case 3:
                  if (
                    ((o = e.sent),
                    (a = Object(r.a)(JSON.stringify(n))),
                    o && o.hash === a)
                  ) {
                    e.next = 9;
                    break;
                  }
                  return (
                    is(t, i, n, a), (e.next = 9), Qa(i, { hash: a, schema: n })
                  );
                case 9:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function is(e, t, n, r) {
      var i = Ta(n);
      ls(e, {
        endpoint: t,
        exists: !0,
        hash: r,
        hasMutationType: !!i.getMutationType(),
        hasSubscriptionType: !!i.getSubscriptionType(),
      }),
        (Za = Ka(Ka({}, Za), {}, Wa({}, t, { hash: r, schema: i })));
    }
    function os(e, t, n, r, i, o, a) {
      try {
        var s = e[o](a),
          c = s.value;
      } catch (u) {
        return void n(u);
      }
      s.done ? t(c) : Promise.resolve(c).then(r, i);
    }
    function as(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (r, i) {
          var o = e.apply(t, n);
          function a(e) {
            os(o, r, i, a, s, "next", e);
          }
          function s(e) {
            os(o, r, i, a, s, "throw", e);
          }
          a(void 0);
        });
      };
    }
    var ss = {
      "GraphQL: Validation": "validation",
      "GraphQL: Deprecation": "deprecation",
      "GraphQL: Syntax": "syntax",
    };
    function cs() {
      iu(
        "auto-suggestions",
        (function () {
          var e = as(
            $.a.mark(function e(t, n) {
              var r, i, o, a, s, c, u, l;
              return $.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.id),
                        (i = t.payload),
                        (o = i.content),
                        (a = i.cursor),
                        (s = t.type),
                        (e.next = 3),
                        es(n)
                      );
                    case 3:
                      (c = e.sent),
                        (u = []),
                        c &&
                          ((l = mi(c.schema, o, a)),
                          (u = l.map(function (e) {
                            var t = e.label;
                            return {
                              label: t,
                              kind: e.kind,
                              detail: e.detail,
                              documentation: e.documentation,
                              insertText: t,
                            };
                          }))),
                        n.sendMessage(
                          new F.Message({ id: r, type: s, payload: u })
                        );
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })()
      ),
        iu(
          "diagnostics",
          (function () {
            var e = as(
              $.a.mark(function e(t, n) {
                var r, i, o, a, s, c;
                return $.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = t.id),
                          (i = t.payload),
                          (o = t.type),
                          (e.next = 3),
                          es(n)
                        );
                      case 3:
                        (a = e.sent),
                          (s = sa(i || "", a ? a.schema : void 0)),
                          (c = s.map(function (e) {
                            var t = e.message,
                              n = e.range,
                              r = e.severity,
                              i = e.source;
                            return {
                              message: t,
                              severity: r ? us(r) : 1,
                              source: i ? ss[i] : void 0,
                              startLineNumber: n.start.line + 1,
                              startColumn: n.start.character + 1,
                              endLineNumber: n.end.line + 1,
                              endColumn: n.end.character + 1,
                            };
                          })),
                          n.sendMessage(
                            new F.Message({ id: r, type: o, payload: c })
                          );
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })()
        ),
        iu(
          "hover-information",
          (function () {
            var e = as(
              $.a.mark(function e(t, n) {
                var r, i, o, a, s, c, u;
                return $.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = t.id),
                          (i = t.payload),
                          (o = i.content),
                          (a = i.cursor),
                          (s = t.type),
                          (e.next = 3),
                          es(n)
                        );
                      case 3:
                        (c = e.sent),
                          (u = void 0),
                          c && (u = da(c.schema, o, a)),
                          n.sendMessage(
                            new F.Message({ id: r, type: s, payload: u })
                          );
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })()
        );
    }
    function us(e) {
      return [8, 4, 2, 1][e - 1];
    }
    function ls(e, t) {
      e.sendMessage(new F.Message({ type: "schema-update", payload: t }));
    }
    var fs = n(20);
    function ps(e, t, n, r) {
      var i = r || e.session.documentId;
      e.sendMessage(
        new F.Message({
          type: "log",
          payload: {
            tabId: i,
            level: fs.LogLevel.error,
            message: t,
            details: n,
          },
        })
      );
    }
    function ds(e, t, n, r) {
      var i = r || e.session.documentId;
      e.sendMessage(
        new F.Message({
          type: "log",
          payload: {
            tabId: i,
            level: fs.LogLevel.info,
            message: t,
            details: n,
          },
        })
      );
    }
    var hs =
        ("undefined" !== typeof globalThis && globalThis) ||
        ("undefined" !== typeof self && self) ||
        ("undefined" !== typeof hs && hs),
      vs = "URLSearchParams" in hs,
      ys = "Symbol" in hs && "iterator" in Symbol,
      ms =
        "FileReader" in hs &&
        "Blob" in hs &&
        (function () {
          try {
            return new Blob(), !0;
          } catch (e) {
            return !1;
          }
        })(),
      gs = "FormData" in hs,
      bs = "ArrayBuffer" in hs;
    if (bs)
      var Es = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]",
        ],
        Ts =
          ArrayBuffer.isView ||
          function (e) {
            return e && Es.indexOf(Object.prototype.toString.call(e)) > -1;
          };
    function _s(e) {
      if (
        ("string" !== typeof e && (e = String(e)),
        /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e)
      )
        throw new TypeError("Invalid character in header field name");
      return e.toLowerCase();
    }
    function ws(e) {
      return "string" !== typeof e && (e = String(e)), e;
    }
    function Os(e) {
      var t = {
        next: function () {
          var t = e.shift();
          return { done: void 0 === t, value: t };
        },
      };
      return (
        ys &&
          (t[Symbol.iterator] = function () {
            return t;
          }),
        t
      );
    }
    function Ns(e) {
      (this.map = {}),
        e instanceof Ns
          ? e.forEach(function (e, t) {
              this.append(t, e);
            }, this)
          : Array.isArray(e)
          ? e.forEach(function (e) {
              this.append(e[0], e[1]);
            }, this)
          : e &&
            Object.getOwnPropertyNames(e).forEach(function (t) {
              this.append(t, e[t]);
            }, this);
    }
    function Ss(e) {
      if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
      e.bodyUsed = !0;
    }
    function Is(e) {
      return new Promise(function (t, n) {
        (e.onload = function () {
          t(e.result);
        }),
          (e.onerror = function () {
            n(e.error);
          });
      });
    }
    function ks(e) {
      var t = new FileReader(),
        n = Is(t);
      return t.readAsArrayBuffer(e), n;
    }
    function xs(e) {
      if (e.slice) return e.slice(0);
      var t = new Uint8Array(e.byteLength);
      return t.set(new Uint8Array(e)), t.buffer;
    }
    function As() {
      return (
        (this.bodyUsed = !1),
        (this._initBody = function (e) {
          var t;
          (this.bodyUsed = this.bodyUsed),
            (this._bodyInit = e),
            e
              ? "string" === typeof e
                ? (this._bodyText = e)
                : ms && Blob.prototype.isPrototypeOf(e)
                ? (this._bodyBlob = e)
                : gs && FormData.prototype.isPrototypeOf(e)
                ? (this._bodyFormData = e)
                : vs && URLSearchParams.prototype.isPrototypeOf(e)
                ? (this._bodyText = e.toString())
                : bs && ms && (t = e) && DataView.prototype.isPrototypeOf(t)
                ? ((this._bodyArrayBuffer = xs(e.buffer)),
                  (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                : bs && (ArrayBuffer.prototype.isPrototypeOf(e) || Ts(e))
                ? (this._bodyArrayBuffer = xs(e))
                : (this._bodyText = e = Object.prototype.toString.call(e))
              : (this._bodyText = ""),
            this.headers.get("content-type") ||
              ("string" === typeof e
                ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                : this._bodyBlob && this._bodyBlob.type
                ? this.headers.set("content-type", this._bodyBlob.type)
                : vs &&
                  URLSearchParams.prototype.isPrototypeOf(e) &&
                  this.headers.set(
                    "content-type",
                    "application/x-www-form-urlencoded;charset=UTF-8"
                  ));
        }),
        ms &&
          ((this.blob = function () {
            var e = Ss(this);
            if (e) return e;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]));
          }),
          (this.arrayBuffer = function () {
            if (this._bodyArrayBuffer) {
              var e = Ss(this);
              return (
                e ||
                (ArrayBuffer.isView(this._bodyArrayBuffer)
                  ? Promise.resolve(
                      this._bodyArrayBuffer.buffer.slice(
                        this._bodyArrayBuffer.byteOffset,
                        this._bodyArrayBuffer.byteOffset +
                          this._bodyArrayBuffer.byteLength
                      )
                    )
                  : Promise.resolve(this._bodyArrayBuffer))
              );
            }
            return this.blob().then(ks);
          })),
        (this.text = function () {
          var e = Ss(this);
          if (e) return e;
          if (this._bodyBlob)
            return (function (e) {
              var t = new FileReader(),
                n = Is(t);
              return t.readAsText(e), n;
            })(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(
              (function (e) {
                for (
                  var t = new Uint8Array(e), n = new Array(t.length), r = 0;
                  r < t.length;
                  r++
                )
                  n[r] = String.fromCharCode(t[r]);
                return n.join("");
              })(this._bodyArrayBuffer)
            );
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }),
        gs &&
          (this.formData = function () {
            return this.text().then(Rs);
          }),
        (this.json = function () {
          return this.text().then(JSON.parse);
        }),
        this
      );
    }
    (Ns.prototype.append = function (e, t) {
      (e = _s(e)), (t = ws(t));
      var n = this.map[e];
      this.map[e] = n ? n + ", " + t : t;
    }),
      (Ns.prototype.delete = function (e) {
        delete this.map[_s(e)];
      }),
      (Ns.prototype.get = function (e) {
        return (e = _s(e)), this.has(e) ? this.map[e] : null;
      }),
      (Ns.prototype.has = function (e) {
        return this.map.hasOwnProperty(_s(e));
      }),
      (Ns.prototype.set = function (e, t) {
        this.map[_s(e)] = ws(t);
      }),
      (Ns.prototype.forEach = function (e, t) {
        for (var n in this.map)
          this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
      }),
      (Ns.prototype.keys = function () {
        var e = [];
        return (
          this.forEach(function (t, n) {
            e.push(n);
          }),
          Os(e)
        );
      }),
      (Ns.prototype.values = function () {
        var e = [];
        return (
          this.forEach(function (t) {
            e.push(t);
          }),
          Os(e)
        );
      }),
      (Ns.prototype.entries = function () {
        var e = [];
        return (
          this.forEach(function (t, n) {
            e.push([n, t]);
          }),
          Os(e)
        );
      }),
      ys && (Ns.prototype[Symbol.iterator] = Ns.prototype.entries);
    var Ds = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
    function js(e, t) {
      if (!(this instanceof js))
        throw new TypeError(
          'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
        );
      var n = (t = t || {}).body;
      if (e instanceof js) {
        if (e.bodyUsed) throw new TypeError("Already read");
        (this.url = e.url),
          (this.credentials = e.credentials),
          t.headers || (this.headers = new Ns(e.headers)),
          (this.method = e.method),
          (this.mode = e.mode),
          (this.signal = e.signal),
          n || null == e._bodyInit || ((n = e._bodyInit), (e.bodyUsed = !0));
      } else this.url = String(e);
      if (
        ((this.credentials =
          t.credentials || this.credentials || "same-origin"),
        (!t.headers && this.headers) || (this.headers = new Ns(t.headers)),
        (this.method = (function (e) {
          var t = e.toUpperCase();
          return Ds.indexOf(t) > -1 ? t : e;
        })(t.method || this.method || "GET")),
        (this.mode = t.mode || this.mode || null),
        (this.signal = t.signal || this.signal),
        (this.referrer = null),
        ("GET" === this.method || "HEAD" === this.method) && n)
      )
        throw new TypeError("Body not allowed for GET or HEAD requests");
      if (
        (this._initBody(n),
        ("GET" === this.method || "HEAD" === this.method) &&
          ("no-store" === t.cache || "no-cache" === t.cache))
      ) {
        var r = /([?&])_=[^&]*/;
        if (r.test(this.url))
          this.url = this.url.replace(r, "$1_=" + new Date().getTime());
        else {
          this.url +=
            (/\?/.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
        }
      }
    }
    function Rs(e) {
      var t = new FormData();
      return (
        e
          .trim()
          .split("&")
          .forEach(function (e) {
            if (e) {
              var n = e.split("="),
                r = n.shift().replace(/\+/g, " "),
                i = n.join("=").replace(/\+/g, " ");
              t.append(decodeURIComponent(r), decodeURIComponent(i));
            }
          }),
        t
      );
    }
    function Ls(e) {
      var t = new Ns();
      return (
        e
          .replace(/\r?\n[\t ]+/g, " ")
          .split(/\r?\n/)
          .forEach(function (e) {
            var n = e.split(":"),
              r = n.shift().trim();
            if (r) {
              var i = n.join(":").trim();
              t.append(r, i);
            }
          }),
        t
      );
    }
    function Ps(e, t) {
      if (!(this instanceof Ps))
        throw new TypeError(
          'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
        );
      t || (t = {}),
        (this.type = "default"),
        (this.status = void 0 === t.status ? 200 : t.status),
        (this.ok = this.status >= 200 && this.status < 300),
        (this.statusText = "statusText" in t ? t.statusText : ""),
        (this.headers = new Ns(t.headers)),
        (this.url = t.url || ""),
        this._initBody(e);
    }
    (js.prototype.clone = function () {
      return new js(this, { body: this._bodyInit });
    }),
      As.call(js.prototype),
      As.call(Ps.prototype),
      (Ps.prototype.clone = function () {
        return new Ps(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new Ns(this.headers),
          url: this.url,
        });
      }),
      (Ps.error = function () {
        var e = new Ps(null, { status: 0, statusText: "" });
        return (e.type = "error"), e;
      });
    var Fs = [301, 302, 303, 307, 308];
    Ps.redirect = function (e, t) {
      if (-1 === Fs.indexOf(t)) throw new RangeError("Invalid status code");
      return new Ps(null, { status: t, headers: { location: e } });
    };
    var Cs = hs.DOMException;
    try {
      new Cs();
    } catch (ou) {
      ((Cs = function (e, t) {
        (this.message = e), (this.name = t);
        var n = Error(e);
        this.stack = n.stack;
      }).prototype = Object.create(Error.prototype)),
        (Cs.prototype.constructor = Cs);
    }
    function Ms(e, t) {
      return new Promise(function (n, r) {
        var i = new js(e, t);
        if (i.signal && i.signal.aborted)
          return r(new Cs("Aborted", "AbortError"));
        var o = new XMLHttpRequest();
        function a() {
          o.abort();
        }
        (o.onload = function () {
          var e = {
            status: o.status,
            statusText: o.statusText,
            headers: Ls(o.getAllResponseHeaders() || ""),
          };
          e.url =
            "responseURL" in o ? o.responseURL : e.headers.get("X-Request-URL");
          var t = "response" in o ? o.response : o.responseText;
          setTimeout(function () {
            n(new Ps(t, e));
          }, 0);
        }),
          (o.onerror = function () {
            setTimeout(function () {
              r(new TypeError("Network request failed"));
            }, 0);
          }),
          (o.ontimeout = function () {
            setTimeout(function () {
              r(new TypeError("Network request failed"));
            }, 0);
          }),
          (o.onabort = function () {
            setTimeout(function () {
              r(new Cs("Aborted", "AbortError"));
            }, 0);
          }),
          o.open(
            i.method,
            (function (e) {
              try {
                return "" === e && hs.location.href ? hs.location.href : e;
              } catch (t) {
                return e;
              }
            })(i.url),
            !0
          ),
          "include" === i.credentials
            ? (o.withCredentials = !0)
            : "omit" === i.credentials && (o.withCredentials = !1),
          "responseType" in o &&
            (ms
              ? (o.responseType = "blob")
              : bs &&
                i.headers.get("Content-Type") &&
                -1 !==
                  i.headers
                    .get("Content-Type")
                    .indexOf("application/octet-stream") &&
                (o.responseType = "arraybuffer")),
          !t || "object" !== typeof t.headers || t.headers instanceof Ns
            ? i.headers.forEach(function (e, t) {
                o.setRequestHeader(t, e);
              })
            : Object.getOwnPropertyNames(t.headers).forEach(function (e) {
                o.setRequestHeader(e, ws(t.headers[e]));
              }),
          i.signal &&
            (i.signal.addEventListener("abort", a),
            (o.onreadystatechange = function () {
              4 === o.readyState && i.signal.removeEventListener("abort", a);
            })),
          o.send("undefined" === typeof i._bodyInit ? null : i._bodyInit);
      });
    }
    function Us(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Vs(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Us(Object(n), !0).forEach(function (t) {
              Bs(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Us(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Bs(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function Gs(e, t, n, r, i, o, a) {
      try {
        var s = e[o](a),
          c = s.value;
      } catch (u) {
        return void n(u);
      }
      s.done ? t(c) : Promise.resolve(c).then(r, i);
    }
    function Ys(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (r, i) {
          var o = e.apply(t, n);
          function a(e) {
            Gs(o, r, i, a, s, "next", e);
          }
          function s(e) {
            Gs(o, r, i, a, s, "throw", e);
          }
          a(void 0);
        });
      };
    }
    (Ms.polyfill = !0),
      hs.fetch ||
        ((hs.fetch = Ms),
        (hs.Headers = Ns),
        (hs.Request = js),
        (hs.Response = Ps));
    var qs = {
      kind: "Document",
      definitions: [
        {
          kind: "OperationDefinition",
          operation: "query",
          name: { kind: "Name", value: "introspection_phase_1" },
          variableDefinitions: [],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [
              {
                kind: "Field",
                alias: { kind: "Name", value: "schema" },
                name: { kind: "Name", value: "__type" },
                arguments: [
                  {
                    kind: "Argument",
                    name: { kind: "Name", value: "name" },
                    value: {
                      kind: "StringValue",
                      value: "__Schema",
                      block: !1,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: "SelectionSet",
                  selections: [
                    {
                      kind: "Field",
                      name: { kind: "Name", value: "name" },
                      arguments: [],
                      directives: [],
                    },
                    {
                      kind: "Field",
                      name: { kind: "Name", value: "fields" },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                          {
                            kind: "Field",
                            name: { kind: "Name", value: "name" },
                            arguments: [],
                            directives: [],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Field",
                alias: { kind: "Name", value: "directive" },
                name: { kind: "Name", value: "__type" },
                arguments: [
                  {
                    kind: "Argument",
                    name: { kind: "Name", value: "name" },
                    value: {
                      kind: "StringValue",
                      value: "__Directive",
                      block: !1,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: "SelectionSet",
                  selections: [
                    {
                      kind: "Field",
                      name: { kind: "Name", value: "name" },
                      arguments: [],
                      directives: [],
                    },
                    {
                      kind: "Field",
                      name: { kind: "Name", value: "fields" },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                          {
                            kind: "Field",
                            name: { kind: "Name", value: "name" },
                            arguments: [],
                            directives: [],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
      loc: {
        start: 0,
        end: 199,
        source: {
          body:
            'query introspection_phase_1 {\n  schema: __type(name: "__Schema") {\n    name\n    fields {\n      name\n    }\n  }\n\n  directive: __type(name: "__Directive") {\n    name\n    fields {\n      name\n    }\n  }\n}\n',
          name: "GraphQL request",
          locationOffset: { line: 1, column: 1 },
        },
      },
    };
    function Qs(e, t) {
      return Js.apply(this, arguments);
    }
    function Js() {
      return (Js = Ys(
        $.a.mark(function e(t, n) {
          var r, i, o, a, s, c;
          return $.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), $s(t, n);
                case 2:
                  if ((r = e.sent).response instanceof Response) {
                    e.next = 5;
                    break;
                  }
                  return e.abrupt(
                    "return",
                    Vs(Vs({}, r), {}, { response: { error: r.response } })
                  );
                case 5:
                  return (e.next = 7), Zs(r.response);
                case 7:
                  if (((i = e.sent), (o = i.data), !(a = i.error))) {
                    e.next = 13;
                    break;
                  }
                  return (
                    (s = Hs(a, r.response)),
                    e.abrupt("return", Vs(Vs({}, r), {}, { response: s }))
                  );
                case 13:
                  return (
                    (c = zs(o, r.response)),
                    e.abrupt("return", Vs(Vs({}, r), {}, { response: c }))
                  );
                case 15:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function zs(e, t) {
      return {
        parsedBody: e,
        headers: Ks(t.headers),
        statusCode: t.status,
        statusText: t.statusText,
      };
    }
    function Hs(e, t) {
      return {
        error: e,
        headers: Ks(t.headers),
        statusCode: t.status,
        statusText: t.statusText,
      };
    }
    function Ks(e) {
      var t = Object.create(null);
      return (
        e.forEach(function (e, n) {
          t[n] = e;
        }),
        t
      );
    }
    function Ws(e) {
      return Xs.apply(this, arguments);
    }
    function Xs() {
      return (Xs = Ys(
        $.a.mark(function e(t) {
          var n, r, i, o, a, s;
          return $.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2),
                    $s(t, {
                      query: qs,
                      variables: {},
                      operationName: "introspection_phase_1",
                    })
                  );
                case 2:
                  if ((n = e.sent).response instanceof Response) {
                    e.next = 5;
                    break;
                  }
                  return e.abrupt("return", n.response);
                case 5:
                  return (e.next = 7), Zs(n.response);
                case 7:
                  if (!(r = e.sent).error) {
                    e.next = 10;
                    break;
                  }
                  return e.abrupt("return", r.error);
                case 10:
                  return (
                    (i = rc(r.data.data)),
                    (o = tc(i)),
                    (e.next = 14),
                    $s(t, {
                      query: o,
                      variables: {},
                      operationName: "introspection_phase_2",
                    })
                  );
                case 14:
                  if ((a = e.sent).response instanceof Response) {
                    e.next = 17;
                    break;
                  }
                  return e.abrupt("return", a.response);
                case 17:
                  return (e.next = 19), Zs(a.response);
                case 19:
                  if (!(s = e.sent).error) {
                    e.next = 22;
                    break;
                  }
                  return e.abrupt("return", s.error);
                case 22:
                  return e.abrupt("return", s.data.data);
                case 23:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function $s(e, t) {
      var n = e.credentials || "omit",
        r = t.extensions,
        i = t.operationName,
        o = t.variables,
        a = {
          cache: "no-cache",
          credentials: n,
          referrerPolicy: "no-referrer",
        };
      if (e.useGET) {
        var s = (function (e, t) {
          var n = [],
            r = function (e, t) {
              n.push("".concat(e, "=").concat(encodeURIComponent(t)));
            };
          t.query && r("query", Object(it.print)(t.query));
          t.operationName && r("operationName", t.operationName);
          t.variables && r("variables", JSON.stringify(t.variables));
          t.extensions && r("extensions", JSON.stringify(t.extensions));
          var i = "",
            o = e,
            a = e.indexOf("#");
          -1 !== a && ((i = e.substr(a)), (o = e.substr(0, a)));
          var s = -1 === o.indexOf("?") ? "?" : "&";
          return o + s + n.join("&") + i;
        })(e.uri, t);
        return self
          .fetch(s, Vs(Vs({}, a), {}, { method: "GET", headers: e.headers }))
          .catch(function (e) {
            return e instanceof TypeError
              ? ec("Server Not Reachable", e.message)
              : ec("Server Not Reachable");
          })
          .then(function (t) {
            return {
              request: {
                uri: s,
                method: "GET",
                credentials: e.credentials,
                cache: "no-cache",
                referrerPolicy: "no-referrer",
                headers: e.headers,
              },
              response: t,
            };
          });
      }
      var c = {
          extensions: r,
          operationName: i,
          query: Object(it.print)(t.query),
          variables: o,
        },
        u = JSON.stringify(c);
      return self
        .fetch(
          e.uri,
          Vs(
            Vs({}, a),
            {},
            {
              method: "POST",
              headers: Vs(
                Vs({}, e.headers),
                {},
                { "Content-Type": "application/json" }
              ),
              body: u,
            }
          )
        )
        .catch(function (e) {
          return e instanceof TypeError
            ? ec("Server Not Reachable", e.message)
            : ec("Server Not Reachable");
        })
        .then(function (t) {
          return {
            request: {
              uri: e.uri,
              method: "POST",
              credentials: e.credentials,
              cache: "no-cache",
              referrerPolicy: "no-referrer",
              headers: Vs(
                Vs({}, e.headers),
                {},
                { "Content-Type": "application/json" }
              ),
              body: c,
            },
            response: t,
          };
        });
    }
    function Zs(e) {
      return e
        .text()
        .then(function (t) {
          return e.status >= 300
            ? (function (e, t, n) {
                var r = new Error(n);
                return (
                  (r.name = "ServerError"),
                  (r.statusCode = e.status),
                  (r.statusText = e.statusText),
                  (r.bodyText = t),
                  r
                );
              })(
                e,
                t,
                "Response not successful: Received status code ".concat(
                  e.status
                )
              )
            : t;
        })
        .then(function (t) {
          if ("string" !== typeof t) return { error: t };
          try {
            return { data: JSON.parse(t) };
          } catch (n) {
            return {
              error: (function (e, t, n) {
                var r = t;
                return (
                  (r.name = "ServerParseError"),
                  (r.statusCode = e.status),
                  (r.statusText = e.statusText),
                  (r.bodyText = n),
                  r
                );
              })(e, n, t),
            };
          }
        });
    }
    function ec(e, t) {
      var n = new Error(e);
      return (n.name = "ServerNetworkError"), (n.statusText = t), n;
    }
    function tc(e) {
      var t = {
          kind: "Document",
          definitions: [
            {
              kind: "OperationDefinition",
              operation: "query",
              name: { kind: "Name", value: "introspection_phase_2" },
              variableDefinitions: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "__schema" },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "queryType" },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "name" },
                                arguments: [],
                                directives: [],
                              },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "mutationType" },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "name" },
                                arguments: [],
                                directives: [],
                              },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "subscriptionType" },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "name" },
                                arguments: [],
                                directives: [],
                              },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "types" },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              {
                                kind: "FragmentSpread",
                                name: { kind: "Name", value: "FullType" },
                                directives: [],
                              },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "directives" },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "name" },
                                arguments: [],
                                directives: [],
                              },
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "description" },
                                arguments: [],
                                directives: [],
                              },
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "args" },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                  kind: "SelectionSet",
                                  selections: [
                                    {
                                      kind: "FragmentSpread",
                                      name: {
                                        kind: "Name",
                                        value: "InputValue",
                                      },
                                      directives: [],
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
            {
              kind: "FragmentDefinition",
              name: { kind: "Name", value: "FullType" },
              typeCondition: {
                kind: "NamedType",
                name: { kind: "Name", value: "__Type" },
              },
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "kind" },
                    arguments: [],
                    directives: [],
                  },
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "name" },
                    arguments: [],
                    directives: [],
                  },
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "description" },
                    arguments: [],
                    directives: [],
                  },
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "fields" },
                    arguments: [
                      {
                        kind: "Argument",
                        name: { kind: "Name", value: "includeDeprecated" },
                        value: { kind: "BooleanValue", value: !0 },
                      },
                    ],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "name" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "description" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "args" },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              {
                                kind: "FragmentSpread",
                                name: { kind: "Name", value: "InputValue" },
                                directives: [],
                              },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "type" },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              {
                                kind: "FragmentSpread",
                                name: { kind: "Name", value: "TypeRef" },
                                directives: [],
                              },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "isDeprecated" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "deprecationReason" },
                          arguments: [],
                          directives: [],
                        },
                      ],
                    },
                  },
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "inputFields" },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "FragmentSpread",
                          name: { kind: "Name", value: "InputValue" },
                          directives: [],
                        },
                      ],
                    },
                  },
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "interfaces" },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "FragmentSpread",
                          name: { kind: "Name", value: "TypeRef" },
                          directives: [],
                        },
                      ],
                    },
                  },
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "enumValues" },
                    arguments: [
                      {
                        kind: "Argument",
                        name: { kind: "Name", value: "includeDeprecated" },
                        value: { kind: "BooleanValue", value: !0 },
                      },
                    ],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "name" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "description" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "isDeprecated" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "deprecationReason" },
                          arguments: [],
                          directives: [],
                        },
                      ],
                    },
                  },
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "possibleTypes" },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "FragmentSpread",
                          name: { kind: "Name", value: "TypeRef" },
                          directives: [],
                        },
                      ],
                    },
                  },
                ],
              },
            },
            {
              kind: "FragmentDefinition",
              name: { kind: "Name", value: "InputValue" },
              typeCondition: {
                kind: "NamedType",
                name: { kind: "Name", value: "__InputValue" },
              },
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "name" },
                    arguments: [],
                    directives: [],
                  },
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "description" },
                    arguments: [],
                    directives: [],
                  },
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "type" },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "FragmentSpread",
                          name: { kind: "Name", value: "TypeRef" },
                          directives: [],
                        },
                      ],
                    },
                  },
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "defaultValue" },
                    arguments: [],
                    directives: [],
                  },
                ],
              },
            },
            {
              kind: "FragmentDefinition",
              name: { kind: "Name", value: "TypeRef" },
              typeCondition: {
                kind: "NamedType",
                name: { kind: "Name", value: "__Type" },
              },
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "kind" },
                    arguments: [],
                    directives: [],
                  },
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "name" },
                    arguments: [],
                    directives: [],
                  },
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "ofType" },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "kind" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "name" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "ofType" },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "kind" },
                                arguments: [],
                                directives: [],
                              },
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "name" },
                                arguments: [],
                                directives: [],
                              },
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "ofType" },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                  kind: "SelectionSet",
                                  selections: [
                                    {
                                      kind: "Field",
                                      name: { kind: "Name", value: "kind" },
                                      arguments: [],
                                      directives: [],
                                    },
                                    {
                                      kind: "Field",
                                      name: { kind: "Name", value: "name" },
                                      arguments: [],
                                      directives: [],
                                    },
                                    {
                                      kind: "Field",
                                      name: { kind: "Name", value: "ofType" },
                                      arguments: [],
                                      directives: [],
                                      selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                          {
                                            kind: "Field",
                                            name: {
                                              kind: "Name",
                                              value: "kind",
                                            },
                                            arguments: [],
                                            directives: [],
                                          },
                                          {
                                            kind: "Field",
                                            name: {
                                              kind: "Name",
                                              value: "name",
                                            },
                                            arguments: [],
                                            directives: [],
                                          },
                                          {
                                            kind: "Field",
                                            name: {
                                              kind: "Name",
                                              value: "ofType",
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                              kind: "SelectionSet",
                                              selections: [
                                                {
                                                  kind: "Field",
                                                  name: {
                                                    kind: "Name",
                                                    value: "kind",
                                                  },
                                                  arguments: [],
                                                  directives: [],
                                                },
                                                {
                                                  kind: "Field",
                                                  name: {
                                                    kind: "Name",
                                                    value: "name",
                                                  },
                                                  arguments: [],
                                                  directives: [],
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
          loc: {
            start: 0,
            end: 1138,
            source: {
              body:
                "query introspection_phase_2 {\n  __schema {\n    queryType {\n      name\n    }\n    mutationType {\n      name\n    }\n    subscriptionType {\n      name\n    }\n    types {\n      ...FullType\n    }\n    directives {\n      name\n      description\n      args {\n        ...InputValue\n      }\n    }\n  }\n}\n\nfragment FullType on __Type {\n  kind\n  name\n  description\n  fields(includeDeprecated: true) {\n    name\n    description\n    args {\n      ...InputValue\n    }\n    type {\n      ...TypeRef\n    }\n    isDeprecated\n    deprecationReason\n  }\n  inputFields {\n    ...InputValue\n  }\n  interfaces {\n    ...TypeRef\n  }\n  enumValues(includeDeprecated: true) {\n    name\n    description\n    isDeprecated\n    deprecationReason\n  }\n  possibleTypes {\n    ...TypeRef\n  }\n}\n\nfragment InputValue on __InputValue {\n  name\n  description\n  type {\n    ...TypeRef\n  }\n  defaultValue\n}\n\nfragment TypeRef on __Type {\n  kind\n  name\n  ofType {\n    kind\n    name\n    ofType {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n          }\n        }\n      }\n    }\n  }\n}\n",
              name: "GraphQL request",
              locationOffset: { line: 1, column: 1 },
            },
          },
        },
        n = t.definitions
          .find(function (e) {
            return "OperationDefinition" === e.kind;
          })
          .selectionSet.selections.find(function (e) {
            return "Field" === e.kind;
          });
      return (
        (function (e, t) {
          var n = [];
          e.selectionSet.selections.forEach(function (e) {
            return n.push(e);
          }),
            t.isRepeatable && n.push(nc("isRepeatable"));
          t.locations
            ? n.push(nc("locations"))
            : (n.push(nc("onField")),
              n.push(nc("onFragment")),
              n.push(nc("onOperation")));
          e.selectionSet.selections = n;
        })(
          n.selectionSet.selections.find(function (e) {
            return "Field" === e.kind && "directives" === e.name.value;
          }),
          e
        ),
        (function (e, t) {
          if (!t.subscription) {
            var n = [];
            e.selectionSet.selections.forEach(function (e) {
              ("Field" === e.kind && "subscriptionType" === e.name.value) ||
                n.push(e);
            }),
              (e.selectionSet.selections = n);
          }
        })(n, e),
        t
      );
    }
    function nc(e) {
      return {
        kind: "Field",
        name: { kind: "Name", value: e },
        directives: [],
        arguments: [],
      };
    }
    function rc(e) {
      var t = e.directive;
      return {
        isRepeatable: !!t.fields.find(function (e) {
          return "isRepeatable" === e.name;
        }),
        locations: !!t.fields.find(function (e) {
          return "locations" === e.name;
        }),
        subscription: !!e.schema.fields.find(function (e) {
          return "subscriptionType" === e.name;
        }),
      };
    }
    function ic(e, t, n, r, i) {
      e.sendMessage(
        new F.Message({
          type: "new-history-item",
          payload: {
            documentId: t,
            operationFailed: n,
            operationName: i,
            operationType: r,
          },
        })
      );
    }
    function oc(e, t, n) {
      e.sendMessage(
        new F.Message({
          type: "new-result",
          payload: { documentId: t, result: n },
        })
      );
    }
    function ac(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function sc(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ac(Object(n), !0).forEach(function (t) {
              cc(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ac(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function cc(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var uc = {};
    function lc() {
      iu("variables-cache-delete-item", function (e) {
        !(function (e) {
          uc = sc(sc({}, uc), {}, cc({}, e, void 0));
        })(e.payload.documentId);
      }),
        iu("variables-cache-set-item", function (e) {
          var t = e.payload;
          !(function (e, t) {
            uc = sc(sc({}, uc), {}, cc({}, e, t));
          })(t.documentId, t.variables);
        });
    }
    function fc(e) {
      return uc[e];
    }
    function pc(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function dc(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? pc(Object(n), !0).forEach(function (t) {
              yc(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : pc(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function hc(e, t, n, r, i, o, a) {
      try {
        var s = e[o](a),
          c = s.value;
      } catch (u) {
        return void n(u);
      }
      s.done ? t(c) : Promise.resolve(c).then(r, i);
    }
    function vc(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function yc(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var mc = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            yc(this, "runningOperations", {});
        }
        var t, n, i;
        return (
          (t = e),
          (n = [
            {
              key: "isExecuting",
              value: function (e) {
                return !!this.runningOperations[e.session.documentId];
              },
            },
            {
              key: "cancel",
              value: function (e) {
                var t = e.session.documentId,
                  n = this.runningOperations[t];
                n &&
                  (this.stop(e, t),
                  ds(
                    e,
                    n.operationName
                      ? "Cancelled "
                          .concat(n.operationType, ' operation "')
                          .concat(n.operationName, '".')
                      : "Cancelled ".concat(n.operationType, " operation.")
                  ));
              },
            },
            {
              key: "execute",
              value: function (e, t, n) {
                var r = e.session;
                if (
                  !this.runningOperations[r.documentId] &&
                  r &&
                  r.schemaEndpoint.length > 0
                ) {
                  var i = r.documentId,
                    o = we(i) || {};
                  this.executeCore(
                    e,
                    {
                      documentId: i,
                      httpOptions: {
                        headers: o,
                        uri: r.schemaEndpoint,
                        useGET: "GET" === r.httpMethod,
                        credentials: r.credentials,
                      },
                      operationName: n,
                    },
                    t
                  );
                }
              },
            },
            {
              key: "executeCore",
              value: (function () {
                var e,
                  t =
                    ((e = $.a.mark(function e(t, n, i) {
                      var o, a, s, c, u, l, f, p, d, h, v, y, m, g, b;
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((o = n.httpOptions),
                                  (a = n.documentId),
                                  (s = n.operationName),
                                  !(c = de(a)))
                                ) {
                                  e.next = 20;
                                  break;
                                }
                                return (
                                  (u = Object(r.e)()),
                                  (l = fc(a) || {}),
                                  (this.runningOperations = dc(
                                    dc({}, this.runningOperations),
                                    {},
                                    yc({}, a, {
                                      operationName: s,
                                      operationType: i,
                                    })
                                  )),
                                  t.sendMessage(
                                    new F.Message({
                                      type: "operation-execution",
                                      payload: {
                                        documentId: a,
                                        isExecuting: !0,
                                        isSubscription: !1,
                                      },
                                    })
                                  ),
                                  ds(
                                    t,
                                    s
                                      ? "Starting "
                                          .concat(i, ' operation "')
                                          .concat(s, '".')
                                      : "Starting ".concat(i, " operation."),
                                    void 0,
                                    a
                                  ),
                                  (e.next = 10),
                                  Qs(o, {
                                    operationName: s,
                                    query: c,
                                    variables: l,
                                  })
                                );
                              case 10:
                                (f = e.sent),
                                  (p = Object(r.e)()),
                                  (d = f.response),
                                  (h = d.parsedBody),
                                  (v = d.error),
                                  (y =
                                    !!v ||
                                    (h.errors && h.errors.length > 0) ||
                                    !1),
                                  ic(t, a, y, i, s),
                                  oc(t, a, {
                                    payload: f,
                                    duration: Object(r.c)(u, p),
                                    operationName: s,
                                    operationType: i,
                                    success: !y,
                                    timestamp: u,
                                  }),
                                  (m = "query" === i ? "Query" : "Mutation"),
                                  (g = s ? '"'.concat(s, '" ') : ""),
                                  (b = "".concat(m, " operation ").concat(g)),
                                  y
                                    ? ps(
                                        t,
                                        "".concat(b, " failed."),
                                        v || h.errors,
                                        a
                                      )
                                    : ds(
                                        t,
                                        "".concat(b, " succeeded."),
                                        void 0,
                                        a
                                      );
                              case 20:
                                this.stop(t, a);
                              case 21:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })),
                    function () {
                      var t = this,
                        n = arguments;
                      return new Promise(function (r, i) {
                        var o = e.apply(t, n);
                        function a(e) {
                          hc(o, r, i, a, s, "next", e);
                        }
                        function s(e) {
                          hc(o, r, i, a, s, "throw", e);
                        }
                        a(void 0);
                      });
                    });
                return function (e, n, r) {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "stop",
              value: function (e, t) {
                (this.runningOperations = dc(
                  dc({}, this.runningOperations),
                  {},
                  yc({}, t, void 0)
                )),
                  e.sendMessage(
                    new F.Message({
                      type: "operation-execution",
                      payload: {
                        documentId: t,
                        isExecuting: !1,
                        isSubscription: !1,
                      },
                    })
                  );
              },
            },
          ]) && vc(t.prototype, n),
          i && vc(t, i),
          e
        );
      })(),
      gc = n(62);
    function bc(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Ec(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? bc(Object(n), !0).forEach(function (t) {
              _c(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : bc(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Tc(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function _c(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var wc = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            _c(this, "runningSubscriptions", {});
        }
        var t, n, i;
        return (
          (t = e),
          (i = [
            {
              key: "getSchemaEndpoint",
              value: function (e) {
                return !e.subscriptionEndpoint && e.schemaEndpoint
                  ? e.schemaEndpoint.replace(/^http/i, "ws")
                  : e.subscriptionEndpoint || "";
              },
            },
          ]),
          (n = [
            {
              key: "isExecuting",
              value: function (e) {
                return !!this.runningSubscriptions[e.session.documentId];
              },
            },
            {
              key: "cancel",
              value: function (e) {
                var t = e.session;
                if (t) {
                  var n = this.runningSubscriptions[t.documentId];
                  if (n) {
                    var r = n.operationName,
                      i = n.unsubscribe;
                    ds(
                      e,
                      r
                        ? 'Cancelled subscription operation "'.concat(r, '".')
                        : "Cancelled subscription operation.",
                      void 0,
                      t.documentId
                    ),
                      i(),
                      (this.runningSubscriptions = Ec(
                        Ec({}, this.runningSubscriptions),
                        {},
                        _c({}, t.documentId, void 0)
                      )),
                      e.sendMessage(
                        new F.Message({
                          type: "operation-execution",
                          payload: {
                            documentId: t.documentId,
                            isExecuting: !1,
                            isSubscription: !0,
                          },
                        })
                      );
                  }
                }
              },
            },
            {
              key: "execute",
              value: function (t, n, r) {
                var i = t.session;
                if (i && !this.runningSubscriptions[i.documentId]) {
                  var o = we(i.documentId) || {},
                    a = e.getSchemaEndpoint(i);
                  a.length &&
                    this.executeCore(
                      t,
                      {
                        documentId: i.documentId,
                        httpOptions: {
                          headers: o,
                          uri: a,
                          useGET: "GET" === i.httpMethod,
                          credentials: i.credentials,
                        },
                        operationName: r,
                      },
                      n
                    );
                }
              },
            },
            {
              key: "executeCore",
              value: function (e, t, n) {
                var i = this,
                  o = t.documentId,
                  a = t.httpOptions,
                  s = t.operationName,
                  c = de(o);
                if (c) {
                  ds(
                    e,
                    s
                      ? 'Subscribing to subscription "'.concat(s, '".')
                      : "Subscribing to subscription.",
                    void 0,
                    o
                  );
                  var u = fc(o) || {},
                    l = new gc.SubscriptionClient(a.uri, { lazy: !0 });
                  l.onConnected(function () {
                    (i.runningSubscriptions = Ec(
                      Ec({}, i.runningSubscriptions),
                      {},
                      _c({}, o, f)
                    )),
                      e.sendMessage(
                        new F.Message({
                          type: "operation-execution",
                          payload: {
                            documentId: o,
                            isExecuting: !0,
                            isSubscription: !0,
                          },
                        })
                      ),
                      ic(e, o, !1, n, s);
                  }),
                    l.onError(function (t) {
                      ps(
                        e,
                        s
                          ? 'Subscribing to subscription "'.concat(
                              s,
                              '" failed.'
                            )
                          : "Subscribing to subscription failed.",
                        t,
                        o
                      ),
                        ic(e, o, !0, n, s);
                    });
                  var f = l
                    .request({ operationName: s, query: c, variables: u })
                    .subscribe({
                      next: function (t) {
                        var i = (t && t.errors && t.errors.length > 0) || !1;
                        i
                          ? ps(
                              e,
                              "New subscription result arrived.",
                              t.errors,
                              o
                            )
                          : ds(
                              e,
                              "New subscription result arrived.",
                              void 0,
                              o
                            ),
                          oc(e, o, {
                            payload: { raw: t },
                            duration: 0,
                            operationName: s,
                            operationType: n,
                            success: !i,
                            timestamp: Object(r.e)(),
                          });
                      },
                      error: function (t) {
                        ps(
                          e,
                          "A subscription result ended up in an error.",
                          t,
                          o
                        ),
                          oc(e, o, {
                            payload: { error: t },
                            duration: 0,
                            operationName: s,
                            operationType: n,
                            success: !1,
                            timestamp: Object(r.e)(),
                          });
                      },
                      complete: function () {
                        ds(
                          e,
                          s
                            ? 'Unsubscribing from subscription "'.concat(
                                s,
                                '".'
                              )
                            : "Unsubscribing from subscription.",
                          void 0,
                          o
                        );
                      },
                    });
                }
              },
            },
          ]) && Tc(t.prototype, n),
          i && Tc(t, i),
          e
        );
      })(),
      Oc = new mc(),
      Nc = new wc(),
      Sc = new Map([
        ["query", Oc],
        ["mutation", Oc],
        ["subscription", Nc],
      ]);
    function Ic() {
      iu("cancel-operation-execution", function (e, t) {
        !(function (e) {
          Oc.isExecuting(e) && Oc.cancel(e), Nc.isExecuting(e) && Nc.cancel(e);
        })(t);
      }),
        iu("begin-operation-execution", function (e, t) {
          !(function (e, t) {
            if (!Oc.isExecuting(e) && !Nc.isExecuting(e)) {
              var n = de(e.session.documentId);
              if (n) {
                var r = (function (e, t) {
                    var n = e.definitions
                        .map(function (e) {
                          return e;
                        })
                        .filter(function (e) {
                          return !!e;
                        }),
                      r =
                        1 === n.length
                          ? n[0]
                          : n.find(function (e) {
                              return (e.name && e.name.value === t) || !1;
                            });
                    return r ? r.operation : "query";
                  })(n, t),
                  i = Sc.get(r);
                i && i.execute(e, r, t);
              }
            }
          })(t, e.payload.operationName);
        });
    }
    function kc(e, t, n, r, i, o, a) {
      try {
        var s = e[o](a),
          c = s.value;
      } catch (u) {
        return void n(u);
      }
      s.done ? t(c) : Promise.resolve(c).then(r, i);
    }
    function xc(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (r, i) {
          var o = e.apply(t, n);
          function a(e) {
            kc(o, r, i, a, s, "next", e);
          }
          function s(e) {
            kc(o, r, i, a, s, "throw", e);
          }
          a(void 0);
        });
      };
    }
    function Ac() {
      iu(
        "fetch-schema-field-type",
        (function () {
          var e = xc(
            $.a.mark(function e(t, n) {
              var r, i, o, a, s;
              return $.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.id),
                        (i = t.payload),
                        (o = t.type),
                        (e.next = 3),
                        es(n)
                      );
                    case 3:
                      (a = e.sent),
                        (s = void 0),
                        a && (s = Dc(a.schema, i.typeName, i.fieldName)),
                        n.sendMessage(
                          new F.Message({ id: r, type: o, payload: s })
                        );
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })()
      ),
        iu(
          "fetch-schema-field-types",
          (function () {
            var e = xc(
              $.a.mark(function e(t, n) {
                var r, i, o, a, s;
                return $.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = t.id),
                          (i = t.payload),
                          (o = t.type),
                          (e.next = 3),
                          es(n)
                        );
                      case 3:
                        (a = e.sent),
                          (s = void 0),
                          a && (s = jc(a.schema, i)),
                          n.sendMessage(
                            new F.Message({ id: r, type: o, payload: s })
                          );
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })()
        ),
        iu(
          "fetch-schema-type",
          (function () {
            var e = xc(
              $.a.mark(function e(t, n) {
                var r, i, o, a, s;
                return $.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = t.id),
                          (i = t.payload),
                          (o = t.type),
                          (e.next = 3),
                          es(n)
                        );
                      case 3:
                        (a = e.sent),
                          (s = void 0),
                          a && (s = Lc(a.schema, i)),
                          n.sendMessage(
                            new F.Message({ id: r, type: o, payload: s })
                          );
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })()
        ),
        iu(
          "fetch-schema-types",
          (function () {
            var e = xc(
              $.a.mark(function e(t, n) {
                var r, i, o, a;
                return $.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (r = t.id), (i = t.type), (e.next = 3), es(n);
                      case 3:
                        (o = e.sent),
                          (a = void 0),
                          o && (a = Rc(o.schema)),
                          n.sendMessage(
                            new F.Message({ id: r, type: i, payload: a })
                          );
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })()
        );
    }
    function Dc(e, t, n) {
      var r = e.getType(t);
      if (r)
        return (function (e, t, n) {
          if (t instanceof qt) {
            var r = t.getFields()[n];
            if (r)
              return {
                id: "".concat(t.name, "-").concat(r.name),
                name: r.name,
                kind: "field",
                description: r.description || void 0,
                valueType: Cc(e, r.type),
                defaultValue: r.defaultValue,
              };
          } else if (t instanceof Ut || t instanceof jt) {
            var i = t.getFields()[n];
            if (i) {
              var o =
                0 === i.args.length
                  ? void 0
                  : i.args.map(function (n) {
                      var r = Cc(e, n.type);
                      return {
                        id: ""
                          .concat(t.name, "-")
                          .concat(i.name, "-")
                          .concat(n.name),
                        name: n.name,
                        kind: "argument",
                        description: n.description || void 0,
                        defaultValue: n.defaultValue || void 0,
                        type: r,
                      };
                    });
              return {
                id: "".concat(t.name, "-").concat(i.name),
                name: i.name,
                kind: "field",
                description: i.description || void 0,
                arguments: o,
                valueType: Cc(e, i.type),
                isDeprecated: i.isDeprecated,
                deprecationReason: i.deprecationReason || void 0,
              };
            }
          }
          return;
        })(e, r, n);
    }
    function jc(e, t) {
      var n = e.getType(t);
      if (n)
        return (function (e, t) {
          var n = [];
          if (t instanceof qt) {
            var r = t.getFields();
            for (var i in r) {
              var o = r[i];
              n.push({
                id: "".concat(t.name, "-").concat(o.name),
                name: o.name,
                kind: "field",
                description: o.description || void 0,
                valueType: Cc(e, o.type),
                defaultValue: o.defaultValue,
              });
            }
          } else if (t instanceof Ut || t instanceof jt) {
            var a = t.getFields(),
              s = function (r) {
                var i = a[r],
                  o =
                    0 === i.args.length
                      ? void 0
                      : i.args.map(function (n) {
                          var r = Cc(e, n.type);
                          return {
                            id: ""
                              .concat(t.name, "-")
                              .concat(i.name, "-")
                              .concat(n.name),
                            name: n.name,
                            kind: "argument",
                            description: n.description || void 0,
                            defaultValue: n.defaultValue || void 0,
                            type: r,
                          };
                        });
                n.push({
                  id: "".concat(t.name, "-").concat(i.name),
                  name: i.name,
                  kind: "field",
                  description: i.description || void 0,
                  arguments: o,
                  valueType: Cc(e, i.type),
                  isDeprecated: i.isDeprecated,
                  deprecationReason: i.deprecationReason || void 0,
                });
              };
            for (var c in a) s(c);
          }
          return n;
        })(e, n);
    }
    function Rc(e) {
      var t = [],
        n = e.getQueryType(),
        r = e.getMutationType(),
        i = e.getSubscriptionType();
      return (
        n && t.push(Fc(e, n)),
        r && t.push(Fc(e, r)),
        i && t.push(Fc(e, i)),
        0 === t.length ? void 0 : t
      );
    }
    function Lc(e, t) {
      var n = e.getType(t);
      if (n) return Fc(e, n);
    }
    function Pc(e) {
      return e instanceof Gt
        ? "enum"
        : e instanceof qt
        ? "input-object"
        : e instanceof Ut
        ? "interface"
        : e instanceof Dt
        ? "scalar"
        : e instanceof Vt
        ? "union"
        : e instanceof _t || e instanceof wt
        ? Pc(e.ofType)
        : "object";
    }
    function Fc(e, t) {
      var n, r, i;
      return (
        t instanceof Gt &&
          (n = t.getValues().map(function (e) {
            return {
              id: "".concat(t.name, "-").concat(e.name),
              name: e.name,
              kind: "enum-value",
              description: e.description || void 0,
              value: e.value,
              isDeprecated: e.isDeprecated,
              deprecationReason: e.deprecationReason || void 0,
            };
          })),
        t instanceof Ut &&
          (i = e.getPossibleTypes(t).map(function (t) {
            return Cc(e, t);
          })),
        t instanceof jt &&
          (r = t.getInterfaces().map(function (e) {
            return {
              id: e.name,
              name: e.name,
              kind: "type",
              description: e.description || void 0,
              typeKind: "interface",
            };
          })),
        t instanceof Vt &&
          (i = t.getTypes().map(function (t) {
            return Cc(e, t);
          })),
        {
          id: t.name,
          name: t.name,
          kind: "type",
          description: t.description || void 0,
          typeKind: Pc(t),
          enumValues: n,
          interfaces: r,
          types: i,
        }
      );
    }
    function Cc(e, t) {
      var n,
        r = !1,
        i = !0;
      return (
        t instanceof wt
          ? ((i = !1),
            t.ofType instanceof _t
              ? ((n = t.ofType.ofType), (r = !0))
              : (n = t.ofType))
          : t instanceof _t
          ? ((n = t.ofType), (r = !0))
          : (n = t),
        {
          kind: "value-type",
          isList: r,
          isOptional: i,
          type: n instanceof _t || n instanceof wt ? Cc(e, n) : Fc(e, n),
        }
      );
    }
    function Mc(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Uc(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Mc(Object(n), !0).forEach(function (t) {
              Vc(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Mc(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Vc(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function Bc(e, t, n, r, i, o, a) {
      try {
        var s = e[o](a),
          c = s.value;
      } catch (u) {
        return void n(u);
      }
      s.done ? t(c) : Promise.resolve(c).then(r, i);
    }
    function Gc(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (r, i) {
          var o = e.apply(t, n);
          function a(e) {
            Bc(o, r, i, a, s, "next", e);
          }
          function s(e) {
            Bc(o, r, i, a, s, "throw", e);
          }
          a(void 0);
        });
      };
    }
    var Yc = new Map();
    function qc() {
      iu("cancel-schema-fetching", function (e, t) {
        !(function (e) {
          var t = Yc.get(e.id);
          (null === t || void 0 === t ? void 0 : t.running) &&
            (t.backoff &&
              ds(e, "Cancelled schema fetching.", void 0, t.currentId),
            t.timeout &&
              ds(e, "Cancelled schema polling.", void 0, t.currentId),
            eu(e));
        })(t);
      }),
        iu("fetch-schema", function (e, t) {
          !(function (e) {
            Qc.apply(this, arguments);
          })(t);
        }),
        iu("refetch-schema", function (e, t) {
          !(function (e) {
            if (!Hc(e.id).running) {
              var t = e.session;
              if (t.schemaEndpoint.length > 0 && !t.enableSchemaPolling) {
                var n = {
                  headers: we(t.documentId) || {},
                  uri: t.schemaEndpoint,
                  useGETForQueries: "GET" === t.httpMethod,
                  credentials: t.credentials,
                };
                Xc(e.id, { running: !0 }), ds(e, "Reload schema."), $c(e, n);
              }
            }
          })(t);
        });
    }
    function Qc() {
      return (Qc = Gc(
        $.a.mark(function e(t) {
          var n, r, i, o;
          return $.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (Hc(t.id).running) {
                    e.next = 14;
                    break;
                  }
                  if (!((n = t.session).schemaEndpoint.length > 0)) {
                    e.next = 13;
                    break;
                  }
                  return (
                    (r = we(n.documentId) || {}),
                    (i = {
                      headers: r,
                      uri: n.schemaEndpoint,
                      useGETForQueries: "GET" === n.httpMethod,
                      credentials: n.credentials,
                    }),
                    (e.next = 8),
                    es(t)
                  );
                case 8:
                  (o = e.sent) &&
                    (ls(t, {
                      endpoint: n.schemaEndpoint,
                      exists: !0,
                      hash: o.hash,
                      hasMutationType: !!o.schema.getMutationType(),
                      hasSubscriptionType: !!o.schema.getSubscriptionType(),
                    }),
                    ds(t, "Fetched schema from cache.")),
                    n.enableSchemaPolling
                      ? (Xc(t.id, { running: !0 }),
                        ds(t, "Started schema polling."),
                        Zc(t, i, n.schemaPollingInterval || 2e4))
                      : o ||
                        (Xc(t.id, { running: !0 }),
                        ds(t, "Started schema fetching."),
                        $c(t, i)),
                    (e.next = 14);
                  break;
                case 13:
                  ls(t, {
                    endpoint: n.schemaEndpoint,
                    exists: !1,
                    hasMutationType: !1,
                    hasSubscriptionType: !1,
                  });
                case 14:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function Jc(e, t, n, r) {
      return zc.apply(this, arguments);
    }
    function zc() {
      return (zc = Gc(
        $.a.mark(function e(t, n, r, i) {
          var o, a;
          return $.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (o = n.currentRequestId), (e.next = 3), Ws(i);
                case 3:
                  if (((a = e.sent), r !== o)) {
                    e.next = 14;
                    break;
                  }
                  if (!Kc(a)) {
                    e.next = 11;
                    break;
                  }
                  return (e.next = 8), ns(t, a);
                case 8:
                  ds(t, "Fetched schema successfully."), (e.next = 14);
                  break;
                case 11:
                  return (
                    ls(t, {
                      endpoint: i.uri,
                      exists: !1,
                      hasMutationType: !1,
                      hasSubscriptionType: !1,
                    }),
                    ps(t, "Fetching schema failed.", a),
                    e.abrupt("return", !1)
                  );
                case 14:
                  return e.abrupt("return", !0);
                case 15:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function Hc(e) {
      return Yc.get(e) || { fetching: !1, running: !1 };
    }
    function Kc(e) {
      return "__schema" in e;
    }
    function Wc(e, t) {
      e.sendMessage(new F.Message({ type: "is-schema-fetching", payload: t }));
    }
    function Xc(e, t) {
      var n = Uc(Uc({}, Hc(e)), t);
      return Yc.set(e, n), n;
    }
    function $c(e, t) {
      var n = e.id,
        i = e.session.documentId,
        o = Object(r.b)(),
        a = new re(function (r) {
          var i = Hc(n);
          return (
            r > 0
              ? ds(e, "Retry schema fetching.")
              : ((i = Xc(n, { fetching: !0 })), Wc(e, i.fetching)),
            Jc(e, i, o, t)
          );
        });
      Xc(n, { backoff: a, currentId: i, currentRequestId: o }),
        a.start(function () {
          var t = Hc(n);
          o === t.currentRequestId && eu(e);
        });
    }
    function Zc(e, t, n) {
      var i = Object(r.b)(),
        o = Xc(e.id, {
          currentId: e.session.documentId,
          currentRequestId: i,
          timeout: window.setTimeout(function () {
            Zc(e, t, n);
          }, n),
        });
      Jc(e, o, i, t);
    }
    function eu(e) {
      var t = Hc(e.id);
      t.backoff && t.backoff.stop(),
        t.timeout && window.clearTimeout(t.timeout),
        Wc(
          e,
          (t = Xc(e.id, {
            backoff: void 0,
            currentId: void 0,
            currentRequestId: void 0,
            fetching: !1,
            running: !1,
            timeout: void 0,
          })).fetching
        );
    }
    var tu = [],
      nu = [];
    function ru(e) {
      var t = new me(e);
      tu.push(t),
        fe(),
        _e(),
        lc(),
        cs(),
        Ac(),
        Ic(),
        qc(),
        (e.onmessage = function (e) {
          var n = e.data;
          !(function (e, t) {
            nu.filter(function (e) {
              return e.type === t.type;
            }).forEach(function (n) {
              return (0, n.handle)(t, e);
            });
          })(t, n);
        }),
        e.start();
    }
    function iu(e, t) {
      nu.push({ type: e, handle: t });
    }
    self.onconnect = function (e) {
      return ru(e.ports[0]);
    };
  },
]);
//# sourceMappingURL=schema.worker.js.map
