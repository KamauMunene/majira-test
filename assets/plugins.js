/* Bootstrap */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if ((e[0] < 2 && e[1] < 9) || (1 == e[0] && 9 == e[1] && e[2] < 1)) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher");
})(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this),
                    n = i.data("bs.alert");
                n || i.data("bs.alert", (n = new o(this))), "string" == typeof e && n[e].call(i);
            });
        }
        var i = '[data-dismiss="alert"]',
            o = function (e) {
                t(e).on("click", i, this.close);
            };
        (o.VERSION = "3.3.5"),
            (o.TRANSITION_DURATION = 150),
            (o.prototype.close = function (e) {
                function i() {
                    a.detach().trigger("closed.bs.alert").remove();
                }
                var n = t(this),
                    s = n.attr("data-target");
                s || ((s = n.attr("href")), (s = s && s.replace(/.*(?=#[^\s]*$)/, "")));
                var a = t(s);
                e && e.preventDefault(),
                    a.length || (a = n.closest(".alert")),
                    a.trigger((e = t.Event("close.bs.alert"))),
                    e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i());
            });
        var n = t.fn.alert;
        (t.fn.alert = e),
            (t.fn.alert.Constructor = o),
            (t.fn.alert.noConflict = function () {
                return (t.fn.alert = n), this;
            }),
            t(document).on("click.bs.alert.data-api", i, o.prototype.close);
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var o = t(this),
                    n = o.data("bs.button"),
                    s = "object" == typeof e && e;
                n || o.data("bs.button", (n = new i(this, s))), "toggle" == e ? n.toggle() : e && n.setState(e);
            });
        }
        var i = function (e, o) {
            (this.$element = t(e)), (this.options = t.extend({}, i.DEFAULTS, o)), (this.isLoading = !1);
        };
        (i.VERSION = "3.3.5"),
            (i.DEFAULTS = { loadingText: "loading..." }),
            (i.prototype.setState = function (e) {
                var i = "disabled",
                    o = this.$element,
                    n = o.is("input") ? "val" : "html",
                    s = o.data();
                (e += "Text"),
                    null == s.resetText && o.data("resetText", o[n]()),
                    setTimeout(
                        t.proxy(function () {
                            o[n](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? ((this.isLoading = !0), o.addClass(i).attr(i, i)) : this.isLoading && ((this.isLoading = !1), o.removeClass(i).removeAttr(i));
                        }, this),
                        0
                    );
            }),
            (i.prototype.toggle = function () {
                var t = !0,
                    e = this.$element.closest('[data-toggle="buttons"]');
                if (e.length) {
                    var i = this.$element.find("input");
                    "radio" == i.prop("type")
                        ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active"))
                        : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")),
                        i.prop("checked", this.$element.hasClass("active")),
                        t && i.trigger("change");
                } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
            });
        var o = t.fn.button;
        (t.fn.button = e),
            (t.fn.button.Constructor = i),
            (t.fn.button.noConflict = function () {
                return (t.fn.button = o), this;
            }),
            t(document)
                .on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
                    var o = t(i.target);
                    o.hasClass("btn") || (o = o.closest(".btn")), e.call(o, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault();
                })
                .on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
                    t(e.target)
                        .closest(".btn")
                        .toggleClass("focus", /^focus(in)?$/.test(e.type));
                });
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var o = t(this),
                    n = o.data("bs.carousel"),
                    s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
                    a = "string" == typeof e ? e : s.slide;
                n || o.data("bs.carousel", (n = new i(this, s))), "number" == typeof e ? n.to(e) : a ? n[a]() : s.interval && n.pause().cycle();
            });
        }
        var i = function (e, i) {
            (this.$element = t(e)),
                (this.$indicators = this.$element.find(".carousel-indicators")),
                (this.options = i),
                (this.paused = null),
                (this.sliding = null),
                (this.interval = null),
                (this.$active = null),
                (this.$items = null),
                this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
                "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
        };
        (i.VERSION = "3.3.5"),
            (i.TRANSITION_DURATION = 600),
            (i.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
            (i.prototype.keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName)) {
                    switch (t.which) {
                        case 37:
                            this.prev();
                            break;
                        case 39:
                            this.next();
                            break;
                        default:
                            return;
                    }
                    t.preventDefault();
                }
            }),
            (i.prototype.cycle = function (e) {
                return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this;
            }),
            (i.prototype.getItemIndex = function (t) {
                return (this.$items = t.parent().children(".item")), this.$items.index(t || this.$active);
            }),
            (i.prototype.getItemForDirection = function (t, e) {
                var i = this.getItemIndex(e),
                    o = ("prev" == t && 0 === i) || ("next" == t && i == this.$items.length - 1);
                if (o && !this.options.wrap) return e;
                var n = "prev" == t ? -1 : 1,
                    s = (i + n) % this.$items.length;
                return this.$items.eq(s);
            }),
            (i.prototype.to = function (t) {
                var e = this,
                    i = this.getItemIndex((this.$active = this.$element.find(".item.active")));
                return t > this.$items.length - 1 || 0 > t
                    ? void 0
                    : this.sliding
                    ? this.$element.one("slid.bs.carousel", function () {
                          e.to(t);
                      })
                    : i == t
                    ? this.pause().cycle()
                    : this.slide(t > i ? "next" : "prev", this.$items.eq(t));
            }),
            (i.prototype.pause = function (e) {
                return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), (this.interval = clearInterval(this.interval)), this;
            }),
            (i.prototype.next = function () {
                return this.sliding ? void 0 : this.slide("next");
            }),
            (i.prototype.prev = function () {
                return this.sliding ? void 0 : this.slide("prev");
            }),
            (i.prototype.slide = function (e, o) {
                var n = this.$element.find(".item.active"),
                    s = o || this.getItemForDirection(e, n),
                    a = this.interval,
                    r = "next" == e ? "left" : "right",
                    l = this;
                if (s.hasClass("active")) return (this.sliding = !1);
                var h = s[0],
                    d = t.Event("slide.bs.carousel", { relatedTarget: h, direction: r });
                if ((this.$element.trigger(d), !d.isDefaultPrevented())) {
                    if (((this.sliding = !0), a && this.pause(), this.$indicators.length)) {
                        this.$indicators.find(".active").removeClass("active");
                        var p = t(this.$indicators.children()[this.getItemIndex(s)]);
                        p && p.addClass("active");
                    }
                    var c = t.Event("slid.bs.carousel", { relatedTarget: h, direction: r });
                    return (
                        t.support.transition && this.$element.hasClass("slide")
                            ? (s.addClass(e),
                              s[0].offsetWidth,
                              n.addClass(r),
                              s.addClass(r),
                              n
                                  .one("bsTransitionEnd", function () {
                                      s.removeClass([e, r].join(" ")).addClass("active"),
                                          n.removeClass(["active", r].join(" ")),
                                          (l.sliding = !1),
                                          setTimeout(function () {
                                              l.$element.trigger(c);
                                          }, 0);
                                  })
                                  .emulateTransitionEnd(i.TRANSITION_DURATION))
                            : (n.removeClass("active"), s.addClass("active"), (this.sliding = !1), this.$element.trigger(c)),
                        a && this.cycle(),
                        this
                    );
                }
            });
        var o = t.fn.carousel;
        (t.fn.carousel = e),
            (t.fn.carousel.Constructor = i),
            (t.fn.carousel.noConflict = function () {
                return (t.fn.carousel = o), this;
            });
        var n = function (i) {
            var o,
                n = t(this),
                s = t(n.attr("data-target") || ((o = n.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")));
            if (s.hasClass("carousel")) {
                var a = t.extend({}, s.data(), n.data()),
                    r = n.attr("data-slide-to");
                r && (a.interval = !1), e.call(s, a), r && s.data("bs.carousel").to(r), i.preventDefault();
            }
        };
        t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n),
            t(window).on("load", function () {
                t('[data-ride="carousel"]').each(function () {
                    var i = t(this);
                    e.call(i, i.data());
                });
            });
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            var i = e.attr("data-target");
            i || ((i = e.attr("href")), (i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")));
            var o = i && t(i);
            return o && o.length ? o : e.parent();
        }
        function i(i) {
            (i && 3 === i.which) ||
                (t(n).remove(),
                t(s).each(function () {
                    var o = t(this),
                        n = e(o),
                        s = { relatedTarget: this };
                    n.hasClass("open") &&
                        ((i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(n[0], i.target)) ||
                            (n.trigger((i = t.Event("hide.bs.dropdown", s))), i.isDefaultPrevented() || (o.attr("aria-expanded", "false"), n.removeClass("open").trigger("hidden.bs.dropdown", s))));
                }));
        }
        function o(e) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.dropdown");
                o || i.data("bs.dropdown", (o = new a(this))), "string" == typeof e && o[e].call(i);
            });
        }
        var n = ".dropdown-backdrop",
            s = '[data-toggle="dropdown"]',
            a = function (e) {
                t(e).on("click.bs.dropdown", this.toggle);
            };
        (a.VERSION = "3.3.5"),
            (a.prototype.toggle = function (o) {
                var n = t(this);
                if (!n.is(".disabled, :disabled")) {
                    var s = e(n),
                        a = s.hasClass("open");
                    if ((i(), !a)) {
                        "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                        var r = { relatedTarget: this };
                        if ((s.trigger((o = t.Event("show.bs.dropdown", r))), o.isDefaultPrevented())) return;
                        n.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger("shown.bs.dropdown", r);
                    }
                    return !1;
                }
            }),
            (a.prototype.keydown = function (i) {
                if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
                    var o = t(this);
                    if ((i.preventDefault(), i.stopPropagation(), !o.is(".disabled, :disabled"))) {
                        var n = e(o),
                            a = n.hasClass("open");
                        if ((!a && 27 != i.which) || (a && 27 == i.which)) return 27 == i.which && n.find(s).trigger("focus"), o.trigger("click");
                        var r = " li:not(.disabled):visible a",
                            l = n.find(".dropdown-menu" + r);
                        if (l.length) {
                            var h = l.index(i.target);
                            38 == i.which && h > 0 && h--, 40 == i.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus");
                        }
                    }
                }
            });
        var r = t.fn.dropdown;
        (t.fn.dropdown = o),
            (t.fn.dropdown.Constructor = a),
            (t.fn.dropdown.noConflict = function () {
                return (t.fn.dropdown = r), this;
            }),
            t(document)
                .on("click.bs.dropdown.data-api", i)
                .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
                    t.stopPropagation();
                })
                .on("click.bs.dropdown.data-api", s, a.prototype.toggle)
                .on("keydown.bs.dropdown.data-api", s, a.prototype.keydown)
                .on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown);
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e, o) {
            return this.each(function () {
                var n = t(this),
                    s = n.data("bs.modal"),
                    a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
                s || n.data("bs.modal", (s = new i(this, a))), "string" == typeof e ? s[e](o) : a.show && s.show(o);
            });
        }
        var i = function (e, i) {
            (this.options = i),
                (this.$body = t(document.body)),
                (this.$element = t(e)),
                (this.$dialog = this.$element.find(".modal-dialog")),
                (this.$backdrop = null),
                (this.isShown = null),
                (this.originalBodyPad = null),
                (this.scrollbarWidth = 0),
                (this.ignoreBackdropClick = !1),
                this.options.remote &&
                    this.$element.find(".modal-content").load(
                        this.options.remote,
                        t.proxy(function () {
                            this.$element.trigger("loaded.bs.modal");
                        }, this)
                    );
        };
        (i.VERSION = "3.3.5"),
            (i.TRANSITION_DURATION = 300),
            (i.BACKDROP_TRANSITION_DURATION = 150),
            (i.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
            (i.prototype.toggle = function (t) {
                return this.isShown ? this.hide() : this.show(t);
            }),
            (i.prototype.show = function (e) {
                var o = this,
                    n = t.Event("show.bs.modal", { relatedTarget: e });
                this.$element.trigger(n),
                    this.isShown ||
                        n.isDefaultPrevented() ||
                        ((this.isShown = !0),
                        this.checkScrollbar(),
                        this.setScrollbar(),
                        this.$body.addClass("modal-open"),
                        this.escape(),
                        this.resize(),
                        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)),
                        this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                            o.$element.one("mouseup.dismiss.bs.modal", function (e) {
                                t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0);
                            });
                        }),
                        this.backdrop(function () {
                            var n = t.support.transition && o.$element.hasClass("fade");
                            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), n && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
                            var s = t.Event("shown.bs.modal", { relatedTarget: e });
                            n
                                ? o.$dialog
                                      .one("bsTransitionEnd", function () {
                                          o.$element.trigger("focus").trigger(s);
                                      })
                                      .emulateTransitionEnd(i.TRANSITION_DURATION)
                                : o.$element.trigger("focus").trigger(s);
                        }));
            }),
            (i.prototype.hide = function (e) {
                e && e.preventDefault(),
                    (e = t.Event("hide.bs.modal")),
                    this.$element.trigger(e),
                    this.isShown &&
                        !e.isDefaultPrevented() &&
                        ((this.isShown = !1),
                        this.escape(),
                        this.resize(),
                        t(document).off("focusin.bs.modal"),
                        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
                        this.$dialog.off("mousedown.dismiss.bs.modal"),
                        t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal());
            }),
            (i.prototype.enforceFocus = function () {
                t(document)
                    .off("focusin.bs.modal")
                    .on(
                        "focusin.bs.modal",
                        t.proxy(function (t) {
                            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus");
                        }, this)
                    );
            }),
            (i.prototype.escape = function () {
                this.isShown && this.options.keyboard
                    ? this.$element.on(
                          "keydown.dismiss.bs.modal",
                          t.proxy(function (t) {
                              27 == t.which && this.hide();
                          }, this)
                      )
                    : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
            }),
            (i.prototype.resize = function () {
                this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal");
            }),
            (i.prototype.hideModal = function () {
                var t = this;
                this.$element.hide(),
                    this.backdrop(function () {
                        t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal");
                    });
            }),
            (i.prototype.removeBackdrop = function () {
                this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
            }),
            (i.prototype.backdrop = function (e) {
                var o = this,
                    n = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var s = t.support.transition && n;
                    if (
                        ((this.$backdrop = t(document.createElement("div"))
                            .addClass("modal-backdrop " + n)
                            .appendTo(this.$body)),
                        this.$element.on(
                            "click.dismiss.bs.modal",
                            t.proxy(function (t) {
                                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
                            }, this)
                        ),
                        s && this.$backdrop[0].offsetWidth,
                        this.$backdrop.addClass("in"),
                        !e)
                    )
                        return;
                    s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e();
                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass("in");
                    var a = function () {
                        o.removeBackdrop(), e && e();
                    };
                    t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a();
                } else e && e();
            }),
            (i.prototype.handleUpdate = function () {
                this.adjustDialog();
            }),
            (i.prototype.adjustDialog = function () {
                var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                this.$element.css({ paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "" });
            }),
            (i.prototype.resetAdjustments = function () {
                this.$element.css({ paddingLeft: "", paddingRight: "" });
            }),
            (i.prototype.checkScrollbar = function () {
                var t = window.innerWidth;
                if (!t) {
                    var e = document.documentElement.getBoundingClientRect();
                    t = e.right - Math.abs(e.left);
                }
                (this.bodyIsOverflowing = document.body.clientWidth < t), (this.scrollbarWidth = this.measureScrollbar());
            }),
            (i.prototype.setScrollbar = function () {
                var t = parseInt(this.$body.css("padding-right") || 0, 10);
                (this.originalBodyPad = document.body.style.paddingRight || ""), this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth);
            }),
            (i.prototype.resetScrollbar = function () {
                this.$body.css("padding-right", this.originalBodyPad);
            }),
            (i.prototype.measureScrollbar = function () {
                var t = document.createElement("div");
                (t.className = "modal-scrollbar-measure"), this.$body.append(t);
                var e = t.offsetWidth - t.clientWidth;
                return this.$body[0].removeChild(t), e;
            });
        var o = t.fn.modal;
        (t.fn.modal = e),
            (t.fn.modal.Constructor = i),
            (t.fn.modal.noConflict = function () {
                return (t.fn.modal = o), this;
            }),
            t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
                var o = t(this),
                    n = o.attr("href"),
                    s = t(o.attr("data-target") || (n && n.replace(/.*(?=#[^\s]+$)/, ""))),
                    a = s.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(n) && n }, s.data(), o.data());
                o.is("a") && i.preventDefault(),
                    s.one("show.bs.modal", function (t) {
                        t.isDefaultPrevented() ||
                            s.one("hidden.bs.modal", function () {
                                o.is(":visible") && o.trigger("focus");
                            });
                    }),
                    e.call(s, a, this);
            });
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var o = t(this),
                    n = o.data("bs.tooltip"),
                    s = "object" == typeof e && e;
                (n || !/destroy|hide/.test(e)) && (n || o.data("bs.tooltip", (n = new i(this, s))), "string" == typeof e && n[e]());
            });
        }
        var i = function (t, e) {
            (this.type = null), (this.options = null), (this.enabled = null), (this.timeout = null), (this.hoverState = null), (this.$element = null), (this.inState = null), this.init("tooltip", t, e);
        };
        (i.VERSION = "3.3.5"),
            (i.TRANSITION_DURATION = 150),
            (i.DEFAULTS = {
                animation: !0,
                placement: "top",
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                container: !1,
                viewport: { selector: "body", padding: 0 },
            }),
            (i.prototype.init = function (e, i, o) {
                if (
                    ((this.enabled = !0),
                    (this.type = e),
                    (this.$element = t(i)),
                    (this.options = this.getOptions(o)),
                    (this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport)),
                    (this.inState = { click: !1, hover: !1, focus: !1 }),
                    this.$element[0] instanceof document.constructor && !this.options.selector)
                )
                    throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                for (var n = this.options.trigger.split(" "), s = n.length; s--; ) {
                    var a = n[s];
                    if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                    else if ("manual" != a) {
                        var r = "hover" == a ? "mouseenter" : "focusin",
                            l = "hover" == a ? "mouseleave" : "focusout";
                        this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this));
                    }
                }
                this.options.selector ? (this._options = t.extend({}, this.options, { trigger: "manual", selector: "" })) : this.fixTitle();
            }),
            (i.prototype.getDefaults = function () {
                return i.DEFAULTS;
            }),
            (i.prototype.getOptions = function (e) {
                return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)), e.delay && "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }), e;
            }),
            (i.prototype.getDelegateOptions = function () {
                var e = {},
                    i = this.getDefaults();
                return (
                    this._options &&
                        t.each(this._options, function (t, o) {
                            i[t] != o && (e[t] = o);
                        }),
                    e
                );
            }),
            (i.prototype.enter = function (e) {
                var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                return (
                    i || ((i = new this.constructor(e.currentTarget, this.getDelegateOptions())), t(e.currentTarget).data("bs." + this.type, i)),
                    e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0),
                    i.tip().hasClass("in") || "in" == i.hoverState
                        ? void (i.hoverState = "in")
                        : (clearTimeout(i.timeout),
                          (i.hoverState = "in"),
                          i.options.delay && i.options.delay.show
                              ? void (i.timeout = setTimeout(function () {
                                    "in" == i.hoverState && i.show();
                                }, i.options.delay.show))
                              : i.show())
                );
            }),
            (i.prototype.isInStateTrue = function () {
                for (var t in this.inState) if (this.inState[t]) return !0;
                return !1;
            }),
            (i.prototype.leave = function (e) {
                var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                return (
                    i || ((i = new this.constructor(e.currentTarget, this.getDelegateOptions())), t(e.currentTarget).data("bs." + this.type, i)),
                    e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1),
                    i.isInStateTrue()
                        ? void 0
                        : (clearTimeout(i.timeout),
                          (i.hoverState = "out"),
                          i.options.delay && i.options.delay.hide
                              ? void (i.timeout = setTimeout(function () {
                                    "out" == i.hoverState && i.hide();
                                }, i.options.delay.hide))
                              : i.hide())
                );
            }),
            (i.prototype.show = function () {
                var e = t.Event("show.bs." + this.type);
                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(e);
                    var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                    if (e.isDefaultPrevented() || !o) return;
                    var n = this,
                        s = this.tip(),
                        a = this.getUID(this.type);
                    this.setContent(), s.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && s.addClass("fade");
                    var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                        l = /\s?auto?\s?/i,
                        h = l.test(r);
                    h && (r = r.replace(l, "") || "top"),
                        s
                            .detach()
                            .css({ top: 0, left: 0, display: "block" })
                            .addClass(r)
                            .data("bs." + this.type, this),
                        this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element),
                        this.$element.trigger("inserted.bs." + this.type);
                    var d = this.getPosition(),
                        p = s[0].offsetWidth,
                        c = s[0].offsetHeight;
                    if (h) {
                        var f = r,
                            u = this.getPosition(this.$viewport);
                        (r = "bottom" == r && d.bottom + c > u.bottom ? "top" : "top" == r && d.top - c < u.top ? "bottom" : "right" == r && d.right + p > u.width ? "left" : "left" == r && d.left - p < u.left ? "right" : r),
                            s.removeClass(f).addClass(r);
                    }
                    var g = this.getCalculatedOffset(r, d, p, c);
                    this.applyPlacement(g, r);
                    var m = function () {
                        var t = n.hoverState;
                        n.$element.trigger("shown.bs." + n.type), (n.hoverState = null), "out" == t && n.leave(n);
                    };
                    t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m();
                }
            }),
            (i.prototype.applyPlacement = function (e, i) {
                var o = this.tip(),
                    n = o[0].offsetWidth,
                    s = o[0].offsetHeight,
                    a = parseInt(o.css("margin-top"), 10),
                    r = parseInt(o.css("margin-left"), 10);
                isNaN(a) && (a = 0),
                    isNaN(r) && (r = 0),
                    (e.top += a),
                    (e.left += r),
                    t.offset.setOffset(
                        o[0],
                        t.extend(
                            {
                                using: function (t) {
                                    o.css({ top: Math.round(t.top), left: Math.round(t.left) });
                                },
                            },
                            e
                        ),
                        0
                    ),
                    o.addClass("in");
                var l = o[0].offsetWidth,
                    h = o[0].offsetHeight;
                "top" == i && h != s && (e.top = e.top + s - h);
                var d = this.getViewportAdjustedDelta(i, e, l, h);
                d.left ? (e.left += d.left) : (e.top += d.top);
                var p = /top|bottom/.test(i),
                    c = p ? 2 * d.left - n + l : 2 * d.top - s + h,
                    f = p ? "offsetWidth" : "offsetHeight";
                o.offset(e), this.replaceArrow(c, o[0][f], p);
            }),
            (i.prototype.replaceArrow = function (t, e, i) {
                this.arrow()
                    .css(i ? "left" : "top", 50 * (1 - t / e) + "%")
                    .css(i ? "top" : "left", "");
            }),
            (i.prototype.setContent = function () {
                var t = this.tip(),
                    e = this.getTitle();
                t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right");
            }),
            (i.prototype.hide = function (e) {
                function o() {
                    "in" != n.hoverState && s.detach(), n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e();
                }
                var n = this,
                    s = t(this.$tip),
                    a = t.Event("hide.bs." + this.type);
                return (
                    this.$element.trigger(a),
                    a.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), (this.hoverState = null), this)
                );
            }),
            (i.prototype.fixTitle = function () {
                var t = this.$element;
                (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "");
            }),
            (i.prototype.hasContent = function () {
                return this.getTitle();
            }),
            (i.prototype.getPosition = function (e) {
                e = e || this.$element;
                var i = e[0],
                    o = "BODY" == i.tagName,
                    n = i.getBoundingClientRect();
                null == n.width && (n = t.extend({}, n, { width: n.right - n.left, height: n.bottom - n.top }));
                var s = o ? { top: 0, left: 0 } : e.offset(),
                    a = { scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop() },
                    r = o ? { width: t(window).width(), height: t(window).height() } : null;
                return t.extend({}, n, a, r, s);
            }),
            (i.prototype.getCalculatedOffset = function (t, e, i, o) {
                return "bottom" == t
                    ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 }
                    : "top" == t
                    ? { top: e.top - o, left: e.left + e.width / 2 - i / 2 }
                    : "left" == t
                    ? { top: e.top + e.height / 2 - o / 2, left: e.left - i }
                    : { top: e.top + e.height / 2 - o / 2, left: e.left + e.width };
            }),
            (i.prototype.getViewportAdjustedDelta = function (t, e, i, o) {
                var n = { top: 0, left: 0 };
                if (!this.$viewport) return n;
                var s = (this.options.viewport && this.options.viewport.padding) || 0,
                    a = this.getPosition(this.$viewport);
                if (/right|left/.test(t)) {
                    var r = e.top - s - a.scroll,
                        l = e.top + s - a.scroll + o;
                    r < a.top ? (n.top = a.top - r) : l > a.top + a.height && (n.top = a.top + a.height - l);
                } else {
                    var h = e.left - s,
                        d = e.left + s + i;
                    h < a.left ? (n.left = a.left - h) : d > a.right && (n.left = a.left + a.width - d);
                }
                return n;
            }),
            (i.prototype.getTitle = function () {
                var t,
                    e = this.$element,
                    i = this.options;
                return (t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title));
            }),
            (i.prototype.getUID = function (t) {
                do t += ~~(1e6 * Math.random());
                while (document.getElementById(t));
                return t;
            }),
            (i.prototype.tip = function () {
                if (!this.$tip && ((this.$tip = t(this.options.template)), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                return this.$tip;
            }),
            (i.prototype.arrow = function () {
                return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
            }),
            (i.prototype.enable = function () {
                this.enabled = !0;
            }),
            (i.prototype.disable = function () {
                this.enabled = !1;
            }),
            (i.prototype.toggleEnabled = function () {
                this.enabled = !this.enabled;
            }),
            (i.prototype.toggle = function (e) {
                var i = this;
                e && ((i = t(e.currentTarget).data("bs." + this.type)), i || ((i = new this.constructor(e.currentTarget, this.getDelegateOptions())), t(e.currentTarget).data("bs." + this.type, i))),
                    e ? ((i.inState.click = !i.inState.click), i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i);
            }),
            (i.prototype.destroy = function () {
                var t = this;
                clearTimeout(this.timeout),
                    this.hide(function () {
                        t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), (t.$tip = null), (t.$arrow = null), (t.$viewport = null);
                    });
            });
        var o = t.fn.tooltip;
        (t.fn.tooltip = e),
            (t.fn.tooltip.Constructor = i),
            (t.fn.tooltip.noConflict = function () {
                return (t.fn.tooltip = o), this;
            });
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var o = t(this),
                    n = o.data("bs.popover"),
                    s = "object" == typeof e && e;
                (n || !/destroy|hide/.test(e)) && (n || o.data("bs.popover", (n = new i(this, s))), "string" == typeof e && n[e]());
            });
        }
        var i = function (t, e) {
            this.init("popover", t, e);
        };
        if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
        (i.VERSION = "3.3.5"),
            (i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
            })),
            (i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)),
            (i.prototype.constructor = i),
            (i.prototype.getDefaults = function () {
                return i.DEFAULTS;
            }),
            (i.prototype.setContent = function () {
                var t = this.tip(),
                    e = this.getTitle(),
                    i = this.getContent();
                t.find(".popover-title")[this.options.html ? "html" : "text"](e),
                    t.find(".popover-content").children().detach().end()[this.options.html ? ("string" == typeof i ? "html" : "append") : "text"](i),
                    t.removeClass("fade top bottom left right in"),
                    t.find(".popover-title").html() || t.find(".popover-title").hide();
            }),
            (i.prototype.hasContent = function () {
                return this.getTitle() || this.getContent();
            }),
            (i.prototype.getContent = function () {
                var t = this.$element,
                    e = this.options;
                return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content);
            }),
            (i.prototype.arrow = function () {
                return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
            });
        var o = t.fn.popover;
        (t.fn.popover = e),
            (t.fn.popover.Constructor = i),
            (t.fn.popover.noConflict = function () {
                return (t.fn.popover = o), this;
            });
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var o = t(this),
                    n = o.data("bs.tab");
                n || o.data("bs.tab", (n = new i(this))), "string" == typeof e && n[e]();
            });
        }
        var i = function (e) {
            this.element = t(e);
        };
        (i.VERSION = "3.3.5"),
            (i.TRANSITION_DURATION = 150),
            (i.prototype.show = function () {
                var e = this.element,
                    i = e.closest("ul:not(.dropdown-menu)"),
                    o = e.data("target");
                if ((o || ((o = e.attr("href")), (o = o && o.replace(/.*(?=#[^\s]*$)/, ""))), !e.parent("li").hasClass("active"))) {
                    var n = i.find(".active:last a"),
                        s = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
                        a = t.Event("show.bs.tab", { relatedTarget: n[0] });
                    if ((n.trigger(s), e.trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented())) {
                        var r = t(o);
                        this.activate(e.closest("li"), i),
                            this.activate(r, r.parent(), function () {
                                n.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }), e.trigger({ type: "shown.bs.tab", relatedTarget: n[0] });
                            });
                    }
                }
            }),
            (i.prototype.activate = function (e, o, n) {
                function s() {
                    a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
                        e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
                        r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
                        e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
                        n && n();
                }
                var a = o.find("> .active"),
                    r = n && t.support.transition && ((a.length && a.hasClass("fade")) || !!o.find("> .fade").length);
                a.length && r ? a.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), a.removeClass("in");
            });
        var o = t.fn.tab;
        (t.fn.tab = e),
            (t.fn.tab.Constructor = i),
            (t.fn.tab.noConflict = function () {
                return (t.fn.tab = o), this;
            });
        var n = function (i) {
            i.preventDefault(), e.call(t(this), "show");
        };
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n);
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var o = t(this),
                    n = o.data("bs.affix"),
                    s = "object" == typeof e && e;
                n || o.data("bs.affix", (n = new i(this, s))), "string" == typeof e && n[e]();
            });
        }
        var i = function (e, o) {
            (this.options = t.extend({}, i.DEFAULTS, o)),
                (this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this))),
                (this.$element = t(e)),
                (this.affixed = null),
                (this.unpin = null),
                (this.pinnedOffset = null),
                this.checkPosition();
        };
        (i.VERSION = "3.3.5"),
            (i.RESET = "affix affix-top affix-bottom"),
            (i.DEFAULTS = { offset: 0, target: window }),
            (i.prototype.getState = function (t, e, i, o) {
                var n = this.$target.scrollTop(),
                    s = this.$element.offset(),
                    a = this.$target.height();
                if (null != i && "top" == this.affixed) return i > n ? "top" : !1;
                if ("bottom" == this.affixed) return null != i ? (n + this.unpin <= s.top ? !1 : "bottom") : t - o >= n + a ? !1 : "bottom";
                var r = null == this.affixed,
                    l = r ? n : s.top,
                    h = r ? a : e;
                return null != i && i >= n ? "top" : null != o && l + h >= t - o ? "bottom" : !1;
            }),
            (i.prototype.getPinnedOffset = function () {
                if (this.pinnedOffset) return this.pinnedOffset;
                this.$element.removeClass(i.RESET).addClass("affix");
                var t = this.$target.scrollTop(),
                    e = this.$element.offset();
                return (this.pinnedOffset = e.top - t);
            }),
            (i.prototype.checkPositionWithEventLoop = function () {
                setTimeout(t.proxy(this.checkPosition, this), 1);
            }),
            (i.prototype.checkPosition = function () {
                if (this.$element.is(":visible")) {
                    var e = this.$element.height(),
                        o = this.options.offset,
                        n = o.top,
                        s = o.bottom,
                        a = Math.max(t(document).height(), t(document.body).height());
                    "object" != typeof o && (s = n = o), "function" == typeof n && (n = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
                    var r = this.getState(a, e, n, s);
                    if (this.affixed != r) {
                        null != this.unpin && this.$element.css("top", "");
                        var l = "affix" + (r ? "-" + r : ""),
                            h = t.Event(l + ".bs.affix");
                        if ((this.$element.trigger(h), h.isDefaultPrevented())) return;
                        (this.affixed = r),
                            (this.unpin = "bottom" == r ? this.getPinnedOffset() : null),
                            this.$element
                                .removeClass(i.RESET)
                                .addClass(l)
                                .trigger(l.replace("affix", "affixed") + ".bs.affix");
                    }
                    "bottom" == r && this.$element.offset({ top: a - e - s });
                }
            });
        var o = t.fn.affix;
        (t.fn.affix = e),
            (t.fn.affix.Constructor = i),
            (t.fn.affix.noConflict = function () {
                return (t.fn.affix = o), this;
            }),
            t(window).on("load", function () {
                t('[data-spy="affix"]').each(function () {
                    var i = t(this),
                        o = i.data();
                    (o.offset = o.offset || {}), null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o);
                });
            });
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            var i,
                o = e.attr("data-target") || ((i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
            return t(o);
        }
        function i(e) {
            return this.each(function () {
                var i = t(this),
                    n = i.data("bs.collapse"),
                    s = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
                !n && s.toggle && /show|hide/.test(e) && (s.toggle = !1), n || i.data("bs.collapse", (n = new o(this, s))), "string" == typeof e && n[e]();
            });
        }
        var o = function (e, i) {
            (this.$element = t(e)),
                (this.options = t.extend({}, o.DEFAULTS, i)),
                (this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')),
                (this.transitioning = null),
                this.options.parent ? (this.$parent = this.getParent()) : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
                this.options.toggle && this.toggle();
        };
        (o.VERSION = "3.3.5"),
            (o.TRANSITION_DURATION = 350),
            (o.DEFAULTS = { toggle: !0 }),
            (o.prototype.dimension = function () {
                var t = this.$element.hasClass("width");
                return t ? "width" : "height";
            }),
            (o.prototype.show = function () {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var e,
                        n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                    if (!(n && n.length && ((e = n.data("bs.collapse")), e && e.transitioning))) {
                        var s = t.Event("show.bs.collapse");
                        if ((this.$element.trigger(s), !s.isDefaultPrevented())) {
                            n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
                            var a = this.dimension();
                            this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), (this.transitioning = 1);
                            var r = function () {
                                this.$element.removeClass("collapsing").addClass("collapse in")[a](""), (this.transitioning = 0), this.$element.trigger("shown.bs.collapse");
                            };
                            if (!t.support.transition) return r.call(this);
                            var l = t.camelCase(["scroll", a].join("-"));
                            this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l]);
                        }
                    }
                }
            }),
            (o.prototype.hide = function () {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var e = t.Event("hide.bs.collapse");
                    if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
                        var i = this.dimension();
                        this.$element[i](this.$element[i]())[0].offsetHeight,
                            this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                            this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                            (this.transitioning = 1);
                        var n = function () {
                            (this.transitioning = 0), this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                        };
                        return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : n.call(this);
                    }
                }
            }),
            (o.prototype.toggle = function () {
                this[this.$element.hasClass("in") ? "hide" : "show"]();
            }),
            (o.prototype.getParent = function () {
                return t(this.options.parent)
                    .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
                    .each(
                        t.proxy(function (i, o) {
                            var n = t(o);
                            this.addAriaAndCollapsedClass(e(n), n);
                        }, this)
                    )
                    .end();
            }),
            (o.prototype.addAriaAndCollapsedClass = function (t, e) {
                var i = t.hasClass("in");
                t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i);
            });
        var n = t.fn.collapse;
        (t.fn.collapse = i),
            (t.fn.collapse.Constructor = o),
            (t.fn.collapse.noConflict = function () {
                return (t.fn.collapse = n), this;
            }),
            t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (o) {
                var n = t(this);
                n.attr("data-target") || o.preventDefault();
                var s = e(n),
                    a = s.data("bs.collapse"),
                    r = a ? "toggle" : n.data();
                i.call(s, r);
            });
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(i, o) {
            (this.$body = t(document.body)),
                (this.$scrollElement = t(t(i).is(document.body) ? window : i)),
                (this.options = t.extend({}, e.DEFAULTS, o)),
                (this.selector = (this.options.target || "") + " .nav li > a"),
                (this.offsets = []),
                (this.targets = []),
                (this.activeTarget = null),
                (this.scrollHeight = 0),
                this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)),
                this.refresh(),
                this.process();
        }
        function i(i) {
            return this.each(function () {
                var o = t(this),
                    n = o.data("bs.scrollspy"),
                    s = "object" == typeof i && i;
                n || o.data("bs.scrollspy", (n = new e(this, s))), "string" == typeof i && n[i]();
            });
        }
        (e.VERSION = "3.3.5"),
            (e.DEFAULTS = { offset: 10 }),
            (e.prototype.getScrollHeight = function () {
                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
            }),
            (e.prototype.refresh = function () {
                var e = this,
                    i = "offset",
                    o = 0;
                (this.offsets = []),
                    (this.targets = []),
                    (this.scrollHeight = this.getScrollHeight()),
                    t.isWindow(this.$scrollElement[0]) || ((i = "position"), (o = this.$scrollElement.scrollTop())),
                    this.$body
                        .find(this.selector)
                        .map(function () {
                            var e = t(this),
                                n = e.data("target") || e.attr("href"),
                                s = /^#./.test(n) && t(n);
                            return (s && s.length && s.is(":visible") && [[s[i]().top + o, n]]) || null;
                        })
                        .sort(function (t, e) {
                            return t[0] - e[0];
                        })
                        .each(function () {
                            e.offsets.push(this[0]), e.targets.push(this[1]);
                        });
            }),
            (e.prototype.process = function () {
                var t,
                    e = this.$scrollElement.scrollTop() + this.options.offset,
                    i = this.getScrollHeight(),
                    o = this.options.offset + i - this.$scrollElement.height(),
                    n = this.offsets,
                    s = this.targets,
                    a = this.activeTarget;
                if ((this.scrollHeight != i && this.refresh(), e >= o)) return a != (t = s[s.length - 1]) && this.activate(t);
                if (a && e < n[0]) return (this.activeTarget = null), this.clear();
                for (t = n.length; t--; ) a != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t]);
            }),
            (e.prototype.activate = function (e) {
                (this.activeTarget = e), this.clear();
                var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                    o = t(i).parents("li").addClass("active");
                o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy");
            }),
            (e.prototype.clear = function () {
                t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
            });
        var o = t.fn.scrollspy;
        (t.fn.scrollspy = i),
            (t.fn.scrollspy.Constructor = e),
            (t.fn.scrollspy.noConflict = function () {
                return (t.fn.scrollspy = o), this;
            }),
            t(window).on("load.bs.scrollspy.data-api", function () {
                t('[data-spy="scroll"]').each(function () {
                    var e = t(this);
                    i.call(e, e.data());
                });
            });
    })(jQuery),
    +(function (t) {
        "use strict";
        function e() {
            var t = document.createElement("bootstrap"),
                e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
            for (var i in e) if (void 0 !== t.style[i]) return { end: e[i] };
            return !1;
        }
        (t.fn.emulateTransitionEnd = function (e) {
            var i = !1,
                o = this;
            t(this).one("bsTransitionEnd", function () {
                i = !0;
            });
            var n = function () {
                i || t(o).trigger(t.support.transition.end);
            };
            return setTimeout(n, e), this;
        }),
            t(function () {
                (t.support.transition = e()),
                    t.support.transition &&
                        (t.event.special.bsTransitionEnd = {
                            bindType: t.support.transition.end,
                            delegateType: t.support.transition.end,
                            handle: function (e) {
                                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0;
                            },
                        });
            });
    })(jQuery);

