_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [9],
  {
    "/PZL": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = {
          defaultEasing: function (e) {
            return e < 0.5
              ? Math.pow(2 * e, 2) / 2
              : 1 - Math.pow(2 * (1 - e), 2) / 2;
          },
          linear: function (e) {
            return e;
          },
          easeInQuad: function (e) {
            return e * e;
          },
          easeOutQuad: function (e) {
            return e * (2 - e);
          },
          easeInOutQuad: function (e) {
            return e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1;
          },
          easeInCubic: function (e) {
            return e * e * e;
          },
          easeOutCubic: function (e) {
            return --e * e * e + 1;
          },
          easeInOutCubic: function (e) {
            return e < 0.5
              ? 4 * e * e * e
              : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
          },
          easeInQuart: function (e) {
            return e * e * e * e;
          },
          easeOutQuart: function (e) {
            return 1 - --e * e * e * e;
          },
          easeInOutQuart: function (e) {
            return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
          },
          easeInQuint: function (e) {
            return e * e * e * e * e;
          },
          easeOutQuint: function (e) {
            return 1 + --e * e * e * e * e;
          },
          easeInOutQuint: function (e) {
            return e < 0.5
              ? 16 * e * e * e * e * e
              : 1 + 16 * --e * e * e * e * e;
          },
        });
    },
    "2W6z": function (e, t, n) {
      "use strict";
      var r = function () {};
      e.exports = r;
    },
    "2rMq": function (e, t, n) {
      var r;
      !(function () {
        "use strict";
        var o = !(
            "undefined" === typeof window ||
            !window.document ||
            !window.document.createElement
          ),
          a = {
            canUseDOM: o,
            canUseWorkers: "undefined" !== typeof Worker,
            canUseEventListeners:
              o && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: o && !!window.screen,
          };
        void 0 ===
          (r = function () {
            return a;
          }.call(t, n, t, e)) || (e.exports = r);
      })();
    },
    "2zs7": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.canUseDOM = void 0);
      var r,
        o = n("2rMq");
      var a = ((r = o) && r.__esModule ? r : { default: r }).default,
        s = a.canUseDOM ? window.HTMLElement : {};
      t.canUseDOM = a.canUseDOM;
      t.default = s;
    },
    "7FV1": function (e, t, n) {
      "use strict";
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" !== typeof t && "function" !== typeof t) ? e : t;
      }
      function i(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var l = n("q1tI"),
        c = (n("i8i4"), n("xFC4"), n("wT0s")),
        u = n("zPnG"),
        d = n("17x9"),
        f = n("Dy/p"),
        p = {
          to: d.string.isRequired,
          containerId: d.string,
          container: d.object,
          activeClass: d.string,
          spy: d.bool,
          smooth: d.oneOfType([d.bool, d.string]),
          offset: d.number,
          delay: d.number,
          isDynamic: d.bool,
          onClick: d.func,
          duration: d.oneOfType([d.number, d.func]),
          absolute: d.bool,
          onSetActive: d.func,
          onSetInactive: d.func,
          ignoreCancelEvents: d.bool,
          hashSpy: d.bool,
        },
        h = {
          Scroll: function (e, t) {
            console.warn("Helpers.Scroll is deprecated since v1.7.0");
            var n = t || u,
              d = (function (t) {
                function u(e) {
                  a(this, u);
                  var t = s(
                    this,
                    (u.__proto__ || Object.getPrototypeOf(u)).call(this, e)
                  );
                  return h.call(t), (t.state = { active: !1 }), t;
                }
                return (
                  i(u, t),
                  o(u, [
                    {
                      key: "getScrollSpyContainer",
                      value: function () {
                        var e = this.props.containerId,
                          t = this.props.container;
                        return e
                          ? document.getElementById(e)
                          : t && t.nodeType
                          ? t
                          : document;
                      },
                    },
                    {
                      key: "componentDidMount",
                      value: function () {
                        if (this.props.spy || this.props.hashSpy) {
                          var e = this.getScrollSpyContainer();
                          c.isMounted(e) || c.mount(e),
                            this.props.hashSpy &&
                              (f.isMounted() || f.mount(n),
                              f.mapContainer(this.props.to, e)),
                            this.props.spy &&
                              c.addStateHandler(this.stateHandler),
                            c.addSpyHandler(this.spyHandler, e),
                            this.setState({ container: e });
                        }
                      },
                    },
                    {
                      key: "componentWillUnmount",
                      value: function () {
                        c.unmount(this.stateHandler, this.spyHandler);
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var t = "";
                        t =
                          this.state && this.state.active
                            ? (
                                (this.props.className || "") +
                                " " +
                                (this.props.activeClass || "active")
                              ).trim()
                            : this.props.className;
                        var n = r({}, this.props);
                        for (var o in p) n.hasOwnProperty(o) && delete n[o];
                        return (
                          (n.className = t),
                          (n.onClick = this.handleClick),
                          l.createElement(e, n)
                        );
                      },
                    },
                  ]),
                  u
                );
              })(l.Component),
              h = function () {
                var e = this;
                (this.scrollTo = function (t, o) {
                  n.scrollTo(t, r({}, e.state, o));
                }),
                  (this.handleClick = function (t) {
                    e.props.onClick && e.props.onClick(t),
                      t.stopPropagation && t.stopPropagation(),
                      t.preventDefault && t.preventDefault(),
                      e.scrollTo(e.props.to, e.props);
                  }),
                  (this.stateHandler = function () {
                    n.getActiveLink() !== e.props.to &&
                      (null !== e.state &&
                        e.state.active &&
                        e.props.onSetInactive &&
                        e.props.onSetInactive(),
                      e.setState({ active: !1 }));
                  }),
                  (this.spyHandler = function (t) {
                    var r = e.getScrollSpyContainer();
                    if (!f.isMounted() || f.isInitialized()) {
                      var o = e.props.to,
                        a = null,
                        s = 0,
                        i = 0,
                        l = 0;
                      if (r.getBoundingClientRect)
                        l = r.getBoundingClientRect().top;
                      if (!a || e.props.isDynamic) {
                        if (!(a = n.get(o))) return;
                        var u = a.getBoundingClientRect();
                        i = (s = u.top - l + t) + u.height;
                      }
                      var d = t - e.props.offset,
                        p = d >= Math.floor(s) && d < Math.floor(i),
                        h = d < Math.floor(s) || d >= Math.floor(i),
                        m = n.getActiveLink();
                      return h
                        ? (o === m && n.setActiveLink(void 0),
                          e.props.hashSpy &&
                            f.getHash() === o &&
                            f.changeHash(),
                          e.props.spy &&
                            e.state.active &&
                            (e.setState({ active: !1 }),
                            e.props.onSetInactive && e.props.onSetInactive()),
                          c.updateStates())
                        : p && m !== o
                        ? (n.setActiveLink(o),
                          e.props.hashSpy && f.changeHash(o),
                          e.props.spy &&
                            (e.setState({ active: !0 }),
                            e.props.onSetActive && e.props.onSetActive(o)),
                          c.updateStates())
                        : void 0;
                    }
                  });
              };
            return (d.propTypes = p), (d.defaultProps = { offset: 0 }), d;
          },
          Element: function (e) {
            console.warn("Helpers.Element is deprecated since v1.7.0");
            var t = (function (t) {
              function n(e) {
                a(this, n);
                var t = s(
                  this,
                  (n.__proto__ || Object.getPrototypeOf(n)).call(this, e)
                );
                return (t.childBindings = { domNode: null }), t;
              }
              return (
                i(n, t),
                o(n, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      if ("undefined" === typeof window) return !1;
                      this.registerElems(this.props.name);
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e) {
                      this.props.name !== e.name &&
                        this.registerElems(this.props.name);
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      if ("undefined" === typeof window) return !1;
                      u.unregister(this.props.name);
                    },
                  },
                  {
                    key: "registerElems",
                    value: function (e) {
                      u.register(e, this.childBindings.domNode);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      return l.createElement(
                        e,
                        r({}, this.props, {
                          parentBindings: this.childBindings,
                        })
                      );
                    },
                  },
                ]),
                n
              );
            })(l.Component);
            return (t.propTypes = { name: d.string, id: d.string }), t;
          },
        };
      e.exports = h;
    },
    "7wkA": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        o = s(n("q1tI")),
        a = s(n("pUFB"));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function l(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" !== typeof t && "function" !== typeof t) ? e : t;
      }
      var c = (function (e) {
        function t() {
          return (
            i(this, t),
            l(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          (function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          r(t, [
            {
              key: "render",
              value: function () {
                return o.default.createElement(
                  "input",
                  this.props,
                  this.props.children
                );
              },
            },
          ]),
          t
        );
      })(o.default.Component);
      t.default = (0, a.default)(c);
    },
    "8OQS": function (e, t) {
      e.exports = function (e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      };
    },
    "8QoP": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("QLqi"),
        o = ["mousedown", "mousewheel", "touchmove", "keydown"];
      t.default = {
        subscribe: function (e) {
          return (
            "undefined" !== typeof document &&
            o.forEach(function (t) {
              return (0, r.addPassiveEventListener)(document, t, e);
            })
          );
        },
      };
    },
    9396: function (e, t, n) {
      "use strict";
      function r() {
        var e = Array.from(document.getElementsByClassName("bm-item")).shift();
        e && e.focus();
      }
      function o() {
        var e = Array.from(document.getElementsByClassName("bm-item")).pop();
        e && e.focus();
      }
      function a() {
        var e = document.getElementById("react-burger-cross-btn");
        e && e.focus();
      }
      function s(e) {
        if (document.activeElement.className.includes("bm-item")) {
          var t = document.activeElement[e];
          t ? t.focus() : a();
        } else "previousElementSibling" === e ? o() : r();
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.focusOnFirstMenuItem = r),
        (t.focusOnLastMenuItem = o),
        (t.focusOnCrossButton = a),
        (t.focusOnMenuButton = function () {
          var e = document.getElementById("react-burger-menu-btn");
          e && e.focus();
        }),
        (t.focusOnMenuItem = s),
        (t.focusOnNextMenuItem = function () {
          s("nextElementSibling");
        }),
        (t.focusOnPreviousMenuItem = function () {
          s("previousElementSibling");
        });
    },
    "9b6L": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      (t.default = {
        overlay: function (e) {
          return {
            position: "fixed",
            zIndex: 1e3,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.3)",
            opacity: e ? 1 : 0,
            MozTransform: e ? "" : "translate3d(100%, 0, 0)",
            MsTransform: e ? "" : "translate3d(100%, 0, 0)",
            OTransform: e ? "" : "translate3d(100%, 0, 0)",
            WebkitTransform: e ? "" : "translate3d(100%, 0, 0)",
            transform: e ? "" : "translate3d(100%, 0, 0)",
            transition: e ? "opacity 0.3s" : "opacity 0.3s, transform 0s 0.3s",
          };
        },
        menuWrap: function (e, t, n) {
          return {
            position: "fixed",
            right: n ? 0 : "inherit",
            zIndex: 1100,
            width: t,
            height: "100%",
            MozTransform: e
              ? ""
              : n
              ? "translate3d(100%, 0, 0)"
              : "translate3d(-100%, 0, 0)",
            MsTransform: e
              ? ""
              : n
              ? "translate3d(100%, 0, 0)"
              : "translate3d(-100%, 0, 0)",
            OTransform: e
              ? ""
              : n
              ? "translate3d(100%, 0, 0)"
              : "translate3d(-100%, 0, 0)",
            WebkitTransform: e
              ? ""
              : n
              ? "translate3d(100%, 0, 0)"
              : "translate3d(-100%, 0, 0)",
            transform: e
              ? ""
              : n
              ? "translate3d(100%, 0, 0)"
              : "translate3d(-100%, 0, 0)",
            transition: "all 0.5s",
          };
        },
        menu: function () {
          return { height: "100%", boxSizing: "border-box", overflow: "auto" };
        },
        itemList: function () {
          return { height: "100%" };
        },
        item: function () {
          return { display: "block" };
        },
      }),
        (e.exports = t.default);
    },
    "9rZX": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o = n("qFS3"),
        a = (r = o) && r.__esModule ? r : { default: r };
      (t.default = a.default), (e.exports = t.default);
    },
    Aiso: function (e, t, n) {
      e.exports = n("dQHF");
    },
    Bnag: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      };
    },
    "Dy/p": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      n("QLqi");
      var r,
        o = n("xFC4"),
        a = (r = o) && r.__esModule ? r : { default: r };
      var s = {
        mountFlag: !1,
        initialized: !1,
        scroller: null,
        containers: {},
        mount: function (e) {
          (this.scroller = e),
            (this.handleHashChange = this.handleHashChange.bind(this)),
            window.addEventListener("hashchange", this.handleHashChange),
            this.initStateFromHash(),
            (this.mountFlag = !0);
        },
        mapContainer: function (e, t) {
          this.containers[e] = t;
        },
        isMounted: function () {
          return this.mountFlag;
        },
        isInitialized: function () {
          return this.initialized;
        },
        initStateFromHash: function () {
          var e = this,
            t = this.getHash();
          t
            ? window.setTimeout(function () {
                e.scrollTo(t, !0), (e.initialized = !0);
              }, 10)
            : (this.initialized = !0);
        },
        scrollTo: function (e, t) {
          var n = this.scroller;
          if (n.get(e) && (t || e !== n.getActiveLink())) {
            var r = this.containers[e] || document;
            n.scrollTo(e, { container: r });
          }
        },
        getHash: function () {
          return a.default.getHash();
        },
        changeHash: function (e, t) {
          this.isInitialized() &&
            a.default.getHash() !== e &&
            a.default.updateHash(e, t);
        },
        handleHashChange: function () {
          this.scrollTo(this.getHash());
        },
        unmount: function () {
          (this.scroller = null),
            (this.containers = null),
            window.removeEventListener("hashchange", this.handleHashChange);
        },
      };
      t.default = s;
    },
    EbDI: function (e, t) {
      e.exports = function (e) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      };
    },
    Evcy: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o = n("vH+l"),
        a = (r = o) && r.__esModule ? r : { default: r };
      (t.default = (0, a.default)({
        pageWrap: function (e, t, n) {
          return {
            MozTransform: e
              ? ""
              : n
              ? "translate3d(-" + t + ", 0, 0) rotateY(15deg)"
              : "translate3d(" + t + ", 0, 0) rotateY(-15deg)",
            MsTransform: e
              ? ""
              : n
              ? "translate3d(-" + t + ", 0, 0) rotateY(15deg)"
              : "translate3d(" + t + ", 0, 0) rotateY(-15deg)",
            OTransform: e
              ? ""
              : n
              ? "translate3d(-" + t + ", 0, 0) rotateY(15deg)"
              : "translate3d(" + t + ", 0, 0) rotateY(-15deg)",
            WebkitTransform: e
              ? ""
              : n
              ? "translate3d(-" + t + ", 0, 0) rotateY(15deg)"
              : "translate3d(" + t + ", 0, 0) rotateY(-15deg)",
            transform: e
              ? ""
              : n
              ? "translate3d(-" + t + ", 0, 0) rotateY(15deg)"
              : "translate3d(" + t + ", 0, 0) rotateY(-15deg)",
            transformOrigin: n ? "100% 50%" : "0% 50%",
            transformStyle: "preserve-3d",
            transition: "all 0.5s",
          };
        },
        outerContainer: function (e) {
          return { perspective: "1500px", overflow: e ? "" : "hidden" };
        },
      })),
        (e.exports = t.default);
    },
    Ijbi: function (e, t, n) {
      var r = n("WkPL");
      e.exports = function (e) {
        if (Array.isArray(e)) return r(e);
      };
    },
    NEP4: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (i(n("xFC4")), i(n("/PZL"))),
        a = i(n("8QoP")),
        s = i(n("QQPg"));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var l = function (e) {
          return o.default[e.smooth] || o.default.defaultEasing;
        },
        c =
          (function () {
            if ("undefined" !== typeof window)
              return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame
              );
          })() ||
          function (e, t, n) {
            window.setTimeout(e, n || 1e3 / 60, new Date().getTime());
          },
        u = function (e) {
          var t = e.data.containerElement;
          if (t && t !== document && t !== document.body) return t.scrollLeft;
          var n = void 0 !== window.pageXOffset,
            r = "CSS1Compat" === (document.compatMode || "");
          return n
            ? window.pageXOffset
            : r
            ? document.documentElement.scrollLeft
            : document.body.scrollLeft;
        },
        d = function (e) {
          var t = e.data.containerElement;
          if (t && t !== document && t !== document.body) return t.scrollTop;
          var n = void 0 !== window.pageXOffset,
            r = "CSS1Compat" === (document.compatMode || "");
          return n
            ? window.pageYOffset
            : r
            ? document.documentElement.scrollTop
            : document.body.scrollTop;
        },
        f = function e(t, n, r) {
          var o = n.data;
          if (n.ignoreCancelEvents || !o.cancel)
            if (
              ((o.delta = Math.round(o.targetPosition - o.startPosition)),
              null === o.start && (o.start = r),
              (o.progress = r - o.start),
              (o.percent =
                o.progress >= o.duration ? 1 : t(o.progress / o.duration)),
              (o.currentPosition =
                o.startPosition + Math.ceil(o.delta * o.percent)),
              o.containerElement &&
              o.containerElement !== document &&
              o.containerElement !== document.body
                ? n.horizontal
                  ? (o.containerElement.scrollLeft = o.currentPosition)
                  : (o.containerElement.scrollTop = o.currentPosition)
                : n.horizontal
                ? window.scrollTo(o.currentPosition, 0)
                : window.scrollTo(0, o.currentPosition),
              o.percent < 1)
            ) {
              var a = e.bind(null, t, n);
              c.call(window, a);
            } else
              s.default.registered.end &&
                s.default.registered.end(o.to, o.target, o.currentPosition);
          else
            s.default.registered.end &&
              s.default.registered.end(o.to, o.target, o.currentPositionY);
        },
        p = function (e) {
          e.data.containerElement = e
            ? e.containerId
              ? document.getElementById(e.containerId)
              : e.container && e.container.nodeType
              ? e.container
              : document
            : null;
        },
        h = function (e, t, n, r) {
          if (
            ((t.data = t.data || {
              currentPosition: 0,
              startPosition: 0,
              targetPosition: 0,
              progress: 0,
              duration: 0,
              cancel: !1,
              target: null,
              containerElement: null,
              to: null,
              start: null,
              delta: null,
              percent: null,
              delayTimeout: null,
            }),
            window.clearTimeout(t.data.delayTimeout),
            a.default.subscribe(function () {
              t.data.cancel = !0;
            }),
            p(t),
            (t.data.start = null),
            (t.data.cancel = !1),
            (t.data.startPosition = t.horizontal ? u(t) : d(t)),
            (t.data.targetPosition = t.absolute ? e : e + t.data.startPosition),
            t.data.startPosition !== t.data.targetPosition)
          ) {
            var o;
            (t.data.delta = Math.round(
              t.data.targetPosition - t.data.startPosition
            )),
              (t.data.duration = ("function" === typeof (o = t.duration)
                ? o
                : function () {
                    return o;
                  })(t.data.delta)),
              (t.data.duration = isNaN(parseFloat(t.data.duration))
                ? 1e3
                : parseFloat(t.data.duration)),
              (t.data.to = n),
              (t.data.target = r);
            var i = l(t),
              h = f.bind(null, i, t);
            t && t.delay > 0
              ? (t.data.delayTimeout = window.setTimeout(function () {
                  s.default.registered.begin &&
                    s.default.registered.begin(t.data.to, t.data.target),
                    c.call(window, h);
                }, t.delay))
              : (s.default.registered.begin &&
                  s.default.registered.begin(t.data.to, t.data.target),
                c.call(window, h));
          } else
            s.default.registered.end &&
              s.default.registered.end(
                t.data.to,
                t.data.target,
                t.data.currentPosition
              );
        },
        m = function (e) {
          return (
            ((e = r({}, e)).data = e.data || {
              currentPosition: 0,
              startPosition: 0,
              targetPosition: 0,
              progress: 0,
              duration: 0,
              cancel: !1,
              target: null,
              containerElement: null,
              to: null,
              start: null,
              delta: null,
              percent: null,
              delayTimeout: null,
            }),
            (e.absolute = !0),
            e
          );
        };
      t.default = {
        animateTopScroll: h,
        getAnimationType: l,
        scrollToTop: function (e) {
          h(0, m(e));
        },
        scrollToBottom: function (e) {
          (e = m(e)),
            p(e),
            h(
              e.horizontal
                ? (function (e) {
                    var t = e.data.containerElement;
                    if (t && t !== document && t !== document.body)
                      return t.scrollWidth - t.offsetWidth;
                    var n = document.body,
                      r = document.documentElement;
                    return Math.max(
                      n.scrollWidth,
                      n.offsetWidth,
                      r.clientWidth,
                      r.scrollWidth,
                      r.offsetWidth
                    );
                  })(e)
                : (function (e) {
                    var t = e.data.containerElement;
                    if (t && t !== document && t !== document.body)
                      return t.scrollHeight - t.offsetHeight;
                    var n = document.body,
                      r = document.documentElement;
                    return Math.max(
                      n.scrollHeight,
                      n.offsetHeight,
                      r.clientHeight,
                      r.scrollHeight,
                      r.offsetHeight
                    );
                  })(e),
              e
            );
        },
        scrollTo: function (e, t) {
          h(e, m(t));
        },
        scrollMore: function (e, t) {
          (t = m(t)), p(t);
          var n = t.horizontal ? u(t) : d(t);
          h(e + n, t);
        },
      };
    },
    PGca: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a(n("q1tI")),
        o = a(n("pUFB"));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" !== typeof t && "function" !== typeof t) ? e : t;
      }
      var l = (function (e) {
        function t() {
          var e, n, o;
          s(this, t);
          for (var a = arguments.length, l = Array(a), c = 0; c < a; c++)
            l[c] = arguments[c];
          return (
            (n = o = i(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                e,
                [this].concat(l)
              )
            )),
            (o.render = function () {
              return r.default.createElement("a", o.props, o.props.children);
            }),
            i(o, n)
          );
        }
        return (
          (function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          t
        );
      })(r.default.Component);
      t.default = (0, o.default)(l);
    },
    QEso: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o =
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
              },
        a = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        s = n("q1tI"),
        i = m(n("17x9")),
        l = h(n("VKEO")),
        c = m(n("S1to")),
        u = h(n("Ye7m")),
        d = h(n("fbhf")),
        f = m(n("2zs7")),
        p = m(n("UIKY"));
      function h(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      function m(e) {
        return e && e.__esModule ? e : { default: e };
      }
      n("WkvU");
      var b = {
          overlay: "ReactModal__Overlay",
          content: "ReactModal__Content",
        },
        v = 0,
        y = (function (e) {
          function t(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            var n = (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" !== typeof t && "function" !== typeof t)
                ? e
                : t;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return (
              (n.setOverlayRef = function (e) {
                (n.overlay = e), n.props.overlayRef && n.props.overlayRef(e);
              }),
              (n.setContentRef = function (e) {
                (n.content = e), n.props.contentRef && n.props.contentRef(e);
              }),
              (n.afterClose = function () {
                var e = n.props,
                  t = e.appElement,
                  r = e.ariaHideApp,
                  o = e.htmlOpenClassName,
                  a = e.bodyOpenClassName;
                a && d.remove(document.body, a),
                  o && d.remove(document.getElementsByTagName("html")[0], o),
                  r && v > 0 && 0 === (v -= 1) && u.show(t),
                  n.props.shouldFocusAfterRender &&
                    (n.props.shouldReturnFocusAfterClose
                      ? (l.returnFocus(n.props.preventScroll),
                        l.teardownScopedFocus())
                      : l.popWithoutFocus()),
                  n.props.onAfterClose && n.props.onAfterClose(),
                  p.default.deregister(n);
              }),
              (n.open = function () {
                n.beforeOpen(),
                  n.state.afterOpen && n.state.beforeClose
                    ? (clearTimeout(n.closeTimer),
                      n.setState({ beforeClose: !1 }))
                    : (n.props.shouldFocusAfterRender &&
                        (l.setupScopedFocus(n.node), l.markForFocusLater()),
                      n.setState({ isOpen: !0 }, function () {
                        n.setState({ afterOpen: !0 }),
                          n.props.isOpen &&
                            n.props.onAfterOpen &&
                            n.props.onAfterOpen({
                              overlayEl: n.overlay,
                              contentEl: n.content,
                            });
                      }));
              }),
              (n.close = function () {
                n.props.closeTimeoutMS > 0
                  ? n.closeWithTimeout()
                  : n.closeWithoutTimeout();
              }),
              (n.focusContent = function () {
                return (
                  n.content &&
                  !n.contentHasFocus() &&
                  n.content.focus({ preventScroll: !0 })
                );
              }),
              (n.closeWithTimeout = function () {
                var e = Date.now() + n.props.closeTimeoutMS;
                n.setState({ beforeClose: !0, closesAt: e }, function () {
                  n.closeTimer = setTimeout(
                    n.closeWithoutTimeout,
                    n.state.closesAt - Date.now()
                  );
                });
              }),
              (n.closeWithoutTimeout = function () {
                n.setState(
                  {
                    beforeClose: !1,
                    isOpen: !1,
                    afterOpen: !1,
                    closesAt: null,
                  },
                  n.afterClose
                );
              }),
              (n.handleKeyDown = function (e) {
                9 === e.keyCode && (0, c.default)(n.content, e),
                  n.props.shouldCloseOnEsc &&
                    27 === e.keyCode &&
                    (e.stopPropagation(), n.requestClose(e));
              }),
              (n.handleOverlayOnClick = function (e) {
                null === n.shouldClose && (n.shouldClose = !0),
                  n.shouldClose &&
                    n.props.shouldCloseOnOverlayClick &&
                    (n.ownerHandlesClose()
                      ? n.requestClose(e)
                      : n.focusContent()),
                  (n.shouldClose = null);
              }),
              (n.handleContentOnMouseUp = function () {
                n.shouldClose = !1;
              }),
              (n.handleOverlayOnMouseDown = function (e) {
                n.props.shouldCloseOnOverlayClick ||
                  e.target != n.overlay ||
                  e.preventDefault();
              }),
              (n.handleContentOnClick = function () {
                n.shouldClose = !1;
              }),
              (n.handleContentOnMouseDown = function () {
                n.shouldClose = !1;
              }),
              (n.requestClose = function (e) {
                return n.ownerHandlesClose() && n.props.onRequestClose(e);
              }),
              (n.ownerHandlesClose = function () {
                return n.props.onRequestClose;
              }),
              (n.shouldBeClosed = function () {
                return !n.state.isOpen && !n.state.beforeClose;
              }),
              (n.contentHasFocus = function () {
                return (
                  document.activeElement === n.content ||
                  n.content.contains(document.activeElement)
                );
              }),
              (n.buildClassName = function (e, t) {
                var r =
                    "object" === ("undefined" === typeof t ? "undefined" : o(t))
                      ? t
                      : {
                          base: b[e],
                          afterOpen: b[e] + "--after-open",
                          beforeClose: b[e] + "--before-close",
                        },
                  a = r.base;
                return (
                  n.state.afterOpen && (a = a + " " + r.afterOpen),
                  n.state.beforeClose && (a = a + " " + r.beforeClose),
                  "string" === typeof t && t ? a + " " + t : a
                );
              }),
              (n.attributesFromObject = function (e, t) {
                return Object.keys(t).reduce(function (n, r) {
                  return (n[e + "-" + r] = t[r]), n;
                }, {});
              }),
              (n.state = { afterOpen: !1, beforeClose: !1 }),
              (n.shouldClose = null),
              (n.moveFromContentToOverlay = null),
              n
            );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            a(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.isOpen && this.open();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  this.props.isOpen && !e.isOpen
                    ? this.open()
                    : !this.props.isOpen && e.isOpen && this.close(),
                    this.props.shouldFocusAfterRender &&
                      this.state.isOpen &&
                      !t.isOpen &&
                      this.focusContent();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.state.isOpen && this.afterClose(),
                    clearTimeout(this.closeTimer);
                },
              },
              {
                key: "beforeOpen",
                value: function () {
                  var e = this.props,
                    t = e.appElement,
                    n = e.ariaHideApp,
                    r = e.htmlOpenClassName,
                    o = e.bodyOpenClassName;
                  o && d.add(document.body, o),
                    r && d.add(document.getElementsByTagName("html")[0], r),
                    n && ((v += 1), u.hide(t)),
                    p.default.register(this);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.id,
                    n = e.className,
                    o = e.overlayClassName,
                    a = e.defaultStyles,
                    s = e.children,
                    i = n ? {} : a.content,
                    l = o ? {} : a.overlay;
                  if (this.shouldBeClosed()) return null;
                  var c = {
                      ref: this.setOverlayRef,
                      className: this.buildClassName("overlay", o),
                      style: r({}, l, this.props.style.overlay),
                      onClick: this.handleOverlayOnClick,
                      onMouseDown: this.handleOverlayOnMouseDown,
                    },
                    u = r(
                      {
                        id: t,
                        ref: this.setContentRef,
                        style: r({}, i, this.props.style.content),
                        className: this.buildClassName("content", n),
                        tabIndex: "-1",
                        onKeyDown: this.handleKeyDown,
                        onMouseDown: this.handleContentOnMouseDown,
                        onMouseUp: this.handleContentOnMouseUp,
                        onClick: this.handleContentOnClick,
                        role: this.props.role,
                        "aria-label": this.props.contentLabel,
                      },
                      this.attributesFromObject(
                        "aria",
                        r({ modal: !0 }, this.props.aria)
                      ),
                      this.attributesFromObject("data", this.props.data || {}),
                      { "data-testid": this.props.testId }
                    ),
                    d = this.props.contentElement(u, s);
                  return this.props.overlayElement(c, d);
                },
              },
            ]),
            t
          );
        })(s.Component);
      (y.defaultProps = {
        style: { overlay: {}, content: {} },
        defaultStyles: {},
      }),
        (y.propTypes = {
          isOpen: i.default.bool.isRequired,
          defaultStyles: i.default.shape({
            content: i.default.object,
            overlay: i.default.object,
          }),
          style: i.default.shape({
            content: i.default.object,
            overlay: i.default.object,
          }),
          className: i.default.oneOfType([i.default.string, i.default.object]),
          overlayClassName: i.default.oneOfType([
            i.default.string,
            i.default.object,
          ]),
          bodyOpenClassName: i.default.string,
          htmlOpenClassName: i.default.string,
          ariaHideApp: i.default.bool,
          appElement: i.default.instanceOf(f.default),
          onAfterOpen: i.default.func,
          onAfterClose: i.default.func,
          onRequestClose: i.default.func,
          closeTimeoutMS: i.default.number,
          shouldFocusAfterRender: i.default.bool,
          shouldCloseOnOverlayClick: i.default.bool,
          shouldReturnFocusAfterClose: i.default.bool,
          preventScroll: i.default.bool,
          role: i.default.string,
          contentLabel: i.default.string,
          aria: i.default.object,
          data: i.default.object,
          children: i.default.node,
          shouldCloseOnEsc: i.default.bool,
          overlayRef: i.default.func,
          contentRef: i.default.func,
          id: i.default.string,
          overlayElement: i.default.func,
          contentElement: i.default.func,
          testId: i.default.string,
        }),
        (t.default = y),
        (e.exports = t.default);
    },
    QLqi: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      (t.addPassiveEventListener = function (e, t, n) {
        var r = (function () {
          var e = !1;
          try {
            var t = Object.defineProperty({}, "passive", {
              get: function () {
                e = !0;
              },
            });
            window.addEventListener("test", null, t);
          } catch (n) {}
          return e;
        })();
        e.addEventListener(t, n, !!r && { passive: !0 });
      }),
        (t.removePassiveEventListener = function (e, t, n) {
          e.removeEventListener(t, n);
        });
    },
    QQPg: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = {
        registered: {},
        scrollEvent: {
          register: function (e, t) {
            r.registered[e] = t;
          },
          remove: function (e) {
            r.registered[e] = null;
          },
        },
      };
      t.default = r;
    },
    RIqP: function (e, t, n) {
      var r = n("Ijbi"),
        o = n("EbDI"),
        a = n("ZhPi"),
        s = n("Bnag");
      e.exports = function (e) {
        return r(e) || o(e) || a(e) || s();
      };
    },
    RNiq: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("nKUr"),
        o = n("q1tI"),
        a = n.n(o);
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e;
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function u(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && c(e, t);
      }
      function d(e) {
        return (d =
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
      function f(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function p(e, t) {
        return !t || ("object" !== d(t) && "function" !== typeof t) ? f(e) : t;
      }
      function h(e) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var m = n("oqc9");
      function b(e) {
        var t = (function () {
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
        })();
        return function () {
          var n,
            r = h(e);
          if (t) {
            var o = h(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return p(this, n);
        };
      }
      var v = (function (e) {
        u(n, e);
        var t = b(n);
        function n() {
          return s(this, n), t.apply(this, arguments);
        }
        return (
          l(n, [
            {
              key: "render",
              value: function () {
                return Object(r.jsxs)("ul", {
                  className: "navbar",
                  children: [
                    Object(r.jsx)("li", {
                      className: "nav1",
                      children: Object(r.jsx)(m.Link, {
                        activeClass: "active",
                        to: "new-home",
                        spy: !0,
                        smooth: !0,
                        offset: 0,
                        children: "Ashley Chang",
                      }),
                    }),
                    Object(r.jsxs)("li", {
                      className: "clickable",
                      children: [
                        Object(r.jsx)("li", { className: "nav3 nav fa" }),
                        Object(r.jsx)("li", {
                          className: "nav2",
                          children: Object(r.jsx)(m.Link, {
                            activeClass: "active",
                            to: "about",
                            spy: !0,
                            smooth: !0,
                            offset: -25,
                            children: "About",
                          }),
                        }),
                        Object(r.jsx)("li", {
                          className: "nav2",
                          children: Object(r.jsx)(m.Link, {
                            activeClass: "active",
                            to: "experiences",
                            spy: !0,
                            smooth: !0,
                            offset: -25,
                            children: "Experiences",
                          }),
                        }),
                        Object(r.jsx)("li", {
                          className: "nav2",
                          children: Object(r.jsx)(m.Link, {
                            activeClass: "active",
                            to: "projects",
                            spy: !0,
                            smooth: !0,
                            offset: -25,
                            children: "Projects",
                          }),
                        }),
                        Object(r.jsx)("li", {
                          className: "nav2",
                          children: Object(r.jsx)(m.Link, {
                            activeClass: "active",
                            to: "contact",
                            spy: !0,
                            smooth: !0,
                            offset: -75,
                            children: "Contact",
                          }),
                        }),
                      ],
                    }),
                  ],
                });
              },
            },
          ]),
          n
        );
      })(a.a.Component);
      function y(e) {
        var t = (function () {
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
        })();
        return function () {
          var n,
            r = h(e);
          if (t) {
            var o = h(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return p(this, n);
        };
      }
      var g = (function (e) {
          u(n, e);
          var t = y(n);
          function n() {
            return s(this, n), t.apply(this, arguments);
          }
          return (
            l(n, [
              {
                key: "render",
                value: function () {
                  return Object(r.jsx)("div", {
                    className: "page",
                    id: this.props.id,
                    children: Object(r.jsx)("div", {
                      className: "container",
                      children: this.props.content,
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(a.a.Component),
        j = n("Aiso"),
        O = n.n(j);
      function x(e) {
        var t = (function () {
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
        })();
        return function () {
          var n,
            r = h(e);
          if (t) {
            var o = h(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return p(this, n);
        };
      }
      var w = "/images/IMG_3441.jpg";
      function C() {
        return Object(r.jsx)(O.a, { src: w, width: "auto", height: "415" });
      }
      function k() {
        return Object(r.jsx)(r.Fragment, {
          children: Object(r.jsxs)("div", {
            style: { marginBottom: "1.2rem" },
            className: "row",
            children: [
              Object(r.jsxs)("h1", {
                className: "mobile",
                style: { textAlign: "c" },
                children: ["About Me ", Object(r.jsx)("br", {})],
              }),
              Object(r.jsxs)("div", {
                className: "face mobile column",
                children: [
                  Object(r.jsx)(O.a, {
                    src: w,
                    layout: "fill",
                    objectFit: "contain",
                  }),
                  Object(r.jsx)("h2", { style: { marginTop: "0" } }),
                ],
              }),
              Object(r.jsx)("div", {
                className: "words column",
                style: { flex: 3 },
                children: Object(r.jsxs)("div", {
                  children: [
                    Object(r.jsx)("h1", {
                      className: "not-mobile",
                      style: { textAlign: "left" },
                      children: "About Me",
                    }),
                    Object(r.jsx)("div", {
                      style: { marginTop: "0" },
                      children:
                        "Hi, my name's Ashley and I'm a sophomore at Brown University studying Computer Science and English.",
                    }),
                    Object(r.jsx)("br", {}),
                    Object(r.jsx)("div", {
                      style: { marginTop: "0" },
                      children:
                        "I'm a kiddo who loves computers (and that specific snake species), comic books, poems about anthropomorphic awakenings, and the great art of boots and cats.",
                    }),
                    Object(r.jsx)("br", {}),
                    Object(r.jsx)("div", {
                      style: { marginTop: "0" },
                      children:
                        "These days, I've been living it up while studying remotely in Forest, Virginia, where the great art (and loss) of Zoom is no stranger.",
                    }),
                    Object(r.jsx)("br", {}),
                    Object(r.jsx)("div", {
                      style: { marginTop: "0" },
                      children: "Thanks a whole ton for visiting my site :)",
                    }),
                    Object(r.jsx)("br", {}),
                    Object(r.jsx)("div", {
                      style: { marginTop: "0" },
                      children: "Let's get this ship rolling!",
                    }),
                  ],
                }),
              }),
              Object(r.jsxs)("div", {
                className: "face not-mobile column",
                children: [
                  Object(r.jsx)(C, {}),
                  Object(r.jsx)("h2", { style: { marginTop: "0" } }),
                ],
              }),
            ],
          }),
        });
      }
      var S = (function (e) {
        u(n, e);
        var t = x(n);
        function n() {
          return s(this, n), t.apply(this, arguments);
        }
        return (
          l(n, [
            {
              key: "render",
              value: function () {
                return Object(r.jsx)(g, {
                  id: "about",
                  content: Object(r.jsx)(k, {}),
                });
              },
            },
          ]),
          n
        );
      })(a.a.Component);
      n("17x9");
      function N(e) {
        return function (t) {
          return !!t.type && t.type.tabsRole === e;
        };
      }
      var _ = N("Tab"),
        T = N("TabList"),
        E = N("TabPanel");
      function M(e, t) {
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
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? M(Object(n), !0).forEach(function (t) {
                I(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : M(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function I(e, t, n) {
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
      function A(e, t) {
        return o.Children.map(e, function (e) {
          return null === e
            ? null
            : (function (e) {
                return _(e) || T(e) || E(e);
              })(e)
            ? t(e)
            : e.props &&
              e.props.children &&
              "object" === typeof e.props.children
            ? Object(o.cloneElement)(
                e,
                P(P({}, e.props), {}, { children: A(e.props.children, t) })
              )
            : e;
        });
      }
      function R(e, t) {
        return o.Children.forEach(e, function (e) {
          null !== e &&
            (_(e) || E(e)
              ? t(e)
              : e.props &&
                e.props.children &&
                "object" === typeof e.props.children &&
                (T(e) && t(e), R(e.props.children, t)));
        });
      }
      function F(e) {
        var t,
          n,
          r = "";
        if ("string" === typeof e || "number" === typeof e) r += e;
        else if ("object" === typeof e)
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (n = F(e[t])) && (r && (r += " "), (r += n));
          else for (t in e) e[t] && (r && (r += " "), (r += t));
        return r;
      }
      var D,
        L = function () {
          for (var e, t, n = 0, r = ""; n < arguments.length; )
            (e = arguments[n++]) && (t = F(e)) && (r && (r += " "), (r += t));
          return r;
        },
        z = 0;
      function B() {
        return "react-tabs-" + z++;
      }
      function W(e) {
        var t = 0;
        return (
          R(e, function (e) {
            _(e) && t++;
          }),
          t
        );
      }
      function H() {
        return (H =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function U(e) {
        return e && "getAttribute" in e;
      }
      function q(e) {
        return U(e) && "tab" === e.getAttribute("role");
      }
      function Y(e) {
        return U(e) && "true" === e.getAttribute("aria-disabled");
      }
      try {
        D = !(
          "undefined" === typeof window ||
          !window.document ||
          !window.document.activeElement
        );
      } catch (it) {
        D = !1;
      }
      var Q = (function (e) {
        var t, n;
        function r() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            ((t = e.call.apply(e, [this].concat(r)) || this).tabNodes = []),
            (t.handleKeyDown = function (e) {
              var n = t.props.direction;
              if (t.isTabFromContainer(e.target)) {
                var r = t.props.selectedIndex,
                  o = !1,
                  a = !1;
                (32 !== e.keyCode && 13 !== e.keyCode) ||
                  ((o = !0), (a = !1), t.handleClick(e)),
                  37 === e.keyCode || 38 === e.keyCode
                    ? ((r = "rtl" === n ? t.getNextTab(r) : t.getPrevTab(r)),
                      (o = !0),
                      (a = !0))
                    : 39 === e.keyCode || 40 === e.keyCode
                    ? ((r = "rtl" === n ? t.getPrevTab(r) : t.getNextTab(r)),
                      (o = !0),
                      (a = !0))
                    : 35 === e.keyCode
                    ? ((r = t.getLastTab()), (o = !0), (a = !0))
                    : 36 === e.keyCode &&
                      ((r = t.getFirstTab()), (o = !0), (a = !0)),
                  o && e.preventDefault(),
                  a && t.setSelected(r, e);
              }
            }),
            (t.handleClick = function (e) {
              var n = e.target;
              do {
                if (t.isTabFromContainer(n)) {
                  if (Y(n)) return;
                  var r = [].slice
                    .call(n.parentNode.children)
                    .filter(q)
                    .indexOf(n);
                  return void t.setSelected(r, e);
                }
              } while (null != (n = n.parentNode));
            }),
            t
          );
        }
        (n = e),
          ((t = r).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n);
        var s = r.prototype;
        return (
          (s.setSelected = function (e, t) {
            if (!(e < 0 || e >= this.getTabsCount())) {
              var n = this.props;
              (0, n.onSelect)(e, n.selectedIndex, t);
            }
          }),
          (s.getNextTab = function (e) {
            for (var t = this.getTabsCount(), n = e + 1; n < t; n++)
              if (!Y(this.getTab(n))) return n;
            for (var r = 0; r < e; r++) if (!Y(this.getTab(r))) return r;
            return e;
          }),
          (s.getPrevTab = function (e) {
            for (var t = e; t--; ) if (!Y(this.getTab(t))) return t;
            for (t = this.getTabsCount(); t-- > e; )
              if (!Y(this.getTab(t))) return t;
            return e;
          }),
          (s.getFirstTab = function () {
            for (var e = this.getTabsCount(), t = 0; t < e; t++)
              if (!Y(this.getTab(t))) return t;
            return null;
          }),
          (s.getLastTab = function () {
            for (var e = this.getTabsCount(); e--; )
              if (!Y(this.getTab(e))) return e;
            return null;
          }),
          (s.getTabsCount = function () {
            return W(this.props.children);
          }),
          (s.getPanelsCount = function () {
            return (function (e) {
              var t = 0;
              return (
                R(e, function (e) {
                  E(e) && t++;
                }),
                t
              );
            })(this.props.children);
          }),
          (s.getTab = function (e) {
            return this.tabNodes["tabs-" + e];
          }),
          (s.getChildren = function () {
            var e = this,
              t = 0,
              n = this.props,
              r = n.children,
              s = n.disabledTabClassName,
              i = n.focus,
              l = n.forceRenderTabPanel,
              c = n.selectedIndex,
              u = n.selectedTabClassName,
              d = n.selectedTabPanelClassName;
            (this.tabIds = this.tabIds || []),
              (this.panelIds = this.panelIds || []);
            for (var f = this.tabIds.length - this.getTabsCount(); f++ < 0; )
              this.tabIds.push(B()), this.panelIds.push(B());
            return A(r, function (n) {
              var r = n;
              if (T(n)) {
                var f = 0,
                  p = !1;
                D &&
                  (p = a.a.Children.toArray(n.props.children)
                    .filter(_)
                    .some(function (t, n) {
                      return document.activeElement === e.getTab(n);
                    })),
                  (r = Object(o.cloneElement)(n, {
                    children: A(n.props.children, function (t) {
                      var n = "tabs-" + f,
                        r = c === f,
                        a = {
                          tabRef: function (t) {
                            e.tabNodes[n] = t;
                          },
                          id: e.tabIds[f],
                          panelId: e.panelIds[f],
                          selected: r,
                          focus: r && (i || p),
                        };
                      return (
                        u && (a.selectedClassName = u),
                        s && (a.disabledClassName = s),
                        f++,
                        Object(o.cloneElement)(t, a)
                      );
                    }),
                  }));
              } else if (E(n)) {
                var h = {
                  id: e.panelIds[t],
                  tabId: e.tabIds[t],
                  selected: c === t,
                };
                l && (h.forceRender = l),
                  d && (h.selectedClassName = d),
                  t++,
                  (r = Object(o.cloneElement)(n, h));
              }
              return r;
            });
          }),
          (s.isTabFromContainer = function (e) {
            if (!q(e)) return !1;
            var t = e.parentElement;
            do {
              if (t === this.node) return !0;
              if (t.getAttribute("data-tabs")) break;
              t = t.parentElement;
            } while (t);
            return !1;
          }),
          (s.render = function () {
            var e = this,
              t = this.props,
              n = (t.children, t.className),
              r = (t.disabledTabClassName, t.domRef),
              o =
                (t.focus,
                t.forceRenderTabPanel,
                t.onSelect,
                t.selectedIndex,
                t.selectedTabClassName,
                t.selectedTabPanelClassName,
                (function (e, t) {
                  if (null == e) return {};
                  var n,
                    r,
                    o = {},
                    a = Object.keys(e);
                  for (r = 0; r < a.length; r++)
                    (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                  return o;
                })(t, [
                  "children",
                  "className",
                  "disabledTabClassName",
                  "domRef",
                  "focus",
                  "forceRenderTabPanel",
                  "onSelect",
                  "selectedIndex",
                  "selectedTabClassName",
                  "selectedTabPanelClassName",
                ]));
            return a.a.createElement(
              "div",
              H({}, o, {
                className: L(n),
                onClick: this.handleClick,
                onKeyDown: this.handleKeyDown,
                ref: function (t) {
                  (e.node = t), r && r(t);
                },
                "data-tabs": !0,
              }),
              this.getChildren()
            );
          }),
          r
        );
      })(o.Component);
      (Q.defaultProps = { className: "react-tabs", focus: !1 }),
        (Q.propTypes = {});
      var V = (function (e) {
        var t, n;
        function r(t) {
          var n;
          return (
            ((n = e.call(this, t) || this).handleSelected = function (e, t, r) {
              var o = n.props.onSelect,
                a = n.state.mode;
              if ("function" !== typeof o || !1 !== o(e, t, r)) {
                var s = { focus: "keydown" === r.type };
                1 === a && (s.selectedIndex = e), n.setState(s);
              }
            }),
            (n.state = r.copyPropsToState(n.props, {}, t.defaultFocus)),
            n
          );
        }
        return (
          (n = e),
          ((t = r).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n),
          (r.getDerivedStateFromProps = function (e, t) {
            return r.copyPropsToState(e, t);
          }),
          (r.getModeFromProps = function (e) {
            return null === e.selectedIndex ? 1 : 0;
          }),
          (r.copyPropsToState = function (e, t, n) {
            void 0 === n && (n = !1);
            var o = { focus: n, mode: r.getModeFromProps(e) };
            if (1 === o.mode) {
              var a = W(e.children) - 1,
                s = null;
              (s =
                null != t.selectedIndex
                  ? Math.min(t.selectedIndex, a)
                  : e.defaultIndex || 0),
                (o.selectedIndex = s);
            }
            return o;
          }),
          (r.prototype.render = function () {
            var e = this.props,
              t = e.children,
              n =
                (e.defaultIndex,
                e.defaultFocus,
                (function (e, t) {
                  if (null == e) return {};
                  var n,
                    r,
                    o = {},
                    a = Object.keys(e);
                  for (r = 0; r < a.length; r++)
                    (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                  return o;
                })(e, ["children", "defaultIndex", "defaultFocus"])),
              r = this.state,
              o = r.focus,
              s = r.selectedIndex;
            return (
              (n.focus = o),
              (n.onSelect = this.handleSelected),
              null != s && (n.selectedIndex = s),
              a.a.createElement(Q, n, t)
            );
          }),
          r
        );
      })(o.Component);
      function G() {
        return (G =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      (V.defaultProps = {
        defaultFocus: !1,
        forceRenderTabPanel: !1,
        selectedIndex: null,
        defaultIndex: null,
      }),
        (V.propTypes = {}),
        (V.tabsRole = "Tabs");
      var K = (function (e) {
        var t, n;
        function r() {
          return e.apply(this, arguments) || this;
        }
        return (
          (n = e),
          ((t = r).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n),
          (r.prototype.render = function () {
            var e = this.props,
              t = e.children,
              n = e.className,
              r = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  o = {},
                  a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                  (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o;
              })(e, ["children", "className"]);
            return a.a.createElement(
              "ul",
              G({}, r, { className: L(n), role: "tablist" }),
              t
            );
          }),
          r
        );
      })(o.Component);
      function X() {
        return (X =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      (K.defaultProps = { className: "react-tabs__tab-list" }),
        (K.propTypes = {}),
        (K.tabsRole = "TabList");
      var Z = "react-tabs__tab",
        $ = (function (e) {
          var t, n;
          function r() {
            return e.apply(this, arguments) || this;
          }
          (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n);
          var o = r.prototype;
          return (
            (o.componentDidMount = function () {
              this.checkFocus();
            }),
            (o.componentDidUpdate = function () {
              this.checkFocus();
            }),
            (o.checkFocus = function () {
              var e = this.props,
                t = e.selected,
                n = e.focus;
              t && n && this.node.focus();
            }),
            (o.render = function () {
              var e,
                t = this,
                n = this.props,
                r = n.children,
                o = n.className,
                s = n.disabled,
                i = n.disabledClassName,
                l = (n.focus, n.id),
                c = n.panelId,
                u = n.selected,
                d = n.selectedClassName,
                f = n.tabIndex,
                p = n.tabRef,
                h = (function (e, t) {
                  if (null == e) return {};
                  var n,
                    r,
                    o = {},
                    a = Object.keys(e);
                  for (r = 0; r < a.length; r++)
                    (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                  return o;
                })(n, [
                  "children",
                  "className",
                  "disabled",
                  "disabledClassName",
                  "focus",
                  "id",
                  "panelId",
                  "selected",
                  "selectedClassName",
                  "tabIndex",
                  "tabRef",
                ]);
              return a.a.createElement(
                "li",
                X({}, h, {
                  className: L(o, ((e = {}), (e[d] = u), (e[i] = s), e)),
                  ref: function (e) {
                    (t.node = e), p && p(e);
                  },
                  role: "tab",
                  id: l,
                  "aria-selected": u ? "true" : "false",
                  "aria-disabled": s ? "true" : "false",
                  "aria-controls": c,
                  tabIndex: f || (u ? "0" : null),
                }),
                r
              );
            }),
            r
          );
        })(o.Component);
      function J() {
        return (J =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      ($.defaultProps = {
        className: Z,
        disabledClassName: Z + "--disabled",
        focus: !1,
        id: null,
        panelId: null,
        selected: !1,
        selectedClassName: Z + "--selected",
      }),
        ($.propTypes = {}),
        ($.tabsRole = "Tab");
      var ee = "react-tabs__tab-panel",
        te = (function (e) {
          var t, n;
          function r() {
            return e.apply(this, arguments) || this;
          }
          return (
            (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n),
            (r.prototype.render = function () {
              var e,
                t = this.props,
                n = t.children,
                r = t.className,
                o = t.forceRender,
                s = t.id,
                i = t.selected,
                l = t.selectedClassName,
                c = t.tabId,
                u = (function (e, t) {
                  if (null == e) return {};
                  var n,
                    r,
                    o = {},
                    a = Object.keys(e);
                  for (r = 0; r < a.length; r++)
                    (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                  return o;
                })(t, [
                  "children",
                  "className",
                  "forceRender",
                  "id",
                  "selected",
                  "selectedClassName",
                  "tabId",
                ]);
              return a.a.createElement(
                "div",
                J({}, u, {
                  className: L(r, ((e = {}), (e[l] = i), e)),
                  role: "tabpanel",
                  id: s,
                  "aria-labelledby": c,
                }),
                o || i ? n : null
              );
            }),
            r
          );
        })(o.Component);
      function ne(e) {
        var t = (function () {
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
          } catch (it) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = h(e);
          if (t) {
            var o = h(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return p(this, n);
        };
      }
      (te.defaultProps = {
        className: ee,
        forceRender: !1,
        selectedClassName: "react-tabs__tab-panel--selected",
      }),
        (te.propTypes = {}),
        (te.tabsRole = "TabPanel");
      var re = Object(r.jsxs)(r.Fragment, {
          children: [
            Object(r.jsxs)("p", {
              children: [
                "B.A. Computer Science; B.A English ",
                Object(r.jsx)("br", {}),
                "GPA 4.0/4.0",
              ],
            }),
            Object(r.jsx)("p", {
              children:
                "My wonderful university :) Over here I beatbox for the Ursa Minors acapella group, advise freshmen as a Meiklejohn, write sketch comedy skits for Skorts, teach with SEADD (Self Expression for Adults with Developmental Disabilities), and edit for Cornerstone Literary Magazine",
            }),
          ],
        }),
        oe = Object(r.jsx)("p", {
          children:
            "I TA for CS0111, Computing Foundations: Data. I spend about 8-9 hours every week holding TA hours, grading assignments, and conducting labs for this 375-person class.",
        }),
        ae = Object(r.jsx)("p", {
          children:
            "Using the wonders of pytesseract, scala, and Abby FineReader, I've transcribed thousands of cables from the Chinese Ministry of the Foreign Affairs during the 1960s. In the process, I've collected all sorts of metadata.",
        }),
        se = Object(r.jsx)("p", {
          children:
            "I am the co-author of a university textbook about intercultural communication with Chul Chang. Using the information gathered from many interviews, personal experiences, and historical vantage points, I've written about global relationships and what it means to truly be a caring and thoughtful international citizen.",
        }),
        ie = Object(r.jsx)("p", {
          children:
            "Over the course of two years, I've interviewed many different members of Bedford County on a range of topics, including those related to school dynamics and sports, as well as how different members of the community have adapted to the COVID-19 pandemic.",
        }),
        le = Object(r.jsxs)(r.Fragment, {
          children: [
            Object(r.jsx)("p", { children: "Salutatorian. 4.57/4.0 GPA." }),
            Object(r.jsx)("p", {
              children:
                "My high school! I ran cross-country here, founded an Avatar: The Last Airbender club with over 35 members (before the show came to Netflix), wrote papers as a Virginia Aerospace Science and Technology Scholar, and was the highest scoring member of our Scholastic Bowl team (we were runner-up in States my junior year!)",
            }),
          ],
        }),
        ce = (function (e) {
          u(n, e);
          var t = ne(n);
          function n() {
            return s(this, n), t.apply(this, arguments);
          }
          return (
            l(n, [
              {
                key: "render",
                value: function () {
                  return Object(r.jsxs)(V, {
                    children: [
                      Object(r.jsxs)(K, {
                        children: [
                          Object(r.jsx)($, {
                            children: Object(r.jsxs)("div", {
                              className: "tab-name",
                              children: [
                                Object(r.jsx)("i", {
                                  className: "fa fa-graduation-cap",
                                }),
                                Object(r.jsx)("span", { children: " " }),
                                " Education",
                              ],
                            }),
                          }),
                          Object(r.jsx)($, {
                            children: Object(r.jsxs)("div", {
                              className: "tab-name",
                              children: [
                                Object(r.jsx)("i", {
                                  className: "fa fa-briefcase",
                                }),
                                Object(r.jsx)("span", { children: " " }),
                                " Work",
                              ],
                            }),
                          }),
                          Object(r.jsx)($, {
                            children: Object(r.jsxs)("div", {
                              className: "tab-name",
                              children: [
                                Object(r.jsx)("i", {
                                  className: "fa fa-pencil",
                                }),
                                Object(r.jsx)("span", { children: " " }),
                                " Writing",
                              ],
                            }),
                          }),
                        ],
                      }),
                      Object(r.jsx)(te, { children: Object(r.jsx)(de, {}) }),
                      Object(r.jsx)(te, { children: Object(r.jsx)(fe, {}) }),
                      Object(r.jsx)(te, { children: Object(r.jsx)(ue, {}) }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.a.Component),
        ue = (function (e) {
          u(n, e);
          var t = ne(n);
          function n() {
            return s(this, n), t.apply(this, arguments);
          }
          return (
            l(n, [
              {
                key: "render",
                value: function () {
                  return Object(r.jsxs)(r.Fragment, {
                    children: [
                      Object(r.jsxs)("div", {
                        className: "timeline-item",
                        "date-is": "08/2019 - Present",
                        children: [
                          Object(r.jsx)("h2", {
                            children: "Kendall Hunt Publishing",
                          }),
                          se,
                        ],
                      }),
                      Object(r.jsxs)("div", {
                        className: "timeline-item",
                        "date-is": "05/2018 - 08/2020",
                        children: [
                          Object(r.jsx)("h2", { children: "Bedford Bulletin" }),
                          ie,
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.a.Component),
        de = (function (e) {
          u(n, e);
          var t = ne(n);
          function n() {
            return s(this, n), t.apply(this, arguments);
          }
          return (
            l(n, [
              {
                key: "render",
                value: function () {
                  return Object(r.jsxs)(r.Fragment, {
                    children: [
                      Object(r.jsxs)("div", {
                        className: "timeline-item",
                        "date-is": "08/2019 - 05/2023",
                        children: [
                          Object(r.jsx)("h2", { children: "Brown University" }),
                          re,
                        ],
                      }),
                      Object(r.jsxs)("div", {
                        className: "timeline-item",
                        "date-is": "08/2015 - 05/2019",
                        children: [
                          Object(r.jsx)("h2", {
                            children: "Jefferson Forest High School",
                          }),
                          le,
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.a.Component),
        fe = (function (e) {
          u(n, e);
          var t = ne(n);
          function n() {
            return s(this, n), t.apply(this, arguments);
          }
          return (
            l(n, [
              {
                key: "render",
                value: function () {
                  return Object(r.jsxs)(r.Fragment, {
                    children: [
                      Object(r.jsxs)("div", {
                        className: "timeline-item",
                        "date-is": "08/2020 - Present",
                        children: [
                          Object(r.jsx)("h2", {
                            children: "Brown University Computer Science",
                          }),
                          oe,
                        ],
                      }),
                      Object(r.jsxs)("div", {
                        className: "timeline-item",
                        "date-is": "01/2020 - Present",
                        children: [
                          Object(r.jsx)("h2", {
                            children: "Watson Institute for Public Affairs",
                          }),
                          ae,
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.a.Component);
      function pe() {
        return Object(r.jsxs)(r.Fragment, {
          children: [
            Object(r.jsx)("h1", { children: "My Experiences" }),
            Object(r.jsx)("div", {
              className: "row",
              children: Object(r.jsx)(ce, {}),
            }),
          ],
        });
      }
      var he = (function (e) {
          u(n, e);
          var t = ne(n);
          function n() {
            return s(this, n), t.apply(this, arguments);
          }
          return (
            l(n, [
              {
                key: "render",
                value: function () {
                  return Object(r.jsx)(g, {
                    id: "experiences",
                    content: Object(r.jsx)(pe, {}),
                  });
                },
              },
            ]),
            n
          );
        })(a.a.Component),
        me = n("9rZX"),
        be = n.n(me);
      function ve(e) {
        var t = (function () {
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
          } catch (it) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = h(e);
          if (t) {
            var o = h(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return p(this, n);
        };
      }
      var ye = "/images/Comix-Match-1.png",
        ge = "/images/Get-Blueno-1.png",
        je = "/images/Carpe-1.png",
        Oe = "/images/Shell-1.png",
        xe = "/images/Ursa-Minors-1.png",
        we = "/images/Search-1.png";
      function Ce(e) {
        var t = Object(r.jsx)("a", {
            href: e.git,
            target: "_blank",
            rel: "noopener noreferrer",
            children: Object(r.jsx)("i", { className: "fa fa-github" }),
          }),
          n = Object(r.jsx)("a", {
            href: e.deploy,
            target: "_blank",
            rel: "noopener noreferrer",
            children: Object(r.jsx)("i", { className: "fa fa-link" }),
          });
        return (
          "" === e.git && (t = Object(r.jsx)(r.Fragment, {})),
          "" === e.deploy && (n = Object(r.jsx)(r.Fragment, {})),
          Object(r.jsxs)("div", {
            className: "content",
            children: [
              Object(r.jsxs)("div", {
                className: "caption",
                children: [
                  Object(r.jsx)("strong", { children: "Tech pool: " }),
                  " flask, pandas, selenium, html, and css",
                ],
              }),
              Object(r.jsx)("br", {}),
              "Using the powers of selenium and flask, I created a website that contains the information of over seven thousand books from goodreads' shelves.",
              Object(r.jsx)("br", {}),
              Object(r.jsx)("br", {}),
              "This data can be sorted by total reviews, average reviews, random, and other fun things. Goodreads doesn't let its users sort its data by these metrics, but I really wanted to find more comic books to read, so this seemed like the natural conclusion. Learning that everyone loves Calvin and Hobbes was a delightful bonus.",
              Object(r.jsxs)("div", {
                className: "i row",
                children: [t, " ", n],
              }),
            ],
          })
        );
      }
      function ke(e) {
        var t = Object(r.jsx)("a", {
            href: e.git,
            target: "_blank",
            rel: "noopener noreferrer",
            children: Object(r.jsx)("i", { className: "fa fa-github" }),
          }),
          n = Object(r.jsx)("a", {
            href: e.deploy,
            target: "_blank",
            rel: "noopener noreferrer",
            children: Object(r.jsx)("i", { className: "fa fa-link" }),
          });
        return (
          "" === e.git && (t = Object(r.jsx)(r.Fragment, {})),
          "" === e.deploy && (n = Object(r.jsx)(r.Fragment, {})),
          Object(r.jsxs)("div", {
            className: "content",
            children: [
              Object(r.jsxs)("div", {
                className: "caption",
                children: [
                  Object(r.jsx)("strong", { children: "Thanks to:" }),
                  " react, flask, and the google sheets api",
                ],
              }),
              Object(r.jsx)("br", {}),
              "After staring at our old weebly site for so long, I obtained the blessing of our presidents and developed a new website for my acapella group.",
              Object(r.jsx)("br", {}),
              Object(r.jsx)("br", {}),
              "The site has a react front-end and a flask back-end for extra shenanigans, like the contact form. I have finished designing the site, but am giving it extra time for the members to fill out a google form with their bios",
              "\u2014",
              "but when they do, the information on the site will automatically update via the google sheets api. For runtime sake, I'll probably later remove this feature, but for now it's fun.",
              Object(r.jsxs)("div", {
                className: "i row",
                children: [t, " ", n],
              }),
            ],
          })
        );
      }
      function Se(e) {
        var t = Object(r.jsx)("a", {
            href: e.git,
            target: "_blank",
            rel: "noopener noreferrer",
            children: Object(r.jsx)("i", { className: "fa fa-github" }),
          }),
          n = Object(r.jsx)("a", {
            href: e.deploy,
            target: "_blank",
            rel: "noopener noreferrer",
            children: Object(r.jsx)("i", { className: "fa fa-link" }),
          });
        return (
          "" === e.git && (t = Object(r.jsx)(r.Fragment, {})),
          "" === e.deploy && (n = Object(r.jsx)(r.Fragment, {})),
          Object(r.jsxs)("div", {
            className: "content",
            children: [
              Object(r.jsxs)("div", {
                className: "caption",
                children: [
                  Object(r.jsx)("strong", { children: "Thanks to:" }),
                  " react and the world of npm",
                ],
              }),
              Object(r.jsx)("br", {}),
              "Carpe is a productivity suite I built out as a pick-me-up during quarantine.",
              Object(r.jsx)("br", {}),
              Object(r.jsx)("br", {}),
              "I started with my idea for Elapsify, which starts a stopwatch every time a task is entered. I hoped to ramp up a bit of my stress and productivity (and it worked!). Then I built out Homework Tracker and Message Center as my own special ways of listing those to-dos. Through this personal project, I learned react. Quite fantastic, this library.",
              Object(r.jsxs)("div", {
                className: "i row",
                children: [t, " ", n],
              }),
            ],
          })
        );
      }
      function Ne(e) {
        var t = Object(r.jsx)("a", {
            href: e.git,
            target: "_blank",
            rel: "noopener noreferrer",
            children: Object(r.jsx)("i", { className: "fa fa-github" }),
          }),
          n = Object(r.jsx)("a", {
            href: e.deploy,
            target: "_blank",
            rel: "noopener noreferrer",
            children: Object(r.jsx)("i", { className: "fa fa-link" }),
          });
        return (
          "" === e.git && (t = Object(r.jsx)(r.Fragment, {})),
          "" === e.deploy && (n = Object(r.jsx)(r.Fragment, {})),
          Object(r.jsxs)("div", {
            className: "content",
            children: [
              Object(r.jsxs)("div", {
                className: "caption",
                children: [
                  Object(r.jsx)("strong", { children: "Tech crew:" }),
                  " c, gdb, and the linux man-pages",
                ],
              }),
              Object(r.jsx)("br", {}),
              'I remember when I first saw the characters "cd" I was so confused',
              "\u2014",
              "but that made building this c-based shell clone even more freeing.",
              Object(r.jsx)("br", {}),
              Object(r.jsx)("br", {}),
              'Over the course of this project, I learned to implement the wonders of foreground and background processes, input and output redirection, and of course, command execution. It only takes one "cd" to change everything.',
              Object(r.jsxs)("div", {
                className: "i row",
                children: [t, " ", n],
              }),
            ],
          })
        );
      }
      function _e(e) {
        var t = Object(r.jsx)("a", {
            href: e.git,
            target: "_blank",
            rel: "noopener noreferrer",
            children: Object(r.jsx)("i", { className: "fa fa-github" }),
          }),
          n = Object(r.jsx)("a", {
            href: e.deploy,
            target: "_blank",
            rel: "noopener noreferrer",
            children: Object(r.jsx)("i", { className: "fa fa-link" }),
          });
        return (
          "" === e.git && (t = Object(r.jsx)(r.Fragment, {})),
          "" === e.deploy && (n = Object(r.jsx)(r.Fragment, {})),
          Object(r.jsxs)("div", {
            className: "content",
            children: [
              Object(r.jsxs)("div", {
                className: "caption",
                children: [
                  Object(r.jsx)("strong", { children: "Using: " }),
                  " html, css, javascript",
                ],
              }),
              Object(r.jsx)("br", {}),
              "Here lies a 2048 clone that uses brunonian bears rather than numbers. I don't have much to say here, except that everyone I show this game to plays it for more than 20 minutes.",
              Object(r.jsxs)("div", {
                className: "i row",
                children: [t, " ", n],
              }),
            ],
          })
        );
      }
      function Te(e) {
        var t = Object(r.jsx)("a", {
            href: e.git,
            target: "_blank",
            rel: "noopener noreferrer",
            children: Object(r.jsx)("i", { className: "fa fa-github" }),
          }),
          n = Object(r.jsx)("a", {
            href: e.deploy,
            target: "_blank",
            rel: "noopener noreferrer",
            children: Object(r.jsx)("i", { className: "fa fa-link" }),
          });
        return (
          "" === e.git && (t = Object(r.jsx)(r.Fragment, {})),
          "" === e.deploy && (n = Object(r.jsx)(r.Fragment, {})),
          Object(r.jsxs)("div", {
            className: "content",
            children: [
              Object(r.jsxs)("div", {
                className: "caption",
                children: [
                  Object(r.jsx)("strong", { children: "Introducing:" }),
                  " scala, xml, and sbt",
                ],
              }),
              Object(r.jsx)("br", {}),
              "When life gives you a big XML wikis, I guess you slap a little bit of TF-IDF on it and call it a search engine.",
              Object(r.jsx)("br", {}),
              Object(r.jsx)("br", {}),
              "Using scala and the pagerank algorithm, I implemented a search engine that takes the pages and pages of information in given XML wikis and presents it in the format pictured above. In the process, I focused on time-complexity, space complexity, and of course, (soul) searching.",
              Object(r.jsxs)("div", {
                className: "i row",
                children: [t, " ", n],
              }),
            ],
          })
        );
      }
      function Ee(e) {
        return (e + 3) % 3;
      }
      var Me = (function (e) {
          u(n, e);
          var t = ve(n);
          function n(e) {
            var r;
            return (
              s(this, n),
              ((r = t.call(this, e)).state = { showModal: !1, current: 0 }),
              (r.handleOpenModal = r.handleOpenModal.bind(f(r))),
              (r.handleCloseModal = r.handleCloseModal.bind(f(r))),
              r
            );
          }
          return (
            l(n, [
              {
                key: "handleOpenModal",
                value: function () {
                  this.setState({ showModal: !0 });
                },
              },
              {
                key: "moveBack",
                value: function () {
                  this.setState({ current: Ee(this.state.current - 1) });
                },
              },
              {
                key: "moveForward",
                value: function () {
                  this.setState({ current: Ee(this.state.current + 1) });
                },
              },
              {
                key: "handleCloseModal",
                value: function () {
                  this.setState({ showModal: !1 });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.images[this.state.current],
                    n = this.props.alts[this.state.current];
                  return Object(r.jsx)("div", {
                    className: "image",
                    children: Object(r.jsxs)("div", {
                      className: "image-wrapper",
                      children: [
                        Object(r.jsxs)("div", {
                          className: "project-links",
                          children: [
                            Object(r.jsx)("button", {
                              className: "not-mobile",
                              onClick: this.handleOpenModal,
                              children: Object(r.jsx)("i", {
                                className: "fa fa-search-plus",
                              }),
                            }),
                            Object(r.jsx)("button", {
                              className: "mobile",
                              onClick: this.handleOpenModal,
                              children: Object(r.jsx)("i", {
                                className: "fa fa-info-circle",
                              }),
                            }),
                          ],
                        }),
                        Object(r.jsx)(be.a, {
                          isOpen: this.state.showModal,
                          children: Object(r.jsxs)("div", {
                            className: "modal",
                            children: [
                              Object(r.jsx)("button", {
                                className: "exit",
                                onClick: this.handleCloseModal,
                                children: Object(r.jsx)("i", {
                                  className: "fa fa-times",
                                }),
                              }),
                              Object(r.jsx)("h2", {
                                children: this.props.project,
                              }),
                              Object(r.jsx)("hr", {}),
                              Object(r.jsxs)("div", {
                                className: "img row",
                                children: [
                                  Object(r.jsx)("div", {
                                    className: "slideshow arrow",
                                    children: Object(r.jsx)("button", {
                                      onClick: function () {
                                        return e.moveBack();
                                      },
                                      children: Object(r.jsx)("i", {
                                        className: "fa fa-chevron-left",
                                      }),
                                    }),
                                  }),
                                  Object(r.jsx)("div", {
                                    className: "img column",
                                    children: Object(r.jsx)(O.a, {
                                      src: t,
                                      width: "auto",
                                      height: "auto",
                                      alt: "",
                                      loading: "eager",
                                    }),
                                  }),
                                  Object(r.jsx)("div", {
                                    className: "slideshow arrow",
                                    children: Object(r.jsx)("button", {
                                      onClick: function () {
                                        return e.moveForward();
                                      },
                                      children: Object(r.jsx)("i", {
                                        className: "fa fa-chevron-right",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              this.props.caption,
                            ],
                          }),
                        }),
                        Object(r.jsx)(O.a, {
                          wrapperClassName: "project-image-thumbnail",
                          src: this.props.src,
                          alt: n,
                          width: "auto",
                          height: "auto",
                          loading: "lazy",
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(a.a.Component),
        Pe = function () {
          return Object(r.jsx)(Me, {
            project: "Ursa Minors Website",
            images: [
              xe,
              "/images/Ursa-Minors-2.png",
              "/images/Ursa-Minors-3.png",
            ],
            src: xe,
            deploy: "https://ursa-minors.ashley-chang.me/index",
            git: "",
            caption: Object(r.jsx)(ke, {
              deploy: "https://ursa-minors.ashley-chang.me/index",
              git: "",
            }),
            alts: [
              "Ursa Minors acapella group website landing page with photo of the group",
              "Member Info page for current Ursa Minors",
              "contact form for website",
            ],
          });
        },
        Ie = function () {
          return Object(r.jsx)(Me, {
            project: "Carpe",
            images: [je, "/images/Carpe-2.png", "/images/Carpe-3.png"],
            src: je,
            deploy: "https://carpe.ashley-chang.me/",
            git: "https://github.com/spswatron/carpe",
            caption: Object(r.jsx)(Se, {
              deploy: "https://carpe.ashley-chang.me/",
              git: "https://github.com/spswatron/carpe",
            }),
            alts: [
              "Carpe website with calendar that tasks can be inputted into and taken out of",
              "Page withrich text editor for to-do list messages",
              "Elapsify to-do list that starts a stopwatch for every task entered",
            ],
          });
        },
        Ae = function () {
          return Object(r.jsx)(Me, {
            project: "GetBlueno",
            images: [
              ge,
              "/images/Get-Blueno-2.png",
              "/images/Get-Blueno-3.png",
            ],
            src: ge,
            deploy: "https://get-blueno.ashley-chang.me/",
            git: "https://github.com/spswatron/get-blueno",
            caption: Object(r.jsx)(_e, {
              deploy: "https://get-blueno.ashley-chang.me/",
              git: "https://github.com/spswatron/get-blueno",
            }),
            alts: [
              "Picture of Brown University bears and president in 2048 clone game",
              "Game Over message witheven more bears in the margins of the site",
              "Success message for game that says 'You Brought Blueno Back!",
            ],
          });
        },
        Re = function () {
          return Object(r.jsx)(Me, {
            src: Oe,
            images: [Oe, "/images/Shell-2.png", "/images/Shell-3.png"],
            project: "Shell",
            deploy: "",
            git: "",
            caption: Object(r.jsx)(Ne, { deploy: "", git: "" }),
            alts: [
              "Screen shot of shell clone that executed the banner command as well as foreground and backgroundsignal handling commands",
              "shell clone with input and output redirection involving usr/bin/calendar",
              "shell clone executing figlet and banner commands",
            ],
          });
        },
        Fe = function () {
          return Object(r.jsx)(Me, {
            src: ye,
            images: [
              ye,
              "/images/Comix-Match-2.png",
              "/images/Comix-Match-3.png",
            ],
            project: "Comix Match",
            deploy: "http://comix-match.ashley-chang.me/",
            git: "https://github.com/spswatron/comix-match",
            caption: Object(r.jsx)(Ce, {
              deploy: "http://comix-match.ashley-chang.me/",
              git: "https://github.com/spswatron/comix-match",
            }),
            alts: [
              "Comix Match homepage with comic books sorted from highest average rating to lowest",
              "Comix Match with comics sorted by random",
              "Chix match, which is just Comix Match for chicklit, with books sorted by total reviews",
            ],
          });
        },
        De = function () {
          return Object(r.jsx)(Me, {
            src: we,
            images: [we, "/images/Search-2.png", "/images/Search-3.png"],
            project: "Search",
            deploy: "",
            git: "",
            caption: Object(r.jsx)(Te, { deploy: "", git: "" }),
            alts: [
              "Results of search results for 'rock,' which are Stage, Nirvana, Granite, Mountaineering, Kyanite, Men at Work, Jamming, Paleogne, and the Grateful Dead",
              "Results for for 'chocolate,' which are Pan flute, Malvales, Matzo, Merlot, Mandy Patinkin,Cuisine of the Midwestern United States, History of the Faroe Islands, Milk, Pennsylvania, and Lavender",
              "Results for 'california' search and a bit of the 'texas' search",
            ],
          });
        },
        Le = [
          Object(r.jsx)(Fe, {}, 1),
          Object(r.jsx)(Pe, {}, 2),
          Object(r.jsx)(Ie, {}, 3),
          Object(r.jsx)(Re, {}, 4),
          Object(r.jsx)(Ae, {}, 5),
          Object(r.jsx)(De, {}, 6),
        ],
        ze = (function (e) {
          u(n, e);
          var t = ve(n);
          function n(e) {
            var r;
            return (
              s(this, n), ((r = t.call(this, e)).state = { current: !1 }), r
            );
          }
          return (
            l(n, [
              {
                key: "render",
                value: function () {
                  return Object(r.jsxs)(r.Fragment, {
                    children: [
                      Object(r.jsx)("h1", { children: "Projects" }),
                      Object(r.jsx)("div", { className: "row", children: Le }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.a.Component),
        Be = (function (e) {
          u(n, e);
          var t = ve(n);
          function n() {
            return s(this, n), t.apply(this, arguments);
          }
          return (
            l(n, [
              {
                key: "render",
                value: function () {
                  return Object(r.jsx)(g, {
                    id: "projects",
                    content: Object(r.jsx)(ze, {}),
                  });
                },
              },
            ]),
            n
          );
        })(a.a.Component),
        We = n("o0o1"),
        He = n.n(We);
      function Ue(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function qe(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Ue(e);
          })(e) ||
          (function (e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ("string" === typeof e) return Ue(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? Ue(e, t)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Ye(e, t, n, r, o, a, s) {
        try {
          var i = e[a](s),
            l = i.value;
        } catch (c) {
          return void n(c);
        }
        i.done ? t(l) : Promise.resolve(l).then(r, o);
      }
      function Qe(e) {
        var t = (function () {
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
          } catch (it) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = h(e);
          if (t) {
            var o = h(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return p(this, n);
        };
      }
      var Ve = (function (e) {
        u(n, e);
        var t = Qe(n);
        function n(e) {
          var r;
          return (
            s(this, n),
            ((r = t.call(this, e)).state = { showModal: !1, current: 0 }),
            (r.handleOpenModal = r.handleOpenModal.bind(f(r))),
            (r.handleCloseModal = r.handleCloseModal.bind(f(r))),
            r
          );
        }
        return (
          l(n, [
            {
              key: "handleOpenModal",
              value: function () {
                this.setState({ showModal: !0 });
              },
            },
            {
              key: "handleCloseModal",
              value: function () {
                this.setState({ showModal: !1 });
              },
            },
            {
              key: "render",
              value: function () {
                return Object(r.jsxs)(r.Fragment, {
                  children: [
                    Object(r.jsx)("button", {
                      className: "clear",
                      onClick: this.handleOpenModal,
                      children: Object(r.jsx)("div", {
                        className: "manual caption",
                        children: Object(r.jsx)("strong", {
                          children: "Want to send messages manually?",
                        }),
                      }),
                    }),
                    Object(r.jsx)(be.a, {
                      isOpen: this.state.showModal,
                      children: Object(r.jsxs)("div", {
                        className: "modal",
                        style: { maxWidth: "470px" },
                        children: [
                          Object(r.jsx)("button", {
                            className: "exit",
                            onClick: this.handleCloseModal,
                            children: Object(r.jsx)("i", {
                              className: "fa fa-times",
                            }),
                          }),
                          Object(r.jsx)("h2", {
                            style: {
                              display: "flex",
                              justifyContent: "center",
                            },
                            children: Object(r.jsx)("div", {
                              className: "contact-info",
                              children: "Contact Information",
                            }),
                          }),
                          Object(r.jsx)("br", {}),
                          Object(r.jsxs)("div", {
                            className: "content",
                            style: { maxWidth: "24rem" },
                            children: [
                              Object(r.jsx)("strong", { children: "Email: " }),
                              " ashley_e_chang@brown.edu",
                              Object(r.jsx)("br", {}),
                              Object(r.jsx)("br", {
                                style: { fontSize: "0.5rem" },
                              }),
                              Object(r.jsx)("strong", {
                                children: "Phone Number: ",
                              }),
                              " 434-849-4438",
                              Object(r.jsx)("br", {}),
                              Object(r.jsx)("br", {
                                style: { fontSize: "0.5rem" },
                              }),
                              Object(r.jsx)("strong", { children: "Github: " }),
                              " spswatron ",
                              Object(r.jsx)("a", {
                                href: "https://github.com/spswatron",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: Object(r.jsx)("i", {
                                  className: "fa fa-external-link",
                                }),
                              }),
                              Object(r.jsx)("br", {}),
                              Object(r.jsx)("br", {
                                style: { fontSize: "0.5rem" },
                              }),
                              Object(r.jsx)("strong", {
                                children: "Linkedin: ",
                              }),
                              " Ashley Chang ",
                              Object(r.jsx)("a", {
                                href:
                                  "https://www.linkedin.com/in/ashley-e-chang/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: Object(r.jsx)("i", {
                                  className: "fa fa-external-link",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                });
              },
            },
          ]),
          n
        );
      })(a.a.Component);
      function Ge(e) {
        return Object(r.jsxs)("div", {
          className: "success message",
          children: [
            Object(r.jsx)("div", {
              children: "Yay! The message has been sent",
            }),
            Object(r.jsx)("button", {
              className: "x clear",
              onClick: function () {
                return e.changeStatus(e.i);
              },
              children: Object(r.jsx)("i", { className: "fa fa-times" }),
            }),
          ],
        });
      }
      function Ke(e) {
        return Object(r.jsxs)("div", {
          className: "failure message",
          children: [
            Object(r.jsxs)("div", {
              children: [
                "Aww shucks, there was a hiccup in the send :( You can try again or email me at ",
                Object(r.jsx)("a", {
                  href: "mailto:ashley_e_chang@brown.edu",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: Object(r.jsxs)("span", {
                    children: [
                      "ashley_e_chang",
                      Object(r.jsx)("span", { children: "@" }),
                      "brown.edu",
                    ],
                  }),
                }),
                "!",
              ],
            }),
            Object(r.jsx)("button", {
              className: "x clear",
              onClick: function () {
                return e.changeStatus(e.i);
              },
              children: Object(r.jsx)("i", { className: "fa fa-times" }),
            }),
          ],
        });
      }
      function Xe(e) {
        return e ? "red" : "none";
      }
      function Ze(e) {
        var t;
        t = e.circle
          ? Object(r.jsxs)("div", {
              className: "sk-circle-fade",
              children: [
                Object(r.jsx)("div", { className: "sk-circle-fade-dot" }),
                Object(r.jsx)("div", { className: "sk-circle-fade-dot" }),
                Object(r.jsx)("div", { className: "sk-circle-fade-dot" }),
                Object(r.jsx)("div", { className: "sk-circle-fade-dot" }),
                Object(r.jsx)("div", { className: "sk-circle-fade-dot" }),
                Object(r.jsx)("div", { className: "sk-circle-fade-dot" }),
                Object(r.jsx)("div", { className: "sk-circle-fade-dot" }),
                Object(r.jsx)("div", { className: "sk-circle-fade-dot" }),
                Object(r.jsx)("div", { className: "sk-circle-fade-dot" }),
                Object(r.jsx)("div", { className: "sk-circle-fade-dot" }),
                Object(r.jsx)("div", { className: "sk-circle-fade-dot" }),
                Object(r.jsx)("div", { className: "sk-circle-fade-dot" }),
              ],
            })
          : Object(r.jsx)(r.Fragment, {});
        var o = n("LvDl")
          .range(e.statuses.length)
          .map(function (t) {
            return e.statuses[t]
              ? Object(r.jsx)(Ge, { i: t, changeStatus: e.changeStatus })
              : Object(r.jsx)(Ke, { i: t, changeStatus: e.changeStatus });
          });
        return Object(r.jsxs)(r.Fragment, {
          children: [
            Object(r.jsxs)("div", {
              className: "row",
              children: [
                Object(r.jsx)("label", { children: "Name*" }),
                Object(r.jsx)("input", {
                  className: Xe(e.nameError) + " form-field",
                  type: "text",
                  name: "name",
                  value: e.name,
                  onChange: e.nameChange,
                  onKeyPress: e.enterCheck,
                  required: !0,
                }),
                Object(r.jsxs)("div", {
                  className: "column",
                  children: [
                    Object(r.jsx)("label", { children: "Email*" }),
                    Object(r.jsx)("input", {
                      className: Xe(e.emailError) + " form-field",
                      type: "text",
                      name: "email",
                      value: e.email,
                      onChange: e.emailChange,
                      onKeyPress: e.enterCheck,
                      required: !0,
                    }),
                  ],
                }),
              ],
            }),
            Object(r.jsx)("label", { children: "Subject" }),
            Object(r.jsx)("input", {
              className: Xe(e.subjectError) + " form-field",
              type: "text",
              name: "subject",
              value: e.subject,
              onChange: e.subjectChange,
              onKeyPress: e.enterCheck,
            }),
            Object(r.jsx)("label", { children: "Message*" }),
            Object(r.jsx)("textarea", {
              className: Xe(e.messageError) + " form-field",
              name: "message",
              value: e.message,
              onChange: e.messageChange,
              onKeyPress: e.enterCheck,
              required: !0,
            }),
            Object(r.jsxs)("div", {
              className: "contact bottom row",
              children: [
                Object(r.jsxs)("div", {
                  className: "send",
                  children: [
                    Object(r.jsx)("button", {
                      className: "contact form-field",
                      type: "submit",
                      onClick: e.handleSubmit,
                      children: " Send",
                    }),
                    t,
                  ],
                }),
                Object(r.jsx)(Ve, {}),
              ],
            }),
            o,
          ],
        });
      }
      var $e = (function (e) {
          u(n, e);
          var t = Qe(n);
          function n(e) {
            var r;
            return (
              s(this, n),
              ((r = t.call(this, e)).state = {
                name: "",
                email: "",
                subject: "",
                message: "",
                nameError: !1,
                emailError: !1,
                subjectError: !1,
                messageError: !1,
                circle: !1,
                checked: !1,
                statuses: [],
              }),
              r
            );
          }
          return (
            l(n, [
              {
                key: "nameChange",
                value: function (e) {
                  var t = this.state.nameError;
                  this.state.checked &&
                    (t = !(
                      e.target.value.length > 0 && e.target.value.length < 600
                    )),
                    this.setState({ name: e.target.value, nameError: t });
                },
              },
              {
                key: "emailChange",
                value: function (e) {
                  var t = this.state.emailError;
                  this.state.checked &&
                    (t = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)),
                    this.setState({ email: e.target.value, emailError: t });
                },
              },
              {
                key: "subjectChange",
                value: function (e) {
                  var t = this.state.subjectError;
                  this.state.checked && (t = !(e.target.value.length < 998)),
                    this.setState({ subject: e.target.value, subjectError: t });
                },
              },
              {
                key: "messageChange",
                value: function (e) {
                  var t = this.state.messageError;
                  this.state.checked && (t = !(e.target.value.length > 0)),
                    this.setState({ message: e.target.value, messageError: t });
                },
              },
              { key: "enterCheck", value: function (e) {} },
              {
                key: "changeStatus",
                value: function (e) {
                  this.state.statuses.splice(e, 1),
                    this.setState({ statuses: this.state.statuses });
                },
              },
              {
                key: "validForm",
                value: function (e) {
                  var t = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email),
                    n = e.name.length > 0 && e.name.length < 600,
                    r = e.message.length > 0,
                    o = e.subject.length < 1e3;
                  return (
                    this.setState({
                      nameError: !n,
                      messageError: !r,
                      subjectError: !o,
                      emailError: !t,
                      checked: !0,
                    }),
                    t && n && r && o
                  );
                },
              },
              {
                key: "handleSubmit",
                value: (function () {
                  var e,
                    t =
                      ((e = He.a.mark(function e() {
                        var t = this;
                        return He.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  this.validForm(this.state) &&
                                    this.setState({ circle: !0 }, function () {
                                      fetch(
                                        "https://side-projects-one.server.ashley-chang.me/submit_personal_form",
                                        {
                                          mode: "cors",
                                          method: "POST",
                                          headers: {
                                            "Content-Type": "application/json",
                                          },
                                          body: JSON.stringify({
                                            name: t.state.name,
                                            email: t.state.email,
                                            subject: t.state.subject,
                                            message: t.state.message.replace(
                                              /\n/g,
                                              "<br>"
                                            ),
                                          }),
                                        }
                                      )
                                        .then(function (e) {
                                          return t.setState({
                                            statuses: [200 === e.status].concat(
                                              qe(t.state.statuses)
                                            ),
                                            circle: !1,
                                          });
                                        })
                                        .catch(function () {
                                          return t.setState({
                                            statuses: [!1].concat(
                                              qe(t.state.statuses)
                                            ),
                                            circle: !1,
                                          });
                                        });
                                    });
                                case 1:
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
                        return new Promise(function (r, o) {
                          var a = e.apply(t, n);
                          function s(e) {
                            Ye(a, r, o, s, i, "next", e);
                          }
                          function i(e) {
                            Ye(a, r, o, s, i, "throw", e);
                          }
                          s(void 0);
                        });
                      });
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "render",
                value: function () {
                  return Object(r.jsxs)(r.Fragment, {
                    children: [
                      Object(r.jsx)("div", {
                        className: "column",
                        style: { display: "flex", justifyContent: "center" },
                        children: Object(r.jsx)("h1", {
                          style: { marginBottom: "0rem" },
                          children: "Contact ",
                        }),
                      }),
                      Object(r.jsx)("div", {
                        className: "form row",
                        children: Object(r.jsx)("div", {
                          className: "contact form",
                          children: Object(r.jsx)(Ze, {
                            name: this.state.name,
                            email: this.state.email,
                            subject: this.state.subject,
                            message: this.state.message,
                            nameChange: this.nameChange.bind(this),
                            emailChange: this.emailChange.bind(this),
                            subjectChange: this.subjectChange.bind(this),
                            messageChange: this.messageChange.bind(this),
                            enterCheck: this.enterCheck.bind(this),
                            handleSubmit: this.handleSubmit.bind(this),
                            circle: this.state.circle,
                            statuses: this.state.statuses,
                            changeStatus: this.changeStatus.bind(this),
                            nameError: this.state.nameError,
                            emailError: this.state.emailError,
                            subjectError: this.state.subjectError,
                            messageError: this.state.messageError,
                          }),
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.a.Component),
        Je = (function (e) {
          u(n, e);
          var t = Qe(n);
          function n() {
            return s(this, n), t.apply(this, arguments);
          }
          return (
            l(n, [
              {
                key: "render",
                value: function () {
                  return Object(r.jsx)(g, {
                    id: "contact",
                    content: Object(r.jsx)($e, {}),
                  });
                },
              },
            ]),
            n
          );
        })(a.a.Component),
        et = n("mFT6");
      function tt(e) {
        var t = (function () {
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
          } catch (it) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = h(e);
          if (t) {
            var o = h(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return p(this, n);
        };
      }
      var nt = (function (e) {
        u(n, e);
        var t = tt(n);
        function n(e) {
          var r;
          return (
            s(this, n), ((r = t.call(this, e)).state = { menuOpen: !1 }), r
          );
        }
        return (
          l(n, [
            {
              key: "handleStateChange",
              value: function (e) {
                this.setState({ menuOpen: e.isOpen });
              },
            },
            {
              key: "closeMenu",
              value: function () {
                this.setState({ menuOpen: !1 });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this;
                return Object(r.jsxs)(et.slide, {
                  width: "220px",
                  isOpen: this.state.menuOpen,
                  onStateChange: function (t) {
                    return e.handleStateChange(t);
                  },
                  right: !0,
                  children: [
                    Object(r.jsx)("li", { className: "nav3 nav fa" }),
                    Object(r.jsxs)("li", {
                      className: "nav2",
                      children: [
                        " ",
                        Object(r.jsx)(m.Link, {
                          activeClass: "active",
                          to: "about",
                          spy: !0,
                          smooth: !0,
                          offset: 0,
                          duration: 300,
                          onClick: function () {
                            return e.closeMenu();
                          },
                          children: "About",
                        }),
                      ],
                    }),
                    Object(r.jsx)("li", {
                      className: "nav2",
                      children: Object(r.jsx)(m.Link, {
                        activeClass: "active",
                        to: "experiences",
                        spy: !0,
                        smooth: !0,
                        offset: -25,
                        duration: 300,
                        onClick: function () {
                          return e.closeMenu();
                        },
                        children: "Experiences",
                      }),
                    }),
                    Object(r.jsx)("li", {
                      className: "nav2",
                      children: Object(r.jsx)(m.Link, {
                        activeClass: "active",
                        to: "projects",
                        spy: !0,
                        smooth: !0,
                        offset: -25,
                        duration: 300,
                        onClick: function () {
                          return e.closeMenu();
                        },
                        children: "Projects",
                      }),
                    }),
                    Object(r.jsx)("li", {
                      className: "nav2",
                      children: Object(r.jsx)(m.Link, {
                        activeClass: "active",
                        to: "contact",
                        spy: !0,
                        smooth: !0,
                        offset: -25,
                        duration: 300,
                        onClick: function () {
                          return e.closeMenu();
                        },
                        children: "Contact",
                      }),
                    }),
                  ],
                });
              },
            },
          ]),
          n
        );
      })(a.a.Component);
      function rt(e) {
        var t = (function () {
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
          } catch (it) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = h(e);
          if (t) {
            var o = h(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return p(this, n);
        };
      }
      function ot(e) {
        return Object(r.jsxs)("h2", {
          className: "socials",
          children: [
            Object(r.jsx)("a", {
              className: "link",
              style: { paddingTop: 0 },
              href: "https://github.com/spswatron",
              target: "_blank",
              children: Object(r.jsx)("i", { className: "fa fa-github" }),
            }),
            Object(r.jsx)(m.Link, {
              activeClass: "active",
              to: "contact",
              spy: !0,
              smooth: !0,
              offset: -25,
              d: !0,
              uration: 50,
              children: Object(r.jsx)("i", { className: "fa fa-comment" }),
            }),
            Object(r.jsx)("a", {
              className: "link",
              children: Object(r.jsx)("i", { className: "fa fa-envelope" }),
            }),
            Object(r.jsx)("a", {
              className: "link",
              children: Object(r.jsx)("i", { className: "fa fa-linkedin" }),
            }),
            Object(r.jsx)("a", {
              className: "link",
              children: Object(r.jsx)("i", { className: "fa fa-file" }),
            }),
          ],
        });
      }
      var at = (function (e) {
        u(n, e);
        var t = rt(n);
        function n(e) {
          var r;
          return s(this, n), ((r = t.call(this, e)).state = { clicked: !1 }), r;
        }
        return (
          l(n, [
            {
              key: "handleClick",
              value: function () {
                this.setState({ clicked: !this.state.clicked });
              },
            },
            {
              key: "render",
              value: function () {
                var e;
                return (
                  (e = this.state.clicked
                    ? Object(r.jsx)(ot, {})
                    : Object(r.jsx)(r.Fragment, {})),
                  Object(r.jsxs)("div", {
                    className: "",
                    id: "new-home",
                    children: [
                      Object(r.jsx)("h1", {
                        className: "whiter",
                        children: "Hi, I'm Ashley",
                      }),
                      Object(r.jsxs)("div", {
                        className: "caption",
                        children: [
                          Object(r.jsxs)("h2", {
                            style: { fontWeight: "normal", margin: 0 },
                            children: [
                              "Welcome to my digital ",
                              Object(r.jsx)(m.Link, {
                                activeClass: "active",
                                to: "about",
                                spy: !0,
                                smooth: !0,
                                offset: -25,
                                duration: 50,
                                children: "home.",
                              }),
                            ],
                          }),
                          e,
                        ],
                      }),
                    ],
                  })
                );
              },
            },
          ]),
          n
        );
      })(a.a.Component);
      function st() {
        return Object(r.jsxs)("div", {
          className: "socials",
          style: { margin: 0 },
          children: [
            Object(r.jsx)("a", {
              className: "link",
              href: "https://github.com/spswatron",
              target: "_blank",
              rel: "noopener noreferrer",
              children: Object(r.jsx)("i", { className: "fa fa-github" }),
            }),
            Object(r.jsx)("a", {
              className: "link",
              href: "https://www.linkedin.com/in/ashley-e-chang",
              target: "_blank",
              rel: "noopener noreferrer",
              children: Object(r.jsx)("i", { className: "fa fa-linkedin" }),
            }),
            Object(r.jsx)("a", {
              className: "link",
              href: "mailto:ashley_e_chang@brown.edu",
              target: "_blank",
              rel: "noopener noreferrer",
              children: Object(r.jsx)("i", { className: "fa fa-envelope" }),
            }),
            Object(r.jsx)("a", {
              className: "link",
              href: "/Ashley_Chang_Resume.pdf",
              target: "_blank",
              rel: "noopener noreferrer",
              style: { paddingRight: 0 },
              children: Object(r.jsx)("i", { className: "fa fa-file" }),
            }),
          ],
        });
      }
      t.default = function () {
        return Object(r.jsxs)(r.Fragment, {
          children: [
            Object(r.jsx)(v, {}),
            Object(r.jsx)("div", { className: "top" }),
            Object(r.jsx)("div", {
              className: "nav fa",
              children: Object(r.jsx)(nt, {
                pageWrapId: "page-wrap",
                outerContainerId: "outer-container",
              }),
            }),
            Object(r.jsx)(at, {}),
            Object(r.jsx)(S, {}),
            Object(r.jsx)(he, {}),
            Object(r.jsx)(Be, {}),
            Object(r.jsx)(Je, {}),
            Object(r.jsxs)("div", {
              id: "footer",
              className: "row",
              children: [
                Object(r.jsx)("div", {
                  className: "big-foot",
                  children: Object(r.jsxs)("div", {
                    style: { display: "flex" },
                    id: "footer",
                    children: [
                      Object(r.jsx)(m.Link, {
                        activeClass: "active",
                        to: "new-home",
                        spy: !0,
                        smooth: !0,
                        offset: 0,
                        d: !0,
                        uration: 50,
                        children: Object(r.jsx)("p", {
                          style: { fontSize: "0.9rem", whiteSpace: "nowrap" },
                          children: "Ashley Chang",
                        }),
                      }),
                      Object(r.jsx)(st, {}),
                    ],
                  }),
                }),
                Object(r.jsxs)("p", {
                  style: { fontSize: "0.9rem", textAlign: "center" },
                  children: [
                    "\xa9 " + new Date().getFullYear().toString() + ", ",
                    "coded with with ",
                    Object(r.jsx)("i", {
                      style: { color: "mix(maroon, red)" },
                      className: "fa fa-heart heart",
                    }),
                    " and SASS",
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    S1to: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          var n = (0, a.default)(e);
          if (!n.length) return void t.preventDefault();
          var r = void 0,
            o = t.shiftKey,
            s = n[0],
            i = n[n.length - 1];
          if (e === document.activeElement) {
            if (!o) return;
            r = i;
          }
          i !== document.activeElement || o || (r = s);
          s === document.activeElement && o && (r = i);
          if (r) return t.preventDefault(), void r.focus();
          var l = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
          if (
            null == l ||
            "Chrome" == l[1] ||
            null != /\biPod\b|\biPad\b/g.exec(navigator.userAgent)
          )
            return;
          var c = n.indexOf(document.activeElement);
          c > -1 && (c += o ? -1 : 1);
          if ("undefined" === typeof (r = n[c]))
            return t.preventDefault(), void (r = o ? i : s).focus();
          t.preventDefault(), r.focus();
        });
      var r,
        o = n("ZDLa"),
        a = (r = o) && r.__esModule ? r : { default: r };
      e.exports = t.default;
    },
    TTcj: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o = n("vH+l"),
        a = (r = o) && r.__esModule ? r : { default: r };
      (t.default = (0, a.default)({})), (e.exports = t.default);
    },
    UIKY: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = new (function e() {
        var t = this;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.register = function (e) {
            -1 === t.openInstances.indexOf(e) &&
              (t.openInstances.push(e), t.emit("register"));
          }),
          (this.deregister = function (e) {
            var n = t.openInstances.indexOf(e);
            -1 !== n && (t.openInstances.splice(n, 1), t.emit("deregister"));
          }),
          (this.subscribe = function (e) {
            t.subscribers.push(e);
          }),
          (this.emit = function (e) {
            t.subscribers.forEach(function (n) {
              return n(e, t.openInstances.slice());
            });
          }),
          (this.openInstances = []),
          (this.subscribers = []);
      })();
      (t.default = r), (e.exports = t.default);
    },
    UWYU: function (e, t, n) {
      "use strict";
      (t.__esModule = !0), (t.imageConfigDefault = t.VALID_LOADERS = void 0);
      t.VALID_LOADERS = ["default", "imgix", "cloudinary", "akamai"];
      t.imageConfigDefault = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        domains: [],
      };
    },
    UvMI: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = function (e, t, n) {
          for (var r = !0; r; ) {
            var o = e,
              a = t,
              s = n;
            (r = !1), null === o && (o = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(o, a);
            if (void 0 !== i) {
              if ("value" in i) return i.value;
              var l = i.get;
              if (void 0 === l) return;
              return l.call(s);
            }
            var c = Object.getPrototypeOf(o);
            if (null === c) return;
            (e = c), (t = a), (n = s), (r = !0), (i = c = void 0);
          }
        };
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      var l = n("q1tI"),
        c = s(l),
        u = s(n("17x9")),
        d = (function (e) {
          function t() {
            i(this, t),
              a(Object.getPrototypeOf(t.prototype), "constructor", this).apply(
                this,
                arguments
              );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            o(t, [
              {
                key: "getCrossStyle",
                value: function (e) {
                  return {
                    position: "absolute",
                    width: 3,
                    height: 14,
                    transform:
                      "before" === e ? "rotate(45deg)" : "rotate(-45deg)",
                  };
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t = this;
                  if (this.props.customIcon) {
                    var n = {
                      className: (
                        "bm-cross " +
                        (this.props.customIcon.props.className || "")
                      ).trim(),
                      style: r(
                        { width: "100%", height: "100%" },
                        this.props.styles.bmCross
                      ),
                    };
                    e = c.default.cloneElement(this.props.customIcon, n);
                  } else
                    e = c.default.createElement(
                      "span",
                      {
                        style: {
                          position: "absolute",
                          top: "6px",
                          right: "14px",
                        },
                      },
                      ["before", "after"].map(function (e, n) {
                        return c.default.createElement("span", {
                          key: n,
                          className: (
                            "bm-cross " + t.props.crossClassName
                          ).trim(),
                          style: r(
                            {},
                            t.getCrossStyle(e),
                            t.props.styles.bmCross
                          ),
                        });
                      })
                    );
                  return c.default.createElement(
                    "div",
                    {
                      className: (
                        "bm-cross-button " + this.props.className
                      ).trim(),
                      style: r(
                        {},
                        {
                          position: "absolute",
                          width: 24,
                          height: 24,
                          right: 8,
                          top: 8,
                        },
                        this.props.styles.bmCrossButton
                      ),
                    },
                    c.default.createElement(
                      "button",
                      {
                        id: "react-burger-cross-btn",
                        onClick: this.props.onClick,
                        style: {
                          position: "absolute",
                          left: 0,
                          top: 0,
                          zIndex: 1,
                          width: "100%",
                          height: "100%",
                          margin: 0,
                          padding: 0,
                          border: "none",
                          fontSize: 0,
                          background: "transparent",
                          cursor: "pointer",
                        },
                        tabIndex: this.props.isOpen ? 0 : -1,
                      },
                      "Close Menu"
                    ),
                    e
                  );
                },
              },
            ]),
            t
          );
        })(l.Component);
      (t.default = d),
        (d.propTypes = {
          crossClassName: u.default.string,
          customIcon: u.default.element,
          isOpen: u.default.bool,
          styles: u.default.object,
        }),
        (d.defaultProps = {
          crossClassName: "",
          className: "",
          styles: {},
          isOpen: !1,
        }),
        (e.exports = t.default);
    },
    VCL8: function (e, t, n) {
      "use strict";
      function r() {
        var e = this.constructor.getDerivedStateFromProps(
          this.props,
          this.state
        );
        null !== e && void 0 !== e && this.setState(e);
      }
      function o(e) {
        this.setState(
          function (t) {
            var n = this.constructor.getDerivedStateFromProps(e, t);
            return null !== n && void 0 !== n ? n : null;
          }.bind(this)
        );
      }
      function a(e, t) {
        try {
          var n = this.props,
            r = this.state;
          (this.props = e),
            (this.state = t),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r));
        } finally {
          (this.props = n), (this.state = r);
        }
      }
      function s(e) {
        var t = e.prototype;
        if (!t || !t.isReactComponent)
          throw new Error("Can only polyfill class components");
        if (
          "function" !== typeof e.getDerivedStateFromProps &&
          "function" !== typeof t.getSnapshotBeforeUpdate
        )
          return e;
        var n = null,
          s = null,
          i = null;
        if (
          ("function" === typeof t.componentWillMount
            ? (n = "componentWillMount")
            : "function" === typeof t.UNSAFE_componentWillMount &&
              (n = "UNSAFE_componentWillMount"),
          "function" === typeof t.componentWillReceiveProps
            ? (s = "componentWillReceiveProps")
            : "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              (s = "UNSAFE_componentWillReceiveProps"),
          "function" === typeof t.componentWillUpdate
            ? (i = "componentWillUpdate")
            : "function" === typeof t.UNSAFE_componentWillUpdate &&
              (i = "UNSAFE_componentWillUpdate"),
          null !== n || null !== s || null !== i)
        ) {
          var l = e.displayName || e.name,
            c =
              "function" === typeof e.getDerivedStateFromProps
                ? "getDerivedStateFromProps()"
                : "getSnapshotBeforeUpdate()";
          throw Error(
            "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" +
              l +
              " uses " +
              c +
              " but also contains the following legacy lifecycles:" +
              (null !== n ? "\n  " + n : "") +
              (null !== s ? "\n  " + s : "") +
              (null !== i ? "\n  " + i : "") +
              "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks"
          );
        }
        if (
          ("function" === typeof e.getDerivedStateFromProps &&
            ((t.componentWillMount = r), (t.componentWillReceiveProps = o)),
          "function" === typeof t.getSnapshotBeforeUpdate)
        ) {
          if ("function" !== typeof t.componentDidUpdate)
            throw new Error(
              "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
            );
          t.componentWillUpdate = a;
          var u = t.componentDidUpdate;
          t.componentDidUpdate = function (e, t, n) {
            var r = this.__reactInternalSnapshotFlag
              ? this.__reactInternalSnapshot
              : n;
            u.call(this, e, t, r);
          };
        }
        return e;
      }
      n.r(t),
        n.d(t, "polyfill", function () {
          return s;
        }),
        (r.__suppressDeprecationWarning = !0),
        (o.__suppressDeprecationWarning = !0),
        (a.__suppressDeprecationWarning = !0);
    },
    VKEO: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.handleBlur = c),
        (t.handleFocus = u),
        (t.markForFocusLater = function () {
          s.push(document.activeElement);
        }),
        (t.returnFocus = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = null;
          try {
            return void (
              0 !== s.length && (t = s.pop()).focus({ preventScroll: e })
            );
          } catch (n) {
            console.warn(
              [
                "You tried to return focus to",
                t,
                "but it is not in the DOM anymore",
              ].join(" ")
            );
          }
        }),
        (t.popWithoutFocus = function () {
          s.length > 0 && s.pop();
        }),
        (t.setupScopedFocus = function (e) {
          (i = e),
            window.addEventListener
              ? (window.addEventListener("blur", c, !1),
                document.addEventListener("focus", u, !0))
              : (window.attachEvent("onBlur", c),
                document.attachEvent("onFocus", u));
        }),
        (t.teardownScopedFocus = function () {
          (i = null),
            window.addEventListener
              ? (window.removeEventListener("blur", c),
                document.removeEventListener("focus", u))
              : (window.detachEvent("onBlur", c),
                document.detachEvent("onFocus", u));
        });
      var r,
        o = n("ZDLa"),
        a = (r = o) && r.__esModule ? r : { default: r };
      var s = [],
        i = null,
        l = !1;
      function c() {
        l = !0;
      }
      function u() {
        if (l) {
          if (((l = !1), !i)) return;
          setTimeout(function () {
            i.contains(document.activeElement) ||
              ((0, a.default)(i)[0] || i).focus();
          }, 0);
        }
      }
    },
    "W/CG": function (e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n("qSPm")),
        a = r(n("vH+l")),
        s = n("sPdn"),
        i = {
          svg: {
            lib: o.default,
            pathInitial:
              "M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z",
            pathOpen:
              "M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z",
            animate: function (e) {
              var t = 0,
                n = this.pathOpen.split(";"),
                r = n.length,
                o = window.mina;
              !(function a() {
                t > r - 1 ||
                  (e.animate(
                    { path: n[t] },
                    0 === t ? 400 : 500,
                    0 === t ? o.easein : o.elastic,
                    function () {
                      a();
                    }
                  ),
                  t++);
              })();
            },
          },
          morphShape: function (e, t, n) {
            return {
              position: "absolute",
              width: "100%",
              height: "100%",
              right: n ? "inherit" : 0,
              left: n ? 0 : "inherit",
              MozTransform: n ? "rotateY(180deg)" : "rotateY(0deg)",
              MsTransform: n ? "rotateY(180deg)" : "rotateY(0deg)",
              OTransform: n ? "rotateY(180deg)" : "rotateY(0deg)",
              WebkitTransform: n ? "rotateY(180deg)" : "rotateY(0deg)",
              transform: n ? "rotateY(180deg)" : "rotateY(0deg)",
            };
          },
          menuWrap: function (e, t, n) {
            return {
              MozTransform: e
                ? "translate3d(0, 0, 0)"
                : n
                ? "translate3d(100%, 0, 0)"
                : "translate3d(-100%, 0, 0)",
              MsTransform: e
                ? "translate3d(0, 0, 0)"
                : n
                ? "translate3d(100%, 0, 0)"
                : "translate3d(-100%, 0, 0)",
              OTransform: e
                ? "translate3d(0, 0, 0)"
                : n
                ? "translate3d(100%, 0, 0)"
                : "translate3d(-100%, 0, 0)",
              WebkitTransform: e
                ? "translate3d(0, 0, 0)"
                : n
                ? "translate3d(100%, 0, 0)"
                : "translate3d(-100%, 0, 0)",
              transform: e
                ? "translate3d(0, 0, 0)"
                : n
                ? "translate3d(100%, 0, 0)"
                : "translate3d(-100%, 0, 0)",
              transition: e ? "transform 0.4s 0s" : "transform 0.4s",
            };
          },
          menu: function (e, t, n) {
            var r = (0, s.pxToNum)(t) - 140;
            return {
              position: "fixed",
              MozTransform: e
                ? ""
                : n
                ? "translate3d(" + r + ", 0, 0)"
                : "translate3d(-" + r + ", 0, 0)",
              MsTransform: e
                ? ""
                : n
                ? "translate3d(" + r + ", 0, 0)"
                : "translate3d(-" + r + ", 0, 0)",
              OTransform: e
                ? ""
                : n
                ? "translate3d(" + r + ", 0, 0)"
                : "translate3d(-" + r + ", 0, 0)",
              WebkitTransform: e
                ? ""
                : n
                ? "translate3d(" + r + ", 0, 0)"
                : "translate3d(-" + r + ", 0, 0)",
              transform: e
                ? ""
                : n
                ? "translate3d(" + r + ", 0, 0)"
                : "translate3d(-" + r + ", 0, 0)",
              transition: e
                ? "opacity 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27)"
                : "opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)",
              opacity: e ? 1 : 0,
            };
          },
          item: function (e, t, n, r) {
            var o = (0, s.pxToNum)(t) - 140;
            return {
              MozTransform: e
                ? "translate3d(0, 0, 0)"
                : n
                ? "translate3d(" + o + ", 0, 0)"
                : "translate3d(-" + o + ", 0, 0)",
              MsTransform: e
                ? "translate3d(0, 0, 0)"
                : n
                ? "translate3d(" + o + ", 0, 0)"
                : "translate3d(-" + o + ", 0, 0)",
              OTransform: e
                ? "translate3d(0, 0, 0)"
                : n
                ? "translate3d(" + o + ", 0, 0)"
                : "translate3d(-" + o + ", 0, 0)",
              WebkitTransform: e
                ? "translate3d(0, 0, 0)"
                : n
                ? "translate3d(" + o + ", 0, 0)"
                : "translate3d(-" + o + ", 0, 0)",
              transform: e
                ? "translate3d(0, 0, 0)"
                : n
                ? "translate3d(" + o + ", 0, 0)"
                : "translate3d(-" + o + ", 0, 0)",
              transition: e
                ? "opacity 0.3s 0.4s, transform 0.3s 0.4s"
                : "opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)",
              opacity: e ? 1 : 0,
            };
          },
          closeButton: function (e, t, n) {
            var r = (0, s.pxToNum)(t) - 140;
            return {
              MozTransform: e
                ? "translate3d(0, 0, 0)"
                : n
                ? "translate3d(" + r + ", 0, 0)"
                : "translate3d(-" + r + ", 0, 0)",
              MsTransform: e
                ? "translate3d(0, 0, 0)"
                : n
                ? "translate3d(" + r + ", 0, 0)"
                : "translate3d(-" + r + ", 0, 0)",
              OTransform: e
                ? "translate3d(0, 0, 0)"
                : n
                ? "translate3d(" + r + ", 0, 0)"
                : "translate3d(-" + r + ", 0, 0)",
              WebkitTransform: e
                ? "translate3d(0, 0, 0)"
                : n
                ? "translate3d(" + r + ", 0, 0)"
                : "translate3d(-" + r + ", 0, 0)",
              transform: e
                ? "translate3d(0, 0, 0)"
                : n
                ? "translate3d(" + r + ", 0, 0)"
                : "translate3d(-" + r + ", 0, 0)",
              transition: e
                ? "opacity 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27)"
                : "opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)",
              opacity: e ? 1 : 0,
            };
          },
        };
      (t.default = (0, a.default)(i)), (e.exports = t.default);
    },
    WkvU: function (e, t, n) {
      "use strict";
      var r,
        o = n("UIKY"),
        a = (r = o) && r.__esModule ? r : { default: r };
      var s = void 0,
        i = void 0,
        l = [];
      function c() {
        0 !== l.length && l[l.length - 1].focusContent();
      }
      a.default.subscribe(function (e, t) {
        (s && i) ||
          ((s = document.createElement("div")).setAttribute(
            "data-react-modal-body-trap",
            ""
          ),
          (s.style.position = "absolute"),
          (s.style.opacity = "0"),
          s.setAttribute("tabindex", "0"),
          s.addEventListener("focus", c),
          (i = s.cloneNode()).addEventListener("focus", c)),
          (l = t).length > 0
            ? (document.body.firstChild !== s &&
                document.body.insertBefore(s, document.body.firstChild),
              document.body.lastChild !== i && document.body.appendChild(i))
            : (s.parentElement && s.parentElement.removeChild(s),
              i.parentElement && i.parentElement.removeChild(i));
      });
    },
    Y30y: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = l(n("q1tI")),
        s = l(n("w2Tm")),
        i = l(n("17x9"));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function u(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" !== typeof t && "function" !== typeof t) ? e : t;
      }
      var d = (function (e) {
        function t() {
          return (
            c(this, t),
            u(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          (function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          o(t, [
            {
              key: "render",
              value: function () {
                var e = this,
                  t = r({}, this.props);
                return (
                  t.parentBindings && delete t.parentBindings,
                  a.default.createElement(
                    "div",
                    r({}, t, {
                      ref: function (t) {
                        e.props.parentBindings.domNode = t;
                      },
                    }),
                    this.props.children
                  )
                );
              },
            },
          ]),
          t
        );
      })(a.default.Component);
      (d.propTypes = { name: i.default.string, id: i.default.string }),
        (t.default = (0, s.default)(d));
    },
    Ye7m: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.assertNodeList = l),
        (t.setElement = function (e) {
          var t = e;
          if ("string" === typeof t && s.canUseDOM) {
            var n = document.querySelectorAll(t);
            l(n, t), (t = "length" in n ? n[0] : n);
          }
          return (i = t || i);
        }),
        (t.validateElement = c),
        (t.hide = function (e) {
          c(e) && (e || i).setAttribute("aria-hidden", "true");
        }),
        (t.show = function (e) {
          c(e) && (e || i).removeAttribute("aria-hidden");
        }),
        (t.documentNotReadyOrSSRTesting = function () {
          i = null;
        }),
        (t.resetForTesting = function () {
          i = null;
        });
      var r,
        o = n("2W6z"),
        a = (r = o) && r.__esModule ? r : { default: r },
        s = n("2zs7");
      var i = null;
      function l(e, t) {
        if (!e || !e.length)
          throw new Error(
            "react-modal: No elements were found for selector " + t + "."
          );
      }
      function c(e) {
        return (
          !(!e && !i) ||
          ((0, a.default)(
            !1,
            [
              "react-modal: App element is not defined.",
              "Please use `Modal.setAppElement(el)` or set `appElement={el}`.",
              "This is needed so screen readers don't see main content",
              "when modal is opened. It is not recommended, but you can opt-out",
              "by setting `ariaHideApp={false}`.",
            ].join(" ")
          ),
          !1)
        );
      }
    },
    YuTi: function (e, t) {
      e.exports = function (e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function () {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
              enumerable: !0,
              get: function () {
                return e.l;
              },
            }),
            Object.defineProperty(e, "id", {
              enumerable: !0,
              get: function () {
                return e.i;
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    ZDLa: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return [].slice.call(e.querySelectorAll("*"), 0).filter(s);
        });
      var r = /input|select|textarea|button|object/;
      function o(e) {
        var t = e.offsetWidth <= 0 && e.offsetHeight <= 0;
        if (t && !e.innerHTML) return !0;
        var n = window.getComputedStyle(e);
        return t
          ? "visible" !== n.getPropertyValue("overflow") ||
              (e.scrollWidth <= 0 && e.scrollHeight <= 0)
          : "none" == n.getPropertyValue("display");
      }
      function a(e, t) {
        var n = e.nodeName.toLowerCase();
        return (
          ((r.test(n) && !e.disabled) || ("a" === n && e.href) || t) &&
          (function (e) {
            for (var t = e; t && t !== document.body; ) {
              if (o(t)) return !1;
              t = t.parentNode;
            }
            return !0;
          })(e)
        );
      }
      function s(e) {
        var t = e.getAttribute("tabindex");
        null === t && (t = void 0);
        var n = isNaN(t);
        return (n || t >= 0) && a(e, !n);
      }
      e.exports = t.default;
    },
    cO3x: function (e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n("qSPm")),
        a = r(n("vH+l")),
        s = n("sPdn"),
        i = {
          svg: {
            lib: o.default,
            pathInitial:
              "M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z",
            pathOpen: "M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z",
            animate: function (e) {
              e.animate({ path: this.pathOpen }, 400, window.mina.easeinout);
            },
          },
          morphShape: function (e, t, n) {
            return {
              position: "absolute",
              width: 120,
              height: "100%",
              right: n ? "inherit" : 0,
              left: n ? 0 : "inherit",
              MozTransform: n ? "rotateY(180deg)" : "",
              MsTransform: n ? "rotateY(180deg)" : "",
              OTransform: n ? "rotateY(180deg)" : "",
              WebkitTransform: n ? "rotateY(180deg)" : "",
              transform: n ? "rotateY(180deg)" : "",
            };
          },
          menuWrap: function (e, t, n) {
            return {
              MozTransform: e
                ? "translate3d(0, 0, 0)"
                : n
                ? "translate3d(100%, 0, 0)"
                : "translate3d(-100%, 0, 0)",
              MsTransform: e
                ? "translate3d(0, 0, 0)"
                : n
                ? "translate3d(100%, 0, 0)"
                : "translate3d(-100%, 0, 0)",
              OTransform: e
                ? "translate3d(0, 0, 0)"
                : n
                ? "translate3d(100%, 0, 0)"
                : "translate3d(-100%, 0, 0)",
              WebkitTransform: e
                ? "translate3d(0, 0, 0)"
                : n
                ? "translate3d(100%, 0, 0)"
                : "translate3d(-100%, 0, 0)",
              transform: e
                ? "translate3d(0, 0, 0)"
                : n
                ? "translate3d(100%, 0, 0)"
                : "translate3d(-100%, 0, 0)",
              transition: "all 0.3s",
            };
          },
          menu: function (e, t, n) {
            return {
              position: "fixed",
              right: n ? 0 : "inherit",
              width: (0, s.pxToNum)(t) - 120,
              whiteSpace: "nowrap",
              boxSizing: "border-box",
              overflow: "visible",
            };
          },
          itemList: function (e, t, n) {
            if (n)
              return {
                position: "relative",
                left: "-110px",
                width: "170%",
                overflow: "auto",
              };
          },
          pageWrap: function (e, t, n) {
            return {
              MozTransform: e
                ? ""
                : n
                ? "translate3d(-100px, 0, 0)"
                : "translate3d(100px, 0, 0)",
              MsTransform: e
                ? ""
                : n
                ? "translate3d(-100px, 0, 0)"
                : "translate3d(100px, 0, 0)",
              OTransform: e
                ? ""
                : n
                ? "translate3d(-100px, 0, 0)"
                : "translate3d(100px, 0, 0)",
              WebkitTransform: e
                ? ""
                : n
                ? "translate3d(-100px, 0, 0)"
                : "translate3d(100px, 0, 0)",
              transform: e
                ? ""
                : n
                ? "translate3d(-100px, 0, 0)"
                : "translate3d(100px, 0, 0)",
              transition: e ? "all 0.3s" : "all 0.3s 0.1s",
            };
          },
          outerContainer: function (e) {
            return { overflow: e ? "" : "hidden" };
          },
        };
      (t.default = (0, a.default)(i)), (e.exports = t.default);
    },
    dEHY: function (e, t, n) {
      "use strict";
      (t.__esModule = !0),
        (t.toBase64 = function (e) {
          return window.btoa(e);
        });
    },
    dQHF: function (e, t, n) {
      "use strict";
      var r = n("J4zp"),
        o = n("RIqP"),
        a = n("TqRt");
      (t.__esModule = !0),
        (t.default = function (e) {
          var t = e.src,
            n = e.sizes,
            a = e.unoptimized,
            i = void 0 !== a && a,
            u = e.priority,
            f = void 0 !== u && u,
            p = e.loading,
            m = e.className,
            b = e.quality,
            v = e.width,
            O = e.height,
            x = e.objectFit,
            w = e.objectPosition,
            C = (0, s.default)(e, [
              "src",
              "sizes",
              "unoptimized",
              "priority",
              "loading",
              "className",
              "quality",
              "width",
              "height",
              "objectFit",
              "objectPosition",
            ]),
            k = n ? "responsive" : "intrinsic",
            S = !1;
          "unsized" in C
            ? ((S = Boolean(C.unsized)), delete C.unsized)
            : "layout" in C && (C.layout && (k = C.layout), delete C.layout);
          0;
          var N = !f && ("lazy" === p || "undefined" === typeof p);
          t && t.startsWith("data:") && ((i = !0), (N = !1));
          var _,
            T,
            E,
            M = (0, d.useIntersection)({ rootMargin: "200px", disabled: !N }),
            P = r(M, 2),
            I = P[0],
            A = P[1],
            R = !N || A,
            F = j(v),
            D = j(O),
            L = j(b),
            z = {
              visibility: R ? "visible" : "hidden",
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              boxSizing: "border-box",
              padding: 0,
              border: "none",
              margin: "auto",
              display: "block",
              width: 0,
              height: 0,
              minWidth: "100%",
              maxWidth: "100%",
              minHeight: "100%",
              maxHeight: "100%",
              objectFit: x,
              objectPosition: w,
            };
          if (
            "undefined" !== typeof F &&
            "undefined" !== typeof D &&
            "fill" !== k
          ) {
            var B = D / F,
              W = isNaN(B) ? "100%" : "".concat(100 * B, "%");
            "responsive" === k
              ? ((_ = {
                  display: "block",
                  overflow: "hidden",
                  position: "relative",
                  boxSizing: "border-box",
                  margin: 0,
                }),
                (T = {
                  display: "block",
                  boxSizing: "border-box",
                  paddingTop: W,
                }))
              : "intrinsic" === k
              ? ((_ = {
                  display: "inline-block",
                  maxWidth: "100%",
                  overflow: "hidden",
                  position: "relative",
                  boxSizing: "border-box",
                  margin: 0,
                }),
                (T = {
                  boxSizing: "border-box",
                  display: "block",
                  maxWidth: "100%",
                }),
                (E = '<svg width="'
                  .concat(F, '" height="')
                  .concat(
                    D,
                    '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>'
                  )))
              : "fixed" === k &&
                (_ = {
                  overflow: "hidden",
                  boxSizing: "border-box",
                  display: "inline-block",
                  position: "relative",
                  width: F,
                  height: D,
                });
          } else
            "undefined" === typeof F &&
              "undefined" === typeof D &&
              "fill" === k &&
              (_ = {
                display: "block",
                overflow: "hidden",
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                boxSizing: "border-box",
                margin: 0,
              });
          var H = {
            src:
              "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
          };
          R &&
            (H = (function (e) {
              var t = e.src,
                n = e.unoptimized,
                r = e.layout,
                a = e.width,
                s = e.quality,
                i = e.sizes;
              if (n) return { src: t };
              var l = (function (e, t) {
                  if (
                    "number" !== typeof e ||
                    "fill" === t ||
                    "responsive" === t
                  )
                    return { widths: h, kind: "w" };
                  return {
                    widths: o(
                      new Set(
                        [e, 2 * e, 3 * e].map(function (e) {
                          return (
                            y.find(function (t) {
                              return t >= e;
                            }) || y[y.length - 1]
                          );
                        })
                      )
                    ),
                    kind: "x",
                  };
                })(a, r),
                c = l.widths,
                u = l.kind,
                d = c.length - 1,
                f = c
                  .map(function (e, n) {
                    return ""
                      .concat(g({ src: t, quality: s, width: e }), " ")
                      .concat("w" === u ? e : n + 1)
                      .concat(u);
                  })
                  .join(", ");
              i || "w" !== u || (i = "100vw");
              return {
                src: (t = g({ src: t, quality: s, width: c[d] })),
                sizes: i,
                srcSet: f,
              };
            })({
              src: t,
              unoptimized: i,
              layout: k,
              width: F,
              quality: L,
              sizes: n,
            }));
          S && ((_ = void 0), (T = void 0), (z = void 0));
          return l.default.createElement(
            "div",
            { style: _ },
            T
              ? l.default.createElement(
                  "div",
                  { style: T },
                  E
                    ? l.default.createElement("img", {
                        style: { maxWidth: "100%", display: "block" },
                        alt: "",
                        "aria-hidden": !0,
                        role: "presentation",
                        src: "data:image/svg+xml;base64,".concat(
                          (0, c.toBase64)(E)
                        ),
                      })
                    : null
                )
              : null,
            l.default.createElement(
              "img",
              Object.assign({}, C, H, {
                decoding: "async",
                className: m,
                ref: I,
                style: z,
              })
            )
          );
        });
      var s = a(n("8OQS")),
        i = a(n("pVnL")),
        l = a(n("q1tI")),
        c = n("dEHY"),
        u = n("UWYU"),
        d = n("vNVm");
      var f = new Map([
          [
            "imgix",
            function (e) {
              var t = e.root,
                n = e.src,
                r = e.width,
                o = e.quality,
                a = ["auto=format", "fit=max", "w=" + r],
                s = "";
              o && a.push("q=" + o);
              a.length && (s = "?" + a.join("&"));
              return "".concat(t).concat(O(n)).concat(s);
            },
          ],
          [
            "cloudinary",
            function (e) {
              var t = e.root,
                n = e.src,
                r = e.width,
                o = e.quality,
                a =
                  ["f_auto", "c_limit", "w_" + r, "q_" + (o || "auto")].join(
                    ","
                  ) + "/";
              return "".concat(t).concat(a).concat(O(n));
            },
          ],
          [
            "akamai",
            function (e) {
              var t = e.root,
                n = e.src,
                r = e.width;
              return "".concat(t).concat(O(n), "?imwidth=").concat(r);
            },
          ],
          [
            "default",
            function (e) {
              var t = e.root,
                n = e.src,
                r = e.width,
                o = e.quality;
              0;
              return ""
                .concat(t, "?url=")
                .concat(encodeURIComponent(n), "&w=")
                .concat(r, "&q=")
                .concat(o || 75);
            },
          ],
        ]),
        p =
          {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
          } || u.imageConfigDefault,
        h = p.deviceSizes,
        m = p.imageSizes,
        b = p.loader,
        v = p.path,
        y = (p.domains, [].concat(o(h), o(m)));
      function g(e) {
        var t = f.get(b);
        if (t) return t((0, i.default)({ root: v }, e));
        throw new Error(
          'Unknown "loader" found in "next.config.js". Expected: '
            .concat(u.VALID_LOADERS.join(", "), ". Received: ")
            .concat(b)
        );
      }
      function j(e) {
        return "number" === typeof e
          ? e
          : "string" === typeof e
          ? parseInt(e, 10)
          : void 0;
      }
      function O(e) {
        return "/" === e[0] ? e.slice(1) : e;
      }
      h.sort(function (e, t) {
        return e - t;
      }),
        y.sort(function (e, t) {
          return e - t;
        });
    },
    fbhf: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.dumpClassLists = function () {
          0;
        });
      var r = {},
        o = {};
      (t.add = function (e, t) {
        return (
          (n = e.classList),
          (a = "html" == e.nodeName.toLowerCase() ? r : o),
          void t.split(" ").forEach(function (e) {
            !(function (e, t) {
              e[t] || (e[t] = 0), (e[t] += 1);
            })(a, e),
              n.add(e);
          })
        );
        var n, a;
      }),
        (t.remove = function (e, t) {
          return (
            (n = e.classList),
            (a = "html" == e.nodeName.toLowerCase() ? r : o),
            void t.split(" ").forEach(function (e) {
              !(function (e, t) {
                e[t] && (e[t] -= 1);
              })(a, e),
                0 === a[e] && n.remove(e);
            })
          );
          var n, a;
        });
    },
    gTop: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o = n("vH+l"),
        a = (r = o) && r.__esModule ? r : { default: r };
      (t.default = (0, a.default)({
        pageWrap: function (e, t, n) {
          return {
            MozTransform: e
              ? ""
              : n
              ? "translate3d(-100px, 0, -600px) rotateY(20deg)"
              : "translate3d(100px, 0, -600px) rotateY(-20deg)",
            MsTransform: e
              ? ""
              : n
              ? "translate3d(-100px, 0, -600px) rotateY(20deg)"
              : "translate3d(100px, 0, -600px) rotateY(-20deg)",
            OTransform: e
              ? ""
              : n
              ? "translate3d(-100px, 0, -600px) rotateY(20deg)"
              : "translate3d(100px, 0, -600px) rotateY(-20deg)",
            WebkitTransform: e
              ? ""
              : n
              ? "translate3d(-100px, 0, -600px) rotateY(20deg)"
              : "translate3d(100px, 0, -600px) rotateY(-20deg)",
            transform: e
              ? ""
              : n
              ? "translate3d(-100px, 0, -600px) rotateY(20deg)"
              : "translate3d(100px, 0, -600px) rotateY(-20deg)",
            transformStyle: "preserve-3d",
            transition: "all 0.5s",
            overflow: e ? "" : "hidden",
          };
        },
        outerContainer: function (e) {
          return { perspective: "1500px", overflow: e ? "" : "hidden" };
        },
      })),
        (e.exports = t.default);
    },
    "hKI/": function (e, t, n) {
      (function (t) {
        var n = "Expected a function",
          r = /^\s+|\s+$/g,
          o = /^[-+]0x[0-9a-f]+$/i,
          a = /^0b[01]+$/i,
          s = /^0o[0-7]+$/i,
          i = parseInt,
          l = "object" == typeof t && t && t.Object === Object && t,
          c = "object" == typeof self && self && self.Object === Object && self,
          u = l || c || Function("return this")(),
          d = Object.prototype.toString,
          f = Math.max,
          p = Math.min,
          h = function () {
            return u.Date.now();
          };
        function m(e, t, r) {
          var o,
            a,
            s,
            i,
            l,
            c,
            u = 0,
            d = !1,
            m = !1,
            y = !0;
          if ("function" != typeof e) throw new TypeError(n);
          function g(t) {
            var n = o,
              r = a;
            return (o = a = void 0), (u = t), (i = e.apply(r, n));
          }
          function j(e) {
            return (u = e), (l = setTimeout(x, t)), d ? g(e) : i;
          }
          function O(e) {
            var n = e - c;
            return void 0 === c || n >= t || n < 0 || (m && e - u >= s);
          }
          function x() {
            var e = h();
            if (O(e)) return w(e);
            l = setTimeout(
              x,
              (function (e) {
                var n = t - (e - c);
                return m ? p(n, s - (e - u)) : n;
              })(e)
            );
          }
          function w(e) {
            return (l = void 0), y && o ? g(e) : ((o = a = void 0), i);
          }
          function C() {
            var e = h(),
              n = O(e);
            if (((o = arguments), (a = this), (c = e), n)) {
              if (void 0 === l) return j(c);
              if (m) return (l = setTimeout(x, t)), g(c);
            }
            return void 0 === l && (l = setTimeout(x, t)), i;
          }
          return (
            (t = v(t) || 0),
            b(r) &&
              ((d = !!r.leading),
              (s = (m = "maxWait" in r) ? f(v(r.maxWait) || 0, t) : s),
              (y = "trailing" in r ? !!r.trailing : y)),
            (C.cancel = function () {
              void 0 !== l && clearTimeout(l),
                (u = 0),
                (o = c = a = l = void 0);
            }),
            (C.flush = function () {
              return void 0 === l ? i : w(h());
            }),
            C
          );
        }
        function b(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function v(e) {
          if ("number" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  "[object Symbol]" == d.call(e))
              );
            })(e)
          )
            return NaN;
          if (b(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = b(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(r, "");
          var n = a.test(e);
          return n || s.test(e)
            ? i(e.slice(2), n ? 2 : 8)
            : o.test(e)
            ? NaN
            : +e;
        }
        e.exports = function (e, t, r) {
          var o = !0,
            a = !0;
          if ("function" != typeof e) throw new TypeError(n);
          return (
            b(r) &&
              ((o = "leading" in r ? !!r.leading : o),
              (a = "trailing" in r ? !!r.trailing : a)),
            m(e, t, { leading: o, maxWait: t, trailing: a })
          );
        };
      }.call(this, n("yLpj")));
    },
    i838: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = n("q1tI"),
        i = a(s),
        l = a(n("17x9")),
        c = (function (e) {
          function t(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (function (e, t, n) {
                for (var r = !0; r; ) {
                  var o = e,
                    a = t,
                    s = n;
                  (r = !1), null === o && (o = Function.prototype);
                  var i = Object.getOwnPropertyDescriptor(o, a);
                  if (void 0 !== i) {
                    if ("value" in i) return i.value;
                    var l = i.get;
                    if (void 0 === l) return;
                    return l.call(s);
                  }
                  var c = Object.getPrototypeOf(o);
                  if (null === c) return;
                  (e = c), (t = a), (n = s), (r = !0), (i = c = void 0);
                }
              })(Object.getPrototypeOf(t.prototype), "constructor", this).call(
                this,
                e
              ),
              (this.state = { hover: !1 });
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            o(t, [
              {
                key: "getLineStyle",
                value: function (e) {
                  return r(
                    {
                      position: "absolute",
                      height: "20%",
                      left: 0,
                      right: 0,
                      top: 2 * e * 20 + "%",
                      opacity: this.state.hover ? 0.6 : 1,
                    },
                    this.state.hover && this.props.styles.bmBurgerBarsHover
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = void 0;
                  if (this.props.customIcon) {
                    var n = {
                      className: (
                        "bm-icon " +
                        (this.props.customIcon.props.className || "")
                      ).trim(),
                      style: r(
                        { width: "100%", height: "100%" },
                        this.props.styles.bmIcon
                      ),
                    };
                    t = i.default.cloneElement(this.props.customIcon, n);
                  } else
                    t = i.default.createElement(
                      "span",
                      null,
                      [0, 1, 2].map(function (t) {
                        return i.default.createElement("span", {
                          key: t,
                          className: (
                            "bm-burger-bars " +
                            e.props.barClassName +
                            " " +
                            (e.state.hover ? "bm-burger-bars-hover" : "")
                          ).trim(),
                          style: r(
                            {},
                            e.getLineStyle(t),
                            e.props.styles.bmBurgerBars
                          ),
                        });
                      })
                    );
                  return i.default.createElement(
                    "div",
                    {
                      className: (
                        "bm-burger-button " + this.props.className
                      ).trim(),
                      style: r(
                        { zIndex: 1e3 },
                        this.props.styles.bmBurgerButton
                      ),
                    },
                    i.default.createElement(
                      "button",
                      {
                        id: "react-burger-menu-btn",
                        onClick: this.props.onClick,
                        onMouseOver: function () {
                          e.setState({ hover: !0 }),
                            e.props.onIconHoverChange &&
                              e.props.onIconHoverChange({ isMouseIn: !0 });
                        },
                        onMouseOut: function () {
                          e.setState({ hover: !1 }),
                            e.props.onIconHoverChange &&
                              e.props.onIconHoverChange({ isMouseIn: !1 });
                        },
                        style: {
                          position: "absolute",
                          left: 0,
                          top: 0,
                          zIndex: 1,
                          width: "100%",
                          height: "100%",
                          margin: 0,
                          padding: 0,
                          border: "none",
                          fontSize: 0,
                          background: "transparent",
                          cursor: "pointer",
                        },
                      },
                      "Open Menu"
                    ),
                    t
                  );
                },
              },
            ]),
            t
          );
        })(s.Component);
      (t.default = c),
        (c.propTypes = {
          barClassName: l.default.string,
          customIcon: l.default.element,
          styles: l.default.object,
        }),
        (c.defaultProps = { barClassName: "", className: "", styles: {} }),
        (e.exports = t.default);
    },
    mFT6: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = {
          slide: n("TTcj"),
          stack: n("t6xC"),
          elastic: n("cO3x"),
          bubble: n("W/CG"),
          push: n("qB0F"),
          pushRotate: n("Evcy"),
          scaleDown: n("rBsx"),
          scaleRotate: n("gTop"),
          fallDown: n("xoUs"),
          reveal: n("tOh8"),
        }),
        (e.exports = t.default);
    },
    "oRA+": function (e, t, n) {
      var r;
      !(function (n) {
        var o,
          a,
          s = "0.5.4",
          i = "hasOwnProperty",
          l = /[\.\/]/,
          c = /\s*,\s*/,
          u = function (e, t) {
            return e - t;
          },
          d = { n: {} },
          f = function () {
            for (var e = 0, t = this.length; e < t; e++)
              if ("undefined" != typeof this[e]) return this[e];
          },
          p = function () {
            for (var e = this.length; --e; )
              if ("undefined" != typeof this[e]) return this[e];
          },
          h = Object.prototype.toString,
          m = String,
          b =
            Array.isArray ||
            function (e) {
              return e instanceof Array || "[object Array]" == h.call(e);
            },
          v = function (e, t) {
            var n,
              r = a,
              s = Array.prototype.slice.call(arguments, 2),
              i = v.listeners(e),
              l = 0,
              c = [],
              d = {},
              h = [],
              m = o;
            (h.firstDefined = f), (h.lastDefined = p), (o = e), (a = 0);
            for (var b = 0, y = i.length; b < y; b++)
              "zIndex" in i[b] &&
                (c.push(i[b].zIndex),
                i[b].zIndex < 0 && (d[i[b].zIndex] = i[b]));
            for (c.sort(u); c[l] < 0; )
              if (((n = d[c[l++]]), h.push(n.apply(t, s)), a))
                return (a = r), h;
            for (b = 0; b < y; b++)
              if ("zIndex" in (n = i[b]))
                if (n.zIndex == c[l]) {
                  if ((h.push(n.apply(t, s)), a)) break;
                  do {
                    if (((n = d[c[++l]]) && h.push(n.apply(t, s)), a)) break;
                  } while (n);
                } else d[n.zIndex] = n;
              else if ((h.push(n.apply(t, s)), a)) break;
            return (a = r), (o = m), h;
          };
        (v._events = d),
          (v.listeners = function (e) {
            var t,
              n,
              r,
              o,
              a,
              s,
              i,
              c,
              u = b(e) ? e : e.split(l),
              f = d,
              p = [f],
              h = [];
            for (o = 0, a = u.length; o < a; o++) {
              for (c = [], s = 0, i = p.length; s < i; s++)
                for (n = [(f = p[s].n)[u[o]], f["*"]], r = 2; r--; )
                  (t = n[r]) && (c.push(t), (h = h.concat(t.f || [])));
              p = c;
            }
            return h;
          }),
          (v.separator = function (e) {
            e
              ? ((e =
                  "[" + (e = m(e).replace(/(?=[\.\^\]\[\-])/g, "\\")) + "]"),
                (l = new RegExp(e)))
              : (l = /[\.\/]/);
          }),
          (v.on = function (e, t) {
            if ("function" != typeof t) return function () {};
            for (
              var n = b(e) ? (b(e[0]) ? e : [e]) : m(e).split(c),
                r = 0,
                o = n.length;
              r < o;
              r++
            )
              !(function (e) {
                for (
                  var n,
                    r = b(e) ? e : m(e).split(l),
                    o = d,
                    a = 0,
                    s = r.length;
                  a < s;
                  a++
                )
                  o =
                    ((o = o.n).hasOwnProperty(r[a]) && o[r[a]]) ||
                    (o[r[a]] = { n: {} });
                for (o.f = o.f || [], a = 0, s = o.f.length; a < s; a++)
                  if (o.f[a] == t) {
                    n = !0;
                    break;
                  }
                !n && o.f.push(t);
              })(n[r]);
            return function (e) {
              +e == +e && (t.zIndex = +e);
            };
          }),
          (v.f = function (e) {
            var t = [].slice.call(arguments, 1);
            return function () {
              v.apply(
                null,
                [e, null].concat(t).concat([].slice.call(arguments, 0))
              );
            };
          }),
          (v.stop = function () {
            a = 1;
          }),
          (v.nt = function (e) {
            var t = b(o) ? o.join(".") : o;
            return e
              ? new RegExp("(?:\\.|\\/|^)" + e + "(?:\\.|\\/|$)").test(t)
              : t;
          }),
          (v.nts = function () {
            return b(o) ? o : o.split(l);
          }),
          (v.off = v.unbind = function (e, t) {
            if (e) {
              var n = b(e) ? (b(e[0]) ? e : [e]) : m(e).split(c);
              if (n.length > 1)
                for (var r = 0, o = n.length; r < o; r++) v.off(n[r], t);
              else {
                n = b(e) ? e : m(e).split(l);
                var a,
                  s,
                  u,
                  f,
                  p,
                  h = [d],
                  y = [];
                for (r = 0, o = n.length; r < o; r++)
                  for (f = 0; f < h.length; f += u.length - 2) {
                    if (((u = [f, 1]), (a = h[f].n), "*" != n[r]))
                      a[n[r]] &&
                        (u.push(a[n[r]]), y.unshift({ n: a, name: n[r] }));
                    else
                      for (s in a)
                        a[i](s) && (u.push(a[s]), y.unshift({ n: a, name: s }));
                    h.splice.apply(h, u);
                  }
                for (r = 0, o = h.length; r < o; r++)
                  for (a = h[r]; a.n; ) {
                    if (t) {
                      if (a.f) {
                        for (f = 0, p = a.f.length; f < p; f++)
                          if (a.f[f] == t) {
                            a.f.splice(f, 1);
                            break;
                          }
                        !a.f.length && delete a.f;
                      }
                      for (s in a.n)
                        if (a.n[i](s) && a.n[s].f) {
                          var g = a.n[s].f;
                          for (f = 0, p = g.length; f < p; f++)
                            if (g[f] == t) {
                              g.splice(f, 1);
                              break;
                            }
                          !g.length && delete a.n[s].f;
                        }
                    } else
                      for (s in (delete a.f, a.n))
                        a.n[i](s) && a.n[s].f && delete a.n[s].f;
                    a = a.n;
                  }
                e: for (r = 0, o = y.length; r < o; r++) {
                  for (s in (a = y[r]).n[a.name].f) continue e;
                  for (s in a.n[a.name].n) continue e;
                  delete a.n[a.name];
                }
              }
            } else v._events = d = { n: {} };
          }),
          (v.once = function (e, t) {
            var n = function () {
              return v.off(e, n), t.apply(this, arguments);
            };
            return v.on(e, n);
          }),
          (v.version = s),
          (v.toString = function () {
            return "You are running Eve 0.5.4";
          }),
          (n.eve = v),
          e.exports
            ? (e.exports = v)
            : void 0 ===
                (r = function () {
                  return v;
                }.apply(t, [])) || (e.exports = r);
      })("undefined" != typeof window ? window : this);
    },
    oqc9: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Helpers = t.ScrollElement = t.ScrollLink = t.animateScroll = t.scrollSpy = t.Events = t.scroller = t.Element = t.Button = t.Link = void 0);
      var r = p(n("PGca")),
        o = p(n("7wkA")),
        a = p(n("Y30y")),
        s = p(n("zPnG")),
        i = p(n("QQPg")),
        l = p(n("wT0s")),
        c = p(n("NEP4")),
        u = p(n("pUFB")),
        d = p(n("w2Tm")),
        f = p(n("7FV1"));
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.Link = r.default),
        (t.Button = o.default),
        (t.Element = a.default),
        (t.scroller = s.default),
        (t.Events = i.default),
        (t.scrollSpy = l.default),
        (t.animateScroll = c.default),
        (t.ScrollLink = u.default),
        (t.ScrollElement = d.default),
        (t.Helpers = f.default),
        (t.default = {
          Link: r.default,
          Button: o.default,
          Element: a.default,
          scroller: s.default,
          Events: i.default,
          scrollSpy: l.default,
          animateScroll: c.default,
          ScrollLink: u.default,
          ScrollElement: d.default,
          Helpers: f.default,
        });
    },
    pUFB: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = u(n("q1tI")),
        s = u(n("wT0s")),
        i = u(n("zPnG")),
        l = u(n("17x9")),
        c = u(n("Dy/p"));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var d = {
        to: l.default.string.isRequired,
        containerId: l.default.string,
        container: l.default.object,
        activeClass: l.default.string,
        spy: l.default.bool,
        horizontal: l.default.bool,
        smooth: l.default.oneOfType([l.default.bool, l.default.string]),
        offset: l.default.number,
        delay: l.default.number,
        isDynamic: l.default.bool,
        onClick: l.default.func,
        duration: l.default.oneOfType([l.default.number, l.default.func]),
        absolute: l.default.bool,
        onSetActive: l.default.func,
        onSetInactive: l.default.func,
        ignoreCancelEvents: l.default.bool,
        hashSpy: l.default.bool,
        saveHashHistory: l.default.bool,
      };
      t.default = function (e, t) {
        var n = t || i.default,
          l = (function (t) {
            function i(e) {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i);
              var t = (function (e, t) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !t || ("object" !== typeof t && "function" !== typeof t)
                  ? e
                  : t;
              })(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, e));
              return u.call(t), (t.state = { active: !1 }), t;
            }
            return (
              (function (e, t) {
                if ("function" !== typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(i, t),
              o(i, [
                {
                  key: "getScrollSpyContainer",
                  value: function () {
                    var e = this.props.containerId,
                      t = this.props.container;
                    return e && !t
                      ? document.getElementById(e)
                      : t && t.nodeType
                      ? t
                      : document;
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    if (this.props.spy || this.props.hashSpy) {
                      var e = this.getScrollSpyContainer();
                      s.default.isMounted(e) || s.default.mount(e),
                        this.props.hashSpy &&
                          (c.default.isMounted() || c.default.mount(n),
                          c.default.mapContainer(this.props.to, e)),
                        s.default.addSpyHandler(this.spyHandler, e),
                        this.setState({ container: e });
                    }
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    s.default.unmount(this.stateHandler, this.spyHandler);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = "";
                    t =
                      this.state && this.state.active
                        ? (
                            (this.props.className || "") +
                            " " +
                            (this.props.activeClass || "active")
                          ).trim()
                        : this.props.className;
                    var n = r({}, this.props);
                    for (var o in d) n.hasOwnProperty(o) && delete n[o];
                    return (
                      (n.className = t),
                      (n.onClick = this.handleClick),
                      a.default.createElement(e, n)
                    );
                  },
                },
              ]),
              i
            );
          })(a.default.PureComponent),
          u = function () {
            var e = this;
            (this.scrollTo = function (t, o) {
              n.scrollTo(t, r({}, e.state, o));
            }),
              (this.handleClick = function (t) {
                e.props.onClick && e.props.onClick(t),
                  t.stopPropagation && t.stopPropagation(),
                  t.preventDefault && t.preventDefault(),
                  e.scrollTo(e.props.to, e.props);
              }),
              (this.spyHandler = function (t, r) {
                var o = e.getScrollSpyContainer();
                if (!c.default.isMounted() || c.default.isInitialized()) {
                  var a = e.props.horizontal,
                    s = e.props.to,
                    i = null,
                    l = void 0,
                    u = void 0;
                  if (a) {
                    var d = 0,
                      f = 0,
                      p = 0;
                    if (o.getBoundingClientRect)
                      p = o.getBoundingClientRect().left;
                    if (!i || e.props.isDynamic) {
                      if (!(i = n.get(s))) return;
                      var h = i.getBoundingClientRect();
                      f = (d = h.left - p + t) + h.width;
                    }
                    var m = t - e.props.offset;
                    (l = m >= Math.floor(d) && m < Math.floor(f)),
                      (u = m < Math.floor(d) || m >= Math.floor(f));
                  } else {
                    var b = 0,
                      v = 0,
                      y = 0;
                    if (o.getBoundingClientRect)
                      y = o.getBoundingClientRect().top;
                    if (!i || e.props.isDynamic) {
                      if (!(i = n.get(s))) return;
                      var g = i.getBoundingClientRect();
                      v = (b = g.top - y + r) + g.height;
                    }
                    var j = r - e.props.offset;
                    (l = j >= Math.floor(b) && j < Math.floor(v)),
                      (u = j < Math.floor(b) || j >= Math.floor(v));
                  }
                  var O = n.getActiveLink();
                  if (u) {
                    if (
                      (s === O && n.setActiveLink(void 0),
                      e.props.hashSpy && c.default.getHash() === s)
                    ) {
                      var x = e.props.saveHashHistory,
                        w = void 0 !== x && x;
                      c.default.changeHash("", w);
                    }
                    e.props.spy &&
                      e.state.active &&
                      (e.setState({ active: !1 }),
                      e.props.onSetInactive && e.props.onSetInactive(s, i));
                  }
                  if (l && (O !== s || !1 === e.state.active)) {
                    n.setActiveLink(s);
                    var C = e.props.saveHashHistory,
                      k = void 0 !== C && C;
                    e.props.hashSpy && c.default.changeHash(s, k),
                      e.props.spy &&
                        (e.setState({ active: !0 }),
                        e.props.onSetActive && e.props.onSetActive(s, i));
                  }
                }
              });
          };
        return (l.propTypes = d), (l.defaultProps = { offset: 0 }), l;
      };
    },
    pVnL: function (e, t) {
      function n() {
        return (
          (e.exports = n =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          n.apply(this, arguments)
        );
      }
      e.exports = n;
    },
    qB0F: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o = n("vH+l"),
        a = (r = o) && r.__esModule ? r : { default: r };
      (t.default = (0, a.default)({
        pageWrap: function (e, t, n) {
          return {
            MozTransform: e
              ? ""
              : n
              ? "translate3d(-" + t + ", 0, 0)"
              : "translate3d(" + t + ", 0, 0)",
            MsTransform: e
              ? ""
              : n
              ? "translate3d(-" + t + ", 0, 0)"
              : "translate3d(" + t + ", 0, 0)",
            OTransform: e
              ? ""
              : n
              ? "translate3d(-" + t + ", 0, 0)"
              : "translate3d(" + t + ", 0, 0)",
            WebkitTransform: e
              ? ""
              : n
              ? "translate3d(-" + t + ", 0, 0)"
              : "translate3d(" + t + ", 0, 0)",
            transform: e
              ? ""
              : n
              ? "translate3d(-" + t + ", 0, 0)"
              : "translate3d(" + t + ", 0, 0)",
            transition: "all 0.5s",
          };
        },
        outerContainer: function (e) {
          return { overflow: e ? "" : "hidden" };
        },
      })),
        (e.exports = t.default);
    },
    qFS3: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.bodyOpenClassName = t.portalClassName = void 0);
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = n("q1tI"),
        s = h(a),
        i = h(n("i8i4")),
        l = h(n("17x9")),
        c = h(n("QEso")),
        u = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        })(n("Ye7m")),
        d = n("2zs7"),
        f = h(d),
        p = n("VCL8");
      function h(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function m(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function b(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" !== typeof t && "function" !== typeof t) ? e : t;
      }
      var v = (t.portalClassName = "ReactModalPortal"),
        y = (t.bodyOpenClassName = "ReactModal__Body--open"),
        g = d.canUseDOM && void 0 !== i.default.createPortal,
        j = function () {
          return g
            ? i.default.createPortal
            : i.default.unstable_renderSubtreeIntoContainer;
        };
      function O(e) {
        return e();
      }
      var x = (function (e) {
        function t() {
          var e, n, o;
          m(this, t);
          for (var a = arguments.length, l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u];
          return (
            (n = o = b(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                e,
                [this].concat(l)
              )
            )),
            (o.removePortal = function () {
              !g && i.default.unmountComponentAtNode(o.node);
              var e = O(o.props.parentSelector);
              e && e.contains(o.node)
                ? e.removeChild(o.node)
                : console.warn(
                    'React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.'
                  );
            }),
            (o.portalRef = function (e) {
              o.portal = e;
            }),
            (o.renderPortal = function (e) {
              var n = j()(
                o,
                s.default.createElement(
                  c.default,
                  r({ defaultStyles: t.defaultStyles }, e)
                ),
                o.node
              );
              o.portalRef(n);
            }),
            b(o, n)
          );
        }
        return (
          (function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          o(
            t,
            [
              {
                key: "componentDidMount",
                value: function () {
                  d.canUseDOM &&
                    (g || (this.node = document.createElement("div")),
                    (this.node.className = this.props.portalClassName),
                    O(this.props.parentSelector).appendChild(this.node),
                    !g && this.renderPortal(this.props));
                },
              },
              {
                key: "getSnapshotBeforeUpdate",
                value: function (e) {
                  return {
                    prevParent: O(e.parentSelector),
                    nextParent: O(this.props.parentSelector),
                  };
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t, n) {
                  if (d.canUseDOM) {
                    var r = this.props,
                      o = r.isOpen,
                      a = r.portalClassName;
                    e.portalClassName !== a && (this.node.className = a);
                    var s = n.prevParent,
                      i = n.nextParent;
                    i !== s &&
                      (s.removeChild(this.node), i.appendChild(this.node)),
                      (e.isOpen || o) && !g && this.renderPortal(this.props);
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  if (d.canUseDOM && this.node && this.portal) {
                    var e = this.portal.state,
                      t = Date.now(),
                      n =
                        e.isOpen &&
                        this.props.closeTimeoutMS &&
                        (e.closesAt || t + this.props.closeTimeoutMS);
                    n
                      ? (e.beforeClose || this.portal.closeWithTimeout(),
                        setTimeout(this.removePortal, n - t))
                      : this.removePortal();
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  return d.canUseDOM && g
                    ? (!this.node &&
                        g &&
                        (this.node = document.createElement("div")),
                      j()(
                        s.default.createElement(
                          c.default,
                          r(
                            {
                              ref: this.portalRef,
                              defaultStyles: t.defaultStyles,
                            },
                            this.props
                          )
                        ),
                        this.node
                      ))
                    : null;
                },
              },
            ],
            [
              {
                key: "setAppElement",
                value: function (e) {
                  u.setElement(e);
                },
              },
            ]
          ),
          t
        );
      })(a.Component);
      (x.propTypes = {
        isOpen: l.default.bool.isRequired,
        style: l.default.shape({
          content: l.default.object,
          overlay: l.default.object,
        }),
        portalClassName: l.default.string,
        bodyOpenClassName: l.default.string,
        htmlOpenClassName: l.default.string,
        className: l.default.oneOfType([
          l.default.string,
          l.default.shape({
            base: l.default.string.isRequired,
            afterOpen: l.default.string.isRequired,
            beforeClose: l.default.string.isRequired,
          }),
        ]),
        overlayClassName: l.default.oneOfType([
          l.default.string,
          l.default.shape({
            base: l.default.string.isRequired,
            afterOpen: l.default.string.isRequired,
            beforeClose: l.default.string.isRequired,
          }),
        ]),
        appElement: l.default.instanceOf(f.default),
        onAfterOpen: l.default.func,
        onRequestClose: l.default.func,
        closeTimeoutMS: l.default.number,
        ariaHideApp: l.default.bool,
        shouldFocusAfterRender: l.default.bool,
        shouldCloseOnOverlayClick: l.default.bool,
        shouldReturnFocusAfterClose: l.default.bool,
        preventScroll: l.default.bool,
        parentSelector: l.default.func,
        aria: l.default.object,
        data: l.default.object,
        role: l.default.string,
        contentLabel: l.default.string,
        shouldCloseOnEsc: l.default.bool,
        overlayRef: l.default.func,
        contentRef: l.default.func,
        id: l.default.string,
        overlayElement: l.default.func,
        contentElement: l.default.func,
      }),
        (x.defaultProps = {
          isOpen: !1,
          portalClassName: v,
          bodyOpenClassName: y,
          role: "dialog",
          ariaHideApp: !0,
          closeTimeoutMS: 0,
          shouldFocusAfterRender: !0,
          shouldCloseOnEsc: !0,
          shouldCloseOnOverlayClick: !0,
          shouldReturnFocusAfterClose: !0,
          preventScroll: !1,
          parentSelector: function () {
            return document.body;
          },
          overlayElement: function (e, t) {
            return s.default.createElement("div", e, t);
          },
          contentElement: function (e, t) {
            return s.default.createElement("div", e, t);
          },
        }),
        (x.defaultStyles = {
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
          content: {
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }),
        (0, p.polyfill)(x),
        (t.default = x);
    },
    qSPm: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function () {
          var e = void 0;
          try {
            e = n("QczR");
          } finally {
            return e;
          }
        }),
        (e.exports = t.default);
    },
    rBsx: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o = n("vH+l"),
        a = (r = o) && r.__esModule ? r : { default: r };
      (t.default = (0, a.default)({
        pageWrap: function (e, t) {
          return {
            MozTransform: e ? "" : "translate3d(0, 0, -" + t + ")",
            MsTransform: e ? "" : "translate3d(0, 0, -" + t + ")",
            OTransform: e ? "" : "translate3d(0, 0, -" + t + ")",
            WebkitTransform: e ? "" : "translate3d(0, 0, -" + t + ")",
            transform: e ? "" : "translate3d(0, 0, -" + t + ")",
            transformOrigin: "100%",
            transformStyle: "preserve-3d",
            transition: "all 0.5s",
          };
        },
        outerContainer: function () {
          return { perspective: "1500px" };
        },
      })),
        (e.exports = t.default);
    },
    sPdn: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.pxToNum = function (e) {
        return parseInt(e.slice(0, -2), 10);
      };
    },
    t6xC: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o = n("vH+l"),
        a = (r = o) && r.__esModule ? r : { default: r };
      (t.default = (0, a.default)({
        menuWrap: function (e, t, n) {
          return {
            MozTransform: e
              ? ""
              : n
              ? "translate3d(" + t + ", 0, 0)"
              : "translate3d(-" + t + ", 0, 0)",
            MsTransform: e
              ? ""
              : n
              ? "translate3d(" + t + ", 0, 0)"
              : "translate3d(-" + t + ", 0, 0)",
            OTransform: e
              ? ""
              : n
              ? "translate3d(" + t + ", 0, 0)"
              : "translate3d(-" + t + ", 0, 0)",
            WebkitTransform: e
              ? ""
              : n
              ? "translate3d(" + t + ", 0, 0)"
              : "translate3d(-" + t + ", 0, 0)",
            transform: e
              ? ""
              : n
              ? "translate3d(" + t + ", 0, 0)"
              : "translate3d(-" + t + ", 0, 0)",
            transition: e
              ? "transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)"
              : "transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)",
          };
        },
        item: function (e, t, n, r) {
          return {
            MozTransform: e ? "" : "translate3d(0, " + 500 * r + "px, 0)",
            MsTransform: e ? "" : "translate3d(0, " + 500 * r + "px, 0)",
            OTransform: e ? "" : "translate3d(0, " + 500 * r + "px, 0)",
            WebkitTransform: e ? "" : "translate3d(0, " + 500 * r + "px, 0)",
            transform: e ? "" : "translate3d(0, " + 500 * r + "px, 0)",
            transition: e
              ? "transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)"
              : "transform 0s 0.2s cubic-bezier(0.7, 0, 0.3, 1)",
          };
        },
      })),
        (e.exports = t.default);
    },
    tOh8: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o = n("vH+l"),
        a = (r = o) && r.__esModule ? r : { default: r };
      (t.default = (0, a.default)({
        menuWrap: function (e, t, n) {
          return {
            MozTransform: "translate3d(0, 0, 0)",
            MsTransform: "translate3d(0, 0, 0)",
            OTransform: "translate3d(0, 0, 0)",
            WebkitTransform: "translate3d(0, 0, 0)",
            transform: "translate3d(0, 0, 0)",
            zIndex: e ? 1e3 : -1,
          };
        },
        overlay: function (e, t, n) {
          return {
            zIndex: 1400,
            MozTransform: e
              ? n
                ? "translate3d(-" + t + ", 0, 0)"
                : "translate3d(" + t + ", 0, 0)"
              : "translate3d(0, 0, 0)",
            MsTransform: e
              ? n
                ? "translate3d(-" + t + ", 0, 0)"
                : "translate3d(" + t + ", 0, 0)"
              : "translate3d(0, 0, 0)",
            OTransform: e
              ? n
                ? "translate3d(-" + t + ", 0, 0)"
                : "translate3d(" + t + ", 0, 0)"
              : "translate3d(0, 0, 0)",
            WebkitTransform: e
              ? n
                ? "translate3d(-" + t + ", 0, 0)"
                : "translate3d(" + t + ", 0, 0)"
              : "translate3d(0, 0, 0)",
            transform: e
              ? n
                ? "translate3d(-" + t + ", 0, 0)"
                : "translate3d(" + t + ", 0, 0)"
              : "translate3d(0, 0, 0)",
            transition: "all 0.5s",
            visibility: e ? "visible" : "hidden",
          };
        },
        pageWrap: function (e, t, n) {
          return {
            MozTransform: e
              ? ""
              : n
              ? "translate3d(-" + t + ", 0, 0)"
              : "translate3d(" + t + ", 0, 0)",
            MsTransform: e
              ? ""
              : n
              ? "translate3d(-" + t + ", 0, 0)"
              : "translate3d(" + t + ", 0, 0)",
            OTransform: e
              ? ""
              : n
              ? "translate3d(-" + t + ", 0, 0)"
              : "translate3d(" + t + ", 0, 0)",
            WebkitTransform: e
              ? ""
              : n
              ? "translate3d(-" + t + ", 0, 0)"
              : "translate3d(" + t + ", 0, 0)",
            transform: e
              ? ""
              : n
              ? "translate3d(-" + t + ", 0, 0)"
              : "translate3d(" + t + ", 0, 0)",
            transition: "all 0.5s",
            zIndex: 1200,
            position: "relative",
          };
        },
        burgerIcon: function (e, t, n) {
          return {
            MozTransform: e
              ? n
                ? "translate3d(" + t + ", 0, 0)"
                : "translate3d(-" + t + ", 0, 0)"
              : "translate3d(0, 0, 0)",
            MsTransform: e
              ? n
                ? "translate3d(" + t + ", 0, 0)"
                : "translate3d(-" + t + ", 0, 0)"
              : "translate3d(0, 0, 0)",
            OTransform: e
              ? n
                ? "translate3d(" + t + ", 0, 0)"
                : "translate3d(-" + t + ", 0, 0)"
              : "translate3d(0, 0, 0)",
            WebkitTransform: e
              ? n
                ? "translate3d(" + t + ", 0, 0)"
                : "translate3d(-" + t + ", 0, 0)"
              : "translate3d(0, 0, 0)",
            transform: e
              ? n
                ? "translate3d(" + t + ", 0, 0)"
                : "translate3d(-" + t + ", 0, 0)"
              : "translate3d(0, 0, 0)",
            transition: "all 0.1s",
            position: "relative",
            zIndex: 1300,
          };
        },
        outerContainer: function (e) {
          return { overflow: e ? "" : "hidden" };
        },
      })),
        (e.exports = t.default);
    },
    "vH+l": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = function (e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e))
            return (function (e, t) {
              var n = [],
                r = !0,
                o = !1,
                a = void 0;
              try {
                for (
                  var s, i = e[Symbol.iterator]();
                  !(r = (s = i.next()).done) &&
                  (n.push(s.value), !t || n.length !== t);
                  r = !0
                );
              } catch (l) {
                (o = !0), (a = l);
              } finally {
                try {
                  !r && i.return && i.return();
                } finally {
                  if (o) throw a;
                }
              }
              return n;
            })(e, t);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        },
        o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          };
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = a(n("q1tI")),
        i = a(n("i8i4")),
        l = a(n("17x9")),
        c = a(n("9b6L")),
        u = n("9396"),
        d = a(n("i838")),
        f = a(n("UvMI"));
      (t.default = function (e) {
        if (!e) throw new Error("No styles supplied");
        var t = "ArrowDown",
          n = "ArrowUp";
        var a = function (a) {
          var l = s.default.useState(!1),
            p = r(l, 2),
            h = p[0],
            m = p[1],
            b = s.default.useRef(),
            v = s.default.useRef({}),
            y = (function (e) {
              var t = s.default.useRef(e);
              return (
                s.default.useEffect(function () {
                  t.current = e;
                }),
                t.current
              );
            })(a.isOpen);
          function g() {
            var e =
              arguments.length <= 0 || void 0 === arguments[0]
                ? {}
                : arguments[0];
            (v.current = e),
              C(),
              m(function (t) {
                return "undefined" !== typeof e.isOpen ? e.isOpen : !t;
              });
          }
          function j() {
            "function" === typeof a.onClose ? a.onClose() : g();
          }
          function O(e, t) {
            var n = a.width,
              r = a.right;
            return e(h, "string" !== typeof n ? n + "px" : n, r, t);
          }
          function x(t, n, r) {
            var s = "bm" + t.replace(t.charAt(0), t.charAt(0).toUpperCase()),
              i = c.default[t] ? O(c.default[t]) : {};
            return (
              e[t] && (i = o({}, i, O(e[t], n + 1))),
              a.styles[s] && (i = o({}, i, a.styles[s])),
              r && (i = o({}, i, r)),
              a.noTransition && delete i.transition,
              i
            );
          }
          function w(e, t, n) {
            var r = document.getElementById(e);
            if (r) {
              var o = O(t);
              for (var s in o)
                o.hasOwnProperty(s) && (r.style[s] = n ? o[s] : "");
              var i = function (e) {
                return (e.style["overflow-x"] = n ? "hidden" : "");
              };
              a.htmlClassName || i(document.querySelector("html")),
                a.bodyClassName || i(document.querySelector("body"));
            } else console.error("Element with ID '" + e + "' not found");
          }
          function C() {
            var t =
                arguments.length <= 0 ||
                void 0 === arguments[0] ||
                arguments[0],
              n = function (e, n) {
                return e.classList[t ? "add" : "remove"](n);
              };
            a.htmlClassName &&
              n(document.querySelector("html"), a.htmlClassName),
              a.bodyClassName &&
                n(document.querySelector("body"), a.bodyClassName),
              e.pageWrap && a.pageWrapId && w(a.pageWrapId, e.pageWrap, t),
              e.outerContainer &&
                a.outerContainerId &&
                w(a.outerContainerId, e.outerContainer, t);
          }
          function k() {
            b.current && clearTimeout(b.current);
          }
          function S(e) {
            switch ((e = e || window.event).key) {
              case "Escape":
                a.disableCloseOnEsc || (j(), (0, u.focusOnMenuButton)());
                break;
              case t:
                (0, u.focusOnNextMenuItem)();
                break;
              case n:
                (0, u.focusOnPreviousMenuItem)();
                break;
              case "Home":
                (0, u.focusOnFirstMenuItem)();
                break;
              case "End":
                (0, u.focusOnLastMenuItem)();
            }
          }
          function N(e) {
            if (
              (e = e || window.event).target ===
              document.getElementById("react-burger-menu-btn")
            )
              switch (e.key) {
                case t:
                case " ":
                  g();
                  break;
                case n:
                  g({ focusOnLastItem: !0 });
              }
          }
          return (
            s.default.useEffect(function () {
              return (
                a.isOpen && g({ isOpen: !0, noStateChange: !0 }),
                function () {
                  C(!1), k();
                }
              );
            }, []),
            s.default.useEffect(function () {
              "undefined" !== typeof a.isOpen &&
              a.isOpen !== h &&
              a.isOpen !== y
                ? g()
                : e.svg &&
                  (function () {
                    var t = i.default.findDOMNode(void 0, "bm-morph-shape"),
                      n = e.svg.lib(t).select("path");
                    h
                      ? e.svg.animate(n)
                      : setTimeout(function () {
                          n.attr("d", e.svg.pathInitial);
                        }, 300);
                  })();
            }),
            s.default.useEffect(
              function () {
                var e = v.current,
                  t = e.noStateChange,
                  n = e.focusOnLastItem;
                t || a.onStateChange({ isOpen: h }),
                  a.disableAutoFocus ||
                    (h
                      ? n
                        ? (0, u.focusOnLastMenuItem)()
                        : (0, u.focusOnFirstMenuItem)()
                      : document.activeElement
                      ? document.activeElement.blur()
                      : document.body.blur()),
                  k(),
                  (b.current = setTimeout(function () {
                    (b.current = null), h || C(!1);
                  }, 500));
                var r = h ? S : N,
                  o = a.customOnKeyDown || r;
                return (
                  window.addEventListener("keydown", o),
                  function () {
                    window.removeEventListener("keydown", o);
                  }
                );
              },
              [h]
            ),
            s.default.createElement(
              "div",
              null,
              !a.noOverlay &&
                s.default.createElement("div", {
                  className: ("bm-overlay " + a.overlayClassName).trim(),
                  onClick: function () {
                    !0 === a.disableOverlayClick ||
                      ("function" === typeof a.disableOverlayClick &&
                        a.disableOverlayClick()) ||
                      j();
                  },
                  style: x("overlay"),
                }),
              !1 !== a.customBurgerIcon &&
                s.default.createElement(
                  "div",
                  { style: x("burgerIcon") },
                  s.default.createElement(d.default, {
                    onClick: function () {
                      "function" === typeof a.onOpen ? a.onOpen() : g();
                    },
                    styles: a.styles,
                    customIcon: a.customBurgerIcon,
                    className: a.burgerButtonClassName,
                    barClassName: a.burgerBarClassName,
                    onIconStateChange: a.onIconStateChange,
                  })
                ),
              s.default.createElement(
                "div",
                {
                  id: a.id,
                  className: ("bm-menu-wrap " + a.className).trim(),
                  style: x("menuWrap"),
                  "aria-hidden": !h,
                },
                e.svg &&
                  s.default.createElement(
                    "div",
                    {
                      className: (
                        "bm-morph-shape " + a.morphShapeClassName
                      ).trim(),
                      style: x("morphShape"),
                    },
                    s.default.createElement(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 100 800",
                        preserveAspectRatio: "none",
                      },
                      s.default.createElement("path", { d: e.svg.pathInitial })
                    )
                  ),
                s.default.createElement(
                  "div",
                  {
                    className: ("bm-menu " + a.menuClassName).trim(),
                    style: x("menu"),
                  },
                  s.default.createElement(
                    a.itemListElement,
                    {
                      className: ("bm-item-list " + a.itemListClassName).trim(),
                      style: x("itemList"),
                    },
                    s.default.Children.map(a.children, function (e, t) {
                      if (e) {
                        var n = {
                          key: t,
                          className: [
                            "bm-item",
                            a.itemClassName,
                            e.props.className,
                          ]
                            .filter(function (e) {
                              return !!e;
                            })
                            .join(" "),
                          style: x("item", t, e.props.style),
                          tabIndex: h ? 0 : -1,
                        };
                        return s.default.cloneElement(e, n);
                      }
                    })
                  )
                ),
                !1 !== a.customCrossIcon &&
                  s.default.createElement(
                    "div",
                    { style: x("closeButton") },
                    s.default.createElement(f.default, {
                      onClick: j,
                      styles: a.styles,
                      customIcon: a.customCrossIcon,
                      className: a.crossButtonClassName,
                      crossClassName: a.crossClassName,
                      isOpen: h,
                    })
                  )
              )
            )
          );
        };
        return (
          (a.propTypes = {
            bodyClassName: l.default.string,
            burgerBarClassName: l.default.string,
            burgerButtonClassName: l.default.string,
            className: l.default.string,
            crossButtonClassName: l.default.string,
            crossClassName: l.default.string,
            customBurgerIcon: l.default.oneOfType([
              l.default.element,
              l.default.oneOf([!1]),
            ]),
            customCrossIcon: l.default.oneOfType([
              l.default.element,
              l.default.oneOf([!1]),
            ]),
            customOnKeyDown: l.default.func,
            disableAutoFocus: l.default.bool,
            disableCloseOnEsc: l.default.bool,
            disableOverlayClick: l.default.oneOfType([
              l.default.bool,
              l.default.func,
            ]),
            htmlClassName: l.default.string,
            id: l.default.string,
            isOpen: l.default.bool,
            itemClassName: l.default.string,
            itemListClassName: l.default.string,
            itemListElement: l.default.oneOf(["div", "nav"]),
            menuClassName: l.default.string,
            morphShapeClassName: l.default.string,
            noOverlay: l.default.bool,
            noTransition: l.default.bool,
            onClose: l.default.func,
            onIconHoverChange: l.default.func,
            onOpen: l.default.func,
            onStateChange: l.default.func,
            outerContainerId:
              e && e.outerContainer
                ? l.default.string.isRequired
                : l.default.string,
            overlayClassName: l.default.string,
            pageWrapId:
              e && e.pageWrap ? l.default.string.isRequired : l.default.string,
            right: l.default.bool,
            styles: l.default.object,
            width: l.default.oneOfType([l.default.number, l.default.string]),
          }),
          (a.defaultProps = {
            bodyClassName: "",
            burgerBarClassName: "",
            burgerButtonClassName: "",
            className: "",
            crossButtonClassName: "",
            crossClassName: "",
            disableAutoFocus: !1,
            disableCloseOnEsc: !1,
            htmlClassName: "",
            id: "",
            itemClassName: "",
            itemListClassName: "",
            menuClassName: "",
            morphShapeClassName: "",
            noOverlay: !1,
            noTransition: !1,
            onStateChange: function () {},
            outerContainerId: "",
            overlayClassName: "",
            pageWrapId: "",
            styles: {},
            width: 300,
            onIconHoverChange: function () {},
            itemListElement: "nav",
          }),
          a
        );
      }),
        (e.exports = t.default);
    },
    vNVm: function (e, t, n) {
      "use strict";
      var r = n("J4zp"),
        o = n("TqRt");
      (t.__esModule = !0),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            n = e.disabled || !i,
            o = (0, a.useRef)(),
            c = (0, a.useState)(!1),
            u = r(c, 2),
            d = u[0],
            f = u[1],
            p = (0, a.useCallback)(
              function (e) {
                o.current && (o.current(), (o.current = void 0)),
                  n ||
                    d ||
                    (e &&
                      e.tagName &&
                      (o.current = (function (e, t, n) {
                        var r = (function (e) {
                            var t = e.rootMargin || "",
                              n = l.get(t);
                            if (n) return n;
                            var r = new Map(),
                              o = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = r.get(e.target),
                                    n =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  t && n && t(n);
                                });
                              }, e);
                            return (
                              l.set(
                                t,
                                (n = { id: t, observer: o, elements: r })
                              ),
                              n
                            );
                          })(n),
                          o = r.id,
                          a = r.observer,
                          s = r.elements;
                        return (
                          s.set(e, t),
                          a.observe(e),
                          function () {
                            a.unobserve(e),
                              0 === s.size && (a.disconnect(), l.delete(o));
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && f(e);
                        },
                        { rootMargin: t }
                      )));
              },
              [n, t, d]
            );
          return (
            (0, a.useEffect)(
              function () {
                i ||
                  d ||
                  (0, s.default)(function () {
                    return f(!0);
                  });
              },
              [d]
            ),
            [p, d]
          );
        });
      var a = n("q1tI"),
        s = o(n("0G5g")),
        i = "undefined" !== typeof IntersectionObserver;
      var l = new Map();
    },
    vlRD: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n("RNiq");
        },
      ]);
    },
    w2Tm: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = l(n("q1tI")),
        s = (l(n("i8i4")), l(n("zPnG"))),
        i = l(n("17x9"));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default = function (e) {
        var t = (function (t) {
          function n(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, n);
            var t = (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" !== typeof t && "function" !== typeof t)
                ? e
                : t;
            })(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
            return (t.childBindings = { domNode: null }), t;
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(n, t),
            o(n, [
              {
                key: "componentDidMount",
                value: function () {
                  if ("undefined" === typeof window) return !1;
                  this.registerElems(this.props.name);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  this.props.name !== e.name &&
                    this.registerElems(this.props.name);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  if ("undefined" === typeof window) return !1;
                  s.default.unregister(this.props.name);
                },
              },
              {
                key: "registerElems",
                value: function (e) {
                  s.default.register(e, this.childBindings.domNode);
                },
              },
              {
                key: "render",
                value: function () {
                  return a.default.createElement(
                    e,
                    r({}, this.props, { parentBindings: this.childBindings })
                  );
                },
              },
            ]),
            n
          );
        })(a.default.Component);
        return (
          (t.propTypes = { name: i.default.string, id: i.default.string }), t
        );
      };
    },
    wT0s: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o = n("hKI/"),
        a = (r = o) && r.__esModule ? r : { default: r },
        s = n("QLqi");
      var i = {
        spyCallbacks: [],
        spySetState: [],
        scrollSpyContainers: [],
        mount: function (e) {
          if (e) {
            var t = (function (e) {
              return (0, a.default)(e, 66);
            })(function (t) {
              i.scrollHandler(e);
            });
            i.scrollSpyContainers.push(e),
              (0, s.addPassiveEventListener)(e, "scroll", t);
          }
        },
        isMounted: function (e) {
          return -1 !== i.scrollSpyContainers.indexOf(e);
        },
        currentPositionX: function (e) {
          if (e === document) {
            var t = void 0 !== window.pageYOffset,
              n = "CSS1Compat" === (document.compatMode || "");
            return t
              ? window.pageXOffset
              : n
              ? document.documentElement.scrollLeft
              : document.body.scrollLeft;
          }
          return e.scrollLeft;
        },
        currentPositionY: function (e) {
          if (e === document) {
            var t = void 0 !== window.pageXOffset,
              n = "CSS1Compat" === (document.compatMode || "");
            return t
              ? window.pageYOffset
              : n
              ? document.documentElement.scrollTop
              : document.body.scrollTop;
          }
          return e.scrollTop;
        },
        scrollHandler: function (e) {
          (
            i.scrollSpyContainers[i.scrollSpyContainers.indexOf(e)]
              .spyCallbacks || []
          ).forEach(function (t) {
            return t(i.currentPositionX(e), i.currentPositionY(e));
          });
        },
        addStateHandler: function (e) {
          i.spySetState.push(e);
        },
        addSpyHandler: function (e, t) {
          var n = i.scrollSpyContainers[i.scrollSpyContainers.indexOf(t)];
          n.spyCallbacks || (n.spyCallbacks = []),
            n.spyCallbacks.push(e),
            e(i.currentPositionX(t), i.currentPositionY(t));
        },
        updateStates: function () {
          i.spySetState.forEach(function (e) {
            return e();
          });
        },
        unmount: function (e, t) {
          i.scrollSpyContainers.forEach(function (e) {
            return (
              e.spyCallbacks &&
              e.spyCallbacks.length &&
              e.spyCallbacks.splice(e.spyCallbacks.indexOf(t), 1)
            );
          }),
            i.spySetState &&
              i.spySetState.length &&
              i.spySetState.splice(i.spySetState.indexOf(e), 1),
            document.removeEventListener("scroll", i.scrollHandler);
        },
        update: function () {
          return i.scrollSpyContainers.forEach(function (e) {
            return i.scrollHandler(e);
          });
        },
      };
      t.default = i;
    },
    xFC4: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.default = {
        updateHash: function (e, t) {
          var n = 0 === e.indexOf("#") ? e.substring(1) : e,
            r = n ? "#" + n : "",
            o = window && window.location,
            a = r ? o.pathname + o.search + r : o.pathname + o.search;
          t
            ? history.pushState(null, "", a)
            : history.replaceState(null, "", a);
        },
        getHash: function () {
          return window.location.hash.replace(/^#/, "");
        },
        filterElementInContainer: function (e) {
          return function (t) {
            return e.contains
              ? e != t && e.contains(t)
              : !!(16 & e.compareDocumentPosition(t));
          };
        },
        scrollOffset: function (e, t, n) {
          return n
            ? e === document
              ? t.getBoundingClientRect().left +
                (window.scrollX || window.pageXOffset)
              : "static" !== getComputedStyle(e).position
              ? t.offsetLeft
              : t.offsetLeft - e.offsetLeft
            : e === document
            ? t.getBoundingClientRect().top +
              (window.scrollY || window.pageYOffset)
            : "static" !== getComputedStyle(e).position
            ? t.offsetTop
            : t.offsetTop - e.offsetTop;
        },
      };
    },
    xoUs: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o = n("vH+l"),
        a = (r = o) && r.__esModule ? r : { default: r };
      (t.default = (0, a.default)({
        menuWrap: function (e) {
          return {
            MozTransform: e ? "" : "translate3d(0, -100%, 0)",
            MsTransform: e ? "" : "translate3d(0, -100%, 0)",
            OTransform: e ? "" : "translate3d(0, -100%, 0)",
            WebkitTransform: e ? "" : "translate3d(0, -100%, 0)",
            transform: e ? "" : "translate3d(0, -100%, 0)",
            transition: "all 0.5s ease-in-out",
          };
        },
        pageWrap: function (e, t, n) {
          return {
            MozTransform: e
              ? ""
              : n
              ? "translate3d(-" + t + ", 0, 0)"
              : "translate3d(" + t + ", 0, 0)",
            MsTransform: e
              ? ""
              : n
              ? "translate3d(-" + t + ", 0, 0)"
              : "translate3d(" + t + ", 0, 0)",
            OTransform: e
              ? ""
              : n
              ? "translate3d(-" + t + ", 0, 0)"
              : "translate3d(" + t + ", 0, 0)",
            WebkitTransform: e
              ? ""
              : n
              ? "translate3d(-" + t + ", 0, 0)"
              : "translate3d(" + t + ", 0, 0)",
            transform: e
              ? ""
              : n
              ? "translate3d(-" + t + ", 0, 0)"
              : "translate3d(" + t + ", 0, 0)",
            transition: "all 0.5s",
          };
        },
        outerContainer: function (e) {
          return {
            perspective: "1500px",
            perspectiveOrigin: "0% 50%",
            overflow: e ? "" : "hidden",
          };
        },
      })),
        (e.exports = t.default);
    },
    yLpj: function (e, t) {
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
    zPnG: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = i(n("xFC4")),
        a = i(n("NEP4")),
        s = i(n("QQPg"));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var l = {},
        c = void 0;
      t.default = {
        unmount: function () {
          l = {};
        },
        register: function (e, t) {
          l[e] = t;
        },
        unregister: function (e) {
          delete l[e];
        },
        get: function (e) {
          return (
            l[e] ||
            document.getElementById(e) ||
            document.getElementsByName(e)[0] ||
            document.getElementsByClassName(e)[0]
          );
        },
        setActiveLink: function (e) {
          return (c = e);
        },
        getActiveLink: function () {
          return c;
        },
        scrollTo: function (e, t) {
          var n = this.get(e);
          if (n) {
            var i = (t = r({}, t, { absolute: !1 })).containerId,
              l = t.container,
              c = void 0;
            (c = i
              ? document.getElementById(i)
              : l && l.nodeType
              ? l
              : document),
              (t.absolute = !0);
            var u = t.horizontal,
              d = o.default.scrollOffset(c, n, u) + (t.offset || 0);
            if (!t.smooth)
              return (
                s.default.registered.begin && s.default.registered.begin(e, n),
                c === document
                  ? t.horizontal
                    ? window.scrollTo(d, 0)
                    : window.scrollTo(0, d)
                  : (c.scrollTop = d),
                void (
                  s.default.registered.end && s.default.registered.end(e, n)
                )
              );
            a.default.animateTopScroll(d, t, e, n);
          } else console.warn("target Element not found");
        },
      };
    },
  },
  [["vlRD", 0, 1, 4, 5, 2]],
]);
