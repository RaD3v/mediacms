!function () {
    "use strict";
    var e,
    t = {
        1525: function (e, t, r) {
            var n = r(2541),
            o = r(6401);
            (0, n.X)("page-categories", o.CategoriesPage)
        },
        8982: function (e, t, r) {
            r.d(t, {
                ItemListAsync: function () {
                    return v
                }
            }),
            r(2070),
            r(2004),
            r(8407),
            r(6394),
            r(8288),
            r(5677),
            r(2129),
            r(4655),
            r(288),
            r(4458),
            r(3675),
            r(4517),
            r(9751),
            r(8833),
            r(815),
            r(5090),
            r(9174);
            var n = r(5466),
            o = r(3074),
            i = r.n(o),
            a = r(2546),
            l = r(7777),
            u = r(2832),
            c = r(3632),
            s = r(8986);
            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))),
                    r.push.apply(r, n)
                }
                return r
            }
            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(r), !0).forEach((function (t) {
                            y(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                }
                return e
            }
            function y(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r,
                e
            }
            function m() {
                return (m = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++)
                    n[r] = e[r];
                return n
            }
            function v(e) {
                var t,
                r,
                o = (t = (0, a.useItemListSync)(e), r = 11, function (e) {
                    if (Array.isArray(e))
                        return e
                }
                    (t) || function (e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n,
                        o,
                        i = [],
                        a = !0,
                        l = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                        } catch (e) {
                            l = !0,
                            o = e
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (l)
                                    throw o
                            }
                        }
                        return i
                    }
                }
                    (t, r) || function (e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return d(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name),
                        "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? d(e, t) : void 0
                    }
                }
                    (t, r) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                    ()),
                i = o[0],
                l = o[1],
                f = o[2],
                p = o[3],
                y = o[4],
                v = o[5],
                b = o[6],
                g = o[7],
                O = o[8],
                h = o[9],
                j = o[10];
                return (0, n.useEffect)((function () {
                        return p(new s.g(e.pageItems, e.maxItems, e.firstItemRequestUrl, e.requestUrl, g, O)),
                        function () {
                            f && (f.cancelAll(), p(null))
                        }
                    }), []),
                i ? l.length ? n.createElement("div", {
                    className: y.listOuter
                }, h(), n.createElement("div", {
                        ref: v,
                        className: "items-list-wrap"
                    }, n.createElement("div", {
                            ref: b,
                            className: y.list
                        }, l.map((function (t, r) {
                                    return n.createElement(c.H, m({
                                            key: r
                                        }, (0, c.j)(e, t, r)))
                                })))), j()) : null : n.createElement(u.K, {
                    className: y.listOuter
                })
            }
            v.propTypes = p(p({}, l.s.propTypes), {}, {
                items: i().array,
                requestUrl: i().string.isRequired,
                firstItemRequestUrl: i().string
            }),
            v.defaultProps = p(p({}, l.s.defaultProps), {}, {
                requestUrl: null,
                firstItemRequestUrl: null,
                pageItems: 24
            })
        },
        824: function (e, t, r) {
            r.r(t),
            r.d(t, {
                LazyLoadItemListAsync: function () {
                    return d
                }
            }),
            r(2070),
            r(2004),
            r(8407),
            r(6394),
            r(8288),
            r(5677),
            r(2129),
            r(4655),
            r(288),
            r(4458),
            r(3675),
            r(4517),
            r(9751),
            r(8833),
            r(815),
            r(5090),
            r(9174);
            var n = r(5466),
            o = r(8578),
            i = r(2546),
            a = r(8982),
            l = r(2832),
            u = r(3632),
            c = r(8986);
            function s(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))),
                    r.push.apply(r, n)
                }
                return r
            }
            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach((function (t) {
                            p(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                }
                return e
            }
            function p(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r,
                e
            }
            function y() {
                return (y = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++)
                    n[r] = e[r];
                return n
            }
            function d(e) {
                var t,
                r,
                a = (t = (0, i.useItemListLazyLoad)(e), r = 13, function (e) {
                    if (Array.isArray(e))
                        return e
                }
                    (t) || function (e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n,
                        o,
                        i = [],
                        a = !0,
                        l = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                        } catch (e) {
                            l = !0,
                            o = e
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (l)
                                    throw o
                            }
                        }
                        return i
                    }
                }
                    (t, r) || function (e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return m(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name),
                        "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? m(e, t) : void 0
                    }
                }
                    (t, r) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                    ()),
                s = a[0],
                f = a[1],
                p = a[2],
                d = a[3],
                v = a[4],
                b = a[5],
                g = a[6],
                O = a[7],
                h = a[8],
                j = a[9],
                w = a[10],
                P = a[11],
                E = a[12];
                return (0, n.useEffect)((function () {
                        return d(new c.g(e.pageItems, e.maxItems, e.firstItemRequestUrl, e.requestUrl, b, g)),
                        o.PageStore.on("window_scroll", O),
                        o.PageStore.on("document_visibility_change", h),
                        O(),
                        function () {
                            o.PageStore.removeListener("window_scroll", O),
                            o.PageStore.removeListener("document_visibility_change", h),
                            p && (p.cancelAll(), d(null))
                        }
                    }), []),
                f ? s.length ? n.createElement("div", {
                    className: v.listOuter
                }, P(), n.createElement("div", {
                        ref: j,
                        className: "items-list-wrap"
                    }, n.createElement("div", {
                            ref: w,
                            className: v.list
                        }, s.map((function (t, r) {
                                    return n.createElement(u.H, y({
                                            key: r
                                        }, (0, u.j)(e, t, r)))
                                })))), E()) : null : n.createElement(l.K, {
                    className: v.listOuter
                })
            }
            d.propTypes = f({}, a.ItemListAsync.propTypes),
            d.defaultProps = f(f({}, a.ItemListAsync.defaultProps), {}, {
                pageItems: 2
            })
        },
        5910: function (e, t, r) {
            var n = this && this.__importDefault || function (e) {
                return e && e.__esModule ? e : {
                default:
                    e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.MediaListWrapper = void 0;
            var o = n(r(5466)),
            i = r(7180);
            r(3804),
            t.MediaListWrapper = function (e) {
                var t = e.title,
                r = e.viewAllLink,
                n = e.viewAllText,
                a = e.className,
                l = e.style,
                u = e.children;
                return o.default.createElement("div", {
                    className: (a ? a + " " : "") + "media-list-wrapper",
                    style: l
                }, o.default.createElement(i.MediaListRow, {
                        title: t,
                        viewAllLink: r,
                        viewAllText: n
                    }, u || null))
            }
        },
        6401: function (e, t, r) {
            var n = this && this.__importDefault || function (e) {
                return e && e.__esModule ? e : {
                default:
                    e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.CategoriesPage = void 0;
            var o = n(r(5466)),
            i = r(3613),
            a = r(5910),
            l = r(824),
            u = r(7637);
            t.CategoriesPage = function (e) {
                var t = e.id,
                r = void 0 === t ? "categories" : t,
                n = e.title,
                c = void 0 === n ? "Categories" : n;
                return o.default.createElement(u.Page, {
                    id: r
                }, o.default.createElement(i.ApiUrlConsumer, null, (function (e) {
                            return o.default.createElement(a.MediaListWrapper, {
                                title: c,
                                className: "items-list-ver"
                            }, o.default.createElement(l.LazyLoadItemListAsync, {
                                    singleLinkContent: !0,
                                    inCategoriesList: !0,
                                    requestUrl: e.archive.categories
                                }))
                        })))
            }
        }
    },
    r = {};
    function n(e) {
        var o = r[e];
        if (void 0 !== o)
            return o.exports;
        var i = r[e] = {
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, n),
        i.exports
    }
    n.m = t,
    e = [],
    n.O = function (t, r, o, i) {
        if (!r) {
            var a = 1 / 0;
            for (c = 0; c < e.length; c++) {
                r = e[c][0],
                o = e[c][1],
                i = e[c][2];
                for (var l = !0, u = 0; u < r.length; u++)
                    (!1 & i || a >= i) && Object.keys(n.O).every((function (e) {
                            return n.O[e](r[u])
                        })) ? r.splice(u--, 1) : (l = !1, i < a && (a = i));
                l && (e.splice(c--, 1), t = o())
            }
            return t
        }
        i = i || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > i; c--)
            e[c] = e[c - 1];
        e[c] = [r, o, i]
    },
    n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        }
         : function () {
            return e
        };
        return n.d(t, {
            a: t
        }),
        t
    },
    n.d = function (e, t) {
        for (var r in t)
            n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
    },
    n.g = function () {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }
    (),
    n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    n.j = 267,
    function () {
        var e = {
            267: 0
        };
        n.O.j = function (t) {
            return 0 === e[t]
        };
        var t = function (t, r) {
            var o,
            i,
            a = r[0],
            l = r[1],
            u = r[2],
            c = 0;
            for (o in l)
                n.o(l, o) && (n.m[o] = l[o]);
            if (u)
                var s = u(n);
            for (t && t(r); c < a.length; c++)
                i = a[c], n.o(e, i) && e[i] && e[i][0](), e[a[c]] = 0;
            return n.O(s)
        },
        r = self.webpackChunkmediacms_frontend = self.webpackChunkmediacms_frontend || [];
        r.forEach(t.bind(null, 0)),
        r.push = t.bind(null, r.push.bind(r))
    }
    ();
    var o = n.O(void 0, [431], (function () {
                return n(1525)
            }));
    o = n.O(o)
}
();
