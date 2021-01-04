_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [7],
  {
    "/0+H": function (e, t, r) {
      "use strict";
      (t.__esModule = !0),
        (t.isInAmpMode = a),
        (t.useAmp = function () {
          return a(o.default.useContext(i.AmpStateContext));
        });
      var n,
        o = (n = r("q1tI")) && n.__esModule ? n : { default: n },
        i = r("lwAK");
      function a() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          r = void 0 !== t && t,
          n = e.hybrid,
          o = void 0 !== n && n,
          i = e.hasQuery,
          a = void 0 !== i && i;
        return r || (o && a);
      }
    },
    0: function (e, t, r) {
      r("GcxT"), (e.exports = r("nOHt"));
    },
    "01kN": function (e, t, r) {},
    "1TCz": function (e, t, r) {
      "use strict";
      function n(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      r.r(t);
      var o = r("nKUr"),
        i = r("MX0m"),
        a = r.n(i),
        s =
          (r("zPlV"),
          r("p9Yi"),
          r("zhW+"),
          r("01kN"),
          r("s+K2"),
          r("JLJ+"),
          r("RA0E"),
          r("YtDE"),
          r("g4pe")),
        p = r.n(s),
        c = r("q1tI"),
        l = r.n(c);
      function u(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      var h = {
          templateTitle: "",
          noindex: !1,
          nofollow: !1,
          defaultOpenGraphImageWidth: 0,
          defaultOpenGraphImageHeight: 0,
          defaultOpenGraphVideoWidth: 0,
          defaultOpenGraphVideoHeight: 0,
        },
        d = function (e) {
          var t = [];
          e.titleTemplate && (h.templateTitle = e.titleTemplate);
          var r = "";
          e.title &&
            ((r = e.title),
            h.templateTitle &&
              (r = h.templateTitle.replace(/%s/g, function () {
                return r;
              })),
            t.push(l.a.createElement("title", { key: "title" }, r)));
          var n = e.noindex || h.noindex || e.dangerouslySetAllPagesToNoIndex,
            o = e.nofollow || h.nofollow || e.dangerouslySetAllPagesToNoFollow;
          if (
            (n || o
              ? (e.dangerouslySetAllPagesToNoIndex && (h.noindex = !0),
                e.dangerouslySetAllPagesToNoFollow && (h.nofollow = !0),
                t.push(
                  l.a.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content:
                      (n ? "noindex" : "index") +
                      "," +
                      (o ? "nofollow" : "follow"),
                  })
                ),
                t.push(
                  l.a.createElement("meta", {
                    key: "googlebot",
                    name: "googlebot",
                    content:
                      (n ? "noindex" : "index") +
                      "," +
                      (o ? "nofollow" : "follow"),
                  })
                ))
              : (t.push(
                  l.a.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content: "index,follow",
                  })
                ),
                t.push(
                  l.a.createElement("meta", {
                    key: "googlebot",
                    name: "googlebot",
                    content: "index,follow",
                  })
                )),
            e.description &&
              t.push(
                l.a.createElement("meta", {
                  key: "description",
                  name: "description",
                  content: e.description,
                })
              ),
            e.mobileAlternate &&
              t.push(
                l.a.createElement("link", {
                  rel: "alternate",
                  key: "mobileAlternate",
                  media: e.mobileAlternate.media,
                  href: e.mobileAlternate.href,
                })
              ),
            e.languageAlternates &&
              e.languageAlternates.length > 0 &&
              e.languageAlternates.forEach(function (e) {
                t.push(
                  l.a.createElement("link", {
                    rel: "alternate",
                    key: "languageAlternate-" + e.hrefLang,
                    hrefLang: e.hrefLang,
                    href: e.href,
                  })
                );
              }),
            e.twitter &&
              (e.twitter.cardType &&
                t.push(
                  l.a.createElement("meta", {
                    key: "twitter:card",
                    name: "twitter:card",
                    content: e.twitter.cardType,
                  })
                ),
              e.twitter.site &&
                t.push(
                  l.a.createElement("meta", {
                    key: "twitter:site",
                    name: "twitter:site",
                    content: e.twitter.site,
                  })
                ),
              e.twitter.handle &&
                t.push(
                  l.a.createElement("meta", {
                    key: "twitter:creator",
                    name: "twitter:creator",
                    content: e.twitter.handle,
                  })
                )),
            e.facebook &&
              e.facebook.appId &&
              t.push(
                l.a.createElement("meta", {
                  key: "fb:app_id",
                  property: "fb:app_id",
                  content: e.facebook.appId,
                })
              ),
            e.openGraph)
          ) {
            if (
              ((e.openGraph.url || e.canonical) &&
                t.push(
                  l.a.createElement("meta", {
                    key: "og:url",
                    property: "og:url",
                    content: e.openGraph.url || e.canonical,
                  })
                ),
              e.openGraph.type)
            ) {
              var i = e.openGraph.type.toLowerCase();
              t.push(
                l.a.createElement("meta", {
                  key: "og:type",
                  property: "og:type",
                  content: i,
                })
              ),
                "profile" === i && e.openGraph.profile
                  ? (e.openGraph.profile.firstName &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "profile:first_name",
                          property: "profile:first_name",
                          content: e.openGraph.profile.firstName,
                        })
                      ),
                    e.openGraph.profile.lastName &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "profile:last_name",
                          property: "profile:last_name",
                          content: e.openGraph.profile.lastName,
                        })
                      ),
                    e.openGraph.profile.username &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "profile:username",
                          property: "profile:username",
                          content: e.openGraph.profile.username,
                        })
                      ),
                    e.openGraph.profile.gender &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "profile:gender",
                          property: "profile:gender",
                          content: e.openGraph.profile.gender,
                        })
                      ))
                  : "book" === i && e.openGraph.book
                  ? (e.openGraph.book.authors &&
                      e.openGraph.book.authors.length &&
                      e.openGraph.book.authors.forEach(function (e, r) {
                        t.push(
                          l.a.createElement("meta", {
                            key: "book:author:0" + r,
                            property: "book:author",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.book.isbn &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "book:isbn",
                          property: "book:isbn",
                          content: e.openGraph.book.isbn,
                        })
                      ),
                    e.openGraph.book.releaseDate &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "book:release_date",
                          property: "book:release_date",
                          content: e.openGraph.book.releaseDate,
                        })
                      ),
                    e.openGraph.book.tags &&
                      e.openGraph.book.tags.length &&
                      e.openGraph.book.tags.forEach(function (e, r) {
                        t.push(
                          l.a.createElement("meta", {
                            key: "book:tag:0" + r,
                            property: "book:tag",
                            content: e,
                          })
                        );
                      }))
                  : "article" === i && e.openGraph.article
                  ? (e.openGraph.article.publishedTime &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "article:published_time",
                          property: "article:published_time",
                          content: e.openGraph.article.publishedTime,
                        })
                      ),
                    e.openGraph.article.modifiedTime &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "article:modified_time",
                          property: "article:modified_time",
                          content: e.openGraph.article.modifiedTime,
                        })
                      ),
                    e.openGraph.article.expirationTime &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "article:expiration_time",
                          property: "article:expiration_time",
                          content: e.openGraph.article.expirationTime,
                        })
                      ),
                    e.openGraph.article.authors &&
                      e.openGraph.article.authors.length &&
                      e.openGraph.article.authors.forEach(function (e, r) {
                        t.push(
                          l.a.createElement("meta", {
                            key: "article:author:0" + r,
                            property: "article:author",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.article.section &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "article:section",
                          property: "article:section",
                          content: e.openGraph.article.section,
                        })
                      ),
                    e.openGraph.article.tags &&
                      e.openGraph.article.tags.length &&
                      e.openGraph.article.tags.forEach(function (e, r) {
                        t.push(
                          l.a.createElement("meta", {
                            key: "article:tag:0" + r,
                            property: "article:tag",
                            content: e,
                          })
                        );
                      }))
                  : ("video.movie" !== i &&
                      "video.episode" !== i &&
                      "video.tv_show" !== i &&
                      "video.other" !== i) ||
                    !e.openGraph.video ||
                    (e.openGraph.video.actors &&
                      e.openGraph.video.actors.length &&
                      e.openGraph.video.actors.forEach(function (e, r) {
                        e.profile &&
                          t.push(
                            l.a.createElement("meta", {
                              key: "video:actor:0" + r,
                              property: "video:actor",
                              content: e.profile,
                            })
                          ),
                          e.role &&
                            t.push(
                              l.a.createElement("meta", {
                                key: "video:actor:role:0" + r,
                                property: "video:actor:role",
                                content: e.role,
                              })
                            );
                      }),
                    e.openGraph.video.directors &&
                      e.openGraph.video.directors.length &&
                      e.openGraph.video.directors.forEach(function (e, r) {
                        t.push(
                          l.a.createElement("meta", {
                            key: "video:director:0" + r,
                            property: "video:director",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.writers &&
                      e.openGraph.video.writers.length &&
                      e.openGraph.video.writers.forEach(function (e, r) {
                        t.push(
                          l.a.createElement("meta", {
                            key: "video:writer:0" + r,
                            property: "video:writer",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.duration &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "video:duration",
                          property: "video:duration",
                          content: e.openGraph.video.duration.toString(),
                        })
                      ),
                    e.openGraph.video.releaseDate &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "video:release_date",
                          property: "video:release_date",
                          content: e.openGraph.video.releaseDate,
                        })
                      ),
                    e.openGraph.video.tags &&
                      e.openGraph.video.tags.length &&
                      e.openGraph.video.tags.forEach(function (e, r) {
                        t.push(
                          l.a.createElement("meta", {
                            key: "video:tag:0" + r,
                            property: "video:tag",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.series &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "video:series",
                          property: "video:series",
                          content: e.openGraph.video.series,
                        })
                      ));
            }
            (e.openGraph.title || e.title) &&
              t.push(
                l.a.createElement("meta", {
                  key: "og:title",
                  property: "og:title",
                  content: e.openGraph.title || r,
                })
              ),
              (e.openGraph.description || e.description) &&
                t.push(
                  l.a.createElement("meta", {
                    key: "og:description",
                    property: "og:description",
                    content: e.openGraph.description || e.description,
                  })
                ),
              e.defaultOpenGraphImageWidth &&
                (h.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth),
              e.defaultOpenGraphImageHeight &&
                (h.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight),
              e.openGraph.images &&
                e.openGraph.images.length &&
                e.openGraph.images.forEach(function (e, r) {
                  t.push(
                    l.a.createElement("meta", {
                      key: "og:image:0" + r,
                      property: "og:image",
                      content: e.url,
                    })
                  ),
                    e.alt &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "og:image:alt0" + r,
                          property: "og:image:alt",
                          content: e.alt,
                        })
                      ),
                    e.width
                      ? t.push(
                          l.a.createElement("meta", {
                            key: "og:image:width0" + r,
                            property: "og:image:width",
                            content: e.width.toString(),
                          })
                        )
                      : h.defaultOpenGraphImageWidth &&
                        t.push(
                          l.a.createElement("meta", {
                            key: "og:image:width0" + r,
                            property: "og:image:width",
                            content: h.defaultOpenGraphImageWidth.toString(),
                          })
                        ),
                    e.height
                      ? t.push(
                          l.a.createElement("meta", {
                            key: "og:image:height" + r,
                            property: "og:image:height",
                            content: e.height.toString(),
                          })
                        )
                      : h.defaultOpenGraphImageHeight &&
                        t.push(
                          l.a.createElement("meta", {
                            key: "og:image:height" + r,
                            property: "og:image:height",
                            content: h.defaultOpenGraphImageHeight.toString(),
                          })
                        );
                }),
              e.defaultOpenGraphVideoWidth &&
                (h.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth),
              e.defaultOpenGraphVideoHeight &&
                (h.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight),
              e.openGraph.videos &&
                e.openGraph.videos.length &&
                e.openGraph.videos.forEach(function (e, r) {
                  t.push(
                    l.a.createElement("meta", {
                      key: "og:video:0" + r,
                      property: "og:video",
                      content: e.url,
                    })
                  ),
                    e.alt &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "og:video:alt0" + r,
                          property: "og:video:alt",
                          content: e.alt,
                        })
                      ),
                    e.width
                      ? t.push(
                          l.a.createElement("meta", {
                            key: "og:video:width0" + r,
                            property: "og:video:width",
                            content: e.width.toString(),
                          })
                        )
                      : h.defaultOpenGraphVideoWidth &&
                        t.push(
                          l.a.createElement("meta", {
                            key: "og:video:width0" + r,
                            property: "og:video:width",
                            content: h.defaultOpenGraphVideoWidth.toString(),
                          })
                        ),
                    e.height
                      ? t.push(
                          l.a.createElement("meta", {
                            key: "og:video:height" + r,
                            property: "og:video:height",
                            content: e.height.toString(),
                          })
                        )
                      : h.defaultOpenGraphVideoHeight &&
                        t.push(
                          l.a.createElement("meta", {
                            key: "og:video:height" + r,
                            property: "og:video:height",
                            content: h.defaultOpenGraphVideoHeight.toString(),
                          })
                        );
                }),
              e.openGraph.locale &&
                t.push(
                  l.a.createElement("meta", {
                    key: "og:locale",
                    property: "og:locale",
                    content: e.openGraph.locale,
                  })
                ),
              e.openGraph.site_name &&
                t.push(
                  l.a.createElement("meta", {
                    key: "og:site_name",
                    property: "og:site_name",
                    content: e.openGraph.site_name,
                  })
                );
          }
          return (
            e.canonical &&
              t.push(
                l.a.createElement("link", {
                  rel: "canonical",
                  href: e.canonical,
                  key: "canonical",
                })
              ),
            e.additionalMetaTags &&
              e.additionalMetaTags.length > 0 &&
              e.additionalMetaTags.forEach(function (e) {
                t.push(
                  l.a.createElement(
                    "meta",
                    Object.assign({ key: e.name ? e.name : e.property }, e)
                  )
                );
              }),
            t
          );
        },
        f =
          (c.Component,
          (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return (
              u(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.title,
                  r = e.noindex,
                  n = void 0 !== r && r,
                  o = e.nofollow,
                  i = e.description,
                  a = e.canonical,
                  s = e.openGraph,
                  c = e.facebook,
                  u = e.twitter,
                  h = e.additionalMetaTags,
                  f = e.titleTemplate,
                  m = e.mobileAlternate,
                  g = e.languageAlternates;
                return l.a.createElement(
                  p.a,
                  null,
                  d({
                    title: t,
                    noindex: n,
                    nofollow: o,
                    description: i,
                    canonical: a,
                    facebook: c,
                    openGraph: s,
                    additionalMetaTags: h,
                    twitter: u,
                    titleTemplate: f,
                    mobileAlternate: m,
                    languageAlternates: g,
                  })
                );
              }),
              t
            );
          })(c.Component));
      function m(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(r), !0).forEach(function (t) {
                n(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : m(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      t.default = function (e) {
        var t = e.Component,
          r = e.pageProps;
        return Object(o.jsxs)(o.Fragment, {
          children: [
            Object(o.jsx)(f, {
              description:
                "The personal website and portfolio of Ashley Chang, who is a student of Computer Science at Brown University.",
              nofollow: !0,
            }),
            Object(o.jsxs)(p.a, {
              children: [
                Object(o.jsx)("link", {
                  rel: "icon",
                  href: "/apple-touch-icon.png",
                  className: "jsx-789584226",
                }),
                Object(o.jsx)("style", {
                  children:
                    "@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');",
                }),
                Object(o.jsx)("link", {
                  href: "https://fonts.gstatic.com/",
                  className: "jsx-789584226",
                }),
                Object(o.jsx)("link", {
                  href:
                    "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
                  rel: "stylesheet",
                  className: "jsx-789584226",
                }),
                Object(o.jsx)("title", {
                  className: "jsx-789584226",
                  children: "Ashley Chang",
                }),
              ],
            }),
            Object(o.jsx)(a.a, {
              id: "789584226",
              children: ["#__next{width:100%;}"],
            }),
            Object(o.jsx)(
              t,
              g(
                g({}, r),
                {},
                {
                  className:
                    "jsx-789584226 " +
                    ((r && null != r.className && r.className) || ""),
                }
              )
            ),
          ],
        });
      };
    },
    "3niX": function (e, t, r) {
      "use strict";
      (t.__esModule = !0),
        (t.flush = function () {
          var e = i.cssRules();
          return i.flush(), e;
        }),
        (t.default = void 0);
      var n,
        o = r("q1tI");
      var i = new ((n = r("SevZ")) && n.__esModule
          ? n
          : { default: n }
        ).default(),
        a = (function (e) {
          var t, r;
          function n(t) {
            var r;
            return ((r = e.call(this, t) || this).prevProps = {}), r;
          }
          (r = e),
            ((t = n).prototype = Object.create(r.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = r),
            (n.dynamic = function (e) {
              return e
                .map(function (e) {
                  var t = e[0],
                    r = e[1];
                  return i.computeId(t, r);
                })
                .join(" ");
            });
          var o = n.prototype;
          return (
            (o.shouldComponentUpdate = function (e) {
              return (
                this.props.id !== e.id ||
                String(this.props.dynamic) !== String(e.dynamic)
              );
            }),
            (o.componentWillUnmount = function () {
              i.remove(this.props);
            }),
            (o.render = function () {
              return (
                this.shouldComponentUpdate(this.prevProps) &&
                  (this.prevProps.id && i.remove(this.prevProps),
                  i.add(this.props),
                  (this.prevProps = this.props)),
                null
              );
            }),
            n
          );
        })(o.Component);
      t.default = a;
    },
    "8Kt/": function (e, t, r) {
      "use strict";
      r("lSNA");
      (t.__esModule = !0), (t.defaultHead = l), (t.default = void 0);
      var n,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== typeof e && "function" !== typeof e))
            return { default: e };
          var t = c();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(r, o, i)
                : (r[o] = e[o]);
            }
          (r.default = e), t && t.set(e, r);
          return r;
        })(r("q1tI")),
        i = (n = r("Xuae")) && n.__esModule ? n : { default: n },
        a = r("lwAK"),
        s = r("FYa8"),
        p = r("/0+H");
      function c() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function l() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [o.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              o.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function u(e, t) {
        return "string" === typeof t || "number" === typeof t
          ? e
          : t.type === o.default.Fragment
          ? e.concat(
              o.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return "string" === typeof t || "number" === typeof t
                  ? e
                  : e.concat(t);
              },
              [])
            )
          : e.concat(t);
      }
      var h = ["name", "httpEquiv", "charSet", "itemProp"];
      function d(e, t) {
        return e
          .reduce(function (e, t) {
            var r = o.default.Children.toArray(t.props.children);
            return e.concat(r);
          }, [])
          .reduce(u, [])
          .reverse()
          .concat(l(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                r = new Set(),
                n = {};
              return function (o) {
                var i = !0;
                if (
                  o.key &&
                  "number" !== typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  var a = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(a) ? (i = !1) : e.add(a);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (i = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (var s = 0, p = h.length; s < p; s++) {
                      var c = h[s];
                      if (o.props.hasOwnProperty(c))
                        if ("charSet" === c) r.has(c) ? (i = !1) : r.add(c);
                        else {
                          var l = o.props[c],
                            u = n[c] || new Set();
                          u.has(l) ? (i = !1) : (u.add(l), (n[c] = u));
                        }
                    }
                }
                return i;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var r = e.key || t;
            return o.default.cloneElement(e, { key: r });
          });
      }
      function f(e) {
        var t = e.children,
          r = (0, o.useContext)(a.AmpStateContext),
          n = (0, o.useContext)(s.HeadManagerContext);
        return o.default.createElement(
          i.default,
          {
            reduceComponentsToState: d,
            headManager: n,
            inAmpMode: (0, p.isInAmpMode)(r),
          },
          t
        );
      }
      f.rewind = function () {};
      var m = f;
      t.default = m;
    },
    "8oxB": function (e, t) {
      var r,
        n,
        o = (e.exports = {});
      function i() {
        throw new Error("setTimeout has not been defined");
      }
      function a() {
        throw new Error("clearTimeout has not been defined");
      }
      function s(e) {
        if (r === setTimeout) return setTimeout(e, 0);
        if ((r === i || !r) && setTimeout)
          return (r = setTimeout), setTimeout(e, 0);
        try {
          return r(e, 0);
        } catch (t) {
          try {
            return r.call(null, e, 0);
          } catch (t) {
            return r.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          r = "function" === typeof setTimeout ? setTimeout : i;
        } catch (e) {
          r = i;
        }
        try {
          n = "function" === typeof clearTimeout ? clearTimeout : a;
        } catch (e) {
          n = a;
        }
      })();
      var p,
        c = [],
        l = !1,
        u = -1;
      function h() {
        l &&
          p &&
          ((l = !1), p.length ? (c = p.concat(c)) : (u = -1), c.length && d());
      }
      function d() {
        if (!l) {
          var e = s(h);
          l = !0;
          for (var t = c.length; t; ) {
            for (p = c, c = []; ++u < t; ) p && p[u].run();
            (u = -1), (t = c.length);
          }
          (p = null),
            (l = !1),
            (function (e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === a || !n) && clearTimeout)
                return (n = clearTimeout), clearTimeout(e);
              try {
                n(e);
              } catch (t) {
                try {
                  return n.call(null, e);
                } catch (t) {
                  return n.call(this, e);
                }
              }
            })(e);
        }
      }
      function f(e, t) {
        (this.fun = e), (this.array = t);
      }
      function m() {}
      (o.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        c.push(new f(e, t)), 1 !== c.length || l || s(d);
      }),
        (f.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (o.title = "browser"),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ""),
        (o.versions = {}),
        (o.on = m),
        (o.addListener = m),
        (o.once = m),
        (o.off = m),
        (o.removeListener = m),
        (o.removeAllListeners = m),
        (o.emit = m),
        (o.prependListener = m),
        (o.prependOnceListener = m),
        (o.listeners = function (e) {
          return [];
        }),
        (o.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (o.cwd = function () {
          return "/";
        }),
        (o.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (o.umask = function () {
          return 0;
        });
    },
    "9kyW": function (e, t, r) {
      "use strict";
      e.exports = function (e) {
        for (var t = 5381, r = e.length; r; ) t = (33 * t) ^ e.charCodeAt(--r);
        return t >>> 0;
      };
    },
    Bnag: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      };
    },
    EbDI: function (e, t) {
      e.exports = function (e) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      };
    },
    GcxT: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r("1TCz");
        },
      ]);
    },
    Ijbi: function (e, t, r) {
      var n = r("WkPL");
      e.exports = function (e) {
        if (Array.isArray(e)) return n(e);
      };
    },
    "JLJ+": function (e, t, r) {},
    MX0m: function (e, t, r) {
      e.exports = r("3niX");
    },
    RA0E: function (e, t, r) {},
    RIqP: function (e, t, r) {
      var n = r("Ijbi"),
        o = r("EbDI"),
        i = r("ZhPi"),
        a = r("Bnag");
      e.exports = function (e) {
        return n(e) || o(e) || i(e) || a();
      };
    },
    SevZ: function (e, t, r) {
      "use strict";
      (t.__esModule = !0), (t.default = void 0);
      var n = i(r("9kyW")),
        o = i(r("bVZc"));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var a = (function () {
        function e(e) {
          var t = void 0 === e ? {} : e,
            r = t.styleSheet,
            n = void 0 === r ? null : r,
            i = t.optimizeForSpeed,
            a = void 0 !== i && i,
            s = t.isBrowser,
            p = void 0 === s ? "undefined" !== typeof window : s;
          (this._sheet =
            n || new o.default({ name: "styled-jsx", optimizeForSpeed: a })),
            this._sheet.inject(),
            n &&
              "boolean" === typeof a &&
              (this._sheet.setOptimizeForSpeed(a),
              (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
            (this._isBrowser = p),
            (this._fromServer = void 0),
            (this._indices = {}),
            (this._instancesCounts = {}),
            (this.computeId = this.createComputeId()),
            (this.computeSelector = this.createComputeSelector());
        }
        var t = e.prototype;
        return (
          (t.add = function (e) {
            var t = this;
            void 0 === this._optimizeForSpeed &&
              ((this._optimizeForSpeed = Array.isArray(e.children)),
              this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
              (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              this._isBrowser &&
                !this._fromServer &&
                ((this._fromServer = this.selectFromServer()),
                (this._instancesCounts = Object.keys(this._fromServer).reduce(
                  function (e, t) {
                    return (e[t] = 0), e;
                  },
                  {}
                )));
            var r = this.getIdAndRules(e),
              n = r.styleId,
              o = r.rules;
            if (n in this._instancesCounts) this._instancesCounts[n] += 1;
            else {
              var i = o
                .map(function (e) {
                  return t._sheet.insertRule(e);
                })
                .filter(function (e) {
                  return -1 !== e;
                });
              (this._indices[n] = i), (this._instancesCounts[n] = 1);
            }
          }),
          (t.remove = function (e) {
            var t = this,
              r = this.getIdAndRules(e).styleId;
            if (
              ((function (e, t) {
                if (!e) throw new Error("StyleSheetRegistry: " + t + ".");
              })(r in this._instancesCounts, "styleId: `" + r + "` not found"),
              (this._instancesCounts[r] -= 1),
              this._instancesCounts[r] < 1)
            ) {
              var n = this._fromServer && this._fromServer[r];
              n
                ? (n.parentNode.removeChild(n), delete this._fromServer[r])
                : (this._indices[r].forEach(function (e) {
                    return t._sheet.deleteRule(e);
                  }),
                  delete this._indices[r]),
                delete this._instancesCounts[r];
            }
          }),
          (t.update = function (e, t) {
            this.add(t), this.remove(e);
          }),
          (t.flush = function () {
            this._sheet.flush(),
              this._sheet.inject(),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {}),
              (this.computeId = this.createComputeId()),
              (this.computeSelector = this.createComputeSelector());
          }),
          (t.cssRules = function () {
            var e = this,
              t = this._fromServer
                ? Object.keys(this._fromServer).map(function (t) {
                    return [t, e._fromServer[t]];
                  })
                : [],
              r = this._sheet.cssRules();
            return t.concat(
              Object.keys(this._indices)
                .map(function (t) {
                  return [
                    t,
                    e._indices[t]
                      .map(function (e) {
                        return r[e].cssText;
                      })
                      .join(e._optimizeForSpeed ? "" : "\n"),
                  ];
                })
                .filter(function (e) {
                  return Boolean(e[1]);
                })
            );
          }),
          (t.createComputeId = function () {
            var e = {};
            return function (t, r) {
              if (!r) return "jsx-" + t;
              var o = String(r),
                i = t + o;
              return (
                e[i] || (e[i] = "jsx-" + (0, n.default)(t + "-" + o)), e[i]
              );
            };
          }),
          (t.createComputeSelector = function (e) {
            void 0 === e && (e = /__jsx-style-dynamic-selector/g);
            var t = {};
            return function (r, n) {
              this._isBrowser || (n = n.replace(/\/style/gi, "\\/style"));
              var o = r + n;
              return t[o] || (t[o] = n.replace(e, r)), t[o];
            };
          }),
          (t.getIdAndRules = function (e) {
            var t = this,
              r = e.children,
              n = e.dynamic,
              o = e.id;
            if (n) {
              var i = this.computeId(o, n);
              return {
                styleId: i,
                rules: Array.isArray(r)
                  ? r.map(function (e) {
                      return t.computeSelector(i, e);
                    })
                  : [this.computeSelector(i, r)],
              };
            }
            return {
              styleId: this.computeId(o),
              rules: Array.isArray(r) ? r : [r],
            };
          }),
          (t.selectFromServer = function () {
            return Array.prototype.slice
              .call(document.querySelectorAll('[id^="__jsx-"]'))
              .reduce(function (e, t) {
                return (e[t.id.slice(2)] = t), e;
              }, {});
          }),
          e
        );
      })();
      t.default = a;
    },
    Xuae: function (e, t, r) {
      "use strict";
      var n = r("RIqP"),
        o = r("lwsE"),
        i = r("W8MJ"),
        a = (r("PJYZ"), r("7W2i")),
        s = r("a1gu"),
        p = r("Nsbk");
      function c(e) {
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
          var r,
            n = p(e);
          if (t) {
            var o = p(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return s(this, r);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var l = r("q1tI"),
        u = (function (e) {
          a(r, e);
          var t = c(r);
          function r(e) {
            var i;
            return (
              o(this, r),
              ((i = t.call(this, e))._hasHeadManager = void 0),
              (i.emitChange = function () {
                i._hasHeadManager &&
                  i.props.headManager.updateHead(
                    i.props.reduceComponentsToState(
                      n(i.props.headManager.mountedInstances),
                      i.props
                    )
                  );
              }),
              (i._hasHeadManager =
                i.props.headManager && i.props.headManager.mountedInstances),
              i
            );
          }
          return (
            i(r, [
              {
                key: "componentDidMount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.add(this),
                    this.emitChange();
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.emitChange();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.delete(this),
                    this.emitChange();
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            r
          );
        })(l.Component);
      t.default = u;
    },
    YtDE: function (e, t, r) {},
    bVZc: function (e, t, r) {
      "use strict";
      (function (e) {
        function r(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        (t.__esModule = !0), (t.default = void 0);
        var n = "undefined" !== typeof e && e.env && !0,
          o = function (e) {
            return "[object String]" === Object.prototype.toString.call(e);
          },
          i = (function () {
            function e(e) {
              var t = void 0 === e ? {} : e,
                r = t.name,
                i = void 0 === r ? "stylesheet" : r,
                s = t.optimizeForSpeed,
                p = void 0 === s ? n : s,
                c = t.isBrowser,
                l = void 0 === c ? "undefined" !== typeof window : c;
              a(o(i), "`name` must be a string"),
                (this._name = i),
                (this._deletedRulePlaceholder =
                  "#" + i + "-deleted-rule____{}"),
                a(
                  "boolean" === typeof p,
                  "`optimizeForSpeed` must be a boolean"
                ),
                (this._optimizeForSpeed = p),
                (this._isBrowser = l),
                (this._serverSheet = void 0),
                (this._tags = []),
                (this._injected = !1),
                (this._rulesCount = 0);
              var u =
                this._isBrowser &&
                document.querySelector('meta[property="csp-nonce"]');
              this._nonce = u ? u.getAttribute("content") : null;
            }
            var t,
              i,
              s,
              p = e.prototype;
            return (
              (p.setOptimizeForSpeed = function (e) {
                a(
                  "boolean" === typeof e,
                  "`setOptimizeForSpeed` accepts a boolean"
                ),
                  a(
                    0 === this._rulesCount,
                    "optimizeForSpeed cannot be when rules have already been inserted"
                  ),
                  this.flush(),
                  (this._optimizeForSpeed = e),
                  this.inject();
              }),
              (p.isOptimizeForSpeed = function () {
                return this._optimizeForSpeed;
              }),
              (p.inject = function () {
                var e = this;
                if (
                  (a(!this._injected, "sheet already injected"),
                  (this._injected = !0),
                  this._isBrowser && this._optimizeForSpeed)
                )
                  return (
                    (this._tags[0] = this.makeStyleTag(this._name)),
                    (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                    void (
                      this._optimizeForSpeed ||
                      (n ||
                        console.warn(
                          "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."
                        ),
                      this.flush(),
                      (this._injected = !0))
                    )
                  );
                this._serverSheet = {
                  cssRules: [],
                  insertRule: function (t, r) {
                    return (
                      "number" === typeof r
                        ? (e._serverSheet.cssRules[r] = { cssText: t })
                        : e._serverSheet.cssRules.push({ cssText: t }),
                      r
                    );
                  },
                  deleteRule: function (t) {
                    e._serverSheet.cssRules[t] = null;
                  },
                };
              }),
              (p.getSheetForTag = function (e) {
                if (e.sheet) return e.sheet;
                for (var t = 0; t < document.styleSheets.length; t++)
                  if (document.styleSheets[t].ownerNode === e)
                    return document.styleSheets[t];
              }),
              (p.getSheet = function () {
                return this.getSheetForTag(this._tags[this._tags.length - 1]);
              }),
              (p.insertRule = function (e, t) {
                if (
                  (a(o(e), "`insertRule` accepts only strings"),
                  !this._isBrowser)
                )
                  return (
                    "number" !== typeof t &&
                      (t = this._serverSheet.cssRules.length),
                    this._serverSheet.insertRule(e, t),
                    this._rulesCount++
                  );
                if (this._optimizeForSpeed) {
                  var r = this.getSheet();
                  "number" !== typeof t && (t = r.cssRules.length);
                  try {
                    r.insertRule(e, t);
                  } catch (s) {
                    return (
                      n ||
                        console.warn(
                          "StyleSheet: illegal rule: \n\n" +
                            e +
                            "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                        ),
                      -1
                    );
                  }
                } else {
                  var i = this._tags[t];
                  this._tags.push(this.makeStyleTag(this._name, e, i));
                }
                return this._rulesCount++;
              }),
              (p.replaceRule = function (e, t) {
                if (this._optimizeForSpeed || !this._isBrowser) {
                  var r = this._isBrowser ? this.getSheet() : this._serverSheet;
                  if (
                    (t.trim() || (t = this._deletedRulePlaceholder),
                    !r.cssRules[e])
                  )
                    return e;
                  r.deleteRule(e);
                  try {
                    r.insertRule(t, e);
                  } catch (i) {
                    n ||
                      console.warn(
                        "StyleSheet: illegal rule: \n\n" +
                          t +
                          "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                      ),
                      r.insertRule(this._deletedRulePlaceholder, e);
                  }
                } else {
                  var o = this._tags[e];
                  a(o, "old rule at index `" + e + "` not found"),
                    (o.textContent = t);
                }
                return e;
              }),
              (p.deleteRule = function (e) {
                if (this._isBrowser)
                  if (this._optimizeForSpeed) this.replaceRule(e, "");
                  else {
                    var t = this._tags[e];
                    a(t, "rule at index `" + e + "` not found"),
                      t.parentNode.removeChild(t),
                      (this._tags[e] = null);
                  }
                else this._serverSheet.deleteRule(e);
              }),
              (p.flush = function () {
                (this._injected = !1),
                  (this._rulesCount = 0),
                  this._isBrowser
                    ? (this._tags.forEach(function (e) {
                        return e && e.parentNode.removeChild(e);
                      }),
                      (this._tags = []))
                    : (this._serverSheet.cssRules = []);
              }),
              (p.cssRules = function () {
                var e = this;
                return this._isBrowser
                  ? this._tags.reduce(function (t, r) {
                      return (
                        r
                          ? (t = t.concat(
                              Array.prototype.map.call(
                                e.getSheetForTag(r).cssRules,
                                function (t) {
                                  return t.cssText === e._deletedRulePlaceholder
                                    ? null
                                    : t;
                                }
                              )
                            ))
                          : t.push(null),
                        t
                      );
                    }, [])
                  : this._serverSheet.cssRules;
              }),
              (p.makeStyleTag = function (e, t, r) {
                t &&
                  a(
                    o(t),
                    "makeStyleTag acceps only strings as second parameter"
                  );
                var n = document.createElement("style");
                this._nonce && n.setAttribute("nonce", this._nonce),
                  (n.type = "text/css"),
                  n.setAttribute("data-" + e, ""),
                  t && n.appendChild(document.createTextNode(t));
                var i =
                  document.head || document.getElementsByTagName("head")[0];
                return r ? i.insertBefore(n, r) : i.appendChild(n), n;
              }),
              (t = e),
              (i = [
                {
                  key: "length",
                  get: function () {
                    return this._rulesCount;
                  },
                },
              ]) && r(t.prototype, i),
              s && r(t, s),
              e
            );
          })();
        function a(e, t) {
          if (!e) throw new Error("StyleSheet: " + t + ".");
        }
        t.default = i;
      }.call(this, r("8oxB")));
    },
    g4pe: function (e, t, r) {
      e.exports = r("8Kt/");
    },
    lSNA: function (e, t) {
      e.exports = function (e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      };
    },
    lwAK: function (e, t, r) {
      "use strict";
      var n;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var o = ((n = r("q1tI")) && n.__esModule
        ? n
        : { default: n }
      ).default.createContext({});
      t.AmpStateContext = o;
    },
    p9Yi: function (e, t, r) {},
    "s+K2": function (e, t, r) {},
    zPlV: function (e, t, r) {},
    "zhW+": function (e, t, r) {},
  },
  [[0, 0, 1, 2, 3]],
]);
