//$(document).ready(function () {
  function set_height() {
    $(".dropdown_wrapper").css({
        height: "fit-content"
    });
    $(".btn_menu").click(function (e) {
        $(".btn_menu").hasClass("active") ? ($(this).removeClass("active"), $(".menu_icon_wrapper").removeClass("active"), $("header").removeClass("menu_active"), setTimeout(function () {
            $(".btn_menu").addClass("animate")
        }, 100), $(".mega_menu_wrapper").slideUp(300, function () {
            $(this).removeClass("mega_menu_active")
        })) : ($(".search_btn").removeClass("search_link_active"), $(".search_wrapper").slideUp(), $(this).removeClass("animate"), setTimeout(function () {
            $(".btn_menu, .menu_icon_wrapper").addClass("active"), $("header").addClass("menu_active")
        }, 100), $(".mega_menu_wrapper").slideDown(300, function () {
            $(".mega_menu_wrapper").addClass("mega_menu_active");
            //this is only used to set default in first use case of menu
            if (!$(".lvl1menu>li").hasClass("active")) {
                $(window).width() >= 992 && ($(".lvl1menu>li:first-child").addClass("active"), $(".lvl1menu>li:first-child>.dropdown_wrapper").addClass("active"), $(".lvl1menu>li>.dropdown_wrapper>ul>li").each(function (e, a) {
                    if ($(this).children(".dropdown_wrapper").length > 0) return $(this).addClass("active"), $(this).children(".dropdown_wrapper").addClass("active"), !1
                }))
            }
            //for mobile screen
            else if ($(window).width() <= 991) {
                $(".lvl1menu>li>.dropdown_wrapper>ul>li").each(function (e, a) {
                    if ($(this).children(".dropdown_wrapper").length > 0) return $(this).addClass("active"), $(this).children(".dropdown_wrapper").addClass("active"), !1
                })
            }
            setTimeout(function () {
                if ($(window).width() >= 992) {
                    var e = $(".lvl2menu .dropdown_wrapper.active").innerHeight();
                    if (e < 720) e = 720;
                    $(".lvl2menu .dropdown_wrapper.active").parents(".dropdown_wrapper").css("height", e + "px");
                }
            }, 300);
        }))
    });
}
$(document).ready(function (e) {
    set_height(), $(".mega_menu_wrapper").addClass("mega_menu_set"), $("header").addClass("header_set")
}), $(window).resize(function () {
    var e = $(".lvl2menu .dropdown_wrapper.active").innerHeight();
    if (e < 720) e = 720;
    $(".lvl2menu .dropdown_wrapper.active").css("height", e + "px");
}), $(".search_btn").click(function (e) {
    e.preventDefault(), $(this).hasClass("search_link_active") ? ($(this).removeClass("search_link_active"), $(".search_wrapper").slideUp()) : ($(".btn_menu").removeClass("active"), $(".menu_icon_wrapper").removeClass("active"), $("header").removeClass("menu_active"), setTimeout(function () {
        $(".btn_menu").addClass("animate")
    }, 100), $(".mega_menu_wrapper").slideUp(300, function () {
        $(this).removeClass("mega_menu_active")
    }), $(".mega_menu_wrapper").find("ul").each(function (e, a) {
        $(this).children("li").each(function (e, a) {
            $(this).removeClass("active"), $(this).children(".dropdown_wrapper").removeClass("active"), $(this).children(".dropdown_wrapper").children("ul.lvl2menu").children("li").each(function (e, a) {
                $(this).removeClass("active"), $(this).children(".dropdown_wrapper").removeClass("active")
            })
        })
    }), $(this).addClass("search_link_active"), $(".search_wrapper").slideDown())
}),
    //merged mouseover and mouseleave function to click event in order to remove hover selection
    $(".mega_menu_wrapper li").click(function () {
        $(this).hasClass("active") || $(this).hasClass("no_submenu") || $(window).width() >= 992 && ($(this).closest("ul").children("li").each(function (e, a) {
            $(this).removeClass("active"), $(this).children(".dropdown_wrapper").removeClass("active"), $(this).children(".dropdown_wrapper").children("ul.lvl2menu").children("li").each(function (e, a) {
                $(this).removeClass("active"), $(this).children(".dropdown_wrapper").removeClass("active")
            })
        }), $(this).addClass("active"), $(this).children(".dropdown_wrapper").addClass("active"), $(this).children(".dropdown_wrapper").children("ul.lvl2menu").children("li").each(function (e, a) {
            if ($(this).children(".dropdown_wrapper").length > 0) return $(this).addClass("active"), $(this).children(".dropdown_wrapper").addClass("active"), !1
        }));
        if ($(window).width() >= 992) {
            var e = $(".lvl2menu .dropdown_wrapper.active").innerHeight();
            if (e < 720) e = 720;
            $(".lvl2menu .dropdown_wrapper.active").parents(".dropdown_wrapper").css("height", e + "px");
        }
        else {
            var e = $(".lvl1menu .dropdown_wrapper.active").innerHeight();
            $(".lvl1menu .dropdown_wrapper.active").parents(".dropdown_wrapper").css("height", e + "px");
        }
    }),
    $(".mega_menu_wrapper .lvl2menu li").click(function () {
        var e = $(".lvl2menu .dropdown_wrapper.active").innerHeight();
        // if(e < 720) e = 720;
        $(".lvl2menu").parents(".dropdown_wrapper.active").css("height", e + "px");
        $(".lvl1menu").parents(".dropdown_wrapper.active").css("height", e + "px");
    }),
    $(".mega_menu_wrapper li.no_submenu a").click(function (e) {
        $(this).siblings(".dropdown_wrapper").length > 0 && e.preventDefault(), $(this).siblings(".dropdown_wrapper").addClass("active");
    }), $(".lvl2menu>li.no_submenu:nth-child(1)>a").click(function (e) {
        // e.preventDefault()
    }),
    $(".mega_menu_wrapper li:not(.no_submenu) a").click(function (e) { //added jquery :not()function for exclude .no_submit
        $(this).siblings(".dropdown_wrapper").length > 0 && e.preventDefault(), $(this).siblings(".dropdown_wrapper").addClass("active")
    }), $(".lvl2menu>li:nth-child(1):not(.no_submenu)>a").click(function (e) {
        // e.preventDefault()
    }),
    $(".back-btn").click(function (e) {
        e.preventDefault(), $(this).closest(".dropdown_wrapper").removeClass("active");
        $(".dropdown_wrapper").css({
            height: "unset"
        });
    }), $('.mega_menu_wrapper ul[class*=" lvl"]>li>a').each(function (e, a) {
        0 == $(this).siblings(".dropdown_wrapper").length && $(this).parent("li").addClass("no_submenu")
    });



$("ul.menu_posts_list").each(function (n, i) {
    $(this).children("li").each(function (n, i) {
        var a = $(this).children("a").children("span").text().trim().split(" "),
            s = a.pop(),
            h = a.join(" ") + (a.length > 0 ? " <span class='arrow-wrap'>" + s + " <i class='fa fa-chevron-right ml-2 post-link-arrow'></i> </span>" : s);
        $(this).children("a").children("span").html(h)
    })
}), $("ul.w_tags").each(function (n, i) {
    $(this).children("li").each(function (n, i) {
        var a = $(this).children("a").children("span").children("span").html();
        $(this).children("a").children("span").children("span").remove();
        if (a === undefined) {
            var s = $(this).children("a").children("span").text().trim().split(" "),
                h = s.pop(),
                l = s.join(" ") + (s.length >= 0 ? " <span class='tag-wrap'>" + h + " </span>" : h);
        }
        else {
            var s = $(this).children("a").children("span").text().trim().split(" "),
                h = s.pop(),
                l = s.join(" ") + (s.length >= 0 ? " <span class='tag-wrap'>" + h + " <span class='list-tag trans3ms'>" + a + "</span> </span>" : h);
        }

        $(this).children("a").children("span").html(l)


    })
});

//}
