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
    n((n.s = 7));
})([
  function (e, t, n) {
    e.exports = n(5);
  },
  function (e, t, n) {
    "use strict";
    (function (e, r) {
      n.d(t, "d", function () {
        return d;
      }),
        n.d(t, "b", function () {
          return m;
        }),
        n.d(t, "c", function () {
          return p;
        }),
        n.d(t, "a", function () {
          return g;
        }),
        n.d(t, "e", function () {
          return v;
        });
      var i = !1,
        o = !1,
        a = !1,
        s = !1,
        u = void 0,
        c =
          "undefined" !== typeof e &&
          "undefined" !== typeof e.versions &&
          "undefined" !== typeof e.versions.electron &&
          "renderer" === e.type;
      if ("object" !== typeof navigator || c) {
        if ("object" === typeof e) {
          (i = "win32" === e.platform),
            (o = "darwin" === e.platform),
            (a = "linux" === e.platform),
            "en",
            "en";
          var l = Object({
            NODE_ENV: "production",
            PUBLIC_URL: "",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
          }).VSCODE_NLS_CONFIG;
          if (l)
            try {
              var f = JSON.parse(l),
                h = f.availableLanguages["*"];
              f.locale, h || "en", f._translationsConfigFile;
            } catch (y) {}
          !0;
        }
      } else
        (i = (u = navigator.userAgent).indexOf("Windows") >= 0),
          (o = u.indexOf("Macintosh") >= 0),
          (u.indexOf("Macintosh") >= 0 ||
            u.indexOf("iPad") >= 0 ||
            u.indexOf("iPhone") >= 0) &&
            !!navigator.maxTouchPoints &&
            navigator.maxTouchPoints > 0,
          (a = u.indexOf("Linux") >= 0),
          (s = !0),
          navigator.language;
      var d = i,
        m = o,
        p = s,
        g = "object" === typeof self ? self : "object" === typeof r ? r : {},
        v = (function () {
          if (g.setImmediate) return g.setImmediate.bind(g);
          if ("function" === typeof g.postMessage && !g.importScripts) {
            var t = [];
            g.addEventListener("message", function (e) {
              if (e.data && e.data.vscodeSetImmediateId)
                for (var n = 0, r = t.length; n < r; n++) {
                  var i = t[n];
                  if (i.id === e.data.vscodeSetImmediateId)
                    return t.splice(n, 1), void i.callback();
                }
            });
            var n = 0;
            return function (e) {
              var r = ++n;
              t.push({ id: r, callback: e }),
                g.postMessage({ vscodeSetImmediateId: r }, "*");
            };
          }
          if ("undefined" !== typeof e && "function" === typeof e.nextTick)
            return e.nextTick.bind(e);
          var r = Promise.resolve();
          return function (e) {
            return r.then(e);
          };
        })();
    }.call(this, n(4), n(6)));
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      n.d(t, "a", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return a;
        }),
        n.d(t, "c", function () {
          return s;
        });
      var r = n(1),
        i =
          "undefined" === typeof e
            ? {
                cwd: function () {
                  return "/";
                },
                env: Object.create(null),
                get platform() {
                  return r.d ? "win32" : r.b ? "darwin" : "linux";
                },
                nextTick: function (e) {
                  return Object(r.e)(e);
                },
              }
            : e,
        o = i.cwd,
        a = i.env,
        s = i.platform;
    }.call(this, n(4)));
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      n.d(t, "a", function () {
        return h;
      });
      var r,
        i,
        o = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      if ("object" === typeof e) i = "win32" === e.platform;
      else if ("object" === typeof navigator) {
        var a = navigator.userAgent;
        i = a.indexOf("Windows") >= 0;
      }
      var s = /^\w[\w\d+.-]*$/,
        u = /^\//,
        c = /^\/\//;
      var l = "/",
        f = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
        h = (function () {
          function e(e, t, n, r, i, o) {
            void 0 === o && (o = !1),
              "object" === typeof e
                ? ((this.scheme = e.scheme || ""),
                  (this.authority = e.authority || ""),
                  (this.path = e.path || ""),
                  (this.query = e.query || ""),
                  (this.fragment = e.fragment || ""))
                : ((this.scheme = (function (e, t) {
                    return e || t ? e : "file";
                  })(e, o)),
                  (this.authority = t || ""),
                  (this.path = (function (e, t) {
                    switch (e) {
                      case "https":
                      case "http":
                      case "file":
                        t ? t[0] !== l && (t = l + t) : (t = l);
                    }
                    return t;
                  })(this.scheme, n || "")),
                  (this.query = r || ""),
                  (this.fragment = i || ""),
                  (function (e, t) {
                    if (!e.scheme && t)
                      throw new Error(
                        '[UriError]: Scheme is missing: {scheme: "", authority: "' +
                          e.authority +
                          '", path: "' +
                          e.path +
                          '", query: "' +
                          e.query +
                          '", fragment: "' +
                          e.fragment +
                          '"}'
                      );
                    if (e.scheme && !s.test(e.scheme))
                      throw new Error(
                        "[UriError]: Scheme contains illegal characters."
                      );
                    if (e.path)
                      if (e.authority) {
                        if (!u.test(e.path))
                          throw new Error(
                            '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
                          );
                      } else if (c.test(e.path))
                        throw new Error(
                          '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
                        );
                  })(this, o));
          }
          return (
            (e.isUri = function (t) {
              return (
                t instanceof e ||
                (!!t &&
                  "string" === typeof t.authority &&
                  "string" === typeof t.fragment &&
                  "string" === typeof t.path &&
                  "string" === typeof t.query &&
                  "string" === typeof t.scheme &&
                  "function" === typeof t.fsPath &&
                  "function" === typeof t.with &&
                  "function" === typeof t.toString)
              );
            }),
            Object.defineProperty(e.prototype, "fsPath", {
              get: function () {
                return y(this, !1);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.with = function (e) {
              if (!e) return this;
              var t = e.scheme,
                n = e.authority,
                r = e.path,
                i = e.query,
                o = e.fragment;
              return (
                void 0 === t ? (t = this.scheme) : null === t && (t = ""),
                void 0 === n ? (n = this.authority) : null === n && (n = ""),
                void 0 === r ? (r = this.path) : null === r && (r = ""),
                void 0 === i ? (i = this.query) : null === i && (i = ""),
                void 0 === o ? (o = this.fragment) : null === o && (o = ""),
                t === this.scheme &&
                n === this.authority &&
                r === this.path &&
                i === this.query &&
                o === this.fragment
                  ? this
                  : new m(t, n, r, i, o)
              );
            }),
            (e.parse = function (e, t) {
              void 0 === t && (t = !1);
              var n = f.exec(e);
              return n
                ? new m(
                    n[2] || "",
                    _(n[4] || ""),
                    _(n[5] || ""),
                    _(n[7] || ""),
                    _(n[9] || ""),
                    t
                  )
                : new m("", "", "", "", "");
            }),
            (e.file = function (e) {
              var t = "";
              if ((i && (e = e.replace(/\\/g, l)), e[0] === l && e[1] === l)) {
                var n = e.indexOf(l, 2);
                -1 === n
                  ? ((t = e.substring(2)), (e = l))
                  : ((t = e.substring(2, n)), (e = e.substring(n) || l));
              }
              return new m("file", t, e, "", "");
            }),
            (e.from = function (e) {
              return new m(e.scheme, e.authority, e.path, e.query, e.fragment);
            }),
            (e.prototype.toString = function (e) {
              return void 0 === e && (e = !1), b(this, e);
            }),
            (e.prototype.toJSON = function () {
              return this;
            }),
            (e.revive = function (t) {
              if (t) {
                if (t instanceof e) return t;
                var n = new m(t);
                return (
                  (n._formatted = t.external),
                  (n._fsPath = t._sep === d ? t.fsPath : null),
                  n
                );
              }
              return t;
            }),
            e
          );
        })(),
        d = i ? 1 : void 0,
        m = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t._formatted = null), (t._fsPath = null), t;
          }
          return (
            o(t, e),
            Object.defineProperty(t.prototype, "fsPath", {
              get: function () {
                return (
                  this._fsPath || (this._fsPath = y(this, !1)), this._fsPath
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.toString = function (e) {
              return (
                void 0 === e && (e = !1),
                e
                  ? b(this, !0)
                  : (this._formatted || (this._formatted = b(this, !1)),
                    this._formatted)
              );
            }),
            (t.prototype.toJSON = function () {
              var e = { $mid: 1 };
              return (
                this._fsPath && ((e.fsPath = this._fsPath), (e._sep = d)),
                this._formatted && (e.external = this._formatted),
                this.path && (e.path = this.path),
                this.scheme && (e.scheme = this.scheme),
                this.authority && (e.authority = this.authority),
                this.query && (e.query = this.query),
                this.fragment && (e.fragment = this.fragment),
                e
              );
            }),
            t
          );
        })(h),
        p =
          (((r = {})[58] = "%3A"),
          (r[47] = "%2F"),
          (r[63] = "%3F"),
          (r[35] = "%23"),
          (r[91] = "%5B"),
          (r[93] = "%5D"),
          (r[64] = "%40"),
          (r[33] = "%21"),
          (r[36] = "%24"),
          (r[38] = "%26"),
          (r[39] = "%27"),
          (r[40] = "%28"),
          (r[41] = "%29"),
          (r[42] = "%2A"),
          (r[43] = "%2B"),
          (r[44] = "%2C"),
          (r[59] = "%3B"),
          (r[61] = "%3D"),
          (r[32] = "%20"),
          r);
      function g(e, t) {
        for (var n = void 0, r = -1, i = 0; i < e.length; i++) {
          var o = e.charCodeAt(i);
          if (
            (o >= 97 && o <= 122) ||
            (o >= 65 && o <= 90) ||
            (o >= 48 && o <= 57) ||
            45 === o ||
            46 === o ||
            95 === o ||
            126 === o ||
            (t && 47 === o)
          )
            -1 !== r &&
              ((n += encodeURIComponent(e.substring(r, i))), (r = -1)),
              void 0 !== n && (n += e.charAt(i));
          else {
            void 0 === n && (n = e.substr(0, i));
            var a = p[o];
            void 0 !== a
              ? (-1 !== r &&
                  ((n += encodeURIComponent(e.substring(r, i))), (r = -1)),
                (n += a))
              : -1 === r && (r = i);
          }
        }
        return (
          -1 !== r && (n += encodeURIComponent(e.substring(r))),
          void 0 !== n ? n : e
        );
      }
      function v(e) {
        for (var t = void 0, n = 0; n < e.length; n++) {
          var r = e.charCodeAt(n);
          35 === r || 63 === r
            ? (void 0 === t && (t = e.substr(0, n)), (t += p[r]))
            : void 0 !== t && (t += e[n]);
        }
        return void 0 !== t ? t : e;
      }
      function y(e, t) {
        var n;
        return (
          (n =
            e.authority && e.path.length > 1 && "file" === e.scheme
              ? "//" + e.authority + e.path
              : 47 === e.path.charCodeAt(0) &&
                ((e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90) ||
                  (e.path.charCodeAt(1) >= 97 &&
                    e.path.charCodeAt(1) <= 122)) &&
                58 === e.path.charCodeAt(2)
              ? t
                ? e.path.substr(1)
                : e.path[1].toLowerCase() + e.path.substr(2)
              : e.path),
          i && (n = n.replace(/\//g, "\\")),
          n
        );
      }
      function b(e, t) {
        var n = t ? v : g,
          r = "",
          i = e.scheme,
          o = e.authority,
          a = e.path,
          s = e.query,
          u = e.fragment;
        if (
          (i && ((r += i), (r += ":")),
          (o || "file" === i) && ((r += l), (r += l)),
          o)
        ) {
          var c = o.indexOf("@");
          if (-1 !== c) {
            var f = o.substr(0, c);
            (o = o.substr(c + 1)),
              -1 === (c = f.indexOf(":"))
                ? (r += n(f, !1))
                : ((r += n(f.substr(0, c), !1)),
                  (r += ":"),
                  (r += n(f.substr(c + 1), !1))),
              (r += "@");
          }
          -1 === (c = (o = o.toLowerCase()).indexOf(":"))
            ? (r += n(o, !1))
            : ((r += n(o.substr(0, c), !1)), (r += o.substr(c)));
        }
        if (a) {
          if (a.length >= 3 && 47 === a.charCodeAt(0) && 58 === a.charCodeAt(2))
            (h = a.charCodeAt(1)) >= 65 &&
              h <= 90 &&
              (a = "/" + String.fromCharCode(h + 32) + ":" + a.substr(3));
          else if (a.length >= 2 && 58 === a.charCodeAt(1)) {
            var h;
            (h = a.charCodeAt(0)) >= 65 &&
              h <= 90 &&
              (a = String.fromCharCode(h + 32) + ":" + a.substr(2));
          }
          r += n(a, !0);
        }
        return (
          s && ((r += "?"), (r += n(s, !1))),
          u && ((r += "#"), (r += t ? u : g(u, !1))),
          r
        );
      }
      var C = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
      function _(e) {
        return e.match(C)
          ? e.replace(C, function (e) {
              return (function e(t) {
                try {
                  return decodeURIComponent(t);
                } catch (r) {
                  return t.length > 3 ? t.substr(0, 3) + e(t.substr(3)) : t;
                }
              })(e);
            })
          : e;
      }
    }.call(this, n(4)));
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
    var u,
      c = [],
      l = !1,
      f = -1;
    function h() {
      l &&
        u &&
        ((l = !1), u.length ? (c = u.concat(c)) : (f = -1), c.length && d());
    }
    function d() {
      if (!l) {
        var e = s(h);
        l = !0;
        for (var t = c.length; t; ) {
          for (u = c, c = []; ++f < t; ) u && u[f].run();
          (f = -1), (t = c.length);
        }
        (u = null),
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
    function m(e, t) {
      (this.fun = e), (this.array = t);
    }
    function p() {}
    (i.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      c.push(new m(e, t)), 1 !== c.length || l || s(d);
    }),
      (m.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (i.title = "browser"),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ""),
      (i.versions = {}),
      (i.on = p),
      (i.addListener = p),
      (i.once = p),
      (i.off = p),
      (i.removeListener = p),
      (i.removeAllListeners = p),
      (i.emit = p),
      (i.prependListener = p),
      (i.prependOnceListener = p),
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
      } catch (A) {
        s = function (e, t, n) {
          return (e[t] = n);
        };
      }
      function u(e, t, n, r) {
        var i = t && t.prototype instanceof f ? t : f,
          o = Object.create(i.prototype),
          a = new k(r || []);
        return (
          (o._invoke = (function (e, t, n) {
            var r = "suspendedStart";
            return function (i, o) {
              if ("executing" === r)
                throw new Error("Generator is already running");
              if ("completed" === r) {
                if ("throw" === i) throw o;
                return E();
              }
              for (n.method = i, n.arg = o; ; ) {
                var a = n.delegate;
                if (a) {
                  var s = C(a, n);
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
                var u = c(e, t, n);
                if ("normal" === u.type) {
                  if (
                    ((r = n.done ? "completed" : "suspendedYield"), u.arg === l)
                  )
                    continue;
                  return { value: u.arg, done: n.done };
                }
                "throw" === u.type &&
                  ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
              }
            };
          })(e, n, a)),
          o
        );
      }
      function c(e, t, n) {
        try {
          return { type: "normal", arg: e.call(t, n) };
        } catch (A) {
          return { type: "throw", arg: A };
        }
      }
      e.wrap = u;
      var l = {};
      function f() {}
      function h() {}
      function d() {}
      var m = {};
      m[i] = function () {
        return this;
      };
      var p = Object.getPrototypeOf,
        g = p && p(p(x([])));
      g && g !== t && n.call(g, i) && (m = g);
      var v = (d.prototype = f.prototype = Object.create(m));
      function y(e) {
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
                var u = c(e[i], e, o);
                if ("throw" !== u.type) {
                  var l = u.arg,
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
                s(u.arg);
              })(i, o, r, a);
            });
          }
          return (r = r ? r.then(a, a) : a());
        };
      }
      function C(e, t) {
        var n = e.iterator[t.method];
        if (void 0 === n) {
          if (((t.delegate = null), "throw" === t.method)) {
            if (
              e.iterator.return &&
              ((t.method = "return"),
              (t.arg = void 0),
              C(e, t),
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
        var r = c(n, e.iterator, t.arg);
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
      function _(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function S(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function k(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(_, this),
          this.reset(!0);
      }
      function x(e) {
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
        return { next: E };
      }
      function E() {
        return { value: void 0, done: !0 };
      }
      return (
        (h.prototype = v.constructor = d),
        (d.constructor = h),
        (h.displayName = s(d, a, "GeneratorFunction")),
        (e.isGeneratorFunction = function (e) {
          var t = "function" === typeof e && e.constructor;
          return (
            !!t &&
            (t === h || "GeneratorFunction" === (t.displayName || t.name))
          );
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, d)
              : ((e.__proto__ = d), s(e, a, "GeneratorFunction")),
            (e.prototype = Object.create(v)),
            e
          );
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        y(b.prototype),
        (b.prototype[o] = function () {
          return this;
        }),
        (e.AsyncIterator = b),
        (e.async = function (t, n, r, i, o) {
          void 0 === o && (o = Promise);
          var a = new b(u(t, n, r, i), o);
          return e.isGeneratorFunction(n)
            ? a
            : a.next().then(function (e) {
                return e.done ? e.value : a.next();
              });
        }),
        y(v),
        s(v, a, "Generator"),
        (v[i] = function () {
          return this;
        }),
        (v.toString = function () {
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
        (e.values = x),
        (k.prototype = {
          constructor: k,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(S),
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
                  u = n.call(o, "finallyLoc");
                if (s && u) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                } else if (s) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                } else {
                  if (!u)
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
                return this.complete(n.completion, n.afterLoc), S(n), l;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc === e) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var i = r.arg;
                  S(n);
                }
                return i;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, n) {
            return (
              (this.delegate = { iterator: x(e), resultName: t, nextLoc: n }),
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
  function (e, t, n) {
    "use strict";
    function r(e, t) {
      return (r =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function i(e, t) {
      if ("function" !== typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        t && r(e, t);
    }
    function o(e) {
      return (o = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function a() {
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
    function s(e) {
      return (s =
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
    function u(e, t) {
      return !t || ("object" !== s(t) && "function" !== typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function c(e) {
      return function () {
        var t,
          n = o(e);
        if (a()) {
          var r = o(this).constructor;
          t = Reflect.construct(n, arguments, r);
        } else t = n.apply(this, arguments);
        return u(this, t);
      };
    }
    function l(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function f(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function h(e, t, n) {
      return t && f(e.prototype, t), n && f(e, n), e;
    }
    n.r(t);
    var d = new ((function () {
      function e() {
        l(this, e),
          (this.listeners = []),
          (this.unexpectedErrorHandler = function (e) {
            setTimeout(function () {
              if (e.stack) throw new Error(e.message + "\n\n" + e.stack);
              throw e;
            }, 0);
          });
      }
      return (
        h(e, [
          {
            key: "emit",
            value: function (e) {
              this.listeners.forEach(function (t) {
                t(e);
              });
            },
          },
          {
            key: "onUnexpectedError",
            value: function (e) {
              this.unexpectedErrorHandler(e), this.emit(e);
            },
          },
          {
            key: "onUnexpectedExternalError",
            value: function (e) {
              this.unexpectedErrorHandler(e);
            },
          },
        ]),
        e
      );
    })())();
    function m(e) {
      g(e) || d.onUnexpectedError(e);
    }
    function p(e) {
      return e instanceof Error
        ? {
            $isError: !0,
            name: e.name,
            message: e.message,
            stack: e.stacktrace || e.stack,
          }
        : e;
    }
    function g(e) {
      return (
        e instanceof Error && "Canceled" === e.name && "Canceled" === e.message
      );
    }
    function v(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function y(e, t) {
      if (e) {
        if ("string" === typeof e) return v(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === n && e.constructor && (n = e.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(n)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? v(e, t)
            : void 0
        );
      }
    }
    function b(e) {
      if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (e = y(e))) {
          var t = 0,
            n = function () {};
          return {
            s: n,
            n: function () {
              return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
            },
            e: function (e) {
              throw e;
            },
            f: n,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var r,
        i,
        o = !0,
        a = !1;
      return {
        s: function () {
          r = e[Symbol.iterator]();
        },
        n: function () {
          var e = r.next();
          return (o = e.done), e;
        },
        e: function (e) {
          (a = !0), (i = e);
        },
        f: function () {
          try {
            o || null == r.return || r.return();
          } finally {
            if (a) throw i;
          }
        },
      };
    }
    function C(e, t, n) {
      return (C = a()
        ? Reflect.construct
        : function (e, t, n) {
            var i = [null];
            i.push.apply(i, t);
            var o = new (Function.bind.apply(e, i))();
            return n && r(o, n.prototype), o;
          }).apply(null, arguments);
    }
    function _(e) {
      var t = "function" === typeof Map ? new Map() : void 0;
      return (_ = function (e) {
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
          t.set(e, i);
        }
        function i() {
          return C(e, arguments, o(this).constructor);
        }
        return (
          (i.prototype = Object.create(e.prototype, {
            constructor: {
              value: i,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          r(i, e)
        );
      })(e);
    }
    function S(e, t, n) {
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
    var k,
      x = n(0),
      E = n.n(x);
    !(function (e) {
      var t = E.a.mark(a),
        n = E.a.mark(s),
        r = E.a.mark(u),
        i = E.a.mark(c);
      e.is = function (e) {
        return (
          e && "object" === typeof e && "function" === typeof e[Symbol.iterator]
        );
      };
      var o = Object.freeze([]);
      function a(e) {
        return E.a.wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (t.next = 2), e;
              case 2:
              case "end":
                return t.stop();
            }
        }, t);
      }
      function s(e, t) {
        var r, i, o;
        return E.a.wrap(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  (r = b(e)), (n.prev = 1), r.s();
                case 3:
                  if ((i = r.n()).done) {
                    n.next = 10;
                    break;
                  }
                  if (((o = i.value), !t(o))) {
                    n.next = 8;
                    break;
                  }
                  return (n.next = 8), o;
                case 8:
                  n.next = 3;
                  break;
                case 10:
                  n.next = 15;
                  break;
                case 12:
                  (n.prev = 12), (n.t0 = n.catch(1)), r.e(n.t0);
                case 15:
                  return (n.prev = 15), r.f(), n.finish(15);
                case 18:
                case "end":
                  return n.stop();
              }
          },
          n,
          null,
          [[1, 12, 15, 18]]
        );
      }
      function u(e, t) {
        var n, i, o;
        return E.a.wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  (n = b(e)), (r.prev = 1), n.s();
                case 3:
                  if ((i = n.n()).done) {
                    r.next = 9;
                    break;
                  }
                  return (o = i.value), (r.next = 7), t(o);
                case 7:
                  r.next = 3;
                  break;
                case 9:
                  r.next = 14;
                  break;
                case 11:
                  (r.prev = 11), (r.t0 = r.catch(1)), n.e(r.t0);
                case 14:
                  return (r.prev = 14), n.f(), r.finish(14);
                case 17:
                case "end":
                  return r.stop();
              }
          },
          r,
          null,
          [[1, 11, 14, 17]]
        );
      }
      function c() {
        var e,
          t,
          n,
          r,
          o,
          a,
          s,
          u,
          c,
          l = arguments;
        return E.a.wrap(
          function (i) {
            for (;;)
              switch ((i.prev = i.next)) {
                case 0:
                  for (e = l.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = l[n];
                  (r = 0), (o = t);
                case 2:
                  if (!(r < o.length)) {
                    i.next = 24;
                    break;
                  }
                  (a = o[r]), (s = b(a)), (i.prev = 5), s.s();
                case 7:
                  if ((u = s.n()).done) {
                    i.next = 13;
                    break;
                  }
                  return (c = u.value), (i.next = 11), c;
                case 11:
                  i.next = 7;
                  break;
                case 13:
                  i.next = 18;
                  break;
                case 15:
                  (i.prev = 15), (i.t0 = i.catch(5)), s.e(i.t0);
                case 18:
                  return (i.prev = 18), s.f(), i.finish(18);
                case 21:
                  r++, (i.next = 2);
                  break;
                case 24:
                case "end":
                  return i.stop();
              }
          },
          i,
          null,
          [[5, 15, 18, 21]]
        );
      }
      (e.empty = function () {
        return o;
      }),
        (e.single = a),
        (e.from = function (e) {
          return e || o;
        }),
        (e.first = function (e) {
          return e[Symbol.iterator]().next().value;
        }),
        (e.some = function (e, t) {
          var n,
            r = b(e);
          try {
            for (r.s(); !(n = r.n()).done; ) {
              if (t(n.value)) return !0;
            }
          } catch (i) {
            r.e(i);
          } finally {
            r.f();
          }
          return !1;
        }),
        (e.filter = s),
        (e.map = u),
        (e.concat = c),
        (e.consume = function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : Number.POSITIVE_INFINITY,
            r = [];
          if (0 === n) return [r, t];
          for (var i = t[Symbol.iterator](), o = 0; o < n; o++) {
            var a = i.next();
            if (a.done) return [r, e.empty()];
            r.push(a.value);
          }
          return [
            r,
            S({}, Symbol.iterator, function () {
              return i;
            }),
          ];
        });
    })(k || (k = {}));
    function A(e) {}
    var w = (function (e) {
      i(n, e);
      var t = c(n);
      function n(e) {
        var r;
        return (
          l(this, n),
          ((r = t.call(
            this,
            "Encounter errors while disposing of store. Errors: [".concat(
              e.join(", "),
              "]"
            )
          )).errors = e),
          r
        );
      }
      return n;
    })(_(Error));
    function N(e) {
      if (k.is(e)) {
        var t,
          n = [],
          r = b(e);
        try {
          for (r.s(); !(t = r.n()).done; ) {
            var i = t.value;
            if (i)
              try {
                i.dispose();
              } catch (o) {
                n.push(o);
              }
          }
        } catch (a) {
          r.e(a);
        } finally {
          r.f();
        }
        if (1 === n.length) throw n[0];
        if (n.length > 1) throw new w(n);
        return Array.isArray(e) ? [] : e;
      }
      if (e) return e.dispose(), e;
    }
    function L() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return (
        t.forEach(A),
        {
          dispose: function () {
            return N(t);
          },
        }
      );
    }
    var T = (function () {
      function e() {
        l(this, e), (this._toDispose = new Set()), (this._isDisposed = !1);
      }
      return (
        h(e, [
          {
            key: "dispose",
            value: function () {
              this._isDisposed || ((this._isDisposed = !0), this.clear());
            },
          },
          {
            key: "clear",
            value: function () {
              try {
                N(this._toDispose.values());
              } finally {
                this._toDispose.clear();
              }
            },
          },
          {
            key: "add",
            value: function (t) {
              if (!t) return t;
              if (t === this)
                throw new Error("Cannot register a disposable on itself!");
              return (
                this._isDisposed
                  ? e.DISABLE_DISPOSED_WARNING ||
                    console.warn(
                      new Error(
                        "Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!"
                      ).stack
                    )
                  : this._toDispose.add(t),
                t
              );
            },
          },
        ]),
        e
      );
    })();
    T.DISABLE_DISPOSED_WARNING = !1;
    var O = (function () {
      function e() {
        l(this, e), (this._store = new T());
      }
      return (
        h(e, [
          {
            key: "dispose",
            value: function () {
              this._store.dispose();
            },
          },
          {
            key: "_register",
            value: function (e) {
              if (e === this)
                throw new Error("Cannot register a disposable on itself!");
              return this._store.add(e);
            },
          },
        ]),
        e
      );
    })();
    O.None = Object.freeze({ dispose: function () {} });
    var I = n(1);
    function P(e) {
      var t,
        n = [],
        r = b(
          (function (e) {
            for (
              var t = [], n = Object.getPrototypeOf(e);
              Object.prototype !== n;

            )
              (t = t.concat(Object.getOwnPropertyNames(n))),
                (n = Object.getPrototypeOf(n));
            return t;
          })(e)
        );
      try {
        for (r.s(); !(t = r.n()).done; ) {
          var i = t.value;
          "function" === typeof e[i] && n.push(i);
        }
      } catch (o) {
        r.e(o);
      } finally {
        r.f();
      }
      return n;
    }
    function M(e, t) {
      var n,
        r = function (e) {
          return function () {
            var n = Array.prototype.slice.call(arguments, 0);
            return t(e, n);
          };
        },
        i = {},
        o = b(e);
      try {
        for (o.s(); !(n = o.n()).done; ) {
          var a = n.value;
          i[a] = r(a);
        }
      } catch (s) {
        o.e(s);
      } finally {
        o.f();
      }
      return i;
    }
    var R = (function () {
        function e(t) {
          l(this, e),
            (this._workerId = -1),
            (this._handler = t),
            (this._lastSentReq = 0),
            (this._pendingReplies = Object.create(null));
        }
        return (
          h(e, [
            {
              key: "setWorkerId",
              value: function (e) {
                this._workerId = e;
              },
            },
            {
              key: "sendMessage",
              value: function (e, t) {
                var n = this,
                  r = String(++this._lastSentReq);
                return new Promise(function (i, o) {
                  (n._pendingReplies[r] = { resolve: i, reject: o }),
                    n._send({
                      vsWorker: n._workerId,
                      req: r,
                      method: e,
                      args: t,
                    });
                });
              },
            },
            {
              key: "handleMessage",
              value: function (e) {
                e &&
                  e.vsWorker &&
                  ((-1 !== this._workerId && e.vsWorker !== this._workerId) ||
                    this._handleMessage(e));
              },
            },
            {
              key: "_handleMessage",
              value: function (e) {
                var t = this;
                if (e.seq) {
                  var n = e;
                  if (!this._pendingReplies[n.seq])
                    return void console.warn("Got reply to unknown seq");
                  var r = this._pendingReplies[n.seq];
                  if ((delete this._pendingReplies[n.seq], n.err)) {
                    var i = n.err;
                    return (
                      n.err.$isError &&
                        (((i = new Error()).name = n.err.name),
                        (i.message = n.err.message),
                        (i.stack = n.err.stack)),
                      void r.reject(i)
                    );
                  }
                  r.resolve(n.res);
                } else {
                  var o = e,
                    a = o.req;
                  this._handler.handleMessage(o.method, o.args).then(
                    function (e) {
                      t._send({
                        vsWorker: t._workerId,
                        seq: a,
                        res: e,
                        err: void 0,
                      });
                    },
                    function (e) {
                      e.detail instanceof Error && (e.detail = p(e.detail)),
                        t._send({
                          vsWorker: t._workerId,
                          seq: a,
                          res: void 0,
                          err: p(e),
                        });
                    }
                  );
                }
              },
            },
            {
              key: "_send",
              value: function (e) {
                var t = [];
                if (e.req)
                  for (var n = e, r = 0; r < n.args.length; r++)
                    n.args[r] instanceof ArrayBuffer && t.push(n.args[r]);
                else {
                  var i = e;
                  i.res instanceof ArrayBuffer && t.push(i.res);
                }
                this._handler.sendMessage(e, t);
              },
            },
          ]),
          e
        );
      })(),
      j = (function () {
        function e(t, n) {
          var r = this;
          l(this, e),
            (this._requestHandlerFactory = n),
            (this._requestHandler = null),
            (this._protocol = new R({
              sendMessage: function (e, n) {
                t(e, n);
              },
              handleMessage: function (e, t) {
                return r._handleMessage(e, t);
              },
            }));
        }
        return (
          h(e, [
            {
              key: "onmessage",
              value: function (e) {
                this._protocol.handleMessage(e);
              },
            },
            {
              key: "_handleMessage",
              value: function (e, t) {
                if ("$initialize" === e)
                  return this.initialize(t[0], t[1], t[2], t[3]);
                if (
                  !this._requestHandler ||
                  "function" !== typeof this._requestHandler[e]
                )
                  return Promise.reject(
                    new Error("Missing requestHandler or method: " + e)
                  );
                try {
                  return Promise.resolve(
                    this._requestHandler[e].apply(this._requestHandler, t)
                  );
                } catch (n) {
                  return Promise.reject(n);
                }
              },
            },
            {
              key: "initialize",
              value: function (e, t, n, r) {
                var i = this;
                this._protocol.setWorkerId(e);
                var o = M(r, function (e, t) {
                  return i._protocol.sendMessage(e, t);
                });
                return this._requestHandlerFactory
                  ? ((this._requestHandler = this._requestHandlerFactory(o)),
                    Promise.resolve(P(this._requestHandler)))
                  : (t &&
                      ("undefined" !== typeof t.baseUrl && delete t.baseUrl,
                      "undefined" !== typeof t.paths &&
                        "undefined" !== typeof t.paths.vs &&
                        delete t.paths.vs,
                      (t.catchError = !0),
                      self.require.config(t)),
                    new Promise(function (e, t) {
                      self.require(
                        [n],
                        function (n) {
                          (i._requestHandler = n.create(o)),
                            i._requestHandler
                              ? e(P(i._requestHandler))
                              : t(new Error("No RequestHandler!"));
                        },
                        t
                      );
                    }));
              },
            },
          ]),
          e
        );
      })();
    function D(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return v(e);
        })(e) ||
        (function (e) {
          if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e);
        })(e) ||
        y(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function F(e, t) {
      return (
        (function e(t, n, r, i, o) {
          if (i <= r) return;
          var a = (r + (i - r) / 2) | 0;
          if ((e(t, n, r, a, o), e(t, n, a + 1, i, o), n(t[a], t[a + 1]) <= 0))
            return;
          !(function (e, t, n, r, i, o) {
            for (var a = n, s = r + 1, u = n; u <= i; u++) o[u] = e[u];
            for (var c = n; c <= i; c++)
              a > r
                ? (e[c] = o[s++])
                : s > i
                ? (e[c] = o[a++])
                : t(o[s], o[a]) < 0
                ? (e[c] = o[s++])
                : (e[c] = o[a++]);
          })(t, n, r, a, i, o);
        })(e, t, 0, e.length - 1, []),
        e
      );
    }
    function U(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
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
            } catch (u) {
              (i = !0), (o = u);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          }
        })(e, t) ||
        y(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    var V = (function () {
      function e(t, n, r, i) {
        l(this, e),
          (this.originalStart = t),
          (this.originalLength = n),
          (this.modifiedStart = r),
          (this.modifiedLength = i);
      }
      return (
        h(e, [
          {
            key: "getOriginalEnd",
            value: function () {
              return this.originalStart + this.originalLength;
            },
          },
          {
            key: "getModifiedEnd",
            value: function () {
              return this.modifiedStart + this.modifiedLength;
            },
          },
        ]),
        e
      );
    })();
    function W(e) {
      return 55296 <= e && e <= 56319;
    }
    function q(e) {
      return 56320 <= e && e <= 57343;
    }
    function K(e, t) {
      return t - 56320 + ((e - 55296) << 10) + 65536;
    }
    String.fromCharCode(65279);
    var B = (function () {
      function e() {
        l(this, e),
          (this._data = JSON.parse(
            "[0,0,0,51592,51592,11,44424,44424,11,72251,72254,5,7150,7150,7,48008,48008,11,55176,55176,11,128420,128420,14,3276,3277,5,9979,9980,14,46216,46216,11,49800,49800,11,53384,53384,11,70726,70726,5,122915,122916,5,129320,129327,14,2558,2558,5,5906,5908,5,9762,9763,14,43360,43388,8,45320,45320,11,47112,47112,11,48904,48904,11,50696,50696,11,52488,52488,11,54280,54280,11,70082,70083,1,71350,71350,7,73111,73111,5,127892,127893,14,128726,128727,14,129473,129474,14,2027,2035,5,2901,2902,5,3784,3789,5,6754,6754,5,8418,8420,5,9877,9877,14,11088,11088,14,44008,44008,5,44872,44872,11,45768,45768,11,46664,46664,11,47560,47560,11,48456,48456,11,49352,49352,11,50248,50248,11,51144,51144,11,52040,52040,11,52936,52936,11,53832,53832,11,54728,54728,11,69811,69814,5,70459,70460,5,71096,71099,7,71998,71998,5,72874,72880,5,119149,119149,7,127374,127374,14,128335,128335,14,128482,128482,14,128765,128767,14,129399,129400,14,129680,129685,14,1476,1477,5,2377,2380,7,2759,2760,5,3137,3140,7,3458,3459,7,4153,4154,5,6432,6434,5,6978,6978,5,7675,7679,5,9723,9726,14,9823,9823,14,9919,9923,14,10035,10036,14,42736,42737,5,43596,43596,5,44200,44200,11,44648,44648,11,45096,45096,11,45544,45544,11,45992,45992,11,46440,46440,11,46888,46888,11,47336,47336,11,47784,47784,11,48232,48232,11,48680,48680,11,49128,49128,11,49576,49576,11,50024,50024,11,50472,50472,11,50920,50920,11,51368,51368,11,51816,51816,11,52264,52264,11,52712,52712,11,53160,53160,11,53608,53608,11,54056,54056,11,54504,54504,11,54952,54952,11,68108,68111,5,69933,69940,5,70197,70197,7,70498,70499,7,70845,70845,5,71229,71229,5,71727,71735,5,72154,72155,5,72344,72345,5,73023,73029,5,94095,94098,5,121403,121452,5,126981,127182,14,127538,127546,14,127990,127990,14,128391,128391,14,128445,128449,14,128500,128505,14,128752,128752,14,129160,129167,14,129356,129356,14,129432,129442,14,129648,129651,14,129751,131069,14,173,173,4,1757,1757,1,2274,2274,1,2494,2494,5,2641,2641,5,2876,2876,5,3014,3016,7,3262,3262,7,3393,3396,5,3570,3571,7,3968,3972,5,4228,4228,7,6086,6086,5,6679,6680,5,6912,6915,5,7080,7081,5,7380,7392,5,8252,8252,14,9096,9096,14,9748,9749,14,9784,9786,14,9833,9850,14,9890,9894,14,9938,9938,14,9999,9999,14,10085,10087,14,12349,12349,14,43136,43137,7,43454,43456,7,43755,43755,7,44088,44088,11,44312,44312,11,44536,44536,11,44760,44760,11,44984,44984,11,45208,45208,11,45432,45432,11,45656,45656,11,45880,45880,11,46104,46104,11,46328,46328,11,46552,46552,11,46776,46776,11,47000,47000,11,47224,47224,11,47448,47448,11,47672,47672,11,47896,47896,11,48120,48120,11,48344,48344,11,48568,48568,11,48792,48792,11,49016,49016,11,49240,49240,11,49464,49464,11,49688,49688,11,49912,49912,11,50136,50136,11,50360,50360,11,50584,50584,11,50808,50808,11,51032,51032,11,51256,51256,11,51480,51480,11,51704,51704,11,51928,51928,11,52152,52152,11,52376,52376,11,52600,52600,11,52824,52824,11,53048,53048,11,53272,53272,11,53496,53496,11,53720,53720,11,53944,53944,11,54168,54168,11,54392,54392,11,54616,54616,11,54840,54840,11,55064,55064,11,65438,65439,5,69633,69633,5,69837,69837,1,70018,70018,7,70188,70190,7,70368,70370,7,70465,70468,7,70712,70719,5,70835,70840,5,70850,70851,5,71132,71133,5,71340,71340,7,71458,71461,5,71985,71989,7,72002,72002,7,72193,72202,5,72281,72283,5,72766,72766,7,72885,72886,5,73104,73105,5,92912,92916,5,113824,113827,4,119173,119179,5,121505,121519,5,125136,125142,5,127279,127279,14,127489,127490,14,127570,127743,14,127900,127901,14,128254,128254,14,128369,128370,14,128400,128400,14,128425,128432,14,128468,128475,14,128489,128494,14,128715,128720,14,128745,128745,14,128759,128760,14,129004,129023,14,129296,129304,14,129340,129342,14,129388,129392,14,129404,129407,14,129454,129455,14,129485,129487,14,129659,129663,14,129719,129727,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2363,2363,7,2402,2403,5,2507,2508,7,2622,2624,7,2691,2691,7,2786,2787,5,2881,2884,5,3006,3006,5,3072,3072,5,3170,3171,5,3267,3268,7,3330,3331,7,3406,3406,1,3538,3540,5,3655,3662,5,3897,3897,5,4038,4038,5,4184,4185,5,4352,4447,8,6068,6069,5,6155,6157,5,6448,6449,7,6742,6742,5,6783,6783,5,6966,6970,5,7042,7042,7,7143,7143,7,7212,7219,5,7412,7412,5,8206,8207,4,8294,8303,4,8596,8601,14,9410,9410,14,9742,9742,14,9757,9757,14,9770,9770,14,9794,9794,14,9828,9828,14,9855,9855,14,9882,9882,14,9900,9903,14,9929,9933,14,9963,9967,14,9987,9988,14,10006,10006,14,10062,10062,14,10175,10175,14,11744,11775,5,42607,42607,5,43043,43044,7,43263,43263,5,43444,43445,7,43569,43570,5,43698,43700,5,43766,43766,5,44032,44032,11,44144,44144,11,44256,44256,11,44368,44368,11,44480,44480,11,44592,44592,11,44704,44704,11,44816,44816,11,44928,44928,11,45040,45040,11,45152,45152,11,45264,45264,11,45376,45376,11,45488,45488,11,45600,45600,11,45712,45712,11,45824,45824,11,45936,45936,11,46048,46048,11,46160,46160,11,46272,46272,11,46384,46384,11,46496,46496,11,46608,46608,11,46720,46720,11,46832,46832,11,46944,46944,11,47056,47056,11,47168,47168,11,47280,47280,11,47392,47392,11,47504,47504,11,47616,47616,11,47728,47728,11,47840,47840,11,47952,47952,11,48064,48064,11,48176,48176,11,48288,48288,11,48400,48400,11,48512,48512,11,48624,48624,11,48736,48736,11,48848,48848,11,48960,48960,11,49072,49072,11,49184,49184,11,49296,49296,11,49408,49408,11,49520,49520,11,49632,49632,11,49744,49744,11,49856,49856,11,49968,49968,11,50080,50080,11,50192,50192,11,50304,50304,11,50416,50416,11,50528,50528,11,50640,50640,11,50752,50752,11,50864,50864,11,50976,50976,11,51088,51088,11,51200,51200,11,51312,51312,11,51424,51424,11,51536,51536,11,51648,51648,11,51760,51760,11,51872,51872,11,51984,51984,11,52096,52096,11,52208,52208,11,52320,52320,11,52432,52432,11,52544,52544,11,52656,52656,11,52768,52768,11,52880,52880,11,52992,52992,11,53104,53104,11,53216,53216,11,53328,53328,11,53440,53440,11,53552,53552,11,53664,53664,11,53776,53776,11,53888,53888,11,54000,54000,11,54112,54112,11,54224,54224,11,54336,54336,11,54448,54448,11,54560,54560,11,54672,54672,11,54784,54784,11,54896,54896,11,55008,55008,11,55120,55120,11,64286,64286,5,66272,66272,5,68900,68903,5,69762,69762,7,69817,69818,5,69927,69931,5,70003,70003,5,70070,70078,5,70094,70094,7,70194,70195,7,70206,70206,5,70400,70401,5,70463,70463,7,70475,70477,7,70512,70516,5,70722,70724,5,70832,70832,5,70842,70842,5,70847,70848,5,71088,71089,7,71102,71102,7,71219,71226,5,71231,71232,5,71342,71343,7,71453,71455,5,71463,71467,5,71737,71738,5,71995,71996,5,72000,72000,7,72145,72147,7,72160,72160,5,72249,72249,7,72273,72278,5,72330,72342,5,72752,72758,5,72850,72871,5,72882,72883,5,73018,73018,5,73031,73031,5,73109,73109,5,73461,73462,7,94031,94031,5,94192,94193,7,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,126976,126979,14,127184,127231,14,127344,127345,14,127405,127461,14,127514,127514,14,127561,127567,14,127778,127779,14,127896,127896,14,127985,127986,14,127995,127999,5,128326,128328,14,128360,128366,14,128378,128378,14,128394,128397,14,128405,128406,14,128422,128423,14,128435,128443,14,128453,128464,14,128479,128480,14,128484,128487,14,128496,128498,14,128640,128709,14,128723,128724,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129096,129103,14,129292,129292,14,129311,129311,14,129329,129330,14,129344,129349,14,129360,129374,14,129394,129394,14,129402,129402,14,129413,129425,14,129445,129450,14,129466,129471,14,129483,129483,14,129511,129535,14,129653,129655,14,129667,129670,14,129705,129711,14,129731,129743,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2307,2307,7,2366,2368,7,2382,2383,7,2434,2435,7,2497,2500,5,2519,2519,5,2563,2563,7,2631,2632,5,2677,2677,5,2750,2752,7,2763,2764,7,2817,2817,5,2879,2879,5,2891,2892,7,2914,2915,5,3008,3008,5,3021,3021,5,3076,3076,5,3146,3149,5,3202,3203,7,3264,3265,7,3271,3272,7,3298,3299,5,3390,3390,5,3402,3404,7,3426,3427,5,3535,3535,5,3544,3550,7,3635,3635,7,3763,3763,7,3893,3893,5,3953,3966,5,3981,3991,5,4145,4145,7,4157,4158,5,4209,4212,5,4237,4237,5,4520,4607,10,5970,5971,5,6071,6077,5,6089,6099,5,6277,6278,5,6439,6440,5,6451,6456,7,6683,6683,5,6744,6750,5,6765,6770,7,6846,6846,5,6964,6964,5,6972,6972,5,7019,7027,5,7074,7077,5,7083,7085,5,7146,7148,7,7154,7155,7,7222,7223,5,7394,7400,5,7416,7417,5,8204,8204,5,8233,8233,4,8288,8292,4,8413,8416,5,8482,8482,14,8986,8987,14,9193,9203,14,9654,9654,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9775,14,9792,9792,14,9800,9811,14,9825,9826,14,9831,9831,14,9852,9853,14,9872,9873,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9936,9936,14,9941,9960,14,9974,9974,14,9982,9985,14,9992,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10145,10145,14,11013,11015,14,11503,11505,5,12334,12335,5,12951,12951,14,42612,42621,5,43014,43014,5,43047,43047,7,43204,43205,5,43335,43345,5,43395,43395,7,43450,43451,7,43561,43566,5,43573,43574,5,43644,43644,5,43710,43711,5,43758,43759,7,44005,44005,5,44012,44012,7,44060,44060,11,44116,44116,11,44172,44172,11,44228,44228,11,44284,44284,11,44340,44340,11,44396,44396,11,44452,44452,11,44508,44508,11,44564,44564,11,44620,44620,11,44676,44676,11,44732,44732,11,44788,44788,11,44844,44844,11,44900,44900,11,44956,44956,11,45012,45012,11,45068,45068,11,45124,45124,11,45180,45180,11,45236,45236,11,45292,45292,11,45348,45348,11,45404,45404,11,45460,45460,11,45516,45516,11,45572,45572,11,45628,45628,11,45684,45684,11,45740,45740,11,45796,45796,11,45852,45852,11,45908,45908,11,45964,45964,11,46020,46020,11,46076,46076,11,46132,46132,11,46188,46188,11,46244,46244,11,46300,46300,11,46356,46356,11,46412,46412,11,46468,46468,11,46524,46524,11,46580,46580,11,46636,46636,11,46692,46692,11,46748,46748,11,46804,46804,11,46860,46860,11,46916,46916,11,46972,46972,11,47028,47028,11,47084,47084,11,47140,47140,11,47196,47196,11,47252,47252,11,47308,47308,11,47364,47364,11,47420,47420,11,47476,47476,11,47532,47532,11,47588,47588,11,47644,47644,11,47700,47700,11,47756,47756,11,47812,47812,11,47868,47868,11,47924,47924,11,47980,47980,11,48036,48036,11,48092,48092,11,48148,48148,11,48204,48204,11,48260,48260,11,48316,48316,11,48372,48372,11,48428,48428,11,48484,48484,11,48540,48540,11,48596,48596,11,48652,48652,11,48708,48708,11,48764,48764,11,48820,48820,11,48876,48876,11,48932,48932,11,48988,48988,11,49044,49044,11,49100,49100,11,49156,49156,11,49212,49212,11,49268,49268,11,49324,49324,11,49380,49380,11,49436,49436,11,49492,49492,11,49548,49548,11,49604,49604,11,49660,49660,11,49716,49716,11,49772,49772,11,49828,49828,11,49884,49884,11,49940,49940,11,49996,49996,11,50052,50052,11,50108,50108,11,50164,50164,11,50220,50220,11,50276,50276,11,50332,50332,11,50388,50388,11,50444,50444,11,50500,50500,11,50556,50556,11,50612,50612,11,50668,50668,11,50724,50724,11,50780,50780,11,50836,50836,11,50892,50892,11,50948,50948,11,51004,51004,11,51060,51060,11,51116,51116,11,51172,51172,11,51228,51228,11,51284,51284,11,51340,51340,11,51396,51396,11,51452,51452,11,51508,51508,11,51564,51564,11,51620,51620,11,51676,51676,11,51732,51732,11,51788,51788,11,51844,51844,11,51900,51900,11,51956,51956,11,52012,52012,11,52068,52068,11,52124,52124,11,52180,52180,11,52236,52236,11,52292,52292,11,52348,52348,11,52404,52404,11,52460,52460,11,52516,52516,11,52572,52572,11,52628,52628,11,52684,52684,11,52740,52740,11,52796,52796,11,52852,52852,11,52908,52908,11,52964,52964,11,53020,53020,11,53076,53076,11,53132,53132,11,53188,53188,11,53244,53244,11,53300,53300,11,53356,53356,11,53412,53412,11,53468,53468,11,53524,53524,11,53580,53580,11,53636,53636,11,53692,53692,11,53748,53748,11,53804,53804,11,53860,53860,11,53916,53916,11,53972,53972,11,54028,54028,11,54084,54084,11,54140,54140,11,54196,54196,11,54252,54252,11,54308,54308,11,54364,54364,11,54420,54420,11,54476,54476,11,54532,54532,11,54588,54588,11,54644,54644,11,54700,54700,11,54756,54756,11,54812,54812,11,54868,54868,11,54924,54924,11,54980,54980,11,55036,55036,11,55092,55092,11,55148,55148,11,55216,55238,9,65056,65071,5,65529,65531,4,68097,68099,5,68159,68159,5,69446,69456,5,69688,69702,5,69808,69810,7,69815,69816,7,69821,69821,1,69888,69890,5,69932,69932,7,69957,69958,7,70016,70017,5,70067,70069,7,70079,70080,7,70089,70092,5,70095,70095,5,70191,70193,5,70196,70196,5,70198,70199,5,70367,70367,5,70371,70378,5,70402,70403,7,70462,70462,5,70464,70464,5,70471,70472,7,70487,70487,5,70502,70508,5,70709,70711,7,70720,70721,7,70725,70725,7,70750,70750,5,70833,70834,7,70841,70841,7,70843,70844,7,70846,70846,7,70849,70849,7,71087,71087,5,71090,71093,5,71100,71101,5,71103,71104,5,71216,71218,7,71227,71228,7,71230,71230,7,71339,71339,5,71341,71341,5,71344,71349,5,71351,71351,5,71456,71457,7,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123628,123631,5,125252,125258,5,126980,126980,14,127183,127183,14,127245,127247,14,127340,127343,14,127358,127359,14,127377,127386,14,127462,127487,6,127491,127503,14,127535,127535,14,127548,127551,14,127568,127569,14,127744,127777,14,127780,127891,14,127894,127895,14,127897,127899,14,127902,127984,14,127987,127989,14,127991,127994,14,128000,128253,14,128255,128317,14,128329,128334,14,128336,128359,14,128367,128368,14,128371,128377,14,128379,128390,14,128392,128393,14,128398,128399,14,128401,128404,14,128407,128419,14,128421,128421,14,128424,128424,14,128433,128434,14,128444,128444,14,128450,128452,14,128465,128467,14,128476,128478,14,128481,128481,14,128483,128483,14,128488,128488,14,128495,128495,14,128499,128499,14,128506,128591,14,128710,128714,14,128721,128722,14,128725,128725,14,128728,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129664,129666,14,129671,129679,14,129686,129704,14,129712,129718,14,129728,129730,14,129744,129750,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2259,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3134,3136,5,3142,3144,5,3157,3158,5,3201,3201,5,3260,3260,5,3263,3263,5,3266,3266,5,3270,3270,5,3274,3275,7,3285,3286,5,3328,3329,5,3387,3388,5,3391,3392,7,3398,3400,7,3405,3405,5,3415,3415,5,3457,3457,5,3530,3530,5,3536,3537,7,3542,3542,5,3551,3551,5,3633,3633,5,3636,3642,5,3761,3761,5,3764,3772,5,3864,3865,5,3895,3895,5,3902,3903,7,3967,3967,7,3974,3975,5,3993,4028,5,4141,4144,5,4146,4151,5,4155,4156,7,4182,4183,7,4190,4192,5,4226,4226,5,4229,4230,5,4253,4253,5,4448,4519,9,4957,4959,5,5938,5940,5,6002,6003,5,6070,6070,7,6078,6085,7,6087,6088,7,6109,6109,5,6158,6158,4,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6848,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7673,5,8203,8203,4,8205,8205,13,8232,8232,4,8234,8238,4,8265,8265,14,8293,8293,4,8400,8412,5,8417,8417,5,8421,8432,5,8505,8505,14,8617,8618,14,9000,9000,14,9167,9167,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9776,9783,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9935,14,9937,9937,14,9939,9940,14,9961,9962,14,9968,9973,14,9975,9978,14,9981,9981,14,9986,9986,14,9989,9989,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10084,14,10133,10135,14,10160,10160,14,10548,10549,14,11035,11036,14,11093,11093,14,11647,11647,5,12330,12333,5,12336,12336,14,12441,12442,5,12953,12953,14,42608,42610,5,42654,42655,5,43010,43010,5,43019,43019,5,43045,43046,5,43052,43052,5,43188,43203,7,43232,43249,5,43302,43309,5,43346,43347,7,43392,43394,5,43443,43443,5,43446,43449,5,43452,43453,5,43493,43493,5,43567,43568,7,43571,43572,7,43587,43587,5,43597,43597,7,43696,43696,5,43703,43704,5,43713,43713,5,43756,43757,5,43765,43765,7,44003,44004,7,44006,44007,7,44009,44010,7,44013,44013,5,44033,44059,12,44061,44087,12,44089,44115,12,44117,44143,12,44145,44171,12,44173,44199,12,44201,44227,12,44229,44255,12,44257,44283,12,44285,44311,12,44313,44339,12,44341,44367,12,44369,44395,12,44397,44423,12,44425,44451,12,44453,44479,12,44481,44507,12,44509,44535,12,44537,44563,12,44565,44591,12,44593,44619,12,44621,44647,12,44649,44675,12,44677,44703,12,44705,44731,12,44733,44759,12,44761,44787,12,44789,44815,12,44817,44843,12,44845,44871,12,44873,44899,12,44901,44927,12,44929,44955,12,44957,44983,12,44985,45011,12,45013,45039,12,45041,45067,12,45069,45095,12,45097,45123,12,45125,45151,12,45153,45179,12,45181,45207,12,45209,45235,12,45237,45263,12,45265,45291,12,45293,45319,12,45321,45347,12,45349,45375,12,45377,45403,12,45405,45431,12,45433,45459,12,45461,45487,12,45489,45515,12,45517,45543,12,45545,45571,12,45573,45599,12,45601,45627,12,45629,45655,12,45657,45683,12,45685,45711,12,45713,45739,12,45741,45767,12,45769,45795,12,45797,45823,12,45825,45851,12,45853,45879,12,45881,45907,12,45909,45935,12,45937,45963,12,45965,45991,12,45993,46019,12,46021,46047,12,46049,46075,12,46077,46103,12,46105,46131,12,46133,46159,12,46161,46187,12,46189,46215,12,46217,46243,12,46245,46271,12,46273,46299,12,46301,46327,12,46329,46355,12,46357,46383,12,46385,46411,12,46413,46439,12,46441,46467,12,46469,46495,12,46497,46523,12,46525,46551,12,46553,46579,12,46581,46607,12,46609,46635,12,46637,46663,12,46665,46691,12,46693,46719,12,46721,46747,12,46749,46775,12,46777,46803,12,46805,46831,12,46833,46859,12,46861,46887,12,46889,46915,12,46917,46943,12,46945,46971,12,46973,46999,12,47001,47027,12,47029,47055,12,47057,47083,12,47085,47111,12,47113,47139,12,47141,47167,12,47169,47195,12,47197,47223,12,47225,47251,12,47253,47279,12,47281,47307,12,47309,47335,12,47337,47363,12,47365,47391,12,47393,47419,12,47421,47447,12,47449,47475,12,47477,47503,12,47505,47531,12,47533,47559,12,47561,47587,12,47589,47615,12,47617,47643,12,47645,47671,12,47673,47699,12,47701,47727,12,47729,47755,12,47757,47783,12,47785,47811,12,47813,47839,12,47841,47867,12,47869,47895,12,47897,47923,12,47925,47951,12,47953,47979,12,47981,48007,12,48009,48035,12,48037,48063,12,48065,48091,12,48093,48119,12,48121,48147,12,48149,48175,12,48177,48203,12,48205,48231,12,48233,48259,12,48261,48287,12,48289,48315,12,48317,48343,12,48345,48371,12,48373,48399,12,48401,48427,12,48429,48455,12,48457,48483,12,48485,48511,12,48513,48539,12,48541,48567,12,48569,48595,12,48597,48623,12,48625,48651,12,48653,48679,12,48681,48707,12,48709,48735,12,48737,48763,12,48765,48791,12,48793,48819,12,48821,48847,12,48849,48875,12,48877,48903,12,48905,48931,12,48933,48959,12,48961,48987,12,48989,49015,12,49017,49043,12,49045,49071,12,49073,49099,12,49101,49127,12,49129,49155,12,49157,49183,12,49185,49211,12,49213,49239,12,49241,49267,12,49269,49295,12,49297,49323,12,49325,49351,12,49353,49379,12,49381,49407,12,49409,49435,12,49437,49463,12,49465,49491,12,49493,49519,12,49521,49547,12,49549,49575,12,49577,49603,12,49605,49631,12,49633,49659,12,49661,49687,12,49689,49715,12,49717,49743,12,49745,49771,12,49773,49799,12,49801,49827,12,49829,49855,12,49857,49883,12,49885,49911,12,49913,49939,12,49941,49967,12,49969,49995,12,49997,50023,12,50025,50051,12,50053,50079,12,50081,50107,12,50109,50135,12,50137,50163,12,50165,50191,12,50193,50219,12,50221,50247,12,50249,50275,12,50277,50303,12,50305,50331,12,50333,50359,12,50361,50387,12,50389,50415,12,50417,50443,12,50445,50471,12,50473,50499,12,50501,50527,12,50529,50555,12,50557,50583,12,50585,50611,12,50613,50639,12,50641,50667,12,50669,50695,12,50697,50723,12,50725,50751,12,50753,50779,12,50781,50807,12,50809,50835,12,50837,50863,12,50865,50891,12,50893,50919,12,50921,50947,12,50949,50975,12,50977,51003,12,51005,51031,12,51033,51059,12,51061,51087,12,51089,51115,12,51117,51143,12,51145,51171,12,51173,51199,12,51201,51227,12,51229,51255,12,51257,51283,12,51285,51311,12,51313,51339,12,51341,51367,12,51369,51395,12,51397,51423,12,51425,51451,12,51453,51479,12,51481,51507,12,51509,51535,12,51537,51563,12,51565,51591,12,51593,51619,12,51621,51647,12,51649,51675,12,51677,51703,12,51705,51731,12,51733,51759,12,51761,51787,12,51789,51815,12,51817,51843,12,51845,51871,12,51873,51899,12,51901,51927,12,51929,51955,12,51957,51983,12,51985,52011,12,52013,52039,12,52041,52067,12,52069,52095,12,52097,52123,12,52125,52151,12,52153,52179,12,52181,52207,12,52209,52235,12,52237,52263,12,52265,52291,12,52293,52319,12,52321,52347,12,52349,52375,12,52377,52403,12,52405,52431,12,52433,52459,12,52461,52487,12,52489,52515,12,52517,52543,12,52545,52571,12,52573,52599,12,52601,52627,12,52629,52655,12,52657,52683,12,52685,52711,12,52713,52739,12,52741,52767,12,52769,52795,12,52797,52823,12,52825,52851,12,52853,52879,12,52881,52907,12,52909,52935,12,52937,52963,12,52965,52991,12,52993,53019,12,53021,53047,12,53049,53075,12,53077,53103,12,53105,53131,12,53133,53159,12,53161,53187,12,53189,53215,12,53217,53243,12,53245,53271,12,53273,53299,12,53301,53327,12,53329,53355,12,53357,53383,12,53385,53411,12,53413,53439,12,53441,53467,12,53469,53495,12,53497,53523,12,53525,53551,12,53553,53579,12,53581,53607,12,53609,53635,12,53637,53663,12,53665,53691,12,53693,53719,12,53721,53747,12,53749,53775,12,53777,53803,12,53805,53831,12,53833,53859,12,53861,53887,12,53889,53915,12,53917,53943,12,53945,53971,12,53973,53999,12,54001,54027,12,54029,54055,12,54057,54083,12,54085,54111,12,54113,54139,12,54141,54167,12,54169,54195,12,54197,54223,12,54225,54251,12,54253,54279,12,54281,54307,12,54309,54335,12,54337,54363,12,54365,54391,12,54393,54419,12,54421,54447,12,54449,54475,12,54477,54503,12,54505,54531,12,54533,54559,12,54561,54587,12,54589,54615,12,54617,54643,12,54645,54671,12,54673,54699,12,54701,54727,12,54729,54755,12,54757,54783,12,54785,54811,12,54813,54839,12,54841,54867,12,54869,54895,12,54897,54923,12,54925,54951,12,54953,54979,12,54981,55007,12,55009,55035,12,55037,55063,12,55065,55091,12,55093,55119,12,55121,55147,12,55149,55175,12,55177,55203,12,55243,55291,10,65024,65039,5,65279,65279,4,65520,65528,4,66045,66045,5,66422,66426,5,68101,68102,5,68152,68154,5,68325,68326,5,69291,69292,5,69632,69632,7,69634,69634,7,69759,69761,5]"
          ));
      }
      return (
        h(
          e,
          [
            {
              key: "getGraphemeBreakType",
              value: function (e) {
                if (e < 32) return 10 === e ? 3 : 13 === e ? 2 : 4;
                if (e < 127) return 0;
                for (var t = this._data, n = t.length / 3, r = 1; r <= n; )
                  if (e < t[3 * r]) r *= 2;
                  else {
                    if (!(e > t[3 * r + 1])) return t[3 * r + 2];
                    r = 2 * r + 1;
                  }
                return 0;
              },
            },
          ],
          [
            {
              key: "getInstance",
              value: function () {
                return e._INSTANCE || (e._INSTANCE = new e()), e._INSTANCE;
              },
            },
          ]
        ),
        e
      );
    })();
    function $(e, t) {
      return ((t << 5) - t + e) | 0;
    }
    function H(e, t) {
      t = $(149417, t);
      for (var n = 0, r = e.length; n < r; n++) t = $(e.charCodeAt(n), t);
      return t;
    }
    function Y(e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 32,
        r = n - t,
        i = ~((1 << r) - 1);
      return ((e << t) | ((i & e) >>> r)) >>> 0;
    }
    function G(e) {
      for (
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : e.byteLength,
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          i = 0;
        i < n;
        i++
      )
        e[t + i] = r;
    }
    function z(e, t) {
      for (
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "0";
        e.length < t;

      )
        e = n + e;
      return e;
    }
    function J(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32;
      return z((e >>> 0).toString(16), t / 4);
    }
    (B._INSTANCE = null),
      ((function () {
        function e() {
          l(this, e),
            (this._h0 = 1732584193),
            (this._h1 = 4023233417),
            (this._h2 = 2562383102),
            (this._h3 = 271733878),
            (this._h4 = 3285377520),
            (this._buff = new Uint8Array(67)),
            (this._buffDV = new DataView(this._buff.buffer)),
            (this._buffLen = 0),
            (this._totalLen = 0),
            (this._leftoverHighSurrogate = 0),
            (this._finished = !1);
        }
        return (
          h(e, [
            {
              key: "update",
              value: function (e) {
                var t = e.length;
                if (0 !== t) {
                  var n,
                    r,
                    i = this._buff,
                    o = this._buffLen,
                    a = this._leftoverHighSurrogate;
                  for (
                    0 !== a
                      ? ((n = a), (r = -1), (a = 0))
                      : ((n = e.charCodeAt(0)), (r = 0));
                    ;

                  ) {
                    var s = n;
                    if (W(n)) {
                      if (!(r + 1 < t)) {
                        a = n;
                        break;
                      }
                      var u = e.charCodeAt(r + 1);
                      q(u) ? (r++, (s = K(n, u))) : (s = 65533);
                    } else q(n) && (s = 65533);
                    if (((o = this._push(i, o, s)), !(++r < t))) break;
                    n = e.charCodeAt(r);
                  }
                  (this._buffLen = o), (this._leftoverHighSurrogate = a);
                }
              },
            },
            {
              key: "_push",
              value: function (e, t, n) {
                return (
                  n < 128
                    ? (e[t++] = n)
                    : n < 2048
                    ? ((e[t++] = 192 | ((1984 & n) >>> 6)),
                      (e[t++] = 128 | ((63 & n) >>> 0)))
                    : n < 65536
                    ? ((e[t++] = 224 | ((61440 & n) >>> 12)),
                      (e[t++] = 128 | ((4032 & n) >>> 6)),
                      (e[t++] = 128 | ((63 & n) >>> 0)))
                    : ((e[t++] = 240 | ((1835008 & n) >>> 18)),
                      (e[t++] = 128 | ((258048 & n) >>> 12)),
                      (e[t++] = 128 | ((4032 & n) >>> 6)),
                      (e[t++] = 128 | ((63 & n) >>> 0))),
                  t >= 64 &&
                    (this._step(),
                    (t -= 64),
                    (this._totalLen += 64),
                    (e[0] = e[64]),
                    (e[1] = e[65]),
                    (e[2] = e[66])),
                  t
                );
              },
            },
            {
              key: "digest",
              value: function () {
                return (
                  this._finished ||
                    ((this._finished = !0),
                    this._leftoverHighSurrogate &&
                      ((this._leftoverHighSurrogate = 0),
                      (this._buffLen = this._push(
                        this._buff,
                        this._buffLen,
                        65533
                      ))),
                    (this._totalLen += this._buffLen),
                    this._wrapUp()),
                  J(this._h0) +
                    J(this._h1) +
                    J(this._h2) +
                    J(this._h3) +
                    J(this._h4)
                );
              },
            },
            {
              key: "_wrapUp",
              value: function () {
                (this._buff[this._buffLen++] = 128),
                  G(this._buff, this._buffLen),
                  this._buffLen > 56 && (this._step(), G(this._buff));
                var e = 8 * this._totalLen;
                this._buffDV.setUint32(56, Math.floor(e / 4294967296), !1),
                  this._buffDV.setUint32(60, e % 4294967296, !1),
                  this._step();
              },
            },
            {
              key: "_step",
              value: function () {
                for (
                  var t = e._bigBlock32, n = this._buffDV, r = 0;
                  r < 64;
                  r += 4
                )
                  t.setUint32(r, n.getUint32(r, !1), !1);
                for (var i = 64; i < 320; i += 4)
                  t.setUint32(
                    i,
                    Y(
                      t.getUint32(i - 12, !1) ^
                        t.getUint32(i - 32, !1) ^
                        t.getUint32(i - 56, !1) ^
                        t.getUint32(i - 64, !1),
                      1
                    ),
                    !1
                  );
                for (
                  var o,
                    a,
                    s,
                    u = this._h0,
                    c = this._h1,
                    l = this._h2,
                    f = this._h3,
                    h = this._h4,
                    d = 0;
                  d < 80;
                  d++
                )
                  d < 20
                    ? ((o = (c & l) | (~c & f)), (a = 1518500249))
                    : d < 40
                    ? ((o = c ^ l ^ f), (a = 1859775393))
                    : d < 60
                    ? ((o = (c & l) | (c & f) | (l & f)), (a = 2400959708))
                    : ((o = c ^ l ^ f), (a = 3395469782)),
                    (s =
                      (Y(u, 5) + o + h + a + t.getUint32(4 * d, !1)) &
                      4294967295),
                    (h = f),
                    (f = l),
                    (l = Y(c, 30)),
                    (c = u),
                    (u = s);
                (this._h0 = (this._h0 + u) & 4294967295),
                  (this._h1 = (this._h1 + c) & 4294967295),
                  (this._h2 = (this._h2 + l) & 4294967295),
                  (this._h3 = (this._h3 + f) & 4294967295),
                  (this._h4 = (this._h4 + h) & 4294967295);
              },
            },
          ]),
          e
        );
      })()._bigBlock32 = new DataView(new ArrayBuffer(320)));
    var Q = (function () {
      function e(t) {
        l(this, e), (this.source = t);
      }
      return (
        h(e, [
          {
            key: "getElements",
            value: function () {
              for (
                var e = this.source,
                  t = new Int32Array(e.length),
                  n = 0,
                  r = e.length;
                n < r;
                n++
              )
                t[n] = e.charCodeAt(n);
              return t;
            },
          },
        ]),
        e
      );
    })();
    function Z(e, t, n) {
      return new ne(new Q(e), new Q(t)).ComputeDiff(n).changes;
    }
    var X = (function () {
        function e() {
          l(this, e);
        }
        return (
          h(e, null, [
            {
              key: "Assert",
              value: function (e, t) {
                if (!e) throw new Error(t);
              },
            },
          ]),
          e
        );
      })(),
      ee = (function () {
        function e() {
          l(this, e);
        }
        return (
          h(e, null, [
            {
              key: "Copy",
              value: function (e, t, n, r, i) {
                for (var o = 0; o < i; o++) n[r + o] = e[t + o];
              },
            },
            {
              key: "Copy2",
              value: function (e, t, n, r, i) {
                for (var o = 0; o < i; o++) n[r + o] = e[t + o];
              },
            },
          ]),
          e
        );
      })(),
      te = (function () {
        function e() {
          l(this, e),
            (this.m_changes = []),
            (this.m_originalStart = 1073741824),
            (this.m_modifiedStart = 1073741824),
            (this.m_originalCount = 0),
            (this.m_modifiedCount = 0);
        }
        return (
          h(e, [
            {
              key: "MarkNextChange",
              value: function () {
                (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
                  this.m_changes.push(
                    new V(
                      this.m_originalStart,
                      this.m_originalCount,
                      this.m_modifiedStart,
                      this.m_modifiedCount
                    )
                  ),
                  (this.m_originalCount = 0),
                  (this.m_modifiedCount = 0),
                  (this.m_originalStart = 1073741824),
                  (this.m_modifiedStart = 1073741824);
              },
            },
            {
              key: "AddOriginalElement",
              value: function (e, t) {
                (this.m_originalStart = Math.min(this.m_originalStart, e)),
                  (this.m_modifiedStart = Math.min(this.m_modifiedStart, t)),
                  this.m_originalCount++;
              },
            },
            {
              key: "AddModifiedElement",
              value: function (e, t) {
                (this.m_originalStart = Math.min(this.m_originalStart, e)),
                  (this.m_modifiedStart = Math.min(this.m_modifiedStart, t)),
                  this.m_modifiedCount++;
              },
            },
            {
              key: "getChanges",
              value: function () {
                return (
                  (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
                    this.MarkNextChange(),
                  this.m_changes
                );
              },
            },
            {
              key: "getReverseChanges",
              value: function () {
                return (
                  (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
                    this.MarkNextChange(),
                  this.m_changes.reverse(),
                  this.m_changes
                );
              },
            },
          ]),
          e
        );
      })(),
      ne = (function () {
        function e(t, n) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          l(this, e), (this.ContinueProcessingPredicate = r);
          var i = e._getElements(t),
            o = U(i, 3),
            a = o[0],
            s = o[1],
            u = o[2],
            c = e._getElements(n),
            f = U(c, 3),
            h = f[0],
            d = f[1],
            m = f[2];
          (this._hasStrings = u && m),
            (this._originalStringElements = a),
            (this._originalElementsOrHash = s),
            (this._modifiedStringElements = h),
            (this._modifiedElementsOrHash = d),
            (this.m_forwardHistory = []),
            (this.m_reverseHistory = []);
        }
        return (
          h(
            e,
            [
              {
                key: "ElementsAreEqual",
                value: function (e, t) {
                  return (
                    this._originalElementsOrHash[e] ===
                      this._modifiedElementsOrHash[t] &&
                    (!this._hasStrings ||
                      this._originalStringElements[e] ===
                        this._modifiedStringElements[t])
                  );
                },
              },
              {
                key: "OriginalElementsAreEqual",
                value: function (e, t) {
                  return (
                    this._originalElementsOrHash[e] ===
                      this._originalElementsOrHash[t] &&
                    (!this._hasStrings ||
                      this._originalStringElements[e] ===
                        this._originalStringElements[t])
                  );
                },
              },
              {
                key: "ModifiedElementsAreEqual",
                value: function (e, t) {
                  return (
                    this._modifiedElementsOrHash[e] ===
                      this._modifiedElementsOrHash[t] &&
                    (!this._hasStrings ||
                      this._modifiedStringElements[e] ===
                        this._modifiedStringElements[t])
                  );
                },
              },
              {
                key: "ComputeDiff",
                value: function (e) {
                  return this._ComputeDiff(
                    0,
                    this._originalElementsOrHash.length - 1,
                    0,
                    this._modifiedElementsOrHash.length - 1,
                    e
                  );
                },
              },
              {
                key: "_ComputeDiff",
                value: function (e, t, n, r, i) {
                  var o = [!1],
                    a = this.ComputeDiffRecursive(e, t, n, r, o);
                  return (
                    i && (a = this.PrettifyChanges(a)),
                    { quitEarly: o[0], changes: a }
                  );
                },
              },
              {
                key: "ComputeDiffRecursive",
                value: function (e, t, n, r, i) {
                  for (
                    i[0] = !1;
                    e <= t && n <= r && this.ElementsAreEqual(e, n);

                  )
                    e++, n++;
                  for (; t >= e && r >= n && this.ElementsAreEqual(t, r); )
                    t--, r--;
                  var o;
                  if (e > t || n > r)
                    return (
                      n <= r
                        ? (X.Assert(
                            e === t + 1,
                            "originalStart should only be one more than originalEnd"
                          ),
                          (o = [new V(e, 0, n, r - n + 1)]))
                        : e <= t
                        ? (X.Assert(
                            n === r + 1,
                            "modifiedStart should only be one more than modifiedEnd"
                          ),
                          (o = [new V(e, t - e + 1, n, 0)]))
                        : (X.Assert(
                            e === t + 1,
                            "originalStart should only be one more than originalEnd"
                          ),
                          X.Assert(
                            n === r + 1,
                            "modifiedStart should only be one more than modifiedEnd"
                          ),
                          (o = [])),
                      o
                    );
                  var a = [0],
                    s = [0],
                    u = this.ComputeRecursionPoint(e, t, n, r, a, s, i),
                    c = a[0],
                    l = s[0];
                  if (null !== u) return u;
                  if (!i[0]) {
                    var f = this.ComputeDiffRecursive(e, c, n, l, i),
                      h = [];
                    return (
                      (h = i[0]
                        ? [
                            new V(
                              c + 1,
                              t - (c + 1) + 1,
                              l + 1,
                              r - (l + 1) + 1
                            ),
                          ]
                        : this.ComputeDiffRecursive(c + 1, t, l + 1, r, i)),
                      this.ConcatenateChanges(f, h)
                    );
                  }
                  return [new V(e, t - e + 1, n, r - n + 1)];
                },
              },
              {
                key: "WALKTRACE",
                value: function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  c,
                  l,
                  f,
                  h,
                  d,
                  m,
                  p,
                  g,
                  v
                ) {
                  var y,
                    b = null,
                    C = new te(),
                    _ = t,
                    S = n,
                    k = h[0] - p[0] - r,
                    x = -1073741824,
                    E = this.m_forwardHistory.length - 1;
                  do {
                    var A = k + e;
                    A === _ || (A < S && u[A - 1] < u[A + 1])
                      ? ((d = (l = u[A + 1]) - k - r),
                        l < x && C.MarkNextChange(),
                        (x = l),
                        C.AddModifiedElement(l + 1, d),
                        (k = A + 1 - e))
                      : ((d = (l = u[A - 1] + 1) - k - r),
                        l < x && C.MarkNextChange(),
                        (x = l - 1),
                        C.AddOriginalElement(l, d + 1),
                        (k = A - 1 - e)),
                      E >= 0 &&
                        ((e = (u = this.m_forwardHistory[E])[0]),
                        (_ = 1),
                        (S = u.length - 1));
                  } while (--E >= -1);
                  if (((y = C.getReverseChanges()), v[0])) {
                    var w = h[0] + 1,
                      N = p[0] + 1;
                    if (null !== y && y.length > 0) {
                      var L = y[y.length - 1];
                      (w = Math.max(w, L.getOriginalEnd())),
                        (N = Math.max(N, L.getModifiedEnd()));
                    }
                    b = [new V(w, f - w + 1, N, m - N + 1)];
                  } else {
                    (C = new te()),
                      (_ = o),
                      (S = a),
                      (k = h[0] - p[0] - s),
                      (x = 1073741824),
                      (E = g
                        ? this.m_reverseHistory.length - 1
                        : this.m_reverseHistory.length - 2);
                    do {
                      var T = k + i;
                      T === _ || (T < S && c[T - 1] >= c[T + 1])
                        ? ((d = (l = c[T + 1] - 1) - k - s),
                          l > x && C.MarkNextChange(),
                          (x = l + 1),
                          C.AddOriginalElement(l + 1, d + 1),
                          (k = T + 1 - i))
                        : ((d = (l = c[T - 1]) - k - s),
                          l > x && C.MarkNextChange(),
                          (x = l),
                          C.AddModifiedElement(l + 1, d + 1),
                          (k = T - 1 - i)),
                        E >= 0 &&
                          ((i = (c = this.m_reverseHistory[E])[0]),
                          (_ = 1),
                          (S = c.length - 1));
                    } while (--E >= -1);
                    b = C.getChanges();
                  }
                  return this.ConcatenateChanges(y, b);
                },
              },
              {
                key: "ComputeRecursionPoint",
                value: function (e, t, n, r, i, o, a) {
                  var s = 0,
                    u = 0,
                    c = 0,
                    l = 0,
                    f = 0,
                    h = 0;
                  e--,
                    n--,
                    (i[0] = 0),
                    (o[0] = 0),
                    (this.m_forwardHistory = []),
                    (this.m_reverseHistory = []);
                  var d = t - e + (r - n),
                    m = d + 1,
                    p = new Int32Array(m),
                    g = new Int32Array(m),
                    v = r - n,
                    y = t - e,
                    b = e - n,
                    C = t - r,
                    _ = (y - v) % 2 === 0;
                  (p[v] = e), (g[y] = t), (a[0] = !1);
                  for (var S = 1; S <= d / 2 + 1; S++) {
                    var k = 0,
                      x = 0;
                    (c = this.ClipDiagonalBound(v - S, S, v, m)),
                      (l = this.ClipDiagonalBound(v + S, S, v, m));
                    for (var E = c; E <= l; E += 2) {
                      u =
                        (s =
                          E === c || (E < l && p[E - 1] < p[E + 1])
                            ? p[E + 1]
                            : p[E - 1] + 1) -
                        (E - v) -
                        b;
                      for (
                        var A = s;
                        s < t && u < r && this.ElementsAreEqual(s + 1, u + 1);

                      )
                        s++, u++;
                      if (
                        ((p[E] = s),
                        s + u > k + x && ((k = s), (x = u)),
                        !_ && Math.abs(E - y) <= S - 1 && s >= g[E])
                      )
                        return (
                          (i[0] = s),
                          (o[0] = u),
                          A <= g[E] && S <= 1448
                            ? this.WALKTRACE(
                                v,
                                c,
                                l,
                                b,
                                y,
                                f,
                                h,
                                C,
                                p,
                                g,
                                s,
                                t,
                                i,
                                u,
                                r,
                                o,
                                _,
                                a
                              )
                            : null
                        );
                    }
                    var w = (k - e + (x - n) - S) / 2;
                    if (
                      null !== this.ContinueProcessingPredicate &&
                      !this.ContinueProcessingPredicate(k, w)
                    )
                      return (
                        (a[0] = !0),
                        (i[0] = k),
                        (o[0] = x),
                        w > 0 && S <= 1448
                          ? this.WALKTRACE(
                              v,
                              c,
                              l,
                              b,
                              y,
                              f,
                              h,
                              C,
                              p,
                              g,
                              s,
                              t,
                              i,
                              u,
                              r,
                              o,
                              _,
                              a
                            )
                          : (e++, n++, [new V(e, t - e + 1, n, r - n + 1)])
                      );
                    (f = this.ClipDiagonalBound(y - S, S, y, m)),
                      (h = this.ClipDiagonalBound(y + S, S, y, m));
                    for (var N = f; N <= h; N += 2) {
                      u =
                        (s =
                          N === f || (N < h && g[N - 1] >= g[N + 1])
                            ? g[N + 1] - 1
                            : g[N - 1]) -
                        (N - y) -
                        C;
                      for (
                        var L = s;
                        s > e && u > n && this.ElementsAreEqual(s, u);

                      )
                        s--, u--;
                      if (((g[N] = s), _ && Math.abs(N - v) <= S && s <= p[N]))
                        return (
                          (i[0] = s),
                          (o[0] = u),
                          L >= p[N] && S <= 1448
                            ? this.WALKTRACE(
                                v,
                                c,
                                l,
                                b,
                                y,
                                f,
                                h,
                                C,
                                p,
                                g,
                                s,
                                t,
                                i,
                                u,
                                r,
                                o,
                                _,
                                a
                              )
                            : null
                        );
                    }
                    if (S <= 1447) {
                      var T = new Int32Array(l - c + 2);
                      (T[0] = v - c + 1),
                        ee.Copy2(p, c, T, 1, l - c + 1),
                        this.m_forwardHistory.push(T),
                        ((T = new Int32Array(h - f + 2))[0] = y - f + 1),
                        ee.Copy2(g, f, T, 1, h - f + 1),
                        this.m_reverseHistory.push(T);
                    }
                  }
                  return this.WALKTRACE(
                    v,
                    c,
                    l,
                    b,
                    y,
                    f,
                    h,
                    C,
                    p,
                    g,
                    s,
                    t,
                    i,
                    u,
                    r,
                    o,
                    _,
                    a
                  );
                },
              },
              {
                key: "PrettifyChanges",
                value: function (e) {
                  for (var t = 0; t < e.length; t++) {
                    for (
                      var n = e[t],
                        r =
                          t < e.length - 1
                            ? e[t + 1].originalStart
                            : this._originalElementsOrHash.length,
                        i =
                          t < e.length - 1
                            ? e[t + 1].modifiedStart
                            : this._modifiedElementsOrHash.length,
                        o = n.originalLength > 0,
                        a = n.modifiedLength > 0;
                      n.originalStart + n.originalLength < r &&
                      n.modifiedStart + n.modifiedLength < i &&
                      (!o ||
                        this.OriginalElementsAreEqual(
                          n.originalStart,
                          n.originalStart + n.originalLength
                        )) &&
                      (!a ||
                        this.ModifiedElementsAreEqual(
                          n.modifiedStart,
                          n.modifiedStart + n.modifiedLength
                        ));

                    )
                      n.originalStart++, n.modifiedStart++;
                    var s = [null];
                    t < e.length - 1 &&
                      this.ChangesOverlap(e[t], e[t + 1], s) &&
                      ((e[t] = s[0]), e.splice(t + 1, 1), t--);
                  }
                  for (var u = e.length - 1; u >= 0; u--) {
                    var c = e[u],
                      l = 0,
                      f = 0;
                    if (u > 0) {
                      var h = e[u - 1];
                      h.originalLength > 0 &&
                        (l = h.originalStart + h.originalLength),
                        h.modifiedLength > 0 &&
                          (f = h.modifiedStart + h.modifiedLength);
                    }
                    for (
                      var d = c.originalLength > 0,
                        m = c.modifiedLength > 0,
                        p = 0,
                        g = this._boundaryScore(
                          c.originalStart,
                          c.originalLength,
                          c.modifiedStart,
                          c.modifiedLength
                        ),
                        v = 1;
                      ;
                      v++
                    ) {
                      var y = c.originalStart - v,
                        b = c.modifiedStart - v;
                      if (y < l || b < f) break;
                      if (
                        d &&
                        !this.OriginalElementsAreEqual(y, y + c.originalLength)
                      )
                        break;
                      if (
                        m &&
                        !this.ModifiedElementsAreEqual(b, b + c.modifiedLength)
                      )
                        break;
                      var C = this._boundaryScore(
                        y,
                        c.originalLength,
                        b,
                        c.modifiedLength
                      );
                      C > g && ((g = C), (p = v));
                    }
                    (c.originalStart -= p), (c.modifiedStart -= p);
                  }
                  return e;
                },
              },
              {
                key: "_OriginalIsBoundary",
                value: function (e) {
                  return (
                    e <= 0 ||
                    e >= this._originalElementsOrHash.length - 1 ||
                    (this._hasStrings &&
                      /^\s*$/.test(this._originalStringElements[e]))
                  );
                },
              },
              {
                key: "_OriginalRegionIsBoundary",
                value: function (e, t) {
                  if (
                    this._OriginalIsBoundary(e) ||
                    this._OriginalIsBoundary(e - 1)
                  )
                    return !0;
                  if (t > 0) {
                    var n = e + t;
                    if (
                      this._OriginalIsBoundary(n - 1) ||
                      this._OriginalIsBoundary(n)
                    )
                      return !0;
                  }
                  return !1;
                },
              },
              {
                key: "_ModifiedIsBoundary",
                value: function (e) {
                  return (
                    e <= 0 ||
                    e >= this._modifiedElementsOrHash.length - 1 ||
                    (this._hasStrings &&
                      /^\s*$/.test(this._modifiedStringElements[e]))
                  );
                },
              },
              {
                key: "_ModifiedRegionIsBoundary",
                value: function (e, t) {
                  if (
                    this._ModifiedIsBoundary(e) ||
                    this._ModifiedIsBoundary(e - 1)
                  )
                    return !0;
                  if (t > 0) {
                    var n = e + t;
                    if (
                      this._ModifiedIsBoundary(n - 1) ||
                      this._ModifiedIsBoundary(n)
                    )
                      return !0;
                  }
                  return !1;
                },
              },
              {
                key: "_boundaryScore",
                value: function (e, t, n, r) {
                  return (
                    (this._OriginalRegionIsBoundary(e, t) ? 1 : 0) +
                    (this._ModifiedRegionIsBoundary(n, r) ? 1 : 0)
                  );
                },
              },
              {
                key: "ConcatenateChanges",
                value: function (e, t) {
                  var n = [];
                  if (0 === e.length || 0 === t.length)
                    return t.length > 0 ? t : e;
                  if (this.ChangesOverlap(e[e.length - 1], t[0], n)) {
                    var r = new Array(e.length + t.length - 1);
                    return (
                      ee.Copy(e, 0, r, 0, e.length - 1),
                      (r[e.length - 1] = n[0]),
                      ee.Copy(t, 1, r, e.length, t.length - 1),
                      r
                    );
                  }
                  var i = new Array(e.length + t.length);
                  return (
                    ee.Copy(e, 0, i, 0, e.length),
                    ee.Copy(t, 0, i, e.length, t.length),
                    i
                  );
                },
              },
              {
                key: "ChangesOverlap",
                value: function (e, t, n) {
                  if (
                    (X.Assert(
                      e.originalStart <= t.originalStart,
                      "Left change is not less than or equal to right change"
                    ),
                    X.Assert(
                      e.modifiedStart <= t.modifiedStart,
                      "Left change is not less than or equal to right change"
                    ),
                    e.originalStart + e.originalLength >= t.originalStart ||
                      e.modifiedStart + e.modifiedLength >= t.modifiedStart)
                  ) {
                    var r = e.originalStart,
                      i = e.originalLength,
                      o = e.modifiedStart,
                      a = e.modifiedLength;
                    return (
                      e.originalStart + e.originalLength >= t.originalStart &&
                        (i =
                          t.originalStart + t.originalLength - e.originalStart),
                      e.modifiedStart + e.modifiedLength >= t.modifiedStart &&
                        (a =
                          t.modifiedStart + t.modifiedLength - e.modifiedStart),
                      (n[0] = new V(r, i, o, a)),
                      !0
                    );
                  }
                  return (n[0] = null), !1;
                },
              },
              {
                key: "ClipDiagonalBound",
                value: function (e, t, n, r) {
                  if (e >= 0 && e < r) return e;
                  var i = t % 2 === 0;
                  return e < 0
                    ? i === (n % 2 === 0)
                      ? 0
                      : 1
                    : i === ((r - n - 1) % 2 === 0)
                    ? r - 1
                    : r - 2;
                },
              },
            ],
            [
              {
                key: "_isStringArray",
                value: function (e) {
                  return e.length > 0 && "string" === typeof e[0];
                },
              },
              {
                key: "_getElements",
                value: function (t) {
                  var n = t.getElements();
                  if (e._isStringArray(n)) {
                    for (
                      var r = new Int32Array(n.length), i = 0, o = n.length;
                      i < o;
                      i++
                    )
                      r[i] = H(n[i], 0);
                    return [n, r, !0];
                  }
                  return n instanceof Int32Array
                    ? [[], n, !1]
                    : [[], new Int32Array(n), !1];
                },
              },
            ]
          ),
          e
        );
      })(),
      re = n(2),
      ie = (function (e) {
        i(n, e);
        var t = c(n);
        function n(e, r, i) {
          var o, a;
          l(this, n),
            "string" === typeof r && 0 === r.indexOf("not ")
              ? ((a = "must not be"), (r = r.replace(/^not /, "")))
              : (a = "must be");
          var s = -1 !== e.indexOf(".") ? "property" : "argument",
            u = 'The "'
              .concat(e, '" ')
              .concat(s, " ")
              .concat(a, " of type ")
              .concat(r);
          return (
            (u += ". Received type ".concat(typeof i)),
            ((o = t.call(this, u)).code = "ERR_INVALID_ARG_TYPE"),
            o
          );
        }
        return n;
      })(_(Error));
    function oe(e, t) {
      if ("string" !== typeof e) throw new ie(t, "string", e);
    }
    function ae(e) {
      return 47 === e || 92 === e;
    }
    function se(e) {
      return 47 === e;
    }
    function ue(e) {
      return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
    }
    function ce(e, t, n, r) {
      for (var i = "", o = 0, a = -1, s = 0, u = 0, c = 0; c <= e.length; ++c) {
        if (c < e.length) u = e.charCodeAt(c);
        else {
          if (r(u)) break;
          u = 47;
        }
        if (r(u)) {
          if (a === c - 1 || 1 === s);
          else if (2 === s) {
            if (
              i.length < 2 ||
              2 !== o ||
              46 !== i.charCodeAt(i.length - 1) ||
              46 !== i.charCodeAt(i.length - 2)
            ) {
              if (i.length > 2) {
                var l = i.lastIndexOf(n);
                -1 === l
                  ? ((i = ""), (o = 0))
                  : (o = (i = i.slice(0, l)).length - 1 - i.lastIndexOf(n)),
                  (a = c),
                  (s = 0);
                continue;
              }
              if (0 !== i.length) {
                (i = ""), (o = 0), (a = c), (s = 0);
                continue;
              }
            }
            t && ((i += i.length > 0 ? "".concat(n, "..") : ".."), (o = 2));
          } else
            i.length > 0
              ? (i += "".concat(n).concat(e.slice(a + 1, c)))
              : (i = e.slice(a + 1, c)),
              (o = c - a - 1);
          (a = c), (s = 0);
        } else 46 === u && -1 !== s ? ++s : (s = -1);
      }
      return i;
    }
    function le(e, t) {
      if (null === t || "object" !== typeof t)
        throw new ie("pathObject", "Object", t);
      var n = t.dir || t.root,
        r = t.base || "".concat(t.name || "").concat(t.ext || "");
      return n
        ? n === t.root
          ? "".concat(n).concat(r)
          : "".concat(n).concat(e).concat(r)
        : r;
    }
    var fe = {
        resolve: function () {
          for (
            var e = "", t = "", n = !1, r = arguments.length - 1;
            r >= -1;
            r--
          ) {
            var i = void 0;
            if (r >= 0) {
              if (
                (oe(
                  (i = r < 0 || arguments.length <= r ? void 0 : arguments[r]),
                  "path"
                ),
                0 === i.length)
              )
                continue;
            } else
              0 === e.length
                ? (i = re.a())
                : (void 0 === (i = re.b["=".concat(e)] || re.a()) ||
                    (i.slice(0, 2).toLowerCase() !== e.toLowerCase() &&
                      92 === i.charCodeAt(2))) &&
                  (i = "".concat(e, "\\"));
            var o = i.length,
              a = 0,
              s = "",
              u = !1,
              c = i.charCodeAt(0);
            if (1 === o) ae(c) && ((a = 1), (u = !0));
            else if (ae(c))
              if (((u = !0), ae(i.charCodeAt(1)))) {
                for (var l = 2, f = l; l < o && !ae(i.charCodeAt(l)); ) l++;
                if (l < o && l !== f) {
                  var h = i.slice(f, l);
                  for (f = l; l < o && ae(i.charCodeAt(l)); ) l++;
                  if (l < o && l !== f) {
                    for (f = l; l < o && !ae(i.charCodeAt(l)); ) l++;
                    (l !== o && l === f) ||
                      ((s = "\\\\".concat(h, "\\").concat(i.slice(f, l))),
                      (a = l));
                  }
                }
              } else a = 1;
            else
              ue(c) &&
                58 === i.charCodeAt(1) &&
                ((s = i.slice(0, 2)),
                (a = 2),
                o > 2 && ae(i.charCodeAt(2)) && ((u = !0), (a = 3)));
            if (s.length > 0)
              if (e.length > 0) {
                if (s.toLowerCase() !== e.toLowerCase()) continue;
              } else e = s;
            if (n) {
              if (e.length > 0) break;
            } else if (
              ((t = "".concat(i.slice(a), "\\").concat(t)),
              (n = u),
              u && e.length > 0)
            )
              break;
          }
          return (
            (t = ce(t, !n, "\\", ae)),
            n ? "".concat(e, "\\").concat(t) : "".concat(e).concat(t) || "."
          );
        },
        normalize: function (e) {
          oe(e, "path");
          var t = e.length;
          if (0 === t) return ".";
          var n,
            r = 0,
            i = !1,
            o = e.charCodeAt(0);
          if (1 === t) return se(o) ? "\\" : e;
          if (ae(o))
            if (((i = !0), ae(e.charCodeAt(1)))) {
              for (var a = 2, s = a; a < t && !ae(e.charCodeAt(a)); ) a++;
              if (a < t && a !== s) {
                var u = e.slice(s, a);
                for (s = a; a < t && ae(e.charCodeAt(a)); ) a++;
                if (a < t && a !== s) {
                  for (s = a; a < t && !ae(e.charCodeAt(a)); ) a++;
                  if (a === t)
                    return "\\\\".concat(u, "\\").concat(e.slice(s), "\\");
                  a !== s &&
                    ((n = "\\\\".concat(u, "\\").concat(e.slice(s, a))),
                    (r = a));
                }
              }
            } else r = 1;
          else
            ue(o) &&
              58 === e.charCodeAt(1) &&
              ((n = e.slice(0, 2)),
              (r = 2),
              t > 2 && ae(e.charCodeAt(2)) && ((i = !0), (r = 3)));
          var c = r < t ? ce(e.slice(r), !i, "\\", ae) : "";
          return (
            0 !== c.length || i || (c = "."),
            c.length > 0 && ae(e.charCodeAt(t - 1)) && (c += "\\"),
            void 0 === n
              ? i
                ? "\\".concat(c)
                : c
              : i
              ? "".concat(n, "\\").concat(c)
              : "".concat(n).concat(c)
          );
        },
        isAbsolute: function (e) {
          oe(e, "path");
          var t = e.length;
          if (0 === t) return !1;
          var n = e.charCodeAt(0);
          return (
            ae(n) ||
            (t > 2 && ue(n) && 58 === e.charCodeAt(1) && ae(e.charCodeAt(2)))
          );
        },
        join: function () {
          if (0 === arguments.length) return ".";
          for (var e, t, n = 0; n < arguments.length; ++n) {
            var r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
            oe(r, "path"),
              r.length > 0 &&
                (void 0 === e ? (e = t = r) : (e += "\\".concat(r)));
          }
          if (void 0 === e) return ".";
          var i = !0,
            o = 0;
          if ("string" === typeof t && ae(t.charCodeAt(0))) {
            ++o;
            var a = t.length;
            a > 1 &&
              ae(t.charCodeAt(1)) &&
              (++o, a > 2 && (ae(t.charCodeAt(2)) ? ++o : (i = !1)));
          }
          if (i) {
            for (; o < e.length && ae(e.charCodeAt(o)); ) o++;
            o >= 2 && (e = "\\".concat(e.slice(o)));
          }
          return fe.normalize(e);
        },
        relative: function (e, t) {
          if ((oe(e, "from"), oe(t, "to"), e === t)) return "";
          var n = fe.resolve(e),
            r = fe.resolve(t);
          if (n === r) return "";
          if ((e = n.toLowerCase()) === (t = r.toLowerCase())) return "";
          for (var i = 0; i < e.length && 92 === e.charCodeAt(i); ) i++;
          for (var o = e.length; o - 1 > i && 92 === e.charCodeAt(o - 1); ) o--;
          for (var a = o - i, s = 0; s < t.length && 92 === t.charCodeAt(s); )
            s++;
          for (var u = t.length; u - 1 > s && 92 === t.charCodeAt(u - 1); ) u--;
          for (var c = u - s, l = a < c ? a : c, f = -1, h = 0; h < l; h++) {
            var d = e.charCodeAt(i + h);
            if (d !== t.charCodeAt(s + h)) break;
            92 === d && (f = h);
          }
          if (h !== l) {
            if (-1 === f) return r;
          } else {
            if (c > l) {
              if (92 === t.charCodeAt(s + h)) return r.slice(s + h + 1);
              if (2 === h) return r.slice(s + h);
            }
            a > l &&
              (92 === e.charCodeAt(i + h) ? (f = h) : 2 === h && (f = 3)),
              -1 === f && (f = 0);
          }
          var m = "";
          for (h = i + f + 1; h <= o; ++h)
            (h !== o && 92 !== e.charCodeAt(h)) ||
              (m += 0 === m.length ? ".." : "\\..");
          return (
            (s += f),
            m.length > 0
              ? "".concat(m).concat(r.slice(s, u))
              : (92 === r.charCodeAt(s) && ++s, r.slice(s, u))
          );
        },
        toNamespacedPath: function (e) {
          if ("string" !== typeof e) return e;
          if (0 === e.length) return "";
          var t = fe.resolve(e);
          if (t.length <= 2) return e;
          if (92 === t.charCodeAt(0)) {
            if (92 === t.charCodeAt(1)) {
              var n = t.charCodeAt(2);
              if (63 !== n && 46 !== n)
                return "\\\\?\\UNC\\".concat(t.slice(2));
            }
          } else if (
            ue(t.charCodeAt(0)) &&
            58 === t.charCodeAt(1) &&
            92 === t.charCodeAt(2)
          )
            return "\\\\?\\".concat(t);
          return e;
        },
        dirname: function (e) {
          oe(e, "path");
          var t = e.length;
          if (0 === t) return ".";
          var n = -1,
            r = 0,
            i = e.charCodeAt(0);
          if (1 === t) return ae(i) ? e : ".";
          if (ae(i)) {
            if (((n = r = 1), ae(e.charCodeAt(1)))) {
              for (var o = 2, a = o; o < t && !ae(e.charCodeAt(o)); ) o++;
              if (o < t && o !== a) {
                for (a = o; o < t && ae(e.charCodeAt(o)); ) o++;
                if (o < t && o !== a) {
                  for (a = o; o < t && !ae(e.charCodeAt(o)); ) o++;
                  if (o === t) return e;
                  o !== a && (n = r = o + 1);
                }
              }
            }
          } else
            ue(i) &&
              58 === e.charCodeAt(1) &&
              (r = n = t > 2 && ae(e.charCodeAt(2)) ? 3 : 2);
          for (var s = -1, u = !0, c = t - 1; c >= r; --c)
            if (ae(e.charCodeAt(c))) {
              if (!u) {
                s = c;
                break;
              }
            } else u = !1;
          if (-1 === s) {
            if (-1 === n) return ".";
            s = n;
          }
          return e.slice(0, s);
        },
        basename: function (e, t) {
          void 0 !== t && oe(t, "ext"), oe(e, "path");
          var n,
            r = 0,
            i = -1,
            o = !0;
          if (
            (e.length >= 2 &&
              ue(e.charCodeAt(0)) &&
              58 === e.charCodeAt(1) &&
              (r = 2),
            void 0 !== t && t.length > 0 && t.length <= e.length)
          ) {
            if (t === e) return "";
            var a = t.length - 1,
              s = -1;
            for (n = e.length - 1; n >= r; --n) {
              var u = e.charCodeAt(n);
              if (ae(u)) {
                if (!o) {
                  r = n + 1;
                  break;
                }
              } else
                -1 === s && ((o = !1), (s = n + 1)),
                  a >= 0 &&
                    (u === t.charCodeAt(a)
                      ? -1 === --a && (i = n)
                      : ((a = -1), (i = s)));
            }
            return (
              r === i ? (i = s) : -1 === i && (i = e.length), e.slice(r, i)
            );
          }
          for (n = e.length - 1; n >= r; --n)
            if (ae(e.charCodeAt(n))) {
              if (!o) {
                r = n + 1;
                break;
              }
            } else -1 === i && ((o = !1), (i = n + 1));
          return -1 === i ? "" : e.slice(r, i);
        },
        extname: function (e) {
          oe(e, "path");
          var t = 0,
            n = -1,
            r = 0,
            i = -1,
            o = !0,
            a = 0;
          e.length >= 2 &&
            58 === e.charCodeAt(1) &&
            ue(e.charCodeAt(0)) &&
            (t = r = 2);
          for (var s = e.length - 1; s >= t; --s) {
            var u = e.charCodeAt(s);
            if (ae(u)) {
              if (!o) {
                r = s + 1;
                break;
              }
            } else
              -1 === i && ((o = !1), (i = s + 1)),
                46 === u
                  ? -1 === n
                    ? (n = s)
                    : 1 !== a && (a = 1)
                  : -1 !== n && (a = -1);
          }
          return -1 === n ||
            -1 === i ||
            0 === a ||
            (1 === a && n === i - 1 && n === r + 1)
            ? ""
            : e.slice(n, i);
        },
        format: le.bind(null, "\\"),
        parse: function (e) {
          oe(e, "path");
          var t = { root: "", dir: "", base: "", ext: "", name: "" };
          if (0 === e.length) return t;
          var n = e.length,
            r = 0,
            i = e.charCodeAt(0);
          if (1 === n)
            return ae(i)
              ? ((t.root = t.dir = e), t)
              : ((t.base = t.name = e), t);
          if (ae(i)) {
            if (((r = 1), ae(e.charCodeAt(1)))) {
              for (var o = 2, a = o; o < n && !ae(e.charCodeAt(o)); ) o++;
              if (o < n && o !== a) {
                for (a = o; o < n && ae(e.charCodeAt(o)); ) o++;
                if (o < n && o !== a) {
                  for (a = o; o < n && !ae(e.charCodeAt(o)); ) o++;
                  o === n ? (r = o) : o !== a && (r = o + 1);
                }
              }
            }
          } else if (ue(i) && 58 === e.charCodeAt(1)) {
            if (n <= 2) return (t.root = t.dir = e), t;
            if (((r = 2), ae(e.charCodeAt(2)))) {
              if (3 === n) return (t.root = t.dir = e), t;
              r = 3;
            }
          }
          r > 0 && (t.root = e.slice(0, r));
          for (
            var s = -1, u = r, c = -1, l = !0, f = e.length - 1, h = 0;
            f >= r;
            --f
          )
            if (ae((i = e.charCodeAt(f)))) {
              if (!l) {
                u = f + 1;
                break;
              }
            } else
              -1 === c && ((l = !1), (c = f + 1)),
                46 === i
                  ? -1 === s
                    ? (s = f)
                    : 1 !== h && (h = 1)
                  : -1 !== s && (h = -1);
          return (
            -1 !== c &&
              (-1 === s || 0 === h || (1 === h && s === c - 1 && s === u + 1)
                ? (t.base = t.name = e.slice(u, c))
                : ((t.name = e.slice(u, s)),
                  (t.base = e.slice(u, c)),
                  (t.ext = e.slice(s, c)))),
            (t.dir = u > 0 && u !== r ? e.slice(0, u - 1) : t.root),
            t
          );
        },
        sep: "\\",
        delimiter: ";",
        win32: null,
        posix: null,
      },
      he = {
        resolve: function () {
          for (
            var e = "", t = !1, n = arguments.length - 1;
            n >= -1 && !t;
            n--
          ) {
            var r =
              n >= 0
                ? n < 0 || arguments.length <= n
                  ? void 0
                  : arguments[n]
                : re.a();
            oe(r, "path"),
              0 !== r.length &&
                ((e = "".concat(r, "/").concat(e)),
                (t = 47 === r.charCodeAt(0)));
          }
          return (
            (e = ce(e, !t, "/", se)), t ? "/".concat(e) : e.length > 0 ? e : "."
          );
        },
        normalize: function (e) {
          if ((oe(e, "path"), 0 === e.length)) return ".";
          var t = 47 === e.charCodeAt(0),
            n = 47 === e.charCodeAt(e.length - 1);
          return 0 === (e = ce(e, !t, "/", se)).length
            ? t
              ? "/"
              : n
              ? "./"
              : "."
            : (n && (e += "/"), t ? "/".concat(e) : e);
        },
        isAbsolute: function (e) {
          return oe(e, "path"), e.length > 0 && 47 === e.charCodeAt(0);
        },
        join: function () {
          if (0 === arguments.length) return ".";
          for (var e, t = 0; t < arguments.length; ++t) {
            var n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
            oe(n, "path"),
              n.length > 0 && (void 0 === e ? (e = n) : (e += "/".concat(n)));
          }
          return void 0 === e ? "." : he.normalize(e);
        },
        relative: function (e, t) {
          if ((oe(e, "from"), oe(t, "to"), e === t)) return "";
          if ((e = he.resolve(e)) === (t = he.resolve(t))) return "";
          for (
            var n = e.length,
              r = n - 1,
              i = t.length - 1,
              o = r < i ? r : i,
              a = -1,
              s = 0;
            s < o;
            s++
          ) {
            var u = e.charCodeAt(1 + s);
            if (u !== t.charCodeAt(1 + s)) break;
            47 === u && (a = s);
          }
          if (s === o)
            if (i > o) {
              if (47 === t.charCodeAt(1 + s)) return t.slice(1 + s + 1);
              if (0 === s) return t.slice(1 + s);
            } else
              r > o &&
                (47 === e.charCodeAt(1 + s) ? (a = s) : 0 === s && (a = 0));
          var c = "";
          for (s = 1 + a + 1; s <= n; ++s)
            (s !== n && 47 !== e.charCodeAt(s)) ||
              (c += 0 === c.length ? ".." : "/..");
          return "".concat(c).concat(t.slice(1 + a));
        },
        toNamespacedPath: function (e) {
          return e;
        },
        dirname: function (e) {
          if ((oe(e, "path"), 0 === e.length)) return ".";
          for (
            var t = 47 === e.charCodeAt(0), n = -1, r = !0, i = e.length - 1;
            i >= 1;
            --i
          )
            if (47 === e.charCodeAt(i)) {
              if (!r) {
                n = i;
                break;
              }
            } else r = !1;
          return -1 === n
            ? t
              ? "/"
              : "."
            : t && 1 === n
            ? "//"
            : e.slice(0, n);
        },
        basename: function (e, t) {
          void 0 !== t && oe(t, "ext"), oe(e, "path");
          var n,
            r = 0,
            i = -1,
            o = !0;
          if (void 0 !== t && t.length > 0 && t.length <= e.length) {
            if (t === e) return "";
            var a = t.length - 1,
              s = -1;
            for (n = e.length - 1; n >= 0; --n) {
              var u = e.charCodeAt(n);
              if (47 === u) {
                if (!o) {
                  r = n + 1;
                  break;
                }
              } else
                -1 === s && ((o = !1), (s = n + 1)),
                  a >= 0 &&
                    (u === t.charCodeAt(a)
                      ? -1 === --a && (i = n)
                      : ((a = -1), (i = s)));
            }
            return (
              r === i ? (i = s) : -1 === i && (i = e.length), e.slice(r, i)
            );
          }
          for (n = e.length - 1; n >= 0; --n)
            if (47 === e.charCodeAt(n)) {
              if (!o) {
                r = n + 1;
                break;
              }
            } else -1 === i && ((o = !1), (i = n + 1));
          return -1 === i ? "" : e.slice(r, i);
        },
        extname: function (e) {
          oe(e, "path");
          for (
            var t = -1, n = 0, r = -1, i = !0, o = 0, a = e.length - 1;
            a >= 0;
            --a
          ) {
            var s = e.charCodeAt(a);
            if (47 !== s)
              -1 === r && ((i = !1), (r = a + 1)),
                46 === s
                  ? -1 === t
                    ? (t = a)
                    : 1 !== o && (o = 1)
                  : -1 !== t && (o = -1);
            else if (!i) {
              n = a + 1;
              break;
            }
          }
          return -1 === t ||
            -1 === r ||
            0 === o ||
            (1 === o && t === r - 1 && t === n + 1)
            ? ""
            : e.slice(t, r);
        },
        format: le.bind(null, "/"),
        parse: function (e) {
          oe(e, "path");
          var t = { root: "", dir: "", base: "", ext: "", name: "" };
          if (0 === e.length) return t;
          var n,
            r = 47 === e.charCodeAt(0);
          r ? ((t.root = "/"), (n = 1)) : (n = 0);
          for (
            var i = -1, o = 0, a = -1, s = !0, u = e.length - 1, c = 0;
            u >= n;
            --u
          ) {
            var l = e.charCodeAt(u);
            if (47 !== l)
              -1 === a && ((s = !1), (a = u + 1)),
                46 === l
                  ? -1 === i
                    ? (i = u)
                    : 1 !== c && (c = 1)
                  : -1 !== i && (c = -1);
            else if (!s) {
              o = u + 1;
              break;
            }
          }
          if (-1 !== a) {
            var f = 0 === o && r ? 1 : o;
            -1 === i || 0 === c || (1 === c && i === a - 1 && i === o + 1)
              ? (t.base = t.name = e.slice(f, a))
              : ((t.name = e.slice(f, i)),
                (t.base = e.slice(f, a)),
                (t.ext = e.slice(i, a)));
          }
          return o > 0 ? (t.dir = e.slice(0, o - 1)) : r && (t.dir = "/"), t;
        },
        sep: "/",
        delimiter: ":",
        win32: null,
        posix: null,
      };
    (he.win32 = fe.win32 = fe), (he.posix = fe.posix = he);
    "win32" === re.c ? fe.normalize : he.normalize,
      "win32" === re.c ? fe.resolve : he.resolve,
      "win32" === re.c ? fe.relative : he.relative,
      "win32" === re.c ? fe.dirname : he.dirname,
      "win32" === re.c ? fe.basename : he.basename,
      "win32" === re.c ? fe.extname : he.extname,
      "win32" === re.c ? fe.sep : he.sep;
    var de,
      me = /^\w[\w\d+.-]*$/,
      pe = /^\//,
      ge = /^\/\//;
    function ve(e, t) {
      if (!e.scheme && t)
        throw new Error(
          '[UriError]: Scheme is missing: {scheme: "", authority: "'
            .concat(e.authority, '", path: "')
            .concat(e.path, '", query: "')
            .concat(e.query, '", fragment: "')
            .concat(e.fragment, '"}')
        );
      if (e.scheme && !me.test(e.scheme))
        throw new Error("[UriError]: Scheme contains illegal characters.");
      if (e.path)
        if (e.authority) {
          if (!pe.test(e.path))
            throw new Error(
              '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
            );
        } else if (ge.test(e.path))
          throw new Error(
            '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
          );
    }
    function ye(e, t) {
      return e || t ? e : "file";
    }
    function be(e, t) {
      switch (e) {
        case "https":
        case "http":
        case "file":
          t ? t[0] !== Ce && (t = Ce + t) : (t = Ce);
      }
      return t;
    }
    var Ce = "/",
      _e = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
      Se = (function () {
        function e(t, n, r, i, o) {
          var a =
            arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          l(this, e),
            "object" === typeof t
              ? ((this.scheme = t.scheme || ""),
                (this.authority = t.authority || ""),
                (this.path = t.path || ""),
                (this.query = t.query || ""),
                (this.fragment = t.fragment || ""))
              : ((this.scheme = ye(t, a)),
                (this.authority = n || ""),
                (this.path = be(this.scheme, r || "")),
                (this.query = i || ""),
                (this.fragment = o || ""),
                ve(this, a));
        }
        return (
          h(
            e,
            [
              {
                key: "with",
                value: function (e) {
                  if (!e) return this;
                  var t = e.scheme,
                    n = e.authority,
                    r = e.path,
                    i = e.query,
                    o = e.fragment;
                  return (
                    void 0 === t ? (t = this.scheme) : null === t && (t = ""),
                    void 0 === n
                      ? (n = this.authority)
                      : null === n && (n = ""),
                    void 0 === r ? (r = this.path) : null === r && (r = ""),
                    void 0 === i ? (i = this.query) : null === i && (i = ""),
                    void 0 === o ? (o = this.fragment) : null === o && (o = ""),
                    t === this.scheme &&
                    n === this.authority &&
                    r === this.path &&
                    i === this.query &&
                    o === this.fragment
                      ? this
                      : new xe(t, n, r, i, o)
                  );
                },
              },
              {
                key: "toString",
                value: function () {
                  var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                  return Le(this, e);
                },
              },
              {
                key: "toJSON",
                value: function () {
                  return this;
                },
              },
              {
                key: "fsPath",
                get: function () {
                  return Ne(this, !1);
                },
              },
            ],
            [
              {
                key: "isUri",
                value: function (t) {
                  return (
                    t instanceof e ||
                    (!!t &&
                      "string" === typeof t.authority &&
                      "string" === typeof t.fragment &&
                      "string" === typeof t.path &&
                      "string" === typeof t.query &&
                      "string" === typeof t.scheme &&
                      "function" === typeof t.fsPath &&
                      "function" === typeof t.with &&
                      "function" === typeof t.toString)
                  );
                },
              },
              {
                key: "parse",
                value: function (e) {
                  var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n = _e.exec(e);
                  return n
                    ? new xe(
                        n[2] || "",
                        Oe(n[4] || ""),
                        Oe(n[5] || ""),
                        Oe(n[7] || ""),
                        Oe(n[9] || ""),
                        t
                      )
                    : new xe("", "", "", "", "");
                },
              },
              {
                key: "file",
                value: function (e) {
                  var t = "";
                  if (
                    (I.d && (e = e.replace(/\\/g, Ce)),
                    e[0] === Ce && e[1] === Ce)
                  ) {
                    var n = e.indexOf(Ce, 2);
                    -1 === n
                      ? ((t = e.substring(2)), (e = Ce))
                      : ((t = e.substring(2, n)), (e = e.substring(n) || Ce));
                  }
                  return new xe("file", t, e, "", "");
                },
              },
              {
                key: "from",
                value: function (e) {
                  return new xe(
                    e.scheme,
                    e.authority,
                    e.path,
                    e.query,
                    e.fragment
                  );
                },
              },
              {
                key: "joinPath",
                value: function (t) {
                  if (!t.path)
                    throw new Error(
                      "[UriError]: cannot call joinPaths on URI without path"
                    );
                  for (
                    var n,
                      r,
                      i,
                      o = arguments.length,
                      a = new Array(o > 1 ? o - 1 : 0),
                      s = 1;
                    s < o;
                    s++
                  )
                    a[s - 1] = arguments[s];
                  I.d && "file" === t.scheme
                    ? (n = e.file((r = fe).join.apply(r, [Ne(t, !0)].concat(a)))
                        .path)
                    : (n = (i = he).join.apply(i, [t.path].concat(a)));
                  return t.with({ path: n });
                },
              },
              {
                key: "revive",
                value: function (t) {
                  if (t) {
                    if (t instanceof e) return t;
                    var n = new xe(t);
                    return (
                      (n._formatted = t.external),
                      (n._fsPath = t._sep === ke ? t.fsPath : null),
                      n
                    );
                  }
                  return t;
                },
              },
            ]
          ),
          e
        );
      })(),
      ke = I.d ? 1 : void 0,
      xe = (function (e) {
        i(n, e);
        var t = c(n);
        function n() {
          var e;
          return (
            l(this, n),
            ((e = t.apply(this, arguments))._formatted = null),
            (e._fsPath = null),
            e
          );
        }
        return (
          h(n, [
            {
              key: "toString",
              value: function () {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                return e
                  ? Le(this, !0)
                  : (this._formatted || (this._formatted = Le(this, !1)),
                    this._formatted);
              },
            },
            {
              key: "toJSON",
              value: function () {
                var e = { $mid: 1 };
                return (
                  this._fsPath && ((e.fsPath = this._fsPath), (e._sep = ke)),
                  this._formatted && (e.external = this._formatted),
                  this.path && (e.path = this.path),
                  this.scheme && (e.scheme = this.scheme),
                  this.authority && (e.authority = this.authority),
                  this.query && (e.query = this.query),
                  this.fragment && (e.fragment = this.fragment),
                  e
                );
              },
            },
            {
              key: "fsPath",
              get: function () {
                return (
                  this._fsPath || (this._fsPath = Ne(this, !1)), this._fsPath
                );
              },
            },
          ]),
          n
        );
      })(Se),
      Ee =
        (S((de = {}), 58, "%3A"),
        S(de, 47, "%2F"),
        S(de, 63, "%3F"),
        S(de, 35, "%23"),
        S(de, 91, "%5B"),
        S(de, 93, "%5D"),
        S(de, 64, "%40"),
        S(de, 33, "%21"),
        S(de, 36, "%24"),
        S(de, 38, "%26"),
        S(de, 39, "%27"),
        S(de, 40, "%28"),
        S(de, 41, "%29"),
        S(de, 42, "%2A"),
        S(de, 43, "%2B"),
        S(de, 44, "%2C"),
        S(de, 59, "%3B"),
        S(de, 61, "%3D"),
        S(de, 32, "%20"),
        de);
    function Ae(e, t) {
      for (var n = void 0, r = -1, i = 0; i < e.length; i++) {
        var o = e.charCodeAt(i);
        if (
          (o >= 97 && o <= 122) ||
          (o >= 65 && o <= 90) ||
          (o >= 48 && o <= 57) ||
          45 === o ||
          46 === o ||
          95 === o ||
          126 === o ||
          (t && 47 === o)
        )
          -1 !== r && ((n += encodeURIComponent(e.substring(r, i))), (r = -1)),
            void 0 !== n && (n += e.charAt(i));
        else {
          void 0 === n && (n = e.substr(0, i));
          var a = Ee[o];
          void 0 !== a
            ? (-1 !== r &&
                ((n += encodeURIComponent(e.substring(r, i))), (r = -1)),
              (n += a))
            : -1 === r && (r = i);
        }
      }
      return (
        -1 !== r && (n += encodeURIComponent(e.substring(r))),
        void 0 !== n ? n : e
      );
    }
    function we(e) {
      for (var t = void 0, n = 0; n < e.length; n++) {
        var r = e.charCodeAt(n);
        35 === r || 63 === r
          ? (void 0 === t && (t = e.substr(0, n)), (t += Ee[r]))
          : void 0 !== t && (t += e[n]);
      }
      return void 0 !== t ? t : e;
    }
    function Ne(e, t) {
      var n;
      return (
        (n =
          e.authority && e.path.length > 1 && "file" === e.scheme
            ? "//".concat(e.authority).concat(e.path)
            : 47 === e.path.charCodeAt(0) &&
              ((e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90) ||
                (e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122)) &&
              58 === e.path.charCodeAt(2)
            ? t
              ? e.path.substr(1)
              : e.path[1].toLowerCase() + e.path.substr(2)
            : e.path),
        I.d && (n = n.replace(/\//g, "\\")),
        n
      );
    }
    function Le(e, t) {
      var n = t ? we : Ae,
        r = "",
        i = e.scheme,
        o = e.authority,
        a = e.path,
        s = e.query,
        u = e.fragment;
      if (
        (i && ((r += i), (r += ":")),
        (o || "file" === i) && ((r += Ce), (r += Ce)),
        o)
      ) {
        var c = o.indexOf("@");
        if (-1 !== c) {
          var l = o.substr(0, c);
          (o = o.substr(c + 1)),
            -1 === (c = l.indexOf(":"))
              ? (r += n(l, !1))
              : ((r += n(l.substr(0, c), !1)),
                (r += ":"),
                (r += n(l.substr(c + 1), !1))),
            (r += "@");
        }
        -1 === (c = (o = o.toLowerCase()).indexOf(":"))
          ? (r += n(o, !1))
          : ((r += n(o.substr(0, c), !1)), (r += o.substr(c)));
      }
      if (a) {
        if (a.length >= 3 && 47 === a.charCodeAt(0) && 58 === a.charCodeAt(2)) {
          var f = a.charCodeAt(1);
          f >= 65 &&
            f <= 90 &&
            (a = "/"
              .concat(String.fromCharCode(f + 32), ":")
              .concat(a.substr(3)));
        } else if (a.length >= 2 && 58 === a.charCodeAt(1)) {
          var h = a.charCodeAt(0);
          h >= 65 &&
            h <= 90 &&
            (a = ""
              .concat(String.fromCharCode(h + 32), ":")
              .concat(a.substr(2)));
        }
        r += n(a, !0);
      }
      return (
        s && ((r += "?"), (r += n(s, !1))),
        u && ((r += "#"), (r += t ? u : Ae(u, !1))),
        r
      );
    }
    var Te = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function Oe(e) {
      return e.match(Te)
        ? e.replace(Te, function (e) {
            return (function e(t) {
              try {
                return decodeURIComponent(t);
              } catch (n) {
                return t.length > 3 ? t.substr(0, 3) + e(t.substr(3)) : t;
              }
            })(e);
          })
        : e;
    }
    var Ie = (function () {
        function e(t, n) {
          l(this, e), (this.lineNumber = t), (this.column = n);
        }
        return (
          h(
            e,
            [
              {
                key: "with",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.lineNumber,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.column;
                  return t === this.lineNumber && n === this.column
                    ? this
                    : new e(t, n);
                },
              },
              {
                key: "delta",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0;
                  return this.with(this.lineNumber + e, this.column + t);
                },
              },
              {
                key: "equals",
                value: function (t) {
                  return e.equals(this, t);
                },
              },
              {
                key: "isBefore",
                value: function (t) {
                  return e.isBefore(this, t);
                },
              },
              {
                key: "isBeforeOrEqual",
                value: function (t) {
                  return e.isBeforeOrEqual(this, t);
                },
              },
              {
                key: "clone",
                value: function () {
                  return new e(this.lineNumber, this.column);
                },
              },
              {
                key: "toString",
                value: function () {
                  return "(" + this.lineNumber + "," + this.column + ")";
                },
              },
            ],
            [
              {
                key: "equals",
                value: function (e, t) {
                  return (
                    (!e && !t) ||
                    (!!e &&
                      !!t &&
                      e.lineNumber === t.lineNumber &&
                      e.column === t.column)
                  );
                },
              },
              {
                key: "isBefore",
                value: function (e, t) {
                  return (
                    e.lineNumber < t.lineNumber ||
                    (!(t.lineNumber < e.lineNumber) && e.column < t.column)
                  );
                },
              },
              {
                key: "isBeforeOrEqual",
                value: function (e, t) {
                  return (
                    e.lineNumber < t.lineNumber ||
                    (!(t.lineNumber < e.lineNumber) && e.column <= t.column)
                  );
                },
              },
              {
                key: "compare",
                value: function (e, t) {
                  var n = 0 | e.lineNumber,
                    r = 0 | t.lineNumber;
                  return n === r ? (0 | e.column) - (0 | t.column) : n - r;
                },
              },
              {
                key: "lift",
                value: function (t) {
                  return new e(t.lineNumber, t.column);
                },
              },
              {
                key: "isIPosition",
                value: function (e) {
                  return (
                    e &&
                    "number" === typeof e.lineNumber &&
                    "number" === typeof e.column
                  );
                },
              },
            ]
          ),
          e
        );
      })(),
      Pe = (function () {
        function e(t, n, r, i) {
          l(this, e),
            t > r || (t === r && n > i)
              ? ((this.startLineNumber = r),
                (this.startColumn = i),
                (this.endLineNumber = t),
                (this.endColumn = n))
              : ((this.startLineNumber = t),
                (this.startColumn = n),
                (this.endLineNumber = r),
                (this.endColumn = i));
        }
        return (
          h(
            e,
            [
              {
                key: "isEmpty",
                value: function () {
                  return e.isEmpty(this);
                },
              },
              {
                key: "containsPosition",
                value: function (t) {
                  return e.containsPosition(this, t);
                },
              },
              {
                key: "containsRange",
                value: function (t) {
                  return e.containsRange(this, t);
                },
              },
              {
                key: "strictContainsRange",
                value: function (t) {
                  return e.strictContainsRange(this, t);
                },
              },
              {
                key: "plusRange",
                value: function (t) {
                  return e.plusRange(this, t);
                },
              },
              {
                key: "intersectRanges",
                value: function (t) {
                  return e.intersectRanges(this, t);
                },
              },
              {
                key: "equalsRange",
                value: function (t) {
                  return e.equalsRange(this, t);
                },
              },
              {
                key: "getEndPosition",
                value: function () {
                  return e.getEndPosition(this);
                },
              },
              {
                key: "getStartPosition",
                value: function () {
                  return e.getStartPosition(this);
                },
              },
              {
                key: "toString",
                value: function () {
                  return (
                    "[" +
                    this.startLineNumber +
                    "," +
                    this.startColumn +
                    " -> " +
                    this.endLineNumber +
                    "," +
                    this.endColumn +
                    "]"
                  );
                },
              },
              {
                key: "setEndPosition",
                value: function (t, n) {
                  return new e(this.startLineNumber, this.startColumn, t, n);
                },
              },
              {
                key: "setStartPosition",
                value: function (t, n) {
                  return new e(t, n, this.endLineNumber, this.endColumn);
                },
              },
              {
                key: "collapseToStart",
                value: function () {
                  return e.collapseToStart(this);
                },
              },
            ],
            [
              {
                key: "isEmpty",
                value: function (e) {
                  return (
                    e.startLineNumber === e.endLineNumber &&
                    e.startColumn === e.endColumn
                  );
                },
              },
              {
                key: "containsPosition",
                value: function (e, t) {
                  return (
                    !(
                      t.lineNumber < e.startLineNumber ||
                      t.lineNumber > e.endLineNumber
                    ) &&
                    !(
                      t.lineNumber === e.startLineNumber &&
                      t.column < e.startColumn
                    ) &&
                    !(
                      t.lineNumber === e.endLineNumber && t.column > e.endColumn
                    )
                  );
                },
              },
              {
                key: "containsRange",
                value: function (e, t) {
                  return (
                    !(
                      t.startLineNumber < e.startLineNumber ||
                      t.endLineNumber < e.startLineNumber
                    ) &&
                    !(
                      t.startLineNumber > e.endLineNumber ||
                      t.endLineNumber > e.endLineNumber
                    ) &&
                    !(
                      t.startLineNumber === e.startLineNumber &&
                      t.startColumn < e.startColumn
                    ) &&
                    !(
                      t.endLineNumber === e.endLineNumber &&
                      t.endColumn > e.endColumn
                    )
                  );
                },
              },
              {
                key: "strictContainsRange",
                value: function (e, t) {
                  return (
                    !(
                      t.startLineNumber < e.startLineNumber ||
                      t.endLineNumber < e.startLineNumber
                    ) &&
                    !(
                      t.startLineNumber > e.endLineNumber ||
                      t.endLineNumber > e.endLineNumber
                    ) &&
                    !(
                      t.startLineNumber === e.startLineNumber &&
                      t.startColumn <= e.startColumn
                    ) &&
                    !(
                      t.endLineNumber === e.endLineNumber &&
                      t.endColumn >= e.endColumn
                    )
                  );
                },
              },
              {
                key: "plusRange",
                value: function (t, n) {
                  var r, i, o, a;
                  return (
                    n.startLineNumber < t.startLineNumber
                      ? ((r = n.startLineNumber), (i = n.startColumn))
                      : n.startLineNumber === t.startLineNumber
                      ? ((r = n.startLineNumber),
                        (i = Math.min(n.startColumn, t.startColumn)))
                      : ((r = t.startLineNumber), (i = t.startColumn)),
                    n.endLineNumber > t.endLineNumber
                      ? ((o = n.endLineNumber), (a = n.endColumn))
                      : n.endLineNumber === t.endLineNumber
                      ? ((o = n.endLineNumber),
                        (a = Math.max(n.endColumn, t.endColumn)))
                      : ((o = t.endLineNumber), (a = t.endColumn)),
                    new e(r, i, o, a)
                  );
                },
              },
              {
                key: "intersectRanges",
                value: function (t, n) {
                  var r = t.startLineNumber,
                    i = t.startColumn,
                    o = t.endLineNumber,
                    a = t.endColumn,
                    s = n.startLineNumber,
                    u = n.startColumn,
                    c = n.endLineNumber,
                    l = n.endColumn;
                  return (
                    r < s
                      ? ((r = s), (i = u))
                      : r === s && (i = Math.max(i, u)),
                    o > c
                      ? ((o = c), (a = l))
                      : o === c && (a = Math.min(a, l)),
                    r > o || (r === o && i > a) ? null : new e(r, i, o, a)
                  );
                },
              },
              {
                key: "equalsRange",
                value: function (e, t) {
                  return (
                    !!e &&
                    !!t &&
                    e.startLineNumber === t.startLineNumber &&
                    e.startColumn === t.startColumn &&
                    e.endLineNumber === t.endLineNumber &&
                    e.endColumn === t.endColumn
                  );
                },
              },
              {
                key: "getEndPosition",
                value: function (e) {
                  return new Ie(e.endLineNumber, e.endColumn);
                },
              },
              {
                key: "getStartPosition",
                value: function (e) {
                  return new Ie(e.startLineNumber, e.startColumn);
                },
              },
              {
                key: "collapseToStart",
                value: function (t) {
                  return new e(
                    t.startLineNumber,
                    t.startColumn,
                    t.startLineNumber,
                    t.startColumn
                  );
                },
              },
              {
                key: "fromPositions",
                value: function (t) {
                  var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : t;
                  return new e(t.lineNumber, t.column, n.lineNumber, n.column);
                },
              },
              {
                key: "lift",
                value: function (t) {
                  return t
                    ? new e(
                        t.startLineNumber,
                        t.startColumn,
                        t.endLineNumber,
                        t.endColumn
                      )
                    : null;
                },
              },
              {
                key: "isIRange",
                value: function (e) {
                  return (
                    e &&
                    "number" === typeof e.startLineNumber &&
                    "number" === typeof e.startColumn &&
                    "number" === typeof e.endLineNumber &&
                    "number" === typeof e.endColumn
                  );
                },
              },
              {
                key: "areIntersectingOrTouching",
                value: function (e, t) {
                  return (
                    !(
                      e.endLineNumber < t.startLineNumber ||
                      (e.endLineNumber === t.startLineNumber &&
                        e.endColumn < t.startColumn)
                    ) &&
                    !(
                      t.endLineNumber < e.startLineNumber ||
                      (t.endLineNumber === e.startLineNumber &&
                        t.endColumn < e.startColumn)
                    )
                  );
                },
              },
              {
                key: "areIntersecting",
                value: function (e, t) {
                  return (
                    !(
                      e.endLineNumber < t.startLineNumber ||
                      (e.endLineNumber === t.startLineNumber &&
                        e.endColumn <= t.startColumn)
                    ) &&
                    !(
                      t.endLineNumber < e.startLineNumber ||
                      (t.endLineNumber === e.startLineNumber &&
                        t.endColumn <= e.startColumn)
                    )
                  );
                },
              },
              {
                key: "compareRangesUsingStarts",
                value: function (e, t) {
                  if (e && t) {
                    var n = 0 | e.startLineNumber,
                      r = 0 | t.startLineNumber;
                    if (n === r) {
                      var i = 0 | e.startColumn,
                        o = 0 | t.startColumn;
                      if (i === o) {
                        var a = 0 | e.endLineNumber,
                          s = 0 | t.endLineNumber;
                        return a === s
                          ? (0 | e.endColumn) - (0 | t.endColumn)
                          : a - s;
                      }
                      return i - o;
                    }
                    return n - r;
                  }
                  return (e ? 1 : 0) - (t ? 1 : 0);
                },
              },
              {
                key: "compareRangesUsingEnds",
                value: function (e, t) {
                  return e.endLineNumber === t.endLineNumber
                    ? e.endColumn === t.endColumn
                      ? e.startLineNumber === t.startLineNumber
                        ? e.startColumn - t.startColumn
                        : e.startLineNumber - t.startLineNumber
                      : e.endColumn - t.endColumn
                    : e.endLineNumber - t.endLineNumber;
                },
              },
              {
                key: "spansMultipleLines",
                value: function (e) {
                  return e.endLineNumber > e.startLineNumber;
                },
              },
            ]
          ),
          e
        );
      })();
    function Me(e, t, n, r) {
      return new ne(e, t, n).ComputeDiff(r);
    }
    var Re = (function () {
        function e(t) {
          l(this, e);
          for (var n = [], r = [], i = 0, o = t.length; i < o; i++)
            (n[i] = Ve(t[i], 1)), (r[i] = We(t[i], 1));
          (this.lines = t), (this._startColumns = n), (this._endColumns = r);
        }
        return (
          h(e, [
            {
              key: "getElements",
              value: function () {
                for (var e = [], t = 0, n = this.lines.length; t < n; t++)
                  e[t] = this.lines[t].substring(
                    this._startColumns[t] - 1,
                    this._endColumns[t] - 1
                  );
                return e;
              },
            },
            {
              key: "getStartLineNumber",
              value: function (e) {
                return e + 1;
              },
            },
            {
              key: "getEndLineNumber",
              value: function (e) {
                return e + 1;
              },
            },
            {
              key: "createCharSequence",
              value: function (e, t, n) {
                for (var r = [], i = [], o = [], a = 0, s = t; s <= n; s++)
                  for (
                    var u = this.lines[s],
                      c = e ? this._startColumns[s] : 1,
                      l = e ? this._endColumns[s] : u.length + 1,
                      f = c;
                    f < l;
                    f++
                  )
                    (r[a] = u.charCodeAt(f - 1)),
                      (i[a] = s + 1),
                      (o[a] = f),
                      a++;
                return new je(r, i, o);
              },
            },
          ]),
          e
        );
      })(),
      je = (function () {
        function e(t, n, r) {
          l(this, e),
            (this._charCodes = t),
            (this._lineNumbers = n),
            (this._columns = r);
        }
        return (
          h(e, [
            {
              key: "getElements",
              value: function () {
                return this._charCodes;
              },
            },
            {
              key: "getStartLineNumber",
              value: function (e) {
                return this._lineNumbers[e];
              },
            },
            {
              key: "getStartColumn",
              value: function (e) {
                return this._columns[e];
              },
            },
            {
              key: "getEndLineNumber",
              value: function (e) {
                return this._lineNumbers[e];
              },
            },
            {
              key: "getEndColumn",
              value: function (e) {
                return this._columns[e] + 1;
              },
            },
          ]),
          e
        );
      })(),
      De = (function () {
        function e(t, n, r, i, o, a, s, u) {
          l(this, e),
            (this.originalStartLineNumber = t),
            (this.originalStartColumn = n),
            (this.originalEndLineNumber = r),
            (this.originalEndColumn = i),
            (this.modifiedStartLineNumber = o),
            (this.modifiedStartColumn = a),
            (this.modifiedEndLineNumber = s),
            (this.modifiedEndColumn = u);
        }
        return (
          h(e, null, [
            {
              key: "createFromDiffChange",
              value: function (t, n, r) {
                var i, o, a, s, u, c, l, f;
                return (
                  0 === t.originalLength
                    ? ((i = 0), (o = 0), (a = 0), (s = 0))
                    : ((i = n.getStartLineNumber(t.originalStart)),
                      (o = n.getStartColumn(t.originalStart)),
                      (a = n.getEndLineNumber(
                        t.originalStart + t.originalLength - 1
                      )),
                      (s = n.getEndColumn(
                        t.originalStart + t.originalLength - 1
                      ))),
                  0 === t.modifiedLength
                    ? ((u = 0), (c = 0), (l = 0), (f = 0))
                    : ((u = r.getStartLineNumber(t.modifiedStart)),
                      (c = r.getStartColumn(t.modifiedStart)),
                      (l = r.getEndLineNumber(
                        t.modifiedStart + t.modifiedLength - 1
                      )),
                      (f = r.getEndColumn(
                        t.modifiedStart + t.modifiedLength - 1
                      ))),
                  new e(i, o, a, s, u, c, l, f)
                );
              },
            },
          ]),
          e
        );
      })();
    var Fe = (function () {
        function e(t, n, r, i, o) {
          l(this, e),
            (this.originalStartLineNumber = t),
            (this.originalEndLineNumber = n),
            (this.modifiedStartLineNumber = r),
            (this.modifiedEndLineNumber = i),
            (this.charChanges = o);
        }
        return (
          h(e, null, [
            {
              key: "createFromDiffResult",
              value: function (t, n, r, i, o, a, s) {
                var u,
                  c,
                  l,
                  f,
                  h = void 0;
                if (
                  (0 === n.originalLength
                    ? ((u = r.getStartLineNumber(n.originalStart) - 1), (c = 0))
                    : ((u = r.getStartLineNumber(n.originalStart)),
                      (c = r.getEndLineNumber(
                        n.originalStart + n.originalLength - 1
                      ))),
                  0 === n.modifiedLength
                    ? ((l = i.getStartLineNumber(n.modifiedStart) - 1), (f = 0))
                    : ((l = i.getStartLineNumber(n.modifiedStart)),
                      (f = i.getEndLineNumber(
                        n.modifiedStart + n.modifiedLength - 1
                      ))),
                  a &&
                    n.originalLength > 0 &&
                    n.originalLength < 20 &&
                    n.modifiedLength > 0 &&
                    n.modifiedLength < 20 &&
                    o())
                ) {
                  var d = r.createCharSequence(
                      t,
                      n.originalStart,
                      n.originalStart + n.originalLength - 1
                    ),
                    m = i.createCharSequence(
                      t,
                      n.modifiedStart,
                      n.modifiedStart + n.modifiedLength - 1
                    ),
                    p = Me(d, m, o, !0).changes;
                  s &&
                    (p = (function (e) {
                      if (e.length <= 1) return e;
                      for (
                        var t = [e[0]], n = t[0], r = 1, i = e.length;
                        r < i;
                        r++
                      ) {
                        var o = e[r],
                          a =
                            o.originalStart -
                            (n.originalStart + n.originalLength),
                          s =
                            o.modifiedStart -
                            (n.modifiedStart + n.modifiedLength);
                        Math.min(a, s) < 3
                          ? ((n.originalLength =
                              o.originalStart +
                              o.originalLength -
                              n.originalStart),
                            (n.modifiedLength =
                              o.modifiedStart +
                              o.modifiedLength -
                              n.modifiedStart))
                          : (t.push(o), (n = o));
                      }
                      return t;
                    })(p)),
                    (h = []);
                  for (var g = 0, v = p.length; g < v; g++)
                    h.push(De.createFromDiffChange(p[g], d, m));
                }
                return new e(u, c, l, f, h);
              },
            },
          ]),
          e
        );
      })(),
      Ue = (function () {
        function e(t, n, r) {
          l(this, e),
            (this.shouldComputeCharChanges = r.shouldComputeCharChanges),
            (this.shouldPostProcessCharChanges =
              r.shouldPostProcessCharChanges),
            (this.shouldIgnoreTrimWhitespace = r.shouldIgnoreTrimWhitespace),
            (this.shouldMakePrettyDiff = r.shouldMakePrettyDiff),
            (this.originalLines = t),
            (this.modifiedLines = n),
            (this.original = new Re(t)),
            (this.modified = new Re(n)),
            (this.continueLineDiff = qe(r.maxComputationTime)),
            (this.continueCharDiff = qe(
              0 === r.maxComputationTime
                ? 0
                : Math.min(r.maxComputationTime, 5e3)
            ));
        }
        return (
          h(e, [
            {
              key: "computeDiff",
              value: function () {
                if (
                  1 === this.original.lines.length &&
                  0 === this.original.lines[0].length
                )
                  return {
                    quitEarly: !1,
                    changes: [
                      {
                        originalStartLineNumber: 1,
                        originalEndLineNumber: 1,
                        modifiedStartLineNumber: 1,
                        modifiedEndLineNumber: this.modified.lines.length,
                        charChanges: [
                          {
                            modifiedEndColumn: 0,
                            modifiedEndLineNumber: 0,
                            modifiedStartColumn: 0,
                            modifiedStartLineNumber: 0,
                            originalEndColumn: 0,
                            originalEndLineNumber: 0,
                            originalStartColumn: 0,
                            originalStartLineNumber: 0,
                          },
                        ],
                      },
                    ],
                  };
                if (
                  1 === this.modified.lines.length &&
                  0 === this.modified.lines[0].length
                )
                  return {
                    quitEarly: !1,
                    changes: [
                      {
                        originalStartLineNumber: 1,
                        originalEndLineNumber: this.original.lines.length,
                        modifiedStartLineNumber: 1,
                        modifiedEndLineNumber: 1,
                        charChanges: [
                          {
                            modifiedEndColumn: 0,
                            modifiedEndLineNumber: 0,
                            modifiedStartColumn: 0,
                            modifiedStartLineNumber: 0,
                            originalEndColumn: 0,
                            originalEndLineNumber: 0,
                            originalStartColumn: 0,
                            originalStartLineNumber: 0,
                          },
                        ],
                      },
                    ],
                  };
                var e = Me(
                    this.original,
                    this.modified,
                    this.continueLineDiff,
                    this.shouldMakePrettyDiff
                  ),
                  t = e.changes,
                  n = e.quitEarly;
                if (this.shouldIgnoreTrimWhitespace) {
                  for (var r = [], i = 0, o = t.length; i < o; i++)
                    r.push(
                      Fe.createFromDiffResult(
                        this.shouldIgnoreTrimWhitespace,
                        t[i],
                        this.original,
                        this.modified,
                        this.continueCharDiff,
                        this.shouldComputeCharChanges,
                        this.shouldPostProcessCharChanges
                      )
                    );
                  return { quitEarly: n, changes: r };
                }
                for (
                  var a = [], s = 0, u = 0, c = -1, l = t.length;
                  c < l;
                  c++
                ) {
                  for (
                    var f = c + 1 < l ? t[c + 1] : null,
                      h = f ? f.originalStart : this.originalLines.length,
                      d = f ? f.modifiedStart : this.modifiedLines.length;
                    s < h && u < d;

                  ) {
                    var m = this.originalLines[s],
                      p = this.modifiedLines[u];
                    if (m !== p) {
                      for (var g = Ve(m, 1), v = Ve(p, 1); g > 1 && v > 1; ) {
                        if (m.charCodeAt(g - 2) !== p.charCodeAt(v - 2)) break;
                        g--, v--;
                      }
                      (g > 1 || v > 1) &&
                        this._pushTrimWhitespaceCharChange(
                          a,
                          s + 1,
                          1,
                          g,
                          u + 1,
                          1,
                          v
                        );
                      for (
                        var y = We(m, 1),
                          b = We(p, 1),
                          C = m.length + 1,
                          _ = p.length + 1;
                        y < C && b < _;

                      ) {
                        if (m.charCodeAt(y - 1) !== m.charCodeAt(b - 1)) break;
                        y++, b++;
                      }
                      (y < C || b < _) &&
                        this._pushTrimWhitespaceCharChange(
                          a,
                          s + 1,
                          y,
                          C,
                          u + 1,
                          b,
                          _
                        );
                    }
                    s++, u++;
                  }
                  f &&
                    (a.push(
                      Fe.createFromDiffResult(
                        this.shouldIgnoreTrimWhitespace,
                        f,
                        this.original,
                        this.modified,
                        this.continueCharDiff,
                        this.shouldComputeCharChanges,
                        this.shouldPostProcessCharChanges
                      )
                    ),
                    (s += f.originalLength),
                    (u += f.modifiedLength));
                }
                return { quitEarly: n, changes: a };
              },
            },
            {
              key: "_pushTrimWhitespaceCharChange",
              value: function (e, t, n, r, i, o, a) {
                if (!this._mergeTrimWhitespaceCharChange(e, t, n, r, i, o, a)) {
                  var s = void 0;
                  this.shouldComputeCharChanges &&
                    (s = [new De(t, n, t, r, i, o, i, a)]),
                    e.push(new Fe(t, t, i, i, s));
                }
              },
            },
            {
              key: "_mergeTrimWhitespaceCharChange",
              value: function (e, t, n, r, i, o, a) {
                var s = e.length;
                if (0 === s) return !1;
                var u = e[s - 1];
                return (
                  0 !== u.originalEndLineNumber &&
                  0 !== u.modifiedEndLineNumber &&
                  u.originalEndLineNumber + 1 === t &&
                  u.modifiedEndLineNumber + 1 === i &&
                  ((u.originalEndLineNumber = t),
                  (u.modifiedEndLineNumber = i),
                  this.shouldComputeCharChanges &&
                    u.charChanges &&
                    u.charChanges.push(new De(t, n, t, r, i, o, i, a)),
                  !0)
                );
              },
            },
          ]),
          e
        );
      })();
    function Ve(e, t) {
      var n = (function (e) {
        for (var t = 0, n = e.length; t < n; t++) {
          var r = e.charCodeAt(t);
          if (32 !== r && 9 !== r) return t;
        }
        return -1;
      })(e);
      return -1 === n ? t : n + 1;
    }
    function We(e, t) {
      var n = (function (e) {
        for (
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : e.length - 1,
            n = t;
          n >= 0;
          n--
        ) {
          var r = e.charCodeAt(n);
          if (32 !== r && 9 !== r) return n;
        }
        return -1;
      })(e);
      return -1 === n ? t : n + 2;
    }
    function qe(e) {
      if (0 === e)
        return function () {
          return !0;
        };
      var t = Date.now();
      return function () {
        return Date.now() - t < e;
      };
    }
    function Ke(e) {
      return e < 0 ? 0 : e > 255 ? 255 : 0 | e;
    }
    function Be(e) {
      return e < 0 ? 0 : e > 4294967295 ? 4294967295 : 0 | e;
    }
    var $e = function e(t, n) {
        l(this, e), (this.index = t), (this.remainder = n);
      },
      He = (function () {
        function e(t) {
          l(this, e),
            (this.values = t),
            (this.prefixSum = new Uint32Array(t.length)),
            (this.prefixSumValidIndex = new Int32Array(1)),
            (this.prefixSumValidIndex[0] = -1);
        }
        return (
          h(e, [
            {
              key: "insertValues",
              value: function (e, t) {
                e = Be(e);
                var n = this.values,
                  r = this.prefixSum,
                  i = t.length;
                return (
                  0 !== i &&
                  ((this.values = new Uint32Array(n.length + i)),
                  this.values.set(n.subarray(0, e), 0),
                  this.values.set(n.subarray(e), e + i),
                  this.values.set(t, e),
                  e - 1 < this.prefixSumValidIndex[0] &&
                    (this.prefixSumValidIndex[0] = e - 1),
                  (this.prefixSum = new Uint32Array(this.values.length)),
                  this.prefixSumValidIndex[0] >= 0 &&
                    this.prefixSum.set(
                      r.subarray(0, this.prefixSumValidIndex[0] + 1)
                    ),
                  !0)
                );
              },
            },
            {
              key: "changeValue",
              value: function (e, t) {
                return (
                  (e = Be(e)),
                  (t = Be(t)),
                  this.values[e] !== t &&
                    ((this.values[e] = t),
                    e - 1 < this.prefixSumValidIndex[0] &&
                      (this.prefixSumValidIndex[0] = e - 1),
                    !0)
                );
              },
            },
            {
              key: "removeValues",
              value: function (e, t) {
                (e = Be(e)), (t = Be(t));
                var n = this.values,
                  r = this.prefixSum;
                if (e >= n.length) return !1;
                var i = n.length - e;
                return (
                  t >= i && (t = i),
                  0 !== t &&
                    ((this.values = new Uint32Array(n.length - t)),
                    this.values.set(n.subarray(0, e), 0),
                    this.values.set(n.subarray(e + t), e),
                    (this.prefixSum = new Uint32Array(this.values.length)),
                    e - 1 < this.prefixSumValidIndex[0] &&
                      (this.prefixSumValidIndex[0] = e - 1),
                    this.prefixSumValidIndex[0] >= 0 &&
                      this.prefixSum.set(
                        r.subarray(0, this.prefixSumValidIndex[0] + 1)
                      ),
                    !0)
                );
              },
            },
            {
              key: "getTotalValue",
              value: function () {
                return 0 === this.values.length
                  ? 0
                  : this._getAccumulatedValue(this.values.length - 1);
              },
            },
            {
              key: "getAccumulatedValue",
              value: function (e) {
                return e < 0 ? 0 : ((e = Be(e)), this._getAccumulatedValue(e));
              },
            },
            {
              key: "_getAccumulatedValue",
              value: function (e) {
                if (e <= this.prefixSumValidIndex[0]) return this.prefixSum[e];
                var t = this.prefixSumValidIndex[0] + 1;
                0 === t && ((this.prefixSum[0] = this.values[0]), t++),
                  e >= this.values.length && (e = this.values.length - 1);
                for (var n = t; n <= e; n++)
                  this.prefixSum[n] = this.prefixSum[n - 1] + this.values[n];
                return (
                  (this.prefixSumValidIndex[0] = Math.max(
                    this.prefixSumValidIndex[0],
                    e
                  )),
                  this.prefixSum[e]
                );
              },
            },
            {
              key: "getIndexOf",
              value: function (e) {
                (e = Math.floor(e)), this.getTotalValue();
                for (
                  var t = 0, n = this.values.length - 1, r = 0, i = 0, o = 0;
                  t <= n;

                )
                  if (
                    ((r = (t + (n - t) / 2) | 0),
                    e < (o = (i = this.prefixSum[r]) - this.values[r]))
                  )
                    n = r - 1;
                  else {
                    if (!(e >= i)) break;
                    t = r + 1;
                  }
                return new $e(r, e - o);
              },
            },
          ]),
          e
        );
      })(),
      Ye = (function () {
        function e(t, n, r, i) {
          l(this, e),
            (this._uri = t),
            (this._lines = n),
            (this._eol = r),
            (this._versionId = i),
            (this._lineStarts = null),
            (this._cachedTextValue = null);
        }
        return (
          h(e, [
            {
              key: "dispose",
              value: function () {
                this._lines.length = 0;
              },
            },
            {
              key: "getText",
              value: function () {
                return (
                  null === this._cachedTextValue &&
                    (this._cachedTextValue = this._lines.join(this._eol)),
                  this._cachedTextValue
                );
              },
            },
            {
              key: "onEvents",
              value: function (e) {
                e.eol &&
                  e.eol !== this._eol &&
                  ((this._eol = e.eol), (this._lineStarts = null));
                var t,
                  n = b(e.changes);
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var r = t.value;
                    this._acceptDeleteRange(r.range),
                      this._acceptInsertText(
                        new Ie(r.range.startLineNumber, r.range.startColumn),
                        r.text
                      );
                  }
                } catch (i) {
                  n.e(i);
                } finally {
                  n.f();
                }
                (this._versionId = e.versionId), (this._cachedTextValue = null);
              },
            },
            {
              key: "_ensureLineStarts",
              value: function () {
                if (!this._lineStarts) {
                  for (
                    var e = this._eol.length,
                      t = this._lines.length,
                      n = new Uint32Array(t),
                      r = 0;
                    r < t;
                    r++
                  )
                    n[r] = this._lines[r].length + e;
                  this._lineStarts = new He(n);
                }
              },
            },
            {
              key: "_setLineText",
              value: function (e, t) {
                (this._lines[e] = t),
                  this._lineStarts &&
                    this._lineStarts.changeValue(
                      e,
                      this._lines[e].length + this._eol.length
                    );
              },
            },
            {
              key: "_acceptDeleteRange",
              value: function (e) {
                if (e.startLineNumber !== e.endLineNumber)
                  this._setLineText(
                    e.startLineNumber - 1,
                    this._lines[e.startLineNumber - 1].substring(
                      0,
                      e.startColumn - 1
                    ) +
                      this._lines[e.endLineNumber - 1].substring(
                        e.endColumn - 1
                      )
                  ),
                    this._lines.splice(
                      e.startLineNumber,
                      e.endLineNumber - e.startLineNumber
                    ),
                    this._lineStarts &&
                      this._lineStarts.removeValues(
                        e.startLineNumber,
                        e.endLineNumber - e.startLineNumber
                      );
                else {
                  if (e.startColumn === e.endColumn) return;
                  this._setLineText(
                    e.startLineNumber - 1,
                    this._lines[e.startLineNumber - 1].substring(
                      0,
                      e.startColumn - 1
                    ) +
                      this._lines[e.startLineNumber - 1].substring(
                        e.endColumn - 1
                      )
                  );
                }
              },
            },
            {
              key: "_acceptInsertText",
              value: function (e, t) {
                if (0 !== t.length) {
                  var n = t.split(/\r\n|\r|\n/);
                  if (1 !== n.length) {
                    (n[n.length - 1] += this._lines[e.lineNumber - 1].substring(
                      e.column - 1
                    )),
                      this._setLineText(
                        e.lineNumber - 1,
                        this._lines[e.lineNumber - 1].substring(
                          0,
                          e.column - 1
                        ) + n[0]
                      );
                    for (
                      var r = new Uint32Array(n.length - 1), i = 1;
                      i < n.length;
                      i++
                    )
                      this._lines.splice(e.lineNumber + i - 1, 0, n[i]),
                        (r[i - 1] = n[i].length + this._eol.length);
                    this._lineStarts &&
                      this._lineStarts.insertValues(e.lineNumber, r);
                  } else
                    this._setLineText(
                      e.lineNumber - 1,
                      this._lines[e.lineNumber - 1].substring(0, e.column - 1) +
                        n[0] +
                        this._lines[e.lineNumber - 1].substring(e.column - 1)
                    );
                }
              },
            },
          ]),
          e
        );
      })();
    var Ge = (function () {
      var e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        n = "(-?\\d*\\.\\d\\w*)|([^",
        r = b("`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?");
      try {
        for (r.s(); !(e = r.n()).done; ) {
          var i = e.value;
          t.indexOf(i) >= 0 || (n += "\\" + i);
        }
      } catch (o) {
        r.e(o);
      } finally {
        r.f();
      }
      return (n += "\\s]+)"), new RegExp(n, "g");
    })();
    var ze = { maxLen: 1e3, windowSize: 15, timeBudget: 150 };
    function Je(e, t, n, r) {
      for (var i; (i = e.exec(t)); ) {
        var o = i.index || 0;
        if (o <= n && e.lastIndex >= n) return i;
        if (r > 0 && o > r) return null;
      }
      return null;
    }
    var Qe = (function () {
        function e(t) {
          l(this, e);
          var n = Ke(t);
          (this._defaultValue = n),
            (this._asciiMap = e._createAsciiMap(n)),
            (this._map = new Map());
        }
        return (
          h(
            e,
            [
              {
                key: "set",
                value: function (e, t) {
                  var n = Ke(t);
                  e >= 0 && e < 256
                    ? (this._asciiMap[e] = n)
                    : this._map.set(e, n);
                },
              },
              {
                key: "get",
                value: function (e) {
                  return e >= 0 && e < 256
                    ? this._asciiMap[e]
                    : this._map.get(e) || this._defaultValue;
                },
              },
            ],
            [
              {
                key: "_createAsciiMap",
                value: function (e) {
                  for (var t = new Uint8Array(256), n = 0; n < 256; n++)
                    t[n] = e;
                  return t;
                },
              },
            ]
          ),
          e
        );
      })(),
      Ze = (function () {
        function e(t, n, r) {
          l(this, e);
          for (var i = new Uint8Array(t * n), o = 0, a = t * n; o < a; o++)
            i[o] = r;
          (this._data = i), (this.rows = t), (this.cols = n);
        }
        return (
          h(e, [
            {
              key: "get",
              value: function (e, t) {
                return this._data[e * this.cols + t];
              },
            },
            {
              key: "set",
              value: function (e, t, n) {
                this._data[e * this.cols + t] = n;
              },
            },
          ]),
          e
        );
      })(),
      Xe = (function () {
        function e(t) {
          l(this, e);
          for (var n = 0, r = 0, i = 0, o = t.length; i < o; i++) {
            var a = U(t[i], 3),
              s = a[0],
              u = a[1],
              c = a[2];
            u > n && (n = u), s > r && (r = s), c > r && (r = c);
          }
          n++, r++;
          for (var f = new Ze(r, n, 0), h = 0, d = t.length; h < d; h++) {
            var m = U(t[h], 3),
              p = m[0],
              g = m[1],
              v = m[2];
            f.set(p, g, v);
          }
          (this._states = f), (this._maxCharCode = n);
        }
        return (
          h(e, [
            {
              key: "nextState",
              value: function (e, t) {
                return t < 0 || t >= this._maxCharCode
                  ? 0
                  : this._states.get(e, t);
              },
            },
          ]),
          e
        );
      })(),
      et = null;
    function tt() {
      return (
        null === et &&
          (et = new Xe([
            [1, 104, 2],
            [1, 72, 2],
            [1, 102, 6],
            [1, 70, 6],
            [2, 116, 3],
            [2, 84, 3],
            [3, 116, 4],
            [3, 84, 4],
            [4, 112, 5],
            [4, 80, 5],
            [5, 115, 9],
            [5, 83, 9],
            [5, 58, 10],
            [6, 105, 7],
            [6, 73, 7],
            [7, 108, 8],
            [7, 76, 8],
            [8, 101, 9],
            [8, 69, 9],
            [9, 58, 10],
            [10, 47, 11],
            [11, 47, 12],
          ])),
        et
      );
    }
    var nt = null;
    function rt() {
      if (null === nt) {
        nt = new Qe(0);
        for (
          var e = 0;
          e <
          " \t<>'\"\u3001\u3002\uff61\uff64\uff0c\uff0e\uff1a\uff1b\u2018\u201c\u3008\u300a\u300c\u300e\u3010\u3014\uff08\uff3b\uff5b\uff62\uff63\uff5d\uff3d\uff09\u3015\u3011\u300f\u300d\u300b\u3009\u201d\u2019\uff40\uff5e\u2026"
            .length;
          e++
        )
          nt.set(
            " \t<>'\"\u3001\u3002\uff61\uff64\uff0c\uff0e\uff1a\uff1b\u2018\u201c\u3008\u300a\u300c\u300e\u3010\u3014\uff08\uff3b\uff5b\uff62\uff63\uff5d\uff3d\uff09\u3015\u3011\u300f\u300d\u300b\u3009\u201d\u2019\uff40\uff5e\u2026".charCodeAt(
              e
            ),
            1
          );
        for (var t = 0; t < ".,;".length; t++) nt.set(".,;".charCodeAt(t), 2);
      }
      return nt;
    }
    var it = (function () {
      function e() {
        l(this, e);
      }
      return (
        h(e, null, [
          {
            key: "_createLink",
            value: function (e, t, n, r, i) {
              var o = i - 1;
              do {
                var a = t.charCodeAt(o);
                if (2 !== e.get(a)) break;
                o--;
              } while (o > r);
              if (r > 0) {
                var s = t.charCodeAt(r - 1),
                  u = t.charCodeAt(o);
                ((40 === s && 41 === u) ||
                  (91 === s && 93 === u) ||
                  (123 === s && 125 === u)) &&
                  o--;
              }
              return {
                range: {
                  startLineNumber: n,
                  startColumn: r + 1,
                  endLineNumber: n,
                  endColumn: o + 2,
                },
                url: t.substring(r, o + 1),
              };
            },
          },
          {
            key: "computeLinks",
            value: function (t) {
              for (
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : tt(),
                  r = rt(),
                  i = [],
                  o = 1,
                  a = t.getLineCount();
                o <= a;
                o++
              ) {
                for (
                  var s = t.getLineContent(o),
                    u = s.length,
                    c = 0,
                    l = 0,
                    f = 0,
                    h = 1,
                    d = !1,
                    m = !1,
                    p = !1,
                    g = !1;
                  c < u;

                ) {
                  var v = !1,
                    y = s.charCodeAt(c);
                  if (13 === h) {
                    var b = void 0;
                    switch (y) {
                      case 40:
                        (d = !0), (b = 0);
                        break;
                      case 41:
                        b = d ? 0 : 1;
                        break;
                      case 91:
                        (p = !0), (m = !0), (b = 0);
                        break;
                      case 93:
                        (p = !1), (b = m ? 0 : 1);
                        break;
                      case 123:
                        (g = !0), (b = 0);
                        break;
                      case 125:
                        b = g ? 0 : 1;
                        break;
                      case 39:
                        b = 34 === f || 96 === f ? 0 : 1;
                        break;
                      case 34:
                        b = 39 === f || 96 === f ? 0 : 1;
                        break;
                      case 96:
                        b = 39 === f || 34 === f ? 0 : 1;
                        break;
                      case 42:
                        b = 42 === f ? 1 : 0;
                        break;
                      case 124:
                        b = 124 === f ? 1 : 0;
                        break;
                      case 32:
                        b = p ? 0 : 1;
                        break;
                      default:
                        b = r.get(y);
                    }
                    1 === b && (i.push(e._createLink(r, s, o, l, c)), (v = !0));
                  } else if (12 === h) {
                    var C = void 0;
                    91 === y ? ((m = !0), (C = 0)) : (C = r.get(y)),
                      1 === C ? (v = !0) : (h = 13);
                  } else 0 === (h = n.nextState(h, y)) && (v = !0);
                  v &&
                    ((h = 1),
                    (d = !1),
                    (m = !1),
                    (g = !1),
                    (l = c + 1),
                    (f = y)),
                    c++;
                }
                13 === h && i.push(e._createLink(r, s, o, l, u));
              }
              return i;
            },
          },
        ]),
        e
      );
    })();
    function ot(e) {
      return e &&
        "function" === typeof e.getLineCount &&
        "function" === typeof e.getLineContent
        ? it.computeLinks(e)
        : [];
    }
    var at = (function () {
      function e() {
        l(this, e),
          (this._defaultValueSet = [
            ["true", "false"],
            ["True", "False"],
            [
              "Private",
              "Public",
              "Friend",
              "ReadOnly",
              "Partial",
              "Protected",
              "WriteOnly",
            ],
            ["public", "protected", "private"],
          ]);
      }
      return (
        h(e, [
          {
            key: "navigateValueSet",
            value: function (e, t, n, r, i) {
              if (e && t) {
                var o = this.doNavigateValueSet(t, i);
                if (o) return { range: e, value: o };
              }
              if (n && r) {
                var a = this.doNavigateValueSet(r, i);
                if (a) return { range: n, value: a };
              }
              return null;
            },
          },
          {
            key: "doNavigateValueSet",
            value: function (e, t) {
              var n = this.numberReplace(e, t);
              return null !== n ? n : this.textReplace(e, t);
            },
          },
          {
            key: "numberReplace",
            value: function (e, t) {
              var n = Math.pow(10, e.length - (e.lastIndexOf(".") + 1)),
                r = Number(e),
                i = parseFloat(e);
              return isNaN(r) || isNaN(i) || r !== i
                ? null
                : 0 !== r || t
                ? ((r = Math.floor(r * n)), (r += t ? n : -n), String(r / n))
                : null;
            },
          },
          {
            key: "textReplace",
            value: function (e, t) {
              return this.valueSetsReplace(this._defaultValueSet, e, t);
            },
          },
          {
            key: "valueSetsReplace",
            value: function (e, t, n) {
              for (var r = null, i = 0, o = e.length; null === r && i < o; i++)
                r = this.valueSetReplace(e[i], t, n);
              return r;
            },
          },
          {
            key: "valueSetReplace",
            value: function (e, t, n) {
              var r = e.indexOf(t);
              return r >= 0
                ? ((r += n ? 1 : -1) < 0 ? (r = e.length - 1) : (r %= e.length),
                  e[r])
                : null;
            },
          },
        ]),
        e
      );
    })();
    at.INSTANCE = new at();
    var st = function e(t) {
      l(this, e),
        (this.element = t),
        (this.next = e.Undefined),
        (this.prev = e.Undefined);
    };
    st.Undefined = new st(void 0);
    var ut,
      ct = (function () {
        function e() {
          l(this, e),
            (this._first = st.Undefined),
            (this._last = st.Undefined),
            (this._size = 0);
        }
        return (
          h(e, [
            {
              key: "isEmpty",
              value: function () {
                return this._first === st.Undefined;
              },
            },
            {
              key: "clear",
              value: function () {
                (this._first = st.Undefined),
                  (this._last = st.Undefined),
                  (this._size = 0);
              },
            },
            {
              key: "unshift",
              value: function (e) {
                return this._insert(e, !1);
              },
            },
            {
              key: "push",
              value: function (e) {
                return this._insert(e, !0);
              },
            },
            {
              key: "_insert",
              value: function (e, t) {
                var n = this,
                  r = new st(e);
                if (this._first === st.Undefined)
                  (this._first = r), (this._last = r);
                else if (t) {
                  var i = this._last;
                  (this._last = r), (r.prev = i), (i.next = r);
                } else {
                  var o = this._first;
                  (this._first = r), (r.next = o), (o.prev = r);
                }
                this._size += 1;
                var a = !1;
                return function () {
                  a || ((a = !0), n._remove(r));
                };
              },
            },
            {
              key: "shift",
              value: function () {
                if (this._first !== st.Undefined) {
                  var e = this._first.element;
                  return this._remove(this._first), e;
                }
              },
            },
            {
              key: "pop",
              value: function () {
                if (this._last !== st.Undefined) {
                  var e = this._last.element;
                  return this._remove(this._last), e;
                }
              },
            },
            {
              key: "_remove",
              value: function (e) {
                if (e.prev !== st.Undefined && e.next !== st.Undefined) {
                  var t = e.prev;
                  (t.next = e.next), (e.next.prev = t);
                } else
                  e.prev === st.Undefined && e.next === st.Undefined
                    ? ((this._first = st.Undefined),
                      (this._last = st.Undefined))
                    : e.next === st.Undefined
                    ? ((this._last = this._last.prev),
                      (this._last.next = st.Undefined))
                    : e.prev === st.Undefined &&
                      ((this._first = this._first.next),
                      (this._first.prev = st.Undefined));
                this._size -= 1;
              },
            },
            {
              key: Symbol.iterator,
              value: E.a.mark(function e() {
                var t;
                return E.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t = this._first;
                        case 1:
                          if (t === st.Undefined) {
                            e.next = 7;
                            break;
                          }
                          return (e.next = 4), t.element;
                        case 4:
                          (t = t.next), (e.next = 1);
                          break;
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              }),
            },
            {
              key: "toArray",
              value: function () {
                for (
                  var e = [], t = this._first;
                  t !== st.Undefined;
                  t = t.next
                )
                  e.push(t.element);
                return e;
              },
            },
            {
              key: "size",
              get: function () {
                return this._size;
              },
            },
          ]),
          e
        );
      })();
    !(function (e) {
      function t(e) {
        return function (t) {
          var n,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            i = arguments.length > 2 ? arguments[2] : void 0,
            o = !1;
          return (
            (n = e(
              function (e) {
                if (!o) return n ? n.dispose() : (o = !0), t.call(r, e);
              },
              null,
              i
            )),
            o && n.dispose(),
            n
          );
        };
      }
      function n(e, t) {
        return a(function (n) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            i = arguments.length > 2 ? arguments[2] : void 0;
          return e(
            function (e) {
              return n.call(r, t(e));
            },
            null,
            i
          );
        });
      }
      function r(e, t) {
        return a(function (n) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            i = arguments.length > 2 ? arguments[2] : void 0;
          return e(
            function (e) {
              t(e), n.call(r, e);
            },
            null,
            i
          );
        });
      }
      function i(e, t) {
        return a(function (n) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            i = arguments.length > 2 ? arguments[2] : void 0;
          return e(
            function (e) {
              return t(e) && n.call(r, e);
            },
            null,
            i
          );
        });
      }
      function o(e, t, r) {
        var i = r;
        return n(e, function (e) {
          return (i = t(i, e));
        });
      }
      function a(e) {
        var t,
          n = new lt({
            onFirstListenerAdd: function () {
              t = e(n.fire, n);
            },
            onLastListenerRemove: function () {
              t.dispose();
            },
          });
        return n.event;
      }
      function s(e, t) {
        var n,
          r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 100,
          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          o = arguments.length > 4 ? arguments[4] : void 0,
          a = void 0,
          s = void 0,
          u = 0,
          c = new lt({
            leakWarningThreshold: o,
            onFirstListenerAdd: function () {
              n = e(function (e) {
                u++,
                  (a = t(a, e)),
                  i && !s && (c.fire(a), (a = void 0)),
                  clearTimeout(s),
                  (s = setTimeout(function () {
                    var e = a;
                    (a = void 0),
                      (s = void 0),
                      (!i || u > 1) && c.fire(e),
                      (u = 0);
                  }, r));
              });
            },
            onLastListenerRemove: function () {
              n.dispose();
            },
          });
        return c.event;
      }
      function u(e) {
        var t,
          n = !0;
        return i(e, function (e) {
          var r = n || e !== t;
          return (n = !1), (t = e), r;
        });
      }
      (e.None = function () {
        return O.None;
      }),
        (e.once = t),
        (e.map = n),
        (e.forEach = r),
        (e.filter = i),
        (e.signal = function (e) {
          return e;
        }),
        (e.any = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return function (e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null,
              r = arguments.length > 2 ? arguments[2] : void 0;
            return L.apply(
              void 0,
              D(
                t.map(function (t) {
                  return t(
                    function (t) {
                      return e.call(n, t);
                    },
                    null,
                    r
                  );
                })
              )
            );
          };
        }),
        (e.reduce = o),
        (e.snapshot = a),
        (e.debounce = s),
        (e.stopwatch = function (e) {
          var r = new Date().getTime();
          return n(t(e), function (e) {
            return new Date().getTime() - r;
          });
        }),
        (e.latch = u),
        (e.buffer = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [],
            r = n.slice(),
            i = e(function (e) {
              r ? r.push(e) : a.fire(e);
            }),
            o = function () {
              r &&
                r.forEach(function (e) {
                  return a.fire(e);
                }),
                (r = null);
            },
            a = new lt({
              onFirstListenerAdd: function () {
                i ||
                  (i = e(function (e) {
                    return a.fire(e);
                  }));
              },
              onFirstListenerDidAdd: function () {
                r && (t ? setTimeout(o) : o());
              },
              onLastListenerRemove: function () {
                i && i.dispose(), (i = null);
              },
            });
          return a.event;
        });
      var c = (function () {
        function e(t) {
          l(this, e), (this.event = t);
        }
        return (
          h(e, [
            {
              key: "map",
              value: function (t) {
                return new e(n(this.event, t));
              },
            },
            {
              key: "forEach",
              value: function (t) {
                return new e(r(this.event, t));
              },
            },
            {
              key: "filter",
              value: function (t) {
                return new e(i(this.event, t));
              },
            },
            {
              key: "reduce",
              value: function (t, n) {
                return new e(o(this.event, t, n));
              },
            },
            {
              key: "latch",
              value: function () {
                return new e(u(this.event));
              },
            },
            {
              key: "debounce",
              value: function (t) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 100,
                  r =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  i = arguments.length > 3 ? arguments[3] : void 0;
                return new e(s(this.event, t, n, r, i));
              },
            },
            {
              key: "on",
              value: function (e, t, n) {
                return this.event(e, t, n);
              },
            },
            {
              key: "once",
              value: function (e, n, r) {
                return t(this.event)(e, n, r);
              },
            },
          ]),
          e
        );
      })();
      (e.chain = function (e) {
        return new c(e);
      }),
        (e.fromNodeEventEmitter = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : function (e) {
                    return e;
                  },
            r = function () {
              return a.fire(n.apply(void 0, arguments));
            },
            i = function () {
              return e.on(t, r);
            },
            o = function () {
              return e.removeListener(t, r);
            },
            a = new lt({ onFirstListenerAdd: i, onLastListenerRemove: o });
          return a.event;
        }),
        (e.fromDOMEventEmitter = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : function (e) {
                    return e;
                  },
            r = function () {
              return a.fire(n.apply(void 0, arguments));
            },
            i = function () {
              return e.addEventListener(t, r);
            },
            o = function () {
              return e.removeEventListener(t, r);
            },
            a = new lt({ onFirstListenerAdd: i, onLastListenerRemove: o });
          return a.event;
        }),
        (e.fromPromise = function (e) {
          var t = new lt(),
            n = !1;
          return (
            e
              .then(void 0, function () {
                return null;
              })
              .then(function () {
                n
                  ? t.fire(void 0)
                  : setTimeout(function () {
                      return t.fire(void 0);
                    }, 0);
              }),
            (n = !0),
            t.event
          );
        }),
        (e.toPromise = function (e) {
          return new Promise(function (n) {
            return t(e)(n);
          });
        });
    })(ut || (ut = {}));
    var lt = (function () {
      function e(t) {
        l(this, e),
          (this._disposed = !1),
          (this._options = t),
          (this._leakageMon = void 0);
      }
      return (
        h(e, [
          {
            key: "fire",
            value: function (e) {
              if (this._listeners) {
                this._deliveryQueue || (this._deliveryQueue = new ct());
                var t,
                  n = b(this._listeners);
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var r = t.value;
                    this._deliveryQueue.push([r, e]);
                  }
                } catch (s) {
                  n.e(s);
                } finally {
                  n.f();
                }
                for (; this._deliveryQueue.size > 0; ) {
                  var i = U(this._deliveryQueue.shift(), 2),
                    o = i[0],
                    a = i[1];
                  try {
                    "function" === typeof o
                      ? o.call(void 0, a)
                      : o[0].call(o[1], a);
                  } catch (u) {
                    m(u);
                  }
                }
              }
            },
          },
          {
            key: "dispose",
            value: function () {
              this._listeners && this._listeners.clear(),
                this._deliveryQueue && this._deliveryQueue.clear(),
                this._leakageMon && this._leakageMon.dispose(),
                (this._disposed = !0);
            },
          },
          {
            key: "event",
            get: function () {
              var t = this;
              return (
                this._event ||
                  (this._event = function (n, r, i) {
                    t._listeners || (t._listeners = new ct());
                    var o = t._listeners.isEmpty();
                    o &&
                      t._options &&
                      t._options.onFirstListenerAdd &&
                      t._options.onFirstListenerAdd(t);
                    var a,
                      s,
                      u = t._listeners.push(r ? [n, r] : n);
                    return (
                      o &&
                        t._options &&
                        t._options.onFirstListenerDidAdd &&
                        t._options.onFirstListenerDidAdd(t),
                      t._options &&
                        t._options.onListenerDidAdd &&
                        t._options.onListenerDidAdd(t, n, r),
                      t._leakageMon &&
                        (a = t._leakageMon.check(t._listeners.size)),
                      (s = {
                        dispose: function () {
                          (a && a(), (s.dispose = e._noop), t._disposed) ||
                            (u(),
                            t._options &&
                              t._options.onLastListenerRemove &&
                              ((t._listeners && !t._listeners.isEmpty()) ||
                                t._options.onLastListenerRemove(t)));
                        },
                      }),
                      i instanceof T ? i.add(s) : Array.isArray(i) && i.push(s),
                      s
                    );
                  }),
                this._event
              );
            },
          },
        ]),
        e
      );
    })();
    lt._noop = function () {};
    var ft,
      ht,
      dt = Object.freeze(function (e, t) {
        var n = setTimeout(e.bind(t), 0);
        return {
          dispose: function () {
            clearTimeout(n);
          },
        };
      });
    ((ht = ft || (ft = {})).isCancellationToken = function (e) {
      return (
        e === ht.None ||
        e === ht.Cancelled ||
        e instanceof pt ||
        (!(!e || "object" !== typeof e) &&
          "boolean" === typeof e.isCancellationRequested &&
          "function" === typeof e.onCancellationRequested)
      );
    }),
      (ht.None = Object.freeze({
        isCancellationRequested: !1,
        onCancellationRequested: ut.None,
      })),
      (ht.Cancelled = Object.freeze({
        isCancellationRequested: !0,
        onCancellationRequested: dt,
      }));
    var mt,
      pt = (function () {
        function e() {
          l(this, e), (this._isCancelled = !1), (this._emitter = null);
        }
        return (
          h(e, [
            {
              key: "cancel",
              value: function () {
                this._isCancelled ||
                  ((this._isCancelled = !0),
                  this._emitter &&
                    (this._emitter.fire(void 0), this.dispose()));
              },
            },
            {
              key: "dispose",
              value: function () {
                this._emitter &&
                  (this._emitter.dispose(), (this._emitter = null));
              },
            },
            {
              key: "isCancellationRequested",
              get: function () {
                return this._isCancelled;
              },
            },
            {
              key: "onCancellationRequested",
              get: function () {
                return this._isCancelled
                  ? dt
                  : (this._emitter || (this._emitter = new lt()),
                    this._emitter.event);
              },
            },
          ]),
          e
        );
      })(),
      gt = (function () {
        function e(t) {
          l(this, e),
            (this._token = void 0),
            (this._parentListener = void 0),
            (this._parentListener =
              t && t.onCancellationRequested(this.cancel, this));
        }
        return (
          h(e, [
            {
              key: "cancel",
              value: function () {
                this._token
                  ? this._token instanceof pt && this._token.cancel()
                  : (this._token = ft.Cancelled);
              },
            },
            {
              key: "dispose",
              value: function () {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                e && this.cancel(),
                  this._parentListener && this._parentListener.dispose(),
                  this._token
                    ? this._token instanceof pt && this._token.dispose()
                    : (this._token = ft.None);
              },
            },
            {
              key: "token",
              get: function () {
                return this._token || (this._token = new pt()), this._token;
              },
            },
          ]),
          e
        );
      })(),
      vt = (function () {
        function e() {
          l(this, e),
            (this._keyCodeToStr = []),
            (this._strToKeyCode = Object.create(null));
        }
        return (
          h(e, [
            {
              key: "define",
              value: function (e, t) {
                (this._keyCodeToStr[e] = t),
                  (this._strToKeyCode[t.toLowerCase()] = e);
              },
            },
            {
              key: "keyCodeToStr",
              value: function (e) {
                return this._keyCodeToStr[e];
              },
            },
            {
              key: "strToKeyCode",
              value: function (e) {
                return this._strToKeyCode[e.toLowerCase()] || 0;
              },
            },
          ]),
          e
        );
      })(),
      yt = new vt(),
      bt = new vt(),
      Ct = new vt();
    !(function () {
      function e(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n;
        yt.define(e, t), bt.define(e, n), Ct.define(e, r);
      }
      e(0, "unknown"),
        e(1, "Backspace"),
        e(2, "Tab"),
        e(3, "Enter"),
        e(4, "Shift"),
        e(5, "Ctrl"),
        e(6, "Alt"),
        e(7, "PauseBreak"),
        e(8, "CapsLock"),
        e(9, "Escape"),
        e(10, "Space"),
        e(11, "PageUp"),
        e(12, "PageDown"),
        e(13, "End"),
        e(14, "Home"),
        e(15, "LeftArrow", "Left"),
        e(16, "UpArrow", "Up"),
        e(17, "RightArrow", "Right"),
        e(18, "DownArrow", "Down"),
        e(19, "Insert"),
        e(20, "Delete"),
        e(21, "0"),
        e(22, "1"),
        e(23, "2"),
        e(24, "3"),
        e(25, "4"),
        e(26, "5"),
        e(27, "6"),
        e(28, "7"),
        e(29, "8"),
        e(30, "9"),
        e(31, "A"),
        e(32, "B"),
        e(33, "C"),
        e(34, "D"),
        e(35, "E"),
        e(36, "F"),
        e(37, "G"),
        e(38, "H"),
        e(39, "I"),
        e(40, "J"),
        e(41, "K"),
        e(42, "L"),
        e(43, "M"),
        e(44, "N"),
        e(45, "O"),
        e(46, "P"),
        e(47, "Q"),
        e(48, "R"),
        e(49, "S"),
        e(50, "T"),
        e(51, "U"),
        e(52, "V"),
        e(53, "W"),
        e(54, "X"),
        e(55, "Y"),
        e(56, "Z"),
        e(57, "Meta"),
        e(58, "ContextMenu"),
        e(59, "F1"),
        e(60, "F2"),
        e(61, "F3"),
        e(62, "F4"),
        e(63, "F5"),
        e(64, "F6"),
        e(65, "F7"),
        e(66, "F8"),
        e(67, "F9"),
        e(68, "F10"),
        e(69, "F11"),
        e(70, "F12"),
        e(71, "F13"),
        e(72, "F14"),
        e(73, "F15"),
        e(74, "F16"),
        e(75, "F17"),
        e(76, "F18"),
        e(77, "F19"),
        e(78, "NumLock"),
        e(79, "ScrollLock"),
        e(80, ";", ";", "OEM_1"),
        e(81, "=", "=", "OEM_PLUS"),
        e(82, ",", ",", "OEM_COMMA"),
        e(83, "-", "-", "OEM_MINUS"),
        e(84, ".", ".", "OEM_PERIOD"),
        e(85, "/", "/", "OEM_2"),
        e(86, "`", "`", "OEM_3"),
        e(110, "ABNT_C1"),
        e(111, "ABNT_C2"),
        e(87, "[", "[", "OEM_4"),
        e(88, "\\", "\\", "OEM_5"),
        e(89, "]", "]", "OEM_6"),
        e(90, "'", "'", "OEM_7"),
        e(91, "OEM_8"),
        e(92, "OEM_102"),
        e(93, "NumPad0"),
        e(94, "NumPad1"),
        e(95, "NumPad2"),
        e(96, "NumPad3"),
        e(97, "NumPad4"),
        e(98, "NumPad5"),
        e(99, "NumPad6"),
        e(100, "NumPad7"),
        e(101, "NumPad8"),
        e(102, "NumPad9"),
        e(103, "NumPad_Multiply"),
        e(104, "NumPad_Add"),
        e(105, "NumPad_Separator"),
        e(106, "NumPad_Subtract"),
        e(107, "NumPad_Decimal"),
        e(108, "NumPad_Divide");
    })(),
      (function (e) {
        (e.toString = function (e) {
          return yt.keyCodeToStr(e);
        }),
          (e.fromString = function (e) {
            return yt.strToKeyCode(e);
          }),
          (e.toUserSettingsUS = function (e) {
            return bt.keyCodeToStr(e);
          }),
          (e.toUserSettingsGeneral = function (e) {
            return Ct.keyCodeToStr(e);
          }),
          (e.fromUserSettings = function (e) {
            return bt.strToKeyCode(e) || Ct.strToKeyCode(e);
          });
      })(mt || (mt = {}));
    var _t,
      St,
      kt,
      xt,
      Et,
      At,
      wt,
      Nt,
      Lt,
      Tt,
      Ot,
      It,
      Pt,
      Mt,
      Rt,
      jt,
      Dt,
      Ft,
      Ut,
      Vt,
      Wt,
      qt,
      Kt,
      Bt,
      $t,
      Ht,
      Yt,
      Gt,
      zt,
      Jt,
      Qt,
      Zt,
      Xt,
      en = (function (e) {
        i(n, e);
        var t = c(n);
        function n(e, r, i, o) {
          var a;
          return (
            l(this, n),
            ((a = t.call(this, e, r, i, o)).selectionStartLineNumber = e),
            (a.selectionStartColumn = r),
            (a.positionLineNumber = i),
            (a.positionColumn = o),
            a
          );
        }
        return (
          h(
            n,
            [
              {
                key: "toString",
                value: function () {
                  return (
                    "[" +
                    this.selectionStartLineNumber +
                    "," +
                    this.selectionStartColumn +
                    " -> " +
                    this.positionLineNumber +
                    "," +
                    this.positionColumn +
                    "]"
                  );
                },
              },
              {
                key: "equalsSelection",
                value: function (e) {
                  return n.selectionsEqual(this, e);
                },
              },
              {
                key: "getDirection",
                value: function () {
                  return this.selectionStartLineNumber ===
                    this.startLineNumber &&
                    this.selectionStartColumn === this.startColumn
                    ? 0
                    : 1;
                },
              },
              {
                key: "setEndPosition",
                value: function (e, t) {
                  return 0 === this.getDirection()
                    ? new n(this.startLineNumber, this.startColumn, e, t)
                    : new n(e, t, this.startLineNumber, this.startColumn);
                },
              },
              {
                key: "getPosition",
                value: function () {
                  return new Ie(this.positionLineNumber, this.positionColumn);
                },
              },
              {
                key: "setStartPosition",
                value: function (e, t) {
                  return 0 === this.getDirection()
                    ? new n(e, t, this.endLineNumber, this.endColumn)
                    : new n(this.endLineNumber, this.endColumn, e, t);
                },
              },
            ],
            [
              {
                key: "selectionsEqual",
                value: function (e, t) {
                  return (
                    e.selectionStartLineNumber === t.selectionStartLineNumber &&
                    e.selectionStartColumn === t.selectionStartColumn &&
                    e.positionLineNumber === t.positionLineNumber &&
                    e.positionColumn === t.positionColumn
                  );
                },
              },
              {
                key: "fromPositions",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : e;
                  return new n(e.lineNumber, e.column, t.lineNumber, t.column);
                },
              },
              {
                key: "liftSelection",
                value: function (e) {
                  return new n(
                    e.selectionStartLineNumber,
                    e.selectionStartColumn,
                    e.positionLineNumber,
                    e.positionColumn
                  );
                },
              },
              {
                key: "selectionsArrEqual",
                value: function (e, t) {
                  if ((e && !t) || (!e && t)) return !1;
                  if (!e && !t) return !0;
                  if (e.length !== t.length) return !1;
                  for (var n = 0, r = e.length; n < r; n++)
                    if (!this.selectionsEqual(e[n], t[n])) return !1;
                  return !0;
                },
              },
              {
                key: "isISelection",
                value: function (e) {
                  return (
                    e &&
                    "number" === typeof e.selectionStartLineNumber &&
                    "number" === typeof e.selectionStartColumn &&
                    "number" === typeof e.positionLineNumber &&
                    "number" === typeof e.positionColumn
                  );
                },
              },
              {
                key: "createWithDirection",
                value: function (e, t, r, i, o) {
                  return 0 === o ? new n(e, t, r, i) : new n(r, i, e, t);
                },
              },
            ]
          ),
          n
        );
      })(Pe),
      tn = (function () {
        function e(t, n, r) {
          l(this, e),
            (this.offset = 0 | t),
            (this.type = n),
            (this.language = r);
        }
        return (
          h(e, [
            {
              key: "toString",
              value: function () {
                return "(" + this.offset + ", " + this.type + ")";
              },
            },
          ]),
          e
        );
      })();
    !(function (e) {
      (e[(e.Unknown = 0)] = "Unknown"),
        (e[(e.Disabled = 1)] = "Disabled"),
        (e[(e.Enabled = 2)] = "Enabled");
    })(_t || (_t = {})),
      (function (e) {
        (e[(e.KeepWhitespace = 1)] = "KeepWhitespace"),
          (e[(e.InsertAsSnippet = 4)] = "InsertAsSnippet");
      })(St || (St = {})),
      (function (e) {
        (e[(e.Method = 0)] = "Method"),
          (e[(e.Function = 1)] = "Function"),
          (e[(e.Constructor = 2)] = "Constructor"),
          (e[(e.Field = 3)] = "Field"),
          (e[(e.Variable = 4)] = "Variable"),
          (e[(e.Class = 5)] = "Class"),
          (e[(e.Struct = 6)] = "Struct"),
          (e[(e.Interface = 7)] = "Interface"),
          (e[(e.Module = 8)] = "Module"),
          (e[(e.Property = 9)] = "Property"),
          (e[(e.Event = 10)] = "Event"),
          (e[(e.Operator = 11)] = "Operator"),
          (e[(e.Unit = 12)] = "Unit"),
          (e[(e.Value = 13)] = "Value"),
          (e[(e.Constant = 14)] = "Constant"),
          (e[(e.Enum = 15)] = "Enum"),
          (e[(e.EnumMember = 16)] = "EnumMember"),
          (e[(e.Keyword = 17)] = "Keyword"),
          (e[(e.Text = 18)] = "Text"),
          (e[(e.Color = 19)] = "Color"),
          (e[(e.File = 20)] = "File"),
          (e[(e.Reference = 21)] = "Reference"),
          (e[(e.Customcolor = 22)] = "Customcolor"),
          (e[(e.Folder = 23)] = "Folder"),
          (e[(e.TypeParameter = 24)] = "TypeParameter"),
          (e[(e.User = 25)] = "User"),
          (e[(e.Issue = 26)] = "Issue"),
          (e[(e.Snippet = 27)] = "Snippet");
      })(kt || (kt = {})),
      (function (e) {
        e[(e.Deprecated = 1)] = "Deprecated";
      })(xt || (xt = {})),
      (function (e) {
        (e[(e.Invoke = 0)] = "Invoke"),
          (e[(e.TriggerCharacter = 1)] = "TriggerCharacter"),
          (e[(e.TriggerForIncompleteCompletions = 2)] =
            "TriggerForIncompleteCompletions");
      })(Et || (Et = {})),
      (function (e) {
        (e[(e.EXACT = 0)] = "EXACT"),
          (e[(e.ABOVE = 1)] = "ABOVE"),
          (e[(e.BELOW = 2)] = "BELOW");
      })(At || (At = {})),
      (function (e) {
        (e[(e.NotSet = 0)] = "NotSet"),
          (e[(e.ContentFlush = 1)] = "ContentFlush"),
          (e[(e.RecoverFromMarkers = 2)] = "RecoverFromMarkers"),
          (e[(e.Explicit = 3)] = "Explicit"),
          (e[(e.Paste = 4)] = "Paste"),
          (e[(e.Undo = 5)] = "Undo"),
          (e[(e.Redo = 6)] = "Redo");
      })(wt || (wt = {})),
      (function (e) {
        (e[(e.LF = 1)] = "LF"), (e[(e.CRLF = 2)] = "CRLF");
      })(Nt || (Nt = {})),
      (function (e) {
        (e[(e.Text = 0)] = "Text"),
          (e[(e.Read = 1)] = "Read"),
          (e[(e.Write = 2)] = "Write");
      })(Lt || (Lt = {})),
      (function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Keep = 1)] = "Keep"),
          (e[(e.Brackets = 2)] = "Brackets"),
          (e[(e.Advanced = 3)] = "Advanced"),
          (e[(e.Full = 4)] = "Full");
      })(Tt || (Tt = {})),
      (function (e) {
        (e[(e.acceptSuggestionOnCommitCharacter = 0)] =
          "acceptSuggestionOnCommitCharacter"),
          (e[(e.acceptSuggestionOnEnter = 1)] = "acceptSuggestionOnEnter"),
          (e[(e.accessibilitySupport = 2)] = "accessibilitySupport"),
          (e[(e.accessibilityPageSize = 3)] = "accessibilityPageSize"),
          (e[(e.ariaLabel = 4)] = "ariaLabel"),
          (e[(e.autoClosingBrackets = 5)] = "autoClosingBrackets"),
          (e[(e.autoClosingOvertype = 6)] = "autoClosingOvertype"),
          (e[(e.autoClosingQuotes = 7)] = "autoClosingQuotes"),
          (e[(e.autoIndent = 8)] = "autoIndent"),
          (e[(e.automaticLayout = 9)] = "automaticLayout"),
          (e[(e.autoSurround = 10)] = "autoSurround"),
          (e[(e.codeLens = 11)] = "codeLens"),
          (e[(e.colorDecorators = 12)] = "colorDecorators"),
          (e[(e.columnSelection = 13)] = "columnSelection"),
          (e[(e.comments = 14)] = "comments"),
          (e[(e.contextmenu = 15)] = "contextmenu"),
          (e[(e.copyWithSyntaxHighlighting = 16)] =
            "copyWithSyntaxHighlighting"),
          (e[(e.cursorBlinking = 17)] = "cursorBlinking"),
          (e[(e.cursorSmoothCaretAnimation = 18)] =
            "cursorSmoothCaretAnimation"),
          (e[(e.cursorStyle = 19)] = "cursorStyle"),
          (e[(e.cursorSurroundingLines = 20)] = "cursorSurroundingLines"),
          (e[(e.cursorSurroundingLinesStyle = 21)] =
            "cursorSurroundingLinesStyle"),
          (e[(e.cursorWidth = 22)] = "cursorWidth"),
          (e[(e.disableLayerHinting = 23)] = "disableLayerHinting"),
          (e[(e.disableMonospaceOptimizations = 24)] =
            "disableMonospaceOptimizations"),
          (e[(e.dragAndDrop = 25)] = "dragAndDrop"),
          (e[(e.emptySelectionClipboard = 26)] = "emptySelectionClipboard"),
          (e[(e.extraEditorClassName = 27)] = "extraEditorClassName"),
          (e[(e.fastScrollSensitivity = 28)] = "fastScrollSensitivity"),
          (e[(e.find = 29)] = "find"),
          (e[(e.fixedOverflowWidgets = 30)] = "fixedOverflowWidgets"),
          (e[(e.folding = 31)] = "folding"),
          (e[(e.foldingStrategy = 32)] = "foldingStrategy"),
          (e[(e.foldingHighlight = 33)] = "foldingHighlight"),
          (e[(e.unfoldOnClickAfterEndOfLine = 34)] =
            "unfoldOnClickAfterEndOfLine"),
          (e[(e.fontFamily = 35)] = "fontFamily"),
          (e[(e.fontInfo = 36)] = "fontInfo"),
          (e[(e.fontLigatures = 37)] = "fontLigatures"),
          (e[(e.fontSize = 38)] = "fontSize"),
          (e[(e.fontWeight = 39)] = "fontWeight"),
          (e[(e.formatOnPaste = 40)] = "formatOnPaste"),
          (e[(e.formatOnType = 41)] = "formatOnType"),
          (e[(e.glyphMargin = 42)] = "glyphMargin"),
          (e[(e.gotoLocation = 43)] = "gotoLocation"),
          (e[(e.hideCursorInOverviewRuler = 44)] = "hideCursorInOverviewRuler"),
          (e[(e.highlightActiveIndentGuide = 45)] =
            "highlightActiveIndentGuide"),
          (e[(e.hover = 46)] = "hover"),
          (e[(e.inDiffEditor = 47)] = "inDiffEditor"),
          (e[(e.letterSpacing = 48)] = "letterSpacing"),
          (e[(e.lightbulb = 49)] = "lightbulb"),
          (e[(e.lineDecorationsWidth = 50)] = "lineDecorationsWidth"),
          (e[(e.lineHeight = 51)] = "lineHeight"),
          (e[(e.lineNumbers = 52)] = "lineNumbers"),
          (e[(e.lineNumbersMinChars = 53)] = "lineNumbersMinChars"),
          (e[(e.links = 54)] = "links"),
          (e[(e.matchBrackets = 55)] = "matchBrackets"),
          (e[(e.minimap = 56)] = "minimap"),
          (e[(e.mouseStyle = 57)] = "mouseStyle"),
          (e[(e.mouseWheelScrollSensitivity = 58)] =
            "mouseWheelScrollSensitivity"),
          (e[(e.mouseWheelZoom = 59)] = "mouseWheelZoom"),
          (e[(e.multiCursorMergeOverlapping = 60)] =
            "multiCursorMergeOverlapping"),
          (e[(e.multiCursorModifier = 61)] = "multiCursorModifier"),
          (e[(e.multiCursorPaste = 62)] = "multiCursorPaste"),
          (e[(e.occurrencesHighlight = 63)] = "occurrencesHighlight"),
          (e[(e.overviewRulerBorder = 64)] = "overviewRulerBorder"),
          (e[(e.overviewRulerLanes = 65)] = "overviewRulerLanes"),
          (e[(e.padding = 66)] = "padding"),
          (e[(e.parameterHints = 67)] = "parameterHints"),
          (e[(e.peekWidgetDefaultFocus = 68)] = "peekWidgetDefaultFocus"),
          (e[(e.definitionLinkOpensInPeek = 69)] = "definitionLinkOpensInPeek"),
          (e[(e.quickSuggestions = 70)] = "quickSuggestions"),
          (e[(e.quickSuggestionsDelay = 71)] = "quickSuggestionsDelay"),
          (e[(e.readOnly = 72)] = "readOnly"),
          (e[(e.renameOnType = 73)] = "renameOnType"),
          (e[(e.renderControlCharacters = 74)] = "renderControlCharacters"),
          (e[(e.renderIndentGuides = 75)] = "renderIndentGuides"),
          (e[(e.renderFinalNewline = 76)] = "renderFinalNewline"),
          (e[(e.renderLineHighlight = 77)] = "renderLineHighlight"),
          (e[(e.renderLineHighlightOnlyWhenFocus = 78)] =
            "renderLineHighlightOnlyWhenFocus"),
          (e[(e.renderValidationDecorations = 79)] =
            "renderValidationDecorations"),
          (e[(e.renderWhitespace = 80)] = "renderWhitespace"),
          (e[(e.revealHorizontalRightPadding = 81)] =
            "revealHorizontalRightPadding"),
          (e[(e.roundedSelection = 82)] = "roundedSelection"),
          (e[(e.rulers = 83)] = "rulers"),
          (e[(e.scrollbar = 84)] = "scrollbar"),
          (e[(e.scrollBeyondLastColumn = 85)] = "scrollBeyondLastColumn"),
          (e[(e.scrollBeyondLastLine = 86)] = "scrollBeyondLastLine"),
          (e[(e.scrollPredominantAxis = 87)] = "scrollPredominantAxis"),
          (e[(e.selectionClipboard = 88)] = "selectionClipboard"),
          (e[(e.selectionHighlight = 89)] = "selectionHighlight"),
          (e[(e.selectOnLineNumbers = 90)] = "selectOnLineNumbers"),
          (e[(e.showFoldingControls = 91)] = "showFoldingControls"),
          (e[(e.showUnused = 92)] = "showUnused"),
          (e[(e.snippetSuggestions = 93)] = "snippetSuggestions"),
          (e[(e.smoothScrolling = 94)] = "smoothScrolling"),
          (e[(e.stopRenderingLineAfter = 95)] = "stopRenderingLineAfter"),
          (e[(e.suggest = 96)] = "suggest"),
          (e[(e.suggestFontSize = 97)] = "suggestFontSize"),
          (e[(e.suggestLineHeight = 98)] = "suggestLineHeight"),
          (e[(e.suggestOnTriggerCharacters = 99)] =
            "suggestOnTriggerCharacters"),
          (e[(e.suggestSelection = 100)] = "suggestSelection"),
          (e[(e.tabCompletion = 101)] = "tabCompletion"),
          (e[(e.tabIndex = 102)] = "tabIndex"),
          (e[(e.unusualLineTerminators = 103)] = "unusualLineTerminators"),
          (e[(e.useTabStops = 104)] = "useTabStops"),
          (e[(e.wordSeparators = 105)] = "wordSeparators"),
          (e[(e.wordWrap = 106)] = "wordWrap"),
          (e[(e.wordWrapBreakAfterCharacters = 107)] =
            "wordWrapBreakAfterCharacters"),
          (e[(e.wordWrapBreakBeforeCharacters = 108)] =
            "wordWrapBreakBeforeCharacters"),
          (e[(e.wordWrapColumn = 109)] = "wordWrapColumn"),
          (e[(e.wordWrapMinified = 110)] = "wordWrapMinified"),
          (e[(e.wrappingIndent = 111)] = "wrappingIndent"),
          (e[(e.wrappingStrategy = 112)] = "wrappingStrategy"),
          (e[(e.showDeprecated = 113)] = "showDeprecated"),
          (e[(e.editorClassName = 114)] = "editorClassName"),
          (e[(e.pixelRatio = 115)] = "pixelRatio"),
          (e[(e.tabFocusMode = 116)] = "tabFocusMode"),
          (e[(e.layoutInfo = 117)] = "layoutInfo"),
          (e[(e.wrappingInfo = 118)] = "wrappingInfo");
      })(Ot || (Ot = {})),
      (function (e) {
        (e[(e.TextDefined = 0)] = "TextDefined"),
          (e[(e.LF = 1)] = "LF"),
          (e[(e.CRLF = 2)] = "CRLF");
      })(It || (It = {})),
      (function (e) {
        (e[(e.LF = 0)] = "LF"), (e[(e.CRLF = 1)] = "CRLF");
      })(Pt || (Pt = {})),
      (function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Indent = 1)] = "Indent"),
          (e[(e.IndentOutdent = 2)] = "IndentOutdent"),
          (e[(e.Outdent = 3)] = "Outdent");
      })(Mt || (Mt = {})),
      (function (e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.Backspace = 1)] = "Backspace"),
          (e[(e.Tab = 2)] = "Tab"),
          (e[(e.Enter = 3)] = "Enter"),
          (e[(e.Shift = 4)] = "Shift"),
          (e[(e.Ctrl = 5)] = "Ctrl"),
          (e[(e.Alt = 6)] = "Alt"),
          (e[(e.PauseBreak = 7)] = "PauseBreak"),
          (e[(e.CapsLock = 8)] = "CapsLock"),
          (e[(e.Escape = 9)] = "Escape"),
          (e[(e.Space = 10)] = "Space"),
          (e[(e.PageUp = 11)] = "PageUp"),
          (e[(e.PageDown = 12)] = "PageDown"),
          (e[(e.End = 13)] = "End"),
          (e[(e.Home = 14)] = "Home"),
          (e[(e.LeftArrow = 15)] = "LeftArrow"),
          (e[(e.UpArrow = 16)] = "UpArrow"),
          (e[(e.RightArrow = 17)] = "RightArrow"),
          (e[(e.DownArrow = 18)] = "DownArrow"),
          (e[(e.Insert = 19)] = "Insert"),
          (e[(e.Delete = 20)] = "Delete"),
          (e[(e.KEY_0 = 21)] = "KEY_0"),
          (e[(e.KEY_1 = 22)] = "KEY_1"),
          (e[(e.KEY_2 = 23)] = "KEY_2"),
          (e[(e.KEY_3 = 24)] = "KEY_3"),
          (e[(e.KEY_4 = 25)] = "KEY_4"),
          (e[(e.KEY_5 = 26)] = "KEY_5"),
          (e[(e.KEY_6 = 27)] = "KEY_6"),
          (e[(e.KEY_7 = 28)] = "KEY_7"),
          (e[(e.KEY_8 = 29)] = "KEY_8"),
          (e[(e.KEY_9 = 30)] = "KEY_9"),
          (e[(e.KEY_A = 31)] = "KEY_A"),
          (e[(e.KEY_B = 32)] = "KEY_B"),
          (e[(e.KEY_C = 33)] = "KEY_C"),
          (e[(e.KEY_D = 34)] = "KEY_D"),
          (e[(e.KEY_E = 35)] = "KEY_E"),
          (e[(e.KEY_F = 36)] = "KEY_F"),
          (e[(e.KEY_G = 37)] = "KEY_G"),
          (e[(e.KEY_H = 38)] = "KEY_H"),
          (e[(e.KEY_I = 39)] = "KEY_I"),
          (e[(e.KEY_J = 40)] = "KEY_J"),
          (e[(e.KEY_K = 41)] = "KEY_K"),
          (e[(e.KEY_L = 42)] = "KEY_L"),
          (e[(e.KEY_M = 43)] = "KEY_M"),
          (e[(e.KEY_N = 44)] = "KEY_N"),
          (e[(e.KEY_O = 45)] = "KEY_O"),
          (e[(e.KEY_P = 46)] = "KEY_P"),
          (e[(e.KEY_Q = 47)] = "KEY_Q"),
          (e[(e.KEY_R = 48)] = "KEY_R"),
          (e[(e.KEY_S = 49)] = "KEY_S"),
          (e[(e.KEY_T = 50)] = "KEY_T"),
          (e[(e.KEY_U = 51)] = "KEY_U"),
          (e[(e.KEY_V = 52)] = "KEY_V"),
          (e[(e.KEY_W = 53)] = "KEY_W"),
          (e[(e.KEY_X = 54)] = "KEY_X"),
          (e[(e.KEY_Y = 55)] = "KEY_Y"),
          (e[(e.KEY_Z = 56)] = "KEY_Z"),
          (e[(e.Meta = 57)] = "Meta"),
          (e[(e.ContextMenu = 58)] = "ContextMenu"),
          (e[(e.F1 = 59)] = "F1"),
          (e[(e.F2 = 60)] = "F2"),
          (e[(e.F3 = 61)] = "F3"),
          (e[(e.F4 = 62)] = "F4"),
          (e[(e.F5 = 63)] = "F5"),
          (e[(e.F6 = 64)] = "F6"),
          (e[(e.F7 = 65)] = "F7"),
          (e[(e.F8 = 66)] = "F8"),
          (e[(e.F9 = 67)] = "F9"),
          (e[(e.F10 = 68)] = "F10"),
          (e[(e.F11 = 69)] = "F11"),
          (e[(e.F12 = 70)] = "F12"),
          (e[(e.F13 = 71)] = "F13"),
          (e[(e.F14 = 72)] = "F14"),
          (e[(e.F15 = 73)] = "F15"),
          (e[(e.F16 = 74)] = "F16"),
          (e[(e.F17 = 75)] = "F17"),
          (e[(e.F18 = 76)] = "F18"),
          (e[(e.F19 = 77)] = "F19"),
          (e[(e.NumLock = 78)] = "NumLock"),
          (e[(e.ScrollLock = 79)] = "ScrollLock"),
          (e[(e.US_SEMICOLON = 80)] = "US_SEMICOLON"),
          (e[(e.US_EQUAL = 81)] = "US_EQUAL"),
          (e[(e.US_COMMA = 82)] = "US_COMMA"),
          (e[(e.US_MINUS = 83)] = "US_MINUS"),
          (e[(e.US_DOT = 84)] = "US_DOT"),
          (e[(e.US_SLASH = 85)] = "US_SLASH"),
          (e[(e.US_BACKTICK = 86)] = "US_BACKTICK"),
          (e[(e.US_OPEN_SQUARE_BRACKET = 87)] = "US_OPEN_SQUARE_BRACKET"),
          (e[(e.US_BACKSLASH = 88)] = "US_BACKSLASH"),
          (e[(e.US_CLOSE_SQUARE_BRACKET = 89)] = "US_CLOSE_SQUARE_BRACKET"),
          (e[(e.US_QUOTE = 90)] = "US_QUOTE"),
          (e[(e.OEM_8 = 91)] = "OEM_8"),
          (e[(e.OEM_102 = 92)] = "OEM_102"),
          (e[(e.NUMPAD_0 = 93)] = "NUMPAD_0"),
          (e[(e.NUMPAD_1 = 94)] = "NUMPAD_1"),
          (e[(e.NUMPAD_2 = 95)] = "NUMPAD_2"),
          (e[(e.NUMPAD_3 = 96)] = "NUMPAD_3"),
          (e[(e.NUMPAD_4 = 97)] = "NUMPAD_4"),
          (e[(e.NUMPAD_5 = 98)] = "NUMPAD_5"),
          (e[(e.NUMPAD_6 = 99)] = "NUMPAD_6"),
          (e[(e.NUMPAD_7 = 100)] = "NUMPAD_7"),
          (e[(e.NUMPAD_8 = 101)] = "NUMPAD_8"),
          (e[(e.NUMPAD_9 = 102)] = "NUMPAD_9"),
          (e[(e.NUMPAD_MULTIPLY = 103)] = "NUMPAD_MULTIPLY"),
          (e[(e.NUMPAD_ADD = 104)] = "NUMPAD_ADD"),
          (e[(e.NUMPAD_SEPARATOR = 105)] = "NUMPAD_SEPARATOR"),
          (e[(e.NUMPAD_SUBTRACT = 106)] = "NUMPAD_SUBTRACT"),
          (e[(e.NUMPAD_DECIMAL = 107)] = "NUMPAD_DECIMAL"),
          (e[(e.NUMPAD_DIVIDE = 108)] = "NUMPAD_DIVIDE"),
          (e[(e.KEY_IN_COMPOSITION = 109)] = "KEY_IN_COMPOSITION"),
          (e[(e.ABNT_C1 = 110)] = "ABNT_C1"),
          (e[(e.ABNT_C2 = 111)] = "ABNT_C2"),
          (e[(e.MAX_VALUE = 112)] = "MAX_VALUE");
      })(Rt || (Rt = {})),
      (function (e) {
        (e[(e.Hint = 1)] = "Hint"),
          (e[(e.Info = 2)] = "Info"),
          (e[(e.Warning = 4)] = "Warning"),
          (e[(e.Error = 8)] = "Error");
      })(jt || (jt = {})),
      (function (e) {
        (e[(e.Unnecessary = 1)] = "Unnecessary"),
          (e[(e.Deprecated = 2)] = "Deprecated");
      })(Dt || (Dt = {})),
      (function (e) {
        (e[(e.Inline = 1)] = "Inline"), (e[(e.Gutter = 2)] = "Gutter");
      })(Ft || (Ft = {})),
      (function (e) {
        (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
          (e[(e.TEXTAREA = 1)] = "TEXTAREA"),
          (e[(e.GUTTER_GLYPH_MARGIN = 2)] = "GUTTER_GLYPH_MARGIN"),
          (e[(e.GUTTER_LINE_NUMBERS = 3)] = "GUTTER_LINE_NUMBERS"),
          (e[(e.GUTTER_LINE_DECORATIONS = 4)] = "GUTTER_LINE_DECORATIONS"),
          (e[(e.GUTTER_VIEW_ZONE = 5)] = "GUTTER_VIEW_ZONE"),
          (e[(e.CONTENT_TEXT = 6)] = "CONTENT_TEXT"),
          (e[(e.CONTENT_EMPTY = 7)] = "CONTENT_EMPTY"),
          (e[(e.CONTENT_VIEW_ZONE = 8)] = "CONTENT_VIEW_ZONE"),
          (e[(e.CONTENT_WIDGET = 9)] = "CONTENT_WIDGET"),
          (e[(e.OVERVIEW_RULER = 10)] = "OVERVIEW_RULER"),
          (e[(e.SCROLLBAR = 11)] = "SCROLLBAR"),
          (e[(e.OVERLAY_WIDGET = 12)] = "OVERLAY_WIDGET"),
          (e[(e.OUTSIDE_EDITOR = 13)] = "OUTSIDE_EDITOR");
      })(Ut || (Ut = {})),
      (function (e) {
        (e[(e.TOP_RIGHT_CORNER = 0)] = "TOP_RIGHT_CORNER"),
          (e[(e.BOTTOM_RIGHT_CORNER = 1)] = "BOTTOM_RIGHT_CORNER"),
          (e[(e.TOP_CENTER = 2)] = "TOP_CENTER");
      })(Vt || (Vt = {})),
      (function (e) {
        (e[(e.Left = 1)] = "Left"),
          (e[(e.Center = 2)] = "Center"),
          (e[(e.Right = 4)] = "Right"),
          (e[(e.Full = 7)] = "Full");
      })(Wt || (Wt = {})),
      (function (e) {
        (e[(e.Off = 0)] = "Off"),
          (e[(e.On = 1)] = "On"),
          (e[(e.Relative = 2)] = "Relative"),
          (e[(e.Interval = 3)] = "Interval"),
          (e[(e.Custom = 4)] = "Custom");
      })(qt || (qt = {})),
      (function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Text = 1)] = "Text"),
          (e[(e.Blocks = 2)] = "Blocks");
      })(Kt || (Kt = {})),
      (function (e) {
        (e[(e.Smooth = 0)] = "Smooth"), (e[(e.Immediate = 1)] = "Immediate");
      })(Bt || (Bt = {})),
      (function (e) {
        (e[(e.Auto = 1)] = "Auto"),
          (e[(e.Hidden = 2)] = "Hidden"),
          (e[(e.Visible = 3)] = "Visible");
      })($t || ($t = {})),
      (function (e) {
        (e[(e.LTR = 0)] = "LTR"), (e[(e.RTL = 1)] = "RTL");
      })(Ht || (Ht = {})),
      (function (e) {
        (e[(e.Invoke = 1)] = "Invoke"),
          (e[(e.TriggerCharacter = 2)] = "TriggerCharacter"),
          (e[(e.ContentChange = 3)] = "ContentChange");
      })(Yt || (Yt = {})),
      (function (e) {
        (e[(e.File = 0)] = "File"),
          (e[(e.Module = 1)] = "Module"),
          (e[(e.Namespace = 2)] = "Namespace"),
          (e[(e.Package = 3)] = "Package"),
          (e[(e.Class = 4)] = "Class"),
          (e[(e.Method = 5)] = "Method"),
          (e[(e.Property = 6)] = "Property"),
          (e[(e.Field = 7)] = "Field"),
          (e[(e.Constructor = 8)] = "Constructor"),
          (e[(e.Enum = 9)] = "Enum"),
          (e[(e.Interface = 10)] = "Interface"),
          (e[(e.Function = 11)] = "Function"),
          (e[(e.Variable = 12)] = "Variable"),
          (e[(e.Constant = 13)] = "Constant"),
          (e[(e.String = 14)] = "String"),
          (e[(e.Number = 15)] = "Number"),
          (e[(e.Boolean = 16)] = "Boolean"),
          (e[(e.Array = 17)] = "Array"),
          (e[(e.Object = 18)] = "Object"),
          (e[(e.Key = 19)] = "Key"),
          (e[(e.Null = 20)] = "Null"),
          (e[(e.EnumMember = 21)] = "EnumMember"),
          (e[(e.Struct = 22)] = "Struct"),
          (e[(e.Event = 23)] = "Event"),
          (e[(e.Operator = 24)] = "Operator"),
          (e[(e.TypeParameter = 25)] = "TypeParameter");
      })(Gt || (Gt = {})),
      (function (e) {
        e[(e.Deprecated = 1)] = "Deprecated";
      })(zt || (zt = {})),
      (function (e) {
        (e[(e.Hidden = 0)] = "Hidden"),
          (e[(e.Blink = 1)] = "Blink"),
          (e[(e.Smooth = 2)] = "Smooth"),
          (e[(e.Phase = 3)] = "Phase"),
          (e[(e.Expand = 4)] = "Expand"),
          (e[(e.Solid = 5)] = "Solid");
      })(Jt || (Jt = {})),
      (function (e) {
        (e[(e.Line = 1)] = "Line"),
          (e[(e.Block = 2)] = "Block"),
          (e[(e.Underline = 3)] = "Underline"),
          (e[(e.LineThin = 4)] = "LineThin"),
          (e[(e.BlockOutline = 5)] = "BlockOutline"),
          (e[(e.UnderlineThin = 6)] = "UnderlineThin");
      })(Qt || (Qt = {})),
      (function (e) {
        (e[(e.AlwaysGrowsWhenTypingAtEdges = 0)] =
          "AlwaysGrowsWhenTypingAtEdges"),
          (e[(e.NeverGrowsWhenTypingAtEdges = 1)] =
            "NeverGrowsWhenTypingAtEdges"),
          (e[(e.GrowsOnlyWhenTypingBefore = 2)] = "GrowsOnlyWhenTypingBefore"),
          (e[(e.GrowsOnlyWhenTypingAfter = 3)] = "GrowsOnlyWhenTypingAfter");
      })(Zt || (Zt = {})),
      (function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Same = 1)] = "Same"),
          (e[(e.Indent = 2)] = "Indent"),
          (e[(e.DeepIndent = 3)] = "DeepIndent");
      })(Xt || (Xt = {}));
    var nn = (function () {
      function e() {
        l(this, e);
      }
      return (
        h(e, null, [
          {
            key: "chord",
            value: function (e, t) {
              return (function (e, t) {
                return (e | (((65535 & t) << 16) >>> 0)) >>> 0;
              })(e, t);
            },
          },
        ]),
        e
      );
    })();
    (nn.CtrlCmd = 2048), (nn.Shift = 1024), (nn.Alt = 512), (nn.WinCtrl = 256);
    var rn = function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              u(r.next(e));
            } catch (t) {
              o(t);
            }
          }
          function s(e) {
            try {
              u(r.throw(e));
            } catch (t) {
              o(t);
            }
          }
          function u(e) {
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
          u((r = r.apply(e, t || [])).next());
        });
      },
      on = (function (e) {
        i(n, e);
        var t = c(n);
        function n() {
          return l(this, n), t.apply(this, arguments);
        }
        return (
          h(n, [
            {
              key: "getValue",
              value: function () {
                return this.getText();
              },
            },
            {
              key: "getLinesContent",
              value: function () {
                return this._lines.slice(0);
              },
            },
            {
              key: "getLineCount",
              value: function () {
                return this._lines.length;
              },
            },
            {
              key: "getLineContent",
              value: function (e) {
                return this._lines[e - 1];
              },
            },
            {
              key: "getWordAtPosition",
              value: function (e, t) {
                var n = (function e(t, n, r, i) {
                  var o =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : ze;
                  if (r.length > o.maxLen) {
                    var a = t - o.maxLen / 2;
                    return (
                      a < 0 ? ((i += t), (a = 0)) : (i += a),
                      e(t, n, (r = r.substring(a, t + o.maxLen / 2)), i, o)
                    );
                  }
                  Date.now();
                  for (var s = t - 1 - i, u = -1, c = null, l = 1; ; l++) {
                    Date.now(), o.timeBudget;
                    var f = s - o.windowSize * l;
                    n.lastIndex = Math.max(0, f);
                    var h = Je(n, r, s, u);
                    if (!h && c) break;
                    if (((c = h), f <= 0)) break;
                    u = f;
                  }
                  if (c) {
                    var d = {
                      word: c[0],
                      startColumn: i + 1 + c.index,
                      endColumn: i + 1 + c.index + c[0].length,
                    };
                    return (n.lastIndex = 0), d;
                  }
                  return null;
                })(
                  e.column,
                  (function (e) {
                    var t = Ge;
                    if (e && e instanceof RegExp)
                      if (e.global) t = e;
                      else {
                        var n = "g";
                        e.ignoreCase && (n += "i"),
                          e.multiline && (n += "m"),
                          e.unicode && (n += "u"),
                          (t = new RegExp(e.source, n));
                      }
                    return (t.lastIndex = 0), t;
                  })(t),
                  this._lines[e.lineNumber - 1],
                  0
                );
                return n
                  ? new Pe(
                      e.lineNumber,
                      n.startColumn,
                      e.lineNumber,
                      n.endColumn
                    )
                  : null;
              },
            },
            {
              key: "words",
              value: function (e) {
                var t = this._lines,
                  n = this._wordenize.bind(this),
                  r = 0,
                  i = "",
                  o = 0,
                  a = [];
                return S(
                  {},
                  Symbol.iterator,
                  E.a.mark(function s() {
                    var u;
                    return E.a.wrap(function (s) {
                      for (;;)
                        switch ((s.prev = s.next)) {
                          case 0:
                            if (!(o < a.length)) {
                              s.next = 8;
                              break;
                            }
                            return (
                              (u = i.substring(a[o].start, a[o].end)),
                              (o += 1),
                              (s.next = 6),
                              u
                            );
                          case 6:
                            s.next = 16;
                            break;
                          case 8:
                            if (!(r < t.length)) {
                              s.next = 15;
                              break;
                            }
                            (i = t[r]),
                              (a = n(i, e)),
                              (o = 0),
                              (r += 1),
                              (s.next = 16);
                            break;
                          case 15:
                            return s.abrupt("break", 18);
                          case 16:
                            s.next = 0;
                            break;
                          case 18:
                          case "end":
                            return s.stop();
                        }
                    }, s);
                  })
                );
              },
            },
            {
              key: "getLineWords",
              value: function (e, t) {
                var n,
                  r = this._lines[e - 1],
                  i = [],
                  o = b(this._wordenize(r, t));
                try {
                  for (o.s(); !(n = o.n()).done; ) {
                    var a = n.value;
                    i.push({
                      word: r.substring(a.start, a.end),
                      startColumn: a.start + 1,
                      endColumn: a.end + 1,
                    });
                  }
                } catch (s) {
                  o.e(s);
                } finally {
                  o.f();
                }
                return i;
              },
            },
            {
              key: "_wordenize",
              value: function (e, t) {
                var n,
                  r = [];
                for (t.lastIndex = 0; (n = t.exec(e)) && 0 !== n[0].length; )
                  r.push({ start: n.index, end: n.index + n[0].length });
                return r;
              },
            },
            {
              key: "getValueInRange",
              value: function (e) {
                if (
                  (e = this._validateRange(e)).startLineNumber ===
                  e.endLineNumber
                )
                  return this._lines[e.startLineNumber - 1].substring(
                    e.startColumn - 1,
                    e.endColumn - 1
                  );
                var t = this._eol,
                  n = e.startLineNumber - 1,
                  r = e.endLineNumber - 1,
                  i = [];
                i.push(this._lines[n].substring(e.startColumn - 1));
                for (var o = n + 1; o < r; o++) i.push(this._lines[o]);
                return (
                  i.push(this._lines[r].substring(0, e.endColumn - 1)),
                  i.join(t)
                );
              },
            },
            {
              key: "offsetAt",
              value: function (e) {
                return (
                  (e = this._validatePosition(e)),
                  this._ensureLineStarts(),
                  this._lineStarts.getAccumulatedValue(e.lineNumber - 2) +
                    (e.column - 1)
                );
              },
            },
            {
              key: "positionAt",
              value: function (e) {
                (e = Math.floor(e)),
                  (e = Math.max(0, e)),
                  this._ensureLineStarts();
                var t = this._lineStarts.getIndexOf(e),
                  n = this._lines[t.index].length;
                return {
                  lineNumber: 1 + t.index,
                  column: 1 + Math.min(t.remainder, n),
                };
              },
            },
            {
              key: "_validateRange",
              value: function (e) {
                var t = this._validatePosition({
                    lineNumber: e.startLineNumber,
                    column: e.startColumn,
                  }),
                  n = this._validatePosition({
                    lineNumber: e.endLineNumber,
                    column: e.endColumn,
                  });
                return t.lineNumber !== e.startLineNumber ||
                  t.column !== e.startColumn ||
                  n.lineNumber !== e.endLineNumber ||
                  n.column !== e.endColumn
                  ? {
                      startLineNumber: t.lineNumber,
                      startColumn: t.column,
                      endLineNumber: n.lineNumber,
                      endColumn: n.column,
                    }
                  : e;
              },
            },
            {
              key: "_validatePosition",
              value: function (e) {
                if (!Ie.isIPosition(e)) throw new Error("bad position");
                var t = e.lineNumber,
                  n = e.column,
                  r = !1;
                if (t < 1) (t = 1), (n = 1), (r = !0);
                else if (t > this._lines.length)
                  (t = this._lines.length),
                    (n = this._lines[t - 1].length + 1),
                    (r = !0);
                else {
                  var i = this._lines[t - 1].length + 1;
                  n < 1 ? ((n = 1), (r = !0)) : n > i && ((n = i), (r = !0));
                }
                return r ? { lineNumber: t, column: n } : e;
              },
            },
            {
              key: "uri",
              get: function () {
                return this._uri;
              },
            },
            {
              key: "version",
              get: function () {
                return this._versionId;
              },
            },
            {
              key: "eol",
              get: function () {
                return this._eol;
              },
            },
          ]),
          n
        );
      })(Ye),
      an = (function () {
        function e(t, n) {
          l(this, e),
            (this._host = t),
            (this._models = Object.create(null)),
            (this._foreignModuleFactory = n),
            (this._foreignModule = null);
        }
        return (
          h(e, [
            {
              key: "dispose",
              value: function () {
                this._models = Object.create(null);
              },
            },
            {
              key: "_getModel",
              value: function (e) {
                return this._models[e];
              },
            },
            {
              key: "_getModels",
              value: function () {
                var e = this,
                  t = [];
                return (
                  Object.keys(this._models).forEach(function (n) {
                    return t.push(e._models[n]);
                  }),
                  t
                );
              },
            },
            {
              key: "acceptNewModel",
              value: function (e) {
                this._models[e.url] = new on(
                  Se.parse(e.url),
                  e.lines,
                  e.EOL,
                  e.versionId
                );
              },
            },
            {
              key: "acceptModelChanged",
              value: function (e, t) {
                this._models[e] && this._models[e].onEvents(t);
              },
            },
            {
              key: "acceptRemovedModel",
              value: function (e) {
                this._models[e] && delete this._models[e];
              },
            },
            {
              key: "computeDiff",
              value: function (e, t, n, r) {
                return rn(
                  this,
                  void 0,
                  void 0,
                  E.a.mark(function i() {
                    var o, a, s, u, c, l, f;
                    return E.a.wrap(
                      function (i) {
                        for (;;)
                          switch ((i.prev = i.next)) {
                            case 0:
                              if (
                                ((o = this._getModel(e)),
                                (a = this._getModel(t)),
                                o && a)
                              ) {
                                i.next = 4;
                                break;
                              }
                              return i.abrupt("return", null);
                            case 4:
                              return (
                                (s = o.getLinesContent()),
                                (u = a.getLinesContent()),
                                (c = new Ue(s, u, {
                                  shouldComputeCharChanges: !0,
                                  shouldPostProcessCharChanges: !0,
                                  shouldIgnoreTrimWhitespace: n,
                                  shouldMakePrettyDiff: !0,
                                  maxComputationTime: r,
                                })),
                                (l = c.computeDiff()),
                                (f =
                                  !(l.changes.length > 0) &&
                                  this._modelsAreIdentical(o, a)),
                                i.abrupt("return", {
                                  quitEarly: l.quitEarly,
                                  identical: f,
                                  changes: l.changes,
                                })
                              );
                            case 10:
                            case "end":
                              return i.stop();
                          }
                      },
                      i,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "_modelsAreIdentical",
              value: function (e, t) {
                var n = e.getLineCount();
                if (n !== t.getLineCount()) return !1;
                for (var r = 1; r <= n; r++) {
                  if (e.getLineContent(r) !== t.getLineContent(r)) return !1;
                }
                return !0;
              },
            },
            {
              key: "computeMoreMinimalEdits",
              value: function (t, n) {
                return rn(
                  this,
                  void 0,
                  void 0,
                  E.a.mark(function r() {
                    var i, o, a, s, u, c, l, f, h, d, m, p, g, v, y, C, _, S;
                    return E.a.wrap(
                      function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              if ((i = this._getModel(t))) {
                                r.next = 3;
                                break;
                              }
                              return r.abrupt("return", n);
                            case 3:
                              (o = []),
                                (a = void 0),
                                (n = F(n, function (e, t) {
                                  return e.range && t.range
                                    ? Pe.compareRangesUsingStarts(
                                        e.range,
                                        t.range
                                      )
                                    : (e.range ? 0 : 1) - (t.range ? 0 : 1);
                                })),
                                (s = b(n)),
                                (r.prev = 7),
                                s.s();
                            case 9:
                              if ((u = s.n()).done) {
                                r.next = 27;
                                break;
                              }
                              if (
                                ((c = u.value),
                                (l = c.range),
                                (f = c.text),
                                "number" === typeof (h = c.eol) && (a = h),
                                !Pe.isEmpty(l) || f)
                              ) {
                                r.next = 14;
                                break;
                              }
                              return r.abrupt("continue", 25);
                            case 14:
                              if (
                                ((d = i.getValueInRange(l)),
                                (f = f.replace(/\r\n|\n|\r/g, i.eol)),
                                d !== f)
                              ) {
                                r.next = 18;
                                break;
                              }
                              return r.abrupt("continue", 25);
                            case 18:
                              if (
                                !(Math.max(f.length, d.length) > e._diffLimit)
                              ) {
                                r.next = 21;
                                break;
                              }
                              return (
                                o.push({ range: l, text: f }),
                                r.abrupt("continue", 25)
                              );
                            case 21:
                              (m = Z(d, f, !1)),
                                (p = i.offsetAt(Pe.lift(l).getStartPosition())),
                                (g = b(m));
                              try {
                                for (g.s(); !(v = g.n()).done; )
                                  (y = v.value),
                                    (C = i.positionAt(p + y.originalStart)),
                                    (_ = i.positionAt(
                                      p + y.originalStart + y.originalLength
                                    )),
                                    (S = {
                                      text: f.substr(
                                        y.modifiedStart,
                                        y.modifiedLength
                                      ),
                                      range: {
                                        startLineNumber: C.lineNumber,
                                        startColumn: C.column,
                                        endLineNumber: _.lineNumber,
                                        endColumn: _.column,
                                      },
                                    }),
                                    i.getValueInRange(S.range) !== S.text &&
                                      o.push(S);
                              } catch (k) {
                                g.e(k);
                              } finally {
                                g.f();
                              }
                            case 25:
                              r.next = 9;
                              break;
                            case 27:
                              r.next = 32;
                              break;
                            case 29:
                              (r.prev = 29), (r.t0 = r.catch(7)), s.e(r.t0);
                            case 32:
                              return (r.prev = 32), s.f(), r.finish(32);
                            case 35:
                              return (
                                "number" === typeof a &&
                                  o.push({
                                    eol: a,
                                    text: "",
                                    range: {
                                      startLineNumber: 0,
                                      startColumn: 0,
                                      endLineNumber: 0,
                                      endColumn: 0,
                                    },
                                  }),
                                r.abrupt("return", o)
                              );
                            case 37:
                            case "end":
                              return r.stop();
                          }
                      },
                      r,
                      this,
                      [[7, 29, 32, 35]]
                    );
                  })
                );
              },
            },
            {
              key: "computeLinks",
              value: function (e) {
                return rn(
                  this,
                  void 0,
                  void 0,
                  E.a.mark(function t() {
                    var n;
                    return E.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if ((n = this._getModel(e))) {
                                t.next = 3;
                                break;
                              }
                              return t.abrupt("return", null);
                            case 3:
                              return t.abrupt("return", ot(n));
                            case 4:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "textualSuggest",
              value: function (t, n, r, i) {
                return rn(
                  this,
                  void 0,
                  void 0,
                  E.a.mark(function o() {
                    var a, s, u, c, l, f, h, d;
                    return E.a.wrap(
                      function (o) {
                        for (;;)
                          switch ((o.prev = o.next)) {
                            case 0:
                              if ((a = this._getModel(t))) {
                                o.next = 3;
                                break;
                              }
                              return o.abrupt("return", null);
                            case 3:
                              (s = []),
                                (u = new Set()),
                                (c = new RegExp(r, i)),
                                (l = a.getWordAtPosition(n, c)) &&
                                  u.add(a.getValueInRange(l)),
                                (f = b(a.words(c))),
                                (o.prev = 9),
                                f.s();
                            case 11:
                              if ((h = f.n()).done) {
                                o.next = 23;
                                break;
                              }
                              if (((d = h.value), !u.has(d))) {
                                o.next = 15;
                                break;
                              }
                              return o.abrupt("continue", 21);
                            case 15:
                              if ((u.add(d), isNaN(Number(d)))) {
                                o.next = 18;
                                break;
                              }
                              return o.abrupt("continue", 21);
                            case 18:
                              if (
                                (s.push(d), !(u.size > e._suggestionsLimit))
                              ) {
                                o.next = 21;
                                break;
                              }
                              return o.abrupt("break", 23);
                            case 21:
                              o.next = 11;
                              break;
                            case 23:
                              o.next = 28;
                              break;
                            case 25:
                              (o.prev = 25), (o.t0 = o.catch(9)), f.e(o.t0);
                            case 28:
                              return (o.prev = 28), f.f(), o.finish(28);
                            case 31:
                              return o.abrupt("return", s);
                            case 32:
                            case "end":
                              return o.stop();
                          }
                      },
                      o,
                      this,
                      [[9, 25, 28, 31]]
                    );
                  })
                );
              },
            },
            {
              key: "computeWordRanges",
              value: function (e, t, n, r) {
                return rn(
                  this,
                  void 0,
                  void 0,
                  E.a.mark(function i() {
                    var o, a, s, u, c, l, f, h, d;
                    return E.a.wrap(
                      function (i) {
                        for (;;)
                          switch ((i.prev = i.next)) {
                            case 0:
                              if ((o = this._getModel(e))) {
                                i.next = 3;
                                break;
                              }
                              return i.abrupt("return", Object.create(null));
                            case 3:
                              (a = new RegExp(n, r)),
                                (s = Object.create(null)),
                                (u = t.startLineNumber);
                            case 6:
                              if (!(u < t.endLineNumber)) {
                                i.next = 31;
                                break;
                              }
                              (c = o.getLineWords(u, a)),
                                (l = b(c)),
                                (i.prev = 9),
                                l.s();
                            case 11:
                              if ((f = l.n()).done) {
                                i.next = 20;
                                break;
                              }
                              if (((h = f.value), isNaN(Number(h.word)))) {
                                i.next = 15;
                                break;
                              }
                              return i.abrupt("continue", 18);
                            case 15:
                              (d = s[h.word]) || ((d = []), (s[h.word] = d)),
                                d.push({
                                  startLineNumber: u,
                                  startColumn: h.startColumn,
                                  endLineNumber: u,
                                  endColumn: h.endColumn,
                                });
                            case 18:
                              i.next = 11;
                              break;
                            case 20:
                              i.next = 25;
                              break;
                            case 22:
                              (i.prev = 22), (i.t0 = i.catch(9)), l.e(i.t0);
                            case 25:
                              return (i.prev = 25), l.f(), i.finish(25);
                            case 28:
                              u++, (i.next = 6);
                              break;
                            case 31:
                              return i.abrupt("return", s);
                            case 32:
                            case "end":
                              return i.stop();
                          }
                      },
                      i,
                      this,
                      [[9, 22, 25, 28]]
                    );
                  })
                );
              },
            },
            {
              key: "navigateValueSet",
              value: function (e, t, n, r, i) {
                return rn(
                  this,
                  void 0,
                  void 0,
                  E.a.mark(function o() {
                    var a, s, u, c, l, f;
                    return E.a.wrap(
                      function (o) {
                        for (;;)
                          switch ((o.prev = o.next)) {
                            case 0:
                              if ((a = this._getModel(e))) {
                                o.next = 3;
                                break;
                              }
                              return o.abrupt("return", null);
                            case 3:
                              if (
                                ((s = new RegExp(r, i)),
                                t.startColumn === t.endColumn &&
                                  (t = {
                                    startLineNumber: t.startLineNumber,
                                    startColumn: t.startColumn,
                                    endLineNumber: t.endLineNumber,
                                    endColumn: t.endColumn + 1,
                                  }),
                                (u = a.getValueInRange(t)),
                                (c = a.getWordAtPosition(
                                  {
                                    lineNumber: t.startLineNumber,
                                    column: t.startColumn,
                                  },
                                  s
                                )))
                              ) {
                                o.next = 9;
                                break;
                              }
                              return o.abrupt("return", null);
                            case 9:
                              return (
                                (l = a.getValueInRange(c)),
                                (f = at.INSTANCE.navigateValueSet(
                                  t,
                                  u,
                                  c,
                                  l,
                                  n
                                )),
                                o.abrupt("return", f)
                              );
                            case 12:
                            case "end":
                              return o.stop();
                          }
                      },
                      o,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "loadForeignModule",
              value: function (e, t, n) {
                var r = this,
                  i = {
                    host: M(n, function (e, t) {
                      return r._host.fhr(e, t);
                    }),
                    getMirrorModels: function () {
                      return r._getModels();
                    },
                  };
                return this._foreignModuleFactory
                  ? ((this._foreignModule = this._foreignModuleFactory(i, t)),
                    Promise.resolve(P(this._foreignModule)))
                  : Promise.reject(new Error("Unexpected usage"));
              },
            },
            {
              key: "fmr",
              value: function (e, t) {
                if (
                  !this._foreignModule ||
                  "function" !== typeof this._foreignModule[e]
                )
                  return Promise.reject(
                    new Error("Missing requestHandler or method: " + e)
                  );
                try {
                  return Promise.resolve(
                    this._foreignModule[e].apply(this._foreignModule, t)
                  );
                } catch (n) {
                  return Promise.reject(n);
                }
              },
            },
          ]),
          e
        );
      })();
    (an._diffLimit = 1e5),
      (an._suggestionsLimit = 1e4),
      "function" === typeof importScripts &&
        (I.a.monaco = {
          editor: void 0,
          languages: void 0,
          CancellationTokenSource: gt,
          Emitter: lt,
          KeyCode: Rt,
          KeyMod: nn,
          Position: Ie,
          Range: Pe,
          Selection: en,
          SelectionDirection: Ht,
          MarkerSeverity: jt,
          MarkerTag: Dt,
          Uri: Se,
          Token: tn,
        });
    var sn,
      un = !1;
    function cn(e) {
      if (!un) {
        un = !0;
        var t = new j(
          function (e) {
            self.postMessage(e);
          },
          function (t) {
            return new an(t, e);
          }
        );
        self.onmessage = function (e) {
          t.onmessage(e.data);
        };
      }
    }
    function ln(e, t) {
      void 0 === t && (t = !1);
      var n = e.length,
        r = 0,
        i = "",
        o = 0,
        a = 16,
        s = 0,
        u = 0,
        c = 0,
        l = 0,
        f = 0;
      function h(t, n) {
        for (var i = 0, o = 0; i < t || !n; ) {
          var a = e.charCodeAt(r);
          if (a >= 48 && a <= 57) o = 16 * o + a - 48;
          else if (a >= 65 && a <= 70) o = 16 * o + a - 65 + 10;
          else {
            if (!(a >= 97 && a <= 102)) break;
            o = 16 * o + a - 97 + 10;
          }
          r++, i++;
        }
        return i < t && (o = -1), o;
      }
      function d() {
        if (((i = ""), (f = 0), (o = r), (u = s), (l = c), r >= n))
          return (o = n), (a = 17);
        var t = e.charCodeAt(r);
        if (fn(t)) {
          do {
            r++, (i += String.fromCharCode(t)), (t = e.charCodeAt(r));
          } while (fn(t));
          return (a = 15);
        }
        if (hn(t))
          return (
            r++,
            (i += String.fromCharCode(t)),
            13 === t && 10 === e.charCodeAt(r) && (r++, (i += "\n")),
            s++,
            (c = r),
            (a = 14)
          );
        switch (t) {
          case 123:
            return r++, (a = 1);
          case 125:
            return r++, (a = 2);
          case 91:
            return r++, (a = 3);
          case 93:
            return r++, (a = 4);
          case 58:
            return r++, (a = 6);
          case 44:
            return r++, (a = 5);
          case 34:
            return (
              r++,
              (i = (function () {
                for (var t = "", i = r; ; ) {
                  if (r >= n) {
                    (t += e.substring(i, r)), (f = 2);
                    break;
                  }
                  var o = e.charCodeAt(r);
                  if (34 === o) {
                    (t += e.substring(i, r)), r++;
                    break;
                  }
                  if (92 !== o) {
                    if (o >= 0 && o <= 31) {
                      if (hn(o)) {
                        (t += e.substring(i, r)), (f = 2);
                        break;
                      }
                      f = 6;
                    }
                    r++;
                  } else {
                    if (((t += e.substring(i, r)), ++r >= n)) {
                      f = 2;
                      break;
                    }
                    switch (e.charCodeAt(r++)) {
                      case 34:
                        t += '"';
                        break;
                      case 92:
                        t += "\\";
                        break;
                      case 47:
                        t += "/";
                        break;
                      case 98:
                        t += "\b";
                        break;
                      case 102:
                        t += "\f";
                        break;
                      case 110:
                        t += "\n";
                        break;
                      case 114:
                        t += "\r";
                        break;
                      case 116:
                        t += "\t";
                        break;
                      case 117:
                        var a = h(4, !0);
                        a >= 0 ? (t += String.fromCharCode(a)) : (f = 4);
                        break;
                      default:
                        f = 5;
                    }
                    i = r;
                  }
                }
                return t;
              })()),
              (a = 10)
            );
          case 47:
            var d = r - 1;
            if (47 === e.charCodeAt(r + 1)) {
              for (r += 2; r < n && !hn(e.charCodeAt(r)); ) r++;
              return (i = e.substring(d, r)), (a = 12);
            }
            if (42 === e.charCodeAt(r + 1)) {
              r += 2;
              for (var p = n - 1, g = !1; r < p; ) {
                var v = e.charCodeAt(r);
                if (42 === v && 47 === e.charCodeAt(r + 1)) {
                  (r += 2), (g = !0);
                  break;
                }
                r++,
                  hn(v) &&
                    (13 === v && 10 === e.charCodeAt(r) && r++, s++, (c = r));
              }
              return g || (r++, (f = 1)), (i = e.substring(d, r)), (a = 13);
            }
            return (i += String.fromCharCode(t)), r++, (a = 16);
          case 45:
            if (
              ((i += String.fromCharCode(t)), ++r === n || !dn(e.charCodeAt(r)))
            )
              return (a = 16);
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
            return (
              (i += (function () {
                var t = r;
                if (48 === e.charCodeAt(r)) r++;
                else for (r++; r < e.length && dn(e.charCodeAt(r)); ) r++;
                if (r < e.length && 46 === e.charCodeAt(r)) {
                  if (!(++r < e.length && dn(e.charCodeAt(r))))
                    return (f = 3), e.substring(t, r);
                  for (r++; r < e.length && dn(e.charCodeAt(r)); ) r++;
                }
                var n = r;
                if (
                  r < e.length &&
                  (69 === e.charCodeAt(r) || 101 === e.charCodeAt(r))
                )
                  if (
                    (((++r < e.length && 43 === e.charCodeAt(r)) ||
                      45 === e.charCodeAt(r)) &&
                      r++,
                    r < e.length && dn(e.charCodeAt(r)))
                  ) {
                    for (r++; r < e.length && dn(e.charCodeAt(r)); ) r++;
                    n = r;
                  } else f = 3;
                return e.substring(t, n);
              })()),
              (a = 11)
            );
          default:
            for (; r < n && m(t); ) r++, (t = e.charCodeAt(r));
            if (o !== r) {
              switch ((i = e.substring(o, r))) {
                case "true":
                  return (a = 8);
                case "false":
                  return (a = 9);
                case "null":
                  return (a = 7);
              }
              return (a = 16);
            }
            return (i += String.fromCharCode(t)), r++, (a = 16);
        }
      }
      function m(e) {
        if (fn(e) || hn(e)) return !1;
        switch (e) {
          case 125:
          case 93:
          case 123:
          case 91:
          case 34:
          case 58:
          case 44:
          case 47:
            return !1;
        }
        return !0;
      }
      return {
        setPosition: function (e) {
          (r = e), (i = ""), (o = 0), (a = 16), (f = 0);
        },
        getPosition: function () {
          return r;
        },
        scan: t
          ? function () {
              var e;
              do {
                e = d();
              } while (e >= 12 && e <= 15);
              return e;
            }
          : d,
        getToken: function () {
          return a;
        },
        getTokenValue: function () {
          return i;
        },
        getTokenOffset: function () {
          return o;
        },
        getTokenLength: function () {
          return r - o;
        },
        getTokenStartLine: function () {
          return u;
        },
        getTokenStartCharacter: function () {
          return o - l;
        },
        getTokenError: function () {
          return f;
        },
      };
    }
    function fn(e) {
      return (
        32 === e ||
        9 === e ||
        11 === e ||
        12 === e ||
        160 === e ||
        5760 === e ||
        (e >= 8192 && e <= 8203) ||
        8239 === e ||
        8287 === e ||
        12288 === e ||
        65279 === e
      );
    }
    function hn(e) {
      return 10 === e || 13 === e || 8232 === e || 8233 === e;
    }
    function dn(e) {
      return e >= 48 && e <= 57;
    }
    function mn(e, t, n) {
      var r, i, o, a, s;
      if (t) {
        for (a = t.offset, s = a + t.length, o = a; o > 0 && !gn(e, o - 1); )
          o--;
        for (var u = s; u < e.length && !gn(e, u); ) u++;
        (i = e.substring(o, u)),
          (r = (function (e, t) {
            var n = 0,
              r = 0,
              i = t.tabSize || 4;
            for (; n < e.length; ) {
              var o = e.charAt(n);
              if (" " === o) r++;
              else {
                if ("\t" !== o) break;
                r += i;
              }
              n++;
            }
            return Math.floor(r / i);
          })(i, n));
      } else (i = e), (r = 0), (o = 0), (a = 0), (s = e.length);
      var c,
        l = (function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t.charAt(n);
            if ("\r" === r)
              return n + 1 < t.length && "\n" === t.charAt(n + 1)
                ? "\r\n"
                : "\r";
            if ("\n" === r) return "\n";
          }
          return (e && e.eol) || "\n";
        })(n, e),
        f = !1,
        h = 0;
      c = n.insertSpaces ? pn(" ", n.tabSize || 4) : "\t";
      var d = ln(i, !1),
        m = !1;
      function p() {
        return l + pn(c, r + h);
      }
      function g() {
        var e = d.scan();
        for (f = !1; 15 === e || 14 === e; )
          (f = f || 14 === e), (e = d.scan());
        return (m = 16 === e || 0 !== d.getTokenError()), e;
      }
      var v = [];
      function y(t, n, r) {
        !m &&
          n < s &&
          r > a &&
          e.substring(n, r) !== t &&
          v.push({ offset: n, length: r - n, content: t });
      }
      var b = g();
      if (17 !== b) {
        var C = d.getTokenOffset() + o;
        y(pn(c, r), o, C);
      }
      for (; 17 !== b; ) {
        for (
          var _ = d.getTokenOffset() + d.getTokenLength() + o, S = g(), k = "";
          !f && (12 === S || 13 === S);

        ) {
          y(" ", _, d.getTokenOffset() + o),
            (_ = d.getTokenOffset() + d.getTokenLength() + o),
            (k = 12 === S ? p() : ""),
            (S = g());
        }
        if (2 === S) 1 !== b && (h--, (k = p()));
        else if (4 === S) 3 !== b && (h--, (k = p()));
        else {
          switch (b) {
            case 3:
            case 1:
              h++, (k = p());
              break;
            case 5:
            case 12:
              k = p();
              break;
            case 13:
              k = f ? p() : " ";
              break;
            case 6:
              k = " ";
              break;
            case 10:
              if (6 === S) {
                k = "";
                break;
              }
            case 7:
            case 8:
            case 9:
            case 11:
            case 2:
            case 4:
              12 === S || 13 === S
                ? (k = " ")
                : 5 !== S && 17 !== S && (m = !0);
              break;
            case 16:
              m = !0;
          }
          !f || (12 !== S && 13 !== S) || (k = p());
        }
        y(k, _, d.getTokenOffset() + o), (b = S);
      }
      return v;
    }
    function pn(e, t) {
      for (var n = "", r = 0; r < t; r++) n += e;
      return n;
    }
    function gn(e, t) {
      return -1 !== "\r\n".indexOf(e.charAt(t));
    }
    function vn(e, t, n) {
      void 0 === n && (n = sn.DEFAULT);
      var r = ln(e, !1);
      function i(e) {
        return e
          ? function () {
              return e(
                r.getTokenOffset(),
                r.getTokenLength(),
                r.getTokenStartLine(),
                r.getTokenStartCharacter()
              );
            }
          : function () {
              return !0;
            };
      }
      function o(e) {
        return e
          ? function (t) {
              return e(
                t,
                r.getTokenOffset(),
                r.getTokenLength(),
                r.getTokenStartLine(),
                r.getTokenStartCharacter()
              );
            }
          : function () {
              return !0;
            };
      }
      var a = i(t.onObjectBegin),
        s = o(t.onObjectProperty),
        u = i(t.onObjectEnd),
        c = i(t.onArrayBegin),
        l = i(t.onArrayEnd),
        f = o(t.onLiteralValue),
        h = o(t.onSeparator),
        d = i(t.onComment),
        m = o(t.onError),
        p = n && n.disallowComments,
        g = n && n.allowTrailingComma;
      function v() {
        for (;;) {
          var e = r.scan();
          switch (r.getTokenError()) {
            case 4:
              y(14);
              break;
            case 5:
              y(15);
              break;
            case 3:
              y(13);
              break;
            case 1:
              p || y(11);
              break;
            case 2:
              y(12);
              break;
            case 6:
              y(16);
          }
          switch (e) {
            case 12:
            case 13:
              p ? y(10) : d();
              break;
            case 16:
              y(1);
              break;
            case 15:
            case 14:
              break;
            default:
              return e;
          }
        }
      }
      function y(e, t, n) {
        if (
          (void 0 === t && (t = []),
          void 0 === n && (n = []),
          m(e),
          t.length + n.length > 0)
        )
          for (var i = r.getToken(); 17 !== i; ) {
            if (-1 !== t.indexOf(i)) {
              v();
              break;
            }
            if (-1 !== n.indexOf(i)) break;
            i = v();
          }
      }
      function b(e) {
        var t = r.getTokenValue();
        return e ? f(t) : s(t), v(), !0;
      }
      function C() {
        switch (r.getToken()) {
          case 3:
            return (function () {
              c(), v();
              for (var e = !1; 4 !== r.getToken() && 17 !== r.getToken(); ) {
                if (5 === r.getToken()) {
                  if ((e || y(4, [], []), h(","), v(), 4 === r.getToken() && g))
                    break;
                } else e && y(6, [], []);
                C() || y(4, [], [4, 5]), (e = !0);
              }
              return l(), 4 !== r.getToken() ? y(8, [4], []) : v(), !0;
            })();
          case 1:
            return (function () {
              a(), v();
              for (var e = !1; 2 !== r.getToken() && 17 !== r.getToken(); ) {
                if (5 === r.getToken()) {
                  if ((e || y(4, [], []), h(","), v(), 2 === r.getToken() && g))
                    break;
                } else e && y(6, [], []);
                (10 !== r.getToken()
                  ? (y(3, [], [2, 5]), 0)
                  : (b(!1),
                    6 === r.getToken()
                      ? (h(":"), v(), C() || y(4, [], [2, 5]))
                      : y(5, [], [2, 5]),
                    1)) || y(4, [], [2, 5]),
                  (e = !0);
              }
              return u(), 2 !== r.getToken() ? y(7, [2], []) : v(), !0;
            })();
          case 10:
            return b(!0);
          default:
            return (function () {
              switch (r.getToken()) {
                case 11:
                  var e = 0;
                  try {
                    "number" !== typeof (e = JSON.parse(r.getTokenValue())) &&
                      (y(2), (e = 0));
                  } catch (t) {
                    y(2);
                  }
                  f(e);
                  break;
                case 7:
                  f(null);
                  break;
                case 8:
                  f(!0);
                  break;
                case 9:
                  f(!1);
                  break;
                default:
                  return !1;
              }
              return v(), !0;
            })();
        }
      }
      return (
        v(),
        17 === r.getToken()
          ? !!n.allowEmptyContent || (y(4, [], []), !1)
          : C()
          ? (17 !== r.getToken() && y(9, [], []), !0)
          : (y(4, [], []), !1)
      );
    }
    (self.onmessage = function (e) {
      un || cn(null);
    }),
      (function (e) {
        e.DEFAULT = { allowTrailingComma: !1 };
      })(sn || (sn = {}));
    var yn,
      bn,
      Cn,
      _n,
      Sn,
      kn,
      xn,
      En,
      An,
      wn,
      Nn,
      Ln,
      Tn,
      On,
      In,
      Pn,
      Mn,
      Rn,
      jn,
      Dn,
      Fn,
      Un,
      Vn = ln,
      Wn = function (e, t, n) {
        void 0 === t && (t = []), void 0 === n && (n = sn.DEFAULT);
        var r = null,
          i = [],
          o = [];
        function a(e) {
          Array.isArray(i) ? i.push(e) : null !== r && (i[r] = e);
        }
        return (
          vn(
            e,
            {
              onObjectBegin: function () {
                var e = {};
                a(e), o.push(i), (i = e), (r = null);
              },
              onObjectProperty: function (e) {
                r = e;
              },
              onObjectEnd: function () {
                i = o.pop();
              },
              onArrayBegin: function () {
                var e = [];
                a(e), o.push(i), (i = e), (r = null);
              },
              onArrayEnd: function () {
                i = o.pop();
              },
              onLiteralValue: a,
              onError: function (e, n, r) {
                t.push({ error: e, offset: n, length: r });
              },
            },
            n
          ),
          i[0]
        );
      },
      qn = function e(t, n, r) {
        if (
          (void 0 === r && (r = !1),
          (function (e, t, n) {
            return (
              void 0 === n && (n = !1),
              (t >= e.offset && t < e.offset + e.length) ||
                (n && t === e.offset + e.length)
            );
          })(t, n, r))
        ) {
          var i = t.children;
          if (Array.isArray(i))
            for (var o = 0; o < i.length && i[o].offset <= n; o++) {
              var a = e(i[o], n, r);
              if (a) return a;
            }
          return t;
        }
      },
      Kn = function e(t) {
        if (!t.parent || !t.parent.children) return [];
        var n = e(t.parent);
        if ("property" === t.parent.type) {
          var r = t.parent.children[0].value;
          n.push(r);
        } else if ("array" === t.parent.type) {
          var i = t.parent.children.indexOf(t);
          -1 !== i && n.push(i);
        }
        return n;
      },
      Bn = function e(t) {
        switch (t.type) {
          case "array":
            return t.children.map(e);
          case "object":
            for (
              var n = Object.create(null), r = 0, i = t.children;
              r < i.length;
              r++
            ) {
              var o = i[r],
                a = o.children[1];
              a && (n[o.children[0].value] = e(a));
            }
            return n;
          case "null":
          case "string":
          case "number":
          case "boolean":
            return t.value;
          default:
            return;
        }
      };
    function $n(e, t) {
      if (e === t) return !0;
      if (null === e || void 0 === e || null === t || void 0 === t) return !1;
      if (typeof e !== typeof t) return !1;
      if ("object" !== typeof e) return !1;
      if (Array.isArray(e) !== Array.isArray(t)) return !1;
      var n, r;
      if (Array.isArray(e)) {
        if (e.length !== t.length) return !1;
        for (n = 0; n < e.length; n++) if (!$n(e[n], t[n])) return !1;
      } else {
        var i = [];
        for (r in e) i.push(r);
        i.sort();
        var o = [];
        for (r in t) o.push(r);
        if ((o.sort(), !$n(i, o))) return !1;
        for (n = 0; n < i.length; n++) if (!$n(e[i[n]], t[i[n]])) return !1;
      }
      return !0;
    }
    function Hn(e) {
      return "number" === typeof e;
    }
    function Yn(e) {
      return "undefined" !== typeof e;
    }
    function Gn(e) {
      return "boolean" === typeof e;
    }
    ((bn = yn || (yn = {})).create = function (e, t) {
      return { line: e, character: t };
    }),
      (bn.is = function (e) {
        var t = e;
        return (
          xr.objectLiteral(t) && xr.number(t.line) && xr.number(t.character)
        );
      }),
      ((_n = Cn || (Cn = {})).create = function (e, t, n, r) {
        if (xr.number(e) && xr.number(t) && xr.number(n) && xr.number(r))
          return { start: yn.create(e, t), end: yn.create(n, r) };
        if (yn.is(e) && yn.is(t)) return { start: e, end: t };
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
      (_n.is = function (e) {
        var t = e;
        return xr.objectLiteral(t) && yn.is(t.start) && yn.is(t.end);
      }),
      (function (e) {
        (e.create = function (e, t) {
          return { uri: e, range: t };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              xr.defined(t) &&
              Cn.is(t.range) &&
              (xr.string(t.uri) || xr.undefined(t.uri))
            );
          });
      })(Sn || (Sn = {})),
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
              xr.defined(t) &&
              Cn.is(t.targetRange) &&
              xr.string(t.targetUri) &&
              (Cn.is(t.targetSelectionRange) ||
                xr.undefined(t.targetSelectionRange)) &&
              (Cn.is(t.originSelectionRange) ||
                xr.undefined(t.originSelectionRange))
            );
          });
      })(kn || (kn = {})),
      (function (e) {
        (e.create = function (e, t, n, r) {
          return { red: e, green: t, blue: n, alpha: r };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              xr.number(t.red) &&
              xr.number(t.green) &&
              xr.number(t.blue) &&
              xr.number(t.alpha)
            );
          });
      })(xn || (xn = {})),
      (function (e) {
        (e.create = function (e, t) {
          return { range: e, color: t };
        }),
          (e.is = function (e) {
            var t = e;
            return Cn.is(t.range) && xn.is(t.color);
          });
      })(En || (En = {})),
      (function (e) {
        (e.create = function (e, t, n) {
          return { label: e, textEdit: t, additionalTextEdits: n };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              xr.string(t.label) &&
              (xr.undefined(t.textEdit) || Mn.is(t)) &&
              (xr.undefined(t.additionalTextEdits) ||
                xr.typedArray(t.additionalTextEdits, Mn.is))
            );
          });
      })(An || (An = {})),
      (function (e) {
        (e.Comment = "comment"), (e.Imports = "imports"), (e.Region = "region");
      })(wn || (wn = {})),
      (function (e) {
        (e.create = function (e, t, n, r, i) {
          var o = { startLine: e, endLine: t };
          return (
            xr.defined(n) && (o.startCharacter = n),
            xr.defined(r) && (o.endCharacter = r),
            xr.defined(i) && (o.kind = i),
            o
          );
        }),
          (e.is = function (e) {
            var t = e;
            return (
              xr.number(t.startLine) &&
              xr.number(t.startLine) &&
              (xr.undefined(t.startCharacter) || xr.number(t.startCharacter)) &&
              (xr.undefined(t.endCharacter) || xr.number(t.endCharacter)) &&
              (xr.undefined(t.kind) || xr.string(t.kind))
            );
          });
      })(Nn || (Nn = {})),
      (function (e) {
        (e.create = function (e, t) {
          return { location: e, message: t };
        }),
          (e.is = function (e) {
            var t = e;
            return xr.defined(t) && Sn.is(t.location) && xr.string(t.message);
          });
      })(Ln || (Ln = {})),
      (function (e) {
        (e.Error = 1), (e.Warning = 2), (e.Information = 3), (e.Hint = 4);
      })(Tn || (Tn = {})),
      (function (e) {
        (e.Unnecessary = 1), (e.Deprecated = 2);
      })(On || (On = {})),
      (function (e) {
        (e.create = function (e, t, n, r, i, o) {
          var a = { range: e, message: t };
          return (
            xr.defined(n) && (a.severity = n),
            xr.defined(r) && (a.code = r),
            xr.defined(i) && (a.source = i),
            xr.defined(o) && (a.relatedInformation = o),
            a
          );
        }),
          (e.is = function (e) {
            var t = e;
            return (
              xr.defined(t) &&
              Cn.is(t.range) &&
              xr.string(t.message) &&
              (xr.number(t.severity) || xr.undefined(t.severity)) &&
              (xr.number(t.code) ||
                xr.string(t.code) ||
                xr.undefined(t.code)) &&
              (xr.string(t.source) || xr.undefined(t.source)) &&
              (xr.undefined(t.relatedInformation) ||
                xr.typedArray(t.relatedInformation, Ln.is))
            );
          });
      })(In || (In = {})),
      (function (e) {
        (e.create = function (e, t) {
          for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r];
          var i = { title: e, command: t };
          return xr.defined(n) && n.length > 0 && (i.arguments = n), i;
        }),
          (e.is = function (e) {
            var t = e;
            return xr.defined(t) && xr.string(t.title) && xr.string(t.command);
          });
      })(Pn || (Pn = {})),
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
              xr.objectLiteral(t) && xr.string(t.newText) && Cn.is(t.range)
            );
          });
      })(Mn || (Mn = {})),
      (function (e) {
        (e.create = function (e, t) {
          return { textDocument: e, edits: t };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              xr.defined(t) && Jn.is(t.textDocument) && Array.isArray(t.edits)
            );
          });
      })(Rn || (Rn = {})),
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
              xr.string(t.uri) &&
              (void 0 === t.options ||
                ((void 0 === t.options.overwrite ||
                  xr.boolean(t.options.overwrite)) &&
                  (void 0 === t.options.ignoreIfExists ||
                    xr.boolean(t.options.ignoreIfExists))))
            );
          });
      })(jn || (jn = {})),
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
              xr.string(t.oldUri) &&
              xr.string(t.newUri) &&
              (void 0 === t.options ||
                ((void 0 === t.options.overwrite ||
                  xr.boolean(t.options.overwrite)) &&
                  (void 0 === t.options.ignoreIfExists ||
                    xr.boolean(t.options.ignoreIfExists))))
            );
          });
      })(Dn || (Dn = {})),
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
              xr.string(t.uri) &&
              (void 0 === t.options ||
                ((void 0 === t.options.recursive ||
                  xr.boolean(t.options.recursive)) &&
                  (void 0 === t.options.ignoreIfNotExists ||
                    xr.boolean(t.options.ignoreIfNotExists))))
            );
          });
      })(Fn || (Fn = {})),
      (function (e) {
        e.is = function (e) {
          var t = e;
          return (
            t &&
            (void 0 !== t.changes || void 0 !== t.documentChanges) &&
            (void 0 === t.documentChanges ||
              t.documentChanges.every(function (e) {
                return xr.string(e.kind)
                  ? jn.is(e) || Dn.is(e) || Fn.is(e)
                  : Rn.is(e);
              }))
          );
        };
      })(Un || (Un = {}));
    var zn,
      Jn,
      Qn,
      Zn,
      Xn,
      er,
      tr,
      nr,
      rr,
      ir,
      or,
      ar,
      sr,
      ur,
      cr,
      lr,
      fr,
      hr,
      dr,
      mr,
      pr,
      gr,
      vr,
      yr,
      br,
      Cr,
      _r,
      Sr = (function () {
        function e(e) {
          this.edits = e;
        }
        return (
          (e.prototype.insert = function (e, t) {
            this.edits.push(Mn.insert(e, t));
          }),
          (e.prototype.replace = function (e, t) {
            this.edits.push(Mn.replace(e, t));
          }),
          (e.prototype.delete = function (e) {
            this.edits.push(Mn.del(e));
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
                  if (Rn.is(e)) {
                    var n = new Sr(e.edits);
                    t._textEditChanges[e.textDocument.uri] = n;
                  }
                })
              : e.changes &&
                Object.keys(e.changes).forEach(function (n) {
                  var r = new Sr(e.changes[n]);
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
          if (Jn.is(e)) {
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
                (r = new Sr(i)),
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
              (r = new Sr(i)),
              (this._textEditChanges[e] = r);
          }
          return r;
        }),
        (e.prototype.createFile = function (e, t) {
          this.checkDocumentChanges(),
            this._workspaceEdit.documentChanges.push(jn.create(e, t));
        }),
        (e.prototype.renameFile = function (e, t, n) {
          this.checkDocumentChanges(),
            this._workspaceEdit.documentChanges.push(Dn.create(e, t, n));
        }),
        (e.prototype.deleteFile = function (e, t) {
          this.checkDocumentChanges(),
            this._workspaceEdit.documentChanges.push(Fn.create(e, t));
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
          return xr.defined(t) && xr.string(t.uri);
        });
    })(zn || (zn = {})),
      (function (e) {
        (e.create = function (e, t) {
          return { uri: e, version: t };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              xr.defined(t) &&
              xr.string(t.uri) &&
              (null === t.version || xr.number(t.version))
            );
          });
      })(Jn || (Jn = {})),
      (function (e) {
        (e.create = function (e, t, n, r) {
          return { uri: e, languageId: t, version: n, text: r };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              xr.defined(t) &&
              xr.string(t.uri) &&
              xr.string(t.languageId) &&
              xr.number(t.version) &&
              xr.string(t.text)
            );
          });
      })(Qn || (Qn = {})),
      (function (e) {
        (e.PlainText = "plaintext"), (e.Markdown = "markdown");
      })(Zn || (Zn = {})),
      (function (e) {
        e.is = function (t) {
          var n = t;
          return n === e.PlainText || n === e.Markdown;
        };
      })(Zn || (Zn = {})),
      (function (e) {
        e.is = function (e) {
          var t = e;
          return xr.objectLiteral(e) && Zn.is(t.kind) && xr.string(t.value);
        };
      })(Xn || (Xn = {})),
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
      })(er || (er = {})),
      (function (e) {
        (e.PlainText = 1), (e.Snippet = 2);
      })(tr || (tr = {})),
      (function (e) {
        e.Deprecated = 1;
      })(nr || (nr = {})),
      (function (e) {
        e.create = function (e) {
          return { label: e };
        };
      })(rr || (rr = {})),
      (function (e) {
        e.create = function (e, t) {
          return { items: e || [], isIncomplete: !!t };
        };
      })(ir || (ir = {})),
      (function (e) {
        (e.fromPlainText = function (e) {
          return e.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
        }),
          (e.is = function (e) {
            var t = e;
            return (
              xr.string(t) ||
              (xr.objectLiteral(t) &&
                xr.string(t.language) &&
                xr.string(t.value))
            );
          });
      })(or || (or = {})),
      (function (e) {
        e.is = function (e) {
          var t = e;
          return (
            !!t &&
            xr.objectLiteral(t) &&
            (Xn.is(t.contents) ||
              or.is(t.contents) ||
              xr.typedArray(t.contents, or.is)) &&
            (void 0 === e.range || Cn.is(e.range))
          );
        };
      })(ar || (ar = {})),
      (function (e) {
        e.create = function (e, t) {
          return t ? { label: e, documentation: t } : { label: e };
        };
      })(sr || (sr = {})),
      (function (e) {
        e.create = function (e, t) {
          for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r];
          var i = { label: e };
          return (
            xr.defined(t) && (i.documentation = t),
            xr.defined(n) ? (i.parameters = n) : (i.parameters = []),
            i
          );
        };
      })(ur || (ur = {})),
      (function (e) {
        (e.Text = 1), (e.Read = 2), (e.Write = 3);
      })(cr || (cr = {})),
      (function (e) {
        e.create = function (e, t) {
          var n = { range: e };
          return xr.number(t) && (n.kind = t), n;
        };
      })(lr || (lr = {})),
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
      })(fr || (fr = {})),
      (function (e) {
        e.Deprecated = 1;
      })(hr || (hr = {})),
      (function (e) {
        e.create = function (e, t, n, r, i) {
          var o = { name: e, kind: t, location: { uri: r, range: n } };
          return i && (o.containerName = i), o;
        };
      })(dr || (dr = {})),
      (function (e) {
        (e.create = function (e, t, n, r, i, o) {
          var a = { name: e, detail: t, kind: n, range: r, selectionRange: i };
          return void 0 !== o && (a.children = o), a;
        }),
          (e.is = function (e) {
            var t = e;
            return (
              t &&
              xr.string(t.name) &&
              xr.number(t.kind) &&
              Cn.is(t.range) &&
              Cn.is(t.selectionRange) &&
              (void 0 === t.detail || xr.string(t.detail)) &&
              (void 0 === t.deprecated || xr.boolean(t.deprecated)) &&
              (void 0 === t.children || Array.isArray(t.children))
            );
          });
      })(mr || (mr = {})),
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
      })(pr || (pr = {})),
      (function (e) {
        (e.create = function (e, t) {
          var n = { diagnostics: e };
          return void 0 !== t && null !== t && (n.only = t), n;
        }),
          (e.is = function (e) {
            var t = e;
            return (
              xr.defined(t) &&
              xr.typedArray(t.diagnostics, In.is) &&
              (void 0 === t.only || xr.typedArray(t.only, xr.string))
            );
          });
      })(gr || (gr = {})),
      (function (e) {
        (e.create = function (e, t, n) {
          var r = { title: e };
          return (
            Pn.is(t) ? (r.command = t) : (r.edit = t),
            void 0 !== n && (r.kind = n),
            r
          );
        }),
          (e.is = function (e) {
            var t = e;
            return (
              t &&
              xr.string(t.title) &&
              (void 0 === t.diagnostics ||
                xr.typedArray(t.diagnostics, In.is)) &&
              (void 0 === t.kind || xr.string(t.kind)) &&
              (void 0 !== t.edit || void 0 !== t.command) &&
              (void 0 === t.command || Pn.is(t.command)) &&
              (void 0 === t.isPreferred || xr.boolean(t.isPreferred)) &&
              (void 0 === t.edit || Un.is(t.edit))
            );
          });
      })(vr || (vr = {})),
      (function (e) {
        (e.create = function (e, t) {
          var n = { range: e };
          return xr.defined(t) && (n.data = t), n;
        }),
          (e.is = function (e) {
            var t = e;
            return (
              xr.defined(t) &&
              Cn.is(t.range) &&
              (xr.undefined(t.command) || Pn.is(t.command))
            );
          });
      })(yr || (yr = {})),
      (function (e) {
        (e.create = function (e, t) {
          return { tabSize: e, insertSpaces: t };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              xr.defined(t) &&
              xr.number(t.tabSize) &&
              xr.boolean(t.insertSpaces)
            );
          });
      })(br || (br = {})),
      (function (e) {
        (e.create = function (e, t, n) {
          return { range: e, target: t, data: n };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              xr.defined(t) &&
              Cn.is(t.range) &&
              (xr.undefined(t.target) || xr.string(t.target))
            );
          });
      })(Cr || (Cr = {})),
      (function (e) {
        (e.create = function (e, t) {
          return { range: e, parent: t };
        }),
          (e.is = function (t) {
            var n = t;
            return (
              void 0 !== n &&
              Cn.is(n.range) &&
              (void 0 === n.parent || e.is(n.parent))
            );
          });
      })(_r || (_r = {}));
    var kr;
    !(function (e) {
      (e.create = function (e, t, n, r) {
        return new Er(e, t, n, r);
      }),
        (e.is = function (e) {
          var t = e;
          return !!(
            xr.defined(t) &&
            xr.string(t.uri) &&
            (xr.undefined(t.languageId) || xr.string(t.languageId)) &&
            xr.number(t.lineCount) &&
            xr.func(t.getText) &&
            xr.func(t.positionAt) &&
            xr.func(t.offsetAt)
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
                  u = 0;
                for (; a < i.length && s < o.length; ) {
                  var c = n(i[a], o[s]);
                  t[u++] = c <= 0 ? i[a++] : o[s++];
                }
                for (; a < i.length; ) t[u++] = i[a++];
                for (; s < o.length; ) t[u++] = o[s++];
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
              u = e.offsetAt(a.range.end);
            if (!(u <= i)) throw new Error("Overlapping edit");
            (n = n.substring(0, s) + a.newText + n.substring(u, n.length)),
              (i = s);
          }
          return n;
        });
    })(kr || (kr = {}));
    var xr,
      Er = (function () {
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
            if (0 === r) return yn.create(0, e);
            for (; n < r; ) {
              var i = Math.floor((n + r) / 2);
              t[i] > e ? (r = i) : (n = i + 1);
            }
            var o = n - 1;
            return yn.create(o, e - t[o]);
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
    })(xr || (xr = {}));
    var Ar,
      wr,
      Nr,
      Lr = (function () {
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
          (e.prototype.update = function (t, n) {
            for (var r = 0, i = t; r < i.length; r++) {
              var o = i[r];
              if (e.isIncremental(o)) {
                var a = Or(o.range),
                  s = this.offsetAt(a.start),
                  u = this.offsetAt(a.end);
                this._content =
                  this._content.substring(0, s) +
                  o.text +
                  this._content.substring(u, this._content.length);
                var c = Math.max(a.start.line, 0),
                  l = Math.max(a.end.line, 0),
                  f = this._lineOffsets,
                  h = Tr(o.text, !1, s);
                if (l - c === h.length)
                  for (var d = 0, m = h.length; d < m; d++) f[d + c + 1] = h[d];
                else
                  h.length < 1e4
                    ? f.splice.apply(f, [c + 1, l - c].concat(h))
                    : (this._lineOffsets = f = f
                        .slice(0, c + 1)
                        .concat(h, f.slice(l + 1)));
                var p = o.text.length - (u - s);
                if (0 !== p)
                  for (d = c + 1 + h.length, m = f.length; d < m; d++)
                    f[d] = f[d] + p;
              } else {
                if (!e.isFull(o))
                  throw new Error("Unknown change event received");
                (this._content = o.text), (this._lineOffsets = void 0);
              }
            }
            this._version = n;
          }),
          (e.prototype.getLineOffsets = function () {
            return (
              void 0 === this._lineOffsets &&
                (this._lineOffsets = Tr(this._content, !0)),
              this._lineOffsets
            );
          }),
          (e.prototype.positionAt = function (e) {
            e = Math.max(Math.min(e, this._content.length), 0);
            var t = this.getLineOffsets(),
              n = 0,
              r = t.length;
            if (0 === r) return { line: 0, character: e };
            for (; n < r; ) {
              var i = Math.floor((n + r) / 2);
              t[i] > e ? (r = i) : (n = i + 1);
            }
            var o = n - 1;
            return { line: o, character: e - t[o] };
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
          (e.isIncremental = function (e) {
            var t = e;
            return (
              void 0 !== t &&
              null !== t &&
              "string" === typeof t.text &&
              void 0 !== t.range &&
              (void 0 === t.rangeLength || "number" === typeof t.rangeLength)
            );
          }),
          (e.isFull = function (e) {
            var t = e;
            return (
              void 0 !== t &&
              null !== t &&
              "string" === typeof t.text &&
              void 0 === t.range &&
              void 0 === t.rangeLength
            );
          }),
          e
        );
      })();
    function Tr(e, t, n) {
      void 0 === n && (n = 0);
      for (var r = t ? [n] : [], i = 0; i < e.length; i++) {
        var o = e.charCodeAt(i);
        (13 !== o && 10 !== o) ||
          (13 === o && i + 1 < e.length && 10 === e.charCodeAt(i + 1) && i++,
          r.push(n + i + 1));
      }
      return r;
    }
    function Or(e) {
      var t = e.start,
        n = e.end;
      return t.line > n.line || (t.line === n.line && t.character > n.character)
        ? { start: n, end: t }
        : e;
    }
    function Ir(e) {
      var t = Or(e.range);
      return t !== e.range ? { newText: e.newText, range: t } : e;
    }
    function Pr(e, t) {
      return 0 === t.length
        ? e
        : e.replace(/\{(\d+)\}/g, function (e, n) {
            var r = n[0];
            return "undefined" !== typeof t[r] ? t[r] : e;
          });
    }
    function Mr(e, t) {
      for (var n = [], r = 2; r < arguments.length; r++)
        n[r - 2] = arguments[r];
      return Pr(t, n);
    }
    function Rr(e) {
      return Mr;
    }
    !(function (e) {
      (e.create = function (e, t, n, r) {
        return new Lr(e, t, n, r);
      }),
        (e.update = function (e, t, n) {
          if (e instanceof Lr) return e.update(t, n), e;
          throw new Error(
            "TextDocument.update: document must be created by TextDocument.create"
          );
        }),
        (e.applyEdits = function (e, t) {
          for (
            var n = e.getText(),
              r = 0,
              i = [],
              o = 0,
              a = (function e(t, n) {
                if (t.length <= 1) return t;
                var r = (t.length / 2) | 0,
                  i = t.slice(0, r),
                  o = t.slice(r);
                e(i, n), e(o, n);
                var a = 0,
                  s = 0,
                  u = 0;
                for (; a < i.length && s < o.length; ) {
                  var c = n(i[a], o[s]);
                  t[u++] = c <= 0 ? i[a++] : o[s++];
                }
                for (; a < i.length; ) t[u++] = i[a++];
                for (; s < o.length; ) t[u++] = o[s++];
                return t;
              })(t.map(Ir), function (e, t) {
                var n = e.range.start.line - t.range.start.line;
                return 0 === n
                  ? e.range.start.character - t.range.start.character
                  : n;
              });
            o < a.length;
            o++
          ) {
            var s = a[o],
              u = e.offsetAt(s.range.start);
            if (u < r) throw new Error("Overlapping edit");
            u > r && i.push(n.substring(r, u)),
              s.newText.length && i.push(s.newText),
              (r = e.offsetAt(s.range.end));
          }
          return i.push(n.substr(r)), i.join("");
        });
    })(Ar || (Ar = {})),
      (function (e) {
        (e[(e.Undefined = 0)] = "Undefined"),
          (e[(e.EnumValueMismatch = 1)] = "EnumValueMismatch"),
          (e[(e.UnexpectedEndOfComment = 257)] = "UnexpectedEndOfComment"),
          (e[(e.UnexpectedEndOfString = 258)] = "UnexpectedEndOfString"),
          (e[(e.UnexpectedEndOfNumber = 259)] = "UnexpectedEndOfNumber"),
          (e[(e.InvalidUnicode = 260)] = "InvalidUnicode"),
          (e[(e.InvalidEscapeCharacter = 261)] = "InvalidEscapeCharacter"),
          (e[(e.InvalidCharacter = 262)] = "InvalidCharacter"),
          (e[(e.PropertyExpected = 513)] = "PropertyExpected"),
          (e[(e.CommaExpected = 514)] = "CommaExpected"),
          (e[(e.ColonExpected = 515)] = "ColonExpected"),
          (e[(e.ValueExpected = 516)] = "ValueExpected"),
          (e[(e.CommaOrCloseBacketExpected = 517)] =
            "CommaOrCloseBacketExpected"),
          (e[(e.CommaOrCloseBraceExpected = 518)] =
            "CommaOrCloseBraceExpected"),
          (e[(e.TrailingComma = 519)] = "TrailingComma"),
          (e[(e.DuplicateKey = 520)] = "DuplicateKey"),
          (e[(e.CommentNotPermitted = 521)] = "CommentNotPermitted"),
          (e[(e.SchemaResolveError = 768)] = "SchemaResolveError");
      })(wr || (wr = {})),
      ((Nr || (Nr = {})).LATEST = {
        textDocument: {
          completion: {
            completionItem: {
              documentationFormat: [Zn.Markdown, Zn.PlainText],
              commitCharactersSupport: !0,
            },
          },
        },
      });
    var jr,
      Dr = (function () {
        var e = function (t, n) {
          return (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(t, n);
        };
        return function (t, n) {
          function r() {
            this.constructor = t;
          }
          e(t, n),
            (t.prototype =
              null === n
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r()));
        };
      })(),
      Fr = Rr(),
      Ur = {
        "color-hex": {
          errorMessage: Fr(
            "colorHexFormatWarning",
            "Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA."
          ),
          pattern: /^#([0-9A-Fa-f]{3,4}|([0-9A-Fa-f]{2}){3,4})$/,
        },
        "date-time": {
          errorMessage: Fr(
            "dateTimeFormatWarning",
            "String is not a RFC3339 date-time."
          ),
          pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i,
        },
        date: {
          errorMessage: Fr(
            "dateFormatWarning",
            "String is not a RFC3339 date."
          ),
          pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/i,
        },
        time: {
          errorMessage: Fr(
            "timeFormatWarning",
            "String is not a RFC3339 time."
          ),
          pattern: /^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i,
        },
        email: {
          errorMessage: Fr(
            "emailFormatWarning",
            "String is not an e-mail address."
          ),
          pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        },
      },
      Vr = (function () {
        function e(e, t, n) {
          void 0 === n && (n = 0),
            (this.offset = t),
            (this.length = n),
            (this.parent = e);
        }
        return (
          Object.defineProperty(e.prototype, "children", {
            get: function () {
              return [];
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.toString = function () {
            return (
              "type: " +
              this.type +
              " (" +
              this.offset +
              "/" +
              this.length +
              ")" +
              (this.parent ? " parent: {" + this.parent.toString() + "}" : "")
            );
          }),
          e
        );
      })(),
      Wr = (function (e) {
        function t(t, n) {
          var r = e.call(this, t, n) || this;
          return (r.type = "null"), (r.value = null), r;
        }
        return Dr(t, e), t;
      })(Vr),
      qr = (function (e) {
        function t(t, n, r) {
          var i = e.call(this, t, r) || this;
          return (i.type = "boolean"), (i.value = n), i;
        }
        return Dr(t, e), t;
      })(Vr),
      Kr = (function (e) {
        function t(t, n) {
          var r = e.call(this, t, n) || this;
          return (r.type = "array"), (r.items = []), r;
        }
        return (
          Dr(t, e),
          Object.defineProperty(t.prototype, "children", {
            get: function () {
              return this.items;
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })(Vr),
      Br = (function (e) {
        function t(t, n) {
          var r = e.call(this, t, n) || this;
          return (
            (r.type = "number"), (r.isInteger = !0), (r.value = Number.NaN), r
          );
        }
        return Dr(t, e), t;
      })(Vr),
      $r = (function (e) {
        function t(t, n, r) {
          var i = e.call(this, t, n, r) || this;
          return (i.type = "string"), (i.value = ""), i;
        }
        return Dr(t, e), t;
      })(Vr),
      Hr = (function (e) {
        function t(t, n, r) {
          var i = e.call(this, t, n) || this;
          return (
            (i.type = "property"), (i.colonOffset = -1), (i.keyNode = r), i
          );
        }
        return (
          Dr(t, e),
          Object.defineProperty(t.prototype, "children", {
            get: function () {
              return this.valueNode
                ? [this.keyNode, this.valueNode]
                : [this.keyNode];
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })(Vr),
      Yr = (function (e) {
        function t(t, n) {
          var r = e.call(this, t, n) || this;
          return (r.type = "object"), (r.properties = []), r;
        }
        return (
          Dr(t, e),
          Object.defineProperty(t.prototype, "children", {
            get: function () {
              return this.properties;
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })(Vr);
    function Gr(e) {
      return Gn(e) ? (e ? {} : { not: {} }) : e;
    }
    !(function (e) {
      (e[(e.Key = 0)] = "Key"), (e[(e.Enum = 1)] = "Enum");
    })(jr || (jr = {}));
    var zr = (function () {
        function e(e, t) {
          void 0 === e && (e = -1),
            (this.focusOffset = e),
            (this.exclude = t),
            (this.schemas = []);
        }
        return (
          (e.prototype.add = function (e) {
            this.schemas.push(e);
          }),
          (e.prototype.merge = function (e) {
            Array.prototype.push.apply(this.schemas, e.schemas);
          }),
          (e.prototype.include = function (e) {
            return (
              (-1 === this.focusOffset || ei(e, this.focusOffset)) &&
              e !== this.exclude
            );
          }),
          (e.prototype.newSub = function () {
            return new e(-1, this.exclude);
          }),
          e
        );
      })(),
      Jr = (function () {
        function e() {}
        return (
          Object.defineProperty(e.prototype, "schemas", {
            get: function () {
              return [];
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.add = function (e) {}),
          (e.prototype.merge = function (e) {}),
          (e.prototype.include = function (e) {
            return !0;
          }),
          (e.prototype.newSub = function () {
            return this;
          }),
          (e.instance = new e()),
          e
        );
      })(),
      Qr = (function () {
        function e() {
          (this.problems = []),
            (this.propertiesMatches = 0),
            (this.propertiesValueMatches = 0),
            (this.primaryValueMatches = 0),
            (this.enumValueMatch = !1),
            (this.enumValues = void 0);
        }
        return (
          (e.prototype.hasProblems = function () {
            return !!this.problems.length;
          }),
          (e.prototype.mergeAll = function (e) {
            for (var t = 0, n = e; t < n.length; t++) {
              var r = n[t];
              this.merge(r);
            }
          }),
          (e.prototype.merge = function (e) {
            this.problems = this.problems.concat(e.problems);
          }),
          (e.prototype.mergeEnumValues = function (e) {
            if (
              !this.enumValueMatch &&
              !e.enumValueMatch &&
              this.enumValues &&
              e.enumValues
            ) {
              this.enumValues = this.enumValues.concat(e.enumValues);
              for (var t = 0, n = this.problems; t < n.length; t++) {
                var r = n[t];
                r.code === wr.EnumValueMismatch &&
                  (r.message = Fr(
                    "enumWarning",
                    "Value is not accepted. Valid values: {0}.",
                    this.enumValues
                      .map(function (e) {
                        return JSON.stringify(e);
                      })
                      .join(", ")
                  ));
              }
            }
          }),
          (e.prototype.mergePropertyMatch = function (e) {
            this.merge(e),
              this.propertiesMatches++,
              (e.enumValueMatch || (!e.hasProblems() && e.propertiesMatches)) &&
                this.propertiesValueMatches++,
              e.enumValueMatch &&
                e.enumValues &&
                1 === e.enumValues.length &&
                this.primaryValueMatches++;
          }),
          (e.prototype.compare = function (e) {
            var t = this.hasProblems();
            return t !== e.hasProblems()
              ? t
                ? -1
                : 1
              : this.enumValueMatch !== e.enumValueMatch
              ? e.enumValueMatch
                ? -1
                : 1
              : this.primaryValueMatches !== e.primaryValueMatches
              ? this.primaryValueMatches - e.primaryValueMatches
              : this.propertiesValueMatches !== e.propertiesValueMatches
              ? this.propertiesValueMatches - e.propertiesValueMatches
              : this.propertiesMatches - e.propertiesMatches;
          }),
          e
        );
      })();
    function Zr(e) {
      return Bn(e);
    }
    function Xr(e) {
      return Kn(e);
    }
    function ei(e, t, n) {
      return (
        void 0 === n && (n = !1),
        (t >= e.offset && t < e.offset + e.length) ||
          (n && t === e.offset + e.length)
      );
    }
    var ti = (function () {
      function e(e, t, n) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          (this.root = e),
          (this.syntaxErrors = t),
          (this.comments = n);
      }
      return (
        (e.prototype.getNodeFromOffset = function (e, t) {
          if ((void 0 === t && (t = !1), this.root)) return qn(this.root, e, t);
        }),
        (e.prototype.visit = function (e) {
          if (this.root) {
            !(function t(n) {
              var r = e(n),
                i = n.children;
              if (Array.isArray(i))
                for (var o = 0; o < i.length && r; o++) r = t(i[o]);
              return r;
            })(this.root);
          }
        }),
        (e.prototype.validate = function (e, t) {
          if (this.root && t) {
            var n = new Qr();
            return (
              ni(this.root, t, n, Jr.instance),
              n.problems.map(function (t) {
                var n = Cn.create(
                  e.positionAt(t.location.offset),
                  e.positionAt(t.location.offset + t.location.length)
                );
                return In.create(n, t.message, t.severity, t.code);
              })
            );
          }
        }),
        (e.prototype.getMatchingSchemas = function (e, t, n) {
          void 0 === t && (t = -1);
          var r = new zr(t, n);
          return this.root && e && ni(this.root, e, new Qr(), r), r.schemas;
        }),
        e
      );
    })();
    function ni(e, t, n, r) {
      if (e && r.include(e)) {
        var i = e;
        switch (i.type) {
          case "object":
            !(function (e, t, n, r) {
              for (
                var i = Object.create(null), o = [], a = 0, s = e.properties;
                a < s.length;
                a++
              ) {
                var u = (y = s[a]).keyNode.value;
                (i[u] = y.valueNode), o.push(u);
              }
              if (Array.isArray(t.required))
                for (var c = 0, l = t.required; c < l.length; c++) {
                  var f = l[c];
                  if (!i[f]) {
                    var h =
                        e.parent &&
                        "property" === e.parent.type &&
                        e.parent.keyNode,
                      d = h
                        ? { offset: h.offset, length: h.length }
                        : { offset: e.offset, length: 1 };
                    n.problems.push({
                      location: d,
                      severity: Tn.Warning,
                      message: Fr(
                        "MissingRequiredPropWarning",
                        'Missing property "{0}".',
                        f
                      ),
                    });
                  }
                }
              var m = function (e) {
                for (var t = o.indexOf(e); t >= 0; )
                  o.splice(t, 1), (t = o.indexOf(e));
              };
              if (t.properties)
                for (
                  var p = 0, g = Object.keys(t.properties);
                  p < g.length;
                  p++
                ) {
                  f = g[p];
                  m(f);
                  var v = t.properties[f];
                  if ((T = i[f]))
                    if (Gn(v))
                      if (v) n.propertiesMatches++, n.propertiesValueMatches++;
                      else {
                        var y = T.parent;
                        n.problems.push({
                          location: {
                            offset: y.keyNode.offset,
                            length: y.keyNode.length,
                          },
                          severity: Tn.Warning,
                          message:
                            t.errorMessage ||
                            Fr(
                              "DisallowedExtraPropWarning",
                              "Property {0} is not allowed.",
                              f
                            ),
                        });
                      }
                    else {
                      var b = new Qr();
                      ni(T, v, b, r), n.mergePropertyMatch(b);
                    }
                }
              if (t.patternProperties)
                for (
                  var C = 0, _ = Object.keys(t.patternProperties);
                  C < _.length;
                  C++
                )
                  for (
                    var S = _[C], k = new RegExp(S), x = 0, E = o.slice(0);
                    x < E.length;
                    x++
                  ) {
                    f = E[x];
                    if (k.test(f))
                      if ((m(f), (T = i[f])))
                        if (Gn((v = t.patternProperties[S])))
                          if (v)
                            n.propertiesMatches++, n.propertiesValueMatches++;
                          else {
                            y = T.parent;
                            n.problems.push({
                              location: {
                                offset: y.keyNode.offset,
                                length: y.keyNode.length,
                              },
                              severity: Tn.Warning,
                              message:
                                t.errorMessage ||
                                Fr(
                                  "DisallowedExtraPropWarning",
                                  "Property {0} is not allowed.",
                                  f
                                ),
                            });
                          }
                        else {
                          b = new Qr();
                          ni(T, v, b, r), n.mergePropertyMatch(b);
                        }
                  }
              if ("object" === typeof t.additionalProperties)
                for (var A = 0, w = o; A < w.length; A++) {
                  f = w[A];
                  if ((T = i[f])) {
                    b = new Qr();
                    ni(T, t.additionalProperties, b, r),
                      n.mergePropertyMatch(b);
                  }
                }
              else if (!1 === t.additionalProperties && o.length > 0)
                for (var N = 0, L = o; N < L.length; N++) {
                  var T;
                  f = L[N];
                  if ((T = i[f])) {
                    y = T.parent;
                    n.problems.push({
                      location: {
                        offset: y.keyNode.offset,
                        length: y.keyNode.length,
                      },
                      severity: Tn.Warning,
                      message:
                        t.errorMessage ||
                        Fr(
                          "DisallowedExtraPropWarning",
                          "Property {0} is not allowed.",
                          f
                        ),
                    });
                  }
                }
              Hn(t.maxProperties) &&
                e.properties.length > t.maxProperties &&
                n.problems.push({
                  location: { offset: e.offset, length: e.length },
                  severity: Tn.Warning,
                  message: Fr(
                    "MaxPropWarning",
                    "Object has more properties than limit of {0}.",
                    t.maxProperties
                  ),
                });
              Hn(t.minProperties) &&
                e.properties.length < t.minProperties &&
                n.problems.push({
                  location: { offset: e.offset, length: e.length },
                  severity: Tn.Warning,
                  message: Fr(
                    "MinPropWarning",
                    "Object has fewer properties than the required number of {0}",
                    t.minProperties
                  ),
                });
              if (t.dependencies)
                for (
                  var O = 0, I = Object.keys(t.dependencies);
                  O < I.length;
                  O++
                ) {
                  u = I[O];
                  if (i[u]) {
                    var P = t.dependencies[u];
                    if (Array.isArray(P))
                      for (var M = 0, R = P; M < R.length; M++) {
                        var j = R[M];
                        i[j]
                          ? n.propertiesValueMatches++
                          : n.problems.push({
                              location: { offset: e.offset, length: e.length },
                              severity: Tn.Warning,
                              message: Fr(
                                "RequiredDependentPropWarning",
                                "Object is missing property {0} required by property {1}.",
                                j,
                                u
                              ),
                            });
                      }
                    else if ((v = Gr(P))) {
                      b = new Qr();
                      ni(e, v, b, r), n.mergePropertyMatch(b);
                    }
                  }
                }
              var D = Gr(t.propertyNames);
              if (D)
                for (var F = 0, U = e.properties; F < U.length; F++) {
                  var V = U[F];
                  (u = V.keyNode) && ni(u, D, n, Jr.instance);
                }
            })(i, t, n, r);
            break;
          case "array":
            !(function (e, t, n, r) {
              if (Array.isArray(t.items)) {
                for (var i = t.items, o = 0; o < i.length; o++) {
                  var a = Gr(i[o]),
                    s = new Qr();
                  (h = e.items[o])
                    ? (ni(h, a, s, r), n.mergePropertyMatch(s))
                    : e.items.length >= i.length && n.propertiesValueMatches++;
                }
                if (e.items.length > i.length)
                  if ("object" === typeof t.additionalItems)
                    for (var u = i.length; u < e.items.length; u++) {
                      s = new Qr();
                      ni(e.items[u], t.additionalItems, s, r),
                        n.mergePropertyMatch(s);
                    }
                  else
                    !1 === t.additionalItems &&
                      n.problems.push({
                        location: { offset: e.offset, length: e.length },
                        severity: Tn.Warning,
                        message: Fr(
                          "additionalItemsWarning",
                          "Array has too many items according to schema. Expected {0} or fewer.",
                          i.length
                        ),
                      });
              } else {
                var c = Gr(t.items);
                if (c)
                  for (var l = 0, f = e.items; l < f.length; l++) {
                    var h = f[l];
                    s = new Qr();
                    ni(h, c, s, r), n.mergePropertyMatch(s);
                  }
              }
              var d = Gr(t.contains);
              if (d) {
                e.items.some(function (e) {
                  var t = new Qr();
                  return ni(e, d, t, Jr.instance), !t.hasProblems();
                }) ||
                  n.problems.push({
                    location: { offset: e.offset, length: e.length },
                    severity: Tn.Warning,
                    message:
                      t.errorMessage ||
                      Fr(
                        "requiredItemMissingWarning",
                        "Array does not contain required item."
                      ),
                  });
              }
              Hn(t.minItems) &&
                e.items.length < t.minItems &&
                n.problems.push({
                  location: { offset: e.offset, length: e.length },
                  severity: Tn.Warning,
                  message: Fr(
                    "minItemsWarning",
                    "Array has too few items. Expected {0} or more.",
                    t.minItems
                  ),
                });
              Hn(t.maxItems) &&
                e.items.length > t.maxItems &&
                n.problems.push({
                  location: { offset: e.offset, length: e.length },
                  severity: Tn.Warning,
                  message: Fr(
                    "maxItemsWarning",
                    "Array has too many items. Expected {0} or fewer.",
                    t.maxItems
                  ),
                });
              if (!0 === t.uniqueItems) {
                var m = Zr(e);
                m.some(function (e, t) {
                  return t !== m.lastIndexOf(e);
                }) &&
                  n.problems.push({
                    location: { offset: e.offset, length: e.length },
                    severity: Tn.Warning,
                    message: Fr(
                      "uniqueItemsWarning",
                      "Array has duplicate items."
                    ),
                  });
              }
            })(i, t, n, r);
            break;
          case "string":
            !(function (e, t, n, r) {
              Hn(t.minLength) &&
                e.value.length < t.minLength &&
                n.problems.push({
                  location: { offset: e.offset, length: e.length },
                  severity: Tn.Warning,
                  message: Fr(
                    "minLengthWarning",
                    "String is shorter than the minimum length of {0}.",
                    t.minLength
                  ),
                });
              Hn(t.maxLength) &&
                e.value.length > t.maxLength &&
                n.problems.push({
                  location: { offset: e.offset, length: e.length },
                  severity: Tn.Warning,
                  message: Fr(
                    "maxLengthWarning",
                    "String is longer than the maximum length of {0}.",
                    t.maxLength
                  ),
                });
              if (((i = t.pattern), "string" === typeof i)) {
                new RegExp(t.pattern).test(e.value) ||
                  n.problems.push({
                    location: { offset: e.offset, length: e.length },
                    severity: Tn.Warning,
                    message:
                      t.patternErrorMessage ||
                      t.errorMessage ||
                      Fr(
                        "patternWarning",
                        'String does not match the pattern of "{0}".',
                        t.pattern
                      ),
                  });
              }
              var i;
              if (t.format)
                switch (t.format) {
                  case "uri":
                  case "uri-reference":
                    var o = void 0;
                    if (e.value) {
                      var a = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/.exec(
                        e.value
                      );
                      a
                        ? a[2] ||
                          "uri" !== t.format ||
                          (o = Fr(
                            "uriSchemeMissing",
                            "URI with a scheme is expected."
                          ))
                        : (o = Fr("uriMissing", "URI is expected."));
                    } else o = Fr("uriEmpty", "URI expected.");
                    o &&
                      n.problems.push({
                        location: { offset: e.offset, length: e.length },
                        severity: Tn.Warning,
                        message:
                          t.patternErrorMessage ||
                          t.errorMessage ||
                          Fr("uriFormatWarning", "String is not a URI: {0}", o),
                      });
                    break;
                  case "color-hex":
                  case "date-time":
                  case "date":
                  case "time":
                  case "email":
                    var s = Ur[t.format];
                    (e.value && s.pattern.exec(e.value)) ||
                      n.problems.push({
                        location: { offset: e.offset, length: e.length },
                        severity: Tn.Warning,
                        message:
                          t.patternErrorMessage ||
                          t.errorMessage ||
                          s.errorMessage,
                      });
                }
            })(i, t, n);
            break;
          case "number":
            !(function (e, t, n, r) {
              var i = e.value;
              function o(e) {
                var t,
                  n = /^(-?\d+)(?:\.(\d+))?(?:e([-+]\d+))?$/.exec(e.toString());
                return (
                  n && {
                    value: Number(n[1] + (n[2] || "")),
                    multiplier:
                      ((null === (t = n[2]) || void 0 === t
                        ? void 0
                        : t.length) || 0) - (parseInt(n[3]) || 0),
                  }
                );
              }
              if (Hn(t.multipleOf)) {
                var a = -1;
                if (Number.isInteger(t.multipleOf)) a = i % t.multipleOf;
                else {
                  var s = o(t.multipleOf),
                    u = o(i);
                  if (s && u) {
                    var c = Math.pow(10, Math.abs(u.multiplier - s.multiplier));
                    u.multiplier < s.multiplier
                      ? (u.value *= c)
                      : (s.value *= c),
                      (a = u.value % s.value);
                  }
                }
                0 !== a &&
                  n.problems.push({
                    location: { offset: e.offset, length: e.length },
                    severity: Tn.Warning,
                    message: Fr(
                      "multipleOfWarning",
                      "Value is not divisible by {0}.",
                      t.multipleOf
                    ),
                  });
              }
              function l(e, t) {
                return Hn(t) ? t : Gn(t) && t ? e : void 0;
              }
              function f(e, t) {
                if (!Gn(t) || !t) return e;
              }
              var h = l(t.minimum, t.exclusiveMinimum);
              Hn(h) &&
                i <= h &&
                n.problems.push({
                  location: { offset: e.offset, length: e.length },
                  severity: Tn.Warning,
                  message: Fr(
                    "exclusiveMinimumWarning",
                    "Value is below the exclusive minimum of {0}.",
                    h
                  ),
                });
              var d = l(t.maximum, t.exclusiveMaximum);
              Hn(d) &&
                i >= d &&
                n.problems.push({
                  location: { offset: e.offset, length: e.length },
                  severity: Tn.Warning,
                  message: Fr(
                    "exclusiveMaximumWarning",
                    "Value is above the exclusive maximum of {0}.",
                    d
                  ),
                });
              var m = f(t.minimum, t.exclusiveMinimum);
              Hn(m) &&
                i < m &&
                n.problems.push({
                  location: { offset: e.offset, length: e.length },
                  severity: Tn.Warning,
                  message: Fr(
                    "minimumWarning",
                    "Value is below the minimum of {0}.",
                    m
                  ),
                });
              var p = f(t.maximum, t.exclusiveMaximum);
              Hn(p) &&
                i > p &&
                n.problems.push({
                  location: { offset: e.offset, length: e.length },
                  severity: Tn.Warning,
                  message: Fr(
                    "maximumWarning",
                    "Value is above the maximum of {0}.",
                    p
                  ),
                });
            })(i, t, n);
            break;
          case "property":
            return ni(i.valueNode, t, n, r);
        }
        !(function () {
          function e(e) {
            return (
              i.type === e ||
              ("integer" === e && "number" === i.type && i.isInteger)
            );
          }
          Array.isArray(t.type)
            ? t.type.some(e) ||
              n.problems.push({
                location: { offset: i.offset, length: i.length },
                severity: Tn.Warning,
                message:
                  t.errorMessage ||
                  Fr(
                    "typeArrayMismatchWarning",
                    "Incorrect type. Expected one of {0}.",
                    t.type.join(", ")
                  ),
              })
            : t.type &&
              (e(t.type) ||
                n.problems.push({
                  location: { offset: i.offset, length: i.length },
                  severity: Tn.Warning,
                  message:
                    t.errorMessage ||
                    Fr(
                      "typeMismatchWarning",
                      'Incorrect type. Expected "{0}".',
                      t.type
                    ),
                }));
          if (Array.isArray(t.allOf))
            for (var o = 0, a = t.allOf; o < a.length; o++) {
              var s = a[o];
              ni(i, Gr(s), n, r);
            }
          var u = Gr(t.not);
          if (u) {
            var c = new Qr(),
              l = r.newSub();
            ni(i, u, c, l),
              c.hasProblems() ||
                n.problems.push({
                  location: { offset: i.offset, length: i.length },
                  severity: Tn.Warning,
                  message: Fr(
                    "notSchemaWarning",
                    "Matches a schema that is not allowed."
                  ),
                });
            for (var f = 0, h = l.schemas; f < h.length; f++) {
              var d = h[f];
              (d.inverted = !d.inverted), r.add(d);
            }
          }
          var m = function (e, t) {
            for (var o = [], a = void 0, s = 0, u = e; s < u.length; s++) {
              var c = Gr(u[s]),
                l = new Qr(),
                f = r.newSub();
              if ((ni(i, c, l, f), l.hasProblems() || o.push(c), a))
                if (t || l.hasProblems() || a.validationResult.hasProblems()) {
                  var h = l.compare(a.validationResult);
                  h > 0
                    ? (a = {
                        schema: c,
                        validationResult: l,
                        matchingSchemas: f,
                      })
                    : 0 === h &&
                      (a.matchingSchemas.merge(f),
                      a.validationResult.mergeEnumValues(l));
                } else
                  a.matchingSchemas.merge(f),
                    (a.validationResult.propertiesMatches +=
                      l.propertiesMatches),
                    (a.validationResult.propertiesValueMatches +=
                      l.propertiesValueMatches);
              else a = { schema: c, validationResult: l, matchingSchemas: f };
            }
            return (
              o.length > 1 &&
                t &&
                n.problems.push({
                  location: { offset: i.offset, length: 1 },
                  severity: Tn.Warning,
                  message: Fr(
                    "oneOfWarning",
                    "Matches multiple schemas when only one must validate."
                  ),
                }),
              a &&
                (n.merge(a.validationResult),
                (n.propertiesMatches += a.validationResult.propertiesMatches),
                (n.propertiesValueMatches +=
                  a.validationResult.propertiesValueMatches),
                r.merge(a.matchingSchemas)),
              o.length
            );
          };
          Array.isArray(t.anyOf) && m(t.anyOf, !1);
          Array.isArray(t.oneOf) && m(t.oneOf, !0);
          var p = function (e) {
              var t = new Qr(),
                o = r.newSub();
              ni(i, Gr(e), t, o),
                n.merge(t),
                (n.propertiesMatches += t.propertiesMatches),
                (n.propertiesValueMatches += t.propertiesValueMatches),
                r.merge(o);
            },
            g = Gr(t.if);
          g &&
            (function (e, t, n) {
              var o = Gr(e),
                a = new Qr(),
                s = r.newSub();
              ni(i, o, a, s),
                r.merge(s),
                a.hasProblems() ? n && p(n) : t && p(t);
            })(g, Gr(t.then), Gr(t.else));
          if (Array.isArray(t.enum)) {
            for (var v = Zr(i), y = !1, b = 0, C = t.enum; b < C.length; b++) {
              var _ = C[b];
              if ($n(v, _)) {
                y = !0;
                break;
              }
            }
            (n.enumValues = t.enum),
              (n.enumValueMatch = y),
              y ||
                n.problems.push({
                  location: { offset: i.offset, length: i.length },
                  severity: Tn.Warning,
                  code: wr.EnumValueMismatch,
                  message:
                    t.errorMessage ||
                    Fr(
                      "enumWarning",
                      "Value is not accepted. Valid values: {0}.",
                      t.enum
                        .map(function (e) {
                          return JSON.stringify(e);
                        })
                        .join(", ")
                    ),
                });
          }
          if (Yn(t.const)) {
            $n((v = Zr(i)), t.const)
              ? (n.enumValueMatch = !0)
              : (n.problems.push({
                  location: { offset: i.offset, length: i.length },
                  severity: Tn.Warning,
                  code: wr.EnumValueMismatch,
                  message:
                    t.errorMessage ||
                    Fr(
                      "constWarning",
                      "Value must be {0}.",
                      JSON.stringify(t.const)
                    ),
                }),
                (n.enumValueMatch = !1)),
              (n.enumValues = [t.const]);
          }
          t.deprecationMessage &&
            i.parent &&
            n.problems.push({
              location: { offset: i.parent.offset, length: i.parent.length },
              severity: Tn.Warning,
              message: t.deprecationMessage,
            });
        })(),
          r.add({ node: i, schema: t });
      }
    }
    function ri(e, t) {
      var n = [],
        r = -1,
        i = e.getText(),
        o = Vn(i, !1),
        a = t && t.collectComments ? [] : void 0;
      function s() {
        for (;;) {
          var t = o.scan();
          switch ((l(), t)) {
            case 12:
            case 13:
              Array.isArray(a) &&
                a.push(
                  Cn.create(
                    e.positionAt(o.getTokenOffset()),
                    e.positionAt(o.getTokenOffset() + o.getTokenLength())
                  )
                );
              break;
            case 15:
            case 14:
              break;
            default:
              return t;
          }
        }
      }
      function u(t, i, o, a, s) {
        if ((void 0 === s && (s = Tn.Error), 0 === n.length || o !== r)) {
          var u = Cn.create(e.positionAt(o), e.positionAt(a));
          n.push(In.create(u, t, s, i, e.languageId)), (r = o);
        }
      }
      function c(e, t, n, r, a) {
        void 0 === n && (n = void 0),
          void 0 === r && (r = []),
          void 0 === a && (a = []);
        var c = o.getTokenOffset(),
          l = o.getTokenOffset() + o.getTokenLength();
        if (c === l && c > 0) {
          for (c--; c > 0 && /\s/.test(i.charAt(c)); ) c--;
          l = c + 1;
        }
        if ((u(e, t, c, l), n && f(n, !1), r.length + a.length > 0))
          for (var h = o.getToken(); 17 !== h; ) {
            if (-1 !== r.indexOf(h)) {
              s();
              break;
            }
            if (-1 !== a.indexOf(h)) break;
            h = s();
          }
        return n;
      }
      function l() {
        switch (o.getTokenError()) {
          case 4:
            return (
              c(
                Fr("InvalidUnicode", "Invalid unicode sequence in string."),
                wr.InvalidUnicode
              ),
              !0
            );
          case 5:
            return (
              c(
                Fr(
                  "InvalidEscapeCharacter",
                  "Invalid escape character in string."
                ),
                wr.InvalidEscapeCharacter
              ),
              !0
            );
          case 3:
            return (
              c(
                Fr("UnexpectedEndOfNumber", "Unexpected end of number."),
                wr.UnexpectedEndOfNumber
              ),
              !0
            );
          case 1:
            return (
              c(
                Fr("UnexpectedEndOfComment", "Unexpected end of comment."),
                wr.UnexpectedEndOfComment
              ),
              !0
            );
          case 2:
            return (
              c(
                Fr("UnexpectedEndOfString", "Unexpected end of string."),
                wr.UnexpectedEndOfString
              ),
              !0
            );
          case 6:
            return (
              c(
                Fr(
                  "InvalidCharacter",
                  "Invalid characters in string. Control characters must be escaped."
                ),
                wr.InvalidCharacter
              ),
              !0
            );
        }
        return !1;
      }
      function f(e, t) {
        return (
          (e.length = o.getTokenOffset() + o.getTokenLength() - e.offset),
          t && s(),
          e
        );
      }
      var h = new $r(void 0, 0, 0);
      function d(t, n) {
        var r = new Hr(t, o.getTokenOffset(), h),
          i = m(r);
        if (!i) {
          if (16 !== o.getToken()) return;
          c(
            Fr("DoubleQuotesExpected", "Property keys must be doublequoted"),
            wr.Undefined
          );
          var a = new $r(r, o.getTokenOffset(), o.getTokenLength());
          (a.value = o.getTokenValue()), (i = a), s();
        }
        r.keyNode = i;
        var l = n[i.value];
        if (
          (l
            ? (u(
                Fr("DuplicateKeyWarning", "Duplicate object key"),
                wr.DuplicateKey,
                r.keyNode.offset,
                r.keyNode.offset + r.keyNode.length,
                Tn.Warning
              ),
              "object" === typeof l &&
                u(
                  Fr("DuplicateKeyWarning", "Duplicate object key"),
                  wr.DuplicateKey,
                  l.keyNode.offset,
                  l.keyNode.offset + l.keyNode.length,
                  Tn.Warning
                ),
              (n[i.value] = !0))
            : (n[i.value] = r),
          6 === o.getToken())
        )
          (r.colonOffset = o.getTokenOffset()), s();
        else if (
          (c(Fr("ColonExpected", "Colon expected"), wr.ColonExpected),
          10 === o.getToken() &&
            e.positionAt(i.offset + i.length).line <
              e.positionAt(o.getTokenOffset()).line)
        )
          return (r.length = i.length), r;
        var f = p(r);
        return f
          ? ((r.valueNode = f), (r.length = f.offset + f.length - r.offset), r)
          : c(
              Fr("ValueExpected", "Value expected"),
              wr.ValueExpected,
              r,
              [],
              [2, 5]
            );
      }
      function m(e) {
        if (10 === o.getToken()) {
          var t = new $r(e, o.getTokenOffset());
          return (t.value = o.getTokenValue()), f(t, !0);
        }
      }
      function p(e) {
        return (
          (function (e) {
            if (3 === o.getToken()) {
              var t = new Kr(e, o.getTokenOffset());
              s();
              for (var n = !1; 4 !== o.getToken() && 17 !== o.getToken(); ) {
                if (5 === o.getToken()) {
                  n ||
                    c(Fr("ValueExpected", "Value expected"), wr.ValueExpected);
                  var r = o.getTokenOffset();
                  if ((s(), 4 === o.getToken())) {
                    n &&
                      u(
                        Fr("TrailingComma", "Trailing comma"),
                        wr.TrailingComma,
                        r,
                        r + 1
                      );
                    continue;
                  }
                } else
                  n &&
                    c(Fr("ExpectedComma", "Expected comma"), wr.CommaExpected);
                var i = p(t);
                i
                  ? t.items.push(i)
                  : c(
                      Fr("PropertyExpected", "Value expected"),
                      wr.ValueExpected,
                      void 0,
                      [],
                      [4, 5]
                    ),
                  (n = !0);
              }
              return 4 !== o.getToken()
                ? c(
                    Fr(
                      "ExpectedCloseBracket",
                      "Expected comma or closing bracket"
                    ),
                    wr.CommaOrCloseBacketExpected,
                    t
                  )
                : f(t, !0);
            }
          })(e) ||
          (function (e) {
            if (1 === o.getToken()) {
              var t = new Yr(e, o.getTokenOffset()),
                n = Object.create(null);
              s();
              for (var r = !1; 2 !== o.getToken() && 17 !== o.getToken(); ) {
                if (5 === o.getToken()) {
                  r ||
                    c(
                      Fr("PropertyExpected", "Property expected"),
                      wr.PropertyExpected
                    );
                  var i = o.getTokenOffset();
                  if ((s(), 2 === o.getToken())) {
                    r &&
                      u(
                        Fr("TrailingComma", "Trailing comma"),
                        wr.TrailingComma,
                        i,
                        i + 1
                      );
                    continue;
                  }
                } else
                  r &&
                    c(Fr("ExpectedComma", "Expected comma"), wr.CommaExpected);
                var a = d(t, n);
                a
                  ? t.properties.push(a)
                  : c(
                      Fr("PropertyExpected", "Property expected"),
                      wr.PropertyExpected,
                      void 0,
                      [],
                      [2, 5]
                    ),
                  (r = !0);
              }
              return 2 !== o.getToken()
                ? c(
                    Fr("ExpectedCloseBrace", "Expected comma or closing brace"),
                    wr.CommaOrCloseBraceExpected,
                    t
                  )
                : f(t, !0);
            }
          })(e) ||
          m(e) ||
          (function (e) {
            if (11 === o.getToken()) {
              var t = new Br(e, o.getTokenOffset());
              if (0 === o.getTokenError()) {
                var n = o.getTokenValue();
                try {
                  var r = JSON.parse(n);
                  if (!Hn(r))
                    return c(
                      Fr("InvalidNumberFormat", "Invalid number format."),
                      wr.Undefined,
                      t
                    );
                  t.value = r;
                } catch (i) {
                  return c(
                    Fr("InvalidNumberFormat", "Invalid number format."),
                    wr.Undefined,
                    t
                  );
                }
                t.isInteger = -1 === n.indexOf(".");
              }
              return f(t, !0);
            }
          })(e) ||
          (function (e) {
            switch (o.getToken()) {
              case 7:
                return f(new Wr(e, o.getTokenOffset()), !0);
              case 8:
                return f(new qr(e, !0, o.getTokenOffset()), !0);
              case 9:
                return f(new qr(e, !1, o.getTokenOffset()), !0);
              default:
                return;
            }
          })(e)
        );
      }
      var g = void 0;
      return (
        17 !== s() &&
          ((g = p(g))
            ? 17 !== o.getToken() &&
              c(
                Fr("End of file expected", "End of file expected."),
                wr.Undefined
              )
            : c(
                Fr(
                  "Invalid symbol",
                  "Expected a JSON object, array or literal."
                ),
                wr.Undefined
              )),
        new ti(g, n, a)
      );
    }
    function ii(e, t) {
      var n = e.length - t.length;
      return n > 0 ? e.lastIndexOf(t) === n : 0 === n && e === t;
    }
    function oi(e) {
      return e
        .replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&")
        .replace(/[\*]/g, ".*");
    }
    var ai = Rr(),
      si = (function () {
        function e(e, t, n, r) {
          void 0 === t && (t = []),
            void 0 === n && (n = Promise),
            void 0 === r && (r = {}),
            (this.schemaService = e),
            (this.contributions = t),
            (this.promiseConstructor = n),
            (this.clientCapabilities = r);
        }
        return (
          (e.prototype.doResolve = function (e) {
            for (var t = this.contributions.length - 1; t >= 0; t--) {
              var n = this.contributions[t].resolveCompletion;
              if (n) {
                var r = n(e);
                if (r) return r;
              }
            }
            return this.promiseConstructor.resolve(e);
          }),
          (e.prototype.doComplete = function (e, t, n) {
            var r = this,
              i = { items: [], isIncomplete: !1 },
              o = e.getText(),
              a = e.offsetAt(t),
              s = n.getNodeFromOffset(a, !0);
            if (this.isInComment(e, s ? s.offset : 0, a))
              return Promise.resolve(i);
            if (s && a === s.offset + s.length && a > 0) {
              var u = o[a - 1];
              (("object" === s.type && "}" === u) ||
                ("array" === s.type && "]" === u)) &&
                (s = s.parent);
            }
            var c,
              l = this.getCurrentWord(e, a);
            if (
              !s ||
              ("string" !== s.type &&
                "number" !== s.type &&
                "boolean" !== s.type &&
                "null" !== s.type)
            ) {
              var f = a - l.length;
              f > 0 && '"' === o[f - 1] && f--,
                (c = Cn.create(e.positionAt(f), t));
            } else
              c = Cn.create(
                e.positionAt(s.offset),
                e.positionAt(s.offset + s.length)
              );
            var h = {},
              d = {
                add: function (e) {
                  var t = e.label,
                    n = h[t];
                  if (n) n.documentation || (n.documentation = e.documentation);
                  else {
                    if ((t = t.replace(/[\n]/g, "\u21b5")).length > 60) {
                      var r = t.substr(0, 57).trim() + "...";
                      h[r] || (t = r);
                    }
                    c &&
                      void 0 !== e.insertText &&
                      (e.textEdit = Mn.replace(c, e.insertText)),
                      (e.label = t),
                      (h[t] = e),
                      i.items.push(e);
                  }
                },
                setAsIncomplete: function () {
                  i.isIncomplete = !0;
                },
                error: function (e) {
                  console.error(e);
                },
                log: function (e) {
                  console.log(e);
                },
                getNumberOfProposals: function () {
                  return i.items.length;
                },
              };
            return this.schemaService
              .getSchemaForResource(e.uri, n)
              .then(function (t) {
                var u = [],
                  f = !0,
                  m = "",
                  p = void 0;
                if (s && "string" === s.type) {
                  var g = s.parent;
                  g &&
                    "property" === g.type &&
                    g.keyNode === s &&
                    ((f = !g.valueNode),
                    (p = g),
                    (m = o.substr(s.offset + 1, s.length - 2)),
                    g && (s = g.parent));
                }
                if (s && "object" === s.type) {
                  if (s.offset === a) return i;
                  s.properties.forEach(function (e) {
                    (p && p === e) || (h[e.keyNode.value] = rr.create("__"));
                  });
                  var v = "";
                  f && (v = r.evaluateSeparatorAfter(e, e.offsetAt(c.end))),
                    t
                      ? r.getPropertyCompletions(t, n, s, f, v, d)
                      : r.getSchemaLessPropertyCompletions(n, s, m, d);
                  var y = Xr(s);
                  r.contributions.forEach(function (t) {
                    var n = t.collectPropertyCompletions(
                      e.uri,
                      y,
                      l,
                      f,
                      "" === v,
                      d
                    );
                    n && u.push(n);
                  }),
                    !t &&
                      l.length > 0 &&
                      '"' !== o.charAt(a - l.length - 1) &&
                      (d.add({
                        kind: er.Property,
                        label: r.getLabelForValue(l),
                        insertText: r.getInsertTextForProperty(
                          l,
                          void 0,
                          !1,
                          v
                        ),
                        insertTextFormat: tr.Snippet,
                        documentation: "",
                      }),
                      d.setAsIncomplete());
                }
                var b = {};
                return (
                  t
                    ? r.getValueCompletions(t, n, s, a, e, d, b)
                    : r.getSchemaLessValueCompletions(n, s, a, e, d),
                  r.contributions.length > 0 &&
                    r.getContributedValueCompletions(n, s, a, e, d, u),
                  r.promiseConstructor.all(u).then(function () {
                    if (0 === d.getNumberOfProposals()) {
                      var t = a;
                      !s ||
                        ("string" !== s.type &&
                          "number" !== s.type &&
                          "boolean" !== s.type &&
                          "null" !== s.type) ||
                        (t = s.offset + s.length);
                      var n = r.evaluateSeparatorAfter(e, t);
                      r.addFillerValueCompletions(b, n, d);
                    }
                    return i;
                  })
                );
              });
          }),
          (e.prototype.getPropertyCompletions = function (e, t, n, r, i, o) {
            var a = this;
            t.getMatchingSchemas(e.schema, n.offset).forEach(function (e) {
              if (e.node === n && !e.inverted) {
                var t = e.schema.properties;
                t &&
                  Object.keys(t).forEach(function (e) {
                    var n = t[e];
                    if (
                      "object" === typeof n &&
                      !n.deprecationMessage &&
                      !n.doNotSuggest
                    ) {
                      var s = {
                        kind: er.Property,
                        label: e,
                        insertText: a.getInsertTextForProperty(e, n, r, i),
                        insertTextFormat: tr.Snippet,
                        filterText: a.getFilterTextForValue(e),
                        documentation:
                          a.fromMarkup(n.markdownDescription) ||
                          n.description ||
                          "",
                      };
                      void 0 !== n.suggestSortText &&
                        (s.sortText = n.suggestSortText),
                        s.insertText &&
                          ii(s.insertText, "$1" + i) &&
                          (s.command = {
                            title: "Suggest",
                            command: "editor.action.triggerSuggest",
                          }),
                        o.add(s);
                    }
                  });
                var s = e.schema.propertyNames;
                if (
                  "object" === typeof s &&
                  !s.deprecationMessage &&
                  !s.doNotSuggest
                ) {
                  var u = function (e, t) {
                    void 0 === t && (t = void 0);
                    var n = {
                      kind: er.Property,
                      label: e,
                      insertText: a.getInsertTextForProperty(e, void 0, r, i),
                      insertTextFormat: tr.Snippet,
                      filterText: a.getFilterTextForValue(e),
                      documentation:
                        t ||
                        a.fromMarkup(s.markdownDescription) ||
                        s.description ||
                        "",
                    };
                    void 0 !== s.suggestSortText &&
                      (n.sortText = s.suggestSortText),
                      n.insertText &&
                        ii(n.insertText, "$1" + i) &&
                        (n.command = {
                          title: "Suggest",
                          command: "editor.action.triggerSuggest",
                        }),
                      o.add(n);
                  };
                  if (s.enum)
                    for (var c = 0; c < s.enum.length; c++) {
                      var l = void 0;
                      s.markdownEnumDescriptions &&
                      c < s.markdownEnumDescriptions.length
                        ? (l = a.fromMarkup(s.markdownEnumDescriptions[c]))
                        : s.enumDescriptions &&
                          c < s.enumDescriptions.length &&
                          (l = s.enumDescriptions[c]),
                        u(s.enum[c], l);
                    }
                  s.const && u(s.const);
                }
              }
            });
          }),
          (e.prototype.getSchemaLessPropertyCompletions = function (
            e,
            t,
            n,
            r
          ) {
            var i = this,
              o = function (e) {
                e.properties.forEach(function (e) {
                  var t = e.keyNode.value;
                  r.add({
                    kind: er.Property,
                    label: t,
                    insertText: i.getInsertTextForValue(t, ""),
                    insertTextFormat: tr.Snippet,
                    filterText: i.getFilterTextForValue(t),
                    documentation: "",
                  });
                });
              };
            if (t.parent)
              if ("property" === t.parent.type) {
                var a = t.parent.keyNode.value;
                e.visit(function (e) {
                  return (
                    "property" === e.type &&
                      e !== t.parent &&
                      e.keyNode.value === a &&
                      e.valueNode &&
                      "object" === e.valueNode.type &&
                      o(e.valueNode),
                    !0
                  );
                });
              } else
                "array" === t.parent.type &&
                  t.parent.items.forEach(function (e) {
                    "object" === e.type && e !== t && o(e);
                  });
            else
              "object" === t.type &&
                r.add({
                  kind: er.Property,
                  label: "$schema",
                  insertText: this.getInsertTextForProperty(
                    "$schema",
                    void 0,
                    !0,
                    ""
                  ),
                  insertTextFormat: tr.Snippet,
                  documentation: "",
                  filterText: this.getFilterTextForValue("$schema"),
                });
          }),
          (e.prototype.getSchemaLessValueCompletions = function (
            e,
            t,
            n,
            r,
            i
          ) {
            var o = this,
              a = n;
            if (
              (!t ||
                ("string" !== t.type &&
                  "number" !== t.type &&
                  "boolean" !== t.type &&
                  "null" !== t.type) ||
                ((a = t.offset + t.length), (t = t.parent)),
              !t)
            )
              return (
                i.add({
                  kind: this.getSuggestionKind("object"),
                  label: "Empty object",
                  insertText: this.getInsertTextForValue({}, ""),
                  insertTextFormat: tr.Snippet,
                  documentation: "",
                }),
                void i.add({
                  kind: this.getSuggestionKind("array"),
                  label: "Empty array",
                  insertText: this.getInsertTextForValue([], ""),
                  insertTextFormat: tr.Snippet,
                  documentation: "",
                })
              );
            var s = this.evaluateSeparatorAfter(r, a),
              u = function (e) {
                e.parent &&
                  !ei(e.parent, n, !0) &&
                  i.add({
                    kind: o.getSuggestionKind(e.type),
                    label: o.getLabelTextForMatchingNode(e, r),
                    insertText: o.getInsertTextForMatchingNode(e, r, s),
                    insertTextFormat: tr.Snippet,
                    documentation: "",
                  }),
                  "boolean" === e.type &&
                    o.addBooleanValueCompletion(!e.value, s, i);
              };
            if ("property" === t.type && n > (t.colonOffset || 0)) {
              var c = t.valueNode;
              if (
                c &&
                (n > c.offset + c.length ||
                  "object" === c.type ||
                  "array" === c.type)
              )
                return;
              var l = t.keyNode.value;
              e.visit(function (e) {
                return (
                  "property" === e.type &&
                    e.keyNode.value === l &&
                    e.valueNode &&
                    u(e.valueNode),
                  !0
                );
              }),
                "$schema" === l &&
                  t.parent &&
                  !t.parent.parent &&
                  this.addDollarSchemaCompletions(s, i);
            }
            if ("array" === t.type)
              if (t.parent && "property" === t.parent.type) {
                var f = t.parent.keyNode.value;
                e.visit(function (e) {
                  return (
                    "property" === e.type &&
                      e.keyNode.value === f &&
                      e.valueNode &&
                      "array" === e.valueNode.type &&
                      e.valueNode.items.forEach(u),
                    !0
                  );
                });
              } else t.items.forEach(u);
          }),
          (e.prototype.getValueCompletions = function (e, t, n, r, i, o, a) {
            var s = r,
              u = void 0,
              c = void 0;
            if (
              (!n ||
                ("string" !== n.type &&
                  "number" !== n.type &&
                  "boolean" !== n.type &&
                  "null" !== n.type) ||
                ((s = n.offset + n.length), (c = n), (n = n.parent)),
              n)
            ) {
              if ("property" === n.type && r > (n.colonOffset || 0)) {
                var l = n.valueNode;
                if (l && r > l.offset + l.length) return;
                (u = n.keyNode.value), (n = n.parent);
              }
              if (n && (void 0 !== u || "array" === n.type)) {
                for (
                  var f = this.evaluateSeparatorAfter(i, s),
                    h = 0,
                    d = t.getMatchingSchemas(e.schema, n.offset, c);
                  h < d.length;
                  h++
                ) {
                  var m = d[h];
                  if (m.node === n && !m.inverted && m.schema) {
                    if ("array" === n.type && m.schema.items)
                      if (Array.isArray(m.schema.items)) {
                        var p = this.findItemAtOffset(n, i, r);
                        p < m.schema.items.length &&
                          this.addSchemaValueCompletions(
                            m.schema.items[p],
                            f,
                            o,
                            a
                          );
                      } else
                        this.addSchemaValueCompletions(m.schema.items, f, o, a);
                    if (void 0 !== u) {
                      var g = !1;
                      if (m.schema.properties)
                        (C = m.schema.properties[u]) &&
                          ((g = !0),
                          this.addSchemaValueCompletions(C, f, o, a));
                      if (m.schema.patternProperties && !g)
                        for (
                          var v = 0,
                            y = Object.keys(m.schema.patternProperties);
                          v < y.length;
                          v++
                        ) {
                          var b = y[v];
                          if (new RegExp(b).test(u)) {
                            g = !0;
                            var C = m.schema.patternProperties[b];
                            this.addSchemaValueCompletions(C, f, o, a);
                          }
                        }
                      if (m.schema.additionalProperties && !g) {
                        C = m.schema.additionalProperties;
                        this.addSchemaValueCompletions(C, f, o, a);
                      }
                    }
                  }
                }
                "$schema" !== u ||
                  n.parent ||
                  this.addDollarSchemaCompletions(f, o),
                  a.boolean &&
                    (this.addBooleanValueCompletion(!0, f, o),
                    this.addBooleanValueCompletion(!1, f, o)),
                  a.null && this.addNullValueCompletion(f, o);
              }
            } else this.addSchemaValueCompletions(e.schema, "", o, a);
          }),
          (e.prototype.getContributedValueCompletions = function (
            e,
            t,
            n,
            r,
            i,
            o
          ) {
            if (t) {
              if (
                (("string" !== t.type &&
                  "number" !== t.type &&
                  "boolean" !== t.type &&
                  "null" !== t.type) ||
                  (t = t.parent),
                t && "property" === t.type && n > (t.colonOffset || 0))
              ) {
                var a = t.keyNode.value,
                  s = t.valueNode;
                if ((!s || n <= s.offset + s.length) && t.parent) {
                  var u = Xr(t.parent);
                  this.contributions.forEach(function (e) {
                    var t = e.collectValueCompletions(r.uri, u, a, i);
                    t && o.push(t);
                  });
                }
              }
            } else
              this.contributions.forEach(function (e) {
                var t = e.collectDefaultCompletions(r.uri, i);
                t && o.push(t);
              });
          }),
          (e.prototype.addSchemaValueCompletions = function (e, t, n, r) {
            var i = this;
            "object" === typeof e &&
              (this.addEnumValueCompletions(e, t, n),
              this.addDefaultValueCompletions(e, t, n),
              this.collectTypes(e, r),
              Array.isArray(e.allOf) &&
                e.allOf.forEach(function (e) {
                  return i.addSchemaValueCompletions(e, t, n, r);
                }),
              Array.isArray(e.anyOf) &&
                e.anyOf.forEach(function (e) {
                  return i.addSchemaValueCompletions(e, t, n, r);
                }),
              Array.isArray(e.oneOf) &&
                e.oneOf.forEach(function (e) {
                  return i.addSchemaValueCompletions(e, t, n, r);
                }));
          }),
          (e.prototype.addDefaultValueCompletions = function (e, t, n, r) {
            var i = this;
            void 0 === r && (r = 0);
            var o = !1;
            if (Yn(e.default)) {
              for (var a = e.type, s = e.default, u = r; u > 0; u--)
                (s = [s]), (a = "array");
              n.add({
                kind: this.getSuggestionKind(a),
                label: this.getLabelForValue(s),
                insertText: this.getInsertTextForValue(s, t),
                insertTextFormat: tr.Snippet,
                detail: ai("json.suggest.default", "Default value"),
              }),
                (o = !0);
            }
            Array.isArray(e.examples) &&
              e.examples.forEach(function (a) {
                for (var s = e.type, u = a, c = r; c > 0; c--)
                  (u = [u]), (s = "array");
                n.add({
                  kind: i.getSuggestionKind(s),
                  label: i.getLabelForValue(u),
                  insertText: i.getInsertTextForValue(u, t),
                  insertTextFormat: tr.Snippet,
                }),
                  (o = !0);
              }),
              Array.isArray(e.defaultSnippets) &&
                e.defaultSnippets.forEach(function (a) {
                  var s,
                    u,
                    c = e.type,
                    l = a.body,
                    f = a.label;
                  if (Yn(l)) {
                    e.type;
                    for (var h = r; h > 0; h--) (l = [l]), "array";
                    (s = i.getInsertTextForSnippetValue(l, t)),
                      (u = i.getFilterTextForSnippetValue(l)),
                      (f = f || i.getLabelForSnippetValue(l));
                  } else {
                    if ("string" !== typeof a.bodyText) return;
                    var d = "",
                      m = "",
                      p = "";
                    for (h = r; h > 0; h--)
                      (d = d + p + "[\n"),
                        (m = m + "\n" + p + "]"),
                        (p += "\t"),
                        (c = "array");
                    (s = d + p + a.bodyText.split("\n").join("\n" + p) + m + t),
                      (f = f || s),
                      (u = s.replace(/[\n]/g, ""));
                  }
                  n.add({
                    kind: i.getSuggestionKind(c),
                    label: f,
                    documentation:
                      i.fromMarkup(a.markdownDescription) || a.description,
                    insertText: s,
                    insertTextFormat: tr.Snippet,
                    filterText: u,
                  }),
                    (o = !0);
                }),
              !o &&
                "object" === typeof e.items &&
                !Array.isArray(e.items) &&
                r < 5 &&
                this.addDefaultValueCompletions(e.items, t, n, r + 1);
          }),
          (e.prototype.addEnumValueCompletions = function (e, t, n) {
            if (
              (Yn(e.const) &&
                n.add({
                  kind: this.getSuggestionKind(e.type),
                  label: this.getLabelForValue(e.const),
                  insertText: this.getInsertTextForValue(e.const, t),
                  insertTextFormat: tr.Snippet,
                  documentation:
                    this.fromMarkup(e.markdownDescription) || e.description,
                }),
              Array.isArray(e.enum))
            )
              for (var r = 0, i = e.enum.length; r < i; r++) {
                var o = e.enum[r],
                  a = this.fromMarkup(e.markdownDescription) || e.description;
                e.markdownEnumDescriptions &&
                r < e.markdownEnumDescriptions.length &&
                this.doesSupportMarkdown()
                  ? (a = this.fromMarkup(e.markdownEnumDescriptions[r]))
                  : e.enumDescriptions &&
                    r < e.enumDescriptions.length &&
                    (a = e.enumDescriptions[r]),
                  n.add({
                    kind: this.getSuggestionKind(e.type),
                    label: this.getLabelForValue(o),
                    insertText: this.getInsertTextForValue(o, t),
                    insertTextFormat: tr.Snippet,
                    documentation: a,
                  });
              }
          }),
          (e.prototype.collectTypes = function (e, t) {
            if (!Array.isArray(e.enum) && !Yn(e.const)) {
              var n = e.type;
              Array.isArray(n)
                ? n.forEach(function (e) {
                    return (t[e] = !0);
                  })
                : n && (t[n] = !0);
            }
          }),
          (e.prototype.addFillerValueCompletions = function (e, t, n) {
            e.object &&
              n.add({
                kind: this.getSuggestionKind("object"),
                label: "{}",
                insertText: this.getInsertTextForGuessedValue({}, t),
                insertTextFormat: tr.Snippet,
                detail: ai("defaults.object", "New object"),
                documentation: "",
              }),
              e.array &&
                n.add({
                  kind: this.getSuggestionKind("array"),
                  label: "[]",
                  insertText: this.getInsertTextForGuessedValue([], t),
                  insertTextFormat: tr.Snippet,
                  detail: ai("defaults.array", "New array"),
                  documentation: "",
                });
          }),
          (e.prototype.addBooleanValueCompletion = function (e, t, n) {
            n.add({
              kind: this.getSuggestionKind("boolean"),
              label: e ? "true" : "false",
              insertText: this.getInsertTextForValue(e, t),
              insertTextFormat: tr.Snippet,
              documentation: "",
            });
          }),
          (e.prototype.addNullValueCompletion = function (e, t) {
            t.add({
              kind: this.getSuggestionKind("null"),
              label: "null",
              insertText: "null" + e,
              insertTextFormat: tr.Snippet,
              documentation: "",
            });
          }),
          (e.prototype.addDollarSchemaCompletions = function (e, t) {
            var n = this;
            this.schemaService
              .getRegisteredSchemaIds(function (e) {
                return "http" === e || "https" === e;
              })
              .forEach(function (r) {
                return t.add({
                  kind: er.Module,
                  label: n.getLabelForValue(r),
                  filterText: n.getFilterTextForValue(r),
                  insertText: n.getInsertTextForValue(r, e),
                  insertTextFormat: tr.Snippet,
                  documentation: "",
                });
              });
          }),
          (e.prototype.getLabelForValue = function (e) {
            return JSON.stringify(e);
          }),
          (e.prototype.getFilterTextForValue = function (e) {
            return JSON.stringify(e);
          }),
          (e.prototype.getFilterTextForSnippetValue = function (e) {
            return JSON.stringify(e).replace(/\$\{\d+:([^}]+)\}|\$\d+/g, "$1");
          }),
          (e.prototype.getLabelForSnippetValue = function (e) {
            return JSON.stringify(e).replace(/\$\{\d+:([^}]+)\}|\$\d+/g, "$1");
          }),
          (e.prototype.getInsertTextForPlainText = function (e) {
            return e.replace(/[\\\$\}]/g, "\\$&");
          }),
          (e.prototype.getInsertTextForValue = function (e, t) {
            var n = JSON.stringify(e, null, "\t");
            return "{}" === n
              ? "{$1}" + t
              : "[]" === n
              ? "[$1]" + t
              : this.getInsertTextForPlainText(n + t);
          }),
          (e.prototype.getInsertTextForSnippetValue = function (e, t) {
            return (
              (function e(t, n, r) {
                if (null !== t && "object" === typeof t) {
                  var i = n + "\t";
                  if (Array.isArray(t)) {
                    if (0 === t.length) return "[]";
                    for (var o = "[\n", a = 0; a < t.length; a++)
                      (o += i + e(t[a], i, r)),
                        a < t.length - 1 && (o += ","),
                        (o += "\n");
                    return (o += n + "]");
                  }
                  var s = Object.keys(t);
                  if (0 === s.length) return "{}";
                  for (o = "{\n", a = 0; a < s.length; a++) {
                    var u = s[a];
                    (o += i + JSON.stringify(u) + ": " + e(t[u], i, r)),
                      a < s.length - 1 && (o += ","),
                      (o += "\n");
                  }
                  return (o += n + "}");
                }
                return r(t);
              })(e, "", function (e) {
                return "string" === typeof e && "^" === e[0]
                  ? e.substr(1)
                  : JSON.stringify(e);
              }) + t
            );
          }),
          (e.prototype.getInsertTextForGuessedValue = function (e, t) {
            switch (typeof e) {
              case "object":
                return null === e
                  ? "${1:null}" + t
                  : this.getInsertTextForValue(e, t);
              case "string":
                var n = JSON.stringify(e);
                return (
                  (n = n.substr(1, n.length - 2)),
                  '"${1:' + (n = this.getInsertTextForPlainText(n)) + '}"' + t
                );
              case "number":
              case "boolean":
                return "${1:" + JSON.stringify(e) + "}" + t;
            }
            return this.getInsertTextForValue(e, t);
          }),
          (e.prototype.getSuggestionKind = function (e) {
            if (Array.isArray(e)) {
              var t = e;
              e = t.length > 0 ? t[0] : void 0;
            }
            if (!e) return er.Value;
            switch (e) {
              case "string":
                return er.Value;
              case "object":
                return er.Module;
              case "property":
                return er.Property;
              default:
                return er.Value;
            }
          }),
          (e.prototype.getLabelTextForMatchingNode = function (e, t) {
            switch (e.type) {
              case "array":
                return "[]";
              case "object":
                return "{}";
              default:
                return t.getText().substr(e.offset, e.length);
            }
          }),
          (e.prototype.getInsertTextForMatchingNode = function (e, t, n) {
            switch (e.type) {
              case "array":
                return this.getInsertTextForValue([], n);
              case "object":
                return this.getInsertTextForValue({}, n);
              default:
                var r = t.getText().substr(e.offset, e.length) + n;
                return this.getInsertTextForPlainText(r);
            }
          }),
          (e.prototype.getInsertTextForProperty = function (e, t, n, r) {
            var i = this.getInsertTextForValue(e, "");
            if (!n) return i;
            var o,
              a = i + ": ",
              s = 0;
            if (t) {
              if (Array.isArray(t.defaultSnippets)) {
                if (1 === t.defaultSnippets.length) {
                  var u = t.defaultSnippets[0].body;
                  Yn(u) && (o = this.getInsertTextForSnippetValue(u, ""));
                }
                s += t.defaultSnippets.length;
              }
              if (
                (t.enum &&
                  (o ||
                    1 !== t.enum.length ||
                    (o = this.getInsertTextForGuessedValue(t.enum[0], "")),
                  (s += t.enum.length)),
                Yn(t.default) &&
                  (o || (o = this.getInsertTextForGuessedValue(t.default, "")),
                  s++),
                Array.isArray(t.examples) &&
                  t.examples.length &&
                  (o ||
                    (o = this.getInsertTextForGuessedValue(t.examples[0], "")),
                  (s += t.examples.length)),
                0 === s)
              ) {
                var c = Array.isArray(t.type) ? t.type[0] : t.type;
                switch (
                  (c ||
                    (t.properties ? (c = "object") : t.items && (c = "array")),
                  c)
                ) {
                  case "boolean":
                    o = "$1";
                    break;
                  case "string":
                    o = '"$1"';
                    break;
                  case "object":
                    o = "{$1}";
                    break;
                  case "array":
                    o = "[$1]";
                    break;
                  case "number":
                  case "integer":
                    o = "${1:0}";
                    break;
                  case "null":
                    o = "${1:null}";
                    break;
                  default:
                    return i;
                }
              }
            }
            return (!o || s > 1) && (o = "$1"), a + o + r;
          }),
          (e.prototype.getCurrentWord = function (e, t) {
            for (
              var n = t - 1, r = e.getText();
              n >= 0 && -1 === ' \t\n\r\v":{[,]}'.indexOf(r.charAt(n));

            )
              n--;
            return r.substring(n + 1, t);
          }),
          (e.prototype.evaluateSeparatorAfter = function (e, t) {
            var n = Vn(e.getText(), !0);
            switch ((n.setPosition(t), n.scan())) {
              case 5:
              case 2:
              case 4:
              case 17:
                return "";
              default:
                return ",";
            }
          }),
          (e.prototype.findItemAtOffset = function (e, t, n) {
            for (
              var r = Vn(t.getText(), !0), i = e.items, o = i.length - 1;
              o >= 0;
              o--
            ) {
              var a = i[o];
              if (n > a.offset + a.length)
                return (
                  r.setPosition(a.offset + a.length),
                  5 === r.scan() && n >= r.getTokenOffset() + r.getTokenLength()
                    ? o + 1
                    : o
                );
              if (n >= a.offset) return o;
            }
            return 0;
          }),
          (e.prototype.isInComment = function (e, t, n) {
            var r = Vn(e.getText(), !1);
            r.setPosition(t);
            for (
              var i = r.scan();
              17 !== i && r.getTokenOffset() + r.getTokenLength() < n;

            )
              i = r.scan();
            return (12 === i || 13 === i) && r.getTokenOffset() <= n;
          }),
          (e.prototype.fromMarkup = function (e) {
            if (e && this.doesSupportMarkdown())
              return { kind: Zn.Markdown, value: e };
          }),
          (e.prototype.doesSupportMarkdown = function () {
            if (!Yn(this.supportsMarkdown)) {
              var e =
                this.clientCapabilities.textDocument &&
                this.clientCapabilities.textDocument.completion;
              this.supportsMarkdown =
                e &&
                e.completionItem &&
                Array.isArray(e.completionItem.documentationFormat) &&
                -1 !==
                  e.completionItem.documentationFormat.indexOf(Zn.Markdown);
            }
            return this.supportsMarkdown;
          }),
          (e.prototype.doesSupportsCommitCharacters = function () {
            if (!Yn(this.supportsCommitCharacters)) {
              var e =
                this.clientCapabilities.textDocument &&
                this.clientCapabilities.textDocument.completion;
              this.supportsCommitCharacters =
                e &&
                e.completionItem &&
                !!e.completionItem.commitCharactersSupport;
            }
            return this.supportsCommitCharacters;
          }),
          e
        );
      })(),
      ui = (function () {
        function e(e, t, n) {
          void 0 === t && (t = []),
            (this.schemaService = e),
            (this.contributions = t),
            (this.promise = n || Promise);
        }
        return (
          (e.prototype.doHover = function (e, t, n) {
            var r = e.offsetAt(t),
              i = n.getNodeFromOffset(r);
            if (
              !i ||
              (("object" === i.type || "array" === i.type) &&
                r > i.offset + 1 &&
                r < i.offset + i.length - 1)
            )
              return this.promise.resolve(null);
            var o = i;
            if ("string" === i.type) {
              var a = i.parent;
              if (
                a &&
                "property" === a.type &&
                a.keyNode === i &&
                !(i = a.valueNode)
              )
                return this.promise.resolve(null);
            }
            for (
              var s = Cn.create(
                  e.positionAt(o.offset),
                  e.positionAt(o.offset + o.length)
                ),
                u = function (e) {
                  return { contents: e, range: s };
                },
                c = Xr(i),
                l = this.contributions.length - 1;
              l >= 0;
              l--
            ) {
              var f = this.contributions[l].getInfoContribution(e.uri, c);
              if (f)
                return f.then(function (e) {
                  return u(e);
                });
            }
            return this.schemaService
              .getSchemaForResource(e.uri, n)
              .then(function (e) {
                if (e && i) {
                  var t = n.getMatchingSchemas(e.schema, i.offset),
                    r = void 0,
                    o = void 0,
                    a = void 0,
                    s = void 0;
                  t.every(function (e) {
                    if (
                      e.node === i &&
                      !e.inverted &&
                      e.schema &&
                      ((r = r || e.schema.title),
                      (o =
                        o ||
                        e.schema.markdownDescription ||
                        ci(e.schema.description)),
                      e.schema.enum)
                    ) {
                      var t = e.schema.enum.indexOf(Zr(i));
                      e.schema.markdownEnumDescriptions
                        ? (a = e.schema.markdownEnumDescriptions[t])
                        : e.schema.enumDescriptions &&
                          (a = ci(e.schema.enumDescriptions[t])),
                        a &&
                          "string" !== typeof (s = e.schema.enum[t]) &&
                          (s = JSON.stringify(s));
                    }
                    return !0;
                  });
                  var c = "";
                  return (
                    r && (c = ci(r)),
                    o && (c.length > 0 && (c += "\n\n"), (c += o)),
                    a &&
                      (c.length > 0 && (c += "\n\n"),
                      (c +=
                        "`" +
                        (function (e) {
                          if (-1 !== e.indexOf("`")) return "`` " + e + " ``";
                          return e;
                        })(s) +
                        "`: " +
                        a)),
                    u([c])
                  );
                }
                return null;
              });
          }),
          e
        );
      })();
    function ci(e) {
      if (e)
        return e
          .replace(/([^\n\r])(\r?\n)([^\n\r])/gm, "$1\n\n$3")
          .replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }
    var li = n(3),
      fi = Rr(),
      hi = (function () {
        function e(e, t) {
          (this.patternRegExps = []), (this.isInclude = []);
          try {
            for (var n = 0, r = e; n < r.length; n++) {
              var i = r[n],
                o = "!" !== i[0];
              o || (i = i.substring(1)),
                this.patternRegExps.push(new RegExp(oi(i) + "$")),
                this.isInclude.push(o);
            }
            this.uris = t;
          } catch (a) {
            (this.patternRegExps.length = 0),
              (this.isInclude.length = 0),
              (this.uris = []);
          }
        }
        return (
          (e.prototype.matchesPattern = function (e) {
            for (var t = !1, n = 0; n < this.patternRegExps.length; n++) {
              this.patternRegExps[n].test(e) && (t = this.isInclude[n]);
            }
            return t;
          }),
          (e.prototype.getURIs = function () {
            return this.uris;
          }),
          e
        );
      })(),
      di = (function () {
        function e(e, t, n) {
          (this.service = e),
            (this.url = t),
            (this.dependencies = {}),
            n &&
              (this.unresolvedSchema = this.service.promise.resolve(new mi(n)));
        }
        return (
          (e.prototype.getUnresolvedSchema = function () {
            return (
              this.unresolvedSchema ||
                (this.unresolvedSchema = this.service.loadSchema(this.url)),
              this.unresolvedSchema
            );
          }),
          (e.prototype.getResolvedSchema = function () {
            var e = this;
            return (
              this.resolvedSchema ||
                (this.resolvedSchema = this.getUnresolvedSchema().then(
                  function (t) {
                    return e.service.resolveSchemaContent(
                      t,
                      e.url,
                      e.dependencies
                    );
                  }
                )),
              this.resolvedSchema
            );
          }),
          (e.prototype.clearSchema = function () {
            (this.resolvedSchema = void 0),
              (this.unresolvedSchema = void 0),
              (this.dependencies = {});
          }),
          e
        );
      })(),
      mi = function (e, t) {
        void 0 === t && (t = []), (this.schema = e), (this.errors = t);
      },
      pi = (function () {
        function e(e, t) {
          void 0 === t && (t = []), (this.schema = e), (this.errors = t);
        }
        return (
          (e.prototype.getSection = function (e) {
            var t = this.getSectionRecursive(e, this.schema);
            if (t) return Gr(t);
          }),
          (e.prototype.getSectionRecursive = function (e, t) {
            if (!t || "boolean" === typeof t || 0 === e.length) return t;
            var n = e.shift();
            if (t.properties && (t.properties[n], 1))
              return this.getSectionRecursive(e, t.properties[n]);
            if (t.patternProperties)
              for (
                var r = 0, i = Object.keys(t.patternProperties);
                r < i.length;
                r++
              ) {
                var o = i[r];
                if (new RegExp(o).test(n))
                  return this.getSectionRecursive(e, t.patternProperties[o]);
              }
            else {
              if ("object" === typeof t.additionalProperties)
                return this.getSectionRecursive(e, t.additionalProperties);
              if (n.match("[0-9]+"))
                if (Array.isArray(t.items)) {
                  var a = parseInt(n, 10);
                  if (!isNaN(a) && t.items[a])
                    return this.getSectionRecursive(e, t.items[a]);
                } else if (t.items) return this.getSectionRecursive(e, t.items);
            }
          }),
          e
        );
      })(),
      gi = (function () {
        function e(e, t, n) {
          (this.contextService = t),
            (this.requestService = e),
            (this.promiseConstructor = n || Promise),
            (this.callOnDispose = []),
            (this.contributionSchemas = {}),
            (this.contributionAssociations = []),
            (this.schemasById = {}),
            (this.filePatternAssociations = []),
            (this.registeredSchemasIds = {});
        }
        return (
          (e.prototype.getRegisteredSchemaIds = function (e) {
            return Object.keys(this.registeredSchemasIds).filter(function (t) {
              var n = li.a.parse(t).scheme;
              return "schemaservice" !== n && (!e || e(n));
            });
          }),
          Object.defineProperty(e.prototype, "promise", {
            get: function () {
              return this.promiseConstructor;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.dispose = function () {
            for (; this.callOnDispose.length > 0; ) this.callOnDispose.pop()();
          }),
          (e.prototype.onResourceChange = function (e) {
            for (
              var t = this,
                n = !1,
                r = [(e = yi(e))],
                i = Object.keys(this.schemasById).map(function (e) {
                  return t.schemasById[e];
                });
              r.length;

            )
              for (var o = r.pop(), a = 0; a < i.length; a++) {
                var s = i[a];
                s &&
                  (s.url === o || s.dependencies[o]) &&
                  (s.url !== o && r.push(s.url),
                  s.clearSchema(),
                  (i[a] = void 0),
                  (n = !0));
              }
            return n;
          }),
          (e.prototype.setSchemaContributions = function (e) {
            if (e.schemas) {
              var t = e.schemas;
              for (var n in t) {
                var r = yi(n);
                this.contributionSchemas[r] = this.addSchemaHandle(r, t[n]);
              }
            }
            if (Array.isArray(e.schemaAssociations))
              for (var i = 0, o = e.schemaAssociations; i < o.length; i++) {
                var a = o[i],
                  s = a.uris.map(yi),
                  u = this.addFilePatternAssociation(a.pattern, s);
                this.contributionAssociations.push(u);
              }
          }),
          (e.prototype.addSchemaHandle = function (e, t) {
            var n = new di(this, e, t);
            return (this.schemasById[e] = n), n;
          }),
          (e.prototype.getOrAddSchemaHandle = function (e, t) {
            return this.schemasById[e] || this.addSchemaHandle(e, t);
          }),
          (e.prototype.addFilePatternAssociation = function (e, t) {
            var n = new hi(e, t);
            return this.filePatternAssociations.push(n), n;
          }),
          (e.prototype.registerExternalSchema = function (e, t, n) {
            var r = yi(e);
            return (
              (this.registeredSchemasIds[r] = !0),
              (this.cachedSchemaForResource = void 0),
              t && this.addFilePatternAssociation(t, [e]),
              n ? this.addSchemaHandle(r, n) : this.getOrAddSchemaHandle(r)
            );
          }),
          (e.prototype.clearExternalSchemas = function () {
            for (var e in ((this.schemasById = {}),
            (this.filePatternAssociations = []),
            (this.registeredSchemasIds = {}),
            (this.cachedSchemaForResource = void 0),
            this.contributionSchemas))
              (this.schemasById[e] = this.contributionSchemas[e]),
                (this.registeredSchemasIds[e] = !0);
            for (
              var t = 0, n = this.contributionAssociations;
              t < n.length;
              t++
            ) {
              var r = n[t];
              this.filePatternAssociations.push(r);
            }
          }),
          (e.prototype.getResolvedSchema = function (e) {
            var t = yi(e),
              n = this.schemasById[t];
            return n ? n.getResolvedSchema() : this.promise.resolve(void 0);
          }),
          (e.prototype.loadSchema = function (e) {
            if (!this.requestService) {
              var t = fi(
                "json.schema.norequestservice",
                "Unable to load schema from '{0}'. No schema request service available",
                bi(e)
              );
              return this.promise.resolve(new mi({}, [t]));
            }
            return this.requestService(e).then(
              function (t) {
                if (!t) {
                  var n = fi(
                    "json.schema.nocontent",
                    "Unable to load schema from '{0}': No content.",
                    bi(e)
                  );
                  return new mi({}, [n]);
                }
                var r,
                  i = [];
                r = Wn(t, i);
                var o = i.length
                  ? [
                      fi(
                        "json.schema.invalidFormat",
                        "Unable to parse content from '{0}': Parse error at offset {1}.",
                        bi(e),
                        i[0].offset
                      ),
                    ]
                  : [];
                return new mi(r, o);
              },
              function (t) {
                var n = t.toString(),
                  r = t.toString().split("Error: ");
                return (
                  r.length > 1 && (n = r[1]),
                  ii(n, ".") && (n = n.substr(0, n.length - 1)),
                  new mi({}, [
                    fi(
                      "json.schema.nocontent",
                      "Unable to load schema from '{0}': {1}.",
                      bi(e),
                      n
                    ),
                  ])
                );
              }
            );
          }),
          (e.prototype.resolveSchemaContent = function (e, t, n) {
            var r = this,
              i = e.errors.slice(0),
              o = e.schema;
            if (o.$schema) {
              var a = yi(o.$schema);
              if ("http://json-schema.org/draft-03/schema" === a)
                return this.promise.resolve(
                  new pi({}, [
                    fi(
                      "json.schema.draft03.notsupported",
                      "Draft-03 schemas are not supported."
                    ),
                  ])
                );
              "https://json-schema.org/draft/2019-09/schema" === a &&
                i.push(
                  fi(
                    "json.schema.draft201909.notsupported",
                    "Draft 2019-09 schemas are not yet fully supported."
                  )
                );
            }
            var s = this.contextService,
              u = function (e, t, n, r) {
                var o = r ? decodeURIComponent(r) : void 0,
                  a = (function (e, t) {
                    if (!t) return e;
                    var n = e;
                    return (
                      "/" === t[0] && (t = t.substr(1)),
                      t.split("/").some(function (e) {
                        return !(n = n[e]);
                      }),
                      n
                    );
                  })(t, o);
                if (a)
                  for (var s in a)
                    a.hasOwnProperty(s) &&
                      !e.hasOwnProperty(s) &&
                      (e[s] = a[s]);
                else
                  i.push(
                    fi(
                      "json.schema.invalidref",
                      "$ref '{0}' in '{1}' can not be resolved.",
                      o,
                      n
                    )
                  );
              },
              c = function (e, t, n, o, a) {
                s &&
                  !/^\w+:\/\/.*/.test(t) &&
                  (t = s.resolveRelativePath(t, o)),
                  (t = yi(t));
                var c = r.getOrAddSchemaHandle(t);
                return c.getUnresolvedSchema().then(function (r) {
                  if (((a[t] = !0), r.errors.length)) {
                    var o = n ? t + "#" + n : t;
                    i.push(
                      fi(
                        "json.schema.problemloadingref",
                        "Problems loading reference '{0}': {1}",
                        o,
                        r.errors[0]
                      )
                    );
                  }
                  return (
                    u(e, r.schema, t, n), l(e, r.schema, t, c.dependencies)
                  );
                });
              },
              l = function (e, t, n, i) {
                if (!e || "object" !== typeof e) return Promise.resolve(null);
                for (
                  var o = [e],
                    a = [],
                    s = [],
                    l = function (e) {
                      for (var r = []; e.$ref; ) {
                        var a = e.$ref,
                          l = a.split("#", 2);
                        if ((delete e.$ref, l[0].length > 0))
                          return void s.push(c(e, l[0], l[1], n, i));
                        -1 === r.indexOf(a) && (u(e, t, n, l[1]), r.push(a));
                      }
                      !(function () {
                        for (var e = [], t = 0; t < arguments.length; t++)
                          e[t] = arguments[t];
                        for (var n = 0, r = e; n < r.length; n++) {
                          var i = r[n];
                          "object" === typeof i && o.push(i);
                        }
                      })(
                        e.items,
                        e.additionalItems,
                        e.additionalProperties,
                        e.not,
                        e.contains,
                        e.propertyNames,
                        e.if,
                        e.then,
                        e.else
                      ),
                        (function () {
                          for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t];
                          for (var n = 0, r = e; n < r.length; n++) {
                            var i = r[n];
                            if ("object" === typeof i)
                              for (var a in i) {
                                var s = a,
                                  u = i[s];
                                "object" === typeof u && o.push(u);
                              }
                          }
                        })(
                          e.definitions,
                          e.properties,
                          e.patternProperties,
                          e.dependencies
                        ),
                        (function () {
                          for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t];
                          for (var n = 0, r = e; n < r.length; n++) {
                            var i = r[n];
                            if (Array.isArray(i))
                              for (var a = 0, s = i; a < s.length; a++) {
                                var u = s[a];
                                "object" === typeof u && o.push(u);
                              }
                          }
                        })(e.anyOf, e.allOf, e.oneOf, e.items);
                    };
                  o.length;

                ) {
                  var f = o.pop();
                  a.indexOf(f) >= 0 || (a.push(f), l(f));
                }
                return r.promise.all(s);
              };
            return l(o, o, t, n).then(function (e) {
              return new pi(o, i);
            });
          }),
          (e.prototype.getSchemaForResource = function (e, t) {
            if (t && t.root && "object" === t.root.type) {
              var n = t.root.properties.filter(function (e) {
                return (
                  "$schema" === e.keyNode.value &&
                  e.valueNode &&
                  "string" === e.valueNode.type
                );
              });
              if (n.length > 0) {
                var r = n[0].valueNode;
                if (r && "string" === r.type) {
                  var i = Zr(r);
                  if (
                    (i &&
                      (function (e, t) {
                        if (e.length < t.length) return !1;
                        for (var n = 0; n < t.length; n++)
                          if (e[n] !== t[n]) return !1;
                        return !0;
                      })(i, ".") &&
                      this.contextService &&
                      (i = this.contextService.resolveRelativePath(i, e)),
                    i)
                  ) {
                    var o = yi(i);
                    return this.getOrAddSchemaHandle(o).getResolvedSchema();
                  }
                }
              }
            }
            if (
              this.cachedSchemaForResource &&
              this.cachedSchemaForResource.resource === e
            )
              return this.cachedSchemaForResource.resolvedSchema;
            for (
              var a = Object.create(null),
                s = [],
                u = 0,
                c = this.filePatternAssociations;
              u < c.length;
              u++
            ) {
              var l = c[u];
              if (l.matchesPattern(e))
                for (var f = 0, h = l.getURIs(); f < h.length; f++) {
                  var d = h[f];
                  a[d] || (s.push(d), (a[d] = !0));
                }
            }
            var m =
              s.length > 0
                ? this.createCombinedSchema(e, s).getResolvedSchema()
                : this.promise.resolve(void 0);
            return (
              (this.cachedSchemaForResource = {
                resource: e,
                resolvedSchema: m,
              }),
              m
            );
          }),
          (e.prototype.createCombinedSchema = function (e, t) {
            if (1 === t.length) return this.getOrAddSchemaHandle(t[0]);
            var n = "schemaservice://combinedSchema/" + encodeURIComponent(e),
              r = {
                allOf: t.map(function (e) {
                  return { $ref: e };
                }),
              };
            return this.addSchemaHandle(n, r);
          }),
          (e.prototype.getMatchingSchemas = function (e, t, n) {
            if (n) {
              var r =
                n.id || "schemaservice://untitled/matchingSchemas/" + vi++;
              return this.resolveSchemaContent(new mi(n), r, {}).then(function (
                e
              ) {
                return t.getMatchingSchemas(e.schema).filter(function (e) {
                  return !e.inverted;
                });
              });
            }
            return this.getSchemaForResource(e.uri, t).then(function (e) {
              return e
                ? t.getMatchingSchemas(e.schema).filter(function (e) {
                    return !e.inverted;
                  })
                : [];
            });
          }),
          e
        );
      })(),
      vi = 0;
    function yi(e) {
      try {
        return li.a.parse(e).toString();
      } catch (t) {
        return e;
      }
    }
    function bi(e) {
      try {
        var t = li.a.parse(e);
        if ("file" === t.scheme) return t.fsPath;
      } catch (n) {}
      return e;
    }
    var Ci = Rr(),
      _i = (function () {
        function e(e, t) {
          (this.jsonSchemaService = e),
            (this.promise = t),
            (this.validationEnabled = !0);
        }
        return (
          (e.prototype.configure = function (e) {
            e &&
              ((this.validationEnabled = e.validate),
              (this.commentSeverity = e.allowComments ? void 0 : Tn.Error));
          }),
          (e.prototype.doValidation = function (e, t, n, r) {
            var i = this;
            if (!this.validationEnabled) return this.promise.resolve([]);
            var o = [],
              a = {},
              s = function (e) {
                var t =
                  e.range.start.line +
                  " " +
                  e.range.start.character +
                  " " +
                  e.message;
                a[t] || ((a[t] = !0), o.push(e));
              },
              u = function (r) {
                var a = n ? ki(n.trailingCommas) : Tn.Error,
                  u = n ? ki(n.comments) : i.commentSeverity;
                if (r) {
                  if (r.errors.length && t.root) {
                    var c = t.root,
                      l = "object" === c.type ? c.properties[0] : void 0;
                    if (l && "$schema" === l.keyNode.value) {
                      var f = l.valueNode || l,
                        h = Cn.create(
                          e.positionAt(f.offset),
                          e.positionAt(f.offset + f.length)
                        );
                      s(
                        In.create(
                          h,
                          r.errors[0],
                          Tn.Warning,
                          wr.SchemaResolveError
                        )
                      );
                    } else {
                      h = Cn.create(
                        e.positionAt(c.offset),
                        e.positionAt(c.offset + 1)
                      );
                      s(
                        In.create(
                          h,
                          r.errors[0],
                          Tn.Warning,
                          wr.SchemaResolveError
                        )
                      );
                    }
                  } else {
                    var d = t.validate(e, r.schema);
                    d && d.forEach(s);
                  }
                  (function e(t) {
                    if (t && "object" === typeof t) {
                      if (Gn(t.allowComments)) return t.allowComments;
                      if (t.allOf)
                        for (var n = 0, r = t.allOf; n < r.length; n++) {
                          var i = r[n],
                            o = e(i);
                          if (Gn(o)) return o;
                        }
                    }
                    return;
                  })(r.schema) && (u = void 0),
                    (function e(t) {
                      if (t && "object" === typeof t) {
                        if (Gn(t.allowTrailingCommas))
                          return t.allowTrailingCommas;
                        var n = t;
                        if (Gn(n.allowsTrailingCommas))
                          return n.allowsTrailingCommas;
                        if (t.allOf)
                          for (var r = 0, i = t.allOf; r < i.length; r++) {
                            var o = i[r],
                              a = e(o);
                            if (Gn(a)) return a;
                          }
                      }
                      return;
                    })(r.schema) && (a = void 0);
                }
                for (var m = 0, p = t.syntaxErrors; m < p.length; m++) {
                  var g = p[m];
                  if (g.code === wr.TrailingComma) {
                    if ("number" !== typeof a) continue;
                    g.severity = a;
                  }
                  s(g);
                }
                if ("number" === typeof u) {
                  var v = Ci(
                    "InvalidCommentToken",
                    "Comments are not permitted in JSON."
                  );
                  t.comments.forEach(function (e) {
                    s(In.create(e, v, u, wr.CommentNotPermitted));
                  });
                }
                return o;
              };
            if (r) {
              var c = r.id || "schemaservice://untitled/" + Si++;
              return this.jsonSchemaService
                .resolveSchemaContent(new mi(r), c, {})
                .then(function (e) {
                  return u(e);
                });
            }
            return this.jsonSchemaService
              .getSchemaForResource(e.uri, t)
              .then(function (e) {
                return u(e);
              });
          }),
          e
        );
      })(),
      Si = 0;
    function ki(e) {
      switch (e) {
        case "error":
          return Tn.Error;
        case "warning":
          return Tn.Warning;
        case "ignore":
          return;
      }
    }
    function xi(e) {
      return e < 48
        ? 0
        : e <= 57
        ? e - 48
        : (e < 97 && (e += 32), e >= 97 && e <= 102 ? e - 97 + 10 : 0);
    }
    function Ei(e) {
      if ("#" === e[0])
        switch (e.length) {
          case 4:
            return {
              red: (17 * xi(e.charCodeAt(1))) / 255,
              green: (17 * xi(e.charCodeAt(2))) / 255,
              blue: (17 * xi(e.charCodeAt(3))) / 255,
              alpha: 1,
            };
          case 5:
            return {
              red: (17 * xi(e.charCodeAt(1))) / 255,
              green: (17 * xi(e.charCodeAt(2))) / 255,
              blue: (17 * xi(e.charCodeAt(3))) / 255,
              alpha: (17 * xi(e.charCodeAt(4))) / 255,
            };
          case 7:
            return {
              red: (16 * xi(e.charCodeAt(1)) + xi(e.charCodeAt(2))) / 255,
              green: (16 * xi(e.charCodeAt(3)) + xi(e.charCodeAt(4))) / 255,
              blue: (16 * xi(e.charCodeAt(5)) + xi(e.charCodeAt(6))) / 255,
              alpha: 1,
            };
          case 9:
            return {
              red: (16 * xi(e.charCodeAt(1)) + xi(e.charCodeAt(2))) / 255,
              green: (16 * xi(e.charCodeAt(3)) + xi(e.charCodeAt(4))) / 255,
              blue: (16 * xi(e.charCodeAt(5)) + xi(e.charCodeAt(6))) / 255,
              alpha: (16 * xi(e.charCodeAt(7)) + xi(e.charCodeAt(8))) / 255,
            };
        }
    }
    var Ai = (function () {
      function e(e) {
        this.schemaService = e;
      }
      return (
        (e.prototype.findDocumentSymbols = function (e, t, n) {
          var r = this;
          void 0 === n && (n = { resultLimit: Number.MAX_VALUE });
          var i = t.root;
          if (!i) return [];
          var o = n.resultLimit || Number.MAX_VALUE,
            a = e.uri;
          if (
            ("vscode://defaultsettings/keybindings.json" === a ||
              ii(a.toLowerCase(), "/user/keybindings.json")) &&
            "array" === i.type
          ) {
            for (var s = [], u = 0, c = i.items; u < c.length; u++) {
              var l = c[u];
              if ("object" === l.type)
                for (var f = 0, h = l.properties; f < h.length; f++) {
                  var d = h[f];
                  if ("key" === d.keyNode.value && d.valueNode) {
                    var m = Sn.create(e.uri, wi(e, l));
                    if (
                      (s.push({
                        name: Zr(d.valueNode),
                        kind: fr.Function,
                        location: m,
                      }),
                      --o <= 0)
                    )
                      return (
                        n &&
                          n.onResultLimitExceeded &&
                          n.onResultLimitExceeded(a),
                        s
                      );
                  }
                }
            }
            return s;
          }
          for (
            var p = [{ node: i, containerName: "" }],
              g = 0,
              v = !1,
              y = [],
              b = function (t, n) {
                "array" === t.type
                  ? t.items.forEach(function (e) {
                      e && p.push({ node: e, containerName: n });
                    })
                  : "object" === t.type &&
                    t.properties.forEach(function (t) {
                      var i = t.valueNode;
                      if (i)
                        if (o > 0) {
                          o--;
                          var a = Sn.create(e.uri, wi(e, t)),
                            s = n ? n + "." + t.keyNode.value : t.keyNode.value;
                          y.push({
                            name: r.getKeyLabel(t),
                            kind: r.getSymbolKind(i.type),
                            location: a,
                            containerName: n,
                          }),
                            p.push({ node: i, containerName: s });
                        } else v = !0;
                    });
              };
            g < p.length;

          ) {
            var C = p[g++];
            b(C.node, C.containerName);
          }
          return (
            v && n && n.onResultLimitExceeded && n.onResultLimitExceeded(a), y
          );
        }),
        (e.prototype.findDocumentSymbols2 = function (e, t, n) {
          var r = this;
          void 0 === n && (n = { resultLimit: Number.MAX_VALUE });
          var i = t.root;
          if (!i) return [];
          var o = n.resultLimit || Number.MAX_VALUE,
            a = e.uri;
          if (
            ("vscode://defaultsettings/keybindings.json" === a ||
              ii(a.toLowerCase(), "/user/keybindings.json")) &&
            "array" === i.type
          ) {
            for (var s = [], u = 0, c = i.items; u < c.length; u++) {
              var l = c[u];
              if ("object" === l.type)
                for (var f = 0, h = l.properties; f < h.length; f++) {
                  var d = h[f];
                  if ("key" === d.keyNode.value && d.valueNode) {
                    var m = wi(e, l),
                      p = wi(e, d.keyNode);
                    if (
                      (s.push({
                        name: Zr(d.valueNode),
                        kind: fr.Function,
                        range: m,
                        selectionRange: p,
                      }),
                      --o <= 0)
                    )
                      return (
                        n &&
                          n.onResultLimitExceeded &&
                          n.onResultLimitExceeded(a),
                        s
                      );
                  }
                }
            }
            return s;
          }
          for (
            var g = [],
              v = [{ node: i, result: g }],
              y = 0,
              b = !1,
              C = function (t, n) {
                "array" === t.type
                  ? t.items.forEach(function (t, i) {
                      if (t)
                        if (o > 0) {
                          o--;
                          var a = wi(e, t),
                            s = a,
                            u = {
                              name: String(i),
                              kind: r.getSymbolKind(t.type),
                              range: a,
                              selectionRange: s,
                              children: [],
                            };
                          n.push(u), v.push({ result: u.children, node: t });
                        } else b = !0;
                    })
                  : "object" === t.type &&
                    t.properties.forEach(function (t) {
                      var i = t.valueNode;
                      if (i)
                        if (o > 0) {
                          o--;
                          var a = wi(e, t),
                            s = wi(e, t.keyNode),
                            u = {
                              name: r.getKeyLabel(t),
                              kind: r.getSymbolKind(i.type),
                              range: a,
                              selectionRange: s,
                              children: [],
                            };
                          n.push(u), v.push({ result: u.children, node: i });
                        } else b = !0;
                    });
              };
            y < v.length;

          ) {
            var _ = v[y++];
            C(_.node, _.result);
          }
          return (
            b && n && n.onResultLimitExceeded && n.onResultLimitExceeded(a), g
          );
        }),
        (e.prototype.getSymbolKind = function (e) {
          switch (e) {
            case "object":
              return fr.Module;
            case "string":
              return fr.String;
            case "number":
              return fr.Number;
            case "array":
              return fr.Array;
            case "boolean":
              return fr.Boolean;
            default:
              return fr.Variable;
          }
        }),
        (e.prototype.getKeyLabel = function (e) {
          var t = e.keyNode.value;
          return (
            t && (t = t.replace(/[\n]/g, "\u21b5")),
            t && t.trim() ? t : '"' + t + '"'
          );
        }),
        (e.prototype.findDocumentColors = function (e, t, n) {
          return this.schemaService
            .getSchemaForResource(e.uri, t)
            .then(function (r) {
              var i = [];
              if (r)
                for (
                  var o =
                      n && "number" === typeof n.resultLimit
                        ? n.resultLimit
                        : Number.MAX_VALUE,
                    a = {},
                    s = 0,
                    u = t.getMatchingSchemas(r.schema);
                  s < u.length;
                  s++
                ) {
                  var c = u[s];
                  if (
                    !c.inverted &&
                    c.schema &&
                    ("color" === c.schema.format ||
                      "color-hex" === c.schema.format) &&
                    c.node &&
                    "string" === c.node.type
                  ) {
                    var l = String(c.node.offset);
                    if (!a[l]) {
                      var f = Ei(Zr(c.node));
                      if (f) {
                        var h = wi(e, c.node);
                        i.push({ color: f, range: h });
                      }
                      if (((a[l] = !0), --o <= 0))
                        return (
                          n &&
                            n.onResultLimitExceeded &&
                            n.onResultLimitExceeded(e.uri),
                          i
                        );
                    }
                  }
                }
              return i;
            });
        }),
        (e.prototype.getColorPresentations = function (e, t, n, r) {
          var i,
            o = [],
            a = Math.round(255 * n.red),
            s = Math.round(255 * n.green),
            u = Math.round(255 * n.blue);
          function c(e) {
            var t = e.toString(16);
            return 2 !== t.length ? "0" + t : t;
          }
          return (
            (i =
              1 === n.alpha
                ? "#" + c(a) + c(s) + c(u)
                : "#" + c(a) + c(s) + c(u) + c(Math.round(255 * n.alpha))),
            o.push({ label: i, textEdit: Mn.replace(r, JSON.stringify(i)) }),
            o
          );
        }),
        e
      );
    })();
    function wi(e, t) {
      return Cn.create(
        e.positionAt(t.offset),
        e.positionAt(t.offset + t.length)
      );
    }
    var Ni = Rr(),
      Li = {
        schemaAssociations: [],
        schemas: {
          "http://json-schema.org/schema#": {
            $ref: "http://json-schema.org/draft-07/schema#",
          },
          "http://json-schema.org/draft-04/schema#": {
            title: Ni(
              "schema.json",
              "Describes a JSON file using a schema. See json-schema.org for more info."
            ),
            $schema: "http://json-schema.org/draft-04/schema#",
            definitions: {
              schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } },
              positiveInteger: { type: "integer", minimum: 0 },
              positiveIntegerDefault0: {
                allOf: [
                  { $ref: "#/definitions/positiveInteger" },
                  { default: 0 },
                ],
              },
              simpleTypes: {
                type: "string",
                enum: [
                  "array",
                  "boolean",
                  "integer",
                  "null",
                  "number",
                  "object",
                  "string",
                ],
              },
              stringArray: {
                type: "array",
                items: { type: "string" },
                minItems: 1,
                uniqueItems: !0,
              },
            },
            type: "object",
            properties: {
              id: { type: "string", format: "uri" },
              $schema: { type: "string", format: "uri" },
              title: { type: "string" },
              description: { type: "string" },
              default: {},
              multipleOf: { type: "number", minimum: 0, exclusiveMinimum: !0 },
              maximum: { type: "number" },
              exclusiveMaximum: { type: "boolean", default: !1 },
              minimum: { type: "number" },
              exclusiveMinimum: { type: "boolean", default: !1 },
              maxLength: { allOf: [{ $ref: "#/definitions/positiveInteger" }] },
              minLength: {
                allOf: [{ $ref: "#/definitions/positiveIntegerDefault0" }],
              },
              pattern: { type: "string", format: "regex" },
              additionalItems: {
                anyOf: [{ type: "boolean" }, { $ref: "#" }],
                default: {},
              },
              items: {
                anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }],
                default: {},
              },
              maxItems: { allOf: [{ $ref: "#/definitions/positiveInteger" }] },
              minItems: {
                allOf: [{ $ref: "#/definitions/positiveIntegerDefault0" }],
              },
              uniqueItems: { type: "boolean", default: !1 },
              maxProperties: {
                allOf: [{ $ref: "#/definitions/positiveInteger" }],
              },
              minProperties: {
                allOf: [{ $ref: "#/definitions/positiveIntegerDefault0" }],
              },
              required: { allOf: [{ $ref: "#/definitions/stringArray" }] },
              additionalProperties: {
                anyOf: [{ type: "boolean" }, { $ref: "#" }],
                default: {},
              },
              definitions: {
                type: "object",
                additionalProperties: { $ref: "#" },
                default: {},
              },
              properties: {
                type: "object",
                additionalProperties: { $ref: "#" },
                default: {},
              },
              patternProperties: {
                type: "object",
                additionalProperties: { $ref: "#" },
                default: {},
              },
              dependencies: {
                type: "object",
                additionalProperties: {
                  anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }],
                },
              },
              enum: { type: "array", minItems: 1, uniqueItems: !0 },
              type: {
                anyOf: [
                  { $ref: "#/definitions/simpleTypes" },
                  {
                    type: "array",
                    items: { $ref: "#/definitions/simpleTypes" },
                    minItems: 1,
                    uniqueItems: !0,
                  },
                ],
              },
              format: {
                anyOf: [
                  {
                    type: "string",
                    enum: [
                      "date-time",
                      "uri",
                      "email",
                      "hostname",
                      "ipv4",
                      "ipv6",
                      "regex",
                    ],
                  },
                  { type: "string" },
                ],
              },
              allOf: { allOf: [{ $ref: "#/definitions/schemaArray" }] },
              anyOf: { allOf: [{ $ref: "#/definitions/schemaArray" }] },
              oneOf: { allOf: [{ $ref: "#/definitions/schemaArray" }] },
              not: { allOf: [{ $ref: "#" }] },
            },
            dependencies: {
              exclusiveMaximum: ["maximum"],
              exclusiveMinimum: ["minimum"],
            },
            default: {},
          },
          "http://json-schema.org/draft-07/schema#": {
            title: Ni(
              "schema.json",
              "Describes a JSON file using a schema. See json-schema.org for more info."
            ),
            definitions: {
              schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } },
              nonNegativeInteger: { type: "integer", minimum: 0 },
              nonNegativeIntegerDefault0: {
                allOf: [
                  { $ref: "#/definitions/nonNegativeInteger" },
                  { default: 0 },
                ],
              },
              simpleTypes: {
                enum: [
                  "array",
                  "boolean",
                  "integer",
                  "null",
                  "number",
                  "object",
                  "string",
                ],
              },
              stringArray: {
                type: "array",
                items: { type: "string" },
                uniqueItems: !0,
                default: [],
              },
            },
            type: ["object", "boolean"],
            properties: {
              $id: { type: "string", format: "uri-reference" },
              $schema: { type: "string", format: "uri" },
              $ref: { type: "string", format: "uri-reference" },
              $comment: { type: "string" },
              title: { type: "string" },
              description: { type: "string" },
              default: !0,
              readOnly: { type: "boolean", default: !1 },
              examples: { type: "array", items: !0 },
              multipleOf: { type: "number", exclusiveMinimum: 0 },
              maximum: { type: "number" },
              exclusiveMaximum: { type: "number" },
              minimum: { type: "number" },
              exclusiveMinimum: { type: "number" },
              maxLength: { $ref: "#/definitions/nonNegativeInteger" },
              minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
              pattern: { type: "string", format: "regex" },
              additionalItems: { $ref: "#" },
              items: {
                anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }],
                default: !0,
              },
              maxItems: { $ref: "#/definitions/nonNegativeInteger" },
              minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
              uniqueItems: { type: "boolean", default: !1 },
              contains: { $ref: "#" },
              maxProperties: { $ref: "#/definitions/nonNegativeInteger" },
              minProperties: {
                $ref: "#/definitions/nonNegativeIntegerDefault0",
              },
              required: { $ref: "#/definitions/stringArray" },
              additionalProperties: { $ref: "#" },
              definitions: {
                type: "object",
                additionalProperties: { $ref: "#" },
                default: {},
              },
              properties: {
                type: "object",
                additionalProperties: { $ref: "#" },
                default: {},
              },
              patternProperties: {
                type: "object",
                additionalProperties: { $ref: "#" },
                propertyNames: { format: "regex" },
                default: {},
              },
              dependencies: {
                type: "object",
                additionalProperties: {
                  anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }],
                },
              },
              propertyNames: { $ref: "#" },
              const: !0,
              enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 },
              type: {
                anyOf: [
                  { $ref: "#/definitions/simpleTypes" },
                  {
                    type: "array",
                    items: { $ref: "#/definitions/simpleTypes" },
                    minItems: 1,
                    uniqueItems: !0,
                  },
                ],
              },
              format: { type: "string" },
              contentMediaType: { type: "string" },
              contentEncoding: { type: "string" },
              if: { $ref: "#" },
              then: { $ref: "#" },
              else: { $ref: "#" },
              allOf: { $ref: "#/definitions/schemaArray" },
              anyOf: { $ref: "#/definitions/schemaArray" },
              oneOf: { $ref: "#/definitions/schemaArray" },
              not: { $ref: "#" },
            },
            default: !0,
          },
        },
      },
      Ti = {
        id: Ni("schema.json.id", "A unique identifier for the schema."),
        $schema: Ni(
          "schema.json.$schema",
          "The schema to verify this document against."
        ),
        title: Ni("schema.json.title", "A descriptive title of the element."),
        description: Ni(
          "schema.json.description",
          "A long description of the element. Used in hover menus and suggestions."
        ),
        default: Ni(
          "schema.json.default",
          "A default value. Used by suggestions."
        ),
        multipleOf: Ni(
          "schema.json.multipleOf",
          "A number that should cleanly divide the current value (i.e. have no remainder)."
        ),
        maximum: Ni(
          "schema.json.maximum",
          "The maximum numerical value, inclusive by default."
        ),
        exclusiveMaximum: Ni(
          "schema.json.exclusiveMaximum",
          "Makes the maximum property exclusive."
        ),
        minimum: Ni(
          "schema.json.minimum",
          "The minimum numerical value, inclusive by default."
        ),
        exclusiveMinimum: Ni(
          "schema.json.exclusiveMininum",
          "Makes the minimum property exclusive."
        ),
        maxLength: Ni(
          "schema.json.maxLength",
          "The maximum length of a string."
        ),
        minLength: Ni(
          "schema.json.minLength",
          "The minimum length of a string."
        ),
        pattern: Ni(
          "schema.json.pattern",
          "A regular expression to match the string against. It is not implicitly anchored."
        ),
        additionalItems: Ni(
          "schema.json.additionalItems",
          "For arrays, only when items is set as an array. If it is a schema, then this schema validates items after the ones specified by the items array. If it is false, then additional items will cause validation to fail."
        ),
        items: Ni(
          "schema.json.items",
          "For arrays. Can either be a schema to validate every element against or an array of schemas to validate each item against in order (the first schema will validate the first element, the second schema will validate the second element, and so on."
        ),
        maxItems: Ni(
          "schema.json.maxItems",
          "The maximum number of items that can be inside an array. Inclusive."
        ),
        minItems: Ni(
          "schema.json.minItems",
          "The minimum number of items that can be inside an array. Inclusive."
        ),
        uniqueItems: Ni(
          "schema.json.uniqueItems",
          "If all of the items in the array must be unique. Defaults to false."
        ),
        maxProperties: Ni(
          "schema.json.maxProperties",
          "The maximum number of properties an object can have. Inclusive."
        ),
        minProperties: Ni(
          "schema.json.minProperties",
          "The minimum number of properties an object can have. Inclusive."
        ),
        required: Ni(
          "schema.json.required",
          "An array of strings that lists the names of all properties required on this object."
        ),
        additionalProperties: Ni(
          "schema.json.additionalProperties",
          "Either a schema or a boolean. If a schema, then used to validate all properties not matched by 'properties' or 'patternProperties'. If false, then any properties not matched by either will cause this schema to fail."
        ),
        definitions: Ni(
          "schema.json.definitions",
          "Not used for validation. Place subschemas here that you wish to reference inline with $ref."
        ),
        properties: Ni(
          "schema.json.properties",
          "A map of property names to schemas for each property."
        ),
        patternProperties: Ni(
          "schema.json.patternProperties",
          "A map of regular expressions on property names to schemas for matching properties."
        ),
        dependencies: Ni(
          "schema.json.dependencies",
          "A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object."
        ),
        enum: Ni(
          "schema.json.enum",
          "The set of literal values that are valid."
        ),
        type: Ni(
          "schema.json.type",
          "Either a string of one of the basic schema types (number, integer, null, array, object, boolean, string) or an array of strings specifying a subset of those types."
        ),
        format: Ni(
          "schema.json.format",
          "Describes the format expected for the value."
        ),
        allOf: Ni(
          "schema.json.allOf",
          "An array of schemas, all of which must match."
        ),
        anyOf: Ni(
          "schema.json.anyOf",
          "An array of schemas, where at least one must match."
        ),
        oneOf: Ni(
          "schema.json.oneOf",
          "An array of schemas, exactly one of which must match."
        ),
        not: Ni("schema.json.not", "A schema which must not match."),
        $id: Ni("schema.json.$id", "A unique identifier for the schema."),
        $ref: Ni(
          "schema.json.$ref",
          "Reference a definition hosted on any location."
        ),
        $comment: Ni(
          "schema.json.$comment",
          "Comments from schema authors to readers or maintainers of the schema."
        ),
        readOnly: Ni(
          "schema.json.readOnly",
          "Indicates that the value of the instance is managed exclusively by the owning authority."
        ),
        examples: Ni(
          "schema.json.examples",
          "Sample JSON values associated with a particular schema, for the purpose of illustrating usage."
        ),
        contains: Ni(
          "schema.json.contains",
          'An array instance is valid against "contains" if at least one of its elements is valid against the given schema.'
        ),
        propertyNames: Ni(
          "schema.json.propertyNames",
          "If the instance is an object, this keyword validates if every property name in the instance validates against the provided schema."
        ),
        const: Ni(
          "schema.json.const",
          "An instance validates successfully against this keyword if its value is equal to the value of the keyword."
        ),
        contentMediaType: Ni(
          "schema.json.contentMediaType",
          "Describes the media type of a string property."
        ),
        contentEncoding: Ni(
          "schema.json.contentEncoding",
          "Describes the content encoding of a string property."
        ),
        if: Ni(
          "schema.json.if",
          'The validation outcome of the "if" subschema controls which of the "then" or "else" keywords are evaluated.'
        ),
        then: Ni(
          "schema.json.then",
          'The "if" subschema is used for validation when the "if" subschema succeeds.'
        ),
        else: Ni(
          "schema.json.else",
          'The "else" subschema is used for validation when the "if" subschema fails.'
        ),
      };
    for (var Oi in Li.schemas) {
      var Ii = Li.schemas[Oi];
      for (var Pi in Ii.properties) {
        var Mi = Ii.properties[Pi];
        "boolean" === typeof Mi && (Mi = Ii.properties[Pi] = {});
        var Ri = Ti[Pi];
        Ri
          ? (Mi.description = Ri)
          : console.log(Pi + ": localize('schema.json." + Pi + '\', "")');
      }
    }
    function ji(e, t) {
      var n = [],
        r = [],
        i = [],
        o = -1,
        a = Vn(e.getText(), !1),
        s = a.scan();
      function u(e) {
        n.push(e), r.push(i.length);
      }
      for (; 17 !== s; ) {
        switch (s) {
          case 1:
          case 3:
            var c = {
              startLine: (h = e.positionAt(a.getTokenOffset()).line),
              endLine: h,
              kind: 1 === s ? "object" : "array",
            };
            i.push(c);
            break;
          case 2:
          case 4:
            var l = 2 === s ? "object" : "array";
            if (i.length > 0 && i[i.length - 1].kind === l) {
              c = i.pop();
              var f = e.positionAt(a.getTokenOffset()).line;
              c &&
                f > c.startLine + 1 &&
                o !== c.startLine &&
                ((c.endLine = f - 1), u(c), (o = c.startLine));
            }
            break;
          case 13:
            var h = e.positionAt(a.getTokenOffset()).line,
              d = e.positionAt(a.getTokenOffset() + a.getTokenLength()).line;
            1 === a.getTokenError() && h + 1 < e.lineCount
              ? a.setPosition(e.offsetAt(yn.create(h + 1, 0)))
              : h < d &&
                (u({ startLine: h, endLine: d, kind: wn.Comment }), (o = h));
            break;
          case 12:
            var m = e
              .getText()
              .substr(a.getTokenOffset(), a.getTokenLength())
              .match(/^\/\/\s*#(region\b)|(endregion\b)/);
            if (m) {
              f = e.positionAt(a.getTokenOffset()).line;
              if (m[1]) {
                c = { startLine: f, endLine: f, kind: wn.Region };
                i.push(c);
              } else {
                for (var p = i.length - 1; p >= 0 && i[p].kind !== wn.Region; )
                  p--;
                if (p >= 0) {
                  c = i[p];
                  (i.length = p),
                    f > c.startLine &&
                      o !== c.startLine &&
                      ((c.endLine = f), u(c), (o = c.startLine));
                }
              }
            }
        }
        s = a.scan();
      }
      var g = t && t.rangeLimit;
      if ("number" !== typeof g || n.length <= g) return n;
      t && t.onRangeLimitExceeded && t.onRangeLimitExceeded(e.uri);
      for (var v = [], y = 0, b = r; y < b.length; y++) {
        (x = b[y]) < 30 && (v[x] = (v[x] || 0) + 1);
      }
      var C = 0,
        _ = 0;
      for (p = 0; p < v.length; p++) {
        var S = v[p];
        if (S) {
          if (S + C > g) {
            _ = p;
            break;
          }
          C += S;
        }
      }
      var k = [];
      for (p = 0; p < n.length; p++) {
        var x;
        "number" === typeof (x = r[p]) &&
          (x < _ || (x === _ && C++ < g)) &&
          k.push(n[p]);
      }
      return k;
    }
    function Di(e, t, n) {
      function r(t, n) {
        return Cn.create(e.positionAt(t), e.positionAt(n));
      }
      var i = Vn(e.getText(), !0);
      function o(e, t) {
        return (
          i.setPosition(e),
          i.scan() === t ? i.getTokenOffset() + i.getTokenLength() : -1
        );
      }
      return t.map(function (t) {
        for (
          var i = e.offsetAt(t), a = n.getNodeFromOffset(i, !0), s = [];
          a;

        ) {
          switch (a.type) {
            case "string":
            case "object":
            case "array":
              var u = a.offset + 1,
                c = a.offset + a.length - 1;
              u < c && i >= u && i <= c && s.push(r(u, c)),
                s.push(r(a.offset, a.offset + a.length));
              break;
            case "number":
            case "boolean":
            case "null":
            case "property":
              s.push(r(a.offset, a.offset + a.length));
          }
          if (
            "property" === a.type ||
            (a.parent && "array" === a.parent.type)
          ) {
            var l = o(a.offset + a.length, 5);
            -1 !== l && s.push(r(a.offset, l));
          }
          a = a.parent;
        }
        for (var f = void 0, h = s.length - 1; h >= 0; h--)
          f = _r.create(s[h], f);
        return f || (f = _r.create(Cn.create(t, t))), f;
      });
    }
    function Fi(e, t, n) {
      var r = e.offsetAt(t),
        i = n.getNodeFromOffset(r, !0);
      if (
        !i ||
        !(function (e) {
          return (
            ("string" === e.type &&
              e.parent &&
              "property" === e.parent.type &&
              e.parent.valueNode === e &&
              "$ref" === e.parent.keyNode.value) ||
            !1
          );
        })(i)
      )
        return Promise.resolve([]);
      var o = i.parent.valueNode,
        a = (function (e, t) {
          var n = (function (e) {
            if ("#" === e) return [];
            if ("#" !== e[0] || "/" !== e[1]) return null;
            return e.substring(2).split(/\//).map(Vi);
          })(t);
          if (!n) return null;
          return (function e(t, n) {
            if (!n) return null;
            if (0 === t.length) return n;
            var r = t.shift();
            if (n && "object" === n.type) {
              var i = n.properties.find(function (e) {
                return e.keyNode.value === r;
              });
              return i ? e(t, i.valueNode) : null;
            }
            if (n && "array" === n.type && r.match(/^(0|[1-9][0-9]*)$/)) {
              var o = Number.parseInt(r),
                a = n.items[o];
              return a ? e(t, a) : null;
            }
            return null;
          })(n, e.root);
        })(n, o.value);
      if (!a) return Promise.resolve([]);
      var s = {
        targetUri: e.uri,
        originSelectionRange: Ui(e, o),
        targetRange: Ui(e, a),
        targetSelectionRange: Ui(e, a),
      };
      return Promise.resolve([s]);
    }
    function Ui(e, t) {
      return Cn.create(
        e.positionAt(t.offset),
        e.positionAt(t.offset + t.length)
      );
    }
    function Vi(e) {
      return e.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    function Wi(e) {
      var t = e.promiseConstructor || Promise,
        n = new gi(e.schemaRequestService, e.workspaceContext, t);
      n.setSchemaContributions(Li);
      var r = new si(n, e.contributions, t, e.clientCapabilities),
        i = new ui(n, e.contributions, t),
        o = new Ai(n),
        a = new _i(n, t);
      return {
        configure: function (e) {
          n.clearExternalSchemas(),
            e.schemas &&
              e.schemas.forEach(function (e) {
                n.registerExternalSchema(e.uri, e.fileMatch, e.schema);
              }),
            a.configure(e);
        },
        resetSchema: function (e) {
          return n.onResourceChange(e);
        },
        doValidation: a.doValidation.bind(a),
        parseJSONDocument: function (e) {
          return ri(e, { collectComments: !0 });
        },
        newJSONDocument: function (e, t) {
          return (function (e, t) {
            return void 0 === t && (t = []), new ti(e, t, []);
          })(e, t);
        },
        getMatchingSchemas: n.getMatchingSchemas.bind(n),
        doResolve: r.doResolve.bind(r),
        doComplete: r.doComplete.bind(r),
        findDocumentSymbols: o.findDocumentSymbols.bind(o),
        findDocumentSymbols2: o.findDocumentSymbols2.bind(o),
        findColorSymbols: function (e, t) {
          return o.findDocumentColors(e, t).then(function (e) {
            return e.map(function (e) {
              return e.range;
            });
          });
        },
        findDocumentColors: o.findDocumentColors.bind(o),
        getColorPresentations: o.getColorPresentations.bind(o),
        doHover: i.doHover.bind(i),
        getFoldingRanges: ji,
        getSelectionRanges: Di,
        findDefinition: Fi,
        format: function (e, t, n) {
          var r = void 0;
          if (t) {
            var i = e.offsetAt(t.start);
            r = { offset: i, length: e.offsetAt(t.end) - i };
          }
          var o = {
            tabSize: n ? n.tabSize : 4,
            insertSpaces: !n || n.insertSpaces,
            eol: "\n",
          };
          return (function (e, t, n) {
            return mn(e, t, n);
          })(e.getText(), r, o).map(function (t) {
            return Mn.replace(
              Cn.create(
                e.positionAt(t.offset),
                e.positionAt(t.offset + t.length)
              ),
              t.content
            );
          });
        },
      };
    }
    var qi,
      Ki = function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              u(r.next(e));
            } catch (t) {
              o(t);
            }
          }
          function s(e) {
            try {
              u(r.throw(e));
            } catch (t) {
              o(t);
            }
          }
          function u(e) {
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
          u((r = r.apply(e, t || [])).next());
        });
      },
      Bi = function (e, t) {
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
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
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
      };
    "undefined" !== typeof fetch &&
      (qi = function (e) {
        return fetch(e).then(function (e) {
          return e.text();
        });
      });
    var $i = (function () {
        function e(e, t) {
          (this._ctx = e),
            (this._languageSettings = t.languageSettings),
            (this._languageId = t.languageId),
            (this._languageService = Wi({
              workspaceContext: {
                resolveRelativePath: function (e, t) {
                  return (function (e, t) {
                    if (
                      (function (e) {
                        return e.charCodeAt(0) === Hi;
                      })(t)
                    ) {
                      var n = li.a.parse(e),
                        r = t.split("/");
                      return n.with({ path: Gi(r) }).toString();
                    }
                    return (function (e) {
                      for (var t = [], n = 1; n < arguments.length; n++)
                        t[n - 1] = arguments[n];
                      for (
                        var r = li.a.parse(e),
                          i = r.path.split("/"),
                          o = 0,
                          a = t;
                        o < a.length;
                        o++
                      ) {
                        var s = a[o];
                        i.push.apply(i, s.split("/"));
                      }
                      return r.with({ path: Gi(i) }).toString();
                    })(e, t);
                  })(t.substr(0, t.lastIndexOf("/") + 1), e);
                },
              },
              schemaRequestService: t.enableSchemaRequest && qi,
            })),
            this._languageService.configure(this._languageSettings);
        }
        return (
          (e.prototype.doValidation = function (e) {
            return Ki(this, void 0, void 0, function () {
              var t, n;
              return Bi(this, function (r) {
                return (t = this._getTextDocument(e))
                  ? ((n = this._languageService.parseJSONDocument(t)),
                    [2, this._languageService.doValidation(t, n)])
                  : [2, Promise.resolve([])];
              });
            });
          }),
          (e.prototype.doComplete = function (e, t) {
            return Ki(this, void 0, void 0, function () {
              var n, r;
              return Bi(this, function (i) {
                return (
                  (n = this._getTextDocument(e)),
                  (r = this._languageService.parseJSONDocument(n)),
                  [2, this._languageService.doComplete(n, t, r)]
                );
              });
            });
          }),
          (e.prototype.doResolve = function (e) {
            return Ki(this, void 0, void 0, function () {
              return Bi(this, function (t) {
                return [2, this._languageService.doResolve(e)];
              });
            });
          }),
          (e.prototype.doHover = function (e, t) {
            return Ki(this, void 0, void 0, function () {
              var n, r;
              return Bi(this, function (i) {
                return (
                  (n = this._getTextDocument(e)),
                  (r = this._languageService.parseJSONDocument(n)),
                  [2, this._languageService.doHover(n, t, r)]
                );
              });
            });
          }),
          (e.prototype.format = function (e, t, n) {
            return Ki(this, void 0, void 0, function () {
              var r, i;
              return Bi(this, function (o) {
                return (
                  (r = this._getTextDocument(e)),
                  (i = this._languageService.format(r, t, n)),
                  [2, Promise.resolve(i)]
                );
              });
            });
          }),
          (e.prototype.resetSchema = function (e) {
            return Ki(this, void 0, void 0, function () {
              return Bi(this, function (t) {
                return [
                  2,
                  Promise.resolve(this._languageService.resetSchema(e)),
                ];
              });
            });
          }),
          (e.prototype.findDocumentSymbols = function (e) {
            return Ki(this, void 0, void 0, function () {
              var t, n, r;
              return Bi(this, function (i) {
                return (
                  (t = this._getTextDocument(e)),
                  (n = this._languageService.parseJSONDocument(t)),
                  (r = this._languageService.findDocumentSymbols(t, n)),
                  [2, Promise.resolve(r)]
                );
              });
            });
          }),
          (e.prototype.findDocumentColors = function (e) {
            return Ki(this, void 0, void 0, function () {
              var t, n, r;
              return Bi(this, function (i) {
                return (
                  (t = this._getTextDocument(e)),
                  (n = this._languageService.parseJSONDocument(t)),
                  (r = this._languageService.findDocumentColors(t, n)),
                  [2, Promise.resolve(r)]
                );
              });
            });
          }),
          (e.prototype.getColorPresentations = function (e, t, n) {
            return Ki(this, void 0, void 0, function () {
              var r, i, o;
              return Bi(this, function (a) {
                return (
                  (r = this._getTextDocument(e)),
                  (i = this._languageService.parseJSONDocument(r)),
                  (o = this._languageService.getColorPresentations(r, i, t, n)),
                  [2, Promise.resolve(o)]
                );
              });
            });
          }),
          (e.prototype.getFoldingRanges = function (e, t) {
            return Ki(this, void 0, void 0, function () {
              var n, r;
              return Bi(this, function (i) {
                return (
                  (n = this._getTextDocument(e)),
                  (r = this._languageService.getFoldingRanges(n, t)),
                  [2, Promise.resolve(r)]
                );
              });
            });
          }),
          (e.prototype.getSelectionRanges = function (e, t) {
            return Ki(this, void 0, void 0, function () {
              var n, r, i;
              return Bi(this, function (o) {
                return (
                  (n = this._getTextDocument(e)),
                  (r = this._languageService.parseJSONDocument(n)),
                  (i = this._languageService.getSelectionRanges(n, t, r)),
                  [2, Promise.resolve(i)]
                );
              });
            });
          }),
          (e.prototype._getTextDocument = function (e) {
            for (
              var t = 0, n = this._ctx.getMirrorModels();
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r.uri.toString() === e)
                return Ar.create(e, this._languageId, r.version, r.getValue());
            }
            return null;
          }),
          e
        );
      })(),
      Hi = "/".charCodeAt(0),
      Yi = ".".charCodeAt(0);
    function Gi(e) {
      for (var t = [], n = 0, r = e; n < r.length; n++) {
        var i = r[n];
        0 === i.length ||
          (1 === i.length && i.charCodeAt(0) === Yi) ||
          (2 === i.length && i.charCodeAt(0) === Yi && i.charCodeAt(1) === Yi
            ? t.pop()
            : t.push(i));
      }
      e.length > 1 && 0 === e[e.length - 1].length && t.push("");
      var o = t.join("/");
      return 0 === e[0].length && (o = "/" + o), o;
    }
    self.onmessage = function () {
      cn(function (e, t) {
        return new $i(e, t);
      });
    };
  },
]);
//# sourceMappingURL=json.worker.js.map
