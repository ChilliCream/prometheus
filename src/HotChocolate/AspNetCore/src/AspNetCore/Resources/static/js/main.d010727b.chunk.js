(this["webpackJsonp@banana-cake-pop/main"] =
  this["webpackJsonp@banana-cake-pop/main"] || []).push([
  [3],
  {
    179: function (e, t, n) {
      "use strict";
      var r = n(261);
      n.o(r, "LogLevel") &&
        n.d(t, "LogLevel", function () {
          return r.LogLevel;
        });
      var a = n(262);
      n.o(a, "LogLevel") &&
        n.d(t, "LogLevel", function () {
          return a.LogLevel;
        });
      var i = n(263);
      n.o(i, "LogLevel") &&
        n.d(t, "LogLevel", function () {
          return i.LogLevel;
        });
      var o = n(264);
      n.o(o, "LogLevel") &&
        n.d(t, "LogLevel", function () {
          return o.LogLevel;
        });
      var c = n(265);
      n.o(c, "LogLevel") &&
        n.d(t, "LogLevel", function () {
          return c.LogLevel;
        });
      var u = n(266);
      n.o(u, "LogLevel") &&
        n.d(t, "LogLevel", function () {
          return u.LogLevel;
        });
      var l = n(267);
      n.d(t, "LogLevel", function () {
        return l.a;
      });
      n(268), n(269), n(270), n(271), n(272), n(273);
    },
    261: function (e, t) {},
    262: function (e, t) {},
    263: function (e, t) {},
    264: function (e, t) {},
    265: function (e, t) {},
    266: function (e, t) {},
    267: function (e, t, n) {
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
    268: function (e, t) {},
    269: function (e, t) {},
    270: function (e, t) {},
    271: function (e, t) {},
    272: function (e, t) {},
    273: function (e, t) {},
    274: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var r = n(59);
      function a(e, t, n) {
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
      var i = function e(t) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          a(this, "id", void 0),
          a(this, "type", void 0),
          a(this, "createdAt", void 0),
          a(this, "payload", void 0),
          (this.id = t.id || Object(r.b)()),
          (this.type = t.type),
          (this.createdAt = t.createdAt || Object(r.e)()),
          (this.payload = t.payload);
      };
    },
    275: function (e, t) {},
    276: function (e, t, n) {
      "use strict";
      n(277),
        n(278),
        n(279),
        n(280),
        n(281),
        n(282),
        n(283),
        n(284),
        n(285),
        n(286),
        n(287),
        n(288),
        n(289),
        n(290);
    },
    277: function (e, t) {},
    278: function (e, t) {},
    279: function (e, t) {},
    280: function (e, t) {},
    281: function (e, t) {},
    282: function (e, t) {},
    283: function (e, t) {},
    284: function (e, t) {},
    285: function (e, t) {},
    286: function (e, t) {},
    287: function (e, t) {},
    288: function (e, t) {},
    289: function (e, t) {},
    290: function (e, t) {},
    315: function (e) {
      e.exports = JSON.parse(
        '{"type":"object","additionalProperties":false,"properties":{"resultOrientation":{"description":"Change orientation of the query and result pane; default is \'vertical\'.","type":"string","enum":["horizontal","vertical"]},"showTracingExtension":{"description":"Show tracing information also inside the result pane if available; default is \'false\'.","type":"boolean"},"sideBarLocation":{"description":"Change sidebar location; default is \'left\'.","type":"string","enum":["left","right"]},"zoomFactor":{"description":"Change zoom factor of the entire application; default is \'1\'.","type":"number","enum":[1,1.1,1.25,1.5,1.75,2]}}}'
      );
    },
    359: function (e, t) {},
    360: function (e, t) {},
    398: function (e) {
      e.exports = JSON.parse(
        '{"type":"object","properties":{"A-IM":{"type":"string"},"Accept":{"type":"string"},"Accept-Charset":{"type":"string"},"Accept-Encoding":{"type":"string"},"Accept-Language":{"type":"string"},"Accept-Datetime":{"type":"string"},"Access-Control-Request-Method":{"type":"string"},"Access-Control-Request-Headers":{"type":"string"},"Authorization":{"type":"string"},"Cache-Control":{"type":"string"},"Connection":{"type":"string"},"Content-Length":{"type":"string"},"Content-MD5":{"type":"string"},"Content-Type":{"type":"string"},"Cookie":{"type":"string"},"Date":{"type":"string"},"Enable-Tracing":{"type":"string"},"Expect":{"type":"string"},"Forwarded":{"type":"string"},"From":{"type":"string"},"Host":{"type":"string"},"HTTP2-Settings":{"type":"string"},"If-Match":{"type":"string"},"If-Modified-Since":{"type":"string"},"If-None-Match":{"type":"string"},"If-Range":{"type":"string"},"If-Unmodified-Since":{"type":"string"},"Max-Forwards":{"type":"string"},"Origin":{"type":"string"},"Pragma":{"type":"string"},"Proxy-Authorization":{"type":"string"},"Range":{"type":"string"},"Referer":{"type":"string"},"TE":{"type":"string"},"User-Agent":{"type":"string"},"Upgrade":{"type":"string"},"Via":{"type":"string"},"Warning":{"type":"string"},"X-Apollo-Tracing":{"type":"string"}}}'
      );
    },
    399: function (e) {
      e.exports = JSON.parse(
        '{"name":"@banana-cake-pop/main","displayName":"Banana Cake Pop","version":"1.0.0","author":{"name":"ChilliCream","url":"https://chillicream.com"},"private":true,"scripts":{"start":"concurrently -k -p [{name}] -n \\"React,Electron\\" \\"yarn start:react\\" \\"wait-on http://localhost:3000/ && yarn start:electron\\"","start:react":"cross-env BROWSER=none react-app-rewired start","start:electron":"cross-env NODE_ENV=development electron .","build":"yarn build:react && yarn build:electron","build:react":"react-app-rewired build","build:electron":"cross-env NODE_ENV=production electron-builder","test":"react-app-rewired test --env=jsdom","eject":"react-app-rewired eject","set-version":"yarn version --new-version \\"$Version\\" --no-git-tag-version"},"dependencies":{"@banana-cake-pop/monaco-graphql":"^1.0.0","@banana-cake-pop/schema":"^1.0.0","@banana-cake-pop/shared":"^1.0.0","@fortawesome/fontawesome-svg-core":"^1.2.26","@fortawesome/free-regular-svg-icons":"^5.12.0","@fortawesome/free-solid-svg-icons":"^5.12.0","@fortawesome/react-fontawesome":"^0.1.8","ajv":"^6.10.2","classnames":"^2.2.6","electron-window-state":"^5.0.3","graphql":"^15.3.0","graphql.macro":"^1.4.2","highlight.js":"^10.2.0","highlightjs-graphql":"^1.0.1","marked":"^1.1.1","moment":"^2.24.0","react":"^16.13.1","react-contexify":"^4.1.0","react-dom":"^16.13.1","react-highlight.js":"^1.0.7","react-virtualized-auto-sizer":"^1.0.2","react-window":"^1.8.5","styled-components":"^5.0.0"},"devDependencies":{"@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.3.2","@testing-library/user-event":"^7.1.2","@types/classnames":"^2.2.9","@types/highlight.js":"^9.12.3","@types/jest":"^24.0.0","@types/marked":"^0.7.2","@types/node":"^12.0.0","@types/react":"^16.9.0","@types/react-dom":"^16.9.0","@types/react-highlight.js":"^1.0.0","@types/react-virtualized-auto-sizer":"^1.0.0","@types/react-window":"^1.8.1","@types/styled-components":"^5.0.0","concurrently":"^5.0.0","cross-env":"^7.0.2","customize-cra":"^1.0.0","devtron":"^1.4.0","electron":"^10.1.1","electron-builder":"^22.2.0","electron-debug":"^3.0.1","electron-devtools-installer":"^3.1.1","lodash":"^4.17.20","monaco-editor-webpack-plugin":"^2.0.0","react-app-rewire-alias":"^0.1.6","react-app-rewired":"^2.1.6","react-scripts":"3.4.3","wait-on":"^5.2.0","worker-loader":"^3.0.1"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}'
      );
    },
    405: function (e, t, n) {
      e.exports = n(840);
    },
    57: function (e, t, n) {
      "use strict";
      var r = n(274);
      n.d(t, "Message", function () {
        return r.a;
      });
      n(275), n(276);
    },
    59: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return c;
        }),
        n.d(t, "d", function () {
          return u;
        }),
        n.d(t, "e", function () {
          return s;
        }),
        n.d(t, "c", function () {
          return l;
        });
      var r = n(313),
        a = n.n(r);
      function i() {
        for (
          var e = new a.a(), t = arguments.length, n = new Array(t), r = 0;
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
      var o = n(257);
      function c(e) {
        return e && e.length > 0
          ? "".concat(e, "|").concat(Object(o.a)())
          : Object(o.a)();
      }
      function u(e) {
        return "OperationDefinition" === e.kind;
      }
      function l(e, t) {
        if (e > t) throw new Error("'start' must be smaller than 'end'.");
        return t - e;
      }
      function s() {
        return Date.now();
      }
    },
    825: function (e, t, n) {},
    840: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(2),
        a = n.n(r),
        i = n(190),
        o = n.n(i),
        c = n(21),
        u = n(7),
        l = n(0),
        s = n(1),
        d = n(930);
      function f(e, t) {
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
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(n), !0).forEach(function (t) {
                p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function p(e, t, n) {
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
      var h = [],
        v = {};
      var b,
        g = (function (e) {
          var t = {
              sendMessage: function (t) {
                return e.postMessage(t);
              },
            },
            n = m(
              m({}, t),
              {},
              {
                sendAndReceiveMessage: function (t) {
                  var n = new d.a();
                  return (
                    (v[t.id] = function (e) {
                      var t = e.id,
                        r = e.payload;
                      n.next(r), n.complete(), (v[t] = void 0);
                    }),
                    e.postMessage(t),
                    n.toPromise()
                  );
                },
                registerReceiveMessageHandler: function (e, t) {
                  var n = { type: e, handle: t };
                  return (
                    h.push(n),
                    function () {
                      var e = h.indexOf(n);
                      h.splice(e, 1);
                    }
                  );
                },
              }
            );
          return (
            (e.onmessage = function (e) {
              var n = e.data;
              !(function (e, t) {
                var n = v[t.id];
                n
                  ? n(t, e)
                  : h
                      .filter(function (e) {
                        return e.type === t.type;
                      })
                      .forEach(function (n) {
                        return (0, n.handle)(t, e);
                      });
              })(t, n);
            }),
            e.start(),
            n
          );
        })(
          new (function () {
            return new SharedWorker(n.p + "schema.worker.js");
          })().port
        );
      !(function (e) {
        (e[(e.HttpHeaders = 0)] = "HttpHeaders"),
          (e[(e.HttpSettings = 2)] = "HttpSettings"),
          (e[(e.Variables = 1)] = "Variables");
      })(b || (b = {}));
      var x,
        y = b;
      !(function (e) {
        (e[(e.QueryDocuments = 0)] = "QueryDocuments"),
          (e[(e.History = 1)] = "History"),
          (e[(e.Schema = 2)] = "Schema");
      })(x || (x = {}));
      var E = x;
      function C(e) {
        return "document" === e.kind;
      }
      function O(e) {
        return "document" === e.kind || "history" === e.kind;
      }
      function k(e) {
        return "history" === e.kind;
      }
      function j(e) {
        return "schema" === e.kind;
      }
      function w(e) {
        return "preferences" === e.kind;
      }
      var L = n(120),
        H = n(932),
        S = n(185),
        T = n(937),
        I = n(938),
        M = n(933),
        V = n(934),
        z = n(8),
        _ = n.n(z),
        B = n(44),
        N = n(334);
      function R() {
        return (R = Object(B.a)(
          _.a.mark(function e() {
            var t;
            return _.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), D();
                  case 2:
                    return (t = e.sent), (e.next = 5), t.get("state", "state");
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
      function P() {
        return (P = Object(B.a)(
          _.a.mark(function e(t) {
            var n;
            return _.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), D();
                  case 2:
                    return (
                      (n = e.sent), (e.next = 5), n.put("state", t, "state")
                    );
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function D() {
        return Object(N.a)("bcp-main", 1, {
          upgrade: function (e) {
            e.createObjectStore("state");
          },
        });
      }
      var Z = n(59);
      function A() {
        return Object(Z.b)("doc");
      }
      var F = n(45);
      function W(e) {
        var t = JSON.stringify(
          Object(L.a)(e, function (e) {
            delete e.hash;
          })
        );
        return Object(Z.a)(t);
      }
      function q() {
        var e = {
          document: "",
          httpMethod: "POST",
          schemaEndpoint: "",
          variableSets: [],
        };
        return Object(F.a)(Object(F.a)({}, e), {}, { hash: W(e) });
      }
      var K = 1;
      function U(e) {
        return e
          ? { id: e.id, name: e.name, kind: "document", draft: e.request }
          : {
              id: A(),
              name: "Untitled " + K++,
              kind: "document",
              draft: q(),
              new: !0,
            };
      }
      function J(e) {
        var t = U(),
          n = Object(Z.b)("work");
        (e.selectedWorkspaceId = n),
          (e.workspaces = [
            {
              id: n,
              name: "Default",
              collections: [],
              history: [],
              tabHistory: [t.id],
              tabs: [t],
              selectedTabId: t.id,
            },
          ]);
      }
      function Q(e) {
        return {
          id: Object(Z.b)("coll"),
          name: e,
          timestamp: Object(Z.e)(),
          expanded: !0,
        };
      }
      function G(e, t) {
        var n = e.name.toUpperCase(),
          r = t.name.toUpperCase();
        return n < r ? -1 : n > r ? 1 : 0;
      }
      function Y(e) {
        return function (t) {
          var n = t.workspaces.find(function (e) {
            return e.id === t.selectedWorkspaceId;
          });
          if (
            n &&
            !n.collections.find(function (t) {
              return t.name.toLowerCase() === e.toLowerCase();
            })
          ) {
            var r = Q(e);
            n.collections.push(r),
              n.collections.sort(G),
              (n.selectedNodeId = r.id);
          }
        };
      }
      var X = n(27),
        $ = (function () {
          function e(t) {
            Object(l.a)(this, e),
              (this.stack = void 0),
              (this.stack = t ? Object(X.a)(t) : []);
          }
          return (
            Object(s.a)(e, [
              {
                key: "append",
                value: function (e) {
                  return (
                    -1 === this.stack.indexOf(e) && this.stack.push(e), this
                  );
                },
              },
              {
                key: "find",
                value: function (e) {
                  var t = this.stack.indexOf(e);
                  if (-1 !== t) return this.stack[t];
                },
              },
              {
                key: "getFirst",
                value: function () {
                  return this.stack[0];
                },
              },
              {
                key: "setFirst",
                value: function (e) {
                  var t = this.stack.indexOf(e);
                  return (
                    0 !== t &&
                      e &&
                      (-1 === t
                        ? this.stack.splice(0, 0, e)
                        : this.stack.splice(
                            0,
                            0,
                            this.stack.splice(t, 1).pop()
                          )),
                    this
                  );
                },
              },
              {
                key: "getLast",
                value: function () {
                  return this.stack.length > 0
                    ? this.stack[this.stack.length - 1]
                    : void 0;
                },
              },
              {
                key: "setLast",
                value: function (e) {
                  var t = this.stack.indexOf(e),
                    n = this.stack.length - 1;
                  return (
                    (-1 !== t && t === n) ||
                      !e ||
                      (-1 === t
                        ? this.stack.push(e)
                        : this.stack.push(this.stack.splice(t, 1).pop())),
                    this
                  );
                },
              },
              {
                key: "count",
                value: function () {
                  return this.stack.length;
                },
              },
              {
                key: "remove",
                value: function (e) {
                  var t = this.stack.indexOf(e);
                  return -1 !== t && this.stack.splice(t, 1), this;
                },
              },
              {
                key: "toArray",
                value: function () {
                  return [].concat(this.stack);
                },
              },
            ]),
            e
          );
        })();
      function ee(e) {
        return new $(e);
      }
      function te(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 250;
        return function (r) {
          window.clearTimeout(t),
            (t = window.setTimeout(function () {
              return e(r);
            }, n));
        };
      }
      var ne = function (e) {
        for (var t = 0, n = e; n && n.offsetParent; )
          (t +=
            ((n.offsetParent && n.offsetParent.clientHeight) ||
              window.innerHeight) -
            (n.offsetTop + n.offsetHeight)),
            (n = n.offsetParent);
        return t;
      };
      var re = function (e) {
        for (var t = 0, n = e; n && n.offsetParent; )
          (t += n.offsetLeft), (n = n.offsetParent);
        return t;
      };
      var ae = function (e) {
        for (var t = 0, n = e; n && n.offsetParent; )
          (t +=
            ((n.offsetParent && n.offsetParent.clientWidth) ||
              window.innerWidth) -
            (n.offsetLeft + n.offsetWidth)),
            (n = n.offsetParent);
        return t;
      };
      var ie = function (e) {
          for (var t = 0, n = e; n && n.offsetParent; )
            (t += n.offsetTop), (n = n.offsetParent);
          return t;
        },
        oe = n(350),
        ce = n.n(oe);
      function ue(e) {
        return ce()(e);
      }
      ce.a.setOptions({ gfm: !1, sanitize: !0 });
      n(931);
      var le = n(390),
        se = n.n(le),
        de = n(391),
        fe = n.n(de);
      function me(e, t) {
        return se.a.format(
          e,
          Object(F.a)(
            Object(F.a)({}, t),
            {},
            { parser: "graphql", plugins: [fe.a] }
          )
        );
      }
      function pe(e, t) {
        var n = ee(e.tabHistory).remove(t.id),
          r = e.tabs;
        if ((r.splice(r.indexOf(t), 1), n.count() > 0)) {
          if (t.id === e.selectedTabId) {
            var a = n.getFirst(),
              i = r.find(function (e) {
                return e.id === a;
              });
            if (((e.selectedTabId = i.id), C(i))) {
              var o = e.collections.find(function (e) {
                return (
                  (e.documents &&
                    void 0 !==
                      e.documents.find(function (e) {
                        return e.id === i.id;
                      })) ||
                  !1
                );
              });
              o
                ? ((e.selectedNodeId = i.id), (o.expanded = !0))
                : delete e.selectedNodeId;
            } else
              k(i) || j(i)
                ? (e.selectedNodeId = i.id)
                : delete e.selectedNodeId;
          }
        } else {
          var c = U();
          r.push(c),
            n.setFirst(c.id),
            (e.selectedTabId = c.id),
            delete e.selectedNodeId;
        }
        e.tabHistory = n.toArray();
      }
      function he(e) {
        return function (t) {
          var n = t.workspaces.find(function (e) {
            return e.id === t.selectedWorkspaceId;
          });
          if (n) {
            var r = n.collections.find(function (t) {
              return t.id === e;
            });
            if (r) {
              if (
                (n.collections.splice(n.collections.indexOf(r), 1), r.documents)
              ) {
                var a,
                  i = Object(u.a)(r.documents);
                try {
                  var o = function () {
                    var e = a.value,
                      t = n.tabs.find(function (t) {
                        return t.id === e.id;
                      });
                    t && pe(n, t);
                  };
                  for (i.s(); !(a = i.n()).done; ) o();
                } catch (c) {
                  i.e(c);
                } finally {
                  i.f();
                }
              }
              r.id === n.selectedNodeId && delete n.selectedNodeId;
            }
          }
        };
      }
      function ve(e, t) {
        return function (n) {
          var r = n.workspaces.find(function (e) {
            return e.id === n.selectedWorkspaceId;
          });
          if (r) {
            var a = r.collections.find(function (t) {
              return t.id === e;
            });
            a && (a.name = t);
          }
        };
      }
      function be(e, t) {
        return (
          (t.length > 0 &&
            e.find(function (e) {
              return e.id === t[0];
            })) ||
          void 0
        );
      }
      function ge(e, t, n) {
        var r = e.tabs.find(function (e) {
            return e.id === t.id;
          }),
          a =
            (e.selectedTabId &&
              e.tabs.findIndex(function (t) {
                return t.id === e.selectedTabId;
              })) ||
            -1,
          i = ee(e.tabHistory).setFirst(t.id);
        if (((e.selectedTabId = t.id), r)) n || delete r.preview;
        else {
          var o = U(t);
          if (n) {
            var c = e.tabs.find(function (e) {
              return !0 === e.preview;
            });
            c
              ? (i.remove(c.id), e.tabs.splice(e.tabs.indexOf(c), 1, o))
              : -1 !== a
              ? e.tabs.splice(a + 1, 0, o)
              : e.tabs.push(o),
              (o.preview = !0);
          } else -1 !== a ? e.tabs.splice(a + 1, 0, o) : e.tabs.push(o);
        }
        (be(e.collections, t.path).expanded = !0),
          (e.selectedNodeId = t.id),
          (e.tabHistory = i.toArray());
      }
      function xe(e, t) {
        return function (n) {
          var r = n.workspaces.find(function (e) {
            return e.id === n.selectedWorkspaceId;
          });
          if (r) {
            var a = r.collections.find(function (t) {
              return t.id === e;
            });
            if (a)
              if (
                ((a.documents = a.documents || []),
                !a.documents.find(function (e) {
                  return e.name.toLowerCase() === t.toLowerCase();
                }))
              ) {
                var i = (function (e, t) {
                  var n = A();
                  return {
                    id: n,
                    name: e,
                    request: q(),
                    timestamp: Object(Z.e)(),
                    path: [t, n],
                  };
                })(t, a.id);
                a.documents.push(i),
                  a.documents.sort(G),
                  (r.selectedNodeId = i.id),
                  ge(r, i, !0);
              }
          }
        };
      }
      function ye(e, t, n) {
        return function (r) {
          var a = r.workspaces.find(function (e) {
            return e.id === r.selectedWorkspaceId;
          });
          if (a) {
            var i = a.collections.find(function (t) {
              return t.name.toLowerCase() === e.toLowerCase();
            });
            if (
              (i || ((i = Q(e)), a.collections.push(i), a.collections.sort(G)),
              (i.documents = i.documents || []),
              !i.documents.find(function (e) {
                return (
                  e.id === t.id || e.name.toLowerCase() === t.name.toLowerCase()
                );
              }))
            ) {
              var o = k(t) ? A() : t.id,
                c = {
                  id: o,
                  name: t.name,
                  request: t.draft,
                  timestamp: Object(Z.e)(),
                  path: [i.id, o],
                },
                u = a.tabs.find(function (e) {
                  return e.id === t.id;
                });
              i.documents.push(c),
                i.documents.sort(G),
                n
                  ? pe(a, u)
                  : ((u.id = o),
                    (u.name = t.name),
                    (u.kind = "document"),
                    delete u.new,
                    delete u.hasChanges,
                    (i.expanded = !0),
                    (a.tabHistory = ee(a.tabHistory)
                      .remove(t.id)
                      .setFirst(o)
                      .toArray()),
                    (a.selectedTabId = o),
                    (a.selectedNodeId = o));
            }
          }
        };
      }
      function Ee(e) {
        return e.reduce(function (e, t) {
          return e.concat(t.documents || []);
        }, []);
      }
      function Ce(e) {
        return function (t) {
          var n = t.workspaces.find(function (e) {
            return e.id === t.selectedWorkspaceId;
          });
          if (n) {
            var r = Ee(n.collections).find(function (t) {
              return t.id === e;
            });
            if (r) {
              var a = be(n.collections, r.path);
              a.documents.splice(a.documents.indexOf(r), 1);
              var i = n.tabs.find(function (t) {
                return t.id === e;
              });
              i && pe(n, i);
            }
          }
        };
      }
      function Oe(e, t) {
        return function (n) {
          var r = n.workspaces.find(function (e) {
            return e.id === n.selectedWorkspaceId;
          });
          if (r) {
            var a = Ee(r.collections).find(function (t) {
              return t.id === e;
            });
            if (a) {
              (a.name = t),
                r.collections
                  .find(function (e) {
                    return (e.documents && -1 !== e.documents.indexOf(a)) || !1;
                  })
                  .documents.sort(G);
              var i = r.tabs.find(function (t) {
                return t.id === e;
              });
              i && (i.name = t);
            }
          }
        };
      }
      function ke(e) {
        var t = e.workspaces.find(function (t) {
          return t.id === e.selectedWorkspaceId;
        });
        t && (t.history = []);
      }
      function je(e) {
        return function (t) {
          t.settings.documentHeaderCollapsed = e;
        };
      }
      function we(e) {
        return function (t) {
          t.settings.footerCollapsed = e;
        };
      }
      function Le(e) {
        return function (t) {
          t.settings.footerHeight = e;
        };
      }
      function He(e) {
        return e.workspaces.find(function (t) {
          return t.id === e.selectedWorkspaceId;
        });
      }
      function Se(e) {
        var t = He(e);
        return t.tabs.find(function (e) {
          return e.id === t.selectedTabId;
        });
      }
      function Te(e) {
        var t = Se(e);
        return e.selectedFooterItemId && O(t)
          ? e.selectedFooterItemId
          : "console";
      }
      function Ie(e) {
        return function (t) {
          t.settings.resultDetailWidth = e;
        };
      }
      function Me(e) {
        return function (t) {
          var n = t.workspaces.find(function (e) {
            return e.id === t.selectedWorkspaceId;
          });
          if (n) {
            var r = n.tabs.find(function (t) {
              return t.id === e;
            });
            r && pe(n, r);
          }
        };
      }
      function Ve(e) {
        var t = e.workspaces.find(function (t) {
          return t.id === e.selectedWorkspaceId;
        });
        if (t) {
          var n = U();
          t.tabs.push(n),
            (t.tabHistory = ee(t.tabHistory).setFirst(n.id).toArray()),
            (t.selectedTabId = n.id);
        }
      }
      function ze(e, t) {
        return function (n) {
          var r = n.workspaces.find(function (e) {
            return e.id === n.selectedWorkspaceId;
          });
          if (r) {
            var a = Ee(r.collections).find(function (t) {
              return t.id === e;
            });
            a && ge(r, a, t);
          }
        };
      }
      function _e(e, t) {
        return function (n) {
          var r = n.workspaces.find(function (e) {
            return e.id === n.selectedWorkspaceId;
          });
          if (r) {
            var a = r.history.find(function (t) {
              return t.id === e;
            });
            if (a) {
              var i = r.tabs.find(function (t) {
                  return t.id === e;
                }),
                o = ee(r.tabHistory).setFirst(a.id);
              if (((r.selectedNodeId = a.id), (r.selectedTabId = a.id), i))
                t || delete i.preview;
              else {
                var c = (function (e) {
                  var t = e.id,
                    n = e.name,
                    r = e.operationName,
                    a = e.request;
                  return {
                    id: t,
                    name: r || n,
                    kind: "history",
                    draft: r
                      ? Object(F.a)(
                          Object(F.a)({}, a),
                          {},
                          { operationName: r }
                        )
                      : a,
                  };
                })(a);
                if (t) {
                  var u = r.tabs.find(function (e) {
                    return !0 === e.preview;
                  });
                  u
                    ? (o.remove(u.id), r.tabs.splice(r.tabs.indexOf(u), 1, c))
                    : r.tabs.push(c),
                    (c.preview = !0);
                } else r.tabs.push(c);
              }
              r.tabHistory = o.toArray();
            }
          }
        };
      }
      function Be(e, t, n) {
        return function (r) {
          var a = r.workspaces.find(function (e) {
            return e.id === r.selectedWorkspaceId;
          });
          if (a) {
            var i = a.tabs.find(function (t) {
                return t.id === e.id;
              }),
              o = ee(a.tabHistory).setFirst(e.id);
            if (((a.selectedTabId = e.id), i)) n || delete i.preview;
            else {
              var c = (function (e, t, n) {
                return {
                  id: e.id,
                  name: e.name,
                  kind: "schema",
                  schemaEndpoint: t.schemaEndpoint,
                  httpMethod: t.httpMethod,
                  httpHeaders: t.httpHeaders,
                  credentials: t.credentials,
                  breadCrumbs: [{ id: e.id }],
                  infoPath: [{ id: e.id }],
                  infoPosition: 0,
                  preview: n,
                };
              })(e, t, n);
              if (n) {
                var u = a.tabs.find(function (e) {
                  return !0 === e.preview;
                });
                u
                  ? (o.remove(u.id), a.tabs.splice(a.tabs.indexOf(u), 1, c))
                  : a.tabs.push(c),
                  (c.preview = !0);
              } else a.tabs.push(c);
            }
            (a.selectedNodeId = e.id), (a.tabHistory = o.toArray());
          }
        };
      }
      function Ne(e) {
        return function (t) {
          var n = "preferences",
            r = t.workspaces.find(function (e) {
              return e.id === t.selectedWorkspaceId;
            });
          if (r) {
            var a = r.tabs.find(function (e) {
                return e.id === n;
              }),
              i = ee(r.tabHistory).setFirst(n);
            if (((r.selectedTabId = n), a)) e || delete a.preview;
            else {
              var o = (function (e, t, n) {
                return {
                  id: e,
                  name: "Preferences",
                  kind: "preferences",
                  content: t ? JSON.stringify(t, null, 2) : void 0,
                  preview: n,
                };
              })(n, t.preferences, e);
              if (e) {
                var c = r.tabs.find(function (e) {
                  return !0 === e.preview;
                });
                c
                  ? (i.remove(c.id), r.tabs.splice(r.tabs.indexOf(c), 1, o))
                  : r.tabs.push(o),
                  (o.preview = !0);
              } else r.tabs.push(o);
            }
            (r.selectedNodeId = n), (r.tabHistory = i.toArray());
          }
        };
      }
      function Re(e) {
        var t = e.workspaces.find(function (t) {
          return t.id === e.selectedWorkspaceId;
        });
        if (t) {
          var n = t.tabs.find(function (e) {
            return e.id === t.selectedTabId;
          });
          n && O(n) && (n.subscriptionRunning = !0);
        }
      }
      var Pe = n(179),
        De = new ((function () {
          function e() {
            Object(l.a)(this, e),
              (this.subject = new H.a(Object(L.a)({}, function () {}))),
              this.initialize();
          }
          return (
            Object(s.a)(e, [
              {
                key: "initialize",
                value: function () {
                  var e = this;
                  g.registerReceiveMessageHandler("log", function (t) {
                    var n = t.payload,
                      r = n.tabId,
                      a = n.level,
                      i = n.message,
                      o = n.details;
                    e.append(r, a, i, o);
                  });
                },
              },
              {
                key: "clear",
                value: function (e) {
                  this.subject.next(
                    Object(L.a)(this.subject.value, function (t) {
                      delete t[e];
                    })
                  );
                },
              },
              {
                key: "error",
                value: function (e, t, n) {
                  this.append(e, Pe.LogLevel.error, t, n);
                },
              },
              {
                key: "get",
                value: function (e) {
                  return this.subject.value[e];
                },
              },
              {
                key: "info",
                value: function (e, t, n) {
                  this.append(e, Pe.LogLevel.info, t, n);
                },
              },
              {
                key: "warning",
                value: function (e, t, n) {
                  this.append(e, Pe.LogLevel.warning, t, n);
                },
              },
              {
                key: "append",
                value: function (e, t, n, r) {
                  this.subject.next(
                    Object(L.a)(this.subject.value, function (a) {
                      var i = {
                        id: Object(Z.b)(),
                        level: t,
                        message: n,
                        timestamp: Object(Z.e)(),
                        details: r,
                      };
                      a[e]
                        ? ((a[e].entries = [].concat(
                            Object(X.a)(a[e].entries),
                            [i]
                          )),
                          a[e].selectNewest
                            ? ((a[e].hasNewEntries = !1),
                              (a[e].selectedId = i.id),
                              (a[e].selectNewest = !0))
                            : (a[e].hasNewEntries = !0))
                        : (a[e] = {
                            tabId: e,
                            hasNewEntries: !1,
                            entries: [i],
                            scrollPosition: 0,
                            selectedId: i.id,
                            selectNewest: !0,
                          });
                    })
                  );
                },
              },
              {
                key: "setScrollPosition",
                value: function (e, t) {
                  this.subject.next(
                    Object(L.a)(this.subject.value, function (n) {
                      if (n[e] && t !== n[e].scrollPosition) {
                        var r = n[e].selectNewest && t >= n[e].scrollPosition;
                        (n[e].scrollPosition = t), (n[e].selectNewest = r);
                      }
                    })
                  );
                },
              },
              {
                key: "setSelectedId",
                value: function (e, t) {
                  this.subject.next(
                    Object(L.a)(this.subject.value, function (n) {
                      n[e] &&
                        n[e].selectedId !== t &&
                        (n[e].hasNewEntries &&
                          n[e].entries[n[e].entries.length - 1].id === t &&
                          (n[e].hasNewEntries = !1),
                        (n[e].selectedId = t),
                        (n[e].selectNewest = !1));
                    })
                  );
                },
              },
              {
                key: "setSelectNewest",
                value: function (e, t) {
                  this.subject.next(
                    Object(L.a)(this.subject.value, function (n) {
                      n[e] &&
                        (t &&
                          n[e].entries.length > 0 &&
                          ((n[e].hasNewEntries = !1),
                          (n[e].selectedId =
                            n[e].entries[n[e].entries.length - 1].id)),
                        (n[e].selectNewest = t));
                    })
                  );
                },
              },
              {
                key: "subscribe",
                value: function (e, t) {
                  return this.subject
                    .pipe(
                      Object(M.a)(function (t) {
                        return t[e];
                      }),
                      Object(V.a)()
                    )
                    .subscribe(function (e) {
                      t(e);
                    });
                },
              },
              {
                key: "subscribeToSelected",
                value: function (e, t) {
                  return this.subject
                    .pipe(
                      Object(M.a)(function (t) {
                        return (
                          (t[e] &&
                            t[e].selectedId &&
                            t[e].entries.find(function (n) {
                              return n.id === t[e].selectedId;
                            })) ||
                          void 0
                        );
                      }),
                      Object(V.a)()
                    )
                    .subscribe(function (e) {
                      t(e);
                    });
                },
              },
            ]),
            e
          );
        })())(),
        Ze = n(57),
        Ae = new ((function () {
          function e() {
            Object(l.a)(this, e),
              (this.sessionValue = {
                documentId: "",
                httpMethod: "POST",
                schemaEndpoint: "",
              }),
              (this.hash = "");
          }
          return (
            Object(s.a)(e, [
              {
                key: "update",
                value: function (e) {
                  var t = this.hash;
                  (this.sessionValue = e(this.sessionValue)),
                    (this.hash = Object(Z.a)(
                      JSON.stringify(this.sessionValue)
                    )),
                    this.hash !== t &&
                      g.sendMessage(
                        new Ze.Message({
                          type: "set-session",
                          payload: this.sessionValue,
                        })
                      );
                },
              },
              {
                key: "session",
                get: function () {
                  return this.sessionValue;
                },
              },
            ]),
            e
          );
        })())(),
        Fe = new ((function () {
          function e() {
            Object(l.a)(this, e),
              (this.existsSet = new Set()),
              (this.operationsSubject = new H.a([])),
              this.initialize();
          }
          return (
            Object(s.a)(e, [
              {
                key: "initialize",
                value: function () {
                  var e = this;
                  g.registerReceiveMessageHandler(
                    "document-operations-update",
                    function (t) {
                      var n = t.payload;
                      e.operationsSubject.next(n);
                    }
                  );
                },
              },
              {
                key: "delete",
                value: function () {
                  g.sendMessage(
                    new Ze.Message({
                      payload: void 0,
                      type: "document-cache-delete-item",
                    })
                  ),
                    this.existsSet.delete(Ae.session.documentId);
                },
              },
              {
                key: "exists",
                value: function () {
                  return this.existsSet.has(Ae.session.documentId);
                },
              },
              {
                key: "set",
                value: function (e) {
                  g.sendMessage(
                    new Ze.Message({
                      payload: e,
                      type: "document-cache-set-item",
                    })
                  ),
                    this.existsSet.add(Ae.session.documentId);
                },
              },
              {
                key: "subscribeOperations",
                value: function (e) {
                  return this.operationsSubject.subscribe(e);
                },
              },
              {
                key: "operations",
                get: function () {
                  return this.operationsSubject.value;
                },
              },
            ]),
            e
          );
        })())(),
        We = new ((function () {
          function e() {
            Object(l.a)(this, e), (this.existsSet = new Set());
          }
          return (
            Object(s.a)(e, [
              {
                key: "delete",
                value: function () {
                  g.sendMessage(
                    new Ze.Message({
                      type: "http-headers-cache-delete-item",
                      payload: void 0,
                    })
                  ),
                    this.existsSet.delete(Ae.session.documentId);
                },
              },
              {
                key: "exists",
                value: function () {
                  return this.existsSet.has(Ae.session.documentId);
                },
              },
              {
                key: "set",
                value: function (e) {
                  g.sendMessage(
                    new Ze.Message({
                      type: "http-headers-cache-set-item",
                      payload: e,
                    })
                  ),
                    this.existsSet.add(Ae.session.documentId);
                },
              },
            ]),
            e
          );
        })())(),
        qe = new ((function () {
          function e() {
            Object(l.a)(this, e),
              (this.schemaInfoSubject = new H.a({
                endpoint: Ae.session.schemaEndpoint,
                exists: !1,
                hasMutationType: !1,
                hasSubscriptionType: !1,
              })),
              this.initialize();
          }
          return (
            Object(s.a)(e, [
              {
                key: "initialize",
                value: function () {
                  var e = this;
                  g.registerReceiveMessageHandler("schema-update", function (
                    t
                  ) {
                    var n = t.payload;
                    e.schemaInfoSubject.next(n);
                  });
                },
              },
              {
                key: "getCompletionItems",
                value: function (e, t) {
                  return g.sendAndReceiveMessage(
                    new Ze.Message({
                      type: "auto-suggestions",
                      payload: { content: e, cursor: t },
                    })
                  );
                },
              },
              {
                key: "getDiagnostics",
                value: function (e) {
                  return g.sendAndReceiveMessage(
                    new Ze.Message({ type: "diagnostics", payload: e })
                  );
                },
              },
              {
                key: "getHoverInformation",
                value: function (e, t) {
                  return g.sendAndReceiveMessage(
                    new Ze.Message({
                      type: "hover-information",
                      payload: { content: e, cursor: t },
                    })
                  );
                },
              },
              {
                key: "subscribeToSchemaInfoChange",
                value: function (e) {
                  return this.schemaInfoSubject.subscribe(e);
                },
              },
              {
                key: "observable",
                get: function () {
                  return this.schemaInfoSubject.asObservable();
                },
              },
            ]),
            e
          );
        })())(),
        Ke = new ((function () {
          function e() {
            Object(l.a)(this, e),
              (this.isExecutingSubject = new H.a(!1)),
              (this.isSubscriptionSubject = new H.a(!1)),
              this.initialize();
          }
          return (
            Object(s.a)(e, [
              {
                key: "initialize",
                value: function () {
                  var e = this;
                  g.registerReceiveMessageHandler(
                    "operation-execution",
                    function (t) {
                      var n = t.payload;
                      e.isExecutingSubject.next(n.isExecuting),
                        e.isSubscriptionSubject.next(n.isSubscription);
                    }
                  );
                },
              },
              {
                key: "cancel",
                value: function () {
                  g.sendMessage(
                    new Ze.Message({
                      payload: void 0,
                      type: "cancel-operation-execution",
                    })
                  );
                },
              },
              {
                key: "execute",
                value: function (e) {
                  g.sendMessage(
                    new Ze.Message({
                      payload: { operationName: e },
                      type: "begin-operation-execution",
                    })
                  );
                },
              },
              {
                key: "isExecuting",
                get: function () {
                  return this.isExecutingSubject.asObservable();
                },
              },
              {
                key: "isSubscription",
                get: function () {
                  return this.isSubscriptionSubject.asObservable();
                },
              },
            ]),
            e
          );
        })())(),
        Ue = new ((function () {
          function e() {
            Object(l.a)(this, e),
              (this.subject = new H.a(Object(L.a)({}, function () {}))),
              this.initialize();
          }
          return (
            Object(s.a)(e, [
              {
                key: "initialize",
                value: function () {
                  var e = this;
                  g.registerReceiveMessageHandler("new-result", function (t) {
                    var n = t.payload,
                      r = n.documentId,
                      a = n.result;
                    e.append(r, a);
                  });
                },
              },
              {
                key: "append",
                value: function (e, t) {
                  this.subject.next(
                    Object(L.a)(this.subject.value, function (n) {
                      var r = Object(Z.b)(),
                        a = Object(F.a)({ id: r }, t);
                      n[e]
                        ? ((n[e].results = [].concat(
                            Object(X.a)(n[e].results),
                            [a]
                          )),
                          n[e].selectNewest ||
                          "mutation" === t.operationType ||
                          "query" === t.operationType
                            ? ((n[e].hasNewResults = !1),
                              (n[e].selectedId = a.id),
                              (n[e].selectNewest = !0))
                            : (n[e].hasNewResults = !0))
                        : (n[e] = {
                            documentId: e,
                            hasNewResults: !1,
                            results: [a],
                            scrollPosition: 0,
                            selectedId: a.id,
                            selectNewest: !0,
                          });
                    })
                  );
                },
              },
              {
                key: "get",
                value: function (e) {
                  return this.subject.value[e];
                },
              },
              {
                key: "setScrollPosition",
                value: function (e, t) {
                  this.subject.next(
                    Object(L.a)(this.subject.value, function (n) {
                      if (n[e] && t !== n[e].scrollPosition) {
                        var r = n[e].selectNewest && t >= n[e].scrollPosition;
                        (n[e].scrollPosition = t), (n[e].selectNewest = r);
                      }
                    })
                  );
                },
              },
              {
                key: "setSelectedId",
                value: function (e, t) {
                  this.subject.next(
                    Object(L.a)(this.subject.value, function (n) {
                      n[e] &&
                        n[e].selectedId !== t &&
                        (n[e].hasNewResults &&
                          n[e].results[n[e].results.length - 1].id === t &&
                          (n[e].hasNewResults = !1),
                        (n[e].selectedId = t),
                        (n[e].selectNewest = !1));
                    })
                  );
                },
              },
              {
                key: "setSelectNewest",
                value: function (e, t) {
                  this.subject.next(
                    Object(L.a)(this.subject.value, function (n) {
                      n[e] &&
                        (t &&
                          n[e].results.length > 0 &&
                          ((n[e].hasNewResults = !1),
                          (n[e].selectedId =
                            n[e].results[n[e].results.length - 1].id)),
                        (n[e].selectNewest = t));
                    })
                  );
                },
              },
              {
                key: "subscribe",
                value: function (e, t) {
                  return this.subject
                    .pipe(
                      Object(M.a)(function (t) {
                        return t[e];
                      }),
                      Object(V.a)()
                    )
                    .subscribe(function (e) {
                      t(e);
                    });
                },
              },
              {
                key: "subscribeToSelected",
                value: function (e, t) {
                  return this.subject
                    .pipe(
                      Object(M.a)(function (t) {
                        return (
                          (t[e] &&
                            t[e].selectedId &&
                            t[e].results.find(function (n) {
                              return n.id === t[e].selectedId;
                            })) ||
                          void 0
                        );
                      }),
                      Object(V.a)()
                    )
                    .subscribe(function (e) {
                      t(e);
                    });
                },
              },
            ]),
            e
          );
        })())(),
        Je = new ((function () {
          function e() {
            Object(l.a)(this, e),
              (this.cache = new Map()),
              (this.schemaInfo = void 0),
              this.initialize();
          }
          return (
            Object(s.a)(e, [
              {
                key: "initialize",
                value: function () {
                  var e = this;
                  qe.subscribeToSchemaInfoChange(function (t) {
                    (e.schemaInfo = t), e.cache.clear();
                  });
                },
              },
              {
                key: "getField",
                value: (function () {
                  var e = Object(B.a)(
                    _.a.mark(function e(t, n) {
                      var r, a;
                      return _.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.schemaInfo && this.schemaInfo.exists) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return", void 0);
                              case 2:
                                if (
                                  ((r = "field-".concat(t, "-").concat(n)),
                                  !this.cache.has(r))
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                return e.abrupt("return", this.cache.get(r));
                              case 5:
                                return (
                                  (e.next = 7),
                                  g.sendAndReceiveMessage(
                                    new Ze.Message({
                                      type: "fetch-schema-field-type",
                                      payload: { typeName: t, fieldName: n },
                                    })
                                  )
                                );
                              case 7:
                                return (
                                  (a = e.sent),
                                  this.cache.set(r, a),
                                  e.abrupt("return", a)
                                );
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getFields",
                value: (function () {
                  var e = Object(B.a)(
                    _.a.mark(function e(t) {
                      var n, r;
                      return _.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.schemaInfo && this.schemaInfo.exists) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return", void 0);
                              case 2:
                                if (
                                  ((n = "fields-".concat(t)),
                                  !this.cache.has(n))
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                return e.abrupt("return", this.cache.get(n));
                              case 5:
                                return (
                                  (e.next = 7),
                                  g.sendAndReceiveMessage(
                                    new Ze.Message({
                                      type: "fetch-schema-field-types",
                                      payload: t,
                                    })
                                  )
                                );
                              case 7:
                                return (
                                  (r = e.sent),
                                  this.cache.set(n, r),
                                  e.abrupt("return", r)
                                );
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getRootTypes",
                value: (function () {
                  var e = Object(B.a)(
                    _.a.mark(function e() {
                      var t, n;
                      return _.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.schemaInfo && this.schemaInfo.exists) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return", void 0);
                              case 2:
                                if (((t = "root-types"), !this.cache.has(t))) {
                                  e.next = 5;
                                  break;
                                }
                                return e.abrupt("return", this.cache.get(t));
                              case 5:
                                return (
                                  (e.next = 7),
                                  g.sendAndReceiveMessage(
                                    new Ze.Message({
                                      type: "fetch-schema-types",
                                      payload: void 0,
                                    })
                                  )
                                );
                              case 7:
                                return (
                                  (n = e.sent),
                                  this.cache.set(t, n),
                                  e.abrupt("return", n)
                                );
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getType",
                value: (function () {
                  var e = Object(B.a)(
                    _.a.mark(function e(t) {
                      var n, r;
                      return _.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.schemaInfo && this.schemaInfo.exists) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return", void 0);
                              case 2:
                                if (
                                  ((n = "type-".concat(t)), !this.cache.has(n))
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                return e.abrupt("return", this.cache.get(n));
                              case 5:
                                return (
                                  (e.next = 7),
                                  g.sendAndReceiveMessage(
                                    new Ze.Message({
                                      type: "fetch-schema-type",
                                      payload: t,
                                    })
                                  )
                                );
                              case 7:
                                return (
                                  (r = e.sent),
                                  this.cache.set(n, r),
                                  e.abrupt("return", r)
                                );
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e
          );
        })())(),
        Qe = new ((function () {
          function e() {
            Object(l.a)(this, e),
              (this.isFetchingSubject = new H.a(!1)),
              this.initialize();
          }
          return (
            Object(s.a)(e, [
              {
                key: "initialize",
                value: function () {
                  var e = this;
                  g.registerReceiveMessageHandler(
                    "is-schema-fetching",
                    function (t) {
                      var n = t.payload;
                      e.isFetchingSubject.next(n);
                    }
                  );
                },
              },
              {
                key: "cancel",
                value: function () {
                  g.sendMessage(
                    new Ze.Message({
                      type: "cancel-schema-fetching",
                      payload: void 0,
                    })
                  );
                },
              },
              {
                key: "fetch",
                value: function () {
                  g.sendMessage(
                    new Ze.Message({ type: "fetch-schema", payload: void 0 })
                  );
                },
              },
              {
                key: "refetch",
                value: function () {
                  g.sendMessage(
                    new Ze.Message({ type: "refetch-schema", payload: void 0 })
                  );
                },
              },
              {
                key: "isFetching",
                get: function () {
                  return this.isFetchingSubject.asObservable();
                },
              },
            ]),
            e
          );
        })())(),
        Ge = new ((function () {
          function e() {
            Object(l.a)(this, e), (this.existsSet = new Set());
          }
          return (
            Object(s.a)(e, [
              {
                key: "delete",
                value: function () {
                  var e = Ae.session.documentId;
                  g.sendMessage(
                    new Ze.Message({
                      payload: { documentId: e },
                      type: "variables-cache-delete-item",
                    })
                  ),
                    this.existsSet.delete(e);
                },
              },
              {
                key: "exists",
                value: function () {
                  return this.existsSet.has(Ae.session.documentId);
                },
              },
              {
                key: "set",
                value: function (e) {
                  var t = Ae.session.documentId;
                  g.sendMessage(
                    new Ze.Message({
                      payload: { documentId: t, variables: e },
                      type: "variables-cache-set-item",
                    })
                  ),
                    this.existsSet.add(t);
                },
              },
            ]),
            e
          );
        })())(),
        Ye = n(392),
        Xe = n.n(Ye),
        $e = n(315);
      function et(e, t, n) {
        if (O(n)) {
          var r = Ee(t.collections).find(function (e) {
            return e.id === n.id;
          });
          r && ((r.request = n.draft), delete n.hasChanges);
        }
        if (w(n)) {
          if (
            !(function (e, t) {
              if (t && t.length > 0)
                try {
                  var n = JSON.parse(t),
                    r = new Xe.a();
                  !0 === r.validate($e, n) && (e.preferences = n),
                    r.errors &&
                      De.error(
                        "preferences",
                        "Preferences couldn't be saved due to schema violations.",
                        Object(X.a)(r.errors)
                      );
                } catch (a) {
                  return (
                    De.error(
                      "preferences",
                      "Preferences couldn't be saved due to syntax issues.",
                      a
                    ),
                    !1
                  );
                }
              else delete e.preferences;
              return !0;
            })(e, n.content)
          )
            return !1;
          delete n.hasChanges;
        }
        return !0;
      }
      function tt(e) {
        var t = e.workspaces.find(function (t) {
          return t.id === e.selectedWorkspaceId;
        });
        if (t) {
          var n = t.tabs.find(function (e) {
            return e.id === t.selectedTabId;
          });
          n && et(e, t, n) && pe(t, n);
        }
      }
      function nt(e) {
        var t = e.workspaces.find(function (t) {
          return t.id === e.selectedWorkspaceId;
        });
        if (t) {
          var n = t.tabs.find(function (e) {
            return e.id === t.selectedTabId;
          });
          n && et(e, t, n);
        }
      }
      function rt(e) {
        var t = e.workspaces.find(function (t) {
          return t.id === e.selectedWorkspaceId;
        });
        if (t) {
          var n = t.tabs.find(function (e) {
            return e.id === t.selectedTabId;
          });
          n && O(n) && delete n.subscriptionRunning;
        }
      }
      function at(e) {
        return function (t) {
          var n = t.workspaces.find(function (e) {
              return e.id === t.selectedWorkspaceId;
            }),
            r =
              n &&
              n.tabs.find(function (e) {
                return e.id === n.selectedTabId;
              });
          r &&
            O(r) &&
            r.showSubscriptionEndpoint !== e &&
            (e
              ? (r.showSubscriptionEndpoint = !0)
              : delete r.showSubscriptionEndpoint);
        };
      }
      function it(e) {
        return function (t) {
          var n = t.workspaces.find(function (e) {
            return e.id === t.selectedWorkspaceId;
          });
          if (n) {
            var r = n.tabs.find(function (e) {
              return e.id === n.selectedTabId;
            });
            r && O(r) && e(r);
          }
        };
      }
      function ot(e) {
        return function (t) {
          var n = t.workspaces.find(function (e) {
            return e.id === t.selectedWorkspaceId;
          });
          if (n) {
            var r = n.tabs.find(function (e) {
              return e.id === n.selectedTabId;
            });
            r && j(r) && e(r);
          }
        };
      }
      function ct(e) {
        return function (t) {
          var n = t.workspaces.find(function (e) {
            return e.id === t.selectedWorkspaceId;
          });
          if (n) {
            var r = n.tabs.find(function (e) {
              return e.id === n.selectedTabId;
            });
            if (r && O(r)) {
              var a = r.draft.hash;
              if (
                (e(r.draft), (r.draft.hash = W(r.draft)), a !== r.draft.hash)
              ) {
                if (k(r)) {
                  var i = n.history.find(function (e) {
                    return e.id === r.id;
                  });
                  r.hasChanges = i.request.hash !== r.draft.hash;
                }
                if (C(r))
                  if (r.new) {
                    var o = q();
                    r.hasChanges = o.hash !== r.draft.hash;
                  } else {
                    var c = Ee(n.collections).find(function (e) {
                      return e.id === r.id;
                    });
                    r.hasChanges = c.request.hash !== r.draft.hash;
                  }
                delete r.preview;
              }
            }
          }
        };
      }
      function ut(e) {
        return function (t) {
          var n = t.workspaces.find(function (e) {
            return e.id === t.selectedWorkspaceId;
          });
          n && (n.documentSearchTerm = e);
        };
      }
      function lt(e) {
        return function (t) {
          var n = t.workspaces.find(function (e) {
            return e.id === t.selectedWorkspaceId;
          });
          n && (n.historySearchTerm = e);
        };
      }
      function st(e) {
        return function (t) {
          var n = t.workspaces.find(function (e) {
            return e.id === t.selectedWorkspaceId;
          });
          n && (n.schemaSearchTerm = e);
        };
      }
      function dt(e) {}
      var ft = new ((function () {
          function e() {
            var t = this;
            Object(l.a)(this, e),
              (this.initializedSubject = new H.a(!1)),
              (this.state = new H.a(
                Object(L.a)(
                  {
                    selectedNavigationItemId: E.QueryDocuments,
                    selectedDocumentHeaderItemId: y.HttpHeaders,
                    settings: {
                      footerCollapsed: !0,
                      footerHeight: 200,
                      documentHeaderCollapsed: !0,
                      documentHeaderHeight: 200,
                      resultWidth: 300,
                      resultDetailWidth: 300,
                      sideBarCollapsed: !1,
                      sideBarWidth: 300,
                    },
                    workspaces: [],
                  },
                  dt
                )
              )),
              (this.initializer = new S.a(function (e) {
                (function () {
                  return R.apply(this, arguments);
                })().then(function (n) {
                  n
                    ? e.next(
                        Object(L.a)(n, function (e) {
                          e.workspaces.find(function (t) {
                            return t.id === e.selectedWorkspaceId;
                          });
                        })
                      )
                    : e.next(Object(L.a)(t.state.value, J)),
                    t.state.pipe(Object(T.a)(250)).subscribe(function (e) {
                      t.initializedSubject.value
                        ? (function (e) {
                            P.apply(this, arguments);
                          })(
                            (function (e) {
                              return Object(L.a)(e, function (e) {
                                var t,
                                  n = Object(u.a)(e.workspaces);
                                try {
                                  for (n.s(); !(t = n.n()).done; ) {
                                    var r,
                                      a = t.value,
                                      i = Object(u.a)(a.tabs.filter(O));
                                    try {
                                      for (i.s(); !(r = i.n()).done; ) {
                                        delete r.value.subscriptionRunning;
                                      }
                                    } catch (o) {
                                      i.e(o);
                                    } finally {
                                      i.f();
                                    }
                                  }
                                } catch (o) {
                                  n.e(o);
                                } finally {
                                  n.f();
                                }
                              });
                            })(e)
                          )
                        : t.initializedSubject.next(!0);
                    });
                });
              })),
              (this.observable = this.initializer.pipe(
                Object(I.a)(this.state)
              )),
              (this.subscription = this.observable.connect()),
              this.initialize();
          }
          return (
            Object(s.a)(e, [
              {
                key: "initialize",
                value: function () {
                  var e = this;
                  g.registerReceiveMessageHandler("new-history-item", function (
                    t
                  ) {
                    var n = t.payload,
                      r = n.documentId,
                      a = n.operationFailed,
                      i = n.operationName,
                      o = n.operationType;
                    e.dispatch(
                      (function (e, t, n, r) {
                        return function (a) {
                          var i = a.workspaces.find(function (e) {
                            return e.id === a.selectedWorkspaceId;
                          });
                          if (i) {
                            var o = i.tabs.find(function (t) {
                              return t.id === e;
                            });
                            o &&
                              O(o) &&
                              i.history.unshift({
                                id: A(),
                                originId: o.id,
                                name: o.name,
                                operationName: r,
                                operationType: n,
                                request: o.draft,
                                failed: t,
                                timestamp: Object(Z.e)(),
                              });
                          }
                        };
                      })(r, a, o, i)
                    );
                  });
                },
              },
              {
                key: "current",
                value: function (e) {
                  return e(this.state.value);
                },
              },
              {
                key: "dispatch",
                value: function (e) {
                  var t = this.state.value,
                    n = Object(L.a)(t, e);
                  t !== n && this.state.next(n);
                },
              },
              {
                key: "select",
                value: function (e) {
                  return this.observable.pipe(Object(M.a)(e), Object(V.a)());
                },
              },
              {
                key: "initialized",
                get: function () {
                  return this.initializedSubject.asObservable();
                },
              },
            ]),
            e
          );
        })())(),
        mt = n(23);
      function pt() {
        var e = Object(r.useState)(!1),
          t = Object(mt.a)(e, 2),
          n = t[0],
          a = t[1];
        return (
          Object(r.useEffect)(function () {
            var e = ft.initialized.subscribe(a);
            return function () {
              return e.unsubscribe();
            };
          }, []),
          n
        );
      }
      function ht(e) {
        var t = Object(r.useState)(ft.current(e)),
          n = Object(mt.a)(t, 2),
          a = n[0],
          i = n[1];
        return (
          Object(r.useEffect)(
            function () {
              var t = ft.select(e).subscribe(i);
              return function () {
                return t.unsubscribe();
              };
            },
            [e]
          ),
          a
        );
      }
      function vt(e) {
        return e.selectedDocumentHeaderItemId;
      }
      function bt(e) {
        var t = Se(e);
        return O(t) ? t.draft.httpHeaders : void 0;
      }
      function gt(e) {
        var t = Se(e);
        return O(t) ? t.draft.credentials : void 0;
      }
      function xt(e) {
        return e.selectedNavigationItemId;
      }
      function yt(e) {
        return He(e).selectedNodeId;
      }
      function Et(e) {
        var t = Se(e);
        if (C(t)) return t.activeQueryResultTabId;
      }
      function Ct(e) {
        var t = Se(e);
        if (j(t)) return t.breadCrumbs;
      }
      function Ot(e) {
        var t = Se(e);
        return O(t) ? t.draft.schemaEndpoint : j(t) ? t.schemaEndpoint : void 0;
      }
      function kt(e) {
        var t = Se(e);
        if (C(t)) return t.activeSubscriptionResultTabId;
      }
      function jt(e) {
        return He(e).selectedTabId;
      }
      function wt(e) {
        var t = He(e);
        return t.tabs.find(function (e) {
          return e.id === t.selectedTabId;
        }).kind;
      }
      function Lt(e) {
        var t = Se(e);
        if (O(t)) {
          var n = t.draft.variableSets.find(function (e) {
            return e.id === t.draft.selectedVariableSetId;
          });
          return n && n.variables;
        }
      }
      function Ht(e) {
        return He(e).collections;
      }
      function St(e) {
        return He(e).history;
      }
      function Tt(e) {
        return He(e).tabs;
      }
      function It(e) {
        return e.settings.footerCollapsed;
      }
      function Mt(e) {
        return e.settings.footerHeight || 200;
      }
      function Vt(e) {
        return e.settings.documentHeaderCollapsed;
      }
      function zt(e) {
        return e.settings.documentHeaderHeight;
      }
      function _t(e) {
        return e.settings.resultDetailWidth || 300;
      }
      function Bt(e) {
        var t;
        return (
          (null === (t = e.preferences) || void 0 === t
            ? void 0
            : t.resultOrientation) || "vertical"
        );
      }
      function Nt(e) {
        return (
          ("vertical" === Bt(e)
            ? e.settings.resultWidth
            : e.settings.resultHeight) || 200
        );
      }
      function Rt(e) {
        return e.settings.schemaInfoWidth || 200;
      }
      function Pt(e) {
        var t;
        return (
          (null === (t = e.preferences) || void 0 === t
            ? void 0
            : t.showTracingExtension) || !1
        );
      }
      function Dt(e) {
        return e.settings.sideBarCollapsed;
      }
      function Zt(e) {
        var t;
        return (
          (null === (t = e.preferences) || void 0 === t
            ? void 0
            : t.sideBarLocation) || "left"
        );
      }
      function At(e) {
        return e.settings.sideBarWidth;
      }
      function Ft(e) {
        var t;
        return (
          (null === (t = e.preferences) || void 0 === t
            ? void 0
            : t.zoomFactor) || 1
        );
      }
      function Wt(e) {
        return He(e).documentSearchTerm;
      }
      function qt(e) {
        return He(e).historySearchTerm;
      }
      function Kt(e) {
        return He(e).schemaSearchTerm;
      }
      var Ut = n(210),
        Jt = Ut,
        Qt = Jt.default,
        Gt = (Jt.css, Jt.createGlobalStyle),
        Yt = Jt.keyframes,
        Xt = Jt.ThemeProvider,
        $t = Jt.withTheme,
        en = Qt,
        tn = {
          headerBgColor: "#232d38",
          mainBgColor: "#ffffff",
          mainBorder: "#959595",
          createFieldBg: "#2d3e4f",
          createFieldBorder: "#0781ba",
          blue: "#048fcf",
          cyan: "#18e7c2",
          green: "#21c996",
          orange: "#ec5300",
          red: "#ee093b",
          rose: "#e04a98",
          yellow: "#f0ab05",
          resultBgColor: "#cccccc",
          contentBorder: "#959595",
          contentBorderLight: "#ccc",
          controlTextColor: "#5a5a5a",
          controlTextActiveColor: "#ecedef",
          textColor: "#5a5a5a",
          dialogButtonBg: "#1e4d7d",
          dialogButtonBgDisabled: "#959595",
          dialogButtonBgHover: "#232d38",
          dialogButtonText: "#ffffff",
          dialogButtonTextDisabled: "#1e4d7d",
          dialogButtonTextHover: "#ffffff",
          dialogContentBg: "#eaeaea",
          dialogContentText: "#333333",
          dialogHeaderBg: "#1e4d7d",
          dialogHeaderText: "#ffffff",
          contextMenuBg: "#ffffff",
          contextMenuBorder: "#959595",
          contextMenuText: "#5a5a5a",
          contextMenuItemBgActive: "#dfdfdf",
          contextMenuItemTextActive: "#5a5a5a",
          navBgColor: "#1e4d7d",
          navBgColor2: "#3a6da2",
          navItemText: "#ffffff",
          navItemActiveBgColor: "#4f85b3",
          sideBarBg: "#eaeaea",
          sideBarFooterBg: "#eaeaea",
          sideBarFooterBorder: "#1e4d7d",
          sideBarHeaderBg: "#1e4d7d",
          sideBarHeaderText: "#ffffff",
          sideBarSearchBg: "#dfdfdf",
          sideBarText: "#333333",
          treeHoverBg: "#dfdfdf",
          treeSelectedBg: "#ffffff",
          tabsBg: "#2d3e4f",
          tabsBg2: "#435b75",
          tabBgActive: "#ffffff",
          tabText: "#ffffff",
          tabTextActive: "#2d3e4f",
          contentTabsBg: "#eaeaea",
          contentTabBgActive: "#ffffff",
          contentTabText: "#5a5a5a",
          contentTabTextActive: "#5a5a5a",
          annotationToken: "#bba617",
          commentToken: "#b3b3b3",
          delimiterToken: "#87777f",
          identifierToken: "#b25145",
          keywordToken: "#048fcf",
          numberToken: "#1c51a1",
          operatorToken: "#048fcf",
          stringToken: "#119023",
          typeToken: "#e18416",
        },
        nn = n(58),
        rn = n(396),
        an = n.n(rn),
        on = n(397),
        cn = n.n(on);
      function un() {
        var e = Object(c.a)([
          '\n  body,\n  html,\n  #root {\n    width: 100vw;\n    height: 100vh;\n    font-size: 12px;\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    user-select: none;\n    font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,\n      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n    font-size: 1em;\n    font-weight: normal;\n  }\n\n  *:focus {\n    outline: none;\n  }\n\n  button {\n    cursor: pointer;\n    background-color: transparent;\n    border: 0 none;\n  }\n\n  strong {\n    font-weight: bold;\n  }\n\n  ::-webkit-scrollbar {\n    width: 10px;\n    height: 10px;\n  }\n\n  ::-webkit-scrollbar-track {\n    background-color: ',
          ";\n  }\n\n  *::-webkit-scrollbar-thumb {\n    transition: background-color 0.2s ease;\n  }\n\n  *:hover::-webkit-scrollbar-thumb {\n    background-color: ",
          ";\n  }\n",
        ]);
        return (
          (un = function () {
            return e;
          }),
          e
        );
      }
      var ln = Gt(
        un(),
        function (e) {
          return e.theme.sideBarSearchBg;
        },
        function (e) {
          return e.theme.navBgColor;
        }
      );
      function sn() {
        var e = Object(c.a)(["\n  flex: 0 0 1px;\n  background: ", ";\n"]);
        return (
          (sn = function () {
            return e;
          }),
          e
        );
      }
      function dn() {
        var e = Object(c.a)(["\n  display: ", ";\n  ", "\n"]);
        return (
          (dn = function () {
            return e;
          }),
          e
        );
      }
      function fn() {
        var e = Object(c.a)([
          "\n  display: none;\n  position: absolute;\n  z-index: 5;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  cursor: ",
          ";\n",
        ]);
        return (
          (fn = function () {
            return e;
          }),
          e
        );
      }
      function mn() {
        var e = Object(c.a)([
          "\n  position: absolute;\n  z-index: 10;\n  ",
          "\n",
        ]);
        return (
          (mn = function () {
            return e;
          }),
          e
        );
      }
      function pn() {
        var e = Object(c.a)([
          "\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: ",
          ";\n",
        ]);
        return (
          (pn = function () {
            return e;
          }),
          e
        );
      }
      var hn,
        vn = Object(r.memo)(function (e) {
          var t =
              e.asideCollapsable && e.asideCollapsed ? 0 : e.asideSize || 300,
            n = Object(r.useRef)(null),
            o = Object(r.useRef)(null),
            c = Object(r.useRef)(null),
            u = e.asideSize || 300,
            l = te(function (t) {
              e.onAsideSizeChange && e.onAsideSizeChange(t);
            }),
            s = function () {
              var t = c.current;
              return "horizontal" === e.orientation
                ? t.offsetHeight
                : t.offsetWidth;
            },
            d = function (t) {
              var r = c.current,
                a = n.current;
              (r.style.flexBasis = t + "px"),
                (a.style.top = null),
                (a.style.right = null),
                (a.style.bottom = null),
                (a.style.left = null),
                "horizontal" === e.orientation
                  ? "pane-a" === e.mainPane
                    ? (a.style.bottom = t - p() + "px")
                    : (a.style.top = t - p() + "px")
                  : "pane-a" === e.mainPane
                  ? (a.style.right = t - p() + "px")
                  : (a.style.left = t - p() + "px");
            },
            f = function () {
              return c.current.parentElement;
            },
            m = function () {
              var t = f();
              return "horizontal" === e.orientation
                ? t.offsetHeight
                : t.offsetWidth;
            },
            p = function () {
              var t = n.current;
              return "horizontal" === e.orientation
                ? t.offsetHeight / 2
                : t.offsetWidth / 2;
            },
            h = function (t) {
              var n = e.id,
                r = e.mainPane,
                a = e.orientation,
                i = f().getBoundingClientRect(),
                o = i.width,
                c = i.height,
                u = new CustomEvent("splitterchange", {
                  detail: {
                    id: n,
                    asideCollapsed: 0 === s(),
                    asideSize: t,
                    dimension: { width: o, height: c },
                    mainPane: r,
                    orientation: a,
                  },
                });
              window.dispatchEvent(u);
            };
          return (
            Object(r.useEffect)(function () {
              var r = n.current;
              d(t), h(t);
              var a = function () {
                var t = s(),
                  n = m();
                if (
                  ("horizontal" === e.orientation
                    ? "pane-a" === e.mainPane
                      ? ne(r) + p()
                      : ie(r) + p()
                    : "pane-a" === e.mainPane
                    ? ae(r) + p()
                    : re(r) + p()) > 0 &&
                  n - t < 200
                ) {
                  var a = n - 200;
                  d(a), h(a);
                } else h(u);
              };
              return (
                window.addEventListener("resize", a),
                function () {
                  window.removeEventListener("resize", a);
                }
              );
            }),
            a.a.createElement(
              bn,
              { orientation: e.orientation },
              "pane-a" === e.mainPane
                ? a.a.createElement(
                    yn,
                    { isMain: !0, orientation: e.orientation },
                    e.paneAContent
                  )
                : a.a.createElement(
                    yn,
                    { ref: c, size: t, orientation: e.orientation },
                    e.paneAContent
                  ),
              !e.asideCollapsed &&
                e.showSeparator &&
                a.a.createElement(En, null),
              a.a.createElement(gn, {
                ref: n,
                orientation: e.orientation,
                onMouseDown: function (t) {
                  if ((t.preventDefault(), 0 === t.button)) {
                    var n = (function () {
                        var t = c.current;
                        return "horizontal" === e.orientation
                          ? "pane-a" === e.mainPane
                            ? ne(t)
                            : ie(t)
                          : "pane-a" === e.mainPane
                          ? ae(t)
                          : re(t);
                      })(),
                      r = m(),
                      a = o.current;
                    s() > 0 && (u = s()), (a.style.display = "block");
                    var i = function (e) {
                        return r - e > 200;
                      },
                      f = function (t) {
                        t.preventDefault();
                        var r =
                          "horizontal" === e.orientation
                            ? "pane-a" === e.mainPane
                              ? window.innerHeight - n - t.clientY
                              : t.clientY - n
                            : "pane-a" === e.mainPane
                            ? window.innerWidth - n - t.clientX
                            : t.clientX - n;
                        e.asideCollapsable
                          ? r < 120
                            ? (d(0),
                              l(u),
                              e.onAsideCollapsedChange &&
                                e.onAsideCollapsedChange(!0),
                              h(u))
                            : r < 150
                            ? (d(150),
                              l(150),
                              e.onAsideCollapsedChange &&
                                e.onAsideCollapsedChange(!1),
                              h(150))
                            : i(r) && (d(r), l(r), h(r))
                          : r < 150
                          ? (d(150), l(150), h(150))
                          : i(r) && (d(r), l(r), h(r));
                      },
                      p = function () {
                        (a.style.display = "none"),
                          document.removeEventListener("mousemove", f),
                          document.removeEventListener("mouseup", p),
                          (f = void 0),
                          (p = void 0);
                      };
                    document.addEventListener("mousemove", f),
                      document.addEventListener("mouseup", p);
                  }
                },
              }),
              "pane-b" === e.mainPane
                ? a.a.createElement(
                    yn,
                    { isMain: !0, orientation: e.orientation },
                    e.paneBContent
                  )
                : a.a.createElement(
                    yn,
                    { ref: c, size: t, orientation: e.orientation },
                    e.paneBContent
                  ),
              Object(i.createPortal)(
                a.a.createElement(xn, { ref: o, orientation: e.orientation }),
                document.getElementById("components")
              )
            )
          );
        }),
        bn = en.div(pn(), function (e) {
          return "horizontal" === e.orientation ? "column" : "row";
        }),
        gn = en.div(mn(), function (e) {
          return "horizontal" === e.orientation
            ? "\n        right: 0;\n        left: 0;\n        cursor: ns-resize;\n        height: 6px;\n      "
            : "\n        top: 0;\n        bottom: 0;\n        cursor: ew-resize;\n        width: 6px;\n      ";
        }),
        xn = en.div(fn(), function (e) {
          return "horizontal" === e.orientation ? "ns-resize" : "ew-resize";
        }),
        yn = en.div(
          dn(),
          function (e) {
            return e.isMain || 0 !== e.size ? "flex" : "none";
          },
          function (e) {
            return e.isMain
              ? "\n        flex: 1 1 auto;\n      "
              : e.size
              ? "\n        flex: 0 0 ".concat(e.size, "px;\n      ")
              : "\n        flex: 0 0 auto;\n      ";
          }
        ),
        En = en.div(sn(), function (e) {
          return e.theme.contentBorder;
        }),
        Cn = Object(r.memo)(function (e) {
          return a.a.createElement(vn, {
            id: e.id,
            asideCollapsable: e.asideCollapsable,
            asideCollapsed: e.asideCollapsed,
            asideSize: e.asideHeight,
            mainPane: "top" === e.mainPane ? "pane-a" : "pane-b",
            onAsideSizeChange: e.onAsideHeightChange,
            onAsideCollapsedChange: e.onAsideCollapsedChange,
            orientation: "horizontal",
            paneAContent: e.topContent,
            paneBContent: e.bottomContent,
            showSeparator: e.showSeparator,
          });
        });
      !(function (e) {
        (e.Document = "document"),
          (e.DocumentContent = "document-content"),
          (e.DocumentHeader = "document-header"),
          (e.Main = "main"),
          (e.Preferences = "preferences"),
          (e.Results = "results"),
          (e.Schema = "schema"),
          (e.SchemaContent = "schema-content");
      })(hn || (hn = {}));
      var On = hn,
        kn = Object(r.memo)(function (e) {
          return a.a.createElement(vn, {
            id: e.id,
            asideCollapsable: e.asideCollapsable,
            asideCollapsed: e.asideCollapsed,
            asideSize: e.asideWidth,
            mainPane: "left" === e.mainPane ? "pane-a" : "pane-b",
            onAsideSizeChange: e.onAsideWidthChange,
            onAsideCollapsedChange: e.onAsideCollapsedChange,
            orientation: "vertical",
            paneAContent: e.leftContent,
            paneBContent: e.rightContent,
            showSeparator: e.showSeparator,
          });
        });
      function jn() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  overflow-y: auto;\n",
        ]);
        return (
          (jn = function () {
            return e;
          }),
          e
        );
      }
      var wn = en.main(jn());
      function Ln(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "horizontal";
        function n(e) {
          return ("horizontal" === t && 0 === e.deltaY) ||
            ("vertical" === t && 0 !== e.deltaX)
            ? e.deltaX
            : e.deltaY;
        }
        function r() {}
        function a(r) {
          r.preventDefault();
          var a = n(r);
          "horizontal" === t ? (e.scrollTop += a) : (e.scrollLeft += a);
        }
        return (
          e.addEventListener("wheel", a, { passive: !1 }),
          window.addEventListener("resize", r),
          function () {
            e.removeEventListener("wheel", a),
              window.removeEventListener("resize", r);
          }
        );
      }
      var Hn = n(192);
      function Sn() {
        var e = Object(c.a)([
          "\n  position: relative;\n  color: ",
          ";\n  cursor: pointer;\n  transition: background-color 0.2s ease, color 0.2s ease;\n\n  &:hover {\n    color: ",
          ";\n    background-color: ",
          ";\n    ",
          "\n  }\n\n  & > .react-contexify__item__content {\n    position: relative;\n    display: flex;\n    flex: 1 1 auto;\n    flex-direction: row;\n    padding: 6px 12px;\n    white-space: nowrap;\n  }\n\n  & > .react-contexify__submenu {\n    position: absolute;\n    top: 0;\n    pointer-events: none;\n    transition: opacity 0.2s ease;\n  }\n",
        ]);
        return (
          (Sn = function () {
            return e;
          }),
          e
        );
      }
      var Tn = Object(r.memo)(function (e) {
          return a.a.createElement(In, e);
        }),
        In = en(Hn.Item)(
          Sn(),
          function (e) {
            return e.disabled
              ? e.theme.contextMenuBorder
              : e.theme.contextMenuText;
          },
          function (e) {
            return e.disabled
              ? e.theme.contextMenuBorder
              : e.theme.contextMenuItemTextActive;
          },
          function (e) {
            return e.disabled ? "transparent" : e.theme.contextMenuItemBgActive;
          },
          function (e) {
            return (
              !e.disabled &&
              "\n      & > .react-contexify__submenu {\n        pointer-events: initial;\n        opacity: 1;\n      }\n    "
            );
          }
        );
      function Mn() {
        var e = Object(c.a)([
          "\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  z-index: 2;\n  box-sizing: border-box;\n  border: 1px solid ",
          ";\n  min-width: 180px;\n  opacity: 0;\n  user-select: none;\n  background-color: ",
          ";\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.4);\n",
        ]);
        return (
          (Mn = function () {
            return e;
          }),
          e
        );
      }
      var Vn,
        zn = Object(r.memo)(function (e) {
          return a.a.createElement(_n, e);
        }),
        _n = en(Hn.Menu)(
          Mn(),
          function (e) {
            return e.theme.contextMenuBorder;
          },
          function (e) {
            return e.theme.contextMenuBg;
          }
        );
      !(function (e) {
        (e.Collection = "collection"),
          (e.Document = "document"),
          (e.Tabs = "tabs");
      })(Vn || (Vn = {}));
      var Bn = Vn;
      function Nn() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 30px;\n  flex-direction: row;\n  align-items: center;\n  border-top: 1px solid ",
          ";\n  background-color: ",
          ";\n",
        ]);
        return (
          (Nn = function () {
            return e;
          }),
          e
        );
      }
      en.footer(
        Nn(),
        function (e) {
          return e.theme.contentBorder;
        },
        function (e) {
          return e.theme.mainBgColor;
        }
      );
      function Rn() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  background-color: ",
          ";\n",
        ]);
        return (
          (Rn = function () {
            return e;
          }),
          e
        );
      }
      en.div(Rn(), function (e) {
        return e.theme.mainBgColor;
      });
      function Pn(e) {
        var t = e.draft.variableSets.find(function (t) {
          return t.id === e.draft.selectedVariableSetId;
        });
        return t && t.variables;
      }
      var Dn = n(111);
      function Zn() {
        var e = Object(c.a)(["\n  ", "\n"]);
        return (
          (Zn = function () {
            return e;
          }),
          e
        );
      }
      var An = en(Dn.a)(Zn(), function (e) {
        return e.color && "color: ".concat(e.theme[e.color], ";");
      });
      function Fn() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  justify-content: center;\n  align-self: center;\n  padding: 0 20px;\n  color: ",
          ";\n",
        ]);
        return (
          (Fn = function () {
            return e;
          }),
          e
        );
      }
      en.div(Fn(), function (e) {
        return e.theme.textColor;
      });
      function Wn() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 12px;\n  align-items: center;\n  justify-content: center;\n  height: 12px;\n  color: ",
          ";\n  font-size: 11px;\n  line-height: 14px;\n  font-weight: bold;\n  text-align: center;\n  border-radius: 2px;\n",
        ]);
        return (
          (Wn = function () {
            return e;
          }),
          e
        );
      }
      var qn = en.div(Wn(), function (e) {
        return e.theme.sideBarBg;
      });
      function Kn() {
        var e = Object(c.a)([
          "\n  border: 1px solid ",
          ";\n  color: ",
          ';\n\n  &::before {\n    content: "M";\n  }\n',
        ]);
        return (
          (Kn = function () {
            return e;
          }),
          e
        );
      }
      var Un = en(qn)(
        Kn(),
        function (e) {
          return e.theme.red;
        },
        function (e) {
          return e.theme.red;
        }
      );
      function Jn() {
        var e = Object(c.a)([
          "\n  border: 1px solid ",
          ";\n  color: ",
          ';\n\n  &::before {\n    content: "Q";\n  }\n',
        ]);
        return (
          (Jn = function () {
            return e;
          }),
          e
        );
      }
      var Qn = en(qn)(
        Jn(),
        function (e) {
          return e.theme.blue;
        },
        function (e) {
          return e.theme.blue;
        }
      );
      function Gn() {
        var e = Object(c.a)([
          "\n  border: 1px solid ",
          ";\n  color: ",
          ';\n\n  &::before {\n    content: "S";\n  }\n',
        ]);
        return (
          (Gn = function () {
            return e;
          }),
          e
        );
      }
      var Yn = en(qn)(
        Gn(),
        function (e) {
          return e.theme.green;
        },
        function (e) {
          return e.theme.green;
        }
      );
      function Xn() {
        var e = Object(c.a)([
          '\n  flex: 1 1 auto;\n  height: 100%;\n\n  * {\n    font-family: "Fira Code", Menlo, Monaco, Consolas, "Courier New", monospace;\n    font-weight: 500;\n    overflow: initial;\n    user-select: initial;\n  }\n',
        ]);
        return (
          (Xn = function () {
            return e;
          }),
          e
        );
      }
      var $n = en.div(Xn());
      function er(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var tr = (function () {
        function e(t, n) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.line = t),
            (this.character = n);
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: "lessThanOrEqualTo",
              value: function (e) {
                return (
                  this.line < e.line ||
                  (this.line === e.line && this.character <= e.character)
                );
              },
            },
          ]) && er(t.prototype, n),
          r && er(t, r),
          e
        );
      })();
      function nr(e) {
        return nn.languages.registerCompletionItemProvider("graphql", {
          provideCompletionItems: (function () {
            var t = Object(B.a)(
              _.a.mark(function t(n, r) {
                var a, i;
                return _.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (e && e.exists) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt("return", { suggestions: [] });
                      case 2:
                        return (
                          (t.next = 4),
                          qe.getCompletionItems(
                            n.getValue(),
                            new tr(r.lineNumber - 1, r.column - 1)
                          )
                        );
                      case 4:
                        return (
                          (a = t.sent),
                          (i = a.map(function (e) {
                            var t = e.label;
                            return {
                              label: t,
                              kind: e.kind,
                              detail: e.detail,
                              documentation: e.documentation,
                              insertText: t,
                            };
                          })),
                          t.abrupt("return", { suggestions: i })
                        );
                      case 7:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e, n) {
              return t.apply(this, arguments);
            };
          })(),
        });
      }
      var rr = n(402);
      function ar(e, t, n) {
        if (t.length > 0)
          try {
            return Fe.set(Object(rr.a)(t)), !0;
          } catch (r) {
            return (
              Fe.delete(),
              n &&
                De.error(
                  e,
                  "The Document couldn't be parsed. Please go to the query editor and fix syntax issues.",
                  r
                ),
              !1
            );
          }
        return !1;
      }
      function ir(e, t, n) {
        if (t && t.length > 0)
          try {
            We.set(JSON.parse(t));
          } catch (r) {
            return (
              We.delete(),
              n &&
                De.error(
                  e,
                  "HTTP headers couldn't be parsed. Please go to the HTTP header editor and fix syntax issues.",
                  r
                ),
              !1
            );
          }
        else We.delete();
        return !0;
      }
      function or(e, t, n) {
        if (t && t.length > 0)
          try {
            Ge.set(JSON.parse(t));
          } catch (r) {
            return (
              Ge.delete(),
              n &&
                De.error(
                  e,
                  "Variables couldn't be parsed. Please go to the variable editor and fix syntax issues.",
                  r
                ),
              !1
            );
          }
        else Ge.delete();
        return !0;
      }
      function cr(e) {
        var t = ft.current(Se);
        if (O(t)) {
          var n = Pn(t);
          ir(t.id, t.draft.httpHeaders, !0) &&
            or(t.id, n, !0) &&
            ar(t.id, t.draft.document, !0) &&
            Ke.execute(e);
        }
      }
      function ur(e) {
        return nn.languages.registerCodeLensProvider("graphql", {
          provideCodeLenses: function (t) {
            var n = t
              .findMatches(
                ".*(mutation|query|subscription){1}\\s*([_a-zA-Z][_a-zA-Z0-9]*){1}",
                !0,
                !0,
                !0,
                null,
                !0
              )
              .filter(function (e) {
                return (
                  e.matches &&
                  3 === e.matches.length &&
                  !/#.*(mutation|query|subscription)/.test(e.matches[0])
                );
              });
            return n.length > 0
              ? {
                  lenses: n.map(function (t) {
                    return {
                      command: {
                        id:
                          ((n = t),
                          e.addCommand(
                            -1,
                            Object(B.a)(
                              _.a.mark(function e() {
                                return _.a.wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        n.matches &&
                                          3 === n.matches.length &&
                                          cr(n.matches[2]);
                                      case 1:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            )
                          )),
                        title: "Execute",
                      },
                      range: t.range,
                    };
                    var n;
                  }),
                  dispose: function () {},
                }
              : { lenses: [], dispose: function () {} };
          },
        });
      }
      function lr(e) {
        return nn.languages.registerHoverProvider("graphql", {
          provideHover: (function () {
            var t = Object(B.a)(
              _.a.mark(function t(n, r) {
                var a;
                return _.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (e && e.exists) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt("return", { contents: [] });
                      case 2:
                        return (
                          (t.next = 4),
                          qe.getHoverInformation(
                            n.getValue(),
                            new tr(r.lineNumber - 1, r.column - 1)
                          )
                        );
                      case 4:
                        if ((a = t.sent)) {
                          t.next = 7;
                          break;
                        }
                        return t.abrupt("return", void 0);
                      case 7:
                        if (!Array.isArray(a)) {
                          t.next = 9;
                          break;
                        }
                        return t.abrupt("return", {
                          contents: a.map(function (e) {
                            return {
                              value: "string" === typeof e ? e : e.value,
                            };
                          }),
                        });
                      case 9:
                        return t.abrupt("return", {
                          contents: [
                            { value: "string" === typeof a ? a : a.value },
                          ],
                        });
                      case 10:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e, n) {
              return t.apply(this, arguments);
            };
          })(),
        });
      }
      n(344);
      function sr(e) {
        return dr.apply(this, arguments);
      }
      function dr() {
        return (dr = Object(B.a)(
          _.a.mark(function e(t) {
            var n;
            return _.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        qe.getDiagnostics(t.getValue())
                      );
                    case 3:
                      (n = e.sent),
                        nn.editor.setModelMarkers(t, "graphql", n),
                        (e.next = 9);
                      break;
                    case 7:
                      (e.prev = 7), (e.t0 = e.catch(0));
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 7]]
            );
          })
        )).apply(this, arguments);
      }
      var fr = Object(r.memo)(function (e) {
        var t = (function () {
            var e = Object(r.useState)(void 0),
              t = Object(mt.a)(e, 2),
              n = t[0],
              a = t[1];
            return (
              Object(r.useEffect)(function () {
                var e,
                  t = ft.select(Ot).subscribe(function (t) {
                    e && e(),
                      (e = g.registerReceiveMessageHandler(
                        "schema-update",
                        function (e) {
                          var n = e.payload;
                          t === n.endpoint && a(n);
                        }
                      ));
                  });
                return function () {
                  t.unsubscribe(), e && e();
                };
              }, []),
              n
            );
          })(),
          n = (function (e, t) {
            var n = Object(r.useRef)(null);
            return (
              Object(r.useEffect)(
                function () {
                  var r = n.current,
                    a = {
                      contextmenu: !1,
                      minimap: { enabled: !1 },
                      model: e,
                      showFoldingControls: "always",
                      fixedOverflowWidgets: !0,
                      theme: "light",
                      fontSize: 13,
                    },
                    i = nn.editor.create(r, a),
                    o = [
                      nr(t),
                      nn.languages.registerDocumentFormattingEditProvider(
                        "graphql",
                        {
                          provideDocumentFormattingEdits: function (e, t) {
                            var n = e.getFullModelRange(),
                              r = {
                                printWidth: 80,
                                tabWidth: t.tabSize,
                                useTabs: !t.insertSpaces,
                              };
                            return [{ range: n, text: me(e.getValue(), r) }];
                          },
                        }
                      ),
                      ur(i),
                      lr(t),
                    ];
                  function c() {
                    var e = r.parentElement.getBoundingClientRect();
                    (i.getLayoutInfo().width === e.width &&
                      i.getLayoutInfo().height === e.height) ||
                      i.layout({ width: e.width, height: e.height });
                  }
                  return (
                    i.onKeyUp(function (e) {
                      e.altKey ||
                        e.ctrlKey ||
                        e.metaKey ||
                        !e.shiftKey ||
                        e.keyCode !== nn.KeyCode.KEY_8 ||
                        i.trigger(
                          "editor",
                          "editor.action.triggerSuggest",
                          null
                        );
                    }),
                    window.addEventListener("splitterchange", c),
                    function () {
                      window.removeEventListener("splitterchange", c),
                        o.forEach(function (e) {
                          return e.dispose();
                        }),
                        i.dispose();
                    }
                  );
                },
                [e, t]
              ),
              n
            );
          })(
            (function (e, t) {
              var n = Object(r.useRef)(nn.editor.createModel("", "graphql")),
                a = e.content,
                i = e.onContentChange;
              return (
                n.current.updateOptions({ insertSpaces: !0, tabSize: 2 }),
                Object(r.useEffect)(
                  function () {
                    var e = te(function (e) {
                      i && i(e.getValue());
                    });
                    n.current.getValue() !== a && n.current.setValue(a || "");
                    var t = n.current.onDidChangeContent(function () {
                      e(n.current);
                    });
                    return function () {
                      t.dispose();
                    };
                  },
                  [n, a, i]
                ),
                Object(r.useEffect)(
                  function () {
                    var e = te(
                      (function () {
                        var e = Object(B.a)(
                          _.a.mark(function e(t) {
                            return _.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (e.next = 2), sr(t);
                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                      500
                    );
                    e(n.current);
                    var t = n.current.onDidChangeContent(function () {
                      e(n.current);
                    });
                    return function () {
                      t.dispose();
                    };
                  },
                  [n, t]
                ),
                n.current
              );
            })(e, t),
            t
          );
        return a.a.createElement($n, { ref: n });
      });
      function mr(e, t) {
        var n,
          r = nn.languages.json.jsonDefaults.diagnosticsOptions,
          a = Object(F.a)(
            Object(F.a)({}, r),
            {},
            { validate: !0, schemas: r.schemas || [] }
          ),
          i = Object(u.a)(t);
        try {
          var o = function () {
            var t = n.value,
              r = t.schema,
              i = t.uri;
            a.schemas.some(function (e) {
              return e.uri === i;
            }) ||
              a.schemas.push({ uri: i, fileMatch: [e.toString()], schema: r });
          };
          for (i.s(); !(n = i.n()).done; ) o();
        } catch (c) {
          i.e(c);
        } finally {
          i.f();
        }
        return (
          nn.languages.json.jsonDefaults.setDiagnosticsOptions(a),
          function () {
            var e,
              n = Object(u.a)(t);
            try {
              var r = function () {
                var t = e.value.uri,
                  n = a.schemas.find(function (e) {
                    return e.uri === t;
                  });
                if (n) {
                  var r = a.schemas.indexOf(n);
                  -1 !== r && a.schemas.splice(r, 1);
                }
              };
              for (n.s(); !(e = n.n()).done; ) r();
            } catch (c) {
              n.e(c);
            } finally {
              n.f();
            }
            nn.languages.json.jsonDefaults.setDiagnosticsOptions(a);
          }
        );
      }
      n(291);
      var pr = Object(r.memo)(function (e) {
        var t = (function (e) {
          var t = Object(r.useRef)(null);
          return (
            Object(r.useEffect)(
              function () {
                var n = t.current,
                  r = {
                    contextmenu: !1,
                    minimap: { enabled: !1 },
                    model: e,
                    readOnly: !0,
                    showFoldingControls: "always",
                    fixedOverflowWidgets: !0,
                    theme: "light",
                    fontSize: 13,
                  },
                  a = nn.editor.create(n, r),
                  i = a.onDidChangeModelContent(function (e) {
                    a.setScrollPosition({ scrollLeft: 0, scrollTop: 0 });
                  });
                function o() {
                  var e = n.parentElement.getBoundingClientRect();
                  a.layout({ width: e.width, height: e.height });
                }
                return (
                  window.addEventListener("splitterchange", o),
                  function () {
                    window.removeEventListener("splitterchange", o),
                      i.dispose(),
                      a.dispose();
                  }
                );
              },
              [e]
            ),
            t
          );
        })(
          (function (e) {
            var t = Object(r.useRef)(nn.editor.createModel("", "json")),
              n = e.id;
            return (
              t.current.updateOptions({ insertSpaces: !0, tabSize: 2 }),
              Object(r.useEffect)(
                function () {
                  var e = Ue.subscribeToSelected(n, function (e) {
                    var n,
                      r,
                      a,
                      i = ft.current(Pt) || !1,
                      o =
                        ((null === e || void 0 === e ? void 0 : e.payload) &&
                          ("request" in e.payload
                            ? e.payload.response.parsedBody
                            : e.payload.raw)) ||
                        void 0;
                    !i &&
                      (null === (n = o) ||
                      void 0 === n ||
                      null === (r = n.extensions) ||
                      void 0 === r
                        ? void 0
                        : r.tracing) &&
                      (((o = Object(F.a)({}, o)).extensions = Object(F.a)(
                        {},
                        o.extensions
                      )),
                      delete o.extensions.tracing),
                      (null === (a = o) || void 0 === a
                        ? void 0
                        : a.extensions) &&
                        0 === Object.keys(o.extensions).length &&
                        delete o.extensions;
                    var c = (o && JSON.stringify(o, null, 2)) || "";
                    t.current.setValue(c);
                  });
                  return function () {
                    e.unsubscribe();
                  };
                },
                [n]
              ),
              t.current
            );
          })(e)
        );
        return a.a.createElement($n, { ref: t });
      });
      function hr() {
        var e = Object(r.useRef)(null),
          t = Object(r.useRef)(null);
        return (
          Object(r.useEffect)(function () {
            var n = e.current,
              r = t.current,
              a = function (e) {
                0 !== n.scrollTop && "" === r.style.boxShadow
                  ? (r.style.boxShadow = "0px 1px 3px 0px rgba(0,0,0,0.3)")
                  : 0 === n.scrollTop &&
                    "" !== r.style.boxShadow &&
                    (r.style.boxShadow = "");
              };
            return (
              n.addEventListener("scroll", a),
              function () {
                n.removeEventListener("scroll", a);
              }
            );
          }, []),
          [e, t]
        );
      }
      var vr = $t(
        Object(r.memo)(function (e) {
          var t = e.children,
            n = e.color,
            r = e.defaultColor,
            i = e.size,
            o = e.theme,
            c = (function (e) {
              switch (e) {
                case "x2":
                  return 24;
                case "x3":
                  return 32;
                default:
                  return 16;
              }
            })(i),
            u = r;
          return (
            n && (u = "string" === typeof n ? n : n(o)),
            a.a.createElement(
              "svg",
              {
                width: c,
                height: c,
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              t(u)
            )
          );
        })
      );
      var br = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.textColor, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d:
                    "M5.99999 3.29291L1 8.29289L1 9L5.99999 14L6.7071 13.2929L2.56066 9.14645L14.7678 9.14645L14.7678 8.14645L2.56066 8.14646L6.7071 4.00002L5.99999 3.29291Z",
                  fill: e,
                });
              }
            );
          })
        ),
        gr = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.textColor, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d:
                    "M10 13.7071L15 8.70711L15 8L10 3L9.2929 3.70711L13.4393 7.85355L1.23224 7.85355L1.23224 8.85355L13.4393 8.85355L9.2929 13L10 13.7071Z",
                  fill: e,
                });
              }
            );
          })
        ),
        xr = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.textColor, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d:
                    "M14.5 2H9L8.65002 2.15002L8 2.79004L7.34998 2.15002L7 2H1.5L1 2.5V12.5L1.5 13H6.78998L7.65002 13.85H8.34998L9.21002 13H14.5L15 12.5V2.5L14.5 2ZM7.5 12.3199L7.32001 12.15L7 12H2V3H6.78998L7.53003 3.73999L7.5 12.3199ZM14 12H9L8.65002 12.15L8.51001 12.28V3.69995L9.21002 3H14V12ZM6 5H3V6H6V5ZM6 9H3V10H6V9ZM3 7H6V8H3V7ZM13 5H10V6H13V5ZM10 7H13V8H10V7ZM10 9H13V10H10V9Z",
                  fill: e,
                });
              }
            );
          })
        ),
        yr = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.textColor, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d:
                    "M14.5 2H13V1H12V2H4V1H3V2H1.5L1 2.5V14.5L1.5 15H14.5L15 14.5V2.5L14.5 2ZM14 14H2V5H14V14ZM14 4H2V3H14V4ZM4 8H3V9H4V8ZM3 10H4V11H3V10ZM4 12H3V13H4V12ZM6 8H7V9H6V8ZM7 10H6V11H7V10ZM6 12H7V13H6V12ZM7 6H6V7H7V6ZM9 8H10V9H9V8ZM10 10H9V11H10V10ZM9 12H10V13H9V12ZM10 6H9V7H10V6ZM12 8H13V9H12V8ZM13 10H12V11H13V10ZM12 6H13V7H12V6Z",
                  fill: e,
                });
              }
            );
          })
        ),
        Er = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.textColor, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d:
                    "M7.976 10.0719L12.3333 5.7146L12.952 6.33332L8.28536 11L7.66664 11L2.99997 6.33332L3.61869 5.7146L7.976 10.0719Z",
                  fill: e,
                });
              }
            );
          })
        ),
        Cr = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.textColor, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  d: "M5.7 13.7L5 13L9.6 8.4L5 3.7L5.7 3L10.7 8V8.7L5.7 13.7Z",
                  fill: e,
                });
              }
            );
          })
        ),
        Or = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.textColor, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d:
                    "M8 6.04042L3.02022 11.0202L2.31311 10.3131L7.64644 4.97976L8.35355 4.97976L13.6869 10.3131L12.9798 11.0202L8 6.04042Z",
                  fill: e,
                });
              }
            );
          })
        ),
        kr = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.textColor, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  d:
                    "M8 1C9.38447 1 10.7378 1.41054 11.889 2.17971C13.0401 2.94888 13.9373 4.04213 14.4672 5.32122C14.997 6.6003 15.1356 8.00776 14.8655 9.36563C14.5954 10.7235 13.9287 11.9708 12.9497 12.9497C11.9708 13.9287 10.7235 14.5954 9.36563 14.8655C8.00776 15.1356 6.6003 14.997 5.32121 14.4672C4.04213 13.9373 2.94888 13.0401 2.17971 11.889C1.41054 10.7378 0.999997 9.38447 0.999997 8C1.00211 6.14413 1.74029 4.36489 3.05259 3.05259C4.36488 1.7403 6.14413 1.00212 8 1ZM2 8C1.99922 9.41814 2.50371 10.7902 3.423 11.87L11.87 3.423C10.9975 2.68282 9.93139 2.20787 8.7976 2.05426C7.66381 1.90065 6.50974 2.0748 5.47177 2.55614C4.43379 3.03748 3.55529 3.80588 2.94008 4.77056C2.32487 5.73523 1.99866 6.85585 2 8ZM14 8C14.0008 6.58186 13.4963 5.20983 12.577 4.13L4.13 12.577C5.00248 13.3172 6.0686 13.7921 7.20239 13.9457C8.33618 14.0994 9.49025 13.9252 10.5282 13.4439C11.5662 12.9625 12.4447 12.1941 13.0599 11.2294C13.6751 10.2648 14.0013 9.14415 14 8Z",
                  fill: e,
                });
              }
            );
          })
        ),
        jr = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.textColor, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d:
                    "M7.99998 8.70708L11.6464 12.3535L12.3535 11.6464L8.70708 7.99998L12.3535 4.35353L11.6464 3.64642L7.99998 7.29287L4.35353 3.64642L3.64642 4.35353L7.29287 7.99998L3.64642 11.6464L4.35353 12.3535L7.99998 8.70708Z",
                  fill: e,
                });
              }
            );
          })
        ),
        wr = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.textColor, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d:
                    "M11.9565 6H12.0064C12.8004 6 13.5618 6.31607 14.1232 6.87868C14.6846 7.44129 15 8.20435 15 9C15 9.79565 14.6846 10.5587 14.1232 11.1213C13.5618 11.6839 12.8004 12 12.0064 12V11C12.5357 11 13.0434 10.7893 13.4176 10.4142C13.7919 10.0391 14.0021 9.53044 14.0021 9C14.0021 8.46957 13.7919 7.96086 13.4176 7.58579C13.0434 7.21072 12.5357 7 12.0064 7H11.0924L10.9687 6.143C10.8938 5.60541 10.6456 5.10711 10.2618 4.72407C9.87801 4.34103 9.37977 4.09427 8.84303 4.02143C8.30629 3.94859 7.76051 4.05365 7.2889 4.3206C6.81729 4.58754 6.44573 5.00173 6.23087 5.5L5.89759 6.262L5.08933 6.073C4.90382 6.02699 4.71364 6.0025 4.52255 6C3.86093 6 3.22641 6.2634 2.75858 6.73224C2.29075 7.20108 2.02792 7.83696 2.02792 8.5C2.02792 9.16304 2.29075 9.79893 2.75858 10.2678C3.22641 10.7366 3.86093 11 4.52255 11H5.02148V12H4.52255C4.02745 12.0043 3.5371 11.903 3.08403 11.7029C2.63096 11.5028 2.22553 11.2084 1.89461 10.8394C1.5637 10.4703 1.31488 10.0349 1.16465 9.56211C1.01442 9.08932 0.966217 8.58992 1.02324 8.09704C1.08026 7.60416 1.24121 7.12906 1.4954 6.70326C1.74959 6.27745 2.09121 5.91068 2.49762 5.62727C2.90402 5.34385 3.36591 5.15027 3.85264 5.05937C4.33938 4.96847 4.83984 4.98232 5.32083 5.1C5.6241 4.40501 6.14511 3.82799 6.80496 3.45635C7.4648 3.08472 8.22753 2.9387 8.9776 3.04044C9.72768 3.14217 10.4242 3.4861 10.9618 4.02014C11.4993 4.55418 11.8485 5.24923 11.9565 6ZM6.70719 11.1214L8.0212 12.4354V7H9.01506V12.3992L10.2929 11.1214L11 11.8285L8.85356 13.9749H8.14645L6.00008 11.8285L6.70719 11.1214Z",
                  fill: e,
                });
              }
            );
          })
        ),
        Lr =
          ($t(
            Object(r.memo)(function (e) {
              var t = e.color,
                n = e.size,
                r = e.theme;
              return a.a.createElement(
                vr,
                { color: t, defaultColor: r.textColor, size: n, theme: r },
                function (e) {
                  return a.a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d:
                      "M11.9564 6H12.0063C12.8003 6 13.5617 6.31607 14.1231 6.87868C14.6845 7.44129 14.9999 8.20435 14.9999 9C14.9999 9.79565 14.6845 10.5587 14.1231 11.1213C13.5617 11.6839 12.8003 12 12.0063 12H10.0106V11H12.0063C12.5356 11 13.0432 10.7893 13.4175 10.4142C13.7918 10.0391 14.002 9.53044 14.002 9C14.002 8.46957 13.7918 7.96086 13.4175 7.58579C13.0432 7.21072 12.5356 7 12.0063 7H11.0923L10.9686 6.143C10.8937 5.60541 10.6455 5.10711 10.2617 4.72407C9.87792 4.34103 9.37968 4.09427 8.84295 4.02143C8.30621 3.94859 7.76044 4.05365 7.28883 4.3206C6.81723 4.58754 6.44567 5.00173 6.23082 5.5L5.89754 6.262L5.08929 6.073C4.90378 6.02699 4.71361 6.0025 4.52251 6C3.8609 6 3.22639 6.2634 2.75856 6.73224C2.29073 7.20108 2.02791 7.83696 2.02791 8.5C2.02791 9.16304 2.29073 9.79893 2.75856 10.2678C3.22639 10.7366 3.8609 11 4.52251 11H7.01712V12H4.52251C4.02742 12.0043 3.53708 11.903 3.08401 11.7029C2.63095 11.5028 2.22551 11.2084 1.8946 10.8394C1.56369 10.4703 1.31487 10.0349 1.16465 9.56211C1.01442 9.08932 0.966218 8.58992 1.02324 8.09704C1.08026 7.60416 1.24121 7.12906 1.49539 6.70326C1.74958 6.27745 2.0912 5.91068 2.4976 5.62727C2.904 5.34385 3.36588 5.15027 3.85261 5.05937C4.33935 4.96847 4.8398 4.98232 5.32079 5.1C5.62405 4.40501 6.14506 3.82799 6.8049 3.45635C7.46474 3.08472 8.22745 2.9387 8.97752 3.04044C9.72759 3.14217 10.4241 3.4861 10.9617 4.02014C11.4992 4.55418 11.8484 5.24923 11.9564 6ZM10.2928 9.85348L8.97879 8.53944L8.97879 13.9749H7.98492L7.98493 8.57568L6.7071 9.85347L5.99999 9.14636L8.14643 6.99998H8.85354L10.9999 9.14637L10.2928 9.85348Z",
                    fill: e,
                  });
                }
              );
            })
          ),
          $t(
            Object(r.memo)(function (e) {
              var t = e.color,
                n = e.size,
                r = e.theme;
              return a.a.createElement(
                vr,
                { color: t, defaultColor: r.textColor, size: n, theme: r },
                function (e) {
                  return a.a.createElement("path", {
                    d:
                      "M4.708 5.578L2.061 8.224L4.708 10.87L4 11.578L1 8.578V7.87L4 4.87L4.708 5.578ZM11.708 4.87L11 5.578L13.647 8.224L11 10.87L11.708 11.578L14.708 8.578V7.87L11.708 4.87ZM4.908 13L5.802 13.448L10.802 3.448L9.908 3L4.908 13Z",
                    fill: e,
                  });
                }
              );
            })
          )),
        Hr = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.textColor, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d:
                    "M1 1H15V15H1V1ZM2 14H14V2H2V14ZM4.00008 5.70709L4.70718 4.99999L8.24272 8.53552L7.53561 9.24263L7.53558 9.2426L4.70711 12.0711L4 11.364L6.82848 8.53549L4.00008 5.70709Z",
                  fill: e,
                });
              }
            );
          })
        ),
        Sr = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.textColor, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d:
                    "M3.8888 2.09545C4.95772 1.38122 6.21442 1 7.5 1C9.22391 1 10.8772 1.68482 12.0962 2.90381C13.3152 4.12279 14 5.77609 14 7.5C14 8.78558 13.6188 10.0423 12.9046 11.1112C12.1903 12.1801 11.1752 13.0132 9.98744 13.5052C8.79973 13.9972 7.49279 14.1259 6.23192 13.8751C4.97104 13.6243 3.81285 13.0052 2.90381 12.0962C1.99477 11.1872 1.3757 10.029 1.1249 8.76809C0.874095 7.50721 1.00282 6.20028 1.49479 5.01256C1.98676 3.82484 2.81988 2.80968 3.8888 2.09545ZM4.44437 12.0731C5.34884 12.6774 6.41221 13 7.5 13C8.95821 12.9984 10.3562 12.4184 11.3873 11.3873C12.4184 10.3562 12.9984 8.9582 13 7.5C13 6.4122 12.6774 5.34883 12.0731 4.44436C11.4687 3.53989 10.6098 2.83494 9.60476 2.41866C8.59977 2.00238 7.4939 1.89346 6.42701 2.10568C5.36011 2.3179 4.3801 2.84172 3.61092 3.61091C2.84173 4.3801 2.3179 5.36011 2.10568 6.427C1.89347 7.4939 2.00238 8.59977 2.41867 9.60476C2.83495 10.6098 3.5399 11.4687 4.44437 12.0731ZM10.2932 4L11.0002 4.707L8.85018 6.857C9.00536 7.17915 9.0415 7.54583 8.95221 7.89208C8.86291 8.23833 8.65395 8.5418 8.36233 8.74874C8.07071 8.95567 7.71526 9.05271 7.35895 9.02266C7.00264 8.99261 6.66846 8.83742 6.41561 8.58457C6.16276 8.33173 6.00757 7.99755 5.97752 7.64123C5.94748 7.28492 6.04452 6.92947 6.25145 6.63785C6.45838 6.34623 6.76185 6.13727 7.1081 6.04798C7.45435 5.95868 7.82103 5.99483 8.14318 6.15L10.2932 4ZM7.2224 7.91573C7.30462 7.97068 7.40129 8 7.50018 8C7.63279 8 7.75997 7.94732 7.85374 7.85355C7.9475 7.75979 8.00018 7.63261 8.00018 7.5C8.00018 7.40111 7.97086 7.30444 7.91592 7.22221C7.86098 7.13999 7.78289 7.0759 7.69152 7.03806C7.60016 7.00022 7.49963 6.99031 7.40264 7.00961C7.30565 7.0289 7.21656 7.07652 7.14663 7.14645C7.0767 7.21637 7.02908 7.30546 7.00979 7.40245C6.9905 7.49945 7.0004 7.59998 7.03824 7.69134C7.07609 7.7827 7.14017 7.86079 7.2224 7.91573ZM11.508 5.46704L10.745 6.23004C10.9111 6.63296 10.9977 7.06422 11 7.50004C10.9972 8.1267 10.8244 8.74086 10.5 9.27704L11.235 10.012C11.683 9.34822 11.9447 8.57638 11.9929 7.77698C12.0411 6.97757 11.874 6.17988 11.509 5.46704H11.508ZM8.73285 4.24196C8.34063 4.08478 7.92238 4.00269 7.49985 3.99996C6.57159 3.99996 5.68135 4.36871 5.02497 5.02509C4.3686 5.68147 3.99985 6.57171 3.99985 7.49996C4.00266 8.12663 4.17547 8.74078 4.49985 9.27696L3.76585 10.012C3.2135 9.18819 2.94877 8.20502 3.01281 7.21528C3.07686 6.22554 3.46609 5.28468 4.12 4.53897C4.77391 3.79326 5.65587 3.28446 6.62876 3.09169C7.60166 2.89891 8.61099 3.03295 9.49985 3.47296L8.73285 4.24196Z",
                  fill: e,
                });
              }
            );
          })
        ),
        Tr = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.orange, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d:
                    "M14 2H8L7 3V6H8V3H14V8H10V9H14L15 8V3L14 2ZM9 6H13V7H9.41L9 6.59V6ZM7 7H2L1 8V13L2 14H8L9 13V8L8 7H7ZM8 13H2V8H8V9V13ZM3 9H7V10H3V9ZM3 11H7V12H3V11ZM9 4H13V5H9V4Z",
                  fill: e,
                });
              }
            );
          })
        ),
        Ir = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.textColor, size: n, theme: r },
              function (e) {
                return a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4 6H12V7H4V6ZM12 9H4V10H12V9Z",
                    fill: e,
                  }),
                  a.a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1 4L2 3H14L15 4V12L14 13H2L1 12V4ZM2 4V12H14V4H2Z",
                    fill: e,
                  })
                );
              }
            );
          })
        ),
        Mr = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.red, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d:
                    "M8.6 0.999985C10.2 1.09999 11.7 1.89999 12.8 2.99999C14.1 4.39999 14.8 6.09999 14.8 8.09999C14.8 9.69999 14.2 11.2 13.2 12.5C12.2 13.7 10.8 14.6 9.2 14.9C7.6 15.2 6 15 4.6 14.2C3.2 13.4 2.1 12.2 1.5 10.7C0.899997 9.19999 0.799997 7.49999 1.3 5.99999C1.8 4.39999 2.7 3.09999 4.1 2.19999C5.4 1.29999 7 0.899985 8.6 0.999985ZM9.1 13.9C10.4 13.6 11.6 12.9 12.5 11.8C13.3 10.7 13.8 9.39999 13.7 7.99999C13.7 6.39999 13.1 4.79999 12 3.69999C11 2.69999 9.8 2.09999 8.4 1.99999C7.1 1.89999 5.7 2.19999 4.6 2.99999C3.5 3.79999 2.7 4.89999 2.3 6.29999C1.9 7.59999 1.9 8.99999 2.5 10.3C3.1 11.6 4 12.6 5.2 13.3C6.4 14 7.8 14.2 9.1 13.9ZM7.89999 7.5L10.3 5L11 5.7L8.59999 8.2L11 10.7L10.3 11.4L7.89999 8.9L5.49999 11.4L4.79999 10.7L7.19999 8.2L4.79999 5.7L5.49999 5L7.89999 7.5Z",
                  fill: e,
                });
              }
            );
          })
        ),
        Vr = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.rose, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  d:
                    "M13.51 4L8.51001 1H7.51001L2.51001 4L2.02002 4.85999V10.86L2.51001 11.71L7.51001 14.71H8.51001L13.51 11.71L14 10.86V4.85999L13.51 4ZM7.51001 13.5601L3.01001 10.86V5.69995L7.51001 8.15002V13.5601ZM3.27002 4.69995L8.01001 1.85999L12.75 4.69995L8.01001 7.29004L3.27002 4.69995ZM13.01 10.86L8.51001 13.5601V8.15002L13.01 5.69995V10.86Z",
                  fill: e,
                });
              }
            );
          })
        ),
        zr = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.textColor, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  d:
                    "M11.6667 0H5.66666L4.66666 1V4H1.66666L0.666656 5V15.0466L1.66666 16H9.71329L10.6667 15.0466V12H13.8L14.6667 11.0466V3L11.6667 0ZM11.6667 1.41333L13.2533 3H11.6667V1.41333ZM9.66666 15H1.66666V5H4.66666V11.0466L5.66666 12H9.66666V15ZM13.6667 11H5.66666V1H10.6667V4H13.6667V11Z",
                  fill: e,
                });
              }
            );
          })
        );
      function _r() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 20px;\n  align-items: center;\n  justify-content: center;\n",
        ]);
        return (
          (_r = function () {
            return e;
          }),
          e
        );
      }
      var Br = en.div(_r()),
        Nr = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.textColor, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d:
                    "M13.5072 12.3239C14.4749 11.0906 15.0006 9.56812 15 8.00045C15.0001 6.46996 14.4986 4.98161 13.5723 3.76328C12.6459 2.54495 11.3459 1.66378 9.87105 1.25469C8.39624 0.845604 6.828 0.931139 5.40643 1.4982C3.98487 2.06526 2.78832 3.0826 2 4.39445V2.00045H1V5.50045L1.5 6.00045H5V5.00045H2.811C3.47895 3.84546 4.51237 2.94567 5.74827 2.44298C6.98418 1.94028 8.35226 1.86329 9.63676 2.22413C10.9213 2.58498 12.0491 3.36313 12.8425 4.43587C13.6358 5.50862 14.0495 6.81493 14.0182 8.14879C13.987 9.48265 13.5127 10.7682 12.6701 11.8026C11.8274 12.8371 10.6644 13.5616 9.36443 13.862C8.06445 14.1624 6.70147 14.0215 5.49043 13.4615C4.27939 12.9016 3.2892 11.9544 2.676 10.7695L1.789 11.2315C2.51204 12.6224 3.68106 13.7304 5.10876 14.3779C6.53646 15.0254 8.14019 15.1749 9.66297 14.8025C11.1858 14.4301 12.5395 13.5573 13.5072 12.3239ZM10.146 11.3545L10.854 10.6465L8 7.79349V4.00049H7V8.00049L7.146 8.35449L10.146 11.3545Z",
                  fill: e,
                });
              }
            );
          })
        ),
        Rr = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.blue, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d:
                    "M8.56844 1.03128C10.1595 1.19039 11.6437 1.90518 12.7601 3.04996C13.9764 4.28555 14.6955 5.92552 14.7804 7.65726C14.8652 9.38899 14.3098 11.0913 13.2201 12.4398C12.2179 13.6857 10.8114 14.5416 9.24435 14.8594C7.67733 15.1772 6.0485 14.9369 4.6401 14.18C3.22867 13.4066 2.12683 12.1706 1.5201 10.68C0.910659 9.18166 0.82953 7.52043 1.29009 5.96988C1.74966 4.42537 2.72803 3.0868 4.06008 2.17996C5.38108 1.27892 6.97735 0.87217 8.56844 1.03128ZM9.04012 13.8799C10.383 13.6075 11.5888 12.8756 12.4501 11.81C13.3827 10.6509 13.8572 9.18961 13.7835 7.70377C13.7097 6.21792 13.0929 4.81093 12.0501 3.74991C11.0949 2.77492 9.82753 2.16667 8.46938 2.0314C7.11123 1.89614 5.74875 2.24247 4.62008 3.00992C3.77051 3.59531 3.0845 4.38792 2.62697 5.31265C2.16945 6.23738 1.95559 7.26359 2.00567 8.2941C2.05574 9.3246 2.36809 10.3253 2.91311 11.2013C3.45813 12.0773 4.21776 12.7997 5.12008 13.3C6.3184 13.9467 7.70586 14.1519 9.04012 13.8799ZM8.51008 6.99997L7.51008 6.99997L7.51008 11L8.51008 11L8.51008 6.99997ZM8.51008 4.99997L7.51008 4.99997L7.51008 5.99997L8.51008 5.99997L8.51008 4.99997Z",
                  fill: e,
                });
              }
            );
          })
        ),
        Pr = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.orange, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  d:
                    "M11.34 9.70998H12.05L14.72 7.04005V6.32997L13.38 5.00001H12.68L10.86 6.81007H5.86V5.56007L7.71999 3.70997V3L5.71998 1H5.00001L1 5.00001V5.70997L3 7.70998H3.71003L4.84998 6.56007V12.35L5.34998 12.85H10V13.37L11.33 14.71H12.04L14.7101 12.0401V11.33L13.37 10H12.67L10.81 11.85H5.81001V7.84999H10V8.32997L11.34 9.70998ZM13.0301 6.06007L13.66 6.68995L11.66 8.68996L11.0301 8.06007L13.0301 6.06007ZM13.0301 11.0601L13.66 11.69L11.66 13.69L11.0301 13.0601L13.0301 11.0601ZM3.34998 6.65004L2.06 5.34998L5.34998 2.06006L6.65004 3.34998L3.34998 6.65004Z",
                  fill: e,
                });
              }
            );
          })
        ),
        Dr = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.blue, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  d:
                    "M11.4965 4C10.655 3.9989 9.84136 4.30189 9.20557 4.85315C8.56977 5.40442 8.15465 6.16684 8.0365 7H4.9364C4.8147 6.52867 4.52533 6.11794 4.12244 5.84473C3.71955 5.57152 3.23083 5.45466 2.74792 5.51599C2.26502 5.57733 1.82106 5.81261 1.49927 6.17786C1.17747 6.54311 1 7.01322 1 7.5C1 7.98679 1.17747 8.45689 1.49927 8.82215C1.82106 9.1874 2.26502 9.42267 2.74792 9.48401C3.23083 9.54535 3.71955 9.42848 4.12244 9.15528C4.52533 8.88207 4.8147 8.47133 4.9364 8H8.0365C8.13236 8.66418 8.41717 9.28683 8.85693 9.7937C9.2967 10.3006 9.87284 10.6703 10.5168 10.8589C11.1609 11.0475 11.8455 11.047 12.4893 10.8574C13.133 10.6679 13.7087 10.2973 14.1477 9.7898C14.5867 9.28227 14.8706 8.65919 14.9655 7.99488C15.0603 7.33056 14.9621 6.65298 14.6827 6.04285C14.4034 5.43272 13.9545 4.91578 13.3895 4.55359C12.8246 4.19141 12.1675 3.99922 11.4965 4V4ZM11.4965 10C11.002 10 10.5187 9.85332 10.1075 9.57862C9.69642 9.30391 9.37599 8.91348 9.18677 8.45667C8.99755 7.99985 8.94809 7.49728 9.04456 7.01233C9.14102 6.52738 9.37901 6.08181 9.72864 5.73218C10.0783 5.38255 10.5238 5.14456 11.0088 5.0481C11.4937 4.95164 11.9963 5.00109 12.4531 5.19031C12.9099 5.37953 13.3004 5.69996 13.5751 6.11109C13.8498 6.52221 13.9965 7.00555 13.9965 7.5C13.9965 8.16304 13.7331 8.79898 13.2643 9.26783C12.7954 9.73667 12.1595 10 11.4965 10V10Z",
                  fill: e,
                });
              }
            );
          })
        ),
        Zr = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.textColor, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  d:
                    "M2 10V9H14V10H2ZM2 6H14V7H2V6ZM14 3V4H2V3H14ZM2 12V13H14V12H2Z",
                  fill: e,
                });
              }
            );
          })
        ),
        Ar = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.green, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  d:
                    "M11.34 9.70998H12.05L14.72 7.04005V6.32997L13.38 5.00001H12.68L10.86 6.81007H5.86V5.56007L7.71999 3.70997V3L5.71998 1H5.00001L1 5.00001V5.70997L3 7.70998H3.71003L4.84998 6.56007V12.35L5.34998 12.85H10V13.37L11.33 14.71H12.04L14.7101 12.0401V11.33L13.37 10H12.67L10.81 11.85H5.81001V7.84999H10V8.32997L11.34 9.70998ZM13.0301 6.06007L13.66 6.68995L11.66 8.68996L11.0301 8.06007L13.0301 6.06007ZM13.0301 11.0601L13.66 11.69L11.66 13.69L11.0301 13.0601L13.0301 11.0601ZM3.34998 6.65004L2.06 5.34998L5.34998 2.06006L6.65004 3.34998L3.34998 6.65004Z",
                  fill: e,
                });
              }
            );
          })
        ),
        Fr = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.green, size: n, theme: r },
              function (e) {
                return a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement("path", {
                    d:
                      "M6.26989 10.8698H6.97989L11.5398 6.30996L10.8298 5.59996L6.62989 9.80985L4.71 7.88994L4 8.59994L6.26989 10.8698Z",
                    fill: e,
                  }),
                  a.a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d:
                      "M8.6 0.999985C10.2 1.09999 11.7 1.89999 12.8 2.99999C14.1 4.39999 14.8 6.09999 14.8 8.09999C14.8 9.69999 14.2 11.2 13.2 12.5C12.2 13.7 10.8 14.6 9.2 14.9C7.6 15.2 6 15 4.6 14.2C3.2 13.4 2.1 12.2 1.5 10.7C0.899997 9.19999 0.799997 7.49999 1.3 5.99999C1.8 4.39999 2.7 3.09999 4.1 2.19999C5.4 1.29999 7 0.899985 8.6 0.999985ZM9.1 13.9C10.4 13.6 11.6 12.9 12.5 11.8C13.3 10.7 13.8 9.39999 13.7 7.99999C13.7 6.39999 13.1 4.79999 12 3.69999C11 2.69999 9.8 2.09999 8.4 1.99999C7.1 1.89999 5.7 2.19999 4.6 2.99999C3.5 3.79999 2.7 4.89999 2.3 6.29999C1.9 7.59999 1.9 8.99999 2.5 10.3C3.1 11.6 4 12.6 5.2 13.3C6.4 14 7.8 14.2 9.1 13.9Z",
                    fill: e,
                  })
                );
              }
            );
          })
        ),
        Wr = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.blue, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  d:
                    "M14.45 4.5L9.44995 2H8.55005L1.55005 5.5L1 6.39001V10.89L1.55005 11.79L6.55005 14.29H7.44995L14.45 10.79L15 9.89001V5.39001L14.45 4.5ZM6.44995 13.14L1.94995 10.89V7.17004L6.44995 9.17004V13.14ZM6.94995 8.33997L2.29004 6.22998L8.94995 2.89001L13.62 5.22998L6.94995 8.33997ZM13.95 9.89001L7.44995 13.14V9.20996L13.95 6.20996V9.89001Z",
                  fill: e,
                });
              }
            );
          })
        ),
        qr = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.blue, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d:
                    "M2 5H4V4H1.5L1 4.5V12.5L1.5 13H4V12H2V5ZM14.5 4H12V5H14V12H12V13H14.5L15 12.5V4.5L14.5 4ZM11.76 6.56995L12 7V9.51001L11.7 9.95996L7.19995 11.96H6.73999L4.23999 10.46L4 10.03V7.53003L4.30005 7.06995L8.80005 5.06995H9.26001L11.76 6.56995ZM5 9.70996L6.5 10.61V9.28003L5 8.38V9.70996ZM5.57996 7.56006L7.03003 8.43005L10.42 6.93005L8.96997 6.06006L5.57996 7.56006ZM7.53003 10.73L11.03 9.17004V7.77002L7.53003 9.31995V10.73Z",
                  fill: e,
                });
              }
            );
          })
        );
      var Kr = function (e) {
          switch (e) {
            case "enum":
              return a.a.createElement(Tr, null);
            case "input-object":
              return a.a.createElement(Pr, null);
            case "interface":
              return a.a.createElement(Dr, null);
            case "scalar":
              return a.a.createElement(Wr, null);
            case "union":
              return a.a.createElement(qr, null);
            default:
              return a.a.createElement(Ar, null);
          }
        },
        Ur = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.textColor, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d:
                    "M1.5 14H14.5L15 13.5V9L12.23 1.34L11.76 1H4.27L3.8 1.33L1 8.74V13.5L1.5 14ZM14 13H2V10.02H4.55001L5.29001 11.27L5.72001 11.51H10.29L10.73 11.25L11.42 10.02H14V13ZM13.978 9.02002H11.12L10.69 9.28002L10 10.51H6.01001L5.26001 9.26002L4.83001 9.02002H2V9L4.62 2H11.4L13.978 9.02002Z",
                  fill: e,
                });
              }
            );
          })
        ),
        Jr = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.textColor, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  d:
                    "M10.1667 6.83637e-07C9.10697 -0.000527531 8.06972 0.305049 7.1796 0.880046C6.28947 1.45504 5.58437 2.27494 5.14916 3.24113C4.71395 4.20733 4.56717 5.27868 4.72639 6.32634C4.88561 7.37399 5.34401 8.35337 6.04662 9.14665L0.666656 15.2533L1.41332 15.92L6.78002 9.84001C7.47031 10.3796 8.27948 10.7464 9.14021 10.91C10.0009 11.0736 10.8883 11.0292 11.7284 10.7804C12.5685 10.5317 13.337 10.0859 13.97 9.48006C14.6029 8.87427 15.082 8.12607 15.3673 7.29769C15.6526 6.46931 15.7359 5.58469 15.6102 4.71761C15.4845 3.85054 15.1535 3.0261 14.6447 2.31283C14.1359 1.59955 13.4641 1.01808 12.6852 0.616944C11.9063 0.215813 11.0428 0.00661011 10.1667 0.00667386V6.83637e-07ZM10.1667 10C9.27664 10 8.4066 9.73609 7.66657 9.24162C6.92655 8.74715 6.34978 8.04435 6.00919 7.22209C5.66859 6.39982 5.57945 5.49499 5.75308 4.62207C5.92672 3.74916 6.35535 2.94737 6.98469 2.31803C7.61403 1.6887 8.41581 1.26006 9.28873 1.08643C10.1616 0.912793 11.0665 1.00194 11.8887 1.34253C12.711 1.68312 13.4138 2.2599 13.9083 2.99992C14.4027 3.73994 14.6667 4.60998 14.6667 5.5C14.6667 6.69348 14.1925 7.83805 13.3486 8.68197C12.5047 9.52588 11.3601 10 10.1667 10V10Z",
                  fill: e,
                });
              }
            );
          })
        ),
        Qr = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.textColor, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d:
                    "M3.5 2H2.5V7H3.5V2ZM9.6 7H6.4L6 6.45V5.45L6.4 5H9.6L10 5.5V6.5L9.6 7ZM4.6 10H1.4L1 9.5V8.5L1.4 8H4.6L5 8.5V9.5L4.6 10ZM8.5 2H7.5V4H8.5V2ZM7.5 8H8.5V14H7.5V8ZM3.5 11H2.5V14H3.5V11ZM11.4 11H14.59L14.99 10.5V9.55005L14.59 9.05005H11.4L11 9.55005V10.5L11.4 11ZM13.5 2H12.5V8H13.5V2ZM12.5 12H13.5V14H12.5V12Z",
                  fill: e,
                });
              }
            );
          })
        ),
        Gr = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.textColor, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  d:
                    "M14 1H3L2 2V13L3 14H14L15 13V2L14 1ZM8 13H3V2H8V13ZM14 13H9V2H14V13Z",
                  fill: e,
                });
              }
            );
          })
        ),
        Yr = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.textColor, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  d:
                    "M14 1H3L2 2V13L3 14H14L15 13V2L14 1ZM14 13H3V8H14V13ZM14 7H3V2H14V7Z",
                  fill: e,
                });
              }
            );
          })
        ),
        Xr = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.orange, size: n, theme: r },
              function (e) {
                return a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement("path", {
                    d:
                      "M8.44 1H7.56L1 13.26L1.44 14H14.54L14.98 13.26L8.44 1ZM2.28 13L8 2.28L13.7 13H2.28ZM7.5 6H8.5V10H7.5V6ZM7.5 11H8.5V12H7.5V11Z",
                    fill: e,
                  }),
                  a.a.createElement("path", {
                    d:
                      "M8.44 1H7.56L1 13.26L1.44 14H14.54L14.98 13.26L8.44 1ZM2.28 13L8 2.28L13.7 13H2.28ZM7.5 6H8.5V10H7.5V6ZM7.5 11H8.5V12H7.5V11Z",
                    fill: e,
                  })
                );
              }
            );
          })
        ),
        $r = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.textColor, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d:
                    "M12.0275 6.14861C12.1231 7.56649 11.6682 8.96661 10.7575 10.0575L15.0175 14.3176L14.3176 15.0275L10.0575 10.7575C8.96661 11.6682 7.56649 12.1231 6.14861 12.0275C4.73072 11.9319 3.40437 11.2931 2.44561 10.2442C1.48684 9.19523 0.969494 7.81691 1.00139 6.39617C1.03329 4.97542 1.61188 3.62162 2.61675 2.61675C3.62162 1.61188 4.97542 1.03329 6.39617 1.00139C7.81691 0.969494 9.19523 1.48684 10.2442 2.44561C11.2931 3.40437 11.9319 4.73072 12.0275 6.14861ZM6.57756 11.0375C7.77042 11.0354 8.91377 10.5608 9.7575 9.71758L9.71758 9.7376C10.1447 9.32074 10.4849 8.82316 10.7183 8.27385C10.9518 7.72455 11.0739 7.13437 11.0776 6.53752C11.0776 5.64751 10.8136 4.77755 10.3191 4.03752C9.82467 3.2975 9.12188 2.72065 8.29961 2.38005C7.47734 2.03946 6.57255 1.95032 5.69963 2.12395C4.82672 2.29758 4.02489 2.72618 3.39556 3.35552C2.76622 3.98485 2.33762 4.78668 2.16399 5.6596C1.99036 6.53251 2.0795 7.4373 2.42009 8.25957C2.76069 9.08184 3.33742 9.78464 4.07744 10.2791C4.81746 10.7736 5.68755 11.0375 6.57756 11.0375ZM9.01749 7.0376V6.0376H7.01749V4.0376H6.01749V6.0376H4.01749V7.0376H6.01749V9.0376H7.01749V7.0376H9.01749Z",
                  fill: e,
                });
              }
            );
          })
        ),
        ea = $t(
          Object(r.memo)(function (e) {
            var t = e.color,
              n = e.size,
              r = e.theme;
            return a.a.createElement(
              vr,
              { color: t, defaultColor: r.textColor, size: n, theme: r },
              function (e) {
                return a.a.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d:
                    "M12.0275 6.14861C12.1231 7.56649 11.6682 8.96661 10.7575 10.0575L15.0175 14.3176L14.3176 15.0275L10.0575 10.7575C8.96661 11.6682 7.56649 12.1231 6.14861 12.0275C4.73072 11.9319 3.40437 11.2931 2.44561 10.2442C1.48684 9.19523 0.969494 7.81691 1.00139 6.39617C1.03329 4.97542 1.61188 3.62162 2.61675 2.61675C3.62162 1.61188 4.97542 1.03329 6.39617 1.00139C7.81691 0.969494 9.19523 1.48684 10.2442 2.44561C11.2931 3.40437 11.9319 4.73072 12.0275 6.14861ZM6.57756 11.0375C7.77042 11.0354 8.91377 10.5608 9.7575 9.71758L9.71758 9.7376C10.1447 9.32074 10.4849 8.82316 10.7183 8.27385C10.9518 7.72455 11.0739 7.13437 11.0776 6.53752C11.0776 5.64751 10.8136 4.77755 10.3191 4.03752C9.82467 3.2975 9.12188 2.72065 8.29961 2.38005C7.47734 2.03946 6.57255 1.95032 5.69963 2.12395C4.82672 2.29758 4.02489 2.72618 3.39556 3.35552C2.76622 3.98485 2.33762 4.78668 2.16399 5.6596C1.99036 6.53251 2.0795 7.4373 2.42009 8.25957C2.76069 9.08184 3.33742 9.78464 4.07744 10.2791C4.81746 10.7736 5.68755 11.0375 6.57756 11.0375ZM4.03748 6.0575H9.03748V7.0575H4.03748V6.0575Z",
                  fill: e,
                });
              }
            );
          })
        );
      function ta() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  background-color: ",
          ";\n  color: ",
          ";\n",
        ]);
        return (
          (ta = function () {
            return e;
          }),
          e
        );
      }
      var na = en.aside(
        ta(),
        function (e) {
          return e.theme.sideBarBg;
        },
        function (e) {
          return e.theme.sideBarText;
        }
      );
      function ra() {
        var e = Object(c.a)([
          "\n  z-index: 1;\n  display: flex;\n  flex: 0 0 30px;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(\n    15deg,\n    ",
          "\n      0%,\n    ",
          " 55%,\n    ",
          "\n      100%\n  );\n  color: ",
          ";\n  transition: box-shadow 0.2s ease;\n",
        ]);
        return (
          (ra = function () {
            return e;
          }),
          e
        );
      }
      var aa = en.header(
        ra(),
        function (e) {
          return "right" === e.location
            ? e.theme.navBgColor2
            : e.theme.navBgColor;
        },
        function (e) {
          return e.theme.navBgColor;
        },
        function (e) {
          return "right" === e.location
            ? e.theme.navBgColor
            : e.theme.navBgColor2;
        },
        function (e) {
          return e.theme.sideBarHeaderText;
        }
      );
      function ia() {
        var e = Object(c.a)([
          "\n  flex: 0 0 28px;\n  height: 100%;\n  justify-content: center;\n  color: ",
          ";\n  opacity: 0.75;\n  transition: color 0.2s ease, opacity 0.2s ease;\n\n  &:hover {\n    opacity: 1;\n  }\n",
        ]);
        return (
          (ia = function () {
            return e;
          }),
          e
        );
      }
      var oa = en.button(ia(), function (e) {
        return e.theme.sideBarHeaderText;
      });
      function ca() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  padding: 0 11px 0 4px;\n  color: ",
          ";\n",
        ]);
        return (
          (ca = function () {
            return e;
          }),
          e
        );
      }
      function ua() {
        var e = Object(c.a)([
          "\n  flex: 1 1 auto;\n  border: 0 none;\n  padding: 11px 4px;\n  color: ",
          ";\n  background-color: ",
          ";\n",
        ]);
        return (
          (ua = function () {
            return e;
          }),
          e
        );
      }
      function la() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  padding: 0 4px 0 11px;\n  color: ",
          ";\n",
        ]);
        return (
          (la = function () {
            return e;
          }),
          e
        );
      }
      function sa() {
        var e = Object(c.a)([
          "\n  z-index: 1;\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: row;\n  align-items: center;\n  border-bottom: 1px solid ",
          ";\n  padding: 0 4px;\n  color: ",
          ";\n  background-color: ",
          ";\n",
        ]);
        return (
          (sa = function () {
            return e;
          }),
          e
        );
      }
      var da = Object(r.memo)(
          Object(r.forwardRef)(function (e, t) {
            var n = Object(r.useRef)(null),
              i = Object(r.useRef)(null),
              o = e.searchTerm,
              c = te(function (t) {
                e.onSearchTermChange(t);
              });
            return (
              Object(r.useEffect)(
                function () {
                  var e = n.current,
                    t = i.current;
                  o && o.length > 0
                    ? ((e.value = o), (t.style.display = "flex"))
                    : (t.style.display = "none");
                },
                [o]
              ),
              a.a.createElement(
                fa,
                { ref: t },
                a.a.createElement(ma, null, a.a.createElement(Jr, null)),
                a.a.createElement(pa, {
                  ref: n,
                  placeholder: "Find...",
                  onChange: function (e) {
                    c(e.currentTarget.value.trim()),
                      (i.current.style.display =
                        e.currentTarget.value.length > 0 ? "flex" : "none");
                  },
                }),
                a.a.createElement(
                  ha,
                  {
                    ref: i,
                    onClick: function () {
                      e.onSearchTermChange(""),
                        (n.current.value = ""),
                        (i.current.style.display = "none");
                    },
                  },
                  a.a.createElement(jr, null)
                )
              )
            );
          })
        ),
        fa = en.div(
          sa(),
          function (e) {
            return e.theme.contentBorder;
          },
          function (e) {
            return e.theme.textColor;
          },
          function (e) {
            return e.theme.sideBarSearchBg;
          }
        ),
        ma = en.div(la(), function (e) {
          return e.theme.textColor;
        }),
        pa = en.input(
          ua(),
          function (e) {
            return e.theme.textColor;
          },
          function (e) {
            return e.theme.sideBarSearchBg;
          }
        ),
        ha = en.button(ca(), function (e) {
          return e.theme.textColor;
        });
      function va() {
        var e = Object(c.a)([
          "\n  flex: 1 1 auto;\n  margin: 0 10px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: bold;\n",
        ]);
        return (
          (va = function () {
            return e;
          }),
          e
        );
      }
      var ba = en.h1(va());
      function ga() {
        var e = Object(c.a)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 10px;\n",
        ]);
        return (
          (ga = function () {
            return e;
          }),
          e
        );
      }
      var xa = en.div(ga());
      function ya() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 20px;\n  justify-content: center;\n",
        ]);
        return (
          (ya = function () {
            return e;
          }),
          e
        );
      }
      var Ea = en(An)(ya());
      function Ca() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 20px;\n  align-items: center;\n",
        ]);
        return (
          (Ca = function () {
            return e;
          }),
          e
        );
      }
      var Oa = en.div(Ca()),
        ka = n(193),
        ja = n(150),
        wa = n(37),
        La = n(5),
        Ha = n(6);
      var Sa = (function () {
        function e() {
          var t = this;
          Object(l.a)(this, e),
            (this._disposed = !1),
            (this._observers = []),
            (this._dispatch = (function (e) {
              var t,
                n,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
              return function (a) {
                n ? t.push(a) : (t = [a]),
                  clearTimeout(n),
                  (n = setTimeout(function () {
                    var r = Object(X.a)(t);
                    (n = void 0), e(r);
                  }, r));
              };
            })(function (e) {
              if (!t._disposed)
                for (var n = 0; n < t._observers.length; n++)
                  t._observers[n](e);
            }));
        }
        return (
          Object(s.a)(e, [
            {
              key: "dispatch",
              value: function (e) {
                if (this._disposed)
                  throw new Error("This observable has been disposed.");
                this._dispatch(e);
              },
            },
            {
              key: "subscribe",
              value: function (e) {
                var t = this;
                if (this._disposed)
                  throw new Error("This observable has been disposed.");
                return (
                  -1 === this._observers.indexOf(e) && this._observers.push(e),
                  function () {
                    if (!t._disposed) {
                      var n = t._observers.indexOf(e);
                      -1 !== n && t._observers.splice(n, 1);
                    }
                  }
                );
              },
            },
            {
              key: "dispose",
              value: function () {
                this._disposed ||
                  ((this._observers = []), (this._disposed = !0));
              },
            },
          ]),
          e
        );
      })();
      var Ta = (function () {
        function e() {
          Object(l.a)(this, e);
        }
        return (
          Object(s.a)(e, null, [
            {
              key: "combine",
              value: function () {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                if (n.length < 2)
                  throw new Error("At least two pathes must be provided.");
                for (
                  var a = n[0][0] === e.separator ? e.separator : "",
                    i = 0,
                    o = n;
                  i < o.length;
                  i++
                ) {
                  var c,
                    l = o[i],
                    s = l.split(e.separator),
                    d = Object(u.a)(s);
                  try {
                    for (d.s(); !(c = d.n()).done; ) {
                      var f = c.value;
                      f.length > 0 &&
                        (0 === a.length || e.isRoot(a)
                          ? (a += f)
                          : (a += e.separator + f));
                    }
                  } catch (m) {
                    d.e(m);
                  } finally {
                    d.f();
                  }
                }
                return a;
              },
            },
            {
              key: "getSegments",
              value: function (t) {
                var n = e.isRooted(t) ? t.slice(1) : t;
                return (
                  n.length > 0 &&
                    n[n.length - 1] === e.separator &&
                    (n = n.slice(0, n.length - 2)),
                  0 === n.length ? [] : n.split(e.separator)
                );
              },
            },
            {
              key: "isRoot",
              value: function (t) {
                return t === e.separator;
              },
            },
            {
              key: "isRooted",
              value: function (t) {
                return t.length > 0 && t[0] === e.separator;
              },
            },
          ]),
          e
        );
      })();
      function Ia(e) {
        for (
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            r = arguments.length,
            a = new Array(r > 3 ? r - 3 : 0),
            i = 3;
          i < r;
          i++
        )
          a[i - 3] = arguments[i];
        var o = a ? a.length : 0,
          c = new Uint32Array(e.length - n + o);
        return (
          t > 0 && c.set(e.slice(0, t)),
          o > 0 && c.set(a, t),
          c.set(e.slice(t + n, e.length), t + o),
          c
        );
      }
      Ta.separator = "/";
      var Ma = (function () {
        function e() {
          Object(l.a)(this, e),
            (this._branchSize = 0),
            (this._children = void 0),
            (this._disposed = !1),
            (this._fetchPromise = void 0),
            (this._id = e.nextId()),
            (this._model = void 0);
        }
        return (
          Object(s.a)(
            e,
            [
              {
                key: "add",
                value: (function () {
                  var e = Object(B.a)(
                    _.a.mark(function e(t) {
                      return _.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.addCore(t, !0);
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "appendChildren",
                value: (function () {
                  var e = Object(B.a)(
                    _.a.mark(function e(t, n, r) {
                      var a, i, o, c, l, s, d;
                      return _.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (a = Object(u.a)(t)), (e.prev = 1), a.s();
                              case 3:
                                if ((i = a.n()).done) {
                                  e.next = 9;
                                  break;
                                }
                                return (
                                  (o = i.value),
                                  (c = o.expanded),
                                  (l = o.expandable),
                                  (s = o.metadata),
                                  (d = o.name),
                                  (e.next = 7),
                                  this.createNode({
                                    expandable: !1 !== l,
                                    expanded: c,
                                    metadata: s,
                                    model: n,
                                    parent: r,
                                    name: d,
                                  })
                                );
                              case 7:
                                e.next = 3;
                                break;
                              case 9:
                                e.next = 14;
                                break;
                              case 11:
                                (e.prev = 11), (e.t0 = e.catch(1)), a.e(e.t0);
                              case 14:
                                return (e.prev = 14), a.f(), e.finish(14);
                              case 17:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 11, 14, 17]]
                      );
                    })
                  );
                  return function (t, n, r) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "decreaseBranchSize",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 1,
                    t = this._branchSize - e;
                  if (t < 0) throw new Error("Decrease not possible");
                  (this._branchSize = t), this.decreaseUpperLevelBranchSize(e);
                },
              },
              { key: "decreaseUpperLevelBranchSize", value: function () {} },
              {
                key: "dispose",
                value: function () {
                  if (!this._disposed) {
                    if (this._children) {
                      var e,
                        t = Object(u.a)(this._children);
                      try {
                        for (t.s(); !(e = t.n()).done; ) {
                          e.value.dispose();
                        }
                      } catch (n) {
                        t.e(n);
                      } finally {
                        t.f();
                      }
                      (this._branchSize = 0), (this._children = void 0);
                    }
                    this.disposeCore();
                  }
                },
              },
              {
                key: "increaseBranchSize",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 1;
                  (this._branchSize = this._branchSize + e),
                    this.increaseUpperLevelBranchSize(e);
                },
              },
              { key: "increaseUpperLevelBranchSize", value: function () {} },
              {
                key: "loadChildren",
                value: (function () {
                  var e = Object(B.a)(
                    _.a.mark(function e() {
                      var t,
                        n,
                        r,
                        a = this;
                      return _.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (this.throwIfDisposed(), !this._fetchPromise)
                                ) {
                                  e.next = 7;
                                  break;
                                }
                                return (e.next = 4), this._fetchPromise;
                              case 4:
                                return e.abrupt("return", e.sent);
                              case 7:
                                if (this._children) {
                                  e.next = 19;
                                  break;
                                }
                                return (
                                  (this._fetchPromise = new Promise(function (
                                    e
                                  ) {
                                    t = e;
                                  }).then(function () {
                                    a._fetchPromise = void 0;
                                  })),
                                  (this._children = []),
                                  (n = "node" === this.kind ? this : void 0),
                                  (e.next = 13),
                                  this._model.provider.getNodes(
                                    n ? n.path : Ta.separator,
                                    this._model.filter
                                  )
                                );
                              case 13:
                                if (!((r = e.sent).length > 0)) {
                                  e.next = 18;
                                  break;
                                }
                                return (
                                  (e.next = 17),
                                  this.appendChildren(r, this._model, n)
                                );
                              case 17:
                                this.sort();
                              case 18:
                                t();
                              case 19:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "reload",
                value: (function () {
                  var e = Object(B.a)(
                    _.a.mark(function e() {
                      return _.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (this.throwIfDisposed(), !this.expandable)
                                ) {
                                  e.next = 6;
                                  break;
                                }
                                return (
                                  this.unloadChildren(),
                                  (e.next = 5),
                                  this.loadChildren()
                                );
                              case 5:
                                this._model.dispatch({ kind: "reloaded" });
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "remove",
                value: function (e) {
                  this.throwIfDisposed(), this.removeCore(e, !0);
                },
              },
              {
                key: "removeCore",
                value: function (e, t) {
                  if (this._children) {
                    var n = this._children.indexOf(e);
                    n > -1 &&
                      (this._children.splice(n, 1),
                      this.decreaseBranchSize(1 + e.branchSize),
                      this._model.removeNode(e),
                      t && this._model.dispatch({ kind: "removed", node: e }),
                      e.dispose());
                  }
                },
              },
              {
                key: "sort",
                value: function () {
                  this._children &&
                    this._children.sort(
                      this._model.provider.comparer || e.defaultComparer
                    );
                },
              },
              {
                key: "throwIfDisposed",
                value: function () {
                  if (this._disposed)
                    throw new Error("Object has already been disposed.");
                },
              },
              {
                key: "unloadChildren",
                value: function () {
                  if ((this.throwIfDisposed(), this._children)) {
                    var e,
                      t = Object(u.a)(this._children);
                    try {
                      for (t.s(); !(e = t.n()).done; ) {
                        e.value.dispose();
                      }
                    } catch (n) {
                      t.e(n);
                    } finally {
                      t.f();
                    }
                    this._model.removeChildNodes(
                      "node" === this.kind ? this : void 0
                    ),
                      this.decreaseBranchSize(this._branchSize),
                      (this._children = void 0);
                  }
                },
              },
              {
                key: "branchSize",
                get: function () {
                  return this._branchSize;
                },
              },
              {
                key: "children",
                get: function () {
                  return this._children ? this._children.slice() : [];
                },
              },
              {
                key: "expandable",
                get: function () {
                  return !0;
                },
              },
              {
                key: "id",
                get: function () {
                  return this._id;
                },
              },
              {
                key: "model",
                get: function () {
                  return this._model;
                },
              },
            ],
            [
              {
                key: "defaultComparer",
                value: function (e, t) {
                  var n = e.name.toUpperCase(),
                    r = t.name.toUpperCase();
                  return n < r ? -1 : n > r ? 1 : 0;
                },
              },
            ]
          ),
          e
        );
      })();
      (Ma._index = new Map()),
        (Ma.nextId = (function () {
          var e = 0;
          return function () {
            return e++;
          };
        })());
      var Va = (function (e) {
          Object(La.a)(n, e);
          var t = Object(Ha.a)(n);
          function n(e) {
            var r;
            return (
              Object(l.a)(this, n),
              ((r = t.call(this))._depth = 0),
              (r._editMode = "off"),
              (r._expandable = !0),
              (r._expanded = !1),
              (r._metadata = void 0),
              (r._name = void 0),
              (r._parent = void 0),
              (r._path = ""),
              (r._selected = !1),
              (r._editMode = e.editMode || "off"),
              (r._expandable = e.expandable),
              (r._expanded = e.expanded || !1),
              (r._metadata = e.metadata),
              (r._name = e.name),
              Ma._index.set(r.id, Object(wa.a)(r)),
              r
            );
          }
          return (
            Object(s.a)(
              n,
              [
                {
                  key: "addCore",
                  value: (function () {
                    var e = Object(B.a)(
                      _.a.mark(function e(t, n) {
                        return _.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (this.throwIfDisposed(), this.expandable)
                                  ) {
                                    e.next = 3;
                                    break;
                                  }
                                  throw new Error(
                                    "Not allowed to add a node to a node which isn't expandable"
                                  );
                                case 3:
                                  if (
                                    t.parent !== this &&
                                    (t.parent || t.model !== this.model)
                                  ) {
                                    e.next = 5;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 5:
                                  if (
                                    (t.parent && t.parent !== this
                                      ? t.parent.remove(t)
                                      : !t.parent &&
                                        t.model &&
                                        t.model !== this.model &&
                                        t.model.remove(t),
                                    this._expanded)
                                  ) {
                                    e.next = 11;
                                    break;
                                  }
                                  return (
                                    (this._expanded = !0),
                                    (e.next = 10),
                                    this.loadChildren()
                                  );
                                case 10:
                                  this._model.dispatch({
                                    kind: "expanded",
                                    node: this,
                                  });
                                case 11:
                                  this._children.push(t),
                                    t.assignTo(this._model, this),
                                    this.increaseBranchSize(1 + t.branchSize),
                                    this.sort(),
                                    this._model.insertNode(
                                      t,
                                      this._children.indexOf(t)
                                    ),
                                    n &&
                                      this._model.dispatch({
                                        kind: "added",
                                        node: t,
                                      });
                                case 17:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "apply",
                  value: function () {
                    switch (this._editMode) {
                      case "creation":
                        (this._editMode = "off"),
                          this._model.endEditing(this),
                          this._model.dispatch({ kind: "created", node: this });
                        break;
                      case "renaming":
                        (this._editMode = "off"),
                          this._model.endEditing(this),
                          this._model.dispatch({ kind: "renamed", node: this });
                    }
                  },
                },
                {
                  key: "assignTo",
                  value: function (e, t) {
                    (this._model = e),
                      (this._parent = t),
                      t
                        ? ((this._depth = t.depth + 1),
                          (this._path = Ta.combine(t.path, this._name)))
                        : ((this._depth = 0),
                          (this._path = Ta.combine(Ta.separator, this._name)));
                  },
                },
                {
                  key: "create",
                  value: (function () {
                    var e = Object(B.a)(
                      _.a.mark(function e(t) {
                        var r, a;
                        return _.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    this.throwIfDisposed(),
                                    (r = Object(F.a)(
                                      Object(F.a)({}, t),
                                      {},
                                      { model: this.model, parent: this }
                                    )),
                                    (e.next = 4),
                                    n.create(r)
                                  );
                                case 4:
                                  return (
                                    (a = e.sent),
                                    this._model.dispatch({
                                      kind: "created",
                                      node: a,
                                    }),
                                    e.abrupt("return", a)
                                  );
                                case 7:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "createNode",
                  value: function (e) {
                    return n.create(e);
                  },
                },
                {
                  key: "decreaseUpperLevelBranchSize",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 1;
                    this._parent
                      ? this._parent.decreaseBranchSize(e)
                      : this._model.decreaseBranchSize(e);
                  },
                },
                {
                  key: "discard",
                  value: function () {
                    var e = this._editMode;
                    "off" !== e &&
                      ((this._editMode = "off"),
                      this._model.endEditing(this),
                      this._model.dispatch({ kind: "discarded", node: this }),
                      "creation" === e &&
                        (this._parent || this._model).removeCore(this));
                  },
                },
                {
                  key: "disposeCore",
                  value: function () {
                    this._selected &&
                      (this._model.removeFromSelected(this),
                      (this._selected = !1)),
                      (this._depth = 0),
                      (this._path = ""),
                      Ma._index.delete(this.id);
                  },
                },
                {
                  key: "ensureVisible",
                  value: function () {
                    return Promise.resolve();
                  },
                },
                {
                  key: "increaseUpperLevelBranchSize",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 1;
                    this._parent
                      ? this._parent.increaseBranchSize(e)
                      : this._model.increaseBranchSize(e);
                  },
                },
                {
                  key: "reload",
                  value: (function () {
                    var e = Object(B.a)(
                      _.a.mark(function e() {
                        return _.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (this.throwIfDisposed(),
                                    !this._expandable || !this._expanded)
                                  ) {
                                    e.next = 5;
                                    break;
                                  }
                                  return (
                                    this.unloadChildren(),
                                    (e.next = 5),
                                    this.loadChildren()
                                  );
                                case 5:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "resort",
                  value: function (e, t) {
                    var n = e.children.indexOf(this);
                    e.sort();
                    var r = e.children.indexOf(this);
                    n !== r && (t.removeNode(this), t.insertNode(this, r));
                  },
                },
                {
                  key: "toggleExpanded",
                  value: function () {
                    this.throwIfDisposed(), (this.expanded = !this.expanded);
                  },
                },
                {
                  key: "toggleSelected",
                  value: function () {
                    this.throwIfDisposed(), (this.selected = !this.selected);
                  },
                },
                {
                  key: "triggerCreate",
                  value: (function () {
                    var e = Object(B.a)(
                      _.a.mark(function e(t) {
                        var r, a;
                        return _.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    this.throwIfDisposed(),
                                    (r = Object(F.a)(
                                      Object(F.a)({}, t),
                                      {},
                                      {
                                        editMode: "creation",
                                        model: this.model,
                                        parent: this,
                                      }
                                    )),
                                    (e.next = 4),
                                    n.create(r)
                                  );
                                case 4:
                                  (a = e.sent),
                                    this._model.beginEditing(a),
                                    this._model.dispatch({
                                      kind: "create",
                                      node: a,
                                    });
                                case 7:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "triggerRename",
                  value: function () {
                    this.throwIfDisposed(),
                      (this._editMode = "renaming"),
                      this._model.beginEditing(this),
                      this._model.dispatch({ kind: "rename", node: this });
                  },
                },
                {
                  key: "validate",
                  value: function (e) {
                    return (
                      this.throwIfDisposed(),
                      this.model.provider.validate(
                        Ta.combine(
                          this.parent ? this.parent.path : Ta.separator,
                          e
                        )
                      )
                    );
                  },
                },
                {
                  key: "branchSize",
                  get: function () {
                    return this._branchSize;
                  },
                },
                {
                  key: "depth",
                  get: function () {
                    return this._depth;
                  },
                },
                {
                  key: "editMode",
                  get: function () {
                    return this._editMode;
                  },
                },
                {
                  key: "expandable",
                  get: function () {
                    return this._expandable;
                  },
                },
                {
                  key: "expanded",
                  get: function () {
                    return this._expanded;
                  },
                  set: function (e) {
                    var t = this;
                    this.throwIfDisposed(),
                      this._expandable &&
                        this._expanded !== e &&
                        ((this._expanded = e),
                        this._expanded
                          ? this.loadChildren().then(function () {
                              t._model.dispatch({ kind: "expanded", node: t });
                            })
                          : (this.unloadChildren(),
                            this._model.dispatch({
                              kind: "collapsed",
                              node: this,
                            })));
                  },
                },
                {
                  key: "kind",
                  get: function () {
                    return "node";
                  },
                },
                {
                  key: "metadata",
                  get: function () {
                    return this._metadata;
                  },
                },
                {
                  key: "model",
                  get: function () {
                    return this._model;
                  },
                },
                {
                  key: "name",
                  get: function () {
                    return this._name;
                  },
                  set: function (e) {
                    this.throwIfDisposed(),
                      this._name !== e &&
                        ((this._name = e),
                        (this._path = this._parent
                          ? Ta.combine(this._parent.path, this._name)
                          : Ta.combine(Ta.separator, this._name)),
                        this.resort(this._parent || this._model, this._model),
                        this._model.dispatch({
                          kind: "name-changed",
                          node: this,
                        }));
                  },
                },
                {
                  key: "parent",
                  get: function () {
                    return this._parent;
                  },
                },
                {
                  key: "path",
                  get: function () {
                    return this._path;
                  },
                },
                {
                  key: "selected",
                  get: function () {
                    return this._selected;
                  },
                  set: function (e) {
                    this.throwIfDisposed(),
                      this._selected !== e &&
                        ((this._selected = e),
                        this._selected
                          ? (this._model.addToSelected(this),
                            this._model.dispatch({
                              kind: "selected",
                              node: this,
                            }))
                          : (this._model.removeFromSelected(this),
                            this._model.dispatch({
                              kind: "deselected",
                              node: this,
                            })));
                  },
                },
              ],
              [
                {
                  key: "create",
                  value: (function () {
                    var e = Object(B.a)(
                      _.a.mark(function e(t) {
                        var r;
                        return _.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (((r = new n(t)), !t.parent)) {
                                  e.next = 6;
                                  break;
                                }
                                return (e.next = 4), t.parent.addCore(r);
                              case 4:
                                e.next = 8;
                                break;
                              case 6:
                                return (e.next = 8), t.model.addCore(r);
                              case 8:
                                if (!r._expanded) {
                                  e.next = 11;
                                  break;
                                }
                                return (e.next = 11), r.loadChildren();
                              case 11:
                                return e.abrupt("return", r);
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "getById",
                  value: function (e) {
                    return n._index.get(e);
                  },
                },
              ]
            ),
            n
          );
        })(Ma),
        za = (function (e) {
          Object(La.a)(n, e);
          var t = Object(Ha.a)(n);
          function n(e) {
            var r;
            return (
              Object(l.a)(this, n),
              ((r = t.call(this))._editingNode = void 0),
              (r._filter = void 0),
              (r._flattendNodeOrder = new Uint32Array(0)),
              (r._observable = new Sa()),
              (r._provider = void 0),
              (r._selectedNodes = []),
              (r._model = Object(wa.a)(r)),
              (r._provider = e),
              r
            );
          }
          return (
            Object(s.a)(
              n,
              [
                {
                  key: "addCore",
                  value: (function () {
                    var e = Object(B.a)(
                      _.a.mark(function e(t, n) {
                        return _.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (this.throwIfDisposed(), t.model !== this)
                                  ) {
                                    e.next = 3;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 3:
                                  t.parent && t.parent.remove(t),
                                    this._children.push(t),
                                    t.assignTo(this),
                                    this.increaseBranchSize(1 + t.branchSize),
                                    this.sort(),
                                    this.insertNode(
                                      t,
                                      this._children.indexOf(t)
                                    ),
                                    n &&
                                      this.dispatch({ kind: "added", node: t });
                                case 10:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "addToSelected",
                  value: function (e) {
                    -1 === this._selectedNodes.indexOf(e) &&
                      this._selectedNodes.push(e);
                  },
                },
                {
                  key: "beginEditing",
                  value: function (e) {
                    this._editingNode !== e &&
                      (this._editingNode && this._editingNode.discard(),
                      (this._editingNode = e));
                  },
                },
                {
                  key: "create",
                  value: (function () {
                    var e = Object(B.a)(
                      _.a.mark(function e(t) {
                        var n, r;
                        return _.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    this.throwIfDisposed(),
                                    (n = Object(F.a)(
                                      Object(F.a)({}, t),
                                      {},
                                      { model: this }
                                    )),
                                    (e.next = 4),
                                    Va.create(n)
                                  );
                                case 4:
                                  return (
                                    (r = e.sent),
                                    this.dispatch({ kind: "created", node: r }),
                                    e.abrupt("return", r)
                                  );
                                case 7:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "createNode",
                  value: function (e) {
                    return Va.create(e);
                  },
                },
                {
                  key: "dispatch",
                  value: function (e) {
                    this._observable.dispatch(e);
                  },
                },
                {
                  key: "disposeCore",
                  value: function () {
                    this._editingNode &&
                      (this._editingNode.discard(),
                      (this._editingNode = void 0)),
                      this._observable.dispose();
                  },
                },
                {
                  key: "endEditing",
                  value: function (e) {
                    this._editingNode === e && (this._editingNode = void 0);
                  },
                },
                {
                  key: "find",
                  value: function (e) {
                    for (
                      var t = Va._index.values(), n = t.next();
                      !n.done &&
                      ((n.value.model && n.value.model !== this) ||
                        !e(n.value));

                    )
                      n = t.next();
                    return n.value;
                  },
                },
                {
                  key: "getById",
                  value: function (e) {
                    return Va.getById(e);
                  },
                },
                {
                  key: "getByIndex",
                  value: function (e) {
                    if (!(e < 0 || e >= this._flattendNodeOrder.length)) {
                      var t = this._flattendNodeOrder[e];
                      return this.getById(t);
                    }
                  },
                },
                {
                  key: "getByPath",
                  value: function (e) {
                    for (
                      var t = Va._index.values(), n = t.next();
                      !n.done &&
                      ((n.value.model && n.value.model !== this) ||
                        n.value.path !== e);

                    )
                      n = t.next();
                    return n.value;
                  },
                },
                {
                  key: "getIdByIndex",
                  value: function (e) {
                    if (!(e < 0 || e >= this._flattendNodeOrder.length))
                      return this._flattendNodeOrder[e];
                  },
                },
                {
                  key: "getIndex",
                  value: function (e) {
                    return this._flattendNodeOrder.indexOf(e);
                  },
                },
                {
                  key: "getStartOffset",
                  value: function (e, t) {
                    var n = e.model.children,
                      r = 0;
                    if (
                      (e.parent &&
                        ((n = e.parent.children),
                        (r +=
                          this._flattendNodeOrder.indexOf(e.parent.id) + 1)),
                      t > 0)
                    )
                      for (var a = 0; a < t; a++) r += n[a].branchSize;
                    return r;
                  },
                },
                {
                  key: "insertNode",
                  value: function (e, t) {
                    if (e.model !== this) throw new Error("Models differ");
                    var n = this.getStartOffset(e, t);
                    this._flattendNodeOrder = Ia(
                      this._flattendNodeOrder,
                      n + t,
                      0,
                      e.id
                    );
                  },
                },
                {
                  key: "removeByPath",
                  value: function (e) {
                    n.throwIfPathIsNotRooted(e);
                    var t = this.getByPath(e);
                    t && (t.parent ? t.parent.remove(t) : t.model.remove(t));
                  },
                },
                {
                  key: "removeFromSelected",
                  value: function (e) {
                    var t = this._selectedNodes.indexOf(e);
                    -1 !== t && this._selectedNodes.splice(t, 1);
                  },
                },
                {
                  key: "removeNode",
                  value: function (e) {
                    if (e.model !== this) throw new Error("Models differ");
                    var t = this._flattendNodeOrder.indexOf(e.id);
                    t > -1 && this.removeRange(t, 1 + e.branchSize);
                  },
                },
                {
                  key: "removeChildNodes",
                  value: function (e) {
                    if (e) {
                      if (e.model !== this) throw new Error("Models differ");
                      var t = this._flattendNodeOrder.indexOf(e.id);
                      t > -1 && this.removeRange(t + 1, e.branchSize);
                    } else this.removeRange(0, this.branchSize);
                  },
                },
                {
                  key: "removeRange",
                  value: function (e, t) {
                    this._flattendNodeOrder = Ia(this._flattendNodeOrder, e, t);
                  },
                },
                {
                  key: "resetFilter",
                  value: (function () {
                    var e = Object(B.a)(
                      _.a.mark(function e() {
                        return _.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this._filter = void 0),
                                    (e.next = 3),
                                    this.reload()
                                  );
                                case 3:
                                  this.dispatch({ kind: "reset-filter" });
                                case 4:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "setFilter",
                  value: (function () {
                    var e = Object(B.a)(
                      _.a.mark(function e(t) {
                        return _.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this._filter = t),
                                    (e.next = 3),
                                    this.reload()
                                  );
                                case 3:
                                  this.dispatch({ kind: "set-filter" });
                                case 4:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "subscribe",
                  value: function (e) {
                    return this._observable.subscribe(e);
                  },
                },
                {
                  key: "subscribeFor",
                  value: function (e) {
                    for (
                      var t = arguments.length,
                        n = new Array(t > 1 ? t - 1 : 0),
                        r = 1;
                      r < t;
                      r++
                    )
                      n[r - 1] = arguments[r];
                    if (0 === n.length)
                      throw new Error("At least one kind is required.");
                    return this._observable.subscribe(function (t) {
                      var r = t.filter(function (e) {
                        return n.includes(e.kind);
                      });
                      r.length > 0 && e(r);
                    });
                  },
                },
                {
                  key: "subscribeTo",
                  value: function (e, t) {
                    for (
                      var n = arguments.length,
                        r = new Array(n > 2 ? n - 2 : 0),
                        a = 2;
                      a < n;
                      a++
                    )
                      r[a - 2] = arguments[a];
                    return this._observable.subscribe(function (n) {
                      var a = n.filter(function (e) {
                        return (
                          !(!e.node || e.node.path !== t) &&
                          (!(r && r.length > 0) || r.includes(e.kind))
                        );
                      });
                      a.length > 0 && e(a);
                    });
                  },
                },
                {
                  key: "triggerCreate",
                  value: (function () {
                    var e = Object(B.a)(
                      _.a.mark(function e(t) {
                        var n, r;
                        return _.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    this.throwIfDisposed(),
                                    (n = Object(F.a)(
                                      Object(F.a)({}, t),
                                      {},
                                      { editMode: "creation", model: this }
                                    )),
                                    (e.next = 4),
                                    Va.create(n)
                                  );
                                case 4:
                                  (r = e.sent),
                                    this.dispatch({ kind: "create", node: r });
                                case 6:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "filter",
                  get: function () {
                    return this._filter;
                  },
                },
                {
                  key: "isInEditMode",
                  get: function () {
                    return void 0 !== this._editingNode;
                  },
                },
                {
                  key: "kind",
                  get: function () {
                    return "model";
                  },
                },
                {
                  key: "provider",
                  get: function () {
                    return this._provider;
                  },
                },
                {
                  key: "selectedNodes",
                  get: function () {
                    return this._selectedNodes.slice();
                  },
                },
              ],
              [
                {
                  key: "create",
                  value: (function () {
                    var e = Object(B.a)(
                      _.a.mark(function e(t) {
                        var r;
                        return _.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = new n(t)), (e.next = 3), r.loadChildren()
                                );
                              case 3:
                                return e.abrupt("return", r);
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "throwIfPathIsNotRooted",
                  value: function (e) {
                    if (!Ta.isRooted(e))
                      throw new Error("A relative path is not allowed.");
                  },
                },
              ]
            ),
            n
          );
        })(Ma),
        _a = new ((function () {
          function e() {
            Object(l.a)(this, e), (this._map = new Map());
          }
          return (
            Object(s.a)(e, [
              {
                key: "get",
                value: function (e) {
                  return this._map.get(e);
                },
              },
              {
                key: "register",
                value: function (e, t) {
                  this._map.set(e, t);
                },
              },
              {
                key: "unregister",
                value: function (e) {
                  this._map.delete(e);
                },
              },
            ]),
            e
          );
        })())(),
        Ba = Object(r.memo)(function (e) {
          var t = Object(r.useRef)(null),
            n = Object(r.useRef)(new Map()),
            i = e.children,
            o = e.id,
            c = e.itemHeight,
            u = e.provider,
            l = e.onInitialized,
            s = e.onScroll,
            d = Object(r.useReducer)(Na, { branchSize: 0 }),
            f = Object(mt.a)(d, 2),
            m = f[0],
            p = f[1],
            h = Object(r.useCallback)(
              function (e) {
                s && s(e);
              },
              [s]
            ),
            v = Object(r.useCallback)(
              function (e) {
                return (m.model && m.model.getIdByIndex(e)) || -1;
              },
              [m.model]
            ),
            b = Object(r.useCallback)(
              function (e) {
                var t = n.current.get(e);
                return (
                  t || ((t = m.model.getByIndex(e)), n.current.set(e, t)), t
                );
              },
              [m.model]
            ),
            g = Object(r.memo)(function (e) {
              var t = e.index,
                n = e.style,
                r = b(t);
              return a.a.createElement("div", { key: r.id, style: n }, i(r));
            }, ja.b);
          return (
            Object(r.useEffect)(
              function () {
                var e = [],
                  r = n.current;
                return (
                  za.create(u).then(function (n) {
                    _a.register(o, n),
                      e.push(
                        n.subscribe(function (e) {
                          e.some(function (e) {
                            return (
                              "deselected" !== e.kind &&
                              "rename" !== e.kind &&
                              "selected" !== e.kind
                            );
                          }) &&
                            (r.clear(),
                            p({ kind: "size", model: n }),
                            t.current && t.current.forceUpdate());
                        })
                      ),
                      e.push(
                        n.subscribeFor(function (e) {
                          !(function (e) {
                            var n = e.model.getIndex(e.id);
                            n > -1 &&
                              t.current &&
                              t.current.scrollToItem(n, "smart");
                          })(e[0].node);
                        }, "selected")
                      ),
                      p({ kind: "init", model: n }),
                      t.current && t.current.forceUpdate(),
                      l && l(n);
                  }),
                  function () {
                    var t;
                    for (_a.unregister(o); (t = e.pop()); ) t();
                    r.clear();
                  }
                );
              },
              [o, l, u]
            ),
            a.a.createElement(ka.a, null, function (e) {
              var n = e.width,
                r = e.height;
              return a.a.createElement(
                "div",
                { tabIndex: -1, style: { width: n + "px", height: r + "px" } },
                a.a.createElement(
                  ja.a,
                  {
                    width: n,
                    height: r,
                    itemSize: c,
                    itemKey: v,
                    itemCount: m.branchSize,
                    overscanCount: 5,
                    ref: t,
                    onScroll: h,
                  },
                  g
                )
              );
            })
          );
        });
      function Na(e, t) {
        switch (t.kind) {
          case "init":
            return { model: t.model, branchSize: t.model.branchSize };
          case "size":
            return Object(F.a)(
              Object(F.a)({}, e),
              {},
              { branchSize: t.model.branchSize }
            );
          default:
            throw new Error('Unexpected action with kind "' + t.kind + '".');
        }
      }
      var Ra = n(235),
        Pa = n.n(Ra);
      function Da() {
        var e = Object(c.a)(["\n  flex: 0 0 20px;\n"]);
        return (
          (Da = function () {
            return e;
          }),
          e
        );
      }
      var Za = Object(r.memo)(function (e) {
          var t = e.expanded;
          return e.expandable
            ? a.a.createElement(
                Oa,
                null,
                t ? a.a.createElement(Er, null) : a.a.createElement(Cr, null)
              )
            : a.a.createElement(Aa, null);
        }),
        Aa = en.div(Da());
      function Fa() {
        var e = Object(c.a)([
          "\n  flex: 0 0 auto;\n  margin: 0 3px;\n  background-color: ",
          ";\n  border: 1px solid ",
          ";\n  color: ",
          ";\n",
        ]);
        return (
          (Fa = function () {
            return e;
          }),
          e
        );
      }
      function Wa() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  padding: 1px 4px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n",
        ]);
        return (
          (Wa = function () {
            return e;
          }),
          e
        );
      }
      var qa = Object(r.memo)(function (e) {
          var t = e.id,
            n = e.name,
            i = e.model,
            o = e.onError,
            c = e.onExit,
            u = i.getById(t),
            l = Object(r.useRef)(null),
            s = (function () {
              var t = Object(B.a)(
                _.a.mark(function t(r) {
                  var a, i;
                  return _.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((a = r.currentTarget.value), n !== a)) {
                            t.next = 5;
                            break;
                          }
                          e.onExit(u), (t.next = 9);
                          break;
                        case 5:
                          return (t.next = 7), u.validate(a);
                        case 7:
                          (i = t.sent), m(i, a);
                        case 9:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            d = (function () {
              var e = Object(B.a)(
                _.a.mark(function e(t) {
                  return _.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.stopPropagation(), t.preventDefault();
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            f = (function () {
              var t = Object(B.a)(
                _.a.mark(function t(n) {
                  var r, a;
                  return _.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          (t.t0 = n.keyCode),
                            (t.next = 13 === t.t0 ? 3 : 27 === t.t0 ? 9 : 11);
                          break;
                        case 3:
                          return (
                            (r = n.currentTarget.value),
                            (t.next = 6),
                            u.validate(r)
                          );
                        case 6:
                          return (a = t.sent), m(a, r), t.abrupt("break", 11);
                        case 9:
                          return e.onExit(u), t.abrupt("break", 11);
                        case 11:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            m = function (e, t) {
              e.succeeded
                ? ((l.current.style.borderColor = "initial"),
                  (l.current.title = ""),
                  c(u, t))
                : ((l.current.style.borderColor = "#f00"),
                  (l.current.title = e.errorMessage),
                  o(u, t, e));
            };
          return (
            Object(r.useEffect)(
              function () {
                l.current && ((l.current.value = n), l.current.focus());
              },
              [n]
            ),
            a.a.createElement(
              Ka,
              null,
              a.a.createElement(Ua, {
                ref: l,
                type: "name",
                onBlur: s,
                onClick: d,
                onDoubleClick: d,
                onKeyDown: f,
              })
            )
          );
        }),
        Ka = en.div(Wa()),
        Ua = en.input(
          Fa(),
          function (e) {
            return e.theme.createFieldBg;
          },
          function (e) {
            return e.theme.createFieldBorder;
          },
          function (e) {
            return e.theme.mainBgColor;
          }
        );
      function Ja() {
        var e = Object(c.a)([
          "\n  flex: 1 1 auto;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n",
        ]);
        return (
          (Ja = function () {
            return e;
          }),
          e
        );
      }
      function Qa() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  align-items: center;\n  padding: 1px 4px;\n",
        ]);
        return (
          (Qa = function () {
            return e;
          }),
          e
        );
      }
      function Ga() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: row;\n  align-items: center;\n  padding: 4px 10px 4px ",
          ";\n  color: ",
          ";\n  cursor: pointer;\n  transition: background-color 0.2s ease, color 0.2s ease;\n\n  &:hover {\n    background-color: ",
          ";\n  }\n\n  &.active {\n    background-color: ",
          ";\n\n    &:hover {\n      background-color: ",
          ";\n    }\n  }\n\n  > .field {\n    flex: 1 1 auto;\n    margin: 0 3px;\n    background-color: ",
          ";\n    border: 1px solid ",
          ";\n    color: ",
          ";\n  }\n",
        ]);
        return (
          (Ga = function () {
            return e;
          }),
          e
        );
      }
      var Ya = new Map(),
        Xa = Object(r.memo)(
          function (e) {
            var t = e.id,
              n = e.depth,
              i = e.path,
              o = e.name,
              c = e.expanded,
              l = e.expandable,
              s = e.node,
              d = e.onClick,
              f = e.onContextMenu,
              m = e.onDoubleClick,
              p = e.renderIcon,
              h = e.renderName,
              v = Object(r.useState)(s.editMode),
              b = Object(mt.a)(v, 2),
              g = b[0],
              x = b[1],
              y = Object(r.useState)(s.selected),
              E = Object(mt.a)(y, 2),
              C = E[0],
              O = E[1],
              k = Object(r.useState)(o),
              j = Object(mt.a)(k, 2),
              w = j[0],
              L = j[1];
            return (
              Object(r.useEffect)(
                function () {
                  var e = s.model.subscribeTo(
                    function (e) {
                      var t,
                        n = e.filter(function (e) {
                          return e.node.id === s.id;
                        }),
                        r = Object(u.a)(n);
                      try {
                        for (r.s(); !(t = r.n()).done; ) {
                          var a = t.value;
                          switch (a.kind) {
                            case "deselected":
                              O(!1);
                              break;
                            case "created":
                            case "rename":
                            case "renamed":
                              x(a.node.editMode);
                              break;
                            case "selected":
                              O(!0);
                          }
                        }
                      } catch (i) {
                        r.e(i);
                      } finally {
                        r.f();
                      }
                    },
                    s.path,
                    "created",
                    "deselected",
                    "rename",
                    "renamed",
                    "selected"
                  );
                  return function () {
                    e();
                  };
                },
                [s]
              ),
              a.a.createElement(
                $a,
                {
                  ref: function (e) {
                    e ? Ya.set(t, e) : Ya.delete(t);
                  },
                  depth: n,
                  title: i,
                  onClick: function (e) {
                    "off" === s.editMode && d(e, s);
                  },
                  onContextMenu: function (e) {
                    0 !== e.nativeEvent.which && f && f(e, s);
                  },
                  onDoubleClick: function (e) {
                    m && m(e, s);
                  },
                  className: Pa()({ active: C }),
                },
                a.a.createElement(Za, { expandable: l, expanded: c }),
                p(s),
                "creation" === g || "renaming" === g
                  ? a.a.createElement(qa, {
                      id: t,
                      name: w,
                      model: s.model,
                      onError: function (e, t, n) {},
                      onExit: function (e, t) {
                        t ? ((e.name = t), e.apply(), L(t)) : e.discard(),
                          x("off");
                      },
                    })
                  : a.a.createElement(
                      ei,
                      { className: "label" },
                      (h && h(s)) || a.a.createElement(ti, null, w)
                    )
              )
            );
          },
          function (e, t) {
            for (var n = 0, r = Object.keys(t); n < r.length; n++) {
              var a = r[n];
              if ("node" !== a && e[a] !== t[a]) return !1;
            }
            return !0;
          }
        );
      var $a = en.div(
          Ga(),
          function (e) {
            return "".concat(10 + 9 * e.depth, "px");
          },
          function (e) {
            return e.theme.textColor;
          },
          function (e) {
            return e.theme.treeHoverBg;
          },
          function (e) {
            return e.theme.treeSelectedBg;
          },
          function (e) {
            return e.theme.treeSelectedBg;
          },
          function (e) {
            return e.theme.createFieldBg;
          },
          function (e) {
            return e.theme.createFieldBorder;
          },
          function (e) {
            return e.theme.mainBgColor;
          }
        ),
        ei = en.div(Qa()),
        ti = en.div(Ja());
      function ni(e) {
        var t = e.selectedNodes[0];
        t && (t.selected = !1);
      }
      var ri = (function () {
          function e(t, n, r) {
            Object(l.a)(this, e),
              (this._succeeded = t),
              (this._errorMessage = n),
              (this._errorDetails = r);
          }
          return (
            Object(s.a)(
              e,
              [
                {
                  key: "succeeded",
                  get: function () {
                    return this._succeeded;
                  },
                },
                {
                  key: "errorMessage",
                  get: function () {
                    return this._errorMessage;
                  },
                },
                {
                  key: "errorDetails",
                  get: function () {
                    return this._errorDetails;
                  },
                },
              ],
              [
                {
                  key: "fail",
                  value: function (t, n) {
                    return new e(!1, t, n);
                  },
                },
                {
                  key: "success",
                  value: function () {
                    return new e(!0);
                  },
                },
              ]
            ),
            e
          );
        })(),
        ai = n(90),
        ii = (function () {
          var e = Object(B.a)(
            _.a.mark(function e(t) {
              var n, r, a, i;
              return _.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (n = t.props),
                        (a = (r = n).collectionId),
                        (i = r.node).model.remove(i),
                        ft.dispatch(he(a));
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        oi = (function () {
          var e = Object(B.a)(
            _.a.mark(function e(t) {
              var n;
              return _.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (n = t.props), n.node.triggerRename();
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        ci = function () {
          return a.a.createElement(
            zn,
            { id: Bn.Collection },
            a.a.createElement(Tn, { onClick: oi }, "Rename"),
            a.a.createElement(Tn, { onClick: ii }, "Delete")
          );
        };
      var ui = (function () {
          var e = Object(B.a)(
            _.a.mark(function e(t) {
              var n, r, a, i;
              return _.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (n = t.props),
                        (a = (r = n).documentId),
                        (i = r.node).parent.remove(i),
                        ft.dispatch(Ce(a));
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        li = (function () {
          var e = Object(B.a)(
            _.a.mark(function e(t) {
              var n;
              return _.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (n = t.props), n.node.triggerRename();
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        si = function () {
          return a.a.createElement(
            zn,
            { id: Bn.Document },
            a.a.createElement(Tn, { onClick: li }, "Rename"),
            a.a.createElement(Tn, { onClick: ui }, "Delete")
          );
        };
      var di = n(354);
      function fi(e) {
        return "collection" === e.metadata.kind
          ? e.expanded
            ? a.a.createElement(Ea, { icon: ai.h, color: "yellow" })
            : "creation" === e.editMode
            ? a.a.createElement(Ea, { icon: di.b, color: "yellow" })
            : a.a.createElement(Ea, { icon: ai.g, color: "yellow" })
          : "creation" === e.editMode
          ? a.a.createElement(Ea, { icon: di.a, color: "blue" })
          : a.a.createElement(Ea, { icon: ai.e, color: "blue" });
      }
      var mi = Object(r.memo)(function (e) {
        var t = e.location,
          n = hr(),
          i = Object(mt.a)(n, 2),
          o = i[0],
          c = i[1],
          l = Object(r.useRef)(null),
          s = ft.current(Wt),
          d = {
            getNodes: function (e, t) {
              var n = ft.current(Ht);
              if (Ta.isRoot(e)) {
                var r = n;
                return (
                  t &&
                    (r = n.filter(function (e) {
                      return (
                        e.documents &&
                        e.documents.some(function (e) {
                          return t(e);
                        })
                      );
                    })),
                  Promise.resolve(
                    r.map(function (e) {
                      var n = e.id,
                        r = e.name,
                        a = e.expanded;
                      return {
                        name: r,
                        expanded: !!t || a,
                        metadata: { id: n, kind: "collection" },
                      };
                    })
                  )
                );
              }
              var a = Ta.getSegments(e);
              if (a.length > 1) return Promise.resolve([]);
              var i = n.find(function (e) {
                  return e.name === a[0];
                }),
                o = i && i.documents;
              return o
                ? (t &&
                    (o = o.filter(function (e) {
                      return t(e);
                    })),
                  Promise.resolve(
                    o.map(function (e) {
                      var t = e.id;
                      return {
                        name: e.name,
                        expandable: !1,
                        metadata: { id: t, kind: "document" },
                      };
                    })
                  ))
                : Promise.resolve([]);
            },
            validate: function (e) {
              var t = Ta.getSegments(e);
              if (0 === t.length)
                return Promise.resolve(ri.fail("An empty path is invalid."));
              var n = ft.current(Ht).find(function (e) {
                return e.name === t[0];
              });
              return 1 === t.length && n
                ? Promise.resolve(
                    ri.fail(
                      'A collection with name "' + t[0] + '" already exists.'
                    )
                  )
                : 2 === t.length &&
                  n &&
                  n.documents &&
                  n.documents.find(function (e) {
                    return e.name === t[1];
                  })
                ? Promise.resolve(
                    ri.fail(
                      'A document with name "' + t[1] + '" already exists.'
                    )
                  )
                : Promise.resolve(ri.success());
            },
          },
          f = Object(r.useRef)([]),
          m = Object(r.useRef)(),
          p = function (e, t) {
            if (!t.metadata) throw new Error("Metadata should be there.");
            switch (t.metadata.kind) {
              case "collection":
                !(function (e, t) {
                  e.preventDefault(),
                    e.stopPropagation(),
                    Hn.contextMenu.show({
                      id: Bn.Collection,
                      event: e,
                      props: { collectionId: t.metadata.id, node: t },
                    });
                })(e, t);
                break;
              case "document":
                !(function (e, t) {
                  e.preventDefault(),
                    e.stopPropagation(),
                    Hn.contextMenu.show({
                      id: Bn.Document,
                      event: e,
                      props: { documentId: t.metadata.id, node: t },
                    });
                })(e, t);
            }
          },
          h = function (e, t) {
            switch (
              (t.selected || (ni(t.model), (t.selected = !0)), t.metadata.kind)
            ) {
              case "document":
                ft.dispatch(ze(t.metadata.id, !0));
                break;
              case "collection":
                t.toggleExpanded(),
                  ft.dispatch(
                    ((n = t.metadata.id),
                    function (e) {
                      var t = e.workspaces.find(function (t) {
                        return t.id === e.selectedWorkspaceId;
                      });
                      if (t) {
                        var r = t.collections.find(function (e) {
                          return e.id === n;
                        });
                        r &&
                          ((t.selectedNodeId = n), (r.expanded = !r.expanded));
                      }
                    })
                  );
            }
            var n;
          },
          v = function (e, t) {
            t.metadata &&
              "document" === t.metadata.kind &&
              ft.dispatch(ze(t.metadata.id, !1));
          },
          b = (function () {
            var e = Object(B.a)(
              _.a.mark(function e(t) {
                return _.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!m.current) {
                          e.next = 3;
                          break;
                        }
                        return (
                          (e.next = 3),
                          m.current.triggerCreate({
                            name: "",
                            expandable: !0,
                            metadata: { kind: "collection" },
                          })
                        );
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          g = (function () {
            var e = Object(B.a)(
              _.a.mark(function e(t) {
                var n;
                return _.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!m.current) {
                          e.next = 5;
                          break;
                        }
                        if (!(n = m.current.selectedNodes[0])) {
                          e.next = 5;
                          break;
                        }
                        return (
                          (e.next = 5),
                          (n.parent || n).triggerCreate({
                            name: "",
                            expandable: !1,
                            metadata: { kind: "document" },
                          })
                        );
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          x = (function () {
            var e = Object(B.a)(
              _.a.mark(function e(t) {
                return _.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((ft.dispatch(ut(t)), !m.current)) {
                          e.next = 9;
                          break;
                        }
                        if (!(t.length > 0)) {
                          e.next = 7;
                          break;
                        }
                        return (
                          (e.next = 5),
                          m.current.setFilter(function (e) {
                            return (
                              -1 !==
                              e.name.toLowerCase().indexOf(t.toLowerCase())
                            );
                          })
                        );
                      case 5:
                        e.next = 9;
                        break;
                      case 7:
                        return (e.next = 9), m.current.resetFilter();
                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        function y(e) {
          return E.apply(this, arguments);
        }
        function E() {
          return (E = Object(B.a)(
            _.a.mark(function e(t) {
              return _.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        t.selected || (ni(t.model), (t.selected = !0)),
                        (e.next = 3),
                        t.ensureVisible()
                      );
                    case 3:
                      l.current && (l.current.style.display = "initial");
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function C(e, t) {
          return O.apply(this, arguments);
        }
        function O() {
          return (O = Object(B.a)(
            _.a.mark(function e(t, n) {
              var r;
              return _.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!n) {
                        e.next = 11;
                        break;
                      }
                      if (
                        !(r = t.find(function (e) {
                          return (
                            e.metadata && e.metadata.id && e.metadata.id === n
                          );
                        }))
                      ) {
                        e.next = 7;
                        break;
                      }
                      return (e.next = 5), y(r);
                    case 5:
                      e.next = 9;
                      break;
                    case 7:
                      ni(t), l.current && (l.current.style.display = "none");
                    case 9:
                      e.next = 13;
                      break;
                    case 11:
                      ni(t), l.current && (l.current.style.display = "none");
                    case 13:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        return (
          Object(r.useEffect)(function () {
            var e = f.current;
            return function () {
              for (var t; (t = e.pop()); ) t();
              m.current = void 0;
            };
          }, []),
          a.a.createElement(
            na,
            null,
            a.a.createElement(
              aa,
              { location: t },
              a.a.createElement(
                xa,
                null,
                a.a.createElement(zr, {
                  color: function (e) {
                    return e.sideBarHeaderText;
                  },
                })
              ),
              a.a.createElement(ba, null, "Documents"),
              a.a.createElement(
                oa,
                { ref: l, title: "New Document", onClick: g },
                a.a.createElement(An, { icon: ai.e })
              ),
              a.a.createElement(
                oa,
                { title: "New Collection", onClick: b },
                a.a.createElement(An, { icon: ai.i })
              )
            ),
            a.a.createElement(da, {
              ref: c,
              searchTerm: s,
              onSearchTermChange: x,
            }),
            a.a.createElement(
              wn,
              { ref: o },
              a.a.createElement(
                Ba,
                {
                  id: "documents",
                  itemHeight: 26,
                  provider: d,
                  onInitialized: function (e) {
                    var t = ft.select(yt).subscribe(
                        (function () {
                          var t = Object(B.a)(
                            _.a.mark(function t(n) {
                              return _.a.wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (t.next = 2), C(e, n);
                                    case 2:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })()
                      ),
                      n = e.subscribeFor(
                        (function () {
                          var e = Object(B.a)(
                            _.a.mark(function e(t) {
                              var n, r, a;
                              return _.a.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        (n = Object(u.a)(t)),
                                          (e.prev = 1),
                                          (a = _.a.mark(function e() {
                                            var t, n, a;
                                            return _.a.wrap(function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    if (
                                                      ((t = r.value),
                                                      (n = t.kind),
                                                      (a = t.node),
                                                      "created" !== n)
                                                    ) {
                                                      e.next = 17;
                                                      break;
                                                    }
                                                    if (
                                                      "document" !==
                                                      a.metadata.kind
                                                    ) {
                                                      e.next = 11;
                                                      break;
                                                    }
                                                    return (
                                                      a.metadata.tab
                                                        ? (ft.dispatch(
                                                            ye(
                                                              a.parent.name,
                                                              a.metadata.tab,
                                                              a.metadata
                                                                .closeTabAfterCreation ||
                                                                !1
                                                            )
                                                          ),
                                                          delete a.metadata.tab,
                                                          delete a.metadata
                                                            .closeTabAfterCreation)
                                                        : ft.dispatch(
                                                            xe(
                                                              a.parent.metadata
                                                                .id,
                                                              a.name
                                                            )
                                                          ),
                                                      (e.next = 8),
                                                      y(a)
                                                    );
                                                  case 8:
                                                    (a.metadata.id = ft
                                                      .current(Ht)
                                                      .find(function (e) {
                                                        return (
                                                          e.name ===
                                                          a.parent.name
                                                        );
                                                      })
                                                      .documents.find(function (
                                                        e
                                                      ) {
                                                        return (
                                                          e.name === a.name
                                                        );
                                                      }).id),
                                                      (e.next = 15);
                                                    break;
                                                  case 11:
                                                    return (
                                                      ft.dispatch(Y(a.name)),
                                                      (e.next = 14),
                                                      y(a)
                                                    );
                                                  case 14:
                                                    a.metadata.id = ft
                                                      .current(Ht)
                                                      .find(function (e) {
                                                        return (
                                                          e.name === a.name
                                                        );
                                                      }).id;
                                                  case 15:
                                                    e.next = 18;
                                                    break;
                                                  case 17:
                                                    "document" ===
                                                    a.metadata.kind
                                                      ? ft.dispatch(
                                                          Oe(
                                                            a.metadata.id,
                                                            a.name
                                                          )
                                                        )
                                                      : ft.dispatch(
                                                          ve(
                                                            a.metadata.id,
                                                            a.name
                                                          )
                                                        );
                                                  case 18:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                          })),
                                          n.s();
                                      case 4:
                                        if ((r = n.n()).done) {
                                          e.next = 8;
                                          break;
                                        }
                                        return e.delegateYield(a(), "t0", 6);
                                      case 6:
                                        e.next = 4;
                                        break;
                                      case 8:
                                        e.next = 13;
                                        break;
                                      case 10:
                                        (e.prev = 10),
                                          (e.t1 = e.catch(1)),
                                          n.e(e.t1);
                                      case 13:
                                        return (
                                          (e.prev = 13), n.f(), e.finish(13)
                                        );
                                      case 16:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                null,
                                [[1, 10, 13, 16]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                        "created",
                        "renamed"
                      );
                    s &&
                      s.length > 0 &&
                      e.setFilter(function (e) {
                        return (
                          -1 !== e.name.toLowerCase().indexOf(s.toLowerCase())
                        );
                      }),
                      f.current.push(function () {
                        return t.unsubscribe();
                      }),
                      f.current.push(function () {
                        return n();
                      }),
                      (m.current = e);
                  },
                },
                function (e) {
                  return a.a.createElement(Xa, {
                    id: e.id,
                    depth: e.depth,
                    name: e.name,
                    path: e.path,
                    expanded: e.expanded,
                    expandable: e.expandable,
                    node: e,
                    onClick: h,
                    onDoubleClick: v,
                    onContextMenu: p,
                    renderIcon: fi,
                  });
                }
              )
            ),
            a.a.createElement(ci, null),
            a.a.createElement(si, null)
          )
        );
      });
      function pi() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 20px;\n  flex-direction: row;\n  justify-content: center;\n",
        ]);
        return (
          (pi = function () {
            return e;
          }),
          e
        );
      }
      function hi(e) {
        return "group" === e.metadata.kind
          ? a.a.createElement(
              Br,
              null,
              a.a.createElement(yr, {
                color: function (e) {
                  return e.yellow;
                },
              })
            )
          : a.a.createElement(
              vi,
              null,
              "mutation" === e.metadata.operationType
                ? a.a.createElement(Un, { title: "Mutation" })
                : "subscription" === e.metadata.operationType
                ? a.a.createElement(Yn, { title: "Subscription" })
                : a.a.createElement(Qn, { title: "Query" })
            );
      }
      var vi = en.div(pi()),
        bi = n(248),
        gi = n.n(bi);
      function xi() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  padding: 0 4px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n",
        ]);
        return (
          (xi = function () {
            return e;
          }),
          e
        );
      }
      function yi() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  align-items: center;\n  padding: 0 4px 0 0;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n",
        ]);
        return (
          (yi = function () {
            return e;
          }),
          e
        );
      }
      var Ei = Object(r.memo)(function (e) {
          var t = e.location,
            n = hr(),
            i = Object(mt.a)(n, 2),
            o = i[0],
            c = i[1],
            u = ht(St)
              .map(function (e) {
                var t,
                  n = gi()(e.timestamp).local();
                return Object(F.a)(
                  Object(F.a)({}, e),
                  {},
                  {
                    title:
                      ((t = e),
                      t.operationName && t.operationName.length > 0
                        ? "".concat(t.operationName, " [").concat(t.name, "]")
                        : t.name),
                    day: n.format("D MMMM YYYY"),
                    time: n.format("HH:mm"),
                  }
                );
              })
              .reduce(function (e, t) {
                var n = e.find(function (e) {
                  return e.title === t.day;
                });
                return (
                  n
                    ? n.items.push(t)
                    : ((n = { title: t.day, items: [t] }), e.push(n)),
                  e
                );
              }, []),
            l = ft.current(qt),
            s = (function (e) {
              return {
                comparer: function (e, t) {
                  var n = e.metadata.index,
                    r = t.metadata.index;
                  return n < r ? -1 : n > r ? 1 : 0;
                },
                getNodes: function (t, n) {
                  if (Ta.isRoot(t)) {
                    var r = e;
                    return (
                      n &&
                        (r = e.filter(function (e) {
                          return e.items.some(function (e) {
                            var t = e.title;
                            return n({ name: t });
                          });
                        })),
                      Promise.resolve(
                        r.map(function (e, t) {
                          return {
                            name: e.title,
                            expanded: !!n || 0 === t,
                            metadata: { kind: "group", index: t },
                          };
                        })
                      )
                    );
                  }
                  var a = Ta.getSegments(t);
                  if (a.length > 1) return Promise.resolve([]);
                  var i = e.find(function (e) {
                    return e.title === a[0];
                  });
                  if (i && i.items) {
                    var o = i.items.map(function (e, t) {
                      return {
                        name: e.title,
                        expandable: !1,
                        metadata: {
                          id: e.id,
                          kind: "item",
                          failed: e.failed,
                          index: t,
                          operationType: e.operationType,
                          time: e.time,
                        },
                      };
                    });
                    return (
                      n &&
                        (o = o.filter(function (e) {
                          return n(e);
                        })),
                      Promise.resolve(o)
                    );
                  }
                  return Promise.resolve([]);
                },
                validate: function (e) {
                  return Promise.resolve(ri.fail("This tree is read-only."));
                },
              };
            })(u),
            d = Object(r.useRef)([]),
            f = Object(r.useRef)(),
            m = function (e, t) {
              t.selected || (ni(t.model), (t.selected = !0)),
                "group" === t.metadata.kind
                  ? t.toggleExpanded()
                  : ft.dispatch(_e(t.metadata.id, !0));
            },
            p = function (e, t) {
              "item" === t.metadata.kind && ft.dispatch(_e(t.metadata.id, !1));
            },
            h = (function () {
              var e = Object(B.a)(
                _.a.mark(function e(t) {
                  return _.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((ft.dispatch(lt(t)), !f.current)) {
                            e.next = 9;
                            break;
                          }
                          if (!(t.length > 0)) {
                            e.next = 7;
                            break;
                          }
                          return (
                            (e.next = 5),
                            f.current.setFilter(function (e) {
                              return (
                                -1 !==
                                e.name.toLowerCase().indexOf(t.toLowerCase())
                              );
                            })
                          );
                        case 5:
                          e.next = 9;
                          break;
                        case 7:
                          return (e.next = 9), f.current.resetFilter();
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            v = function (e) {
              return a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(Ci, { title: e.name }, e.name),
                a.a.createElement(
                  Oi,
                  { title: e.metadata.time },
                  e.metadata.time
                ),
                "group" === e.metadata.kind
                  ? a.a.createElement(a.a.Fragment, null)
                  : a.a.createElement(
                      Oa,
                      {
                        title: e.metadata.failed
                          ? "Operation failed"
                          : "Operation succeeded",
                      },
                      e.metadata.failed
                        ? a.a.createElement(Mr, null)
                        : a.a.createElement(Fr, null)
                    )
              );
            };
          function b(e, t) {
            return g.apply(this, arguments);
          }
          function g() {
            return (g = Object(B.a)(
              _.a.mark(function e(t, n) {
                var r;
                return _.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!n) {
                          e.next = 11;
                          break;
                        }
                        if (
                          !(r = t.find(function (e) {
                            return (
                              e.metadata && e.metadata.id && e.metadata.id === n
                            );
                          }))
                        ) {
                          e.next = 8;
                          break;
                        }
                        return (
                          r.selected || (ni(t), (r.selected = !0)),
                          (e.next = 6),
                          r.ensureVisible()
                        );
                      case 6:
                        e.next = 9;
                        break;
                      case 8:
                        ni(t);
                      case 9:
                        e.next = 12;
                        break;
                      case 11:
                        ni(t);
                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          return (
            Object(r.useEffect)(function () {
              var e = d.current;
              return function () {
                for (var t; (t = e.pop()); ) t();
                f.current = void 0;
              };
            }, []),
            a.a.createElement(
              na,
              null,
              a.a.createElement(
                aa,
                { location: t },
                a.a.createElement(
                  xa,
                  null,
                  a.a.createElement(Nr, {
                    color: function (e) {
                      return e.sideBarHeaderText;
                    },
                  })
                ),
                a.a.createElement(ba, null, "History"),
                a.a.createElement(
                  oa,
                  {
                    title: "Clear History",
                    onClick: function () {
                      ft.dispatch(ke);
                    },
                  },
                  a.a.createElement(kr, {
                    color: function (e) {
                      return e.sideBarHeaderText;
                    },
                  })
                )
              ),
              a.a.createElement(da, {
                ref: c,
                searchTerm: l,
                onSearchTermChange: h,
              }),
              a.a.createElement(
                wn,
                { ref: o },
                a.a.createElement(
                  Ba,
                  {
                    id: "history",
                    itemHeight: 26,
                    provider: s,
                    onInitialized: function (e) {
                      var t = ft.select(yt).subscribe(
                        (function () {
                          var t = Object(B.a)(
                            _.a.mark(function t(n) {
                              return _.a.wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      b(e, n);
                                    case 1:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })()
                      );
                      l &&
                        l.length > 0 &&
                        e.setFilter(function (e) {
                          return (
                            -1 !== e.name.toLowerCase().indexOf(l.toLowerCase())
                          );
                        }),
                        (f.current = e),
                        d.current.push(function () {
                          return t.unsubscribe();
                        });
                    },
                  },
                  function (e) {
                    return a.a.createElement(Xa, {
                      id: e.id,
                      depth: e.depth,
                      name: e.name,
                      path: e.path,
                      expanded: e.expanded,
                      expandable: e.expandable,
                      node: e,
                      onClick: m,
                      onDoubleClick: p,
                      renderIcon: hi,
                      renderName: v,
                    });
                  }
                )
              )
            )
          );
        }),
        Ci = en.h3(yi()),
        Oi = en.div(xi()),
        ki = Ei;
      function ji(e) {
        return e.map(function (e, t) {
          return {
            name: e.name,
            expandable: !1,
            metadata: { id: e.id, index: t, kind: "field", field: e },
          };
        });
      }
      function wi(e) {
        return e.map(function (e, t) {
          return {
            name: e.name,
            expandable: !0,
            expanded: !0,
            metadata: { id: e.id, index: t, kind: "type", type: e },
          };
        });
      }
      function Li() {
        var e = Object(c.a)([
          "\n  flex: 1 1 auto;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n",
        ]);
        return (
          (Li = function () {
            return e;
          }),
          e
        );
      }
      var Hi = Object(r.memo)(function (e) {
          var t = e.location,
            n = hr(),
            i = Object(mt.a)(n, 2),
            o = i[0],
            c = i[1],
            l = ft.current(Kt),
            s = {
              comparer: function (e, t) {
                var n = e.metadata.index,
                  r = t.metadata.index;
                return n < r ? -1 : n > r ? 1 : 0;
              },
              getNodes: (function () {
                var e = Object(B.a)(
                  _.a.mark(function e(t, n) {
                    var r, a, i, o, c, l, s, d;
                    return _.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!Ta.isRoot(t)) {
                                e.next = 33;
                                break;
                              }
                              return (
                                (r = new Map()), (e.next = 4), Je.getRootTypes()
                              );
                            case 4:
                              if (((e.t0 = e.sent), e.t0)) {
                                e.next = 7;
                                break;
                              }
                              e.t0 = [];
                            case 7:
                              if (((a = e.t0), !n)) {
                                e.next = 32;
                                break;
                              }
                              (i = Object(u.a)(a)), (e.prev = 10), i.s();
                            case 12:
                              if ((o = i.n()).done) {
                                e.next = 23;
                                break;
                              }
                              return (
                                (c = o.value),
                                (e.next = 16),
                                Je.getFields(c.name)
                              );
                            case 16:
                              if (((e.t1 = e.sent), e.t1)) {
                                e.next = 19;
                                break;
                              }
                              e.t1 = [];
                            case 19:
                              (l = e.t1),
                                r.set(
                                  c.name,
                                  l.filter(function (e) {
                                    var t = e.name;
                                    return n({ name: t });
                                  }).length > 0
                                );
                            case 21:
                              e.next = 12;
                              break;
                            case 23:
                              e.next = 28;
                              break;
                            case 25:
                              (e.prev = 25), (e.t2 = e.catch(10)), i.e(e.t2);
                            case 28:
                              return (e.prev = 28), i.f(), e.finish(28);
                            case 31:
                              return e.abrupt(
                                "return",
                                wi(
                                  a.filter(function (e) {
                                    var t = e.name;
                                    return n({ name: t }) || r.get(t);
                                  })
                                )
                              );
                            case 32:
                              return e.abrupt("return", wi(a));
                            case 33:
                              return (
                                (s = t.substring(1)),
                                (e.next = 36),
                                Je.getFields(s)
                              );
                            case 36:
                              if (((e.t3 = e.sent), e.t3)) {
                                e.next = 39;
                                break;
                              }
                              e.t3 = [];
                            case 39:
                              if (((d = e.t3), !n)) {
                                e.next = 42;
                                break;
                              }
                              return e.abrupt(
                                "return",
                                ji(
                                  d.filter(function (e) {
                                    var t = e.name;
                                    return n({ name: t });
                                  })
                                )
                              );
                            case 42:
                              return e.abrupt("return", ji(d));
                            case 43:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[10, 25, 28, 31]]
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              validate: function () {
                return Promise.resolve(ri.fail("This tree is read-only."));
              },
            },
            d = Object(r.useRef)([]),
            f = Object(r.useRef)(),
            m = Object(r.useRef)(),
            p = function (e, t) {
              switch (
                (t.selected || (ni(t.model), (t.selected = !0)),
                t.metadata.kind)
              ) {
                case "field":
                  ft.dispatch(Be(t.metadata.field, Ae.session, !0));
                  break;
                case "type":
                  t.toggleExpanded(),
                    ft.dispatch(Be(t.metadata.type, Ae.session, !0));
              }
            },
            h = function (e, t) {
              ft.dispatch(
                Be(t.metadata.field || t.metadata.type, Ae.session, !1)
              );
            },
            v = (function () {
              var e = Object(B.a)(
                _.a.mark(function e(t) {
                  return _.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((ft.dispatch(st(t)), !m.current)) {
                            e.next = 9;
                            break;
                          }
                          if (!(t.length > 0)) {
                            e.next = 7;
                            break;
                          }
                          return (
                            (e.next = 5),
                            m.current.setFilter(function (e) {
                              return (
                                -1 !==
                                e.name.toLowerCase().indexOf(t.toLowerCase())
                              );
                            })
                          );
                        case 5:
                          e.next = 9;
                          break;
                        case 7:
                          return (e.next = 9), m.current.resetFilter();
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            b = function (e) {
              var t = e.metadata.type;
              return a.a.createElement(
                Br,
                null,
                t ? Kr(t.typeKind) : a.a.createElement(Vr, null)
              );
            },
            g = function (e) {
              return e.metadata.type
                ? a.a.createElement(Si, null, e.name)
                : a.a.createElement(
                    Si,
                    null,
                    e.name,
                    e.metadata.field.arguments &&
                      e.metadata.field.arguments.length > 0 &&
                      "(...)",
                    ": ",
                    x(e.metadata.field.valueType)
                  );
            },
            x = function e(t) {
              var n = [];
              if ("value-type" === t.kind) {
                var r = e(t.type);
                t.isList ? n.push("[".concat(r, "]")) : n.push(r),
                  t.isOptional || n.push("!");
              } else n.push(t.name);
              return n.join("");
            };
          function y(e, t) {
            return E.apply(this, arguments);
          }
          function E() {
            return (E = Object(B.a)(
              _.a.mark(function e(t, n) {
                var r;
                return _.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!n) {
                          e.next = 11;
                          break;
                        }
                        if (
                          !(r = t.find(function (e) {
                            return (
                              e.metadata && e.metadata.id && e.metadata.id === n
                            );
                          }))
                        ) {
                          e.next = 8;
                          break;
                        }
                        return (
                          r.selected || (ni(t), (r.selected = !0)),
                          (e.next = 6),
                          r.ensureVisible()
                        );
                      case 6:
                        e.next = 9;
                        break;
                      case 8:
                        ni(t);
                      case 9:
                        e.next = 12;
                        break;
                      case 11:
                        ni(t);
                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          return (
            Object(r.useEffect)(function () {
              var e = d.current;
              return function () {
                for (var t; (t = e.pop()); ) t();
                (f.current = void 0), (m.current = void 0);
              };
            }, []),
            a.a.createElement(
              na,
              null,
              a.a.createElement(
                aa,
                { location: t },
                a.a.createElement(
                  xa,
                  null,
                  a.a.createElement(xr, {
                    color: function (e) {
                      return e.sideBarHeaderText;
                    },
                  })
                ),
                a.a.createElement(ba, null, "Schema")
              ),
              a.a.createElement(da, {
                ref: c,
                searchTerm: l,
                onSearchTermChange: v,
              }),
              a.a.createElement(
                wn,
                { ref: o },
                a.a.createElement(
                  Ba,
                  {
                    id: "schema",
                    itemHeight: 26,
                    provider: s,
                    onInitialized: function (e) {
                      var t = !1,
                        n = ft.select(yt).subscribe(
                          (function () {
                            var t = Object(B.a)(
                              _.a.mark(function t(n) {
                                return _.a.wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (t.next = 2), y(e, n);
                                      case 2:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                              })
                            );
                            return function (e) {
                              return t.apply(this, arguments);
                            };
                          })()
                        ),
                        r = qe.subscribeToSchemaInfoChange(
                          (function () {
                            var n = Object(B.a)(
                              _.a.mark(function n(r) {
                                return _.a.wrap(function (n) {
                                  for (;;)
                                    switch ((n.prev = n.next)) {
                                      case 0:
                                        if (!t || f.current === r.endpoint) {
                                          n.next = 4;
                                          break;
                                        }
                                        return (
                                          (f.current = r.endpoint),
                                          (n.next = 4),
                                          e.reload()
                                        );
                                      case 4:
                                      case "end":
                                        return n.stop();
                                    }
                                }, n);
                              })
                            );
                            return function (e) {
                              return n.apply(this, arguments);
                            };
                          })()
                        );
                      l &&
                        l.length > 0 &&
                        e.setFilter(function (e) {
                          return (
                            -1 !== e.name.toLowerCase().indexOf(l.toLowerCase())
                          );
                        });
                      var a = e.subscribeFor(
                        Object(B.a)(
                          _.a.mark(function t() {
                            var n;
                            return _.a.wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (n = ft.current(yt)),
                                      (t.next = 3),
                                      y(e, n)
                                    );
                                  case 3:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          })
                        ),
                        "reloaded"
                      );
                      d.current.push(function () {
                        return n.unsubscribe();
                      }),
                        d.current.push(function () {
                          return a();
                        }),
                        d.current.push(function () {
                          return r.unsubscribe();
                        }),
                        (m.current = e),
                        (t = !0);
                    },
                  },
                  function (e) {
                    return a.a.createElement(Xa, {
                      id: e.id,
                      depth: e.depth,
                      name: e.name,
                      path: e.path,
                      expanded: e.expanded,
                      expandable: e.expandable,
                      node: e,
                      onClick: p,
                      onDoubleClick: h,
                      renderIcon: b,
                      renderName: g,
                    });
                  }
                )
              )
            )
          );
        }),
        Si = en.div(Li()),
        Ti = Hi,
        Ii = function (e) {
          var t = e.location;
          switch (ht(xt)) {
            case E.QueryDocuments:
              return a.a.createElement(mi, { location: t });
            case E.History:
              return a.a.createElement(ki, { location: t });
            case E.Schema:
              return a.a.createElement(Ti, { location: t });
            default:
              throw Error();
          }
        };
      function Mi() {
        var e = Object(c.a)([
          "\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 64px;\n  height: 64px;\n  transform: translate(-50%, -50%);\n  z-index: 30;\n\n  > ",
          ":nth-child(1) {\n    animation-delay: -0.45s;\n  }\n\n  > ",
          ":nth-child(2) {\n    animation-delay: -0.3s;\n  }\n\n  > ",
          ":nth-child(3) {\n    animation-delay: -0.15s;\n  }\n",
        ]);
        return (
          (Mi = function () {
            return e;
          }),
          e
        );
      }
      function Vi() {
        var e = Object(c.a)([
          "\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 52px;\n  height: 52px;\n  margin: 6px;\n  border: 6px solid ",
          ";\n  border-radius: 100%;\n  animation: ",
          " 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: ",
          " transparent\n    transparent transparent;\n",
        ]);
        return (
          (Vi = function () {
            return e;
          }),
          e
        );
      }
      function zi() {
        var e = Object(c.a)([
          "\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n",
        ]);
        return (
          (zi = function () {
            return e;
          }),
          e
        );
      }
      var _i = function () {
          return a.a.createElement(
            Ri,
            null,
            a.a.createElement(Ni, null),
            a.a.createElement(Ni, null),
            a.a.createElement(Ni, null),
            a.a.createElement(Ni, null)
          );
        },
        Bi = Yt(zi()),
        Ni = en.div(
          Vi(),
          function (e) {
            return e.theme.sideBarHeaderBg;
          },
          Bi,
          function (e) {
            return e.theme.sideBarHeaderBg;
          }
        ),
        Ri = en.div(Mi(), Ni, Ni, Ni);
      function Pi() {
        var e = Object(c.a)([
          "\n  flex: 0 0 30px;\n  height: 30px;\n  color: ",
          ";\n  opacity: 0.75;\n  transition: color 0.2s ease, opacity 0.2s ease;\n\n  &:hover {\n    color: ",
          ";\n    opacity: 1;\n  }\n",
        ]);
        return (
          (Pi = function () {
            return e;
          }),
          e
        );
      }
      var Di = en.button(
        Pi(),
        function (e) {
          return e.theme.contentTabText;
        },
        function (e) {
          return e.theme.contentTabTextActive;
        }
      );
      function Zi() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  height: 30px;\n  padding: 0 12px;\n  color: ",
          ";\n  cursor: pointer;\n  opacity: 0.75;\n  transition: background-color 0.2s ease, color 0.2s ease, opacity 0.2s ease;\n\n  &.active,\n  &.active:hover {\n    background-color: ",
          ";\n    color: ",
          ";\n    opacity: 1;\n  }\n\n  &:hover {\n    color: ",
          ";\n    opacity: 1;\n  }\n",
        ]);
        return (
          (Zi = function () {
            return e;
          }),
          e
        );
      }
      var Ai = en.div(
        Zi(),
        function (e) {
          return e.theme.contentTabText;
        },
        function (e) {
          return e.theme.contentTabBgActive;
        },
        function (e) {
          return e.theme.contentTabTextActive;
        },
        function (e) {
          return e.theme.contentTabTextActive;
        }
      );
      function Fi() {
        var e = Object(c.a)(["\n  padding-right: 10px;\n"]);
        return (
          (Fi = function () {
            return e;
          }),
          e
        );
      }
      en(Dn.a)(Fi());
      function Wi() {
        var e = Object(c.a)([
          "\n  display: flex;\n  justify-content: center;\n  padding-right: 6px;\n",
        ]);
        return (
          (Wi = function () {
            return e;
          }),
          e
        );
      }
      var qi = Ut.default.div(Wi());
      function Ki() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: row;\n  height: 100%;\n  background-color: ",
          ";\n",
        ]);
        return (
          (Ki = function () {
            return e;
          }),
          e
        );
      }
      var Ui = en.div(Ki(), function (e) {
        return e.theme.contentTabsBg;
      });
      function Ji() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n",
        ]);
        return (
          (Ji = function () {
            return e;
          }),
          e
        );
      }
      var Qi = en.div(Ji());
      function Gi() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  opacity: 0.75;\n  font-size: 1.667em;\n  color: ",
          ";\n",
        ]);
        return (
          (Gi = function () {
            return e;
          }),
          e
        );
      }
      var Yi = en.div(Gi(), function (e) {
        return e.theme.textColor;
      });
      function Xi() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: row;\n  justify-content: center;\n  border-bottom: 1px solid ",
          ";\n  padding: 0 8px;\n  color: ",
          ";\n",
        ]);
        return (
          (Xi = function () {
            return e;
          }),
          e
        );
      }
      var $i = en.div(
        Xi(),
        function (e) {
          return e.theme.contentBorder;
        },
        function (e) {
          return e.theme.textColor;
        }
      );
      function eo() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 30px;\n  flex-direction: row;\n  align-items: center;\n  background-color: ",
          ";\n",
        ]);
        return (
          (eo = function () {
            return e;
          }),
          e
        );
      }
      var to,
        no = en.footer(eo(), function (e) {
          return e.theme.sideBarBg;
        });
      function ro() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: row;\n  align-items: center;\n  padding: 6px 11px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: background-color 0.2s ease, color 0.2s ease;\n\n  &:hover {\n    background-color: ",
          ";\n    color: ",
          ";\n  }\n",
        ]);
        return (
          (ro = function () {
            return e;
          }),
          e
        );
      }
      function ao() {
        var e = Object(c.a)([
          "\n  display: flex;\n  position: absolute;\n  z-index: 20;\n  flex-direction: column;\n  top: ",
          "px;\n  left: ",
          "px;\n  max-width: 200px;\n  min-width: ",
          "px;\n  border: 1px solid ",
          ";\n  background-color: ",
          ";\n  color: ",
          ";\n",
        ]);
        return (
          (ao = function () {
            return e;
          }),
          e
        );
      }
      function io() {
        var e = Object(c.a)([
          "\n  display: flex;\n  align-items: center;\n\n  & > svg {\n    margin-left: 7px;\n  }\n",
        ]);
        return (
          (io = function () {
            return e;
          }),
          e
        );
      }
      function oo() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: row;\n  align-items: center;\n  padding: 11px 11px 10px;\n  color: ",
          ";\n  cursor: ",
          ";\n  transition: color 0.2s ease;\n\n  &:hover {\n    color: ",
          ";\n  }\n",
        ]);
        return (
          (oo = function () {
            return e;
          }),
          e
        );
      }
      !(function (e) {
        (e[(e.collapse = 0)] = "collapse"),
          (e[(e.expand = 1)] = "expand"),
          (e[(e.select = 2)] = "select");
      })(to || (to = {}));
      var co = Object(r.memo)(function (e) {
        var t = { expanded: !1, selected: e.selected },
          n = Object(r.useReducer)(uo, t),
          o = Object(mt.a)(n, 2),
          c = o[0],
          u = o[1];
        return (
          Object(r.useEffect)(
            function () {
              u({ type: to.select, selected: e.selected });
            },
            [e.selected]
          ),
          Object(r.useEffect)(
            function () {
              var e = function () {
                c.expanded && u({ type: to.collapse });
              };
              return (
                document.addEventListener("click", e),
                document.addEventListener("contextmenu", e),
                window.addEventListener("resize", e),
                function () {
                  document.removeEventListener("click", e),
                    document.addEventListener("contextmenu", e),
                    window.removeEventListener("resize", e);
                }
              );
            },
            [c.expanded]
          ),
          a.a.createElement(
            lo,
            {
              disabled: e.disabled,
              onClick: function (t) {
                if (!e.disabled)
                  if (c.expanded) u({ type: to.collapse });
                  else {
                    var n = t.currentTarget.getBoundingClientRect();
                    u({
                      type: to.expand,
                      top: n.bottom,
                      left: n.left,
                      width: n.width,
                    });
                  }
              },
            },
            a.a.createElement(
              so,
              { title: c.selected.title },
              c.selected.content,
              a.a.createElement(Er, null)
            ),
            c.expanded &&
              Object(i.createPortal)(
                a.a.createElement(
                  fo,
                  { menuState: c },
                  e.options.map(function (t) {
                    return a.a.createElement(
                      mo,
                      {
                        key: t.key,
                        title: t.title,
                        onClick: function (n) {
                          return (function (t, n) {
                            t.stopPropagation(),
                              e.onSelectionChange && e.onSelectionChange(n),
                              u({ type: to.select, selected: n });
                          })(n, t);
                        },
                      },
                      t.content
                    );
                  })
                ),
                document.getElementById("components")
              )
          )
        );
      });
      function uo(e, t) {
        switch (t.type) {
          case to.collapse:
            return { expanded: !1, selected: e.selected };
          case to.expand:
            return {
              expanded: !0,
              selected: e.selected,
              top: t.top,
              left: t.left,
              width: t.width,
            };
          case to.select:
            return Object(F.a)(
              Object(F.a)({}, e),
              {},
              { selected: t.selected }
            );
        }
        throw new Error();
      }
      var lo = en.div(
          oo(),
          function (e) {
            return e.theme.contextMenuText;
          },
          function (e) {
            return e.disabled ? "default" : "pointer";
          },
          function (e) {
            return e.theme.contextMenuText;
          }
        ),
        so = en.div(io()),
        fo = en.div(
          ao(),
          function (e) {
            return e.menuState.top || 0;
          },
          function (e) {
            return e.menuState.left ? e.menuState.left - 1 : 0;
          },
          function (e) {
            return e.menuState.width || 0;
          },
          function (e) {
            return e.theme.contextMenuBorder;
          },
          function (e) {
            return e.theme.contextMenuBg;
          },
          function (e) {
            return e.theme.contextMenuText;
          }
        ),
        mo = en.div(
          ro(),
          function (e) {
            return e.theme.contextMenuItemBgActive;
          },
          function (e) {
            return e.theme.contextMenuItemTextActive;
          }
        ),
        po = Object(r.memo)(function (e) {
          var t = [
              { content: "GET", key: "GET", title: "GET", value: "GET" },
              { content: "POST", key: "POST", title: "POST", value: "POST" },
            ],
            n =
              (e.selectedKey &&
                t.find(function (t) {
                  return t.key === e.selectedKey;
                })) ||
              t[1];
          return a.a.createElement(co, {
            disabled: e.disabled,
            options: t,
            selected: n,
            onSelectionChange: e.onSelectionChange,
          });
        });
      var ho = Object(r.memo)(function (e) {
        var t = (function (e) {
          var t = Object(r.useRef)(null);
          return (
            Object(r.useEffect)(
              function () {
                var n = t.current,
                  r = {
                    contextmenu: !1,
                    minimap: { enabled: !1 },
                    model: e,
                    showFoldingControls: "always",
                    fixedOverflowWidgets: !0,
                    theme: "light",
                    fontSize: 13,
                  },
                  a = nn.editor.create(n, r),
                  i = a.onDidChangeModelContent(function (e) {
                    a.setScrollPosition({ scrollLeft: 0, scrollTop: 0 });
                  });
                function o() {
                  var e = n.parentElement.getBoundingClientRect();
                  (a.getLayoutInfo().width === e.width &&
                    a.getLayoutInfo().height === e.height) ||
                    a.layout({ width: e.width, height: e.height });
                }
                return (
                  window.addEventListener("splitterchange", o),
                  function () {
                    window.removeEventListener("splitterchange", o),
                      i.dispose(),
                      a.dispose();
                  }
                );
              },
              [e]
            ),
            t
          );
        })(
          (function (e) {
            var t = Object(r.useRef)(nn.editor.createModel("", "json")),
              n = e.content;
            return (
              t.current.updateOptions({ insertSpaces: !0, tabSize: 2 }),
              Object(r.useEffect)(
                function () {
                  var e = (n && JSON.stringify(n, null, 2)) || "";
                  t.current.setValue(e);
                },
                [t, n]
              ),
              t.current
            );
          })(e)
        );
        return a.a.createElement($n, { ref: t });
      });
      function vo() {
        var e = Object(c.a)([
          "\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: row;\n",
        ]);
        return (
          (vo = function () {
            return e;
          }),
          e
        );
      }
      en.div(vo());
      function bo() {
        var e = Object(c.a)([
          "\n  flex: 1 1 auto;\n  border: 0 none;\n  padding: 11px 11px;\n  background: #fff;\n  color: ",
          ";\n",
        ]);
        return (
          (bo = function () {
            return e;
          }),
          e
        );
      }
      var go = en.input(bo(), function (e) {
        return e.theme.textColor;
      });
      function xo() {
        var e = Object(c.a)([
          "\n  display: inline-block;\n  position: relative;\n  width: 18px;\n  height: 18px;\n\n  > ",
          ":nth-child(1) {\n    animation-delay: -0.45s;\n  }\n\n  > ",
          ":nth-child(2) {\n    animation-delay: -0.3s;\n  }\n\n  > ",
          ":nth-child(3) {\n    animation-delay: -0.15s;\n  }\n",
        ]);
        return (
          (xo = function () {
            return e;
          }),
          e
        );
      }
      function yo() {
        var e = Object(c.a)([
          "\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  margin: 2px;\n  border: 2px solid ",
          ";\n  border-radius: 100%;\n  animation: ",
          " 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: ",
          " transparent transparent\n    transparent;\n",
        ]);
        return (
          (yo = function () {
            return e;
          }),
          e
        );
      }
      function Eo() {
        var e = Object(c.a)([
          "\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n",
        ]);
        return (
          (Eo = function () {
            return e;
          }),
          e
        );
      }
      var Co = function () {
          return a.a.createElement(
            jo,
            null,
            a.a.createElement(ko, null),
            a.a.createElement(ko, null),
            a.a.createElement(ko, null),
            a.a.createElement(ko, null)
          );
        },
        Oo = Yt(Eo()),
        ko = en.div(
          yo(),
          function (e) {
            return e.theme.tabsBg;
          },
          Oo,
          function (e) {
            return e.theme.tabsBg;
          }
        ),
        jo = en.div(xo(), ko, ko, ko);
      function wo() {
        var e = Object(c.a)(["\n  flex: 0 0 auto;\n  padding: 10px 11px 0;\n"]);
        return (
          (wo = function () {
            return e;
          }),
          e
        );
      }
      var Lo = Ut.default.div(wo());
      function Ho() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  align-items: center;\n  justify-content: center;\n  height: 30px;\n",
        ]);
        return (
          (Ho = function () {
            return e;
          }),
          e
        );
      }
      function So() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 100px;\n  flex-direction: row;\n  background: #cecece;\n  border-left: 1px solid ",
          ";\n  height: 100%;\n",
        ]);
        return (
          (So = function () {
            return e;
          }),
          e
        );
      }
      var To = function () {
          var e = Object(r.useState)(ft.current(Ft) || 1),
            t = Object(mt.a)(e, 2),
            n = t[0],
            i = t[1],
            o = window.electronWebFrame,
            c = Object(r.useCallback)(
              function (e) {
                o.setZoomFactor(e),
                  i(e),
                  ft.dispatch(
                    (function (e) {
                      return function (t) {
                        t.preferences
                          ? (t.preferences.zoomFactor = e)
                          : (t.preferences = { zoomFactor: e });
                      };
                    })(e)
                  );
              },
              [o]
            ),
            u = Object(r.useCallback)(
              function () {
                var e = (o && o.getZoomFactor && n) || void 0;
                if (e && e < 2)
                  switch (e) {
                    case 1:
                      c(1.1);
                      break;
                    case 1.1:
                      c(1.25);
                      break;
                    case 1.25:
                      c(1.5);
                      break;
                    case 1.5:
                      c(1.75);
                      break;
                    case 1.75:
                      c(2);
                  }
              },
              [n, c, o]
            ),
            l = Object(r.useCallback)(
              function () {
                var e = (o && o.getZoomFactor && n) || void 0;
                if (e && e > 1)
                  switch (e) {
                    case 1.1:
                      c(1);
                      break;
                    case 1.25:
                      c(1.1);
                      break;
                    case 1.5:
                      c(1.25);
                      break;
                    case 1.75:
                      c(1.5);
                      break;
                    case 2:
                      c(1.75);
                  }
              },
              [n, c, o]
            );
          return (
            Object(r.useEffect)(
              function () {
                var e = function (e) {
                  if (e.ctrlKey)
                    switch (e.keyCode) {
                      case 187:
                        u();
                        break;
                      case 189:
                        l();
                    }
                };
                return (
                  o && n > 1 && o.setZoomFactor(n),
                  document.addEventListener("keydown", e),
                  function () {
                    document.removeEventListener("keydown", e);
                  }
                );
              },
              [n, o, u, l]
            ),
            a.a.createElement(
              Io,
              null,
              a.a.createElement(
                Di,
                { onClick: l },
                a.a.createElement(ea, null)
              ),
              a.a.createElement(Mo, null, (100 * n).toFixed(0), "%"),
              a.a.createElement(Di, { onClick: u }, a.a.createElement($r, null))
            )
          );
        },
        Io = en.div(So(), function (e) {
          return e.theme.contentBorder;
        }),
        Mo = en.div(Ho()),
        Vo = function () {
          ht(jt);
          var e = ht(Te),
            t = ht(It),
            n = ht(Bt),
            r = O(ft.current(Se)),
            i = function (n) {
              return t || e !== n ? "" : "active";
            },
            o = function (e) {
              ft.dispatch(
                (function (e) {
                  return function (t) {
                    Te(t) === e
                      ? (t.settings.footerCollapsed = !t.settings
                          .footerCollapsed)
                      : (t.settings.footerCollapsed &&
                          (t.settings.footerCollapsed = !1),
                        (t.selectedFooterItemId = e));
                  };
                })(e)
              );
            };
          return a.a.createElement(
            no,
            null,
            a.a.createElement(
              Ui,
              null,
              a.a.createElement(
                Ai,
                {
                  title: "Tab: Console",
                  className: i("console"),
                  onClick: function () {
                    return o("console");
                  },
                },
                a.a.createElement(qi, null, a.a.createElement(Hr, null)),
                "Console"
              ),
              r &&
                a.a.createElement(
                  Ai,
                  {
                    title: "Tab: Results",
                    className: i("results"),
                    onClick: function () {
                      return o("results");
                    },
                  },
                  a.a.createElement(qi, null, a.a.createElement(Ur, null)),
                  "Results"
                )
            ),
            r &&
              a.a.createElement(
                Di,
                {
                  onClick: function () {
                    ft.dispatch(
                      (function (e) {
                        return function (t) {
                          t.preferences
                            ? (t.preferences.resultOrientation = e)
                            : (t.preferences = { resultOrientation: e });
                        };
                      })("vertical" === n ? "horizontal" : "vertical")
                    );
                  },
                },
                "horizontal" === n
                  ? a.a.createElement(Gr, null)
                  : a.a.createElement(Yr, null)
              ),
            a.a.createElement(To, null)
          );
        };
      function zo() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  overflow-y: auto;\n",
        ]);
        return (
          (zo = function () {
            return e;
          }),
          e
        );
      }
      var _o = en.aside(zo()),
        Bo = Object(r.memo)(function (e) {
          var t = e.tabId,
            n = Object(r.useState)(),
            i = Object(mt.a)(n, 2),
            o = i[0],
            c = i[1];
          return (
            Object(r.useEffect)(
              function () {
                var e = De.subscribeToSelected(t, c);
                return function () {
                  e.unsubscribe();
                };
              },
              [t]
            ),
            (null === o || void 0 === o ? void 0 : o.details)
              ? a.a.createElement(ho, { content: o.details })
              : a.a.createElement(Yi, null, "No details")
          );
        });
      function No() {
        var e = Object(c.a)([
          "\n  flex: 0 0 45px;\n  padding: 0 6px;\n  white-space: nowrap;\n  text-align: right;\n",
        ]);
        return (
          (No = function () {
            return e;
          }),
          e
        );
      }
      function Ro() {
        var e = Object(c.a)([
          "\n  flex: 1 1 auto;\n  padding: 0 6px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n",
        ]);
        return (
          (Ro = function () {
            return e;
          }),
          e
        );
      }
      function Po() {
        var e = Object(c.a)([
          "\n  flex: 0 0 75px;\n  padding: 0 6px;\n  white-space: nowrap;\n  text-align: right;\n",
        ]);
        return (
          (Po = function () {
            return e;
          }),
          e
        );
      }
      function Do() {
        var e = Object(c.a)(["\n  margin-right: 5px;\n"]);
        return (
          (Do = function () {
            return e;
          }),
          e
        );
      }
      function Zo() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 ",
          "px;\n  flex-direction: row;\n  align-items: center;\n  border-bottom: 1px solid ",
          ";\n  padding: 5px 3px 5px 10px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  background-color: ",
          ";\n\n  :hover {\n    background-color: ",
          ";\n  }\n",
        ]);
        return (
          (Zo = function () {
            return e;
          }),
          e
        );
      }
      var Ao = en.div(
          Zo(),
          function (e) {
            return e.height;
          },
          function (e) {
            return e.theme.sideBarBg;
          },
          function (e) {
            return e.selected ? e.theme.sideBarBg : "transparent";
          },
          function (e) {
            return e.theme.sideBarBg;
          }
        ),
        Fo = en(Br)(Do()),
        Wo = en.div(Po()),
        qo = en.div(Ro()),
        Ko = en.div(No()),
        Uo = Object(r.memo)(function (e) {
          var t = e.level,
            n = e.message,
            r = e.selected,
            i = e.timestamp;
          return a.a.createElement(
            Ao,
            { height: Jo, selected: r },
            a.a.createElement(
              Fo,
              null,
              t === Pe.LogLevel.error
                ? a.a.createElement(Mr, null)
                : t === Pe.LogLevel.warning
                ? a.a.createElement(Xr, null)
                : a.a.createElement(Rr, null)
            ),
            a.a.createElement(qo, null, n),
            a.a.createElement(Wo, null, gi()(i).local().format("HH:mm:ss.SSS"))
          );
        }),
        Jo = 27;
      function Qo() {
        var e = Object(c.a)([
          "\n  border-radius: 4px;\n  padding: 3px 5px;\n  background: ",
          ";\n  color: ",
          ";\n  transition: background-color 0.2s ease;\n\n  &:hover {\n    background-color: ",
          ";\n  }\n",
        ]);
        return (
          (Qo = function () {
            return e;
          }),
          e
        );
      }
      function Go() {
        var e = Object(c.a)([
          "\n  position: absolute;\n  bottom: 5px;\n  width: 100%;\n  text-align: center;\n",
        ]);
        return (
          (Go = function () {
            return e;
          }),
          e
        );
      }
      var Yo = Object(r.memo)(function (e) {
          var t = e.tabId,
            n = Object(r.useRef)(null),
            i = Object(r.useRef)(null),
            o = Object(r.useRef)(!1),
            c = Object(r.useRef)(),
            u = Object(r.useCallback)(
              function (e) {
                De.setSelectedId(t, e.id);
              },
              [t]
            ),
            l = Object(r.useCallback)(
              function () {
                De.setSelectNewest(t, !0);
              },
              [t]
            ),
            s = function (e) {
              o.current && De.setScrollPosition(t, e.scrollOffset);
            },
            d = Object(r.memo)(function (e) {
              var t = e.data,
                n = e.index,
                r = e.style,
                i = t,
                o = i.entries[n];
              return a.a.createElement(
                "div",
                {
                  key: "result-".concat(o.id),
                  style: r,
                  onClick: function () {
                    return u(o);
                  },
                },
                a.a.createElement(Uo, {
                  key: o.id,
                  level: o.level,
                  message: o.message,
                  selected: o.id === i.selectedId,
                  timestamp: o.timestamp,
                })
              );
            }, ja.b);
          return (
            Object(r.useEffect)(
              function () {
                var e = De.subscribe(t, function (e) {
                  e
                    ? ((c.current = e),
                      n.current.forceUpdate(function () {
                        i.current &&
                          (c.current.selectNewest
                            ? i.current.scrollToItem(
                                c.current.entries.length - 1,
                                "end"
                              )
                            : i.current.scrollTo(c.current.scrollPosition)),
                          (o.current = !0);
                      }))
                    : ((c.current = void 0),
                      (o.current = !1),
                      n.current.forceUpdate());
                });
                return function () {
                  e.unsubscribe(), (c.current = void 0), (o.current = !1);
                };
              },
              [t]
            ),
            a.a.createElement(ka.a, { ref: n }, function (e) {
              var t = e.width,
                n = e.height;
              return a.a.createElement(
                "div",
                { tabIndex: -1, style: { width: t + "px", height: n + "px" } },
                c.current && c.current.entries.length > 0
                  ? a.a.createElement(
                      a.a.Fragment,
                      null,
                      a.a.createElement(
                        ja.a,
                        {
                          width: t,
                          height: n,
                          layout: "vertical",
                          itemSize: Jo,
                          itemKey: function (e) {
                            return "result-".concat(e);
                          },
                          itemData: c.current,
                          itemCount: c.current.entries.length,
                          overscanCount: 5,
                          ref: i,
                          onScroll: s,
                        },
                        d
                      ),
                      c.current.hasNewEntries &&
                        a.a.createElement(
                          Xo,
                          null,
                          a.a.createElement(
                            $o,
                            { onClick: l },
                            "Jump to newest logs"
                          )
                        )
                    )
                  : a.a.createElement(Yi, null, "No logs")
              );
            })
          );
        }),
        Xo = en.div(Go()),
        $o = en.button(
          Qo(),
          function (e) {
            return e.theme.navBgColor2;
          },
          function (e) {
            return e.theme.navItemText;
          },
          function (e) {
            return e.theme.navItemActiveBgColor;
          }
        ),
        ec = function () {
          var e = ht(jt),
            t = ft.current(_t),
            n = Object(r.useCallback)(function (e) {
              ft.dispatch(Ie(e));
            }, []);
          return a.a.createElement(kn, {
            id: On.Results,
            asideWidth: t,
            onAsideWidthChange: n,
            mainPane: "left",
            leftContent: a.a.createElement(
              _o,
              null,
              a.a.createElement(Yo, { tabId: e })
            ),
            rightContent: a.a.createElement(
              _o,
              null,
              a.a.createElement(Bo, { tabId: e })
            ),
            showSeparator: !0,
          });
        };
      function tc() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n",
        ]);
        return (
          (tc = function () {
            return e;
          }),
          e
        );
      }
      var nc = Object(r.memo)(function (e) {
          var t = e.payload.response;
          return a.a.createElement(
            rc,
            null,
            t.error
              ? a.a.createElement(ho, { content: t.error })
              : a.a.createElement(Yi, null, "No error details")
          );
        }),
        rc = en.div(tc());
      function ac() {
        var e = Object(c.a)(["\n  ", "\n"]);
        return (
          (ac = function () {
            return e;
          }),
          e
        );
      }
      function ic() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  margin: 0 4px;\n",
        ]);
        return (
          (ic = function () {
            return e;
          }),
          e
        );
      }
      function oc() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n",
        ]);
        return (
          (oc = function () {
            return e;
          }),
          e
        );
      }
      function cc() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  margin: 4px 0;\n",
        ]);
        return (
          (cc = function () {
            return e;
          }),
          e
        );
      }
      function uc() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  border-top: 1px solid ",
          ";\n  padding: 4px 10px;\n  overflow-x: auto;\n\n  :nth-child(even) {\n    background-color: #fff;\n  }\n\n  :nth-child(odd) {\n    background-color: #efefef;\n  }\n",
        ]);
        return (
          (uc = function () {
            return e;
          }),
          e
        );
      }
      function lc() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  overflow-y: auto;\n",
        ]);
        return (
          (lc = function () {
            return e;
          }),
          e
        );
      }
      function sc() {
        var e = Object(c.a)([
          "\n  flex: 0 0 auto;\n  margin: 10px 10px 5px;\n  font-weight: bold;\n",
        ]);
        return (
          (sc = function () {
            return e;
          }),
          e
        );
      }
      function dc() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n",
        ]);
        return (
          (dc = function () {
            return e;
          }),
          e
        );
      }
      var fc = en.div(dc()),
        mc = en.h2(sc()),
        pc = en.ul(lc()),
        hc = en.li(uc(), function (e) {
          return e.theme.contentBorderLight;
        }),
        vc = en.div(cc()),
        bc = en.div(oc()),
        gc = en.div(ic()),
        xc = en.div(ac(), function (e) {
          return e.warning
            ? "\n        margin: 5px -10px;\n        border-top: 1px solid #856404;\n        border-bottom: 1px solid #856404;\n        padding: 5px 10px;\n        background: #fff3cd;\n        color: #856404;\n\n        h3 {\n          margin-bottom: 5px;\n          font-weight: bold;\n        }\n      "
            : "\n        padding: 4px 0;\n      ";
        });
      function yc() {
        var e = Object(c.a)([
          "\n  margin: 0 3px;\n  border-radius: 2px;\n  padding: 1px 3px;\n  background-color: ",
          ";\n  color: ",
          ";\n",
        ]);
        return (
          (yc = function () {
            return e;
          }),
          e
        );
      }
      function Ec() {
        var e = Object(c.a)([
          "\n  margin: 0 3px;\n  border-radius: 2px;\n  padding: 1px 3px;\n  background-color: ",
          ";\n  color: ",
          ";\n",
        ]);
        return (
          (Ec = function () {
            return e;
          }),
          e
        );
      }
      function Cc() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n",
        ]);
        return (
          (Cc = function () {
            return e;
          }),
          e
        );
      }
      var Oc = Object(r.memo)(function (e) {
          var t = e.payload,
            n = t.request,
            r = t.response,
            i = n.headers,
            o = (i && Object.keys(i)) || [],
            c = r.headers,
            u = (c && Object.keys(c)) || [];
          return a.a.createElement(
            kc,
            null,
            a.a.createElement(
              fc,
              null,
              a.a.createElement(mc, null, "General HTTP Informations"),
              a.a.createElement(
                pc,
                null,
                a.a.createElement(
                  hc,
                  null,
                  a.a.createElement(vc, null, "Uri: ", n.uri)
                ),
                a.a.createElement(
                  hc,
                  null,
                  a.a.createElement(
                    vc,
                    null,
                    "Method: ",
                    a.a.createElement(jc, null, n.method)
                  )
                ),
                (r.statusCode || r.error) &&
                  a.a.createElement(
                    hc,
                    null,
                    a.a.createElement(
                      vc,
                      null,
                      "Status:",
                      " ",
                      r.statusCode
                        ? a.a.createElement(
                            wc,
                            { success: r.statusCode < 300 },
                            r.statusCode
                          )
                        : a.a.createElement(wc, null, "failed"),
                      " ",
                      r.statusText
                    )
                  ),
                a.a.createElement(
                  hc,
                  null,
                  a.a.createElement(vc, null, "Cache: ", n.cache)
                ),
                n.credentials &&
                  a.a.createElement(
                    hc,
                    null,
                    a.a.createElement(vc, null, "Credentials: ", n.credentials)
                  ),
                n.referrerPolicy &&
                  a.a.createElement(
                    hc,
                    null,
                    a.a.createElement(
                      vc,
                      null,
                      "Referrer Policy: ",
                      n.referrerPolicy
                    )
                  )
              )
            ),
            i &&
              o.length > 0 &&
              a.a.createElement(
                fc,
                null,
                a.a.createElement(mc, null, "Request Headers"),
                a.a.createElement(
                  pc,
                  null,
                  o.map(function (e) {
                    return a.a.createElement(
                      hc,
                      { key: e },
                      a.a.createElement(vc, null, e, ": ", i[e])
                    );
                  })
                )
              ),
            c &&
              u.length > 0 &&
              a.a.createElement(
                fc,
                null,
                a.a.createElement(mc, null, "Response Headers"),
                a.a.createElement(
                  pc,
                  null,
                  u.map(function (e) {
                    return a.a.createElement(
                      hc,
                      { key: e },
                      a.a.createElement(vc, null, e, ": ", c[e])
                    );
                  })
                )
              )
          );
        }),
        kc = en.div(Cc()),
        jc = en.span(
          Ec(),
          function (e) {
            return e.theme.blue;
          },
          function (e) {
            return e.theme.sideBarHeaderText;
          }
        ),
        wc = en.span(
          yc(),
          function (e) {
            return e.success ? e.theme.green : e.theme.red;
          },
          function (e) {
            return e.theme.sideBarHeaderText;
          }
        );
      function Lc() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n",
        ]);
        return (
          (Lc = function () {
            return e;
          }),
          e
        );
      }
      var Hc = Object(r.memo)(function (e) {
          var t = e.payload.request;
          return a.a.createElement(
            Sc,
            null,
            t.body
              ? a.a.createElement(ho, { content: t.body })
              : a.a.createElement(Yi, null, "No request body")
          );
        }),
        Sc = en.div(Lc());
      function Tc() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n",
        ]);
        return (
          (Tc = function () {
            return e;
          }),
          e
        );
      }
      var Ic = Ut.default.div(Tc());
      function Mc() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  overflow-y: auto;\n",
        ]);
        return (
          (Mc = function () {
            return e;
          }),
          e
        );
      }
      function Vc() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 30px;\n  flex-direction: row;\n",
        ]);
        return (
          (Vc = function () {
            return e;
          }),
          e
        );
      }
      var zc = Object(r.memo)(function (e) {
          var t,
            n,
            i,
            o,
            c = e.payload,
            u = Object(r.useState)(ft.current(Et) || "info"),
            l = Object(mt.a)(u, 2),
            s = l[0],
            d = l[1];
          (("error" === s && !c.response.error) ||
            ("request" === s && !c.request.body) ||
            ("tracing" === s &&
              !(null === (t = c.response.parsedBody) ||
              void 0 === t ||
              null === (n = t.extensions) ||
              void 0 === n
                ? void 0
                : n.tracing))) &&
            d("info");
          var f = function (e) {
              return s === e ? "active" : "";
            },
            m = function (e) {
              ft.dispatch(
                it(function (t) {
                  t.activeQueryResultTabId = e;
                })
              ),
                d(e);
            };
          return a.a.createElement(
            Ic,
            null,
            a.a.createElement(
              _c,
              null,
              a.a.createElement(
                Ui,
                null,
                a.a.createElement(
                  Ai,
                  {
                    title: "Tab: General",
                    className: f("info"),
                    onClick: function () {
                      return m("info");
                    },
                  },
                  a.a.createElement(qi, null, a.a.createElement(Rr, null)),
                  "General"
                ),
                c.request.body &&
                  a.a.createElement(
                    Ai,
                    {
                      title: "Tab: Request Body",
                      className: f("request"),
                      onClick: function () {
                        return m("request");
                      },
                    },
                    a.a.createElement(qi, null, a.a.createElement(wr, null)),
                    "Request Body"
                  ),
                c.response.error &&
                  a.a.createElement(
                    Ai,
                    {
                      title: "Tab: HTTP Error",
                      className: f("error"),
                      onClick: function () {
                        return m("error");
                      },
                    },
                    a.a.createElement(qi, null, a.a.createElement(Mr, null)),
                    "HTTP Error"
                  ),
                (null === (i = c.response.parsedBody) ||
                void 0 === i ||
                null === (o = i.extensions) ||
                void 0 === o
                  ? void 0
                  : o.tracing) &&
                  a.a.createElement(
                    Ai,
                    {
                      title: "Tab: Tracing",
                      className: f("tracing"),
                      onClick: function () {
                        return m("tracing");
                      },
                    },
                    a.a.createElement(qi, null, a.a.createElement(Sr, null)),
                    "Tracing"
                  )
              )
            ),
            a.a.createElement(
              Bc,
              null,
              (function (e) {
                switch (e) {
                  case "error":
                    return a.a.createElement(nc, { payload: c });
                  case "info":
                    return a.a.createElement(Oc, { payload: c });
                  case "request":
                    return a.a.createElement(Hc, { payload: c });
                  case "tracing":
                    return a.a.createElement(Yi, null, "No tracing details");
                  default:
                    return a.a.createElement(a.a.Fragment, null);
                }
              })(s)
            )
          );
        }),
        _c = en.nav(Vc()),
        Bc = en.div(Mc());
      function Nc() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n",
        ]);
        return (
          (Nc = function () {
            return e;
          }),
          e
        );
      }
      var Rc = Object(r.memo)(function (e) {
          var t = e.payload.error;
          return a.a.createElement(
            Pc,
            null,
            t
              ? a.a.createElement(ho, { content: t })
              : a.a.createElement(Yi, null, "No error details")
          );
        }),
        Pc = en.div(Nc());
      function Dc() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  overflow-y: auto;\n",
        ]);
        return (
          (Dc = function () {
            return e;
          }),
          e
        );
      }
      function Zc() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 30px;\n  flex-direction: row;\n",
        ]);
        return (
          (Zc = function () {
            return e;
          }),
          e
        );
      }
      var Ac = Object(r.memo)(function (e) {
          var t = e.payload,
            n = Object(r.useState)(ft.current(kt)),
            i = Object(mt.a)(n, 2),
            o = i[0],
            c = i[1];
          !o && t.error && c("error"), "error" !== o || t.error || c(void 0);
          var u;
          return a.a.createElement(
            Ic,
            null,
            o &&
              a.a.createElement(
                Fc,
                null,
                a.a.createElement(
                  Ui,
                  null,
                  t.error &&
                    a.a.createElement(
                      Ai,
                      {
                        title: "Tab: WS Error",
                        className: ((u = "error"), o === u ? "active" : ""),
                        onClick: function () {
                          return (function (e) {
                            ft.dispatch(
                              it(function (t) {
                                t.activeSubscriptionResultTabId = e;
                              })
                            ),
                              c(e);
                          })("error");
                        },
                      },
                      a.a.createElement(qi, null, a.a.createElement(Mr, null)),
                      "WS Error"
                    )
                )
              ),
            a.a.createElement(
              Wc,
              null,
              (function (e) {
                switch (e) {
                  case "error":
                    return a.a.createElement(Rc, { payload: t });
                  default:
                    return a.a.createElement(Yi, null, "No details");
                }
              })(o)
            )
          );
        }),
        Fc = en.nav(Zc()),
        Wc = en.div(Dc()),
        qc = Object(r.memo)(function (e) {
          var t = e.documentId,
            n = Object(r.useState)(),
            i = Object(mt.a)(n, 2),
            o = i[0],
            c = i[1];
          return (
            Object(r.useEffect)(
              function () {
                var e = Ue.subscribeToSelected(t, c);
                return function () {
                  e.unsubscribe();
                };
              },
              [t]
            ),
            o
              ? "request" in o.payload
                ? a.a.createElement(zc, { payload: o.payload })
                : a.a.createElement(Ac, { payload: o.payload })
              : a.a.createElement(Yi, null, "No details")
          );
        }),
        Kc = Object(r.memo)(function (e) {
          return a.a.createElement(
            Ao,
            { height: Uc, selected: e.selected },
            a.a.createElement(
              Fo,
              null,
              e.success
                ? a.a.createElement(Fr, null)
                : a.a.createElement(Mr, null)
            ),
            a.a.createElement(
              Br,
              null,
              "mutation" === e.operationType
                ? a.a.createElement(Un, { title: "Mutation" })
                : "subscription" === e.operationType
                ? a.a.createElement(Yn, { title: "Subscription" })
                : a.a.createElement(Qn, { title: "Query" })
            ),
            a.a.createElement(
              qo,
              null,
              e.operationName ? e.operationName : e.operationType
            ),
            a.a.createElement(
              Wo,
              null,
              gi()(e.timestamp).local().format("HH:mm:ss.SSS")
            ),
            a.a.createElement(
              Ko,
              null,
              e.duration
                ? (function (e) {
                    if (e > 0 && e < 1) return "~1 ms";
                    if (e > 0 && e < 1e3) return e + " ms";
                    if (e >= 1e3 && e <= 6e4)
                      return Math.round(e / 1e3) + " sec";
                    return Math.round(e / 1e3 / 60) + " min";
                  })(e.duration)
                : "N/A"
            ),
            a.a.createElement(Br, null, a.a.createElement(Cr, null))
          );
        }),
        Uc = 27;
      function Jc() {
        var e = Object(c.a)([
          "\n  border-radius: 4px;\n  padding: 3px 5px;\n  background: ",
          ";\n  color: ",
          ";\n  transition: background-color 0.2s ease;\n\n  &:hover {\n    background-color: ",
          ";\n  }\n",
        ]);
        return (
          (Jc = function () {
            return e;
          }),
          e
        );
      }
      function Qc() {
        var e = Object(c.a)([
          "\n  position: absolute;\n  bottom: 5px;\n  width: 100%;\n  text-align: center;\n",
        ]);
        return (
          (Qc = function () {
            return e;
          }),
          e
        );
      }
      var Gc = Object(r.memo)(function (e) {
          var t = e.documentId,
            n = Object(r.useRef)(null),
            i = Object(r.useRef)(null),
            o = Object(r.useRef)(!1),
            c = Object(r.useRef)(),
            u = Object(r.useCallback)(
              function (e) {
                Ue.setSelectedId(t, e.id);
              },
              [t]
            ),
            l = Object(r.useCallback)(
              function () {
                Ue.setSelectNewest(t, !0);
              },
              [t]
            ),
            s = function (e) {
              o.current && Ue.setScrollPosition(t, e.scrollOffset);
            },
            d = Object(r.memo)(function (e) {
              var t = e.data,
                n = e.index,
                r = e.style,
                i = t,
                o = i.results[n];
              return a.a.createElement(
                "div",
                {
                  key: "result-".concat(o.id),
                  style: r,
                  onClick: function () {
                    return u(o);
                  },
                },
                a.a.createElement(Kc, {
                  duration: o.duration,
                  operationName: o.operationName,
                  operationType: o.operationType,
                  selected: o.id === i.selectedId,
                  success: o.success,
                  timestamp: o.timestamp,
                })
              );
            }, ja.b);
          return (
            Object(r.useEffect)(
              function () {
                var e = Ue.subscribe(t, function (e) {
                  e
                    ? ((c.current = e),
                      n.current.forceUpdate(function () {
                        i.current &&
                          (c.current.selectNewest
                            ? i.current.scrollToItem(
                                c.current.results.length - 1,
                                "end"
                              )
                            : i.current.scrollTo(c.current.scrollPosition)),
                          (o.current = !0);
                      }))
                    : ((c.current = void 0),
                      (o.current = !1),
                      n.current.forceUpdate());
                });
                return function () {
                  e.unsubscribe(), (c.current = void 0), (o.current = !1);
                };
              },
              [t]
            ),
            a.a.createElement(ka.a, { ref: n }, function (e) {
              var t = e.width,
                n = e.height;
              return a.a.createElement(
                "div",
                { tabIndex: -1, style: { width: t + "px", height: n + "px" } },
                c.current && c.current.results.length > 0
                  ? a.a.createElement(
                      a.a.Fragment,
                      null,
                      a.a.createElement(
                        ja.a,
                        {
                          width: t,
                          height: n,
                          layout: "vertical",
                          itemSize: Uc,
                          itemKey: function (e) {
                            return "result-".concat(e);
                          },
                          itemData: c.current,
                          itemCount: c.current.results.length,
                          overscanCount: 5,
                          ref: i,
                          onScroll: s,
                        },
                        d
                      ),
                      c.current.hasNewResults &&
                        a.a.createElement(
                          Yc,
                          null,
                          a.a.createElement(
                            Xc,
                            { onClick: l },
                            "Jump to newest result"
                          )
                        )
                    )
                  : a.a.createElement(Yi, null, "No results")
              );
            })
          );
        }),
        Yc = en.div(Qc()),
        Xc = en.button(
          Jc(),
          function (e) {
            return e.theme.navBgColor2;
          },
          function (e) {
            return e.theme.navItemText;
          },
          function (e) {
            return e.theme.navItemActiveBgColor;
          }
        ),
        $c = function () {
          var e = ht(jt),
            t = ft.current(_t),
            n = Object(r.useCallback)(function (e) {
              ft.dispatch(Ie(e));
            }, []);
          return a.a.createElement(kn, {
            id: On.Results,
            asideWidth: t,
            onAsideWidthChange: n,
            mainPane: "left",
            leftContent: a.a.createElement(
              _o,
              null,
              a.a.createElement(Gc, { documentId: e })
            ),
            rightContent: a.a.createElement(
              _o,
              null,
              a.a.createElement(qc, { documentId: e })
            ),
            showSeparator: !0,
          });
        },
        eu = function () {
          switch ((ht(jt), ht(Te))) {
            case "console":
              return a.a.createElement(ec, null);
            case "results":
              return a.a.createElement($c, null);
            default:
              throw Error();
          }
        },
        tu = n(936);
      function nu() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 auto;\n  margin-left: 7px;\n",
        ]);
        return (
          (nu = function () {
            return e;
          }),
          e
        );
      }
      var ru = Object(r.memo)(function (e) {
          var t = (e.operations || []).map(function (e) {
              var t, n;
              switch (e.type) {
                case "mutation":
                  (t = a.a.createElement(
                    a.a.Fragment,
                    null,
                    a.a.createElement(Un, null),
                    a.a.createElement(au, null, e.name)
                  )),
                    (n = "Mutation: ".concat(e.name));
                  break;
                case "query":
                  (t = a.a.createElement(
                    a.a.Fragment,
                    null,
                    a.a.createElement(Qn, null),
                    a.a.createElement(au, null, e.name)
                  )),
                    (n = "Query: ".concat(e.name));
                  break;
                case "subscription":
                  (t = a.a.createElement(
                    a.a.Fragment,
                    null,
                    a.a.createElement(Yn, null),
                    a.a.createElement(au, null, e.name)
                  )),
                    (n = "Subscription: ".concat(e.name));
                  break;
                default:
                  throw new Error('Type "'.concat(e.type, '" does not exist.'));
              }
              return { content: t, title: n, key: e.name, value: e.name };
            }),
            n =
              t.find(function (t) {
                return t.key === e.selectedKey;
              }) || t[0];
          return a.a.createElement(co, {
            selected: n,
            options: t,
            onSelectionChange: e.onSelectionChange,
          });
        }),
        au = en.div(nu());
      function iu() {
        var e = Object(c.a)([
          "\n  flex: 0 0 auto;\n  padding: 11px 11px;\n  color: ",
          ";\n  transition: color 0.2s ease;\n\n  &:hover {\n    color: ",
          ";\n  }\n\n  &:disabled {\n    color: ",
          ";\n  }\n",
        ]);
        return (
          (iu = function () {
            return e;
          }),
          e
        );
      }
      var ou = Object(r.memo)(function (e) {
        var t = Object(r.useRef)(null),
          n = Object(r.useState)(e.httpMethod),
          i = Object(mt.a)(n, 2),
          o = i[0],
          c = i[1],
          u = Object(r.useState)(e.operationName),
          l = Object(mt.a)(u, 2),
          s = l[0],
          d = l[1],
          f = Object(r.useState)([]),
          m = Object(mt.a)(f, 2),
          p = m[0],
          h = m[1],
          v = Object(r.useState)(!!e.enableSchemaPolling),
          b = Object(mt.a)(v, 2),
          g = b[0],
          x = b[1],
          y = Object(r.useState)(!1),
          E = Object(mt.a)(y, 2),
          C = E[0],
          k = E[1],
          j = Object(r.useState)(!1),
          w = Object(mt.a)(j, 2),
          L = w[0],
          H = w[1],
          S = Object(r.useState)(e.schemaEndpoint),
          I = Object(mt.a)(S, 2),
          M = I[0],
          V = I[1],
          z = Object(r.useState)(e.subscriptionEndpoint),
          _ = Object(mt.a)(z, 2),
          B = _[0],
          N = _[1],
          R = Object(r.useState)(!!e.showSubscriptionEndpoint),
          P = Object(mt.a)(R, 2),
          D = P[0],
          Z = P[1],
          A = Object(r.useState)(!1),
          W = Object(mt.a)(A, 2),
          q = W[0],
          K = W[1],
          U = Object(r.useState)(!1),
          J = Object(mt.a)(U, 2),
          Q = J[0],
          G = J[1],
          Y = function () {
            var e = ft.current(Se);
            O(e) &&
              cr(
                (function (e) {
                  var t = Fe.operations,
                    n =
                      (t.length > 0 &&
                        (t.find(function (t) {
                          return t.name === e.draft.operationName;
                        }) ||
                          t[0])) ||
                      void 0;
                  return n ? n.name : void 0;
                })(e)
              );
          },
          X = te(function (e) {
            D
              ? (N(e),
                ft.dispatch(
                  ct(function (t) {
                    t.subscriptionEndpoint = e;
                  })
                ),
                Ae.update(function (t) {
                  return Object(F.a)(
                    Object(F.a)({}, t),
                    {},
                    { subscriptionEndpoint: e }
                  );
                }))
              : (V(e),
                ft.dispatch(
                  ct(function (t) {
                    t.schemaEndpoint = e;
                  })
                ),
                Ae.update(function (t) {
                  return Object(F.a)(
                    Object(F.a)({}, t),
                    {},
                    { schemaEndpoint: e }
                  );
                }),
                Qe.cancel(),
                Qe.fetch());
          });
        return (
          Object(r.useEffect)(
            function () {
              var n = Fe.subscribeOperations(h),
                r = t.current,
                a = ft.current(Se),
                i = a.draft,
                o = i.document,
                u = i.httpHeaders,
                l = Pn(a);
              return (
                Ae.update(function (e) {
                  return Object(F.a)(
                    Object(F.a)({}, e),
                    {},
                    { operationName: s }
                  );
                }),
                Ae.update(function (e) {
                  return Object(F.a)(
                    Object(F.a)({}, e),
                    {},
                    {
                      documentId: a.id,
                      enableSchemaPolling: a.enableSchemaPolling,
                      httpMethod: a.draft.httpMethod,
                      httpHeaders: a.draft.httpHeaders,
                      credentials: a.draft.credentials,
                      operationName: a.draft.operationName,
                      schemaEndpoint: a.draft.schemaEndpoint,
                      schemaPollingInterval: a.schemaPollingInterval,
                      subscriptionEndpoint: a.draft.subscriptionEndpoint,
                    }
                  );
                }),
                We.exists() || ir(e.id, u),
                Ge.exists() || or(e.id, l),
                Fe.exists() || ar(e.id, o),
                V(e.schemaEndpoint),
                N(e.subscriptionEndpoint),
                Z(!!e.showSubscriptionEndpoint),
                x(!!e.enableSchemaPolling),
                c(e.httpMethod),
                d(e.operationName),
                e.showSubscriptionEndpoint
                  ? r.value !== e.subscriptionEndpoint &&
                    (r.value = e.subscriptionEndpoint || "")
                  : r.value !== e.schemaEndpoint &&
                    (r.value = e.schemaEndpoint),
                function () {
                  n && n.unsubscribe();
                }
              );
            },
            [
              s,
              e.id,
              e.enableSchemaPolling,
              e.httpMethod,
              e.operationName,
              e.schemaEndpoint,
              e.subscriptionEndpoint,
              e.showSubscriptionEndpoint,
            ]
          ),
          Object(r.useEffect)(
            function () {
              var e = t.current,
                n = qe.subscribeToSchemaInfoChange(function (t) {
                  K(t.exists),
                    G(t.hasSubscriptionType),
                    !t.hasSubscriptionType &&
                      D &&
                      (Z(!1), ft.dispatch(at(!1)), (e.value = M));
                });
              return function () {
                n.unsubscribe();
              };
            },
            [M, D]
          ),
          Object(r.useEffect)(
            function () {
              var e = Object(tu.a)([
                Ke.isExecuting,
                Ke.isSubscription,
                Qe.isFetching,
              ])
                .pipe(Object(T.a)(250))
                .subscribe(function (e) {
                  var t = e[0],
                    n = e[1],
                    r = -1 !== e.indexOf(!0);
                  n && t ? ft.dispatch(Re) : ft.dispatch(rt), k(t), H(r);
                });
              return (
                Qe.fetch(),
                function () {
                  Ke.isSubscription || Ke.cancel(),
                    Qe.cancel(),
                    e.unsubscribe();
                }
              );
            },
            [e.id]
          ),
          a.a.createElement(
            Qi,
            null,
            a.a.createElement(
              $i,
              null,
              a.a.createElement(po, {
                selectedKey: o,
                onSelectionChange: function (e) {
                  var t = e.value;
                  c(t),
                    ft.dispatch(
                      ct(function (e) {
                        e.httpMethod = t;
                      })
                    ),
                    Ae.update(function (e) {
                      return Object(F.a)(
                        Object(F.a)({}, e),
                        {},
                        { httpMethod: t }
                      );
                    });
                },
              }),
              Q &&
                a.a.createElement(
                  cu,
                  {
                    active: D,
                    title: D
                      ? "Show Schema Endpoint"
                      : "Show Subscription Endpoint",
                    onClick: function () {
                      var e = t.current,
                        n = !D;
                      Z(n), ft.dispatch(at(n)), (e.value = n ? B || "" : M);
                    },
                  },
                  a.a.createElement(Dn.a, { icon: ai.d })
                ),
              a.a.createElement(go, {
                type: "url",
                ref: t,
                defaultValue: "",
                placeholder:
                  Q && D
                    ? "Enter the subscription endpoint URI here"
                    : "Enter the schema endpoint URI here",
                onChange: function (e) {
                  X(e.currentTarget.value.trim());
                },
                onKeyDown: function (e) {
                  var t = e.currentTarget.value;
                  q && 13 === e.keyCode && t && t.length > 0 && Y();
                },
              }),
              L && a.a.createElement(Lo, null, a.a.createElement(Co, null)),
              p &&
                p.length > 1 &&
                a.a.createElement(ru, {
                  selectedKey: s || p[0].name,
                  operations: p,
                  onSelectionChange: function (e) {
                    var t = e.key;
                    d(t),
                      ft.dispatch(
                        ct(function (e) {
                          e.operationName = t;
                        })
                      ),
                      Ae.update(function (e) {
                        return Object(F.a)(
                          Object(F.a)({}, e),
                          {},
                          { operationName: t }
                        );
                      });
                  },
                }),
              a.a.createElement(
                cu,
                {
                  active: e.showRequestConfig,
                  title: "Operation Settings",
                  onClick: function () {
                    var t = e.showRequestConfig;
                    ft.dispatch(je(t));
                  },
                },
                a.a.createElement(Dn.a, { icon: ai.o })
              ),
              a.a.createElement(
                cu,
                {
                  active: g,
                  title: g ? "Disable Schema Polling" : "Enable Schema Polling",
                  onClick: function () {
                    var e;
                    x(g),
                      ft.dispatch(
                        ((e = g),
                        function (t) {
                          var n = t.workspaces.find(function (e) {
                              return e.id === t.selectedWorkspaceId;
                            }),
                            r =
                              n &&
                              n.tabs.find(function (e) {
                                return e.id === n.selectedTabId;
                              });
                          r &&
                            O(r) &&
                            r.enableSchemaPolling !== e &&
                            (e
                              ? (r.enableSchemaPolling = !0)
                              : delete r.enableSchemaPolling);
                        })
                      ),
                      Ae.update(function (e) {
                        return Object(F.a)(
                          Object(F.a)({}, e),
                          {},
                          { enableSchemaPolling: g }
                        );
                      }),
                      Qe.cancel(),
                      Qe.fetch();
                  },
                },
                a.a.createElement(Dn.a, { icon: g ? ai.s : ai.r })
              ),
              a.a.createElement(
                cu,
                {
                  title: "Reload Schema",
                  disabled: g || L,
                  onClick: function () {
                    g || L || Qe.refetch();
                  },
                },
                a.a.createElement(Dn.a, { icon: ai.m })
              ),
              C
                ? a.a.createElement(
                    cu,
                    {
                      title: "Cancel",
                      onClick: function () {
                        Ke.cancel();
                      },
                    },
                    a.a.createElement(Dn.a, { icon: ai.p })
                  )
                : a.a.createElement(
                    cu,
                    { title: "Execute", disabled: !q, onClick: Y },
                    a.a.createElement(Dn.a, { icon: ai.k })
                  )
            )
          )
        );
      });
      var cu = en.button(
        iu(),
        function (e) {
          return e.active ? e.theme.red : e.theme.sideBarText;
        },
        function (e) {
          return e.theme.red;
        },
        function (e) {
          return e.theme.sideBarBg;
        }
      );
      var uu = n(398);
      var lu = Object(r.memo)(function (e) {
          var t = (function (e) {
            var t = Object(r.useRef)(null);
            return (
              Object(r.useEffect)(
                function () {
                  var n = t.current,
                    r = {
                      contextmenu: !1,
                      minimap: { enabled: !1 },
                      model: e,
                      showFoldingControls: "always",
                      fixedOverflowWidgets: !0,
                      theme: "light",
                      fontSize: 13,
                    },
                    a = nn.editor.create(n, r);
                  function i() {
                    var e = n.parentElement.getBoundingClientRect();
                    a.layout({ width: e.width, height: e.height });
                  }
                  return (
                    window.addEventListener("splitterchange", i),
                    function () {
                      window.removeEventListener("splitterchange", i),
                        a.dispose();
                    }
                  );
                },
                [e]
              ),
              t
            );
          })(
            (function (e) {
              var t = Object(r.useRef)(
                  nn.editor.createModel("{\n  \n}", "json")
                ),
                n = e.content,
                a = e.onContentChange;
              return (
                t.current.updateOptions({ insertSpaces: !0, tabSize: 2 }),
                Object(r.useEffect)(
                  function () {
                    var e = te(function (e) {
                      a && a(e.getValue());
                    });
                    t.current.getValue() !== n &&
                      t.current.setValue(n || "{\n  \n}");
                    var r = mr(t.current.uri, [
                        {
                          uri: "editor://schemas/http-headers.json",
                          schema: uu,
                        },
                      ]),
                      i = t.current.onDidChangeContent(function () {
                        e(t.current);
                      });
                    return function () {
                      i.dispose(), r();
                    };
                  },
                  [n, a]
                ),
                t.current
              );
            })(e)
          );
          return a.a.createElement($n, { ref: t });
        }),
        su = Object(r.memo)(function (e) {
          var t = ft.current(bt);
          return a.a.createElement(
            _o,
            null,
            a.a.createElement(lu, {
              content: t,
              onContentChange: function (t) {
                ir(e.id, t),
                  Ae.update(function (e) {
                    return Object(F.a)(
                      Object(F.a)({}, e),
                      {},
                      { httpHeaders: t }
                    );
                  }),
                  ft.dispatch(
                    ct(function (e) {
                      e.httpHeaders = t;
                    })
                  );
              },
            })
          );
        });
      function du() {
        var e = Object(c.a)(["\n  padding: 3px;\n  cursor: pointer;\n"]);
        return (
          (du = function () {
            return e;
          }),
          e
        );
      }
      function fu() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: row;\n  align-items: center;\n  padding: 5px;\n",
        ]);
        return (
          (fu = function () {
            return e;
          }),
          e
        );
      }
      function mu() {
        var e = Object(c.a)([
          "\n  padding: 0 1px 0 5px;\n  cursor: pointer;\n",
        ]);
        return (
          (mu = function () {
            return e;
          }),
          e
        );
      }
      function pu() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: row;\n",
        ]);
        return (
          (pu = function () {
            return e;
          }),
          e
        );
      }
      function hu() {
        var e = Object(c.a)(["\n  margin: 3px 0 5px;\n  font-weight: bold;\n"]);
        return (
          (hu = function () {
            return e;
          }),
          e
        );
      }
      function vu() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n",
        ]);
        return (
          (vu = function () {
            return e;
          }),
          e
        );
      }
      function bu() {
        var e = Object(c.a)(["\n  padding: 10px;\n"]);
        return (
          (bu = function () {
            return e;
          }),
          e
        );
      }
      var gu = Object(r.memo)(function () {
          var e = ht(gt),
            t = function (e) {
              var t = e.target.value;
              Ae.update(function (e) {
                return Object(F.a)(Object(F.a)({}, e), {}, { credentials: t });
              }),
                ft.dispatch(
                  ct(function (e) {
                    e.credentials = t;
                  })
                );
            };
          return a.a.createElement(
            _o,
            null,
            a.a.createElement(
              xu,
              null,
              a.a.createElement(
                yu,
                null,
                a.a.createElement(Eu, null, "Credentials"),
                a.a.createElement(
                  Cu,
                  null,
                  a.a.createElement(
                    ku,
                    null,
                    a.a.createElement(ju, {
                      type: "radio",
                      name: "credentials",
                      id: "credentials-omit",
                      checked: "omit" === e,
                      value: "omit",
                      onChange: t,
                    }),
                    a.a.createElement(
                      Ou,
                      { htmlFor: "credentials-omit" },
                      "Omit"
                    )
                  ),
                  a.a.createElement(
                    ku,
                    null,
                    a.a.createElement(ju, {
                      type: "radio",
                      name: "credentials",
                      id: "credentials-same-origin",
                      checked: !e || "same-origin" === e,
                      value: "same-origin",
                      onChange: t,
                    }),
                    a.a.createElement(
                      Ou,
                      { htmlFor: "credentials-same-origin" },
                      "Same Origin"
                    )
                  ),
                  a.a.createElement(
                    ku,
                    null,
                    a.a.createElement(ju, {
                      type: "radio",
                      name: "credentials",
                      id: "credentials-include",
                      checked: "include" === e,
                      value: "include",
                      onChange: t,
                    }),
                    a.a.createElement(
                      Ou,
                      { htmlFor: "credentials-include" },
                      "Include"
                    )
                  )
                )
              )
            )
          );
        }),
        xu = en.div(bu()),
        yu = en.div(vu()),
        Eu = en.h1(hu()),
        Cu = en.div(pu()),
        Ou = en.label(mu()),
        ku = en.div(fu()),
        ju = en.input(du());
      var wu = Object(r.memo)(function (e) {
          var t = (function (e) {
            var t = Object(r.useRef)(null);
            return (
              Object(r.useEffect)(
                function () {
                  var n = t.current,
                    r = {
                      contextmenu: !1,
                      minimap: { enabled: !1 },
                      model: e,
                      showFoldingControls: "always",
                      fixedOverflowWidgets: !0,
                      theme: "light",
                      fontSize: 13,
                    },
                    a = nn.editor.create(n, r);
                  function i() {
                    var e = n.parentElement.getBoundingClientRect();
                    a.layout({ width: e.width, height: e.height });
                  }
                  return (
                    window.addEventListener("splitterchange", i),
                    function () {
                      window.removeEventListener("splitterchange", i),
                        a.dispose();
                    }
                  );
                },
                [e]
              ),
              t
            );
          })(
            (function (e) {
              var t = Object(r.useRef)(
                  nn.editor.createModel("{\n  \n}", "json")
                ),
                n = e.content,
                a = e.onContentChange;
              return (
                t.current.updateOptions({ insertSpaces: !0, tabSize: 2 }),
                Object(r.useEffect)(
                  function () {
                    var e = te(function (e) {
                      a && a(e.getValue());
                    });
                    t.current.getValue() !== n &&
                      t.current.setValue(n || "{\n  \n}");
                    var r = t.current.onDidChangeContent(function () {
                      e(t.current);
                    });
                    return function () {
                      r.dispose();
                    };
                  },
                  [n, a]
                ),
                t.current
              );
            })(e)
          );
          return a.a.createElement($n, { ref: t });
        }),
        Lu = Object(r.memo)(function (e) {
          var t = ft.current(Lt);
          return a.a.createElement(
            _o,
            null,
            a.a.createElement(wu, {
              content: t,
              onContentChange: function (t) {
                or(e.id, t),
                  ft.dispatch(
                    ct(function (e) {
                      if (e.variableSets) {
                        var n = e.variableSets.find(function (t) {
                          return t.id === e.selectedVariableSetId;
                        });
                        n
                          ? (n.variables = t)
                          : ((e.selectedVariableSetId = "__default"),
                            e.variableSets.push({
                              id: "__default",
                              name: "Default",
                              variables: t,
                            }));
                      }
                    })
                  );
              },
            })
          );
        }),
        Hu = Object(r.memo)(function (e) {
          var t = e.id;
          switch (e.itemId) {
            case y.HttpHeaders:
              return a.a.createElement(su, { id: t });
            case y.HttpSettings:
              return a.a.createElement(gu, null);
            case y.Variables:
              return a.a.createElement(Lu, { id: t });
            default:
              throw Error();
          }
        });
      function Su() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 30px;\n  flex-direction: row;\n  align-items: center;\n",
        ]);
        return (
          (Su = function () {
            return e;
          }),
          e
        );
      }
      function Tu() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n",
        ]);
        return (
          (Tu = function () {
            return e;
          }),
          e
        );
      }
      var Iu = Object(r.memo)(function (e) {
          var t = ht(vt),
            n = ht(Vt),
            r = function (e) {
              return n || t !== e ? "" : "active";
            },
            i = function (e) {
              ft.dispatch(
                (function (e) {
                  return function (t) {
                    t.selectedDocumentHeaderItemId = e;
                  };
                })(e)
              );
            };
          return a.a.createElement(
            Mu,
            null,
            a.a.createElement(
              Vu,
              null,
              a.a.createElement(
                Ui,
                null,
                a.a.createElement(
                  Ai,
                  {
                    title: "Tab: HTTP Headers",
                    className: r(y.HttpHeaders),
                    onClick: function () {
                      return i(y.HttpHeaders);
                    },
                  },
                  a.a.createElement(qi, null, a.a.createElement(Zr, null)),
                  "HTTP Headers"
                ),
                a.a.createElement(
                  Ai,
                  {
                    title: "Tab: HTTP Settings",
                    className: r(y.HttpSettings),
                    onClick: function () {
                      return i(y.HttpSettings);
                    },
                  },
                  a.a.createElement(qi, null, a.a.createElement(Qr, null)),
                  "HTTP Settings"
                ),
                a.a.createElement(
                  Ai,
                  {
                    title: "Tab: GraphQL Variables",
                    className: r(y.Variables),
                    onClick: function () {
                      return i(y.Variables);
                    },
                  },
                  a.a.createElement(qi, null, a.a.createElement(Lr, null)),
                  "GraphQL Variables"
                )
              )
            ),
            a.a.createElement(Hu, { id: e.id, itemId: t })
          );
        }),
        Mu = en.div(Tu()),
        Vu = en.div(Su()),
        zu = Object(r.memo)(function (e) {
          var t = e.activeTabId,
            n = e.document,
            i = ht(Bt),
            o = ft.current(Nt),
            c = Object(r.useCallback)(
              function (e) {
                ar(t, e),
                  ft.dispatch(
                    ct(function (t) {
                      t.document = e;
                    })
                  );
              },
              [t]
            );
          return a.a.createElement(vn, {
            id: On.DocumentContent,
            orientation: i,
            asideSize: o,
            onAsideSizeChange: function (e) {
              return ft.dispatch(
                (function (e) {
                  return function (t) {
                    var n;
                    "vertical" ===
                    ((null === (n = t.preferences) || void 0 === n
                      ? void 0
                      : n.resultOrientation) || "vertical")
                      ? (t.settings.resultWidth = e)
                      : (t.settings.resultHeight = e);
                  };
                })(e)
              );
            },
            mainPane: "pane-a",
            paneAContent: a.a.createElement(fr, {
              content: n,
              onContentChange: c,
            }),
            paneBContent: a.a.createElement(pr, { id: t }),
            showSeparator: !0,
          });
        }),
        _u = Object(r.memo)(function () {
          var e = ht(jt),
            t = ft.current(Se),
            n = ht(Vt),
            i = ft.current(zt),
            o = Object(r.useCallback)(function (e) {
              ft.dispatch(je(e));
            }, []),
            c = Object(r.useCallback)(function (e) {
              ft.dispatch(
                (function (e) {
                  return function (t) {
                    t.settings.documentHeaderHeight = e;
                  };
                })(e)
              );
            }, []);
          return a.a.createElement(
            wn,
            null,
            a.a.createElement(ou, {
              id: e,
              httpMethod: t.draft.httpMethod,
              operationName: t.draft.operationName,
              showRequestConfig: !n,
              schemaEndpoint: t.draft.schemaEndpoint,
              subscriptionEndpoint: t.draft.subscriptionEndpoint,
              showSubscriptionEndpoint: t.showSubscriptionEndpoint,
              enableSchemaPolling: t.enableSchemaPolling,
            }),
            a.a.createElement(Cn, {
              id: On.DocumentHeader,
              asideCollapsable: !0,
              asideCollapsed: n,
              asideHeight: i,
              onAsideCollapsedChange: o,
              onAsideHeightChange: c,
              mainPane: "bottom",
              topContent: a.a.createElement(Iu, { id: e }),
              bottomContent: a.a.createElement(zu, {
                activeTabId: e,
                document: t.draft.document,
              }),
              showSeparator: !0,
            })
          );
        }),
        Bu = function () {
          var e = ht(It),
            t = ft.current(Mt),
            n = Object(r.useCallback)(function (e) {
              ft.dispatch(we(e));
            }, []),
            i = Object(r.useCallback)(function (e) {
              ft.dispatch(Le(e));
            }, []);
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(Cn, {
              id: On.Document,
              asideCollapsable: !0,
              asideCollapsed: e,
              asideHeight: t,
              onAsideCollapsedChange: n,
              onAsideHeightChange: i,
              mainPane: "top",
              topContent: a.a.createElement(_u, null),
              bottomContent: a.a.createElement(eu, null),
              showSeparator: !0,
            }),
            a.a.createElement(Vo, null)
          );
        },
        Nu = n(399);
      function Ru() {
        var e = Object(c.a)([
          "\n  flex: 0 0 auto;\n  margin: 0 3px;\n  height: 28px;\n  padding: 0 9px;\n  background-color: ",
          ";\n  color: ",
          ";\n  transition: background-color 0.2s ease, color 0.2s ease;\n\n  &:hover {\n    background-color: ",
          ";\n    color: ",
          ";\n  }\n",
        ]);
        return (
          (Ru = function () {
            return e;
          }),
          e
        );
      }
      var Pu = en.button(
        Ru(),
        function (e) {
          return e.disabled
            ? e.theme.dialogButtonBgDisabled
            : e.theme.dialogButtonBg;
        },
        function (e) {
          return e.disabled
            ? e.theme.dialogButtonTextDisabled
            : e.theme.dialogButtonText;
        },
        function (e) {
          return e.disabled
            ? e.theme.dialogButtonBgDisabled
            : e.theme.dialogButtonBgHover;
        },
        function (e) {
          return e.disabled
            ? e.theme.dialogButtonTextDisabled
            : e.theme.dialogButtonTextHover;
        }
      );
      function Du() {
        var e = Object(c.a)([
          "\n  z-index: 15;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.2);\n",
        ]);
        return (
          (Du = function () {
            return e;
          }),
          e
        );
      }
      function Zu() {
        var e = Object(c.a)([
          "\n  z-index: 20;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n",
        ]);
        return (
          (Zu = function () {
            return e;
          }),
          e
        );
      }
      function Au() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 28px;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding: 6px 9px;\n",
        ]);
        return (
          (Au = function () {
            return e;
          }),
          e
        );
      }
      function Fu() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n",
        ]);
        return (
          (Fu = function () {
            return e;
          }),
          e
        );
      }
      function Wu() {
        var e = Object(c.a)([
          "\n  flex: 0 0 40px;\n  height: 28px;\n  color: ",
          ";\n  transition: background-color 0.2s ease, color 0.2s ease;\n\n  &:hover {\n    background-color: ",
          ";\n    color: ",
          ";\n  }\n",
        ]);
        return (
          (Wu = function () {
            return e;
          }),
          e
        );
      }
      function qu() {
        var e = Object(c.a)([
          "\n  flex: 1 1 auto;\n  padding-left: 12px;\n  font-weight: bold;\n",
        ]);
        return (
          (qu = function () {
            return e;
          }),
          e
        );
      }
      function Ku() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 28px;\n  flex-direction: row;\n  align-items: center;\n  background-color: ",
          ";\n  color: ",
          ";\n",
        ]);
        return (
          (Ku = function () {
            return e;
          }),
          e
        );
      }
      function Uu() {
        var e = Object(c.a)([
          "\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  margin-top: 100px;\n  width: 400px;\n  max-height: 300px;\n  background-color: ",
          ";\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.4);\n  color: ",
          ";\n",
        ]);
        return (
          (Uu = function () {
            return e;
          }),
          e
        );
      }
      var Ju = function (e) {
          return a.a.createElement(
            a.a.Fragment,
            null,
            Object(i.createPortal)(
              a.a.createElement(
                tl,
                null,
                a.a.createElement(
                  Qu,
                  null,
                  a.a.createElement(
                    Gu,
                    null,
                    a.a.createElement(Yu, null, e.title),
                    a.a.createElement(
                      Xu,
                      {
                        onClick: function () {
                          return e.onClose && e.onClose();
                        },
                      },
                      a.a.createElement(Dn.a, { icon: ai.q })
                    )
                  ),
                  a.a.createElement($u, null, e.children),
                  a.a.createElement(el, null, e.footer)
                )
              ),
              document.getElementById("components")
            ),
            Object(i.createPortal)(
              a.a.createElement(nl, null),
              document.getElementById("components")
            )
          );
        },
        Qu = en.div(
          Uu(),
          function (e) {
            return e.theme.dialogContentBg;
          },
          function (e) {
            return e.theme.dialogContentText;
          }
        ),
        Gu = en.header(
          Ku(),
          function (e) {
            return e.theme.dialogHeaderBg;
          },
          function (e) {
            return e.theme.dialogHeaderText;
          }
        ),
        Yu = en.h1(qu()),
        Xu = en.button(
          Wu(),
          function (e) {
            return e.theme.dialogHeaderText;
          },
          function (e) {
            return e.theme.red;
          },
          function (e) {
            return e.theme.controlTextActiveColor;
          }
        ),
        $u = en.main(Fu()),
        el = en.footer(Au()),
        tl = en.div(Zu()),
        nl = en.div(Du());
      function rl() {
        var e = Object(c.a)([
          "\n  flex: 0 0 auto;\n  margin: 0 12px 18px;\n  font-size: 1.167em;\n  text-align: center;\n",
        ]);
        return (
          (rl = function () {
            return e;
          }),
          e
        );
      }
      var al = en.h2(rl());
      function il() {
        var e = Object(c.a)([
          "\n  flex: 0 0 auto;\n  margin: 12px 12px 18px;\n  font-size: 1.5em;\n  text-align: center;\n\n  & > em {\n    white-space: nowrap;\n  }\n",
        ]);
        return (
          (il = function () {
            return e;
          }),
          e
        );
      }
      var ol,
        cl = en.h1(il());
      function ul() {
        var e = Object(c.a)([
          "\n  flex: 1 1 auto;\n  border: 1px solid ",
          ";\n  padding: 6px 6px;\n  background-color: ",
          ";\n  color: ",
          ";\n",
        ]);
        return (
          (ul = function () {
            return e;
          }),
          e
        );
      }
      function ll() {
        var e = Object(c.a)(["\n  flex: 1 1 auto;\n  margin-bottom: 4px;\n"]);
        return (
          (ll = function () {
            return e;
          }),
          e
        );
      }
      function sl() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  padding: 0 12px 18px;\n",
        ]);
        return (
          (sl = function () {
            return e;
          }),
          e
        );
      }
      function dl() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n",
        ]);
        return (
          (dl = function () {
            return e;
          }),
          e
        );
      }
      !(function (e) {
        (e[(e.ChangeDocumentName = 0)] = "ChangeDocumentName"),
          (e[(e.ChangeCollectionName = 1)] = "ChangeCollectionName");
      })(ol || (ol = {}));
      var fl = Object(r.memo)(function (e) {
          var t = Object(r.useReducer)(ml, {
              collectionName: "",
              documentName: "",
              saveDisabled: !0,
            }),
            n = Object(mt.a)(t, 2),
            i = n[0],
            o = n[1],
            c = (function () {
              var t = Object(B.a)(
                _.a.mark(function t() {
                  var n, r, a, o;
                  return _.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (i.saveDisabled) {
                            t.next = 17;
                            break;
                          }
                          if (
                            ((n = Object(F.a)(
                              Object(F.a)({}, e.tab),
                              {},
                              { name: i.documentName }
                            )),
                            !(r = _a.get("documents")))
                          ) {
                            t.next = 15;
                            break;
                          }
                          if (
                            ((a = Ta.combine(Ta.separator, i.collectionName)),
                            (t.t0 = r.getByPath(a)),
                            t.t0)
                          ) {
                            t.next = 10;
                            break;
                          }
                          return (
                            (t.next = 9),
                            r.create({
                              name: i.collectionName,
                              expandable: !0,
                              expanded: !0,
                              metadata: { kind: "collection" },
                            })
                          );
                        case 9:
                          t.t0 = t.sent;
                        case 10:
                          return (
                            (o = t.t0),
                            (t.next = 13),
                            o.create({
                              name: i.documentName,
                              expandable: !1,
                              metadata: {
                                kind: "document",
                                closeTabAfterCreation:
                                  e.closeTabAfterCreation || !1,
                                tab: n,
                              },
                            })
                          );
                        case 13:
                          t.next = 16;
                          break;
                        case 15:
                          ft.dispatch(
                            ye(
                              i.collectionName,
                              n,
                              e.closeTabAfterCreation || !1
                            )
                          );
                        case 16:
                          e.onSaved(n);
                        case 17:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
          return a.a.createElement(
            Ju,
            {
              title: "Create Document",
              footer: a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(
                  Pu,
                  { disabled: i.saveDisabled, onClick: c },
                  "Save"
                ),
                a.a.createElement(
                  Pu,
                  {
                    onClick: function () {
                      return e.onCancelled(e.tab);
                    },
                  },
                  "Cancel"
                )
              ),
              onClose: function () {
                return e.onCancelled(e.tab);
              },
            },
            a.a.createElement(
              cl,
              null,
              "Choose a name and collection for document."
            ),
            a.a.createElement(
              pl,
              null,
              a.a.createElement(
                hl,
                null,
                a.a.createElement(
                  vl,
                  { htmlFor: "documentName" },
                  "Document Name"
                ),
                a.a.createElement(bl, {
                  id: "documentName",
                  type: "text",
                  value: i.documentName,
                  placeholder: "Enter a document name here",
                  onChange: function (e) {
                    o({
                      type: ol.ChangeDocumentName,
                      name: e.currentTarget.value,
                    });
                  },
                })
              ),
              a.a.createElement(
                hl,
                null,
                a.a.createElement(
                  vl,
                  { htmlFor: "collectionName" },
                  "Collection Name"
                ),
                a.a.createElement(bl, {
                  id: "collectionName",
                  type: "text",
                  value: i.collectionName,
                  placeholder: "Enter a collection name here",
                  onChange: function (e) {
                    o({
                      type: ol.ChangeCollectionName,
                      name: e.currentTarget.value,
                    });
                  },
                })
              )
            )
          );
        }),
        ml = function (e, t) {
          switch (t.type) {
            case ol.ChangeCollectionName:
              return Object(F.a)(
                Object(F.a)({}, e),
                {},
                {
                  collectionName: t.name,
                  saveDisabled: !(
                    e.documentName.length > 0 && t.name.length > 0
                  ),
                }
              );
            case ol.ChangeDocumentName:
              return Object(F.a)(
                Object(F.a)({}, e),
                {},
                {
                  documentName: t.name,
                  saveDisabled: !(
                    e.collectionName.length > 0 && t.name.length > 0
                  ),
                }
              );
          }
          throw new Error();
        },
        pl = en.form(dl()),
        hl = en.div(sl()),
        vl = en.label(ll()),
        bl = en.input(
          ul(),
          function (e) {
            return e.theme.contentBorder;
          },
          function (e) {
            return e.theme.mainBgColor;
          },
          function (e) {
            return e.theme.controlTextColor;
          }
        ),
        gl = Object(r.memo)(function (e) {
          return a.a.createElement(
            Ju,
            {
              title: "Save Changes",
              footer: a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(
                  Pu,
                  {
                    onClick: function () {
                      var t = e.tab;
                      ((O(t) && !t.new) || w(t)) && ft.dispatch(tt),
                        e.onSaved(t);
                    },
                  },
                  "Save"
                ),
                a.a.createElement(
                  Pu,
                  {
                    onClick: function () {
                      var t = e.tab;
                      ft.dispatch(Me(t.id)), e.onDidNotSave(t);
                    },
                  },
                  "Don't save"
                ),
                a.a.createElement(
                  Pu,
                  {
                    onClick: function () {
                      return e.onCancelled(e.tab);
                    },
                  },
                  "Cancel"
                )
              ),
              onClose: function () {
                return e.onCancelled(e.tab);
              },
            },
            a.a.createElement(
              cl,
              null,
              "Do you want to save the changes you made to ",
              a.a.createElement("em", null, e.tab.name),
              "?"
            ),
            a.a.createElement(
              al,
              null,
              "Your changes will be lost if you don't save them."
            )
          );
        }),
        xl = (function () {
          var e = Object(B.a)(
            _.a.mark(function e(t) {
              var n, r, a;
              return _.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (n = t.props), (a = (r = n).tabId), (0, r.onClose)(a);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        yl = function () {
          return a.a.createElement(
            zn,
            { id: Bn.Tabs },
            a.a.createElement(Tn, { onClick: xl }, "Close Tab")
          );
        };
      function El() {
        var e = Object(c.a)(["\n  padding: 0 10px 0 12px;\n"]);
        return (
          (El = function () {
            return e;
          }),
          e
        );
      }
      function Cl() {
        var e = Object(c.a)([
          "\n  flex: 0 0 auto;\n  height: 100%;\n  background-color: ",
          ";\n  color: ",
          ";\n  font-weight: ",
          ";\n  font-style: ",
          ";\n  white-space: nowrap;\n  opacity: ",
          ";\n  cursor: pointer;\n  transition: background-color 0.2s ease, color 0.2s ease, opacity 0.2s ease;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  & > ",
          " {\n    color: ",
          ";\n\n    & > .changes {\n      display: ",
          ";\n      font-size: 0.667em;\n      margin-bottom: 1px;\n    }\n\n    & > .close {\n      display: ",
          ";\n    }\n  }\n\n  &:hover > ",
          " {\n    color: ",
          ";\n    opacity: 1;\n\n    & > .changes {\n      display: ",
          ";\n    }\n\n    & > .close {\n      display: ",
          ";\n    }\n  }\n\n  & > ",
          ":hover {\n    color: ",
          ";\n\n    & > .changes {\n      display: none;\n    }\n\n    & > .close {\n      display: inline-block;\n    }\n  }\n",
        ]);
        return (
          (Cl = function () {
            return e;
          }),
          e
        );
      }
      function Ol() {
        var e = Object(c.a)([
          "\n  width: 30px;\n  height: 100%;\n  color: transparent;\n  transition: color 0.2s ease;\n",
        ]);
        return (
          (Ol = function () {
            return e;
          }),
          e
        );
      }
      var kl,
        jl = Object(r.memo)(function (e) {
          var t = function (t) {
            e.onClick(e.id, t);
          };
          return a.a.createElement(
            Ll,
            {
              active: e.active,
              hasChanges: e.hasChanges,
              new: e.new,
              preview: e.preview,
              title: "Tab: " + e.name,
              onClick: function () {
                return t(!1);
              },
              onContextMenu: function (t) {
                !(function (e, t) {
                  e.preventDefault(),
                    e.stopPropagation(),
                    Hn.contextMenu.show({ id: Bn.Tabs, event: e, props: t });
                })(t, { tabId: e.id, onClose: e.onClose });
              },
              onDoubleClick: function () {
                return t(!0);
              },
            },
            a.a.createElement(Hl, { icon: e.iconDef }),
            e.name,
            a.a.createElement(
              wl,
              {
                title: "Close Tab: " + e.name,
                onClick: function (t) {
                  t.stopPropagation(), e.onClose(e.id);
                },
              },
              a.a.createElement(Dn.a, { icon: ai.q, className: "close" }),
              a.a.createElement(Dn.a, { icon: ai.b, className: "changes" })
            )
          );
        }),
        wl = en.button(Ol()),
        Ll = en.div(
          Cl(),
          function (e) {
            return e.active ? e.theme.tabBgActive : "transparent";
          },
          function (e) {
            return e.active ? e.theme.tabTextActive : e.theme.tabText;
          },
          function (e) {
            return e.new ? "bold" : "normal";
          },
          function (e) {
            return e.preview ? "italic" : "normal";
          },
          function (e) {
            return e.active ? "1" : "0.75";
          },
          wl,
          function (e) {
            return e.active
              ? e.theme.tabTextActive
              : e.hasChanges
              ? e.theme.tabText
              : "transparent";
          },
          function (e) {
            return e.hasChanges ? "inline-block" : "none";
          },
          function (e) {
            return e.hasChanges ? "none" : "inline-block";
          },
          wl,
          function (e) {
            return e.active ? e.theme.tabTextActive : e.theme.tabText;
          },
          function (e) {
            return e.hasChanges ? "inline-block" : "none";
          },
          function (e) {
            return e.hasChanges ? "none" : "inline-block";
          },
          wl,
          function (e) {
            return e.active ? e.theme.tabTextActive : e.theme.tabText;
          }
        ),
        Hl = en(Dn.a)(El());
      function Sl() {
        var e = Object(c.a)([
          "\n  flex: 0 0 30px;\n  height: 30px;\n  color: ",
          ";\n  transition: background-color 0.2s ease, opacity 0.2s ease;\n  opacity: 0.75;\n\n  &:hover {\n    opacity: 1;\n  }\n",
        ]);
        return (
          (Sl = function () {
            return e;
          }),
          e
        );
      }
      function Tl() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: row;\n  border-right: 1px solid ",
          ";\n  height: 30px;\n",
        ]);
        return (
          (Tl = function () {
            return e;
          }),
          e
        );
      }
      function Il() {
        var e = Object(c.a)([
          "\n  z-index: 1;\n  display: flex;\n  flex: 0 0 30px;\n  flex-direction: row;\n  align-items: center;\n  background: linear-gradient(\n    15deg,\n    ",
          " 0%,\n    ",
          " 35%,\n    ",
          " 65%,\n    ",
          " 100%\n  );\n  transition: box-shadow 0.2s ease;\n",
        ]);
        return (
          (Il = function () {
            return e;
          }),
          e
        );
      }
      !(function (e) {
        (e[(e.close = 0)] = "close"),
          (e[(e.showCreateDialog = 1)] = "showCreateDialog"),
          (e[(e.showSaveDialog = 2)] = "showSaveDialog"),
          (e[(e.showSaveDialogAndClose = 3)] = "showSaveDialogAndClose");
      })(kl || (kl = {}));
      var Ml = function () {
        var e = ht(jt),
          t = ht(Tt),
          n = Object(r.useRef)(null),
          i = t.find(function (t) {
            return t.id === e;
          }),
          o = Object(r.useReducer)(Vl, {
            showCreateDialog: !1,
            showSaveDialog: !1,
          }),
          c = Object(mt.a)(o, 2),
          u = c[0],
          l = c[1],
          s = function (e) {
            return C(e)
              ? e.subscriptionRunning
                ? ai.f
                : ai.e
              : k(e)
              ? e.subscriptionRunning
                ? ai.f
                : ai.j
              : j(e)
              ? ai.a
              : w(e)
              ? ai.c
              : ai.e;
          },
          d = function (e) {
            return !!O(e) && e.new;
          },
          f = Object(r.useCallback)(function () {
            l({ type: kl.close });
          }, []),
          m = Object(r.useCallback)(function (e) {
            O(e) && e.new
              ? l({ type: kl.showCreateDialog, tab: e })
              : l({ type: kl.close });
          }, []),
          p = Object(r.useCallback)(function (e) {
            return function () {
              e.hasChanges
                ? l({ type: kl.showSaveDialogAndClose, tab: e })
                : ft.dispatch(Me(e.id));
            };
          }, []),
          h = Object(r.useCallback)(function (e, t) {
            ft.dispatch(
              (function (e, t) {
                return function (n) {
                  var r = n.workspaces.find(function (e) {
                    return e.id === n.selectedWorkspaceId;
                  });
                  if (r) {
                    var a = r.tabs.find(function (t) {
                      return t.id === e;
                    });
                    if (a)
                      if (
                        (a.id !== r.selectedTabId &&
                          ((r.tabHistory = ee(r.tabHistory)
                            .setFirst(a.id)
                            .toArray()),
                          (r.selectedTabId = a.id)),
                        a.preview && t && delete a.preview,
                        C(a) && !a.new)
                      ) {
                        var i = r.collections.find(function (e) {
                          return (
                            (e.documents &&
                              void 0 !==
                                e.documents.find(function (e) {
                                  return e.id === a.id;
                                })) ||
                            !1
                          );
                        });
                        i && ((r.selectedNodeId = a.id), (i.expanded = !0));
                      } else
                        k(a) || j(a)
                          ? (r.selectedNodeId = a.id)
                          : delete r.selectedNodeId;
                  }
                };
              })(e, t)
            );
          }, []);
        return (
          Object(r.useEffect)(
            function () {
              i &&
                (document.title = ""
                  .concat(Nu.displayName, " >> ")
                  .concat(i.name));
              var e = Ln(n.current, "vertical");
              return function () {
                e();
              };
            },
            [i]
          ),
          a.a.createElement(
            zl,
            null,
            a.a.createElement(
              _l,
              { ref: n },
              t &&
                t.map(function (t) {
                  return a.a.createElement(jl, {
                    active: t.id === e,
                    id: t.id,
                    key: t.id,
                    name: t.name,
                    iconDef: s(t),
                    hasChanges: t.hasChanges,
                    new: d(t),
                    preview: t.preview,
                    onClick: h,
                    onClose: p(t),
                  });
                })
            ),
            a.a.createElement(
              Bl,
              {
                title: "New Tab",
                onClick: function () {
                  return ft.dispatch(Ve);
                },
              },
              a.a.createElement(Dn.a, { icon: ai.l })
            ),
            i &&
              !j(i) &&
              a.a.createElement(
                Bl,
                {
                  title: "Save Current Tab",
                  onClick: function () {
                    i &&
                      (O(i) &&
                        (i.hasChanges || i.new) &&
                        (i.new || k(i)
                          ? l({ type: kl.showCreateDialog, tab: i })
                          : ft.dispatch(nt)),
                      w(i) && i.hasChanges && ft.dispatch(nt));
                  },
                },
                a.a.createElement(Dn.a, { icon: ai.n })
              ),
            a.a.createElement(
              Bl,
              {
                title: "Preferences",
                onClick: function () {
                  ft.dispatch(Ne(!0));
                },
              },
              a.a.createElement(Dn.a, { icon: ai.c })
            ),
            u.showCreateDialog &&
              a.a.createElement(fl, {
                tab: u.tab,
                closeTabAfterCreation: u.closeTabAfterCreation,
                onSaved: f,
                onCancelled: f,
              }),
            u.showSaveDialog &&
              a.a.createElement(gl, {
                tab: u.tab,
                onSaved: m,
                onDidNotSave: f,
                onCancelled: f,
              }),
            a.a.createElement(yl, null)
          )
        );
      };
      function Vl(e, t) {
        switch (t.type) {
          case kl.close:
            return { showCreateDialog: !1, showSaveDialog: !1 };
          case kl.showCreateDialog:
            return Object(F.a)(
              Object(F.a)({}, e),
              {},
              { showCreateDialog: !0, showSaveDialog: !1, tab: t.tab }
            );
          case kl.showSaveDialog:
            return { showCreateDialog: !1, showSaveDialog: !0, tab: t.tab };
          case kl.showSaveDialogAndClose:
            return {
              closeTabAfterCreation: !0,
              showCreateDialog: !1,
              showSaveDialog: !0,
              tab: t.tab,
            };
          default:
            throw new Error();
        }
      }
      var zl = en.header(
          Il(),
          function (e) {
            return e.theme.tabsBg2;
          },
          function (e) {
            return e.theme.tabsBg;
          },
          function (e) {
            return e.theme.tabsBg;
          },
          function (e) {
            return e.theme.tabsBg2;
          }
        ),
        _l = en.div(Tl(), function (e) {
          return e.theme.tabsBg2;
        }),
        Bl = en.button(Sl(), function (e) {
          return e.theme.tabText;
        });
      var Nl = Object(r.memo)(function (e) {
          var t = (function (e) {
            var t = Object(r.useRef)(null);
            return (
              Object(r.useEffect)(
                function () {
                  var n = t.current,
                    r = {
                      contextmenu: !1,
                      minimap: { enabled: !1 },
                      model: e,
                      showFoldingControls: "always",
                      fixedOverflowWidgets: !0,
                      theme: "light",
                      fontSize: 13,
                    },
                    a = nn.editor.create(n, r);
                  function i() {
                    var e = n.parentElement.getBoundingClientRect();
                    a.layout({ width: e.width, height: e.height });
                  }
                  return (
                    window.addEventListener("splitterchange", i),
                    function () {
                      window.removeEventListener("splitterchange", i),
                        a.dispose();
                    }
                  );
                },
                [e]
              ),
              t
            );
          })(
            (function (e) {
              var t = Object(r.useRef)(
                  nn.editor.createModel("{\n  \n}", "json")
                ),
                n = e.content,
                a = e.onContentChange;
              return (
                t.current.updateOptions({ insertSpaces: !0, tabSize: 2 }),
                Object(r.useEffect)(
                  function () {
                    var e = te(function (e) {
                      a && a(e.getValue());
                    });
                    t.current.getValue() !== n &&
                      t.current.setValue(n || "{\n  \n}");
                    var r = mr(t.current.uri, [
                        {
                          uri: "editor://schemas/preferences.json",
                          schema: $e,
                        },
                      ]),
                      i = t.current.onDidChangeContent(function () {
                        e(t.current);
                      });
                    return function () {
                      i.dispose(), r();
                    };
                  },
                  [n, a]
                ),
                t.current
              );
            })(e)
          );
          return a.a.createElement($n, { ref: t });
        }),
        Rl = function () {
          var e = ht(It),
            t = ft.current(Mt),
            n = ft.current(Se).content,
            i = Object(r.useCallback)(function (e) {
              ft.dispatch(we(e));
            }, []),
            o = Object(r.useCallback)(function (e) {
              ft.dispatch(Le(e));
            }, []),
            c = Object(r.useCallback)(function (e) {
              var t;
              ft.dispatch(
                ((t = function (t) {
                  e && e.length > 0 ? (t.content = e) : delete t.content;
                }),
                function (e) {
                  var n = e.workspaces.find(function (t) {
                    return t.id === e.selectedWorkspaceId;
                  });
                  if (n) {
                    var r = n.tabs.find(function (e) {
                      return e.id === n.selectedTabId;
                    });
                    if (r && w(r)) {
                      var a = r.hash;
                      t(r),
                        (r.hash = Object(Z.a)(r.content || "")),
                        a !== r.hash && ((r.hasChanges = !0), delete r.preview);
                    }
                  }
                })
              );
            }, []);
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(Cn, {
              id: On.Preferences,
              asideCollapsable: !0,
              asideCollapsed: e,
              asideHeight: t,
              onAsideCollapsedChange: i,
              onAsideHeightChange: o,
              mainPane: "top",
              topContent: a.a.createElement(Nl, {
                content: n,
                onContentChange: c,
              }),
              bottomContent: a.a.createElement(eu, null),
              showSeparator: !0,
            }),
            a.a.createElement(Vo, null)
          );
        },
        Pl = function (e) {
          var t = e.split("-"),
            n = Object(mt.a)(t, 2),
            r = n[0],
            a = n[1];
          return a ? Je.getField(r, a) : Je.getType(r);
        },
        Dl = (function () {
          var e = Object(B.a)(
            _.a.mark(function e(t) {
              var n;
              return _.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Pl(t.id);
                    case 2:
                      return (
                        (n = e.sent),
                        e.abrupt(
                          "return",
                          n
                            ? {
                                fieldOrType: n,
                                headerExpanded: t.headerExpanded,
                                scrollPosition: t.scrollPosition,
                                searchTerm: t.searchTerm,
                              }
                            : void 0
                        )
                      );
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Zl = function (e) {
          var t = e;
          if (t.length > 1) {
            var n = t.length - 1,
              r = Al(t[n].fieldOrType);
            ("enum" !== r.typeKind && "scalar" !== r.typeKind) ||
              (t = t.slice()).splice(n, 1);
          }
          return t;
        };
      function Al(e) {
        for (
          var t = "field" === e.kind ? e.valueType : e;
          "value-type" === t.kind;

        )
          t = t.type;
        return t;
      }
      function Fl(e) {
        return "scalar" === Al(e).typeKind;
      }
      function Wl() {
        var e = Object(c.a)([
          "\n  display: flex;\n  align-items: center;\n  margin: 0 5px;\n",
        ]);
        return (
          (Wl = function () {
            return e;
          }),
          e
        );
      }
      function ql() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex-direction: row;\n  cursor: pointer;\n\n  :hover {\n    color: ",
          ";\n  }\n",
        ]);
        return (
          (ql = function () {
            return e;
          }),
          e
        );
      }
      function Kl() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  margin-right: 5px;\n",
        ]);
        return (
          (Kl = function () {
            return e;
          }),
          e
        );
      }
      function Ul() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: row;\n\n  > span {\n    opacity: 0.75;\n  }\n",
        ]);
        return (
          (Ul = function () {
            return e;
          }),
          e
        );
      }
      function Jl() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  color: ",
          ";\n",
        ]);
        return (
          (Jl = function () {
            return e;
          }),
          e
        );
      }
      function Ql() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 20px;\n  border-bottom: 1px solid ",
          ";\n  padding: 0 10px;\n  background-color: ",
          ";\n  align-items: center;\n",
        ]);
        return (
          (Ql = function () {
            return e;
          }),
          e
        );
      }
      var Gl = Object(r.memo)(function (e) {
          var t = e.onClick,
            n = Object(r.useState)([]),
            i = Object(mt.a)(n, 2),
            o = i[0],
            c = i[1],
            u = Object(r.useRef)(null),
            l = Object(r.useRef)(""),
            s = Object(r.useCallback)(
              (function () {
                var e = Object(B.a)(
                  _.a.mark(function e(t) {
                    var n, r;
                    return _.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!(t.length > 0)) {
                              e.next = 12;
                              break;
                            }
                            return (
                              (n = Object(Z.b)()),
                              (l.current = n),
                              (e.next = 5),
                              Promise.all(
                                t.map(
                                  (function () {
                                    var e = Object(B.a)(
                                      _.a.mark(function e(t) {
                                        return _.a.wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (e.next = 2), Dl(t);
                                              case 2:
                                                return e.abrupt(
                                                  "return",
                                                  e.sent
                                                );
                                              case 3:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                      })
                                    );
                                    return function (t) {
                                      return e.apply(this, arguments);
                                    };
                                  })()
                                )
                              )
                            );
                          case 5:
                            if (((r = e.sent), n !== l.current)) {
                              e.next = 11;
                              break;
                            }
                            if (!r || -1 !== r.indexOf(void 0)) {
                              e.next = 9;
                              break;
                            }
                            return e.abrupt("return", r);
                          case 9:
                            e.next = 12;
                            break;
                          case 11:
                            return e.abrupt("return", void 0);
                          case 12:
                            return e.abrupt("return", []);
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              []
            );
          return (
            Object(r.useEffect)(
              function () {
                var e = Object(tu.a)(qe.observable, ft.select(Ct)).subscribe(
                  (function () {
                    var e = Object(B.a)(
                      _.a.mark(function e(t) {
                        var n, r, a, i;
                        return _.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n = Object(mt.a)(t, 2)),
                                  (r = n[0]),
                                  (a = n[1]),
                                  !r.exists || !a)
                                ) {
                                  e.next = 8;
                                  break;
                                }
                                return (e.next = 4), s(a);
                              case 4:
                                (i = e.sent) && c(i), (e.next = 9);
                                break;
                              case 8:
                                c([]);
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                );
                return function () {
                  e.unsubscribe();
                };
              },
              [s]
            ),
            Object(r.useEffect)(function () {
              var e = Ln(u.current, "vertical");
              return function () {
                e();
              };
            }, []),
            a.a.createElement(
              Yl,
              { ref: u },
              o.map(function (e, n, r) {
                return a.a.createElement(
                  Xl,
                  { key: "breadcrumb-".concat(n) },
                  n + 1 < r.length
                    ? a.a.createElement(
                        a.a.Fragment,
                        null,
                        a.a.createElement(
                          ts,
                          {
                            onClick: function () {
                              return t(n - 1, e);
                            },
                          },
                          a.a.createElement(
                            es,
                            null,
                            "type" === e.fieldOrType.kind
                              ? Kr(e.fieldOrType.typeKind)
                              : a.a.createElement(Vr, null)
                          ),
                          a.a.createElement("span", null, e.fieldOrType.name)
                        ),
                        a.a.createElement(ns, null, a.a.createElement(Cr, null))
                      )
                    : a.a.createElement(
                        $l,
                        null,
                        a.a.createElement(
                          es,
                          null,
                          "type" === e.fieldOrType.kind
                            ? Kr(e.fieldOrType.typeKind)
                            : a.a.createElement(Vr, null)
                        ),
                        a.a.createElement("span", null, e.fieldOrType.name)
                      )
                );
              })
            )
          );
        }),
        Yl = en.div(
          Ql(),
          function (e) {
            return e.theme.contentBorderLight;
          },
          function (e) {
            return e.theme.sideBarBg;
          }
        ),
        Xl = en.div(Jl(), function (e) {
          return e.theme.textColor;
        }),
        $l = en.div(Ul()),
        es = en.div(Kl()),
        ts = en.a(ql(), function (e) {
          return e.theme.blue;
        }),
        ns = en.div(Wl());
      function rs() {
        var e = Object(c.a)([
          "\n  flex: 1 1 auto;\n  border: 0 none;\n  padding: 6px 7px;\n  color: ",
          ";\n  background-color: ",
          ";\n",
        ]);
        return (
          (rs = function () {
            return e;
          }),
          e
        );
      }
      function as() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  color: ",
          ";\n  opacity: 0.75;\n  transition: opacity 0.2s ease;\n\n  :hover {\n    opacity: 1;\n  }\n",
        ]);
        return (
          (as = function () {
            return e;
          }),
          e
        );
      }
      function is() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  margin-left: 8px;\n  color: ",
          ";\n",
        ]);
        return (
          (is = function () {
            return e;
          }),
          e
        );
      }
      function os() {
        var e = Object(c.a)([
          "\n  z-index: 1;\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: row;\n  justify-content: center;\n  border-bottom: 1px solid ",
          ";\n  padding: 0 3px;\n  color: ",
          ";\n  background-color: ",
          ";\n",
        ]);
        return (
          (os = function () {
            return e;
          }),
          e
        );
      }
      var cs = Object(r.memo)(
          Object(r.forwardRef)(function (e, t) {
            var n = Object(r.useRef)(null),
              i = Object(r.useRef)(null),
              o = e.searchTerm,
              c = te(function (t) {
                e.onSearchTermChange(t);
              });
            return (
              Object(r.useEffect)(
                function () {
                  var e = n.current;
                  (i.current.style.display =
                    o && o.length > 0 ? "flex" : "none"),
                    (e.value = o || "");
                },
                [o]
              ),
              a.a.createElement(
                us,
                { ref: t },
                a.a.createElement(ls, null, a.a.createElement(Jr, null)),
                a.a.createElement(ds, {
                  ref: n,
                  placeholder: "Find...",
                  onChange: function (e) {
                    c(e.currentTarget.value.trim()),
                      (i.current.style.display =
                        e.currentTarget.value.length > 0 ? "flex" : "none");
                  },
                }),
                a.a.createElement(
                  ss,
                  {
                    ref: i,
                    onClick: function () {
                      e.onSearchTermChange(""),
                        (n.current.value = ""),
                        (i.current.style.display = "none");
                    },
                  },
                  a.a.createElement(jr, null)
                )
              )
            );
          })
        ),
        us = en.div(
          os(),
          function (e) {
            return e.theme.contentBorderLight;
          },
          function (e) {
            return e.theme.textColor;
          },
          function (e) {
            return e.theme.mainBgColor;
          }
        ),
        ls = en.div(is(), function (e) {
          return e.theme.textColor;
        }),
        ss = en.button(as(), function (e) {
          return e.theme.textColor;
        }),
        ds = en.input(
          rs(),
          function (e) {
            return e.theme.textColor;
          },
          function (e) {
            return e.theme.mainBgColor;
          }
        );
      function fs() {
        var e = Object(c.a)(["\n  color: ", ";\n"]);
        return (
          (fs = function () {
            return e;
          }),
          e
        );
      }
      function ms() {
        var e = Object(c.a)(["\n  color: ", ";\n"]);
        return (
          (ms = function () {
            return e;
          }),
          e
        );
      }
      function ps() {
        var e = Object(c.a)(["\n  color: ", ";\n"]);
        return (
          (ps = function () {
            return e;
          }),
          e
        );
      }
      function hs() {
        var e = Object(c.a)(["\n  color: ", ";\n"]);
        return (
          (hs = function () {
            return e;
          }),
          e
        );
      }
      function vs() {
        var e = Object(c.a)(["\n  color: ", ";\n"]);
        return (
          (vs = function () {
            return e;
          }),
          e
        );
      }
      function bs() {
        var e = Object(c.a)([
          "\n  cursor: pointer;\n  text-decoration: underline;\n\n  :hover {\n    text-decoration: none;\n  }\n",
        ]);
        return (
          (bs = function () {
            return e;
          }),
          e
        );
      }
      function gs() {
        var e = Object(c.a)(["\n  color: ", ";\n"]);
        return (
          (gs = function () {
            return e;
          }),
          e
        );
      }
      function xs() {
        var e = Object(c.a)(["\n  color: ", ";\n"]);
        return (
          (xs = function () {
            return e;
          }),
          e
        );
      }
      function ys() {
        var e = Object(c.a)(["\n  color: ", ";\n"]);
        return (
          (ys = function () {
            return e;
          }),
          e
        );
      }
      function Es() {
        var e = Object(c.a)(["\n  color: ", ";\n"]);
        return (
          (Es = function () {
            return e;
          }),
          e
        );
      }
      function Cs() {
        var e = Object(c.a)(["\n  color: ", ";\n"]);
        return (
          (Cs = function () {
            return e;
          }),
          e
        );
      }
      function Os() {
        var e = Object(c.a)(["\n  color: ", ";\n"]);
        return (
          (Os = function () {
            return e;
          }),
          e
        );
      }
      function ks(e, t, n) {
        return a.a.createElement(
          Ts,
          null,
          a.a.createElement(Is, null, e.name),
          e.arguments &&
            e.arguments.length > 0 &&
            a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(Hs, null, "("),
              t
                ? "..."
                : a.a.createElement(
                    a.a.Fragment,
                    null,
                    a.a.createElement("br", null),
                    (function (e, t) {
                      return e && 0 !== e.length
                        ? e.map(function (e) {
                            return a.a.createElement(
                              Ls,
                              { key: e.id },
                              a.a.createElement(Rs, null, "\xa0\xa0"),
                              a.a.createElement(Is, null, e.name),
                              a.a.createElement(Ss, null, ":"),
                              a.a.createElement(Rs, null, "\xa0"),
                              js(
                                e.type,
                                t
                                  ? function () {
                                      return t(e);
                                    }
                                  : void 0
                              ),
                              e.defaultValue &&
                                a.a.createElement(
                                  a.a.Fragment,
                                  null,
                                  a.a.createElement(Rs, null, "\xa0"),
                                  a.a.createElement(_s, null, "="),
                                  a.a.createElement(Rs, null, "\xa0"),
                                  Fl(e.type)
                                    ? "string" === typeof e.defaultValue
                                      ? a.a.createElement(
                                          Bs,
                                          null,
                                          JSON.stringify(e.defaultValue)
                                        )
                                      : a.a.createElement(
                                          zs,
                                          null,
                                          JSON.stringify(e.defaultValue)
                                        )
                                    : a.a.createElement(
                                        Ns,
                                        null,
                                        JSON.stringify(e.defaultValue, null, 2)
                                      )
                                ),
                              a.a.createElement("br", null)
                            );
                          })
                        : a.a.createElement(a.a.Fragment, null);
                    })(e.arguments, n)
                  ),
              a.a.createElement(Hs, null, ")")
            ),
          a.a.createElement(Ss, null, ":"),
          a.a.createElement(Rs, null, "\xa0"),
          js(
            e.valueType,
            n
              ? function () {
                  return n(e);
                }
              : void 0
          )
        );
      }
      function js(e, t) {
        if ("value-type" === e.kind) {
          var n = js(e.type, t);
          return a.a.createElement(
            a.a.Fragment,
            null,
            e.isList
              ? a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(Hs, null, "["),
                  n,
                  a.a.createElement(Hs, null, "]")
                )
              : n,
            !e.isOptional && a.a.createElement(_s, null, "!")
          );
        }
        return "scalar" === e.typeKind
          ? a.a.createElement(Ms, null, ws(e, t))
          : a.a.createElement(Ns, null, ws(e, t));
      }
      var ws = function (e, t) {
          return a.a.createElement(
            a.a.Fragment,
            null,
            t
              ? a.a.createElement(
                  Vs,
                  {
                    onClick: function () {
                      return t(e);
                    },
                  },
                  e.name
                )
              : e.name
          );
        },
        Ls = en.span(Os(), function (e) {
          return e.theme.textColor;
        }),
        Hs = en.span(Cs(), function (e) {
          return e.theme.textColor;
        }),
        Ss = en.span(Es(), function (e) {
          return e.theme.delimiterToken;
        }),
        Ts = en.span(ys(), function (e) {
          return e.theme.textColor;
        }),
        Is = en.span(xs(), function (e) {
          return e.theme.identifierToken;
        }),
        Ms = en.span(gs(), function (e) {
          return e.theme.keywordToken;
        }),
        Vs = en.a(bs()),
        zs = en.span(vs(), function (e) {
          return e.theme.numberToken;
        }),
        _s = en.span(hs(), function (e) {
          return e.theme.operatorToken;
        }),
        Bs = en.span(ps(), function (e) {
          return e.theme.stringToken;
        }),
        Ns = en.span(ms(), function (e) {
          return e.theme.typeToken;
        }),
        Rs = en.span(fs(), function (e) {
          return e.theme.mainBgColor;
        });
      function Ps() {
        var e = Object(c.a)(["\n  height: 16px;\n"]);
        return (
          (Ps = function () {
            return e;
          }),
          e
        );
      }
      function Ds() {
        var e = Object(c.a)([
          "\n  flex: 1 1 auto;\n  padding: 1px 4px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n",
        ]);
        return (
          (Ds = function () {
            return e;
          }),
          e
        );
      }
      function Zs() {
        var e = Object(c.a)([
          "\n  flex: 1 1 auto;\n  padding: 0px 4px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: bold;\n",
        ]);
        return (
          (Zs = function () {
            return e;
          }),
          e
        );
      }
      function As() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: row;\n  align-items: flex-start;\n  border-bottom: 1px solid ",
          ";\n  padding: 8px 3px 8px 10px;\n  font-size: 1.167em;\n\n  > ",
          " {\n    margin-top: 1px;\n  }\n",
        ]);
        return (
          (As = function () {
            return e;
          }),
          e
        );
      }
      function Fs() {
        var e = Object(c.a)(["\n  flex: 1 1 auto;\n"]);
        return (
          (Fs = function () {
            return e;
          }),
          e
        );
      }
      function Ws() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: row;\n  align-items: center;\n  padding: 4px 3px 4px 10px;\n  color: ",
          ";\n  cursor: pointer;\n  transition: background-color 0.2s ease, color 0.2s ease;\n\n  &:hover {\n    background-color: ",
          ";\n  }\n\n  &.active {\n    background-color: ",
          ";\n\n    &:hover {\n      background-color: ",
          ";\n    }\n  }\n",
        ]);
        return (
          (Ws = function () {
            return e;
          }),
          e
        );
      }
      function qs() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 ",
          "px;\n  flex-direction: column;\n  border-right: 1px solid ",
          ";\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.1);\n",
        ]);
        return (
          (qs = function () {
            return e;
          }),
          e
        );
      }
      var Ks = Object(r.memo)(function (e) {
          var t = e.fieldOrType,
            n = e.headerExpanded,
            i = e.searchTerm,
            o = e.scrollPosition,
            c = e.position,
            l = e.selectedFieldId,
            s = e.onClick,
            d = e.onNavigate,
            f = Object(r.useRef)(null),
            m = Object(r.useRef)(null),
            p = Object(r.useRef)(""),
            h = Object(r.useRef)([]),
            v = Object(r.useState)(n || !1),
            b = Object(mt.a)(v, 2),
            g = b[0],
            x = b[1],
            y = Object(r.useCallback)(
              (function () {
                var e = Object(B.a)(
                  _.a.mark(function e(t, n, r) {
                    var a, i, o, c;
                    return _.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((a = Al(t)),
                              (i =
                                null === n || void 0 === n
                                  ? void 0
                                  : n.toLocaleLowerCase()),
                              !a.types)
                            ) {
                              e.next = 7;
                              break;
                            }
                            (h.current = a.types
                              .map(Al)
                              .filter(function (e) {
                                return (
                                  !i ||
                                  -1 !== e.name.toLocaleLowerCase().indexOf(i)
                                );
                              })
                              .map(function (e) {
                                return { fieldOrType: e, selected: l === e.id };
                              })),
                              f.current && f.current.forceUpdate(r),
                              (e.next = 13);
                            break;
                          case 7:
                            return (
                              (o = Object(Z.b)()),
                              (p.current = o),
                              (e.next = 11),
                              Je.getFields(a.name)
                            );
                          case 11:
                            (c = e.sent),
                              p.current === o &&
                                ((h.current = c
                                  ? c
                                      .filter(function (e) {
                                        return (
                                          !i ||
                                          -1 !==
                                            e.name
                                              .toLocaleLowerCase()
                                              .indexOf(i)
                                        );
                                      })
                                      .map(function (e) {
                                        return {
                                          fieldOrType: e,
                                          selected: l === e.id,
                                        };
                                      })
                                  : []),
                                f.current && f.current.forceUpdate(r));
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n, r) {
                  return e.apply(this, arguments);
                };
              })(),
              [l]
            ),
            E = Object(r.useCallback)(
              function (e) {
                return function () {
                  s({ fieldOrType: e });
                };
              },
              [s]
            ),
            C = function (e) {
              ft.dispatch(
                ot(function (t) {
                  e.scrollOffset > 0
                    ? (t.breadCrumbs[c].scrollPosition = e.scrollOffset)
                    : t.breadCrumbs[c] &&
                      delete t.breadCrumbs[c].scrollPosition;
                })
              );
            },
            O = Object(r.useCallback)(
              (function () {
                var e = Object(B.a)(
                  _.a.mark(function e(n) {
                    return _.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              ft.dispatch(
                                ot(function (e) {
                                  delete e.breadCrumbs[c].scrollPosition,
                                    n.length > 0
                                      ? (e.breadCrumbs[c].searchTerm = n)
                                      : delete e.breadCrumbs[c].searchTerm;
                                })
                              ),
                              (e.next = 3),
                              y(t, n)
                            );
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [y, t, c]
            ),
            k = Object(r.memo)(function (e) {
              var t = e.data,
                n = e.index,
                r = e.style,
                i = t[n],
                o = i.selected ? "active" : void 0,
                u = Al(i.fieldOrType);
              return a.a.createElement(
                "div",
                {
                  key: "explorer-pane-".concat(c, "-item-").concat(n),
                  style: r,
                  onClick: E(i.fieldOrType),
                },
                "type" === i.fieldOrType.kind
                  ? a.a.createElement(
                      Js,
                      { className: o },
                      a.a.createElement(Br, null, a.a.createElement(Ar, null)),
                      a.a.createElement(Xs, null, js(i.fieldOrType)),
                      a.a.createElement(Br, null, a.a.createElement(Cr, null))
                    )
                  : a.a.createElement(
                      Js,
                      { className: o },
                      a.a.createElement(Br, null, a.a.createElement(Vr, null)),
                      a.a.createElement(Xs, null, ks(i.fieldOrType, !0)),
                      i.fieldOrType.isDeprecated &&
                        a.a.createElement(
                          Br,
                          null,
                          a.a.createElement(Xr, null)
                        ),
                      ["input-object", "interface", "object", "union"].includes(
                        u.typeKind
                      ) &&
                        a.a.createElement(Br, null, a.a.createElement(Cr, null))
                    )
              );
            }, ja.b);
          return (
            Object(r.useEffect)(
              function () {
                var e,
                  t = h.current.slice(),
                  n = Object(u.a)(t);
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    var r = e.value;
                    r.selected = r.fieldOrType.id === l;
                  }
                } catch (a) {
                  n.e(a);
                } finally {
                  n.f();
                }
                (h.current = t), f.current && f.current.forceUpdate();
              },
              [l]
            ),
            Object(r.useEffect)(
              function () {
                return (
                  y(t, i, function () {
                    o && m.current && m.current.scrollTo(o);
                  }),
                  function () {
                    p.current = "";
                  }
                );
              },
              [y, t, o, i]
            ),
            Object(r.useEffect)(
              function () {
                x(n || !1);
              },
              [n]
            ),
            a.a.createElement(
              Us,
              null,
              a.a.createElement(
                Gs,
                null,
                "type" === t.kind
                  ? a.a.createElement(
                      a.a.Fragment,
                      null,
                      a.a.createElement(Br, null, Kr(t.typeKind)),
                      a.a.createElement(Ys, null, js(t))
                    )
                  : a.a.createElement(
                      a.a.Fragment,
                      null,
                      a.a.createElement(Br, null, a.a.createElement(Vr, null)),
                      a.a.createElement(
                        Ys,
                        null,
                        ks(t, !g, function (e) {
                          return d(
                            "argument" === e.kind ? e.type : e.valueType
                          );
                        })
                      ),
                      t.arguments &&
                        t.arguments.length > 0 &&
                        a.a.createElement(
                          Br,
                          null,
                          a.a.createElement(
                            $s,
                            {
                              onClick: function () {
                                ft.dispatch(
                                  ot(function (e) {
                                    g
                                      ? delete e.breadCrumbs[c].headerExpanded
                                      : (e.breadCrumbs[c].headerExpanded = !0);
                                  })
                                ),
                                  x(!g);
                              },
                            },
                            g
                              ? a.a.createElement(Or, null)
                              : a.a.createElement(Er, null)
                          )
                        )
                    )
              ),
              a.a.createElement(cs, { searchTerm: i, onSearchTermChange: O }),
              a.a.createElement(
                Qs,
                null,
                a.a.createElement(ka.a, { ref: f }, function (e) {
                  var t = e.width,
                    n = e.height;
                  return a.a.createElement(
                    "div",
                    {
                      tabIndex: -1,
                      style: { width: t + "px", height: n + "px" },
                    },
                    a.a.createElement(
                      ja.a,
                      {
                        width: t,
                        height: n,
                        layout: "vertical",
                        itemSize: 25,
                        itemKey: function (e) {
                          return "explorer-pane-".concat(c, "-item-").concat(e);
                        },
                        itemData: h.current,
                        itemCount: h.current.length,
                        overscanCount: 5,
                        ref: m,
                        onScroll: C,
                      },
                      k
                    )
                  );
                })
              )
            )
          );
        }),
        Us = en.div(qs(), 300, function (e) {
          return e.theme.contentBorderLight;
        }),
        Js = en.div(
          Ws(),
          function (e) {
            return e.theme.textColor;
          },
          function (e) {
            return e.theme.treeHoverBg;
          },
          function (e) {
            return e.theme.treeHoverBg;
          },
          function (e) {
            return e.theme.treeHoverBg;
          }
        ),
        Qs = en.main(Fs()),
        Gs = en.header(
          As(),
          function (e) {
            return e.theme.contentBorderLight;
          },
          Br
        ),
        Ys = en.h1(Zs()),
        Xs = en.div(Ds()),
        $s = en.button(Ps());
      function ed() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  background: linear-gradient(\n    15deg,\n    ",
          " 0%,\n    ",
          " 100%\n  );\n",
        ]);
        return (
          (ed = function () {
            return e;
          }),
          e
        );
      }
      function td() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n",
        ]);
        return (
          (td = function () {
            return e;
          }),
          e
        );
      }
      var nd = Object(r.memo)(function (e) {
          var t = e.breadCrumbs,
            n = e.scrollPosition,
            i = e.onNavigate,
            o = Object(r.useRef)(null),
            c = Object(r.useRef)(null),
            u = Object(r.useRef)(""),
            l = Object(r.useRef)([]),
            s = Object(r.useRef)([]),
            d = (function () {
              var e = Object(B.a)(
                _.a.mark(function e(t, n) {
                  var r, a;
                  return _.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!(t.length > 0)) {
                            e.next = 9;
                            break;
                          }
                          return (
                            (r = Object(Z.b)()),
                            (u.current = r),
                            (e.next = 5),
                            Promise.all(
                              t.map(function (e) {
                                return Dl(e);
                              })
                            )
                          );
                        case 5:
                          (a = e.sent),
                            r === u.current &&
                              (a && -1 === a.indexOf(void 0)
                                ? ((l.current = Zl(a)),
                                  (s.current =
                                    a.length > 0
                                      ? a.slice(1).map(function (e) {
                                          return e.fieldOrType.id;
                                        })
                                      : []))
                                : ((l.current = []), (s.current = [])),
                              o.current && o.current.forceUpdate(n)),
                            (e.next = 12);
                          break;
                        case 9:
                          (l.current = []),
                            (s.current = []),
                            o.current && o.current.forceUpdate(n);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
            f = Object(r.useCallback)(
              function (e) {
                return (function () {
                  var t = Object(B.a)(
                    _.a.mark(function t(n) {
                      var r, a, o, u;
                      return _.a.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (r = e + 1),
                                (a = ft.current(Se)),
                                (o = a.breadCrumbs),
                                (u = o.slice()).splice(r, u.length - r, {
                                  id: n.fieldOrType.id,
                                  headerExpanded: n.headerExpanded,
                                  scrollPosition: n.scrollPosition,
                                  searchTerm: n.searchTerm,
                                }),
                                ft.dispatch(
                                  ot(function (e) {
                                    e.breadCrumbs = u;
                                  })
                                ),
                                i(n.fieldOrType, !0),
                                (t.next = 8),
                                d(u, function () {
                                  c.current &&
                                    c.current.scrollToItem(
                                      l.current.length - 1,
                                      "end"
                                    );
                                })
                              );
                            case 8:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })();
              },
              [i]
            ),
            m = function (e) {
              ft.dispatch(
                ot(function (t) {
                  t.scrollPosition = e.scrollOffset;
                })
              );
            },
            p = Object(r.memo)(function (e) {
              var t = e.data,
                n = e.index,
                r = e.style,
                o = t.selectedIds.length > n ? t.selectedIds[n] : void 0,
                c = t.panes[n];
              return a.a.createElement(
                "div",
                { key: "explorer-pane-".concat(n), style: r },
                a.a.createElement(Ks, {
                  fieldOrType: c.fieldOrType,
                  headerExpanded: c.headerExpanded,
                  position: n,
                  scrollPosition: c.scrollPosition,
                  searchTerm: c.searchTerm,
                  selectedFieldId: o,
                  onClick: f(n),
                  onNavigate: i,
                })
              );
            }, ja.b);
          return (
            Object(r.useEffect)(
              function () {
                var e = qe.subscribeToSchemaInfoChange(
                  (function () {
                    var e = Object(B.a)(
                      _.a.mark(function e(r) {
                        return _.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!r.exists) {
                                  e.next = 3;
                                  break;
                                }
                                return (
                                  (e.next = 3),
                                  d(t, function () {
                                    n && c.current && c.current.scrollTo(n);
                                  })
                                );
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                );
                return function () {
                  (u.current = ""),
                    (l.current = []),
                    (s.current = []),
                    e.unsubscribe();
                };
              },
              [t, n]
            ),
            a.a.createElement(
              rd,
              null,
              a.a.createElement(Gl, {
                onClick: function (e, t) {
                  return f(e)(t);
                },
              }),
              a.a.createElement(
                ad,
                null,
                a.a.createElement(ka.a, { ref: o }, function (e) {
                  var t = e.width,
                    n = e.height;
                  return a.a.createElement(
                    "div",
                    {
                      tabIndex: -1,
                      style: { width: t + "px", height: n + "px" },
                    },
                    a.a.createElement(
                      ja.a,
                      {
                        width: t,
                        height: n,
                        layout: "horizontal",
                        itemSize: 300,
                        itemKey: function (e) {
                          return "explorer-pane-".concat(e);
                        },
                        itemData: { panes: l.current, selectedIds: s.current },
                        itemCount: l.current.length,
                        overscanCount: 5,
                        ref: c,
                        onScroll: m,
                      },
                      p
                    )
                  );
                })
              )
            )
          );
        }),
        rd = en.div(td()),
        ad = en.div(
          ed(),
          function (e) {
            return e.theme.sideBarBg;
          },
          function (e) {
            return e.theme.mainBgColor;
          }
        ),
        id = Object(r.memo)(function (e) {
          var t = e.arguments,
            n = e.onNavigate;
          return a.a.createElement(
            fc,
            null,
            a.a.createElement(mc, null, "Arguments"),
            a.a.createElement(
              pc,
              null,
              t.map(function (e) {
                var t = Al(e.type);
                return a.a.createElement(
                  hc,
                  { key: "info-arguments-".concat(e.id) },
                  a.a.createElement(
                    vc,
                    null,
                    a.a.createElement(bc, null, Kr(t.typeKind)),
                    a.a.createElement(
                      gc,
                      null,
                      (function (e, t) {
                        return a.a.createElement(
                          Ls,
                          { key: e.id },
                          a.a.createElement(Is, null, e.name),
                          a.a.createElement(Ss, null, ":"),
                          a.a.createElement(Rs, null, "\xa0"),
                          js(
                            e.type,
                            t
                              ? function () {
                                  return t(e);
                                }
                              : void 0
                          ),
                          e.defaultValue &&
                            a.a.createElement(
                              a.a.Fragment,
                              null,
                              a.a.createElement(Rs, null, "\xa0"),
                              a.a.createElement(_s, null, "="),
                              a.a.createElement(Rs, null, "\xa0"),
                              Fl(e.type)
                                ? "string" === typeof e.defaultValue
                                  ? a.a.createElement(
                                      Bs,
                                      null,
                                      JSON.stringify(e.defaultValue)
                                    )
                                  : a.a.createElement(
                                      zs,
                                      null,
                                      JSON.stringify(e.defaultValue)
                                    )
                                : a.a.createElement(
                                    Ns,
                                    null,
                                    JSON.stringify(e.defaultValue, null, 2)
                                  )
                            )
                        );
                      })(e, function (e) {
                        return n(e.type);
                      })
                    )
                  ),
                  e.description &&
                    a.a.createElement(xc, {
                      dangerouslySetInnerHTML: { __html: ue(e.description) },
                    })
                );
              })
            )
          );
        });
      function od() {
        var e = Object(c.a)(["\n  color: ", ";\n"]);
        return (
          (od = function () {
            return e;
          }),
          e
        );
      }
      var cd = Object(r.memo)(function (e) {
          var t = e.enumValues;
          return a.a.createElement(
            fc,
            null,
            a.a.createElement(mc, null, "Enum Values"),
            a.a.createElement(
              pc,
              null,
              t.map(function (e) {
                return a.a.createElement(
                  hc,
                  { key: "info-values-".concat(e.id) },
                  a.a.createElement(
                    vc,
                    null,
                    a.a.createElement(bc, null, a.a.createElement(Ir, null)),
                    a.a.createElement(
                      gc,
                      null,
                      a.a.createElement(ud, null, e.name)
                    ),
                    e.isDeprecated &&
                      a.a.createElement(bc, null, a.a.createElement(Xr, null))
                  ),
                  e.description &&
                    a.a.createElement(xc, {
                      dangerouslySetInnerHTML: { __html: ue(e.description) },
                    }),
                  e.isDeprecated &&
                    e.deprecationReason &&
                    a.a.createElement(
                      xc,
                      { warning: !0 },
                      a.a.createElement("h3", null, "Deprecated"),
                      a.a.createElement("p", {
                        dangerouslySetInnerHTML: {
                          __html: ue(e.deprecationReason),
                        },
                      })
                    )
                );
              })
            )
          );
        }),
        ud = en.span(od(), function (e) {
          return e.theme.typeToken;
        }),
        ld = Object(r.memo)(function (e) {
          var t = e.fields,
            n = e.onNavigate;
          return a.a.createElement(
            fc,
            null,
            a.a.createElement(mc, null, "Fields"),
            a.a.createElement(
              pc,
              null,
              t.map(function (e) {
                return a.a.createElement(
                  hc,
                  { key: "info-fields-".concat(e.id) },
                  a.a.createElement(
                    vc,
                    null,
                    a.a.createElement(bc, null, a.a.createElement(Vr, null)),
                    a.a.createElement(
                      gc,
                      null,
                      ks(e, !0, function (e) {
                        return n("argument" === e.kind ? e.type : e.valueType);
                      })
                    ),
                    e.isDeprecated &&
                      a.a.createElement(bc, null, a.a.createElement(Xr, null))
                  ),
                  e.description &&
                    a.a.createElement(xc, {
                      dangerouslySetInnerHTML: { __html: ue(e.description) },
                    }),
                  e.isDeprecated &&
                    e.deprecationReason &&
                    a.a.createElement(
                      xc,
                      { warning: !0 },
                      a.a.createElement("h3", null, "Deprecated"),
                      a.a.createElement("p", {
                        dangerouslySetInnerHTML: {
                          __html: ue(e.deprecationReason),
                        },
                      })
                    )
                );
              })
            )
          );
        }),
        sd = Object(r.memo)(function (e) {
          var t = e.title,
            n = e.types,
            r = e.onNavigate;
          return a.a.createElement(
            fc,
            null,
            a.a.createElement(mc, null, t),
            a.a.createElement(
              pc,
              null,
              n.map(function (e) {
                var t = Al(e);
                return a.a.createElement(
                  hc,
                  { key: "info-types-".concat(t.id) },
                  a.a.createElement(
                    vc,
                    null,
                    a.a.createElement(bc, null, Kr(t.typeKind)),
                    a.a.createElement(
                      gc,
                      null,
                      js(t, function (e) {
                        return r(e);
                      })
                    )
                  ),
                  t.description &&
                    a.a.createElement(xc, {
                      dangerouslySetInnerHTML: { __html: ue(t.description) },
                    })
                );
              })
            )
          );
        });
      function dd() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n",
        ]);
        return (
          (dd = function () {
            return e;
          }),
          e
        );
      }
      function fd() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 30px;\n  flex-direction: row;\n  border-top: 1px solid ",
          ";\n",
        ]);
        return (
          (fd = function () {
            return e;
          }),
          e
        );
      }
      function md() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  margin-left: 4px;\n  border: 1px solid ",
          ";\n  padding: 2px 4px;\n  border-radius: 3px;\n  opacity: 0.75;\n  transition: background-color 0.2s ease, opacity 0.2s ease;\n\n  :hover {\n    opacity: 1;\n    background-color: ",
          ";\n  }\n\n  :disabled,\n  :disabled:hover {\n    cursor: default;\n    opacity: 0.5;\n    background-color: transparent;\n  }\n",
        ]);
        return (
          (md = function () {
            return e;
          }),
          e
        );
      }
      function pd() {
        var e = Object(c.a)(["\n  display: flex;\n  flex: 0 0 auto;\n"]);
        return (
          (pd = function () {
            return e;
          }),
          e
        );
      }
      function hd() {
        var e = Object(c.a)([
          "\n  margin-bottom: 5px;\n  font-weight: bold;\n",
        ]);
        return (
          (hd = function () {
            return e;
          }),
          e
        );
      }
      function vd() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  padding: 0 4px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: bold;\n",
        ]);
        return (
          (vd = function () {
            return e;
          }),
          e
        );
      }
      function bd() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 30px;\n  flex-direction: row;\n  align-items: center;\n  margin: 5px 10px;\n  font-size: 1.167em;\n",
        ]);
        return (
          (bd = function () {
            return e;
          }),
          e
        );
      }
      function gd() {
        var e = Object(c.a)(["\n  flex: 0 0 auto;\n  margin: 10px;\n"]);
        return (
          (gd = function () {
            return e;
          }),
          e
        );
      }
      function xd() {
        var e = Object(c.a)(["\n  flex: 0 0 auto;\n  ", "\n"]);
        return (
          (xd = function () {
            return e;
          }),
          e
        );
      }
      function yd() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  overflow-y: auto;\n",
        ]);
        return (
          (yd = function () {
            return e;
          }),
          e
        );
      }
      var Ed = Object(r.memo)(function (e) {
        var t = e.onNavigate,
          n = Object(r.useReducer)(Cd, {
            activeId: "info",
            position: 0,
            size: 0,
          }),
          i = Object(mt.a)(n, 2),
          o = i[0],
          c = i[1],
          u = o.fieldOrType,
          l = o.fields,
          s = o.position,
          d = o.size,
          f = function (e) {
            return o.activeId === e ? "active" : "";
          },
          m = function (e) {
            ft.dispatch(
              ot(function (t) {
                "info" === e
                  ? delete t.infoPath[t.infoPosition].activeTabId
                  : (t.infoPath[t.infoPosition].activeTabId = e);
              })
            ),
              c({ kind: "activate-tab", activeId: e });
          };
        return (
          Object(r.useEffect)(function () {
            var e,
              t,
              n,
              r = !1,
              a = Object(tu.a)(qe.observable, ft.select(Se)).subscribe(
                function (a) {
                  var i = Object(mt.a)(a, 2),
                    o = i[0],
                    u = i[1];
                  if (
                    o.exists &&
                    j(u) &&
                    (e !== u.id || t !== u.infoPath || n !== u.infoPosition)
                  ) {
                    (e = u.id), (t = u.infoPath), (n = u.infoPosition);
                    var l = u.infoPath[u.infoPosition],
                      s = l.id,
                      d = l.activeTabId;
                    Pl(s).then(function (e) {
                      !r &&
                        e &&
                        (c({
                          kind: "update",
                          fieldOrType: e,
                          activeId: d,
                          position: u.infoPosition,
                          size: u.infoPath.length,
                        }),
                        "type" !== e.kind ||
                          ("input-object" !== e.typeKind &&
                            "interface" !== e.typeKind &&
                            "object" !== e.typeKind) ||
                          Je.getFields(e.name).then(function (e) {
                            r || c({ kind: "update-fields", fields: e });
                          }));
                    });
                  }
                }
              );
            return function () {
              (r = !0), a.unsubscribe(), c({ kind: "dispose" });
            };
          }, []),
          u
            ? a.a.createElement(
                Od,
                null,
                a.a.createElement(
                  wd,
                  null,
                  a.a.createElement(
                    Br,
                    null,
                    "type" === u.kind
                      ? Kr(u.typeKind)
                      : a.a.createElement(Vr, null)
                  ),
                  a.a.createElement(Ld, null, u.name),
                  a.a.createElement(
                    Sd,
                    null,
                    a.a.createElement(
                      Td,
                      {
                        disabled: 0 === s,
                        onClick: function () {
                          s > 0 &&
                            (ft.dispatch(
                              ot(function (e) {
                                e.infoPosition = e.infoPosition - 1;
                              })
                            ),
                            c({ kind: "backward" }));
                        },
                      },
                      a.a.createElement(br, null)
                    ),
                    a.a.createElement(
                      Td,
                      {
                        disabled: d === s + 1,
                        onClick: function () {
                          d > s + 1 &&
                            (ft.dispatch(
                              ot(function (e) {
                                e.infoPosition = e.infoPosition + 1;
                              })
                            ),
                            c({ kind: "forward" }));
                        },
                      },
                      a.a.createElement(gr, null)
                    )
                  )
                ),
                a.a.createElement(
                  Id,
                  null,
                  a.a.createElement(
                    Ui,
                    null,
                    a.a.createElement(
                      Ai,
                      {
                        title: "Tab: General",
                        className: f("info"),
                        onClick: function () {
                          return m("info");
                        },
                      },
                      a.a.createElement(qi, null, a.a.createElement(Rr, null)),
                      "General"
                    ),
                    "type" === u.kind &&
                      "interface" === u.typeKind &&
                      u.types &&
                      u.types.length > 0 &&
                      a.a.createElement(
                        Ai,
                        {
                          title: "Tab: Implemented By",
                          className: f("types"),
                          onClick: function () {
                            return m("types");
                          },
                        },
                        a.a.createElement(
                          qi,
                          null,
                          a.a.createElement(Ar, null)
                        ),
                        "Implemented By"
                      ),
                    "type" === u.kind &&
                      "object" === u.typeKind &&
                      u.interfaces &&
                      u.interfaces.length > 0 &&
                      a.a.createElement(
                        Ai,
                        {
                          title: "Tab: Implements",
                          className: f("types"),
                          onClick: function () {
                            return m("types");
                          },
                        },
                        a.a.createElement(
                          qi,
                          null,
                          a.a.createElement(Dr, null)
                        ),
                        "Implements"
                      )
                  )
                ),
                a.a.createElement(
                  Md,
                  null,
                  u.description &&
                    a.a.createElement(kd, {
                      dangerouslySetInnerHTML: { __html: ue(u.description) },
                    }),
                  "field" === u.kind &&
                    u.isDeprecated &&
                    a.a.createElement(
                      kd,
                      { warning: !0 },
                      a.a.createElement("h3", null, "Deprecated"),
                      u.deprecationReason &&
                        a.a.createElement("p", {
                          dangerouslySetInnerHTML: {
                            __html: ue(u.deprecationReason),
                          },
                        })
                    ),
                  "field" === u.kind &&
                    a.a.createElement(
                      jd,
                      null,
                      a.a.createElement(Hd, null, "Returns"),
                      a.a.createElement(
                        "code",
                        null,
                        js(u.valueType, function (e) {
                          return t(e);
                        })
                      )
                    )
                ),
                "info" === o.activeId &&
                  "field" === u.kind &&
                  u.arguments &&
                  u.arguments.length > 0 &&
                  a.a.createElement(id, {
                    arguments: u.arguments,
                    onNavigate: t,
                  }),
                "info" === o.activeId &&
                  "type" === u.kind &&
                  ["input-object", "interface", "object"].includes(
                    u.typeKind
                  ) &&
                  l &&
                  l.length > 0 &&
                  a.a.createElement(ld, { fields: l, onNavigate: t }),
                "info" === o.activeId &&
                  "type" === u.kind &&
                  "enum" === u.typeKind &&
                  a.a.createElement(cd, { enumValues: u.enumValues }),
                "info" === o.activeId &&
                  "type" === u.kind &&
                  "union" === u.typeKind &&
                  u.types &&
                  u.types.length > 0 &&
                  a.a.createElement(sd, {
                    title: "Types",
                    types: u.types,
                    onNavigate: t,
                  }),
                "types" === o.activeId &&
                  "type" === u.kind &&
                  "interface" === u.typeKind &&
                  u.types &&
                  u.types.length > 0 &&
                  a.a.createElement(sd, {
                    title: "Implemented By",
                    types: u.types,
                    onNavigate: t,
                  }),
                "types" === o.activeId &&
                  "type" === u.kind &&
                  "object" === u.typeKind &&
                  u.interfaces &&
                  u.interfaces.length > 0 &&
                  a.a.createElement(sd, {
                    title: "Implements",
                    types: u.interfaces,
                    onNavigate: t,
                  })
              )
            : a.a.createElement(a.a.Fragment, null)
        );
      });
      function Cd(e, t) {
        switch (t.kind) {
          case "backward":
            return Object(F.a)(
              Object(F.a)({}, e),
              {},
              { position: e.position > 0 ? e.position - 1 : e.position }
            );
          case "dispose":
            return {
              fieldOrType: void 0,
              fields: void 0,
              position: 0,
              size: 0,
            };
          case "forward":
            return Object(F.a)(
              Object(F.a)({}, e),
              {},
              {
                position: e.size > e.position + 1 ? e.position + 1 : e.position,
              }
            );
          case "activate-tab":
            return Object(F.a)(
              Object(F.a)({}, e),
              {},
              { activeId: t.activeId }
            );
          case "update":
            return {
              activeId: t.activeId || "info",
              fieldOrType: t.fieldOrType,
              fields: void 0,
              position: t.position || 0,
              size: t.size || 0,
            };
          case "update-fields":
            return Object(F.a)(Object(F.a)({}, e), {}, { fields: t.fields });
          default:
            throw new Error('Unexpected action with kind "' + t.kind + '".');
        }
      }
      var Od = en.div(yd()),
        kd = en.div(xd(), function (e) {
          return e.warning
            ? "\n        border-top: 1px solid #856404;\n        border-bottom: 1px solid #856404;\n        padding: 5px 10px;\n        background: #fff3cd;\n        color: #856404;\n\n        h3 {\n          margin-bottom: 5px;\n          font-weight: bold;\n        }\n      "
            : "\n        margin: 10px;\n      ";
        }),
        jd = en.div(gd()),
        wd = en.header(bd()),
        Ld = en.h1(vd()),
        Hd = en.h2(hd()),
        Sd = en.nav(pd()),
        Td = en.button(
          md(),
          function (e) {
            return e.theme.contentBorderLight;
          },
          function (e) {
            return e.theme.contentTabsBg;
          }
        ),
        Id = en.nav(fd(), function (e) {
          return e.theme.contentBorderLight;
        }),
        Md = en.div(dd()),
        Vd = function () {
          var e = ft.current(Se),
            t = e.breadCrumbs,
            n = e.scrollPosition,
            i = ft.current(Rt),
            o = Object(r.useCallback)(function (e) {
              ft.dispatch(
                (function (e) {
                  return function (t) {
                    t.settings.schemaInfoWidth = e;
                  };
                })(e)
              );
            }, []),
            c = Object(r.useCallback)(function (e, t) {
              var n = "field" === e.kind ? e : Al(e);
              !0 === t
                ? ft.dispatch(
                    ot(function (e) {
                      (e.infoPath = [{ id: n.id }]), (e.infoPosition = 0);
                    })
                  )
                : ft.dispatch(
                    ot(function (e) {
                      if (
                        e.infoPath.length > e.infoPosition + 1 ||
                        e.infoPath[e.infoPath.length - 1].id !== n.id
                      ) {
                        var t = e.infoPath
                          .map(function (e) {
                            return e;
                          })
                          .slice(0, e.infoPosition + 1);
                        t.push({ id: n.id }),
                          (e.infoPath = t),
                          (e.infoPosition = e.infoPosition + 1);
                      }
                    })
                  );
            }, []);
          return a.a.createElement(kn, {
            id: On.SchemaContent,
            asideWidth: i,
            onAsideWidthChange: o,
            mainPane: "left",
            leftContent: a.a.createElement(nd, {
              breadCrumbs: t,
              scrollPosition: n,
              onNavigate: c,
            }),
            rightContent: a.a.createElement(Ed, { onNavigate: c }),
            showSeparator: !0,
          });
        };
      function zd() {
        var e = Object(c.a)([
          "\n  flex: 0 0 auto;\n  padding: 11px 11px;\n  color: ",
          ";\n  transition: color 0.2s ease;\n\n  &:hover {\n    color: ",
          ";\n  }\n\n  &:disabled {\n    color: ",
          ";\n  }\n",
        ]);
        return (
          (zd = function () {
            return e;
          }),
          e
        );
      }
      var _d = Object(r.memo)(function (e) {
          var t = e.activeTabId,
            n = e.schemaEndpoint,
            i = e.httpMethod,
            o = e.httpHeaders,
            c = e.credentials,
            u = Object(r.useState)(!1),
            l = Object(mt.a)(u, 2),
            s = l[0],
            d = l[1];
          return (
            Object(r.useEffect)(
              function () {
                var e = Qe.isFetching
                  .pipe(Object(T.a)(250))
                  .subscribe(function (e) {
                    return d(e);
                  });
                return (
                  Ae.update(function (e) {
                    return Object(F.a)(
                      Object(F.a)({}, e),
                      {},
                      {
                        documentId: t,
                        schemaEndpoint: n,
                        httpMethod: i,
                        httpHeaders: o,
                        credentials: c,
                      }
                    );
                  }),
                  Qe.fetch(),
                  function () {
                    Qe.cancel(), e.unsubscribe();
                  }
                );
              },
              [t, c, o, i, n]
            ),
            a.a.createElement(
              Qi,
              null,
              a.a.createElement(
                $i,
                null,
                a.a.createElement(po, { disabled: !0, selectedKey: i }),
                a.a.createElement(go, { type: "url", value: n, disabled: !0 }),
                s && a.a.createElement(Lo, null, a.a.createElement(Co, null)),
                a.a.createElement(
                  Bd,
                  {
                    title: "Reload Schema",
                    disabled: s,
                    onClick: function () {
                      s || Qe.refetch();
                    },
                  },
                  a.a.createElement(Dn.a, { icon: ai.m })
                )
              )
            )
          );
        }),
        Bd = en.button(
          zd(),
          function (e) {
            return e.active ? e.theme.red : e.theme.sideBarText;
          },
          function (e) {
            return e.theme.red;
          },
          function (e) {
            return e.theme.sideBarBg;
          }
        ),
        Nd = function () {
          var e = ht(jt),
            t = ht(It),
            n = ft.current(Mt),
            i = ft.current(Se),
            o = i.schemaEndpoint,
            c = i.httpMethod,
            u = i.httpHeaders,
            l = i.credentials,
            s = Object(r.useCallback)(function (e) {
              ft.dispatch(we(e));
            }, []),
            d = Object(r.useCallback)(function (e) {
              ft.dispatch(Le(e));
            }, []);
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(_d, {
              activeTabId: e,
              schemaEndpoint: o,
              httpMethod: c,
              httpHeaders: u,
              credentials: l,
            }),
            a.a.createElement(Cn, {
              id: On.Schema,
              asideCollapsable: !0,
              asideCollapsed: t,
              asideHeight: n,
              onAsideCollapsedChange: s,
              onAsideHeightChange: d,
              mainPane: "top",
              topContent: a.a.createElement(Vd, null),
              bottomContent: a.a.createElement(eu, null),
              showSeparator: !0,
            }),
            a.a.createElement(Vo, null)
          );
        };
      function Rd() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n",
        ]);
        return (
          (Rd = function () {
            return e;
          }),
          e
        );
      }
      var Pd = en.div(Rd()),
        Dd = function () {
          return a.a.createElement(
            Pd,
            null,
            a.a.createElement(Ml, null),
            a.a.createElement(Zd, null)
          );
        },
        Zd = function () {
          switch (ht(wt)) {
            case "document":
            case "history":
              return a.a.createElement(Bu, null);
            case "schema":
              return a.a.createElement(Nd, null);
            case "preferences":
              return a.a.createElement(Rl, null);
            default:
              return a.a.createElement(a.a.Fragment, null);
          }
        },
        Ad = Dd,
        Fd = function () {
          var e = pt(),
            t = ht(Dt),
            n = ht(Zt),
            r = ft.current(At);
          return e
            ? a.a.createElement(kn, {
                id: On.Main,
                asideCollapsable: !0,
                asideCollapsed: t,
                asideWidth: r,
                mainPane: "left" === n ? "right" : "left",
                onAsideWidthChange: function (e) {
                  return ft.dispatch(
                    (function (e) {
                      return function (t) {
                        t.settings.sideBarWidth = e;
                      };
                    })(e)
                  );
                },
                onAsideCollapsedChange: function (e) {
                  return ft.dispatch(
                    (function (e) {
                      return function (t) {
                        t.settings.sideBarCollapsed = e;
                      };
                    })(e)
                  );
                },
                leftContent:
                  "left" === n
                    ? a.a.createElement(Ii, { location: n })
                    : a.a.createElement(Ad, null),
                rightContent:
                  "left" === n
                    ? a.a.createElement(Ad, null)
                    : a.a.createElement(Ii, { location: n }),
              })
            : a.a.createElement(_i, null);
        };
      function Wd() {
        var e = Object(c.a)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  margin: 5px;\n  border-radius: 6px;\n  font-size: 1.667em;\n  color: ",
          ";\n  opacity: 0.75;\n  transition: background-color 0.2s ease, color 0.2s ease, opacity 0.2s ease;\n\n  &.active,\n  &.active:hover {\n    background-color: ",
          ";\n    opacity: 1;\n  }\n\n  &:hover {\n    background-color: ",
          ";\n  }\n",
        ]);
        return (
          (Wd = function () {
            return e;
          }),
          e
        );
      }
      function qd() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex: 0 0 54px;\n  flex-direction: column;\n  /*justify-content: space-between;*/\n  background: linear-gradient(\n    15deg,\n    ",
          " 0%,\n    ",
          " 75%,\n    ",
          " 100%\n  );\n  padding-top: 10px;\n",
        ]);
        return (
          (qd = function () {
            return e;
          }),
          e
        );
      }
      var Kd = function () {
          var e = pt(),
            t = ht(xt),
            n = ht(Dt),
            r = function (e) {
              ft.dispatch(
                (function (e) {
                  return function (t) {
                    t.selectedNavigationItemId === e &&
                      (t.settings.sideBarCollapsed = !t.settings
                        .sideBarCollapsed),
                      t.selectedNavigationItemId !== e &&
                        t.settings.sideBarCollapsed &&
                        (t.settings.sideBarCollapsed = !1),
                      (t.selectedNavigationItemId = e);
                  };
                })(e)
              );
            },
            i = function (e) {
              return n || t !== e ? "" : "active";
            };
          return e
            ? a.a.createElement(
                Ud,
                null,
                a.a.createElement(
                  Jd,
                  {
                    title: "Query Documents",
                    className: i(E.QueryDocuments),
                    onClick: function () {
                      return r(E.QueryDocuments);
                    },
                  },
                  a.a.createElement(zr, {
                    color: function (e) {
                      return e.navItemText;
                    },
                    size: "x2",
                  })
                ),
                a.a.createElement(
                  Jd,
                  {
                    title: "History",
                    className: i(E.History),
                    onClick: function () {
                      return r(E.History);
                    },
                  },
                  a.a.createElement(Nr, {
                    color: function (e) {
                      return e.navItemText;
                    },
                    size: "x2",
                  })
                ),
                a.a.createElement(
                  Jd,
                  {
                    title: "Schema",
                    className: i(E.Schema),
                    onClick: function () {
                      return r(E.Schema);
                    },
                  },
                  a.a.createElement(xr, {
                    color: function (e) {
                      return e.navItemText;
                    },
                    size: "x2",
                  })
                )
              )
            : a.a.createElement(a.a.Fragment, null);
        },
        Ud = en.nav(
          qd(),
          function (e) {
            return e.theme.navBgColor2;
          },
          function (e) {
            return e.theme.navBgColor;
          },
          function (e) {
            return e.theme.navBgColor;
          }
        ),
        Jd = en.button(
          Wd(),
          function (e) {
            return e.theme.navItemText;
          },
          function (e) {
            return e.theme.navItemActiveBgColor;
          },
          function (e) {
            return e.theme.navItemActiveBgColor;
          }
        );
      n(825);
      function Qd() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex-direction: row;\n  width: 100vw;\n  height: 100vh;\n  background-color: ",
          ";\n",
        ]);
        return (
          (Qd = function () {
            return e;
          }),
          e
        );
      }
      var Gd = function () {
          var e = ht(Zt);
          return (
            nn.editor.defineTheme("light", {
              base: "vs",
              inherit: !0,
              rules: [
                { token: "", background: tn.mainBgColor },
                { token: "annotation", foreground: tn.annotationToken },
                { token: "comment", foreground: tn.commentToken },
                { token: "delimiter", foreground: tn.delimiterToken },
                { token: "identifier", foreground: tn.identifierToken },
                { token: "keyword", foreground: tn.keywordToken },
                { token: "number", foreground: tn.numberToken },
                { token: "operator", foreground: tn.operatorToken },
                { token: "string", foreground: tn.stringToken },
                { token: "type", foreground: tn.typeToken },
              ],
              colors: {
                "editor.foreground": tn.textColor,
                "editor.background": tn.mainBgColor,
                "scrollbar.shadow": "#00000066",
                "editor.lineHighlightBackground": "#f5f9fb",
              },
            }),
            cn()(an.a),
            a.a.createElement(
              Xt,
              { theme: tn },
              a.a.createElement(
                Yd,
                {
                  onContextMenu: function (e) {
                    return e.preventDefault();
                  },
                },
                a.a.createElement(ln, null),
                "left" === e
                  ? a.a.createElement(
                      a.a.Fragment,
                      null,
                      a.a.createElement(Kd, null),
                      a.a.createElement(Fd, null)
                    )
                  : a.a.createElement(
                      a.a.Fragment,
                      null,
                      a.a.createElement(Fd, null),
                      a.a.createElement(Kd, null)
                    )
              )
            )
          );
        },
        Yd = en.div(Qd(), function (e) {
          return e.theme.mainBgColor;
        });
      var Xd = function () {
        return a.a.createElement(
          r.StrictMode,
          null,
          a.a.createElement(Gd, null)
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      o.a.render(a.a.createElement(Xd, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[405, 4, 0, 7]],
]);
//# sourceMappingURL=main.d010727b.chunk.js.map
