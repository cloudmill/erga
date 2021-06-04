// fullpage
import fullpage from "fullpage.js";
import "fullpage.js/vendors/scrolloverflow.min";
const { detect } = require("detect-browser");

export const fullpage_init = function () {
    const browser = detect();
    let body = false;
    new fullpage("#fullpage", {
        // responsiveWidth: 767,
        anchors: ["one", "two", "three", "four", "five", "six"],
        scrollingSpeed: 1700,
        css3: true,
        // dragAndMove: true,
        fitToSection: true,
        fitToSectionDelay: 2000,
        // autoScrolling: false,
        // scrollOverflow:true,
        normalScrollElements: ".section__scheme",
        navigation: true,
        navigationPosition: "left",
        afterLoad: function (origin, destination) {
            const a_table = [
                "main",
                "slider",
                "trademark",
                "mat",
                "support",
                "history",
                "sert",
            ];
            for (let i = 0; i < a_table.length; i++) {
                $(".section__" + a_table[i] + ".active .aos-init").addClass(
                    "aos-animate"
                );
            }
            $(".section__scheme.active .aos-act").addClass("aos-animate");
            body = $("body").hasClass("fp-viewing-four");

            const nums = destination.index + 1;
            $(".paginNumber").html("0" + nums + "<span> / 06</span>");
        },
        onLeave: function (index, nextIndex, direction) {
            if (nextIndex.anchor == "one") {
                if (startParticle) startParticle();
            } else {
                if (stopParticle) stopParticle();
            }
            setTimeout(() => $(".aos-init").removeClass("aos-animate"), 1500);
            const getCurrentIndex = index.index + 1;
            if (direction == "up") {
                $(".section").removeClass("down");
                $(".section").removeClass("next");
                $(".section").removeClass("prev");
                $("#fullpage .section:nth-child(" + getCurrentIndex + ")").addClass(
                    "up"
                );
                $("#fullpage .section:nth-child(" + getCurrentIndex + ")")
                    .next()
                    .addClass("next");
                $("#fullpage .section:nth-child(" + getCurrentIndex + ")")
                    .prev()
                    .addClass("prev");
                // $("#fullpage.about .section:nth-child("+getCurrentIndex+")").next().addClass("next up");
                // $("#fullpage.about .section:nth-child("+getCurrentIndex+")").prev().addClass("prev up");
            } else {
                $(".section").removeClass("up");
                $(".section").removeClass("next");
                $(".section").removeClass("prev");
                // if(nextIndex.index === 1) {
                // setTimeout(() => $("#fullpage .section__main").addClass("up"), 1000);
                // };
                $("#fullpage .section:nth-child(" + getCurrentIndex + ")").addClass(
                    "down"
                );
                $("#fullpage .section:nth-child(" + getCurrentIndex + ")")
                    .next()
                    .addClass("next");
                $("#fullpage .section:nth-child(" + getCurrentIndex + ")")
                    .prev()
                    .addClass("prev");
                // $("#fullpage.about .section:nth-child("+getCurrentIndex+")").next().addClass("next down");
                // $("#fullpage.about .section:nth-child("+getCurrentIndex+")").prev().addClass("prev down");
            }
        },
    });

    $(".arrow--js-up").click(function () {
        fullpage_api.moveSectionUp();
    });
    $(".arrow--js-down").click(function () {
        fullpage_api.moveSectionDown();
    });

    $(".scrollable-content").scroll(function () {
        if ($(this).find(".section__bottom-inner").position().top < 0) {
            $(".page-header").addClass("white");
        } else {
            $(".page-header").removeClass("white");
        }
        onScreen($(".section__bottom .aos-init:not(.aos-animate)"));
    });

    if (browser.name === 'firefox') {
        $(window).bind('wheel', function () {
            if ($('body.index #fullpage').length) {
                if ($('.scrollable-content').scrollTop() === 0) {
                    fullpage_api.setMouseWheelScrolling(true);
                    fullpage_api.setAllowScrolling(true);
                } else {
                    fullpage_api.setMouseWheelScrolling(false);
                    fullpage_api.setAllowScrolling(false);
                }
            }
        });
    } else {
        $(window).bind('mousewheel', function () {
            if ($('body.index #fullpage').length) {
                console.log($('.scrollable-content').scrollTop());
                if ($('.scrollable-content').scrollTop() === 0) {
                    fullpage_api.setMouseWheelScrolling(true);
                    fullpage_api.setAllowScrolling(true);
                } else {
                    fullpage_api.setMouseWheelScrolling(false);
                    fullpage_api.setAllowScrolling(false);
                }
            }
        });
    }
};

function onScreen(elements) {
    const height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    elements.each((index, item) => {
        const jItem = $(item);
        const topPosition = jItem[0].getClientRects()[0].top;
        if (topPosition < height && topPosition > 0) {
            jItem.addClass("aos-animate");
        } else {
            jItem.removeClass("aos-animate");
        }
    });
}