/* Fancybox */
!(function (e, t, n, i) {
    "use strict";
    var o = n("html"),
        a = n(e),
        r = n(t),
        s = (n.fancybox = function () {
            s.open.apply(this, arguments);
        }),
        l = navigator.userAgent.match(/msie/i),
        c = null,
        d = t.createTouch !== i,
        p = function (e) {
            return e && e.hasOwnProperty && e instanceof n;
        },
        h = function (e) {
            return e && "string" === n.type(e);
        },
        f = function (e) {
            return h(e) && e.indexOf("%") > 0;
        },
        u = function (e) {
            return e && !(e.style.overflow && "hidden" === e.style.overflow) && ((e.clientWidth && e.scrollWidth > e.clientWidth) || (e.clientHeight && e.scrollHeight > e.clientHeight));
        },
        g = function (e, t) {
            var n = parseInt(e, 10) || 0;
            return t && f(e) && (n = (s.getViewport()[t] / 100) * n), Math.ceil(n);
        },
        m = function (e, t) {
            return g(e, t) + "px";
        };
    n.extend(s, {
        version: "2.1.5",
        defaults: {
            padding: 0,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 0,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !d,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: 0.5,
            leftRatio: 0.5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: { dataType: "html", headers: { "X-fancyBox": !0 } },
            iframe: { scrolling: "auto", preload: !0 },
            swf: { wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always" },
            keys: { next: { 13: "left", 34: "up", 39: "left", 40: "up" }, prev: { 8: "right", 33: "down", 37: "right", 38: "down" }, close: [27], play: [32], toggle: [70] },
            direction: { next: "left", prev: "right" },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe:
                    '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
                    (l ? ' allowtransparency="true"' : "") +
                    "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: { overlay: !0, title: !0 },
            onCancel: n.noop,
            beforeLoad: n.noop,
            afterLoad: n.noop,
            beforeShow: n.noop,
            afterShow: n.noop,
            beforeChange: n.noop,
            beforeClose: n.noop,
            afterClose: n.noop,
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: { timer: null, isActive: !1 },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function (e, t) {
            return e && (n.isPlainObject(t) || (t = {}), !1 !== s.close(!0))
                ? (n.isArray(e) || (e = p(e) ? n(e).get() : [e]),
                  n.each(e, function (o, a) {
                      var r,
                          l,
                          c,
                          d,
                          f,
                          u,
                          g,
                          m = {};
                      "object" === n.type(a) &&
                          (a.nodeType && (a = n(a)),
                          p(a) ? ((m = { href: a.data("fancybox-href") || a.attr("href"), title: a.data("fancybox-title") || a.attr("title"), isDom: !0, element: a }), n.metadata && n.extend(!0, m, a.metadata())) : (m = a)),
                          (r = t.href || m.href || (h(a) ? a : null)),
                          (l = t.title !== i ? t.title : m.title || ""),
                          (c = t.content || m.content),
                          (d = c ? "html" : t.type || m.type),
                          !d && m.isDom && ((d = a.data("fancybox-type")), d || ((f = a.prop("class").match(/fancybox\.(\w+)/)), (d = f ? f[1] : null))),
                          h(r) &&
                              (d || (s.isImage(r) ? (d = "image") : s.isSWF(r) ? (d = "swf") : "#" === r.charAt(0) ? (d = "inline") : h(a) && ((d = "html"), (c = a))),
                              "ajax" === d && ((u = r.split(/\s+/, 2)), (r = u.shift()), (g = u.shift()))),
                          c || ("inline" === d ? (r ? (c = n(h(r) ? r.replace(/.*(?=#[^\s]+$)/, "") : r)) : m.isDom && (c = a)) : "html" === d ? (c = r) : d || r || !m.isDom || ((d = "inline"), (c = a))),
                          n.extend(m, { href: r, type: d, content: c, title: l, selector: g }),
                          (e[o] = m);
                  }),
                  (s.opts = n.extend(!0, {}, s.defaults, t)),
                  t.keys !== i && (s.opts.keys = t.keys ? n.extend({}, s.defaults.keys, t.keys) : !1),
                  (s.group = e),
                  s._start(s.opts.index))
                : void 0;
        },
        cancel: function () {
            var e = s.coming;
            e &&
                !1 !== s.trigger("onCancel") &&
                (s.hideLoading(),
                s.ajaxLoad && s.ajaxLoad.abort(),
                (s.ajaxLoad = null),
                s.imgPreload && (s.imgPreload.onload = s.imgPreload.onerror = null),
                e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(),
                (s.coming = null),
                s.current || s._afterZoomOut(e));
        },
        close: function (e) {
            s.cancel(),
                !1 !== s.trigger("beforeClose") &&
                    (s.unbindEvents(),
                    s.isActive &&
                        (s.isOpen && e !== !0
                            ? ((s.isOpen = s.isOpened = !1), (s.isClosing = !0), n(".fancybox-item, .fancybox-nav").remove(), s.wrap.stop(!0, !0).removeClass("fancybox-opened"), s.transitions[s.current.closeMethod]())
                            : (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), s._afterZoomOut())));
        },
        play: function (e) {
            var t = function () {
                    clearTimeout(s.player.timer);
                },
                n = function () {
                    t(), s.current && s.player.isActive && (s.player.timer = setTimeout(s.next, s.current.playSpeed));
                },
                i = function () {
                    t(), r.unbind(".player"), (s.player.isActive = !1), s.trigger("onPlayEnd");
                },
                o = function () {
                    s.current &&
                        (s.current.loop || s.current.index < s.group.length - 1) &&
                        ((s.player.isActive = !0), r.bind({ "onCancel.player beforeClose.player": i, "onUpdate.player": n, "beforeLoad.player": t }), n(), s.trigger("onPlayStart"));
                };
            e === !0 || (!s.player.isActive && e !== !1) ? o() : i();
        },
        next: function (e) {
            var t = s.current;
            t && (h(e) || (e = t.direction.next), s.jumpto(t.index + 1, e, "next"));
        },
        prev: function (e) {
            var t = s.current;
            t && (h(e) || (e = t.direction.prev), s.jumpto(t.index - 1, e, "prev"));
        },
        jumpto: function (e, t, n) {
            var o = s.current;
            o &&
                ((e = g(e)),
                (s.direction = t || o.direction[e >= o.index ? "next" : "prev"]),
                (s.router = n || "jumpto"),
                o.loop && (0 > e && (e = o.group.length + (e % o.group.length)), (e %= o.group.length)),
                o.group[e] !== i && (s.cancel(), s._start(e)));
        },
        reposition: function (e, t) {
            var i,
                o = s.current,
                a = o ? o.wrap : null;
            a && ((i = s._getPosition(t)), e && "scroll" === e.type ? (delete i.position, a.stop(!0, !0).animate(i, 200)) : (a.css(i), (o.pos = n.extend({}, o.dim, i))));
        },
        update: function (e) {
            var t = e && e.type,
                n = !t || "orientationchange" === t;
            n && (clearTimeout(c), (c = null)),
                s.isOpen &&
                    !c &&
                    (c = setTimeout(
                        function () {
                            var i = s.current;
                            i &&
                                !s.isClosing &&
                                (s.wrap.removeClass("fancybox-tmp"), (n || "load" === t || ("resize" === t && i.autoResize)) && s._setDimension(), ("scroll" === t && i.canShrink) || s.reposition(e), s.trigger("onUpdate"), (c = null));
                        },
                        n && !d ? 0 : 300
                    ));
        },
        toggle: function (e) {
            s.isOpen && ((s.current.fitToView = "boolean" === n.type(e) ? e : !s.current.fitToView), d && (s.wrap.removeAttr("style").addClass("fancybox-tmp"), s.trigger("onUpdate")), s.update());
        },
        hideLoading: function () {
            r.unbind(".loading"), n("#fancybox-loading").remove();
        },
        showLoading: function () {
            var e, t;
            s.hideLoading(),
                (e = n('<div id="fancybox-loading"><div></div></div>').click(s.cancel).appendTo("body")),
                r.bind("keydown.loading", function (e) {
                    27 === (e.which || e.keyCode) && (e.preventDefault(), s.cancel());
                }),
                s.defaults.fixed || ((t = s.getViewport()), e.css({ position: "absolute", top: 0.5 * t.h + t.y, left: 0.5 * t.w + t.x }));
        },
        getViewport: function () {
            var t = (s.current && s.current.locked) || !1,
                n = { x: a.scrollLeft(), y: a.scrollTop() };
            return t ? ((n.w = t[0].clientWidth), (n.h = t[0].clientHeight)) : ((n.w = d && e.innerWidth ? e.innerWidth : a.width()), (n.h = d && e.innerHeight ? e.innerHeight : a.height())), n;
        },
        unbindEvents: function () {
            s.wrap && p(s.wrap) && s.wrap.unbind(".fb"), r.unbind(".fb"), a.unbind(".fb");
        },
        bindEvents: function () {
            var e,
                t = s.current;
            t &&
                (a.bind("orientationchange.fb" + (d ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), s.update),
                (e = t.keys),
                e &&
                    r.bind("keydown.fb", function (o) {
                        var a = o.which || o.keyCode,
                            r = o.target || o.srcElement;
                        return 27 === a && s.coming
                            ? !1
                            : void (
                                  o.ctrlKey ||
                                  o.altKey ||
                                  o.shiftKey ||
                                  o.metaKey ||
                                  (r && (r.type || n(r).is("[contenteditable]"))) ||
                                  n.each(e, function (e, r) {
                                      return t.group.length > 1 && r[a] !== i ? (s[e](r[a]), o.preventDefault(), !1) : n.inArray(a, r) > -1 ? (s[e](), o.preventDefault(), !1) : void 0;
                                  })
                              );
                    }),
                n.fn.mousewheel &&
                    t.mouseWheel &&
                    s.wrap.bind("mousewheel.fb", function (e, i, o, a) {
                        for (var r = e.target || null, l = n(r), c = !1; l.length && !(c || l.is(".fancybox-skin") || l.is(".fancybox-wrap")); ) (c = u(l[0])), (l = n(l).parent());
                        0 === i || c || (s.group.length > 1 && !t.canShrink && (a > 0 || o > 0 ? s.prev(a > 0 ? "down" : "left") : (0 > a || 0 > o) && s.next(0 > a ? "up" : "right"), e.preventDefault()));
                    }));
        },
        trigger: function (e, t) {
            var i,
                o = t || s.coming || s.current;
            if (o) {
                if ((n.isFunction(o[e]) && (i = o[e].apply(o, Array.prototype.slice.call(arguments, 1))), i === !1)) return !1;
                o.helpers &&
                    n.each(o.helpers, function (t, i) {
                        i && s.helpers[t] && n.isFunction(s.helpers[t][e]) && s.helpers[t][e](n.extend(!0, {}, s.helpers[t].defaults, i), o);
                    }),
                    r.trigger(e);
            }
        },
        isImage: function (e) {
            return h(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
        },
        isSWF: function (e) {
            return h(e) && e.match(/\.(swf)((\?|#).*)?$/i);
        },
        _start: function (e) {
            var t,
                i,
                o,
                a,
                r,
                l = {};
            if (((e = g(e)), (t = s.group[e] || null), !t)) return !1;
            if (
                ((l = n.extend(!0, {}, s.opts, t)),
                (a = l.margin),
                (r = l.padding),
                "number" === n.type(a) && (l.margin = [a, a, a, a]),
                "number" === n.type(r) && (l.padding = [r, r, r, r]),
                l.modal && n.extend(!0, l, { closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1, mouseWheel: !1, keys: null, helpers: { overlay: { closeClick: !1 } } }),
                l.autoSize && (l.autoWidth = l.autoHeight = !0),
                "auto" === l.width && (l.autoWidth = !0),
                "auto" === l.height && (l.autoHeight = !0),
                (l.group = s.group),
                (l.index = e),
                (s.coming = l),
                !1 === s.trigger("beforeLoad"))
            )
                return void (s.coming = null);
            if (((o = l.type), (i = l.href), !o)) return (s.coming = null), s.current && s.router && "jumpto" !== s.router ? ((s.current.index = e), s[s.router](s.direction)) : !1;
            if (
                ((s.isActive = !0),
                ("image" === o || "swf" === o) && ((l.autoHeight = l.autoWidth = !1), (l.scrolling = "visible")),
                "image" === o && (l.aspectRatio = !0),
                "iframe" === o && d && (l.scrolling = "scroll"),
                (l.wrap = n(l.tpl.wrap)
                    .addClass("fancybox-" + (d ? "mobile" : "desktop") + " fancybox-type-" + o + " fancybox-tmp " + l.wrapCSS)
                    .appendTo(l.parent || "body")),
                n.extend(l, { skin: n(".fancybox-skin", l.wrap), outer: n(".fancybox-outer", l.wrap), inner: n(".fancybox-inner", l.wrap) }),
                n.each(["Top", "Right", "Bottom", "Left"], function (e, t) {
                    l.skin.css("padding" + t, m(l.padding[e]));
                }),
                s.trigger("onReady"),
                "inline" === o || "html" === o)
            ) {
                if (!l.content || !l.content.length) return s._error("content");
            } else if (!i) return s._error("href");
            "image" === o ? s._loadImage() : "ajax" === o ? s._loadAjax() : "iframe" === o ? s._loadIframe() : s._afterLoad();
        },
        _error: function (e) {
            n.extend(s.coming, { type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: e, content: s.coming.tpl.error }), s._afterLoad();
        },
        _loadImage: function () {
            var e = (s.imgPreload = new Image());
            (e.onload = function () {
                (this.onload = this.onerror = null), (s.coming.width = this.width / s.opts.pixelRatio), (s.coming.height = this.height / s.opts.pixelRatio), s._afterLoad();
            }),
                (e.onerror = function () {
                    (this.onload = this.onerror = null), s._error("image");
                }),
                (e.src = s.coming.href),
                e.complete !== !0 && s.showLoading();
        },
        _loadAjax: function () {
            var e = s.coming;
            s.showLoading(),
                (s.ajaxLoad = n.ajax(
                    n.extend({}, e.ajax, {
                        url: e.href,
                        error: function (e, t) {
                            s.coming && "abort" !== t ? s._error("ajax", e) : s.hideLoading();
                        },
                        success: function (t, n) {
                            "success" === n && ((e.content = t), s._afterLoad());
                        },
                    })
                ));
        },
        _loadIframe: function () {
            var e = s.coming,
                t = n(e.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
                    .attr("scrolling", d ? "auto" : e.iframe.scrolling)
                    .attr("src", e.href);
            n(e.wrap).bind("onReset", function () {
                try {
                    n(this).find("iframe").hide().attr("src", "//about:blank").end().empty();
                } catch (e) {}
            }),
                e.iframe.preload &&
                    (s.showLoading(),
                    t.one("load", function () {
                        n(this).data("ready", 1), d || n(this).bind("load.fb", s.update), n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), s._afterLoad();
                    })),
                (e.content = t.appendTo(e.inner)),
                e.iframe.preload || s._afterLoad();
        },
        _preloadImages: function () {
            var e,
                t,
                n = s.group,
                i = s.current,
                o = n.length,
                a = i.preload ? Math.min(i.preload, o - 1) : 0;
            for (t = 1; a >= t; t += 1) (e = n[(i.index + t) % o]), "image" === e.type && e.href && (new Image().src = e.href);
        },
        _afterLoad: function () {
            var e,
                t,
                i,
                o,
                a,
                r,
                l = s.coming,
                c = s.current,
                d = "fancybox-placeholder";
            if ((s.hideLoading(), l && s.isActive !== !1)) {
                if (!1 === s.trigger("afterLoad", l, c)) return l.wrap.stop(!0).trigger("onReset").remove(), void (s.coming = null);
                switch (
                    (c && (s.trigger("beforeChange", c), c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),
                    s.unbindEvents(),
                    (e = l),
                    (t = l.content),
                    (i = l.type),
                    (o = l.scrolling),
                    n.extend(s, { wrap: e.wrap, skin: e.skin, outer: e.outer, inner: e.inner, current: e, previous: c }),
                    (a = e.href),
                    i)
                ) {
                    case "inline":
                    case "ajax":
                    case "html":
                        e.selector
                            ? (t = n("<div>").html(t).find(e.selector))
                            : p(t) &&
                              (t.data(d) ||
                                  t.data(
                                      d,
                                      n('<div class="' + d + '"></div>')
                                          .insertAfter(t)
                                          .hide()
                                  ),
                              (t = t.show().detach()),
                              e.wrap.bind("onReset", function () {
                                  n(this).find(t).length && t.hide().replaceAll(t.data(d)).data(d, !1);
                              }));
                        break;
                    case "image":
                        t = e.tpl.image.replace("{href}", a);
                        break;
                    case "swf":
                        (t = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + a + '"></param>'),
                            (r = ""),
                            n.each(e.swf, function (e, n) {
                                (t += '<param name="' + e + '" value="' + n + '"></param>'), (r += " " + e + '="' + n + '"');
                            }),
                            (t += '<embed src="' + a + '" type="application/x-shockwave-flash" width="100%" height="100%"' + r + "></embed></object>");
                }
                (p(t) && t.parent().is(e.inner)) || e.inner.append(t),
                    s.trigger("beforeShow"),
                    e.inner.css("overflow", "yes" === o ? "scroll" : "no" === o ? "hidden" : o),
                    s._setDimension(),
                    s.reposition(),
                    (s.isOpen = !1),
                    (s.coming = null),
                    s.bindEvents(),
                    s.isOpened ? c.prevMethod && s.transitions[c.prevMethod]() : n(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(),
                    s.transitions[s.isOpened ? e.nextMethod : e.openMethod](),
                    s._preloadImages();
            }
        },
        _setDimension: function () {
            var e,
                t,
                i,
                o,
                a,
                r,
                l,
                c,
                d,
                p,
                h,
                u,
                y,
                x,
                v,
                w = s.getViewport(),
                b = 0,
                k = !1,
                C = !1,
                O = s.wrap,
                W = s.skin,
                _ = s.inner,
                S = s.current,
                T = S.width,
                L = S.height,
                E = S.minWidth,
                R = S.minHeight,
                j = S.maxWidth,
                P = S.maxHeight,
                H = S.scrolling,
                M = S.scrollOutside ? S.scrollbarWidth : 0,
                A = S.margin,
                I = g(A[1] + A[3]),
                D = g(A[0] + A[2]);
            if (
                (O.add(W).add(_).width("auto").height("auto").removeClass("fancybox-tmp"),
                (e = g(W.outerWidth(!0) - W.width())),
                (t = g(W.outerHeight(!0) - W.height())),
                (i = I + e),
                (o = D + t),
                (a = f(T) ? ((w.w - i) * g(T)) / 100 : T),
                (r = f(L) ? ((w.h - o) * g(L)) / 100 : L),
                "iframe" === S.type)
            ) {
                if (((x = S.content), S.autoHeight && 1 === x.data("ready")))
                    try {
                        x[0].contentWindow.document.location && (_.width(a).height(9999), (v = x.contents().find("body")), M && v.css("overflow-x", "hidden"), (r = v.outerHeight(!0)));
                    } catch (z) {}
            } else (S.autoWidth || S.autoHeight) && (_.addClass("fancybox-tmp"), S.autoWidth || _.width(a), S.autoHeight || _.height(r), S.autoWidth && (a = _.width()), S.autoHeight && (r = _.height()), _.removeClass("fancybox-tmp"));
            if (
                ((T = g(a)),
                (L = g(r)),
                (d = a / r),
                (E = g(f(E) ? g(E, "w") - i : E)),
                (j = g(f(j) ? g(j, "w") - i : j)),
                (R = g(f(R) ? g(R, "h") - o : R)),
                (P = g(f(P) ? g(P, "h") - o : P)),
                (l = j),
                (c = P),
                S.fitToView && ((j = Math.min(w.w - i, j)), (P = Math.min(w.h - o, P))),
                (u = w.w - I),
                (y = w.h - D),
                S.aspectRatio
                    ? (T > j && ((T = j), (L = g(T / d))), L > P && ((L = P), (T = g(L * d))), E > T && ((T = E), (L = g(T / d))), R > L && ((L = R), (T = g(L * d))))
                    : ((T = Math.max(E, Math.min(T, j))), S.autoHeight && "iframe" !== S.type && (_.width(T), (L = _.height())), (L = Math.max(R, Math.min(L, P)))),
                S.fitToView)
            )
                if ((_.width(T).height(L), O.width(T + e), (p = O.width()), (h = O.height()), S.aspectRatio))
                    for (; (p > u || h > y) && T > E && L > R && !(b++ > 19); )
                        (L = Math.max(R, Math.min(P, L - 10))), (T = g(L * d)), E > T && ((T = E), (L = g(T / d))), T > j && ((T = j), (L = g(T / d))), _.width(T).height(L), O.width(T + e), (p = O.width()), (h = O.height());
                else (T = Math.max(E, Math.min(T, T - (p - u)))), (L = Math.max(R, Math.min(L, L - (h - y))));
            M && "auto" === H && r > L && u > T + e + M && (T += M),
                _.width(T).height(L),
                O.width(T + e),
                (p = O.width()),
                (h = O.height()),
                (k = (p > u || h > y) && T > E && L > R),
                (C = S.aspectRatio ? l > T && c > L && a > T && r > L : (l > T || c > L) && (a > T || r > L)),
                n.extend(S, { dim: { width: m(p), height: m(h) }, origWidth: a, origHeight: r, canShrink: k, canExpand: C, wPadding: e, hPadding: t, wrapSpace: h - W.outerHeight(!0), skinSpace: W.height() - L }),
                !x && S.autoHeight && L > R && P > L && !C && _.height("auto");
        },
        _getPosition: function (e) {
            var t = s.current,
                n = s.getViewport(),
                i = t.margin,
                o = s.wrap.width() + i[1] + i[3],
                a = s.wrap.height() + i[0] + i[2],
                r = { position: "absolute", top: i[0], left: i[3] };
            return (
                t.autoCenter && t.fixed && !e && a <= n.h && o <= n.w ? (r.position = "fixed") : t.locked || ((r.top += n.y), (r.left += n.x)),
                (r.top = m(Math.max(r.top, r.top + (n.h - a) * t.topRatio))),
                (r.left = m(Math.max(r.left, r.left + (n.w - o) * t.leftRatio))),
                r
            );
        },
        _afterZoomIn: function () {
            var e = s.current;
            e &&
                ((s.isOpen = s.isOpened = !0),
                s.wrap.css("overflow", "visible").addClass("fancybox-opened"),
                s.update(),
                (e.closeClick || (e.nextClick && s.group.length > 1)) &&
                    s.inner.css("cursor", "pointer").bind("click.fb", function (t) {
                        n(t.target).is("a") || n(t.target).parent().is("a") || (t.preventDefault(), s[e.closeClick ? "close" : "next"]());
                    }),
                e.closeBtn &&
                    n(e.tpl.closeBtn)
                        .appendTo(s.skin)
                        .bind("click.fb", function (e) {
                            e.preventDefault(), s.close();
                        }),
                e.arrows && s.group.length > 1 && ((e.loop || e.index > 0) && n(e.tpl.prev).appendTo(s.outer).bind("click.fb", s.prev), (e.loop || e.index < s.group.length - 1) && n(e.tpl.next).appendTo(s.outer).bind("click.fb", s.next)),
                s.trigger("afterShow"),
                e.loop || e.index !== e.group.length - 1 ? s.opts.autoPlay && !s.player.isActive && ((s.opts.autoPlay = !1), s.play()) : s.play(!1));
        },
        _afterZoomOut: function (e) {
            (e = e || s.current),
                n(".fancybox-wrap").trigger("onReset").remove(),
                n.extend(s, { group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null }),
                s.trigger("afterClose", e);
        },
    }),
        (s.transitions = {
            getOrigPosition: function () {
                var e = s.current,
                    t = e.element,
                    n = e.orig,
                    i = {},
                    o = 50,
                    a = 50,
                    r = e.hPadding,
                    l = e.wPadding,
                    c = s.getViewport();
                return (
                    !n && e.isDom && t.is(":visible") && ((n = t.find("img:first")), n.length || (n = t)),
                    p(n) ? ((i = n.offset()), n.is("img") && ((o = n.outerWidth()), (a = n.outerHeight()))) : ((i.top = c.y + (c.h - a) * e.topRatio), (i.left = c.x + (c.w - o) * e.leftRatio)),
                    ("fixed" === s.wrap.css("position") || e.locked) && ((i.top -= c.y), (i.left -= c.x)),
                    (i = { top: m(i.top - r * e.topRatio), left: m(i.left - l * e.leftRatio), width: m(o + l), height: m(a + r) })
                );
            },
            step: function (e, t) {
                var n,
                    i,
                    o,
                    a = t.prop,
                    r = s.current,
                    l = r.wrapSpace,
                    c = r.skinSpace;
                ("width" === a || "height" === a) &&
                    ((n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start)),
                    s.isClosing && (n = 1 - n),
                    (i = "width" === a ? r.wPadding : r.hPadding),
                    (o = e - i),
                    s.skin[a](g("width" === a ? o : o - l * n)),
                    s.inner[a](g("width" === a ? o : o - l * n - c * n)));
            },
            zoomIn: function () {
                var e = s.current,
                    t = e.pos,
                    i = e.openEffect,
                    o = "elastic" === i,
                    a = n.extend({ opacity: 1 }, t);
                delete a.position,
                    o ? ((t = this.getOrigPosition()), e.openOpacity && (t.opacity = 0.1)) : "fade" === i && (t.opacity = 0.1),
                    s.wrap.css(t).animate(a, { duration: "none" === i ? 0 : e.openSpeed, easing: e.openEasing, step: o ? this.step : null, complete: s._afterZoomIn });
            },
            zoomOut: function () {
                var e = s.current,
                    t = e.closeEffect,
                    n = "elastic" === t,
                    i = { opacity: 0.1 };
                n && ((i = this.getOrigPosition()), e.closeOpacity && (i.opacity = 0.1)), s.wrap.animate(i, { duration: "none" === t ? 0 : e.closeSpeed, easing: e.closeEasing, step: n ? this.step : null, complete: s._afterZoomOut });
            },
            changeIn: function () {
                var e,
                    t = s.current,
                    n = t.nextEffect,
                    i = t.pos,
                    o = { opacity: 1 },
                    a = s.direction,
                    r = 200;
                (i.opacity = 0.1),
                    "elastic" === n && ((e = "down" === a || "up" === a ? "top" : "left"), "down" === a || "right" === a ? ((i[e] = m(g(i[e]) - r)), (o[e] = "+=" + r + "px")) : ((i[e] = m(g(i[e]) + r)), (o[e] = "-=" + r + "px"))),
                    "none" === n ? s._afterZoomIn() : s.wrap.css(i).animate(o, { duration: t.nextSpeed, easing: t.nextEasing, complete: s._afterZoomIn });
            },
            changeOut: function () {
                var e = s.previous,
                    t = e.prevEffect,
                    i = { opacity: 0.1 },
                    o = s.direction,
                    a = 200;
                "elastic" === t && (i["down" === o || "up" === o ? "top" : "left"] = ("up" === o || "left" === o ? "-" : "+") + "=" + a + "px"),
                    e.wrap.animate(i, {
                        duration: "none" === t ? 0 : e.prevSpeed,
                        easing: e.prevEasing,
                        complete: function () {
                            n(this).trigger("onReset").remove();
                        },
                    });
            },
        }),
        (s.helpers.overlay = {
            defaults: { closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !d, fixed: !0 },
            overlay: null,
            fixed: !1,
            el: n("html"),
            create: function (e) {
                (e = n.extend({}, this.defaults, e)),
                    this.overlay && this.close(),
                    (this.overlay = n('<div class="fancybox-overlay"></div>').appendTo(s.coming ? s.coming.parent : e.parent)),
                    (this.fixed = !1),
                    e.fixed && s.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), (this.fixed = !0));
            },
            open: function (e) {
                var t = this;
                (e = n.extend({}, this.defaults, e)),
                    this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e),
                    this.fixed || (a.bind("resize.overlay", n.proxy(this.update, this)), this.update()),
                    e.closeClick &&
                        this.overlay.bind("click.overlay", function (e) {
                            return n(e.target).hasClass("fancybox-overlay") ? (s.isActive ? s.close() : t.close(), !1) : void 0;
                        }),
                    this.overlay.css(e.css).show();
            },
            close: function () {
                var e, t;
                a.unbind("resize.overlay"),
                    this.el.hasClass("fancybox-lock") && (n(".fancybox-margin").removeClass("fancybox-margin"), (e = a.scrollTop()), (t = a.scrollLeft()), this.el.removeClass("fancybox-lock"), a.scrollTop(e).scrollLeft(t)),
                    n(".fancybox-overlay").remove().hide(),
                    n.extend(this, { overlay: null, fixed: !1 });
            },
            update: function () {
                var e,
                    n = "100%";
                this.overlay.width(n).height("100%"),
                    l ? ((e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth)), r.width() > e && (n = r.width())) : r.width() > a.width() && (n = r.width()),
                    this.overlay.width(n).height(r.height());
            },
            onReady: function (e, t) {
                var i = this.overlay;
                n(".fancybox-overlay").stop(!0, !0),
                    i || this.create(e),
                    e.locked && this.fixed && t.fixed && (i || (this.margin = r.height() > a.height() ? n("html").css("margin-right").replace("px", "") : !1), (t.locked = this.overlay.append(t.wrap)), (t.fixed = !1)),
                    e.showEarly === !0 && this.beforeShow.apply(this, arguments);
            },
            beforeShow: function (e, t) {
                var i, o;
                t.locked &&
                    (this.margin !== !1 &&
                        (n("*")
                            .filter(function () {
                                return "fixed" === n(this).css("position") && !n(this).hasClass("fancybox-overlay") && !n(this).hasClass("fancybox-wrap");
                            })
                            .addClass("fancybox-margin"),
                        this.el.addClass("fancybox-margin")),
                    (i = a.scrollTop()),
                    (o = a.scrollLeft()),
                    this.el.addClass("fancybox-lock"),
                    a.scrollTop(i).scrollLeft(o)),
                    this.open(e);
            },
            onUpdate: function () {
                this.fixed || this.update();
            },
            afterClose: function (e) {
                this.overlay && !s.coming && this.overlay.fadeOut(e.speedOut, n.proxy(this.close, this));
            },
        }),
        (s.helpers.title = {
            defaults: { type: "float", position: "bottom" },
            beforeShow: function (e) {
                var t,
                    i,
                    o = s.current,
                    a = o.title,
                    r = e.type;
                if ((n.isFunction(a) && (a = a.call(o.element, o)), h(a) && "" !== n.trim(a))) {
                    switch (((t = n('<div class="fancybox-title fancybox-title-' + r + '-wrap">' + a + "</div>")), r)) {
                        case "inside":
                            i = s.skin;
                            break;
                        case "outside":
                            i = s.wrap;
                            break;
                        case "over":
                            i = s.inner;
                            break;
                        default:
                            (i = s.skin), t.appendTo("body"), l && t.width(t.width()), t.wrapInner('<span class="child"></span>'), (s.current.margin[2] += Math.abs(g(t.css("margin-bottom"))));
                    }
                    t["top" === e.position ? "prependTo" : "appendTo"](i);
                }
            },
        }),
        (n.fn.fancybox = function (e) {
            var t,
                i = n(this),
                o = this.selector || "",
                a = function (a) {
                    var r,
                        l,
                        c = n(this).blur(),
                        d = t;
                    a.ctrlKey ||
                        a.altKey ||
                        a.shiftKey ||
                        a.metaKey ||
                        c.is(".fancybox-wrap") ||
                        ((r = e.groupAttr || "data-fancybox-group"),
                        (l = c.attr(r)),
                        l || ((r = "rel"), (l = c.get(0)[r])),
                        l && "" !== l && "nofollow" !== l && ((c = o.length ? n(o) : i), (c = c.filter("[" + r + '="' + l + '"]')), (d = c.index(this))),
                        (e.index = d),
                        s.open(c, e) !== !1 && a.preventDefault());
                };
            return (
                (e = e || {}),
                (t = e.index || 0),
                o && e.live !== !1 ? r.undelegate(o, "click.fb-start").delegate(o + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", a) : i.unbind("click.fb-start").bind("click.fb-start", a),
                this.filter("[data-fancybox-start=1]").trigger("click"),
                this
            );
        }),
        r.ready(function () {
            var t, a;
            n.scrollbarWidth === i &&
                (n.scrollbarWidth = function () {
                    var e = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                        t = e.children(),
                        i = t.innerWidth() - t.height(99).innerWidth();
                    return e.remove(), i;
                }),
                n.support.fixedPosition === i &&
                    (n.support.fixedPosition = (function () {
                        var e = n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                            t = 20 === e[0].offsetTop || 15 === e[0].offsetTop;
                        return e.remove(), t;
                    })()),
                n.extend(s.defaults, { scrollbarWidth: n.scrollbarWidth(), fixed: n.support.fixedPosition, parent: n("body") }),
                (t = n(e).width()),
                o.addClass("fancybox-lock-test"),
                (a = n(e).width()),
                o.removeClass("fancybox-lock-test"),
                n("<style type='text/css'>.fancybox-margin{margin-right:" + (a - t) + "px;}</style>").appendTo("head");
        });
})(window, document, jQuery);

/* Owl Carousel */
"function" != typeof Object.create &&
    (Object.create = function (t) {
        function e() {}
        return (e.prototype = t), new e();
    }),
    (function (t, e, o) {
        var i = {
            init: function (e, o) {
                var i = this;
                (i.$elem = t(o)), (i.options = t.extend({}, t.fn.owlCarousel.options, i.$elem.data(), e)), (i.userOptions = e), i.loadContent();
            },
            loadContent: function () {
                function e(t) {
                    var e,
                        o = "";
                    if ("function" == typeof i.options.jsonSuccess) i.options.jsonSuccess.apply(this, [t]);
                    else {
                        for (e in t.owl) t.owl.hasOwnProperty(e) && (o += t.owl[e].item);
                        i.$elem.html(o);
                    }
                    i.logIn();
                }
                var o,
                    i = this;
                "function" == typeof i.options.beforeInit && i.options.beforeInit.apply(this, [i.$elem]), "string" == typeof i.options.jsonPath ? ((o = i.options.jsonPath), t.getJSON(o, e)) : i.logIn();
            },
            logIn: function () {
                var t = this;
                t.$elem.data("owl-originalStyles", t.$elem.attr("style")),
                    t.$elem.data("owl-originalClasses", t.$elem.attr("class")),
                    t.$elem.css({ opacity: 0 }),
                    (t.orignalItems = t.options.items),
                    t.checkBrowser(),
                    (t.wrapperWidth = 0),
                    (t.checkVisible = null),
                    t.setVars();
            },
            setVars: function () {
                var t = this;
                return 0 === t.$elem.children().length
                    ? !1
                    : (t.baseClass(),
                      t.eventTypes(),
                      (t.$userItems = t.$elem.children()),
                      (t.itemsAmount = t.$userItems.length),
                      t.wrapItems(),
                      (t.$owlItems = t.$elem.find(".owl-item")),
                      (t.$owlWrapper = t.$elem.find(".owl-wrapper")),
                      (t.playDirection = "next"),
                      (t.prevItem = 0),
                      (t.prevArr = [0]),
                      (t.currentItem = 0),
                      t.customEvents(),
                      void t.onStartup());
            },
            onStartup: function () {
                var t = this;
                t.updateItems(),
                    t.calculateAll(),
                    t.buildControls(),
                    t.updateControls(),
                    t.response(),
                    t.moveEvents(),
                    t.stopOnHover(),
                    t.owlStatus(),
                    t.options.transitionStyle !== !1 && t.transitionTypes(t.options.transitionStyle),
                    t.options.autoPlay === !0 && (t.options.autoPlay = 5e3),
                    t.play(),
                    t.$elem.find(".owl-wrapper").css("display", "block"),
                    t.$elem.is(":visible") ? t.$elem.css("opacity", 1) : t.watchVisibility(),
                    (t.onstartup = !1),
                    t.eachMoveUpdate(),
                    "function" == typeof t.options.afterInit && t.options.afterInit.apply(this, [t.$elem]);
            },
            eachMoveUpdate: function () {
                var t = this;
                t.options.lazyLoad === !0 && t.lazyLoad(), t.options.autoHeight === !0 && t.autoHeight(), t.onVisibleItems(), "function" == typeof t.options.afterAction && t.options.afterAction.apply(this, [t.$elem]);
            },
            updateVars: function () {
                var t = this;
                "function" == typeof t.options.beforeUpdate && t.options.beforeUpdate.apply(this, [t.$elem]),
                    t.watchVisibility(),
                    t.updateItems(),
                    t.calculateAll(),
                    t.updatePosition(),
                    t.updateControls(),
                    t.eachMoveUpdate(),
                    "function" == typeof t.options.afterUpdate && t.options.afterUpdate.apply(this, [t.$elem]);
            },
            reload: function () {
                var t = this;
                e.setTimeout(function () {
                    t.updateVars();
                }, 0);
            },
            watchVisibility: function () {
                var t = this;
                return t.$elem.is(":visible") !== !1
                    ? !1
                    : (t.$elem.css({ opacity: 0 }),
                      e.clearInterval(t.autoPlayInterval),
                      e.clearInterval(t.checkVisible),
                      void (t.checkVisible = e.setInterval(function () {
                          t.$elem.is(":visible") && (t.reload(), t.$elem.animate({ opacity: 1 }, 200), e.clearInterval(t.checkVisible));
                      }, 500)));
            },
            wrapItems: function () {
                var t = this;
                t.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),
                    t.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),
                    (t.wrapperOuter = t.$elem.find(".owl-wrapper-outer")),
                    t.$elem.css("display", "block");
            },
            baseClass: function () {
                var t = this,
                    e = t.$elem.hasClass(t.options.baseClass),
                    o = t.$elem.hasClass(t.options.theme);
                e || t.$elem.addClass(t.options.baseClass), o || t.$elem.addClass(t.options.theme);
            },
            updateItems: function () {
                var e,
                    o,
                    i = this;
                if (i.options.responsive === !1) return !1;
                if (i.options.singleItem === !0)
                    return (
                        (i.options.items = i.orignalItems = 1),
                        (i.options.itemsCustom = !1),
                        (i.options.itemsDesktop = !1),
                        (i.options.itemsDesktopSmall = !1),
                        (i.options.itemsTablet = !1),
                        (i.options.itemsTabletSmall = !1),
                        (i.options.itemsMobile = !1),
                        !1
                    );
                if (((e = t(i.options.responsiveBaseWidth).width()), e > (i.options.itemsDesktop[0] || i.orignalItems) && (i.options.items = i.orignalItems), i.options.itemsCustom !== !1))
                    for (
                        i.options.itemsCustom.sort(function (t, e) {
                            return t[0] - e[0];
                        }),
                            o = 0;
                        o < i.options.itemsCustom.length;
                        o += 1
                    )
                        i.options.itemsCustom[o][0] <= e && (i.options.items = i.options.itemsCustom[o][1]);
                else
                    e <= i.options.itemsDesktop[0] && i.options.itemsDesktop !== !1 && (i.options.items = i.options.itemsDesktop[1]),
                        e <= i.options.itemsDesktopSmall[0] && i.options.itemsDesktopSmall !== !1 && (i.options.items = i.options.itemsDesktopSmall[1]),
                        e <= i.options.itemsTablet[0] && i.options.itemsTablet !== !1 && (i.options.items = i.options.itemsTablet[1]),
                        e <= i.options.itemsTabletSmall[0] && i.options.itemsTabletSmall !== !1 && (i.options.items = i.options.itemsTabletSmall[1]),
                        e <= i.options.itemsMobile[0] && i.options.itemsMobile !== !1 && (i.options.items = i.options.itemsMobile[1]);
                i.options.items > i.itemsAmount && i.options.itemsScaleUp === !0 && (i.options.items = i.itemsAmount);
            },
            response: function () {
                var o,
                    i,
                    n = this;
                return n.options.responsive !== !0
                    ? !1
                    : ((i = t(e).width()),
                      (n.resizer = function () {
                          t(e).width() !== i &&
                              (n.options.autoPlay !== !1 && e.clearInterval(n.autoPlayInterval),
                              e.clearTimeout(o),
                              (o = e.setTimeout(function () {
                                  (i = t(e).width()), n.updateVars();
                              }, n.options.responsiveRefreshRate)));
                      }),
                      void t(e).resize(n.resizer));
            },
            updatePosition: function () {
                var t = this;
                t.jumpTo(t.currentItem), t.options.autoPlay !== !1 && t.checkAp();
            },
            appendItemsSizes: function () {
                var e = this,
                    o = 0,
                    i = e.itemsAmount - e.options.items;
                e.$owlItems.each(function (n) {
                    var s = t(this);
                    s.css({ width: e.itemWidth }).data("owl-item", Number(n)), (n % e.options.items === 0 || n === i) && (n > i || (o += 1)), s.data("owl-roundPages", o);
                });
            },
            appendWrapperSizes: function () {
                var t = this,
                    e = t.$owlItems.length * t.itemWidth;
                t.$owlWrapper.css({ width: 2 * e, left: 0 }), t.appendItemsSizes();
            },
            calculateAll: function () {
                var t = this;
                t.calculateWidth(), t.appendWrapperSizes(), t.loops(), t.max();
            },
            calculateWidth: function () {
                var t = this;
                t.itemWidth = Math.round(t.$elem.width() / t.options.items);
            },
            max: function () {
                var t = this,
                    e = -1 * (t.itemsAmount * t.itemWidth - t.options.items * t.itemWidth);
                return t.options.items > t.itemsAmount ? ((t.maximumItem = 0), (e = 0), (t.maximumPixels = 0)) : ((t.maximumItem = t.itemsAmount - t.options.items), (t.maximumPixels = e)), e;
            },
            min: function () {
                return 0;
            },
            loops: function () {
                var e,
                    o,
                    i,
                    n = this,
                    s = 0,
                    a = 0;
                for (n.positionsInArray = [0], n.pagesInArray = [], e = 0; e < n.itemsAmount; e += 1)
                    (a += n.itemWidth), n.positionsInArray.push(-a), n.options.scrollPerPage === !0 && ((o = t(n.$owlItems[e])), (i = o.data("owl-roundPages")), i !== s && ((n.pagesInArray[s] = n.positionsInArray[e]), (s = i)));
            },
            buildControls: function () {
                var e = this;
                (e.options.navigation === !0 || e.options.pagination === !0) && (e.owlControls = t('<div class="owl-controls"/>').toggleClass("clickable", !e.browser.isTouch).appendTo(e.$elem)),
                    e.options.pagination === !0 && e.buildPagination(),
                    e.options.navigation === !0 && e.buildButtons();
            },
            buildButtons: function () {
                var e = this,
                    o = t('<div class="owl-buttons"/>');
                e.owlControls.append(o),
                    (e.buttonPrev = t("<div/>", { class: "owl-prev", html: e.options.navigationText[0] || "" })),
                    (e.buttonNext = t("<div/>", { class: "owl-next", html: e.options.navigationText[1] || "" })),
                    o.append(e.buttonPrev).append(e.buttonNext),
                    o.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function (t) {
                        t.preventDefault();
                    }),
                    o.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function (o) {
                        o.preventDefault(), t(this).hasClass("owl-next") ? e.next() : e.prev();
                    });
            },
            buildPagination: function () {
                var e = this;
                (e.paginationWrapper = t('<div class="owl-pagination"/>')),
                    e.owlControls.append(e.paginationWrapper),
                    e.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (o) {
                        o.preventDefault(), Number(t(this).data("owl-page")) !== e.currentItem && e.goTo(Number(t(this).data("owl-page")), !0);
                    });
            },
            updatePagination: function () {
                var e,
                    o,
                    i,
                    n,
                    s,
                    a,
                    r = this;
                if (r.options.pagination === !1) return !1;
                for (r.paginationWrapper.html(""), e = 0, o = r.itemsAmount - (r.itemsAmount % r.options.items), n = 0; n < r.itemsAmount; n += 1)
                    n % r.options.items === 0 &&
                        ((e += 1),
                        o === n && (i = r.itemsAmount - r.options.items),
                        (s = t("<div/>", { class: "owl-page" })),
                        (a = t("<span></span>", { text: r.options.paginationNumbers === !0 ? e : "", class: r.options.paginationNumbers === !0 ? "owl-numbers" : "" })),
                        s.append(a),
                        s.data("owl-page", o === n ? i : n),
                        s.data("owl-roundPages", e),
                        r.paginationWrapper.append(s));
                r.checkPagination();
            },
            checkPagination: function () {
                var e = this;
                return e.options.pagination === !1
                    ? !1
                    : void e.paginationWrapper.find(".owl-page").each(function () {
                          t(this).data("owl-roundPages") === t(e.$owlItems[e.currentItem]).data("owl-roundPages") && (e.paginationWrapper.find(".owl-page").removeClass("active"), t(this).addClass("active"));
                      });
            },
            checkNavigation: function () {
                var t = this;
                return t.options.navigation === !1
                    ? !1
                    : void (
                          t.options.rewindNav === !1 &&
                          (0 === t.currentItem && 0 === t.maximumItem
                              ? (t.buttonPrev.addClass("disabled"), t.buttonNext.addClass("disabled"))
                              : 0 === t.currentItem && 0 !== t.maximumItem
                              ? (t.buttonPrev.addClass("disabled"), t.buttonNext.removeClass("disabled"))
                              : t.currentItem === t.maximumItem
                              ? (t.buttonPrev.removeClass("disabled"), t.buttonNext.addClass("disabled"))
                              : 0 !== t.currentItem && t.currentItem !== t.maximumItem && (t.buttonPrev.removeClass("disabled"), t.buttonNext.removeClass("disabled")))
                      );
            },
            updateControls: function () {
                var t = this;
                t.updatePagination(), t.checkNavigation(), t.owlControls && (t.options.items >= t.itemsAmount ? t.owlControls.hide() : t.owlControls.show());
            },
            destroyControls: function () {
                var t = this;
                t.owlControls && t.owlControls.remove();
            },
            next: function (t) {
                var e = this;
                if (e.isTransition) return !1;
                if (((e.currentItem += e.options.scrollPerPage === !0 ? e.options.items : 1), e.currentItem > e.maximumItem + (e.options.scrollPerPage === !0 ? e.options.items - 1 : 0))) {
                    if (e.options.rewindNav !== !0) return (e.currentItem = e.maximumItem), !1;
                    (e.currentItem = 0), (t = "rewind");
                }
                e.goTo(e.currentItem, t);
            },
            prev: function (t) {
                var e = this;
                if (e.isTransition) return !1;
                if ((e.options.scrollPerPage === !0 && e.currentItem > 0 && e.currentItem < e.options.items ? (e.currentItem = 0) : (e.currentItem -= e.options.scrollPerPage === !0 ? e.options.items : 1), e.currentItem < 0)) {
                    if (e.options.rewindNav !== !0) return (e.currentItem = 0), !1;
                    (e.currentItem = e.maximumItem), (t = "rewind");
                }
                e.goTo(e.currentItem, t);
            },
            goTo: function (t, o, i) {
                var n,
                    s = this;
                return s.isTransition
                    ? !1
                    : ("function" == typeof s.options.beforeMove && s.options.beforeMove.apply(this, [s.$elem]),
                      t >= s.maximumItem ? (t = s.maximumItem) : 0 >= t && (t = 0),
                      (s.currentItem = s.owl.currentItem = t),
                      s.options.transitionStyle !== !1 && "drag" !== i && 1 === s.options.items && s.browser.support3d === !0
                          ? (s.swapSpeed(0), s.browser.support3d === !0 ? s.transition3d(s.positionsInArray[t]) : s.css2slide(s.positionsInArray[t], 1), s.afterGo(), s.singleItemTransition(), !1)
                          : ((n = s.positionsInArray[t]),
                            s.browser.support3d === !0
                                ? ((s.isCss3Finish = !1),
                                  o === !0
                                      ? (s.swapSpeed("paginationSpeed"),
                                        e.setTimeout(function () {
                                            s.isCss3Finish = !0;
                                        }, s.options.paginationSpeed))
                                      : "rewind" === o
                                      ? (s.swapSpeed(s.options.rewindSpeed),
                                        e.setTimeout(function () {
                                            s.isCss3Finish = !0;
                                        }, s.options.rewindSpeed))
                                      : (s.swapSpeed("slideSpeed"),
                                        e.setTimeout(function () {
                                            s.isCss3Finish = !0;
                                        }, s.options.slideSpeed)),
                                  s.transition3d(n))
                                : o === !0
                                ? s.css2slide(n, s.options.paginationSpeed)
                                : "rewind" === o
                                ? s.css2slide(n, s.options.rewindSpeed)
                                : s.css2slide(n, s.options.slideSpeed),
                            void s.afterGo()));
            },
            jumpTo: function (t) {
                var e = this;
                "function" == typeof e.options.beforeMove && e.options.beforeMove.apply(this, [e.$elem]),
                    t >= e.maximumItem || -1 === t ? (t = e.maximumItem) : 0 >= t && (t = 0),
                    e.swapSpeed(0),
                    e.browser.support3d === !0 ? e.transition3d(e.positionsInArray[t]) : e.css2slide(e.positionsInArray[t], 1),
                    (e.currentItem = e.owl.currentItem = t),
                    e.afterGo();
            },
            afterGo: function () {
                var t = this;
                t.prevArr.push(t.currentItem),
                    (t.prevItem = t.owl.prevItem = t.prevArr[t.prevArr.length - 2]),
                    t.prevArr.shift(0),
                    t.prevItem !== t.currentItem && (t.checkPagination(), t.checkNavigation(), t.eachMoveUpdate(), t.options.autoPlay !== !1 && t.checkAp()),
                    "function" == typeof t.options.afterMove && t.prevItem !== t.currentItem && t.options.afterMove.apply(this, [t.$elem]);
            },
            stop: function () {
                var t = this;
                (t.apStatus = "stop"), e.clearInterval(t.autoPlayInterval);
            },
            checkAp: function () {
                var t = this;
                "stop" !== t.apStatus && t.play();
            },
            play: function () {
                var t = this;
                return (
                    (t.apStatus = "play"),
                    t.options.autoPlay === !1
                        ? !1
                        : (e.clearInterval(t.autoPlayInterval),
                          void (t.autoPlayInterval = e.setInterval(function () {
                              t.next(!0);
                          }, t.options.autoPlay)))
                );
            },
            swapSpeed: function (t) {
                var e = this;
                "slideSpeed" === t
                    ? e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed))
                    : "paginationSpeed" === t
                    ? e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed))
                    : "string" != typeof t && e.$owlWrapper.css(e.addCssSpeed(t));
            },
            addCssSpeed: function (t) {
                return { "-webkit-transition": "all " + t + "ms ease", "-moz-transition": "all " + t + "ms ease", "-o-transition": "all " + t + "ms ease", transition: "all " + t + "ms ease" };
            },
            removeTransition: function () {
                return { "-webkit-transition": "", "-moz-transition": "", "-o-transition": "", transition: "" };
            },
            doTranslate: function (t) {
                return {
                    "-webkit-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-moz-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-o-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-ms-transform": "translate3d(" + t + "px, 0px, 0px)",
                    transform: "translate3d(" + t + "px, 0px,0px)",
                };
            },
            transition3d: function (t) {
                var e = this;
                e.$owlWrapper.css(e.doTranslate(t));
            },
            css2move: function (t) {
                var e = this;
                e.$owlWrapper.css({ left: t });
            },
            css2slide: function (t, e) {
                var o = this;
                (o.isCssFinish = !1),
                    o.$owlWrapper.stop(!0, !0).animate(
                        { left: t },
                        {
                            duration: e || o.options.slideSpeed,
                            complete: function () {
                                o.isCssFinish = !0;
                            },
                        }
                    );
            },
            checkBrowser: function () {
                var t,
                    i,
                    n,
                    s,
                    a = this,
                    r = "translate3d(0px, 0px, 0px)",
                    l = o.createElement("div");
                (l.style.cssText = "  -moz-transform:" + r + "; -ms-transform:" + r + "; -o-transform:" + r + "; -webkit-transform:" + r + "; transform:" + r),
                    (t = /translate3d\(0px, 0px, 0px\)/g),
                    (i = l.style.cssText.match(t)),
                    (n = null !== i && 1 === i.length),
                    (s = "ontouchstart" in e || e.navigator.msMaxTouchPoints),
                    (a.browser = { support3d: n, isTouch: s });
            },
            moveEvents: function () {
                var t = this;
                (t.options.mouseDrag !== !1 || t.options.touchDrag !== !1) && (t.gestures(), t.disabledEvents());
            },
            eventTypes: function () {
                var t = this,
                    e = ["s", "e", "x"];
                (t.ev_types = {}),
                    t.options.mouseDrag === !0 && t.options.touchDrag === !0
                        ? (e = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"])
                        : t.options.mouseDrag === !1 && t.options.touchDrag === !0
                        ? (e = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"])
                        : t.options.mouseDrag === !0 && t.options.touchDrag === !1 && (e = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]),
                    (t.ev_types.start = e[0]),
                    (t.ev_types.move = e[1]),
                    (t.ev_types.end = e[2]);
            },
            disabledEvents: function () {
                var e = this;
                e.$elem.on("dragstart.owl", function (t) {
                    t.preventDefault();
                }),
                    e.$elem.on("mousedown.disableTextSelect", function (e) {
                        return t(e.target).is("input, textarea, select, option");
                    });
            },
            gestures: function () {
                function i(t) {
                    if (void 0 !== t.touches) return { x: t.touches[0].pageX, y: t.touches[0].pageY };
                    if (void 0 === t.touches) {
                        if (void 0 !== t.pageX) return { x: t.pageX, y: t.pageY };
                        if (void 0 === t.pageX) return { x: t.clientX, y: t.clientY };
                    }
                }
                function n(e) {
                    "on" === e ? (t(o).on(l.ev_types.move, a), t(o).on(l.ev_types.end, r)) : "off" === e && (t(o).off(l.ev_types.move), t(o).off(l.ev_types.end));
                }
                function s(o) {
                    var s,
                        a = o.originalEvent || o || e.event;
                    if (3 === a.which) return !1;
                    if (!(l.itemsAmount <= l.options.items)) {
                        if (l.isCssFinish === !1 && !l.options.dragBeforeAnimFinish) return !1;
                        if (l.isCss3Finish === !1 && !l.options.dragBeforeAnimFinish) return !1;
                        l.options.autoPlay !== !1 && e.clearInterval(l.autoPlayInterval),
                            l.browser.isTouch === !0 || l.$owlWrapper.hasClass("grabbing") || l.$owlWrapper.addClass("grabbing"),
                            (l.newPosX = 0),
                            (l.newRelativeX = 0),
                            t(this).css(l.removeTransition()),
                            (s = t(this).position()),
                            (p.relativePos = s.left),
                            (p.offsetX = i(a).x - s.left),
                            (p.offsetY = i(a).y - s.top),
                            n("on"),
                            (p.sliding = !1),
                            (p.targetElement = a.target || a.srcElement);
                    }
                }
                function a(n) {
                    var s,
                        a,
                        r = n.originalEvent || n || e.event;
                    (l.newPosX = i(r).x - p.offsetX),
                        (l.newPosY = i(r).y - p.offsetY),
                        (l.newRelativeX = l.newPosX - p.relativePos),
                        "function" == typeof l.options.startDragging && p.dragging !== !0 && 0 !== l.newRelativeX && ((p.dragging = !0), l.options.startDragging.apply(l, [l.$elem])),
                        (l.newRelativeX > 8 || l.newRelativeX < -8) && l.browser.isTouch === !0 && (void 0 !== r.preventDefault ? r.preventDefault() : (r.returnValue = !1), (p.sliding = !0)),
                        (l.newPosY > 10 || l.newPosY < -10) && p.sliding === !1 && t(o).off("touchmove.owl"),
                        (s = function () {
                            return l.newRelativeX / 5;
                        }),
                        (a = function () {
                            return l.maximumPixels + l.newRelativeX / 5;
                        }),
                        (l.newPosX = Math.max(Math.min(l.newPosX, s()), a())),
                        l.browser.support3d === !0 ? l.transition3d(l.newPosX) : l.css2move(l.newPosX);
                }
                function r(o) {
                    var i,
                        s,
                        a,
                        r = o.originalEvent || o || e.event;
                    (r.target = r.target || r.srcElement),
                        (p.dragging = !1),
                        l.browser.isTouch !== !0 && l.$owlWrapper.removeClass("grabbing"),
                        l.newRelativeX < 0 ? (l.dragDirection = l.owl.dragDirection = "left") : (l.dragDirection = l.owl.dragDirection = "right"),
                        0 !== l.newRelativeX &&
                            ((i = l.getNewPosition()),
                            l.goTo(i, !1, "drag"),
                            p.targetElement === r.target &&
                                l.browser.isTouch !== !0 &&
                                (t(r.target).on("click.disable", function (e) {
                                    e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t(e.target).off("click.disable");
                                }),
                                (s = t._data(r.target, "events").click),
                                (a = s.pop()),
                                s.splice(0, 0, a))),
                        n("off");
                }
                var l = this,
                    p = { offsetX: 0, offsetY: 0, baseElWidth: 0, relativePos: 0, position: null, minSwipe: null, maxSwipe: null, sliding: null, dargging: null, targetElement: null };
                (l.isCssFinish = !0), l.$elem.on(l.ev_types.start, ".owl-wrapper", s);
            },
            getNewPosition: function () {
                var t = this,
                    e = t.closestItem();
                return e > t.maximumItem ? ((t.currentItem = t.maximumItem), (e = t.maximumItem)) : t.newPosX >= 0 && ((e = 0), (t.currentItem = 0)), e;
            },
            closestItem: function () {
                var e = this,
                    o = e.options.scrollPerPage === !0 ? e.pagesInArray : e.positionsInArray,
                    i = e.newPosX,
                    n = null;
                return (
                    t.each(o, function (s, a) {
                        i - e.itemWidth / 20 > o[s + 1] && i - e.itemWidth / 20 < a && "left" === e.moveDirection()
                            ? ((n = a), e.options.scrollPerPage === !0 ? (e.currentItem = t.inArray(n, e.positionsInArray)) : (e.currentItem = s))
                            : i + e.itemWidth / 20 < a &&
                              i + e.itemWidth / 20 > (o[s + 1] || o[s] - e.itemWidth) &&
                              "right" === e.moveDirection() &&
                              (e.options.scrollPerPage === !0 ? ((n = o[s + 1] || o[o.length - 1]), (e.currentItem = t.inArray(n, e.positionsInArray))) : ((n = o[s + 1]), (e.currentItem = s + 1)));
                    }),
                    e.currentItem
                );
            },
            moveDirection: function () {
                var t,
                    e = this;
                return e.newRelativeX < 0 ? ((t = "right"), (e.playDirection = "next")) : ((t = "left"), (e.playDirection = "prev")), t;
            },
            customEvents: function () {
                var t = this;
                t.$elem.on("owl.next", function () {
                    t.next();
                }),
                    t.$elem.on("owl.prev", function () {
                        t.prev();
                    }),
                    t.$elem.on("owl.play", function (e, o) {
                        (t.options.autoPlay = o), t.play(), (t.hoverStatus = "play");
                    }),
                    t.$elem.on("owl.stop", function () {
                        t.stop(), (t.hoverStatus = "stop");
                    }),
                    t.$elem.on("owl.goTo", function (e, o) {
                        t.goTo(o);
                    }),
                    t.$elem.on("owl.jumpTo", function (e, o) {
                        t.jumpTo(o);
                    });
            },
            stopOnHover: function () {
                var t = this;
                t.options.stopOnHover === !0 &&
                    t.browser.isTouch !== !0 &&
                    t.options.autoPlay !== !1 &&
                    (t.$elem.on("mouseover", function () {
                        t.stop();
                    }),
                    t.$elem.on("mouseout", function () {
                        "stop" !== t.hoverStatus && t.play();
                    }));
            },
            lazyLoad: function () {
                var e,
                    o,
                    i,
                    n,
                    s,
                    a = this;
                if (a.options.lazyLoad === !1) return !1;
                for (e = 0; e < a.itemsAmount; e += 1)
                    (o = t(a.$owlItems[e])),
                        "loaded" !== o.data("owl-loaded") &&
                            ((i = o.data("owl-item")),
                            (n = o.find(".lazyOwl")),
                            "string" == typeof n.data("src")
                                ? (void 0 === o.data("owl-loaded") && (n.hide(), o.addClass("loading").data("owl-loaded", "checked")),
                                  (s = a.options.lazyFollow === !0 ? i >= a.currentItem : !0),
                                  s && i < a.currentItem + a.options.items && n.length && a.lazyPreload(o, n))
                                : o.data("owl-loaded", "loaded"));
            },
            lazyPreload: function (t, o) {
                function i() {
                    t.data("owl-loaded", "loaded").removeClass("loading"),
                        o.removeAttr("data-src"),
                        "fade" === a.options.lazyEffect ? o.fadeIn(400) : o.show(),
                        "function" == typeof a.options.afterLazyLoad && a.options.afterLazyLoad.apply(this, [a.$elem]);
                }
                function n() {
                    (r += 1), a.completeImg(o.get(0)) || s === !0 ? i() : 100 >= r ? e.setTimeout(n, 100) : i();
                }
                var s,
                    a = this,
                    r = 0;
                "DIV" === o.prop("tagName") ? (o.css("background-image", "url(" + o.data("src") + ")"), (s = !0)) : (o[0].src = o.data("src")), n();
            },
            autoHeight: function () {
                function o() {
                    var o = t(s.$owlItems[s.currentItem]).height();
                    s.wrapperOuter.css("height", o + "px"),
                        s.wrapperOuter.hasClass("autoHeight") ||
                            e.setTimeout(function () {
                                s.wrapperOuter.addClass("autoHeight");
                            }, 0);
                }
                function i() {
                    (n += 1), s.completeImg(a.get(0)) ? o() : 100 >= n ? e.setTimeout(i, 100) : s.wrapperOuter.css("height", "");
                }
                var n,
                    s = this,
                    a = t(s.$owlItems[s.currentItem]).find("img");
                void 0 !== a.get(0) ? ((n = 0), i()) : o();
            },
            completeImg: function (t) {
                var e;
                return t.complete ? ((e = typeof t.naturalWidth), "undefined" !== e && 0 === t.naturalWidth ? !1 : !0) : !1;
            },
            onVisibleItems: function () {
                var e,
                    o = this;
                for (o.options.addClassActive === !0 && o.$owlItems.removeClass("active"), o.visibleItems = [], e = o.currentItem; e < o.currentItem + o.options.items; e += 1)
                    o.visibleItems.push(e), o.options.addClassActive === !0 && t(o.$owlItems[e]).addClass("active");
                o.owl.visibleItems = o.visibleItems;
            },
            transitionTypes: function (t) {
                var e = this;
                (e.outClass = "owl-" + t + "-out"), (e.inClass = "owl-" + t + "-in");
            },
            singleItemTransition: function () {
                function t(t) {
                    return { position: "relative", left: t + "px" };
                }
                var e = this,
                    o = e.outClass,
                    i = e.inClass,
                    n = e.$owlItems.eq(e.currentItem),
                    s = e.$owlItems.eq(e.prevItem),
                    a = Math.abs(e.positionsInArray[e.currentItem]) + e.positionsInArray[e.prevItem],
                    r = Math.abs(e.positionsInArray[e.currentItem]) + e.itemWidth / 2,
                    l = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
                (e.isTransition = !0),
                    e.$owlWrapper.addClass("owl-origin").css({ "-webkit-transform-origin": r + "px", "-moz-perspective-origin": r + "px", "perspective-origin": r + "px" }),
                    s
                        .css(t(a, 10))
                        .addClass(o)
                        .on(l, function () {
                            (e.endPrev = !0), s.off(l), e.clearTransStyle(s, o);
                        }),
                    n.addClass(i).on(l, function () {
                        (e.endCurrent = !0), n.off(l), e.clearTransStyle(n, i);
                    });
            },
            clearTransStyle: function (t, e) {
                var o = this;
                t.css({ position: "", left: "" }).removeClass(e), o.endPrev && o.endCurrent && (o.$owlWrapper.removeClass("owl-origin"), (o.endPrev = !1), (o.endCurrent = !1), (o.isTransition = !1));
            },
            owlStatus: function () {
                var t = this;
                t.owl = {
                    userOptions: t.userOptions,
                    baseElement: t.$elem,
                    userItems: t.$userItems,
                    owlItems: t.$owlItems,
                    currentItem: t.currentItem,
                    prevItem: t.prevItem,
                    visibleItems: t.visibleItems,
                    isTouch: t.browser.isTouch,
                    browser: t.browser,
                    dragDirection: t.dragDirection,
                };
            },
            clearEvents: function () {
                var i = this;
                i.$elem.off(".owl owl mousedown.disableTextSelect"), t(o).off(".owl owl"), t(e).off("resize", i.resizer);
            },
            unWrap: function () {
                var t = this;
                0 !== t.$elem.children().length && (t.$owlWrapper.unwrap(), t.$userItems.unwrap().unwrap(), t.owlControls && t.owlControls.remove()),
                    t.clearEvents(),
                    t.$elem.attr("style", t.$elem.data("owl-originalStyles") || "").attr("class", t.$elem.data("owl-originalClasses"));
            },
            destroy: function () {
                var t = this;
                t.stop(), e.clearInterval(t.checkVisible), t.unWrap(), t.$elem.removeData();
            },
            reinit: function (e) {
                var o = this,
                    i = t.extend({}, o.userOptions, e);
                o.unWrap(), o.init(i, o.$elem);
            },
            addItem: function (t, e) {
                var o,
                    i = this;
                return t
                    ? 0 === i.$elem.children().length
                        ? (i.$elem.append(t), i.setVars(), !1)
                        : (i.unWrap(), (o = void 0 === e || -1 === e ? -1 : e), o >= i.$userItems.length || -1 === o ? i.$userItems.eq(-1).after(t) : i.$userItems.eq(o).before(t), void i.setVars())
                    : !1;
            },
            removeItem: function (t) {
                var e,
                    o = this;
                return 0 === o.$elem.children().length ? !1 : ((e = void 0 === t || -1 === t ? -1 : t), o.unWrap(), o.$userItems.eq(e).remove(), void o.setVars());
            },
        };
        (t.fn.owlCarousel = function (e) {
            return this.each(function () {
                if (t(this).data("owl-init") === !0) return !1;
                t(this).data("owl-init", !0);
                var o = Object.create(i);
                o.init(e, this), t.data(this, "owlCarousel", o);
            });
        }),
            (t.fn.owlCarousel.options = {
                items: 4,
                itemsCustom: !1,
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: !1,
                itemsTablet: [768, 3],
                itemsTabletSmall: !1,
                itemsMobile: [767, 1],
                singleItem: !1,
                itemsScaleUp: !1,
                stagePadding: 30,
                slideSpeed: 200,
                paginationSpeed: 800,
                rewindSpeed: 1e3,
                autoPlay: !1,
                stopOnHover: !1,
                navigation: !1,
                navigationText: ["prev", "next"],
                rewindNav: !0,
                scrollPerPage: !1,
                pagination: !0,
                paginationNumbers: !1,
                responsive: !0,
                responsiveRefreshRate: 200,
                responsiveBaseWidth: e,
                baseClass: "owl-carousel",
                theme: "owl-theme",
                lazyLoad: !1,
                lazyFollow: !0,
                lazyEffect: "fade",
                autoHeight: !1,
                jsonPath: !1,
                jsonSuccess: !1,
                dragBeforeAnimFinish: !0,
                mouseDrag: !0,
                touchDrag: !0,
                addClassActive: !1,
                transitionStyle: !1,
                beforeUpdate: !1,
                afterUpdate: !1,
                beforeInit: !1,
                afterInit: !1,
                beforeMove: !1,
                afterMove: !1,
                afterAction: !1,
                startDragging: !1,
                afterLazyLoad: !1,
            });
    })(jQuery, window, document);

