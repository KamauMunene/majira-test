/*! VelocityJS.org (1.2.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */ /*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */ (function (
    e
) {
    function t(e2) {
        var t2 = e2.length,
            r2 = $2.type(e2);
        return r2 === "function" || $2.isWindow(e2) ? !1 : e2.nodeType === 1 && t2 ? !0 : r2 === "array" || t2 === 0 || (typeof t2 == "number" && t2 > 0 && t2 - 1 in e2);
    }
    if (!e.jQuery) {
        var $2 = function (e2, t2) {
            return new $2.fn.init(e2, t2);
        };
        ($2.isWindow = function (e2) {
            return e2 != null && e2 == e2.window;
        }),
            ($2.type = function (e2) {
                return e2 == null ? e2 + "" : typeof e2 == "object" || typeof e2 == "function" ? a[o.call(e2)] || "object" : typeof e2;
            }),
            ($2.isArray =
                Array.isArray ||
                function (e2) {
                    return $2.type(e2) === "array";
                }),
            ($2.isPlainObject = function (e2) {
                var t2;
                if (!e2 || $2.type(e2) !== "object" || e2.nodeType || $2.isWindow(e2)) return !1;
                try {
                    if (e2.constructor && !n.call(e2, "constructor") && !n.call(e2.constructor.prototype, "isPrototypeOf")) return !1;
                } catch (r2) {
                    return !1;
                }
                for (t2 in e2);
                return t2 === void 0 || n.call(e2, t2);
            }),
            ($2.each = function (e2, r2, a2) {
                var n2,
                    o2 = 0,
                    i2 = e2.length,
                    s2 = t(e2);
                if (a2) {
                    if (s2) for (; i2 > o2 && ((n2 = r2.apply(e2[o2], a2)), n2 !== !1); o2++);
                    else for (o2 in e2) if (((n2 = r2.apply(e2[o2], a2)), n2 === !1)) break;
                } else if (s2) for (; i2 > o2 && ((n2 = r2.call(e2[o2], o2, e2[o2])), n2 !== !1); o2++);
                else for (o2 in e2) if (((n2 = r2.call(e2[o2], o2, e2[o2])), n2 === !1)) break;
                return e2;
            }),
            ($2.data = function (e2, t2, a2) {
                if (a2 === void 0) {
                    var n2 = e2[$2.expando],
                        o2 = n2 && r[n2];
                    if (t2 === void 0) return o2;
                    if (o2 && t2 in o2) return o2[t2];
                } else if (t2 !== void 0) {
                    var n2 = e2[$2.expando] || (e2[$2.expando] = ++$2.uuid);
                    return (r[n2] = r[n2] || {}), (r[n2][t2] = a2), a2;
                }
            }),
            ($2.removeData = function (e2, t2) {
                var a2 = e2[$2.expando],
                    n2 = a2 && r[a2];
                n2 &&
                    $2.each(t2, function (e3, t3) {
                        delete n2[t3];
                    });
            }),
            ($2.extend = function () {
                var e2,
                    t2,
                    r2,
                    a2,
                    n2,
                    o2,
                    i2 = arguments[0] || {},
                    s2 = 1,
                    l = arguments.length,
                    u = !1;
                for (typeof i2 == "boolean" && ((u = i2), (i2 = arguments[s2] || {}), s2++), typeof i2 != "object" && $2.type(i2) !== "function" && (i2 = {}), s2 === l && ((i2 = this), s2--); l > s2; s2++)
                    if ((n2 = arguments[s2]) != null)
                        for (a2 in n2)
                            (e2 = i2[a2]),
                                (r2 = n2[a2]),
                                i2 !== r2 &&
                                    (u && r2 && ($2.isPlainObject(r2) || (t2 = $2.isArray(r2)))
                                        ? (t2 ? ((t2 = !1), (o2 = e2 && $2.isArray(e2) ? e2 : [])) : (o2 = e2 && $2.isPlainObject(e2) ? e2 : {}), (i2[a2] = $2.extend(u, o2, r2)))
                                        : r2 !== void 0 && (i2[a2] = r2));
                return i2;
            }),
            ($2.queue = function (e2, r2, a2) {
                function n2(e3, r3) {
                    var a3 = r3 || [];
                    return (
                        e3 != null &&
                            (t(Object(e3))
                                ? (function (e4, t2) {
                                      for (var r4 = +t2.length, a4 = 0, n3 = e4.length; r4 > a4; ) e4[n3++] = t2[a4++];
                                      if (r4 !== r4) for (; t2[a4] !== void 0; ) e4[n3++] = t2[a4++];
                                      return (e4.length = n3), e4;
                                  })(a3, typeof e3 == "string" ? [e3] : e3)
                                : [].push.call(a3, e3)),
                        a3
                    );
                }
                if (e2) {
                    r2 = (r2 || "fx") + "queue";
                    var o2 = $2.data(e2, r2);
                    return a2 ? (!o2 || $2.isArray(a2) ? (o2 = $2.data(e2, r2, n2(a2))) : o2.push(a2), o2) : o2 || [];
                }
            }),
            ($2.dequeue = function (e2, t2) {
                $2.each(e2.nodeType ? [e2] : e2, function (e3, r2) {
                    t2 = t2 || "fx";
                    var a2 = $2.queue(r2, t2),
                        n2 = a2.shift();
                    n2 === "inprogress" && (n2 = a2.shift()),
                        n2 &&
                            (t2 === "fx" && a2.unshift("inprogress"),
                            n2.call(r2, function () {
                                $2.dequeue(r2, t2);
                            }));
                });
            }),
            ($2.fn = $2.prototype = {
                init: function (e2) {
                    if (e2.nodeType) return (this[0] = e2), this;
                    throw new Error("Not a DOM node.");
                },
                offset: function () {
                    var t2 = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };
                    return { top: t2.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), left: t2.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0) };
                },
                position: function () {
                    function e2() {
                        for (var e3 = this.offsetParent || document; e3 && !e3.nodeType.toLowerCase === "html" && e3.style.position === "static"; ) e3 = e3.offsetParent;
                        return e3 || document;
                    }
                    var t2 = this[0],
                        e2 = e2.apply(t2),
                        r2 = this.offset(),
                        a2 = /^(?:body|html)$/i.test(e2.nodeName) ? { top: 0, left: 0 } : $2(e2).offset();
                    return (
                        (r2.top -= parseFloat(t2.style.marginTop) || 0),
                        (r2.left -= parseFloat(t2.style.marginLeft) || 0),
                        e2.style && ((a2.top += parseFloat(e2.style.borderTopWidth) || 0), (a2.left += parseFloat(e2.style.borderLeftWidth) || 0)),
                        { top: r2.top - a2.top, left: r2.left - a2.left }
                    );
                },
            });
        var r = {};
        ($2.expando = "velocity" + new Date().getTime()), ($2.uuid = 0);
        for (var a = {}, n = a.hasOwnProperty, o = a.toString, i = "Boolean Number String Function Array Date RegExp Object Error".split(" "), s = 0; s < i.length; s++) a["[object " + i[s] + "]"] = i[s].toLowerCase();
        ($2.fn.init.prototype = $2.fn), (e.Velocity = { Utilities: $2 });
    }
})(window),
    (function (e) {
        typeof module == "object" && typeof module.exports == "object" ? (module.exports = e()) : typeof define == "function" && define.amd ? define(e) : e();
    })(function () {
        return (function (e, t, r, a) {
            function n(e2) {
                for (var t2 = -1, r2 = e2 ? e2.length : 0, a2 = []; ++t2 < r2; ) {
                    var n2 = e2[t2];
                    n2 && a2.push(n2);
                }
                return a2;
            }
            function o(e2) {
                return g.isWrapped(e2) ? (e2 = [].slice.call(e2)) : g.isNode(e2) && (e2 = [e2]), e2;
            }
            function i(e2) {
                var t2 = $2.data(e2, "velocity");
                return t2 === null ? a : t2;
            }
            function s(e2) {
                return function (t2) {
                    return Math.round(t2 * e2) * (1 / e2);
                };
            }
            function l(e2, r2, a2, n2) {
                function o2(e3, t2) {
                    return 1 - 3 * t2 + 3 * e3;
                }
                function i2(e3, t2) {
                    return 3 * t2 - 6 * e3;
                }
                function s2(e3) {
                    return 3 * e3;
                }
                function l2(e3, t2, r3) {
                    return ((o2(t2, r3) * e3 + i2(t2, r3)) * e3 + s2(t2)) * e3;
                }
                function u2(e3, t2, r3) {
                    return 3 * o2(t2, r3) * e3 * e3 + 2 * i2(t2, r3) * e3 + s2(t2);
                }
                function c2(t2, r3) {
                    for (var n3 = 0; m2 > n3; ++n3) {
                        var o3 = u2(r3, e2, a2);
                        if (o3 === 0) return r3;
                        var i3 = l2(r3, e2, a2) - t2;
                        r3 -= i3 / o3;
                    }
                    return r3;
                }
                function p2() {
                    for (var t2 = 0; b2 > t2; ++t2) w[t2] = l2(t2 * x2, e2, a2);
                }
                function f2(t2, r3, n3) {
                    var o3,
                        i3,
                        s3 = 0;
                    do (i3 = r3 + (n3 - r3) / 2), (o3 = l2(i3, e2, a2) - t2), o3 > 0 ? (n3 = i3) : (r3 = i3);
                    while (Math.abs(o3) > h2 && ++s3 < v2);
                    return i3;
                }
                function d2(t2) {
                    for (var r3 = 0, n3 = 1, o3 = b2 - 1; n3 != o3 && w[n3] <= t2; ++n3) r3 += x2;
                    --n3;
                    var i3 = (t2 - w[n3]) / (w[n3 + 1] - w[n3]),
                        s3 = r3 + i3 * x2,
                        l3 = u2(s3, e2, a2);
                    return l3 >= y2 ? c2(t2, s3) : l3 == 0 ? s3 : f2(t2, r3, r3 + x2);
                }
                function g2() {
                    (V = !0), (e2 != r2 || a2 != n2) && p2();
                }
                var m2 = 4,
                    y2 = 0.001,
                    h2 = 1e-7,
                    v2 = 10,
                    b2 = 11,
                    x2 = 1 / (b2 - 1),
                    S2 = "Float32Array" in t;
                if (arguments.length !== 4) return !1;
                for (var P2 = 0; 4 > P2; ++P2) if (typeof arguments[P2] != "number" || isNaN(arguments[P2]) || !isFinite(arguments[P2])) return !1;
                (e2 = Math.min(e2, 1)), (a2 = Math.min(a2, 1)), (e2 = Math.max(e2, 0)), (a2 = Math.max(a2, 0));
                var w = S2 ? new Float32Array(b2) : new Array(b2),
                    V = !1,
                    C = function (t2) {
                        return V || g2(), e2 === r2 && a2 === n2 ? t2 : t2 === 0 ? 0 : t2 === 1 ? 1 : l2(d2(t2), r2, n2);
                    };
                C.getControlPoints = function () {
                    return [
                        { x: e2, y: r2 },
                        { x: a2, y: n2 },
                    ];
                };
                var T = "generateBezier(" + [e2, r2, a2, n2] + ")";
                return (
                    (C.toString = function () {
                        return T;
                    }),
                    C
                );
            }
            function u(e2, t2) {
                var r2 = e2;
                return (
                    g.isString(e2)
                        ? v.Easings[e2] || (r2 = !1)
                        : (r2 = g.isArray(e2) && e2.length === 1 ? s.apply(null, e2) : g.isArray(e2) && e2.length === 2 ? b.apply(null, e2.concat([t2])) : g.isArray(e2) && e2.length === 4 ? l.apply(null, e2) : !1),
                    r2 === !1 && (r2 = v.Easings[v.defaults.easing] ? v.defaults.easing : h),
                    r2
                );
            }
            function c(e2) {
                if (e2) {
                    var t2 = new Date().getTime(),
                        r2 = v.State.calls.length;
                    r2 > 1e4 && (v.State.calls = n(v.State.calls));
                    for (var o2 = 0; r2 > o2; o2++)
                        if (v.State.calls[o2]) {
                            var s2 = v.State.calls[o2],
                                l2 = s2[0],
                                u2 = s2[2],
                                f2 = s2[3],
                                d2 = !!f2,
                                m2 = null;
                            f2 || (f2 = v.State.calls[o2][3] = t2 - 16);
                            for (var y2 = Math.min((t2 - f2) / u2.duration, 1), h2 = 0, b2 = l2.length; b2 > h2; h2++) {
                                var S2 = l2[h2],
                                    w = S2.element;
                                if (i(w)) {
                                    var V = !1;
                                    if (u2.display !== a && u2.display !== null && u2.display !== "none") {
                                        if (u2.display === "flex") {
                                            var C = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            $2.each(C, function (e3, t3) {
                                                x.setPropertyValue(w, "display", t3);
                                            });
                                        }
                                        x.setPropertyValue(w, "display", u2.display);
                                    }
                                    u2.visibility !== a && u2.visibility !== "hidden" && x.setPropertyValue(w, "visibility", u2.visibility);
                                    for (var T in S2)
                                        if (T !== "element") {
                                            var k = S2[T],
                                                A,
                                                F = g.isString(k.easing) ? v.Easings[k.easing] : k.easing;
                                            if (y2 === 1) A = k.endValue;
                                            else {
                                                var E = k.endValue - k.startValue;
                                                if (((A = k.startValue + E * F(y2, u2, E)), !d2 && A === k.currentValue)) continue;
                                            }
                                            if (((k.currentValue = A), T === "tween")) m2 = A;
                                            else {
                                                if (x.Hooks.registered[T]) {
                                                    var j = x.Hooks.getRoot(T),
                                                        H = i(w).rootPropertyValueCache[j];
                                                    H && (k.rootPropertyValue = H);
                                                }
                                                var N = x.setPropertyValue(w, T, k.currentValue + (parseFloat(A) === 0 ? "" : k.unitType), k.rootPropertyValue, k.scrollData);
                                                x.Hooks.registered[T] && (i(w).rootPropertyValueCache[j] = x.Normalizations.registered[j] ? x.Normalizations.registered[j]("extract", null, N[1]) : N[1]), N[0] === "transform" && (V = !0);
                                            }
                                        }
                                    u2.mobileHA && i(w).transformCache.translate3d === a && ((i(w).transformCache.translate3d = "(0px, 0px, 0px)"), (V = !0)), V && x.flushTransformCache(w);
                                }
                            }
                            u2.display !== a && u2.display !== "none" && (v.State.calls[o2][2].display = !1),
                                u2.visibility !== a && u2.visibility !== "hidden" && (v.State.calls[o2][2].visibility = !1),
                                u2.progress && u2.progress.call(s2[1], s2[1], y2, Math.max(0, f2 + u2.duration - t2), f2, m2),
                                y2 === 1 && p(o2);
                        }
                }
                v.State.isTicking && P(c);
            }
            function p(e2, t2) {
                if (!v.State.calls[e2]) return !1;
                for (var r2 = v.State.calls[e2][0], n2 = v.State.calls[e2][1], o2 = v.State.calls[e2][2], s2 = v.State.calls[e2][4], l2 = !1, u2 = 0, c2 = r2.length; c2 > u2; u2++) {
                    var p2 = r2[u2].element;
                    if (
                        (t2 || o2.loop || (o2.display === "none" && x.setPropertyValue(p2, "display", o2.display), o2.visibility === "hidden" && x.setPropertyValue(p2, "visibility", o2.visibility)),
                        o2.loop !== !0 && ($2.queue(p2)[1] === a || !/\.velocityQueueEntryFlag/i.test($2.queue(p2)[1])) && i(p2))
                    ) {
                        (i(p2).isAnimating = !1), (i(p2).rootPropertyValueCache = {});
                        var f2 = !1;
                        $2.each(x.Lists.transforms3D, function (e3, t3) {
                            var r3 = /^scale/.test(t3) ? 1 : 0,
                                n3 = i(p2).transformCache[t3];
                            i(p2).transformCache[t3] !== a && new RegExp("^\\(" + r3 + "[^.]").test(n3) && ((f2 = !0), delete i(p2).transformCache[t3]);
                        }),
                            o2.mobileHA && ((f2 = !0), delete i(p2).transformCache.translate3d),
                            f2 && x.flushTransformCache(p2),
                            x.Values.removeClass(p2, "velocity-animating");
                    }
                    if (!t2 && o2.complete && !o2.loop && u2 === c2 - 1)
                        try {
                            o2.complete.call(n2, n2);
                        } catch (d2) {
                            setTimeout(function () {
                                throw d2;
                            }, 1);
                        }
                    s2 && o2.loop !== !0 && s2(n2),
                        i(p2) &&
                            o2.loop === !0 &&
                            !t2 &&
                            ($2.each(i(p2).tweensContainer, function (e3, t3) {
                                /^rotate/.test(e3) && parseFloat(t3.endValue) === 360 && ((t3.endValue = 0), (t3.startValue = 360)),
                                    /^backgroundPosition/.test(e3) && parseFloat(t3.endValue) === 100 && t3.unitType === "%" && ((t3.endValue = 0), (t3.startValue = 100));
                            }),
                            v(p2, "reverse", { loop: !0, delay: o2.delay })),
                        o2.queue !== !1 && $2.dequeue(p2, o2.queue);
                }
                v.State.calls[e2] = !1;
                for (var g2 = 0, m2 = v.State.calls.length; m2 > g2; g2++)
                    if (v.State.calls[g2] !== !1) {
                        l2 = !0;
                        break;
                    }
                l2 === !1 && ((v.State.isTicking = !1), delete v.State.calls, (v.State.calls = []));
            }
            var f = (function () {
                    if (r.documentMode) return r.documentMode;
                    for (var e2 = 7; e2 > 4; e2--) {
                        var t2 = r.createElement("div");
                        if (((t2.innerHTML = "<!--[if IE " + e2 + "]><span></span><![endif]-->"), t2.getElementsByTagName("span").length)) return (t2 = null), e2;
                    }
                    return a;
                })(),
                d = (function () {
                    var e2 = 0;
                    return (
                        t.webkitRequestAnimationFrame ||
                        t.mozRequestAnimationFrame ||
                        function (t2) {
                            var r2 = new Date().getTime(),
                                a2;
                            return (
                                (a2 = Math.max(0, 16 - (r2 - e2))),
                                (e2 = r2 + a2),
                                setTimeout(function () {
                                    t2(r2 + a2);
                                }, a2)
                            );
                        }
                    );
                })(),
                g = {
                    isString: function (e2) {
                        return typeof e2 == "string";
                    },
                    isArray:
                        Array.isArray ||
                        function (e2) {
                            return Object.prototype.toString.call(e2) === "[object Array]";
                        },
                    isFunction: function (e2) {
                        return Object.prototype.toString.call(e2) === "[object Function]";
                    },
                    isNode: function (e2) {
                        return e2 && e2.nodeType;
                    },
                    isNodeList: function (e2) {
                        return typeof e2 == "object" && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e2)) && e2.length !== a && (e2.length === 0 || (typeof e2[0] == "object" && e2[0].nodeType > 0));
                    },
                    isWrapped: function (e2) {
                        return e2 && (e2.jquery || (t.Zepto && t.Zepto.zepto.isZ(e2)));
                    },
                    isSVG: function (e2) {
                        return t.SVGElement && e2 instanceof t.SVGElement;
                    },
                    isEmptyObject: function (e2) {
                        for (var t2 in e2) return !1;
                        return !0;
                    },
                },
                $2,
                m = !1;
            if ((e.fn && e.fn.jquery ? (($2 = e), (m = !0)) : ($2 = t.Velocity.Utilities), 8 >= f && !m)) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (7 >= f) return void (jQuery.fn.velocity = jQuery.fn.animate);
            var y = 400,
                h = "swing",
                v = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: t.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: r.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: [],
                    },
                    CSS: {},
                    Utilities: $2,
                    Redirects: {},
                    Easings: {},
                    Promise: t.Promise,
                    defaults: { queue: "", duration: y, easing: h, begin: a, complete: a, progress: a, display: a, visibility: a, loop: !1, delay: !1, mobileHA: !0, _cacheValues: !0 },
                    init: function (e2) {
                        $2.data(e2, "velocity", { isSVG: g.isSVG(e2), isAnimating: !1, computedStyle: null, tweensContainer: null, rootPropertyValueCache: {}, transformCache: {} });
                    },
                    hook: null,
                    mock: !1,
                    version: { major: 1, minor: 2, patch: 2 },
                    debug: !1,
                };
            t.pageYOffset !== a
                ? ((v.State.scrollAnchor = t), (v.State.scrollPropertyLeft = "pageXOffset"), (v.State.scrollPropertyTop = "pageYOffset"))
                : ((v.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body), (v.State.scrollPropertyLeft = "scrollLeft"), (v.State.scrollPropertyTop = "scrollTop"));
            var b = (function () {
                function e2(e3) {
                    return -e3.tension * e3.x - e3.friction * e3.v;
                }
                function t2(t3, r3, a2) {
                    var n2 = { x: t3.x + a2.dx * r3, v: t3.v + a2.dv * r3, tension: t3.tension, friction: t3.friction };
                    return { dx: n2.v, dv: e2(n2) };
                }
                function r2(r3, a2) {
                    var n2 = { dx: r3.v, dv: e2(r3) },
                        o2 = t2(r3, 0.5 * a2, n2),
                        i2 = t2(r3, 0.5 * a2, o2),
                        s2 = t2(r3, a2, i2),
                        l2 = (1 / 6) * (n2.dx + 2 * (o2.dx + i2.dx) + s2.dx),
                        u2 = (1 / 6) * (n2.dv + 2 * (o2.dv + i2.dv) + s2.dv);
                    return (r3.x = r3.x + l2 * a2), (r3.v = r3.v + u2 * a2), r3;
                }
                return function a2(e3, t3, n2) {
                    var o2 = { x: -1, v: 0, tension: null, friction: null },
                        i2 = [0],
                        s2 = 0,
                        l2 = 1e-4,
                        u2 = 0.016,
                        c2,
                        p2,
                        f2;
                    for (
                        e3 = parseFloat(e3) || 500, t3 = parseFloat(t3) || 20, n2 = n2 || null, o2.tension = e3, o2.friction = t3, c2 = n2 !== null, c2 ? ((s2 = a2(e3, t3)), (p2 = (s2 / n2) * u2)) : (p2 = u2);
                        (f2 = r2(f2 || o2, p2)), i2.push(1 + f2.x), (s2 += 16), Math.abs(f2.x) > l2 && Math.abs(f2.v) > l2;

                    );
                    return c2
                        ? function (e4) {
                              return i2[(e4 * (i2.length - 1)) | 0];
                          }
                        : s2;
                };
            })();
            (v.Easings = {
                linear: function (e2) {
                    return e2;
                },
                swing: function (e2) {
                    return 0.5 - Math.cos(e2 * Math.PI) / 2;
                },
                spring: function (e2) {
                    return 1 - Math.cos(4.5 * e2 * Math.PI) * Math.exp(6 * -e2);
                },
            }),
                $2.each(
                    [
                        ["ease", [0.25, 0.1, 0.25, 1]],
                        ["ease-in", [0.42, 0, 1, 1]],
                        ["ease-out", [0, 0, 0.58, 1]],
                        ["ease-in-out", [0.42, 0, 0.58, 1]],
                        ["easeInSine", [0.47, 0, 0.745, 0.715]],
                        ["easeOutSine", [0.39, 0.575, 0.565, 1]],
                        ["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
                        ["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
                        ["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
                        ["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
                        ["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
                        ["easeOutCubic", [0.215, 0.61, 0.355, 1]],
                        ["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
                        ["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
                        ["easeOutQuart", [0.165, 0.84, 0.44, 1]],
                        ["easeInOutQuart", [0.77, 0, 0.175, 1]],
                        ["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
                        ["easeOutQuint", [0.23, 1, 0.32, 1]],
                        ["easeInOutQuint", [0.86, 0, 0.07, 1]],
                        ["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
                        ["easeOutExpo", [0.19, 1, 0.22, 1]],
                        ["easeInOutExpo", [1, 0, 0, 1]],
                        ["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
                        ["easeOutCirc", [0.075, 0.82, 0.165, 1]],
                        ["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]],
                    ],
                    function (e2, t2) {
                        v.Easings[t2[0]] = l.apply(null, t2[1]);
                    }
                );
            var x = (v.CSS = {
                RegEx: { isHex: /^#([A-f\d]{3}){1,2}$/i, valueUnwrap: /^[A-z]+\((.*)\)$/i, wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"],
                    },
                    registered: {},
                    register: function () {
                        for (var e2 = 0; e2 < x.Lists.colors.length; e2++) {
                            var t2 = x.Lists.colors[e2] === "color" ? "0 0 0 1" : "255 255 255 1";
                            x.Hooks.templates[x.Lists.colors[e2]] = ["Red Green Blue Alpha", t2];
                        }
                        var r2, a2, n2;
                        if (f)
                            for (r2 in x.Hooks.templates) {
                                (a2 = x.Hooks.templates[r2]), (n2 = a2[0].split(" "));
                                var o2 = a2[1].match(x.RegEx.valueSplit);
                                n2[0] === "Color" && (n2.push(n2.shift()), o2.push(o2.shift()), (x.Hooks.templates[r2] = [n2.join(" "), o2.join(" ")]));
                            }
                        for (r2 in x.Hooks.templates) {
                            (a2 = x.Hooks.templates[r2]), (n2 = a2[0].split(" "));
                            for (var e2 in n2) {
                                var i2 = r2 + n2[e2],
                                    s2 = e2;
                                x.Hooks.registered[i2] = [r2, s2];
                            }
                        }
                    },
                    getRoot: function (e2) {
                        var t2 = x.Hooks.registered[e2];
                        return t2 ? t2[0] : e2;
                    },
                    cleanRootPropertyValue: function (e2, t2) {
                        return x.RegEx.valueUnwrap.test(t2) && (t2 = t2.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t2) && (t2 = x.Hooks.templates[e2][1]), t2;
                    },
                    extractValue: function (e2, t2) {
                        var r2 = x.Hooks.registered[e2];
                        if (r2) {
                            var a2 = r2[0],
                                n2 = r2[1];
                            return (t2 = x.Hooks.cleanRootPropertyValue(a2, t2)), t2.toString().match(x.RegEx.valueSplit)[n2];
                        }
                        return t2;
                    },
                    injectValue: function (e2, t2, r2) {
                        var a2 = x.Hooks.registered[e2];
                        if (a2) {
                            var n2 = a2[0],
                                o2 = a2[1],
                                i2,
                                s2;
                            return (r2 = x.Hooks.cleanRootPropertyValue(n2, r2)), (i2 = r2.toString().match(x.RegEx.valueSplit)), (i2[o2] = t2), (s2 = i2.join(" "));
                        }
                        return r2;
                    },
                },
                Normalizations: {
                    registered: {
                        clip: function (e2, t2, r2) {
                            switch (e2) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var a2;
                                    return x.RegEx.wrappedValueAlreadyExtracted.test(r2) ? (a2 = r2) : ((a2 = r2.toString().match(x.RegEx.valueUnwrap)), (a2 = a2 ? a2[1].replace(/,(\s+)?/g, " ") : r2)), a2;
                                case "inject":
                                    return "rect(" + r2 + ")";
                            }
                        },
                        blur: function (e2, t2, r2) {
                            switch (e2) {
                                case "name":
                                    return v.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    var a2 = parseFloat(r2);
                                    if (!a2 && a2 !== 0) {
                                        var n2 = r2.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        a2 = n2 ? n2[1] : 0;
                                    }
                                    return a2;
                                case "inject":
                                    return parseFloat(r2) ? "blur(" + r2 + ")" : "none";
                            }
                        },
                        opacity: function (e2, t2, r2) {
                            if (8 >= f)
                                switch (e2) {
                                    case "name":
                                        return "filter";
                                    case "extract":
                                        var a2 = r2.toString().match(/alpha\(opacity=(.*)\)/i);
                                        return (r2 = a2 ? a2[1] / 100 : 1);
                                    case "inject":
                                        return (t2.style.zoom = 1), parseFloat(r2) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r2), 10) + ")";
                                }
                            else
                                switch (e2) {
                                    case "name":
                                        return "opacity";
                                    case "extract":
                                        return r2;
                                    case "inject":
                                        return r2;
                                }
                        },
                    },
                    register: function () {
                        9 >= f || v.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                        for (var e2 = 0; e2 < x.Lists.transformsBase.length; e2++)
                            (function () {
                                var t2 = x.Lists.transformsBase[e2];
                                x.Normalizations.registered[t2] = function (e3, r2, n2) {
                                    switch (e3) {
                                        case "name":
                                            return "transform";
                                        case "extract":
                                            return i(r2) === a || i(r2).transformCache[t2] === a ? (/^scale/i.test(t2) ? 1 : 0) : i(r2).transformCache[t2].replace(/[()]/g, "");
                                        case "inject":
                                            var o2 = !1;
                                            switch (t2.substr(0, t2.length - 1)) {
                                                case "translate":
                                                    o2 = !/(%|px|em|rem|vw|vh|\d)$/i.test(n2);
                                                    break;
                                                case "scal":
                                                case "scale":
                                                    v.State.isAndroid && i(r2).transformCache[t2] === a && 1 > n2 && (n2 = 1), (o2 = !/(\d)$/i.test(n2));
                                                    break;
                                                case "skew":
                                                    o2 = !/(deg|\d)$/i.test(n2);
                                                    break;
                                                case "rotate":
                                                    o2 = !/(deg|\d)$/i.test(n2);
                                            }
                                            return o2 || (i(r2).transformCache[t2] = "(" + n2 + ")"), i(r2).transformCache[t2];
                                    }
                                };
                            })();
                        for (var e2 = 0; e2 < x.Lists.colors.length; e2++)
                            (function () {
                                var t2 = x.Lists.colors[e2];
                                x.Normalizations.registered[t2] = function (e3, r2, n2) {
                                    switch (e3) {
                                        case "name":
                                            return t2;
                                        case "extract":
                                            var o2;
                                            if (x.RegEx.wrappedValueAlreadyExtracted.test(n2)) o2 = n2;
                                            else {
                                                var i2,
                                                    s2 = { black: "rgb(0, 0, 0)", blue: "rgb(0, 0, 255)", gray: "rgb(128, 128, 128)", green: "rgb(0, 128, 0)", red: "rgb(255, 0, 0)", white: "rgb(255, 255, 255)" };
                                                /^[A-z]+$/i.test(n2) ? (i2 = s2[n2] !== a ? s2[n2] : s2.black) : x.RegEx.isHex.test(n2) ? (i2 = "rgb(" + x.Values.hexToRgb(n2).join(" ") + ")") : /^rgba?\(/i.test(n2) || (i2 = s2.black),
                                                    (o2 = (i2 || n2)
                                                        .toString()
                                                        .match(x.RegEx.valueUnwrap)[1]
                                                        .replace(/,(\s+)?/g, " "));
                                            }
                                            return 8 >= f || o2.split(" ").length !== 3 || (o2 += " 1"), o2;
                                        case "inject":
                                            return (
                                                8 >= f ? n2.split(" ").length === 4 && (n2 = n2.split(/\s+/).slice(0, 3).join(" ")) : n2.split(" ").length === 3 && (n2 += " 1"),
                                                (8 >= f ? "rgb" : "rgba") + "(" + n2.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                            );
                                    }
                                };
                            })();
                    },
                },
                Names: {
                    camelCase: function (e2) {
                        return e2.replace(/-(\w)/g, function (e3, t2) {
                            return t2.toUpperCase();
                        });
                    },
                    SVGAttribute: function (e2) {
                        var t2 = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (f || (v.State.isAndroid && !v.State.isChrome)) && (t2 += "|transform"), new RegExp("^(" + t2 + ")$", "i").test(e2);
                    },
                    prefixCheck: function (e2) {
                        if (v.State.prefixMatches[e2]) return [v.State.prefixMatches[e2], !0];
                        for (var t2 = ["", "Webkit", "Moz", "ms", "O"], r2 = 0, a2 = t2.length; a2 > r2; r2++) {
                            var n2;
                            if (
                                ((n2 =
                                    r2 === 0
                                        ? e2
                                        : t2[r2] +
                                          e2.replace(/^\w/, function (e3) {
                                              return e3.toUpperCase();
                                          })),
                                g.isString(v.State.prefixElement.style[n2]))
                            )
                                return (v.State.prefixMatches[e2] = n2), [n2, !0];
                        }
                        return [e2, !1];
                    },
                },
                Values: {
                    hexToRgb: function (e2) {
                        var t2 = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            r2 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
                            a2;
                        return (
                            (e2 = e2.replace(t2, function (e3, t3, r3, a3) {
                                return t3 + t3 + r3 + r3 + a3 + a3;
                            })),
                            (a2 = r2.exec(e2)),
                            a2 ? [parseInt(a2[1], 16), parseInt(a2[2], 16), parseInt(a2[3], 16)] : [0, 0, 0]
                        );
                    },
                    isCSSNullValue: function (e2) {
                        return e2 == 0 || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e2);
                    },
                    getUnitType: function (e2) {
                        return /^(rotate|skew)/i.test(e2) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e2) ? "" : "px";
                    },
                    getDisplayType: function (e2) {
                        var t2 = e2 && e2.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t2)
                            ? "inline"
                            : /^(li)$/i.test(t2)
                            ? "list-item"
                            : /^(tr)$/i.test(t2)
                            ? "table-row"
                            : /^(table)$/i.test(t2)
                            ? "table"
                            : /^(tbody)$/i.test(t2)
                            ? "table-row-group"
                            : "block";
                    },
                    addClass: function (e2, t2) {
                        e2.classList ? e2.classList.add(t2) : (e2.className += (e2.className.length ? " " : "") + t2);
                    },
                    removeClass: function (e2, t2) {
                        e2.classList ? e2.classList.remove(t2) : (e2.className = e2.className.toString().replace(new RegExp("(^|\\s)" + t2.split(" ").join("|") + "(\\s|$)", "gi"), " "));
                    },
                },
                getPropertyValue: function (e2, r2, n2, o2) {
                    function s2(e3, r3) {
                        function n3() {
                            u3 && x.setPropertyValue(e3, "display", "none");
                        }
                        var l3 = 0;
                        if (8 >= f) l3 = $2.css(e3, r3);
                        else {
                            var u3 = !1;
                            if ((/^(width|height)$/.test(r3) && x.getPropertyValue(e3, "display") === 0 && ((u3 = !0), x.setPropertyValue(e3, "display", x.Values.getDisplayType(e3))), !o2)) {
                                if (r3 === "height" && x.getPropertyValue(e3, "boxSizing").toString().toLowerCase() !== "border-box") {
                                    var c3 =
                                        e3.offsetHeight -
                                        (parseFloat(x.getPropertyValue(e3, "borderTopWidth")) || 0) -
                                        (parseFloat(x.getPropertyValue(e3, "borderBottomWidth")) || 0) -
                                        (parseFloat(x.getPropertyValue(e3, "paddingTop")) || 0) -
                                        (parseFloat(x.getPropertyValue(e3, "paddingBottom")) || 0);
                                    return n3(), c3;
                                }
                                if (r3 === "width" && x.getPropertyValue(e3, "boxSizing").toString().toLowerCase() !== "border-box") {
                                    var p3 =
                                        e3.offsetWidth -
                                        (parseFloat(x.getPropertyValue(e3, "borderLeftWidth")) || 0) -
                                        (parseFloat(x.getPropertyValue(e3, "borderRightWidth")) || 0) -
                                        (parseFloat(x.getPropertyValue(e3, "paddingLeft")) || 0) -
                                        (parseFloat(x.getPropertyValue(e3, "paddingRight")) || 0);
                                    return n3(), p3;
                                }
                            }
                            var d3;
                            (d3 = i(e3) === a ? t.getComputedStyle(e3, null) : i(e3).computedStyle ? i(e3).computedStyle : (i(e3).computedStyle = t.getComputedStyle(e3, null))),
                                r3 === "borderColor" && (r3 = "borderTopColor"),
                                (l3 = f === 9 && r3 === "filter" ? d3.getPropertyValue(r3) : d3[r3]),
                                (l3 === "" || l3 === null) && (l3 = e3.style[r3]),
                                n3();
                        }
                        if (l3 === "auto" && /^(top|right|bottom|left)$/i.test(r3)) {
                            var g2 = s2(e3, "position");
                            (g2 === "fixed" || (g2 === "absolute" && /top|left/i.test(r3))) && (l3 = $2(e3).position()[r3] + "px");
                        }
                        return l3;
                    }
                    var l2;
                    if (x.Hooks.registered[r2]) {
                        var u2 = r2,
                            c2 = x.Hooks.getRoot(u2);
                        n2 === a && (n2 = x.getPropertyValue(e2, x.Names.prefixCheck(c2)[0])), x.Normalizations.registered[c2] && (n2 = x.Normalizations.registered[c2]("extract", e2, n2)), (l2 = x.Hooks.extractValue(u2, n2));
                    } else if (x.Normalizations.registered[r2]) {
                        var p2, d2;
                        (p2 = x.Normalizations.registered[r2]("name", e2)),
                            p2 !== "transform" && ((d2 = s2(e2, x.Names.prefixCheck(p2)[0])), x.Values.isCSSNullValue(d2) && x.Hooks.templates[r2] && (d2 = x.Hooks.templates[r2][1])),
                            (l2 = x.Normalizations.registered[r2]("extract", e2, d2));
                    }
                    if (!/^[\d-]/.test(l2))
                        if (i(e2) && i(e2).isSVG && x.Names.SVGAttribute(r2))
                            if (/^(height|width)$/i.test(r2))
                                try {
                                    l2 = e2.getBBox()[r2];
                                } catch (g2) {
                                    l2 = 0;
                                }
                            else l2 = e2.getAttribute(r2);
                        else l2 = s2(e2, x.Names.prefixCheck(r2)[0]);
                    return x.Values.isCSSNullValue(l2) && (l2 = 0), v.debug >= 2 && console.log("Get " + r2 + ": " + l2), l2;
                },
                setPropertyValue: function (e2, r2, a2, n2, o2) {
                    var s2 = r2;
                    if (r2 === "scroll") o2.container ? (o2.container["scroll" + o2.direction] = a2) : o2.direction === "Left" ? t.scrollTo(a2, o2.alternateValue) : t.scrollTo(o2.alternateValue, a2);
                    else if (x.Normalizations.registered[r2] && x.Normalizations.registered[r2]("name", e2) === "transform") x.Normalizations.registered[r2]("inject", e2, a2), (s2 = "transform"), (a2 = i(e2).transformCache[r2]);
                    else {
                        if (x.Hooks.registered[r2]) {
                            var l2 = r2,
                                u2 = x.Hooks.getRoot(r2);
                            (n2 = n2 || x.getPropertyValue(e2, u2)), (a2 = x.Hooks.injectValue(l2, a2, n2)), (r2 = u2);
                        }
                        if ((x.Normalizations.registered[r2] && ((a2 = x.Normalizations.registered[r2]("inject", e2, a2)), (r2 = x.Normalizations.registered[r2]("name", e2))), (s2 = x.Names.prefixCheck(r2)[0]), 8 >= f))
                            try {
                                e2.style[s2] = a2;
                            } catch (c2) {
                                v.debug && console.log("Browser does not support [" + a2 + "] for [" + s2 + "]");
                            }
                        else i(e2) && i(e2).isSVG && x.Names.SVGAttribute(r2) ? e2.setAttribute(r2, a2) : (e2.style[s2] = a2);
                        v.debug >= 2 && console.log("Set " + r2 + " (" + s2 + "): " + a2);
                    }
                    return [s2, a2];
                },
                flushTransformCache: function (e2) {
                    function t2(t3) {
                        return parseFloat(x.getPropertyValue(e2, t3));
                    }
                    var r2 = "";
                    if ((f || (v.State.isAndroid && !v.State.isChrome)) && i(e2).isSVG) {
                        var a2 = {
                            translate: [t2("translateX"), t2("translateY")],
                            skewX: [t2("skewX")],
                            skewY: [t2("skewY")],
                            scale: t2("scale") !== 1 ? [t2("scale"), t2("scale")] : [t2("scaleX"), t2("scaleY")],
                            rotate: [t2("rotateZ"), 0, 0],
                        };
                        $2.each(i(e2).transformCache, function (e3) {
                            /^translate/i.test(e3) ? (e3 = "translate") : /^scale/i.test(e3) ? (e3 = "scale") : /^rotate/i.test(e3) && (e3 = "rotate"), a2[e3] && ((r2 += e3 + "(" + a2[e3].join(" ") + ") "), delete a2[e3]);
                        });
                    } else {
                        var n2, o2;
                        $2.each(i(e2).transformCache, function (t3) {
                            return (n2 = i(e2).transformCache[t3]), t3 === "transformPerspective" ? ((o2 = n2), !0) : (f === 9 && t3 === "rotateZ" && (t3 = "rotate"), void (r2 += t3 + n2 + " "));
                        }),
                            o2 && (r2 = "perspective" + o2 + " " + r2);
                    }
                    x.setPropertyValue(e2, "transform", r2);
                },
            });
            x.Hooks.register(),
                x.Normalizations.register(),
                (v.hook = function (e2, t2, r2) {
                    var n2 = a;
                    return (
                        (e2 = o(e2)),
                        $2.each(e2, function (e3, o2) {
                            if ((i(o2) === a && v.init(o2), r2 === a)) n2 === a && (n2 = v.CSS.getPropertyValue(o2, t2));
                            else {
                                var s2 = v.CSS.setPropertyValue(o2, t2, r2);
                                s2[0] === "transform" && v.CSS.flushTransformCache(o2), (n2 = s2);
                            }
                        }),
                        n2
                    );
                });
            var S = function () {
                function e2() {
                    return l2 ? T.promise || null : f2;
                }
                function n2() {
                    function e3(e4) {
                        function p2(e5, t2) {
                            var r2 = a,
                                i2 = a,
                                s4 = a;
                            return (
                                g.isArray(e5)
                                    ? ((r2 = e5[0]),
                                      (!g.isArray(e5[1]) && /^[\d-]/.test(e5[1])) || g.isFunction(e5[1]) || x.RegEx.isHex.test(e5[1])
                                          ? (s4 = e5[1])
                                          : ((g.isString(e5[1]) && !x.RegEx.isHex.test(e5[1])) || g.isArray(e5[1])) && ((i2 = t2 ? e5[1] : u(e5[1], o2.duration)), e5[2] !== a && (s4 = e5[2])))
                                    : (r2 = e5),
                                t2 || (i2 = i2 || o2.easing),
                                g.isFunction(r2) && (r2 = r2.call(n3, w, P2)),
                                g.isFunction(s4) && (s4 = s4.call(n3, w, P2)),
                                [r2 || 0, i2, s4]
                            );
                        }
                        function f3(e5, t2) {
                            var r2, a2;
                            return (
                                (a2 = (t2 || "0")
                                    .toString()
                                    .toLowerCase()
                                    .replace(/[%A-z]+$/, function (e6) {
                                        return (r2 = e6), "";
                                    })),
                                r2 || (r2 = x.Values.getUnitType(e5)),
                                [a2, r2]
                            );
                        }
                        function d3() {
                            var e5 = { myParent: n3.parentNode || r.body, position: x.getPropertyValue(n3, "position"), fontSize: x.getPropertyValue(n3, "fontSize") },
                                a2 = e5.position === N.lastPosition && e5.myParent === N.lastParent,
                                o3 = e5.fontSize === N.lastFontSize;
                            (N.lastParent = e5.myParent), (N.lastPosition = e5.position), (N.lastFontSize = e5.fontSize);
                            var s4 = 100,
                                l4 = {};
                            if (o3 && a2) (l4.emToPx = N.lastEmToPx), (l4.percentToPxWidth = N.lastPercentToPxWidth), (l4.percentToPxHeight = N.lastPercentToPxHeight);
                            else {
                                var u2 = i(n3).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");
                                v.init(u2),
                                    e5.myParent.appendChild(u2),
                                    $2.each(["overflow", "overflowX", "overflowY"], function (e6, t2) {
                                        v.CSS.setPropertyValue(u2, t2, "hidden");
                                    }),
                                    v.CSS.setPropertyValue(u2, "position", e5.position),
                                    v.CSS.setPropertyValue(u2, "fontSize", e5.fontSize),
                                    v.CSS.setPropertyValue(u2, "boxSizing", "content-box"),
                                    $2.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e6, t2) {
                                        v.CSS.setPropertyValue(u2, t2, s4 + "%");
                                    }),
                                    v.CSS.setPropertyValue(u2, "paddingLeft", s4 + "em"),
                                    (l4.percentToPxWidth = N.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(u2, "width", null, !0)) || 1) / s4),
                                    (l4.percentToPxHeight = N.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(u2, "height", null, !0)) || 1) / s4),
                                    (l4.emToPx = N.lastEmToPx = (parseFloat(x.getPropertyValue(u2, "paddingLeft")) || 1) / s4),
                                    e5.myParent.removeChild(u2);
                            }
                            return (
                                N.remToPx === null && (N.remToPx = parseFloat(x.getPropertyValue(r.body, "fontSize")) || 16),
                                N.vwToPx === null && ((N.vwToPx = parseFloat(t.innerWidth) / 100), (N.vhToPx = parseFloat(t.innerHeight) / 100)),
                                (l4.remToPx = N.remToPx),
                                (l4.vwToPx = N.vwToPx),
                                (l4.vhToPx = N.vhToPx),
                                v.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l4), n3),
                                l4
                            );
                        }
                        if (o2.begin && w === 0)
                            try {
                                o2.begin.call(m2, m2);
                            } catch (y2) {
                                setTimeout(function () {
                                    throw y2;
                                }, 1);
                            }
                        if (k === "scroll") {
                            var S2 = /^x$/i.test(o2.axis) ? "Left" : "Top",
                                V2 = parseFloat(o2.offset) || 0,
                                C2,
                                A2,
                                F2;
                            o2.container
                                ? g.isWrapped(o2.container) || g.isNode(o2.container)
                                    ? ((o2.container = o2.container[0] || o2.container), (C2 = o2.container["scroll" + S2]), (F2 = C2 + $2(n3).position()[S2.toLowerCase()] + V2))
                                    : (o2.container = null)
                                : ((C2 = v.State.scrollAnchor[v.State["scrollProperty" + S2]]), (A2 = v.State.scrollAnchor[v.State["scrollProperty" + (S2 === "Left" ? "Top" : "Left")]]), (F2 = $2(n3).offset()[S2.toLowerCase()] + V2)),
                                (s3 = {
                                    scroll: { rootPropertyValue: !1, startValue: C2, currentValue: C2, endValue: F2, unitType: "", easing: o2.easing, scrollData: { container: o2.container, direction: S2, alternateValue: A2 } },
                                    element: n3,
                                }),
                                v.debug && console.log("tweensContainer (scroll): ", s3.scroll, n3);
                        } else if (k === "reverse") {
                            if (!i(n3).tweensContainer) return void $2.dequeue(n3, o2.queue);
                            i(n3).opts.display === "none" && (i(n3).opts.display = "auto"),
                                i(n3).opts.visibility === "hidden" && (i(n3).opts.visibility = "visible"),
                                (i(n3).opts.loop = !1),
                                (i(n3).opts.begin = null),
                                (i(n3).opts.complete = null),
                                b2.easing || delete o2.easing,
                                b2.duration || delete o2.duration,
                                (o2 = $2.extend({}, i(n3).opts, o2));
                            var E2 = $2.extend(!0, {}, i(n3).tweensContainer);
                            for (var j2 in E2)
                                if (j2 !== "element") {
                                    var H2 = E2[j2].startValue;
                                    (E2[j2].startValue = E2[j2].currentValue = E2[j2].endValue),
                                        (E2[j2].endValue = H2),
                                        g.isEmptyObject(b2) || (E2[j2].easing = o2.easing),
                                        v.debug && console.log("reverse tweensContainer (" + j2 + "): " + JSON.stringify(E2[j2]), n3);
                                }
                            s3 = E2;
                        } else if (k === "start") {
                            var E2;
                            i(n3).tweensContainer && i(n3).isAnimating === !0 && (E2 = i(n3).tweensContainer),
                                $2.each(h2, function (e5, t2) {
                                    if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e5)) {
                                        var r2 = p2(t2, !0),
                                            n4 = r2[0],
                                            o3 = r2[1],
                                            i2 = r2[2];
                                        if (x.RegEx.isHex.test(n4)) {
                                            for (var s4 = ["Red", "Green", "Blue"], l4 = x.Values.hexToRgb(n4), u2 = i2 ? x.Values.hexToRgb(i2) : a, c2 = 0; c2 < s4.length; c2++) {
                                                var f4 = [l4[c2]];
                                                o3 && f4.push(o3), u2 !== a && f4.push(u2[c2]), (h2[e5 + s4[c2]] = f4);
                                            }
                                            delete h2[e5];
                                        }
                                    }
                                });
                            for (var R2 in h2) {
                                var O2 = p2(h2[R2]),
                                    z2 = O2[0],
                                    q = O2[1],
                                    M = O2[2];
                                R2 = x.Names.camelCase(R2);
                                var I = x.Hooks.getRoot(R2),
                                    B = !1;
                                if (i(n3).isSVG || I === "tween" || x.Names.prefixCheck(I)[1] !== !1 || x.Normalizations.registered[I] !== a) {
                                    ((o2.display !== a && o2.display !== null && o2.display !== "none") || (o2.visibility !== a && o2.visibility !== "hidden")) && /opacity|filter/.test(R2) && !M && z2 !== 0 && (M = 0),
                                        o2._cacheValues && E2 && E2[R2]
                                            ? (M === a && (M = E2[R2].endValue + E2[R2].unitType), (B = i(n3).rootPropertyValueCache[I]))
                                            : x.Hooks.registered[R2]
                                            ? M === a
                                                ? ((B = x.getPropertyValue(n3, I)), (M = x.getPropertyValue(n3, R2, B)))
                                                : (B = x.Hooks.templates[I][1])
                                            : M === a && (M = x.getPropertyValue(n3, R2));
                                    var W,
                                        G,
                                        D,
                                        X = !1;
                                    if (
                                        ((W = f3(R2, M)),
                                        (M = W[0]),
                                        (D = W[1]),
                                        (W = f3(R2, z2)),
                                        (z2 = W[0].replace(/^([+-\/*])=/, function (e5, t2) {
                                            return (X = t2), "";
                                        })),
                                        (G = W[1]),
                                        (M = parseFloat(M) || 0),
                                        (z2 = parseFloat(z2) || 0),
                                        G === "%" && (/^(fontSize|lineHeight)$/.test(R2) ? ((z2 /= 100), (G = "em")) : /^scale/.test(R2) ? ((z2 /= 100), (G = "")) : /(Red|Green|Blue)$/i.test(R2) && ((z2 = (z2 / 100) * 255), (G = ""))),
                                        /[\/*]/.test(X))
                                    )
                                        G = D;
                                    else if (D !== G && M !== 0)
                                        if (z2 === 0) G = D;
                                        else {
                                            l3 = l3 || d3();
                                            var Y = /margin|padding|left|right|width|text|word|letter/i.test(R2) || /X$/.test(R2) || R2 === "x" ? "x" : "y";
                                            switch (D) {
                                                case "%":
                                                    M *= Y === "x" ? l3.percentToPxWidth : l3.percentToPxHeight;
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    M *= l3[D + "ToPx"];
                                            }
                                            switch (G) {
                                                case "%":
                                                    M *= 1 / (Y === "x" ? l3.percentToPxWidth : l3.percentToPxHeight);
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    M *= 1 / l3[G + "ToPx"];
                                            }
                                        }
                                    switch (X) {
                                        case "+":
                                            z2 = M + z2;
                                            break;
                                        case "-":
                                            z2 = M - z2;
                                            break;
                                        case "*":
                                            z2 = M * z2;
                                            break;
                                        case "/":
                                            z2 = M / z2;
                                    }
                                    (s3[R2] = { rootPropertyValue: B, startValue: M, currentValue: M, endValue: z2, unitType: G, easing: q }), v.debug && console.log("tweensContainer (" + R2 + "): " + JSON.stringify(s3[R2]), n3);
                                } else v.debug && console.log("Skipping [" + I + "] due to a lack of browser support.");
                            }
                            s3.element = n3;
                        }
                        s3.element &&
                            (x.Values.addClass(n3, "velocity-animating"),
                            L.push(s3),
                            o2.queue === "" && ((i(n3).tweensContainer = s3), (i(n3).opts = o2)),
                            (i(n3).isAnimating = !0),
                            w === P2 - 1 ? (v.State.calls.push([L, m2, o2, null, T.resolver]), v.State.isTicking === !1 && ((v.State.isTicking = !0), c())) : w++);
                    }
                    var n3 = this,
                        o2 = $2.extend({}, v.defaults, b2),
                        s3 = {},
                        l3;
                    switch (
                        (i(n3) === a && v.init(n3),
                        parseFloat(o2.delay) &&
                            o2.queue !== !1 &&
                            $2.queue(n3, o2.queue, function (e4) {
                                (v.velocityQueueEntryFlag = !0), (i(n3).delayTimer = { setTimeout: setTimeout(e4, parseFloat(o2.delay)), next: e4 });
                            }),
                        o2.duration.toString().toLowerCase())
                    ) {
                        case "fast":
                            o2.duration = 200;
                            break;
                        case "normal":
                            o2.duration = y;
                            break;
                        case "slow":
                            o2.duration = 600;
                            break;
                        default:
                            o2.duration = parseFloat(o2.duration) || 1;
                    }
                    v.mock !== !1 && (v.mock === !0 ? (o2.duration = o2.delay = 1) : ((o2.duration *= parseFloat(v.mock) || 1), (o2.delay *= parseFloat(v.mock) || 1))),
                        (o2.easing = u(o2.easing, o2.duration)),
                        o2.begin && !g.isFunction(o2.begin) && (o2.begin = null),
                        o2.progress && !g.isFunction(o2.progress) && (o2.progress = null),
                        o2.complete && !g.isFunction(o2.complete) && (o2.complete = null),
                        o2.display !== a && o2.display !== null && ((o2.display = o2.display.toString().toLowerCase()), o2.display === "auto" && (o2.display = v.CSS.Values.getDisplayType(n3))),
                        o2.visibility !== a && o2.visibility !== null && (o2.visibility = o2.visibility.toString().toLowerCase()),
                        (o2.mobileHA = o2.mobileHA && v.State.isMobile && !v.State.isGingerbread),
                        o2.queue === !1
                            ? o2.delay
                                ? setTimeout(e3, o2.delay)
                                : e3()
                            : $2.queue(n3, o2.queue, function (t2, r2) {
                                  return r2 === !0 ? (T.promise && T.resolver(m2), !0) : ((v.velocityQueueEntryFlag = !0), void e3(t2));
                              }),
                        (o2.queue !== "" && o2.queue !== "fx") || $2.queue(n3)[0] === "inprogress" || $2.dequeue(n3);
                }
                var s2 = arguments[0] && (arguments[0].p || ($2.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || g.isString(arguments[0].properties)),
                    l2,
                    f2,
                    d2,
                    m2,
                    h2,
                    b2;
                if ((g.isWrapped(this) ? ((l2 = !1), (d2 = 0), (m2 = this), (f2 = this)) : ((l2 = !0), (d2 = 1), (m2 = s2 ? arguments[0].elements || arguments[0].e : arguments[0])), (m2 = o(m2)))) {
                    s2 ? ((h2 = arguments[0].properties || arguments[0].p), (b2 = arguments[0].options || arguments[0].o)) : ((h2 = arguments[d2]), (b2 = arguments[d2 + 1]));
                    var P2 = m2.length,
                        w = 0;
                    if (!/^(stop|finish)$/i.test(h2) && !$2.isPlainObject(b2)) {
                        var V = d2 + 1;
                        b2 = {};
                        for (var C = V; C < arguments.length; C++)
                            g.isArray(arguments[C]) || (!/^(fast|normal|slow)$/i.test(arguments[C]) && !/^\d/.test(arguments[C]))
                                ? g.isString(arguments[C]) || g.isArray(arguments[C])
                                    ? (b2.easing = arguments[C])
                                    : g.isFunction(arguments[C]) && (b2.complete = arguments[C])
                                : (b2.duration = arguments[C]);
                    }
                    var T = { promise: null, resolver: null, rejecter: null };
                    l2 &&
                        v.Promise &&
                        (T.promise = new v.Promise(function (e3, t2) {
                            (T.resolver = e3), (T.rejecter = t2);
                        }));
                    var k;
                    switch (h2) {
                        case "scroll":
                            k = "scroll";
                            break;
                        case "reverse":
                            k = "reverse";
                            break;
                        case "finish":
                        case "stop":
                            $2.each(m2, function (e3, t2) {
                                i(t2) && i(t2).delayTimer && (clearTimeout(i(t2).delayTimer.setTimeout), i(t2).delayTimer.next && i(t2).delayTimer.next(), delete i(t2).delayTimer);
                            });
                            var A = [];
                            return (
                                $2.each(v.State.calls, function (e3, t2) {
                                    t2 &&
                                        $2.each(t2[1], function (r2, n3) {
                                            var o2 = b2 === a ? "" : b2;
                                            return o2 === !0 || t2[2].queue === o2 || (b2 === a && t2[2].queue === !1)
                                                ? void $2.each(m2, function (r3, a2) {
                                                      a2 === n3 &&
                                                          ((b2 === !0 || g.isString(b2)) &&
                                                              ($2.each($2.queue(a2, g.isString(b2) ? b2 : ""), function (e4, t3) {
                                                                  g.isFunction(t3) && t3(null, !0);
                                                              }),
                                                              $2.queue(a2, g.isString(b2) ? b2 : "", [])),
                                                          h2 === "stop"
                                                              ? (i(a2) &&
                                                                    i(a2).tweensContainer &&
                                                                    o2 !== !1 &&
                                                                    $2.each(i(a2).tweensContainer, function (e4, t3) {
                                                                        t3.endValue = t3.currentValue;
                                                                    }),
                                                                A.push(e3))
                                                              : h2 === "finish" && (t2[2].duration = 1));
                                                  })
                                                : !0;
                                        });
                                }),
                                h2 === "stop" &&
                                    ($2.each(A, function (e3, t2) {
                                        p(t2, !0);
                                    }),
                                    T.promise && T.resolver(m2)),
                                e2()
                            );
                        default:
                            if (!$2.isPlainObject(h2) || g.isEmptyObject(h2)) {
                                if (g.isString(h2) && v.Redirects[h2]) {
                                    var F = $2.extend({}, b2),
                                        E = F.duration,
                                        j = F.delay || 0;
                                    return (
                                        F.backwards === !0 && (m2 = $2.extend(!0, [], m2).reverse()),
                                        $2.each(m2, function (e3, t2) {
                                            parseFloat(F.stagger) ? (F.delay = j + parseFloat(F.stagger) * e3) : g.isFunction(F.stagger) && (F.delay = j + F.stagger.call(t2, e3, P2)),
                                                F.drag &&
                                                    ((F.duration = parseFloat(E) || (/^(callout|transition)/.test(h2) ? 1e3 : y)), (F.duration = Math.max(F.duration * (F.backwards ? 1 - e3 / P2 : (e3 + 1) / P2), 0.75 * F.duration, 200))),
                                                v.Redirects[h2].call(t2, t2, F || {}, e3, P2, m2, T.promise ? T : a);
                                        }),
                                        e2()
                                    );
                                }
                                var H = "Velocity: First argument (" + h2 + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                return T.promise ? T.rejecter(new Error(H)) : console.log(H), e2();
                            }
                            k = "start";
                    }
                    var N = { lastParent: null, lastPosition: null, lastFontSize: null, lastPercentToPxWidth: null, lastPercentToPxHeight: null, lastEmToPx: null, remToPx: null, vwToPx: null, vhToPx: null },
                        L = [];
                    $2.each(m2, function (e3, t2) {
                        g.isNode(t2) && n2.call(t2);
                    });
                    var F = $2.extend({}, v.defaults, b2),
                        R;
                    if (((F.loop = parseInt(F.loop)), (R = 2 * F.loop - 1), F.loop))
                        for (var O = 0; R > O; O++) {
                            var z = { delay: F.delay, progress: F.progress };
                            O === R - 1 && ((z.display = F.display), (z.visibility = F.visibility), (z.complete = F.complete)), S(m2, "reverse", z);
                        }
                    return e2();
                }
            };
            (v = $2.extend(S, v)), (v.animate = S);
            var P = t.requestAnimationFrame || d;
            return (
                v.State.isMobile ||
                    r.hidden === a ||
                    r.addEventListener("visibilitychange", function () {
                        r.hidden
                            ? ((P = function (e2) {
                                  return setTimeout(function () {
                                      e2(!0);
                                  }, 16);
                              }),
                              c())
                            : (P = t.requestAnimationFrame || d);
                    }),
                (e.Velocity = v),
                e !== t && ((e.fn.velocity = S), (e.fn.velocity.defaults = v.defaults)),
                $2.each(["Down", "Up"], function (e2, t2) {
                    v.Redirects["slide" + t2] = function (e3, r2, n2, o2, i2, s2) {
                        var l2 = $2.extend({}, r2),
                            u2 = l2.begin,
                            c2 = l2.complete,
                            p2 = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" },
                            f2 = {};
                        l2.display === a && (l2.display = t2 === "Down" ? (v.CSS.Values.getDisplayType(e3) === "inline" ? "inline-block" : "block") : "none"),
                            (l2.begin = function () {
                                u2 && u2.call(i2, i2);
                                for (var r3 in p2) {
                                    f2[r3] = e3.style[r3];
                                    var a2 = v.CSS.getPropertyValue(e3, r3);
                                    p2[r3] = t2 === "Down" ? [a2, 0] : [0, a2];
                                }
                                (f2.overflow = e3.style.overflow), (e3.style.overflow = "hidden");
                            }),
                            (l2.complete = function () {
                                for (var t3 in f2) e3.style[t3] = f2[t3];
                                c2 && c2.call(i2, i2), s2 && s2.resolver(i2);
                            }),
                            v(e3, p2, l2);
                    };
                }),
                $2.each(["In", "Out"], function (e2, t2) {
                    v.Redirects["fade" + t2] = function (e3, r2, n2, o2, i2, s2) {
                        var l2 = $2.extend({}, r2),
                            u2 = { opacity: t2 === "In" ? 1 : 0 },
                            c2 = l2.complete;
                        (l2.complete =
                            n2 !== o2 - 1
                                ? (l2.begin = null)
                                : function () {
                                      c2 && c2.call(i2, i2), s2 && s2.resolver(i2);
                                  }),
                            l2.display === a && (l2.display = t2 === "In" ? "auto" : "none"),
                            v(this, u2, l2);
                    };
                }),
                v
            );
        })(window.jQuery || window.Zepto || window, window, document);
    });
/* VelocityJS.org UI Pack (5.0.4). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */ (function (t) {
    typeof require == "function" && typeof exports == "object" ? (module.exports = t()) : typeof define == "function" && define.amd ? define(["velocity"], t) : t();
})(function () {
    return (function (t, a, e, r) {
        function n(t2, a2) {
            var e2 = [];
            return t2 && a2
                ? ($2.each([t2, a2], function (t3, a3) {
                      var r2 = [];
                      $2.each(a3, function (t4, a4) {
                          for (; a4.toString().length < 5; ) a4 = "0" + a4;
                          r2.push(a4);
                      }),
                          e2.push(r2.join(""));
                  }),
                  parseFloat(e2[0]) > parseFloat(e2[1]))
                : !1;
        }
        if (!t.Velocity || !t.Velocity.Utilities) return void (a.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));
        var i = t.Velocity,
            $2 = i.Utilities,
            s = i.version,
            o = { major: 1, minor: 1, patch: 0 };
        if (n(o, s)) {
            var l = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
            throw (alert(l), new Error(l));
        }
        (i.RegisterEffect = i.RegisterUI = function (t2, a2) {
            function e2(t3, a3, e3, r2) {
                var n2 = 0,
                    s2;
                $2.each(t3.nodeType ? [t3] : t3, function (t4, a4) {
                    r2 && (e3 += t4 * r2),
                        (s2 = a4.parentNode),
                        $2.each(["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function (t5, e4) {
                            n2 += parseFloat(i.CSS.getPropertyValue(a4, e4));
                        });
                }),
                    i.animate(s2, { height: (a3 === "In" ? "+" : "-") + "=" + n2 }, { queue: !1, easing: "ease-in-out", duration: e3 * (a3 === "In" ? 0.6 : 1) });
            }
            return (
                (i.Redirects[t2] = function (n2, s2, o2, l2, c2, u) {
                    function f() {
                        (s2.display !== r && s2.display !== "none") ||
                            !/Out$/.test(t2) ||
                            $2.each(c2.nodeType ? [c2] : c2, function (t3, a3) {
                                i.CSS.setPropertyValue(a3, "display", "none");
                            }),
                            s2.complete && s2.complete.call(c2, c2),
                            u && u.resolver(c2 || n2);
                    }
                    var p = o2 === l2 - 1;
                    a2.defaultDuration = typeof a2.defaultDuration == "function" ? a2.defaultDuration.call(c2, c2) : parseFloat(a2.defaultDuration);
                    for (var d = 0; d < a2.calls.length; d++) {
                        var g = a2.calls[d],
                            y = g[0],
                            m = s2.duration || a2.defaultDuration || 1e3,
                            X = g[1],
                            Y = g[2] || {},
                            O = {};
                        if (((O.duration = m * (X || 1)), (O.queue = s2.queue || ""), (O.easing = Y.easing || "ease"), (O.delay = parseFloat(Y.delay) || 0), (O._cacheValues = Y._cacheValues || !0), d === 0)) {
                            if (
                                ((O.delay += parseFloat(s2.delay) || 0),
                                o2 === 0 &&
                                    (O.begin = function () {
                                        s2.begin && s2.begin.call(c2, c2);
                                        var a3 = t2.match(/(In|Out)$/);
                                        a3 &&
                                            a3[0] === "In" &&
                                            y.opacity !== r &&
                                            $2.each(c2.nodeType ? [c2] : c2, function (t3, a4) {
                                                i.CSS.setPropertyValue(a4, "opacity", 0);
                                            }),
                                            s2.animateParentHeight && a3 && e2(c2, a3[0], m + O.delay, s2.stagger);
                                    }),
                                s2.display !== null)
                            ) {
                                if (s2.display !== r && s2.display !== "none") O.display = s2.display;
                                else if (/In$/.test(t2)) {
                                    var v = i.CSS.Values.getDisplayType(n2);
                                    O.display = v === "inline" ? "inline-block" : v;
                                }
                            }
                            s2.visibility && s2.visibility !== "hidden" && (O.visibility = s2.visibility);
                        }
                        d === a2.calls.length - 1 &&
                            ((O.complete = function () {
                                if (a2.reset) {
                                    for (var t3 in a2.reset) {
                                        var e3 = a2.reset[t3];
                                        i.CSS.Hooks.registered[t3] !== r || (typeof e3 != "string" && typeof e3 != "number") || (a2.reset[t3] = [a2.reset[t3], a2.reset[t3]]);
                                    }
                                    var s3 = { duration: 0, queue: !1 };
                                    p && (s3.complete = f), i.animate(n2, a2.reset, s3);
                                } else p && f();
                            }),
                            s2.visibility === "hidden" && (O.visibility = s2.visibility)),
                            i.animate(n2, y, O);
                    }
                }),
                i
            );
        }),
            (i.RegisterEffect.packagedEffects = {
                "callout.bounce": {
                    defaultDuration: 550,
                    calls: [
                        [{ translateY: -30 }, 0.25],
                        [{ translateY: 0 }, 0.125],
                        [{ translateY: -15 }, 0.125],
                        [{ translateY: 0 }, 0.25],
                    ],
                },
                "callout.shake": {
                    defaultDuration: 800,
                    calls: [
                        [{ translateX: -11 }, 0.125],
                        [{ translateX: 11 }, 0.125],
                        [{ translateX: -11 }, 0.125],
                        [{ translateX: 11 }, 0.125],
                        [{ translateX: -11 }, 0.125],
                        [{ translateX: 11 }, 0.125],
                        [{ translateX: -11 }, 0.125],
                        [{ translateX: 0 }, 0.125],
                    ],
                },
                "callout.flash": {
                    defaultDuration: 1100,
                    calls: [
                        [{ opacity: [0, "easeInOutQuad", 1] }, 0.25],
                        [{ opacity: [1, "easeInOutQuad"] }, 0.25],
                        [{ opacity: [0, "easeInOutQuad"] }, 0.25],
                        [{ opacity: [1, "easeInOutQuad"] }, 0.25],
                    ],
                },
                "callout.pulse": {
                    defaultDuration: 825,
                    calls: [
                        [{ scaleX: 1.1, scaleY: 1.1 }, 0.5, { easing: "easeInExpo" }],
                        [{ scaleX: 1, scaleY: 1 }, 0.5],
                    ],
                },
                "callout.swing": {
                    defaultDuration: 950,
                    calls: [
                        [{ rotateZ: 15 }, 0.2],
                        [{ rotateZ: -10 }, 0.2],
                        [{ rotateZ: 5 }, 0.2],
                        [{ rotateZ: -5 }, 0.2],
                        [{ rotateZ: 0 }, 0.2],
                    ],
                },
                "callout.tada": {
                    defaultDuration: 1e3,
                    calls: [
                        [{ scaleX: 0.9, scaleY: 0.9, rotateZ: -3 }, 0.1],
                        [{ scaleX: 1.1, scaleY: 1.1, rotateZ: 3 }, 0.1],
                        [{ scaleX: 1.1, scaleY: 1.1, rotateZ: -3 }, 0.1],
                        ["reverse", 0.125],
                        ["reverse", 0.125],
                        ["reverse", 0.125],
                        ["reverse", 0.125],
                        ["reverse", 0.125],
                        [{ scaleX: 1, scaleY: 1, rotateZ: 0 }, 0.2],
                    ],
                },
                "transition.fadeIn": { defaultDuration: 500, calls: [[{ opacity: [1, 0] }]] },
                "transition.fadeOut": { defaultDuration: 500, calls: [[{ opacity: [0, 1] }]] },
                "transition.flipXIn": { defaultDuration: 700, calls: [[{ opacity: [1, 0], transformPerspective: [800, 800], rotateY: [0, -55] }]], reset: { transformPerspective: 0 } },
                "transition.flipXOut": { defaultDuration: 700, calls: [[{ opacity: [0, 1], transformPerspective: [800, 800], rotateY: 55 }]], reset: { transformPerspective: 0, rotateY: 0 } },
                "transition.flipYIn": { defaultDuration: 800, calls: [[{ opacity: [1, 0], transformPerspective: [800, 800], rotateX: [0, -45] }]], reset: { transformPerspective: 0 } },
                "transition.flipYOut": { defaultDuration: 800, calls: [[{ opacity: [0, 1], transformPerspective: [800, 800], rotateX: 25 }]], reset: { transformPerspective: 0, rotateX: 0 } },
                "transition.flipBounceXIn": {
                    defaultDuration: 900,
                    calls: [
                        [{ opacity: [0.725, 0], transformPerspective: [400, 400], rotateY: [-10, 90] }, 0.5],
                        [{ opacity: 0.8, rotateY: 10 }, 0.25],
                        [{ opacity: 1, rotateY: 0 }, 0.25],
                    ],
                    reset: { transformPerspective: 0 },
                },
                "transition.flipBounceXOut": {
                    defaultDuration: 800,
                    calls: [
                        [{ opacity: [0.9, 1], transformPerspective: [400, 400], rotateY: -10 }, 0.5],
                        [{ opacity: 0, rotateY: 90 }, 0.5],
                    ],
                    reset: { transformPerspective: 0, rotateY: 0 },
                },
                "transition.flipBounceYIn": {
                    defaultDuration: 850,
                    calls: [
                        [{ opacity: [0.725, 0], transformPerspective: [400, 400], rotateX: [-10, 90] }, 0.5],
                        [{ opacity: 0.8, rotateX: 10 }, 0.25],
                        [{ opacity: 1, rotateX: 0 }, 0.25],
                    ],
                    reset: { transformPerspective: 0 },
                },
                "transition.flipBounceYOut": {
                    defaultDuration: 800,
                    calls: [
                        [{ opacity: [0.9, 1], transformPerspective: [400, 400], rotateX: -15 }, 0.5],
                        [{ opacity: 0, rotateX: 90 }, 0.5],
                    ],
                    reset: { transformPerspective: 0, rotateX: 0 },
                },
                "transition.swoopIn": {
                    defaultDuration: 850,
                    calls: [[{ opacity: [1, 0], transformOriginX: ["100%", "50%"], transformOriginY: ["100%", "100%"], scaleX: [1, 0], scaleY: [1, 0], translateX: [0, -700], translateZ: 0 }]],
                    reset: { transformOriginX: "50%", transformOriginY: "50%" },
                },
                "transition.swoopOut": {
                    defaultDuration: 850,
                    calls: [[{ opacity: [0, 1], transformOriginX: ["50%", "100%"], transformOriginY: ["100%", "100%"], scaleX: 0, scaleY: 0, translateX: -700, translateZ: 0 }]],
                    reset: { transformOriginX: "50%", transformOriginY: "50%", scaleX: 1, scaleY: 1, translateX: 0 },
                },
                "transition.whirlIn": {
                    defaultDuration: 850,
                    calls: [[{ opacity: [1, 0], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: [1, 0], scaleY: [1, 0], rotateY: [0, 160] }, 1, { easing: "easeInOutSine" }]],
                },
                "transition.whirlOut": {
                    defaultDuration: 750,
                    calls: [[{ opacity: [0, "easeInOutQuint", 1], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: 0, scaleY: 0, rotateY: 160 }, 1, { easing: "swing" }]],
                    reset: { scaleX: 1, scaleY: 1, rotateY: 0 },
                },
                "transition.shrinkIn": { defaultDuration: 750, calls: [[{ opacity: [1, 0], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: [1, 1.5], scaleY: [1, 1.5], translateZ: 0 }]] },
                "transition.shrinkOut": { defaultDuration: 600, calls: [[{ opacity: [0, 1], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: 1.3, scaleY: 1.3, translateZ: 0 }]], reset: { scaleX: 1, scaleY: 1 } },
                "transition.expandIn": { defaultDuration: 700, calls: [[{ opacity: [1, 0], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: [1, 0.625], scaleY: [1, 0.625], translateZ: 0 }]] },
                "transition.expandOut": { defaultDuration: 700, calls: [[{ opacity: [0, 1], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: 0.5, scaleY: 0.5, translateZ: 0 }]], reset: { scaleX: 1, scaleY: 1 } },
                "transition.bounceIn": {
                    defaultDuration: 800,
                    calls: [
                        [{ opacity: [1, 0], scaleX: [1.05, 0.3], scaleY: [1.05, 0.3] }, 0.4],
                        [{ scaleX: 0.9, scaleY: 0.9, translateZ: 0 }, 0.2],
                        [{ scaleX: 1, scaleY: 1 }, 0.5],
                    ],
                },
                "transition.bounceOut": {
                    defaultDuration: 800,
                    calls: [
                        [{ scaleX: 0.95, scaleY: 0.95 }, 0.35],
                        [{ scaleX: 1.1, scaleY: 1.1, translateZ: 0 }, 0.35],
                        [{ opacity: [0, 1], scaleX: 0.3, scaleY: 0.3 }, 0.3],
                    ],
                    reset: { scaleX: 1, scaleY: 1 },
                },
                "transition.bounceUpIn": {
                    defaultDuration: 800,
                    calls: [
                        [{ opacity: [1, 0], translateY: [-30, 1e3] }, 0.6, { easing: "easeOutCirc" }],
                        [{ translateY: 10 }, 0.2],
                        [{ translateY: 0 }, 0.2],
                    ],
                },
                "transition.bounceUpOut": {
                    defaultDuration: 1e3,
                    calls: [
                        [{ translateY: 20 }, 0.2],
                        [{ opacity: [0, "easeInCirc", 1], translateY: -1e3 }, 0.8],
                    ],
                    reset: { translateY: 0 },
                },
                "transition.bounceDownIn": {
                    defaultDuration: 800,
                    calls: [
                        [{ opacity: [1, 0], translateY: [30, -1e3] }, 0.6, { easing: "easeOutCirc" }],
                        [{ translateY: -10 }, 0.2],
                        [{ translateY: 0 }, 0.2],
                    ],
                },
                "transition.bounceDownOut": {
                    defaultDuration: 1e3,
                    calls: [
                        [{ translateY: -20 }, 0.2],
                        [{ opacity: [0, "easeInCirc", 1], translateY: 1e3 }, 0.8],
                    ],
                    reset: { translateY: 0 },
                },
                "transition.bounceLeftIn": {
                    defaultDuration: 750,
                    calls: [
                        [{ opacity: [1, 0], translateX: [30, -1250] }, 0.6, { easing: "easeOutCirc" }],
                        [{ translateX: -10 }, 0.2],
                        [{ translateX: 0 }, 0.2],
                    ],
                },
                "transition.bounceLeftOut": {
                    defaultDuration: 750,
                    calls: [
                        [{ translateX: 30 }, 0.2],
                        [{ opacity: [0, "easeInCirc", 1], translateX: -1250 }, 0.8],
                    ],
                    reset: { translateX: 0 },
                },
                "transition.bounceRightIn": {
                    defaultDuration: 750,
                    calls: [
                        [{ opacity: [1, 0], translateX: [-30, 1250] }, 0.6, { easing: "easeOutCirc" }],
                        [{ translateX: 10 }, 0.2],
                        [{ translateX: 0 }, 0.2],
                    ],
                },
                "transition.bounceRightOut": {
                    defaultDuration: 750,
                    calls: [
                        [{ translateX: -30 }, 0.2],
                        [{ opacity: [0, "easeInCirc", 1], translateX: 1250 }, 0.8],
                    ],
                    reset: { translateX: 0 },
                },
                "transition.slideUpIn": { defaultDuration: 900, calls: [[{ opacity: [1, 0], translateY: [0, 20], translateZ: 0 }]] },
                "transition.slideUpOut": { defaultDuration: 900, calls: [[{ opacity: [0, 1], translateY: -20, translateZ: 0 }]], reset: { translateY: 0 } },
                "transition.slideDownIn": { defaultDuration: 900, calls: [[{ opacity: [1, 0], translateY: [0, -20], translateZ: 0 }]] },
                "transition.slideDownOut": { defaultDuration: 900, calls: [[{ opacity: [0, 1], translateY: 20, translateZ: 0 }]], reset: { translateY: 0 } },
                "transition.slideLeftIn": { defaultDuration: 1e3, calls: [[{ opacity: [1, 0], translateX: [0, -20], translateZ: 0 }]] },
                "transition.slideLeftOut": { defaultDuration: 1050, calls: [[{ opacity: [0, 1], translateX: -20, translateZ: 0 }]], reset: { translateX: 0 } },
                "transition.slideRightIn": { defaultDuration: 1e3, calls: [[{ opacity: [1, 0], translateX: [0, 20], translateZ: 0 }]] },
                "transition.slideRightOut": { defaultDuration: 1050, calls: [[{ opacity: [0, 1], translateX: 20, translateZ: 0 }]], reset: { translateX: 0 } },
                "transition.slideUpBigIn": { defaultDuration: 850, calls: [[{ opacity: [1, 0], translateY: [0, 75], translateZ: 0 }]] },
                "transition.slideUpBigOut": { defaultDuration: 800, calls: [[{ opacity: [0, 1], translateY: -75, translateZ: 0 }]], reset: { translateY: 0 } },
                "transition.slideDownBigIn": { defaultDuration: 850, calls: [[{ opacity: [1, 0], translateY: [0, -75], translateZ: 0 }]] },
                "transition.slideDownBigOut": { defaultDuration: 800, calls: [[{ opacity: [0, 1], translateY: 75, translateZ: 0 }]], reset: { translateY: 0 } },
                "transition.slideLeftBigIn": { defaultDuration: 800, calls: [[{ opacity: [1, 0], translateX: [0, -75], translateZ: 0 }]] },
                "transition.slideLeftBigOut": { defaultDuration: 750, calls: [[{ opacity: [0, 1], translateX: -75, translateZ: 0 }]], reset: { translateX: 0 } },
                "transition.slideRightBigIn": { defaultDuration: 800, calls: [[{ opacity: [1, 0], translateX: [0, 75], translateZ: 0 }]] },
                "transition.slideRightBigOut": { defaultDuration: 750, calls: [[{ opacity: [0, 1], translateX: 75, translateZ: 0 }]], reset: { translateX: 0 } },
                "transition.perspectiveUpIn": {
                    defaultDuration: 800,
                    calls: [[{ opacity: [1, 0], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: ["100%", "100%"], rotateX: [0, -180] }]],
                    reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" },
                },
                "transition.perspectiveUpOut": {
                    defaultDuration: 850,
                    calls: [[{ opacity: [0, 1], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: ["100%", "100%"], rotateX: -180 }]],
                    reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0 },
                },
                "transition.perspectiveDownIn": {
                    defaultDuration: 800,
                    calls: [[{ opacity: [1, 0], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateX: [0, 180] }]],
                    reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" },
                },
                "transition.perspectiveDownOut": {
                    defaultDuration: 850,
                    calls: [[{ opacity: [0, 1], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateX: 180 }]],
                    reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0 },
                },
                "transition.perspectiveLeftIn": {
                    defaultDuration: 950,
                    calls: [[{ opacity: [1, 0], transformPerspective: [2e3, 2e3], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateY: [0, -180] }]],
                    reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" },
                },
                "transition.perspectiveLeftOut": {
                    defaultDuration: 950,
                    calls: [[{ opacity: [0, 1], transformPerspective: [2e3, 2e3], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateY: -180 }]],
                    reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0 },
                },
                "transition.perspectiveRightIn": {
                    defaultDuration: 950,
                    calls: [[{ opacity: [1, 0], transformPerspective: [2e3, 2e3], transformOriginX: ["100%", "100%"], transformOriginY: [0, 0], rotateY: [0, 180] }]],
                    reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" },
                },
                "transition.perspectiveRightOut": {
                    defaultDuration: 950,
                    calls: [[{ opacity: [0, 1], transformPerspective: [2e3, 2e3], transformOriginX: ["100%", "100%"], transformOriginY: [0, 0], rotateY: 180 }]],
                    reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0 },
                },
            });
        for (var c in i.RegisterEffect.packagedEffects) i.RegisterEffect(c, i.RegisterEffect.packagedEffects[c]);
        i.RunSequence = function (t2) {
            var a2 = $2.extend(!0, [], t2);
            a2.length > 1 &&
                ($2.each(a2.reverse(), function (t3, e2) {
                    var r2 = a2[t3 + 1];
                    if (r2) {
                        var n2 = e2.o || e2.options,
                            s2 = r2.o || r2.options,
                            o2 = n2 && n2.sequenceQueue === !1 ? "begin" : "complete",
                            l2 = s2 && s2[o2],
                            c2 = {};
                        (c2[o2] = function () {
                            var t4 = r2.e || r2.elements,
                                a3 = t4.nodeType ? [t4] : t4;
                            l2 && l2.call(a3, a3), i(e2);
                        }),
                            r2.o ? (r2.o = $2.extend({}, s2, c2)) : (r2.options = $2.extend({}, s2, c2));
                    }
                }),
                a2.reverse()),
                i(a2[0]);
        };
    })(window.jQuery || window.Zepto || window, window, document);
}),
    jQuery(document).ready(function ($2) {
        var hijacking = $2("body").data("hijacking"),
            animationType = $2("body").data("animation"),
            delta = 0,
            scrollThreshold = 5,
            actual = 1,
            animating = !1,
            sectionsAvailable = $2(".cd-section"),
            verticalNav = $2(".cd-vertical-nav"),
            prevArrow = verticalNav.find("a.cd-prev"),
            nextArrow = verticalNav.find("a.cd-next"),
            MQ = deviceType(),
            bindToggle = !1;
        bindEvents(MQ, !0),
            $2(window).on("resize", function () {
                (MQ = deviceType()), bindEvents(MQ, bindToggle), MQ == "mobile" && (bindToggle = !0), MQ == "desktop" && (bindToggle = !1);
            });
        function bindEvents(MQ2, bool) {
            MQ2 == "desktop" && bool
                ? (hijacking == "on" ? (initHijacking(), $2(window).on("DOMMouseScroll mousewheel", scrollHijacking)) : (scrollAnimation(), $2(window).on("scroll", scrollAnimation)),
                  prevArrow.on("click", prevSection),
                  nextArrow.on("click", nextSection),
                  checkNavigation())
                : MQ2 == "mobile" &&
                  (resetSectionStyle(),
                  $2(window).off("DOMMouseScroll mousewheel", scrollHijacking),
                  $2(window).off("scroll", scrollAnimation),
                  prevArrow.off("click", prevSection),
                  nextArrow.off("click", nextSection),
                  $2(document).off("keydown"));
        }
        function scrollAnimation() {
            window.requestAnimationFrame ? window.requestAnimationFrame(animateSection) : animateSection();
        }
        function animateSection() {
            var scrollTop = $2(window).scrollTop(),
                windowHeight = $2(window).height(),
                windowWidth = $2(window).width();
            sectionsAvailable.each(function () {
                var actualBlock = $2(this),
                    offset = scrollTop - actualBlock.offset().top,
                    animationValues = setSectionAnimation(offset, windowHeight, animationType);
                transformSection(actualBlock.children("div"), animationValues[0], animationValues[1], animationValues[2], animationValues[3], animationValues[4]),
                    offset >= 0 && offset < windowHeight ? actualBlock.addClass("visible") : actualBlock.removeClass("visible");
            }),
                checkNavigation();
        }
        function transformSection(element, translateY, scaleValue, rotateXValue, opacityValue, boxShadow) {
            element.velocity({ translateY: translateY + "vh", scale: scaleValue, rotateX: rotateXValue, opacity: opacityValue, boxShadowBlur: boxShadow + "px", translateZ: 0 }, 0);
        }
        function initHijacking() {
            var visibleSection = sectionsAvailable.filter(".visible"),
                topSection = visibleSection.prevAll(".cd-section"),
                bottomSection = visibleSection.nextAll(".cd-section"),
                animationParams = selectAnimation(animationType, !1),
                animationVisible = animationParams[0],
                animationTop = animationParams[1],
                animationBottom = animationParams[2];
            visibleSection.children("div").velocity(animationVisible, 1, function () {
                visibleSection.css("opacity", 1), topSection.css("opacity", 1), bottomSection.css("opacity", 1);
            }),
                topSection.children("div").velocity(animationTop, 0),
                bottomSection.children("div").velocity(animationBottom, 0);
        }
        function scrollHijacking(event) {
            return event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0 ? (delta--, Math.abs(delta) >= scrollThreshold && prevSection()) : (delta++, delta >= scrollThreshold && nextSection()), !1;
        }
        function prevSection(event) {
            typeof event != "undefined" && event.preventDefault();
            var visibleSection = sectionsAvailable.filter(".visible"),
                middleScroll = hijacking == "off" && $2(window).scrollTop() != visibleSection.offset().top;
            visibleSection = middleScroll ? visibleSection.next(".cd-section") : visibleSection;
            var animationParams = selectAnimation(animationType, middleScroll, "prev");
            unbindScroll(visibleSection.prev(".cd-section"), animationParams[3]),
                !animating &&
                    !visibleSection.is(":first-child") &&
                    ((animating = !0),
                    visibleSection
                        .removeClass("visible")
                        .children("div")
                        .velocity(animationParams[2], animationParams[3], animationParams[4])
                        .end()
                        .prev(".cd-section")
                        .addClass("visible")
                        .children("div")
                        .velocity(animationParams[0], animationParams[3], animationParams[4], function () {
                            (animating = !1), hijacking == "off" && $2(window).on("scroll", scrollAnimation);
                        }),
                    (actual = actual - 1)),
                resetScroll();
        }
        function nextSection(event) {
            typeof event != "undefined" && event.preventDefault();
            var visibleSection = sectionsAvailable.filter(".visible"),
                middleScroll = hijacking == "off" && $2(window).scrollTop() != visibleSection.offset().top,
                animationParams = selectAnimation(animationType, middleScroll, "next");
            unbindScroll(visibleSection.next(".cd-section"), animationParams[3]),
                !animating &&
                    !visibleSection.is(":last-of-type") &&
                    ((animating = !0),
                    visibleSection
                        .removeClass("visible")
                        .children("div")
                        .velocity(animationParams[1], animationParams[3], animationParams[4])
                        .end()
                        .next(".cd-section")
                        .addClass("visible")
                        .children("div")
                        .velocity(animationParams[0], animationParams[3], animationParams[4], function () {
                            (animating = !1), hijacking == "off" && $2(window).on("scroll", scrollAnimation);
                        }),
                    (actual = actual + 1)),
                resetScroll();
        }
        function unbindScroll(section, time) {
            hijacking == "off" && ($2(window).off("scroll", scrollAnimation), animationType == "catch" ? $2("body, html").scrollTop(section.offset().top) : section.velocity("scroll", { duration: time }));
        }
        function resetScroll() {
            (delta = 0), checkNavigation();
        }
        function checkNavigation() {
            sectionsAvailable.filter(".visible").is(":first-of-type") ? prevArrow.addClass("inactive") : prevArrow.removeClass("inactive"),
                sectionsAvailable.filter(".visible").is(":last-of-type") ? nextArrow.addClass("inactive") : nextArrow.removeClass("inactive");
        }
        function resetSectionStyle() {
            sectionsAvailable.children("div").each(function () {
                $2(this).attr("style", "");
            });
        }
        function deviceType() {
            return window.getComputedStyle(document.querySelector("body"), "::before").getPropertyValue("content").replace(/"/g, "").replace(/'/g, "");
        }
        function selectAnimation(animationName, middleScroll, direction) {
            var animationVisible = "translateNone",
                animationTop = "translateUp",
                animationBottom = "translateDown",
                easing = "ease",
                animDuration = 800;
            switch (animationName) {
                case "scaleDown":
                    (animationTop = "scaleDown"), (easing = "easeInCubic");
                    break;
                case "rotate":
                    hijacking == "off" ? ((animationTop = "rotation.scroll"), (animationBottom = "translateNone")) : ((animationTop = "rotation"), (easing = "easeInCubic"));
                    break;
                case "gallery":
                    (animDuration = 1500),
                        middleScroll
                            ? ((animationTop = "scaleDown.moveUp.scroll"), (animationVisible = "scaleUp.moveUp.scroll"), (animationBottom = "scaleDown.moveDown.scroll"))
                            : ((animationVisible = direction == "next" ? "scaleUp.moveUp" : "scaleUp.moveDown"), (animationTop = "scaleDown.moveUp"), (animationBottom = "scaleDown.moveDown"));
                    break;
                case "catch":
                    animationVisible = "translateUp.delay";
                    break;
                case "opacity":
                    (animDuration = 700), (animationTop = "hide.scaleUp"), (animationBottom = "hide.scaleDown");
                    break;
                case "fixed":
                    (animationTop = "translateNone"), (easing = "easeInCubic");
                    break;
                case "parallax":
                    (animationTop = "translateUp.half"), (easing = "easeInCubic");
                    break;
            }
            return [animationVisible, animationTop, animationBottom, animDuration, easing];
        }
        function setSectionAnimation(sectionOffset, windowHeight, animationName) {
            var scale = 1,
                translateY = 100,
                rotateX = "0deg",
                opacity = 1,
                boxShadowBlur = 0;
            if (sectionOffset >= -windowHeight && sectionOffset <= 0)
                switch (((translateY = (-sectionOffset * 100) / windowHeight), animationName)) {
                    case "scaleDown":
                        (scale = 1), (opacity = 1);
                        break;
                    case "rotate":
                        translateY = 0;
                        break;
                    case "gallery":
                        sectionOffset >= -windowHeight && sectionOffset < -0.9 * windowHeight
                            ? ((scale = -sectionOffset / windowHeight), (translateY = (-sectionOffset * 100) / windowHeight), (boxShadowBlur = 400 * (1 + sectionOffset / windowHeight)))
                            : sectionOffset >= -0.9 * windowHeight && sectionOffset < -0.1 * windowHeight
                            ? ((scale = 0.9), (translateY = (-(9 / 8) * (sectionOffset + 0.1 * windowHeight) * 100) / windowHeight), (boxShadowBlur = 40))
                            : ((scale = 1 + sectionOffset / windowHeight), (translateY = 0), (boxShadowBlur = (-400 * sectionOffset) / windowHeight));
                        break;
                    case "catch":
                        sectionOffset >= -windowHeight && sectionOffset < -0.75 * windowHeight
                            ? ((translateY = 100), (boxShadowBlur = (1 + sectionOffset / windowHeight) * 160))
                            : ((translateY = (-(10 / 7.5) * sectionOffset * 100) / windowHeight), (boxShadowBlur = (-160 * sectionOffset) / (3 * windowHeight)));
                        break;
                    case "opacity":
                        (translateY = 0), (scale = ((sectionOffset + 5 * windowHeight) * 0.2) / windowHeight), (opacity = (sectionOffset + windowHeight) / windowHeight);
                        break;
                }
            else if (sectionOffset > 0 && sectionOffset <= windowHeight)
                switch (((translateY = (-sectionOffset * 100) / windowHeight), animationName)) {
                    case "scaleDown":
                        (scale = (1 - (sectionOffset * 0.3) / windowHeight).toFixed(5)), (opacity = (1 - sectionOffset / windowHeight).toFixed(5)), (translateY = 0), (boxShadowBlur = 40 * (sectionOffset / windowHeight));
                        break;
                    case "rotate":
                        (opacity = (1 - sectionOffset / windowHeight).toFixed(5)), (rotateX = (sectionOffset * 90) / windowHeight + "deg"), (translateY = 0);
                        break;
                    case "gallery":
                        sectionOffset >= 0 && sectionOffset < 0.1 * windowHeight
                            ? ((scale = (windowHeight - sectionOffset) / windowHeight), (translateY = -(sectionOffset / windowHeight) * 100), (boxShadowBlur = (400 * sectionOffset) / windowHeight))
                            : sectionOffset >= 0.1 * windowHeight && sectionOffset < 0.9 * windowHeight
                            ? ((scale = 0.9), (translateY = (-(9 / 8) * (sectionOffset - (0.1 * windowHeight) / 9) * 100) / windowHeight), (boxShadowBlur = 40))
                            : ((scale = sectionOffset / windowHeight), (translateY = -100), (boxShadowBlur = 400 * (1 - sectionOffset / windowHeight)));
                        break;
                    case "catch":
                        sectionOffset >= 0 && sectionOffset < windowHeight / 2 ? (boxShadowBlur = (sectionOffset * 80) / windowHeight) : (boxShadowBlur = 80 * (1 - sectionOffset / windowHeight));
                        break;
                    case "opacity":
                        (translateY = 0), (scale = ((sectionOffset + 5 * windowHeight) * 0.2) / windowHeight), (opacity = (windowHeight - sectionOffset) / windowHeight);
                        break;
                    case "fixed":
                        translateY = 0;
                        break;
                    case "parallax":
                        translateY = (-sectionOffset * 50) / windowHeight;
                        break;
                }
            else if (sectionOffset < -windowHeight)
                switch (((translateY = 100), animationName)) {
                    case "scaleDown":
                        (scale = 1), (opacity = 1);
                        break;
                    case "gallery":
                        scale = 1;
                        break;
                    case "opacity":
                        (translateY = 0), (scale = 0.8), (opacity = 0);
                        break;
                }
            else
                switch (((translateY = -100), animationName)) {
                    case "scaleDown":
                        (scale = 0), (opacity = 0.7), (translateY = 0);
                        break;
                    case "rotate":
                        (translateY = 0), (rotateX = "90deg");
                        break;
                    case "gallery":
                        scale = 1;
                        break;
                    case "opacity":
                        (translateY = 0), (scale = 1.2), (opacity = 0);
                        break;
                    case "fixed":
                        translateY = 0;
                        break;
                    case "parallax":
                        translateY = -50;
                        break;
                }
            return [translateY, scale, rotateX, opacity, boxShadowBlur];
        }
    }),
    $.Velocity.RegisterEffect("translateUp", { defaultDuration: 1, calls: [[{ translateY: "-100%" }, 1]] }),
    $.Velocity.RegisterEffect("translateDown", { defaultDuration: 1, calls: [[{ translateY: "100%" }, 1]] }),
    $.Velocity.RegisterEffect("translateNone", { defaultDuration: 1, calls: [[{ translateY: "0", opacity: "1", scale: "1", rotateX: "0", boxShadowBlur: "0" }, 1]] }),
    $.Velocity.RegisterEffect("scaleDown", { defaultDuration: 1, calls: [[{ opacity: "0", scale: "0.7", boxShadowBlur: "40px" }, 1]] }),
    $.Velocity.RegisterEffect("rotation", { defaultDuration: 1, calls: [[{ opacity: "0", rotateX: "90", translateY: "-100%" }, 1]] }),
    $.Velocity.RegisterEffect("rotation.scroll", { defaultDuration: 1, calls: [[{ opacity: "0", rotateX: "90", translateY: "0" }, 1]] }),
    $.Velocity.RegisterEffect("scaleDown.moveUp", {
        defaultDuration: 1,
        calls: [
            [{ translateY: "-10%", scale: "0.9", boxShadowBlur: "40px" }, 0.2],
            [{ translateY: "-100%" }, 0.6],
            [{ translateY: "-100%", scale: "1", boxShadowBlur: "0" }, 0.2],
        ],
    }),
    $.Velocity.RegisterEffect("scaleDown.moveUp.scroll", {
        defaultDuration: 1,
        calls: [
            [{ translateY: "-100%", scale: "0.9", boxShadowBlur: "40px" }, 0.6],
            [{ translateY: "-100%", scale: "1", boxShadowBlur: "0" }, 0.4],
        ],
    }),
    $.Velocity.RegisterEffect("scaleUp.moveUp", {
        defaultDuration: 1,
        calls: [
            [{ translateY: "90%", scale: "0.9", boxShadowBlur: "40px" }, 0.2],
            [{ translateY: "0%" }, 0.6],
            [{ translateY: "0%", scale: "1", boxShadowBlur: "0" }, 0.2],
        ],
    }),
    $.Velocity.RegisterEffect("scaleUp.moveUp.scroll", {
        defaultDuration: 1,
        calls: [
            [{ translateY: "0%", scale: "0.9", boxShadowBlur: "40px" }, 0.6],
            [{ translateY: "0%", scale: "1", boxShadowBlur: "0" }, 0.4],
        ],
    }),
    $.Velocity.RegisterEffect("scaleDown.moveDown", {
        defaultDuration: 1,
        calls: [
            [{ translateY: "10%", scale: "0.9", boxShadowBlur: "40px" }, 0.2],
            [{ translateY: "100%" }, 0.6],
            [{ translateY: "100%", scale: "1", boxShadowBlur: "0" }, 0.2],
        ],
    }),
    $.Velocity.RegisterEffect("scaleDown.moveDown.scroll", {
        defaultDuration: 1,
        calls: [
            [{ translateY: "100%", scale: "0.9", boxShadowBlur: "40px" }, 0.6],
            [{ translateY: "100%", scale: "1", boxShadowBlur: "0" }, 0.4],
        ],
    }),
    $.Velocity.RegisterEffect("scaleUp.moveDown", {
        defaultDuration: 1,
        calls: [
            [{ translateY: "-90%", scale: "0.9", boxShadowBlur: "40px" }, 0.2],
            [{ translateY: "0%" }, 0.6],
            [{ translateY: "0%", scale: "1", boxShadowBlur: "0" }, 0.2],
        ],
    }),
    $.Velocity.RegisterEffect("translateUp.delay", { defaultDuration: 1, calls: [[{ translateY: "0%" }, 0.8, { delay: 100 }]] }),
    $.Velocity.RegisterEffect("hide.scaleUp", { defaultDuration: 1, calls: [[{ opacity: "0", scale: "1.2" }, 1]] }),
    $.Velocity.RegisterEffect("hide.scaleDown", { defaultDuration: 1, calls: [[{ opacity: "0", scale: "0.8" }, 1]] }),
    $.Velocity.RegisterEffect("translateUp.half", { defaultDuration: 1, calls: [[{ translateY: "-50%" }, 1]] });
