/*! For license information please see app.js.LICENSE.txt */
!(function (t) {
  function e(e) {
    for (
      var s, a, o = e[0], h = e[1], l = e[2], u = 0, p = [];
      u < o.length;
      u++
    )
      (a = o[u]),
        Object.prototype.hasOwnProperty.call(r, a) && r[a] && p.push(r[a][0]),
        (r[a] = 0);
    for (s in h) Object.prototype.hasOwnProperty.call(h, s) && (t[s] = h[s]);
    for (c && c(e); p.length; ) p.shift()();
    return n.push.apply(n, l || []), i();
  }
  function i() {
    for (var t, e = 0; e < n.length; e++) {
      for (var i = n[e], s = !0, o = 1; o < i.length; o++) {
        var h = i[o];
        0 !== r[h] && (s = !1);
      }
      s && (n.splice(e--, 1), (t = a((a.s = i[0]))));
    }
    return t;
  }
  var s = {},
    r = { 0: 0 },
    n = [];
  function a(e) {
    if (s[e]) return s[e].exports;
    var i = (s[e] = { i: e, l: !1, exports: {} });
    return t[e].call(i.exports, i, i.exports, a), (i.l = !0), i.exports;
  }
  (a.m = t),
    (a.c = s),
    (a.d = function (t, e, i) {
      a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (a.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (a.t = function (t, e) {
      if ((1 & e && (t = a(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (a.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var s in t)
          a.d(
            i,
            s,
            function (e) {
              return t[e];
            }.bind(null, s)
          );
      return i;
    }),
    (a.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return a.d(e, "a", e), e;
    }),
    (a.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (a.p = "");
  var o = (window.webpackJsonp = window.webpackJsonp || []),
    h = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var l = 0; l < o.length; l++) e(o[l]);
  var c = h;
  n.push([11, 1]), i();
})([
  function (t, e, i) {
    "use strict";
    (function (t) {
      i.d(e, "g", function () {
        return r;
      }),
        i.d(e, "f", function () {
          return n;
        }),
        i.d(e, "a", function () {
          return a;
        }),
        i.d(e, "b", function () {
          return o;
        }),
        i.d(e, "h", function () {
          return h;
        }),
        i.d(e, "i", function () {
          return l;
        }),
        i.d(e, "j", function () {
          return c;
        }),
        i.d(e, "k", function () {
          return u;
        }),
        i.d(e, "l", function () {
          return p;
        }),
        i.d(e, "m", function () {
          return f;
        }),
        i.d(e, "n", function () {
          return d;
        }),
        i.d(e, "o", function () {
          return _;
        }),
        i.d(e, "e", function () {
          return m;
        }),
        i.d(e, "d", function () {
          return M;
        }),
        i.d(e, "c", function () {
          return O;
        });
      var s = i(2),
        r = new s.a(".swiper-container", {
          effect: "coverflow",
          grabCursor: !0,
          centeredSlides: !0,
          slidesPerView: "auto",
          spaceBetween: 0,
          speed: 1500,
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: !0,
          },
          pagination: { el: ".swiper-pagination", clickable: !0 },
          navigation: {
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
          },
          on: {
            slideChangeTransitionStart: function () {
              t(".swiper-title").removeClass("active"),
                t(".swiper-title").addClass("remove");
              var e = t(
                  ".swiper-slide[data-slide=" + this.activeIndex + "]"
                ).data("title"),
                i =
                  '<div class="revealOut"><span class="revealIn">' +
                  e[0] +
                  "</span></div>",
                s = e[1]
                  ? '<div class="revealOut"><span class="revealIn">' +
                    e[1] +
                    "</span></div>"
                  : "";
              setTimeout(function () {
                t(".swiper-title").removeClass("remove"),
                  t(".swiper-title h2").html(i + s),
                  t(".swiper-title").addClass("active");
              }, 500);
            },
          },
        }),
        n = new s.a(".publ-container", {
          loop: !0,
          slidesPerView: 2,
          spaceBetween: 10,
          navigation: {
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
          },
          breakpoints: { 900: { slidesPerView: 1 } },
        }),
        a = new s.a(".swiper-carousel", {
          centeredSlides: !0,
          loop: !0,
          slidesPerView: "auto",
          spaceBetween: 10,
          pagination: { el: ".swiper-pagination--js", type: "fraction" },
          navigation: {
            nextEl: ".swiper-btnSN-next",
            prevEl: ".swiper-btnSN-prev",
          },
        }),
        o = new s.a(".swiper-carousel1", {
          centeredSlides: !0,
          loop: !0,
          slidesPerView: "auto",
          spaceBetween: 10,
          pagination: { el: ".swiper-pagination1--js", type: "fraction" },
          navigation: {
            nextEl: ".swiper-btnS1-next",
            prevEl: ".swiper-btnS1-prev",
          },
        }),
        h = new s.a(".trademark-carousel--js", {
          slidesPerView: "auto",
          spaceBetween: 0,
          navigation: {
            nextEl: ".swiper-btnS-next",
            prevEl: ".swiper-btnS-prev",
          },
        }),
        l = new s.a(".trademark-carousel1--js", {
          slidesPerView: "auto",
          spaceBetween: 0,
          navigation: {
            nextEl: ".swiper-btnS1-next",
            prevEl: ".swiper-btnS1-prev",
          },
        }),
        c = new s.a(".trademark-carousel2--js", {
          slidesPerView: "auto",
          spaceBetween: 20,
          navigation: {
            nextEl: ".swiper-btnS2-next",
            prevEl: ".swiper-btnS2-prev",
          },
        }),
        u = new s.a(".trademark-carousel3--js", {
          slidesPerView: "auto",
          spaceBetween: 0,
          navigation: {
            nextEl: ".swiper-btnS3-next",
            prevEl: ".swiper-btnS3-prev",
          },
        }),
        p = new s.a(".trademark-carousel4--js", {
          slidesPerView: "auto",
          spaceBetween: 0,
          navigation: {
            nextEl: ".swiper-btnS4-next",
            prevEl: ".swiper-btnS4-prev",
          },
        }),
        f = new s.a(".trademark-carousel5--js", {
          slidesPerView: "auto",
          spaceBetween: 0,
          navigation: {
            nextEl: ".swiper-btnS5-next",
            prevEl: ".swiper-btnS5-prev",
          },
        }),
        d = new s.a(".trademark-carousel6--js", {
          slidesPerView: "auto",
          spaceBetween: 0,
          navigation: {
            nextEl: ".swiper-btnS6-next",
            prevEl: ".swiper-btnS6-prev",
          },
        }),
        _ = new s.a(".trademark-carousel7--js", {
          slidesPerView: "auto",
          spaceBetween: 0,
          navigation: {
            nextEl: ".swiper-btnS7-next",
            prevEl: ".swiper-btnS7-prev",
          },
        }),
        m = new s.a(".menu-carousel", {
          loop: !0,
          slidesPerView: "auto",
          mousewheel: !0,
          grabCursor: !0,
          freeMode: !0,
          freeModeMomentumBounce: !1,
          freeModeMomentumRatio: 0.1,
          freeModeMomentumVelocityRatio: 0.8,
          freeModeSticky: !0,
        });
      t(".menu-carousel.swiper-container").hover(
        function () {
          t(".status").html("mouseenter"), S();
        },
        function () {
          t(".status").html("mouseleave"), k();
        }
      );
      var g = 0,
        v = [0, 0],
        y = !1,
        x = document.getElementById("dragger-js");
      x.addEventListener(
        "mousedown",
        function (t) {
          (y = !0), (v = [x.offsetLeft - t.clientX]);
        },
        !0
      ),
        document.addEventListener(
          "mouseup",
          function () {
            (y = !1), k();
          },
          !0
        ),
        document.addEventListener(
          "mousemove",
          function (e) {
            e.preventDefault(),
              y &&
                (e.pageX > g
                  ? S()
                  : e.pageX < g &&
                    ((P =
                      5e4 +
                      (t(".menu-carousel .swiper-wrapper").position().left /
                        w) *
                        1e3),
                    t(".menu-carousel .swiper-wrapper")
                      .stop()
                      .animate({ left: b }, P, "linear", function () {
                        C();
                      })),
                (x.style.left = e.clientX + v[0] + "px"),
                (x.style.right = "auto"),
                (x.style.margin = "0"),
                (g = e.pageX));
          },
          !0
        );
      var w = t(".menu-carousel .swiper-slide").outerWidth(),
        T = t(".menu-carousel .swiper-slide").length - 1,
        b = w * T,
        P =
          5e4 + (t(".menu-carousel .swiper-wrapper").position().left / w) * 1e3;
      function S() {
        (P =
          5e4 +
          (t(".menu-carousel .swiper-wrapper").position().left / w) * 1e3),
          t(".menu-carousel .swiper-wrapper")
            .stop()
            .animate({ left: -b }, P, "linear", function () {
              C();
            });
      }
      function k() {
        t(".menu-carousel .swiper-wrapper").stop().animate();
      }
      function C() {
        t(".menu-carousel .swiper-wrapper")
          .stop()
          .animate({ left: 0 }, 1e3, "linear", function () {
            S();
          });
      }
      var M = new s.a(".gallery-top", {
          spaceBetween: 10,
          loop: !1,
          slidesPerView: 1,
          pagination: { el: ".swiper-pagination", type: "fraction" },
          navigation: {
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
          },
          on: {
            slideChange: function () {
              t(".gallery-thumbs__item").removeClass("active"),
                t(
                  ".gallery-thumbs__item[data-slide=" + this.activeIndex + "]"
                ).addClass("active");
            },
          },
        }),
        O = t(".gallery-thumbs__item").click(function () {
          var e = t(this).data("slide");
          M.slideTo(e);
        });
    }.call(this, i(1)));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, i) {
    "use strict";
    (function (t) {
      i.d(e, "a", function () {
        return n;
      });
      var s = i(8),
        r = i.n(s),
        n =
          (i(13),
          function () {
            new r.a("#fullpage", {
              anchors: ["one", "two", "three", "four", "five", "six"],
              scrollingSpeed: 1700,
              css3: !0,
              fitToSection: !0,
              fitToSectionDelay: 2e3,
              normalScrollElements: ".section__scheme",
              navigation: !0,
              navigationPosition: "left",
              afterLoad: function (e, i) {
                for (
                  var s = [
                      "main",
                      "slider",
                      "trademark",
                      "mat",
                      "support",
                      "history",
                      "sert",
                    ],
                    r = 0;
                  r < s.length;
                  r++
                )
                  t(".section__" + s[r] + ".active .aos-init").addClass(
                    "aos-animate"
                  );
                t(".section__scheme.active .aos-act").addClass("aos-animate"),
                  t("body").hasClass("fp-viewing-four");
                var n = i.index + 1;
                t(".paginNumber").html("0" + n + "<span> / 06</span>");
              },
              onLeave: function (e, i, s) {
                setTimeout(function () {
                  return t(".aos-init").removeClass("aos-animate");
                }, 1500);
                var r = e.index + 1;
                "up" == s
                  ? (t(".section").removeClass("down"),
                    t(".section").removeClass("next"),
                    t(".section").removeClass("prev"),
                    t("#fullpage .section:nth-child(" + r + ")").addClass("up"),
                    t("#fullpage .section:nth-child(" + r + ")")
                      .next()
                      .addClass("next"),
                    t("#fullpage .section:nth-child(" + r + ")")
                      .prev()
                      .addClass("prev"))
                  : (t(".section").removeClass("up"),
                    t(".section").removeClass("next"),
                    t(".section").removeClass("prev"),
                    t("#fullpage .section:nth-child(" + r + ")").addClass(
                      "down"
                    ),
                    t("#fullpage .section:nth-child(" + r + ")")
                      .next()
                      .addClass("next"),
                    t("#fullpage .section:nth-child(" + r + ")")
                      .prev()
                      .addClass("prev"));
              },
            }),
              t(".arrow--js-up").click(function () {
                fullpage_api.moveSectionUp();
              }),
              t(".arrow--js-down").click(function () {
                fullpage_api.moveSectionDown();
              }),
              t(".scrollable-content").scroll(function () {
                var e, i;
                t(this).find(".section__bottom-inner").position().top < 0
                  ? t(".page-header").addClass("white")
                  : t(".page-header").removeClass("white"),
                  (e = t(".section__bottom .aos-init:not(.aos-animate)")),
                  (i =
                    window.innerHeight ||
                    document.documentElement.clientHeight ||
                    document.body.clientHeight),
                  e.each(function (e, s) {
                    var r = t(s),
                      n = r[0].getClientRects()[0].top;
                    n < i && n > 0
                      ? r.addClass("aos-animate")
                      : r.removeClass("aos-animate");
                  });
              }),
              t(window).bind("mousewheel", function () {
                t("body.index #fullpage").length &&
                  (0 === t(".scrollable-content").scrollTop()
                    ? (fullpage_api.setMouseWheelScrolling(!0),
                      fullpage_api.setAllowScrolling(!0))
                    : (fullpage_api.setMouseWheelScrolling(!1),
                      fullpage_api.setAllowScrolling(!1)));
              });
          });
    }.call(this, i(1)));
  },
  ,
  ,
  function (t, e, i) {
    "use strict";
    (function (t) {
      function s(e, i) {
        var s = t(e);
        s.length &&
          !s.is(i.target) &&
          0 === s.has(i.target).length &&
          s.removeClass("active");
      }
      i.d(e, "a", function () {
        return s;
      }),
        t(".anchor").on("click", "a", function (e) {
          e.preventDefault();
          var i = t(this).attr("href"),
            s = t(i).offset().top;
          t("body,html").animate({ scrollTop: s + 40 }, 1e3);
        }),
        t(".main-nav__toggle--js").click(function () {
          t(this).next().slideToggle();
        });
    }.call(this, i(1)));
  },
  function (t, e, i) {
    "use strict";
    i.r(e),
      function (t) {
        i(12);
        var e,
          s = i(7),
          r = i(0),
          n = i(3),
          a = i.n(n),
          o = i(9),
          h = i.n(o);
        i(14),
          i(16),
          i(17),
          t(document).ready(function () {
            i(18),
              i(19),
              i(23),
              r.e,
              r.g,
              r.a,
              r.b,
              r.f,
              r.d,
              r.c,
              r.h,
              r.i,
              r.j,
              Object(s.a)();
          }),
          t(window).on("resize orientationchange", function () {
            (e = Math.max(
              document.documentElement.clientWidth,
              window.innerWidth || 0
            )) < 768 &&
              t("#fullpage").length &&
              fullpage_api.destroy("all");
          }),
          window.addEventListener(
            "resize",
            function () {
              a.a.refresh({ offset: -80 });
            },
            !1
          ),
          t(window).on("load", function () {
            (e = Math.max(
              document.documentElement.clientWidth,
              window.innerWidth || 0
            )),
              setTimeout(function () {
                t(".loader-outer").addClass("active"),
                  setTimeout(function () {
                    if (
                      (t(".loader").addClass("hidden"),
                      i(24),
                      i(26),
                      a.a.init({ offset: -80 }),
                      e > 767 && t(".rellax").length)
                    )
                      new h.a(".rellax", {
                        speed: 2,
                        center: !0,
                        wrapper: ".scrollable-content",
                        vertical: !0,
                        horizontal: !1,
                      });
                    e < 768 &&
                      t("#fullpage").length &&
                      fullpage_api.destroy("all");
                  }, 1e3);
              }, 500);
          });
      }.call(this, i(1));
  },
  function (t, e, i) {},
  ,
  function (t, e, i) {
    "use strict";
    i.r(e),
      function (t) {
        i(15);
        if (t(".aboutZoom svg").length) {
          var e = document.querySelector(".aboutZoom svg"),
            s = e.createSVGPoint();
          window.addEventListener("mousemove", function (t) {
            var i = (function (t) {
              return (
                (s.x = t.clientX),
                (s.y = t.clientY),
                s.matrixTransform(e.getScreenCTM().inverse())
              );
            })(t);
            TweenMax.to(".ring, .masker", 0.88, {
              attr: { cx: i.x, cy: i.y },
              ease: Power2.easeOut,
            });
          });
        }
        if (t(".aboutZoom2 svg").length) {
          var r = document.querySelector(".aboutZoom2 svg"),
            n = r.createSVGPoint();
          window.addEventListener("mousemove", function (t) {
            var e = (function (t) {
              return (
                (n.x = t.clientX),
                (n.y = t.clientY),
                n.matrixTransform(r.getScreenCTM().inverse())
              );
            })(t);
            TweenMax.to(".ring2, .masker2", 0.88, {
              attr: { cx: e.x, cy: e.y },
              ease: Power2.easeOut,
            });
          });
        }
      }.call(this, i(1));
  },
  function (t, e, i) {
    (function (i) {
      var s;
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var n = t.exports && void 0 !== i ? i : this || window;
      (n._gsQueue || (n._gsQueue = [])).push(function () {
        "use strict";
        var t, e, i, s, a, o, h, l, c, u, p, f, d, _, m, g;
        n._gsDefine(
          "TweenMax",
          ["core.Animation", "core.SimpleTimeline", "TweenLite"],
          function (t, e, i) {
            var s = function (t) {
                var e,
                  i = [],
                  s = t.length;
                for (e = 0; e !== s; i.push(t[e++]));
                return i;
              },
              r = function t(e, s, r) {
                i.call(this, e, s, r),
                  (this._cycle = 0),
                  (this._yoyo = !0 === this.vars.yoyo),
                  (this._repeat = this.vars.repeat || 0),
                  (this._repeatDelay = this.vars.repeatDelay || 0),
                  (this._dirty = !0),
                  (this.render = t.prototype.render);
              },
              n = 1e-10,
              a = i._internals,
              o = a.isSelector,
              h = a.isArray,
              l = (r.prototype = i.to({}, 0.1, {})),
              c = [];
            (r.version = "1.16.1"),
              (l.constructor = r),
              (l.kill()._gc = !1),
              (r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf),
              (r.getTweensOf = i.getTweensOf),
              (r.lagSmoothing = i.lagSmoothing),
              (r.ticker = i.ticker),
              (r.render = i.render),
              (l.invalidate = function () {
                return (
                  (this._yoyo = !0 === this.vars.yoyo),
                  (this._repeat = this.vars.repeat || 0),
                  (this._repeatDelay = this.vars.repeatDelay || 0),
                  this._uncache(!0),
                  i.prototype.invalidate.call(this)
                );
              }),
              (l.updateTo = function (t, e) {
                var s,
                  r = this.ratio,
                  n = this.vars.immediateRender || t.immediateRender;
                for (s in (e &&
                  this._startTime < this._timeline._time &&
                  ((this._startTime = this._timeline._time),
                  this._uncache(!1),
                  this._gc
                    ? this._enabled(!0, !1)
                    : this._timeline.insert(
                        this,
                        this._startTime - this._delay
                      )),
                t))
                  this.vars[s] = t[s];
                if (this._initted || n)
                  if (e) (this._initted = !1), n && this.render(0, !0, !0);
                  else if (
                    (this._gc && this._enabled(!0, !1),
                    this._notifyPluginsOfEnabled &&
                      this._firstPT &&
                      i._onPluginEvent("_onDisable", this),
                    this._time / this._duration > 0.998)
                  ) {
                    var a = this._time;
                    this.render(0, !0, !1),
                      (this._initted = !1),
                      this.render(a, !0, !1);
                  } else if (this._time > 0 || n) {
                    (this._initted = !1), this._init();
                    for (var o, h = 1 / (1 - r), l = this._firstPT; l; )
                      (o = l.s + l.c),
                        (l.c *= h),
                        (l.s = o - l.c),
                        (l = l._next);
                  }
                return this;
              }),
              (l.render = function (t, e, i) {
                this._initted ||
                  (0 === this._duration &&
                    this.vars.repeat &&
                    this.invalidate());
                var s,
                  r,
                  o,
                  h,
                  l,
                  u,
                  p,
                  f,
                  d = this._dirty ? this.totalDuration() : this._totalDuration,
                  _ = this._time,
                  m = this._totalTime,
                  g = this._cycle,
                  v = this._duration,
                  y = this._rawPrevTime;
                if (
                  (t >= d
                    ? ((this._totalTime = d),
                      (this._cycle = this._repeat),
                      this._yoyo && 0 != (1 & this._cycle)
                        ? ((this._time = 0),
                          (this.ratio = this._ease._calcEnd
                            ? this._ease.getRatio(0)
                            : 0))
                        : ((this._time = v),
                          (this.ratio = this._ease._calcEnd
                            ? this._ease.getRatio(1)
                            : 1)),
                      this._reversed ||
                        ((s = !0),
                        (r = "onComplete"),
                        (i = i || this._timeline.autoRemoveChildren)),
                      0 === v &&
                        (this._initted || !this.vars.lazy || i) &&
                        (this._startTime === this._timeline._duration &&
                          (t = 0),
                        (0 === t || 0 > y || y === n) &&
                          y !== t &&
                          ((i = !0), y > n && (r = "onReverseComplete")),
                        (this._rawPrevTime = f = !e || t || y === t ? t : n)))
                    : 1e-7 > t
                    ? ((this._totalTime = this._time = this._cycle = 0),
                      (this.ratio = this._ease._calcEnd
                        ? this._ease.getRatio(0)
                        : 0),
                      (0 !== m || (0 === v && y > 0)) &&
                        ((r = "onReverseComplete"), (s = this._reversed)),
                      0 > t &&
                        ((this._active = !1),
                        0 === v &&
                          (this._initted || !this.vars.lazy || i) &&
                          (y >= 0 && (i = !0),
                          (this._rawPrevTime = f =
                            !e || t || y === t ? t : n))),
                      this._initted || (i = !0))
                    : ((this._totalTime = this._time = t),
                      0 !== this._repeat &&
                        ((h = v + this._repeatDelay),
                        (this._cycle = (this._totalTime / h) >> 0),
                        0 !== this._cycle &&
                          this._cycle === this._totalTime / h &&
                          this._cycle--,
                        (this._time = this._totalTime - this._cycle * h),
                        this._yoyo &&
                          0 != (1 & this._cycle) &&
                          (this._time = v - this._time),
                        this._time > v
                          ? (this._time = v)
                          : 0 > this._time && (this._time = 0)),
                      this._easeType
                        ? ((l = this._time / v),
                          (1 === (u = this._easeType) ||
                            (3 === u && l >= 0.5)) &&
                            (l = 1 - l),
                          3 === u && (l *= 2),
                          1 === (p = this._easePower)
                            ? (l *= l)
                            : 2 === p
                            ? (l *= l * l)
                            : 3 === p
                            ? (l *= l * l * l)
                            : 4 === p && (l *= l * l * l * l),
                          (this.ratio =
                            1 === u
                              ? 1 - l
                              : 2 === u
                              ? l
                              : 0.5 > this._time / v
                              ? l / 2
                              : 1 - l / 2))
                        : (this.ratio = this._ease.getRatio(this._time / v))),
                  _ !== this._time || i || g !== this._cycle)
                ) {
                  if (!this._initted) {
                    if ((this._init(), !this._initted || this._gc)) return;
                    if (
                      !i &&
                      this._firstPT &&
                      ((!1 !== this.vars.lazy && this._duration) ||
                        (this.vars.lazy && !this._duration))
                    )
                      return (
                        (this._time = _),
                        (this._totalTime = m),
                        (this._rawPrevTime = y),
                        (this._cycle = g),
                        a.lazyTweens.push(this),
                        void (this._lazy = [t, e])
                      );
                    this._time && !s
                      ? (this.ratio = this._ease.getRatio(this._time / v))
                      : s &&
                        this._ease._calcEnd &&
                        (this.ratio = this._ease.getRatio(
                          0 === this._time ? 0 : 1
                        ));
                  }
                  for (
                    !1 !== this._lazy && (this._lazy = !1),
                      this._active ||
                        (!this._paused &&
                          this._time !== _ &&
                          t >= 0 &&
                          (this._active = !0)),
                      0 === m &&
                        (2 === this._initted && t > 0 && this._init(),
                        this._startAt &&
                          (t >= 0
                            ? this._startAt.render(t, e, i)
                            : r || (r = "_dummyGS")),
                        this.vars.onStart &&
                          (0 !== this._totalTime || 0 === v) &&
                          (e ||
                            this.vars.onStart.apply(
                              this.vars.onStartScope || this,
                              this.vars.onStartParams || c
                            ))),
                      o = this._firstPT;
                    o;

                  )
                    o.f
                      ? o.t[o.p](o.c * this.ratio + o.s)
                      : (o.t[o.p] = o.c * this.ratio + o.s),
                      (o = o._next);
                  this._onUpdate &&
                    (0 > t &&
                      this._startAt &&
                      this._startTime &&
                      this._startAt.render(t, e, i),
                    e ||
                      ((this._totalTime !== m || s) &&
                        this._onUpdate.apply(
                          this.vars.onUpdateScope || this,
                          this.vars.onUpdateParams || c
                        ))),
                    this._cycle !== g &&
                      (e ||
                        this._gc ||
                        (this.vars.onRepeat &&
                          this.vars.onRepeat.apply(
                            this.vars.onRepeatScope || this,
                            this.vars.onRepeatParams || c
                          ))),
                    r &&
                      (!this._gc || i) &&
                      (0 > t &&
                        this._startAt &&
                        !this._onUpdate &&
                        this._startTime &&
                        this._startAt.render(t, e, i),
                      s &&
                        (this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !e &&
                        this.vars[r] &&
                        this.vars[r].apply(
                          this.vars[r + "Scope"] || this,
                          this.vars[r + "Params"] || c
                        ),
                      0 === v &&
                        this._rawPrevTime === n &&
                        f !== n &&
                        (this._rawPrevTime = 0));
                } else
                  m !== this._totalTime &&
                    this._onUpdate &&
                    (e ||
                      this._onUpdate.apply(
                        this.vars.onUpdateScope || this,
                        this.vars.onUpdateParams || c
                      ));
              }),
              (r.to = function (t, e, i) {
                return new r(t, e, i);
              }),
              (r.from = function (t, e, i) {
                return (
                  (i.runBackwards = !0),
                  (i.immediateRender = 0 != i.immediateRender),
                  new r(t, e, i)
                );
              }),
              (r.fromTo = function (t, e, i, s) {
                return (
                  (s.startAt = i),
                  (s.immediateRender =
                    0 != s.immediateRender && 0 != i.immediateRender),
                  new r(t, e, s)
                );
              }),
              (r.staggerTo = r.allTo = function (t, e, n, a, l, u, p) {
                a = a || 0;
                var f,
                  d,
                  _,
                  m,
                  g = n.delay || 0,
                  v = [],
                  y = function () {
                    n.onComplete &&
                      n.onComplete.apply(n.onCompleteScope || this, arguments),
                      l.apply(p || this, u || c);
                  };
                for (
                  h(t) ||
                    ("string" == typeof t && (t = i.selector(t) || t),
                    o(t) && (t = s(t))),
                    t = t || [],
                    0 > a && ((t = s(t)).reverse(), (a *= -1)),
                    f = t.length - 1,
                    _ = 0;
                  f >= _;
                  _++
                ) {
                  for (m in ((d = {}), n)) d[m] = n[m];
                  (d.delay = g),
                    _ === f && l && (d.onComplete = y),
                    (v[_] = new r(t[_], e, d)),
                    (g += a);
                }
                return v;
              }),
              (r.staggerFrom = r.allFrom = function (t, e, i, s, n, a, o) {
                return (
                  (i.runBackwards = !0),
                  (i.immediateRender = 0 != i.immediateRender),
                  r.staggerTo(t, e, i, s, n, a, o)
                );
              }),
              (r.staggerFromTo = r.allFromTo = function (
                t,
                e,
                i,
                s,
                n,
                a,
                o,
                h
              ) {
                return (
                  (s.startAt = i),
                  (s.immediateRender =
                    0 != s.immediateRender && 0 != i.immediateRender),
                  r.staggerTo(t, e, s, n, a, o, h)
                );
              }),
              (r.delayedCall = function (t, e, i, s, n) {
                return new r(e, 0, {
                  delay: t,
                  onComplete: e,
                  onCompleteParams: i,
                  onCompleteScope: s,
                  onReverseComplete: e,
                  onReverseCompleteParams: i,
                  onReverseCompleteScope: s,
                  immediateRender: !1,
                  useFrames: n,
                  overwrite: 0,
                });
              }),
              (r.set = function (t, e) {
                return new r(t, 0, e);
              }),
              (r.isTweening = function (t) {
                return i.getTweensOf(t, !0).length > 0;
              });
            var u = function t(e, s) {
                for (var r = [], n = 0, a = e._first; a; )
                  a instanceof i
                    ? (r[n++] = a)
                    : (s && (r[n++] = a), (n = (r = r.concat(t(a, s))).length)),
                    (a = a._next);
                return r;
              },
              p = (r.getAllTweens = function (e) {
                return u(t._rootTimeline, e).concat(
                  u(t._rootFramesTimeline, e)
                );
              });
            (r.killAll = function (t, i, s, r) {
              null == i && (i = !0), null == s && (s = !0);
              var n,
                a,
                o,
                h = p(0 != r),
                l = h.length,
                c = i && s && r;
              for (o = 0; l > o; o++)
                (a = h[o]),
                  (c ||
                    a instanceof e ||
                    ((n = a.target === a.vars.onComplete) && s) ||
                    (i && !n)) &&
                    (t
                      ? a.totalTime(a._reversed ? 0 : a.totalDuration())
                      : a._enabled(!1, !1));
            }),
              (r.killChildTweensOf = function (t, e) {
                if (null != t) {
                  var n,
                    l,
                    c,
                    u,
                    p,
                    f = a.tweenLookup;
                  if (
                    ("string" == typeof t && (t = i.selector(t) || t),
                    o(t) && (t = s(t)),
                    h(t))
                  )
                    for (u = t.length; --u > -1; ) r.killChildTweensOf(t[u], e);
                  else {
                    for (c in ((n = []), f))
                      for (l = f[c].target.parentNode; l; )
                        l === t && (n = n.concat(f[c].tweens)),
                          (l = l.parentNode);
                    for (p = n.length, u = 0; p > u; u++)
                      e && n[u].totalTime(n[u].totalDuration()),
                        n[u]._enabled(!1, !1);
                  }
                }
              });
            var f = function (t, i, s, r) {
              (i = !1 !== i), (s = !1 !== s);
              for (
                var n, a, o = p((r = !1 !== r)), h = i && s && r, l = o.length;
                --l > -1;

              )
                (a = o[l]),
                  (h ||
                    a instanceof e ||
                    ((n = a.target === a.vars.onComplete) && s) ||
                    (i && !n)) &&
                    a.paused(t);
            };
            return (
              (r.pauseAll = function (t, e, i) {
                f(!0, t, e, i);
              }),
              (r.resumeAll = function (t, e, i) {
                f(!1, t, e, i);
              }),
              (r.globalTimeScale = function (e) {
                var s = t._rootTimeline,
                  r = i.ticker.time;
                return arguments.length
                  ? ((e = e || n),
                    (s._startTime =
                      r - ((r - s._startTime) * s._timeScale) / e),
                    (s = t._rootFramesTimeline),
                    (r = i.ticker.frame),
                    (s._startTime =
                      r - ((r - s._startTime) * s._timeScale) / e),
                    (s._timeScale = t._rootTimeline._timeScale = e),
                    e)
                  : s._timeScale;
              }),
              (l.progress = function (t) {
                return arguments.length
                  ? this.totalTime(
                      this.duration() *
                        (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                        this._cycle * (this._duration + this._repeatDelay),
                      !1
                    )
                  : this._time / this.duration();
              }),
              (l.totalProgress = function (t) {
                return arguments.length
                  ? this.totalTime(this.totalDuration() * t, !1)
                  : this._totalTime / this.totalDuration();
              }),
              (l.time = function (t, e) {
                return arguments.length
                  ? (this._dirty && this.totalDuration(),
                    t > this._duration && (t = this._duration),
                    this._yoyo && 0 != (1 & this._cycle)
                      ? (t =
                          this._duration -
                          t +
                          this._cycle * (this._duration + this._repeatDelay))
                      : 0 !== this._repeat &&
                        (t +=
                          this._cycle * (this._duration + this._repeatDelay)),
                    this.totalTime(t, e))
                  : this._time;
              }),
              (l.duration = function (e) {
                return arguments.length
                  ? t.prototype.duration.call(this, e)
                  : this._duration;
              }),
              (l.totalDuration = function (t) {
                return arguments.length
                  ? -1 === this._repeat
                    ? this
                    : this.duration(
                        (t - this._repeat * this._repeatDelay) /
                          (this._repeat + 1)
                      )
                  : (this._dirty &&
                      ((this._totalDuration =
                        -1 === this._repeat
                          ? 999999999999
                          : this._duration * (this._repeat + 1) +
                            this._repeatDelay * this._repeat),
                      (this._dirty = !1)),
                    this._totalDuration);
              }),
              (l.repeat = function (t) {
                return arguments.length
                  ? ((this._repeat = t), this._uncache(!0))
                  : this._repeat;
              }),
              (l.repeatDelay = function (t) {
                return arguments.length
                  ? ((this._repeatDelay = t), this._uncache(!0))
                  : this._repeatDelay;
              }),
              (l.yoyo = function (t) {
                return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
              }),
              r
            );
          },
          !0
        ),
          n._gsDefine(
            "TimelineLite",
            ["core.Animation", "core.SimpleTimeline", "TweenLite"],
            function (t, e, i) {
              var s = function (t) {
                  e.call(this, t),
                    (this._labels = {}),
                    (this.autoRemoveChildren =
                      !0 === this.vars.autoRemoveChildren),
                    (this.smoothChildTiming =
                      !0 === this.vars.smoothChildTiming),
                    (this._sortChildren = !0),
                    (this._onUpdate = this.vars.onUpdate);
                  var i,
                    s,
                    r = this.vars;
                  for (s in r)
                    (i = r[s]),
                      l(i) &&
                        -1 !== i.join("").indexOf("{self}") &&
                        (r[s] = this._swapSelfInParams(i));
                  l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger);
                },
                r = 1e-10,
                a = i._internals,
                o = (s._internals = {}),
                h = a.isSelector,
                l = a.isArray,
                c = a.lazyTweens,
                u = a.lazyRender,
                p = [],
                f = n._gsDefine.globals,
                d = function (t) {
                  var e,
                    i = {};
                  for (e in t) i[e] = t[e];
                  return i;
                },
                _ = (o.pauseCallback = function (t, e, i, s) {
                  var n,
                    a = t._timeline,
                    o = a._totalTime,
                    h = t._startTime,
                    l =
                      0 > t._rawPrevTime ||
                      (0 === t._rawPrevTime && a._reversed),
                    c = l ? 0 : r,
                    u = l ? r : 0;
                  if (e || !this._forcingPlayhead) {
                    for (a.pause(h), n = t._prev; n && n._startTime === h; )
                      (n._rawPrevTime = u), (n = n._prev);
                    for (n = t._next; n && n._startTime === h; )
                      (n._rawPrevTime = c), (n = n._next);
                    e && e.apply(s || a, i || p),
                      (this._forcingPlayhead || !a._paused) && a.seek(o);
                  }
                }),
                m = function (t) {
                  var e,
                    i = [],
                    s = t.length;
                  for (e = 0; e !== s; i.push(t[e++]));
                  return i;
                },
                g = (s.prototype = new e());
              return (
                (s.version = "1.16.1"),
                (g.constructor = s),
                (g.kill()._gc = g._forcingPlayhead = !1),
                (g.to = function (t, e, s, r) {
                  var n = (s.repeat && f.TweenMax) || i;
                  return e ? this.add(new n(t, e, s), r) : this.set(t, s, r);
                }),
                (g.from = function (t, e, s, r) {
                  return this.add(
                    ((s.repeat && f.TweenMax) || i).from(t, e, s),
                    r
                  );
                }),
                (g.fromTo = function (t, e, s, r, n) {
                  var a = (r.repeat && f.TweenMax) || i;
                  return e
                    ? this.add(a.fromTo(t, e, s, r), n)
                    : this.set(t, r, n);
                }),
                (g.staggerTo = function (t, e, r, n, a, o, l, c) {
                  var u,
                    p = new s({
                      onComplete: o,
                      onCompleteParams: l,
                      onCompleteScope: c,
                      smoothChildTiming: this.smoothChildTiming,
                    });
                  for (
                    "string" == typeof t && (t = i.selector(t) || t),
                      h((t = t || [])) && (t = m(t)),
                      0 > (n = n || 0) && ((t = m(t)).reverse(), (n *= -1)),
                      u = 0;
                    t.length > u;
                    u++
                  )
                    r.startAt && (r.startAt = d(r.startAt)),
                      p.to(t[u], e, d(r), u * n);
                  return this.add(p, a);
                }),
                (g.staggerFrom = function (t, e, i, s, r, n, a, o) {
                  return (
                    (i.immediateRender = 0 != i.immediateRender),
                    (i.runBackwards = !0),
                    this.staggerTo(t, e, i, s, r, n, a, o)
                  );
                }),
                (g.staggerFromTo = function (t, e, i, s, r, n, a, o, h) {
                  return (
                    (s.startAt = i),
                    (s.immediateRender =
                      0 != s.immediateRender && 0 != i.immediateRender),
                    this.staggerTo(t, e, s, r, n, a, o, h)
                  );
                }),
                (g.call = function (t, e, s, r) {
                  return this.add(i.delayedCall(0, t, e, s), r);
                }),
                (g.set = function (t, e, s) {
                  return (
                    (s = this._parseTimeOrLabel(s, 0, !0)),
                    null == e.immediateRender &&
                      (e.immediateRender = s === this._time && !this._paused),
                    this.add(new i(t, 0, e), s)
                  );
                }),
                (s.exportRoot = function (t, e) {
                  null == (t = t || {}).smoothChildTiming &&
                    (t.smoothChildTiming = !0);
                  var r,
                    n,
                    a = new s(t),
                    o = a._timeline;
                  for (
                    null == e && (e = !0),
                      o._remove(a, !0),
                      a._startTime = 0,
                      a._rawPrevTime = a._time = a._totalTime = o._time,
                      r = o._first;
                    r;

                  )
                    (n = r._next),
                      (e && r instanceof i && r.target === r.vars.onComplete) ||
                        a.add(r, r._startTime - r._delay),
                      (r = n);
                  return o.add(a, 0), a;
                }),
                (g.add = function (r, n, a, o) {
                  var h, c, u, p, f, d;
                  if (
                    ("number" != typeof n &&
                      (n = this._parseTimeOrLabel(n, 0, !0, r)),
                    !(r instanceof t))
                  ) {
                    if (r instanceof Array || (r && r.push && l(r))) {
                      for (
                        a = a || "normal",
                          o = o || 0,
                          h = n,
                          c = r.length,
                          u = 0;
                        c > u;
                        u++
                      )
                        l((p = r[u])) && (p = new s({ tweens: p })),
                          this.add(p, h),
                          "string" != typeof p &&
                            "function" != typeof p &&
                            ("sequence" === a
                              ? (h =
                                  p._startTime +
                                  p.totalDuration() / p._timeScale)
                              : "start" === a && (p._startTime -= p.delay())),
                          (h += o);
                      return this._uncache(!0);
                    }
                    if ("string" == typeof r) return this.addLabel(r, n);
                    if ("function" != typeof r)
                      throw (
                        "Cannot add " +
                        r +
                        " into the timeline; it is not a tween, timeline, function, or string."
                      );
                    r = i.delayedCall(0, r);
                  }
                  if (
                    (e.prototype.add.call(this, r, n),
                    (this._gc || this._time === this._duration) &&
                      !this._paused &&
                      this._duration < this.duration())
                  )
                    for (d = (f = this).rawTime() > r._startTime; f._timeline; )
                      d && f._timeline.smoothChildTiming
                        ? f.totalTime(f._totalTime, !0)
                        : f._gc && f._enabled(!0, !1),
                        (f = f._timeline);
                  return this;
                }),
                (g.remove = function (e) {
                  if (e instanceof t) return this._remove(e, !1);
                  if (e instanceof Array || (e && e.push && l(e))) {
                    for (var i = e.length; --i > -1; ) this.remove(e[i]);
                    return this;
                  }
                  return "string" == typeof e
                    ? this.removeLabel(e)
                    : this.kill(null, e);
                }),
                (g._remove = function (t, i) {
                  e.prototype._remove.call(this, t, i);
                  var s = this._last;
                  return (
                    s
                      ? this._time >
                          s._startTime + s._totalDuration / s._timeScale &&
                        ((this._time = this.duration()),
                        (this._totalTime = this._totalDuration))
                      : (this._time = this._totalTime = this._duration = this._totalDuration = 0),
                    this
                  );
                }),
                (g.append = function (t, e) {
                  return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
                }),
                (g.insert = g.insertMultiple = function (t, e, i, s) {
                  return this.add(t, e || 0, i, s);
                }),
                (g.appendMultiple = function (t, e, i, s) {
                  return this.add(
                    t,
                    this._parseTimeOrLabel(null, e, !0, t),
                    i,
                    s
                  );
                }),
                (g.addLabel = function (t, e) {
                  return (this._labels[t] = this._parseTimeOrLabel(e)), this;
                }),
                (g.addPause = function (t, e, s, r) {
                  var n = i.delayedCall(0, _, ["{self}", e, s, r], this);
                  return (n.data = "isPause"), this.add(n, t);
                }),
                (g.removeLabel = function (t) {
                  return delete this._labels[t], this;
                }),
                (g.getLabelTime = function (t) {
                  return null != this._labels[t] ? this._labels[t] : -1;
                }),
                (g._parseTimeOrLabel = function (e, i, s, r) {
                  var n;
                  if (r instanceof t && r.timeline === this) this.remove(r);
                  else if (r && (r instanceof Array || (r.push && l(r))))
                    for (n = r.length; --n > -1; )
                      r[n] instanceof t &&
                        r[n].timeline === this &&
                        this.remove(r[n]);
                  if ("string" == typeof i)
                    return this._parseTimeOrLabel(
                      i,
                      s && "number" == typeof e && null == this._labels[i]
                        ? e - this.duration()
                        : 0,
                      s
                    );
                  if (
                    ((i = i || 0),
                    "string" != typeof e ||
                      (!isNaN(e) && null == this._labels[e]))
                  )
                    null == e && (e = this.duration());
                  else {
                    if (-1 === (n = e.indexOf("=")))
                      return null == this._labels[e]
                        ? s
                          ? (this._labels[e] = this.duration() + i)
                          : i
                        : this._labels[e] + i;
                    (i =
                      parseInt(e.charAt(n - 1) + "1", 10) *
                      Number(e.substr(n + 1))),
                      (e =
                        n > 1
                          ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s)
                          : this.duration());
                  }
                  return Number(e) + i;
                }),
                (g.seek = function (t, e) {
                  return this.totalTime(
                    "number" == typeof t ? t : this._parseTimeOrLabel(t),
                    !1 !== e
                  );
                }),
                (g.stop = function () {
                  return this.paused(!0);
                }),
                (g.gotoAndPlay = function (t, e) {
                  return this.play(t, e);
                }),
                (g.gotoAndStop = function (t, e) {
                  return this.pause(t, e);
                }),
                (g.render = function (t, e, i) {
                  this._gc && this._enabled(!0, !1);
                  var s,
                    n,
                    a,
                    o,
                    h,
                    l = this._dirty
                      ? this.totalDuration()
                      : this._totalDuration,
                    f = this._time,
                    d = this._startTime,
                    _ = this._timeScale,
                    m = this._paused;
                  if (t >= l)
                    (this._totalTime = this._time = l),
                      this._reversed ||
                        this._hasPausedChild() ||
                        ((n = !0),
                        (o = "onComplete"),
                        (h = !!this._timeline.autoRemoveChildren),
                        0 === this._duration &&
                          (0 === t ||
                            0 > this._rawPrevTime ||
                            this._rawPrevTime === r) &&
                          this._rawPrevTime !== t &&
                          this._first &&
                          ((h = !0),
                          this._rawPrevTime > r && (o = "onReverseComplete"))),
                      (this._rawPrevTime =
                        this._duration || !e || t || this._rawPrevTime === t
                          ? t
                          : r),
                      (t = l + 1e-4);
                  else if (1e-7 > t)
                    if (
                      ((this._totalTime = this._time = 0),
                      (0 !== f ||
                        (0 === this._duration &&
                          this._rawPrevTime !== r &&
                          (this._rawPrevTime > 0 ||
                            (0 > t && this._rawPrevTime >= 0)))) &&
                        ((o = "onReverseComplete"), (n = this._reversed)),
                      0 > t)
                    )
                      (this._active = !1),
                        this._timeline.autoRemoveChildren && this._reversed
                          ? ((h = n = !0), (o = "onReverseComplete"))
                          : this._rawPrevTime >= 0 && this._first && (h = !0),
                        (this._rawPrevTime = t);
                    else {
                      if (
                        ((this._rawPrevTime =
                          this._duration || !e || t || this._rawPrevTime === t
                            ? t
                            : r),
                        0 === t && n)
                      )
                        for (s = this._first; s && 0 === s._startTime; )
                          s._duration || (n = !1), (s = s._next);
                      (t = 0), this._initted || (h = !0);
                    }
                  else this._totalTime = this._time = this._rawPrevTime = t;
                  if ((this._time !== f && this._first) || i || h) {
                    if (
                      (this._initted || (this._initted = !0),
                      this._active ||
                        (!this._paused &&
                          this._time !== f &&
                          t > 0 &&
                          (this._active = !0)),
                      0 === f &&
                        this.vars.onStart &&
                        0 !== this._time &&
                        (e ||
                          this.vars.onStart.apply(
                            this.vars.onStartScope || this,
                            this.vars.onStartParams || p
                          )),
                      this._time >= f)
                    )
                      for (
                        s = this._first;
                        s && ((a = s._next), !this._paused || m);

                      )
                        (s._active ||
                          (s._startTime <= this._time &&
                            !s._paused &&
                            !s._gc)) &&
                          (s._reversed
                            ? s.render(
                                (s._dirty
                                  ? s.totalDuration()
                                  : s._totalDuration) -
                                  (t - s._startTime) * s._timeScale,
                                e,
                                i
                              )
                            : s.render(
                                (t - s._startTime) * s._timeScale,
                                e,
                                i
                              )),
                          (s = a);
                    else
                      for (
                        s = this._last;
                        s && ((a = s._prev), !this._paused || m);

                      )
                        (s._active ||
                          (f >= s._startTime && !s._paused && !s._gc)) &&
                          (s._reversed
                            ? s.render(
                                (s._dirty
                                  ? s.totalDuration()
                                  : s._totalDuration) -
                                  (t - s._startTime) * s._timeScale,
                                e,
                                i
                              )
                            : s.render(
                                (t - s._startTime) * s._timeScale,
                                e,
                                i
                              )),
                          (s = a);
                    this._onUpdate &&
                      (e ||
                        (c.length && u(),
                        this._onUpdate.apply(
                          this.vars.onUpdateScope || this,
                          this.vars.onUpdateParams || p
                        ))),
                      o &&
                        (this._gc ||
                          ((d === this._startTime || _ !== this._timeScale) &&
                            (0 === this._time || l >= this.totalDuration()) &&
                            (n &&
                              (c.length && u(),
                              this._timeline.autoRemoveChildren &&
                                this._enabled(!1, !1),
                              (this._active = !1)),
                            !e &&
                              this.vars[o] &&
                              this.vars[o].apply(
                                this.vars[o + "Scope"] || this,
                                this.vars[o + "Params"] || p
                              ))));
                  }
                }),
                (g._hasPausedChild = function () {
                  for (var t = this._first; t; ) {
                    if (t._paused || (t instanceof s && t._hasPausedChild()))
                      return !0;
                    t = t._next;
                  }
                  return !1;
                }),
                (g.getChildren = function (t, e, s, r) {
                  r = r || -9999999999;
                  for (var n = [], a = this._first, o = 0; a; )
                    r > a._startTime ||
                      (a instanceof i
                        ? !1 !== e && (n[o++] = a)
                        : (!1 !== s && (n[o++] = a),
                          !1 !== t &&
                            (o = (n = n.concat(a.getChildren(!0, e, s)))
                              .length))),
                      (a = a._next);
                  return n;
                }),
                (g.getTweensOf = function (t, e) {
                  var s,
                    r,
                    n = this._gc,
                    a = [],
                    o = 0;
                  for (
                    n && this._enabled(!0, !0),
                      r = (s = i.getTweensOf(t)).length;
                    --r > -1;

                  )
                    (s[r].timeline === this || (e && this._contains(s[r]))) &&
                      (a[o++] = s[r]);
                  return n && this._enabled(!1, !0), a;
                }),
                (g.recent = function () {
                  return this._recent;
                }),
                (g._contains = function (t) {
                  for (var e = t.timeline; e; ) {
                    if (e === this) return !0;
                    e = e.timeline;
                  }
                  return !1;
                }),
                (g.shiftChildren = function (t, e, i) {
                  i = i || 0;
                  for (var s, r = this._first, n = this._labels; r; )
                    r._startTime >= i && (r._startTime += t), (r = r._next);
                  if (e) for (s in n) n[s] >= i && (n[s] += t);
                  return this._uncache(!0);
                }),
                (g._kill = function (t, e) {
                  if (!t && !e) return this._enabled(!1, !1);
                  for (
                    var i = e
                        ? this.getTweensOf(e)
                        : this.getChildren(!0, !0, !1),
                      s = i.length,
                      r = !1;
                    --s > -1;

                  )
                    i[s]._kill(t, e) && (r = !0);
                  return r;
                }),
                (g.clear = function (t) {
                  var e = this.getChildren(!1, !0, !0),
                    i = e.length;
                  for (this._time = this._totalTime = 0; --i > -1; )
                    e[i]._enabled(!1, !1);
                  return !1 !== t && (this._labels = {}), this._uncache(!0);
                }),
                (g.invalidate = function () {
                  for (var e = this._first; e; ) e.invalidate(), (e = e._next);
                  return t.prototype.invalidate.call(this);
                }),
                (g._enabled = function (t, i) {
                  if (t === this._gc)
                    for (var s = this._first; s; )
                      s._enabled(t, !0), (s = s._next);
                  return e.prototype._enabled.call(this, t, i);
                }),
                (g.totalTime = function () {
                  this._forcingPlayhead = !0;
                  var e = t.prototype.totalTime.apply(this, arguments);
                  return (this._forcingPlayhead = !1), e;
                }),
                (g.duration = function (t) {
                  return arguments.length
                    ? (0 !== this.duration() &&
                        0 !== t &&
                        this.timeScale(this._duration / t),
                      this)
                    : (this._dirty && this.totalDuration(), this._duration);
                }),
                (g.totalDuration = function (t) {
                  if (!arguments.length) {
                    if (this._dirty) {
                      for (
                        var e, i, s = 0, r = this._last, n = 999999999999;
                        r;

                      )
                        (e = r._prev),
                          r._dirty && r.totalDuration(),
                          r._startTime > n && this._sortChildren && !r._paused
                            ? this.add(r, r._startTime - r._delay)
                            : (n = r._startTime),
                          0 > r._startTime &&
                            !r._paused &&
                            ((s -= r._startTime),
                            this._timeline.smoothChildTiming &&
                              (this._startTime +=
                                r._startTime / this._timeScale),
                            this.shiftChildren(-r._startTime, !1, -9999999999),
                            (n = 0)),
                          (i = r._startTime + r._totalDuration / r._timeScale) >
                            s && (s = i),
                          (r = e);
                      (this._duration = this._totalDuration = s),
                        (this._dirty = !1);
                    }
                    return this._totalDuration;
                  }
                  return (
                    0 !== this.totalDuration() &&
                      0 !== t &&
                      this.timeScale(this._totalDuration / t),
                    this
                  );
                }),
                (g.paused = function (e) {
                  if (!e)
                    for (var i = this._first, s = this._time; i; )
                      i._startTime === s &&
                        "isPause" === i.data &&
                        (i._rawPrevTime = 0),
                        (i = i._next);
                  return t.prototype.paused.apply(this, arguments);
                }),
                (g.usesFrames = function () {
                  for (var e = this._timeline; e._timeline; ) e = e._timeline;
                  return e === t._rootFramesTimeline;
                }),
                (g.rawTime = function () {
                  return this._paused
                    ? this._totalTime
                    : (this._timeline.rawTime() - this._startTime) *
                        this._timeScale;
                }),
                s
              );
            },
            !0
          ),
          n._gsDefine(
            "TimelineMax",
            ["TimelineLite", "TweenLite", "easing.Ease"],
            function (t, e, i) {
              var s = function (e) {
                  t.call(this, e),
                    (this._repeat = this.vars.repeat || 0),
                    (this._repeatDelay = this.vars.repeatDelay || 0),
                    (this._cycle = 0),
                    (this._yoyo = !0 === this.vars.yoyo),
                    (this._dirty = !0);
                },
                r = 1e-10,
                n = [],
                a = e._internals,
                o = a.lazyTweens,
                h = a.lazyRender,
                l = new i(null, null, 1, 0),
                c = (s.prototype = new t());
              return (
                (c.constructor = s),
                (c.kill()._gc = !1),
                (s.version = "1.16.1"),
                (c.invalidate = function () {
                  return (
                    (this._yoyo = !0 === this.vars.yoyo),
                    (this._repeat = this.vars.repeat || 0),
                    (this._repeatDelay = this.vars.repeatDelay || 0),
                    this._uncache(!0),
                    t.prototype.invalidate.call(this)
                  );
                }),
                (c.addCallback = function (t, i, s, r) {
                  return this.add(e.delayedCall(0, t, s, r), i);
                }),
                (c.removeCallback = function (t, e) {
                  if (t)
                    if (null == e) this._kill(null, t);
                    else
                      for (
                        var i = this.getTweensOf(t, !1),
                          s = i.length,
                          r = this._parseTimeOrLabel(e);
                        --s > -1;

                      )
                        i[s]._startTime === r && i[s]._enabled(!1, !1);
                  return this;
                }),
                (c.removePause = function (e) {
                  return this.removeCallback(t._internals.pauseCallback, e);
                }),
                (c.tweenTo = function (t, i) {
                  i = i || {};
                  var s,
                    r,
                    a,
                    o = {
                      ease: l,
                      useFrames: this.usesFrames(),
                      immediateRender: !1,
                    };
                  for (r in i) o[r] = i[r];
                  return (
                    (o.time = this._parseTimeOrLabel(t)),
                    (s =
                      Math.abs(Number(o.time) - this._time) / this._timeScale ||
                      0.001),
                    (a = new e(this, s, o)),
                    (o.onStart = function () {
                      a.target.paused(!0),
                        a.vars.time !== a.target.time() &&
                          s === a.duration() &&
                          a.duration(
                            Math.abs(a.vars.time - a.target.time()) /
                              a.target._timeScale
                          ),
                        i.onStart &&
                          i.onStart.apply(
                            i.onStartScope || a,
                            i.onStartParams || n
                          );
                    }),
                    a
                  );
                }),
                (c.tweenFromTo = function (t, e, i) {
                  (i = i || {}),
                    (t = this._parseTimeOrLabel(t)),
                    (i.startAt = {
                      onComplete: this.seek,
                      onCompleteParams: [t],
                      onCompleteScope: this,
                    }),
                    (i.immediateRender = !1 !== i.immediateRender);
                  var s = this.tweenTo(e, i);
                  return s.duration(
                    Math.abs(s.vars.time - t) / this._timeScale || 0.001
                  );
                }),
                (c.render = function (t, e, i) {
                  this._gc && this._enabled(!0, !1);
                  var s,
                    a,
                    l,
                    c,
                    u,
                    p,
                    f = this._dirty
                      ? this.totalDuration()
                      : this._totalDuration,
                    d = this._duration,
                    _ = this._time,
                    m = this._totalTime,
                    g = this._startTime,
                    v = this._timeScale,
                    y = this._rawPrevTime,
                    x = this._paused,
                    w = this._cycle;
                  if (t >= f)
                    this._locked ||
                      ((this._totalTime = f), (this._cycle = this._repeat)),
                      this._reversed ||
                        this._hasPausedChild() ||
                        ((a = !0),
                        (c = "onComplete"),
                        (u = !!this._timeline.autoRemoveChildren),
                        0 === this._duration &&
                          (0 === t || 0 > y || y === r) &&
                          y !== t &&
                          this._first &&
                          ((u = !0), y > r && (c = "onReverseComplete"))),
                      (this._rawPrevTime =
                        this._duration || !e || t || this._rawPrevTime === t
                          ? t
                          : r),
                      this._yoyo && 0 != (1 & this._cycle)
                        ? (this._time = t = 0)
                        : ((this._time = d), (t = d + 1e-4));
                  else if (1e-7 > t)
                    if (
                      (this._locked || (this._totalTime = this._cycle = 0),
                      (this._time = 0),
                      (0 !== _ ||
                        (0 === d &&
                          y !== r &&
                          (y > 0 || (0 > t && y >= 0)) &&
                          !this._locked)) &&
                        ((c = "onReverseComplete"), (a = this._reversed)),
                      0 > t)
                    )
                      (this._active = !1),
                        this._timeline.autoRemoveChildren && this._reversed
                          ? ((u = a = !0), (c = "onReverseComplete"))
                          : y >= 0 && this._first && (u = !0),
                        (this._rawPrevTime = t);
                    else {
                      if (
                        ((this._rawPrevTime =
                          d || !e || t || this._rawPrevTime === t ? t : r),
                        0 === t && a)
                      )
                        for (s = this._first; s && 0 === s._startTime; )
                          s._duration || (a = !1), (s = s._next);
                      (t = 0), this._initted || (u = !0);
                    }
                  else
                    0 === d && 0 > y && (u = !0),
                      (this._time = this._rawPrevTime = t),
                      this._locked ||
                        ((this._totalTime = t),
                        0 !== this._repeat &&
                          ((p = d + this._repeatDelay),
                          (this._cycle = (this._totalTime / p) >> 0),
                          0 !== this._cycle &&
                            this._cycle === this._totalTime / p &&
                            this._cycle--,
                          (this._time = this._totalTime - this._cycle * p),
                          this._yoyo &&
                            0 != (1 & this._cycle) &&
                            (this._time = d - this._time),
                          this._time > d
                            ? ((this._time = d), (t = d + 1e-4))
                            : 0 > this._time
                            ? (this._time = t = 0)
                            : (t = this._time)));
                  if (this._cycle !== w && !this._locked) {
                    var T = this._yoyo && 0 != (1 & w),
                      b = T === (this._yoyo && 0 != (1 & this._cycle)),
                      P = this._totalTime,
                      S = this._cycle,
                      k = this._rawPrevTime,
                      C = this._time;
                    if (
                      ((this._totalTime = w * d),
                      w > this._cycle ? (T = !T) : (this._totalTime += d),
                      (this._time = _),
                      (this._rawPrevTime = 0 === d ? y - 1e-4 : y),
                      (this._cycle = w),
                      (this._locked = !0),
                      (_ = T ? 0 : d),
                      this.render(_, e, 0 === d),
                      e ||
                        this._gc ||
                        (this.vars.onRepeat &&
                          this.vars.onRepeat.apply(
                            this.vars.onRepeatScope || this,
                            this.vars.onRepeatParams || n
                          )),
                      b && ((_ = T ? d + 1e-4 : -1e-4), this.render(_, !0, !1)),
                      (this._locked = !1),
                      this._paused && !x)
                    )
                      return;
                    (this._time = C),
                      (this._totalTime = P),
                      (this._cycle = S),
                      (this._rawPrevTime = k);
                  }
                  if ((this._time !== _ && this._first) || i || u) {
                    if (
                      (this._initted || (this._initted = !0),
                      this._active ||
                        (!this._paused &&
                          this._totalTime !== m &&
                          t > 0 &&
                          (this._active = !0)),
                      0 === m &&
                        this.vars.onStart &&
                        0 !== this._totalTime &&
                        (e ||
                          this.vars.onStart.apply(
                            this.vars.onStartScope || this,
                            this.vars.onStartParams || n
                          )),
                      this._time >= _)
                    )
                      for (
                        s = this._first;
                        s && ((l = s._next), !this._paused || x);

                      )
                        (s._active ||
                          (s._startTime <= this._time &&
                            !s._paused &&
                            !s._gc)) &&
                          (s._reversed
                            ? s.render(
                                (s._dirty
                                  ? s.totalDuration()
                                  : s._totalDuration) -
                                  (t - s._startTime) * s._timeScale,
                                e,
                                i
                              )
                            : s.render(
                                (t - s._startTime) * s._timeScale,
                                e,
                                i
                              )),
                          (s = l);
                    else
                      for (
                        s = this._last;
                        s && ((l = s._prev), !this._paused || x);

                      )
                        (s._active ||
                          (_ >= s._startTime && !s._paused && !s._gc)) &&
                          (s._reversed
                            ? s.render(
                                (s._dirty
                                  ? s.totalDuration()
                                  : s._totalDuration) -
                                  (t - s._startTime) * s._timeScale,
                                e,
                                i
                              )
                            : s.render(
                                (t - s._startTime) * s._timeScale,
                                e,
                                i
                              )),
                          (s = l);
                    this._onUpdate &&
                      (e ||
                        (o.length && h(),
                        this._onUpdate.apply(
                          this.vars.onUpdateScope || this,
                          this.vars.onUpdateParams || n
                        ))),
                      c &&
                        (this._locked ||
                          this._gc ||
                          ((g === this._startTime || v !== this._timeScale) &&
                            (0 === this._time || f >= this.totalDuration()) &&
                            (a &&
                              (o.length && h(),
                              this._timeline.autoRemoveChildren &&
                                this._enabled(!1, !1),
                              (this._active = !1)),
                            !e &&
                              this.vars[c] &&
                              this.vars[c].apply(
                                this.vars[c + "Scope"] || this,
                                this.vars[c + "Params"] || n
                              ))));
                  } else
                    m !== this._totalTime &&
                      this._onUpdate &&
                      (e ||
                        this._onUpdate.apply(
                          this.vars.onUpdateScope || this,
                          this.vars.onUpdateParams || n
                        ));
                }),
                (c.getActive = function (t, e, i) {
                  null == t && (t = !0),
                    null == e && (e = !0),
                    null == i && (i = !1);
                  var s,
                    r,
                    n = [],
                    a = this.getChildren(t, e, i),
                    o = 0,
                    h = a.length;
                  for (s = 0; h > s; s++) (r = a[s]).isActive() && (n[o++] = r);
                  return n;
                }),
                (c.getLabelAfter = function (t) {
                  t || (0 !== t && (t = this._time));
                  var e,
                    i = this.getLabelsArray(),
                    s = i.length;
                  for (e = 0; s > e; e++) if (i[e].time > t) return i[e].name;
                  return null;
                }),
                (c.getLabelBefore = function (t) {
                  null == t && (t = this._time);
                  for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
                    if (t > e[i].time) return e[i].name;
                  return null;
                }),
                (c.getLabelsArray = function () {
                  var t,
                    e = [],
                    i = 0;
                  for (t in this._labels)
                    e[i++] = { time: this._labels[t], name: t };
                  return (
                    e.sort(function (t, e) {
                      return t.time - e.time;
                    }),
                    e
                  );
                }),
                (c.progress = function (t, e) {
                  return arguments.length
                    ? this.totalTime(
                        this.duration() *
                          (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                          this._cycle * (this._duration + this._repeatDelay),
                        e
                      )
                    : this._time / this.duration();
                }),
                (c.totalProgress = function (t, e) {
                  return arguments.length
                    ? this.totalTime(this.totalDuration() * t, e)
                    : this._totalTime / this.totalDuration();
                }),
                (c.totalDuration = function (e) {
                  return arguments.length
                    ? -1 === this._repeat
                      ? this
                      : this.duration(
                          (e - this._repeat * this._repeatDelay) /
                            (this._repeat + 1)
                        )
                    : (this._dirty &&
                        (t.prototype.totalDuration.call(this),
                        (this._totalDuration =
                          -1 === this._repeat
                            ? 999999999999
                            : this._duration * (this._repeat + 1) +
                              this._repeatDelay * this._repeat)),
                      this._totalDuration);
                }),
                (c.time = function (t, e) {
                  return arguments.length
                    ? (this._dirty && this.totalDuration(),
                      t > this._duration && (t = this._duration),
                      this._yoyo && 0 != (1 & this._cycle)
                        ? (t =
                            this._duration -
                            t +
                            this._cycle * (this._duration + this._repeatDelay))
                        : 0 !== this._repeat &&
                          (t +=
                            this._cycle * (this._duration + this._repeatDelay)),
                      this.totalTime(t, e))
                    : this._time;
                }),
                (c.repeat = function (t) {
                  return arguments.length
                    ? ((this._repeat = t), this._uncache(!0))
                    : this._repeat;
                }),
                (c.repeatDelay = function (t) {
                  return arguments.length
                    ? ((this._repeatDelay = t), this._uncache(!0))
                    : this._repeatDelay;
                }),
                (c.yoyo = function (t) {
                  return arguments.length
                    ? ((this._yoyo = t), this)
                    : this._yoyo;
                }),
                (c.currentLabel = function (t) {
                  return arguments.length
                    ? this.seek(t, !0)
                    : this.getLabelBefore(this._time + 1e-8);
                }),
                s
              );
            },
            !0
          ),
          (t = 180 / Math.PI),
          (e = []),
          (i = []),
          (s = []),
          (a = {}),
          (o = n._gsDefine.globals),
          (h = function (t, e, i, s) {
            (this.a = t),
              (this.b = e),
              (this.c = i),
              (this.d = s),
              (this.da = s - t),
              (this.ca = i - t),
              (this.ba = e - t);
          }),
          (l = function (t, e, i, s) {
            var r = { a: t },
              n = {},
              a = {},
              o = { c: s },
              h = (t + e) / 2,
              l = (e + i) / 2,
              c = (i + s) / 2,
              u = (h + l) / 2,
              p = (l + c) / 2,
              f = (p - u) / 8;
            return (
              (r.b = h + (t - h) / 4),
              (n.b = u + f),
              (r.c = n.a = (r.b + n.b) / 2),
              (n.c = a.a = (u + p) / 2),
              (a.b = p - f),
              (o.b = c + (s - c) / 4),
              (a.c = o.a = (a.b + o.b) / 2),
              [r, n, a, o]
            );
          }),
          (c = function (t, r, n, a, o) {
            var h,
              c,
              u,
              p,
              f,
              d,
              _,
              m,
              g,
              v,
              y,
              x,
              w,
              T = t.length - 1,
              b = 0,
              P = t[0].a;
            for (h = 0; T > h; h++)
              (c = (f = t[b]).a),
                (u = f.d),
                (p = t[b + 1].d),
                o
                  ? ((y = e[h]),
                    (w =
                      (0.25 * ((x = i[h]) + y) * r) / (a ? 0.5 : s[h] || 0.5)),
                    (m =
                      u -
                      ((d = u - (u - c) * (a ? 0.5 * r : 0 !== y ? w / y : 0)) +
                        ((((_ =
                          u + (p - u) * (a ? 0.5 * r : 0 !== x ? w / x : 0)) -
                          d) *
                          ((3 * y) / (y + x) + 0.5)) /
                          4 || 0))))
                  : (m =
                      u -
                      ((d = u - 0.5 * (u - c) * r) +
                        (_ = u + 0.5 * (p - u) * r)) /
                        2),
                (d += m),
                (_ += m),
                (f.c = g = d),
                (f.b = 0 !== h ? P : (P = f.a + 0.6 * (f.c - f.a))),
                (f.da = u - c),
                (f.ca = g - c),
                (f.ba = P - c),
                n
                  ? ((v = l(c, P, g, u)),
                    t.splice(b, 1, v[0], v[1], v[2], v[3]),
                    (b += 4))
                  : b++,
                (P = _);
            ((f = t[b]).b = P),
              (f.c = P + 0.4 * (f.d - P)),
              (f.da = f.d - f.a),
              (f.ca = f.c - f.a),
              (f.ba = P - f.a),
              n &&
                ((v = l(f.a, P, f.c, f.d)),
                t.splice(b, 1, v[0], v[1], v[2], v[3]));
          }),
          (u = function (t, s, r, n) {
            var a,
              o,
              l,
              c,
              u,
              p,
              f = [];
            if (n)
              for (o = (t = [n].concat(t)).length; --o > -1; )
                "string" == typeof (p = t[o][s]) &&
                  "=" === p.charAt(1) &&
                  (t[o][s] = n[s] + Number(p.charAt(0) + p.substr(2)));
            if (0 > (a = t.length - 2))
              return (f[0] = new h(t[0][s], 0, 0, t[-1 > a ? 0 : 1][s])), f;
            for (o = 0; a > o; o++)
              (l = t[o][s]),
                (c = t[o + 1][s]),
                (f[o] = new h(l, 0, 0, c)),
                r &&
                  ((u = t[o + 2][s]),
                  (e[o] = (e[o] || 0) + (c - l) * (c - l)),
                  (i[o] = (i[o] || 0) + (u - c) * (u - c)));
            return (f[o] = new h(t[o][s], 0, 0, t[o + 1][s])), f;
          }),
          (p = function (t, r, n, o, h, l) {
            var p,
              f,
              d,
              _,
              m,
              g,
              v,
              y,
              x = {},
              w = [],
              T = l || t[0];
            for (f in ((h =
              "string" == typeof h
                ? "," + h + ","
                : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"),
            null == r && (r = 1),
            t[0]))
              w.push(f);
            if (t.length > 1) {
              for (y = t[t.length - 1], v = !0, p = w.length; --p > -1; )
                if (((f = w[p]), Math.abs(T[f] - y[f]) > 0.05)) {
                  v = !1;
                  break;
                }
              v &&
                ((t = t.concat()),
                l && t.unshift(l),
                t.push(t[1]),
                (l = t[t.length - 3]));
            }
            for (e.length = i.length = s.length = 0, p = w.length; --p > -1; )
              (f = w[p]),
                (a[f] = -1 !== h.indexOf("," + f + ",")),
                (x[f] = u(t, f, a[f], l));
            for (p = e.length; --p > -1; )
              (e[p] = Math.sqrt(e[p])), (i[p] = Math.sqrt(i[p]));
            if (!o) {
              for (p = w.length; --p > -1; )
                if (a[f])
                  for (g = (d = x[w[p]]).length - 1, _ = 0; g > _; _++)
                    (m = d[_ + 1].da / i[_] + d[_].da / e[_]),
                      (s[_] = (s[_] || 0) + m * m);
              for (p = s.length; --p > -1; ) s[p] = Math.sqrt(s[p]);
            }
            for (p = w.length, _ = n ? 4 : 1; --p > -1; )
              (d = x[(f = w[p])]),
                c(d, r, n, o, a[f]),
                v && (d.splice(0, _), d.splice(d.length - _, _));
            return x;
          }),
          (f = function (t, e, i) {
            var s,
              r,
              n,
              a,
              o,
              l,
              c,
              u,
              p,
              f,
              d,
              _ = {},
              m = "cubic" === (e = e || "soft") ? 3 : 2,
              g = "soft" === e,
              v = [];
            if ((g && i && (t = [i].concat(t)), null == t || m + 1 > t.length))
              throw "invalid Bezier data";
            for (p in t[0]) v.push(p);
            for (l = v.length; --l > -1; ) {
              for (
                p = v[l], _[p] = o = [], f = 0, u = t.length, c = 0;
                u > c;
                c++
              )
                (s =
                  null == i
                    ? t[c][p]
                    : "string" == typeof (d = t[c][p]) && "=" === d.charAt(1)
                    ? i[p] + Number(d.charAt(0) + d.substr(2))
                    : Number(d)),
                  g && c > 1 && u - 1 > c && (o[f++] = (s + o[f - 2]) / 2),
                  (o[f++] = s);
              for (u = f - m + 1, f = 0, c = 0; u > c; c += m)
                (s = o[c]),
                  (r = o[c + 1]),
                  (n = o[c + 2]),
                  (a = 2 === m ? 0 : o[c + 3]),
                  (o[f++] = d =
                    3 === m
                      ? new h(s, r, n, a)
                      : new h(s, (2 * r + s) / 3, (2 * r + n) / 3, n));
              o.length = f;
            }
            return _;
          }),
          (d = function (t, e, i) {
            for (
              var s, r, n, a, o, h, l, c, u, p, f, d = 1 / i, _ = t.length;
              --_ > -1;

            )
              for (
                n = (p = t[_]).a,
                  a = p.d - n,
                  o = p.c - n,
                  h = p.b - n,
                  s = r = 0,
                  c = 1;
                i >= c;
                c++
              )
                (s =
                  r -
                  (r =
                    ((l = d * c) * l * a + 3 * (u = 1 - l) * (l * o + u * h)) *
                    l)),
                  (f = _ * i + c - 1),
                  (e[f] = (e[f] || 0) + s * s);
          }),
          (_ = function (t, e) {
            var i,
              s,
              r,
              n,
              a = [],
              o = [],
              h = 0,
              l = 0,
              c = (e = e >> 0 || 6) - 1,
              u = [],
              p = [];
            for (i in t) d(t[i], a, e);
            for (r = a.length, s = 0; r > s; s++)
              (h += Math.sqrt(a[s])),
                (p[(n = s % e)] = h),
                n === c &&
                  ((l += h),
                  (u[(n = (s / e) >> 0)] = p),
                  (o[n] = l),
                  (h = 0),
                  (p = []));
            return { length: l, lengths: o, segments: u };
          }),
          (m = n._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.4",
            API: 2,
            global: !0,
            init: function (t, e, i) {
              (this._target = t),
                e instanceof Array && (e = { values: e }),
                (this._func = {}),
                (this._round = {}),
                (this._props = []),
                (this._timeRes =
                  null == e.timeResolution
                    ? 6
                    : parseInt(e.timeResolution, 10));
              var s,
                r,
                n,
                a,
                o,
                h = e.values || [],
                l = {},
                c = h[0],
                u = e.autoRotate || i.vars.orientToBezier;
              for (s in ((this._autoRotate = u
                ? u instanceof Array
                  ? u
                  : [["x", "y", "rotation", !0 === u ? 0 : Number(u) || 0]]
                : null),
              c))
                this._props.push(s);
              for (n = this._props.length; --n > -1; )
                (s = this._props[n]),
                  this._overwriteProps.push(s),
                  (r = this._func[s] = "function" == typeof t[s]),
                  (l[s] = r
                    ? t[
                        s.indexOf("set") ||
                        "function" != typeof t["get" + s.substr(3)]
                          ? s
                          : "get" + s.substr(3)
                      ]()
                    : parseFloat(t[s])),
                  o || (l[s] !== h[0][s] && (o = l));
              if (
                ((this._beziers =
                  "cubic" !== e.type &&
                  "quadratic" !== e.type &&
                  "soft" !== e.type
                    ? p(
                        h,
                        isNaN(e.curviness) ? 1 : e.curviness,
                        !1,
                        "thruBasic" === e.type,
                        e.correlate,
                        o
                      )
                    : f(h, e.type, l)),
                (this._segCount = this._beziers[s].length),
                this._timeRes)
              ) {
                var d = _(this._beziers, this._timeRes);
                (this._length = d.length),
                  (this._lengths = d.lengths),
                  (this._segments = d.segments),
                  (this._l1 = this._li = this._s1 = this._si = 0),
                  (this._l2 = this._lengths[0]),
                  (this._curSeg = this._segments[0]),
                  (this._s2 = this._curSeg[0]),
                  (this._prec = 1 / this._curSeg.length);
              }
              if ((u = this._autoRotate))
                for (
                  this._initialRotations = [],
                    u[0] instanceof Array || (this._autoRotate = u = [u]),
                    n = u.length;
                  --n > -1;

                ) {
                  for (a = 0; 3 > a; a++)
                    (s = u[n][a]),
                      (this._func[s] =
                        "function" == typeof t[s] &&
                        t[
                          s.indexOf("set") ||
                          "function" != typeof t["get" + s.substr(3)]
                            ? s
                            : "get" + s.substr(3)
                        ]);
                  (s = u[n][2]),
                    (this._initialRotations[n] = this._func[s]
                      ? this._func[s].call(this._target)
                      : this._target[s]);
                }
              return (this._startRatio = i.vars.runBackwards ? 1 : 0), !0;
            },
            set: function (e) {
              var i,
                s,
                r,
                n,
                a,
                o,
                h,
                l,
                c,
                u,
                p = this._segCount,
                f = this._func,
                d = this._target,
                _ = e !== this._startRatio;
              if (this._timeRes) {
                if (
                  ((c = this._lengths),
                  (u = this._curSeg),
                  (e *= this._length),
                  (r = this._li),
                  e > this._l2 && p - 1 > r)
                ) {
                  for (l = p - 1; l > r && e >= (this._l2 = c[++r]); );
                  (this._l1 = c[r - 1]),
                    (this._li = r),
                    (this._curSeg = u = this._segments[r]),
                    (this._s2 = u[(this._s1 = this._si = 0)]);
                } else if (this._l1 > e && r > 0) {
                  for (; r > 0 && (this._l1 = c[--r]) >= e; );
                  0 === r && this._l1 > e ? (this._l1 = 0) : r++,
                    (this._l2 = c[r]),
                    (this._li = r),
                    (this._curSeg = u = this._segments[r]),
                    (this._s1 = u[(this._si = u.length - 1) - 1] || 0),
                    (this._s2 = u[this._si]);
                }
                if (
                  ((i = r),
                  (e -= this._l1),
                  (r = this._si),
                  e > this._s2 && u.length - 1 > r)
                ) {
                  for (l = u.length - 1; l > r && e >= (this._s2 = u[++r]); );
                  (this._s1 = u[r - 1]), (this._si = r);
                } else if (this._s1 > e && r > 0) {
                  for (; r > 0 && (this._s1 = u[--r]) >= e; );
                  0 === r && this._s1 > e ? (this._s1 = 0) : r++,
                    (this._s2 = u[r]),
                    (this._si = r);
                }
                o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec;
              } else
                o =
                  (e -
                    (i = 0 > e ? 0 : e >= 1 ? p - 1 : (p * e) >> 0) * (1 / p)) *
                  p;
              for (s = 1 - o, r = this._props.length; --r > -1; )
                (n = this._props[r]),
                  (h =
                    (o * o * (a = this._beziers[n][i]).da +
                      3 * s * (o * a.ca + s * a.ba)) *
                      o +
                    a.a),
                  this._round[n] && (h = Math.round(h)),
                  f[n] ? d[n](h) : (d[n] = h);
              if (this._autoRotate) {
                var m,
                  g,
                  v,
                  y,
                  x,
                  w,
                  T,
                  b = this._autoRotate;
                for (r = b.length; --r > -1; )
                  (n = b[r][2]),
                    (w = b[r][3] || 0),
                    (T = !0 === b[r][4] ? 1 : t),
                    (a = this._beziers[b[r][0]]),
                    (m = this._beziers[b[r][1]]),
                    a &&
                      m &&
                      ((a = a[i]),
                      (m = m[i]),
                      (g = a.a + (a.b - a.a) * o),
                      (g += ((y = a.b + (a.c - a.b) * o) - g) * o),
                      (y += (a.c + (a.d - a.c) * o - y) * o),
                      (v = m.a + (m.b - m.a) * o),
                      (v += ((x = m.b + (m.c - m.b) * o) - v) * o),
                      (x += (m.c + (m.d - m.c) * o - x) * o),
                      (h = _
                        ? Math.atan2(x - v, y - g) * T + w
                        : this._initialRotations[r]),
                      f[n] ? d[n](h) : (d[n] = h));
              }
            },
          })),
          (g = m.prototype),
          (m.bezierThrough = p),
          (m.cubicToQuadratic = l),
          (m._autoCSS = !0),
          (m.quadraticToCubic = function (t, e, i) {
            return new h(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
          }),
          (m._cssRegister = function () {
            var t = o.CSSPlugin;
            if (t) {
              var e = t._internals,
                i = e._parseToProxy,
                s = e._setPluginRatio,
                r = e.CSSPropTween;
              e._registerComplexSpecialProp("bezier", {
                parser: function (t, e, n, a, o, h) {
                  e instanceof Array && (e = { values: e }), (h = new m());
                  var l,
                    c,
                    u,
                    p = e.values,
                    f = p.length - 1,
                    d = [],
                    _ = {};
                  if (0 > f) return o;
                  for (l = 0; f >= l; l++)
                    (u = i(t, p[l], a, o, h, f !== l)), (d[l] = u.end);
                  for (c in e) _[c] = e[c];
                  return (
                    (_.values = d),
                    ((o = new r(t, "bezier", 0, 0, u.pt, 2)).data = u),
                    (o.plugin = h),
                    (o.setRatio = s),
                    0 === _.autoRotate && (_.autoRotate = !0),
                    !_.autoRotate ||
                      _.autoRotate instanceof Array ||
                      ((l = !0 === _.autoRotate ? 0 : Number(_.autoRotate)),
                      (_.autoRotate =
                        null != u.end.left
                          ? [["left", "top", "rotation", l, !1]]
                          : null != u.end.x && [
                              ["x", "y", "rotation", l, !1],
                            ])),
                    _.autoRotate &&
                      (a._transform || a._enableTransforms(!1),
                      (u.autoRotate = a._target._gsTransform)),
                    h._onInitTween(u.proxy, _, a._tween),
                    o
                  );
                },
              });
            }
          }),
          (g._roundProps = function (t, e) {
            for (var i = this._overwriteProps, s = i.length; --s > -1; )
              (t[i[s]] || t.bezier || t.bezierThrough) &&
                (this._round[i[s]] = e);
          }),
          (g._kill = function (t) {
            var e,
              i,
              s = this._props;
            for (e in this._beziers)
              if (e in t)
                for (
                  delete this._beziers[e], delete this._func[e], i = s.length;
                  --i > -1;

                )
                  s[i] === e && s.splice(i, 1);
            return this._super._kill.call(this, t);
          }),
          n._gsDefine(
            "plugins.CSSPlugin",
            ["plugins.TweenPlugin", "TweenLite"],
            function (t, e) {
              var i,
                s,
                a,
                o,
                h = function e() {
                  t.call(this, "css"),
                    (this._overwriteProps.length = 0),
                    (this.setRatio = e.prototype.setRatio);
                },
                l = n._gsDefine.globals,
                c = {},
                u = (h.prototype = new t("css"));
              (u.constructor = h),
                (h.version = "1.16.1"),
                (h.API = 2),
                (h.defaultTransformPerspective = 0),
                (h.defaultSkewType = "compensated"),
                (h.suffixMap = {
                  top: (u = "px"),
                  right: u,
                  bottom: u,
                  left: u,
                  width: u,
                  height: u,
                  fontSize: u,
                  padding: u,
                  margin: u,
                  perspective: u,
                  lineHeight: "",
                });
              var p,
                f,
                d,
                _,
                m,
                g,
                v = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                T = /(?:\d|\-|\+|=|#|\.)*/g,
                b = /opacity *= *([^)]*)/i,
                P = /opacity:([^;]*)/i,
                S = /alpha\(opacity *=.+?\)/i,
                k = /^(rgb|hsl)/,
                C = /([A-Z])/g,
                M = /-([a-z])/gi,
                O = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                A = function (t, e) {
                  return e.toUpperCase();
                },
                R = /(?:Left|Right|Width)/i,
                D = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                I = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                E = /,(?=[^\)]*(?:\(|$))/gi,
                z = Math.PI / 180,
                F = 180 / Math.PI,
                N = {},
                L = document,
                j = function (t) {
                  return L.createElementNS
                    ? L.createElementNS("http://www.w3.org/1999/xhtml", t)
                    : L.createElement(t);
                },
                B = j("div"),
                W = j("img"),
                X = (h._internals = { _specialProps: c }),
                Y = navigator.userAgent,
                H = (function () {
                  var t = Y.indexOf("Android"),
                    e = j("a");
                  return (
                    (d =
                      -1 !== Y.indexOf("Safari") &&
                      -1 === Y.indexOf("Chrome") &&
                      (-1 === t || Number(Y.substr(t + 8, 1)) > 3)),
                    (m =
                      d && 6 > Number(Y.substr(Y.indexOf("Version/") + 8, 1))),
                    (_ = -1 !== Y.indexOf("Firefox")),
                    (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) ||
                      /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) &&
                      (g = parseFloat(RegExp.$1)),
                    !!e &&
                      ((e.style.cssText = "top:1px;opacity:.55;"),
                      /^0.55/.test(e.style.opacity))
                  );
                })(),
                U = function (t) {
                  return b.test(
                    "string" == typeof t
                      ? t
                      : (t.currentStyle
                          ? t.currentStyle.filter
                          : t.style.filter) || ""
                  )
                    ? parseFloat(RegExp.$1) / 100
                    : 1;
                },
                V = function (t) {
                  window.console && console.log(t);
                },
                q = "",
                Z = "",
                G = function (t, e) {
                  var i,
                    s,
                    r = (e = e || B).style;
                  if (void 0 !== r[t]) return t;
                  for (
                    t = t.charAt(0).toUpperCase() + t.substr(1),
                      i = ["O", "Moz", "ms", "Ms", "Webkit"],
                      s = 5;
                    --s > -1 && void 0 === r[i[s] + t];

                  );
                  return s >= 0
                    ? ((q =
                        "-" + (Z = 3 === s ? "ms" : i[s]).toLowerCase() + "-"),
                      Z + t)
                    : null;
                },
                $ = L.defaultView
                  ? L.defaultView.getComputedStyle
                  : function () {},
                Q = (h.getStyle = function (t, e, i, s, r) {
                  var n;
                  return H || "opacity" !== e
                    ? (!s && t.style[e]
                        ? (n = t.style[e])
                        : (i = i || $(t))
                        ? (n =
                            i[e] ||
                            i.getPropertyValue(e) ||
                            i.getPropertyValue(
                              e.replace(C, "-$1").toLowerCase()
                            ))
                        : t.currentStyle && (n = t.currentStyle[e]),
                      null == r ||
                      (n && "none" !== n && "auto" !== n && "auto auto" !== n)
                        ? n
                        : r)
                    : U(t);
                }),
                J = (X.convertToPixels = function (t, i, s, r, n) {
                  if ("px" === r || !r) return s;
                  if ("auto" === r || !s) return 0;
                  var a,
                    o,
                    l,
                    c = R.test(i),
                    u = t,
                    p = B.style,
                    f = 0 > s;
                  if ((f && (s = -s), "%" === r && -1 !== i.indexOf("border")))
                    a = (s / 100) * (c ? t.clientWidth : t.clientHeight);
                  else {
                    if (
                      ((p.cssText =
                        "border:0 solid red;position:" +
                        Q(t, "position") +
                        ";line-height:0;"),
                      "%" !== r && u.appendChild)
                    )
                      p[c ? "borderLeftWidth" : "borderTopWidth"] = s + r;
                    else {
                      if (
                        ((o = (u = t.parentNode || L.body)._gsCache),
                        (l = e.ticker.frame),
                        o && c && o.time === l)
                      )
                        return (o.width * s) / 100;
                      p[c ? "width" : "height"] = s + r;
                    }
                    u.appendChild(B),
                      (a = parseFloat(B[c ? "offsetWidth" : "offsetHeight"])),
                      u.removeChild(B),
                      c &&
                        "%" === r &&
                        !1 !== h.cacheWidths &&
                        (((o = u._gsCache = u._gsCache || {}).time = l),
                        (o.width = (a / s) * 100)),
                      0 !== a || n || (a = J(t, i, s, r, !0));
                  }
                  return f ? -a : a;
                }),
                K = (X.calculateOffset = function (t, e, i) {
                  if ("absolute" !== Q(t, "position", i)) return 0;
                  var s = "left" === e ? "Left" : "Top",
                    r = Q(t, "margin" + s, i);
                  return (
                    t["offset" + s] -
                    (J(t, e, parseFloat(r), r.replace(T, "")) || 0)
                  );
                }),
                tt = function (t, e) {
                  var i,
                    s,
                    r,
                    n = {};
                  if ((e = e || $(t, null)))
                    if ((i = e.length))
                      for (; --i > -1; )
                        (-1 === (r = e[i]).indexOf("-transform") || St === r) &&
                          (n[r.replace(M, A)] = e.getPropertyValue(r));
                    else
                      for (i in e)
                        (-1 === i.indexOf("Transform") || Pt === i) &&
                          (n[i] = e[i]);
                  else if ((e = t.currentStyle || t.style))
                    for (i in e)
                      "string" == typeof i &&
                        void 0 === n[i] &&
                        (n[i.replace(M, A)] = e[i]);
                  return (
                    H || (n.opacity = U(t)),
                    (s = Et(t, e, !1)),
                    (n.rotation = s.rotation),
                    (n.skewX = s.skewX),
                    (n.scaleX = s.scaleX),
                    (n.scaleY = s.scaleY),
                    (n.x = s.x),
                    (n.y = s.y),
                    Ct &&
                      ((n.z = s.z),
                      (n.rotationX = s.rotationX),
                      (n.rotationY = s.rotationY),
                      (n.scaleZ = s.scaleZ)),
                    n.filters && delete n.filters,
                    n
                  );
                },
                et = function (t, e, i, s, r) {
                  var n,
                    a,
                    o,
                    h = {},
                    l = t.style;
                  for (a in i)
                    "cssText" !== a &&
                      "length" !== a &&
                      isNaN(a) &&
                      (e[a] !== (n = i[a]) || (r && r[a])) &&
                      -1 === a.indexOf("Origin") &&
                      ("number" == typeof n || "string" == typeof n) &&
                      ((h[a] =
                        "auto" !== n || ("left" !== a && "top" !== a)
                          ? ("" !== n && "auto" !== n && "none" !== n) ||
                            "string" != typeof e[a] ||
                            "" === e[a].replace(w, "")
                            ? n
                            : 0
                          : K(t, a)),
                      void 0 !== l[a] && (o = new _t(l, a, l[a], o)));
                  if (s) for (a in s) "className" !== a && (h[a] = s[a]);
                  return { difs: h, firstMPT: o };
                },
                it = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                st = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                rt = function (t, e, i) {
                  var s = parseFloat(
                      "width" === e ? t.offsetWidth : t.offsetHeight
                    ),
                    r = it[e],
                    n = r.length;
                  for (i = i || $(t, null); --n > -1; )
                    (s -= parseFloat(Q(t, "padding" + r[n], i, !0)) || 0),
                      (s -=
                        parseFloat(Q(t, "border" + r[n] + "Width", i, !0)) ||
                        0);
                  return s;
                },
                nt = function (t, e) {
                  (null == t ||
                    "" === t ||
                    "auto" === t ||
                    "auto auto" === t) &&
                    (t = "0 0");
                  var i = t.split(" "),
                    s =
                      -1 !== t.indexOf("left")
                        ? "0%"
                        : -1 !== t.indexOf("right")
                        ? "100%"
                        : i[0],
                    r =
                      -1 !== t.indexOf("top")
                        ? "0%"
                        : -1 !== t.indexOf("bottom")
                        ? "100%"
                        : i[1];
                  return (
                    null == r
                      ? (r = "center" === s ? "50%" : "0")
                      : "center" === r && (r = "50%"),
                    ("center" === s ||
                      (isNaN(parseFloat(s)) && -1 === (s + "").indexOf("="))) &&
                      (s = "50%"),
                    (t = s + " " + r + (i.length > 2 ? " " + i[2] : "")),
                    e &&
                      ((e.oxp = -1 !== s.indexOf("%")),
                      (e.oyp = -1 !== r.indexOf("%")),
                      (e.oxr = "=" === s.charAt(1)),
                      (e.oyr = "=" === r.charAt(1)),
                      (e.ox = parseFloat(s.replace(w, ""))),
                      (e.oy = parseFloat(r.replace(w, ""))),
                      (e.v = t)),
                    e || t
                  );
                },
                at = function (t, e) {
                  return "string" == typeof t && "=" === t.charAt(1)
                    ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2))
                    : parseFloat(t) - parseFloat(e);
                },
                ot = function (t, e) {
                  return null == t
                    ? e
                    : "string" == typeof t && "=" === t.charAt(1)
                    ? parseInt(t.charAt(0) + "1", 10) *
                        parseFloat(t.substr(2)) +
                      e
                    : parseFloat(t);
                },
                ht = function (t, e, i, s) {
                  var r, n, a, o, h;
                  return (
                    null == t
                      ? (o = e)
                      : "number" == typeof t
                      ? (o = t)
                      : ((r = 360),
                        (n = t.split("_")),
                        (a =
                          ((h = "=" === t.charAt(1))
                            ? parseInt(t.charAt(0) + "1", 10) *
                              parseFloat(n[0].substr(2))
                            : parseFloat(n[0])) *
                            (-1 === t.indexOf("rad") ? 1 : F) -
                          (h ? 0 : e)),
                        n.length &&
                          (s && (s[i] = e + a),
                          -1 !== t.indexOf("short") &&
                            (a %= r) !== a % 180 &&
                            (a = 0 > a ? a + r : a - r),
                          -1 !== t.indexOf("_cw") && 0 > a
                            ? (a =
                                ((a + 9999999999 * r) % r) - (0 | (a / r)) * r)
                            : -1 !== t.indexOf("ccw") &&
                              a > 0 &&
                              (a =
                                ((a - 9999999999 * r) % r) -
                                (0 | (a / r)) * r)),
                        (o = e + a)),
                    1e-6 > o && o > -1e-6 && (o = 0),
                    o
                  );
                },
                lt = {
                  aqua: [0, 255, 255],
                  lime: [0, 255, 0],
                  silver: [192, 192, 192],
                  black: [0, 0, 0],
                  maroon: [128, 0, 0],
                  teal: [0, 128, 128],
                  blue: [0, 0, 255],
                  navy: [0, 0, 128],
                  white: [255, 255, 255],
                  fuchsia: [255, 0, 255],
                  olive: [128, 128, 0],
                  yellow: [255, 255, 0],
                  orange: [255, 165, 0],
                  gray: [128, 128, 128],
                  purple: [128, 0, 128],
                  green: [0, 128, 0],
                  red: [255, 0, 0],
                  pink: [255, 192, 203],
                  cyan: [0, 255, 255],
                  transparent: [255, 255, 255, 0],
                },
                ct = function (t, e, i) {
                  return (
                    0 |
                    (255 *
                      (1 > 6 * (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t)
                        ? e + 6 * (i - e) * t
                        : 0.5 > t
                        ? i
                        : 2 > 3 * t
                        ? e + 6 * (i - e) * (2 / 3 - t)
                        : e) +
                      0.5)
                  );
                },
                ut = (h.parseColor = function (t) {
                  var e, i, s, r, n, a;
                  return t && "" !== t
                    ? "number" == typeof t
                      ? [t >> 16, 255 & (t >> 8), 255 & t]
                      : ("," === t.charAt(t.length - 1) &&
                          (t = t.substr(0, t.length - 1)),
                        lt[t]
                          ? lt[t]
                          : "#" === t.charAt(0)
                          ? (4 === t.length &&
                              ((e = t.charAt(1)),
                              (i = t.charAt(2)),
                              (s = t.charAt(3)),
                              (t = "#" + e + e + i + i + s + s)),
                            [
                              (t = parseInt(t.substr(1), 16)) >> 16,
                              255 & (t >> 8),
                              255 & t,
                            ])
                          : "hsl" === t.substr(0, 3)
                          ? ((t = t.match(v)),
                            (r = (Number(t[0]) % 360) / 360),
                            (n = Number(t[1]) / 100),
                            (e =
                              2 * (a = Number(t[2]) / 100) -
                              (i = 0.5 >= a ? a * (n + 1) : a + n - a * n)),
                            t.length > 3 && (t[3] = Number(t[3])),
                            (t[0] = ct(r + 1 / 3, e, i)),
                            (t[1] = ct(r, e, i)),
                            (t[2] = ct(r - 1 / 3, e, i)),
                            t)
                          : (((t = t.match(v) || lt.transparent)[0] = Number(
                              t[0]
                            )),
                            (t[1] = Number(t[1])),
                            (t[2] = Number(t[2])),
                            t.length > 3 && (t[3] = Number(t[3])),
                            t))
                    : lt.black;
                }),
                pt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
              for (u in lt) pt += "|" + u + "\\b";
              pt = RegExp(pt + ")", "gi");
              var ft = function (t, e, i, s) {
                  if (null == t)
                    return function (t) {
                      return t;
                    };
                  var r,
                    n = e ? (t.match(pt) || [""])[0] : "",
                    a = t.split(n).join("").match(x) || [],
                    o = t.substr(0, t.indexOf(a[0])),
                    h = ")" === t.charAt(t.length - 1) ? ")" : "",
                    l = -1 !== t.indexOf(" ") ? " " : ",",
                    c = a.length,
                    u = c > 0 ? a[0].replace(v, "") : "";
                  return c
                    ? (r = e
                        ? function (t) {
                            var e, p, f, d;
                            if ("number" == typeof t) t += u;
                            else if (s && E.test(t)) {
                              for (
                                d = t.replace(E, "|").split("|"), f = 0;
                                d.length > f;
                                f++
                              )
                                d[f] = r(d[f]);
                              return d.join(",");
                            }
                            if (
                              ((e = (t.match(pt) || [n])[0]),
                              (f = (p = t.split(e).join("").match(x) || [])
                                .length),
                              c > f--)
                            )
                              for (; c > ++f; )
                                p[f] = i ? p[0 | ((f - 1) / 2)] : a[f];
                            return (
                              o +
                              p.join(l) +
                              l +
                              e +
                              h +
                              (-1 !== t.indexOf("inset") ? " inset" : "")
                            );
                          }
                        : function (t) {
                            var e, n, p;
                            if ("number" == typeof t) t += u;
                            else if (s && E.test(t)) {
                              for (
                                n = t.replace(E, "|").split("|"), p = 0;
                                n.length > p;
                                p++
                              )
                                n[p] = r(n[p]);
                              return n.join(",");
                            }
                            if (((p = (e = t.match(x) || []).length), c > p--))
                              for (; c > ++p; )
                                e[p] = i ? e[0 | ((p - 1) / 2)] : a[p];
                            return o + e.join(l) + h;
                          })
                    : function (t) {
                        return t;
                      };
                },
                dt = function (t) {
                  return (
                    (t = t.split(",")),
                    function (e, i, s, r, n, a, o) {
                      var h,
                        l = (i + "").split(" ");
                      for (o = {}, h = 0; 4 > h; h++)
                        o[t[h]] = l[h] = l[h] || l[((h - 1) / 2) >> 0];
                      return r.parse(e, o, n, a);
                    }
                  );
                },
                _t =
                  ((X._setPluginRatio = function (t) {
                    this.plugin.setRatio(t);
                    for (
                      var e,
                        i,
                        s,
                        r,
                        n = this.data,
                        a = n.proxy,
                        o = n.firstMPT;
                      o;

                    )
                      (e = a[o.v]),
                        o.r
                          ? (e = Math.round(e))
                          : 1e-6 > e && e > -1e-6 && (e = 0),
                        (o.t[o.p] = e),
                        (o = o._next);
                    if (
                      (n.autoRotate && (n.autoRotate.rotation = a.rotation),
                      1 === t)
                    )
                      for (o = n.firstMPT; o; ) {
                        if ((i = o.t).type) {
                          if (1 === i.type) {
                            for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++)
                              r += i["xn" + s] + i["xs" + (s + 1)];
                            i.e = r;
                          }
                        } else i.e = i.s + i.xs0;
                        o = o._next;
                      }
                  }),
                  function (t, e, i, s, r) {
                    (this.t = t),
                      (this.p = e),
                      (this.v = i),
                      (this.r = r),
                      s && ((s._prev = this), (this._next = s));
                  }),
                mt =
                  ((X._parseToProxy = function (t, e, i, s, r, n) {
                    var a,
                      o,
                      h,
                      l,
                      c,
                      u = s,
                      p = {},
                      f = {},
                      d = i._transform,
                      _ = N;
                    for (
                      i._transform = null,
                        N = e,
                        s = c = i.parse(t, e, s, r),
                        N = _,
                        n &&
                          ((i._transform = d),
                          u &&
                            ((u._prev = null),
                            u._prev && (u._prev._next = null)));
                      s && s !== u;

                    ) {
                      if (
                        1 >= s.type &&
                        ((f[(o = s.p)] = s.s + s.c),
                        (p[o] = s.s),
                        n || ((l = new _t(s, "s", o, l, s.r)), (s.c = 0)),
                        1 === s.type)
                      )
                        for (a = s.l; --a > 0; )
                          (h = "xn" + a),
                            (f[(o = s.p + "_" + h)] = s.data[h]),
                            (p[o] = s[h]),
                            n || (l = new _t(s, h, o, l, s.rxp[h]));
                      s = s._next;
                    }
                    return { proxy: p, end: f, firstMPT: l, pt: c };
                  }),
                  (X.CSSPropTween = function (t, e, s, r, n, a, h, l, c, u, p) {
                    (this.t = t),
                      (this.p = e),
                      (this.s = s),
                      (this.c = r),
                      (this.n = h || e),
                      t instanceof mt || o.push(this.n),
                      (this.r = l),
                      (this.type = a || 0),
                      c && ((this.pr = c), (i = !0)),
                      (this.b = void 0 === u ? s : u),
                      (this.e = void 0 === p ? s + r : p),
                      n && ((this._next = n), (n._prev = this));
                  })),
                gt = (h.parseComplex = function (t, e, i, s, r, n, a, o, h, l) {
                  (a = new mt(
                    t,
                    e,
                    0,
                    0,
                    a,
                    l ? 2 : 1,
                    null,
                    !1,
                    o,
                    (i = i || n || ""),
                    s
                  )),
                    (s += "");
                  var c,
                    u,
                    f,
                    d,
                    _,
                    m,
                    g,
                    x,
                    w,
                    T,
                    b,
                    P,
                    S = i.split(", ").join(",").split(" "),
                    C = s.split(", ").join(",").split(" "),
                    M = S.length,
                    O = !1 !== p;
                  for (
                    (-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) &&
                      ((S = S.join(" ").replace(E, ", ").split(" ")),
                      (C = C.join(" ").replace(E, ", ").split(" ")),
                      (M = S.length)),
                      M !== C.length && (M = (S = (n || "").split(" ")).length),
                      a.plugin = h,
                      a.setRatio = l,
                      c = 0;
                    M > c;
                    c++
                  )
                    if (
                      ((d = S[c]), (_ = C[c]), (x = parseFloat(d)) || 0 === x)
                    )
                      a.appendXtra(
                        "",
                        x,
                        at(_, x),
                        _.replace(y, ""),
                        O && -1 !== _.indexOf("px"),
                        !0
                      );
                    else if (r && ("#" === d.charAt(0) || lt[d] || k.test(d)))
                      (P = "," === _.charAt(_.length - 1) ? ")," : ")"),
                        (d = ut(d)),
                        (_ = ut(_)),
                        (w = d.length + _.length > 6) && !H && 0 === _[3]
                          ? ((a["xs" + a.l] += a.l
                              ? " transparent"
                              : "transparent"),
                            (a.e = a.e.split(C[c]).join("transparent")))
                          : (H || (w = !1),
                            a
                              .appendXtra(
                                w ? "rgba(" : "rgb(",
                                d[0],
                                _[0] - d[0],
                                ",",
                                !0,
                                !0
                              )
                              .appendXtra("", d[1], _[1] - d[1], ",", !0)
                              .appendXtra(
                                "",
                                d[2],
                                _[2] - d[2],
                                w ? "," : P,
                                !0
                              ),
                            w &&
                              ((d = 4 > d.length ? 1 : d[3]),
                              a.appendXtra(
                                "",
                                d,
                                (4 > _.length ? 1 : _[3]) - d,
                                P,
                                !1
                              )));
                    else if ((m = d.match(v))) {
                      if (!(g = _.match(y)) || g.length !== m.length) return a;
                      for (f = 0, u = 0; m.length > u; u++)
                        (b = m[u]),
                          (T = d.indexOf(b, f)),
                          a.appendXtra(
                            d.substr(f, T - f),
                            Number(b),
                            at(g[u], b),
                            "",
                            O && "px" === d.substr(T + b.length, 2),
                            0 === u
                          ),
                          (f = T + b.length);
                      a["xs" + a.l] += d.substr(f);
                    } else a["xs" + a.l] += a.l ? " " + d : d;
                  if (-1 !== s.indexOf("=") && a.data) {
                    for (P = a.xs0 + a.data.s, c = 1; a.l > c; c++)
                      P += a["xs" + c] + a.data["xn" + c];
                    a.e = P + a["xs" + c];
                  }
                  return a.l || ((a.type = -1), (a.xs0 = a.e)), a.xfirst || a;
                }),
                vt = 9;
              for ((u = mt.prototype).l = u.pr = 0; --vt > 0; )
                (u["xn" + vt] = 0), (u["xs" + vt] = "");
              (u.xs0 = ""),
                (u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null),
                (u.appendXtra = function (t, e, i, s, r, n) {
                  var a = this,
                    o = a.l;
                  return (
                    (a["xs" + o] += n && o ? " " + t : t || ""),
                    i || 0 === o || a.plugin
                      ? (a.l++,
                        (a.type = a.setRatio ? 2 : 1),
                        (a["xs" + a.l] = s || ""),
                        o > 0
                          ? ((a.data["xn" + o] = e + i),
                            (a.rxp["xn" + o] = r),
                            (a["xn" + o] = e),
                            a.plugin ||
                              ((a.xfirst = new mt(
                                a,
                                "xn" + o,
                                e,
                                i,
                                a.xfirst || a,
                                0,
                                a.n,
                                r,
                                a.pr
                              )),
                              (a.xfirst.xs0 = 0)),
                            a)
                          : ((a.data = { s: e + i }),
                            (a.rxp = {}),
                            (a.s = e),
                            (a.c = i),
                            (a.r = r),
                            a))
                      : ((a["xs" + o] += e + (s || "")), a)
                  );
                });
              var yt = function (t, e) {
                  (e = e || {}),
                    (this.p = (e.prefix && G(t)) || t),
                    (c[t] = c[this.p] = this),
                    (this.format =
                      e.formatter ||
                      ft(e.defaultValue, e.color, e.collapsible, e.multi)),
                    e.parser && (this.parse = e.parser),
                    (this.clrs = e.color),
                    (this.multi = e.multi),
                    (this.keyword = e.keyword),
                    (this.dflt = e.defaultValue),
                    (this.pr = e.priority || 0);
                },
                xt = (X._registerComplexSpecialProp = function (t, e, i) {
                  "object" != r(e) && (e = { parser: i });
                  var s,
                    n = t.split(","),
                    a = e.defaultValue;
                  for (i = i || [a], s = 0; n.length > s; s++)
                    (e.prefix = 0 === s && e.prefix),
                      (e.defaultValue = i[s] || a),
                      new yt(n[s], e);
                }),
                wt = function (t) {
                  if (!c[t]) {
                    var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                    xt(t, {
                      parser: function (t, i, s, r, n, a, o) {
                        var h = l.com.greensock.plugins[e];
                        return h
                          ? (h._cssRegister(), c[s].parse(t, i, s, r, n, a, o))
                          : (V("Error: " + e + " js file not loaded."), n);
                      },
                    });
                  }
                };
              ((u = yt.prototype).parseComplex = function (t, e, i, s, r, n) {
                var a,
                  o,
                  h,
                  l,
                  c,
                  u,
                  p = this.keyword;
                if (
                  (this.multi &&
                    (E.test(i) || E.test(e)
                      ? ((o = e.replace(E, "|").split("|")),
                        (h = i.replace(E, "|").split("|")))
                      : p && ((o = [e]), (h = [i]))),
                  h)
                ) {
                  for (
                    l = h.length > o.length ? h.length : o.length, a = 0;
                    l > a;
                    a++
                  )
                    (e = o[a] = o[a] || this.dflt),
                      (i = h[a] = h[a] || this.dflt),
                      p &&
                        (c = e.indexOf(p)) !== (u = i.indexOf(p)) &&
                        (-1 === u
                          ? (o[a] = o[a].split(p).join(""))
                          : -1 === c && (o[a] += " " + p));
                  (e = o.join(", ")), (i = h.join(", "));
                }
                return gt(
                  t,
                  this.p,
                  e,
                  i,
                  this.clrs,
                  this.dflt,
                  s,
                  this.pr,
                  r,
                  n
                );
              }),
                (u.parse = function (t, e, i, s, r, n) {
                  return this.parseComplex(
                    t.style,
                    this.format(Q(t, this.p, a, !1, this.dflt)),
                    this.format(e),
                    r,
                    n
                  );
                }),
                (h.registerSpecialProp = function (t, e, i) {
                  xt(t, {
                    parser: function (t, s, r, n, a, o) {
                      var h = new mt(t, r, 0, 0, a, 2, r, !1, i);
                      return (
                        (h.plugin = o), (h.setRatio = e(t, s, n._tween, r)), h
                      );
                    },
                    priority: i,
                  });
                }),
                (h.useSVGTransformAttr = d);
              var Tt,
                bt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
                  ","
                ),
                Pt = G("transform"),
                St = q + "transform",
                kt = G("transformOrigin"),
                Ct = null !== G("perspective"),
                Mt = (X.Transform = function () {
                  (this.perspective =
                    parseFloat(h.defaultTransformPerspective) || 0),
                    (this.force3D =
                      !(!1 === h.defaultForce3D || !Ct) &&
                      (h.defaultForce3D || "auto"));
                }),
                Ot = window.SVGElement,
                At = function (t, e, i) {
                  var s,
                    r = L.createElementNS("http://www.w3.org/2000/svg", t),
                    n = /([a-z])([A-Z])/g;
                  for (s in i)
                    r.setAttributeNS(
                      null,
                      s.replace(n, "$1-$2").toLowerCase(),
                      i[s]
                    );
                  return e.appendChild(r), r;
                },
                Rt = L.documentElement,
                Dt = (function () {
                  var t,
                    e,
                    i,
                    s = g || (/Android/i.test(Y) && !window.chrome);
                  return (
                    L.createElementNS &&
                      !s &&
                      ((t = At("svg", Rt)),
                      (i = (e = At("rect", t, {
                        width: 100,
                        height: 50,
                        x: 100,
                      })).getBoundingClientRect().width),
                      (e.style[kt] = "50% 50%"),
                      (e.style[Pt] = "scaleX(0.5)"),
                      (s = i === e.getBoundingClientRect().width && !(_ && Ct)),
                      Rt.removeChild(t)),
                    s
                  );
                })(),
                It = function (t, e, i, s) {
                  var r, n;
                  (s && (n = s.split(" ")).length) ||
                    ((r = t.getBBox()),
                    (n = [
                      (-1 !== (e = nt(e).split(" "))[0].indexOf("%")
                        ? (parseFloat(e[0]) / 100) * r.width
                        : parseFloat(e[0])) + r.x,
                      (-1 !== e[1].indexOf("%")
                        ? (parseFloat(e[1]) / 100) * r.height
                        : parseFloat(e[1])) + r.y,
                    ])),
                    (i.xOrigin = parseFloat(n[0])),
                    (i.yOrigin = parseFloat(n[1])),
                    t.setAttribute("data-svg-origin", n.join(" "));
                },
                Et = (X.getTransform = function (t, e, i, s) {
                  if (t._gsTransform && i && !s) return t._gsTransform;
                  var r,
                    n,
                    o,
                    l,
                    c,
                    u,
                    p,
                    f,
                    d,
                    _,
                    m = (i && t._gsTransform) || new Mt(),
                    g = 0 > m.scaleX,
                    v = 1e5,
                    y =
                      (Ct &&
                        (parseFloat(Q(t, kt, e, !1, "0 0 0").split(" ")[2]) ||
                          m.zOrigin)) ||
                      0,
                    x = parseFloat(h.defaultTransformPerspective) || 0;
                  if (
                    (Pt
                      ? (n = Q(t, St, e, !0))
                      : t.currentStyle &&
                        (n =
                          (n = t.currentStyle.filter.match(D)) && 4 === n.length
                            ? [
                                n[0].substr(4),
                                Number(n[2].substr(4)),
                                Number(n[1].substr(4)),
                                n[3].substr(4),
                                m.x || 0,
                                m.y || 0,
                              ].join(",")
                            : ""),
                    (r =
                      !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n),
                    (m.svg = !!(
                      Ot &&
                      "function" == typeof t.getBBox &&
                      t.getCTM &&
                      (!t.parentNode ||
                        (t.parentNode.getBBox && t.parentNode.getCTM))
                    )),
                    m.svg &&
                      (r &&
                        -1 !== (t.style[Pt] + "").indexOf("matrix") &&
                        ((n = t.style[Pt]), (r = !1)),
                      It(
                        t,
                        Q(t, kt, a, !1, "50% 50%") + "",
                        m,
                        t.getAttribute("data-svg-origin")
                      ),
                      (Tt = h.useSVGTransformAttr || Dt),
                      (o = t.getAttribute("transform")),
                      r &&
                        o &&
                        -1 !== o.indexOf("matrix") &&
                        ((n = o), (r = 0))),
                    !r)
                  ) {
                    for (
                      l = (o = (n || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [])
                        .length;
                      --l > -1;

                    )
                      (c = Number(o[l])),
                        (o[l] = (u = c - (c |= 0))
                          ? (0 | (u * v + (0 > u ? -0.5 : 0.5))) / v + c
                          : c);
                    if (16 === o.length) {
                      var w,
                        T,
                        b,
                        P,
                        S,
                        k = o[0],
                        C = o[1],
                        M = o[2],
                        O = o[3],
                        A = o[4],
                        R = o[5],
                        I = o[6],
                        E = o[7],
                        z = o[8],
                        N = o[9],
                        L = o[10],
                        j = o[12],
                        B = o[13],
                        W = o[14],
                        X = o[11],
                        Y = Math.atan2(I, L);
                      m.zOrigin &&
                        ((j = z * (W = -m.zOrigin) - o[12]),
                        (B = N * W - o[13]),
                        (W = L * W + m.zOrigin - o[14])),
                        (m.rotationX = Y * F),
                        Y &&
                          ((w =
                            A * (P = Math.cos(-Y)) + z * (S = Math.sin(-Y))),
                          (T = R * P + N * S),
                          (b = I * P + L * S),
                          (z = A * -S + z * P),
                          (N = R * -S + N * P),
                          (L = I * -S + L * P),
                          (X = E * -S + X * P),
                          (A = w),
                          (R = T),
                          (I = b)),
                        (Y = Math.atan2(z, L)),
                        (m.rotationY = Y * F),
                        Y &&
                          ((T =
                            C * (P = Math.cos(-Y)) - N * (S = Math.sin(-Y))),
                          (b = M * P - L * S),
                          (N = C * S + N * P),
                          (L = M * S + L * P),
                          (X = O * S + X * P),
                          (k = w = k * P - z * S),
                          (C = T),
                          (M = b)),
                        (Y = Math.atan2(C, k)),
                        (m.rotation = Y * F),
                        Y &&
                          ((k =
                            k * (P = Math.cos(-Y)) + A * (S = Math.sin(-Y))),
                          (T = C * P + R * S),
                          (R = C * -S + R * P),
                          (I = M * -S + I * P),
                          (C = T)),
                        m.rotationX &&
                          Math.abs(m.rotationX) + Math.abs(m.rotation) >
                            359.9 &&
                          ((m.rotationX = m.rotation = 0),
                          (m.rotationY += 180)),
                        (m.scaleX =
                          (0 | (Math.sqrt(k * k + C * C) * v + 0.5)) / v),
                        (m.scaleY =
                          (0 | (Math.sqrt(R * R + N * N) * v + 0.5)) / v),
                        (m.scaleZ =
                          (0 | (Math.sqrt(I * I + L * L) * v + 0.5)) / v),
                        (m.skewX = 0),
                        (m.perspective = X ? 1 / (0 > X ? -X : X) : 0),
                        (m.x = j),
                        (m.y = B),
                        (m.z = W),
                        m.svg &&
                          ((m.x -= m.xOrigin - (m.xOrigin * k - m.yOrigin * A)),
                          (m.y -= m.yOrigin - (m.yOrigin * C - m.xOrigin * R)));
                    } else if (
                      !(
                        (Ct &&
                          !s &&
                          o.length &&
                          m.x === o[4] &&
                          m.y === o[5] &&
                          (m.rotationX || m.rotationY)) ||
                        (void 0 !== m.x && "none" === Q(t, "display", e))
                      )
                    ) {
                      var H = o.length >= 6,
                        U = H ? o[0] : 1,
                        V = o[1] || 0,
                        q = o[2] || 0,
                        Z = H ? o[3] : 1;
                      (m.x = o[4] || 0),
                        (m.y = o[5] || 0),
                        (p = Math.sqrt(U * U + V * V)),
                        (f = Math.sqrt(Z * Z + q * q)),
                        (d = U || V ? Math.atan2(V, U) * F : m.rotation || 0),
                        (_ = q || Z ? Math.atan2(q, Z) * F + d : m.skewX || 0),
                        Math.abs(_) > 90 &&
                          270 > Math.abs(_) &&
                          (g
                            ? ((p *= -1),
                              (_ += 0 >= d ? 180 : -180),
                              (d += 0 >= d ? 180 : -180))
                            : ((f *= -1), (_ += 0 >= _ ? 180 : -180))),
                        (m.scaleX = p),
                        (m.scaleY = f),
                        (m.rotation = d),
                        (m.skewX = _),
                        Ct &&
                          ((m.rotationX = m.rotationY = m.z = 0),
                          (m.perspective = x),
                          (m.scaleZ = 1)),
                        m.svg &&
                          ((m.x -= m.xOrigin - (m.xOrigin * U - m.yOrigin * V)),
                          (m.y -= m.yOrigin - (m.yOrigin * Z - m.xOrigin * q)));
                    }
                    for (l in ((m.zOrigin = y), m))
                      2e-5 > m[l] && m[l] > -2e-5 && (m[l] = 0);
                  }
                  return (
                    i &&
                      ((t._gsTransform = m),
                      m.svg &&
                        (Tt && t.style[Pt]
                          ? Lt(t.style, Pt)
                          : !Tt &&
                            t.getAttribute("transform") &&
                            t.removeAttribute("transform"))),
                    m
                  );
                }),
                zt = function (t) {
                  var e,
                    i,
                    s = this.data,
                    r = -s.rotation * z,
                    n = r + s.skewX * z,
                    a = 1e5,
                    o = (0 | (Math.cos(r) * s.scaleX * a)) / a,
                    h = (0 | (Math.sin(r) * s.scaleX * a)) / a,
                    l = (0 | (Math.sin(n) * -s.scaleY * a)) / a,
                    c = (0 | (Math.cos(n) * s.scaleY * a)) / a,
                    u = this.t.style,
                    p = this.t.currentStyle;
                  if (p) {
                    (i = h),
                      (h = -l),
                      (l = -i),
                      (e = p.filter),
                      (u.filter = "");
                    var f,
                      d,
                      _ = this.t.offsetWidth,
                      m = this.t.offsetHeight,
                      v = "absolute" !== p.position,
                      y =
                        "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                        o +
                        ", M12=" +
                        h +
                        ", M21=" +
                        l +
                        ", M22=" +
                        c,
                      x = s.x + (_ * s.xPercent) / 100,
                      w = s.y + (m * s.yPercent) / 100;
                    if (
                      (null != s.ox &&
                        ((x +=
                          (f = (s.oxp ? 0.01 * _ * s.ox : s.ox) - _ / 2) -
                          (f * o +
                            (d = (s.oyp ? 0.01 * m * s.oy : s.oy) - m / 2) *
                              h)),
                        (w += d - (f * l + d * c))),
                      v
                        ? (y +=
                            ", Dx=" +
                            ((f = _ / 2) - (f * o + (d = m / 2) * h) + x) +
                            ", Dy=" +
                            (d - (f * l + d * c) + w) +
                            ")")
                        : (y += ", sizingMethod='auto expand')"),
                      (u.filter =
                        -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(")
                          ? e.replace(I, y)
                          : y + " " + e),
                      (0 === t || 1 === t) &&
                        1 === o &&
                        0 === h &&
                        0 === l &&
                        1 === c &&
                        ((v && -1 === y.indexOf("Dx=0, Dy=0")) ||
                          (b.test(e) && 100 !== parseFloat(RegExp.$1)) ||
                          (-1 === e.indexOf(e.indexOf("Alpha")) &&
                            u.removeAttribute("filter"))),
                      !v)
                    ) {
                      var P,
                        S,
                        k,
                        C = 8 > g ? 1 : -1;
                      for (
                        f = s.ieOffsetX || 0,
                          d = s.ieOffsetY || 0,
                          s.ieOffsetX = Math.round(
                            (_ -
                              ((0 > o ? -o : o) * _ + (0 > h ? -h : h) * m)) /
                              2 +
                              x
                          ),
                          s.ieOffsetY = Math.round(
                            (m -
                              ((0 > c ? -c : c) * m + (0 > l ? -l : l) * _)) /
                              2 +
                              w
                          ),
                          vt = 0;
                        4 > vt;
                        vt++
                      )
                        (k =
                          (i =
                            -1 !== (P = p[(S = st[vt])]).indexOf("px")
                              ? parseFloat(P)
                              : J(this.t, S, parseFloat(P), P.replace(T, "")) ||
                                0) !== s[S]
                            ? 2 > vt
                              ? -s.ieOffsetX
                              : -s.ieOffsetY
                            : 2 > vt
                            ? f - s.ieOffsetX
                            : d - s.ieOffsetY),
                          (u[S] =
                            (s[S] = Math.round(
                              i - k * (0 === vt || 2 === vt ? 1 : C)
                            )) + "px");
                    }
                  }
                },
                Ft = (X.set3DTransformRatio = X.setTransformRatio = function (
                  t
                ) {
                  var e,
                    i,
                    s,
                    r,
                    n,
                    a,
                    o,
                    h,
                    l,
                    c,
                    u,
                    p,
                    f,
                    d,
                    m,
                    g,
                    v,
                    y,
                    x,
                    w,
                    T,
                    b,
                    P,
                    S = this.data,
                    k = this.t.style,
                    C = S.rotation,
                    M = S.rotationX,
                    O = S.rotationY,
                    A = S.scaleX,
                    R = S.scaleY,
                    D = S.scaleZ,
                    I = S.x,
                    E = S.y,
                    F = S.z,
                    N = S.svg,
                    L = S.perspective,
                    j = S.force3D;
                  if (
                    !(
                      (((1 !== t && 0 !== t) ||
                        "auto" !== j ||
                        (this.tween._totalTime !== this.tween._totalDuration &&
                          this.tween._totalTime)) &&
                        j) ||
                      F ||
                      L ||
                      O ||
                      M
                    ) ||
                    (Tt && N) ||
                    !Ct
                  )
                    C || S.skewX || N
                      ? ((C *= z),
                        (b = S.skewX * z),
                        (P = 1e5),
                        (e = Math.cos(C) * A),
                        (r = Math.sin(C) * A),
                        (i = Math.sin(C - b) * -R),
                        (n = Math.cos(C - b) * R),
                        b &&
                          "simple" === S.skewType &&
                          ((v = Math.tan(b)),
                          (i *= v = Math.sqrt(1 + v * v)),
                          (n *= v)),
                        N &&
                          ((d = 1e-6) >
                            (I +=
                              S.xOrigin - (S.xOrigin * e + S.yOrigin * i)) &&
                            I > -d &&
                            (I = 0),
                          d >
                            (E +=
                              S.yOrigin - (S.xOrigin * r + S.yOrigin * n)) &&
                            E > -d &&
                            (E = 0)),
                        (x =
                          (0 | (e * P)) / P +
                          "," +
                          (0 | (r * P)) / P +
                          "," +
                          (0 | (i * P)) / P +
                          "," +
                          (0 | (n * P)) / P +
                          "," +
                          I +
                          "," +
                          E +
                          ")"),
                        N && Tt
                          ? this.t.setAttribute("transform", "matrix(" + x)
                          : (k[Pt] =
                              (S.xPercent || S.yPercent
                                ? "translate(" +
                                  S.xPercent +
                                  "%," +
                                  S.yPercent +
                                  "%) matrix("
                                : "matrix(") + x))
                      : (k[Pt] =
                          (S.xPercent || S.yPercent
                            ? "translate(" +
                              S.xPercent +
                              "%," +
                              S.yPercent +
                              "%) matrix("
                            : "matrix(") +
                          A +
                          ",0,0," +
                          R +
                          "," +
                          I +
                          "," +
                          E +
                          ")");
                  else {
                    if (
                      (_ &&
                        ((d = 1e-4) > A && A > -d && (A = D = 2e-5),
                        d > R && R > -d && (R = D = 2e-5),
                        !L || S.z || S.rotationX || S.rotationY || (L = 0)),
                      C || S.skewX)
                    )
                      (C *= z),
                        (m = e = Math.cos(C)),
                        (g = r = Math.sin(C)),
                        S.skewX &&
                          ((C -= S.skewX * z),
                          (m = Math.cos(C)),
                          (g = Math.sin(C)),
                          "simple" === S.skewType &&
                            ((v = Math.tan(S.skewX * z)),
                            (m *= v = Math.sqrt(1 + v * v)),
                            (g *= v))),
                        (i = -g),
                        (n = m);
                    else {
                      if (!(O || M || 1 !== D || L || N))
                        return void (k[Pt] =
                          (S.xPercent || S.yPercent
                            ? "translate(" +
                              S.xPercent +
                              "%," +
                              S.yPercent +
                              "%) translate3d("
                            : "translate3d(") +
                          I +
                          "px," +
                          E +
                          "px," +
                          F +
                          "px)" +
                          (1 !== A || 1 !== R
                            ? " scale(" + A + "," + R + ")"
                            : ""));
                      (e = n = 1), (i = r = 0);
                    }
                    (l = 1),
                      (s = a = o = h = c = u = 0),
                      (p = L ? -1 / L : 0),
                      (f = S.zOrigin),
                      (d = 1e-6),
                      (w = ","),
                      (T = "0"),
                      (C = O * z) &&
                        ((m = Math.cos(C)),
                        (o = -(g = Math.sin(C))),
                        (c = p * -g),
                        (s = e * g),
                        (a = r * g),
                        (l = m),
                        (p *= m),
                        (e *= m),
                        (r *= m)),
                      (C = M * z) &&
                        ((v = i * (m = Math.cos(C)) + s * (g = Math.sin(C))),
                        (y = n * m + a * g),
                        (h = l * g),
                        (u = p * g),
                        (s = i * -g + s * m),
                        (a = n * -g + a * m),
                        (l *= m),
                        (p *= m),
                        (i = v),
                        (n = y)),
                      1 !== D && ((s *= D), (a *= D), (l *= D), (p *= D)),
                      1 !== R && ((i *= R), (n *= R), (h *= R), (u *= R)),
                      1 !== A && ((e *= A), (r *= A), (o *= A), (c *= A)),
                      (f || N) &&
                        (f && ((I += s * -f), (E += a * -f), (F += l * -f + f)),
                        N &&
                          ((I += S.xOrigin - (S.xOrigin * e + S.yOrigin * i)),
                          (E += S.yOrigin - (S.xOrigin * r + S.yOrigin * n))),
                        d > I && I > -d && (I = T),
                        d > E && E > -d && (E = T),
                        d > F && F > -d && (F = 0)),
                      (x =
                        S.xPercent || S.yPercent
                          ? "translate(" +
                            S.xPercent +
                            "%," +
                            S.yPercent +
                            "%) matrix3d("
                          : "matrix3d("),
                      (x +=
                        (d > e && e > -d ? T : e) +
                        w +
                        (d > r && r > -d ? T : r) +
                        w +
                        (d > o && o > -d ? T : o)),
                      (x +=
                        w +
                        (d > c && c > -d ? T : c) +
                        w +
                        (d > i && i > -d ? T : i) +
                        w +
                        (d > n && n > -d ? T : n)),
                      M || O
                        ? ((x +=
                            w +
                            (d > h && h > -d ? T : h) +
                            w +
                            (d > u && u > -d ? T : u) +
                            w +
                            (d > s && s > -d ? T : s)),
                          (x +=
                            w +
                            (d > a && a > -d ? T : a) +
                            w +
                            (d > l && l > -d ? T : l) +
                            w +
                            (d > p && p > -d ? T : p) +
                            w))
                        : (x += ",0,0,0,0,1,0,"),
                      (x += I + w + E + w + F + w + (L ? 1 + -F / L : 1) + ")"),
                      (k[Pt] = x);
                  }
                });
              ((u =
                Mt.prototype).x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = 0),
                (u.scaleX = u.scaleY = u.scaleZ = 1),
                xt(
                  "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent",
                  {
                    parser: function (t, e, i, s, n, o, l) {
                      if (s._lastParsedTransform === l) return n;
                      s._lastParsedTransform = l;
                      var c,
                        u,
                        p,
                        f,
                        d,
                        _,
                        m,
                        g = (s._transform = Et(t, a, !0, l.parseTransform)),
                        v = t.style,
                        y = bt.length,
                        x = l,
                        w = {};
                      if ("string" == typeof x.transform && Pt)
                        ((p = B.style)[Pt] = x.transform),
                          (p.display = "block"),
                          (p.position = "absolute"),
                          L.body.appendChild(B),
                          (c = Et(B, null, !1)),
                          L.body.removeChild(B);
                      else if ("object" == r(x)) {
                        if (
                          ((c = {
                            scaleX: ot(
                              null != x.scaleX ? x.scaleX : x.scale,
                              g.scaleX
                            ),
                            scaleY: ot(
                              null != x.scaleY ? x.scaleY : x.scale,
                              g.scaleY
                            ),
                            scaleZ: ot(x.scaleZ, g.scaleZ),
                            x: ot(x.x, g.x),
                            y: ot(x.y, g.y),
                            z: ot(x.z, g.z),
                            xPercent: ot(x.xPercent, g.xPercent),
                            yPercent: ot(x.yPercent, g.yPercent),
                            perspective: ot(
                              x.transformPerspective,
                              g.perspective
                            ),
                          }),
                          null != (m = x.directionalRotation))
                        )
                          if ("object" == r(m)) for (p in m) x[p] = m[p];
                          else x.rotation = m;
                        "string" == typeof x.x &&
                          -1 !== x.x.indexOf("%") &&
                          ((c.x = 0), (c.xPercent = ot(x.x, g.xPercent))),
                          "string" == typeof x.y &&
                            -1 !== x.y.indexOf("%") &&
                            ((c.y = 0), (c.yPercent = ot(x.y, g.yPercent))),
                          (c.rotation = ht(
                            "rotation" in x
                              ? x.rotation
                              : "shortRotation" in x
                              ? x.shortRotation + "_short"
                              : "rotationZ" in x
                              ? x.rotationZ
                              : g.rotation,
                            g.rotation,
                            "rotation",
                            w
                          )),
                          Ct &&
                            ((c.rotationX = ht(
                              "rotationX" in x
                                ? x.rotationX
                                : "shortRotationX" in x
                                ? x.shortRotationX + "_short"
                                : g.rotationX || 0,
                              g.rotationX,
                              "rotationX",
                              w
                            )),
                            (c.rotationY = ht(
                              "rotationY" in x
                                ? x.rotationY
                                : "shortRotationY" in x
                                ? x.shortRotationY + "_short"
                                : g.rotationY || 0,
                              g.rotationY,
                              "rotationY",
                              w
                            ))),
                          (c.skewX =
                            null == x.skewX ? g.skewX : ht(x.skewX, g.skewX)),
                          (c.skewY =
                            null == x.skewY ? g.skewY : ht(x.skewY, g.skewY)),
                          (u = c.skewY - g.skewY) &&
                            ((c.skewX += u), (c.rotation += u));
                      }
                      for (
                        Ct &&
                          null != x.force3D &&
                          ((g.force3D = x.force3D), (_ = !0)),
                          g.skewType =
                            x.skewType || g.skewType || h.defaultSkewType,
                          (d =
                            g.force3D ||
                            g.z ||
                            g.rotationX ||
                            g.rotationY ||
                            c.z ||
                            c.rotationX ||
                            c.rotationY ||
                            c.perspective) ||
                            null == x.scale ||
                            (c.scaleZ = 1);
                        --y > -1;

                      )
                        ((f = c[(i = bt[y])] - g[i]) > 1e-6 ||
                          -1e-6 > f ||
                          null != x[i] ||
                          null != N[i]) &&
                          ((_ = !0),
                          (n = new mt(g, i, g[i], f, n)),
                          i in w && (n.e = w[i]),
                          (n.xs0 = 0),
                          (n.plugin = o),
                          s._overwriteProps.push(n.n));
                      return (
                        (f = x.transformOrigin),
                        g.svg &&
                          (f || x.svgOrigin) &&
                          (It(t, nt(f), c, x.svgOrigin),
                          ((n = new mt(
                            g,
                            "xOrigin",
                            g.xOrigin,
                            c.xOrigin - g.xOrigin,
                            n,
                            -1,
                            "transformOrigin"
                          )).b = g.xOrigin),
                          (n.e = n.xs0 = c.xOrigin),
                          ((n = new mt(
                            g,
                            "yOrigin",
                            g.yOrigin,
                            c.yOrigin - g.yOrigin,
                            n,
                            -1,
                            "transformOrigin"
                          )).b = g.yOrigin),
                          (n.e = n.xs0 = c.yOrigin),
                          (f = Tt ? null : "0px 0px")),
                        (f || (Ct && d && g.zOrigin)) &&
                          (Pt
                            ? ((_ = !0),
                              (i = kt),
                              (f = (f || Q(t, i, a, !1, "50% 50%")) + ""),
                              ((n = new mt(
                                v,
                                i,
                                0,
                                0,
                                n,
                                -1,
                                "transformOrigin"
                              )).b = v[i]),
                              (n.plugin = o),
                              Ct
                                ? ((p = g.zOrigin),
                                  (f = f.split(" ")),
                                  (g.zOrigin =
                                    (f.length > 2 && (0 === p || "0px" !== f[2])
                                      ? parseFloat(f[2])
                                      : p) || 0),
                                  (n.xs0 = n.e =
                                    f[0] + " " + (f[1] || "50%") + " 0px"),
                                  ((n = new mt(
                                    g,
                                    "zOrigin",
                                    0,
                                    0,
                                    n,
                                    -1,
                                    n.n
                                  )).b = p),
                                  (n.xs0 = n.e = g.zOrigin))
                                : (n.xs0 = n.e = f))
                            : nt(f + "", g)),
                        _ &&
                          (s._transformType =
                            (g.svg && Tt) || (!d && 3 !== this._transformType)
                              ? 2
                              : 3),
                        n
                      );
                    },
                    prefix: !0,
                  }
                ),
                xt("boxShadow", {
                  defaultValue: "0px 0px 0px 0px #999",
                  prefix: !0,
                  color: !0,
                  multi: !0,
                  keyword: "inset",
                }),
                xt("borderRadius", {
                  defaultValue: "0px",
                  parser: function (t, e, i, r, n) {
                    e = this.format(e);
                    var o,
                      h,
                      l,
                      c,
                      u,
                      p,
                      f,
                      d,
                      _,
                      m,
                      g,
                      v,
                      y,
                      x,
                      w,
                      T,
                      b = [
                        "borderTopLeftRadius",
                        "borderTopRightRadius",
                        "borderBottomRightRadius",
                        "borderBottomLeftRadius",
                      ],
                      P = t.style;
                    for (
                      _ = parseFloat(t.offsetWidth),
                        m = parseFloat(t.offsetHeight),
                        o = e.split(" "),
                        h = 0;
                      b.length > h;
                      h++
                    )
                      this.p.indexOf("border") && (b[h] = G(b[h])),
                        -1 !==
                          (u = c = Q(t, b[h], a, !1, "0px")).indexOf(" ") &&
                          ((c = u.split(" ")), (u = c[0]), (c = c[1])),
                        (p = l = o[h]),
                        (f = parseFloat(u)),
                        (v = u.substr((f + "").length)),
                        (y = "=" === p.charAt(1))
                          ? ((d = parseInt(p.charAt(0) + "1", 10)),
                            (p = p.substr(2)),
                            (d *= parseFloat(p)),
                            (g =
                              p.substr((d + "").length - (0 > d ? 1 : 0)) ||
                              ""))
                          : ((d = parseFloat(p)),
                            (g = p.substr((d + "").length))),
                        "" === g && (g = s[i] || v),
                        g !== v &&
                          ((x = J(t, "borderLeft", f, v)),
                          (w = J(t, "borderTop", f, v)),
                          "%" === g
                            ? ((u = (x / _) * 100 + "%"),
                              (c = (w / m) * 100 + "%"))
                            : "em" === g
                            ? ((u =
                                x / (T = J(t, "borderLeft", 1, "em")) + "em"),
                              (c = w / T + "em"))
                            : ((u = x + "px"), (c = w + "px")),
                          y &&
                            ((p = parseFloat(u) + d + g),
                            (l = parseFloat(c) + d + g))),
                        (n = gt(
                          P,
                          b[h],
                          u + " " + c,
                          p + " " + l,
                          !1,
                          "0px",
                          n
                        ));
                    return n;
                  },
                  prefix: !0,
                  formatter: ft("0px 0px 0px 0px", !1, !0),
                }),
                xt("backgroundPosition", {
                  defaultValue: "0 0",
                  parser: function (t, e, i, s, r, n) {
                    var o,
                      h,
                      l,
                      c,
                      u,
                      p,
                      f = "background-position",
                      d = a || $(t, null),
                      _ = this.format(
                        (d
                          ? g
                            ? d.getPropertyValue(f + "-x") +
                              " " +
                              d.getPropertyValue(f + "-y")
                            : d.getPropertyValue(f)
                          : t.currentStyle.backgroundPositionX +
                            " " +
                            t.currentStyle.backgroundPositionY) || "0 0"
                      ),
                      m = this.format(e);
                    if (
                      (-1 !== _.indexOf("%")) != (-1 !== m.indexOf("%")) &&
                      (p = Q(t, "backgroundImage").replace(O, "")) &&
                      "none" !== p
                    ) {
                      for (
                        o = _.split(" "),
                          h = m.split(" "),
                          W.setAttribute("src", p),
                          l = 2;
                        --l > -1;

                      )
                        (c = -1 !== (_ = o[l]).indexOf("%")) !==
                          (-1 !== h[l].indexOf("%")) &&
                          ((u =
                            0 === l
                              ? t.offsetWidth - W.width
                              : t.offsetHeight - W.height),
                          (o[l] = c
                            ? (parseFloat(_) / 100) * u + "px"
                            : (parseFloat(_) / u) * 100 + "%"));
                      _ = o.join(" ");
                    }
                    return this.parseComplex(t.style, _, m, r, n);
                  },
                  formatter: nt,
                }),
                xt("backgroundSize", { defaultValue: "0 0", formatter: nt }),
                xt("perspective", { defaultValue: "0px", prefix: !0 }),
                xt("perspectiveOrigin", {
                  defaultValue: "50% 50%",
                  prefix: !0,
                }),
                xt("transformStyle", { prefix: !0 }),
                xt("backfaceVisibility", { prefix: !0 }),
                xt("userSelect", { prefix: !0 }),
                xt("margin", {
                  parser: dt("marginTop,marginRight,marginBottom,marginLeft"),
                }),
                xt("padding", {
                  parser: dt(
                    "paddingTop,paddingRight,paddingBottom,paddingLeft"
                  ),
                }),
                xt("clip", {
                  defaultValue: "rect(0px,0px,0px,0px)",
                  parser: function (t, e, i, s, r, n) {
                    var o, h, l;
                    return (
                      9 > g
                        ? ((h = t.currentStyle),
                          (l = 8 > g ? " " : ","),
                          (o =
                            "rect(" +
                            h.clipTop +
                            l +
                            h.clipRight +
                            l +
                            h.clipBottom +
                            l +
                            h.clipLeft +
                            ")"),
                          (e = this.format(e).split(",").join(l)))
                        : ((o = this.format(Q(t, this.p, a, !1, this.dflt))),
                          (e = this.format(e))),
                      this.parseComplex(t.style, o, e, r, n)
                    );
                  },
                }),
                xt("textShadow", {
                  defaultValue: "0px 0px 0px #999",
                  color: !0,
                  multi: !0,
                }),
                xt("autoRound,strictUnits", {
                  parser: function (t, e, i, s, r) {
                    return r;
                  },
                }),
                xt("border", {
                  defaultValue: "0px solid #000",
                  parser: function (t, e, i, s, r, n) {
                    return this.parseComplex(
                      t.style,
                      this.format(
                        Q(t, "borderTopWidth", a, !1, "0px") +
                          " " +
                          Q(t, "borderTopStyle", a, !1, "solid") +
                          " " +
                          Q(t, "borderTopColor", a, !1, "#000")
                      ),
                      this.format(e),
                      r,
                      n
                    );
                  },
                  color: !0,
                  formatter: function (t) {
                    var e = t.split(" ");
                    return (
                      e[0] +
                      " " +
                      (e[1] || "solid") +
                      " " +
                      (t.match(pt) || ["#000"])[0]
                    );
                  },
                }),
                xt("borderWidth", {
                  parser: dt(
                    "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
                  ),
                }),
                xt("float,cssFloat,styleFloat", {
                  parser: function (t, e, i, s, r) {
                    var n = t.style,
                      a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                    return new mt(n, a, 0, 0, r, -1, i, !1, 0, n[a], e);
                  },
                });
              var Nt = function (t) {
                var e,
                  i = this.t,
                  s = i.filter || Q(this.data, "filter") || "",
                  r = 0 | (this.s + this.c * t);
                100 === r &&
                  (-1 === s.indexOf("atrix(") &&
                  -1 === s.indexOf("radient(") &&
                  -1 === s.indexOf("oader(")
                    ? (i.removeAttribute("filter"),
                      (e = !Q(this.data, "filter")))
                    : ((i.filter = s.replace(S, "")), (e = !0))),
                  e ||
                    (this.xn1 &&
                      (i.filter = s = s || "alpha(opacity=" + r + ")"),
                    -1 === s.indexOf("pacity")
                      ? (0 === r && this.xn1) ||
                        (i.filter = s + " alpha(opacity=" + r + ")")
                      : (i.filter = s.replace(b, "opacity=" + r)));
              };
              xt("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function (t, e, i, s, r, n) {
                  var o = parseFloat(Q(t, "opacity", a, !1, "1")),
                    h = t.style,
                    l = "autoAlpha" === i;
                  return (
                    "string" == typeof e &&
                      "=" === e.charAt(1) &&
                      (e =
                        ("-" === e.charAt(0) ? -1 : 1) *
                          parseFloat(e.substr(2)) +
                        o),
                    l &&
                      1 === o &&
                      "hidden" === Q(t, "visibility", a) &&
                      0 !== e &&
                      (o = 0),
                    H
                      ? (r = new mt(h, "opacity", o, e - o, r))
                      : (((r = new mt(
                          h,
                          "opacity",
                          100 * o,
                          100 * (e - o),
                          r
                        )).xn1 = l ? 1 : 0),
                        (h.zoom = 1),
                        (r.type = 2),
                        (r.b = "alpha(opacity=" + r.s + ")"),
                        (r.e = "alpha(opacity=" + (r.s + r.c) + ")"),
                        (r.data = t),
                        (r.plugin = n),
                        (r.setRatio = Nt)),
                    l &&
                      (((r = new mt(
                        h,
                        "visibility",
                        0,
                        0,
                        r,
                        -1,
                        null,
                        !1,
                        0,
                        0 !== o ? "inherit" : "hidden",
                        0 === e ? "hidden" : "inherit"
                      )).xs0 = "inherit"),
                      s._overwriteProps.push(r.n),
                      s._overwriteProps.push(i)),
                    r
                  );
                },
              });
              var Lt = function (t, e) {
                  e &&
                    (t.removeProperty
                      ? (("ms" === e.substr(0, 2) ||
                          "webkit" === e.substr(0, 6)) &&
                          (e = "-" + e),
                        t.removeProperty(e.replace(C, "-$1").toLowerCase()))
                      : t.removeAttribute(e));
                },
                jt = function (t) {
                  if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
                    this.t.setAttribute("class", 0 === t ? this.b : this.e);
                    for (var e = this.data, i = this.t.style; e; )
                      e.v ? (i[e.p] = e.v) : Lt(i, e.p), (e = e._next);
                    1 === t &&
                      this.t._gsClassPT === this &&
                      (this.t._gsClassPT = null);
                  } else
                    this.t.getAttribute("class") !== this.e &&
                      this.t.setAttribute("class", this.e);
                };
              xt("className", {
                parser: function (t, e, s, r, n, o, h) {
                  var l,
                    c,
                    u,
                    p,
                    f,
                    d = t.getAttribute("class") || "",
                    _ = t.style.cssText;
                  if (
                    (((n = r._classNamePT = new mt(
                      t,
                      s,
                      0,
                      0,
                      n,
                      2
                    )).setRatio = jt),
                    (n.pr = -11),
                    (i = !0),
                    (n.b = d),
                    (c = tt(t, a)),
                    (u = t._gsClassPT))
                  ) {
                    for (p = {}, f = u.data; f; ) (p[f.p] = 1), (f = f._next);
                    u.setRatio(1);
                  }
                  return (
                    (t._gsClassPT = n),
                    (n.e =
                      "=" !== e.charAt(1)
                        ? e
                        : d.replace(
                            RegExp("\\s*\\b" + e.substr(2) + "\\b"),
                            ""
                          ) + ("+" === e.charAt(0) ? " " + e.substr(2) : "")),
                    t.setAttribute("class", n.e),
                    (l = et(t, c, tt(t), h, p)),
                    t.setAttribute("class", d),
                    (n.data = l.firstMPT),
                    (t.style.cssText = _),
                    (n.xfirst = r.parse(t, l.difs, n, o))
                  );
                },
              });
              var Bt = function (t) {
                if (
                  (1 === t || 0 === t) &&
                  this.data._totalTime === this.data._totalDuration &&
                  "isFromStart" !== this.data.data
                ) {
                  var e,
                    i,
                    s,
                    r,
                    n,
                    a = this.t.style,
                    o = c.transform.parse;
                  if ("all" === this.e) (a.cssText = ""), (r = !0);
                  else
                    for (
                      s = (e = this.e.split(" ").join("").split(",")).length;
                      --s > -1;

                    )
                      (i = e[s]),
                        c[i] &&
                          (c[i].parse === o
                            ? (r = !0)
                            : (i = "transformOrigin" === i ? kt : c[i].p)),
                        Lt(a, i);
                  r &&
                    (Lt(a, Pt),
                    (n = this.t._gsTransform) &&
                      (n.svg && this.t.removeAttribute("data-svg-origin"),
                      delete this.t._gsTransform));
                }
              };
              for (
                xt("clearProps", {
                  parser: function (t, e, s, r, n) {
                    return (
                      ((n = new mt(t, s, 0, 0, n, 2)).setRatio = Bt),
                      (n.e = e),
                      (n.pr = -10),
                      (n.data = r._tween),
                      (i = !0),
                      n
                    );
                  },
                }),
                  u = "bezier,throwProps,physicsProps,physics2D".split(","),
                  vt = u.length;
                vt--;

              )
                wt(u[vt]);
              ((u =
                h.prototype)._firstPT = u._lastParsedTransform = u._transform = null),
                (u._onInitTween = function (t, e, r) {
                  if (!t.nodeType) return !1;
                  (this._target = t),
                    (this._tween = r),
                    (this._vars = e),
                    (p = e.autoRound),
                    (i = !1),
                    (s = e.suffixMap || h.suffixMap),
                    (a = $(t, "")),
                    (o = this._overwriteProps);
                  var n,
                    l,
                    u,
                    _,
                    g,
                    v,
                    y,
                    x,
                    w,
                    T = t.style;
                  if (
                    (f &&
                      "" === T.zIndex &&
                      ("auto" === (n = Q(t, "zIndex", a)) || "" === n) &&
                      this._addLazySet(T, "zIndex", 0),
                    "string" == typeof e &&
                      ((_ = T.cssText),
                      (n = tt(t, a)),
                      (T.cssText = _ + ";" + e),
                      (n = et(t, n, tt(t)).difs),
                      !H && P.test(e) && (n.opacity = parseFloat(RegExp.$1)),
                      (e = n),
                      (T.cssText = _)),
                    (this._firstPT = l = e.className
                      ? c.className.parse(
                          t,
                          e.className,
                          "className",
                          this,
                          null,
                          null,
                          e
                        )
                      : this.parse(t, e, null)),
                    this._transformType)
                  ) {
                    for (
                      w = 3 === this._transformType,
                        Pt
                          ? d &&
                            ((f = !0),
                            "" === T.zIndex &&
                              ("auto" === (y = Q(t, "zIndex", a)) ||
                                "" === y) &&
                              this._addLazySet(T, "zIndex", 0),
                            m &&
                              this._addLazySet(
                                T,
                                "WebkitBackfaceVisibility",
                                this._vars.WebkitBackfaceVisibility ||
                                  (w ? "visible" : "hidden")
                              ))
                          : (T.zoom = 1),
                        u = l;
                      u && u._next;

                    )
                      u = u._next;
                    (x = new mt(t, "transform", 0, 0, null, 2)),
                      this._linkCSSP(x, null, u),
                      (x.setRatio = Pt ? Ft : zt),
                      (x.data = this._transform || Et(t, a, !0)),
                      (x.tween = r),
                      (x.pr = -1),
                      o.pop();
                  }
                  if (i) {
                    for (; l; ) {
                      for (v = l._next, u = _; u && u.pr > l.pr; ) u = u._next;
                      (l._prev = u ? u._prev : g)
                        ? (l._prev._next = l)
                        : (_ = l),
                        (l._next = u) ? (u._prev = l) : (g = l),
                        (l = v);
                    }
                    this._firstPT = _;
                  }
                  return !0;
                }),
                (u.parse = function (t, e, i, r) {
                  var n,
                    o,
                    h,
                    l,
                    u,
                    f,
                    d,
                    _,
                    m,
                    g,
                    v = t.style;
                  for (n in e)
                    (f = e[n]),
                      (o = c[n])
                        ? (i = o.parse(t, f, n, this, i, r, e))
                        : ((u = Q(t, n, a) + ""),
                          (m = "string" == typeof f),
                          "color" === n ||
                          "fill" === n ||
                          "stroke" === n ||
                          -1 !== n.indexOf("Color") ||
                          (m && k.test(f))
                            ? (m ||
                                (f =
                                  ((f = ut(f)).length > 3 ? "rgba(" : "rgb(") +
                                  f.join(",") +
                                  ")"),
                              (i = gt(v, n, u, f, !0, "transparent", i, 0, r)))
                            : !m ||
                              (-1 === f.indexOf(" ") && -1 === f.indexOf(","))
                            ? ((d =
                                (h = parseFloat(u)) || 0 === h
                                  ? u.substr((h + "").length)
                                  : ""),
                              ("" === u || "auto" === u) &&
                                ("width" === n || "height" === n
                                  ? ((h = rt(t, n, a)), (d = "px"))
                                  : "left" === n || "top" === n
                                  ? ((h = K(t, n, a)), (d = "px"))
                                  : ((h = "opacity" !== n ? 0 : 1), (d = ""))),
                              (g = m && "=" === f.charAt(1))
                                ? ((l = parseInt(f.charAt(0) + "1", 10)),
                                  (f = f.substr(2)),
                                  (l *= parseFloat(f)),
                                  (_ = f.replace(T, "")))
                                : ((l = parseFloat(f)),
                                  (_ = m ? f.replace(T, "") : "")),
                              "" === _ && (_ = n in s ? s[n] : d),
                              (f = l || 0 === l ? (g ? l + h : l) + _ : e[n]),
                              d !== _ &&
                                "" !== _ &&
                                (l || 0 === l) &&
                                h &&
                                ((h = J(t, n, h, d)),
                                "%" === _
                                  ? ((h /= J(t, n, 100, "%") / 100),
                                    !0 !== e.strictUnits && (u = h + "%"))
                                  : "em" === _
                                  ? (h /= J(t, n, 1, "em"))
                                  : "px" !== _ &&
                                    ((l = J(t, n, l, _)), (_ = "px")),
                                g && (l || 0 === l) && (f = l + h + _)),
                              g && (l += h),
                              (!h && 0 !== h) || (!l && 0 !== l)
                                ? void 0 !== v[n] &&
                                  (f || ("NaN" != f + "" && null != f))
                                  ? ((i = new mt(
                                      v,
                                      n,
                                      l || h || 0,
                                      0,
                                      i,
                                      -1,
                                      n,
                                      !1,
                                      0,
                                      u,
                                      f
                                    )).xs0 =
                                      "none" !== f ||
                                      ("display" !== n &&
                                        -1 === n.indexOf("Style"))
                                        ? f
                                        : u)
                                  : V("invalid " + n + " tween value: " + e[n])
                                : ((i = new mt(
                                    v,
                                    n,
                                    h,
                                    l - h,
                                    i,
                                    0,
                                    n,
                                    !1 !== p && ("px" === _ || "zIndex" === n),
                                    0,
                                    u,
                                    f
                                  )).xs0 = _))
                            : (i = gt(v, n, u, f, !0, null, i, 0, r))),
                      r && i && !i.plugin && (i.plugin = r);
                  return i;
                }),
                (u.setRatio = function (t) {
                  var e,
                    i,
                    s,
                    r = this._firstPT;
                  if (
                    1 !== t ||
                    (this._tween._time !== this._tween._duration &&
                      0 !== this._tween._time)
                  )
                    if (
                      t ||
                      (this._tween._time !== this._tween._duration &&
                        0 !== this._tween._time) ||
                      -1e-6 === this._tween._rawPrevTime
                    )
                      for (; r; ) {
                        if (
                          ((e = r.c * t + r.s),
                          r.r
                            ? (e = Math.round(e))
                            : 1e-6 > e && e > -1e-6 && (e = 0),
                          r.type)
                        )
                          if (1 === r.type)
                            if (2 === (s = r.l))
                              r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                            else if (3 === s)
                              r.t[r.p] =
                                r.xs0 +
                                e +
                                r.xs1 +
                                r.xn1 +
                                r.xs2 +
                                r.xn2 +
                                r.xs3;
                            else if (4 === s)
                              r.t[r.p] =
                                r.xs0 +
                                e +
                                r.xs1 +
                                r.xn1 +
                                r.xs2 +
                                r.xn2 +
                                r.xs3 +
                                r.xn3 +
                                r.xs4;
                            else if (5 === s)
                              r.t[r.p] =
                                r.xs0 +
                                e +
                                r.xs1 +
                                r.xn1 +
                                r.xs2 +
                                r.xn2 +
                                r.xs3 +
                                r.xn3 +
                                r.xs4 +
                                r.xn4 +
                                r.xs5;
                            else {
                              for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++)
                                i += r["xn" + s] + r["xs" + (s + 1)];
                              r.t[r.p] = i;
                            }
                          else
                            -1 === r.type
                              ? (r.t[r.p] = r.xs0)
                              : r.setRatio && r.setRatio(t);
                        else r.t[r.p] = e + r.xs0;
                        r = r._next;
                      }
                    else
                      for (; r; )
                        2 !== r.type ? (r.t[r.p] = r.b) : r.setRatio(t),
                          (r = r._next);
                  else
                    for (; r; )
                      2 !== r.type ? (r.t[r.p] = r.e) : r.setRatio(t),
                        (r = r._next);
                }),
                (u._enableTransforms = function (t) {
                  (this._transform =
                    this._transform || Et(this._target, a, !0)),
                    (this._transformType =
                      (this._transform.svg && Tt) ||
                      (!t && 3 !== this._transformType)
                        ? 2
                        : 3);
                });
              var Wt = function () {
                (this.t[this.p] = this.e),
                  this.data._linkCSSP(this, this._next, null, !0);
              };
              (u._addLazySet = function (t, e, i) {
                var s = (this._firstPT = new mt(t, e, 0, 0, this._firstPT, 2));
                (s.e = i), (s.setRatio = Wt), (s.data = this);
              }),
                (u._linkCSSP = function (t, e, i, s) {
                  return (
                    t &&
                      (e && (e._prev = t),
                      t._next && (t._next._prev = t._prev),
                      t._prev
                        ? (t._prev._next = t._next)
                        : this._firstPT === t &&
                          ((this._firstPT = t._next), (s = !0)),
                      i
                        ? (i._next = t)
                        : s || null !== this._firstPT || (this._firstPT = t),
                      (t._next = e),
                      (t._prev = i)),
                    t
                  );
                }),
                (u._kill = function (e) {
                  var i,
                    s,
                    r,
                    n = e;
                  if (e.autoAlpha || e.alpha) {
                    for (s in ((n = {}), e)) n[s] = e[s];
                    (n.opacity = 1), n.autoAlpha && (n.visibility = 1);
                  }
                  return (
                    e.className &&
                      (i = this._classNamePT) &&
                      ((r = i.xfirst) && r._prev
                        ? this._linkCSSP(r._prev, i._next, r._prev._prev)
                        : r === this._firstPT && (this._firstPT = i._next),
                      i._next &&
                        this._linkCSSP(i._next, i._next._next, r._prev),
                      (this._classNamePT = null)),
                    t.prototype._kill.call(this, n)
                  );
                });
              var Xt = function t(e, i, s) {
                var r, n, a, o;
                if (e.slice) for (n = e.length; --n > -1; ) t(e[n], i, s);
                else
                  for (n = (r = e.childNodes).length; --n > -1; )
                    (o = (a = r[n]).type),
                      a.style && (i.push(tt(a)), s && s.push(a)),
                      (1 !== o && 9 !== o && 11 !== o) ||
                        !a.childNodes.length ||
                        t(a, i, s);
              };
              return (
                (h.cascadeTo = function (t, i, s) {
                  var r,
                    n,
                    a,
                    o,
                    h = e.to(t, i, s),
                    l = [h],
                    c = [],
                    u = [],
                    p = [],
                    f = e._internals.reservedProps;
                  for (
                    t = h._targets || h.target,
                      Xt(t, c, p),
                      h.render(i, !0, !0),
                      Xt(t, u),
                      h.render(0, !0, !0),
                      h._enabled(!0),
                      r = p.length;
                    --r > -1;

                  )
                    if ((n = et(p[r], c[r], u[r])).firstMPT) {
                      for (a in ((n = n.difs), s)) f[a] && (n[a] = s[a]);
                      for (a in ((o = {}), n)) o[a] = c[r][a];
                      l.push(e.fromTo(p[r], i, o, n));
                    }
                  return l;
                }),
                t.activate([h]),
                h
              );
            },
            !0
          ),
          (function () {
            var t = n._gsDefine.plugin({
              propName: "roundProps",
              priority: -1,
              API: 2,
              init: function (t, e, i) {
                return (this._tween = i), !0;
              },
            }).prototype;
            (t._onInitAllProps = function () {
              for (
                var t,
                  e,
                  i,
                  s = this._tween,
                  r =
                    s.vars.roundProps instanceof Array
                      ? s.vars.roundProps
                      : s.vars.roundProps.split(","),
                  n = r.length,
                  a = {},
                  o = s._propLookup.roundProps;
                --n > -1;

              )
                a[r[n]] = 1;
              for (n = r.length; --n > -1; )
                for (t = r[n], e = s._firstPT; e; )
                  (i = e._next),
                    e.pg
                      ? e.t._roundProps(a, !0)
                      : e.n === t &&
                        (this._add(e.t, t, e.s, e.c),
                        i && (i._prev = e._prev),
                        e._prev
                          ? (e._prev._next = i)
                          : s._firstPT === e && (s._firstPT = i),
                        (e._next = e._prev = null),
                        (s._propLookup[t] = o)),
                    (e = i);
              return !1;
            }),
              (t._add = function (t, e, i, s) {
                this._addTween(t, e, i, i + s, e, !0),
                  this._overwriteProps.push(e);
              });
          })(),
          n._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.3.3",
            init: function (t, e) {
              var i, s, r;
              if ("function" != typeof t.setAttribute) return !1;
              for (i in ((this._target = t),
              (this._proxy = {}),
              (this._start = {}),
              (this._end = {}),
              e))
                (this._start[i] = this._proxy[i] = s = t.getAttribute(i)),
                  (r = this._addTween(this._proxy, i, parseFloat(s), e[i], i)),
                  (this._end[i] = r ? r.s + r.c : e[i]),
                  this._overwriteProps.push(i);
              return !0;
            },
            set: function (t) {
              this._super.setRatio.call(this, t);
              for (
                var e,
                  i = this._overwriteProps,
                  s = i.length,
                  r = 1 === t ? this._end : t ? this._proxy : this._start;
                --s > -1;

              )
                (e = i[s]), this._target.setAttribute(e, r[e] + "");
            },
          }),
          (n._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.2.1",
            API: 2,
            init: function (t, e) {
              "object" != r(e) && (e = { rotation: e }), (this.finals = {});
              var i,
                s,
                n,
                a,
                o,
                h = !0 === e.useRadians ? 2 * Math.PI : 360;
              for (i in e)
                "useRadians" !== i &&
                  ((s = (o = (e[i] + "").split("_"))[0]),
                  (n = parseFloat(
                    "function" != typeof t[i]
                      ? t[i]
                      : t[
                          i.indexOf("set") ||
                          "function" != typeof t["get" + i.substr(3)]
                            ? i
                            : "get" + i.substr(3)
                        ]()
                  )),
                  (a =
                    (this.finals[i] =
                      "string" == typeof s && "=" === s.charAt(1)
                        ? n +
                          parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))
                        : Number(s) || 0) - n),
                  o.length &&
                    (-1 !== (s = o.join("_")).indexOf("short") &&
                      (a %= h) !== a % (h / 2) &&
                      (a = 0 > a ? a + h : a - h),
                    -1 !== s.indexOf("_cw") && 0 > a
                      ? (a = ((a + 9999999999 * h) % h) - (0 | (a / h)) * h)
                      : -1 !== s.indexOf("ccw") &&
                        a > 0 &&
                        (a = ((a - 9999999999 * h) % h) - (0 | (a / h)) * h)),
                  (a > 1e-6 || -1e-6 > a) &&
                    (this._addTween(t, i, n, n + a, i),
                    this._overwriteProps.push(i)));
              return !0;
            },
            set: function (t) {
              var e;
              if (1 !== t) this._super.setRatio.call(this, t);
              else
                for (e = this._firstPT; e; )
                  e.f
                    ? e.t[e.p](this.finals[e.p])
                    : (e.t[e.p] = this.finals[e.p]),
                    (e = e._next);
            },
          })._autoCSS = !0),
          n._gsDefine(
            "easing.Back",
            ["easing.Ease"],
            function (t) {
              var e,
                i,
                s,
                r = n.GreenSockGlobals || n,
                a = r.com.greensock,
                o = 2 * Math.PI,
                h = Math.PI / 2,
                l = a._class,
                c = function (e, i) {
                  var s = l("easing." + e, function () {}, !0),
                    r = (s.prototype = new t());
                  return (r.constructor = s), (r.getRatio = i), s;
                },
                u = t.register || function () {},
                p = function (t, e, i, s) {
                  var r = l(
                    "easing." + t,
                    { easeOut: new e(), easeIn: new i(), easeInOut: new s() },
                    !0
                  );
                  return u(r, t), r;
                },
                f = function (t, e, i) {
                  (this.t = t),
                    (this.v = e),
                    i &&
                      ((this.next = i),
                      (i.prev = this),
                      (this.c = i.v - e),
                      (this.gap = i.t - t));
                },
                d = function (e, i) {
                  var s = l(
                      "easing." + e,
                      function (t) {
                        (this._p1 = t || 0 === t ? t : 1.70158),
                          (this._p2 = 1.525 * this._p1);
                      },
                      !0
                    ),
                    r = (s.prototype = new t());
                  return (
                    (r.constructor = s),
                    (r.getRatio = i),
                    (r.config = function (t) {
                      return new s(t);
                    }),
                    s
                  );
                },
                _ = p(
                  "Back",
                  d("BackOut", function (t) {
                    return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
                  }),
                  d("BackIn", function (t) {
                    return t * t * ((this._p1 + 1) * t - this._p1);
                  }),
                  d("BackInOut", function (t) {
                    return 1 > (t *= 2)
                      ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2)
                      : 0.5 *
                          ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
                  })
                ),
                m = l(
                  "easing.SlowMo",
                  function (t, e, i) {
                    (e = e || 0 === e ? e : 0.7),
                      null == t ? (t = 0.7) : t > 1 && (t = 1),
                      (this._p = 1 !== t ? e : 0),
                      (this._p1 = (1 - t) / 2),
                      (this._p2 = t),
                      (this._p3 = this._p1 + this._p2),
                      (this._calcEnd = !0 === i);
                  },
                  !0
                ),
                g = (m.prototype = new t());
              return (
                (g.constructor = m),
                (g.getRatio = function (t) {
                  var e = t + (0.5 - t) * this._p;
                  return this._p1 > t
                    ? this._calcEnd
                      ? 1 - (t = 1 - t / this._p1) * t
                      : e - (t = 1 - t / this._p1) * t * t * t * e
                    : t > this._p3
                    ? this._calcEnd
                      ? 1 - (t = (t - this._p3) / this._p1) * t
                      : e +
                        (t - e) * (t = (t - this._p3) / this._p1) * t * t * t
                    : this._calcEnd
                    ? 1
                    : e;
                }),
                (m.ease = new m(0.7, 0.7)),
                (g.config = m.config = function (t, e, i) {
                  return new m(t, e, i);
                }),
                ((g = (e = l(
                  "easing.SteppedEase",
                  function (t) {
                    (t = t || 1), (this._p1 = 1 / t), (this._p2 = t + 1);
                  },
                  !0
                )).prototype = new t()).constructor = e),
                (g.getRatio = function (t) {
                  return (
                    0 > t ? (t = 0) : t >= 1 && (t = 0.999999999),
                    ((this._p2 * t) >> 0) * this._p1
                  );
                }),
                (g.config = e.config = function (t) {
                  return new e(t);
                }),
                (i = l(
                  "easing.RoughEase",
                  function (e) {
                    for (
                      var i,
                        s,
                        r,
                        n,
                        a,
                        o,
                        h = (e = e || {}).taper || "none",
                        l = [],
                        c = 0,
                        u = 0 | (e.points || 20),
                        p = u,
                        d = !1 !== e.randomize,
                        _ = !0 === e.clamp,
                        m = e.template instanceof t ? e.template : null,
                        g =
                          "number" == typeof e.strength
                            ? 0.4 * e.strength
                            : 0.4;
                      --p > -1;

                    )
                      (i = d ? Math.random() : (1 / u) * p),
                        (s = m ? m.getRatio(i) : i),
                        "none" === h
                          ? (r = g)
                          : "out" === h
                          ? (r = (n = 1 - i) * n * g)
                          : "in" === h
                          ? (r = i * i * g)
                          : 0.5 > i
                          ? (r = 0.5 * (n = 2 * i) * n * g)
                          : (r = 0.5 * (n = 2 * (1 - i)) * n * g),
                        d
                          ? (s += Math.random() * r - 0.5 * r)
                          : p % 2
                          ? (s += 0.5 * r)
                          : (s -= 0.5 * r),
                        _ && (s > 1 ? (s = 1) : 0 > s && (s = 0)),
                        (l[c++] = { x: i, y: s });
                    for (
                      l.sort(function (t, e) {
                        return t.x - e.x;
                      }),
                        o = new f(1, 1, null),
                        p = u;
                      --p > -1;

                    )
                      (a = l[p]), (o = new f(a.x, a.y, o));
                    this._prev = new f(0, 0, 0 !== o.t ? o : o.next);
                  },
                  !0
                )),
                ((g = i.prototype = new t()).constructor = i),
                (g.getRatio = function (t) {
                  var e = this._prev;
                  if (t > e.t) {
                    for (; e.next && t >= e.t; ) e = e.next;
                    e = e.prev;
                  } else for (; e.prev && e.t >= t; ) e = e.prev;
                  return (this._prev = e), e.v + ((t - e.t) / e.gap) * e.c;
                }),
                (g.config = function (t) {
                  return new i(t);
                }),
                (i.ease = new i()),
                p(
                  "Bounce",
                  c("BounceOut", function (t) {
                    return 1 / 2.75 > t
                      ? 7.5625 * t * t
                      : 2 / 2.75 > t
                      ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                      : 2.5 / 2.75 > t
                      ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                      : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
                  }),
                  c("BounceIn", function (t) {
                    return 1 / 2.75 > (t = 1 - t)
                      ? 1 - 7.5625 * t * t
                      : 2 / 2.75 > t
                      ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                      : 2.5 / 2.75 > t
                      ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                      : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
                  }),
                  c("BounceInOut", function (t) {
                    var e = 0.5 > t;
                    return (
                      (t =
                        1 / 2.75 > (t = e ? 1 - 2 * t : 2 * t - 1)
                          ? 7.5625 * t * t
                          : 2 / 2.75 > t
                          ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                          : 2.5 / 2.75 > t
                          ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                          : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                      e ? 0.5 * (1 - t) : 0.5 * t + 0.5
                    );
                  })
                ),
                p(
                  "Circ",
                  c("CircOut", function (t) {
                    return Math.sqrt(1 - (t -= 1) * t);
                  }),
                  c("CircIn", function (t) {
                    return -(Math.sqrt(1 - t * t) - 1);
                  }),
                  c("CircInOut", function (t) {
                    return 1 > (t *= 2)
                      ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                      : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
                  })
                ),
                p(
                  "Elastic",
                  (s = function (e, i, s) {
                    var r = l(
                        "easing." + e,
                        function (t, e) {
                          (this._p1 = t >= 1 ? t : 1),
                            (this._p2 = (e || s) / (1 > t ? t : 1)),
                            (this._p3 =
                              (this._p2 / o) * (Math.asin(1 / this._p1) || 0)),
                            (this._p2 = o / this._p2);
                        },
                        !0
                      ),
                      n = (r.prototype = new t());
                    return (
                      (n.constructor = r),
                      (n.getRatio = i),
                      (n.config = function (t, e) {
                        return new r(t, e);
                      }),
                      r
                    );
                  })(
                    "ElasticOut",
                    function (t) {
                      return (
                        this._p1 *
                          Math.pow(2, -10 * t) *
                          Math.sin((t - this._p3) * this._p2) +
                        1
                      );
                    },
                    0.3
                  ),
                  s(
                    "ElasticIn",
                    function (t) {
                      return (
                        -this._p1 *
                        Math.pow(2, 10 * (t -= 1)) *
                        Math.sin((t - this._p3) * this._p2)
                      );
                    },
                    0.3
                  ),
                  s(
                    "ElasticInOut",
                    function (t) {
                      return 1 > (t *= 2)
                        ? -0.5 *
                            this._p1 *
                            Math.pow(2, 10 * (t -= 1)) *
                            Math.sin((t - this._p3) * this._p2)
                        : 0.5 *
                            this._p1 *
                            Math.pow(2, -10 * (t -= 1)) *
                            Math.sin((t - this._p3) * this._p2) +
                            1;
                    },
                    0.45
                  )
                ),
                p(
                  "Expo",
                  c("ExpoOut", function (t) {
                    return 1 - Math.pow(2, -10 * t);
                  }),
                  c("ExpoIn", function (t) {
                    return Math.pow(2, 10 * (t - 1)) - 0.001;
                  }),
                  c("ExpoInOut", function (t) {
                    return 1 > (t *= 2)
                      ? 0.5 * Math.pow(2, 10 * (t - 1))
                      : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
                  })
                ),
                p(
                  "Sine",
                  c("SineOut", function (t) {
                    return Math.sin(t * h);
                  }),
                  c("SineIn", function (t) {
                    return 1 - Math.cos(t * h);
                  }),
                  c("SineInOut", function (t) {
                    return -0.5 * (Math.cos(Math.PI * t) - 1);
                  })
                ),
                l(
                  "easing.EaseLookup",
                  {
                    find: function (e) {
                      return t.map[e];
                    },
                  },
                  !0
                ),
                u(r.SlowMo, "SlowMo", "ease,"),
                u(i, "RoughEase", "ease,"),
                u(e, "SteppedEase", "ease,"),
                _
              );
            },
            !0
          );
      }),
        n._gsDefine && n._gsQueue.pop()(),
        (function (i, n) {
          "use strict";
          var a = (i.GreenSockGlobals = i.GreenSockGlobals || i);
          if (!a.TweenLite) {
            var o,
              h,
              l,
              c,
              u,
              p = function (t) {
                var e,
                  i = t.split("."),
                  s = a;
                for (e = 0; i.length > e; e++) s[i[e]] = s = s[i[e]] || {};
                return s;
              },
              f = p("com.greensock"),
              d = 1e-10,
              _ = function (t) {
                var e,
                  i = [],
                  s = t.length;
                for (e = 0; e !== s; i.push(t[e++]));
                return i;
              },
              m = function () {},
              g = (function () {
                var t = Object.prototype.toString,
                  e = t.call([]);
                return function (i) {
                  return (
                    null != i &&
                    (i instanceof Array ||
                      ("object" == r(i) && !!i.push && t.call(i) === e))
                  );
                };
              })(),
              v = {},
              y = function i(r, n, o, h) {
                (this.sc = v[r] ? v[r].sc : []),
                  (v[r] = this),
                  (this.gsClass = null),
                  (this.func = o);
                var l = [];
                (this.check = function (c) {
                  for (var u, f, d, _, m = n.length, g = m; --m > -1; )
                    (u = v[n[m]] || new i(n[m], [])).gsClass
                      ? ((l[m] = u.gsClass), g--)
                      : c && u.sc.push(this);
                  if (0 === g && o)
                    for (
                      d = (f = ("com.greensock." + r).split(".")).pop(),
                        _ = p(f.join("."))[d] = this.gsClass = o.apply(o, l),
                        h &&
                          ((a[d] = _),
                          void 0 !==
                            (s = function () {
                              return _;
                            }.apply(e, [])) && (t.exports = s)),
                        m = 0;
                      this.sc.length > m;
                      m++
                    )
                      this.sc[m].check();
                }),
                  this.check(!0);
              },
              x = (i._gsDefine = function (t, e, i, s) {
                return new y(t, e, i, s);
              }),
              w = (f._class = function (t, e, i) {
                return (
                  (e = e || function () {}),
                  x(
                    t,
                    [],
                    function () {
                      return e;
                    },
                    i
                  ),
                  e
                );
              });
            x.globals = a;
            var T = [0, 0, 1, 1],
              b = [],
              P = w(
                "easing.Ease",
                function (t, e, i, s) {
                  (this._func = t),
                    (this._type = i || 0),
                    (this._power = s || 0),
                    (this._params = e ? T.concat(e) : T);
                },
                !0
              ),
              S = (P.map = {}),
              k = (P.register = function (t, e, i, s) {
                for (
                  var r,
                    n,
                    a,
                    o,
                    h = e.split(","),
                    l = h.length,
                    c = (i || "easeIn,easeOut,easeInOut").split(",");
                  --l > -1;

                )
                  for (
                    n = h[l],
                      r = s ? w("easing." + n, null, !0) : f.easing[n] || {},
                      a = c.length;
                    --a > -1;

                  )
                    (o = c[a]),
                      (S[n + "." + o] = S[o + n] = r[o] = t.getRatio
                        ? t
                        : t[o] || new t());
              });
            for (
              (l = P.prototype)._calcEnd = !1,
                l.getRatio = function (t) {
                  if (this._func)
                    return (
                      (this._params[0] = t),
                      this._func.apply(null, this._params)
                    );
                  var e = this._type,
                    i = this._power,
                    s =
                      1 === e
                        ? 1 - t
                        : 2 === e
                        ? t
                        : 0.5 > t
                        ? 2 * t
                        : 2 * (1 - t);
                  return (
                    1 === i
                      ? (s *= s)
                      : 2 === i
                      ? (s *= s * s)
                      : 3 === i
                      ? (s *= s * s * s)
                      : 4 === i && (s *= s * s * s * s),
                    1 === e ? 1 - s : 2 === e ? s : 0.5 > t ? s / 2 : 1 - s / 2
                  );
                },
                h = (o = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"])
                  .length;
              --h > -1;

            )
              (l = o[h] + ",Power" + h),
                k(new P(null, null, 1, h), l, "easeOut", !0),
                k(
                  new P(null, null, 2, h),
                  l,
                  "easeIn" + (0 === h ? ",easeNone" : "")
                ),
                k(new P(null, null, 3, h), l, "easeInOut");
            (S.linear = f.easing.Linear.easeIn),
              (S.swing = f.easing.Quad.easeInOut);
            var C = w("events.EventDispatcher", function (t) {
              (this._listeners = {}), (this._eventTarget = t || this);
            });
            ((l = C.prototype).addEventListener = function (t, e, i, s, r) {
              r = r || 0;
              var n,
                a,
                o = this._listeners[t],
                h = 0;
              for (
                null == o && (this._listeners[t] = o = []), a = o.length;
                --a > -1;

              )
                (n = o[a]).c === e && n.s === i
                  ? o.splice(a, 1)
                  : 0 === h && r > n.pr && (h = a + 1);
              o.splice(h, 0, { c: e, s: i, up: s, pr: r }),
                this !== c || u || c.wake();
            }),
              (l.removeEventListener = function (t, e) {
                var i,
                  s = this._listeners[t];
                if (s)
                  for (i = s.length; --i > -1; )
                    if (s[i].c === e) return void s.splice(i, 1);
              }),
              (l.dispatchEvent = function (t) {
                var e,
                  i,
                  s,
                  r = this._listeners[t];
                if (r)
                  for (e = r.length, i = this._eventTarget; --e > -1; )
                    (s = r[e]) &&
                      (s.up
                        ? s.c.call(s.s || i, { type: t, target: i })
                        : s.c.call(s.s || i));
              });
            var M = i.requestAnimationFrame,
              O = i.cancelAnimationFrame,
              A =
                Date.now ||
                function () {
                  return new Date().getTime();
                },
              R = A();
            for (
              h = (o = ["ms", "moz", "webkit", "o"]).length;
              --h > -1 && !M;

            )
              (M = i[o[h] + "RequestAnimationFrame"]),
                (O =
                  i[o[h] + "CancelAnimationFrame"] ||
                  i[o[h] + "CancelRequestAnimationFrame"]);
            w("Ticker", function (t, e) {
              var i,
                s,
                r,
                n,
                a,
                o = this,
                h = A(),
                l = !1 !== e && M,
                p = 500,
                f = 33,
                _ = function t(e) {
                  var l,
                    c,
                    u = A() - R;
                  u > p && (h += u - f),
                    (R += u),
                    (o.time = (R - h) / 1e3),
                    (l = o.time - a),
                    (!i || l > 0 || !0 === e) &&
                      (o.frame++,
                      (a += l + (l >= n ? 0.004 : n - l)),
                      (c = !0)),
                    !0 !== e && (r = s(t)),
                    c && o.dispatchEvent("tick");
                };
              C.call(o),
                (o.time = o.frame = 0),
                (o.tick = function () {
                  _(!0);
                }),
                (o.lagSmoothing = function (t, e) {
                  (p = t || 1 / d), (f = Math.min(e, p, 0));
                }),
                (o.sleep = function () {
                  null != r &&
                    (l && O ? O(r) : clearTimeout(r),
                    (s = m),
                    (r = null),
                    o === c && (u = !1));
                }),
                (o.wake = function () {
                  null !== r ? o.sleep() : o.frame > 10 && (R = A() - p + 5),
                    (s =
                      0 === i
                        ? m
                        : l && M
                        ? M
                        : function (t) {
                            return setTimeout(t, 0 | (1e3 * (a - o.time) + 1));
                          }),
                    o === c && (u = !0),
                    _(2);
                }),
                (o.fps = function (t) {
                  return arguments.length
                    ? ((n = 1 / ((i = t) || 60)),
                      (a = this.time + n),
                      void o.wake())
                    : i;
                }),
                (o.useRAF = function (t) {
                  return arguments.length
                    ? (o.sleep(), (l = t), void o.fps(i))
                    : l;
                }),
                o.fps(t),
                setTimeout(function () {
                  l && 5 > o.frame && o.useRAF(!1);
                }, 1500);
            }),
              ((l = f.Ticker.prototype = new f.events.EventDispatcher()).constructor =
                f.Ticker);
            var D = w("core.Animation", function (t, e) {
              if (
                ((this.vars = e = e || {}),
                (this._duration = this._totalDuration = t || 0),
                (this._delay = Number(e.delay) || 0),
                (this._timeScale = 1),
                (this._active = !0 === e.immediateRender),
                (this.data = e.data),
                (this._reversed = !0 === e.reversed),
                U)
              ) {
                u || c.wake();
                var i = this.vars.useFrames ? H : U;
                i.add(this, i._time), this.vars.paused && this.paused(!0);
              }
            });
            (c = D.ticker = new f.Ticker()),
              ((l = D.prototype)._dirty = l._gc = l._initted = l._paused = !1),
              (l._totalTime = l._time = 0),
              (l._rawPrevTime = -1),
              (l._next = l._last = l._onUpdate = l._timeline = l.timeline = null),
              (l._paused = !1);
            (function t() {
              u && A() - R > 2e3 && c.wake(), setTimeout(t, 2e3);
            })(),
              (l.play = function (t, e) {
                return (
                  null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                );
              }),
              (l.pause = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!0);
              }),
              (l.resume = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!1);
              }),
              (l.seek = function (t, e) {
                return this.totalTime(Number(t), !1 !== e);
              }),
              (l.restart = function (t, e) {
                return this.reversed(!1)
                  .paused(!1)
                  .totalTime(t ? -this._delay : 0, !1 !== e, !0);
              }),
              (l.reverse = function (t, e) {
                return (
                  null != t && this.seek(t || this.totalDuration(), e),
                  this.reversed(!0).paused(!1)
                );
              }),
              (l.render = function () {}),
              (l.invalidate = function () {
                return (
                  (this._time = this._totalTime = 0),
                  (this._initted = this._gc = !1),
                  (this._rawPrevTime = -1),
                  (this._gc || !this.timeline) && this._enabled(!0),
                  this
                );
              }),
              (l.isActive = function () {
                var t,
                  e = this._timeline,
                  i = this._startTime;
                return (
                  !e ||
                  (!this._gc &&
                    !this._paused &&
                    e.isActive() &&
                    (t = e.rawTime()) >= i &&
                    i + this.totalDuration() / this._timeScale > t)
                );
              }),
              (l._enabled = function (t, e) {
                return (
                  u || c.wake(),
                  (this._gc = !t),
                  (this._active = this.isActive()),
                  !0 !== e &&
                    (t && !this.timeline
                      ? this._timeline.add(this, this._startTime - this._delay)
                      : !t &&
                        this.timeline &&
                        this._timeline._remove(this, !0)),
                  !1
                );
              }),
              (l._kill = function () {
                return this._enabled(!1, !1);
              }),
              (l.kill = function (t, e) {
                return this._kill(t, e), this;
              }),
              (l._uncache = function (t) {
                for (var e = t ? this : this.timeline; e; )
                  (e._dirty = !0), (e = e.timeline);
                return this;
              }),
              (l._swapSelfInParams = function (t) {
                for (var e = t.length, i = t.concat(); --e > -1; )
                  "{self}" === t[e] && (i[e] = this);
                return i;
              }),
              (l.eventCallback = function (t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                  var r = this.vars;
                  if (1 === arguments.length) return r[t];
                  null == e
                    ? delete r[t]
                    : ((r[t] = e),
                      (r[t + "Params"] =
                        g(i) && -1 !== i.join("").indexOf("{self}")
                          ? this._swapSelfInParams(i)
                          : i),
                      (r[t + "Scope"] = s)),
                    "onUpdate" === t && (this._onUpdate = e);
                }
                return this;
              }),
              (l.delay = function (t) {
                return arguments.length
                  ? (this._timeline.smoothChildTiming &&
                      this.startTime(this._startTime + t - this._delay),
                    (this._delay = t),
                    this)
                  : this._delay;
              }),
              (l.duration = function (t) {
                return arguments.length
                  ? ((this._duration = this._totalDuration = t),
                    this._uncache(!0),
                    this._timeline.smoothChildTiming &&
                      this._time > 0 &&
                      this._time < this._duration &&
                      0 !== t &&
                      this.totalTime(
                        this._totalTime * (t / this._duration),
                        !0
                      ),
                    this)
                  : ((this._dirty = !1), this._duration);
              }),
              (l.totalDuration = function (t) {
                return (
                  (this._dirty = !1),
                  arguments.length ? this.duration(t) : this._totalDuration
                );
              }),
              (l.time = function (t, e) {
                return arguments.length
                  ? (this._dirty && this.totalDuration(),
                    this.totalTime(t > this._duration ? this._duration : t, e))
                  : this._time;
              }),
              (l.totalTime = function (t, e, i) {
                if ((u || c.wake(), !arguments.length)) return this._totalTime;
                if (this._timeline) {
                  if (
                    (0 > t && !i && (t += this.totalDuration()),
                    this._timeline.smoothChildTiming)
                  ) {
                    this._dirty && this.totalDuration();
                    var s = this._totalDuration,
                      r = this._timeline;
                    if (
                      (t > s && !i && (t = s),
                      (this._startTime =
                        (this._paused ? this._pauseTime : r._time) -
                        (this._reversed ? s - t : t) / this._timeScale),
                      r._dirty || this._uncache(!1),
                      r._timeline)
                    )
                      for (; r._timeline; )
                        r._timeline._time !==
                          (r._startTime + r._totalTime) / r._timeScale &&
                          r.totalTime(r._totalTime, !0),
                          (r = r._timeline);
                  }
                  this._gc && this._enabled(!0, !1),
                    (this._totalTime !== t || 0 === this._duration) &&
                      (this.render(t, e, !1), F.length && q());
                }
                return this;
              }),
              (l.progress = l.totalProgress = function (t, e) {
                return arguments.length
                  ? this.totalTime(this.duration() * t, e)
                  : this._time / this.duration();
              }),
              (l.startTime = function (t) {
                return arguments.length
                  ? (t !== this._startTime &&
                      ((this._startTime = t),
                      this.timeline &&
                        this.timeline._sortChildren &&
                        this.timeline.add(this, t - this._delay)),
                    this)
                  : this._startTime;
              }),
              (l.endTime = function (t) {
                return (
                  this._startTime +
                  (0 != t ? this.totalDuration() : this.duration()) /
                    this._timeScale
                );
              }),
              (l.timeScale = function (t) {
                if (!arguments.length) return this._timeScale;
                if (
                  ((t = t || d),
                  this._timeline && this._timeline.smoothChildTiming)
                ) {
                  var e = this._pauseTime,
                    i = e || 0 === e ? e : this._timeline.totalTime();
                  this._startTime =
                    i - ((i - this._startTime) * this._timeScale) / t;
                }
                return (this._timeScale = t), this._uncache(!1);
              }),
              (l.reversed = function (t) {
                return arguments.length
                  ? (t != this._reversed &&
                      ((this._reversed = t),
                      this.totalTime(
                        this._timeline && !this._timeline.smoothChildTiming
                          ? this.totalDuration() - this._totalTime
                          : this._totalTime,
                        !0
                      )),
                    this)
                  : this._reversed;
              }),
              (l.paused = function (t) {
                if (!arguments.length) return this._paused;
                var e,
                  i,
                  s = this._timeline;
                return (
                  t != this._paused &&
                    s &&
                    (u || t || c.wake(),
                    (i = (e = s.rawTime()) - this._pauseTime),
                    !t &&
                      s.smoothChildTiming &&
                      ((this._startTime += i), this._uncache(!1)),
                    (this._pauseTime = t ? e : null),
                    (this._paused = t),
                    (this._active = this.isActive()),
                    !t &&
                      0 !== i &&
                      this._initted &&
                      this.duration() &&
                      this.render(
                        s.smoothChildTiming
                          ? this._totalTime
                          : (e - this._startTime) / this._timeScale,
                        !0,
                        !0
                      )),
                  this._gc && !t && this._enabled(!0, !1),
                  this
                );
              });
            var I = w("core.SimpleTimeline", function (t) {
              D.call(this, 0, t),
                (this.autoRemoveChildren = this.smoothChildTiming = !0);
            });
            ((l = I.prototype = new D()).constructor = I),
              (l.kill()._gc = !1),
              (l._first = l._last = l._recent = null),
              (l._sortChildren = !1),
              (l.add = l.insert = function (t, e) {
                var i, s;
                if (
                  ((t._startTime = Number(e || 0) + t._delay),
                  t._paused &&
                    this !== t._timeline &&
                    (t._pauseTime =
                      t._startTime +
                      (this.rawTime() - t._startTime) / t._timeScale),
                  t.timeline && t.timeline._remove(t, !0),
                  (t.timeline = t._timeline = this),
                  t._gc && t._enabled(!0, !0),
                  (i = this._last),
                  this._sortChildren)
                )
                  for (s = t._startTime; i && i._startTime > s; ) i = i._prev;
                return (
                  i
                    ? ((t._next = i._next), (i._next = t))
                    : ((t._next = this._first), (this._first = t)),
                  t._next ? (t._next._prev = t) : (this._last = t),
                  (t._prev = i),
                  (this._recent = t),
                  this._timeline && this._uncache(!0),
                  this
                );
              }),
              (l._remove = function (t, e) {
                return (
                  t.timeline === this &&
                    (e || t._enabled(!1, !0),
                    t._prev
                      ? (t._prev._next = t._next)
                      : this._first === t && (this._first = t._next),
                    t._next
                      ? (t._next._prev = t._prev)
                      : this._last === t && (this._last = t._prev),
                    (t._next = t._prev = t.timeline = null),
                    t === this._recent && (this._recent = this._last),
                    this._timeline && this._uncache(!0)),
                  this
                );
              }),
              (l.render = function (t, e, i) {
                var s,
                  r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r; )
                  (s = r._next),
                    (r._active || (t >= r._startTime && !r._paused)) &&
                      (r._reversed
                        ? r.render(
                            (r._dirty ? r.totalDuration() : r._totalDuration) -
                              (t - r._startTime) * r._timeScale,
                            e,
                            i
                          )
                        : r.render((t - r._startTime) * r._timeScale, e, i)),
                    (r = s);
              }),
              (l.rawTime = function () {
                return u || c.wake(), this._totalTime;
              });
            var E = w(
                "TweenLite",
                function (t, e, s) {
                  if (
                    (D.call(this, e, s),
                    (this.render = E.prototype.render),
                    null == t)
                  )
                    throw "Cannot tween a null target.";
                  this.target = t =
                    "string" != typeof t ? t : E.selector(t) || t;
                  var r,
                    n,
                    a,
                    o =
                      t.jquery ||
                      (t.length &&
                        t !== i &&
                        t[0] &&
                        (t[0] === i ||
                          (t[0].nodeType && t[0].style && !t.nodeType))),
                    h = this.vars.overwrite;
                  if (
                    ((this._overwrite = h =
                      null == h
                        ? Y[E.defaultOverwrite]
                        : "number" == typeof h
                        ? h >> 0
                        : Y[h]),
                    (o || t instanceof Array || (t.push && g(t))) &&
                      "number" != typeof t[0])
                  )
                    for (
                      this._targets = a = _(t),
                        this._propLookup = [],
                        this._siblings = [],
                        r = 0;
                      a.length > r;
                      r++
                    )
                      (n = a[r])
                        ? "string" != typeof n
                          ? n.length &&
                            n !== i &&
                            n[0] &&
                            (n[0] === i ||
                              (n[0].nodeType && n[0].style && !n.nodeType))
                            ? (a.splice(r--, 1),
                              (this._targets = a = a.concat(_(n))))
                            : ((this._siblings[r] = Z(n, this, !1)),
                              1 === h &&
                                this._siblings[r].length > 1 &&
                                $(n, this, null, 1, this._siblings[r]))
                          : "string" == typeof (n = a[r--] = E.selector(n)) &&
                            a.splice(r + 1, 1)
                        : a.splice(r--, 1);
                  else
                    (this._propLookup = {}),
                      (this._siblings = Z(t, this, !1)),
                      1 === h &&
                        this._siblings.length > 1 &&
                        $(t, this, null, 1, this._siblings);
                  (this.vars.immediateRender ||
                    (0 === e &&
                      0 === this._delay &&
                      !1 !== this.vars.immediateRender)) &&
                    ((this._time = -d), this.render(-this._delay));
                },
                !0
              ),
              z = function (t) {
                return (
                  t &&
                  t.length &&
                  t !== i &&
                  t[0] &&
                  (t[0] === i || (t[0].nodeType && t[0].style && !t.nodeType))
                );
              };
            ((l = E.prototype = new D()).constructor = E),
              (l.kill()._gc = !1),
              (l.ratio = 0),
              (l._firstPT = l._targets = l._overwrittenProps = l._startAt = null),
              (l._notifyPluginsOfEnabled = l._lazy = !1),
              (E.version = "1.16.1"),
              (E.defaultEase = l._ease = new P(null, null, 1, 1)),
              (E.defaultOverwrite = "auto"),
              (E.ticker = c),
              (E.autoSleep = 120),
              (E.lagSmoothing = function (t, e) {
                c.lagSmoothing(t, e);
              }),
              (E.selector =
                i.$ ||
                i.jQuery ||
                function (t) {
                  var e = i.$ || i.jQuery;
                  return e
                    ? ((E.selector = e), e(t))
                    : "undefined" == typeof document
                    ? t
                    : document.querySelectorAll
                    ? document.querySelectorAll(t)
                    : document.getElementById(
                        "#" === t.charAt(0) ? t.substr(1) : t
                      );
                });
            var F = [],
              N = {},
              L = (E._internals = { isArray: g, isSelector: z, lazyTweens: F }),
              j = (E._plugins = {}),
              B = (L.tweenLookup = {}),
              W = 0,
              X = (L.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
              }),
              Y = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                true: 1,
                false: 0,
              },
              H = (D._rootFramesTimeline = new I()),
              U = (D._rootTimeline = new I()),
              V = 30,
              q = (L.lazyRender = function () {
                var t,
                  e = F.length;
                for (N = {}; --e > -1; )
                  (t = F[e]) &&
                    !1 !== t._lazy &&
                    (t.render(t._lazy[0], t._lazy[1], !0), (t._lazy = !1));
                F.length = 0;
              });
            (U._startTime = c.time),
              (H._startTime = c.frame),
              (U._active = H._active = !0),
              setTimeout(q, 1),
              (D._updateRoot = E.render = function () {
                var t, e, i;
                if (
                  (F.length && q(),
                  U.render((c.time - U._startTime) * U._timeScale, !1, !1),
                  H.render((c.frame - H._startTime) * H._timeScale, !1, !1),
                  F.length && q(),
                  c.frame >= V)
                ) {
                  for (i in ((V = c.frame + (parseInt(E.autoSleep, 10) || 120)),
                  B)) {
                    for (t = (e = B[i].tweens).length; --t > -1; )
                      e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete B[i];
                  }
                  if (
                    (!(i = U._first) || i._paused) &&
                    E.autoSleep &&
                    !H._first &&
                    1 === c._listeners.tick.length
                  ) {
                    for (; i && i._paused; ) i = i._next;
                    i || c.sleep();
                  }
                }
              }),
              c.addEventListener("tick", D._updateRoot);
            var Z = function (t, e, i) {
                var s,
                  r,
                  n = t._gsTweenID;
                if (
                  (B[n || (t._gsTweenID = n = "t" + W++)] ||
                    (B[n] = { target: t, tweens: [] }),
                  e && (((s = B[n].tweens)[(r = s.length)] = e), i))
                )
                  for (; --r > -1; ) s[r] === e && s.splice(r, 1);
                return B[n].tweens;
              },
              G = function (t, e, i, s) {
                var r,
                  n,
                  a = t.vars.onOverwrite;
                return (
                  a && (r = a(t, e, i, s)),
                  (a = E.onOverwrite) && (n = a(t, e, i, s)),
                  !1 !== r && !1 !== n
                );
              },
              $ = function (t, e, i, s, r) {
                var n, a, o, h;
                if (1 === s || s >= 4) {
                  for (h = r.length, n = 0; h > n; n++)
                    if ((o = r[n]) !== e)
                      o._gc || (G(o, e) && o._enabled(!1, !1) && (a = !0));
                    else if (5 === s) break;
                  return a;
                }
                var l,
                  c = e._startTime + d,
                  u = [],
                  p = 0,
                  f = 0 === e._duration;
                for (n = r.length; --n > -1; )
                  (o = r[n]) === e ||
                    o._gc ||
                    o._paused ||
                    (o._timeline !== e._timeline
                      ? ((l = l || Q(e, 0, f)),
                        0 === Q(o, l, f) && (u[p++] = o))
                      : c >= o._startTime &&
                        o._startTime + o.totalDuration() / o._timeScale > c &&
                        (((f || !o._initted) && 2e-10 >= c - o._startTime) ||
                          (u[p++] = o)));
                for (n = p; --n > -1; )
                  if (
                    ((o = u[n]),
                    2 === s && o._kill(i, t, e) && (a = !0),
                    2 !== s || (!o._firstPT && o._initted))
                  ) {
                    if (2 !== s && !G(o, e)) continue;
                    o._enabled(!1, !1) && (a = !0);
                  }
                return a;
              },
              Q = function (t, e, i) {
                for (
                  var s = t._timeline, r = s._timeScale, n = t._startTime;
                  s._timeline;

                ) {
                  if (((n += s._startTime), (r *= s._timeScale), s._paused))
                    return -100;
                  s = s._timeline;
                }
                return (n /= r) > e
                  ? n - e
                  : (i && n === e) || (!t._initted && 2 * d > n - e)
                  ? d
                  : (n += t.totalDuration() / t._timeScale / r) > e + d
                  ? 0
                  : n - e - d;
              };
            (l._init = function () {
              var t,
                e,
                i,
                s,
                r,
                n = this.vars,
                a = this._overwrittenProps,
                o = this._duration,
                h = !!n.immediateRender,
                l = n.ease;
              if (n.startAt) {
                for (s in (this._startAt &&
                  (this._startAt.render(-1, !0), this._startAt.kill()),
                (r = {}),
                n.startAt))
                  r[s] = n.startAt[s];
                if (
                  ((r.overwrite = !1),
                  (r.immediateRender = !0),
                  (r.lazy = h && !1 !== n.lazy),
                  (r.startAt = r.delay = null),
                  (this._startAt = E.to(this.target, 0, r)),
                  h)
                )
                  if (this._time > 0) this._startAt = null;
                  else if (0 !== o) return;
              } else if (n.runBackwards && 0 !== o)
                if (this._startAt)
                  this._startAt.render(-1, !0),
                    this._startAt.kill(),
                    (this._startAt = null);
                else {
                  for (s in (0 !== this._time && (h = !1), (i = {}), n))
                    (X[s] && "autoCSS" !== s) || (i[s] = n[s]);
                  if (
                    ((i.overwrite = 0),
                    (i.data = "isFromStart"),
                    (i.lazy = h && !1 !== n.lazy),
                    (i.immediateRender = h),
                    (this._startAt = E.to(this.target, 0, i)),
                    h)
                  ) {
                    if (0 === this._time) return;
                  } else
                    this._startAt._init(),
                      this._startAt._enabled(!1),
                      this.vars.immediateRender && (this._startAt = null);
                }
              if (
                ((this._ease = l = l
                  ? l instanceof P
                    ? l
                    : "function" == typeof l
                    ? new P(l, n.easeParams)
                    : S[l] || E.defaultEase
                  : E.defaultEase),
                n.easeParams instanceof Array &&
                  l.config &&
                  (this._ease = l.config.apply(l, n.easeParams)),
                (this._easeType = this._ease._type),
                (this._easePower = this._ease._power),
                (this._firstPT = null),
                this._targets)
              )
                for (t = this._targets.length; --t > -1; )
                  this._initProps(
                    this._targets[t],
                    (this._propLookup[t] = {}),
                    this._siblings[t],
                    a ? a[t] : null
                  ) && (e = !0);
              else
                e = this._initProps(
                  this.target,
                  this._propLookup,
                  this._siblings,
                  a
                );
              if (
                (e && E._onPluginEvent("_onInitAllProps", this),
                a &&
                  (this._firstPT ||
                    ("function" != typeof this.target &&
                      this._enabled(!1, !1))),
                n.runBackwards)
              )
                for (i = this._firstPT; i; )
                  (i.s += i.c), (i.c = -i.c), (i = i._next);
              (this._onUpdate = n.onUpdate), (this._initted = !0);
            }),
              (l._initProps = function (t, e, s, r) {
                var n, a, o, h, l, c;
                if (null == t) return !1;
                for (n in (N[t._gsTweenID] && q(),
                this.vars.css ||
                  (t.style &&
                    t !== i &&
                    t.nodeType &&
                    j.css &&
                    !1 !== this.vars.autoCSS &&
                    (function (t, e) {
                      var i,
                        s = {};
                      for (i in t)
                        X[i] ||
                          (i in e &&
                            "transform" !== i &&
                            "x" !== i &&
                            "y" !== i &&
                            "width" !== i &&
                            "height" !== i &&
                            "className" !== i &&
                            "border" !== i) ||
                          !(!j[i] || (j[i] && j[i]._autoCSS)) ||
                          ((s[i] = t[i]), delete t[i]);
                      t.css = s;
                    })(this.vars, t)),
                this.vars)) {
                  if (((c = this.vars[n]), X[n]))
                    c &&
                      (c instanceof Array || (c.push && g(c))) &&
                      -1 !== c.join("").indexOf("{self}") &&
                      (this.vars[n] = c = this._swapSelfInParams(c, this));
                  else if (
                    j[n] &&
                    (h = new j[n]())._onInitTween(t, this.vars[n], this)
                  ) {
                    for (
                      this._firstPT = l = {
                        _next: this._firstPT,
                        t: h,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: n,
                        pg: !0,
                        pr: h._priority,
                      },
                        a = h._overwriteProps.length;
                      --a > -1;

                    )
                      e[h._overwriteProps[a]] = this._firstPT;
                    (h._priority || h._onInitAllProps) && (o = !0),
                      (h._onDisable || h._onEnable) &&
                        (this._notifyPluginsOfEnabled = !0);
                  } else
                    (this._firstPT = e[n] = l = {
                      _next: this._firstPT,
                      t: t,
                      p: n,
                      f: "function" == typeof t[n],
                      n: n,
                      pg: !1,
                      pr: 0,
                    }),
                      (l.s = l.f
                        ? t[
                            n.indexOf("set") ||
                            "function" != typeof t["get" + n.substr(3)]
                              ? n
                              : "get" + n.substr(3)
                          ]()
                        : parseFloat(t[n])),
                      (l.c =
                        "string" == typeof c && "=" === c.charAt(1)
                          ? parseInt(c.charAt(0) + "1", 10) *
                            Number(c.substr(2))
                          : Number(c) - l.s || 0);
                  l && l._next && (l._next._prev = l);
                }
                return r && this._kill(r, t)
                  ? this._initProps(t, e, s, r)
                  : this._overwrite > 1 &&
                    this._firstPT &&
                    s.length > 1 &&
                    $(t, this, e, this._overwrite, s)
                  ? (this._kill(e, t), this._initProps(t, e, s, r))
                  : (this._firstPT &&
                      ((!1 !== this.vars.lazy && this._duration) ||
                        (this.vars.lazy && !this._duration)) &&
                      (N[t._gsTweenID] = !0),
                    o);
              }),
              (l.render = function (t, e, i) {
                var s,
                  r,
                  n,
                  a,
                  o = this._time,
                  h = this._duration,
                  l = this._rawPrevTime;
                if (t >= h)
                  (this._totalTime = this._time = h),
                    (this.ratio = this._ease._calcEnd
                      ? this._ease.getRatio(1)
                      : 1),
                    this._reversed ||
                      ((s = !0),
                      (r = "onComplete"),
                      (i = i || this._timeline.autoRemoveChildren)),
                    0 === h &&
                      (this._initted || !this.vars.lazy || i) &&
                      (this._startTime === this._timeline._duration && (t = 0),
                      (0 === t ||
                        0 > l ||
                        (l === d && "isPause" !== this.data)) &&
                        l !== t &&
                        ((i = !0), l > d && (r = "onReverseComplete")),
                      (this._rawPrevTime = a = !e || t || l === t ? t : d));
                else if (1e-7 > t)
                  (this._totalTime = this._time = 0),
                    (this.ratio = this._ease._calcEnd
                      ? this._ease.getRatio(0)
                      : 0),
                    (0 !== o || (0 === h && l > 0)) &&
                      ((r = "onReverseComplete"), (s = this._reversed)),
                    0 > t &&
                      ((this._active = !1),
                      0 === h &&
                        (this._initted || !this.vars.lazy || i) &&
                        (l >= 0 &&
                          (l !== d || "isPause" !== this.data) &&
                          (i = !0),
                        (this._rawPrevTime = a = !e || t || l === t ? t : d))),
                    this._initted || (i = !0);
                else if (((this._totalTime = this._time = t), this._easeType)) {
                  var c = t / h,
                    u = this._easeType,
                    p = this._easePower;
                  (1 === u || (3 === u && c >= 0.5)) && (c = 1 - c),
                    3 === u && (c *= 2),
                    1 === p
                      ? (c *= c)
                      : 2 === p
                      ? (c *= c * c)
                      : 3 === p
                      ? (c *= c * c * c)
                      : 4 === p && (c *= c * c * c * c),
                    (this.ratio =
                      1 === u
                        ? 1 - c
                        : 2 === u
                        ? c
                        : 0.5 > t / h
                        ? c / 2
                        : 1 - c / 2);
                } else this.ratio = this._ease.getRatio(t / h);
                if (this._time !== o || i) {
                  if (!this._initted) {
                    if ((this._init(), !this._initted || this._gc)) return;
                    if (
                      !i &&
                      this._firstPT &&
                      ((!1 !== this.vars.lazy && this._duration) ||
                        (this.vars.lazy && !this._duration))
                    )
                      return (
                        (this._time = this._totalTime = o),
                        (this._rawPrevTime = l),
                        F.push(this),
                        void (this._lazy = [t, e])
                      );
                    this._time && !s
                      ? (this.ratio = this._ease.getRatio(this._time / h))
                      : s &&
                        this._ease._calcEnd &&
                        (this.ratio = this._ease.getRatio(
                          0 === this._time ? 0 : 1
                        ));
                  }
                  for (
                    !1 !== this._lazy && (this._lazy = !1),
                      this._active ||
                        (!this._paused &&
                          this._time !== o &&
                          t >= 0 &&
                          (this._active = !0)),
                      0 === o &&
                        (this._startAt &&
                          (t >= 0
                            ? this._startAt.render(t, e, i)
                            : r || (r = "_dummyGS")),
                        this.vars.onStart &&
                          (0 !== this._time || 0 === h) &&
                          (e ||
                            this.vars.onStart.apply(
                              this.vars.onStartScope || this,
                              this.vars.onStartParams || b
                            ))),
                      n = this._firstPT;
                    n;

                  )
                    n.f
                      ? n.t[n.p](n.c * this.ratio + n.s)
                      : (n.t[n.p] = n.c * this.ratio + n.s),
                      (n = n._next);
                  this._onUpdate &&
                    (0 > t &&
                      this._startAt &&
                      -1e-4 !== t &&
                      this._startAt.render(t, e, i),
                    e ||
                      ((this._time !== o || s) &&
                        this._onUpdate.apply(
                          this.vars.onUpdateScope || this,
                          this.vars.onUpdateParams || b
                        ))),
                    r &&
                      (!this._gc || i) &&
                      (0 > t &&
                        this._startAt &&
                        !this._onUpdate &&
                        -1e-4 !== t &&
                        this._startAt.render(t, e, i),
                      s &&
                        (this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !e &&
                        this.vars[r] &&
                        this.vars[r].apply(
                          this.vars[r + "Scope"] || this,
                          this.vars[r + "Params"] || b
                        ),
                      0 === h &&
                        this._rawPrevTime === d &&
                        a !== d &&
                        (this._rawPrevTime = 0));
                }
              }),
              (l._kill = function (t, e, i) {
                if (
                  ("all" === t && (t = null),
                  null == t && (null == e || e === this.target))
                )
                  return (this._lazy = !1), this._enabled(!1, !1);
                var s, n, a, o, h, l, c, u, p;
                if (
                  ((e =
                    "string" != typeof e
                      ? e || this._targets || this.target
                      : E.selector(e) || e),
                  (g(e) || z(e)) && "number" != typeof e[0])
                )
                  for (s = e.length; --s > -1; )
                    this._kill(t, e[s]) && (l = !0);
                else {
                  if (this._targets) {
                    for (s = this._targets.length; --s > -1; )
                      if (e === this._targets[s]) {
                        (h = this._propLookup[s] || {}),
                          (this._overwrittenProps =
                            this._overwrittenProps || []),
                          (n = this._overwrittenProps[s] = t
                            ? this._overwrittenProps[s] || {}
                            : "all");
                        break;
                      }
                  } else {
                    if (e !== this.target) return !1;
                    (h = this._propLookup),
                      (n = this._overwrittenProps = t
                        ? this._overwrittenProps || {}
                        : "all");
                  }
                  if (h) {
                    if (
                      ((c = t || h),
                      (u =
                        t !== n &&
                        "all" !== n &&
                        t !== h &&
                        ("object" != r(t) || !t._tempKill)),
                      i && (E.onOverwrite || this.vars.onOverwrite))
                    ) {
                      for (a in c) h[a] && (p || (p = []), p.push(a));
                      if (!G(this, i, e, p)) return !1;
                    }
                    for (a in c)
                      (o = h[a]) &&
                        (o.pg && o.t._kill(c) && (l = !0),
                        (o.pg && 0 !== o.t._overwriteProps.length) ||
                          (o._prev
                            ? (o._prev._next = o._next)
                            : o === this._firstPT && (this._firstPT = o._next),
                          o._next && (o._next._prev = o._prev),
                          (o._next = o._prev = null)),
                        delete h[a]),
                        u && (n[a] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1);
                  }
                }
                return l;
              }),
              (l.invalidate = function () {
                return (
                  this._notifyPluginsOfEnabled &&
                    E._onPluginEvent("_onDisable", this),
                  (this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null),
                  (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
                  (this._propLookup = this._targets ? {} : []),
                  D.prototype.invalidate.call(this),
                  this.vars.immediateRender &&
                    ((this._time = -d), this.render(-this._delay)),
                  this
                );
              }),
              (l._enabled = function (t, e) {
                if ((u || c.wake(), t && this._gc)) {
                  var i,
                    s = this._targets;
                  if (s)
                    for (i = s.length; --i > -1; )
                      this._siblings[i] = Z(s[i], this, !0);
                  else this._siblings = Z(this.target, this, !0);
                }
                return (
                  D.prototype._enabled.call(this, t, e),
                  !(!this._notifyPluginsOfEnabled || !this._firstPT) &&
                    E._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                );
              }),
              (E.to = function (t, e, i) {
                return new E(t, e, i);
              }),
              (E.from = function (t, e, i) {
                return (
                  (i.runBackwards = !0),
                  (i.immediateRender = 0 != i.immediateRender),
                  new E(t, e, i)
                );
              }),
              (E.fromTo = function (t, e, i, s) {
                return (
                  (s.startAt = i),
                  (s.immediateRender =
                    0 != s.immediateRender && 0 != i.immediateRender),
                  new E(t, e, s)
                );
              }),
              (E.delayedCall = function (t, e, i, s, r) {
                return new E(e, 0, {
                  delay: t,
                  onComplete: e,
                  onCompleteParams: i,
                  onCompleteScope: s,
                  onReverseComplete: e,
                  onReverseCompleteParams: i,
                  onReverseCompleteScope: s,
                  immediateRender: !1,
                  lazy: !1,
                  useFrames: r,
                  overwrite: 0,
                });
              }),
              (E.set = function (t, e) {
                return new E(t, 0, e);
              }),
              (E.getTweensOf = function (t, e) {
                if (null == t) return [];
                var i, s, r, n;
                if (
                  ((t = "string" != typeof t ? t : E.selector(t) || t),
                  (g(t) || z(t)) && "number" != typeof t[0])
                ) {
                  for (i = t.length, s = []; --i > -1; )
                    s = s.concat(E.getTweensOf(t[i], e));
                  for (i = s.length; --i > -1; )
                    for (n = s[i], r = i; --r > -1; )
                      n === s[r] && s.splice(i, 1);
                } else
                  for (i = (s = Z(t).concat()).length; --i > -1; )
                    (s[i]._gc || (e && !s[i].isActive())) && s.splice(i, 1);
                return s;
              }),
              (E.killTweensOf = E.killDelayedCallsTo = function (t, e, i) {
                "object" == r(e) && ((i = e), (e = !1));
                for (var s = E.getTweensOf(t, e), n = s.length; --n > -1; )
                  s[n]._kill(i, t);
              });
            var J = w(
              "plugins.TweenPlugin",
              function (t, e) {
                (this._overwriteProps = (t || "").split(",")),
                  (this._propName = this._overwriteProps[0]),
                  (this._priority = e || 0),
                  (this._super = J.prototype);
              },
              !0
            );
            if (
              ((l = J.prototype),
              (J.version = "1.10.1"),
              (J.API = 2),
              (l._firstPT = null),
              (l._addTween = function (t, e, i, s, r, n) {
                var a, o;
                return null != s &&
                  (a =
                    "number" == typeof s || "=" !== s.charAt(1)
                      ? Number(s) - i
                      : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)))
                  ? ((this._firstPT = o = {
                      _next: this._firstPT,
                      t: t,
                      p: e,
                      s: i,
                      c: a,
                      f: "function" == typeof t[e],
                      n: r || e,
                      r: n,
                    }),
                    o._next && (o._next._prev = o),
                    o)
                  : void 0;
              }),
              (l.setRatio = function (t) {
                for (var e, i = this._firstPT; i; )
                  (e = i.c * t + i.s),
                    i.r
                      ? (e = Math.round(e))
                      : 1e-6 > e && e > -1e-6 && (e = 0),
                    i.f ? i.t[i.p](e) : (i.t[i.p] = e),
                    (i = i._next);
              }),
              (l._kill = function (t) {
                var e,
                  i = this._overwriteProps,
                  s = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                  for (e = i.length; --e > -1; )
                    null != t[i[e]] && i.splice(e, 1);
                for (; s; )
                  null != t[s.n] &&
                    (s._next && (s._next._prev = s._prev),
                    s._prev
                      ? ((s._prev._next = s._next), (s._prev = null))
                      : this._firstPT === s && (this._firstPT = s._next)),
                    (s = s._next);
                return !1;
              }),
              (l._roundProps = function (t, e) {
                for (var i = this._firstPT; i; )
                  (t[this._propName] ||
                    (null != i.n &&
                      t[i.n.split(this._propName + "_").join("")])) &&
                    (i.r = e),
                    (i = i._next);
              }),
              (E._onPluginEvent = function (t, e) {
                var i,
                  s,
                  r,
                  n,
                  a,
                  o = e._firstPT;
                if ("_onInitAllProps" === t) {
                  for (; o; ) {
                    for (a = o._next, s = r; s && s.pr > o.pr; ) s = s._next;
                    (o._prev = s ? s._prev : n) ? (o._prev._next = o) : (r = o),
                      (o._next = s) ? (s._prev = o) : (n = o),
                      (o = a);
                  }
                  o = e._firstPT = r;
                }
                for (; o; )
                  o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
                    (o = o._next);
                return i;
              }),
              (J.activate = function (t) {
                for (var e = t.length; --e > -1; )
                  t[e].API === J.API && (j[new t[e]()._propName] = t[e]);
                return !0;
              }),
              (x.plugin = function (t) {
                if (!(t && t.propName && t.init && t.API))
                  throw "illegal plugin definition.";
                var e,
                  i = t.propName,
                  s = t.priority || 0,
                  r = t.overwriteProps,
                  n = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_roundProps",
                    initAll: "_onInitAllProps",
                  },
                  a = w(
                    "plugins." +
                      i.charAt(0).toUpperCase() +
                      i.substr(1) +
                      "Plugin",
                    function () {
                      J.call(this, i, s), (this._overwriteProps = r || []);
                    },
                    !0 === t.global
                  ),
                  o = (a.prototype = new J(i));
                for (e in ((o.constructor = a), (a.API = t.API), n))
                  "function" == typeof t[e] && (o[n[e]] = t[e]);
                return (a.version = t.version), J.activate([a]), a;
              }),
              (o = i._gsQueue))
            ) {
              for (h = 0; o.length > h; h++) o[h]();
              for (l in v)
                v[l].func ||
                  i.console.log(
                    "GSAP encountered missing dependency: com.greensock." + l
                  );
            }
            u = !1;
          }
        })(t.exports && void 0 !== i ? i : this || window);
    }.call(this, i(6)));
  },
  function (t, e, i) {
    "use strict";
    i.r(e),
      function (t) {
        var e = i(3),
          s = i.n(e);
        function r(t, e) {
          var i = t.attr("required"),
            s = e.target.value,
            r = t.val(),
            n = t.parent().hasClass("isNumber");
          "" == r
            ? t.closest(".input").removeClass("input--filled")
            : t.closest(".input").addClass("input--filled"),
            s &&
              (n && isNaN(s)
                ? (t.closest(".input").addClass("error"),
                  t.closest(".input").next(),
                  t.closest(".input").next().text("Укажите числовое значение"))
                : t.closest(".input").removeClass("error")),
            !s &&
              i &&
              (t.closest(".input").addClass("error"),
              t.closest(".input").next(),
              t.closest(".input").next().text("Пожалуйста, заполните поле"));
        }
        t(".steps-form").on(
          "blur",
          ".input input, .textarea textarea",
          function (e) {
            r(t(this), e);
          }
        ),
          t(".input input, .textarea textarea").on("blur", function (e) {
            r(t(this), e);
          }),
          t(".send--js").click(function () {
            return (
              t(this).closest(".contacts-form").hide(500),
              t(this).closest(".contacts-form").next().show(),
              setTimeout(function () {
                return s.a.refresh({ offset: -80 });
              }, 500),
              !1
            );
          }),
          t(".return--js").click(function () {
            return (
              t(this).closest(".contacts-form").hide(500),
              t(this).closest(".contacts-form").prev().show(),
              setTimeout(function () {
                return s.a.refresh({ offset: -80 });
              }, 500),
              !1
            );
          });
      }.call(this, i(1));
  },
  function (t, e, i) {
    (function (t) {
      var e,
        i = [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#4d88ea" }],
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{ color: "#000045" }, { lightness: 20 }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{ color: "#000045" }, { lightness: 17 }, { weight: 1.2 }],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{ color: "#0000ff" }, { lightness: "0" }],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#000045" }, { lightness: 21 }],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#000045" }, { lightness: 17 }],
          },
          {
            featureType: "road.highway.controlled_access",
            elementType: "geometry.stroke",
            stylers: [{ color: "#000045" }, { lightness: 20 }],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#000045" }, { lightness: 25 }],
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{ color: "#000045" }, { lightness: 25 }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#000045" }, { lightness: 19 }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#0000bd" }, { lightness: "0" }, { gamma: "1" }],
          },
        ],
        s = [],
        r = [
          [59.91701049, 30.31812429],
          [59.91916157, 30.3251195],
          [59.91756978, 30.31812429],
          [59.92049517, 30.33250093],
          [59.91701049, 30.3276515],
        ];
      t(document).ready(
        t("#googleMap").length &&
          function () {
            var t = {
              center: new google.maps.LatLng(59.91916157, 30.3251195),
              zoom: 4,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              mapTypeControl: !1,
              zoomControl: !0,
              scrollwheel: !1,
              styles: i,
            };
            e = new google.maps.Map(document.getElementById("googleMap"), t);
            for (var n = 0; n < r.length; n++)
              s[n] = new google.maps.Marker({
                position: new google.maps.LatLng(r[n][0], r[n][1]),
                icon: "assets/images/icons/marker.svg",
                map: e,
                id: n,
              });
          }
      ),
        t(document).ready(function () {
          t(".adr--js").on("click", function (i) {
            i.preventDefault();
            var s = t(this).data("mapx"),
              r = t(this).data("mapy"),
              n = t("#googleMap").offset().top;
            new google.maps.Marker({
              position: new google.maps.LatLng(s, r),
              icon: "assets/images/icons/marker.svg",
              map: e,
              id: 99,
            }),
              t("body,html").animate({ scrollTop: n }, 1e3),
              e.panTo(new google.maps.LatLng(s, r));
          });
        });
    }.call(this, i(1)));
  },
  function (t, e, i) {
    "use strict";
    i.r(e),
      function (t) {
        var e = i(10),
          s = Math.max(
            document.documentElement.clientWidth,
            window.innerWidth || 0
          ),
          r = !1;
        t(".menu--js").click(function (e) {
          e.preventDefault(),
            r ||
              (t(this).hasClass("open")
                ? (TweenMax.to(".menuBar-top", 1, {
                    opacity: 0,
                    ease: Power4.easeInOut,
                  }),
                  TweenMax.to(".menuBar-bottom", 1, {
                    transform: "translateY(600px)",
                    ease: Power4.easeInOut,
                  }),
                  TweenMax.to(".menuBar-header", 1, {
                    transform: "translateY(-600px)",
                    delay: 0.2,
                    ease: Power4.easeInOut,
                  }),
                  TweenMax.to(o, 0.6, {
                    scaleY: 0,
                    delay: 0.8,
                    ease: Power4.easeInOut,
                  }),
                  TweenMax.to(a.find("div"), 0, {
                    delay: 1.5,
                    onComplete: function () {
                      TweenMax.set(n, { autoAlpha: 0 });
                    },
                  }),
                  t(".menuBar").removeClass("open"),
                  t(".menu--js").removeClass("open"))
                : (TweenMax.set(n, { autoAlpha: 1 }),
                  TweenMax.to(o, 1, { scaleY: 1, ease: Power4.easeInOut }),
                  TweenMax.to(".menuBar-header", 1, {
                    transform: "translateY(0)",
                    delay: 0.4,
                    ease: Power4.easeInOut,
                  }),
                  TweenMax.to(".menuBar-top", 1, {
                    opacity: 1,
                    delay: 0.6,
                    ease: Power4.easeInOut,
                  }),
                  TweenMax.to(".menuBar-bottom", 1, {
                    transform: "translateY(0)",
                    delay: 0.7,
                    ease: Power4.easeInOut,
                  }),
                  t(".menuBar").addClass("open"),
                  t(".menu--js").addClass("open")),
              setTimeout(function () {
                t("body").toggleClass("fixed");
              }, 0),
              t("#fullpage").length &&
                (t(this).hasClass("open")
                  ? (fullpage_api.setMouseWheelScrolling(!0),
                    fullpage_api.setAllowScrolling(!0))
                  : (fullpage_api.setMouseWheelScrolling(!1),
                    fullpage_api.setAllowScrolling(!1))),
              (r = !0),
              setTimeout(function () {
                r = !1;
              }, 1500));
        }),
          t(".search--js").click(function () {
            return t(".searchBar").addClass("active"), !1;
          }),
          t(".searchBar__close").click(function () {
            return t(".searchBar").removeClass("active"), !1;
          }),
          s < 768 &&
            t(
              ".mobileMenu--js h3 > a, .mobileMenu--js .dropdown-menu__item--parent > a, .mobileMenu--js .dropdownDeep__item--parent > a"
            ).click(function () {
              return (
                t(this).parent().toggleClass("active"),
                t(this).next().slideToggle(),
                !1
              );
            }),
          t(document).mouseup(function (t) {
            Object(e.a)(".searchBar.active", t);
          }),
          t(function () {
            var e = 0,
              i = t(".filter--js").offset();
            t(window).scroll(function () {
              var r = t(this).scrollTop();
              i &&
                (r > i.top
                  ? t(".filter--js").addClass("fixed")
                  : t(".filter--js").removeClass("fixed")),
                Math.abs(e - r) <= 5 ||
                  (s > 767 &&
                    (r > 1
                      ? t("header")
                          .addClass("scroll")
                          .parent()
                          .addClass("scroller")
                      : t("header")
                          .removeClass("scroll")
                          .parent()
                          .removeClass("scroller")),
                  (e = r));
            });
          }),
          t(".main-nav__item--parent").mouseleave(function () {
            t(this).parents().find(".page-header").removeClass("hover");
          }),
          t(".main-nav__item--parent").mouseover(function () {
            t(this).parents().find(".page-header").addClass("hover");
          }),
          t(".dropdown-menu__item").mouseover(function () {
            var e = t(this).data("img");
            t(this)
              .closest(".dropdown")
              .css(
                "background",
                'url("assets/images/menu/'.concat(
                  e,
                  '") no-repeat right bottom 15px, #F6F6F6'
                )
              );
          }),
          t(".dropdown-menu__item--js").mouseover(function () {
            t(".liners span:nth-child(2)").css("opacity", 1);
          }),
          t(".dropdown-menu__item1--js").mouseover(function () {
            t(".liners span:nth-child(3)").css("opacity", 1);
          }),
          t(".dropdown-menu__item--js").mouseleave(function () {
            t(".liners span:nth-child(2)").css("opacity", 0);
          }),
          t(".dropdown-menu__item1--js").mouseleave(function () {
            t(".liners span:nth-child(3)").css("opacity", 0);
          });
        var n = t(".menuBar"),
          a = t(".menu--js"),
          o = t(".menuBar .background");
      }.call(this, i(1));
  },
  function (t, e, i) {
    "use strict";
    i.r(e),
      function (t) {
        i(20), i(21), i(22);
        var e = i(3),
          s = i.n(e);
        t(".share--js").click(function () {
          return (
            t(this).parent().find(".card-share-icon").toggleClass("active"), !1
          );
        }),
          t("#filters").on("click", "a", function () {
            t(".grid > *").slideUp("slow").addClass("transparent"),
              t("#filters a").removeClass("active"),
              t(this).addClass("active");
            var e = t(this).data("filter");
            return (
              t(e).slideDown("slow"),
              t(e).removeClass("transparent"),
              "all" === e && t(".grid > *").slideDown("slow"),
              setTimeout(function () {
                return s.a.refresh();
              }, 500),
              !1
            );
          }),
          t(".popup-modal").magnificPopup({
            type: "inline",
            removalDelay: 1300,
            mainClass: "my-mfp-zoom-in",
            showCloseBtn: !1,
            fixedContentPos: !0,
          }),
          t(document).on("click", ".popup-modal-dismiss", function (e) {
            e.preventDefault(), t.magnificPopup.close();
          }),
          t(".filter--js").on(
            "click",
            ".filter__item:not(.disabled)",
            function () {
              var e = t(this).data("type");
              t(".filtersBody__item#" + e).addClass("active");
            }
          ),
          t(".filter--js").on("click", ".filter__item.disabled", function () {
            t(this).find(".filter__item-error").slideToggle();
          }),
          t(document).mouseup(function (e) {
            var i = t(".filter__item.disabled");
            i.length &&
              !i.is(e.target) &&
              0 === i.has(e.target).length &&
              t(".filter__item-error").slideUp();
          }),
          t(".filtersBody__item-close").click(function () {
            t(this).closest(".filtersBody__item").removeClass("active");
          }),
          t(".reset-filterBody").click(function () {
            var e = t(this).closest(".filtersBody__item").attr("id");
            t(this)
              .closest(".filtersBody__item")
              .find("input:checkbox")
              .prop("checked", !1);
            var i = t(".filter--js").find(".filter__item[data-type=" + e + "]"),
              s = t(i).data("title");
            t(i).removeClass("active"),
              t(i).find("span").text(s),
              t(i).find("b").text(""),
              "industry" === e &&
                t(".filter--js .filter__item:nth-child(2)").addClass(
                  "disabled"
                );
          }),
          t(".get-filterBody").click(function () {
            var e = t(this).closest(".filtersBody__item").attr("id"),
              i = t(this)
                .closest(".filtersBody__item")
                .find("input:checkbox:checked"),
              s = i.length,
              r = "";
            t(i).each(function () {
              r += "".concat(t(this).data("title"), " ");
            }),
              s &&
                (s > 1 &&
                  t(".filter--js")
                    .find(".filter__item[data-type=" + e + "] b")
                    .text(s),
                t(".filter--js")
                  .find(".filter__item[data-type=" + e + "] > span")
                  .text(r),
                t(".filter--js")
                  .find(".filter__item[data-type=" + e + "]")
                  .addClass("active")),
              "industry" === e &&
                t(".filter--js .filter__item.disabled")
                  .removeClass("disabled")
                  .find(".filter__item-error")
                  .slideUp(),
              t(this).closest(".filtersBody__item").removeClass("active");
          }),
          t(".reset--js").click(function () {
            t(".filtersBody").find("input:checkbox").prop("checked", !1);
            var e = t(".filter").find(".filter__item");
            t(e).each(function () {
              var e = t(this).data("title");
              t(this).removeClass("active"),
                t(this).find("span").text(e),
                t(this).find("b").text("");
            }),
              t(".filter--js .filter__item:nth-child(2)").addClass("disabled");
          }),
          t(".showText--js").click(function () {
            t(this).hide().prev().addClass("active");
          }),
          t(".catalog-menu__item--parent").click(function () {
            return t(this).toggleClass("active"), !1;
          }),
          t(".catalog-menu-mobile").click(function () {
            return t(this).next().toggleClass("active"), !1;
          }),
          t(".catalog-menu-close").click(function () {
            return t(this).parent().toggleClass("active"), !1;
          }),
          t(".config-filter__item input").click(function () {
            var e = t(this).attr("value");
            t(this)
              .closest(".config-block")
              .hide("300")
              .next()
              .addClass("active")
              .find(".txt")
              .text(e),
              t(this)
                .closest(".config-block")
                .hide("300")
                .next()
                .next()
                .show("300"),
              t(".config-block-text.active").length > 1 &&
                t(".config-result").show("300"),
              setTimeout(function () {
                return s.a.refresh({ offset: -80 });
              }, 500);
          }),
          t(".config-block-text").click(function () {
            t(this).removeClass("active"),
              t(this)
                .prev()
                .show("300")
                .find("input:radio")
                .prop("checked", !1),
              t(this).next().hide("300"),
              t(".config-block-text.active").length < 2 &&
                t(".config-result, .config-textres").hide("300"),
              setTimeout(function () {
                return s.a.refresh({ offset: -80 });
              }, 500);
          }),
          t(".catalog-content__item").mouseover(function (t) {
            var e = this.getBoundingClientRect(),
              i = t.clientX - e.left,
              s = t.clientY - e.top,
              r = this.offsetWidth / 2,
              n = this.offsetHeight / 2,
              a = ((i - r) / r) * -1 * 5,
              o = ((s - n) / n) * 5;
            this.style.setProperty("--mouseY", a + "deg"),
              this.style.setProperty("--mouseX", o + "deg");
          }),
          t(".sliderTab--js .sliderTab-item").click(function () {
            t(".sliderTab-item").removeClass("active"),
              t(this).addClass("active"),
              t(".sliderTab-item:last-child").hasClass("active")
                ? t(".sliderList").addClass("active")
                : t(".sliderList").removeClass("active");
          }),
          t(function () {
            t(".marquees").marquee({
              duration: 45e3,
              direction: "left",
              startVisible: !0,
              duplicated: !0,
            }),
              t(".marquee-rtl").marquee({
                duration: 3e4,
                direction: "right",
                startVisible: !0,
                duplicated: !0,
              });
          }),
          t(".accordion").on("click", ".accordion-header", function () {
            t(this)
              .parent()
              .toggleClass("active")
              .find(".accordion-content")
              .slideToggle(),
              setTimeout(function () {
                return s.a.refresh({ offset: -80 });
              }, 500);
          }),
          t(".select").select2({ minimumResultsForSearch: 1 / 0 }),
          t(".select").on("select2:open", function () {
            t(".select2-dropdown").hide(),
              setTimeout(function () {
                t(".select2-dropdown").slideDown("slow");
              }, 200);
          });
      }.call(this, i(1));
  },
  ,
  ,
  ,
  function (t, e, i) {
    "use strict";
    i.r(e),
      function (t) {
        var e,
          s = i(5),
          r = i.n(s);
        !(function () {
          (window.App = {
            W: t(window),
            D: t(document),
            H: t("html"),
            B: t("body"),
            ie: !1,
            edge: !1,
            firefox: !1,
            mainpage: !1,
          }),
            App.H.hasClass("mobile")
              ? (App.mobile = !0)
              : App.H.addClass("desktop"),
            App.H.hasClass("ie") && (App.ie = !0),
            App.H.hasClass("edge") && (App.edge = !0),
            App.H.hasClass("firefox") && (App.firefox = !0),
            App.H.hasClass("android") && (App.android = !0);
          var e,
            i,
            s,
            r,
            n =
              ((e = function () {
                App.W.trigger("resized");
              }),
              (i = 200),
              function () {
                var t = this,
                  n = arguments,
                  a = function () {
                    (r = null), s || e.apply(t, n);
                  },
                  o = s && !r;
                clearTimeout(r), (r = setTimeout(a, i)), o && e.apply(t, n);
              });
          App.W.on("resize", function () {
            n();
          });
        })(),
          (function () {
            var i = t(".js-mp-histoty-item");
            if (t(".js-mp-history").length) {
              var s = t(".js-mp-history-year-item"),
                n = t(".js-mp-history-year-inner"),
                a = t(".js-mp-history-age-item"),
                o = t(".js-mp-history-age-inner"),
                h = t(".js-timeline-item");
              (e = new r.a.Controller()),
                i.each(function () {
                  var i = t(this),
                    l = i.data("year"),
                    c = l.toString().substring(0, 2),
                    u = i.height() + 45,
                    p = new r.a.Scene({ triggerElement: i[0], duration: u })
                      .on("enter leave", function (t) {
                        if ("enter" == t.type) {
                          var e =
                              -1 *
                              a.filter('[data-age="' + c + '"]').position().top,
                            i =
                              -1 *
                              s.filter('[data-year="' + l + '"]').position()
                                .top;
                          n.css({ top: i + "px" }),
                            o.css({ top: e + "px" }),
                            h
                              .removeClass("_active")
                              .filter('[data-year="' + l + '"]')
                              .addClass("_active");
                        }
                      })
                      .addTo(e);
                  App.W.on("resized", function () {
                    (u = i.height() + 45), p.refresh();
                  });
                }),
                h.on("click", function () {
                  var e = t(this).data("year"),
                    s =
                      i.filter('[data-year="' + e + '"]').offset().top -
                      App.W.height() / 2 +
                      170;
                  t("html, body").animate({ scrollTop: s }, 500);
                });
            }
          })(),
          t(document).ready(function () {
            t(".ajax--js a").click(function () {
              return !1;
            });
          }),
          t(window).scroll(function () {
            if (
              t("#box").length &&
              t(window).scrollTop() + t(window).height() >= t(document).height()
            ) {
              var e = t(".ajax--js .active").attr("href");
              t("#box").load(e),
                setTimeout(function () {
                  t(".ajax--js a").removeClass("active"),
                    t(".ajax--js a.".concat(e)).addClass("active");
                }, 500),
                t("body,html").animate({ scrollTop: 0 });
            }
          });
      }.call(this, i(1));
  },
  function (t, e, i) {
    "use strict";
    i.r(e);
    i(25);
    var s =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth < 800,
      r = {
        particleGap: 4,
        particleSize: 1.3,
        mouseForce: -15,
        noise: 16,
        layerCount: s ? 1 : 2,
        layerDistance: 8.7,
      },
      n = document.getElementById("valentines"),
      a = /iPhone|iPad|iPod|Safari/i.test(navigator.userAgent);
    if ((-1 != navigator.userAgent.indexOf("Chrome") && (a = !1), n)) {
      var o = function (t, e) {
          (c.particleGap = r.particleGap),
            (c.particleSize = r.particleSize),
            (c.mouseForce = r.mouseForce),
            (c.noise = r.noise),
            (c.layerCount = r.layerCount),
            (c.layerDistance = r.layerDistance),
            (c.width = s ? t : window.innerWidth),
            (c.height = s ? (t < 800 ? 370 : e / 1.5) : window.innerHeight),
            c.start({ initPosition: "none", initDirection: "none" });
        },
        h = document.getElementsByClassName("section__main")[0].offsetWidth,
        l = document.getElementsByClassName("section__main")[0].offsetHeight,
        c = new Particle({
          renderer: a ? "canvas" : "webgl",
          image: document.querySelector("#valentines"),
          width: s ? h : window.innerWidth,
          height: s ? (h < 800 ? 370 : l / 1.5) : window.innerHeight,
          particleGap: r.particleGap,
          particleSize: r.particleSize,
          mouseForce: r.mouseForce,
          noise: r.noise,
          layerCount: r.layerCount,
          layerDistance: r.layerDistance,
        });
      window.addEventListener("resize", function () {
        var t = document.getElementsByClassName("section__main")[0].offsetWidth,
          e = document.getElementsByClassName("section__main")[0].offsetHeight;
        o(t, e);
      }),
        window.addEventListener("orientationchange", function () {
          var t = document.getElementsByClassName("section__main")[0]
              .offsetWidth,
            e = document.getElementsByClassName("section__main")[0]
              .offsetHeight;
          o(t, e);
        });
    }
  },
  function (t, e) {
    function i(t, e) {
      for (var i = 0; i < e.length; i++) {
        var s = e[i];
        (s.enumerable = s.enumerable || !1),
          (s.configurable = !0),
          "value" in s && (s.writable = !0),
          Object.defineProperty(t, s.key, s);
      }
    }
    !(function (t) {
      "use strict";
      var e,
        s,
        r,
        n,
        a,
        o,
        h,
        l,
        c,
        u,
        p,
        f,
        d,
        _,
        m,
        g,
        v,
        y,
        x,
        w,
        T,
        b,
        P,
        S,
        k,
        C,
        M,
        O,
        A,
        R,
        D =
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          function (t) {
            setTimeout(t, 10);
          },
        I =
          (Math.PI,
          (function () {
            function t(e) {
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t);
              var i = {};
              e &&
                (e.nodeName
                  ? ((i = JSON.parse(JSON.stringify(e.dataset))),
                    "IMG" === e.nodeName
                      ? (i.image = e)
                      : (i.wrapperElement = e))
                  : (i = e)),
                (this.state = "stopped"),
                (this.touches = []),
                this.on("imageLoaded", this._onImageLoaded),
                this._initImage(i);
            }
            var I, E, z;
            return (
              (I = t),
              (E = [
                {
                  key: "on",
                  value: function (t, e) {
                    (this.events = this.events || {}),
                      (this.events[t] = this.events[t] || []),
                      this.events[t].push(e);
                  },
                },
                {
                  key: "emit",
                  value: function (t, e) {
                    var i = this.events[t];
                    if (i && i.length)
                      for (var s = 0; s < i.length; s++) i[s].call(this, e);
                  },
                },
                {
                  key: "start",
                  value: function (t) {
                    var e = t || {};
                    (this.initPosition = e.initPosition || this.initPosition),
                      (this.initDirection =
                        e.initDirection || this.initDirection),
                      this.canvas &&
                        ((this.canvas.width = this.width),
                        (this.canvas.height = this.height),
                        (this.canvas.style.display = "")),
                      this._initOrigins(),
                      this._initParticles(),
                      this._webglSetAttributes(),
                      "running" !== this.state &&
                        ((this.state = "running"),
                        this.disableInteraction ||
                          ("ontouchstart" in window ||
                          window.navigator.msPointerEnabled
                            ? (document.body.addEventListener(
                                "touchstart",
                                this._touchHandler
                              ),
                              document.body.addEventListener(
                                "touchmove",
                                this._touchHandler
                              ),
                              document.body.addEventListener(
                                "touchend",
                                this._clearTouches
                              ),
                              document.body.addEventListener(
                                "touchcancel",
                                this._clearTouches
                              ))
                            : (this.canvas.addEventListener(
                                "mousemove",
                                this._mouseHandler
                              ),
                              this.canvas.addEventListener(
                                "mouseout",
                                this._clearTouches
                              ),
                              this.canvas.addEventListener(
                                "click",
                                this._clickHandler
                              ))),
                        this._animate());
                  },
                },
                {
                  key: "stop",
                  value: function (t) {
                    var e = t || {};
                    (this.fadePosition = e.fadePosition || this.fadePosition),
                      (this.fadeDirection =
                        e.fadeDirection || this.fadeDirection),
                      this._fade(),
                      document.body.removeEventListener(
                        "touchstart",
                        this._touchHandler
                      ),
                      document.body.removeEventListener(
                        "touchmove",
                        this._touchHandler
                      ),
                      document.body.removeEventListener(
                        "touchend",
                        this._clearTouches
                      ),
                      document.body.removeEventListener(
                        "touchcancel",
                        this._clearTouches
                      ),
                      this.canvas &&
                        (this.canvas.removeEventListener(
                          "mousemove",
                          this._mouseHandler
                        ),
                        this.canvas.removeEventListener(
                          "mouseout",
                          this._clearTouches
                        ),
                        this.canvas.removeEventListener(
                          "click",
                          this._clickHandler
                        ));
                  },
                },
                {
                  key: "_animate",
                  value: function () {
                    var t = this;
                    "stopped" !== this.state
                      ? (this._calculate(),
                        this._draw(),
                        D(function () {
                          return t._animate();
                        }))
                      : this.emit("stopped");
                  },
                },
                {
                  key: "_onImageLoaded",
                  value: function (t) {
                    (this.imageWidth =
                      this.image.naturalWidth || this.image.width),
                      (this.imageHeight =
                        this.image.naturalHeight || this.image.height),
                      (this.imageRatio = this.imageWidth / this.imageHeight),
                      (this.width = this.width || this.imageWidth),
                      (this.height = this.height || this.imageHeight),
                      (this.renderSize = (this.width + this.height) / 4),
                      this.srcImage && (this.srcImage.style.display = "none"),
                      this._initSettings(t),
                      this._initContext(t),
                      this._initResponsive(t),
                      this.start();
                  },
                },
                {
                  key: "_initImage",
                  value: function (t) {
                    var e = this;
                    (this.srcImage = t.image),
                      !this.srcImage &&
                        t.imageId &&
                        (this.srcImage = document.getElementById(t.imageId)),
                      (this.imageUrl = t.imageUrl || this.srcImage.src),
                      (this.image = document.createElement("img")),
                      (this.wrapperElement =
                        t.wrapperElement || this.srcImage.parentElement),
                      (this.image.onload = function () {
                        return e.emit("imageLoaded", t);
                      }),
                      (this.image.crossOrigin = "Anonymous"),
                      t.addTimestamp &&
                        (/\?/.test(this.imageUrl)
                          ? (this.imageUrl += "&d=" + Date.now())
                          : (this.imageUrl += "?d=" + Date.now())),
                      (this.image.src = this.imageUrl);
                  },
                },
                {
                  key: "_initContext",
                  value: function (t) {
                    (this.canvas = t.canvas),
                      this.canvas ||
                        this.context ||
                        !this.wrapperElement ||
                        ((this.canvas = document.createElement("canvas")),
                        this.wrapperElement.appendChild(this.canvas)),
                      this.convas && (this.convas.style.display = "none"),
                      (this.context = t.context),
                      (this.renderer = t.renderer || "default");
                  },
                },
                {
                  key: "_defaultInitContext",
                  value: function (t) {
                    this.context = this.context || this.canvas.getContext("2d");
                  },
                },
                {
                  key: "_webglInitContext",
                  value: function () {
                    (this.context =
                      this.context ||
                      this.canvas.getContext("webgl2") ||
                      this.canvas.getContext("experimental-webgl")),
                      (this.fragmentShaderScript =
                        "#version 300 es\n\n        precision highp float;\n\n        in vec4 vColor;\n        out vec4 fragColor;\n\n        void main(void) {\n          // fragColor = vec4(1, 1, 1, 0.1);\n          fragColor = vColor;\n        }\n      "),
                      (this.vertexShaderScript =
                        "#version 300 es\n\n        precision highp float;\n\n        in vec3 vertexPosition;\n        in vec4 vertexColor;\n        uniform vec3 vertexOffset;\n        uniform float pointSize;\n        uniform float depth;\n        vec3 mirror = vec3(1, -1, 1);\n\n        uniform mat4 modelViewMatrix;\n        uniform mat4 perspectiveMatrix;\n        uniform mat4 rotationMatrix;\n\n        out vec4 vColor;\n\n        void main(void) {\n          gl_Position = rotationMatrix * perspectiveMatrix * modelViewMatrix * vec4(mirror * vertexPosition + vertexOffset, vertexPosition);\n          gl_PointSize = pointSize + max((log(vertexPosition.z) - 3.91) * depth, -pointSize + 1.0);\n          vColor = vertexColor;\n        }\n      "),
                      this.context.viewport(0, 0, this.width, this.height);
                    var t = this.context.createShader(
                      this.context.VERTEX_SHADER
                    );
                    this.context.shaderSource(t, this.vertexShaderScript),
                      this.context.compileShader(t),
                      this.context.getShaderParameter(
                        t,
                        this.context.COMPILE_STATUS
                      ) || console.log(this.context.getShaderInfoLog(t));
                    var e = this.context.createShader(
                      this.context.FRAGMENT_SHADER
                    );
                    this.context.shaderSource(e, this.fragmentShaderScript),
                      this.context.compileShader(e),
                      this.context.getShaderParameter(
                        e,
                        this.context.COMPILE_STATUS
                      ) || console.log(this.context.getShaderInfoLog(e)),
                      (this.program = this.context.createProgram()),
                      this.context.attachShader(this.program, t),
                      this.context.attachShader(this.program, e),
                      this.context.linkProgram(this.program),
                      this.context.useProgram(this.program),
                      (this.vertexPosition = this.context.getAttribLocation(
                        this.program,
                        "vertexPosition"
                      )),
                      this.context.enableVertexAttribArray(this.vertexPosition),
                      (this.vertexColor = this.context.getAttribLocation(
                        this.program,
                        "vertexColor"
                      )),
                      this.context.enableVertexAttribArray(this.vertexColor),
                      this.context.clearColor(0, 0, 0, 0),
                      this.context.enable(this.context.BLEND),
                      this.context.disable(this.context.DEPTH_TEST),
                      this.context.blendFunc(
                        this.context.SRC_ALPHA,
                        this.context.ONE
                      ),
                      (this.vertexBuffer = this.context.createBuffer()),
                      this.context.bindBuffer(
                        this.context.ARRAY_BUFFER,
                        this.vertexBuffer
                      ),
                      this.context.clear(
                        this.context.COLOR_BUFFER_BIT |
                          this.context.DEPTH_BUFFER_BIT
                      ),
                      (this.vertexOffset = this.context.getUniformLocation(
                        this.program,
                        "vertexOffset"
                      )),
                      this.context.uniform3f(this.vertexOffset, 0, 0, 1e3),
                      this.context.vertexAttribPointer(
                        this.vertexPosition,
                        3,
                        this.context.FLOAT,
                        !1,
                        28,
                        0
                      ),
                      this.context.vertexAttribPointer(
                        this.vertexColor,
                        4,
                        this.context.FLOAT,
                        !1,
                        28,
                        12
                      ),
                      (this.uModelViewMatrix = this.context.getUniformLocation(
                        this.program,
                        "modelViewMatrix"
                      )),
                      (this.uPerspectiveMatrix = this.context.getUniformLocation(
                        this.program,
                        "perspectiveMatrix"
                      )),
                      (this.uRotationMatrix = this.context.getUniformLocation(
                        this.program,
                        "rotationMatrix"
                      )),
                      (this.uPointSize = this.context.getUniformLocation(
                        this.program,
                        "pointSize"
                      )),
                      (this.uDepth = this.context.getUniformLocation(
                        this.program,
                        "depth"
                      )),
                      this._webglSetAttributes();
                  },
                },
                {
                  key: "_webglSetAttributes",
                  value: function () {
                    if ("webgl" === this.renderer) {
                      var t = this.canvas.width / this.canvas.height,
                        e = 10 * Math.tan((1 * Math.PI) / 360),
                        i = -e,
                        s = e * t,
                        r = -s,
                        n = [
                          20 / (s - r),
                          0,
                          (s + r) / (s - r),
                          0,
                          0,
                          20 / (e - i),
                          (e + i) / (e - i),
                          0,
                          0,
                          0,
                          110 / 90,
                          2e3 / 90,
                          0,
                          0,
                          -1,
                          0,
                        ];
                      this.context.viewport(0, 0, this.width, this.height),
                        this.context.uniformMatrix4fv(
                          this.uModelViewMatrix,
                          !1,
                          new Float32Array(n)
                        ),
                        this.context.uniformMatrix4fv(
                          this.uPerspectiveMatrix,
                          !1,
                          new Float32Array([
                            1,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            1,
                          ])
                        ),
                        this.context.uniform1f(
                          this.uPointSize,
                          this.particleSize
                        ),
                        this.context.uniform1f(this.uDepth, this.depth),
                        this._updateRotation();
                    }
                  },
                },
                {
                  key: "_updateRotation",
                  value: function () {
                    var t = Math.cos(0),
                      e = Math.sin(0),
                      i = Math.cos(0),
                      s = [
                        i,
                        0,
                        Math.sin(0),
                        0,
                        0,
                        t,
                        -e,
                        0,
                        -i,
                        e,
                        t,
                        0,
                        0,
                        0,
                        0,
                        1,
                      ];
                    this.context.uniformMatrix4fv(
                      this.uRotationMatrix,
                      !1,
                      new Float32Array(s)
                    );
                  },
                },
                {
                  key: "_webglRenderer",
                  value: function () {
                    (b = new Float32Array(this.vertices)),
                      this.context.bufferData(
                        this.context.ARRAY_BUFFER,
                        b,
                        this.context.STATIC_DRAW
                      ),
                      this.context.clear(
                        this.context.COLOR_BUFFER_BIT |
                          this.context.DEPTH_BUFFER_BIT
                      ),
                      this.context.drawArrays(
                        this.context.POINTS,
                        0,
                        this.particles.length
                      ),
                      this.context.flush();
                  },
                },
                {
                  key: "_initSettings",
                  value: function (t) {
                    (this.width = 1 * t.width || this.width),
                      (this.height = 1 * t.height || this.height),
                      (this.maxWidth = t.maxWidth),
                      (this.maxHeight = t.maxHeight),
                      (this.minWidth = t.minWidth),
                      (this.minHeight = t.minHeight),
                      this.maxWidth &&
                        (/%$/.test(this.maxWidth)
                          ? (this.maxWidth =
                              (this.width * this.maxWidth.replace("%", "")) /
                              100)
                          : (this.maxWidth *= 1)),
                      this.maxHeight &&
                        (/%$/.test(this.maxHeight)
                          ? (this.maxHeight =
                              (this.height * this.maxHeight.replace("%", "")) /
                              100)
                          : (this.maxHeight *= 1)),
                      this.minWidth &&
                        (/%$/.test(this.minWidth)
                          ? (this.minWidth =
                              (this.width * this.minWidth.replace("%", "")) /
                              100)
                          : (this.minWidth *= 1)),
                      this.minHeight &&
                        (/%$/.test(this.minHeight)
                          ? (this.minHeight =
                              (this.height * this.minHeight.replace("%", "")) /
                              100)
                          : (this.minHeight *= 1)),
                      (this.alphaFade = 0.4),
                      (this.gravity = 1 * t.gravity || 0.08),
                      (this.particleGap = 1 * t.particleGap || 3),
                      (this.particleSize = 1 * t.particleSize || 1),
                      (this.layerCount = 1 * t.layerCount || 1),
                      (this.depth = 1 * t.depth || 1),
                      (this.rotationDuration = 1 * t.rotationDuration || 0),
                      (this.growDuration = 1 * t.growDuration || 200),
                      (this.waitDuration = 1 * t.waitDuration || 200),
                      (this.shrinkDuration = 1 * t.shrinkDuration || 200),
                      (this.shrinkDistance = 1 * t.shrinkDistance || 50),
                      (this.threeDimensional =
                        void 0 !== t.threeDimensional &&
                        "false" !== t.threeDimensional &&
                        !!t.threeDimensional),
                      (this.lifeCycle =
                        void 0 !== t.lifeCycle &&
                        "false" !== t.lifeCycle &&
                        !!t.lifeCycle),
                      (this.layerDistance =
                        t.layerDistance || this.particleGap),
                      (this.initPosition = t.initPosition || "random"),
                      (this.initDirection = t.initDirection || "random"),
                      (this.fadePosition = t.fadePosition || "none"),
                      (this.fadeDirection = t.fadeDirection || "none"),
                      (this.noise = isNaN(1 * t.noise) ? 10 : 1 * t.noise),
                      (this.disableInteraction = t.disableInteraction),
                      (this.mouseForce = 1 * t.mouseForce || 30),
                      (this.clickStrength = 1 * t.clickStrength || 0),
                      (this.color = t.color),
                      (this.colorArr = t.colorArr || this.colorArr);
                  },
                },
                {
                  key: "_initResponsive",
                  value: function (t) {
                    var e = this;
                    (this.responsiveWidth =
                      this.wrapperElement && t.responsiveWidth),
                      this.responsiveWidth &&
                        (this.on("stopped", function () {
                          (e.width = e.wrapperElement.clientWidth), e.start();
                        }),
                        this.wrapperElement.addEventListener(
                          "resize",
                          function () {
                            e.width !== e.wrapperElement.clientWidth &&
                              e.stop();
                          }
                        ),
                        (this.width = this.wrapperElement.clientWidth));
                  },
                },
                {
                  key: "_calculate",
                  value: function () {
                    for (
                      this.vertices = "webgl" === this.renderer && [],
                        s = 0,
                        r = 0;
                      r < this.particles.length;
                      r++
                    ) {
                      for (
                        o = this.origins[r],
                          h = this.particles[r],
                          _ = o.x - h.x + (Math.random() - 0.5) * this.noise,
                          m = o.y - h.y + (Math.random() - 0.5) * this.noise,
                          g =
                            o.z -
                            h.z +
                            ((Math.random() - 0.5) * this.noise) / 1e3,
                          v = Math.sqrt(_ * _ + m * m + g * g),
                          x = (y = 0.01 * v) * this.speed,
                          h.vx += x * (_ / v),
                          h.vy += x * (m / v),
                          h.vz += x * (g / v),
                          c = 0;
                        c < this.touches.length;
                        c++
                      )
                        (l = this.touches[c]),
                          (_ = h.x - l.x),
                          (m = h.y - l.y),
                          (g = h.z - l.z),
                          (v = Math.sqrt(_ * _ + m * m + g * g)),
                          (y = (this.mouseForce * l.force) / v),
                          (x = y * this.speed),
                          (h.vx += x * (_ / v)),
                          (h.vy += x * (m / v)),
                          (h.vz += x * (g / v));
                      (h.vx *= this.gravityFactor),
                        (h.vy *= this.gravityFactor),
                        (h.vz *= this.gravityFactor),
                        (h.x += h.vx),
                        (h.y += h.vy),
                        (h.z += h.vz),
                        0 > h.x ||
                        h.x >= this.width ||
                        0 > h.y ||
                        h.y >= this.height
                          ? ((h.isHidden = !0),
                            "stopping" === this.state && (h.isDead = !0))
                          : ("stopping" !== this.state || h.isDead || s++,
                            (h.isHidden = !1)),
                        this.vertices &&
                          ((p = h.x - (this.width >> 1)),
                          (f = h.y - (this.height >> 1)),
                          (d = h.z),
                          (A = o.vertexColors[3]),
                          this.vertices.push(
                            p,
                            f,
                            d,
                            o.vertexColors[0],
                            o.vertexColors[1],
                            o.vertexColors[2],
                            A
                          ));
                    }
                    "stopping" === this.state &&
                      0 === s &&
                      (this.state = "stopped");
                  },
                },
                {
                  key: "_defaultRenderer",
                  value: function () {
                    for (
                      this.depth = Math.max(
                        (this.layerDistance * this.layerCount) / 2,
                        this.mouseForce
                      ),
                        this.minZ = -this.depth,
                        this.maxZ = this.depth,
                        e = this.context.createImageData(
                          this.width,
                          this.height
                        ),
                        r = 0;
                      r < this.origins.length;
                      r++
                    )
                      (o = this.origins[r]),
                        (h = this.particles[r]).isDead ||
                          h.isHidden ||
                          ((p = ~~h.x),
                          (f = ~~h.y),
                          (A = o.color[3]),
                          this.alphaFade > 0 &&
                            this.layerCount > 1 &&
                            ((d =
                              Math.max(Math.min(h.z, this.maxZ), this.minZ) -
                              this.minZ),
                            (A =
                              A * (1 - this.alphaFade) +
                              A *
                                this.alphaFade *
                                (d / (this.maxZ - this.minZ))),
                            (A = Math.max(Math.min(~~A, 255), 0))),
                          (n = 4 * (p + f * this.width)),
                          (e.data[n + 0] = o.color[0]),
                          (e.data[n + 1] = o.color[1]),
                          (e.data[n + 2] = o.color[2]),
                          (e.data[n + 3] = A));
                    this.context.putImageData(e, 0, 0);
                  },
                },
                {
                  key: "_initParticles",
                  value: function () {
                    for (
                      this.particles = void 0, this.particles = [], r = 0;
                      r < this.origins.length;
                      r++
                    )
                      (o = this.origins[r]),
                        (h = {}),
                        this._initParticlePosition(o, h),
                        this._initParticleDirection(h),
                        this.particles.push(h);
                  },
                },
                {
                  key: "_initParticlePosition",
                  value: function (t, e) {
                    switch (((e.z = 0), this.initPosition)) {
                      case "random":
                        (e.x = Math.random() * this.width),
                          (e.y = Math.random() * this.height);
                        break;
                      case "top":
                        (e.x = Math.random() * this.width * 3 - this.width),
                          (e.y = -Math.random() * this.height);
                        break;
                      case "left":
                        (e.x = -Math.random() * this.width),
                          (e.y = Math.random() * this.height * 3 - this.height);
                        break;
                      case "bottom":
                        (e.x = Math.random() * this.width * 3 - this.width),
                          (e.y = this.height + Math.random() * this.height);
                        break;
                      case "right":
                        (e.x = this.width + Math.random() * this.width),
                          (e.y = Math.random() * this.height * 3 - this.height);
                        break;
                      case "misplaced":
                        (e.x =
                          t.x +
                          Math.random() * this.width * 0.3 -
                          0.1 * this.width),
                          (e.y =
                            t.y +
                            Math.random() * this.height * 0.3 -
                            0.1 * this.height);
                        break;
                      default:
                        (e.x = t.x), (e.y = t.y);
                    }
                  },
                },
                {
                  key: "_fade",
                  value: function () {
                    if (
                      ("explode" === this.fadePosition ||
                      "top" === this.fadePosition ||
                      "left" === this.fadePosition ||
                      "bottom" === this.fadePosition ||
                      "right" === this.fadePosition
                        ? (this.state = "stopping")
                        : (this.state = "stopped"),
                      this.origins)
                    )
                      for (r = 0; r < this.origins.length; r++)
                        this._fadeOriginPosition(this.origins[r]),
                          this._fadeOriginDirection(this.particles[r]);
                  },
                },
                {
                  key: "_fadeOriginPosition",
                  value: function (t) {
                    switch (this.fadePosition) {
                      case "random":
                        (t.x = Math.random() * this.width * 2 - this.width),
                          (t.y = Math.random() * this.height * 2 - this.height),
                          t.x > 0 && (t.x += this.width),
                          t.y > 0 && (t.y += this.height);
                        break;
                      case "top":
                        (t.x = Math.random() * this.width * 3 - this.width),
                          (t.y = -Math.random() * this.height);
                        break;
                      case "left":
                        (t.x = -Math.random() * this.width),
                          (t.y = Math.random() * this.height * 3 - this.height);
                        break;
                      case "bottom":
                        (t.x = Math.random() * this.width * 3 - this.width),
                          (t.y = this.height + Math.random() * this.height);
                        break;
                      case "right":
                        (t.x = this.width + Math.random() * this.width),
                          (t.y = Math.random() * this.height * 3 - this.height);
                    }
                  },
                },
                {
                  key: "_initParticleDirection",
                  value: function (t) {
                    switch (((t.vz = 0), this.initDirection)) {
                      case "random":
                        (w = Math.random() * Math.PI * 2),
                          (T = Math.random()),
                          (t.vx = this.width * T * Math.sin(w) * 0.1),
                          (t.vy = this.height * T * Math.cos(w) * 0.1);
                        break;
                      case "top":
                        (w = Math.random() * Math.PI - Math.PI / 2),
                          (T = Math.random()),
                          (t.vx = this.width * T * Math.sin(w) * 0.1),
                          (t.vy = this.height * T * Math.cos(w) * 0.1);
                        break;
                      case "left":
                        (w = Math.random() * Math.PI + Math.PI),
                          (T = Math.random()),
                          (t.vx = this.width * T * Math.sin(w) * 0.1),
                          (t.vy = this.height * T * Math.cos(w) * 0.1);
                        break;
                      case "bottom":
                        (w = Math.random() * Math.PI + Math.PI / 2),
                          (T = Math.random()),
                          (t.vx = this.width * T * Math.sin(w) * 0.1),
                          (t.vy = this.height * T * Math.cos(w) * 0.1);
                        break;
                      case "right":
                        (w = Math.random() * Math.PI),
                          (T = Math.random()),
                          (t.vx = this.width * T * Math.sin(w) * 0.1),
                          (t.vy = this.height * T * Math.cos(w) * 0.1);
                        break;
                      default:
                        (t.vx = 0), (t.vy = 0);
                    }
                  },
                },
                {
                  key: "_fadeOriginDirection",
                  value: function (t) {
                    switch (this.fadeDirection) {
                      case "random":
                        (w = Math.random() * Math.PI * 2),
                          (T = Math.random()),
                          (t.vx += this.width * T * Math.sin(w) * 0.1),
                          (t.vy += this.height * T * Math.cos(w) * 0.1);
                        break;
                      case "top":
                        (w = Math.random() * Math.PI - Math.PI / 2),
                          (T = Math.random()),
                          (t.vx += this.width * T * Math.sin(w) * 0.1),
                          (t.vy += this.height * T * Math.cos(w) * 0.1);
                        break;
                      case "left":
                        (w = Math.random() * Math.PI + Math.PI),
                          (T = Math.random()),
                          (t.vx += this.width * T * Math.sin(w) * 0.1),
                          (t.vy += this.height * T * Math.cos(w) * 0.1);
                        break;
                      case "bottom":
                        (w = Math.random() * Math.PI + Math.PI / 2),
                          (T = Math.random()),
                          (t.vx += this.width * T * Math.sin(w) * 0.1),
                          (t.vy += this.height * T * Math.cos(w) * 0.1);
                        break;
                      case "right":
                        (w = Math.random() * Math.PI),
                          (T = Math.random()),
                          (t.vx += this.width * T * Math.sin(w) * 0.1),
                          (t.vy += this.height * T * Math.cos(w) * 0.1);
                        break;
                      default:
                        (t.vx = 0), (t.vy = 0);
                    }
                  },
                },
                {
                  key: "_initOrigins",
                  value: function () {
                    (P = document.createElement("canvas")),
                      this.responsiveWidth &&
                        (this.width = this.wrapperElement.clientWidth),
                      (this.ratio =
                        Math.min(
                          this.width,
                          this.maxWidth || Number.POSITIVE_INFINITY
                        ) /
                        Math.min(
                          this.height,
                          this.maxHeight || Number.POSITIVE_INFINITY
                        )),
                      this.ratio < this.imageRatio
                        ? ((this.renderWidth = ~~Math.min(
                            this.width || Number.POSITIVE_INFINITY,
                            this.minWidth ||
                              this.imageWidth ||
                              Number.POSITIVE_INFINITY,
                            this.maxWidth || Number.POSITIVE_INFINITY
                          )),
                          (this.renderHeight = ~~(
                            this.renderWidth / this.imageRatio
                          )))
                        : ((this.renderHeight = ~~Math.min(
                            this.height || Number.POSITIVE_INFINITY,
                            this.minHeight ||
                              this.imageHeight ||
                              Number.POSITIVE_INFINITY,
                            this.maxHeight || Number.POSITIVE_INFINITY
                          )),
                          (this.renderWidth = ~~(
                            this.renderHeight * this.imageRatio
                          ))),
                      (this.offsetX = ~~((this.width - this.renderWidth) / 2)),
                      (this.offsetY = ~~(
                        (this.height - this.renderHeight) /
                        2
                      )),
                      (P.width = this.renderWidth),
                      (P.height = this.renderHeight),
                      (S = P.getContext("2d")).drawImage(
                        this.image,
                        0,
                        0,
                        this.renderWidth,
                        this.renderHeight
                      ),
                      (k = S.getImageData(
                        0,
                        0,
                        this.renderWidth,
                        this.renderHeight
                      ).data),
                      (this.origins = void 0),
                      (this.origins = []);
                    var t =
                      this.growDuration +
                      this.waitDuration +
                      this.shrinkDuration;
                    for (p = 0; p < this.renderWidth; p += this.particleGap)
                      for (f = 0; f < this.renderHeight; f += this.particleGap)
                        if (
                          ((r = 4 * (p + f * this.renderWidth)),
                          (A = k[r + 3]) > 0)
                        ) {
                          var e = Math.random();
                          if (((R = -Math.floor(e * t)), this.colorArr))
                            for (a = 0; a < this.layerCount; a++)
                              this.origins.push({
                                x: this.offsetX + p,
                                y: this.offsetY + f,
                                z: a * this.layerDistance + 50,
                                color: this.colorArr,
                                tick: R,
                                seed: e,
                                vertexColors: this.colorArr.map(function (t) {
                                  return t / 255;
                                }),
                              });
                          else
                            for (
                              C = k[r], M = k[r + 1], O = k[r + 2], a = 0;
                              a < this.layerCount;
                              a++
                            )
                              this.origins.push({
                                x: this.offsetX + p,
                                y: this.offsetY + f,
                                z: a * this.layerDistance + 50,
                                color: [C, M, O, A],
                                tick: R,
                                seed: e,
                                vertexColors: [
                                  C / 255,
                                  M / 255,
                                  O / 255,
                                  A / 255,
                                ],
                              });
                        }
                    (this.speed = Math.log(this.origins.length) / 10),
                      (this.gravityFactor = 1 - this.gravity * this.speed);
                  },
                },
                {
                  key: "_parseColor",
                  value: function (t) {
                    var e;
                    if ("string" == typeof t) {
                      var i = t.replace(" ", "");
                      if (
                        (e = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/.exec(
                          i
                        ))
                      )
                        e = [
                          parseInt(e[1], 16),
                          parseInt(e[2], 16),
                          parseInt(e[3], 16),
                        ];
                      else if (
                        (e = /^#([\da-fA-F])([\da-fA-F])([\da-fA-F])/.exec(i))
                      )
                        e = [
                          17 * parseInt(e[1], 16),
                          17 * parseInt(e[2], 16),
                          17 * parseInt(e[3], 16),
                        ];
                      else if (
                        (e = /^rgba\(([\d]+),([\d]+),([\d]+),([\d]+|[\d]*.[\d]+)\)/.exec(
                          i
                        ))
                      )
                        e = [+e[1], +e[2], +e[3], +e[4]];
                      else {
                        if (!(e = /^rgb\(([\d]+),([\d]+),([\d]+)\)/.exec(i)))
                          return;
                        e = [+e[1], +e[2], +e[3]];
                      }
                      return e;
                    }
                  },
                },
                {
                  key: "renderer",
                  get: function () {
                    return this._renderer;
                  },
                  set: function (t) {
                    (this._renderer = t),
                      (this._draw = this["_" + t + "Renderer"]);
                    try {
                      this["_" + t + "InitContext"]();
                    } catch (e) {
                      console.log(e),
                        "default" !== t && (this.renderer = "default");
                    }
                  },
                },
                {
                  key: "color",
                  set: function (t) {
                    (this.colorArr = this._parseColor(t)),
                      this.colorArr &&
                        (isNaN(this.colorArr[3]) && (this.colorArr[3] = 255),
                        0 < this.colorArr[3] &&
                          this.colorArr[3] <= 1 &&
                          (this.colorArr[3] *= 255));
                  },
                },
                {
                  key: "_mouseHandler",
                  get: function () {
                    var t = this;
                    return function (e) {
                      t.touches = [
                        {
                          x: e.offsetX,
                          y: e.offsetY,
                          z: 49 + (t.layerCount - 1) * t.layerDistance,
                          force: 1,
                        },
                      ];
                    };
                  },
                },
                {
                  key: "_clickHandler",
                  get: function () {
                    var t = this;
                    return function (e) {
                      var i = t.clickStrength;
                      t.origins.map(function (t) {
                        return (t.z -= i);
                      }),
                        setTimeout(function () {
                          t.origins.map(function (t) {
                            return (t.z += i);
                          });
                        }, 100);
                    };
                  },
                },
                {
                  key: "_touchHandler",
                  get: function () {
                    var t = this;
                    return function (e) {
                      for (
                        t.touches = [],
                          u = t.canvas.getBoundingClientRect(),
                          c = 0;
                        c < e.changedTouches.length;
                        c++
                      )
                        (l = e.changedTouches[c]).target === t.canvas &&
                          (t.touches.push({
                            x: l.pageX - u.left,
                            y: l.pageY - u.top,
                            z: 49 + (t.layerCount - 1) * t.layerDistance,
                            force: l.force || 1,
                          }),
                          e.preventDefault());
                    };
                  },
                },
                {
                  key: "_clearTouches",
                  get: function () {
                    var t = this;
                    return function (e) {
                      t.touches = [];
                    };
                  },
                },
              ]) && i(I.prototype, E),
              z && i(I, z),
              t
            );
          })());
      t.Particle = I;
      for (
        var E = document.getElementsByClassName("next-particle"), z = 0;
        z < E.length;
        z++
      ) {
        var F = E[z];
        F.Particle = new I(F);
      }
    })(window);
  },
  function (t, e, i) {
    "use strict";
    i.r(e),
      function (t) {
        var e,
          s = i(4),
          r = i(3),
          n = i.n(r),
          a = (i(27), i(0));
        i(28);
        t(window).on("resize orientationchange", function () {
          Math.max(
            document.documentElement.clientWidth,
            window.innerWidth || 0
          ) > 767 &&
            (t(".card-top__left").length &&
              new s.a(".card-top__left", {
                containerSelector: ".card-top",
                innerWrapperSelector: ".sidebar__inner",
                topSpacing: 100,
                bottomSpacing: 0,
                resizeSensor: !0,
                stickyClass: "is-affixed",
              }),
            t(".catalog-main__left").length &&
              new s.a(".catalog-main__left", {
                containerSelector: ".catalog-main-row-first",
                innerWrapperSelector: ".sidebar__inner",
                topSpacing: 170,
                bottomSpacing: 1,
                resizeSensor: !0,
                stickyClass: "is-affixed",
              }),
            t(".card-tabs__left").length &&
              (e = new s.a(".card-tabs__left", {
                containerSelector: ".card-tabs",
                innerWrapperSelector: ".sidebar__inner",
                topSpacing: 100,
                bottomSpacing: 0,
                resizeSensor: !0,
                stickyClass: "is-affixed",
              })),
            t(".socialNews").length &&
              new s.a(".socialNews", {
                containerSelector: ".newsOne-content",
                innerWrapperSelector: ".mainNews-index",
                topSpacing: 100,
                bottomSpacing: 0,
                resizeSensor: !0,
                stickyClass: "is-affixed",
              }),
            t(".sertificates-menu").length &&
              new s.a(".sertificates-menu", {
                containerSelector: ".sertificates-content",
                innerWrapperSelector: ".sertificates-left",
                topSpacing: 100,
                bottomSpacing: 0,
                resizeSensor: !0,
                stickyClass: "is-affixed",
              }),
            t(".sticky-elem").length &&
              new s.a(".sticky-elem", {
                containerSelector: ".sticky-content",
                innerWrapperSelector: ".sticky-left",
                topSpacing: 100,
                bottomSpacing: 0,
                resizeSensor: !0,
                stickyClass: "is-affixed",
              }));
        }),
          Math.max(
            document.documentElement.clientWidth,
            window.innerWidth || 0
          ) > 767 &&
            (t(".card-top__left").length &&
              new s.a(".card-top__left", {
                containerSelector: ".card-top",
                innerWrapperSelector: ".sidebar__inner",
                topSpacing: 100,
                bottomSpacing: 0,
                resizeSensor: !0,
                stickyClass: "is-affixed",
              }),
            t(".catalog-main__left").length &&
              new s.a(".catalog-main__left", {
                containerSelector: ".catalog-main-row-first",
                innerWrapperSelector: ".sidebar__inner",
                topSpacing: 170,
                bottomSpacing: 1,
                resizeSensor: !0,
                stickyClass: "is-affixed",
              }),
            t(".card-tabs__left").length &&
              (e = new s.a(".card-tabs__left", {
                containerSelector: ".card-tabs",
                innerWrapperSelector: ".sidebar__inner",
                topSpacing: 100,
                bottomSpacing: 0,
                resizeSensor: !0,
                stickyClass: "is-affixed",
              })),
            t(".socialNews").length &&
              new s.a(".socialNews", {
                containerSelector: ".newsOne-content",
                innerWrapperSelector: ".mainNews-index",
                topSpacing: 100,
                bottomSpacing: 0,
                resizeSensor: !0,
                stickyClass: "is-affixed",
              }),
            t(".sertificates-menu").length &&
              new s.a(".sertificates-menu", {
                containerSelector: ".sertificates-content",
                innerWrapperSelector: ".sertificates-left",
                topSpacing: 100,
                bottomSpacing: 0,
                resizeSensor: !0,
                stickyClass: "is-affixed",
              }),
            t(".sticky-elem").length &&
              new s.a(".sticky-elem", {
                containerSelector: ".sticky-content",
                innerWrapperSelector: ".sticky-left",
                topSpacing: 120,
                bottomSpacing: 0,
                resizeSensor: !0,
                stickyClass: "is-affixed",
              })),
          t(document).mousemove(function (e) {
            Math.max(
              document.documentElement.clientWidth,
              window.innerWidth || 0
            ) > 1200 &&
              t(".publications-item-js").each(function (i, s) {
                var r = t(s),
                  n = e.pageX - r.offset().left,
                  a = e.pageY - r.offset().top;
                r.find(".publications-link").css({ left: n - 80, top: a - 80 });
              });
          }),
          t(".tabs-list").on("click", ".tab", function (i) {
            i.preventDefault();
            var s = t(this).attr("href");
            t(this)
              .closest(".tabs")
              .find(".tabs-list .tab")
              .removeClass("active"),
              t(this)
                .closest(".tabs")
                .find(".tabs-content")
                .removeClass("show"),
              t(this).addClass("active"),
              t(s).addClass("show"),
              e && e.updateSticky(),
              n.a.init({ offset: -80 }),
              t(".swiper-carousel").length && a.a.update(),
              t(".swiper-carousel1").length && a.b.update(),
              t(".trademark-carousel--js").length && a.h.update(),
              t(".trademark-carousel1--js").length && a.i.update(),
              t(".trademark-carousel2--js").length && a.j.update(),
              t(".trademark-carousel3--js").length && a.k.update(),
              t(".trademark-carousel4--js").length && a.l.update(),
              t(".trademark-carousel5--js").length && a.m.update(),
              t(".trademark-carousel6--js").length && a.n.update(),
              t(".trademark-carousel7--js").length && a.o.update();
          });
        var o = t(".steps-form");
        function h(e, i, s) {
          var r = e.closest("section").find(".required"),
            n = e.closest("section").find(".isNumber").find("input"),
            a = t("input[type=checkbox][name]:checked").length;
          r.each(function (e, i) {
            var s = t(i);
            "checkbox" === s.prop("type")
              ? a
                ? s.parent().removeClass("error")
                : s.prop("checked")
                ? s.parent().removeClass("error")
                : s.parent().addClass("error")
              : s.val()
              ? s.parent().removeClass("error")
              : (s.parent().addClass("error"),
                s
                  .parent()
                  .find(".input-error")
                  .text("Пожалуйста, заполните поле")),
              n.each(function (e, i) {
                var s = t(i);
                s.val() &&
                  (isNaN(s.val())
                    ? (s.parent().addClass("error"),
                      s.parent().next().text("Укажите числовое значение"))
                    : s.parent().removeClass("error"));
              });
          });
          var h = e.closest("section").find("div.error");
          0 === h.length &&
            (o.children("div").steps(i, {}),
            s && t(".finishContent").addClass("active"),
            t("html, body").animate(
              { scrollTop: t(".steps-form").offset().top - 100 },
              500
            )),
            h.length &&
              (console.log(t(".steps-form div.error").offset().top),
              t("html, body").animate(
                { scrollTop: t(".steps-form div.error").offset().top - 100 },
                500
              ));
        }
        o.children("div").steps({
          headerTag: "h3",
          bodyTag: "section",
          transitionEffect: "slideLeft",
          enablePagination: !1,
          enableAllSteps: !0,
          titleTemplate: "#title#",
          onStepChanged: function () {
            e && e.updateSticky(), n.a.refresh({ offset: -80 });
          },
        }),
          t(".stepper-next button").click(function () {
            return h(t(this), "next", !1), !1;
          }),
          t(".stepper-submit button").click(function () {
            return h(t(this), "finish", !0), !1;
          }),
          t("[name=phone]").inputmask({
            mask: "+7 (999) 999-9999",
            showMaskOnHover: !1,
          });
      }.call(this, i(1));
  },
]);
