(function ($2) {
    "use strict";
    $2(window).load(function () {
        $2("button#add").addClass("animation"), $2("#collection-header .image").addClass("animation");
    }),
        $2(document).ready(function () {
            $2(".page-loader div").delay(0).fadeOut(), $2(".page-loader").delay(200).fadeOut("slow"), $2("header").midnight(), $2(window).trigger("resize"), init_owl_carousel(), init_fancybox(), js_height_init();
        }),
        $2(window).resize(function () {
            js_height_init(),
                $2(".large-title, #instagram h3, .punchline").each(function () {
                    $2(this).strech_text();
                });
        });
})(jQuery);
var $menu = $("#drawer");
$(".nav-trigger a").on("click", function (e) {
    e.preventDefault(),
        $(".hamburger").toggleClass("open"),
        $menu.hasClass("open")
            ? $menu.removeClass("open")
            : ($menu.addClass("open"),
              $(document).one("click", function closeTooltip(e2) {
                  $menu.has(e2.target).length === 0 && $(".nav-trigger a").has(e2.target).length === 0 ? ($menu.removeClass("open"), $(".hamburger").removeClass("open")) : $menu.hasClass("open") && $(document).one("click", closeTooltip);
              }));
}),
    $(window).scroll(function () {
        $(this).scrollTop() > $(window).height() - 10 ? $("body.home header .logo").fadeIn() : $("body.home header .logo").fadeOut();
    }),
    $(window).scroll(function () {
        $(this).scrollTop() > $(window).height() / 2 ? $(".scroll-btn").fadeOut() : $(".scroll-btn").fadeIn();
    }),
    $(window).scroll(function () {
        $(this).scrollTop() < $(window).height() - 10 && $(".dotstyle ul li:nth-child(1)").addClass("active"),
            $(this).scrollTop() > $(window).height() - 10 ? ($(".dotstyle ul li:nth-child(2)").addClass("active"), $(".dotstyle ul li:nth-child(1)").removeClass("active")) : $(".dotstyle ul li:nth-child(2)").removeClass("active"),
            $(this).scrollTop() > $(window).height() * 2 - 10 ? ($(".dotstyle ul li:nth-child(3)").addClass("active"), $(".dotstyle ul li:nth-child(2)").removeClass("active")) : $(".dotstyle ul li:nth-child(3)").removeClass("active"),
            $(this).scrollTop() > $(window).height() * 3 - 10
                ? ($(".dotstyle ul li:nth-child(4)").addClass("active"), $(".dotstyle").removeClass("inverted"), $(".dotstyle ul li:nth-child(3)").removeClass("active"))
                : $(".dotstyle ul li:nth-child(4)").removeClass("active"),
            $(this).scrollTop() > $(window).height() * 4 - 10
                ? ($(".dotstyle ul li:nth-child(5)").addClass("active"), $(".dotstyle").addClass("inverted"), $(".dotstyle ul li:nth-child(4)").removeClass("active"))
                : $(".dotstyle ul li:nth-child(5)").removeClass("active"),
            $(this).scrollTop() > $(window).height() * 5 - 10
                ? ($(".dotstyle ul li:nth-child(6)").addClass("active"), $(".dotstyle").addClass("inverted"), $(".dotstyle ul li:nth-child(5)").removeClass("active"))
                : $(".dotstyle ul li:nth-child(6)").removeClass("active"),
            $(this).scrollTop() > $(window).height() * 6 - 10
                ? ($(".dotstyle ul li:nth-child(7)").addClass("active"), $(".dotstyle").addClass("inverted"), $(".dotstyle ul li:nth-child(6)").removeClass("active"))
                : $(".dotstyle ul li:nth-child(7)").removeClass("active");
    }),
    $(document).ready(function () {
        $(".tab-1").addClass("active"),
            $("#tab-2").hide(),
            $("#tab-3").hide(),
            $("#tab-4").hide(),
            $(".tab-1").click(function () {
                return (
                    $(this).addClass("active"), $(".tab-2").removeClass("active"), $(".tab-3").removeClass("active"), $(".tab-4").removeClass("active"), $("#tab-1").fadeIn(), $("#tab-2").hide(), $("#tab-3").hide(), $("#tab-4").hide(), !1
                );
            }),
            $(".tab-2").click(function () {
                return (
                    $(this).addClass("active"), $(".tab-1").removeClass("active"), $(".tab-3").removeClass("active"), $(".tab-4").removeClass("active"), $("#tab-1").hide(), $("#tab-2").fadeIn(), $("#tab-3").hide(), $("#tab-4").hide(), !1
                );
            }),
            $(".tab-3").click(function () {
                return (
                    $(this).addClass("active"), $(".tab-1").removeClass("active"), $(".tab-2").removeClass("active"), $(".tab-4").removeClass("active"), $("#tab-1").hide(), $("#tab-2").hide(), $("#tab-3").fadeIn(), $("#tab-4").hide(), !1
                );
            }),
            $(".tab-4").click(function () {
                return (
                    $(this).addClass("active"), $(".tab-1").removeClass("active"), $(".tab-2").removeClass("active"), $(".tab-3").removeClass("active"), $("#tab-1").hide(), $("#tab-2").hide(), $("#tab-3").hide(), $("#tab-4").fadeIn(), !1
                );
            });
    });
function init_owl_carousel() {
    (function ($2) {
        "use strict";
        $2("#product-images .slider").owlCarousel({
            slideSpeed: 500,
            autoPlay: 6e3,
            transitionStyle: "fade",
            singleItem: !0,
            navigation: !0,
            pagination: !0,
            navigationText: ["<i class='ti ti-angle-left'></i>", "<i class='ti ti-angle-right'></i>"],
        });
    })(jQuery);
}
function init_fancybox() {
    (function ($2) {
        $2(".fancybox").fancybox({
            afterShow: function () {
                $2(".fancybox-inner").contents().find("input:first").attr("tabindex", 1).focus();
            },
        });
    })(jQuery);
}
function js_height_init() {
    (function ($2) {
        $2(".js-height-full, section#full, #storemapper").height($2(window).height() * 1),
            $2(".js-height-collection").height($2(window).height() * 0.6),
            $2(".js-height-parent").each(function () {
                $2(this).height($2(this).parent().first().height());
            }),
            $2(window).width() > 768 && $2("#product-images .slider").height($2(window).height() * 0.8);
    })(jQuery);
}
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop(),
        docViewBottom = docViewTop + $(window).height(),
        elemTop = $(elem).offset().top,
        elemBottom = elemTop + $(elem).height();
    return elemBottom <= docViewBottom && elemTop >= docViewTop;
}
$(window).scroll(function () {
    $(".long-btn").each(function () {
        isScrolledIntoView(this) === !0 && $(this).addClass("animation");
    });
});
var ImgSwitch = $("img.image-switch").data("src"),
    img = $("img.image-switch");
$(window).resize(function () {
    $(window).width() < 1e3 && img.attr("src", ImgSwitch);
});