/* Stretch text */
$.fn.strech_text = function () {
    var elmt = $(this),
        cont_width = elmt.width(),
        txt = elmt.html(),
        one_line = $('<span class="stretch_it">' + txt + "</span>"),
        nb_char = elmt.text().length,
        spacing = cont_width / nb_char,
        txt_width;

    elmt.html(one_line);
    txt_width = one_line.width();

    if (txt_width < cont_width) {
        var char_width = txt_width / nb_char,
            ltr_spacing = spacing - char_width + (spacing - char_width) / nb_char;

        one_line.css({ "letter-spacing": ltr_spacing });
    } else {
        one_line.contents().unwrap();
        elmt.addClass("justify");
    }
};

/* Smooth scroll */
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000
                );
                return false;
            }
        }
    });
});

/* Midnight plugin */
/*!
 * Midnight.js 1.1.1
 * jQuery plugin to switch between multiple fixed header designs on the fly, so it looks in line with the content below it.
 * http://aerolab.github.io/midnight.js/
 *
 * Copyright (c) 2014 Aerolab <info@aerolab.co>
 *
 * Released under the MIT license
 * http://aerolab.github.io/midnight.js/LICENSE.txt
 */
!(function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (t) {
    var e = 0,
        s = Array.prototype.slice;
    (t.cleanData = (function (e) {
        return function (s) {
            var i, n, o;
            for (o = 0; null != (n = s[o]); o++)
                try {
                    (i = t._data(n, "events")), i && i.remove && t(n).triggerHandler("remove");
                } catch (r) {}
            e(s);
        };
    })(t.cleanData)),
        (t.widget = function (e, s, i) {
            var n,
                o,
                r,
                a,
                h = {},
                d = e.split(".")[0];
            return (
                (e = e.split(".")[1]),
                (n = d + "-" + e),
                i || ((i = s), (s = t.Widget)),
                (t.expr[":"][n.toLowerCase()] = function (e) {
                    return !!t.data(e, n);
                }),
                (t[d] = t[d] || {}),
                (o = t[d][e]),
                (r = t[d][e] = function (t, e) {
                    return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new r(t, e);
                }),
                t.extend(r, o, { version: i.version, _proto: t.extend({}, i), _childConstructors: [] }),
                (a = new s()),
                (a.options = t.widget.extend({}, a.options)),
                t.each(i, function (e, i) {
                    return t.isFunction(i)
                        ? void (h[e] = (function () {
                              var t = function () {
                                      return s.prototype[e].apply(this, arguments);
                                  },
                                  n = function (t) {
                                      return s.prototype[e].apply(this, t);
                                  };
                              return function () {
                                  var e,
                                      s = this._super,
                                      o = this._superApply;
                                  return (this._super = t), (this._superApply = n), (e = i.apply(this, arguments)), (this._super = s), (this._superApply = o), e;
                              };
                          })())
                        : void (h[e] = i);
                }),
                (r.prototype = t.widget.extend(a, { widgetEventPrefix: o ? a.widgetEventPrefix || e : e }, h, { constructor: r, namespace: d, widgetName: e, widgetFullName: n })),
                o
                    ? (t.each(o._childConstructors, function (e, s) {
                          var i = s.prototype;
                          t.widget(i.namespace + "." + i.widgetName, r, s._proto);
                      }),
                      delete o._childConstructors)
                    : s._childConstructors.push(r),
                t.widget.bridge(e, r),
                r
            );
        }),
        (t.widget.extend = function (e) {
            for (var i, n, o = s.call(arguments, 1), r = 0, a = o.length; a > r; r++)
                for (i in o[r]) (n = o[r][i]), o[r].hasOwnProperty(i) && void 0 !== n && (e[i] = t.isPlainObject(n) ? (t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n)) : n);
            return e;
        }),
        (t.widget.bridge = function (e, i) {
            var n = i.prototype.widgetFullName || e;
            t.fn[e] = function (o) {
                var r = "string" == typeof o,
                    a = s.call(arguments, 1),
                    h = this;
                return (
                    (o = !r && a.length ? t.widget.extend.apply(null, [o].concat(a)) : o),
                    r
                        ? this.each(function () {
                              var s,
                                  i = t.data(this, n);
                              return "instance" === o
                                  ? ((h = i), !1)
                                  : i
                                  ? t.isFunction(i[o]) && "_" !== o.charAt(0)
                                      ? ((s = i[o].apply(i, a)), s !== i && void 0 !== s ? ((h = s && s.jquery ? h.pushStack(s.get()) : s), !1) : void 0)
                                      : t.error("no such method '" + o + "' for " + e + " widget instance")
                                  : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + o + "'");
                          })
                        : this.each(function () {
                              var e = t.data(this, n);
                              e ? (e.option(o || {}), e._init && e._init()) : t.data(this, n, new i(o, this));
                          }),
                    h
                );
            };
        }),
        (t.Widget = function () {}),
        (t.Widget._childConstructors = []),
        (t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: { disabled: !1, create: null },
            _createWidget: function (s, i) {
                (i = t(i || this.defaultElement || this)[0]),
                    (this.element = t(i)),
                    (this.uuid = e++),
                    (this.eventNamespace = "." + this.widgetName + this.uuid),
                    (this.bindings = t()),
                    (this.hoverable = t()),
                    (this.focusable = t()),
                    i !== this &&
                        (t.data(i, this.widgetFullName, this),
                        this._on(!0, this.element, {
                            remove: function (t) {
                                t.target === i && this.destroy();
                            },
                        }),
                        (this.document = t(i.style ? i.ownerDocument : i.document || i)),
                        (this.window = t(this.document[0].defaultView || this.document[0].parentWindow))),
                    (this.options = t.widget.extend({}, this.options, this._getCreateOptions(), s)),
                    this._create(),
                    this._trigger("create", null, this._getCreateEventData()),
                    this._init();
            },
            _getCreateOptions: t.noop,
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function () {
                this._destroy(),
                    this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),
                    this.widget()
                        .unbind(this.eventNamespace)
                        .removeAttr("aria-disabled")
                        .removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
                    this.bindings.unbind(this.eventNamespace),
                    this.hoverable.removeClass("ui-state-hover"),
                    this.focusable.removeClass("ui-state-focus");
            },
            _destroy: t.noop,
            widget: function () {
                return this.element;
            },
            option: function (e, s) {
                var i,
                    n,
                    o,
                    r = e;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof e)
                    if (((r = {}), (i = e.split(".")), (e = i.shift()), i.length)) {
                        for (n = r[e] = t.widget.extend({}, this.options[e]), o = 0; i.length - 1 > o; o++) (n[i[o]] = n[i[o]] || {}), (n = n[i[o]]);
                        if (((e = i.pop()), 1 === arguments.length)) return void 0 === n[e] ? null : n[e];
                        n[e] = s;
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                        r[e] = s;
                    }
                return this._setOptions(r), this;
            },
            _setOptions: function (t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this;
            },
            _setOption: function (t, e) {
                return (this.options[t] = e), "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this;
            },
            enable: function () {
                return this._setOptions({ disabled: !1 });
            },
            disable: function () {
                return this._setOptions({ disabled: !0 });
            },
            _on: function (e, s, i) {
                var n,
                    o = this;
                "boolean" != typeof e && ((i = s), (s = e), (e = !1)),
                    i ? ((s = n = t(s)), (this.bindings = this.bindings.add(s))) : ((i = s), (s = this.element), (n = this.widget())),
                    t.each(i, function (i, r) {
                        function a() {
                            return e || (o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled")) ? ("string" == typeof r ? o[r] : r).apply(o, arguments) : void 0;
                        }
                        "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                        var h = i.match(/^([\w:-]*)\s*(.*)$/),
                            d = h[1] + o.eventNamespace,
                            l = h[2];
                        l ? n.delegate(l, d, a) : s.bind(d, a);
                    });
            },
            _off: function (e, s) {
                (s = (s || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace),
                    e.unbind(s).undelegate(s),
                    (this.bindings = t(this.bindings.not(e).get())),
                    (this.focusable = t(this.focusable.not(e).get())),
                    (this.hoverable = t(this.hoverable.not(e).get()));
            },
            _delay: function (t, e) {
                function s() {
                    return ("string" == typeof t ? i[t] : t).apply(i, arguments);
                }
                var i = this;
                return setTimeout(s, e || 0);
            },
            _hoverable: function (e) {
                (this.hoverable = this.hoverable.add(e)),
                    this._on(e, {
                        mouseenter: function (e) {
                            t(e.currentTarget).addClass("ui-state-hover");
                        },
                        mouseleave: function (e) {
                            t(e.currentTarget).removeClass("ui-state-hover");
                        },
                    });
            },
            _focusable: function (e) {
                (this.focusable = this.focusable.add(e)),
                    this._on(e, {
                        focusin: function (e) {
                            t(e.currentTarget).addClass("ui-state-focus");
                        },
                        focusout: function (e) {
                            t(e.currentTarget).removeClass("ui-state-focus");
                        },
                    });
            },
            _trigger: function (e, s, i) {
                var n,
                    o,
                    r = this.options[e];
                if (((i = i || {}), (s = t.Event(s)), (s.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase()), (s.target = this.element[0]), (o = s.originalEvent))) for (n in o) n in s || (s[n] = o[n]);
                return this.element.trigger(s, i), !((t.isFunction(r) && r.apply(this.element[0], [s].concat(i)) === !1) || s.isDefaultPrevented());
            },
        }),
        t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, s) {
            t.Widget.prototype["_" + e] = function (i, n, o) {
                "string" == typeof n && (n = { effect: n });
                var r,
                    a = n ? (n === !0 || "number" == typeof n ? s : n.effect || s) : e;
                (n = n || {}),
                    "number" == typeof n && (n = { duration: n }),
                    (r = !t.isEmptyObject(n)),
                    (n.complete = o),
                    n.delay && i.delay(n.delay),
                    r && t.effects && t.effects.effect[a]
                        ? i[e](n)
                        : a !== e && i[a]
                        ? i[a](n.duration, n.easing, o)
                        : i.queue(function (s) {
                              t(this)[e](), o && o.call(i[0]), s();
                          });
            };
        }),
        t.widget;
}),
    (function (t) {
        "use strict";
        t.widget("aerolab.midnight", {
            options: { headerClass: "midnightHeader", innerClass: "midnightInner", defaultClass: "default", classPrefix: "" },
            _headers: {},
            _headerInfo: { top: 0, height: 0 },
            _$sections: [],
            _sections: [],
            _scrollTop: 0,
            _documentHeight: 0,
            _transformMode: !1,
            refresh: function () {
                (this._headerInfo = { top: 0, height: this.element.outerHeight() }), (this._$sections = t("[data-midnight]")), (this._sections = []), this._setupHeaders(), this.recalculate();
            },
            _create: function () {
                var e = this;
                (this._scrollTop = window.pageYOffset || document.documentElement.scrollTop),
                    (this._documentHeight = t(document).height()),
                    (this._headers = {}),
                    (this._transformMode = this._getSupportedTransform()),
                    this.refresh(),
                    setInterval(function () {
                        e._recalculateSections();
                    }, 1e3),
                    e.recalculate(),
                    t(window).resize(function () {
                        e.recalculate();
                    }),
                    this._updateHeadersLoop();
            },
            recalculate: function () {
                this._recalculateSections(), this._updateHeaderHeight(), this._recalculateHeaders(), this._updateHeaders();
            },
            _getSupportedTransform: function () {
                for (var t = ["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"], e = 0; e < t.length; e++) if (void 0 !== document.createElement("div").style[t[e]]) return t[e];
                return !1;
            },
            _getContainerHeight: function () {
                var e = this.element.find("> ." + this.options.headerClass),
                    s = 0,
                    i = 0,
                    n = this;
                return (
                    e.length
                        ? e.each(function () {
                              var e = t(this),
                                  o = e.find("> ." + n.options.innerClass);
                              o.length ? (o.css("bottom", "auto").css("overflow", "auto"), (i = o.outerHeight()), o.css("bottom", "0")) : (e.css("bottom", "auto"), (i = e.outerHeight()), e.css("bottom", "0")), (s = i > s ? i : s);
                          })
                        : (s = i = this.element.outerHeight()),
                    s
                );
            },
            _setupHeaders: function () {
                var e = this;
                (this._headers[this.options.defaultClass] = {}),
                    this._$sections.each(function () {
                        var s = t(this),
                            i = s.data("midnight");
                        "string" == typeof i && ((i = i.trim()), "" !== i && (e._headers[i] = {}));
                    });
                ({ top: this.element.css("padding-top"), right: this.element.css("padding-right"), bottom: this.element.css("padding-bottom"), left: this.element.css("padding-left") });
                this.element.css({ position: "fixed", top: 0, left: 0, right: 0, overflow: "hidden" }), this._updateHeaderHeight();
                var s = this.element.find("> ." + this.options.headerClass);
                s.length
                    ? s.filter("." + this.options.defaultClass).length ||
                      s
                          .filter("." + this.options.headerClass + ":first")
                          .clone(!0, !0)
                          .attr("class", this.options.headerClass + " " + this.options.defaultClass)
                    : this.element.wrapInner('<div class="' + this.options.headerClass + " " + this.options.defaultClass + '"></div>');
                var s = this.element.find("> ." + this.options.headerClass),
                    i = s.filter("." + this.options.defaultClass).clone(!0, !0);
                for (var n in this._headers)
                    if (this._headers.hasOwnProperty(n) && "undefined" == typeof this._headers[n].element) {
                        var o = s.filter("." + n);
                        o.length ? (this._headers[n].element = o) : (this._headers[n].element = i.clone(!0, !0).removeClass(this.options.defaultClass).addClass(n).appendTo(this.element));
                        var r = { position: "absolute", overflow: "hidden", top: 0, left: 0, right: 0, bottom: 0 };
                        this._headers[n].element.css(r),
                            this._transformMode !== !1 && this._headers[n].element.css(this._transformMode, "translateZ(0)"),
                            this._headers[n].element.find("> ." + this.options.innerClass).length || this._headers[n].element.wrapInner('<div class="' + this.options.innerClass + '"></div>'),
                            (this._headers[n].inner = this._headers[n].element.find("> ." + this.options.innerClass)),
                            this._headers[n].inner.css(r),
                            this._transformMode !== !1 && this._headers[n].inner.css(this._transformMode, "translateZ(0)"),
                            (this._headers[n].from = ""),
                            (this._headers[n].progress = 0);
                    }
                s.each(function () {
                    var s = t(this),
                        i = !1;
                    for (var n in e._headers) e._headers.hasOwnProperty(n) && s.hasClass(n) && (i = !0);
                    s.find("> ." + e.options.innerClass).length || s.wrapInner('<div class="' + e.options.innerClass + '"></div>'), i ? s.show() : s.hide();
                });
            },
            _recalculateHeaders: function () {
                (this._scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop), (this._scrollTop = Math.max(this._scrollTop, 0)), (this._scrollTop = Math.min(this._scrollTop, this._documentHeight));
                var t = this._headerInfo.height,
                    e = this._scrollTop + this._headerInfo.top,
                    s = e + t;
                if ("function" == typeof window.getComputedStyle) {
                    var i = window.getComputedStyle(this.element[0], null),
                        n = 0,
                        o = 0;
                    if (this._transformMode !== !1 && "string" == typeof i.transform) {
                        var r = i.transform.match(/(-?[0-9\.]+)/g);
                        null !== r && r.length >= 6 && !isNaN(parseFloat(r[5])) && (o = parseFloat(r[5]));
                    }
                    i.top.indexOf("px") >= 0 && !isNaN(parseFloat(i.top)) && (n = parseFloat(i.top)), (e += n + o), (s += n + o);
                }
                for (var a in this._headers) this._headers.hasOwnProperty(a) && ((this._headers[a].from = ""), (this._headers[a].progress = 0));
                for (var h = 0; h < this._sections.length; h++)
                    s >= this._sections[h].start &&
                        e <= this._sections[h].end &&
                        ((this._headers[this._sections[h].className].visible = !0),
                        e >= this._sections[h].start && s <= this._sections[h].end
                            ? ((this._headers[this._sections[h].className].from = "top"), (this._headers[this._sections[h].className].progress += 1))
                            : s > this._sections[h].end && e < this._sections[h].end
                            ? ((this._headers[this._sections[h].className].from = "top"), (this._headers[this._sections[h].className].progress = 1 - (s - this._sections[h].end) / t))
                            : s > this._sections[h].start &&
                              e < this._sections[h].start &&
                              ("top" === this._headers[this._sections[h].className].from
                                  ? (this._headers[this._sections[h].className].progress += (s - this._sections[h].start) / t)
                                  : ((this._headers[this._sections[h].className].from = "bottom"), (this._headers[this._sections[h].className].progress = (s - this._sections[h].start) / t))));
            },
            _updateHeaders: function () {
                if ("undefined" != typeof this._headers[this.options.defaultClass]) {
                    var t = 0,
                        e = "";
                    for (var s in this._headers) this._headers.hasOwnProperty(s) && "" !== !this._headers[s].from && ((t += this._headers[s].progress), (e = s));
                    1 > t &&
                        ("" === this._headers[this.options.defaultClass].from
                            ? ((this._headers[this.options.defaultClass].from = "top" === this._headers[e].from ? "bottom" : "top"), (this._headers[this.options.defaultClass].progress = 1 - t))
                            : (this._headers[this.options.defaultClass].progress += 1 - t));
                    for (var i in this._headers)
                        if (this._headers.hasOwnProperty(i) && "" !== !this._headers[i].from) {
                            var n = 100 * (1 - this._headers[i].progress);
                            n >= 100 && (n = 110),
                                -100 >= n && (n = -110),
                                "top" === this._headers[i].from
                                    ? this._transformMode !== !1
                                        ? ((this._headers[i].element[0].style[this._transformMode] = "translateY(-" + n + "%) translateZ(0)"), (this._headers[i].inner[0].style[this._transformMode] = "translateY(+" + n + "%) translateZ(0)"))
                                        : ((this._headers[i].element[0].style.top = "-" + n + "%"), (this._headers[i].inner[0].style.top = "+" + n + "%"))
                                    : this._transformMode !== !1
                                    ? ((this._headers[i].element[0].style[this._transformMode] = "translateY(+" + n + "%) translateZ(0)"), (this._headers[i].inner[0].style[this._transformMode] = "translateY(-" + n + "%) translateZ(0)"))
                                    : ((this._headers[i].element[0].style.top = "+" + n + "%"), (this._headers[i].inner[0].style.top = "-" + n + "%"));
                        }
                }
            },
            _recalculateSections: function () {
                (this._documentHeight = t(document).height()), (this._sections = []);
                for (var e = 0; e < this._$sections.length; e++) {
                    var s = t(this._$sections[e]);
                    this._sections.push({ element: s, className: s.data("midnight"), start: s.offset().top, end: s.offset().top + s.outerHeight() });
                }
            },
            _updateHeaderHeight: function () {
                (this._headerInfo.height = this._getContainerHeight()), this.element.css("height", this._headerInfo.height + "px");
            },
            _updateHeadersLoop: function () {
                var t = this;
                this._requestAnimationFrame(function () {
                    t._updateHeadersLoop();
                }),
                    this._recalculateHeaders(),
                    this._updateHeaders();
            },
            _requestAnimationFrame: function (t) {
                var e =
                    e ||
                    (function () {
                        return (
                            window.requestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            function (t) {
                                window.setTimeout(t, 1e3 / 60);
                            }
                        );
                    })();
                e(t);
            },
        });
    })(jQuery);

/* Owl Carousel */
"function" != typeof Object.create &&
    (Object.create = function (t) {
        function e() {}
        return (e.prototype = t), new e();
    }),
    (function (t, e, o) {
        var i = {
            init: function (e, o) {
                var i = this;
                (i.$elem = t(o)), (i.options = t.extend({}, t.fn.owlCarousel.options, i.$elem.data(), e)), (i.userOptions = e), i.loadContent();
            },
            loadContent: function () {
                function e(t) {
                    var e,
                        o = "";
                    if ("function" == typeof i.options.jsonSuccess) i.options.jsonSuccess.apply(this, [t]);
                    else {
                        for (e in t.owl) t.owl.hasOwnProperty(e) && (o += t.owl[e].item);
                        i.$elem.html(o);
                    }
                    i.logIn();
                }
                var o,
                    i = this;
                "function" == typeof i.options.beforeInit && i.options.beforeInit.apply(this, [i.$elem]), "string" == typeof i.options.jsonPath ? ((o = i.options.jsonPath), t.getJSON(o, e)) : i.logIn();
            },
            logIn: function () {
                var t = this;
                t.$elem.data("owl-originalStyles", t.$elem.attr("style")),
                    t.$elem.data("owl-originalClasses", t.$elem.attr("class")),
                    t.$elem.css({ opacity: 0 }),
                    (t.orignalItems = t.options.items),
                    t.checkBrowser(),
                    (t.wrapperWidth = 0),
                    (t.checkVisible = null),
                    t.setVars();
            },
            setVars: function () {
                var t = this;
                return 0 === t.$elem.children().length
                    ? !1
                    : (t.baseClass(),
                      t.eventTypes(),
                      (t.$userItems = t.$elem.children()),
                      (t.itemsAmount = t.$userItems.length),
                      t.wrapItems(),
                      (t.$owlItems = t.$elem.find(".owl-item")),
                      (t.$owlWrapper = t.$elem.find(".owl-wrapper")),
                      (t.playDirection = "next"),
                      (t.prevItem = 0),
                      (t.prevArr = [0]),
                      (t.currentItem = 0),
                      t.customEvents(),
                      void t.onStartup());
            },
            onStartup: function () {
                var t = this;
                t.updateItems(),
                    t.calculateAll(),
                    t.buildControls(),
                    t.updateControls(),
                    t.response(),
                    t.moveEvents(),
                    t.stopOnHover(),
                    t.owlStatus(),
                    t.options.transitionStyle !== !1 && t.transitionTypes(t.options.transitionStyle),
                    t.options.autoPlay === !0 && (t.options.autoPlay = 5e3),
                    t.play(),
                    t.$elem.find(".owl-wrapper").css("display", "block"),
                    t.$elem.is(":visible") ? t.$elem.css("opacity", 1) : t.watchVisibility(),
                    (t.onstartup = !1),
                    t.eachMoveUpdate(),
                    "function" == typeof t.options.afterInit && t.options.afterInit.apply(this, [t.$elem]);
            },
            eachMoveUpdate: function () {
                var t = this;
                t.options.lazyLoad === !0 && t.lazyLoad(), t.options.autoHeight === !0 && t.autoHeight(), t.onVisibleItems(), "function" == typeof t.options.afterAction && t.options.afterAction.apply(this, [t.$elem]);
            },
            updateVars: function () {
                var t = this;
                "function" == typeof t.options.beforeUpdate && t.options.beforeUpdate.apply(this, [t.$elem]),
                    t.watchVisibility(),
                    t.updateItems(),
                    t.calculateAll(),
                    t.updatePosition(),
                    t.updateControls(),
                    t.eachMoveUpdate(),
                    "function" == typeof t.options.afterUpdate && t.options.afterUpdate.apply(this, [t.$elem]);
            },
            reload: function () {
                var t = this;
                e.setTimeout(function () {
                    t.updateVars();
                }, 0);
            },
            watchVisibility: function () {
                var t = this;
                return t.$elem.is(":visible") !== !1
                    ? !1
                    : (t.$elem.css({ opacity: 0 }),
                      e.clearInterval(t.autoPlayInterval),
                      e.clearInterval(t.checkVisible),
                      void (t.checkVisible = e.setInterval(function () {
                          t.$elem.is(":visible") && (t.reload(), t.$elem.animate({ opacity: 1 }, 200), e.clearInterval(t.checkVisible));
                      }, 500)));
            },
            wrapItems: function () {
                var t = this;
                t.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),
                    t.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),
                    (t.wrapperOuter = t.$elem.find(".owl-wrapper-outer")),
                    t.$elem.css("display", "block");
            },
            baseClass: function () {
                var t = this,
                    e = t.$elem.hasClass(t.options.baseClass),
                    o = t.$elem.hasClass(t.options.theme);
                e || t.$elem.addClass(t.options.baseClass), o || t.$elem.addClass(t.options.theme);
            },
            updateItems: function () {
                var e,
                    o,
                    i = this;
                if (i.options.responsive === !1) return !1;
                if (i.options.singleItem === !0)
                    return (
                        (i.options.items = i.orignalItems = 1),
                        (i.options.itemsCustom = !1),
                        (i.options.itemsDesktop = !1),
                        (i.options.itemsDesktopSmall = !1),
                        (i.options.itemsTablet = !1),
                        (i.options.itemsTabletSmall = !1),
                        (i.options.itemsMobile = !1),
                        !1
                    );
                if (((e = t(i.options.responsiveBaseWidth).width()), e > (i.options.itemsDesktop[0] || i.orignalItems) && (i.options.items = i.orignalItems), i.options.itemsCustom !== !1))
                    for (
                        i.options.itemsCustom.sort(function (t, e) {
                            return t[0] - e[0];
                        }),
                            o = 0;
                        o < i.options.itemsCustom.length;
                        o += 1
                    )
                        i.options.itemsCustom[o][0] <= e && (i.options.items = i.options.itemsCustom[o][1]);
                else
                    e <= i.options.itemsDesktop[0] && i.options.itemsDesktop !== !1 && (i.options.items = i.options.itemsDesktop[1]),
                        e <= i.options.itemsDesktopSmall[0] && i.options.itemsDesktopSmall !== !1 && (i.options.items = i.options.itemsDesktopSmall[1]),
                        e <= i.options.itemsTablet[0] && i.options.itemsTablet !== !1 && (i.options.items = i.options.itemsTablet[1]),
                        e <= i.options.itemsTabletSmall[0] && i.options.itemsTabletSmall !== !1 && (i.options.items = i.options.itemsTabletSmall[1]),
                        e <= i.options.itemsMobile[0] && i.options.itemsMobile !== !1 && (i.options.items = i.options.itemsMobile[1]);
                i.options.items > i.itemsAmount && i.options.itemsScaleUp === !0 && (i.options.items = i.itemsAmount);
            },
            response: function () {
                var o,
                    i,
                    n = this;
                return n.options.responsive !== !0
                    ? !1
                    : ((i = t(e).width()),
                      (n.resizer = function () {
                          t(e).width() !== i &&
                              (n.options.autoPlay !== !1 && e.clearInterval(n.autoPlayInterval),
                              e.clearTimeout(o),
                              (o = e.setTimeout(function () {
                                  (i = t(e).width()), n.updateVars();
                              }, n.options.responsiveRefreshRate)));
                      }),
                      void t(e).resize(n.resizer));
            },
            updatePosition: function () {
                var t = this;
                t.jumpTo(t.currentItem), t.options.autoPlay !== !1 && t.checkAp();
            },
            appendItemsSizes: function () {
                var e = this,
                    o = 0,
                    i = e.itemsAmount - e.options.items;
                e.$owlItems.each(function (n) {
                    var s = t(this);
                    s.css({ width: e.itemWidth }).data("owl-item", Number(n)), (n % e.options.items === 0 || n === i) && (n > i || (o += 1)), s.data("owl-roundPages", o);
                });
            },
            appendWrapperSizes: function () {
                var t = this,
                    e = t.$owlItems.length * t.itemWidth;
                t.$owlWrapper.css({ width: 2 * e, left: 0 }), t.appendItemsSizes();
            },
            calculateAll: function () {
                var t = this;
                t.calculateWidth(), t.appendWrapperSizes(), t.loops(), t.max();
            },
            calculateWidth: function () {
                var t = this;
                t.itemWidth = Math.round(t.$elem.width() / t.options.items);
            },
            max: function () {
                var t = this,
                    e = -1 * (t.itemsAmount * t.itemWidth - t.options.items * t.itemWidth);
                return t.options.items > t.itemsAmount ? ((t.maximumItem = 0), (e = 0), (t.maximumPixels = 0)) : ((t.maximumItem = t.itemsAmount - t.options.items), (t.maximumPixels = e)), e;
            },
            min: function () {
                return 0;
            },
            loops: function () {
                var e,
                    o,
                    i,
                    n = this,
                    s = 0,
                    a = 0;
                for (n.positionsInArray = [0], n.pagesInArray = [], e = 0; e < n.itemsAmount; e += 1)
                    (a += n.itemWidth), n.positionsInArray.push(-a), n.options.scrollPerPage === !0 && ((o = t(n.$owlItems[e])), (i = o.data("owl-roundPages")), i !== s && ((n.pagesInArray[s] = n.positionsInArray[e]), (s = i)));
            },
            buildControls: function () {
                var e = this;
                (e.options.navigation === !0 || e.options.pagination === !0) && (e.owlControls = t('<div class="owl-controls"/>').toggleClass("clickable", !e.browser.isTouch).appendTo(e.$elem)),
                    e.options.pagination === !0 && e.buildPagination(),
                    e.options.navigation === !0 && e.buildButtons();
            },
            buildButtons: function () {
                var e = this,
                    o = t('<div class="owl-buttons"/>');
                e.owlControls.append(o),
                    (e.buttonPrev = t("<div/>", { class: "owl-prev", html: e.options.navigationText[0] || "" })),
                    (e.buttonNext = t("<div/>", { class: "owl-next", html: e.options.navigationText[1] || "" })),
                    o.append(e.buttonPrev).append(e.buttonNext),
                    o.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function (t) {
                        t.preventDefault();
                    }),
                    o.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function (o) {
                        o.preventDefault(), t(this).hasClass("owl-next") ? e.next() : e.prev();
                    });
            },
            buildPagination: function () {
                var e = this;
                (e.paginationWrapper = t('<div class="owl-pagination"/>')),
                    e.owlControls.append(e.paginationWrapper),
                    e.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (o) {
                        o.preventDefault(), Number(t(this).data("owl-page")) !== e.currentItem && e.goTo(Number(t(this).data("owl-page")), !0);
                    });
            },
            updatePagination: function () {
                var e,
                    o,
                    i,
                    n,
                    s,
                    a,
                    r = this;
                if (r.options.pagination === !1) return !1;
                for (r.paginationWrapper.html(""), e = 0, o = r.itemsAmount - (r.itemsAmount % r.options.items), n = 0; n < r.itemsAmount; n += 1)
                    n % r.options.items === 0 &&
                        ((e += 1),
                        o === n && (i = r.itemsAmount - r.options.items),
                        (s = t("<div/>", { class: "owl-page" })),
                        (a = t("<span></span>", { text: r.options.paginationNumbers === !0 ? e : "", class: r.options.paginationNumbers === !0 ? "owl-numbers" : "" })),
                        s.append(a),
                        s.data("owl-page", o === n ? i : n),
                        s.data("owl-roundPages", e),
                        r.paginationWrapper.append(s));
                r.checkPagination();
            },
            checkPagination: function () {
                var e = this;
                return e.options.pagination === !1
                    ? !1
                    : void e.paginationWrapper.find(".owl-page").each(function () {
                          t(this).data("owl-roundPages") === t(e.$owlItems[e.currentItem]).data("owl-roundPages") && (e.paginationWrapper.find(".owl-page").removeClass("active"), t(this).addClass("active"));
                      });
            },
            checkNavigation: function () {
                var t = this;
                return t.options.navigation === !1
                    ? !1
                    : void (
                          t.options.rewindNav === !1 &&
                          (0 === t.currentItem && 0 === t.maximumItem
                              ? (t.buttonPrev.addClass("disabled"), t.buttonNext.addClass("disabled"))
                              : 0 === t.currentItem && 0 !== t.maximumItem
                              ? (t.buttonPrev.addClass("disabled"), t.buttonNext.removeClass("disabled"))
                              : t.currentItem === t.maximumItem
                              ? (t.buttonPrev.removeClass("disabled"), t.buttonNext.addClass("disabled"))
                              : 0 !== t.currentItem && t.currentItem !== t.maximumItem && (t.buttonPrev.removeClass("disabled"), t.buttonNext.removeClass("disabled")))
                      );
            },
            updateControls: function () {
                var t = this;
                t.updatePagination(), t.checkNavigation(), t.owlControls && (t.options.items >= t.itemsAmount ? t.owlControls.hide() : t.owlControls.show());
            },
            destroyControls: function () {
                var t = this;
                t.owlControls && t.owlControls.remove();
            },
            next: function (t) {
                var e = this;
                if (e.isTransition) return !1;
                if (((e.currentItem += e.options.scrollPerPage === !0 ? e.options.items : 1), e.currentItem > e.maximumItem + (e.options.scrollPerPage === !0 ? e.options.items - 1 : 0))) {
                    if (e.options.rewindNav !== !0) return (e.currentItem = e.maximumItem), !1;
                    (e.currentItem = 0), (t = "rewind");
                }
                e.goTo(e.currentItem, t);
            },
            prev: function (t) {
                var e = this;
                if (e.isTransition) return !1;
                if ((e.options.scrollPerPage === !0 && e.currentItem > 0 && e.currentItem < e.options.items ? (e.currentItem = 0) : (e.currentItem -= e.options.scrollPerPage === !0 ? e.options.items : 1), e.currentItem < 0)) {
                    if (e.options.rewindNav !== !0) return (e.currentItem = 0), !1;
                    (e.currentItem = e.maximumItem), (t = "rewind");
                }
                e.goTo(e.currentItem, t);
            },
            goTo: function (t, o, i) {
                var n,
                    s = this;
                return s.isTransition
                    ? !1
                    : ("function" == typeof s.options.beforeMove && s.options.beforeMove.apply(this, [s.$elem]),
                      t >= s.maximumItem ? (t = s.maximumItem) : 0 >= t && (t = 0),
                      (s.currentItem = s.owl.currentItem = t),
                      s.options.transitionStyle !== !1 && "drag" !== i && 1 === s.options.items && s.browser.support3d === !0
                          ? (s.swapSpeed(0), s.browser.support3d === !0 ? s.transition3d(s.positionsInArray[t]) : s.css2slide(s.positionsInArray[t], 1), s.afterGo(), s.singleItemTransition(), !1)
                          : ((n = s.positionsInArray[t]),
                            s.browser.support3d === !0
                                ? ((s.isCss3Finish = !1),
                                  o === !0
                                      ? (s.swapSpeed("paginationSpeed"),
                                        e.setTimeout(function () {
                                            s.isCss3Finish = !0;
                                        }, s.options.paginationSpeed))
                                      : "rewind" === o
                                      ? (s.swapSpeed(s.options.rewindSpeed),
                                        e.setTimeout(function () {
                                            s.isCss3Finish = !0;
                                        }, s.options.rewindSpeed))
                                      : (s.swapSpeed("slideSpeed"),
                                        e.setTimeout(function () {
                                            s.isCss3Finish = !0;
                                        }, s.options.slideSpeed)),
                                  s.transition3d(n))
                                : o === !0
                                ? s.css2slide(n, s.options.paginationSpeed)
                                : "rewind" === o
                                ? s.css2slide(n, s.options.rewindSpeed)
                                : s.css2slide(n, s.options.slideSpeed),
                            void s.afterGo()));
            },
            jumpTo: function (t) {
                var e = this;
                "function" == typeof e.options.beforeMove && e.options.beforeMove.apply(this, [e.$elem]),
                    t >= e.maximumItem || -1 === t ? (t = e.maximumItem) : 0 >= t && (t = 0),
                    e.swapSpeed(0),
                    e.browser.support3d === !0 ? e.transition3d(e.positionsInArray[t]) : e.css2slide(e.positionsInArray[t], 1),
                    (e.currentItem = e.owl.currentItem = t),
                    e.afterGo();
            },
            afterGo: function () {
                var t = this;
                t.prevArr.push(t.currentItem),
                    (t.prevItem = t.owl.prevItem = t.prevArr[t.prevArr.length - 2]),
                    t.prevArr.shift(0),
                    t.prevItem !== t.currentItem && (t.checkPagination(), t.checkNavigation(), t.eachMoveUpdate(), t.options.autoPlay !== !1 && t.checkAp()),
                    "function" == typeof t.options.afterMove && t.prevItem !== t.currentItem && t.options.afterMove.apply(this, [t.$elem]);
            },
            stop: function () {
                var t = this;
                (t.apStatus = "stop"), e.clearInterval(t.autoPlayInterval);
            },
            checkAp: function () {
                var t = this;
                "stop" !== t.apStatus && t.play();
            },
            play: function () {
                var t = this;
                return (
                    (t.apStatus = "play"),
                    t.options.autoPlay === !1
                        ? !1
                        : (e.clearInterval(t.autoPlayInterval),
                          void (t.autoPlayInterval = e.setInterval(function () {
                              t.next(!0);
                          }, t.options.autoPlay)))
                );
            },
            swapSpeed: function (t) {
                var e = this;
                "slideSpeed" === t
                    ? e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed))
                    : "paginationSpeed" === t
                    ? e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed))
                    : "string" != typeof t && e.$owlWrapper.css(e.addCssSpeed(t));
            },
            addCssSpeed: function (t) {
                return { "-webkit-transition": "all " + t + "ms ease", "-moz-transition": "all " + t + "ms ease", "-o-transition": "all " + t + "ms ease", transition: "all " + t + "ms ease" };
            },
            removeTransition: function () {
                return { "-webkit-transition": "", "-moz-transition": "", "-o-transition": "", transition: "" };
            },
            doTranslate: function (t) {
                return {
                    "-webkit-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-moz-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-o-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-ms-transform": "translate3d(" + t + "px, 0px, 0px)",
                    transform: "translate3d(" + t + "px, 0px,0px)",
                };
            },
            transition3d: function (t) {
                var e = this;
                e.$owlWrapper.css(e.doTranslate(t));
            },
            css2move: function (t) {
                var e = this;
                e.$owlWrapper.css({ left: t });
            },
            css2slide: function (t, e) {
                var o = this;
                (o.isCssFinish = !1),
                    o.$owlWrapper.stop(!0, !0).animate(
                        { left: t },
                        {
                            duration: e || o.options.slideSpeed,
                            complete: function () {
                                o.isCssFinish = !0;
                            },
                        }
                    );
            },
            checkBrowser: function () {
                var t,
                    i,
                    n,
                    s,
                    a = this,
                    r = "translate3d(0px, 0px, 0px)",
                    l = o.createElement("div");
                (l.style.cssText = "  -moz-transform:" + r + "; -ms-transform:" + r + "; -o-transform:" + r + "; -webkit-transform:" + r + "; transform:" + r),
                    (t = /translate3d\(0px, 0px, 0px\)/g),
                    (i = l.style.cssText.match(t)),
                    (n = null !== i && 1 === i.length),
                    (s = "ontouchstart" in e || e.navigator.msMaxTouchPoints),
                    (a.browser = { support3d: n, isTouch: s });
            },
            moveEvents: function () {
                var t = this;
                (t.options.mouseDrag !== !1 || t.options.touchDrag !== !1) && (t.gestures(), t.disabledEvents());
            },
            eventTypes: function () {
                var t = this,
                    e = ["s", "e", "x"];
                (t.ev_types = {}),
                    t.options.mouseDrag === !0 && t.options.touchDrag === !0
                        ? (e = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"])
                        : t.options.mouseDrag === !1 && t.options.touchDrag === !0
                        ? (e = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"])
                        : t.options.mouseDrag === !0 && t.options.touchDrag === !1 && (e = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]),
                    (t.ev_types.start = e[0]),
                    (t.ev_types.move = e[1]),
                    (t.ev_types.end = e[2]);
            },
            disabledEvents: function () {
                var e = this;
                e.$elem.on("dragstart.owl", function (t) {
                    t.preventDefault();
                }),
                    e.$elem.on("mousedown.disableTextSelect", function (e) {
                        return t(e.target).is("input, textarea, select, option");
                    });
            },
            gestures: function () {
                function i(t) {
                    if (void 0 !== t.touches) return { x: t.touches[0].pageX, y: t.touches[0].pageY };
                    if (void 0 === t.touches) {
                        if (void 0 !== t.pageX) return { x: t.pageX, y: t.pageY };
                        if (void 0 === t.pageX) return { x: t.clientX, y: t.clientY };
                    }
                }
                function n(e) {
                    "on" === e ? (t(o).on(l.ev_types.move, a), t(o).on(l.ev_types.end, r)) : "off" === e && (t(o).off(l.ev_types.move), t(o).off(l.ev_types.end));
                }
                function s(o) {
                    var s,
                        a = o.originalEvent || o || e.event;
                    if (3 === a.which) return !1;
                    if (!(l.itemsAmount <= l.options.items)) {
                        if (l.isCssFinish === !1 && !l.options.dragBeforeAnimFinish) return !1;
                        if (l.isCss3Finish === !1 && !l.options.dragBeforeAnimFinish) return !1;
                        l.options.autoPlay !== !1 && e.clearInterval(l.autoPlayInterval),
                            l.browser.isTouch === !0 || l.$owlWrapper.hasClass("grabbing") || l.$owlWrapper.addClass("grabbing"),
                            (l.newPosX = 0),
                            (l.newRelativeX = 0),
                            t(this).css(l.removeTransition()),
                            (s = t(this).position()),
                            (p.relativePos = s.left),
                            (p.offsetX = i(a).x - s.left),
                            (p.offsetY = i(a).y - s.top),
                            n("on"),
                            (p.sliding = !1),
                            (p.targetElement = a.target || a.srcElement);
                    }
                }
                function a(n) {
                    var s,
                        a,
                        r = n.originalEvent || n || e.event;
                    (l.newPosX = i(r).x - p.offsetX),
                        (l.newPosY = i(r).y - p.offsetY),
                        (l.newRelativeX = l.newPosX - p.relativePos),
                        "function" == typeof l.options.startDragging && p.dragging !== !0 && 0 !== l.newRelativeX && ((p.dragging = !0), l.options.startDragging.apply(l, [l.$elem])),
                        (l.newRelativeX > 8 || l.newRelativeX < -8) && l.browser.isTouch === !0 && (void 0 !== r.preventDefault ? r.preventDefault() : (r.returnValue = !1), (p.sliding = !0)),
                        (l.newPosY > 10 || l.newPosY < -10) && p.sliding === !1 && t(o).off("touchmove.owl"),
                        (s = function () {
                            return l.newRelativeX / 5;
                        }),
                        (a = function () {
                            return l.maximumPixels + l.newRelativeX / 5;
                        }),
                        (l.newPosX = Math.max(Math.min(l.newPosX, s()), a())),
                        l.browser.support3d === !0 ? l.transition3d(l.newPosX) : l.css2move(l.newPosX);
                }
                function r(o) {
                    var i,
                        s,
                        a,
                        r = o.originalEvent || o || e.event;
                    (r.target = r.target || r.srcElement),
                        (p.dragging = !1),
                        l.browser.isTouch !== !0 && l.$owlWrapper.removeClass("grabbing"),
                        l.newRelativeX < 0 ? (l.dragDirection = l.owl.dragDirection = "left") : (l.dragDirection = l.owl.dragDirection = "right"),
                        0 !== l.newRelativeX &&
                            ((i = l.getNewPosition()),
                            l.goTo(i, !1, "drag"),
                            p.targetElement === r.target &&
                                l.browser.isTouch !== !0 &&
                                (t(r.target).on("click.disable", function (e) {
                                    e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t(e.target).off("click.disable");
                                }),
                                (s = t._data(r.target, "events").click),
                                (a = s.pop()),
                                s.splice(0, 0, a))),
                        n("off");
                }
                var l = this,
                    p = { offsetX: 0, offsetY: 0, baseElWidth: 0, relativePos: 0, position: null, minSwipe: null, maxSwipe: null, sliding: null, dargging: null, targetElement: null };
                (l.isCssFinish = !0), l.$elem.on(l.ev_types.start, ".owl-wrapper", s);
            },
            getNewPosition: function () {
                var t = this,
                    e = t.closestItem();
                return e > t.maximumItem ? ((t.currentItem = t.maximumItem), (e = t.maximumItem)) : t.newPosX >= 0 && ((e = 0), (t.currentItem = 0)), e;
            },
            closestItem: function () {
                var e = this,
                    o = e.options.scrollPerPage === !0 ? e.pagesInArray : e.positionsInArray,
                    i = e.newPosX,
                    n = null;
                return (
                    t.each(o, function (s, a) {
                        i - e.itemWidth / 20 > o[s + 1] && i - e.itemWidth / 20 < a && "left" === e.moveDirection()
                            ? ((n = a), e.options.scrollPerPage === !0 ? (e.currentItem = t.inArray(n, e.positionsInArray)) : (e.currentItem = s))
                            : i + e.itemWidth / 20 < a &&
                              i + e.itemWidth / 20 > (o[s + 1] || o[s] - e.itemWidth) &&
                              "right" === e.moveDirection() &&
                              (e.options.scrollPerPage === !0 ? ((n = o[s + 1] || o[o.length - 1]), (e.currentItem = t.inArray(n, e.positionsInArray))) : ((n = o[s + 1]), (e.currentItem = s + 1)));
                    }),
                    e.currentItem
                );
            },
            moveDirection: function () {
                var t,
                    e = this;
                return e.newRelativeX < 0 ? ((t = "right"), (e.playDirection = "next")) : ((t = "left"), (e.playDirection = "prev")), t;
            },
            customEvents: function () {
                var t = this;
                t.$elem.on("owl.next", function () {
                    t.next();
                }),
                    t.$elem.on("owl.prev", function () {
                        t.prev();
                    }),
                    t.$elem.on("owl.play", function (e, o) {
                        (t.options.autoPlay = o), t.play(), (t.hoverStatus = "play");
                    }),
                    t.$elem.on("owl.stop", function () {
                        t.stop(), (t.hoverStatus = "stop");
                    }),
                    t.$elem.on("owl.goTo", function (e, o) {
                        t.goTo(o);
                    }),
                    t.$elem.on("owl.jumpTo", function (e, o) {
                        t.jumpTo(o);
                    });
            },
            stopOnHover: function () {
                var t = this;
                t.options.stopOnHover === !0 &&
                    t.browser.isTouch !== !0 &&
                    t.options.autoPlay !== !1 &&
                    (t.$elem.on("mouseover", function () {
                        t.stop();
                    }),
                    t.$elem.on("mouseout", function () {
                        "stop" !== t.hoverStatus && t.play();
                    }));
            },
            lazyLoad: function () {
                var e,
                    o,
                    i,
                    n,
                    s,
                    a = this;
                if (a.options.lazyLoad === !1) return !1;
                for (e = 0; e < a.itemsAmount; e += 1)
                    (o = t(a.$owlItems[e])),
                        "loaded" !== o.data("owl-loaded") &&
                            ((i = o.data("owl-item")),
                            (n = o.find(".lazyOwl")),
                            "string" == typeof n.data("src")
                                ? (void 0 === o.data("owl-loaded") && (n.hide(), o.addClass("loading").data("owl-loaded", "checked")),
                                  (s = a.options.lazyFollow === !0 ? i >= a.currentItem : !0),
                                  s && i < a.currentItem + a.options.items && n.length && a.lazyPreload(o, n))
                                : o.data("owl-loaded", "loaded"));
            },
            lazyPreload: function (t, o) {
                function i() {
                    t.data("owl-loaded", "loaded").removeClass("loading"),
                        o.removeAttr("data-src"),
                        "fade" === a.options.lazyEffect ? o.fadeIn(400) : o.show(),
                        "function" == typeof a.options.afterLazyLoad && a.options.afterLazyLoad.apply(this, [a.$elem]);
                }
                function n() {
                    (r += 1), a.completeImg(o.get(0)) || s === !0 ? i() : 100 >= r ? e.setTimeout(n, 100) : i();
                }
                var s,
                    a = this,
                    r = 0;
                "DIV" === o.prop("tagName") ? (o.css("background-image", "url(" + o.data("src") + ")"), (s = !0)) : (o[0].src = o.data("src")), n();
            },
            autoHeight: function () {
                function o() {
                    var o = t(s.$owlItems[s.currentItem]).height();
                    s.wrapperOuter.css("height", o + "px"),
                        s.wrapperOuter.hasClass("autoHeight") ||
                            e.setTimeout(function () {
                                s.wrapperOuter.addClass("autoHeight");
                            }, 0);
                }
                function i() {
                    (n += 1), s.completeImg(a.get(0)) ? o() : 100 >= n ? e.setTimeout(i, 100) : s.wrapperOuter.css("height", "");
                }
                var n,
                    s = this,
                    a = t(s.$owlItems[s.currentItem]).find("img");
                void 0 !== a.get(0) ? ((n = 0), i()) : o();
            },
            completeImg: function (t) {
                var e;
                return t.complete ? ((e = typeof t.naturalWidth), "undefined" !== e && 0 === t.naturalWidth ? !1 : !0) : !1;
            },
            onVisibleItems: function () {
                var e,
                    o = this;
                for (o.options.addClassActive === !0 && o.$owlItems.removeClass("active"), o.visibleItems = [], e = o.currentItem; e < o.currentItem + o.options.items; e += 1)
                    o.visibleItems.push(e), o.options.addClassActive === !0 && t(o.$owlItems[e]).addClass("active");
                o.owl.visibleItems = o.visibleItems;
            },
            transitionTypes: function (t) {
                var e = this;
                (e.outClass = "owl-" + t + "-out"), (e.inClass = "owl-" + t + "-in");
            },
            singleItemTransition: function () {
                function t(t) {
                    return { position: "relative", left: t + "px" };
                }
                var e = this,
                    o = e.outClass,
                    i = e.inClass,
                    n = e.$owlItems.eq(e.currentItem),
                    s = e.$owlItems.eq(e.prevItem),
                    a = Math.abs(e.positionsInArray[e.currentItem]) + e.positionsInArray[e.prevItem],
                    r = Math.abs(e.positionsInArray[e.currentItem]) + e.itemWidth / 2,
                    l = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
                (e.isTransition = !0),
                    e.$owlWrapper.addClass("owl-origin").css({ "-webkit-transform-origin": r + "px", "-moz-perspective-origin": r + "px", "perspective-origin": r + "px" }),
                    s
                        .css(t(a, 10))
                        .addClass(o)
                        .on(l, function () {
                            (e.endPrev = !0), s.off(l), e.clearTransStyle(s, o);
                        }),
                    n.addClass(i).on(l, function () {
                        (e.endCurrent = !0), n.off(l), e.clearTransStyle(n, i);
                    });
            },
            clearTransStyle: function (t, e) {
                var o = this;
                t.css({ position: "", left: "" }).removeClass(e), o.endPrev && o.endCurrent && (o.$owlWrapper.removeClass("owl-origin"), (o.endPrev = !1), (o.endCurrent = !1), (o.isTransition = !1));
            },
            owlStatus: function () {
                var t = this;
                t.owl = {
                    userOptions: t.userOptions,
                    baseElement: t.$elem,
                    userItems: t.$userItems,
                    owlItems: t.$owlItems,
                    currentItem: t.currentItem,
                    prevItem: t.prevItem,
                    visibleItems: t.visibleItems,
                    isTouch: t.browser.isTouch,
                    browser: t.browser,
                    dragDirection: t.dragDirection,
                };
            },
            clearEvents: function () {
                var i = this;
                i.$elem.off(".owl owl mousedown.disableTextSelect"), t(o).off(".owl owl"), t(e).off("resize", i.resizer);
            },
            unWrap: function () {
                var t = this;
                0 !== t.$elem.children().length && (t.$owlWrapper.unwrap(), t.$userItems.unwrap().unwrap(), t.owlControls && t.owlControls.remove()),
                    t.clearEvents(),
                    t.$elem.attr("style", t.$elem.data("owl-originalStyles") || "").attr("class", t.$elem.data("owl-originalClasses"));
            },
            destroy: function () {
                var t = this;
                t.stop(), e.clearInterval(t.checkVisible), t.unWrap(), t.$elem.removeData();
            },
            reinit: function (e) {
                var o = this,
                    i = t.extend({}, o.userOptions, e);
                o.unWrap(), o.init(i, o.$elem);
            },
            addItem: function (t, e) {
                var o,
                    i = this;
                return t
                    ? 0 === i.$elem.children().length
                        ? (i.$elem.append(t), i.setVars(), !1)
                        : (i.unWrap(), (o = void 0 === e || -1 === e ? -1 : e), o >= i.$userItems.length || -1 === o ? i.$userItems.eq(-1).after(t) : i.$userItems.eq(o).before(t), void i.setVars())
                    : !1;
            },
            removeItem: function (t) {
                var e,
                    o = this;
                return 0 === o.$elem.children().length ? !1 : ((e = void 0 === t || -1 === t ? -1 : t), o.unWrap(), o.$userItems.eq(e).remove(), void o.setVars());
            },
        };
        (t.fn.owlCarousel = function (e) {
            return this.each(function () {
                if (t(this).data("owl-init") === !0) return !1;
                t(this).data("owl-init", !0);
                var o = Object.create(i);
                o.init(e, this), t.data(this, "owlCarousel", o);
            });
        }),
            (t.fn.owlCarousel.options = {
                items: 4,
                itemsCustom: !1,
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: !1,
                itemsTablet: [768, 3],
                itemsTabletSmall: !1,
                itemsMobile: [767, 1],
                singleItem: !1,
                itemsScaleUp: !1,
                stagePadding: 30,
                slideSpeed: 200,
                paginationSpeed: 800,
                rewindSpeed: 1e3,
                autoPlay: !1,
                stopOnHover: !1,
                navigation: !1,
                navigationText: ["prev", "next"],
                rewindNav: !0,
                scrollPerPage: !1,
                pagination: !0,
                paginationNumbers: !1,
                responsive: !0,
                responsiveRefreshRate: 200,
                responsiveBaseWidth: e,
                baseClass: "owl-carousel",
                theme: "owl-theme",
                lazyLoad: !1,
                lazyFollow: !0,
                lazyEffect: "fade",
                autoHeight: !1,
                jsonPath: !1,
                jsonSuccess: !1,
                dragBeforeAnimFinish: !0,
                mouseDrag: !0,
                touchDrag: !0,
                addClassActive: !1,
                transitionStyle: !1,
                beforeUpdate: !1,
                afterUpdate: !1,
                beforeInit: !1,
                afterInit: !1,
                beforeMove: !1,
                afterMove: !1,
                afterAction: !1,
                startDragging: !1,
                afterLazyLoad: !1,
            });
    })(jQuery, window, document);
