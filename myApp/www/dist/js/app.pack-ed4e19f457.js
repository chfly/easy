!function () {
  "use strict";
  window.Framework7 = function (e) {
    function a(e) {
      var a = e.replace(/^./, function (e) {
        return e.toUpperCase()
      });
      r["onPage" + a] = function (a, t) {
        return r.onPage(e, a, t)
      }
    }

    function t() {
      var e, a = i(this), t = a[0].scrollTop, n = a[0].scrollHeight, r = a[0].offsetHeight, o = a[0].getAttribute("data-distance"), s = a.find(".virtual-list"), l = a.hasClass("infinite-scroll-top");
      if (o || (o = 50), "string" == typeof o && o.indexOf("%") >= 0 && (o = parseInt(o, 10) / 100 * r), o > r && (o = r), l)o > t && a.trigger("infinite"); else if (t + r >= n - o) {
        if (s.length > 0 && (e = s[0].f7VirtualList, e && !e.reachEnd))return;
        a.trigger("infinite")
      }
    }

    function n() {
      r.device.ipad && (document.body.scrollLeft = 0, setTimeout(function () {
        document.body.scrollLeft = 0
      }, 0))
    }

    var r = this;
    r.version = "1.0.7", r.params = {
      cache: !0,
      cacheIgnore: [],
      cacheIgnoreGetParameters: !1,
      cacheDuration: 6e5,
      preloadPreviousPage: !0,
      uniqueHistory: !1,
      uniqueHistoryIgnoreGetParameters: !1,
      dynamicPageUrl: "content-{{index}}",
      allowDuplicateUrls: !1,
      router: !0,
      pushState: !1,
      pushStateRoot: void 0,
      pushStateNoAnimation: !1,
      pushStateSeparator: "#!/",
      pushStatePreventOnLoad: !0,
      fastClicks: !0,
      fastClicksDistanceThreshold: 0,
      fastClicksDelayBetweenClicks: 50,
      tapHold: !1,
      tapHoldDelay: 750,
      tapHoldPreventClicks: !0,
      activeState: !0,
      activeStateElements: "a, button, label, span",
      animateNavBackIcon: !1,
      swipeBackPage: !0,
      swipeBackPageThreshold: 0,
      swipeBackPageActiveArea: 30,
      swipeBackPageAnimateShadow: !0,
      swipeBackPageAnimateOpacity: !0,
      ajaxLinks: void 0,
      externalLinks: ".external",
      sortable: !0,
      hideNavbarOnPageScroll: !1,
      hideToolbarOnPageScroll: !1,
      hideTabbarOnPageScroll: !1,
      showBarsOnPageScrollEnd: !0,
      showBarsOnPageScrollTop: !0,
      swipeout: !0,
      swipeoutActionsNoFold: !1,
      swipeoutNoFollow: !1,
      smartSelectBackTemplate: '<div class="left sliding"><a href="#" class="back link"><i class="icon icon-back"></i><span>{{backText}}</span></a></div>',
      smartSelectBackText: "Back",
      smartSelectInPopup: !1,
      smartSelectPopupCloseTemplate: '<div class="left"><a href="#" class="link close-popup"><i class="icon icon-back"></i><span>{{closeText}}</span></a></div>',
      smartSelectPopupCloseText: "Close",
      smartSelectSearchbar: !1,
      smartSelectBackOnSelect: !1,
      scrollTopOnNavbarClick: !1,
      scrollTopOnStatusbarClick: !1,
      swipePanel: !1,
      swipePanelActiveArea: 0,
      swipePanelCloseOpposite: !0,
      swipePanelOnlyClose: !1,
      swipePanelNoFollow: !1,
      swipePanelThreshold: 0,
      panelsCloseByOutside: !0,
      modalButtonOk: "OK",
      modalButtonCancel: "Cancel",
      modalUsernamePlaceholder: "Username",
      modalPasswordPlaceholder: "Password",
      modalTitle: "Framework7",
      modalCloseByOutside: !1,
      actionsCloseByOutside: !0,
      popupCloseByOutside: !0,
      modalPreloaderTitle: "Loading... ",
      modalStack: !0,
      imagesLazyLoadThreshold: 0,
      imagesLazyLoadSequential: !0,
      viewClass: "view",
      viewMainClass: "view-main",
      viewsClass: "views",
      notificationCloseOnClick: !1,
      notificationCloseIcon: !0,
      animatePages: !0,
      templates: {},
      template7Data: {},
      template7Pages: !1,
      precompileTemplates: !1,
      init: !0
    };
    for (var o in e)r.params[o] = e[o];
    var i = Dom7, s = Template7;
    r._compiledTemplates = {}, r.touchEvents = {
      start: r.support.touch ? "touchstart" : "mousedown",
      move: r.support.touch ? "touchmove" : "mousemove",
      end: r.support.touch ? "touchend" : "mouseup"
    }, r.ls = window.localStorage, r.rtl = "rtl" === i("body").css("direction"), r.rtl && i("html").attr("dir", "rtl"), "undefined" != typeof r.params.statusbarOverlay && (r.params.statusbarOverlay ? i("html").addClass("with-statusbar-overlay") : i("html").removeClass("with-statusbar-overlay")), r.views = [];
    var l = function (e, a) {
      var t, n = {
        dynamicNavbar: !1,
        domCache: !1,
        linksView: void 0,
        reloadPages: !1,
        uniqueHistory: r.params.uniqueHistory,
        uniqueHistoryIgnoreGetParameters: r.params.uniqueHistoryIgnoreGetParameters,
        allowDuplicateUrls: r.params.allowDuplicateUrls,
        swipeBackPage: r.params.swipeBackPage,
        swipeBackPageAnimateShadow: r.params.swipeBackPageAnimateShadow,
        swipeBackPageAnimateOpacity: r.params.swipeBackPageAnimateOpacity,
        swipeBackPageActiveArea: r.params.swipeBackPageActiveArea,
        swipeBackPageThreshold: r.params.swipeBackPageThreshold,
        animatePages: r.params.animatePages,
        preloadPreviousPage: r.params.preloadPreviousPage
      };
      a = a || {};
      for (var o in n)"undefined" == typeof a[o] && (a[o] = n[o]);
      var s = this;
      s.params = a, s.selector = e;
      var l = i(e);
      if (s.container = l[0], "string" != typeof e && (e = (l.attr("id") ? "#" + l.attr("id") : "") + (l.attr("class") ? "." + l.attr("class").replace(/ /g, ".").replace(".active", "") : ""), s.selector = e), s.main = l.hasClass(r.params.viewMainClass), s.contentCache = {}, s.pagesCache = {}, l[0].f7View = s, s.pagesContainer = l.find(".pages")[0], s.initialPages = [], s.initialNavbars = [], s.params.domCache) {
        var p = l.find(".page");
        for (t = 0; t < p.length; t++)s.initialPages.push(p[t]);
        if (s.params.dynamicNavbar) {
          var c = l.find(".navbar-inner");
          for (t = 0; t < c.length; t++)s.initialNavbars.push(c[t])
        }
      }
      s.allowPageChange = !0;
      var d = document.location.href;
      s.history = [];
      var u = d, f = r.params.pushStateSeparator, m = r.params.pushStateRoot;
      r.params.pushState && s.main && (m ? u = m : u.indexOf(f) >= 0 && u.indexOf(f + "#") < 0 && (u = u.split(f)[0]));
      var h, g;
      s.activePage || (h = i(s.pagesContainer).find(".page-on-center"), 0 === h.length && (h = i(s.pagesContainer).find(".page:not(.cached)"), h = h.eq(h.length - 1)), h.length > 0 && (g = h[0].f7PageData)), s.params.domCache && h ? (s.url = l.attr("data-url") || s.params.url || "#" + h.attr("data-page"), s.pagesCache[s.url] = h.attr("data-page")) : s.url = l.attr("data-url") || s.params.url || u, g && (g.view = s, g.url = s.url, s.activePage = g, h[0].f7PageData = g), s.url && s.history.push(s.url);
      var v, C, Y, S, T, Z, w, L, b, y, X, J = !1, P = !1, M = {}, D = [], H = [], x = !0, B = [], Q = [];
      if (s.handleTouchStart = function (e) {
          x && s.params.swipeBackPage && !J && !r.swipeoutOpenedEl && s.allowPageChange && (P = !1, J = !0, v = void 0, M.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, M.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, S = (new Date).getTime(), b = s.params.dynamicNavbar && l.find(".navbar-inner").length > 1)
        }, s.handleTouchMove = function (e) {
          if (J) {
            var a = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, t = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY;
            if ("undefined" == typeof v && (v = !!(v || Math.abs(t - M.y) > Math.abs(a - M.x))), v || e.f7PreventSwipeBack || r.preventSwipeBack)return void(J = !1);
            if (!P) {
              var n = !1;
              C = l.width();
              var o = i(e.target), p = o.hasClass("swipeout") ? o : o.parents(".swipeout");
              p.length > 0 && (!r.rtl && p.find(".swipeout-actions-left").length > 0 && (n = !0), r.rtl && p.find(".swipeout-actions-right").length > 0 && (n = !0)), D = o.is(".page") ? o : o.parents(".page"), D.hasClass("no-swipeback") && (n = !0), H = l.find(".page-on-left:not(.cached)");
              var c = M.x - l.offset().left > s.params.swipeBackPageActiveArea;
              if (c = r.rtl ? M.x < l.offset().left - l[0].scrollLeft + C - s.params.swipeBackPageActiveArea : M.x - l.offset().left > s.params.swipeBackPageActiveArea, c && (n = !0), (0 === H.length || 0 === D.length) && (n = !0), n)return void(J = !1);
              s.params.swipeBackPageAnimateShadow && !r.device.android && (y = D.find(".swipeback-page-shadow"), 0 === y.length && (y = i('<div class="swipeback-page-shadow"></div>'), D.append(y))), b && (B = l.find(".navbar-on-center:not(.cached)"), Q = l.find(".navbar-on-left:not(.cached)"), T = B.find(".left, .center, .right, .subnavbar, .fading"), Z = Q.find(".left, .center, .right, .subnavbar, .fading"), r.params.animateNavBackIcon && (w = B.find(".left.sliding .back .icon"), L = Q.find(".left.sliding .back .icon"))), i(".picker-modal.modal-in").length > 0 && r.closeModal(i(".picker-modal.modal-in"))
            }
            e.f7PreventPanelSwipe = !0, P = !0, e.preventDefault();
            var d = r.rtl ? -1 : 1;
            Y = (a - M.x - s.params.swipeBackPageThreshold) * d, 0 > Y && (Y = 0);
            var u = Y / C, f = {
              percentage: u,
              activePage: D[0],
              previousPage: H[0],
              activeNavbar: B[0],
              previousNavbar: Q[0]
            };
            s.params.onSwipeBackMove && s.params.onSwipeBackMove(f), l.trigger("swipeBackMove", f);
            var m = Y * d, h = (Y / 5 - C / 5) * d;
            if (1 === r.device.pixelRatio && (m = Math.round(m), h = Math.round(h)), D.transform("translate3d(" + m + "px,0,0)"), s.params.swipeBackPageAnimateShadow && !r.device.android && (y[0].style.opacity = 1 - 1 * u), H.transform("translate3d(" + h + "px,0,0)"), s.params.swipeBackPageAnimateOpacity && (H[0].style.opacity = .9 + .1 * u), b) {
              var g;
              for (g = 0; g < T.length; g++)if (X = i(T[g]), X.is(".subnavbar.sliding") || (X[0].style.opacity = 1 - 1.3 * u), X[0].className.indexOf("sliding") >= 0) {
                var S = u * X[0].f7NavbarRightOffset;
                1 === r.device.pixelRatio && (S = Math.round(S)), X.transform("translate3d(" + S + "px,0,0)"), r.params.animateNavBackIcon && X[0].className.indexOf("left") >= 0 && w.length > 0 && w.transform("translate3d(" + -S + "px,0,0)")
              }
              for (g = 0; g < Z.length; g++)if (X = i(Z[g]), X.is(".subnavbar.sliding") || (X[0].style.opacity = 1.3 * u - .3), X[0].className.indexOf("sliding") >= 0) {
                var x = X[0].f7NavbarLeftOffset * (1 - u);
                1 === r.device.pixelRatio && (x = Math.round(x)), X.transform("translate3d(" + x + "px,0,0)"), r.params.animateNavBackIcon && X[0].className.indexOf("left") >= 0 && L.length > 0 && L.transform("translate3d(" + -x + "px,0,0)")
              }
            }
          }
        }, s.handleTouchEnd = function (e) {
          if (!J || !P)return J = !1, void(P = !1);
          if (J = !1, P = !1, 0 === Y)return i([D[0], H[0]]).transform("").css({
            opacity: "",
            boxShadow: ""
          }), void(b && (T.transform("").css({opacity: ""}), Z.transform("").css({opacity: ""}), w && w.length > 0 && w.transform(""), L && w.length > 0 && L.transform("")));
          var a = (new Date).getTime() - S, t = !1;
          (300 > a && Y > 10 || a >= 300 && Y > C / 2) && (D.removeClass("page-on-center").addClass("page-on-right"), H.removeClass("page-on-left").addClass("page-on-center"), b && (B.removeClass("navbar-on-center").addClass("navbar-on-right"), Q.removeClass("navbar-on-left").addClass("navbar-on-center")), t = !0), i([D[0], H[0]]).transform("").css({
            opacity: "",
            boxShadow: ""
          }).addClass("page-transitioning"), b && (T.css({opacity: ""}).each(function () {
            var e = t ? this.f7NavbarRightOffset : 0, a = i(this);
            a.transform("translate3d(" + e + "px,0,0)"), r.params.animateNavBackIcon && a.hasClass("left") && w.length > 0 && w.addClass("page-transitioning").transform("translate3d(" + -e + "px,0,0)")
          }).addClass("page-transitioning"), Z.transform("").css({opacity: ""}).each(function () {
            var e = t ? 0 : this.f7NavbarLeftOffset, a = i(this);
            a.transform("translate3d(" + e + "px,0,0)"), r.params.animateNavBackIcon && a.hasClass("left") && L.length > 0 && L.addClass("page-transitioning").transform("translate3d(" + -e + "px,0,0)")
          }).addClass("page-transitioning")), x = !1, s.allowPageChange = !1;
          var n = {activePage: D[0], previousPage: H[0], activeNavbar: B[0], previousNavbar: Q[0]};
          if (t) {
            var o = s.history[s.history.length - 2];
            s.url = o, r.pageBackCallback("before", s, {
              pageContainer: D[0],
              url: o,
              position: "center",
              newPage: H,
              oldPage: D,
              swipeBack: !0
            }), r.pageAnimCallback("before", s, {
              pageContainer: H[0],
              url: o,
              position: "left",
              newPage: H,
              oldPage: D,
              swipeBack: !0
            }), s.params.onSwipeBackBeforeChange && s.params.onSwipeBackBeforeChange(n), l.trigger("swipeBackBeforeChange", n)
          } else s.params.onSwipeBackBeforeReset && s.params.onSwipeBackBeforeReset(n), l.trigger("swipeBackBeforeReset", n);
          D.transitionEnd(function () {
            i([D[0], H[0]]).removeClass("page-transitioning"), b && (T.removeClass("page-transitioning").css({opacity: ""}), Z.removeClass("page-transitioning").css({opacity: ""}), w && w.length > 0 && w.removeClass("page-transitioning"), L && L.length > 0 && L.removeClass("page-transitioning")), x = !0, s.allowPageChange = !0, t ? (r.params.pushState && s.main && history.back(), r.pageBackCallback("after", s, {
              pageContainer: D[0],
              url: o,
              position: "center",
              newPage: H,
              oldPage: D,
              swipeBack: !0
            }), r.pageAnimCallback("after", s, {
              pageContainer: H[0],
              url: o,
              position: "left",
              newPage: H,
              oldPage: D,
              swipeBack: !0
            }), r.router.afterBack(s, D, H), s.params.onSwipeBackAfterChange && s.params.onSwipeBackAfterChange(n), l.trigger("swipeBackAfterChange", n)) : (s.params.onSwipeBackAfterReset && s.params.onSwipeBackAfterReset(n), l.trigger("swipeBackAfterReset", n)), y && y.length > 0 && y.remove()
          })
        }, s.attachEvents = function (e) {
          var a = e ? "off" : "on";
          l[a](r.touchEvents.start, s.handleTouchStart), l[a](r.touchEvents.move, s.handleTouchMove), l[a](r.touchEvents.end, s.handleTouchEnd)
        }, s.detachEvents = function () {
          s.attachEvents(!0)
        }, s.params.swipeBackPage && !r.params.material && s.attachEvents(), r.views.push(s), s.main && (r.mainView = s), s.router = {
          load: function (e) {
            return r.router.load(s, e)
          }, back: function (e, a) {
            return "function" == typeof e && (a = e, e = {}), r.router.back(s, e, a)
          }, loadPage: function (e) {
            if (e = e || {}, "string" == typeof e) {
              var a = e;
              e = {}, a && 0 === a.indexOf("#") && s.params.domCache ? e.pageName = a.split("#")[1] : e.url = a
            }
            return r.router.load(s, e)
          }, loadContent: function (e) {
            return r.router.load(s, {content: e})
          }, reloadPage: function (e) {
            return r.router.load(s, {url: e, reload: !0})
          }, reloadContent: function (e) {
            return r.router.load(s, {content: e, reload: !0})
          }, reloadPreviousPage: function (e) {
            return r.router.load(s, {url: e, reloadPrevious: !0, reload: !0})
          }, reloadPreviousContent: function (e) {
            return r.router.load(s, {content: e, reloadPrevious: !0, reload: !0})
          }, refreshPage: function () {
            var e = {url: s.url, reload: !0, ignoreCache: !0};
            return e.url && 0 === e.url.indexOf("#") && (s.params.domCache && s.pagesCache[e.url] ? (e.pageName = s.pagesCache[e.url], e.url = void 0, delete e.url) : s.contentCache[e.url] && (e.content = s.contentCache[e.url], e.url = void 0, delete e.url)), r.router.load(s, e)
          }, refreshPreviousPage: function () {
            var e = {url: s.history[s.history.length - 2], reload: !0, reloadPrevious: !0, ignoreCache: !0};
            return e.url && 0 === e.url.indexOf("#") && s.params.domCache && s.pagesCache[e.url] && (e.pageName = s.pagesCache[e.url], e.url = void 0, delete e.url), r.router.load(s, e)
          }
        }, s.loadPage = s.router.loadPage, s.loadContent = s.router.loadContent, s.reloadPage = s.router.reloadPage, s.reloadContent = s.router.reloadContent, s.reloadPreviousPage = s.router.reloadPreviousPage, s.reloadPreviousContent = s.router.reloadPreviousContent, s.refreshPage = s.router.refreshPage, s.refreshPreviousPage = s.router.refreshPreviousPage, s.back = s.router.back, s.hideNavbar = function () {
          return r.hideNavbar(l.children(".navbar"))
        }, s.showNavbar = function () {
          return r.showNavbar(l.children(".navbar"))
        }, s.hideToolbar = function () {
          return r.hideToolbar(l.children(".toolbar"))
        }, s.showToolbar = function () {
          return r.showToolbar(l.children(".toolbar"))
        }, r.params.pushState && s.main) {
        var k;
        m ? k = d.split(r.params.pushStateRoot + f)[1] : d.indexOf(f) >= 0 && d.indexOf(f + "#") < 0 && (k = d.split(f)[1]);
        var G = r.params.pushStateNoAnimation ? !1 : void 0;
        if (k)r.router.load(s, {url: k, animatePages: G, pushState: !1}); else if (d.indexOf(f + "#") >= 0) {
          var N = history.state;
          N.pageName && "viewIndex"in N && r.router.load(s, {pageName: N.pageName, pushState: !1})
        }
      }
      return s.destroy = function () {
        s.detachEvents(), s = void 0
      }, r.pluginHook("addView", s), s
    };
    r.addView = function (e, a) {
      return new l(e, a)
    }, r.getCurrentView = function (e) {
      var a = i(".popover.modal-in .view"), t = i(".popup.modal-in .view"), n = i(".panel.active .view"), r = i(".views"), o = r.children(".view");
      if (o.length > 1 && o.hasClass("tab") && (o = r.children(".view.active")), a.length > 0 && a[0].f7View)return a[0].f7View;
      if (t.length > 0 && t[0].f7View)return t[0].f7View;
      if (n.length > 0 && n[0].f7View)return n[0].f7View;
      if (o.length > 0) {
        if (1 === o.length && o[0].f7View)return o[0].f7View;
        if (o.length > 1) {
          for (var s = [], l = 0; l < o.length; l++)o[l].f7View && s.push(o[l].f7View);
          return s.length > 0 && "undefined" != typeof e ? s[e] : s.length > 1 ? s : 1 === s.length ? s[0] : void 0
        }
      }
      return void 0
    }, r.navbarInitCallback = function (e, a, t, n) {
      if (!t && n && (t = i(n).parent(".navbar")[0]), !n.f7NavbarInitialized || !e || e.params.domCache) {
        var o = {container: t, innerContainer: n}, s = a && a.f7PageData, l = {page: s, navbar: o};
        if (n.f7NavbarInitialized && (e && e.params.domCache || !e && i(t).parents(".popup, .popover, .login-screen, .modal, .actions-modal, .picker-modal").length > 0))return r.reinitNavbar(t, n), r.pluginHook("navbarReinit", l), void i(n).trigger("navbarReinit", l);
        n.f7NavbarInitialized = !0, r.pluginHook("navbarBeforeInit", o, s), i(n).trigger("navbarBeforeInit", l), r.initNavbar(t, n), r.pluginHook("navbarInit", o, s), i(n).trigger("navbarInit", l)
      }
    }, r.navbarRemoveCallback = function (e, a, t, n) {
      !t && n && (t = i(n).parent(".navbar")[0]);
      var o = {container: t, innerContainer: n}, s = a.f7PageData, l = {page: s, navbar: o};
      r.pluginHook("navbarBeforeRemove", o, s), i(n).trigger("navbarBeforeRemove", l)
    }, r.initNavbar = function (e, a) {
      r.initSearchbar && r.initSearchbar(a)
    }, r.reinitNavbar = function (e, a) {
    }, r.initNavbarWithCallback = function (e) {
      e = i(e);
      var a, t = e.parents("." + r.params.viewClass);
      0 !== t.length && (0 !== e.parents(".navbar-through").length || 0 !== t.find(".navbar-through").length) && (a = t[0].f7View || void 0, e.find(".navbar-inner").each(function () {
        var n, o = this;
        if (i(o).attr("data-page") && (n = t.find('.page[data-page="' + i(o).attr("data-page") + '"]')[0]), !n) {
          var s = t.find(".page");
          1 === s.length ? n = s[0] : t.find(".page").each(function () {
            this.f7PageData && this.f7PageData.navbarInnerContainer === o && (n = this)
          })
        }
        r.navbarInitCallback(a, n, e[0], o)
      }))
    }, r.sizeNavbars = function (e) {
      if (!r.params.material) {
        var a = e ? i(e).find(".navbar .navbar-inner:not(.cached)") : i(".navbar .navbar-inner:not(.cached)");
        a.each(function () {
          var e = i(this);
          if (!e.hasClass("cached")) {
            var a, t, n = e.find(r.rtl ? ".right" : ".left"), o = e.find(r.rtl ? ".left" : ".right"), s = e.find(".center"), l = e.find(".subnavbar"), p = 0 === n.length, c = 0 === o.length, d = p ? 0 : n.outerWidth(!0), u = c ? 0 : o.outerWidth(!0), f = s.outerWidth(!0), m = e.styles(), h = e[0].offsetWidth - parseInt(m.paddingLeft, 10) - parseInt(m.paddingRight, 10), g = e.hasClass("navbar-on-left");
            c && (a = h - f), p && (a = 0), p || c || (a = (h - u - f + d) / 2);
            var v = (h - f) / 2;
            h - d - u > f ? (d > v && (v = d), v + f > h - u && (v = h - u - f), t = v - a) : t = 0;
            var C = r.rtl ? -1 : 1;
            s.hasClass("sliding") && (s[0].f7NavbarLeftOffset = -(a + t) * C, s[0].f7NavbarRightOffset = (h - a - t - f) * C, g && s.transform("translate3d(" + s[0].f7NavbarLeftOffset + "px, 0, 0)")), !p && n.hasClass("sliding") && (r.rtl ? (n[0].f7NavbarLeftOffset = -(h - n[0].offsetWidth) / 2 * C, n[0].f7NavbarRightOffset = d * C) : (n[0].f7NavbarLeftOffset = -d, n[0].f7NavbarRightOffset = (h - n[0].offsetWidth) / 2), g && n.transform("translate3d(" + n[0].f7NavbarLeftOffset + "px, 0, 0)")), !c && o.hasClass("sliding") && (r.rtl ? (o[0].f7NavbarLeftOffset = -u * C, o[0].f7NavbarRightOffset = (h - o[0].offsetWidth) / 2 * C) : (o[0].f7NavbarLeftOffset = -(h - o[0].offsetWidth) / 2, o[0].f7NavbarRightOffset = u), g && o.transform("translate3d(" + o[0].f7NavbarLeftOffset + "px, 0, 0)")), l.length && l.hasClass("sliding") && (l[0].f7NavbarLeftOffset = r.rtl ? l[0].offsetWidth : -l[0].offsetWidth, l[0].f7NavbarRightOffset = -l[0].f7NavbarLeftOffset);
            var Y = t;
            r.rtl && p && c && s.length > 0 && (Y = -Y), s.css({left: Y + "px"})
          }
        })
      }
    }, r.hideNavbar = function (e) {
      return i(e).addClass("navbar-hidden"), !0
    }, r.showNavbar = function (e) {
      var a = i(e);
      return a.addClass("navbar-hiding").removeClass("navbar-hidden").transitionEnd(function () {
        a.removeClass("navbar-hiding")
      }), !0
    }, r.hideToolbar = function (e) {
      return i(e).addClass("toolbar-hidden"), !0
    }, r.showToolbar = function (e) {
      var a = i(e);
      a.addClass("toolbar-hiding").removeClass("toolbar-hidden").transitionEnd(function () {
        a.removeClass("toolbar-hiding")
      })
    };
    var p = function (e, a) {
      function t(e) {
        return e.replace(/[^\u0000-\u007E]/g, function (e) {
          return d[e] || e
        })
      }

      function n(e) {
        e.preventDefault()
      }

      var o = {
        input: null,
        clearButton: null,
        cancelButton: null,
        searchList: null,
        searchIn: ".item-title",
        searchBy: "",
        found: null,
        notFound: null,
        overlay: null,
        ignore: ".searchbar-ignore",
        customSearch: !1,
        removeDiacritics: !1,
        hideDividers: !0,
        hideGroups: !0
      };
      a = a || {};
      for (var s in o)("undefined" == typeof a[s] || null === a[s]) && (a[s] = o[s]);
      var l = this;
      l.params = a, e = i(e), l.container = e, l.active = !1, l.input = l.params.input ? i(l.params.input) : l.container.find('input[type="search"]'), l.clearButton = l.params.clearButton ? i(l.params.clearButton) : l.container.find(".searchbar-clear"), l.cancelButton = l.params.cancelButton ? i(l.params.cancelButton) : l.container.find(".searchbar-cancel"), l.searchList = i(l.params.searchList), l.isVirtualList = l.searchList.hasClass("virtual-list"), l.pageContainer = l.container.parents(".page").eq(0), l.overlay = l.params.overlay ? i(l.params.overlay) : l.pageContainer.length > 0 ? l.pageContainer.find(".searchbar-overlay") : i(".searchbar-overlay"), l.found = l.params.found ? i(l.params.found) : l.pageContainer.length > 0 ? l.pageContainer.find(".searchbar-found") : i(".searchbar-found"), l.notFound = l.params.notFound ? i(l.params.notFound) : l.pageContainer.length > 0 ? l.pageContainer.find(".searchbar-not-found") : i(".searchbar-not-found");
      var p = r.rtl ? "margin-left" : "margin-right";
      l.cancelButton.length > 0 && (l.cancelButton.transition(0).show(), l.cancelButton.css(p, -l.cancelButton[0].offsetWidth + "px"), setTimeout(function () {
        l.cancelButton.transition("")
      }, 0));
      for (var c = [], d = {}, u = 0; u < c.length; u++)for (var f = c[u].letters, m = 0; m < f.length; m++)d[f[m]] = c[u].base;
      l.triggerEvent = function (e, a, t) {
        l.container.trigger(e, t), l.searchList.length > 0 && l.searchList.trigger(e, t), a && l.params[a] && l.params[a](l, t)
      }, l.enable = function () {
        function e() {
          !l.searchList.length && !l.params.customSearch || l.container.hasClass("searchbar-active") || l.overlay.addClass("searchbar-overlay-active"), l.container.addClass("searchbar-active"), l.cancelButton.length > 0 && l.cancelButton.css(p, "0px"), l.triggerEvent("enableSearch", "onEnable"), l.active = !0
        }

        r.device.ios ? setTimeout(function () {
          e()
        }, 400) : e()
      }, l.disable = function () {
        function e() {
          l.input.blur(), l.triggerEvent("disableSearch", "onDisable"), l.active = !1
        }

        l.input.val("").trigger("change"), l.container.removeClass("searchbar-active searchbar-not-empty"), l.cancelButton.length > 0 && l.cancelButton.css(p, -l.cancelButton[0].offsetWidth + "px"), (l.searchList.length || l.params.customSearch) && l.overlay.removeClass("searchbar-overlay-active"), r.device.ios ? setTimeout(function () {
          e()
        }, 400) : e()
      }, l.clear = function () {
        l.input.val("").trigger("change").focus(), l.triggerEvent("clearSearch", "onClear")
      }, l.handleInput = function () {
        setTimeout(function () {
          var e = l.input.val().trim();
          (l.searchList.length > 0 || l.params.customSearch) && (l.params.searchIn || l.isVirtualList) && l.search(e, !0)
        }, 0)
      };
      var h, g = "";
      return l.search = function (e, a) {
        if (e.trim() !== g) {
          if (g = e.trim(), a || (l.active || l.enable(), a || l.input.val(e)), l.query = l.value = e, 0 === e.length ? (l.container.removeClass("searchbar-not-empty"), l.searchList.length && l.container.hasClass("searchbar-active") && l.overlay.addClass("searchbar-overlay-active")) : (l.container.addClass("searchbar-not-empty"), l.searchList.length && l.container.hasClass("searchbar-active") && l.overlay.removeClass("searchbar-overlay-active")), l.params.customSearch)return void l.triggerEvent("search", "onSearch", {query: e});
          var n = [];
          if (l.isVirtualList) {
            if (h = l.searchList[0].f7VirtualList, "" === e.trim())return h.resetFilter(), l.notFound.hide(), void l.found.show();
            if (h.params.searchAll)n = h.params.searchAll(e, h.items) || []; else if (h.params.searchByItem)for (var r = 0; r < h.items.length; r++)h.params.searchByItem(e, r, h.params.items[r]) && n.push(r)
          } else {
            var o;
            o = l.params.removeDiacritics ? t(e.trim().toLowerCase()).split(" ") : e.trim().toLowerCase().split(" "), l.searchList.find("li").removeClass("hidden-by-searchbar").each(function (e, a) {
              a = i(a);
              var r = [];
              a.find(l.params.searchIn).each(function () {
                var e = i(this).text().trim().toLowerCase();
                l.params.removeDiacritics && (e = t(e)), r.push(e)
              }), r = r.join(" ");
              for (var s = 0, p = 0; p < o.length; p++)r.indexOf(o[p]) >= 0 && s++;
              s === o.length || l.params.ignore && a.is(l.params.ignore) ? n.push(a[0]) : a.addClass("hidden-by-searchbar")
            }), l.params.hideDividers && l.searchList.find(".item-divider, .list-group-title").each(function () {
              for (var e = i(this), a = e.nextAll("li"), t = !0, n = 0; n < a.length; n++) {
                var r = i(a[n]);
                if (r.hasClass("list-group-title") || r.hasClass("item-divider"))break;
                r.hasClass("hidden-by-searchbar") || (t = !1)
              }
              var o = l.params.ignore && e.is(l.params.ignore);
              t && !o ? e.addClass("hidden-by-searchbar") : e.removeClass("hidden-by-searchbar")
            }), l.params.hideGroups && l.searchList.find(".list-group").each(function () {
              var e = i(this), a = l.params.ignore && e.is(l.params.ignore), t = e.find("li:not(.hidden-by-searchbar)");
              0 !== t.length || a ? e.removeClass("hidden-by-searchbar") : e.addClass("hidden-by-searchbar")
            })
          }
          l.triggerEvent("search", "onSearch", {
            query: e,
            foundItems: n
          }), 0 === n.length ? (l.notFound.show(), l.found.hide()) : (l.notFound.hide(), l.found.show()), l.isVirtualList && h.filterItems(n)
        }
      }, l.blur = function () {
        l.focusing = !1
      }, l.attachEvents = function (e) {
        var a = e ? "off" : "on";
        l.container[a]("submit", n), l.cancelButton[a]("click", l.disable), l.overlay[a]("click", l.disable), l.input[a]("focus", l.enable), l.input[a]("blur", l.blur), l.input[a]("change keydown keypress keyup input onpropertychange", l.handleInput), l.clearButton[a]("click", l.clear)
      }, l.detachEvents = function () {
        l.attachEvents(!0)
      }, l.init = function () {
        l.attachEvents()
      }, l.destroy = function () {
        l && (l.detachEvents(), l = null)
      }, l.init(), l.container[0].f7Searchbar = l, l
    };
    r.searchbar = function (e, a) {
      return new p(e, a)
    }, r.initSearchbar = function (e) {
      function a() {
        n && n.destroy()
      }

      e = i(e);
      var t = e.hasClass("searchbar") ? e : e.find(".searchbar");
      if (0 !== t.length && t.hasClass("searchbar-init")) {
        var n = r.searchbar(t, t.dataset());
        e.hasClass("page") ? e.once("pageBeforeRemove", a) : e.hasClass("navbar-inner") && e.once("navbarBeforeRemove", a)
      }
    };
    var c = function (e, a) {
      function t(e) {
        e.preventDefault()
      }

      var n = {textarea: null, maxHeight: null};
      a = a || {};
      for (var r in n)("undefined" == typeof a[r] || null === a[r]) && (a[r] = n[r]);
      var o = this;
      return o.params = a, o.container = i(e), 0 !== o.container.length ? (o.textarea = o.params.textarea ? i(o.params.textarea) : o.container.find("textarea"), o.pageContainer = o.container.parents(".page").eq(0), o.pageContent = o.pageContainer.find(".page-content"), o.pageContentPadding = parseInt(o.pageContent.css("padding-bottom")), o.initialBarHeight = o.container[0].offsetHeight, o.initialAreaHeight = o.textarea[0].offsetHeight, o.sizeTextarea = function () {
        o.textarea.css({height: ""});
        var e = o.textarea[0].offsetHeight, a = e - o.textarea[0].clientHeight, t = o.textarea[0].scrollHeight;
        if (t + a > e) {
          var n = t + a, r = o.initialBarHeight + (n - o.initialAreaHeight), i = o.params.maxHeight || o.container.parents(".view")[0].offsetHeight - 88;
          r > i && (r = parseInt(i, 10), n = r - o.initialBarHeight + o.initialAreaHeight), o.textarea.css("height", n + "px"), o.container.css("height", r + "px"), o.pageContent.length > 0 && (o.pageContent.css("padding-bottom", r + "px"), 0 === o.pageContent.find(".messages-new-first").length && o.pageContent.scrollTop(o.pageContent[0].scrollHeight - o.pageContent[0].offsetHeight))
        } else o.pageContent.length > 0 && (o.container.css({
          height: "",
          bottom: ""
        }), o.pageContent.css({"padding-bottom": ""}))
      }, o.clear = function () {
        o.textarea.val("").trigger("change")
      }, o.value = function (e) {
        return "undefined" == typeof e ? o.textarea.val() : void o.textarea.val(e).trigger("change")
      }, o.textareaTimeout = void 0, o.handleTextarea = function (e) {
        clearTimeout(o.textareaTimeout), o.textareaTimeout = setTimeout(function () {
          o.sizeTextarea()
        }, 0)
      }, o.attachEvents = function (e) {
        var a = e ? "off" : "on";
        o.container[a]("submit", t), o.textarea[a]("change keydown keypress keyup paste cut", o.handleTextarea)
      }, o.detachEvents = function () {
        o.attachEvents(!0)
      }, o.init = function () {
        o.attachEvents()
      }, o.destroy = function () {
        o.detachEvents(), o = null
      }, o.init(), o.container[0].f7Messagebar = o, o) : void 0
    };
    r.messagebar = function (e, a) {
      return new c(e, a)
    }, r.initPageMessagebar = function (e) {
      function a() {
        n.destroy(), e.off("pageBeforeRemove", a)
      }

      e = i(e);
      var t = e.hasClass("messagebar") ? e : e.find(".messagebar");
      if (0 !== t.length && t.hasClass("messagebar-init")) {
        var n = r.messagebar(t, t.dataset());
        e.hasClass("page") && e.on("pageBeforeRemove", a)
      }
    }, r.cache = [], r.removeFromCache = function (e) {
      for (var a = !1, t = 0; t < r.cache.length; t++)r.cache[t].url === e && (a = t);
      a !== !1 && r.cache.splice(a, 1)
    }, r.xhr = !1, r.get = function (e, a, t, n) {
      var o = e;
      if (r.params.cacheIgnoreGetParameters && e.indexOf("?") >= 0 && (o = e.split("?")[0]), r.params.cache && !t && e.indexOf("nocache") < 0 && r.params.cacheIgnore.indexOf(o) < 0)for (var s = 0; s < r.cache.length; s++)if (r.cache[s].url === o && (new Date).getTime() - r.cache[s].time < r.params.cacheDuration)return n(r.cache[s].content), !1;
      return r.xhr = i.ajax({
        url: e, method: "GET", beforeSend: r.params.onAjaxStart, complete: function (e) {
          e.status >= 200 && e.status < 300 || 0 === e.status ? (r.params.cache && !t && (r.removeFromCache(o), r.cache.push({
            url: o,
            time: (new Date).getTime(),
            content: e.responseText
          })), n(e.responseText, !1)) : n(e.responseText, !0), r.params.onAjaxComplete && r.params.onAjaxComplete(e)
        }, error: function (e) {
          n(e.responseText, !0), r.params.onAjaxError && r.params.onAjaxError(e)
        }
      }), a && (a.xhr = r.xhr), r.xhr
    }, r.pageCallbacks = {}, r.onPage = function (e, a, t) {
      if (a && a.split(" ").length > 1) {
        for (var n = a.split(" "), o = [], i = 0; i < n.length; i++)o.push(r.onPage(e, n[i], t));
        return o.remove = function () {
          for (var e = 0; e < o.length; e++)o[e].remove()
        }, o.trigger = function () {
          for (var e = 0; e < o.length; e++)o[e].trigger()
        }, o
      }
      var s = r.pageCallbacks[e][a];
      return s || (s = r.pageCallbacks[e][a] = []), r.pageCallbacks[e][a].push(t), {
        remove: function () {
          for (var e, a = 0; a < s.length; a++)s[a].toString() === t.toString() && (e = a);
          "undefined" != typeof e && s.splice(e, 1)
        }, trigger: t
      }
    };
    for (var d = "beforeInit init reinit beforeAnimation afterAnimation back afterBack beforeRemove".split(" "), u = 0; u < d.length; u++)r.pageCallbacks[d[u]] = {}, a(d[u]);
    r.triggerPageCallbacks = function (e, a, t) {
      var n = r.pageCallbacks[e]["*"];
      if (n)for (var o = 0; o < n.length; o++)n[o](t);
      var i = r.pageCallbacks[e][a];
      if (i && 0 !== i.length)for (var s = 0; s < i.length; s++)i[s](t)
    }, r.pageInitCallback = function (e, a) {
      var t = a.pageContainer;
      if (!t.f7PageInitialized || !e || e.params.domCache) {
        var n = {
          container: t,
          url: a.url,
          query: a.query || i.parseUrlQuery(a.url || ""),
          name: i(t).attr("data-page"),
          view: e,
          from: a.position,
          context: a.context,
          navbarInnerContainer: a.navbarInnerContainer,
          fromPage: a.fromPage
        };
        if (a.fromPage && !a.fromPage.navbarInnerContainer && a.oldNavbarInnerContainer && (a.fromPage.navbarInnerContainer = a.oldNavbarInnerContainer), t.f7PageInitialized && (e && e.params.domCache || !e && i(t).parents(".popup, .popover, .login-screen, .modal, .actions-modal, .picker-modal").length > 0))return r.reinitPage(t), r.pluginHook("pageReinit", n), r.params.onPageReinit && r.params.onPageBeforeInit(r, n), r.triggerPageCallbacks("reinit", n.name, n), void i(n.container).trigger("pageReinit", {page: n});
        t.f7PageInitialized = !0, t.f7PageData = n, !e || a.preloadOnly || a.reloadPrevious || (i(e.container).attr("data-page", n.name), e.activePage = n), r.pluginHook("pageBeforeInit", n), r.params.onPageBeforeInit && r.params.onPageBeforeInit(r, n), r.triggerPageCallbacks("beforeInit", n.name, n), i(n.container).trigger("pageBeforeInit", {page: n}), r.initPage(t), r.pluginHook("pageInit", n), r.params.onPageInit && r.params.onPageInit(r, n), r.triggerPageCallbacks("init", n.name, n), i(n.container).trigger("pageInit", {page: n})
      }
    }, r.pageRemoveCallback = function (e, a, t) {
      var n;
      a.f7PageData && (n = a.f7PageData.context);
      var o = {
        container: a,
        name: i(a).attr("data-page"),
        view: e,
        url: a.f7PageData && a.f7PageData.url,
        query: a.f7PageData && a.f7PageData.query,
        navbarInnerContainer: a.f7PageData && a.f7PageData.navbarInnerContainer,
        from: t,
        context: n
      };
      r.pluginHook("pageBeforeRemove", o), r.params.onPageBeforeRemove && r.params.onPageBeforeRemove(r, o), r.triggerPageCallbacks("beforeRemove", o.name, o), i(o.container).trigger("pageBeforeRemove", {page: o})
    }, r.pageBackCallback = function (e, a, t) {
      var n, o = t.pageContainer;
      o.f7PageData && (n = o.f7PageData.context);
      var s = {
        container: o,
        name: i(o).attr("data-page"),
        url: o.f7PageData && o.f7PageData.url,
        query: o.f7PageData && o.f7PageData.query,
        view: a,
        from: t.position,
        context: n,
        navbarInnerContainer: o.f7PageData && o.f7PageData.navbarInnerContainer,
        swipeBack: t.swipeBack
      };
      "after" === e && (r.pluginHook("pageAfterBack", s), r.params.onPageAfterBack && r.params.onPageAfterBack(r, s), r.triggerPageCallbacks("afterBack", s.name, s), i(o).trigger("pageAfterBack", {page: s})), "before" === e && (r.pluginHook("pageBack", s), r.params.onPageBack && r.params.onPageBack(r, s), r.triggerPageCallbacks("back", s.name, s), i(s.container).trigger("pageBack", {page: s}))
    }, r.pageAnimCallback = function (e, a, t) {
      var n, o = t.pageContainer;
      o.f7PageData && (n = o.f7PageData.context);
      var s = {
        container: o,
        url: t.url,
        query: t.query || i.parseUrlQuery(t.url || ""),
        name: i(o).attr("data-page"),
        view: a,
        from: t.position,
        context: n,
        swipeBack: t.swipeBack,
        navbarInnerContainer: o.f7PageData && o.f7PageData.navbarInnerContainer,
        fromPage: t.fromPage
      }, l = t.oldPage, p = t.newPage;
      if (o.f7PageData = s, "after" === e && (r.pluginHook("pageAfterAnimation", s), r.params.onPageAfterAnimation && r.params.onPageAfterAnimation(r, s), r.triggerPageCallbacks("afterAnimation", s.name, s), i(s.container).trigger("pageAfterAnimation", {page: s})), "before" === e) {
        i(a.container).attr("data-page", s.name), a && (a.activePage = s), p.hasClass("no-navbar") && !l.hasClass("no-navbar") && a.hideNavbar(), p.hasClass("no-navbar") || !l.hasClass("no-navbar") && !l.hasClass("no-navbar-by-scroll") || a.showNavbar(), p.hasClass("no-toolbar") && !l.hasClass("no-toolbar") && a.hideToolbar(), p.hasClass("no-toolbar") || !l.hasClass("no-toolbar") && !l.hasClass("no-toolbar-by-scroll") || a.showToolbar();
        var c;
        p.hasClass("no-tabbar") && !l.hasClass("no-tabbar") && (c = i(a.container).find(".tabbar"), 0 === c.length && (c = i(a.container).parents("." + r.params.viewsClass).find(".tabbar")), r.hideToolbar(c)), p.hasClass("no-tabbar") || !l.hasClass("no-tabbar") && !l.hasClass("no-tabbar-by-scroll") || (c = i(a.container).find(".tabbar"), 0 === c.length && (c = i(a.container).parents("." + r.params.viewsClass).find(".tabbar")), r.showToolbar(c)), l.removeClass("no-navbar-by-scroll no-toolbar-by-scroll"), r.pluginHook("pageBeforeAnimation", s), r.params.onPageBeforeAnimation && r.params.onPageBeforeAnimation(r, s),
          r.triggerPageCallbacks("beforeAnimation", s.name, s), i(s.container).trigger("pageBeforeAnimation", {page: s})
      }
    }, r.initPage = function (e) {
      e = i(e), r.sizeNavbars && r.sizeNavbars(e.parents("." + r.params.viewClass)[0]), r.initPageMessages && r.initPageMessages(e), r.initFormsStorage && r.initFormsStorage(e), r.initSmartSelects && r.initSmartSelects(e), r.initPageSwiper && r.initPageSwiper(e), r.initPullToRefresh && r.initPullToRefresh(e), r.initInfiniteScroll && r.initInfiniteScroll(e), r.initSearchbar && r.initSearchbar(e), r.initPageMessagebar && r.initPageMessagebar(e), r.initScrollToolbars && r.initScrollToolbars(e), r.initImagesLazyLoad && r.initImagesLazyLoad(e)
    }, r.reinitPage = function (e) {
      e = i(e), r.sizeNavbars && r.sizeNavbars(e.parents("." + r.params.viewClass)[0]), r.reinitPageSwiper && r.reinitPageSwiper(e), r.reinitLazyLoad && r.reinitLazyLoad(e)
    }, r.initPageWithCallback = function (e) {
      e = i(e);
      var a = e.parents("." + r.params.viewClass);
      if (0 !== a.length) {
        var t = a[0].f7View || void 0, n = t && t.url ? t.url : void 0;
        a && e.attr("data-page") && a.attr("data-page", e.attr("data-page")), r.pageInitCallback(t, {
          pageContainer: e[0],
          url: n,
          position: "center"
        })
      }
    }, r.router = {
      temporaryDom: document.createElement("div"), findElement: function (e, a, t, n) {
        a = i(a), n && (e += ":not(.cached)");
        var o = a.find(e);
        return o.length > 1 && ("string" == typeof t.selector && (o = a.find(t.selector + " " + e)), o.length > 1 && (o = a.find("." + r.params.viewMainClass + " " + e))), 1 === o.length ? o : (n || (o = r.router.findElement(e, a, t, !0)), o && 1 === o.length ? o : void 0)
      }, animatePages: function (e, a, t, n) {
        var r = "page-on-center page-on-right page-on-left";
        "to-left" === t && (e.removeClass(r).addClass("page-from-center-to-left"), a.removeClass(r).addClass("page-from-right-to-center")), "to-right" === t && (e.removeClass(r).addClass("page-from-left-to-center"), a.removeClass(r).addClass("page-from-center-to-right"))
      }, prepareNavbar: function (e, a, t) {
        i(e).find(".sliding").each(function () {
          var e = i(this), n = "right" === t ? this.f7NavbarRightOffset : this.f7NavbarLeftOffset;
          r.params.animateNavBackIcon && (e.hasClass("left") && e.find(".back .icon").length > 0 && e.find(".back .icon").transform("translate3d(" + -n + "px,0,0)"), "left" === t && e.hasClass("center") && i(a).find(".left .back .icon ~ span").length > 0 && (n += i(a).find(".left .back span")[0].offsetLeft)), e.transform("translate3d(" + n + "px,0,0)")
        })
      }, animateNavbars: function (e, a, t, n) {
        var o = "navbar-on-right navbar-on-center navbar-on-left";
        "to-left" === t && (a.removeClass(o).addClass("navbar-from-right-to-center"), a.find(".sliding").each(function () {
          var e = i(this);
          e.transform("translate3d(0px,0,0)"), r.params.animateNavBackIcon && e.hasClass("left") && e.find(".back .icon").length > 0 && e.find(".back .icon").transform("translate3d(0px,0,0)")
        }), e.removeClass(o).addClass("navbar-from-center-to-left"), e.find(".sliding").each(function () {
          var e, t = i(this);
          r.params.animateNavBackIcon && (t.hasClass("center") && a.find(".sliding.left .back .icon").length > 0 && (e = a.find(".sliding.left .back span"), e.length > 0 && (this.f7NavbarLeftOffset += e[0].offsetLeft)), t.hasClass("left") && t.find(".back .icon").length > 0 && t.find(".back .icon").transform("translate3d(" + -this.f7NavbarLeftOffset + "px,0,0)")), t.transform("translate3d(" + this.f7NavbarLeftOffset + "px,0,0)")
        })), "to-right" === t && (e.removeClass(o).addClass("navbar-from-left-to-center"), e.find(".sliding").each(function () {
          var e = i(this);
          e.transform("translate3d(0px,0,0)"), r.params.animateNavBackIcon && e.hasClass("left") && e.find(".back .icon").length > 0 && e.find(".back .icon").transform("translate3d(0px,0,0)")
        }), a.removeClass(o).addClass("navbar-from-center-to-right"), a.find(".sliding").each(function () {
          var e = i(this);
          r.params.animateNavBackIcon && e.hasClass("left") && e.find(".back .icon").length > 0 && e.find(".back .icon").transform("translate3d(" + -this.f7NavbarRightOffset + "px,0,0)"), e.transform("translate3d(" + this.f7NavbarRightOffset + "px,0,0)")
        }))
      }, preprocess: function (e, a, t, n) {
        r.pluginHook("routerPreprocess", e, a, t, n), a = r.pluginProcess("preprocess", a), e && e.params && e.params.preprocess ? (a = e.params.preprocess(a, t, n), "undefined" != typeof a && n(a)) : r.params.preprocess ? (a = r.params.preprocess(a, t, n), "undefined" != typeof a && n(a)) : n(a)
      }, preroute: function (e, a) {
        return r.pluginHook("routerPreroute", e, a), r.params.preroute && r.params.preroute(e, a) === !1 || e && e.params.preroute && e.params.preroute(e, a) === !1 ? !0 : !1
      }, template7Render: function (e, a) {
        {
          var t, n, o = a.url, l = a.content, p = a.content, c = a.context, d = a.contextName, u = a.template;
          a.pageName
        }
        if ("string" == typeof l ? o ? r.template7Cache[o] ? n = s.cache[o] : (n = s.compile(l), s.cache[o] = n) : n = s.compile(l) : u && (n = u), c)t = c; else {
          if (d)if (d.indexOf(".") >= 0) {
            for (var f = d.split("."), m = s.data[f[0]], h = 1; h < f.length; h++)f[h] && (m = m[f[h]]);
            t = m
          } else t = s.data[d];
          if (!t && o && (t = s.data["url:" + o]), !t && "string" == typeof l && !u) {
            var g = l.match(/(data-page=["'][^"^']*["'])/);
            if (g) {
              var v = g[0].split("data-page=")[1].replace(/['"]/g, "");
              v && (t = s.data["page:" + v])
            }
          }
          if (!t && u && s.templates)for (var C in s.templates)s.templates[C] === u && (t = s.data[C]);
          t || (t = {})
        }
        if (n && t) {
          if ("function" == typeof t && (t = t()), o) {
            var Y = i.parseUrlQuery(o);
            t.url_query = {};
            for (var S in Y)t.url_query[S] = Y[S]
          }
          p = n(t)
        }
        return {content: p, context: t}
      }
    }, r.router._load = function (e, a) {
      function t() {
        e.allowPageChange = !0, n.removeClass("page-from-right-to-center page-on-right page-on-left").addClass("page-on-center"), o.removeClass("page-from-center-to-left page-on-center page-on-right").addClass("page-on-left"), u && (c.removeClass("navbar-from-right-to-center navbar-on-left navbar-on-right").addClass("navbar-on-center"), p.removeClass("navbar-from-center-to-left navbar-on-center navbar-on-right").addClass("navbar-on-left")), r.pageAnimCallback("after", e, {
          pageContainer: n[0],
          url: m,
          position: "right",
          oldPage: o,
          newPage: n,
          query: a.query,
          fromPage: o && o.length && o[0].f7PageData
        }), r.params.pushState && e.main && r.pushStateClearQueue(), e.params.swipeBackPage || e.params.preloadPreviousPage || (e.params.domCache ? (o.addClass("cached"), p.addClass("cached")) : (0 !== m.indexOf("#") || 0 !== n.attr("data-page").indexOf("smart-select-")) && (r.pageRemoveCallback(e, o[0], "left"), u && r.navbarRemoveCallback(e, o[0], d[0], p[0]), o.remove(), u && p.remove())), e.params.uniqueHistory && P && e.refreshPreviousPage()
      }

      a = a || {};
      var n, o, s, l, p, c, d, u, f, m = a.url, h = a.content, g = {content: a.content}, v = a.template, C = a.pageName, Y = i(e.container), S = i(e.pagesContainer), T = a.animatePages, Z = "undefined" == typeof m && h || v, w = a.pushState;
      if ("undefined" == typeof T && (T = e.params.animatePages), r.pluginHook("routerLoad", e, a), (r.params.template7Pages && "string" == typeof h || v) && (g = r.router.template7Render(e, a), g.content && !h && (h = g.content)), r.router.temporaryDom.innerHTML = "", !C)if (m || "string" == typeof h)r.router.temporaryDom.innerHTML = g.content; else if ("length"in h && h.length > 1)for (var L = 0; L < h.length; L++)i(r.router.temporaryDom).append(h[L]); else i(r.router.temporaryDom).append(h);
      if (f = a.reload && (a.reloadPrevious ? "left" : "center"), n = C ? S.find('.page[data-page="' + C + '"]') : r.router.findElement(".page", r.router.temporaryDom, e), !n || 0 === n.length || C && e.activePage && e.activePage.name === C)return void(e.allowPageChange = !0);
      if (n.addClass(a.reload ? "page-on-" + f : "page-on-right"), s = S.children(".page:not(.cached)"), a.reload && a.reloadPrevious && 1 === s.length)return void(e.allowPageChange = !0);
      if (a.reload)o = s.eq(s.length - 1); else {
        if (s.length > 1) {
          for (l = 0; l < s.length - 2; l++)e.params.domCache ? i(s[l]).addClass("cached") : (r.pageRemoveCallback(e, s[l], "left"), i(s[l]).remove());
          e.params.domCache ? i(s[l]).addClass("cached") : (r.pageRemoveCallback(e, s[l], "left"), i(s[l]).remove())
        }
        o = S.children(".page:not(.cached)")
      }
      if (e.params.domCache && n.removeClass("cached"), e.params.dynamicNavbar)if (u = !0, c = C ? Y.find('.navbar-inner[data-page="' + C + '"]') : r.router.findElement(".navbar-inner", r.router.temporaryDom, e), c && 0 !== c.length || (u = !1), d = Y.find(".navbar"), a.reload)p = d.find(".navbar-inner:not(.cached):last-child"); else if (p = d.find(".navbar-inner:not(.cached)"), p.length > 0) {
        for (l = 0; l < p.length - 1; l++)e.params.domCache ? i(p[l]).addClass("cached") : (r.navbarRemoveCallback(e, s[l], d[0], p[l]), i(p[l]).remove());
        c || 1 !== p.length || (e.params.domCache ? i(p[0]).addClass("cached") : (r.navbarRemoveCallback(e, s[0], d[0], p[0]), i(p[0]).remove())), p = d.find(".navbar-inner:not(.cached)")
      }
      if (u && (c.addClass(a.reload ? "navbar-on-" + f : "navbar-on-right"), e.params.domCache && c.removeClass("cached"), n[0].f7RelatedNavbar = c[0], c[0].f7RelatedPage = n[0]), !m) {
        var b = C || n.attr("data-page");
        m = Z ? "#" + r.params.dynamicPageUrl.replace(/{{name}}/g, b).replace(/{{index}}/g, e.history.length - (a.reload ? 1 : 0)) : "#" + b, e.params.domCache || (e.contentCache[m] = h), e.params.domCache && C && (e.pagesCache[m] = C)
      }
      if (r.params.pushState && !a.reloadPrevious && e.main) {
        "undefined" == typeof w && (w = !0);
        var y = r.params.pushStateRoot || "", X = a.reload ? "replaceState" : "pushState";
        w && (Z || C ? Z && h ? history[X]({
          content: h,
          url: m,
          viewIndex: r.views.indexOf(e)
        }, "", y + r.params.pushStateSeparator + m) : C && history[X]({
          pageName: C,
          url: m,
          viewIndex: r.views.indexOf(e)
        }, "", y + r.params.pushStateSeparator + m) : history[X]({
          url: m,
          viewIndex: r.views.indexOf(e)
        }, "", y + r.params.pushStateSeparator + m))
      }
      if (e.url = m, a.reload) {
        var J = e.history[e.history.length - (a.reloadPrevious ? 2 : 1)];
        J && 0 === J.indexOf("#") && J in e.contentCache && J !== m && (e.contentCache[J] = null, delete e.contentCache[J]), e.history[e.history.length - (a.reloadPrevious ? 2 : 1)] = m
      } else e.history.push(m);
      var P = !1;
      if (e.params.uniqueHistory) {
        var M = e.history, D = m;
        if (e.params.uniqueHistoryIgnoreGetParameters)for (M = [], D = m.split("?")[0], l = 0; l < e.history.length; l++)M.push(e.history[l].split("?")[0]);
        M.indexOf(D) !== M.lastIndexOf(D) && (e.history = e.history.slice(0, M.indexOf(D)), e.history.push(m), P = !0)
      }
      if (a.reloadPrevious ? (o = o.prev(".page"), n.insertBefore(o), u && (p = p.prev(".navbar-inner"), c.insertAfter(p))) : (S.append(n[0]), u && d.append(c[0])), a.reload && (e.params.domCache && e.initialPages.indexOf(o[0]) >= 0 ? (o.addClass("cached"), u && p.addClass("cached")) : (r.pageRemoveCallback(e, o[0], f), u && r.navbarRemoveCallback(e, o[0], d[0], p[0]), o.remove(), u && p.remove())), r.pageInitCallback(e, {
          pageContainer: n[0],
          url: m,
          position: a.reload ? f : "right",
          navbarInnerContainer: u ? c && c[0] : void 0,
          oldNavbarInnerContainer: u ? p && p[0] : void 0,
          context: g.context,
          query: a.query,
          fromPage: o && o.length && o[0].f7PageData,
          reload: a.reload,
          reloadPrevious: a.reloadPrevious
        }), u && r.navbarInitCallback(e, n[0], d[0], c[0], m, a.reload ? f : "right"), a.reload)return e.allowPageChange = !0, void(P && e.refreshPreviousPage());
      u && T && r.router.prepareNavbar(c, p, "right");
      n[0].clientLeft;
      r.pageAnimCallback("before", e, {
        pageContainer: n[0],
        url: m,
        position: "right",
        oldPage: o,
        newPage: n,
        query: a.query,
        fromPage: o && o.length && o[0].f7PageData
      }), T ? (r.router.animatePages(o, n, "to-left", e), u && setTimeout(function () {
        r.router.animateNavbars(p, c, "to-left", e)
      }, 0), n.animationEnd(function (e) {
        t()
      })) : (u && c.find(".sliding, .sliding .back .icon").transform(""), t())
    }, r.router.load = function (e, a) {
      function t(t) {
        r.router.preprocess(e, t, n, function (t) {
          a.content = t, r.router._load(e, a)
        })
      }

      if (r.router.preroute(e, a))return !1;
      a = a || {};
      var n = a.url, o = a.content, s = a.pageName;
      s && s.indexOf("?") > 0 && (a.query = i.parseUrlQuery(s), a.pageName = s = s.split("?")[0]);
      var l = a.template;
      return e.params.reloadPages === !0 && (a.reload = !0), e.allowPageChange && (!n || e.url !== n || a.reload || e.params.allowDuplicateUrls) ? (e.allowPageChange = !1, r.xhr && e.xhr && e.xhr === r.xhr && (r.xhr.abort(), r.xhr = !1), o || s ? void t(o) : l ? void r.router._load(e, a) : a.url && "#" !== a.url ? void r.get(a.url, e, a.ignoreCache, function (a, n) {
        return n ? void(e.allowPageChange = !0) : void t(a)
      }) : void(e.allowPageChange = !0)) : !1
    }, r.router._back = function (e, a) {
      function t() {
        r.pageBackCallback("after", e, {
          pageContainer: l[0],
          url: h,
          position: "center",
          oldPage: l,
          newPage: p
        }), r.pageAnimCallback("after", e, {
          pageContainer: p[0],
          url: h,
          position: "left",
          oldPage: l,
          newPage: p,
          query: a.query,
          fromPage: l && l.length && l[0].f7PageData
        }), r.router.afterBack(e, l[0], p[0], J)
      }

      function n() {
        r.pageBackCallback("before", e, {
          pageContainer: l[0],
          url: h,
          position: "center",
          oldPage: l,
          newPage: p
        }), r.pageAnimCallback("before", e, {
          pageContainer: p[0],
          url: h,
          position: "left",
          oldPage: l,
          newPage: p,
          query: a.query,
          fromPage: l && l.length && l[0].f7PageData
        }), Y ? (r.router.animatePages(p, l, "to-right", e), m && setTimeout(function () {
          r.router.animateNavbars(d, c, "to-right", e)
        }, 0), p.animationEnd(function () {
          t()
        })) : (m && d.find(".sliding, .sliding .back .icon").transform(""), t())
      }

      function o() {
        if (r.router.temporaryDom.innerHTML = "", h || "string" == typeof g)r.router.temporaryDom.innerHTML = v.content; else if ("length"in g && g.length > 1)for (var a = 0; a < g.length; a++)i(r.router.temporaryDom).append(g[a]); else i(r.router.temporaryDom).append(g);
        p = r.router.findElement(".page", r.router.temporaryDom, e), e.params.dynamicNavbar && (d = r.router.findElement(".navbar-inner", r.router.temporaryDom, e))
      }

      function s() {
        if (!p || 0 === p.length)return void(e.allowPageChange = !0);
        if (e.params.dynamicNavbar && "undefined" == typeof m && (m = d && 0 !== d.length ? !0 : !1), p.addClass("page-on-left").removeClass("cached"), m && (u = L.find(".navbar"), f = L.find(".navbar-inner:not(.cached)"), d.addClass("navbar-on-left").removeClass("cached")), Z) {
          var t, o;
          if (t = i(y[y.length - 2]), m && (o = i(t[0] && t[0].f7RelatedNavbar || f[f.length - 2])), e.params.domCache && e.initialPages.indexOf(t[0]) >= 0)t.length && t[0] !== p[0] && t.addClass("cached"), m && o.length && o[0] !== d[0] && o.addClass("cached"); else {
            var s = m && o.length;
            t.length ? (r.pageRemoveCallback(e, t[0], "right"), s && r.navbarRemoveCallback(e, t[0], u[0], o[0]), t.remove(), s && o.remove()) : s && (r.navbarRemoveCallback(e, t[0], u[0], o[0]), o.remove())
          }
          y = b.children(".page:not(.cached)"), m && (f = L.find(".navbar-inner:not(.cached)")), e.history.indexOf(h) >= 0 ? e.history = e.history.slice(0, e.history.indexOf(h) + 2) : e.history[[e.history.length - 2]] ? e.history[e.history.length - 2] = h : e.history.unshift(h)
        }
        if (l = i(y[y.length - 1]), e.params.domCache && l[0] === p[0] && (l = b.children(".page.page-on-center"), 0 === l.length && e.activePage && (l = i(e.activePage.container))), m && !c && (c = i(f[f.length - 1]), e.params.domCache && (c[0] === d[0] && (c = u.children(".navbar-inner.navbar-on-center:not(.cached)")), 0 === c.length && (c = u.children('.navbar-inner[data-page="' + l.attr("data-page") + '"]'))), (0 === c.length || d[0] === c[0]) && (m = !1)), m && (X && d.insertBefore(c), d[0].f7RelatedPage = p[0], p[0].f7RelatedNavbar = d[0]), X && p.insertBefore(l), r.pageInitCallback(e, {
            pageContainer: p[0],
            url: h,
            position: "left",
            navbarInnerContainer: m ? d[0] : void 0,
            oldNavbarInnerContainer: m ? c && c[0] : void 0,
            context: v.context,
            query: a.query,
            fromPage: l && l.length && l[0].f7PageData,
            preloadOnly: S
          }), m && r.navbarInitCallback(e, p[0], u[0], d[0], h, "right"), m && d.hasClass("navbar-on-left") && Y && r.router.prepareNavbar(d, c, "left"), S)return void(e.allowPageChange = !0);
        e.url = h;
        p[0].clientLeft;
        n(), r.params.pushState && e.main && ("undefined" == typeof T && (T = !0), !S && history.state && T && history.back())
      }

      a = a || {};
      var l, p, c, d, u, f, m, h = a.url, g = a.content, v = {content: a.content}, C = a.template, Y = a.animatePages, S = a.preloadOnly, T = a.pushState, Z = (a.ignoreCache, a.force), w = a.pageName, L = i(e.container), b = i(e.pagesContainer), y = b.children(".page:not(.cached)"), X = !0;
      "undefined" == typeof Y && (Y = e.params.animatePages), r.pluginHook("routerBack", e, a), (r.params.template7Pages && "string" == typeof g || C) && (v = r.router.template7Render(e, a), v.content && !g && (g = v.content));
      var J = arguments[2];
      return y.length > 1 && !Z ? S ? void(e.allowPageChange = !0) : (e.url = e.history[e.history.length - 2], h = e.url, p = i(y[y.length - 2]), l = i(y[y.length - 1]), e.params.dynamicNavbar && (m = !0, f = L.find(".navbar-inner:not(.cached)"), d = i(f[0]), c = i(f[1]), (0 === d.length || 0 === c.length || c[0] === d[0]) && (m = !1)), X = !1, void s()) : Z ? h && h === e.url || w && e.activePage && e.activePage.name === w ? void(e.allowPageChange = !0) : g ? (o(), void s()) : w && e.params.domCache ? (w && (h = "#" + w), p = i(L).find('.page[data-page="' + w + '"]'), p[0].f7PageData && p[0].f7PageData.url && (h = p[0].f7PageData.url), e.params.dynamicNavbar && (d = i(L).find('.navbar-inner[data-page="' + w + '"]'), 0 === d.length && (d = i(p[0].f7RelatedNavbar))), void s()) : void(e.allowPageChange = !0) : (S || (e.url = e.history[e.history.length - 2], h = e.url), g ? (o(), void s()) : w ? (p = i(L).find('.page[data-page="' + w + '"]'), e.params.dynamicNavbar && (d = i(L).find('.navbar-inner[data-page="' + w + '"]')), void s()) : void(e.allowPageChange = !0))
    }, r.router.back = function (e, a) {
      function t(t) {
        r.router.preprocess(e, t, n, function (t) {
          a.content = t, r.router._back(e, a)
        })
      }

      if (r.router.preroute(e, a))return !1;
      a = a || {};
      var n = a.url, o = a.content, s = a.pageName;
      s && s.indexOf("?") > 0 && (a.query = i.parseUrlQuery(s), a.pageName = s = s.split("?")[0]);
      var l = a.force;
      if (!e.allowPageChange)return !1;
      e.allowPageChange = !1, r.xhr && e.xhr && e.xhr === r.xhr && (r.xhr.abort(), r.xhr = !1);
      var p = i(e.pagesContainer).find(".page:not(.cached)");
      if (p.length > 1 && !l)return void r.router._back(e, a, arguments[2]);
      if (l) {
        if (!n && o)return void t(o);
        if (!n && s)return s && (n = "#" + s), void t();
        if (n)return void r.get(a.url, e, a.ignoreCache, function (a, n) {
          return n ? void(e.allowPageChange = !0) : void t(a)
        })
      } else {
        if (n = a.url = e.history[e.history.length - 2], !n)return void(e.allowPageChange = !0);
        if (0 === n.indexOf("#") && e.contentCache[n])return void t(e.contentCache[n]);
        if (0 === n.indexOf("#") && e.params.domCache)return s || (a.pageName = n.split("#")[1]), void t();
        if (0 !== n.indexOf("#"))return void r.get(a.url, e, a.ignoreCache, function (a, n) {
          return n ? void(e.allowPageChange = !0) : void t(a)
        })
      }
      e.allowPageChange = !0
    }, r.router.afterBack = function (e, a, t) {
      a = i(a), t = i(t), e.params.domCache && e.initialPages.indexOf(a[0]) >= 0 ? a.removeClass("page-from-center-to-right").addClass("cached") : (r.pageRemoveCallback(e, a[0], "right"), a.remove()), t.removeClass("page-from-left-to-center page-on-left").addClass("page-on-center"), e.allowPageChange = !0;
      var n, o = e.history.pop();
      if (e.params.dynamicNavbar) {
        var s = i(e.container).find(".navbar-inner:not(.cached)"), l = i(a[0].f7RelatedNavbar || s[1]);
        e.params.domCache && e.initialNavbars.indexOf(l[0]) >= 0 ? l.removeClass("navbar-from-center-to-right").addClass("cached") : (r.navbarRemoveCallback(e, a[0], void 0, l[0]), l.remove()), n = i(s[0]).removeClass("navbar-on-left navbar-from-left-to-center").addClass("navbar-on-center")
      }
      if (e.params.domCache && i(e.container).find(".page.cached").each(function () {
          var a = i(this), t = (a.index(), a[0].f7PageData && a[0].f7PageData.url);
          t && e.history.indexOf(t) < 0 && e.initialPages.indexOf(this) < 0 && (r.pageRemoveCallback(e, a[0], "right"), a[0].f7RelatedNavbar && e.params.dynamicNavbar && r.navbarRemoveCallback(e, a[0], void 0, a[0].f7RelatedNavbar), a.remove(), a[0].f7RelatedNavbar && e.params.dynamicNavbar && i(a[0].f7RelatedNavbar).remove())
        }), !e.params.domCache && o && o.indexOf("#") > -1 && o in e.contentCache && (e.contentCache[o] = null, delete e.contentCache[o]), r.params.pushState && e.main && r.pushStateClearQueue(), e.params.preloadPreviousPage)if (e.params.domCache && e.history.length > 1) {
        var p, c, d = e.history[e.history.length - 2];
        d && e.pagesCache[d] ? (p = i(e.container).find('.page[data-page="' + e.pagesCache[d] + '"]'), p.next(".page")[0] !== t[0] && p.insertBefore(t), n && (c = i(e.container).find('.navbar-inner[data-page="' + e.pagesCache[d] + '"]'), c && 0 !== c.length || (c = n.prev(".navbar-inner.cached")), c.next(".navbar-inner")[0] !== n[0] && c.insertBefore(n))) : (p = t.prev(".page.cached"), n && (c = n.prev(".navbar-inner.cached"))), p && p.length > 0 && p.removeClass("cached page-on-right page-on-center").addClass("page-on-left"), c && c.length > 0 && c.removeClass("cached navbar-on-right navbar-on-center").addClass("navbar-on-left")
      } else r.router.back(e, {preloadOnly: !0});
      arguments[3] && "function" == typeof arguments[3] && arguments[3]()
    };
    var f = document.createElement("div");
    r.modalStack = [], r.modalStackClearQueue = function () {
      r.modalStack.length && r.modalStack.shift()()
    }, r.modal = function (e) {
      e = e || {};
      var a = "";
      if (r.params.modalTemplate)r._compiledTemplates.modal || (r._compiledTemplates.modal = s.compile(r.params.modalTemplate)), a = r._compiledTemplates.modal(e); else {
        var t = "";
        if (e.buttons && e.buttons.length > 0)for (var n = 0; n < e.buttons.length; n++)t += '<span class="modal-button' + (e.buttons[n].bold ? " modal-button-bold" : "") + '">' + e.buttons[n].text + "</span>";
        var o = e.title ? '<div class="modal-title">' + e.title + "</div>" : "", l = e.text ? '<div class="modal-text">' + e.text + "</div>" : "", p = e.afterText ? e.afterText : "", c = e.buttons && 0 !== e.buttons.length ? "" : "modal-no-buttons", d = e.verticalButtons ? "modal-buttons-vertical" : "";
        a = '<div class="modal ' + c + " " + (e.cssClass || "") + '"><div class="modal-inner">' + (o + l + p) + '</div><div class="modal-buttons ' + d + '">' + t + "</div></div>"
      }
      f.innerHTML = a;
      var u = i(f).children();
      return i("body").append(u[0]), u.find(".modal-button").each(function (a, t) {
        i(t).on("click", function (t) {
          e.buttons[a].close !== !1 && r.closeModal(u), e.buttons[a].onClick && e.buttons[a].onClick(u, t), e.onClick && e.onClick(u, a)
        })
      }), r.openModal(u), u[0]
    }, r.alert = function (e, a, t) {
      return "function" == typeof a && (t = arguments[1], a = void 0), r.modal({
        text: e || "",
        title: "undefined" == typeof a ? r.params.modalTitle : a,
        buttons: [{text: r.params.modalButtonOk, bold: !0, onClick: t}]
      })
    }, r.confirm = function (e, a, t, n) {
      return "function" == typeof a && (n = arguments[2], t = arguments[1], a = void 0), r.modal({
        text: e || "",
        title: "undefined" == typeof a ? r.params.modalTitle : a,
        buttons: [{text: r.params.modalButtonCancel, onClick: n}, {text: r.params.modalButtonOk, bold: !0, onClick: t}]
      })
    }, r.prompt = function (e, a, t, n) {
      return "function" == typeof a && (n = arguments[2], t = arguments[1], a = void 0), r.modal({
        text: e || "",
        title: "undefined" == typeof a ? r.params.modalTitle : a,
        afterText: '<input type="text" class="modal-text-input">',
        buttons: [{text: r.params.modalButtonCancel}, {text: r.params.modalButtonOk, bold: !0}],
        onClick: function (e, a) {
          0 === a && n && n(i(e).find(".modal-text-input").val()), 1 === a && t && t(i(e).find(".modal-text-input").val())
        }
      })
    }, r.modalLogin = function (e, a, t, n) {
      return "function" == typeof a && (n = arguments[2], t = arguments[1], a = void 0), r.modal({
        text: e || "",
        title: "undefined" == typeof a ? r.params.modalTitle : a,
        afterText: '<input type="text" name="modal-username" placeholder="' + r.params.modalUsernamePlaceholder + '" class="modal-text-input modal-text-input-double"><input type="password" name="modal-password" placeholder="' + r.params.modalPasswordPlaceholder + '" class="modal-text-input modal-text-input-double">',
        buttons: [{text: r.params.modalButtonCancel}, {text: r.params.modalButtonOk, bold: !0}],
        onClick: function (e, a) {
          var r = i(e).find('.modal-text-input[name="modal-username"]').val(), o = i(e).find('.modal-text-input[name="modal-password"]').val();
          0 === a && n && n(r, o), 1 === a && t && t(r, o)
        }
      })
    }, r.modalPassword = function (e, a, t, n) {
      return "function" == typeof a && (n = arguments[2], t = arguments[1], a = void 0), r.modal({
        text: e || "",
        title: "undefined" == typeof a ? r.params.modalTitle : a,
        afterText: '<input type="password" name="modal-password" placeholder="' + r.params.modalPasswordPlaceholder + '" class="modal-text-input">',
        buttons: [{text: r.params.modalButtonCancel}, {text: r.params.modalButtonOk, bold: !0}],
        onClick: function (e, a) {
          var r = i(e).find('.modal-text-input[name="modal-password"]').val();
          0 === a && n && n(r), 1 === a && t && t(r)
        }
      })
    }, r.showPreloader = function (e) {
      return r.modal({
        title: e || r.params.modalPreloaderTitle,
        text: '<div class="preloader"></div>',
        cssClass: "modal-preloader"
      })
    }, r.hidePreloader = function () {
      r.closeModal(".modal.modal-in")
    }, r.showIndicator = function () {
      i("body").append('<div class="preloader-indicator-overlay"></div><div class="preloader-indicator-modal"><span class="preloader bg-icon-loading-bubbles"></span></div>')
    }, r.hideIndicator = function () {
      i(".preloader-indicator-overlay, .preloader-indicator-modal").remove()
    }, r.toast = function (e) {
      var a = e.icon ? '<i class="' + e.icon + ' icon-larger"></i>' : "", t = e.text || "", n = e.timeout || 1800, r = i('<div class="toast"><div class="toast-inner">' + a + '<div class="toast-text">' + t + "</div></div></div>");
      i("body").append(r), setTimeout(function () {
        r.css("opacity", 0), setTimeout(function () {
          r.remove()
        }, 300)
      }, n)
    }, r.actions = function (e, a) {
      var t, n, o, l = !1;
      1 === arguments.length ? a = e : r.device.ios ? r.device.ipad && (l = !0) : i(window).width() >= 768 && (l = !0), a = a || [], a.length > 0 && !i.isArray(a[0]) && (a = [a]);
      var p;
      if (l) {
        var c = r.params.modalActionsToPopoverTemplate || '<div class="popover actions-popover"><div class="popover-inner">{{#each this}}<div class="list-block"><ul>{{#each this}}{{#if label}}<li class="actions-popover-label {{#if color}}color-{{color}}{{/if}} {{#if bold}}actions-popover-bold{{/if}}">{{text}}</li>{{else}}<li><a href="#" class="item-link list-button {{#if color}}color-{{color}}{{/if}} {{#if bg}}bg-{{bg}}{{/if}} {{#if bold}}actions-popover-bold{{/if}} {{#if disabled}}disabled{{/if}}">{{text}}</a></li>{{/if}}{{/each}}</ul></div>{{/each}}</div></div>';
        r._compiledTemplates.actionsToPopover || (r._compiledTemplates.actionsToPopover = s.compile(c));
        var d = r._compiledTemplates.actionsToPopover(a);
        t = i(r.popover(d, e, !0)), n = ".list-block ul", o = ".list-button"
      } else {
        if (r.params.modalActionsTemplate)r._compiledTemplates.actions || (r._compiledTemplates.actions = s.compile(r.params.modalActionsTemplate)), p = r._compiledTemplates.actions(a); else {
          for (var u = "", m = 0; m < a.length; m++)for (var h = 0; h < a[m].length; h++) {
            0 === h && (u += '<div class="actions-modal-group">');
            var g = a[m][h], v = g.label ? "actions-modal-label" : "actions-modal-button";
            g.bold && (v += " actions-modal-button-bold"), g.color && (v += " color-" + g.color), g.bg && (v += " bg-" + g.bg), g.disabled && (v += " disabled"), u += '<span class="' + v + '">' + g.text + "</span>", h === a[m].length - 1 && (u += "</div>")
          }
          p = '<div class="actions-modal">' + u + "</div>"
        }
        f.innerHTML = p, t = i(f).children(), i("body").append(t[0]), n = ".actions-modal-group", o = ".actions-modal-button"
      }
      var C = t.find(n);
      return C.each(function (e, n) {
        var s = e;
        i(n).children().each(function (e, n) {
          var p, c = e, d = a[s][c];
          !l && i(n).is(o) && (p = i(n)), l && i(n).find(o).length > 0 && (p = i(n).find(o)), p && p.on("click", function (e) {
            d.close !== !1 && r.closeModal(t), d.onClick && d.onClick(t, e)
          })
        })
      }), l || r.openModal(t), t[0]
    }, r.popover = function (e, a, t) {
      function n() {
        e.css({left: "", top: ""});
        var t, n, r, o = e.width(), l = e.height(), p = 0;
        s ? e.removeClass("popover-on-left popover-on-right popover-on-top popover-on-bottom").css({
          left: "",
          top: ""
        }) : (t = e.find(".popover-angle"), p = t.width() / 2, t.removeClass("on-left on-right on-top on-bottom").css({
          left: "",
          top: ""
        }));
        var c = a.outerWidth(), d = a.outerHeight(), u = a.offset(), f = a.parents(".page");
        f.length > 0 && (u.top = u.top - f[0].scrollTop);
        var m = i(window).height(), h = i(window).width(), g = 0, v = 0, C = 0, Y = "top";
        s ? (l < u.top ? g = u.top - l + d : l < m - u.top - d ? (Y = "bottom", g = u.top) : (Y = "bottom", g = u.top), 0 >= g ? g = 5 : g + l >= m && (g = m - l - 5), v = u.left, 5 > v && (v = 5), v + o > h && (v = u.left + c - o), "top" === Y && e.addClass("popover-on-top"), "bottom" === Y && e.addClass("popover-on-bottom")) : (l + p < u.top ? g = u.top - l - p : l + p < m - u.top - d ? (Y = "bottom", g = u.top + d + p) : (Y = "middle", g = d / 2 + u.top - l / 2, C = g, 0 >= g ? g = 5 : g + l >= m && (g = m - l - 5), C -= g), "top" === Y || "bottom" === Y ? (v = c / 2 + u.left - o / 2, C = v, 5 > v && (v = 5), v + o > h && (v = h - o - 5), "top" === Y && t.addClass("on-bottom"), "bottom" === Y && t.addClass("on-top"), C -= v, n = o / 2 - p + C, n = Math.max(Math.min(n, o - 2 * p - 6), 6), t.css({left: n + "px"})) : "middle" === Y && (v = u.left - o - p, t.addClass("on-right"), (5 > v || v + o > h) && (5 > v && (v = u.left + c + p), v + o > h && (v = h - o - 5), t.removeClass("on-right").addClass("on-left")), r = l / 2 - p + C, r = Math.max(Math.min(r, l - 2 * p - 6), 6), t.css({top: r + "px"}))), e.css({
          top: g + "px",
          left: v + "px"
        })
      }

      if ("undefined" == typeof t && (t = !0), "string" == typeof e && e.indexOf("<") >= 0) {
        var o = document.createElement("div");
        if (o.innerHTML = e.trim(), !(o.childNodes.length > 0))return !1;
        e = o.childNodes[0], t && e.classList.add("remove-on-close"), i("body").append(e)
      }
      if (e = i(e), a = i(a), 0 === e.length || 0 === a.length)return !1;
      0 !== e.find(".popover-angle").length || r.params.material || e.append('<div class="popover-angle"></div>'), e.show();
      var s = r.params.material;
      return n(), i(window).on("resize", n), e.on("close", function () {
        i(window).off("resize", n)
      }), r.openModal(e), e[0]
    }, r.popup = function (e, a) {
      if ("undefined" == typeof a && (a = !0), "string" == typeof e && e.indexOf("<") >= 0) {
        var t = document.createElement("div");
        if (t.innerHTML = e.trim(), !(t.childNodes.length > 0))return !1;
        e = t.childNodes[0], a && e.classList.add("remove-on-close"), i("body").append(e)
      }
      return e = i(e), 0 === e.length ? !1 : (e.show(), r.openModal(e), i(".views").addClass("handleTouchEnd").addClass("popup-transform").transitionEnd(function () {
        i(this).removeClass("handleTouchEnd")
      }), i("body").addClass("perspective"), e[0])
    }, r.pickerModal = function (e, a) {
      if ("undefined" == typeof a && (a = !0), "string" == typeof e && e.indexOf("<") >= 0) {
        if (e = i(e), !(e.length > 0))return !1;
        a && e.addClass("remove-on-close"), i("body").append(e[0])
      }
      return e = i(e), 0 === e.length ? !1 : (e.show(), r.openModal(e), e[0])
    }, r.loginScreen = function (e) {
      return e || (e = ".login-screen"), e = i(e), 0 === e.length ? !1 : (e.show(), r.openModal(e), e[0])
    }, r.openModal = function (e) {
      e = i(e);
      var a = e.hasClass("modal");
      if (i(".modal.modal-in:not(.modal-out)").length && r.params.modalStack && a)return void r.modalStack.push(function () {
        r.openModal(e)
      });
      if (!0 !== e.data("f7-modal-shown")) {
        e.data("f7-modal-shown", !0), e.once("close", function () {
          e.removeData("f7-modal-shown")
        });
        var t = (e.hasClass("popover"), e.hasClass("popup")), n = e.hasClass("login-screen"), o = e.hasClass("picker-modal");
        a && (e.show(), e.css({marginTop: -Math.round(e.outerHeight() / 2) + "px"}));
        var s;
        n || o || (0 !== i(".modal-overlay").length || t || i("body").append('<div class="modal-overlay"></div>'), 0 === i(".popup-overlay").length && t && i("body").append('<div class="popup-overlay"></div>'), s = i(t ? ".popup-overlay" : ".modal-overlay"));
        {
          e[0].clientLeft
        }
        return e.trigger("open"), o && i("body").addClass("with-picker-modal"), e.find("." + r.params.viewClass).length > 0 && (e.find(".page").each(function () {
          r.initPageWithCallback(this)
        }), e.find(".navbar").each(function () {
          r.initNavbarWithCallback(this)
        })), n || o || s.addClass("modal-overlay-visible"), e.removeClass("modal-out").addClass("modal-in").transitionEnd(function (a) {
          e.trigger(e.hasClass("modal-out") ? "closed" : "opened")
        }), !0
      }
    }, r.closeModal = function (e) {
      if (e = i(e || ".modal-in"), "undefined" == typeof e || 0 !== e.length) {
        var a = e.hasClass("modal"), t = e.hasClass("popover"), n = e.hasClass("popup"), o = e.hasClass("login-screen"), s = e.hasClass("picker-modal"), l = e.hasClass("remove-on-close"), p = i(n ? ".popup-overlay" : ".modal-overlay");
        if (n ? (e.length === i(".popup.modal-in").length && p.removeClass("modal-overlay-visible"), i(".views").addClass("handleTouchEnd").removeClass("popup-transform").transitionEnd(function () {
            i(this).removeClass("handleTouchEnd")
          }), i("body").removeClass("perspective")) : s || p.removeClass("modal-overlay-visible"), e.trigger("close"), s && (i("body").removeClass("with-picker-modal"), i("body").addClass("picker-modal-closing")), t)e.removeClass("modal-in modal-out").trigger("closed").hide(), l && e.remove(); else {
          if (!e.hasClass("modal-in"))return !1;
          e.removeClass("modal-in").addClass("modal-out").transitionEnd(function (a) {
            e.trigger(e.hasClass("modal-out") ? "closed" : "opened"), s && i("body").removeClass("picker-modal-closing"), n || o || s ? (e.removeClass("modal-out").hide(), l && e.length > 0 && e.remove()) : e.remove()
          }), a && r.params.modalStack && r.modalStackClearQueue()
        }
        return !0
      }
    }, r.allowPanelOpen = !0, r.togglePanel = function (e) {
      if (!r.allowPanelOpen)return !1;
      var a = i(".panel-" + e);
      return 0 === a.length ? !1 : void(a.hasClass("active") ? r.closePanel() : r.openPanel(e))
    }, r.openPanel = function (e) {
      function a() {
        o.transitionEnd(function (e) {
          i(e.target).is(o) ? (t.trigger(t.hasClass("active") ? "opened" : "closed"), r.allowPanelOpen = !0) : a()
        })
      }

      if (!r.allowPanelOpen)return !1;
      var t = i(".panel-" + e);
      if (0 === t.length || t.hasClass("active"))return !1;
      r.closePanel(), r.allowPanelOpen = !1;
      var n = t.hasClass("panel-reveal") ? "reveal" : "cover";
      t.css({display: "block"}).addClass("active"), t.trigger("open"), t.find("." + r.params.viewClass).length > 0 && r.sizeNavbars && r.sizeNavbars(t.find("." + r.params.viewClass)[0]);
      var o = (t[0].clientLeft, "reveal" === n ? i("." + r.params.viewsClass) : t);
      return a(), i("body").addClass("with-panel-" + e + "-" + n), !0
    }, r.closePanel = function () {
      var e = i(".panel.active");
      if (0 === e.length)return !1;
      var a = e.hasClass("panel-reveal") ? "reveal" : "cover", t = e.hasClass("panel-left") ? "left" : "right";
      e.removeClass("active");
      var n = "reveal" === a ? i("." + r.params.viewsClass) : e;
      e.trigger("close"), r.allowPanelOpen = !1, n.transitionEnd(function () {
        e.hasClass("active") || (e.css({display: ""}), e.trigger("closed"), i("body").removeClass("panel-closing"), r.allowPanelOpen = !0)
      }), i("body").addClass("panel-closing").removeClass("with-panel-" + t + "-" + a)
    }, r.initSwipePanels = function () {
      function e(e) {
        if (r.allowPanelOpen && (r.params.swipePanel || r.params.swipePanelOnlyClose) && !s && !(i(".modal-in, .photo-browser-in").length > 0 || !r.params.swipePanelCloseOpposite && !r.params.swipePanelOnlyClose && i(".panel.active").length > 0 && !n.hasClass("active"))) {
          if (C.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, C.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, r.params.swipePanelCloseOpposite || r.params.swipePanelOnlyClose) {
            if (i(".panel.active").length > 0)o = i(".panel.active").hasClass("panel-left") ? "left" : "right"; else {
              if (r.params.swipePanelOnlyClose)return;
              o = r.params.swipePanel
            }
            if (!o)return;

          }
          if (n = i(".panel.panel-" + o), f = n.hasClass("active"), r.params.swipePanelActiveArea && !f) {
            if ("left" === o && C.x > r.params.swipePanelActiveArea)return;
            if ("right" === o && C.x < window.innerWidth - r.params.swipePanelActiveArea)return
          }
          l = !1, s = !0, p = void 0, c = (new Date).getTime(), g = void 0
        }
      }

      function a(e) {
        if (s && !e.f7PreventPanelSwipe) {
          var a = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, t = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY;
          if ("undefined" == typeof p && (p = !!(p || Math.abs(t - C.y) > Math.abs(a - C.x))), p)return void(s = !1);
          if (!g && (g = a > C.x ? "to-right" : "to-left", "left" === o && "to-left" === g && !n.hasClass("active") || "right" === o && "to-right" === g && !n.hasClass("active")))return void(s = !1);
          if (r.params.swipePanelNoFollow) {
            var i = (new Date).getTime() - c;
            return 300 > i && ("to-left" === g && ("right" === o && r.openPanel(o), "left" === o && n.hasClass("active") && r.closePanel()), "to-right" === g && ("left" === o && r.openPanel(o), "right" === o && n.hasClass("active") && r.closePanel())), s = !1, void(l = !1)
          }
          l || (h = n.hasClass("panel-cover") ? "cover" : "reveal", f || (n.show(), v.show()), m = n[0].offsetWidth, n.transition(0), n.find("." + r.params.viewClass).length > 0 && r.sizeNavbars && r.sizeNavbars(n.find("." + r.params.viewClass)[0])), l = !0, e.preventDefault();
          var S = f ? 0 : -r.params.swipePanelThreshold;
          "right" === o && (S = -S), d = a - C.x + S, "right" === o ? (u = d - (f ? m : 0), u > 0 && (u = 0), -m > u && (u = -m)) : (u = d + (f ? m : 0), 0 > u && (u = 0), u > m && (u = m)), "reveal" === h ? (Y.transform("translate3d(" + u + "px,0,0)").transition(0), v.transform("translate3d(" + u + "px,0,0)"), r.pluginHook("swipePanelSetTransform", Y[0], n[0], Math.abs(u / m))) : (n.transform("translate3d(" + u + "px,0,0)").transition(0), r.pluginHook("swipePanelSetTransform", Y[0], n[0], Math.abs(u / m)))
        }
      }

      function t(e) {
        if (!s || !l)return s = !1, void(l = !1);
        s = !1, l = !1;
        var a, t = (new Date).getTime() - c, p = 0 === u || Math.abs(u) === m;
        if (a = f ? u === -m ? "reset" : 300 > t && Math.abs(u) >= 0 || t >= 300 && Math.abs(u) <= m / 2 ? "left" === o && u === m ? "reset" : "swap" : "reset" : 0 === u ? "reset" : 300 > t && Math.abs(u) > 0 || t >= 300 && Math.abs(u) >= m / 2 ? "swap" : "reset", "swap" === a && (r.allowPanelOpen = !0, f ? (r.closePanel(), p && (n.css({display: ""}), i("body").removeClass("panel-closing"))) : r.openPanel(o), p && (r.allowPanelOpen = !0)), "reset" === a)if (f)r.allowPanelOpen = !0, r.openPanel(o); else if (r.closePanel(), p)r.allowPanelOpen = !0, n.css({display: ""}); else {
          var d = "reveal" === h ? Y : n;
          i("body").addClass("panel-closing"), d.transitionEnd(function () {
            r.allowPanelOpen = !0, n.css({display: ""}), i("body").removeClass("panel-closing")
          })
        }
        "reveal" === h && (Y.transition(""), Y.transform("")), n.transition("").transform(""), v.css({display: ""}).transform("")
      }

      var n, o;
      if (r.params.swipePanel) {
        if (n = i(".panel.panel-" + r.params.swipePanel), o = r.params.swipePanel, 0 === n.length)return
      } else {
        if (!r.params.swipePanelOnlyClose)return;
        if (0 === i(".panel").length)return
      }
      var s, l, p, c, d, u, f, m, h, g, v = i(".panel-overlay"), C = {}, Y = i("." + r.params.viewsClass);
      i(document).on(r.touchEvents.start, e), i(document).on(r.touchEvents.move, a), i(document).on(r.touchEvents.end, t)
    }, r.initImagesLazyLoad = function (e) {
      function a(e) {
        function t() {
          e.removeClass("lazy").addClass("lazy-loaded"), n ? e.css("background-image", "url(" + o + ")") : e.attr("src", o), r.params.imagesLazyLoadSequential && (u = !1, d.length > 0 && a(d.shift()))
        }

        e = i(e);
        var n = e.attr("data-background"), o = n ? n : e.attr("data-src");
        if (o) {
          if (r.params.imagesLazyLoadSequential && u)return void(d.indexOf(e[0]) < 0 && d.push(e[0]));
          u = !0;
          var s = new Image;
          s.onload = t, s.onerror = t, s.src = o
        }
      }

      function t() {
        l = e.find(".lazy"), l.each(function (e, t) {
          t = i(t), n(t[0]) && a(t)
        })
      }

      function n(e) {
        var a = e.getBoundingClientRect(), t = r.params.imagesLazyLoadThreshold || 0;
        return a.top >= 0 - t && a.left >= 0 - t && a.top <= window.innerHeight + t
      }

      function o(a) {
        var n = a ? "off" : "on";
        l[n]("lazy", t), e[n]("lazy", t), p[n]("lazy", t), p[n]("scroll", t), i(window)[n]("resize", t)
      }

      function s() {
        o(!0)
      }

      e = i(e);
      var l;
      if (e.hasClass("lazy") ? (l = e, e = l.parents(".page")) : l = e.find(".lazy"), 0 !== l.length) {
        var p;
        if (e.hasClass("page-content") ? (p = e, e = e.parents(".page")) : p = e.find(".page-content"), 0 !== p.length) {
          var c = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABJJREFUeF4FwIEIAAAAAKD9qY8AAgABdDtSRwAAAABJRU5ErkJggg==";
          "string" == typeof r.params.imagesLazyLoadPlaceholder && (c = r.params.imagesLazyLoadPlaceholder), r.params.imagesLazyLoadPlaceholder !== !1 && l.each(function () {
            i(this).attr("data-src") && i(this).attr("src", c)
          });
          var d = [], u = !1;
          e[0].f7DestroyImagesLazyLoad = s, o(), e.hasClass("page") && e.once("pageBeforeRemove", s), t(), e.once("pageAfterAnimation", t)
        }
      }
    }, r.destroyImagesLazyLoad = function (e) {
      e = i(e), e.length > 0 && e[0].f7DestroyImagesLazyLoad && e[0].f7DestroyLazyLoad()
    }, r.reinitImagesLazyLoad = function (e) {
      e = i(e), e.length > 0 && e.trigger("lazy")
    };
    var m = function (e, a) {
      var t = {
        autoLayout: !0,
        newMessagesFirst: !1,
        messageTemplate: '{{#if day}}<div class="messages-date">{{day}} {{#if time}}, <span>{{time}}</span>{{/if}}</div>{{/if}}<div class="message message-{{type}} {{#if hasImage}}message-pic{{/if}} {{#if avatar}}message-with-avatar{{/if}} {{#if position}}message-appear-from-{{position}}{{/if}}">{{#if name}}<div class="message-name">{{name}}</div>{{/if}}<div class="message-text">{{text}}</div>{{#if avatar}}<div class="message-avatar" style="background-image:url({{avatar}})"></div>{{/if}}{{#if label}}<div class="message-label">{{label}}</div>{{/if}}</div>'
      };
      a = a || {};
      for (var n in t)("undefined" == typeof a[n] || null === a[n]) && (a[n] = t[n]);
      var r = this;
      return r.params = a, r.container = i(e), 0 !== r.container.length ? (r.params.autoLayout && r.container.addClass("messages-auto-layout"), r.params.newMessagesFirst && r.container.addClass("messages-new-first"), r.pageContainer = r.container.parents(".page").eq(0), r.pageContent = r.pageContainer.find(".page-content"), r.template = Template7.compile(r.params.messageTemplate), r.layout = function () {
        r.container.hasClass("messages-auto-layout") || r.container.addClass("messages-auto-layout"), r.container.find(".message").each(function () {
          var e = i(this);
          e.find(".message-text img").length > 0 && e.addClass("message-pic"), e.find(".message-avatar").length > 0 && e.addClass("message-with-avatar")
        }), r.container.find(".message").each(function () {
          var e = i(this), a = e.hasClass("message-sent"), t = e.next(".message-" + (a ? "sent" : "received")), n = e.prev(".message-" + (a ? "sent" : "received"));
          0 === t.length ? e.addClass("message-last message-with-tail") : e.removeClass("message-last message-with-tail"), 0 === n.length ? e.addClass("message-first") : e.removeClass("message-first"), n.length > 0 && n.find(".message-name").length > 0 && e.find(".message-name").length > 0 && n.find(".message-name").text() !== e.find(".message-name").text() && (n.addClass("message-last message-with-tail"), e.addClass("message-first"))
        })
      }, r.appendMessage = function (e, a) {
        return r.addMessage(e, "append", a)
      }, r.prependMessage = function (e, a) {
        return r.addMessage(e, "prepend", a)
      }, r.addMessage = function (e, a, t) {
        return r.addMessages([e], a, t)
      }, r.addMessages = function (e, a, t) {
        "undefined" == typeof t && (t = !0), "undefined" == typeof a && (a = r.params.newMessagesFirst ? "prepend" : "append");
        var n, o = "";
        for (n = 0; n < e.length; n++) {
          var i = e[n] || {};
          i.type = i.type || "sent", i.text && (i.hasImage = i.text.indexOf("<img") >= 0, t && (i.position = "append" === a ? "bottom" : "top"), o += r.template(i))
        }
        var s, l;
        "prepend" === a && (s = r.pageContent[0].scrollHeight, l = r.pageContent[0].scrollTop), r.container[a](o), r.params.autoLayout && r.layout(), "prepend" === a && (r.pageContent[0].scrollTop = l + (r.pageContent[0].scrollHeight - s)), ("append" === a && !r.params.newMessagesFirst || "prepend" === a && r.params.newMessagesFirst) && r.scrollMessages(t ? void 0 : 0);
        var p = r.container.find(".message");
        if (1 === e.length)return "append" === a ? p[p.length - 1] : p[0];
        var c = [];
        if ("append" === a)for (n = p.length - e.length; n < p.length; n++)c.push(p[n]); else for (n = 0; n < e.length; n++)c.push(p[n]);
        return c
      }, r.removeMessage = function (e) {
        return e = i(e), 0 === e.length ? !1 : (e.remove(), r.params.autoLayout && r.layout(), !0)
      }, r.removeMessages = function (e) {
        r.removeMessage(e)
      }, r.clean = function () {
        r.container.html("")
      }, r.scrollMessages = function (e, a) {
        "undefined" == typeof e && (e = 400);
        var t, n = r.pageContent[0].scrollTop;
        if ("undefined" != typeof a)t = a; else if (t = r.params.newMessagesFirst ? 0 : r.pageContent[0].scrollHeight - r.pageContent[0].offsetHeight, t === n)return;
        r.pageContent.scrollTop(t, e)
      }, r.init = function () {
        r.params.messages ? r.addMessages(r.params.messages, void 0, !1) : (r.params.autoLayout && r.layout(), r.scrollMessages(0))
      }, r.destroy = function () {
        r = null
      }, r.init(), r.container[0].f7Messages = r, r) : void 0
    };
    r.messages = function (e, a) {
      return new m(e, a)
    }, r.initPageMessages = function (e) {
      function a() {
        n.destroy(), e.off("pageBeforeRemove", a)
      }

      e = i(e);
      var t = e.find(".messages");
      if (0 !== t.length && t.hasClass("messages-init")) {
        var n = r.messages(t, t.dataset());
        e.hasClass("page") && e.on("pageBeforeRemove", a)
      }
    }, r.swipeoutOpenedEl = void 0, r.allowSwipeout = !0, r.initSwipeout = function (e) {
      function a(e) {
        r.allowSwipeout && (s = !1, o = !0, l = void 0, P.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, P.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, p = (new Date).getTime())
      }

      function t(e) {
        if (o) {
          var a = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, t = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY;
          if ("undefined" == typeof l && (l = !!(l || Math.abs(t - P.y) > Math.abs(a - P.x))), l)return void(o = !1);
          if (!s) {
            if (i(".list-block.sortable-opened").length > 0)return;
            d = i(this), u = d.find(".swipeout-content"), f = d.find(".swipeout-actions-right"), m = d.find(".swipeout-actions-left"), h = g = S = T = L = w = null, X = m.hasClass("swipeout-actions-no-fold") || r.params.swipeoutActionsNoFold, J = f.hasClass("swipeout-actions-no-fold") || r.params.swipeoutActionsNoFold, m.length > 0 && (h = m.outerWidth(), S = m.children("a"), w = m.find(".swipeout-overswipe")), f.length > 0 && (g = f.outerWidth(), T = f.children("a"), L = f.find(".swipeout-overswipe")), C = d.hasClass("swipeout-opened"), C && (Y = d.find(".swipeout-actions-left.swipeout-actions-opened").length > 0 ? "left" : "right"), d.removeClass("transitioning"), r.params.swipeoutNoFollow || (d.find(".swipeout-actions-opened").removeClass("swipeout-actions-opened"), d.removeClass("swipeout-opened"))
          }
          if (s = !0, e.preventDefault(), c = a - P.x, v = c, C && ("right" === Y ? v -= g : v += h), v > 0 && 0 === m.length || 0 > v && 0 === f.length) {
            if (!C)return void(o = s = !1);
            v = 0
          }
          Z = 0 > v ? "to-left" : v > 0 ? "to-right" : Z ? Z : "to-left";
          var n, p, M;
          if (e.f7PreventPanelSwipe = !0, r.params.swipeoutNoFollow)return C ? ("right" === Y && c > 0 && r.swipeoutClose(d), "left" === Y && 0 > c && r.swipeoutClose(d)) : (0 > c && f.length > 0 && r.swipeoutOpen(d, "right"), c > 0 && m.length > 0 && r.swipeoutOpen(d, "left")), o = !1, void(s = !1);
          b = !1, y = !1;
          var D;
          if (f.length > 0)for (M = v / g, -g > v && (v = -g - Math.pow(-v - g, .8), L.length > 0 && (y = !0)), n = 0; n < T.length; n++)"undefined" == typeof T[n]._buttonOffset && (T[n]._buttonOffset = T[n].offsetLeft), p = T[n]._buttonOffset, D = i(T[n]), L.length > 0 && D.hasClass("swipeout-overswipe") && D.css({left: (y ? -p : 0) + "px"}), D.transform("translate3d(" + (v - p * (1 + Math.max(M, -1))) + "px,0,0)");
          if (m.length > 0)for (M = v / h, v > h && (v = h + Math.pow(v - h, .8), w.length > 0 && (b = !0)), n = 0; n < S.length; n++)"undefined" == typeof S[n]._buttonOffset && (S[n]._buttonOffset = h - S[n].offsetLeft - S[n].offsetWidth), p = S[n]._buttonOffset, D = i(S[n]), w.length > 0 && D.hasClass("swipeout-overswipe") && D.css({left: (b ? p : 0) + "px"}), S.length > 1 && D.css("z-index", S.length - n), D.transform("translate3d(" + (v + p * (1 - Math.min(M, 1))) + "px,0,0)");
          u.transform("translate3d(" + v + "px,0,0)")
        }
      }

      function n(e) {
        if (!o || !s)return o = !1, void(s = !1);
        o = !1, s = !1;
        var a, t, n, l, Y, w, L = (new Date).getTime() - p;
        if (w = "to-left" === Z ? J : X, n = "to-left" === Z ? f : m, t = "to-left" === Z ? g : h, a = 300 > L && (-10 > c && "to-left" === Z || c > 10 && "to-right" === Z) || L >= 300 && Math.abs(v) > t / 2 ? "open" : "close", 300 > L && (0 === Math.abs(v) && (a = "close"), Math.abs(v) === t && (a = "open")), "open" === a) {
          r.swipeoutOpenedEl = d, d.trigger("open"), d.addClass("swipeout-opened transitioning");
          var P = "to-left" === Z ? -t : t;
          if (u.transform("translate3d(" + P + "px,0,0)"), n.addClass("swipeout-actions-opened"), l = "to-left" === Z ? T : S)for (Y = 0; Y < l.length; Y++)i(l[Y]).transform("translate3d(" + P + "px,0,0)");
          y && f.find(".swipeout-overswipe")[0].click(), b && m.find(".swipeout-overswipe")[0].click()
        } else d.trigger("close"), r.swipeoutOpenedEl = void 0, d.addClass("transitioning").removeClass("swipeout-opened"), u.transform(""), n.removeClass("swipeout-actions-opened");
        var M;
        if (S && S.length > 0 && S !== l)for (Y = 0; Y < S.length; Y++)M = S[Y]._buttonOffset, "undefined" == typeof M && (S[Y]._buttonOffset = h - S[Y].offsetLeft - S[Y].offsetWidth), i(S[Y]).transform("translate3d(" + M + "px,0,0)");
        if (T && T.length > 0 && T !== l)for (Y = 0; Y < T.length; Y++)M = T[Y]._buttonOffset, "undefined" == typeof M && (T[Y]._buttonOffset = T[Y].offsetLeft), i(T[Y]).transform("translate3d(" + -M + "px,0,0)");
        u.transitionEnd(function (e) {
          C && "open" === a || closed && "close" === a || (d.trigger("open" === a ? "opened" : "closed"), C && "close" === a && (f.length > 0 && T.transform(""), m.length > 0 && S.transform("")))
        })
      }

      var o, s, l, p, c, d, u, f, m, h, g, v, C, Y, S, T, Z, w, L, b, y, X, J, P = {};
      i(document).on(r.touchEvents.start, function (e) {
        if (r.swipeoutOpenedEl) {
          var a = i(e.target);
          r.swipeoutOpenedEl.is(a[0]) || a.parents(".swipeout").is(r.swipeoutOpenedEl) || a.hasClass("modal-in") || a.hasClass("modal-overlay") || a.hasClass("actions-modal") || a.parents(".actions-modal.modal-in, .modal.modal-in").length > 0 || r.swipeoutClose(r.swipeoutOpenedEl)
        }
      }), e ? (i(e).on(r.touchEvents.start, a), i(e).on(r.touchEvents.move, t), i(e).on(r.touchEvents.end, n)) : (i(document).on(r.touchEvents.start, ".swipeout", a), i(document).on(r.touchEvents.move, ".swipeout", t), i(document).on(r.touchEvents.end, ".swipeout", n))
    }, r.swipeoutOpen = function (e, a, t) {
      if (e = i(e), 2 === arguments.length && "function" == typeof arguments[1] && (t = a), 0 !== e.length && (e.length > 1 && (e = i(e[0])), e.hasClass("swipeout") && !e.hasClass("swipeout-opened"))) {
        a || (a = e.find(".swipeout-actions-right").length > 0 ? "right" : "left");
        var n = e.find(".swipeout-actions-" + a);
        if (0 !== n.length) {
          {
            n.hasClass("swipeout-actions-no-fold") || r.params.swipeoutActionsNoFold
          }
          e.trigger("open").addClass("swipeout-opened").removeClass("transitioning"), n.addClass("swipeout-actions-opened");
          var o, s = n.children("a"), l = n.outerWidth(), p = "right" === a ? -l : l;
          if (s.length > 1) {
            for (o = 0; o < s.length; o++)"right" === a ? i(s[o]).transform("translate3d(" + -s[o].offsetLeft + "px,0,0)") : i(s[o]).css("z-index", s.length - o).transform("translate3d(" + (l - s[o].offsetWidth - s[o].offsetLeft) + "px,0,0)");
            {
              s[1].clientLeft
            }
          }
          for (e.addClass("transitioning"), o = 0; o < s.length; o++)i(s[o]).transform("translate3d(" + p + "px,0,0)");
          e.find(".swipeout-content").transform("translate3d(" + p + "px,0,0)").transitionEnd(function () {
            e.trigger("opened"), t && t.call(e[0])
          }), r.swipeoutOpenedEl = e
        }
      }
    }, r.swipeoutClose = function (e, a) {
      function t() {
        r.allowSwipeout = !0, s.transform(""), e.trigger("closed"), a && a.call(e[0]), p && clearTimeout(p)
      }

      if (e = i(e), 0 !== e.length && e.hasClass("swipeout-opened")) {
        var n = e.find(".swipeout-actions-opened").hasClass("swipeout-actions-right") ? "right" : "left", o = e.find(".swipeout-actions-opened").removeClass("swipeout-actions-opened"), s = (o.hasClass("swipeout-actions-no-fold") || r.params.swipeoutActionsNoFold, o.children("a")), l = o.outerWidth();
        r.allowSwipeout = !1, e.trigger("close"), e.removeClass("swipeout-opened").addClass("transitioning");
        var p;
        e.find(".swipeout-content").transform("translate3d(0px,0,0)").transitionEnd(t), p = setTimeout(t, 500);
        for (var c = 0; c < s.length; c++)i(s[c]).transform("right" === n ? "translate3d(" + -s[c].offsetLeft + "px,0,0)" : "translate3d(" + (l - s[c].offsetWidth - s[c].offsetLeft) + "px,0,0)"), i(s[c]).css({left: "0px"});
        r.swipeoutOpenedEl && r.swipeoutOpenedEl[0] === e[0] && (r.swipeoutOpenedEl = void 0)
      }
    }, r.swipeoutDelete = function (e, a) {
      if (e = i(e), 0 !== e.length) {
        e.length > 1 && (e = i(e[0])), r.swipeoutOpenedEl = void 0, e.trigger("delete"), e.css({height: e.outerHeight() + "px"});
        {
          e[0].clientLeft
        }
        e.css({height: "0px"}).addClass("deleting transitioning").transitionEnd(function () {
          if (e.trigger("deleted"), a && a.call(e[0]), e.parents(".virtual-list").length > 0) {
            var t = e.parents(".virtual-list")[0].f7VirtualList, n = e[0].f7VirtualListIndex;
            t && "undefined" != typeof n && t.deleteItem(n)
          } else e.remove()
        });
        var t = "-100%";
        e.find(".swipeout-content").transform("translate3d(" + t + ",0,0)")
      }
    }, r.sortableToggle = function (e) {
      return e = i(e), 0 === e.length && (e = i(".list-block.sortable")), e.toggleClass("sortable-opened"), e.trigger(e.hasClass("sortable-opened") ? "open" : "close"), e
    }, r.sortableOpen = function (e) {
      return e = i(e), 0 === e.length && (e = i(".list-block.sortable")), e.addClass("sortable-opened"), e.trigger("open"), e
    }, r.sortableClose = function (e) {
      return e = i(e), 0 === e.length && (e = i(".list-block.sortable")), e.removeClass("sortable-opened"), e.trigger("close"), e
    }, r.initSortable = function () {
      function e(e) {
        o = !1, n = !0, s = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, p = i(this).parent(), d = p.parent().find("li"), g = p.parents(".sortable"), e.preventDefault(), r.allowPanelOpen = r.allowSwipeout = !1
      }

      function a(e) {
        if (n && p) {
          var a = ("touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
          o || (p.addClass("sorting"), g.addClass("sortable-sorting"), u = p[0].offsetTop, f = p.parent().height() - p[0].offsetTop - p.height(), c = p[0].offsetHeight), o = !0, e.preventDefault(), e.f7PreventPanelSwipe = !0, l = a - s;
          var t = l;
          -u > t && (t = -u), t > f && (t = f), p.transform("translate3d(0," + t + "px,0)"), h = m = void 0, d.each(function () {
            var e = i(this);
            if (e[0] !== p[0]) {
              var a = e[0].offsetTop, n = e.height(), r = p[0].offsetTop + t;
              r >= a - n / 2 && p.index() < e.index() ? (e.transform("translate3d(0, " + -c + "px,0)"), m = e, h = void 0) : a + n / 2 >= r && p.index() > e.index() ? (e.transform("translate3d(0, " + c + "px,0)"), m = void 0, h || (h = e)) : i(this).transform("translate3d(0, 0%,0)")
            }
          })
        }
      }

      function t(e) {
        if (r.allowPanelOpen = r.allowSwipeout = !0, !n || !o)return n = !1, void(o = !1);
        e.preventDefault(), d.transform(""), p.removeClass("sorting"), g.removeClass("sortable-sorting");
        var a, t, i;
        m && (p.insertAfter(m), p.trigger("sort")), h && (p.insertBefore(h), p.trigger("sort")), (m || h) && g.hasClass("virtual-list") && (a = g[0].f7VirtualList, t = p[0].f7VirtualListIndex, i = h ? h[0].f7VirtualListIndex : m[0].f7VirtualListIndex, a && a.moveItem(t, i)), m = h = void 0, n = !1, o = !1
      }

      var n, o, s, l, p, c, d, u, f, m, h, g;
      i(document).on(r.touchEvents.start, ".list-block.sortable .sortable-handler", e), r.support.touch ? (i(document).on(r.touchEvents.move, ".list-block.sortable .sortable-handler", a), i(document).on(r.touchEvents.end, ".list-block.sortable .sortable-handler", t)) : (i(document).on(r.touchEvents.move, a), i(document).on(r.touchEvents.end, t))
    }, r.initSmartSelects = function (e) {
      var a = i(e);
      if (0 !== a.length) {
        var t;
        t = a.is(".smart-select") ? a : a.find(".smart-select"), 0 !== t.length && t.each(function () {
          var e = i(this), a = e.find("select");
          if (0 !== a.length) {
            var t = a[0];
            if (0 !== t.length) {
              for (var n = [], r = 0; r < t.length; r++)t[r].selected && n.push(t[r].textContent.trim());
              var o = e.find(".item-after");
              if (0 === o.length)e.find(".item-inner").append('<div class="item-after">' + n.join(", ") + "</div>"); else {
                var s = o.text();
                if (o.hasClass("smart-select-value"))for (r = 0; r < t.length; r++)t[r].selected = t[r].textContent.trim() === s.trim(); else o.text(n.join(", "))
              }
            }
          }
        })
      }
    }, r.smartSelectAddOption = function (e, a, t) {
      e = i(e);
      var n = e.parents(".smart-select");
      "undefined" == typeof t ? e.append(a) : i(a).insertBefore(e.find("option").eq(t)), r.initSmartSelects(n);
      var o = n.find("select").attr("name"), s = i('.page.smart-select-page[data-select-name="' + o + '"]').length > 0;
      s && r.smartSelectOpen(n, !0)
    }, r.smartSelectOpen = function (e, a) {
      function t(a) {
        if (g) {
          var t = r.virtualList(i(a).find(".virtual-list"), {
            items: H,
            template: N,
            height: v || void 0,
            searchByItem: function (e, a, t) {
              return t.text.toLowerCase().indexOf(e.trim().toLowerCase()) >= 0 ? !0 : !1
            }
          });
          i(a).once("popup" === l ? "closed" : "pageBeforeRemove", function () {
            t && t.destroy && t.destroy()
          })
        }
        i(a).on("change", 'input[name="' + Q + '"]', function () {
          var t = this, n = t.value, s = [];
          if ("checkbox" === t.type) {
            for (var p = 0 === i(a).find("input:checked").length, c = 0; c < C.options.length; c++) {
              var d = C.options[c];
              if ("" === t.value && t.checked === !0)d.selected = "" === d.value ? !0 : !1; else {
                if ("" === t.value && t.checked === !1)return void(t.checked = !0);
                t.checked === !1 && p && "" === d.value && (d.selected = !0), t.checked === !0 && d.selected === !0 && "" === d.value && (d.selected = !1), d.value === n && (d.selected = t.checked)
              }
              d.selected ? i(d).attr("selected", !0) : i(d).removeAttr("selected"), d.selected && s.push(d.textContent.trim())
            }
            i(a).find('input[name="' + Q + '"]').each(function () {
              "" === t.value && t.checked === !0 && "" !== this.value && (this.checked = !1), "" !== t.value && t.checked === !0 && "" === this.value && (this.checked = !1), "" !== t.value && t.checked === !1 && p && "" === this.value && (this.checked = !0)
            })
          } else s = [e.find('option[value="' + n + '"]').text()], C.value = n;
          Y.trigger("change"), e.find(".item-after").text(s.join(", ")), f && "radio" === B && ("popup" === l ? r.closeModal(q) : o.router.back())
        })
      }

      function n(e) {
        var a = e.detail.page;
        a.name === z && t(a.container)
      }

      if (e = i(e), 0 !== e.length) {
        var o = e.parents("." + r.params.viewClass);
        if (0 !== o.length) {
          o = o[0].f7View;
          var l = e.attr("data-open-in");
          if (l || (l = r.params.smartSelectInPopup ? "popup" : "page"), "popup" === l) {
            if (i(".popup.smart-select-popup").length > 0)return
          } else if (!o)return;
          var p = e.dataset(), c = p.pageTitle || e.find(".item-title").text(), d = p.backText || r.params.smartSelectBackText, u = p.popupCloseText || p.backText || r.params.smartSelectPopupCloseText, f = void 0 !== p.backOnSelect ? p.backOnSelect : r.params.smartSelectBackOnSelect, m = p.formTheme || r.params.smartSelectFormTheme, h = p.navbarTheme || r.params.smartSelectNavbarTheme, g = p.virtualList, v = p.virtualListHeight, C = e.find("select")[0], Y = i(C), S = Y.dataset();
          if (!(C.disabled || e.hasClass("disabled") || Y.hasClass("disabled"))) {
            for (var T, Z, w, L, b, y, X, J, P, M, D, H = [], x = (new Date).getTime(), B = C.multiple ? "checkbox" : "radio", Q = B + "-" + x, k = C.name, G = 0; G < C.length; G++)T = i(C[G]), T[0].disabled || (D = T.dataset(), w = D.optionImage || S.optionImage, L = D.optionIcon || S.optionIcon, Z = w || L || "checkbox" === B, r.params.material && (Z = w || L), P = D.optionColor, M = D.optionClass, b = T.parent("optgroup")[0], y = b && b.label, X = !1, b && b !== J && (X = !0, J = b), H.push({
              value: T[0].value,
              text: T[0].textContent.trim(),
              selected: T[0].selected,
              group: b,
              groupLabel: y,
              showGroupLabel: X,
              image: w,
              icon: L,
              color: P,
              className: M,
              disabled: T[0].disabled,
              inputType: B,
              id: x,
              hasMedia: Z,
              checkbox: "checkbox" === B,
              inputName: Q,
              test: this,
              material: r.params.material
            }));
            r._compiledTemplates.smartSelectItem || (r._compiledTemplates.smartSelectItem = s.compile(r.params.smartSelectItemTemplate || '{{#if showGroupLabel}}<li class="item-divider">{{groupLabel}}</li>{{/if}}<li{{#if className}} class="{{className}}"{{/if}}><label class="label-{{inputType}} item-content"><input type="{{inputType}}" name="{{inputName}}" value="{{value}}" {{#if selected}}checked{{/if}}>{{#if hasMedia}}<div class="item-media">{{#if checkbox}}<i class="icon icon-form-checkbox"></i>{{/if}}{{#if icon}}<i class="icon {{icon}}"></i>{{/if}}{{#if image}}<img src="{{image}}">{{/if}}</div>{{/if}}<div class="item-inner"><div class="item-title{{#if color}} color-{{color}}{{/if}}">{{text}}</div></div></label></li>'));
            var N = r._compiledTemplates.smartSelectItem, F = "";
            if (!g)for (var W = 0; W < H.length; W++)F += N(H[W]);
            r._compiledTemplates.smartSelectNavbar || (r._compiledTemplates.smartSelectNavbar = s.compile(r.params.smartSelectNavbarTemplate || '<div class="navbar {{#if navbarTheme}}theme-{{navbarTheme}}{{/if}}"><div class="navbar-inner">{{leftTemplate}}<div class="center sliding">{{pageTitle}}</div></div></div>'));
            var E, K = r._compiledTemplates.smartSelectNavbar({
              pageTitle: c,
              backText: d,
              closeText: u,
              openIn: l,
              navbarTheme: h,
              inPopup: "popup" === l,
              inPage: "page" === l,
              leftTemplate: "popup" === l ? r.params.smartSelectPopupCloseTemplate.replace(/{{closeText}}/g, u) : r.params.smartSelectBackTemplate.replace(/{{backText}}/g, d)
            }), R = "", A = "";
            "page" === l ? (E = "static", e.parents(".navbar-through").length > 0 && (E = "through"), e.parents(".navbar-fixed").length > 0 && (E = "fixed"), A = e.parents(".page").hasClass("no-toolbar") ? "no-toolbar" : "", R = e.parents(".page").hasClass("no-navbar") ? "no-navbar" : "navbar-" + E) : E = "fixed";
            var I, O, z = "smart-select-" + Q, _ = "undefined" == typeof e.data("searchbar") ? r.params.smartSelectSearchbar : "true" === e.data("searchbar") ? !0 : !1;
            _ && (I = e.data("searchbar-placeholder") || "Search", O = e.data("searchbar-cancel") || "Cancel");
            var q, V = '<form class="searchbar searchbar-init" data-search-list=".smart-select-list-' + x + '" data-search-in=".item-title"><div class="searchbar-input"><input type="search" placeholder="' + I + '"><a href="#" class="searchbar-clear"></a></div><a href="#" class="searchbar-cancel">' + O + '</a></form><div class="searchbar-overlay"></div>', j = ("through" === E ? K : "") + '<div class="pages">  <div data-page="' + z + '" data-select-name="' + k + '" class="page smart-select-page ' + R + " " + A + '">' + ("fixed" === E ? K : "") + (_ ? V : "") + '    <div class="page-content">' + ("static" === E ? K : "") + '      <div class="list-block media-list ' + (g ? "virtual-list" : "") + " smart-select-list-" + x + " " + (m ? "theme-" + m : "") + '">        <ul>' + (g ? "" : F) + "        </ul>      </div>    </div>  </div></div>";
            "popup" === l ? (a ? (q = i(".popup.smart-select-popup .view"), q.html(j)) : (q = r.popup('<div class="popup smart-select-popup smart-select-popup-' + Q + '"><div class="view navbar-fixed">' + j + "</div></div>"), q = i(q)), r.initPage(q.find(".page")), t(q)) : (i(document).once("pageInit", ".smart-select-page", n), o.router.load({
              content: j,
              reload: a ? !0 : void 0
            }))
          }
        }
      }
    };
    var h = function (e, a) {
      var t = {cols: 1, height: 44, cache: !0, dynamicHeightBufferSize: 1};
      a = a || {};
      for (var n in t)"undefined" == typeof a[n] && (a[n] = t[n]);
      var o = this;
      o.listBlock = i(e), o.params = a, o.items = a.items, a.template && ("string" == typeof a.template ? o.template = s.compile(a.template) : "function" == typeof a.template && (o.template = a.template)), o.pageContent = o.listBlock.parents(".page-content");
      var l;
      "undefined" != typeof o.params.updatableScroll ? l = o.params.updatableScroll : (l = !0, r.device.ios && r.device.osVersion.split(".")[0] < 8 && (l = !1)), o.ul = o.params.ul ? i(o.params.ul) : o.listBlock.children("ul"), 0 === o.ul.length && (o.listBlock.append("<ul></ul>"), o.ul = o.listBlock.children("ul")), o.domCache = {}, o.displayDomCache = {}, o.tempDomElement = document.createElement("ul"), o.lastRepaintY = null, o.fragment = document.createDocumentFragment(), o.filterItems = function (e, a) {
        o.filteredItems = [];
        for (var t = (e[0], e[e.length - 1], 0); t < e.length; t++)o.filteredItems.push(o.items[e[t]]);
        "undefined" == typeof a && (a = !0), a && (o.pageContent[0].scrollTop = 0), o.update()
      }, o.resetFilter = function () {
        o.filteredItems = null, delete o.filteredItems, o.update()
      };
      var p, c, d, u, f, m, h = 0, g = "function" == typeof o.params.height;
      return o.setListSize = function () {
        var e = o.filteredItems || o.items;
        if (p = o.pageContent[0].offsetHeight, g) {
          m = 0, o.heights = [];
          for (var a = 0; a < e.length; a++) {
            var t = o.params.height(e[a]);
            m += t, o.heights.push(t)
          }
        } else m = Math.ceil(e.length / o.params.cols) * o.params.height, c = Math.ceil(p / o.params.height), d = o.params.rowsBefore || 2 * c, u = o.params.rowsAfter || c, f = c + d + u, h = d / 2 * o.params.height;
        l && o.ul.css({height: m + "px"})
      }, o.render = function (e, a) {
        e && (o.lastRepaintY = null);
        var t = -(o.listBlock[0].getBoundingClientRect().top + o.pageContent[0].getBoundingClientRect().top);
        if ("undefined" != typeof a && (t = a), null === o.lastRepaintY || Math.abs(t - o.lastRepaintY) > h || !l && o.pageContent[0].scrollTop + p >= o.pageContent[0].scrollHeight) {
          o.lastRepaintY = t;
          var n, r, i = o.filteredItems || o.items, s = 0, c = 0;
          if (g) {
            var u, m, v = 0;
            for (h = p, u = 0; u < o.heights.length; u++)m = o.heights[u], "undefined" == typeof n && (v + m >= t - 2 * p * o.params.dynamicHeightBufferSize ? n = u : s += m), "undefined" == typeof r && ((v + m >= t + 2 * p * o.params.dynamicHeightBufferSize || u === o.heights.length - 1) && (r = u + 1), c += m), v += m;
            r = Math.min(r, i.length)
          } else n = (parseInt(t / o.params.height) - d) * o.params.cols, 0 > n && (n = 0), r = Math.min(n + f * o.params.cols, i.length);
          var C;
          o.reachEnd = !1;
          for (var Y = n; r > Y; Y++) {
            var S, T;
            T = o.items.indexOf(i[Y]), Y === n && (o.currentFromIndex = T), Y === r - 1 && (o.currentToIndex = T), T === o.items.length - 1 && (o.reachEnd = !0), o.domCache[T] ? S = o.domCache[T] : (o.tempDomElement.innerHTML = o.template ? o.template(i[Y], {index: T}) : o.params.renderItem ? o.params.renderItem(T, i[Y]) : i[Y], S = o.tempDomElement.childNodes[0], o.params.cache && (o.domCache[T] = S)), S.f7VirtualListIndex = T, Y === n && (C = g ? s : Y * o.params.height / o.params.cols), S.style.top = C + "px", o.params.onItemBeforeInsert && o.params.onItemBeforeInsert(o, S), o.fragment.appendChild(S)
          }
          l || (o.ul[0].style.height = g ? c + "px" : Y * o.params.height / o.params.cols + "px"), o.params.onBeforeClear && o.params.onBeforeClear(o, o.fragment), o.ul[0].innerHTML = "", o.params.onItemsBeforeInsert && o.params.onItemsBeforeInsert(o, o.fragment), o.ul[0].appendChild(o.fragment), o.params.onItemsAfterInsert && o.params.onItemsAfterInsert(o, o.fragment), "undefined" != typeof a && e && o.pageContent.scrollTop(a, 0)
        }
      }, o.scrollToItem = function (e) {
        if (e > o.items.length)return !1;
        var a, t = 0;
        if (g)for (var n = 0; e > n; n++)t += o.heights[n]; else t = e * o.params.height;
        return a = o.listBlock[0].offsetTop, o.render(!0, a + t - parseInt(o.pageContent.css("padding-top"), 10)), !0
      }, o.handleScroll = function (e) {
        o.render()
      }, o.handleResize = function (e) {
        o.setListSize(), o.render(!0)
      }, o.attachEvents = function (e) {
        var a = e ? "off" : "on";
        o.pageContent[a]("scroll", o.handleScroll), i(window)[a]("resize", o.handleResize)
      }, o.init = function () {
        o.attachEvents(), o.setListSize(), o.render()
      }, o.appendItems = function (e) {
        for (var a = 0; a < e.length; a++)o.items.push(e[a]);
        o.update()
      }, o.appendItem = function (e) {
        o.appendItems([e])
      }, o.replaceAllItems = function (e) {
        o.items = e, delete o.filteredItems, o.domCache = {}, o.update()
      }, o.replaceItem = function (e, a) {
        o.items[e] = a, o.params.cache && delete o.domCache[e], o.update()
      }, o.prependItems = function (e) {
        for (var a = e.length - 1; a >= 0; a--)o.items.unshift(e[a]);
        if (o.params.cache) {
          var t = {};
          for (var n in o.domCache)t[parseInt(n, 10) + e.length] = o.domCache[n];
          o.domCache = t
        }
        o.update()
      }, o.prependItem = function (e) {
        o.prependItems([e])
      }, o.moveItem = function (e, a) {
        if (e !== a) {
          var t = o.items.splice(e, 1)[0];
          if (a >= o.items.length ? (o.items.push(t), a = o.items.length - 1) : o.items.splice(a, 0, t), o.params.cache) {
            var n = {};
            for (var r in o.domCache) {
              var i = parseInt(r, 10), s = a > e ? e : a, l = a > e ? a : e, p = a > e ? -1 : 1;
              (s > i || i > l) && (n[i] = o.domCache[i]), i === s && (n[l] = o.domCache[i]), i > s && l >= i && (n[i + p] = o.domCache[i])
            }
            o.domCache = n
          }
          o.update()
        }
      }, o.insertItemBefore = function (e, a) {
        if (0 === e)return void o.prependItem(a);
        if (e >= o.items.length)return void o.appendItem(a);
        if (o.items.splice(e, 0, a), o.params.cache) {
          var t = {};
          for (var n in o.domCache) {
            var r = parseInt(n, 10);
            r >= e && (t[r + 1] = o.domCache[r])
          }
          o.domCache = t
        }
        o.update()
      }, o.deleteItems = function (e) {
        for (var a, t = 0, n = 0; n < e.length; n++) {
          var r = e[n];
          "undefined" != typeof a && r > a && (t = -n), r += t, a = e[n];
          var i = o.items.splice(r, 1)[0];
          if (o.filteredItems && o.filteredItems.indexOf(i) >= 0 && o.filteredItems.splice(o.filteredItems.indexOf(i), 1), o.params.cache) {
            var s = {};
            for (var l in o.domCache) {
              var p = parseInt(l, 10);
              p === r ? delete o.domCache[r] : parseInt(l, 10) > r ? s[p - 1] = o.domCache[l] : s[p] = o.domCache[l]
            }
            o.domCache = s
          }
        }
        o.update()
      }, o.deleteAllItems = function () {
        o.items = [], delete o.filteredItems, o.params.cache && (o.domCache = {}), o.update()
      }, o.deleteItem = function (e) {
        o.deleteItems([e])
      }, o.clearCache = function () {
        o.domCache = {}
      }, o.update = function () {
        o.setListSize(), o.render(!0)
      }, o.destroy = function () {
        o.attachEvents(!0), delete o.items, delete o.domCache
      }, o.init(), o.listBlock[0].f7VirtualList = o, o
    };
    r.virtualList = function (e, a) {
      return new h(e, a)
    }, r.reinitVirtualList = function (e) {
      var a = i(e), t = a.find(".virtual-list");
      if (0 !== t.length)for (var n = 0; n < t.length; n++) {
        var r = t[n].f7VirtualList;
        r && r.update()
      }
    }, r.initPullToRefresh = function (e) {
      function a(e) {
        if (p) {
          if ("android" !== r.device.os)return;
          if ("targetTouches"in e && e.targetTouches.length > 1)return
        }
        c = !1, p = !0, d = void 0, v = void 0, S.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, S.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, f = (new Date).getTime(), m = i(this)
      }

      function t(e) {
        if (p) {
          var a = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, t = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY;
          if ("undefined" == typeof d && (d = !!(d || Math.abs(t - S.y) > Math.abs(a - S.x))), !d)return void(p = !1);
          if (g = m[0].scrollTop, "undefined" == typeof v && 0 !== g && (v = !0), !c) {
            if (m.removeClass("transitioning"), g > m[0].offsetHeight)return void(p = !1);
            Y && (C = m.attr("data-ptr-distance"), C.indexOf("%") >= 0 && (C = m[0].offsetHeight * parseInt(C, 10) / 100)), w = m.hasClass("refreshing") ? C : 0, Z = m[0].scrollHeight === m[0].offsetHeight || "ios" !== r.device.os ? !0 : !1
          }
          return c = !0, u = t - S.y, u > 0 && 0 >= g || 0 > g ? ("ios" === r.device.os && parseInt(r.device.osVersion.split(".")[0], 10) > 7 && 0 === g && !v && (Z = !0), Z && (e.preventDefault(), h = Math.pow(u, .85) + w, m.transform("translate3d(0," + h + "px,0)")), Z && Math.pow(u, .85) > C || !Z && u >= 2 * C ? (T = !0, m.addClass("pull-up").removeClass("pull-down")) : (T = !1, m.removeClass("pull-up").addClass("pull-down")), void 0) : (m.removeClass("pull-up pull-down"), void(T = !1))
        }
      }

      function n(e) {
        return p && c ? (h && (m.addClass("transitioning"), h = 0), m.transform(""), T ? (m.addClass("refreshing"), m.trigger("refresh", {
          done: function () {
            r.pullToRefreshDone(m)
          }
        })) : m.removeClass("pull-down"), p = !1, void(c = !1)) : (p = !1, void(c = !1))
      }

      function o() {
        l.off(r.touchEvents.start, a),
          l.off(r.touchEvents.move, t), l.off(r.touchEvents.end, n)
      }

      function s() {
        o(), L.off("pageBeforeRemove", s)
      }

      var l = i(e);
      if (l.hasClass("pull-to-refresh-content") || (l = l.find(".pull-to-refresh-content")), l && 0 !== l.length) {
        var p, c, d, u, f, m, h, g, v, C, Y, S = {}, T = !1, Z = !1, w = 0, L = l.hasClass("page") ? l : l.parents(".page"), b = !1;
        (L.find(".navbar").length > 0 || L.parents(".navbar-fixed, .navbar-through").length > 0 || L.hasClass("navbar-fixed") || L.hasClass("navbar-through")) && (b = !0), L.hasClass("no-navbar") && (b = !1), b || l.addClass("pull-to-refresh-no-navbar"), m = l, m.attr("data-ptr-distance") ? Y = !0 : C = 44, l.on(r.touchEvents.start, a), l.on(r.touchEvents.move, t), l.on(r.touchEvents.end, n), 0 !== L.length && (l[0].f7DestroyPullToRefresh = o, L.on("pageBeforeRemove", s))
      }
    }, r.pullToRefreshDone = function (e) {
      e = i(e), 0 === e.length && (e = i(".pull-to-refresh-content.refreshing")), e.removeClass("refreshing").addClass("transitioning"), e.transitionEnd(function () {
        e.removeClass("transitioning pull-up pull-down")
      })
    }, r.pullToRefreshTrigger = function (e) {
      e = i(e), 0 === e.length && (e = i(".pull-to-refresh-content")), e.hasClass("refreshing") || (e.addClass("transitioning refreshing"), e.trigger("refresh", {
        done: function () {
          r.pullToRefreshDone(e)
        }
      }))
    }, r.destroyPullToRefresh = function (e) {
      e = i(e);
      var a = e.hasClass("pull-to-refresh-content") ? e : e.find(".pull-to-refresh-content");
      0 !== a.length && a[0].f7DestroyPullToRefresh && a[0].f7DestroyPullToRefresh()
    }, r.attachInfiniteScroll = function (e) {
      i(e).on("scroll", t)
    }, r.detachInfiniteScroll = function (e) {
      i(e).off("scroll", t)
    }, r.initInfiniteScroll = function (e) {
      function a() {
        r.detachInfiniteScroll(t), e.off("pageBeforeRemove", a)
      }

      e = i(e);
      var t = e.find(".infinite-scroll");
      0 !== t.length && (r.attachInfiniteScroll(t), e.on("pageBeforeRemove", a))
    }, r.initScrollToolbars = function (e) {
      function a(a) {
        J && (J = !1, e.hasClass("page-on-left") || (f = t[0].scrollTop, v = t[0].scrollHeight, C = t[0].offsetHeight, Y = r.params.showBarsOnPageScrollEnd && f + C >= v - y, T = c.hasClass("navbar-hidden"), Z = d.hasClass("toolbar-hidden"), w = p && p.hasClass("toolbar-hidden"), S = Y ? "show" : u > f ? r.params.showBarsOnPageScrollTop || 44 >= f ? "show" : "hide" : f > 44 + X ? "hide" : "show", "show" === S ? (m && n && T && (r.showNavbar(c), e.removeClass("no-navbar-by-scroll"), T = !1), h && o && Z && (r.showToolbar(d), e.removeClass("no-toolbar-by-scroll"), Z = !1), g && s && w && (r.showToolbar(p), e.removeClass("no-tabbar-by-scroll"), w = !1)) : (m && n && !T && (r.hideNavbar(c), e.addClass("no-navbar-by-scroll"), T = !0), h && o && !Z && (r.hideToolbar(d), e.addClass("no-toolbar-by-scroll"), Z = !0), g && s && !w && (r.hideToolbar(p), e.addClass("no-tabbar-by-scroll"), w = !0)), u = f))
      }

      if (!("android" === r.device.os && r.device.osVersion.substr(0, 3) <= 4.4)) {
        e = i(e);
        var t = e.find(".page-content");
        if (0 !== t.length) {
          var n = (r.params.hideNavbarOnPageScroll || t.hasClass("hide-navbar-on-scroll") || t.hasClass("hide-bars-on-scroll")) && !(t.hasClass("keep-navbar-on-scroll") || t.hasClass("keep-bars-on-scroll")), o = (r.params.hideToolbarOnPageScroll || t.hasClass("hide-toolbar-on-scroll") || t.hasClass("hide-bars-on-scroll")) && !(t.hasClass("keep-toolbar-on-scroll") || t.hasClass("keep-bars-on-scroll")), s = (r.params.hideTabbarOnPageScroll || t.hasClass("hide-tabbar-on-scroll")) && !t.hasClass("keep-tabbar-on-scroll");
          if (n || o || s) {
            var l = t.parents("." + r.params.viewClass);
            if (0 !== l.length) {
              var p, c = l.find(".navbar"), d = l.find(".toolbar");
              s && (p = l.find(".tabbar"), 0 === p.length && (p = l.parents("." + r.params.viewsClass).find(".tabbar")));
              var u, f, m = c.length > 0, h = d.length > 0, g = p && p.length > 0;
              u = f = t[0].scrollTop;
              var v, C, Y, S, T, Z, w, L = h && o ? d[0].offsetHeight : 0, b = g && s ? p[0].offsetHeight : 0, y = b || L, X = e.hasClass("plugins-show-on-scroll-up") ? 50 : 0, J = !1, P = function () {
                J = !0
              };
              t.on("scroll", P), t[0].f7ScrollToolbarsHandler = P;
              var M = setInterval(a, 100);
              t[0].f7ScrollToolbarsInterval = M
            }
          }
        }
      }
    }, r.destroyScrollToolbars = function (e) {
      e = i(e);
      var a = e.find(".page-content");
      if (0 !== a.length) {
        var t = a[0].f7ScrollToolbarsHandler;
        t && (a.off("scroll", a[0].f7ScrollToolbarsHandler), a[0].f7ScrollToolbarsInterval && (clearInterval(a[0].f7ScrollToolbarsInterval), a[0].f7ScrollToolbarsInterval = null))
      }
    }, r.showTab = function (e, a, t) {
      var n = i(e);
      if (2 === arguments.length && "boolean" == typeof a && (t = a), 0 === n.length)return !1;
      if (n.hasClass("active"))return t && n.trigger("show"), !1;
      var o = n.parent(".tabs");
      if (0 === o.length)return !1;
      r.allowSwipeout = !0;
      var s = o.parent().hasClass("tabs-animated-wrap");
      s && o.transform("translate3d(" + 100 * -n.index() + "%,0,0)");
      var l = o.children(".tab.active").removeClass("active");
      if (n.addClass("active"), n.trigger("show"), l.trigger("hide"), !s && n.find(".navbar").length > 0) {
        var p;
        p = n.hasClass(r.params.viewClass) ? n[0] : n.parents("." + r.params.viewClass)[0], r.sizeNavbars(p)
      }
      if (a ? a = i(a) : (a = i("string" == typeof e ? '.tab-link[href="' + e + '"]' : '.tab-link[href="#' + n.attr("id") + '"]'), (!a || a && 0 === a.length) && i("[data-tab]").each(function () {
          n.is(i(this).attr("data-tab")) && (a = i(this))
        })), 0 !== a.length) {
        var c;
        if (l && l.length > 0) {
          var d = l.attr("id");
          d && (c = i('.tab-link[href="#' + d + '"]')), (!c || c && 0 === c.length) && i("[data-tab]").each(function () {
            l.is(i(this).attr("data-tab")) && (c = i(this))
          })
        }
        return a && a.length > 0 && a.addClass("active"), c && c.length > 0 && c.removeClass("active"), !0
      }
    }, r.accordionToggle = function (e) {
      e = i(e), 0 !== e.length && (e.hasClass("accordion-item-expanded") ? r.accordionClose(e) : r.accordionOpen(e))
    }, r.accordionOpen = function (e) {
      e = i(e);
      var a = e.parents(".accordion-list").eq(0), t = e.children(".accordion-item-content");
      0 === t.length && (t = e.find(".accordion-item-content"));
      var n = a.length > 0 && e.parent().children(".accordion-item-expanded");
      n.length > 0 && r.accordionClose(n), t.css("height", t[0].scrollHeight + "px").transitionEnd(function () {
        if (e.hasClass("accordion-item-expanded")) {
          t.transition(0), t.css("height", "auto");
          {
            t[0].clientLeft
          }
          t.transition(""), e.trigger("opened")
        } else t.css("height", ""), e.trigger("closed")
      }), e.trigger("open"), e.addClass("accordion-item-expanded")
    }, r.accordionClose = function (e) {
      e = i(e);
      var a = e.children(".accordion-item-content");
      0 === a.length && (a = e.find(".accordion-item-content")), e.removeClass("accordion-item-expanded"), a.transition(0), a.css("height", a[0].scrollHeight + "px");
      a[0].clientLeft;
      a.transition(""), a.css("height", "").transitionEnd(function () {
        if (e.hasClass("accordion-item-expanded")) {
          a.transition(0), a.css("height", "auto");
          {
            a[0].clientLeft
          }
          a.transition(""), e.trigger("opened")
        } else a.css("height", ""), e.trigger("closed")
      }), e.trigger("close")
    }, r.initFastClicks = function () {
      function e(e) {
        var a, t = i(e.target), n = t.parents(r.params.activeStateElements);
        return t.is(r.params.activeStateElements) && (a = t), n.length > 0 && (a = a ? a.add(n) : n), a ? a : t
      }

      function a() {
        var e = M.parents(".page-content, .panel");
        return 0 === e.length ? !1 : ("yes" !== e.prop("scrollHandlerSet") && (e.on("scroll", function () {
          clearTimeout(D)
        }), e.prop("scrollHandlerSet", "yes")), !0)
      }

      function t() {
        M.addClass("active-state")
      }

      function n(e) {
        M.removeClass("active-state")
      }

      function o(e) {
        var a = "input select textarea label".split(" ");
        return e.nodeName && a.indexOf(e.nodeName.toLowerCase()) >= 0 ? !0 : !1
      }

      function s(e) {
        var a = "button input textarea select".split(" ");
        return document.activeElement && e !== document.activeElement && document.activeElement !== document.body ? a.indexOf(e.nodeName.toLowerCase()) >= 0 ? !1 : !0 : !1
      }

      function l(e) {
        var a = i(e);
        return "input" === e.nodeName.toLowerCase() && "file" === e.type ? !1 : a.hasClass("no-fastclick") || a.parents(".no-fastclick").length > 0 ? !1 : !0
      }

      function p(e) {
        if (document.activeElement === e)return !1;
        var a = e.nodeName.toLowerCase(), t = "button checkbox file image radio submit".split(" ");
        return e.disabled || e.readOnly ? !1 : "textarea" === a ? !0 : "select" === a ? r.device.android ? !1 : !0 : "input" === a && t.indexOf(e.type) < 0 ? !0 : void 0
      }

      function c(e) {
        e = i(e);
        var a = !0;
        return (e.is("label") || e.parents("label").length > 0) && (a = r.device.android ? !1 : r.device.ios && e.is("input") ? !0 : !1), a
      }

      function d(a) {
        e(a).addClass("active-state"), "which"in a && 3 === a.which && setTimeout(function () {
          i(".active-state").removeClass("active-state")
        }, 0)
      }

      function u(e) {
        i(".active-state").removeClass("active-state")
      }

      function f(e) {
        i(".active-state").removeClass("active-state")
      }

      function m(n) {
        if (X = !1, J = !1, n.targetTouches.length > 1)return !0;
        if (r.params.tapHold && (P && clearTimeout(P), P = setTimeout(function () {
            J = !0, n.preventDefault(), i(n.target).trigger("taphold")
          }, r.params.tapHoldDelay)), x && clearTimeout(x), H = l(n.target), !H)return w = !1, !0;
        if (r.device.ios) {
          var o = window.getSelection();
          if (o.rangeCount && o.focusNode !== document.body && (!o.isCollapsed || document.activeElement === o.focusNode))return L = !0, !0;
          L = !1
        }
        r.device.android && s(n.target) && document.activeElement.blur(), w = !0, Z = n.target, T = (new Date).getTime(), Y = n.targetTouches[0].pageX, S = n.targetTouches[0].pageY, r.device.ios && (b = void 0, i(Z).parents().each(function () {
          var e = this;
          e.scrollHeight > e.offsetHeight && !b && (b = e, b.f7ScrollTop = b.scrollTop)
        })), n.timeStamp - y < r.params.fastClicksDelayBetweenClicks && n.preventDefault(), r.params.activeState && (M = e(n), a(n) ? D = setTimeout(t, 80) : t())
      }

      function h(e) {
        if (w) {
          var a = !1, t = r.params.fastClicksDistanceThreshold;
          if (t) {
            var o = e.targetTouches[0].pageX, i = e.targetTouches[0].pageY;
            (Math.abs(o - Y) > t || Math.abs(i - S) > t) && (a = !0)
          } else a = !0;
          a && (w = !1, Z = null, X = !0, r.params.tapHold && clearTimeout(P), r.params.activeState && (clearTimeout(D), n()))
        }
      }

      function g(e) {
        if (clearTimeout(D), clearTimeout(P), !w)return !L && H && (!r.device.android || e.cancelable) && e.preventDefault(), !0;
        if (document.activeElement === e.target)return !0;
        if (L || e.preventDefault(), e.timeStamp - y < r.params.fastClicksDelayBetweenClicks)return setTimeout(n, 0), !0;
        if (y = e.timeStamp, w = !1, r.device.ios && b && b.scrollTop !== b.f7ScrollTop)return !1;
        r.params.activeState && (t(), setTimeout(n, 0)), p(Z) && Z.focus(), document.activeElement && Z !== document.activeElement && document.activeElement !== document.body && "label" !== Z.nodeName.toLowerCase() && document.activeElement.blur(), e.preventDefault();
        var a = e.changedTouches[0], o = document.createEvent("MouseEvents"), i = "click";
        return r.device.android && "select" === Z.nodeName.toLowerCase() && (i = "mousedown"), o.initMouseEvent(i, !0, !0, window, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), o.forwardedTouchEvent = !0, Z.dispatchEvent(o), !1
      }

      function v(e) {
        w = !1, Z = null
      }

      function C(e) {
        var a = !1;
        return w ? (Z = null, w = !1, !0) : "submit" === e.target.type && 0 === e.detail ? !0 : (Z || o(e.target) || (a = !0), H || (a = !0), document.activeElement === Z && (a = !0), e.forwardedTouchEvent && (a = !0), e.cancelable || (a = !0), r.params.tapHold && r.params.tapHoldPreventClicks && J && (a = !1), a || (e.stopImmediatePropagation(), e.stopPropagation(), Z ? (c(Z) || X) && e.preventDefault() : e.preventDefault(), Z = null), x = setTimeout(function () {
          H = !1
        }, r.device.ios || r.device.androidChrome ? 100 : 400), r.params.tapHold && (P = setTimeout(function () {
          J = !1
        }, r.device.ios || r.device.androidChrome ? 100 : 400)), a)
      }

      r.params.activeState && i("html").addClass("watch-active-state"), r.device.ios && r.device.webView && window.addEventListener("touchstart", function () {
      });
      var Y, S, T, Z, w, L, b, y, X, J, P, M, D, H, x;
      r.support.touch ? (document.addEventListener("click", C, !0), document.addEventListener("touchstart", m), document.addEventListener("touchmove", h), document.addEventListener("touchend", g), document.addEventListener("touchcancel", v)) : r.params.activeState && (document.addEventListener("mousedown", d), document.addEventListener("mousemove", u), document.addEventListener("mouseup", f))
    }, r.initClickEvents = function () {
      function e(e) {
        var a = i(this), t = i(e.target), n = "a" === a[0].nodeName.toLowerCase() || a.parents("a").length > 0 || "a" === t[0].nodeName.toLowerCase() || t.parents("a").length > 0;
        if (!n) {
          var o;
          if (r.params.scrollTopOnNavbarClick && a.is(".navbar .center")) {
            var s = a.parents(".navbar");
            o = s.parents(".page-content"), 0 === o.length && (s.parents(".page").length > 0 && (o = s.parents(".page").find(".page-content")), 0 === o.length && s.nextAll(".pages").length > 0 && (o = s.nextAll(".pages").find(".page:not(.page-on-left):not(.page-on-right):not(.cached)").find(".page-content")))
          }
          r.params.scrollTopOnStatusbarClick && a.is(".statusbar-overlay") && (o = i(".popup.modal-in").length > 0 ? i(".popup.modal-in").find(".page:not(.page-on-left):not(.page-on-right):not(.cached)").find(".page-content") : i(".panel.active").length > 0 ? i(".panel.active").find(".page:not(.page-on-left):not(.page-on-right):not(.cached)").find(".page-content") : i(".views > .view.active").length > 0 ? i(".views > .view.active").find(".page:not(.page-on-left):not(.page-on-right):not(.cached)").find(".page-content") : i(".views").find(".page:not(.page-on-left):not(.page-on-right):not(.cached)").find(".page-content")), o && o.length > 0 && (o.hasClass("tab") && (o = o.parent(".tabs").children(".page-content.active")), o.length > 0 && o.scrollTop(0, 300))
        }
      }

      function a(e) {
        var a, t, n, o, p, c, d, u = i(this), f = u.attr("href"), m = "a" === u[0].nodeName.toLowerCase(), h = function (e, a) {
          var t = a.charAt(0);
          if ("." === t) {
            if (e.classList.contains(a.substr(1)))return e
          } else if ("#" === t) {
            if (e.id === a.substr(1))return e
          } else if ("[" === t && e.hasAttribute(a.substr(1, a.length - 2)))return e;
          return !1
        }, g = h(e.target, "[data-scroll]"), v = function (e, a) {
          var t = 0;
          if (e && e.offsetParent)do t += e.offsetTop, e = e.offsetParent; while (e);
          return t -= a, t >= 0 ? t : 0
        };
        if (m) {
          if (u.is(r.params.externalLinks))return void("_system" === u.attr("target") && (e.preventDefault(), window.open(f, "_system")));
          if (g)return a = "#" + f.substr(1), t = document.querySelector(a), o = e.target.getAttribute("data-scroll-offset"), isNaN(parseInt(o, 10)) === !0 ? (p = document.querySelector(o), o = p ? i(p).height() : 0) : o = parseInt(o, 10), u.parents("ul").find(".active").removeClass("active"), u.addClass("active"), d = i(".navbar").height(), o += d, n = v(t, o), c = i(t).parents(".page-content"), c[0] && (c[0].scrollTop = n), void e.preventDefault()
        }
        var C = u.dataset();
        if (u.hasClass("smart-select") && r.smartSelectOpen && r.smartSelectOpen(u), u.hasClass("open-panel") && r.openPanel(1 === i(".panel").length ? i(".panel").hasClass("panel-left") ? "left" : "right" : "right" === C.panel ? "right" : "left"), u.hasClass("close-panel") && r.closePanel(), u.hasClass("panel-overlay") && r.params.panelsCloseByOutside && r.closePanel(), u.hasClass("open-popover")) {
          var Y;
          Y = C.popover ? C.popover : ".popover", r.popover(Y, u)
        }
        u.hasClass("close-popover") && r.closeModal(".popover.modal-in");
        var S;
        u.hasClass("open-popup") && (S = C.popup ? C.popup : ".popup", r.popup(S)), u.hasClass("close-popup") && (S = C.popup ? C.popup : ".popup.modal-in", r.closeModal(S));
        var T;
        if (u.hasClass("open-login-screen") && (T = C.loginScreen ? C.loginScreen : ".login-screen", r.loginScreen(T)), u.hasClass("close-login-screen") && r.closeModal(".login-screen.modal-in"), u.hasClass("modal-overlay") && (i(".modal.modal-in").length > 0 && r.params.modalCloseByOutside && r.closeModal(".modal.modal-in"), i(".actions-modal.modal-in").length > 0 && r.params.actionsCloseByOutside && r.closeModal(".actions-modal.modal-in"), i(".popover.modal-in").length > 0 && r.closeModal(".popover.modal-in")), u.hasClass("popup-overlay") && i(".popup.modal-in").length > 0 && r.params.popupCloseByOutside && r.closeModal(".popup.modal-in"), u.hasClass("close-picker")) {
          var Z = i(".picker-modal.modal-in");
          Z.length > 0 ? r.closeModal(Z) : (Z = i(".popover.modal-in .picker-modal"), Z.length > 0 && r.closeModal(Z.parents(".popover")))
        }
        if (u.hasClass("open-picker")) {
          var w;
          w = C.picker ? C.picker : ".picker-modal", r.pickerModal(w, u)
        }
        var L;
        u.hasClass("tab-link") && (L = !0, r.showTab(C.tab || u.attr("href"), u));
        var b, y;
        if (u.hasClass("active-link") && (b = !0, u.hasClass("active") || (y = u.parents(".active-links").find(".active-link.active"), y.removeClass("active"), u.addClass("active"), y.trigger("hide", y.attr("href")), u.trigger("show", u.attr("href")))), u.hasClass("swipeout-close") && r.swipeoutClose(u.parents(".swipeout-opened")), u.hasClass("swipeout-delete"))if (C.confirm) {
          var X = C.confirm, J = C.confirmTitle;
          J ? r.confirm(X, J, function () {
            r.swipeoutDelete(u.parents(".swipeout"))
          }) : r.confirm(X, function () {
            r.swipeoutDelete(u.parents(".swipeout"))
          })
        } else r.swipeoutDelete(u.parents(".swipeout"));
        if (u.hasClass("toggle-sortable") && r.sortableToggle(C.sortable), u.hasClass("open-sortable") && r.sortableOpen(C.sortable), u.hasClass("close-sortable") && r.sortableClose(C.sortable), u.hasClass("accordion-item-toggle") || u.hasClass("item-link") && u.parent().hasClass("accordion-item")) {
          var P = u.parent(".accordion-item");
          0 === P.length && (P = u.parents(".accordion-item")), 0 === P.length && (P = u.parents("li")), r.accordionToggle(P)
        }
        if ((!r.params.ajaxLinks || u.is(r.params.ajaxLinks)) && m && r.params.router) {
          m && e.preventDefault();
          var M = f && f.length > 0 && "#" !== f && !L && !b, D = C.template;
          if (M || u.hasClass("back") || D) {
            if (M) {
              var H, J = u.attr("title"), x = u.attr("data-eventId");
              if (H = bridge.loadUrl(f, J, x))return;
              J && f.search("/search-list.html") >= 0 && f.search("title=") < 0 && (f += f.search("\\?") >= 0 ? "&title=" + encodeURIComponent(J, "UTF-8") : "?title=" + encodeURIComponent(J, "UTF-8"))
            }
            var B;
            if (C.view ? B = i(C.view)[0].f7View : (B = u.parents("." + r.params.viewClass)[0] && u.parents("." + r.params.viewClass)[0].f7View, B && B.params.linksView && ("string" == typeof B.params.linksView ? B = i(B.params.linksView)[0].f7View : B.params.linksView instanceof l && (B = B.params.linksView))), B || r.mainView && (B = r.mainView), !B)return;
            var Q;
            if (D)f = void 0; else {
              if (0 === f.indexOf("#") && "#" !== f) {
                if (!B.params.domCache)return;
                Q = f.split("#")[1], f = void 0
              }
              if ("#" === f && !u.hasClass("back"))return
            }
            var k;
            "undefined" != typeof C.animatePages ? k = C.animatePages : (u.hasClass("with-animation") && (k = !0), u.hasClass("no-animation") && (k = !1));
            var G = {
              animatePages: k,
              ignoreCache: C.ignoreCache,
              force: C.force,
              reload: C.reload,
              reloadPrevious: C.reloadPrevious,
              pageName: Q,
              pushState: C.pushState,
              url: f
            };
            if (r.params.template7Pages) {
              G.contextName = C.contextName;
              var N = C.context;
              N && (G.context = JSON.parse(N))
            }
            D && D in s.templates && (G.template = s.templates[D]), u.hasClass("back") ? B.router.back(G) : B.router.load(G)
          }
        }
      }

      function t(e) {
        e.preventDefault()
      }

      i(document).on("click", "a, .open-panel, .close-panel, .panel-overlay, .modal-overlay, .popup-overlay, .swipeout-delete, .swipeout-close, .close-popup, .open-popup, .open-popover, .open-login-screen, .close-login-screen .smart-select, .toggle-sortable, .open-sortable, .close-sortable, .accordion-item-toggle, .close-picker", a), (r.params.scrollTopOnNavbarClick || r.params.scrollTopOnStatusbarClick) && i(document).on("click", ".statusbar-overlay, .navbar .center", e), r.support.touch && !r.device.android && i(document).on(r.params.fastClicks ? "touchstart" : "touchmove", ".panel-overlay, .modal-overlay, .preloader-indicator-overlay, .popup-overlay, .searchbar-overlay", t)
    }, r.initResize = function () {
      i(window).on("resize", r.resize), i(window).on("orientationchange", r.orientationchange)
    }, r.resize = function () {
      r.sizeNavbars && r.sizeNavbars(), n()
    }, r.orientationchange = function () {
      r.device && r.device.minimalUi && (90 === window.orientation || -90 === window.orientation) && (document.body.scrollTop = 0), n()
    }, r.formsData = {}, r.formStoreData = function (e, a) {
      r.formsData[e] = a, r.ls["f7form-" + e] = JSON.stringify(a)
    }, r.formDeleteData = function (e) {
      r.formsData[e] && (r.formsData[e] = "", delete r.formsData[e]), r.ls["f7form-" + e] && (r.ls["f7form-" + e] = "", r.ls.removeItem("f7form-" + e))
    }, r.formGetData = function (e) {
      return r.ls["f7form-" + e] ? JSON.parse(r.ls["f7form-" + e]) : r.formsData[e] ? r.formsData[e] : void 0
    }, r.formToJSON = function (e) {
      if (e = i(e), 1 !== e.length)return !1;
      var a = {}, t = ["submit", "image", "button", "file"], n = [];
      return e.find("input, select, textarea").each(function () {
        var r = i(this), o = r.attr("name"), s = r.attr("type"), l = this.nodeName.toLowerCase();
        if (!(t.indexOf(s) >= 0 || n.indexOf(o) >= 0 || !o))if ("select" === l && r.attr("multiple"))n.push(o), a[o] || (a[o] = []), e.find('select[name="' + o + '"] option').each(function () {
          this.selected && "" !== this.value && a[o].push(this.value)
        }); else switch (s) {
          case"checkbox":
            n.push(o), a[o] = [], e.find('input[name="' + o + '"]').each(function () {
              this.checked && a[o].push(this.value)
            });
            break;
          case"radio":
            n.push(o), e.find('input[name="' + o + '"]').each(function () {
              this.checked && (a[o] = this.value)
            });
            break;
          default:
            a[o] = r.val()
        }
      }), e.trigger("formToJSON", {formData: a}), a
    }, r.formFromJSON = function (e, a) {
      if (e = i(e), 1 !== e.length)return !1;
      var t = ["submit", "image", "button", "file"], n = [];
      e.find("input, select, textarea").each(function () {
        var r = i(this), o = r.attr("name"), s = r.attr("type"), l = this.nodeName.toLowerCase();
        if (a[o] && !(t.indexOf(s) >= 0 || n.indexOf(o) >= 0 || !o))if ("select" === l && r.attr("multiple"))n.push(o), e.find('select[name="' + o + '"] option').each(function () {
          this.selected = a[o].indexOf(this.value) >= 0 ? !0 : !1
        }); else switch (s) {
          case"checkbox":
            n.push(o), e.find('input[name="' + o + '"]').each(function () {
              this.checked = a[o].indexOf(this.value) >= 0 ? !0 : !1
            });
            break;
          case"radio":
            n.push(o), e.find('input[name="' + o + '"]').each(function () {
              this.checked = a[o] === this.value ? !0 : !1
            });
            break;
          default:
            r.val(a[o])
        }
      }), e.trigger("formFromJSON", {formData: a})
    }, r.initFormsStorage = function (e) {
      function a() {
        var e = i(this), a = e[0].id;
        if (a) {
          var t = r.formToJSON(e);
          t && (r.formStoreData(a, t), e.trigger("store", {data: t}))
        }
      }

      function t() {
        n.off("change submit", a), e.off("pageBeforeRemove", t)
      }

      if (e = i(e), 0 !== e.length) {
        var n = e.find("form.store-data");
        0 !== n.length && (n.each(function () {
          var e = this.getAttribute("id");
          if (e) {
            var a = r.formGetData(e);
            a && r.formFromJSON(this, a)
          }
        }), n.on("change submit", a), e.on("pageBeforeRemove", t))
      }
    }, i(document).on("submit change", "form.ajax-submit, form.ajax-submit-onchange", function (e) {
      var a = i(this);
      if ("change" !== e.type || a.hasClass("ajax-submit-onchange")) {
        "submit" === e.type && e.preventDefault();
        var t = a.attr("method") || "GET", n = a.prop("enctype") || a.attr("enctype"), o = a.attr("action");
        if (o) {
          var s;
          s = "POST" === t ? new FormData(a[0]) : i.serializeObject(r.formToJSON(a[0]));
          var l = i.ajax({
            method: t, url: o, contentType: n, data: s, beforeSend: function (e) {
              a.trigger("beforeSubmit", {data: s, xhr: e})
            }, error: function (e) {
              a.trigger("submitError", {data: s, xhr: e})
            }, success: function (e) {
              a.trigger("submitted", {data: e, xhr: l})
            }
          })
        }
      }
    }), r.pushStateQueue = [], r.pushStateClearQueue = function () {
      if (0 !== r.pushStateQueue.length) {
        var e, a = r.pushStateQueue.pop();
        r.params.pushStateNoAnimation === !0 && (e = !1), "back" === a.action && r.router.back(a.view, {animatePages: e}), "loadPage" === a.action && r.router.load(a.view, {
          url: a.stateUrl,
          animatePages: e,
          pushState: !1
        }), "loadContent" === a.action && r.router.load(a.view, {
          content: a.stateContent,
          animatePages: e,
          pushState: !1
        }), "loadPageName" === a.action && r.router.load(a.view, {
          pageName: a.statePageName,
          animatePages: e,
          pushState: !1
        })
      }
    }, r.initPushState = function () {
      function e(e) {
        if (!a) {
          var t = r.mainView;
          if (t) {
            var n = e.state;
            if (n || (n = {viewIndex: r.views.indexOf(t), url: t.history[0]}), !(n.viewIndex < 0)) {
              var o, i = r.views[n.viewIndex], s = n && n.url || void 0, l = n && n.content || void 0, p = n && n.pageName || void 0;
              r.params.pushStateNoAnimation === !0 && (o = !1), s !== i.url && (i.history.indexOf(s) >= 0 ? i.allowPageChange ? r.router.back(i, {
                url: void 0,
                animatePages: o,
                pushState: !1,
                preloadOnly: !1
              }) : r.pushStateQueue.push({
                action: "back",
                view: i
              }) : l ? i.allowPageChange ? r.router.load(i, {
                content: l,
                animatePages: o,
                pushState: !1
              }) : r.pushStateQueue.unshift({
                action: "loadContent",
                stateContent: l,
                view: i
              }) : p ? i.allowPageChange ? r.router.load(i, {
                pageName: p,
                animatePages: o,
                pushState: !1
              }) : r.pushStateQueue.unshift({
                action: "loadPageName",
                statePageName: p,
                view: i
              }) : i.allowPageChange ? r.router.load(i, {
                url: s,
                animatePages: o,
                pushState: !1
              }) : r.pushStateQueue.unshift({action: "loadPage", stateUrl: s, view: i}))
            }
          }
        }
      }

      var a;
      r.params.pushStatePreventOnLoad && (a = !0, i(window).on("load", function () {
        setTimeout(function () {
          a = !1
        }, 0)
      })), i(window).on("popstate", e)
    }, r.swiper = function (e, a) {
      return new Swiper(e, a)
    }, r.initPageSwiper = function (e) {
      function a(e) {
        function a() {
          e.destroy(), t.off("pageBeforeRemove", a)
        }

        t.on("pageBeforeRemove", a)
      }

      var t = i(e), n = t.find(".swiper-init");
      if (0 !== n.length)for (var o = 0; o < n.length; o++) {
        var s, l = n.eq(o);
        s = l.data("swiper") ? JSON.parse(l.data("swiper")) : l.dataset();
        var p = r.swiper(l[0], s);
        a(p)
      }
    }, r.reinitPageSwiper = function (e) {
      var a = i(e), t = a.find(".swiper-init");
      if (0 !== t.length)for (var n = 0; n < t.length; n++) {
        var r = t[0].swiper;
        r && r.update(!0)
      }
    };
    var g = function (e) {
      var a, t = this, n = {
        photos: [],
        initialSlide: 0,
        spaceBetween: 20,
        speed: 300,
        zoom: !0,
        maxZoom: 3,
        minZoom: 1,
        exposition: !0,
        expositionHideCaptions: !1,
        type: "standalone",
        navbar: !0,
        toolbar: !0,
        theme: "light",
        swipeToClose: !0,
        backLinkText: "Close",
        ofText: "of",
        loop: !1,
        lazyLoading: !1,
        lazyLoadingInPrevNext: !1,
        lazyLoadingOnTransitionStart: !1
      };
      e = e || {};
      for (var o in n)"undefined" == typeof e[o] && (e[o] = n[o]);
      t.params = e;
      var s = "dark" === t.params.theme ? "color-white" : "", l = t.params.navbarTemplate || '<div class="navbar"><div class="navbar-inner"><div class="left sliding"><a href="#" class="link ' + ("page" === t.params.type && "back") + ' close-popup photo-browser-close-link" data-popup=".photo-browser-popup"><i class="icon icon-back ' + s + '"></i><span>' + t.params.backLinkText + '</span></a></div><div class="center sliding"><span class="photo-browser-current"></span> <span class="photo-browser-of">' + t.params.ofText + '</span> <span class="photo-browser-total"></span></div><div class="right"></div></div></div>', p = t.params.toolbarTemplate || '<div class="toolbar tabbar"><div class="toolbar-inner"><a href="#" class="link photo-browser-prev"><i class="icon icon-prev ' + s + '"></i></a><a href="#" class="link photo-browser-next"><i class="icon icon-next ' + s + '"></i></a></div></div>', c = t.params.template || '<div class="photo-browser photo-browser-' + t.params.theme + '"><div class="view navbar-fixed toolbar-fixed">{{navbar}}<div data-page="photo-browser-slides" class="page no-toolbar {{noNavbar}} toolbar-fixed navbar-fixed">{{toolbar}}{{captions}}<div class="photo-browser-swiper-container swiper-container"><div class="photo-browser-swiper-wrapper swiper-wrapper">{{photos}}</div></div></div></div></div>', d = t.params.lazyLoading ? t.params.photoLazyTemplate || '<div class="photo-browser-slide photo-browser-slide-lazy swiper-slide"><div class="preloader' + ("dark" === t.params.theme ? " preloader-white" : "") + '"></div><span class="photo-browser-zoom-container"><img data-src="{{url}}" class="swiper-lazy"></span></div>' : t.params.photoTemplate || '<div class="photo-browser-slide swiper-slide"><span class="photo-browser-zoom-container"><img src="{{url}}"></span></div>', u = t.params.captionsTheme || t.params.theme, f = t.params.captionsTemplate || '<div class="photo-browser-captions photo-browser-captions-' + u + '">{{captions}}</div>', m = t.params.captionTemplate || '<div class="photo-browser-caption" data-caption-index="{{captionIndex}}">{{caption}}</div>', h = t.params.objectTemplate || '<div class="photo-browser-slide photo-browser-object-slide swiper-slide">{{html}}</div>', g = "", v = "";
      for (a = 0; a < t.params.photos.length; a++) {
        var C = t.params.photos[a], Y = "";
        "string" == typeof C || C instanceof String ? Y = C.indexOf("<") >= 0 || C.indexOf(">") >= 0 ? h.replace(/{{html}}/g, C) : d.replace(/{{url}}/g, C) : "object" == typeof C && (C.hasOwnProperty("html") && C.html.length > 0 ? Y = h.replace(/{{html}}/g, C.html) : C.hasOwnProperty("url") && C.url.length > 0 && (Y = d.replace(/{{url}}/g, C.url)), C.hasOwnProperty("caption") && C.caption.length > 0 ? v += m.replace(/{{caption}}/g, C.caption).replace(/{{captionIndex}}/g, a) : Y = Y.replace(/{{caption}}/g, "")), g += Y
      }
      var S = c.replace("{{navbar}}", t.params.navbar ? l : "").replace("{{noNavbar}}", t.params.navbar ? "" : "no-navbar").replace("{{photos}}", g).replace("{{captions}}", f.replace(/{{captions}}/g, v)).replace("{{toolbar}}", t.params.toolbar ? p : "");
      t.activeIndex = t.params.initialSlide, t.openIndex = t.activeIndex, t.opened = !1, t.open = function (e) {
        return "undefined" == typeof e && (e = t.activeIndex), e = parseInt(e, 10), t.opened && t.swiper ? void t.swiper.slideTo(e) : (t.opened = !0, t.openIndex = e, "standalone" === t.params.type && i("body").append(S), "popup" === t.params.type && (t.popup = r.popup('<div class="popup photo-browser-popup">' + S + "</div>"), i(t.popup).on("closed", t.onPopupClose)), "page" === t.params.type ? (i(document).on("pageBeforeInit", t.onPageBeforeInit), i(document).on("pageBeforeRemove", t.onPageBeforeRemove), t.params.view || (t.params.view = r.mainView), void t.params.view.loadContent(S)) : (t.layout(t.openIndex), void(t.params.onOpen && t.params.onOpen(t))))
      }, t.close = function () {
        t.opened = !1, t.swiperContainer && 0 !== t.swiperContainer.length && (t.params.onClose && t.params.onClose(t), t.attachEvents(!0), "standalone" === t.params.type && t.container.removeClass("photo-browser-in").addClass("photo-browser-out").animationEnd(function () {
          t.container.remove()
        }), t.swiper.destroy(), t.swiper = t.swiperContainer = t.swiperWrapper = t.slides = T = Z = w = void 0)
      }, t.onPopupClose = function (e) {
        t.close(), i(t.popup).off("pageBeforeInit", t.onPopupClose)
      }, t.onPageBeforeInit = function (e) {
        "photo-browser-slides" === e.detail.page.name && t.layout(t.openIndex), i(document).off("pageBeforeInit", t.onPageBeforeInit)
      }, t.onPageBeforeRemove = function (e) {
        "photo-browser-slides" === e.detail.page.name && t.close(), i(document).off("pageBeforeRemove", t.onPageBeforeRemove)
      }, t.onSliderTransitionStart = function (e) {
        t.activeIndex = e.activeIndex;
        var a = e.activeIndex + 1, n = e.slides.length;
        if (t.params.loop && (n -= 2, a -= e.loopedSlides, 1 > a && (a = n + a), a > n && (a -= n)), t.container.find(".photo-browser-current").text(a), t.container.find(".photo-browser-total").text(n), i(".photo-browser-prev, .photo-browser-next").removeClass("photo-browser-link-inactive"), e.isBeginning && !t.params.loop && i(".photo-browser-prev").addClass("photo-browser-link-inactive"), e.isEnd && !t.params.loop && i(".photo-browser-next").addClass("photo-browser-link-inactive"), t.captions.length > 0) {
          t.captionsContainer.find(".photo-browser-caption-active").removeClass("photo-browser-caption-active");
          var r = t.params.loop ? e.slides.eq(e.activeIndex).attr("data-swiper-slide-index") : t.activeIndex;
          t.captionsContainer.find('[data-caption-index="' + r + '"]').addClass("photo-browser-caption-active")
        }
        var o = e.slides.eq(e.previousIndex).find("video");
        o.length > 0 && "pause"in o[0] && o[0].pause(), t.params.onTransitionStart && t.params.onTransitionStart(e)
      }, t.onSliderTransitionEnd = function (e) {
        t.params.zoom && T && e.previousIndex !== e.activeIndex && (Z.transform("translate3d(0,0,0) scale(1)"), w.transform("translate3d(0,0,0)"), T = Z = w = void 0, L = b = 1), t.params.onTransitionEnd && t.params.onTransitionEnd(e)
      }, t.layout = function (e) {
        t.container = "page" === t.params.type ? i(".photo-browser-swiper-container").parents(".view") : i(".photo-browser"), "standalone" === t.params.type && (t.container.addClass("photo-browser-in"), r.sizeNavbars(t.container)), t.swiperContainer = t.container.find(".photo-browser-swiper-container"), t.swiperWrapper = t.container.find(".photo-browser-swiper-wrapper"), t.slides = t.container.find(".photo-browser-slide"), t.captionsContainer = t.container.find(".photo-browser-captions"), t.captions = t.container.find(".photo-browser-caption");
        var a = {
          nextButton: t.params.nextButton || ".photo-browser-next",
          prevButton: t.params.prevButton || ".photo-browser-prev",
          indexButton: t.params.indexButton,
          initialSlide: e,
          spaceBetween: t.params.spaceBetween,
          speed: t.params.speed,
          loop: t.params.loop,
          lazyLoading: t.params.lazyLoading,
          lazyLoadingInPrevNext: t.params.lazyLoadingInPrevNext,
          lazyLoadingOnTransitionStart: t.params.lazyLoadingOnTransitionStart,
          preloadImages: t.params.lazyLoading ? !1 : !0,
          onTap: function (e, a) {
            t.params.onTap && t.params.onTap(e, a)
          },
          onClick: function (e, a) {
            t.params.exposition && t.toggleExposition(), t.params.onClick && t.params.onClick(e, a)
          },
          onDoubleTap: function (e, a) {
            t.toggleZoom(i(a.target).parents(".photo-browser-slide")), t.params.onDoubleTap && t.params.onDoubleTap(e, a)
          },
          onTransitionStart: function (e) {
            t.onSliderTransitionStart(e)
          },
          onTransitionEnd: function (e) {
            t.onSliderTransitionEnd(e)
          },
          onSlideChangeStart: t.params.onSlideChangeStart,
          onSlideChangeEnd: t.params.onSlideChangeEnd,
          onLazyImageLoad: function (e, a, n) {
            t.params.onLazyImageLoad && t.params.onLazyImageLoad(t, a, n)
          },
          onLazyImageReady: function (e, a, n) {
            i(a).removeClass("photo-browser-slide-lazy"), t.params.onLazyImageReady && t.params.onLazyImageReady(t, a, n)
          }
        };
        t.params.swipeToClose && "page" !== t.params.type && (a.onTouchStart = t.swipeCloseTouchStart, a.onTouchMoveOpposite = t.swipeCloseTouchMove, a.onTouchEnd = t.swipeCloseTouchEnd), t.swiper = r.swiper(t.swiperContainer, a), 0 === e && t.onSliderTransitionStart(t.swiper), t.attachEvents()
      }, t.attachEvents = function (e) {
        var a = e ? "off" : "on";
        if (t.params.zoom) {
          var n = t.params.loop ? t.swiper.slides : t.slides;
          n[a]("gesturestart", t.onSlideGestureStart), n[a]("gesturechange", t.onSlideGestureChange), n[a]("gestureend", t.onSlideGestureEnd), n[a](r.touchEvents.start, t.onSlideTouchStart), n[a](r.touchEvents.move, t.onSlideTouchMove), n[a](r.touchEvents.end, t.onSlideTouchEnd)
        }
        t.container.find(".photo-browser-close-link")[a]("click", t.close)
      };
      t.exposed = !1, t.toggleExposition = function () {
        t.container && t.container.toggleClass("photo-browser-exposed"), t.params.expositionHideCaptions && t.captionsContainer.toggleClass("photo-browser-captions-exposed"), t.exposed = !t.exposed
      }, t.enableExposition = function () {
        t.container && t.container.addClass("photo-browser-exposed"), t.params.expositionHideCaptions && t.captionsContainer.addClass("photo-browser-captions-exposed"),
          t.exposed = !0
      }, t.disableExposition = function () {
        t.container && t.container.removeClass("photo-browser-exposed"), t.params.expositionHideCaptions && t.captionsContainer.removeClass("photo-browser-captions-exposed"), t.exposed = !1
      };
      var T, Z, w, L = 1, b = 1, y = !1;
      t.onSlideGestureStart = function (e) {
        return T && T.length || (T = i(this), 0 === T.length && (T = t.swiper.slides.eq(t.swiper.activeIndex)), Z = T.find("img, svg, canvas"), w = Z.parent(".photo-browser-zoom-container"), 0 !== w.length) ? (Z.transition(0), void(y = !0)) : void(Z = void 0)
      }, t.onSlideGestureChange = function (e) {
        Z && 0 !== Z.length && (L = e.scale * b, L > t.params.maxZoom && (L = t.params.maxZoom - 1 + Math.pow(L - t.params.maxZoom + 1, .5)), L < t.params.minZoom && (L = t.params.minZoom + 1 - Math.pow(t.params.minZoom - L + 1, .5)), Z.transform("translate3d(0,0,0) scale(" + L + ")"))
      }, t.onSlideGestureEnd = function (e) {
        Z && 0 !== Z.length && (L = Math.max(Math.min(L, t.params.maxZoom), t.params.minZoom), Z.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + L + ")"), b = L, y = !1, 1 === L && (T = void 0))
      }, t.toggleZoom = function () {
        T || (T = t.swiper.slides.eq(t.swiper.activeIndex), Z = T.find("img, svg, canvas"), w = Z.parent(".photo-browser-zoom-container")), Z && 0 !== Z.length && (w.transition(300).transform("translate3d(0,0,0)"), L && 1 !== L ? (L = b = 1, Z.transition(300).transform("translate3d(0,0,0) scale(1)"), T = void 0) : (L = b = t.params.maxZoom, Z.transition(300).transform("translate3d(0,0,0) scale(" + L + ")")))
      };
      var X, J, P, M, D, H, x, B, Q, k, G, N, F, W, E, K, R, A = {}, I = {};
      t.onSlideTouchStart = function (e) {
        Z && 0 !== Z.length && (X || ("android" === r.device.os && e.preventDefault(), X = !0, A.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, A.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
      }, t.onSlideTouchMove = function (e) {
        if (Z && 0 !== Z.length && (t.swiper.allowClick = !1, X && T)) {
          J || (Q = Z[0].offsetWidth, k = Z[0].offsetHeight, G = i.getTranslate(w[0], "x") || 0, N = i.getTranslate(w[0], "y") || 0, w.transition(0));
          var a = Q * L, n = k * L;
          if (!(a < t.swiper.width && n < t.swiper.height)) {
            if (D = Math.min(t.swiper.width / 2 - a / 2, 0), x = -D, H = Math.min(t.swiper.height / 2 - n / 2, 0), B = -H, I.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, I.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !J && !y && (Math.floor(D) === Math.floor(G) && I.x < A.x || Math.floor(x) === Math.floor(G) && I.x > A.x))return void(X = !1);
            e.preventDefault(), e.stopPropagation(), J = !0, P = I.x - A.x + G, M = I.y - A.y + N, D > P && (P = D + 1 - Math.pow(D - P + 1, .8)), P > x && (P = x - 1 + Math.pow(P - x + 1, .8)), H > M && (M = H + 1 - Math.pow(H - M + 1, .8)), M > B && (M = B - 1 + Math.pow(M - B + 1, .8)), F || (F = I.x), K || (K = I.y), W || (W = Date.now()), E = (I.x - F) / (Date.now() - W) / 2, R = (I.y - K) / (Date.now() - W) / 2, Math.abs(I.x - F) < 2 && (E = 0), Math.abs(I.y - K) < 2 && (R = 0), F = I.x, K = I.y, W = Date.now(), w.transform("translate3d(" + P + "px, " + M + "px,0)")
          }
        }
      }, t.onSlideTouchEnd = function (e) {
        if (Z && 0 !== Z.length) {
          if (!X || !J)return X = !1, void(J = !1);
          X = !1, J = !1;
          var a = 300, n = 300, r = E * a, o = P + r, i = R * n, s = M + i;
          0 !== E && (a = Math.abs((o - P) / E)), 0 !== R && (n = Math.abs((s - M) / R));
          var l = Math.max(a, n);
          P = o, M = s;
          var p = Q * L, c = k * L;
          D = Math.min(t.swiper.width / 2 - p / 2, 0), x = -D, H = Math.min(t.swiper.height / 2 - c / 2, 0), B = -H, P = Math.max(Math.min(P, x), D), M = Math.max(Math.min(M, B), H), w.transition(l).transform("translate3d(" + P + "px, " + M + "px,0)")
        }
      };
      var O, z, _, q, V, j = !1, U = !0, $ = !1;
      return t.swipeCloseTouchStart = function (e, a) {
        U && (j = !0)
      }, t.swipeCloseTouchMove = function (e, a) {
        if (j) {
          $ || ($ = !0, z = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, q = t.swiper.slides.eq(t.swiper.activeIndex), V = (new Date).getTime()), a.preventDefault(), _ = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, O = z - _;
          var n = 1 - Math.abs(O) / 300;
          q.transform("translate3d(0," + -O + "px,0)"), t.swiper.container.css("opacity", n).transition(0)
        }
      }, t.swipeCloseTouchEnd = function (e, a) {
        if (j = !1, !$)return void($ = !1);
        $ = !1, U = !1;
        var n = Math.abs(O), o = (new Date).getTime() - V;
        return 300 > o && n > 20 || o >= 300 && n > 100 ? void setTimeout(function () {
          "standalone" === t.params.type && t.close(), "popup" === t.params.type && r.closeModal(t.popup), t.params.onSwipeToClose && t.params.onSwipeToClose(t), U = !0
        }, 0) : (0 !== n ? q.addClass("transitioning").transitionEnd(function () {
          U = !0, q.removeClass("transitioning")
        }) : U = !0, t.swiper.container.css("opacity", "").transition(""), void q.transform(""))
      }, t
    };
    r.photoBrowser = function (e) {
      return new g(e)
    };
    var v = function (e) {
      function a() {
        var e = !1;
        return p.params.convertToPopover || p.params.onlyInPopover ? (!p.inline && p.params.input && (p.params.onlyInPopover ? e = !0 : r.device.ios ? e = r.device.ipad ? !0 : !1 : i(window).width() >= 768 && (e = !0)), e) : e
      }

      function t() {
        return p.opened && p.container && p.container.length > 0 && p.container.parents(".popover").length > 0 ? !0 : !1
      }

      function n() {
        if (p.opened)for (var e = 0; e < p.cols.length; e++)p.cols[e].divider || (p.cols[e].calcSize(), p.cols[e].setValue(p.cols[e].value, 0, !1))
      }

      function o(e) {
        if (e.preventDefault(), !p.opened && (p.open(), p.params.scrollToInput && !a())) {
          var t = p.input.parents(".page-content");
          if (0 === t.length)return;
          var n, r = parseInt(t.css("padding-top"), 10), o = parseInt(t.css("padding-bottom"), 10), i = t[0].offsetHeight - r - p.container.height(), s = t[0].scrollHeight - r - p.container.height(), l = p.input.offset().top - r + p.input[0].offsetHeight;
          if (l > i) {
            var c = t.scrollTop() + l - i;
            c + i > s && (n = c + i - s + o, i === s && (n = p.container.height()), t.css({"padding-bottom": n + "px"})), t.scrollTop(c, 300)
          }
        }
      }

      function s(e) {
        t() || (p.input && p.input.length > 0 ? e.target !== p.input[0] && 0 === i(e.target).parents(".picker-modal").length && p.close() : 0 === i(e.target).parents(".picker-modal").length && p.close())
      }

      function l() {
        p.opened = !1, p.input && p.input.length > 0 && p.input.parents(".page-content").css({"padding-bottom": ""}), p.params.onClose && p.params.onClose(p), p.container.find(".picker-items-col").each(function () {
          p.destroyPickerCol(this)
        })
      }

      var p = this, c = {
        updateValuesOnMomentum: !1,
        updateValuesOnTouchmove: !0,
        rotateEffect: !1,
        momentumRatio: 7,
        freeMode: !1,
        scrollToInput: !0,
        inputReadOnly: !0,
        convertToPopover: !0,
        onlyInPopover: !1,
        toolbar: !0,
        toolbarCloseText: "Done",
        toolbarTemplate: '<div class="toolbar"><div class="toolbar-inner"><div class="left"></div><div class="right"><a href="#" class="link close-picker">{{closeText}}</a></div></div></div>'
      };
      e = e || {};
      for (var d in c)"undefined" == typeof e[d] && (e[d] = c[d]);
      p.params = e, p.cols = [], p.initialized = !1, p.inline = p.params.container ? !0 : !1;
      var u = r.device.ios || navigator.userAgent.toLowerCase().indexOf("safari") >= 0 && navigator.userAgent.toLowerCase().indexOf("chrome") < 0 && !r.device.android;
      return p.setValue = function (e, a) {
        for (var t = 0, n = 0; n < p.cols.length; n++)p.cols[n] && !p.cols[n].divider && (p.cols[n].setValue(e[t], a), t++)
      }, p.updateValue = function () {
        for (var e = [], a = [], t = 0; t < p.cols.length; t++)p.cols[t].divider || (e.push(p.cols[t].value), a.push(p.cols[t].displayValue));
        e.indexOf(void 0) >= 0 || (p.value = e, p.displayValue = a, p.params.onChange && p.params.onChange(p, p.value, p.displayValue), p.input && p.input.length > 0 && (i(p.input).val(p.params.formatValue ? p.params.formatValue(p, p.value, p.displayValue) : p.value.join(" ")), i(p.input).trigger("change")))
      }, p.initPickerCol = function (e, a) {
        function t() {
          Y = i.requestAnimationFrame(function () {
            f.updateItems(void 0, void 0, 0), t()
          })
        }

        function n(e) {
          T || S || (e.preventDefault(), S = !0, Z = w = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, L = (new Date).getTime(), H = !0, y = J = i.getTranslate(f.wrapper[0], "y"))
        }

        function o(e) {
          if (S) {
            e.preventDefault(), H = !1, w = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, T || (i.cancelAnimationFrame(Y), T = !0, y = J = i.getTranslate(f.wrapper[0], "y"), f.wrapper.transition(0)), e.preventDefault();
            var a = w - Z;
            J = y + a, X = void 0, v > J && (J = v - Math.pow(v - J, .8), X = "min"), J > C && (J = C + Math.pow(J - C, .8), X = "max"), f.wrapper.transform("translate3d(0," + J + "px,0)"), f.updateItems(void 0, J, 0, p.params.updateValuesOnTouchmove), M = J - P || J, D = (new Date).getTime(), P = J
          }
        }

        function s(e) {
          if (!S || !T)return void(S = T = !1);
          S = T = !1, f.wrapper.transition(""), X && f.wrapper.transform("min" === X ? "translate3d(0," + v + "px,0)" : "translate3d(0," + C + "px,0)"), b = (new Date).getTime();
          var a, n;
          b - L > 300 ? n = J : (a = Math.abs(M / (b - D)), n = J + M * p.params.momentumRatio), n = Math.max(Math.min(n, C), v);
          var r = -Math.floor((n - C) / h);
          p.params.freeMode || (n = -r * h + C), f.wrapper.transform("translate3d(0," + parseInt(n, 10) + "px,0)"), f.updateItems(r, n, "", !0), p.params.updateValuesOnMomentum && (t(), f.wrapper.transitionEnd(function () {
            i.cancelAnimationFrame(Y)
          })), setTimeout(function () {
            H = !0
          }, 100)
        }

        function l(e) {
          if (H) {
            i.cancelAnimationFrame(Y);
            var a = i(this).attr("data-picker-value");
            f.setValue(a)
          }
        }

        var c = i(e), d = c.index(), f = p.cols[d];
        if (!f.divider) {
          f.container = c, f.wrapper = f.container.find(".picker-items-col-wrapper"), f.items = f.wrapper.find(".picker-item");
          var m, h, g, v, C;
          f.replaceValues = function (e, a) {
            f.destroyEvents(), f.values = e, f.displayValues = a;
            var t = p.columnHTML(f, !0);
            f.wrapper.html(t), f.items = f.wrapper.find(".picker-item"), f.calcSize(), f.setValue(f.values[0], 0, !0), f.initEvents()
          }, f.calcSize = function () {
            p.params.rotateEffect && (f.container.removeClass("picker-items-col-absolute"), f.width || f.container.css({width: ""}));
            var e, a;
            e = 0, a = f.container[0].offsetHeight, m = f.wrapper[0].offsetHeight, h = f.items[0].offsetHeight, g = h * f.items.length, v = a / 2 - g + h / 2, C = a / 2 - h / 2, f.width && (e = f.width, parseInt(e, 10) === e && (e += "px"), f.container.css({width: e})), p.params.rotateEffect && (f.width || (f.items.each(function () {
              var a = i(this);
              a.css({width: "auto"}), e = Math.max(e, a[0].offsetWidth), a.css({width: ""})
            }), f.container.css({width: e + 2 + "px"})), f.container.addClass("picker-items-col-absolute"))
          }, f.calcSize(), f.wrapper.transform("translate3d(0," + C + "px,0)").transition(0);
          var Y;
          f.setValue = function (e, a, n) {
            "undefined" == typeof a && (a = "");
            var r = f.wrapper.find('.picker-item[data-picker-value="' + e + '"]').index();
            if ("undefined" != typeof r && -1 !== r) {
              var o = -r * h + C;
              f.wrapper.transition(a), f.wrapper.transform("translate3d(0," + o + "px,0)"), p.params.updateValuesOnMomentum && f.activeIndex && f.activeIndex !== r && (i.cancelAnimationFrame(Y), f.wrapper.transitionEnd(function () {
                i.cancelAnimationFrame(Y)
              }), t()), f.updateItems(r, o, a, n)
            }
          }, f.updateItems = function (e, a, t, n) {
            "undefined" == typeof a && (a = i.getTranslate(f.wrapper[0], "y")), "undefined" == typeof e && (e = -Math.round((a - C) / h)), 0 > e && (e = 0), e >= f.items.length && (e = f.items.length - 1);
            var r = f.activeIndex;
            f.activeIndex = e, f.wrapper.find(".picker-selected, .picker-after-selected, .picker-before-selected").removeClass("picker-selected picker-after-selected picker-before-selected"), f.items.transition(t);
            {
              var o = f.items.eq(e).addClass("picker-selected").transform("");
              o.prevAll().addClass("picker-before-selected"), o.nextAll().addClass("picker-after-selected")
            }
            if (p.params.rotateEffect) {
              {
                (a - (Math.floor((a - C) / h) * h + C)) / h
              }
              f.items.each(function () {
                var e = i(this), t = e.index() * h, n = C - a, r = t - n, o = r / h, s = Math.ceil(f.height / h / 2) + 1, l = -18 * o;
                l > 180 && (l = 180), -180 > l && (l = -180), Math.abs(o) > s ? e.addClass("picker-item-far") : e.removeClass("picker-item-far"), e.transform("translate3d(0, " + (-a + C) + "px, " + (u ? -110 : 0) + "px) rotateX(" + l + "deg)")
              })
            }
            (n || "undefined" == typeof n) && (f.value = o.attr("data-picker-value"), f.displayValue = f.displayValues ? f.displayValues[e] : f.value, r !== e && (f.onChange && f.onChange(p, f.value, f.displayValue), p.updateValue()))
          }, a && f.updateItems(0, C, 0);
          var S, T, Z, w, L, b, y, X, J, P, M, D, H = !0;
          f.initEvents = function (e) {
            var a = e ? "off" : "on";
            f.container[a](r.touchEvents.start, n), f.container[a](r.touchEvents.move, o), f.container[a](r.touchEvents.end, s), f.items[a]("click", l)
          }, f.destroyEvents = function () {
            f.initEvents(!0)
          }, f.container[0].f7DestroyPickerCol = function () {
            f.destroyEvents()
          }, f.initEvents()
        }
      }, p.destroyPickerCol = function (e) {
        e = i(e), "f7DestroyPickerCol"in e[0] && e[0].f7DestroyPickerCol()
      }, i(window).on("resize", n), p.columnHTML = function (e, a) {
        var t = "", n = "";
        if (e.divider)n += '<div class="picker-items-col picker-items-col-divider ' + (e.textAlign ? "picker-items-col-" + e.textAlign : "") + " " + (e.cssClass || "") + '">' + e.content + "</div>"; else {
          for (var r = 0; r < e.values.length; r++)t += '<div class="picker-item" data-picker-value="' + e.values[r] + '">' + (e.displayValues ? e.displayValues[r] : e.values[r]) + "</div>";
          n += '<div class="picker-items-col ' + (e.textAlign ? "picker-items-col-" + e.textAlign : "") + " " + (e.cssClass || "") + '"><div class="picker-items-col-wrapper">' + t + "</div></div>"
        }
        return a ? t : n
      }, p.layout = function () {
        var e, a = "", t = "";
        p.cols = [];
        var n = "";
        for (e = 0; e < p.params.cols.length; e++) {
          var r = p.params.cols[e];
          n += p.columnHTML(p.params.cols[e]), p.cols.push(r)
        }
        t = "picker-modal picker-columns " + (p.params.cssClass || "") + (p.params.rotateEffect ? " picker-3d" : ""), a = '<div class="' + t + '">' + (p.params.toolbar ? p.params.toolbarTemplate.replace(/{{closeText}}/g, p.params.toolbarCloseText) : "") + '<div class="picker-modal-inner picker-items">' + n + '<div class="picker-center-highlight"></div></div></div>', p.pickerHTML = a
      }, p.params.input && (p.input = i(p.params.input), p.input.length > 0 && (p.params.inputReadOnly && p.input.prop("readOnly", !0), p.inline || p.input.on("click", o), p.params.inputReadOnly && p.input.on("focus mousedown", function (e) {
        e.preventDefault()
      }))), p.inline || i("html").on("click", s), p.opened = !1, p.open = function () {
        var e = a();
        p.opened || (p.layout(), e ? (p.pickerHTML = '<div class="popover popover-picker-columns"><div class="popover-inner">' + p.pickerHTML + "</div></div>", p.popover = r.popover(p.pickerHTML, p.params.input, !0), p.container = i(p.popover).find(".picker-modal"), i(p.popover).on("close", function () {
          l()
        })) : p.inline ? (p.container = i(p.pickerHTML), p.container.addClass("picker-modal-inline"), i(p.params.container).append(p.container)) : (p.container = i(r.pickerModal(p.pickerHTML)), i(p.container).on("close", function () {
          l()
        })), p.container[0].f7Picker = p, p.container.find(".picker-items-col").each(function () {
          var e = !0;
          (!p.initialized && p.params.value || p.initialized && p.value) && (e = !1), p.initPickerCol(this, e)
        }), p.initialized ? p.value && p.setValue(p.value, 0) : p.params.value && p.setValue(p.params.value, 0)), p.opened = !0, p.initialized = !0, p.params.onOpen && p.params.onOpen(p)
      }, p.close = function () {
        return p.opened && !p.inline ? t() ? void r.closeModal(p.popover) : void r.closeModal(p.container) : void 0
      }, p.destroy = function () {
        p.close(), p.params.input && p.input.length > 0 && p.input.off("click focus", o), i("html").off("click", s), i(window).off("resize", n)
      }, p.inline && p.open(), p
    };
    r.picker = function (e) {
      return new v(e)
    };
    var C = function (e) {
      function a() {
        var e = !1;
        return p.params.convertToPopover || p.params.onlyInPopover ? (!p.inline && p.params.input && (p.params.onlyInPopover ? e = !0 : r.device.ios ? e = r.device.ipad ? !0 : !1 : i(window).width() >= 768 && (e = !0)), e) : e
      }

      function t() {
        return p.opened && p.container && p.container.length > 0 && p.container.parents(".popover").length > 0 ? !0 : !1
      }

      function n(e) {
        e = new Date(e);
        var a = e.getFullYear(), t = e.getMonth(), n = t + 1, r = e.getDate(), o = e.getDay();
        return p.params.dateFormat.replace(/yyyy/g, a).replace(/yy/g, (a + "").substring(2)).replace(/mm/g, 10 > n ? "0" + n : n).replace(/m\W+/g, n + "$1").replace(/MM/g, p.params.monthNames[t]).replace(/M\W+/g, p.params.monthNamesShort[t] + "$1").replace(/dd/g, 10 > r ? "0" + r : r).replace(/d\W+/g, r + "$1").replace(/DD/g, p.params.dayNames[o]).replace(/D\W+/g, p.params.dayNamesShort[o] + "$1")
      }

      function o(e) {
        if (e.preventDefault(), !p.opened && (p.open(), p.params.scrollToInput && !a())) {
          var t = p.input.parents(".page-content");
          if (0 === t.length)return;
          var n, r = parseInt(t.css("padding-top"), 10), o = parseInt(t.css("padding-bottom"), 10), i = t[0].offsetHeight - r - p.container.height(), s = t[0].scrollHeight - r - p.container.height(), l = p.input.offset().top - r + p.input[0].offsetHeight;
          if (l > i) {
            var c = t.scrollTop() + l - i;
            c + i > s && (n = c + i - s + o, i === s && (n = p.container.height()), t.css({"padding-bottom": n + "px"})), t.scrollTop(c, 300)
          }
        }
      }

      function s(e) {
        t() || (p.input && p.input.length > 0 ? e.target !== p.input[0] && 0 === i(e.target).parents(".picker-modal").length && p.close() : 0 === i(e.target).parents(".picker-modal").length && p.close())
      }

      function l() {
        p.opened = !1, p.input && p.input.length > 0 && p.input.parents(".page-content").css({"padding-bottom": ""}), p.params.onClose && p.params.onClose(p), p.destroyCalendarEvents()
      }

      var p = this, c = {
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        firstDay: 1,
        weekendDays: [0, 6],
        multiple: !1,
        dateFormat: "yyyy-mm-dd",
        direction: "horizontal",
        minDate: null,
        maxDate: null,
        touchMove: !0,
        animate: !0,
        closeOnSelect: !1,
        monthPicker: !0,
        monthPickerTemplate: '<div class="picker-calendar-month-picker"><a href="#" class="link icon-only picker-calendar-prev-month"><i class="icon icon-prev"></i></a><span class="current-month-value"></span><a href="#" class="link icon-only picker-calendar-next-month"><i class="icon icon-next"></i></a></div>',
        yearPicker: !0,
        yearPickerTemplate: '<div class="picker-calendar-year-picker"><a href="#" class="link icon-only picker-calendar-prev-year"><i class="icon icon-prev"></i></a><span class="current-year-value"></span><a href="#" class="link icon-only picker-calendar-next-year"><i class="icon icon-next"></i></a></div>',
        weekHeader: !0,
        scrollToInput: !0,
        inputReadOnly: !0,
        convertToPopover: !0,
        onlyInPopover: !1,
        toolbar: !0,
        toolbarCloseText: "Done",
        toolbarTemplate: '<div class="toolbar"><div class="toolbar-inner">{{monthPicker}}{{yearPicker}}</div></div>'
      };
      e = e || {};
      for (var d in c)"undefined" == typeof e[d] && (e[d] = c[d]);
      p.params = e, p.initialized = !1, p.inline = p.params.container ? !0 : !1, p.isH = "horizontal" === p.params.direction;
      var u = p.isH && r.rtl ? -1 : 1;
      return p.animating = !1, p.addValue = function (e) {
        if (p.params.multiple) {
          p.value || (p.value = []);
          for (var a, t = 0; t < p.value.length; t++)new Date(e).getTime() === new Date(p.value[t]).getTime() && (a = t);
          "undefined" == typeof a ? p.value.push(e) : p.value.splice(a, 1), p.updateValue()
        } else p.value = [e], p.updateValue()
      }, p.setValue = function (e) {
        p.value = e, p.updateValue()
      }, p.updateValue = function () {
        p.wrapper.find(".picker-calendar-day-selected").removeClass("picker-calendar-day-selected");
        var e, a;
        for (e = 0; e < p.value.length; e++) {
          var t = new Date(p.value[e]);
          p.wrapper.find('.picker-calendar-day[data-date="' + t.getFullYear() + "-" + t.getMonth() + "-" + t.getDate() + '"]').addClass("picker-calendar-day-selected")
        }
        if (p.params.onChange && p.params.onChange(p, p.value), p.input && p.input.length > 0) {
          if (p.params.formatValue)a = p.params.formatValue(p, p.value); else {
            for (a = [], e = 0; e < p.value.length; e++)a.push(n(p.value[e]));
            a = a.join(", ")
          }
          i(p.input).val(a), i(p.input).trigger("change")
        }
      }, p.initCalendarEvents = function () {
        function e(e) {
          s || o || (o = !0, l = f = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, c = f = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, m = (new Date).getTime(), S = 0, w = !0, Z = void 0, g = v = p.monthsTranslate)
        }

        function a(e) {
          if (o) {
            if (d = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, f = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof Z && (Z = !!(Z || Math.abs(f - c) > Math.abs(d - l))), p.isH && Z)return void(o = !1);
            if (e.preventDefault(), p.animating)return void(o = !1);
            w = !1, s || (s = !0, C = p.wrapper[0].offsetWidth, Y = p.wrapper[0].offsetHeight, p.wrapper.transition(0)), e.preventDefault(), T = p.isH ? d - l : f - c, S = T / (p.isH ? C : Y), v = 100 * (p.monthsTranslate * u + S), p.wrapper.transform("translate3d(" + (p.isH ? v : 0) + "%, " + (p.isH ? 0 : v) + "%, 0)")
          }
        }

        function t(e) {
          return o && s ? (o = s = !1, h = (new Date).getTime(), 300 > h - m ? Math.abs(T) < 10 ? p.resetMonth() : T >= 10 ? r.rtl ? p.nextMonth() : p.prevMonth() : r.rtl ? p.prevMonth() : p.nextMonth() : -.5 >= S ? r.rtl ? p.prevMonth() : p.nextMonth() : S >= .5 ? r.rtl ? p.nextMonth() : p.prevMonth() : p.resetMonth(), void setTimeout(function () {
            w = !0
          }, 100)) : void(o = s = !1)
        }

        function n(e) {
          if (w) {
            var a = i(e.target).parents(".picker-calendar-day");
            if (0 === a.length && i(e.target).hasClass("picker-calendar-day") && (a = i(e.target)), 0 !== a.length && (!a.hasClass("picker-calendar-day-selected") || p.params.multiple) && !a.hasClass("picker-calendar-day-disabled")) {
              a.hasClass("picker-calendar-day-next") && p.nextMonth(), a.hasClass("picker-calendar-day-prev") && p.prevMonth();
              var t = a.attr("data-year"), n = a.attr("data-month"), r = a.attr("data-day");
              p.params.onDayClick && p.params.onDayClick(p, a[0], t, n, r), p.addValue(new Date(t, n, r).getTime()), p.params.closeOnSelect && p.close()
            }
          }
        }

        var o, s, l, c, d, f, m, h, g, v, C, Y, S, T, Z, w = !0;
        p.container.find(".picker-calendar-prev-month").on("click", p.prevMonth), p.container.find(".picker-calendar-next-month").on("click", p.nextMonth), p.container.find(".picker-calendar-prev-year").on("click", p.prevYear), p.container.find(".picker-calendar-next-year").on("click", p.nextYear), p.wrapper.on("click", n), p.params.touchMove && (p.wrapper.on(r.touchEvents.start, e), p.wrapper.on(r.touchEvents.move, a), p.wrapper.on(r.touchEvents.end, t)), p.container[0].f7DestroyCalendarEvents = function () {
          p.container.find(".picker-calendar-prev-month").off("click", p.prevMonth), p.container.find(".picker-calendar-next-month").off("click", p.nextMonth), p.container.find(".picker-calendar-prev-year").off("click", p.prevYear), p.container.find(".picker-calendar-next-year").off("click", p.nextYear), p.wrapper.off("click", n), p.params.touchMove && (p.wrapper.off(r.touchEvents.start, e), p.wrapper.off(r.touchEvents.move, a), p.wrapper.off(r.touchEvents.end, t))
        }
      }, p.destroyCalendarEvents = function (e) {
        "f7DestroyCalendarEvents"in p.container[0] && p.container[0].f7DestroyCalendarEvents()
      }, p.daysInMonth = function (e) {
        var a = new Date(e);
        return new Date(a.getFullYear(), a.getMonth() + 1, 0).getDate()
      }, p.monthHTML = function (e, a) {
        e = new Date(e);
        {
          var t = e.getFullYear(), n = e.getMonth();
          e.getDate()
        }
        "next" === a && (e = 11 === n ? new Date(t + 1, 0) : new Date(t, n + 1, 1)), "prev" === a && (e = 0 === n ? new Date(t - 1, 11) : new Date(t, n - 1, 1)), ("next" === a || "prev" === a) && (n = e.getMonth(), t = e.getFullYear());
        var r = p.daysInMonth(new Date(e.getFullYear(), e.getMonth()).getTime() - 864e6), o = p.daysInMonth(e), i = new Date(e.getFullYear(), e.getMonth()).getDay();
        0 === i && (i = 7);
        var s, l, c, d = [], u = 6, f = 7, m = "", h = 0 + (p.params.firstDay - 1), g = (new Date).setHours(0, 0, 0, 0), v = p.params.minDate ? new Date(p.params.minDate).getTime() : null, C = p.params.maxDate ? new Date(p.params.maxDate).getTime() : null;
        if (p.value && p.value.length)for (l = 0; l < p.value.length; l++)d.push(new Date(p.value[l]).setHours(0, 0, 0, 0));
        for (l = 1; u >= l; l++) {
          var Y = "";
          for (c = 1; f >= c; c++) {
            var S = c;
            h++;
            var T = h - i, Z = "";
            0 > T ? (T = r + T + 1, Z += " picker-calendar-day-prev", s = new Date(0 > n - 1 ? t - 1 : t, 0 > n - 1 ? 11 : n - 1, T).getTime()) : (T += 1, T > o ? (T -= o, Z += " picker-calendar-day-next", s = new Date(n + 1 > 11 ? t + 1 : t, n + 1 > 11 ? 0 : n + 1, T).getTime()) : s = new Date(t, n, T).getTime()), s === g && (Z += " picker-calendar-day-today"), d.indexOf(s) >= 0 && (Z += " picker-calendar-day-selected"), p.params.weekendDays.indexOf(S - 1) >= 0 && (Z += " picker-calendar-day-weekend"), (v && v > s || C && s > C) && (Z += " picker-calendar-day-disabled"), s = new Date(s);
            var w = s.getFullYear(), L = s.getMonth();
            Y += '<div data-year="' + w + '" data-month="' + L + '" data-day="' + T + '" class="picker-calendar-day' + Z + '" data-date="' + (w + "-" + L + "-" + T) + '"><span>' + T + "</span></div>"
          }
          m += '<div class="picker-calendar-row">' + Y + "</div>"
        }
        return m = '<div class="picker-calendar-month" data-year="' + t + '" data-month="' + n + '">' + m + "</div>"
      }, p.animating = !1, p.updateCurrentMonthYear = function (e) {
        "undefined" == typeof e ? (p.currentMonth = parseInt(p.months.eq(1).attr("data-month"), 10), p.currentYear = parseInt(p.months.eq(1).attr("data-year"), 10)) : (p.currentMonth = parseInt(p.months.eq("next" === e ? p.months.length - 1 : 0).attr("data-month"), 10), p.currentYear = parseInt(p.months.eq("next" === e ? p.months.length - 1 : 0).attr("data-year"), 10)), p.container.find(".current-month-value").text(p.params.monthNames[p.currentMonth]), p.container.find(".current-year-value").text(p.currentYear)
      }, p.onMonthChangeStart = function (e) {
        p.updateCurrentMonthYear(e), p.months.removeClass("picker-calendar-month-current picker-calendar-month-prev picker-calendar-month-next");
        var a = "next" === e ? p.months.length - 1 : 0;
        p.months.eq(a).addClass("picker-calendar-month-current"), p.months.eq("next" === e ? a - 1 : a + 1).addClass("next" === e ? "picker-calendar-month-prev" : "picker-calendar-month-next"), p.params.onMonthYearChangeStart && p.params.onMonthYearChangeStart(p, p.currentYear, p.currentMonth)
      }, p.onMonthChangeEnd = function (e, a) {
        p.animating = !1;
        var t, n, r;
        p.wrapper.find(".picker-calendar-month:not(.picker-calendar-month-prev):not(.picker-calendar-month-current):not(.picker-calendar-month-next)").remove(), "undefined" == typeof e && (e = "next", a = !0), a ? (p.wrapper.find(".picker-calendar-month-next, .picker-calendar-month-prev").remove(), n = p.monthHTML(new Date(p.currentYear, p.currentMonth), "prev"), t = p.monthHTML(new Date(p.currentYear, p.currentMonth), "next")) : r = p.monthHTML(new Date(p.currentYear, p.currentMonth), e), ("next" === e || a) && p.wrapper.append(r || t), ("prev" === e || a) && p.wrapper.prepend(r || n), p.months = p.wrapper.find(".picker-calendar-month"), p.setMonthsTranslate(p.monthsTranslate), p.params.onMonthAdd && p.params.onMonthAdd(p, "next" === e ? p.months.eq(p.months.length - 1)[0] : p.months.eq(0)[0]), p.params.onMonthYearChangeEnd && p.params.onMonthYearChangeEnd(p, p.currentYear, p.currentMonth)
      }, p.setMonthsTranslate = function (e) {
        e = e || p.monthsTranslate || 0, "undefined" == typeof p.monthsTranslate && (p.monthsTranslate = e), p.months.removeClass("picker-calendar-month-current picker-calendar-month-prev picker-calendar-month-next");
        var a = 100 * -(e + 1) * u, t = 100 * -e * u, n = 100 * -(e - 1) * u;
        p.months.eq(0).transform("translate3d(" + (p.isH ? a : 0) + "%, " + (p.isH ? 0 : a) + "%, 0)").addClass("picker-calendar-month-prev"), p.months.eq(1).transform("translate3d(" + (p.isH ? t : 0) + "%, " + (p.isH ? 0 : t) + "%, 0)").addClass("picker-calendar-month-current"), p.months.eq(2).transform("translate3d(" + (p.isH ? n : 0) + "%, " + (p.isH ? 0 : n) + "%, 0)").addClass("picker-calendar-month-next")
      }, p.nextMonth = function (e) {
        ("undefined" == typeof e || "object" == typeof e) && (e = "", p.params.animate || (e = 0));
        var a = parseInt(p.months.eq(p.months.length - 1).attr("data-month"), 10), t = parseInt(p.months.eq(p.months.length - 1).attr("data-year"), 10), n = new Date(t, a), r = n.getTime(), o = p.animating ? !1 : !0;
        if (p.params.maxDate && r > new Date(p.params.maxDate).getTime())return p.resetMonth();
        if (p.monthsTranslate--, a === p.currentMonth) {
          var s = 100 * -p.monthsTranslate * u, l = i(p.monthHTML(r, "next")).transform("translate3d(" + (p.isH ? s : 0) + "%, " + (p.isH ? 0 : s) + "%, 0)").addClass("picker-calendar-month-next");
          p.wrapper.append(l[0]), p.months = p.wrapper.find(".picker-calendar-month"), p.params.onMonthAdd && p.params.onMonthAdd(p, p.months.eq(p.months.length - 1)[0])
        }
        p.animating = !0, p.onMonthChangeStart("next");
        var c = 100 * p.monthsTranslate * u;
        p.wrapper.transition(e).transform("translate3d(" + (p.isH ? c : 0) + "%, " + (p.isH ? 0 : c) + "%, 0)"), o && p.wrapper.transitionEnd(function () {
          p.onMonthChangeEnd("next")
        }), p.params.animate || p.onMonthChangeEnd("next")
      }, p.prevMonth = function (e) {
        ("undefined" == typeof e || "object" == typeof e) && (e = "", p.params.animate || (e = 0));
        var a = parseInt(p.months.eq(0).attr("data-month"), 10), t = parseInt(p.months.eq(0).attr("data-year"), 10), n = new Date(t, a + 1, -1), r = n.getTime(), o = p.animating ? !1 : !0;
        if (p.params.minDate && r < new Date(p.params.minDate).getTime())return p.resetMonth();
        if (p.monthsTranslate++, a === p.currentMonth) {
          var s = 100 * -p.monthsTranslate * u, l = i(p.monthHTML(r, "prev")).transform("translate3d(" + (p.isH ? s : 0) + "%, " + (p.isH ? 0 : s) + "%, 0)").addClass("picker-calendar-month-prev");
          p.wrapper.prepend(l[0]), p.months = p.wrapper.find(".picker-calendar-month"), p.params.onMonthAdd && p.params.onMonthAdd(p, p.months.eq(0)[0])
        }
        p.animating = !0, p.onMonthChangeStart("prev");
        var c = 100 * p.monthsTranslate * u;
        p.wrapper.transition(e).transform("translate3d(" + (p.isH ? c : 0) + "%, " + (p.isH ? 0 : c) + "%, 0)"), o && p.wrapper.transitionEnd(function () {
          p.onMonthChangeEnd("prev")
        }), p.params.animate || p.onMonthChangeEnd("prev")
      }, p.resetMonth = function (e) {
        "undefined" == typeof e && (e = "");
        var a = 100 * p.monthsTranslate * u;
        p.wrapper.transition(e).transform("translate3d(" + (p.isH ? a : 0) + "%, " + (p.isH ? 0 : a) + "%, 0)")
      }, p.setYearMonth = function (e, a, t) {
        "undefined" == typeof e && (e = p.currentYear), "undefined" == typeof a && (a = p.currentMonth), ("undefined" == typeof t || "object" == typeof t) && (t = "", p.params.animate || (t = 0));
        var n;
        if (n = e < p.currentYear ? new Date(e, a + 1, -1).getTime() : new Date(e, a).getTime(), p.params.maxDate && n > new Date(p.params.maxDate).getTime())return !1;
        if (p.params.minDate && n < new Date(p.params.minDate).getTime())return !1;
        var r = new Date(p.currentYear, p.currentMonth).getTime(), o = n > r ? "next" : "prev", i = p.monthHTML(new Date(e, a));
        p.monthsTranslate = p.monthsTranslate || 0;
        var s, l, c = p.monthsTranslate, d = p.animating ? !1 : !0;
        n > r ? (p.monthsTranslate--, p.animating || p.months.eq(p.months.length - 1).remove(), p.wrapper.append(i), p.months = p.wrapper.find(".picker-calendar-month"), s = 100 * -(c - 1) * u, p.months.eq(p.months.length - 1).transform("translate3d(" + (p.isH ? s : 0) + "%, " + (p.isH ? 0 : s) + "%, 0)").addClass("picker-calendar-month-next")) : (p.monthsTranslate++, p.animating || p.months.eq(0).remove(), p.wrapper.prepend(i), p.months = p.wrapper.find(".picker-calendar-month"), s = 100 * -(c + 1) * u, p.months.eq(0).transform("translate3d(" + (p.isH ? s : 0) + "%, " + (p.isH ? 0 : s) + "%, 0)").addClass("picker-calendar-month-prev")), p.params.onMonthAdd && p.params.onMonthAdd(p, "next" === o ? p.months.eq(p.months.length - 1)[0] : p.months.eq(0)[0]), p.animating = !0, p.onMonthChangeStart(o), l = 100 * p.monthsTranslate * u, p.wrapper.transition(t).transform("translate3d(" + (p.isH ? l : 0) + "%, " + (p.isH ? 0 : l) + "%, 0)"), d && p.wrapper.transitionEnd(function () {
          p.onMonthChangeEnd(o, !0)
        }), p.params.animate || p.onMonthChangeEnd(o)
      }, p.nextYear = function () {
        p.setYearMonth(p.currentYear + 1)
      }, p.prevYear = function () {
        p.setYearMonth(p.currentYear - 1)
      }, p.layout = function () {
        var e, a = "", t = "", n = p.value && p.value.length ? p.value[0] : (new Date).setHours(0, 0, 0, 0), r = p.monthHTML(n, "prev"), o = p.monthHTML(n), i = p.monthHTML(n, "next"), s = '<div class="picker-calendar-months"><div class="picker-calendar-months-wrapper">' + (r + o + i) + "</div></div>", l = "";
        if (p.params.weekHeader) {
          for (e = 0; 7 > e; e++) {
            var c = e + p.params.firstDay > 6 ? e - 7 + p.params.firstDay : e + p.params.firstDay, d = p.params.dayNamesShort[c];
            l += '<div class="picker-calendar-week-day ' + (p.params.weekendDays.indexOf(c) >= 0 ? "picker-calendar-week-day-weekend" : "") + '"> ' + d + "</div>"
          }
          l = '<div class="picker-calendar-week-days">' + l + "</div>"
        }
        t = "picker-modal picker-calendar " + (p.params.cssClass || "");
        var u = p.params.toolbar ? p.params.toolbarTemplate.replace(/{{closeText}}/g, p.params.toolbarCloseText) : "";
        p.params.toolbar && (u = p.params.toolbarTemplate.replace(/{{closeText}}/g, p.params.toolbarCloseText).replace(/{{monthPicker}}/g, p.params.monthPicker ? p.params.monthPickerTemplate : "").replace(/{{yearPicker}}/g, p.params.yearPicker ? p.params.yearPickerTemplate : "")), a = '<div class="' + t + '">' + u + '<div class="picker-modal-inner">' + l + s + "</div></div>", p.pickerHTML = a
      }, p.params.input && (p.input = i(p.params.input), p.input.length > 0 && (p.params.inputReadOnly && p.input.prop("readOnly", !0), p.inline || p.input.on("click", o), p.params.inputReadOnly && p.input.on("focus mousedown", function (e) {
        e.preventDefault()
      }))), p.inline || i("html").on("click", s), p.opened = !1, p.open = function () {
        var e = a(), t = !1;
        p.opened || (p.value || p.params.value && (p.value = p.params.value, t = !0), p.layout(), e ? (p.pickerHTML = '<div class="popover popover-picker-calendar"><div class="popover-inner">' + p.pickerHTML + "</div></div>", p.popover = r.popover(p.pickerHTML, p.params.input, !0), p.container = i(p.popover).find(".picker-modal"), i(p.popover).on("close", function () {
          l()
        })) : p.inline ? (p.container = i(p.pickerHTML), p.container.addClass("picker-modal-inline"), i(p.params.container).append(p.container)) : (p.container = i(r.pickerModal(p.pickerHTML)), i(p.container).on("close", function () {
          l()
        })), p.container[0].f7Calendar = p, p.wrapper = p.container.find(".picker-calendar-months-wrapper"), p.months = p.wrapper.find(".picker-calendar-month"), p.updateCurrentMonthYear(), p.monthsTranslate = 0, p.setMonthsTranslate(), p.initCalendarEvents(), t && p.updateValue()), p.opened = !0, p.initialized = !0, p.params.onMonthAdd && p.months.each(function () {
          p.params.onMonthAdd(p, this)
        }), p.params.onOpen && p.params.onOpen(p)
      }, p.close = function () {
        return p.opened && !p.inline ? t() ? void r.closeModal(p.popover) : void r.closeModal(p.container) : void 0
      }, p.destroy = function () {
        p.close(), p.params.input && p.input.length > 0 && p.input.off("click focus", o), i("html").off("click", s)
      }, p.inline && p.open(), p
    };
    r.calendar = function (e) {
      return new C(e)
    };
    var Y;
    r.addNotification = function (e) {
      if (e) {
        "undefined" == typeof e.media && (e.media = r.params.notificationMedia), "undefined" == typeof e.title && (e.title = r.params.notificationTitle), "undefined" == typeof e.subtitle && (e.subtitle = r.params.notificationSubtitle), "undefined" == typeof e.closeIcon && (e.closeIcon = r.params.notificationCloseIcon), "undefined" == typeof e.hold && (e.hold = r.params.notificationHold), "undefined" == typeof e.closeOnClick && (e.closeOnClick = r.params.notificationCloseOnClick), Y || (Y = document.createElement("div"));
        var a = i(".notifications");
        0 === a.length && (i("body").append('<div class="notifications list-block media-list"><ul></ul></div>'), a = i(".notifications"));
        var t, n = a.children("ul");
        t = e.custom ? "<li>" + e.custom + "</li>" : '<li class="notification-item notification-hidden"><div class="item-content">' + (e.media ? '<div class="item-media">' + e.media + "</div>" : "") + '<div class="item-inner"><div class="item-title-row">' + (e.title ? '<div class="item-title">' + e.title + "</div>" : "") + (e.closeIcon ? '<div class="item-after"><a href="#" class="close-notification"><span></span></a></div>' : "") + "</div>" + (e.subtitle ? '<div class="item-subtitle">' + e.subtitle + "</div>" : "") + (e.message ? '<div class="item-text">' + e.message + "</div>" : "") + "</div></div></li>",
          Y.innerHTML = t;
        var o = i(Y).children();
        o.on("click", function (a) {
          var t = !1;
          i(a.target).is(".close-notification") || i(a.target).parents(".close-notification").length > 0 ? t = !0 : (e.onClick && e.onClick(a, o[0]), e.closeOnClick && (t = !0)), t && r.closeNotification(o[0])
        }), e.onClose && o.data("f7NotificationOnClose", function () {
          e.onClose(o[0])
        }), e.additionalClass && o.addClass(e.additionalClass), e.hold && setTimeout(function () {
          o.length > 0 && r.closeNotification(o[0])
        }, e.hold), n.prepend(o[0]), a.show();
        var s = o.outerHeight();
        o.css("marginTop", -s + "px"), o.transition(0);
        {
          o[0].clientLeft
        }
        return o.transition(""), o.css("marginTop", "0px"), a.transform("translate3d(0, 0,0)"), o.removeClass("notification-hidden"), o[0]
      }
    }, r.closeNotification = function (e) {
      if (e = i(e), 0 !== e.length && !e.hasClass("notification-item-removing")) {
        var a = i(".notifications"), t = e.outerHeight();
        e.css("height", t + "px").transition(0);
        {
          e[0].clientLeft
        }
        e.css("height", "0px").transition("").addClass("notification-item-removing"), e.data("f7NotificationOnClose") && e.data("f7NotificationOnClose")(), 0 === a.find(".notification-item:not(.notification-item-removing)").length && a.transform(""), e.addClass("notification-hidden").transitionEnd(function () {
          e.remove(), 0 === a.find(".notification-item").length && a.hide()
        })
      }
    }, r.initTemplate7Templates = function () {
      window.Template7 && (Template7.templates = Template7.templates || r.params.templates || {}, Template7.data = Template7.data || r.params.template7Data || {}, Template7.cache = Template7.cache || {}, r.templates = Template7.templates, r.template7Data = Template7.data, r.template7Cache = Template7.cache, r.params.precompileTemplates && i('script[type="text/template7"]').each(function () {
        var e = i(this).attr("id");
        e && (Template7.templates[e] = Template7.compile(i(this).html()))
      }))
    };
    var S = [];
    return r.initPlugins = function () {
      for (var e in r.plugins) {
        var a = r.plugins[e](r, r.params[e]);
        a && S.push(a)
      }
    }, r.pluginHook = function (e) {
      for (var a = 0; a < S.length; a++)S[a].hooks && e in S[a].hooks && S[a].hooks[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
    }, r.pluginPrevent = function (e) {
      for (var a = !1, t = 0; t < S.length; t++)S[t].prevents && e in S[t].prevents && S[t].prevents[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) && (a = !0);
      return a
    }, r.pluginProcess = function (e, a) {
      for (var t = a, n = 0; n < S.length; n++)S[n].preprocess && process in S[n].preprocess && (t = S[n].preprocess[process](a, arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]));
      return t
    }, r.init = function () {
      r.initTemplate7Templates && r.initTemplate7Templates(), r.initPlugins && r.initPlugins(), r.getDeviceInfo && r.getDeviceInfo(), r.initFastClicks && r.params.fastClicks && r.initFastClicks(), r.initClickEvents && r.initClickEvents(), i(".page:not(.cached)").each(function () {
        r.initPageWithCallback(this)
      }), i(".navbar:not(.cached)").each(function () {
        r.initNavbarWithCallback(this)
      }), r.initResize && r.initResize(), r.initPushState && r.params.pushState && r.initPushState(), r.initSwipeout && r.params.swipeout && r.initSwipeout(), r.initSortable && r.params.sortable && r.initSortable(), r.initSwipePanels && (r.params.swipePanel || r.params.swipePanelOnlyClose) && r.initSwipePanels(), r.params.onAppInit && r.params.onAppInit(), r.pluginHook("appInit")
    }, r.params.init && r.init(), r
  };
  var Dom7 = function () {
    var e = function (e) {
      var a = this, t = 0;
      for (t = 0; t < e.length; t++)a[t] = e[t];
      return a.length = e.length, this
    }, a = function (a, t) {
      var n = [], r = 0;
      if (a && !t && a instanceof e)return a;
      if (a)if ("string" == typeof a) {
        var o, i, s = a.trim();
        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
          var l = "div";
          for (0 === s.indexOf("<li") && (l = "ul"), 0 === s.indexOf("<tr") && (l = "tbody"), (0 === s.indexOf("<td") || 0 === s.indexOf("<th")) && (l = "tr"), 0 === s.indexOf("<tbody") && (l = "table"), 0 === s.indexOf("<option") && (l = "select"), i = document.createElement(l), i.innerHTML = a, r = 0; r < i.childNodes.length; r++)n.push(i.childNodes[r])
        } else for (o = t || "#" !== a[0] || a.match(/[ .<>:~]/) ? (t || document).querySelectorAll(a) : [document.getElementById(a.split("#")[1])], r = 0; r < o.length; r++)o[r] && n.push(o[r])
      } else if (a.nodeType || a === window || a === document)n.push(a); else if (a.length > 0 && a[0].nodeType)for (r = 0; r < a.length; r++)n.push(a[r]);
      return new e(n)
    };
    e.prototype = {
      addClass: function (e) {
        if ("undefined" == typeof e)return this;
        for (var a = e.split(" "), t = 0; t < a.length; t++)for (var n = 0; n < this.length; n++)"undefined" != typeof this[n].classList && this[n].classList.add(a[t]);
        return this
      }, removeClass: function (e) {
        for (var a = e.split(" "), t = 0; t < a.length; t++)for (var n = 0; n < this.length; n++)"undefined" != typeof this[n].classList && this[n].classList.remove(a[t]);
        return this
      }, hasClass: function (e) {
        return this[0] ? this[0].classList.contains(e) : !1
      }, toggleClass: function (e) {
        for (var a = e.split(" "), t = 0; t < a.length; t++)for (var n = 0; n < this.length; n++)"undefined" != typeof this[n].classList && this[n].classList.toggle(a[t]);
        return this
      }, attr: function (e, a) {
        if (1 === arguments.length && "string" == typeof e)return this[0] ? this[0].getAttribute(e) : void 0;
        for (var t = 0; t < this.length; t++)if (2 === arguments.length)this[t].setAttribute(e, a); else for (var n in e)this[t][n] = e[n], this[t].setAttribute(n, e[n]);
        return this
      }, removeAttr: function (e) {
        for (var a = 0; a < this.length; a++)this[a].removeAttribute(e);
        return this
      }, prop: function (e, a) {
        if (1 === arguments.length && "string" == typeof e)return this[0] ? this[0][e] : void 0;
        for (var t = 0; t < this.length; t++)if (2 === arguments.length)this[t][e] = a; else for (var n in e)this[t][n] = e[n];
        return this
      }, data: function (e, a) {
        if ("undefined" == typeof a) {
          if (this[0]) {
            var t = this[0].getAttribute("data-" + e);
            return t ? t : this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0
          }
          return void 0
        }
        for (var n = 0; n < this.length; n++) {
          var r = this[n];
          r.dom7ElementDataStorage || (r.dom7ElementDataStorage = {}), r.dom7ElementDataStorage[e] = a
        }
        return this
      }, removeData: function (e) {
        for (var a = 0; a < this.length; a++) {
          var t = this[a];
          t.dom7ElementDataStorage && t.dom7ElementDataStorage[e] && (t.dom7ElementDataStorage[e] = null, delete t.dom7ElementDataStorage[e])
        }
      }, dataset: function () {
        var e = this[0];
        if (e) {
          var t = {};
          if (e.dataset)for (var n in e.dataset)t[n] = e.dataset[n]; else for (var r = 0; r < e.attributes.length; r++) {
            var o = e.attributes[r];
            o.name.indexOf("data-") >= 0 && (t[a.toCamelCase(o.name.split("data-")[1])] = o.value)
          }
          for (var i in t)"false" === t[i] ? t[i] = !1 : "true" === t[i] ? t[i] = !0 : parseFloat(t[i]) === 1 * t[i] && (t[i] = 1 * t[i]);
          return t
        }
        return void 0
      }, val: function (e) {
        if ("undefined" == typeof e)return this[0] ? this[0].value : void 0;
        for (var a = 0; a < this.length; a++)this[a].value = e;
        return this
      }, transform: function (e) {
        for (var a = 0; a < this.length; a++) {
          var t = this[a].style;
          t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
        }
        return this
      }, transition: function (e) {
        "string" != typeof e && (e += "ms");
        for (var a = 0; a < this.length; a++) {
          var t = this[a].style;
          t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
        }
        return this
      }, on: function (e, t, n, r) {
        function o(e) {
          var r = e.target;
          if (a(r).is(t))n.call(r, e); else for (var o = a(r).parents(), i = 0; i < o.length; i++)a(o[i]).is(t) && n.call(o[i], e)
        }

        var i, s, l = e.split(" ");
        for (i = 0; i < this.length; i++)if ("function" == typeof t || t === !1)for ("function" == typeof t && (n = arguments[1], r = arguments[2] || !1), s = 0; s < l.length; s++)this[i].addEventListener(l[s], n, r); else for (s = 0; s < l.length; s++)this[i].dom7LiveListeners || (this[i].dom7LiveListeners = []), this[i].dom7LiveListeners.push({
          listener: n,
          liveListener: o
        }), this[i].addEventListener(l[s], o, r);
        return this
      }, off: function (e, a, t, n) {
        for (var r = e.split(" "), o = 0; o < r.length; o++)for (var i = 0; i < this.length; i++)if ("function" == typeof a || a === !1)"function" == typeof a && (t = arguments[1], n = arguments[2] || !1), this[i].removeEventListener(r[o], t, n); else if (this[i].dom7LiveListeners)for (var s = 0; s < this[i].dom7LiveListeners.length; s++)this[i].dom7LiveListeners[s].listener === t && this[i].removeEventListener(r[o], this[i].dom7LiveListeners[s].liveListener, n);
        return this
      }, once: function (e, a, t, n) {
        function r(i) {
          t(i), o.off(e, a, r, n)
        }

        var o = this;
        "function" == typeof a && (t = arguments[1], n = arguments[2], a = !1), o.on(e, a, r, n)
      }, trigger: function (e, a) {
        for (var t = 0; t < this.length; t++) {
          var n;
          try {
            n = new CustomEvent(e, {detail: a, bubbles: !0, cancelable: !0})
          } catch (r) {
            n = document.createEvent("Event"), n.initEvent(e, !0, !0), n.detail = a
          }
          this[t].dispatchEvent(n)
        }
        return this
      }, transitionEnd: function (e) {
        function a(o) {
          if (o.target === this)for (e.call(r, o), t = 0; t < n.length; t++)r.off(n[t], a)
        }

        var t, n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], r = this;
        if (e)for (t = 0; t < n.length; t++)r.on(n[t], a);
        return this
      }, animationEnd: function (e) {
        function a(o) {
          for (e.call(r, o), t = 0; t < n.length; t++)r.off(n[t], a)
        }

        var t, n = ["webkitAnimationEnd", "OAnimationEnd", "MSAnimationEnd", "animationend"], r = this;
        if (e)for (t = 0; t < n.length; t++)r.on(n[t], a);
        return this
      }, width: function () {
        return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
      }, outerWidth: function (e) {
        return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
      }, height: function () {
        return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
      }, outerHeight: function (e) {
        return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
      }, offset: function () {
        if (this.length > 0) {
          var e = this[0], a = e.getBoundingClientRect(), t = document.body, n = e.clientTop || t.clientTop || 0, r = e.clientLeft || t.clientLeft || 0, o = window.pageYOffset || e.scrollTop, i = window.pageXOffset || e.scrollLeft;
          return {top: a.top + o - n, left: a.left + i - r}
        }
        return null
      }, hide: function () {
        for (var e = 0; e < this.length; e++)this[e].style.display = "none";
        return this
      }, show: function () {
        for (var e = 0; e < this.length; e++)this[e].style.display = "block";
        return this
      }, styles: function () {
        return this[0] ? window.getComputedStyle(this[0], null) : void 0
      }, css: function (e, a) {
        var t;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (t = 0; t < this.length; t++)for (var n in e)this[t].style[n] = e[n];
            return this
          }
          if (this[0])return window.getComputedStyle(this[0], null).getPropertyValue(e)
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (t = 0; t < this.length; t++)this[t].style[e] = a;
          return this
        }
        return this
      }, each: function (e) {
        for (var a = 0; a < this.length; a++)e.call(this[a], a, this[a]);
        return this
      }, filter: function (a) {
        for (var t = [], n = this, r = 0; r < n.length; r++)a.call(n[r], r, n[r]) && t.push(n[r]);
        return new e(t)
      }, html: function (e) {
        if ("undefined" == typeof e)return this[0] ? this[0].innerHTML : void 0;
        for (var a = 0; a < this.length; a++)this[a].innerHTML = e;
        return this
      }, text: function (e) {
        if ("undefined" == typeof e)return this[0] ? this[0].textContent.trim() : null;
        for (var a = 0; a < this.length; a++)this[a].textContent = e
      }, is: function (t) {
        if (!this[0] || "undefined" == typeof t)return !1;
        var n, r;
        if ("string" == typeof t) {
          var o = this[0];
          if (o === document)return t === document;
          if (o === window)return t === window;
          if (o.matches)return o.matches(t);
          if (o.webkitMatchesSelector)return o.webkitMatchesSelector(t);
          if (o.mozMatchesSelector)return o.mozMatchesSelector(t);
          if (o.msMatchesSelector)return o.msMatchesSelector(t);
          for (n = a(t), r = 0; r < n.length; r++)if (n[r] === this[0])return !0;
          return !1
        }
        if (t === document)return this[0] === document;
        if (t === window)return this[0] === window;
        if (t.nodeType || t instanceof e) {
          for (n = t.nodeType ? [t] : t, r = 0; r < n.length; r++)if (n[r] === this[0])return !0;
          return !1
        }
        return !1
      }, indexOf: function (e) {
        for (var a = 0; a < this.length; a++)if (this[a] === e)return a
      }, index: function () {
        if (this[0]) {
          for (var e = this[0], a = 0; null !== (e = e.previousSibling);)1 === e.nodeType && a++;
          return a
        }
        return void 0
      }, eq: function (a) {
        if ("undefined" == typeof a)return this;
        var t, n = this.length;
        return a > n - 1 ? new e([]) : 0 > a ? (t = n + a, new e(0 > t ? [] : [this[t]])) : new e([this[a]])
      }, append: function (a) {
        var t, n;
        for (t = 0; t < this.length; t++)if ("string" == typeof a) {
          var r = document.createElement("div");
          for (r.innerHTML = a; r.firstChild;)this[t].appendChild(r.firstChild)
        } else if (a instanceof e)for (n = 0; n < a.length; n++)this[t].appendChild(a[n]); else this[t].appendChild(a);
        return this
      }, prepend: function (a) {
        var t, n;
        for (t = 0; t < this.length; t++)if ("string" == typeof a) {
          var r = document.createElement("div");
          for (r.innerHTML = a, n = r.childNodes.length - 1; n >= 0; n--)this[t].insertBefore(r.childNodes[n], this[t].childNodes[0])
        } else if (a instanceof e)for (n = 0; n < a.length; n++)this[t].insertBefore(a[n], this[t].childNodes[0]); else this[t].insertBefore(a, this[t].childNodes[0]);
        return this
      }, insertBefore: function (e) {
        for (var t = a(e), n = 0; n < this.length; n++)if (1 === t.length)t[0].parentNode.insertBefore(this[n], t[0]); else if (t.length > 1)for (var r = 0; r < t.length; r++)t[r].parentNode.insertBefore(this[n].cloneNode(!0), t[r])
      }, insertAfter: function (e) {
        for (var t = a(e), n = 0; n < this.length; n++)if (1 === t.length)t[0].parentNode.insertBefore(this[n], t[0].nextSibling); else if (t.length > 1)for (var r = 0; r < t.length; r++)t[r].parentNode.insertBefore(this[n].cloneNode(!0), t[r].nextSibling)
      }, next: function (t) {
        return new e(this.length > 0 ? t ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
      }, nextAll: function (t) {
        var n = [], r = this[0];
        if (!r)return new e([]);
        for (; r.nextElementSibling;) {
          var o = r.nextElementSibling;
          t ? a(o).is(t) && n.push(o) : n.push(o), r = o
        }
        return new e(n)
      }, prev: function (t) {
        return new e(this.length > 0 ? t ? this[0].previousElementSibling && a(this[0].previousElementSibling).is(t) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
      }, prevAll: function (t) {
        var n = [], r = this[0];
        if (!r)return new e([]);
        for (; r.previousElementSibling;) {
          var o = r.previousElementSibling;
          t ? a(o).is(t) && n.push(o) : n.push(o), r = o
        }
        return new e(n)
      }, parent: function (e) {
        for (var t = [], n = 0; n < this.length; n++)e ? a(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode);
        return a(a.unique(t))
      }, parents: function (e) {
        for (var t = [], n = 0; n < this.length; n++)for (var r = this[n].parentNode; r;)e ? a(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
        return a(a.unique(t))
      }, find: function (a) {
        for (var t = [], n = 0; n < this.length; n++)for (var r = this[n].querySelectorAll(a), o = 0; o < r.length; o++)t.push(r[o]);
        return new e(t)
      }, children: function (t) {
        for (var n = [], r = 0; r < this.length; r++)for (var o = this[r].childNodes, i = 0; i < o.length; i++)t ? 1 === o[i].nodeType && a(o[i]).is(t) && n.push(o[i]) : 1 === o[i].nodeType && n.push(o[i]);
        return new e(a.unique(n))
      }, remove: function () {
        for (var e = 0; e < this.length; e++)this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this
      }, detach: function () {
        return this.remove()
      }, add: function () {
        var e, t, n = this;
        for (e = 0; e < arguments.length; e++) {
          var r = a(arguments[e]);
          for (t = 0; t < r.length; t++)n[n.length] = r[t], n.length++
        }
        return n
      }
    }, function () {
      function t(t) {
        e.prototype[t] = function (e) {
          var n;
          if ("undefined" == typeof e) {
            for (n = 0; n < this.length; n++)r.indexOf(t) < 0 && (t in this[n] ? this[n][t]() : a(this[n]).trigger(t));
            return this
          }
          return this.on(t, e)
        }
      }

      for (var n = "click blur focus focusin focusout keyup keydown keypress submit change mousedown mousemove mouseup mouseenter mouseleave mouseout mouseover touchstart touchend touchmove resize scroll".split(" "), r = "resize scroll".split(" "), o = 0; o < n.length; o++)t(n[o])
    }();
    var t = {};
    a.ajaxSetup = function (e) {
      e.type && (e.method = e.type), a.each(e, function (e, a) {
        t[e] = a
      })
    };
    var n = 0;
    return a.ajax = function (e) {
      function r(n, r, o) {
        var i = arguments;
        n && a(document).trigger(n, r), o && (o in t && e.global !== !1 && t[o](i[3], i[4], i[5], i[6]), e[o] && e[o](i[3], i[4], i[5], i[6]))
      }

      var o = {
        method: "GET",
        data: !1,
        async: !0,
        cache: !0,
        user: "",
        password: "",
        headers: {},
        xhrFields: {},
        statusCode: {},
        processData: !0,
        dataType: "text",
        contentType: "application/x-www-form-urlencoded",
        timeout: 0
      };
      e.type && (e.method = e.type), a.each(o, function (a, t) {
        a in e || (e[a] = t)
      }), e.url = e.url ? decodeURIComponent(e.url) : window.location.toString();
      var i = e.url.indexOf("?") >= 0 ? "&" : "?", s = e.method.toUpperCase();
      if (("GET" === s || "HEAD" === s) && e.data) {
        var l;
        l = "string" == typeof e.data ? e.data.indexOf("?") >= 0 ? e.data.split("?")[1] : e.data : a.serializeObject(e.data), e.url += i + l
      }
      if ("json" === e.dataType && e.url.indexOf("callback=") >= 0) {
        var p, c = "f7jsonp_" + Date.now() + n++, d = e.url.split("callback="), u = d[0] + "callback=" + c;
        if (d[1].indexOf("&") >= 0) {
          var f = d[1].split("&").filter(function (e) {
            return e.indexOf("=") > 0
          }).join("&");
          f.length > 0 && (u += "&" + f)
        }
        var m = document.createElement("script");
        return m.type = "text/javascript", m.onerror = function () {
          clearTimeout(p), r(void 0, void 0, "error", null, "scripterror")
        }, m.src = u, window[c] = function (e) {
          clearTimeout(p), r(void 0, void 0, "success", e), m.parentNode.removeChild(m), m = null, delete window[c]
        }, document.querySelector("head").appendChild(m), void(e.timeout > 0 && (p = setTimeout(function () {
          m.parentNode.removeChild(m), m = null, r(void 0, void 0, "error", null, "timeout")
        }, e.timeout)))
      }
      ("GET" === s || "HEAD" === s) && (e.cache === !1 || "text" === e.dataType) && (e.url += e.url.split("?").length > 1 ? "&_nocache=" + Date.now() : "?_nocache=" + Date.now());
      var h = new XMLHttpRequest;
      h.requestUrl = e.url, h.requestParameters = e, h.open(s, e.url, e.async, e.user, e.password);
      var g = null;
      if (("POST" === s || "PUT" === s) && e.data)if (e.processData) {
        var v = [ArrayBuffer, Blob, Document, FormData];
        if (v.indexOf(e.data.constructor) >= 0)g = e.data; else {
          var C = "---------------------------" + Date.now().toString(16);
          "multipart/form-data" === e.contentType ? h.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + C) : h.setRequestHeader("Content-Type", e.contentType), g = "";
          var Y = a.serializeObject(e.data);
          if ("multipart/form-data" === e.contentType) {
            C = "---------------------------" + Date.now().toString(16), Y = Y.split("&");
            for (var S = [], T = 0; T < Y.length; T++)S.push('Content-Disposition: form-data; name="' + Y[T].split("=")[0] + '"\r\n\r\n' + Y[T].split("=")[1] + "\r\n");
            g = "--" + C + "\r\n" + S.join("--" + C + "\r\n") + "--" + C + "--\r\n"
          } else g = "application/x-www-form-urlencoded" === e.contentType ? Y : Y.replace(/&/g, "\r\n")
        }
      } else g = e.data;
      e.headers && a.each(e.headers, function (e, a) {
        h.setRequestHeader(e, a)
      }), "undefined" == typeof e.crossDomain && (e.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(e.url) && RegExp.$2 !== window.location.host), e.crossDomain || h.setRequestHeader("X-Requested-With", "XMLHttpRequest"), e.xhrFields && a.each(e.xhrFields, function (e, a) {
        h[e] = a
      });
      var Z;
      return h.onload = function (a) {
        if (Z && clearTimeout(Z), h.status >= 200 && h.status < 300 || 0 === h.status) {
          var n;
          if ("json" === e.dataType) {
            var o = !1;
            try {
              n = h.responseText && JSON.parse(h.responseText) || h.responseText
            } catch (i) {
              o = !0, r("ajaxError", {xhr: h, parseerror: !0}, "error", h, "parseerror")
            }
            o === !1 && r("ajaxSuccess", {xhr: h}, "success", n, h.status, h)
          } else r("ajaxSuccess", {xhr: h}, "success", h.responseText, h.status, h)
        } else r("ajaxError", {xhr: h}, "error", h, h.status);
        e.statusCode && (t.statusCode && t.statusCode[h.status] && t.statusCode[h.status](h), e.statusCode[h.status] && e.statusCode[h.status](h)), r("ajaxComplete", {xhr: h}, "complete", h, h.status)
      }, h.onerror = function (e) {
        Z && clearTimeout(Z), r("ajaxError", {xhr: h}, "error", h, h.status)
      }, r("ajaxStart", {xhr: h}, "start", h), r(void 0, void 0, "beforeSend", h), h.send(g), e.timeout > 0 && (Z = setTimeout(function () {
        h.abort(), r("ajaxError", {xhr: h, timeout: !0}, "error", h, "timeout"), r("ajaxComplete", {
          xhr: h,
          timeout: !0
        }, "complete", h, "timeout")
      }, e.timeout)), h
    }, function () {
      function e(e) {
        a[e] = function (t, n, r) {
          return a.ajax({
            url: t,
            method: "post" === e ? "POST" : "GET",
            data: "function" == typeof n ? void 0 : n,
            success: "function" == typeof n ? n : r,
            dataType: "getJSON" === e ? "json" : void 0
          })
        }
      }

      for (var t = "get post getJSON".split(" "), n = 0; n < t.length; n++)e(t[n])
    }(), a.parseUrlQuery = function (e) {
      var a, t, n, r = {};
      if (!(e.indexOf("?") >= 0))return r;
      for (e = e.split("?")[1], t = e.split("&"), a = 0; a < t.length; a++)n = t[a].split("="), r[n[0]] = n[1];
      return r
    }, a.isArray = function (e) {
      return "[object Array]" === Object.prototype.toString.apply(e) ? !0 : !1
    }, a.each = function (t, n) {
      if ("object" == typeof t && n) {
        var r, o;
        if (a.isArray(t) || t instanceof e)for (r = 0; r < t.length; r++)n(r, t[r]); else for (o in t)t.hasOwnProperty(o) && n(o, t[o])
      }
    }, a.unique = function (e) {
      for (var a = [], t = 0; t < e.length; t++)-1 === a.indexOf(e[t]) && a.push(e[t]);
      return a
    }, a.serializeObject = function (e) {
      if ("string" == typeof e)return e;
      var t = [], n = "&";
      for (var r in e)if (e.hasOwnProperty(r))if (a.isArray(e[r])) {
        for (var o = [], i = 0; i < e[r].length; i++)o.push(encodeURIComponent(r) + "=" + encodeURIComponent(e[r][i]));
        o.length > 0 && t.push(o.join(n))
      } else t.push(encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
      return t.join(n)
    }, a.toCamelCase = function (e) {
      return e.toLowerCase().replace(/-(.)/g, function (e, a) {
        return a.toUpperCase()
      })
    }, a.dataset = function (e) {
      return a(e).dataset()
    }, a.getTranslate = function (e, a) {
      var t, n, r, o;
      return "undefined" == typeof a && (a = "x"), r = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? o = new WebKitCSSMatrix("none" === r.webkitTransform ? "" : r.webkitTransform) : (o = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = o.toString().split(",")), "x" === a && (n = window.WebKitCSSMatrix ? o.m41 : parseFloat(16 === t.length ? t[12] : t[4])), "y" === a && (n = window.WebKitCSSMatrix ? o.m42 : parseFloat(16 === t.length ? t[13] : t[5])), n || 0
    }, a.requestAnimationFrame = function (e) {
      return window.requestAnimationFrame ? window.requestAnimationFrame(e) : window.webkitRequestAnimationFrame ? window.webkitRequestAnimationFrame(e) : window.mozRequestAnimationFrame ? window.mozRequestAnimationFrame(e) : window.setTimeout(e, 1e3 / 60)
    }, a.cancelAnimationFrame = function (e) {
      return window.cancelAnimationFrame ? window.cancelAnimationFrame(e) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(e) : window.mozCancelAnimationFrame ? window.mozCancelAnimationFrame(e) : window.clearTimeout(e)
    }, a.supportTouch = !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch), a.fn = e.prototype, a.fn.scrollTo = function (e, t, n, r, o) {
      return 4 === arguments.length && "function" == typeof r && (o = r, r = void 0), this.each(function () {
        function i(e) {
          void 0 === e && (e = (new Date).getTime()), null === C && (C = e);
          var t, p = Math.max(Math.min((e - C) / n, 1), 0), c = "linear" === r ? p : .5 - Math.cos(p * Math.PI) / 2;
          return g && (f = s + c * (d - s)), v && (m = l + c * (u - l)), g && d > s && f >= d && (h.scrollTop = d, t = !0), g && s > d && d >= f && (h.scrollTop = d, t = !0), v && u > l && m >= u && (h.scrollLeft = u, t = !0), v && l > u && u >= m && (h.scrollLeft = u, t = !0), t ? void(o && o()) : (g && (h.scrollTop = f), v && (h.scrollLeft = m), void a.requestAnimationFrame(i))
        }

        var s, l, p, c, d, u, f, m, h = this, g = t > 0 || 0 === t, v = e > 0 || 0 === e;
        if ("undefined" == typeof r && (r = "swing"), g && (s = h.scrollTop, n || (h.scrollTop = t)), v && (l = h.scrollLeft, n || (h.scrollLeft = e)), n) {
          g && (p = h.scrollHeight - h.offsetHeight, d = Math.max(Math.min(t, p), 0)), v && (c = h.scrollWidth - h.offsetWidth, u = Math.max(Math.min(e, c), 0));
          var C = null;
          g && d === s && (g = !1), v && u === l && (v = !1), a.requestAnimationFrame(i)
        }
      })
    }, a.fn.scrollTop = function (e, a, t, n) {
      3 === arguments.length && "function" == typeof t && (n = t, t = void 0);
      var r = this;
      return "undefined" == typeof e ? r.length > 0 ? r[0].scrollTop : null : r.scrollTo(void 0, e, a, t, n)
    }, a.fn.scrollLeft = function (e, a, t, n) {
      3 === arguments.length && "function" == typeof t && (n = t, t = void 0);
      var r = this;
      return "undefined" == typeof e ? r.length > 0 ? r[0].scrollLeft : null : r.scrollTo(e, void 0, a, t, n)
    }, a
  }();
  Framework7.$ = Dom7;
  var $ = Dom7;
  window.Dom7 = Dom7, Framework7.prototype.support = function () {
    var e = {touch: !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch)};
    return e
  }(), Framework7.prototype.device = function () {
    var e = {}, a = navigator.userAgent, t = Dom7, n = a.match(/(Android);?[\s\/]+([\d.]+)?/), r = a.match(/(iPad).*OS\s([\d_]+)/), o = a.match(/(iPod)(.*OS\s([\d_]+))?/), i = !r && a.match(/(iPhone\sOS)\s([\d_]+)/);
    if (e.ios = e.android = e.iphone = e.ipad = e.androidChrome = !1, n && (e.os = "android", e.osVersion = n[2], e.android = !0, e.androidChrome = a.toLowerCase().indexOf("chrome") >= 0), (r || i || o) && (e.os = "ios", e.ios = !0), i && !o && (e.osVersion = i[2].replace(/_/g, "."), e.iphone = !0), r && (e.osVersion = r[2].replace(/_/g, "."), e.ipad = !0), o && (e.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, e.iphone = !0), e.ios && e.osVersion && a.indexOf("Version/") >= 0 && "10" === e.osVersion.split(".")[0] && (e.osVersion = a.toLowerCase().split("version/")[1].split(" ")[0]), e.webView = (i || r || o || n) && a.match(/.*AppleWebKit(?!.*Safari)/i), e.microMessenger = (i || r || o || n) && a.match(/.*AppleWebKit(?=.*MicroMessenger)/i), e.os && "ios" === e.os) {
      var s = e.osVersion.split(".");
      e.minimalUi = !e.webView && (o || i) && (1 * s[0] === 7 ? 1 * s[1] >= 1 : 1 * s[0] > 7) && t('meta[name="viewport"]').length > 0 && t('meta[name="viewport"]').attr("content").indexOf("minimal-ui") >= 0
    }
    var l = t(window).width(), p = t(window).height();
    e.statusBar = !1, e.statusBar = e.webView && l * p === screen.width * screen.height ? !0 : !1;
    var c = [];
    if (e.pixelRatio = window.devicePixelRatio || 1, c.push("pixel-ratio-" + Math.floor(e.pixelRatio)), e.pixelRatio >= 2 && c.push("retina"), e.os && (c.push(e.os, e.os + "-" + e.osVersion.split(".")[0], e.os + "-" + e.osVersion.replace(/\./g, "-")), "ios" === e.os))for (var d = parseInt(e.osVersion.split(".")[0], 10), u = d - 1; u >= 6; u--)c.push("ios-gt-" + u);
    return e.statusBar ? c.push("with-statusbar-overlay") : t("html").removeClass("with-statusbar-overlay"), c.length > 0 && t("html").addClass(c.join(" ")), e
  }(), Framework7.prototype.plugins = {}, window.Template7 = function () {
    function isArray(e) {
      return "[object Array]" === Object.prototype.toString.apply(e)
    }

    function isObject(e) {
      return e instanceof Object
    }

    function isFunction(e) {
      return "function" == typeof e
    }

    function helperToSlices(e) {
      var a, t, n, r = e.replace(/[{}#}]/g, "").split(" "), o = [];
      for (t = 0; t < r.length; t++) {
        var i = r[t];
        if (0 === t)o.push(i); else if (0 === i.indexOf('"'))if (2 === i.match(/"/g).length)o.push(i); else {
          for (a = 0, n = t + 1; n < r.length; n++)if (i += " " + r[n], r[n].indexOf('"') >= 0) {
            a = n, o.push(i);
            break
          }
          a && (t = a)
        } else if (i.indexOf("=") > 0) {
          var s = i.split("="), l = s[0], p = s[1];
          if (2 !== p.match(/"/g).length) {
            for (a = 0, n = t + 1; n < r.length; n++)if (p += " " + r[n], r[n].indexOf('"') >= 0) {
              a = n;
              break
            }
            a && (t = a)
          }
          var c = [l, p.replace(/"/g, "")];
          o.push(c)
        } else o.push(i)
      }
      return o
    }

    function stringToBlocks(e) {
      var a, t, n = [];
      if (!e)return [];
      var r = e.split(/({{[^{^}]*}})/);
      for (a = 0; a < r.length; a++) {
        var o = r[a];
        if ("" !== o)if (o.indexOf("{{") < 0)n.push({type: "plain", content: o}); else {
          if (o.indexOf("{/") >= 0)continue;
          if (o.indexOf("{#") < 0 && o.indexOf(" ") < 0 && o.indexOf("else") < 0) {
            n.push({type: "variable", contextName: o.replace(/[{}]/g, "")});
            continue
          }
          var i = helperToSlices(o), s = i[0], l = ">" === s, p = [], c = {};
          for (t = 1; t < i.length; t++) {
            var d = i[t];
            isArray(d) ? c[d[0]] = "false" === d[1] ? !1 : d[1] : p.push(d)
          }
          if (o.indexOf("{#") >= 0) {
            var u, f = "", m = "", h = 0, g = !1, v = !1, C = 0;
            for (t = a + 1; t < r.length; t++)if (r[t].indexOf("{{#") >= 0 && C++, r[t].indexOf("{{/") >= 0 && C--, r[t].indexOf("{{#" + s) >= 0)f += r[t], v && (m += r[t]), h++; else if (r[t].indexOf("{{/" + s) >= 0) {
              if (!(h > 0)) {
                u = t, g = !0;
                break
              }
              h--, f += r[t], v && (m += r[t])
            } else r[t].indexOf("else") >= 0 && 0 === C ? v = !0 : (v || (f += r[t]), v && (m += r[t]));
            g && (u && (a = u), n.push({
              type: "helper",
              helperName: s,
              contextName: p,
              content: f,
              inverseContent: m,
              hash: c
            }))
          } else o.indexOf(" ") > 0 && (l && (s = "_partial", p[0] && (p[0] = '"' + p[0].replace(/"|'/g, "") + '"')), n.push({
            type: "helper",
            helperName: s,
            contextName: p,
            hash: c
          }))
        }
      }
      return n
    }

    var cache = {}, Template7 = function (e) {
      function a(e, a) {
        return e.content ? o(e.content, a) : function () {
          return ""
        }
      }

      function t(e, a) {
        return e.inverseContent ? o(e.inverseContent, a) : function () {
          return ""
        }
      }

      function n(e, a) {
        var t, n, r = 0;
        if (0 === e.indexOf("../")) {
          r = e.split("../").length - 1;
          var o = a.split("_")[1] - r;
          a = "ctx_" + (o >= 1 ? o : 1), n = e.split("../")[r].split(".")
        } else 0 === e.indexOf("@global") ? (a = "Template7.global", n = e.split("@global.")[1].split(".")) : 0 === e.indexOf("@root") ? (a = "ctx_1", n = e.split("@root.")[1].split(".")) : n = e.split(".");
        t = a;
        for (var i = 0; i < n.length; i++) {
          var s = n[i];
          0 === s.indexOf("@") ? i > 0 ? t += "[(data && data." + s.replace("@", "") + ")]" : t = "(data && data." + e.replace("@", "") + ")" : isFinite(s) ? t += "[" + s + "]" : 0 === s.indexOf("this") ? t = s.replace("this", a) : t += "." + s
        }
        return t
      }

      function r(e, a) {
        for (var t = [], r = 0; r < e.length; r++)t.push(0 === e[r].indexOf('"') ? e[r] : n(e[r], a));
        return t.join(", ")
      }

      function o(e, o) {
        if (o = o || 1, e = e || i.template, "string" != typeof e)throw new Error("Template7: Template must be a string");
        var s = stringToBlocks(e);
        if (0 === s.length)return function () {
          return ""
        };
        var l = "ctx_" + o, p = "(function (" + l + ", data) {\n";
        1 === o && (p += "function isArray(arr){return Object.prototype.toString.apply(arr) === '[object Array]';}\n", p += "function isFunction(func){return (typeof func === 'function');}\n", p += 'function c(val, ctx) {if (typeof val !== "undefined") {if (isFunction(val)) {return val.call(ctx);} else return val;} else return "";}\n'), p += "var r = '';\n";
        var c;
        for (c = 0; c < s.length; c++) {
          var d = s[c];
          if ("plain" !== d.type) {
            var u, f;
            if ("variable" === d.type && (u = n(d.contextName, l), p += "r += c(" + u + ", " + l + ");"), "helper" === d.type)if (d.helperName in i.helpers)f = r(d.contextName, l), p += "r += (Template7.helpers." + d.helperName + ").call(" + l + ", " + (f && f + ", ") + "{hash:" + JSON.stringify(d.hash) + ", data: data || {}, fn: " + a(d, o + 1) + ", inverse: " + t(d, o + 1) + ", root: ctx_1});"; else {
              if (d.contextName.length > 0)throw new Error('Template7: Missing helper: "' + d.helperName + '"');
              u = n(d.helperName, l), p += "if (" + u + ") {", p += "if (isArray(" + u + ")) {", p += "r += (Template7.helpers.each).call(" + l + ", " + u + ", {hash:" + JSON.stringify(d.hash) + ", data: data || {}, fn: " + a(d, o + 1) + ", inverse: " + t(d, o + 1) + ", root: ctx_1});", p += "}else {", p += "r += (Template7.helpers.with).call(" + l + ", " + u + ", {hash:" + JSON.stringify(d.hash) + ", data: data || {}, fn: " + a(d, o + 1) + ", inverse: " + t(d, o + 1) + ", root: ctx_1});", p += "}}"
            }
          } else p += "r +='" + d.content.replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/'/g, "\\'") + "';"
        }
        return p += "\nreturn r;})", eval.call(window, p)
      }

      var i = this;
      i.template = e, i.compile = function (e) {
        return i.compiled || (i.compiled = o(e)), i.compiled
      }
    };
    Template7.prototype = {
      options: {}, partials: {}, helpers: {
        _partial: function (e, a) {
          var t = Template7.prototype.partials[e];
          if (!t || t && !t.template)return "";
          t.compiled || (t.compiled = t7.compile(t.template));
          var n = this;
          for (var r in a.hash)n[r] = a.hash[r];
          return t.compiled(n)
        }, escape: function (e, a) {
          if ("string" != typeof e)throw new Error('Template7: Passed context to "escape" helper should be a string');
          return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }, "if": function (e, a) {
          return isFunction(e) && (e = e.call(this)), e ? a.fn(this, a.data) : a.inverse(this, a.data)
        }, unless: function (e, a) {
          return isFunction(e) && (e = e.call(this)), e ? a.inverse(this, a.data) : a.fn(this, a.data)
        }, each: function (e, a) {
          var t = "", n = 0;
          if (isFunction(e) && (e = e.call(this)), isArray(e)) {
            for (a.hash.reverse && (e = e.reverse()), n = 0; n < e.length; n++)t += a.fn(e[n], {
              first: 0 === n,
              last: n === e.length - 1,
              index: n
            });
            a.hash.reverse && (e = e.reverse())
          } else for (var r in e)n++, t += a.fn(e[r], {key: r, first: 0 === n, last: n === e.length - 1, index: n});
          return n > 0 ? t : a.inverse(this)
        }, "with": function (e, a) {
          return isFunction(e) && (e = e.call(this)), a.fn(e)
        }, join: function (e, a) {
          return isFunction(e) && (e = e.call(this)), e.join(a.hash.delimiter || a.hash.delimeter)
        }, js: function (expression, options) {
          var func;
          return func = expression.indexOf("return") >= 0 ? "(function(){" + expression + "})" : "(function(){return (" + expression + ")})", eval(func).call(this)
        }, js_compare: function (expression, options) {
          var func;
          func = expression.indexOf("return") >= 0 ? "(function(){" + expression + "})" : "(function(){return (" + expression + ")})";
          var condition = eval(func).call(this);
          return condition ? options.fn(this, options.data) : options.inverse(this, options.data)
        }
      }
    };
    var t7 = function (e, a) {
      if (2 === arguments.length) {
        var t = new Template7(e), n = t.compile()(a);
        return t = null, n
      }
      return new Template7(e)
    };
    return t7.registerHelper = function (e, a) {
      Template7.prototype.helpers[e] = a
    }, t7.unregisterHelper = function (e) {
      Template7.prototype.helpers[e] = void 0, delete Template7.prototype.helpers[e]
    }, t7.registerPartial = function (e, a) {
      Template7.prototype.partials[e] = {template: a}
    }, t7.unregisterPartial = function (e, a) {
      Template7.prototype.partials[e] && (Template7.prototype.partials[e] = void 0, delete Template7.prototype.partials[e])
    }, t7.compile = function (e, a) {
      var t = new Template7(e, a);
      return t.compile()
    }, t7.options = Template7.prototype.options, t7.helpers = Template7.prototype.helpers, t7.partials = Template7.prototype.partials, t7
  }(), window.Swiper = function (e, a) {
    function t() {
      return "horizontal" === u.params.direction
    }

    function n() {
      u.autoplayTimeoutId = setTimeout(function () {
        u.params.loop ? (u.fixLoop(), u._slideNext()) : u.isEnd ? a.autoplayStopOnLast ? u.stopAutoplay() : u._slideTo(0) : u._slideNext()
      }, u.params.autoplay)
    }

    function r(e, a) {
      var t = f(e.target);
      if (!t.is(a))if ("string" == typeof a)t = t.parents(a); else if (a.nodeType) {
        var n;
        return t.parents().each(function (e, t) {
          t === a && (n = a)
        }), n ? a : void 0
      }
      return 0 === t.length ? void 0 : t[0]
    }

    function o(e, a) {
      a = a || {};
      var t = window.MutationObserver || window.WebkitMutationObserver, n = new t(function (e) {
        e.forEach(function (e) {
          u.onResize(!0), u.emit("onObserverUpdate", u, e)
        })
      });
      n.observe(e, {
        attributes: "undefined" == typeof a.attributes ? !0 : a.attributes,
        childList: "undefined" == typeof a.childList ? !0 : a.childList,
        characterData: "undefined" == typeof a.characterData ? !0 : a.characterData
      }), u.observers.push(n)
    }

    function i(e, a) {
      e = f(e);
      var n, r, o;
      n = e.attr("data-swiper-parallax") || "0", r = e.attr("data-swiper-parallax-x"), o = e.attr("data-swiper-parallax-y"), r || o ? (r = r || "0", o = o || "0") : t() ? (r = n, o = "0") : (o = n, r = "0"), r = r.indexOf("%") >= 0 ? parseInt(r, 10) * a + "%" : r * a + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * a + "%" : o * a + "px", e.transform("translate3d(" + r + ", " + o + ",0px)")
    }

    function s(e) {
      return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
    }

    if (!(this instanceof Swiper))return new Swiper(e, a);
    var l = {
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      autoplay: !1,
      autoplayDisableOnInteraction: !0,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeSticky: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      coverflow: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0},
      cube: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94},
      fade: {crossFade: !1},
      parallax: !1,
      scrollbar: null,
      scrollbarHide: !0,
      keyboardControl: !1,
      mousewheelControl: !1,
      mousewheelReleaseOnEdges: !1,
      mousewheelInvert: !1,
      mousewheelForceToAxis: !1,
      hashnav: !1,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      centeredSlides: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      onlyExternal: !1,
      threshold: 0,
      touchMoveStopPropagation: !0,
      pagination: null,
      paginationClickable: !1,
      paginationHide: !1,
      paginationBulletRender: null,
      resistance: !0,
      resistanceRatio: .85,
      nextButton: null,
      prevButton: null,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      lazyLoading: !1,
      lazyLoadingInPrevNext: !1,
      lazyLoadingOnTransitionStart: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      control: void 0,
      controlInverse: !1,
      allowSwipeToPrev: !0,
      allowSwipeToNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      slideClass: "swiper-slide",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      bulletClass: "swiper-pagination-bullet",
      bulletActiveClass: "swiper-pagination-bullet-active",
      buttonDisabledClass: "swiper-button-disabled",
      paginationHiddenClass: "swiper-pagination-hidden",
      observer: !1,
      observeParents: !1,
      a11y: !1,
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide",
      runCallbacksOnInit: !0
    }, p = a && a.virtualTranslate;
    a = a || {};
    for (var c in l)if ("undefined" == typeof a[c])a[c] = l[c]; else if ("object" == typeof a[c])for (var d in l[c])"undefined" == typeof a[c][d] && (a[c][d] = l[c][d]);
    var u = this;
    u.version = "3.0.8", u.params = a, u.classNames = [];
    var f;
    if (f = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7, f && (u.$ = f, u.container = f(e), 0 !== u.container.length)) {
      if (u.container.length > 1)return void u.container.each(function () {
        new Swiper(this, a)
      });
      u.container[0].swiper = u, u.container.data("swiper", u), u.classNames.push("swiper-container-" + u.params.direction), u.params.freeMode && u.classNames.push("swiper-container-free-mode"), u.support.flexbox || (u.classNames.push("swiper-container-no-flexbox"), u.params.slidesPerColumn = 1), (u.params.parallax || u.params.watchSlidesVisibility) && (u.params.watchSlidesProgress = !0), ["cube", "coverflow"].indexOf(u.params.effect) >= 0 && (u.support.transforms3d ? (u.params.watchSlidesProgress = !0, u.classNames.push("swiper-container-3d")) : u.params.effect = "slide"), "slide" !== u.params.effect && u.classNames.push("swiper-container-" + u.params.effect), "cube" === u.params.effect && (u.params.resistanceRatio = 0, u.params.slidesPerView = 1, u.params.slidesPerColumn = 1, u.params.slidesPerGroup = 1, u.params.centeredSlides = !1, u.params.spaceBetween = 0, u.params.virtualTranslate = !0, u.params.setWrapperSize = !1), "fade" === u.params.effect && (u.params.slidesPerView = 1, u.params.slidesPerColumn = 1, u.params.slidesPerGroup = 1, u.params.watchSlidesProgress = !0, u.params.spaceBetween = 0, "undefined" == typeof p && (u.params.virtualTranslate = !0)), u.params.grabCursor && u.support.touch && (u.params.grabCursor = !1), u.wrapper = u.container.children("." + u.params.wrapperClass), u.params.pagination && (u.paginationContainer = f(u.params.pagination), u.params.paginationClickable && u.paginationContainer.addClass("swiper-pagination-clickable")), u.rtl = t() && ("rtl" === u.container[0].dir.toLowerCase() || "rtl" === u.container.css("direction")), u.rtl && u.classNames.push("swiper-container-rtl"), u.rtl && (u.wrongRTL = "-webkit-box" === u.wrapper.css("display")), u.params.slidesPerColumn > 1 && u.classNames.push("swiper-container-multirow"), u.device.android && u.classNames.push("swiper-container-android"), u.container.addClass(u.classNames.join(" ")), u.translate = 0, u.progress = 0, u.velocity = 0, u.lockSwipeToNext = function () {
        u.params.allowSwipeToNext = !1
      }, u.lockSwipeToPrev = function () {
        u.params.allowSwipeToPrev = !1
      }, u.lockSwipes = function () {
        u.params.allowSwipeToNext = u.params.allowSwipeToPrev = !1
      }, u.unlockSwipeToNext = function () {
        u.params.allowSwipeToNext = !0
      }, u.unlockSwipeToPrev = function () {
        u.params.allowSwipeToPrev = !0
      }, u.unlockSwipes = function () {
        u.params.allowSwipeToNext = u.params.allowSwipeToPrev = !0
      }, u.params.grabCursor && (u.container[0].style.cursor = "move", u.container[0].style.cursor = "-webkit-grab", u.container[0].style.cursor = "-moz-grab", u.container[0].style.cursor = "grab"), u.imagesToLoad = [], u.imagesLoaded = 0, u.loadImage = function (e, a, t, n) {
        function r() {
          n && n()
        }

        var o;
        e.complete && t ? r() : a ? (o = new window.Image, o.onload = r, o.onerror = r, o.src = a) : r()
      }, u.preloadImages = function () {
        function e() {
          "undefined" != typeof u && null !== u && (void 0 !== u.imagesLoaded && u.imagesLoaded++, u.imagesLoaded === u.imagesToLoad.length && (u.params.updateOnImagesReady && u.update(), u.emit("onImagesReady", u)))
        }

        u.imagesToLoad = u.container.find("img");
        for (var a = 0; a < u.imagesToLoad.length; a++)u.loadImage(u.imagesToLoad[a], u.imagesToLoad[a].currentSrc || u.imagesToLoad[a].getAttribute("src"), !0, e)
      }, u.autoplayTimeoutId = void 0, u.autoplaying = !1, u.autoplayPaused = !1, u.startAutoplay = function () {
        return "undefined" != typeof u.autoplayTimeoutId ? !1 : u.params.autoplay ? u.autoplaying ? !1 : (u.autoplaying = !0, u.emit("onAutoplayStart", u), void n()) : !1
      }, u.stopAutoplay = function (e) {
        u.autoplayTimeoutId && (u.autoplayTimeoutId && clearTimeout(u.autoplayTimeoutId), u.autoplaying = !1, u.autoplayTimeoutId = void 0, u.emit("onAutoplayStop", u))
      }, u.pauseAutoplay = function (e) {
        u.autoplayPaused || (u.autoplayTimeoutId && clearTimeout(u.autoplayTimeoutId), u.autoplayPaused = !0, 0 === e ? (u.autoplayPaused = !1, n()) : u.wrapper.transitionEnd(function () {
          u && (u.autoplayPaused = !1, u.autoplaying ? n() : u.stopAutoplay())
        }))
      }, u.minTranslate = function () {
        return -u.snapGrid[0]
      }, u.maxTranslate = function () {
        return -u.snapGrid[u.snapGrid.length - 1]
      }, u.updateContainerSize = function () {
        var e, a;
        e = "undefined" != typeof u.params.width ? u.params.width : u.container[0].clientWidth, a = "undefined" != typeof u.params.height ? u.params.height : u.container[0].clientHeight, 0 === e && t() || 0 === a && !t() || (u.width = e, u.height = a, u.size = t() ? u.width : u.height)
      }, u.updateSlidesSize = function () {
        u.slides = u.wrapper.children("." + u.params.slideClass), u.snapGrid = [], u.slidesGrid = [], u.slidesSizesGrid = [];
        var e, a = u.params.spaceBetween, n = 0, r = 0, o = 0;
        "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * u.size), u.virtualSize = -a, u.slides.css(u.rtl ? {
          marginLeft: "",
          marginTop: ""
        } : {marginRight: "", marginBottom: ""});
        var i;
        u.params.slidesPerColumn > 1 && (i = Math.floor(u.slides.length / u.params.slidesPerColumn) === u.slides.length / u.params.slidesPerColumn ? u.slides.length : Math.ceil(u.slides.length / u.params.slidesPerColumn) * u.params.slidesPerColumn);
        var s, l = u.params.slidesPerColumn, p = i / l, c = p - (u.params.slidesPerColumn * p - u.slides.length);
        for (e = 0; e < u.slides.length; e++) {
          s = 0;
          var d = u.slides.eq(e);
          if (u.params.slidesPerColumn > 1) {
            var f, m, h;
            "column" === u.params.slidesPerColumnFill ? (m = Math.floor(e / l), h = e - m * l, (m > c || m === c && h === l - 1) && ++h >= l && (h = 0, m++), f = m + h * i / l, d.css({
              "-webkit-box-ordinal-group": f,
              "-moz-box-ordinal-group": f,
              "-ms-flex-order": f,
              "-webkit-order": f,
              order: f
            })) : (h = Math.floor(e / p), m = e - h * p), d.css({"margin-top": 0 !== h && u.params.spaceBetween && u.params.spaceBetween + "px"}).attr("data-swiper-column", m).attr("data-swiper-row", h)
          }
          "none" !== d.css("display") && ("auto" === u.params.slidesPerView ? s = t() ? d.outerWidth(!0) : d.outerHeight(!0) : (s = (u.size - (u.params.slidesPerView - 1) * a) / u.params.slidesPerView, t() ? u.slides[e].style.width = s + "px" : u.slides[e].style.height = s + "px"), u.slides[e].swiperSlideSize = s, u.slidesSizesGrid.push(s), u.params.centeredSlides ? (n = n + s / 2 + r / 2 + a, 0 === e && (n = n - u.size / 2 - a), Math.abs(n) < .001 && (n = 0), o % u.params.slidesPerGroup === 0 && u.snapGrid.push(n), u.slidesGrid.push(n)) : (o % u.params.slidesPerGroup === 0 && u.snapGrid.push(n), u.slidesGrid.push(n), n = n + s + a), u.virtualSize += s + a, r = s, o++)
        }
        u.virtualSize = Math.max(u.virtualSize, u.size);
        var g;
        if (u.rtl && u.wrongRTL && ("slide" === u.params.effect || "coverflow" === u.params.effect) && u.wrapper.css({width: u.virtualSize + u.params.spaceBetween + "px"}), (!u.support.flexbox || u.params.setWrapperSize) && u.wrapper.css(t() ? {width: u.virtualSize + u.params.spaceBetween + "px"} : {height: u.virtualSize + u.params.spaceBetween + "px"}), u.params.slidesPerColumn > 1 && (u.virtualSize = (s + u.params.spaceBetween) * i, u.virtualSize = Math.ceil(u.virtualSize / u.params.slidesPerColumn) - u.params.spaceBetween, u.wrapper.css({width: u.virtualSize + u.params.spaceBetween + "px"}), u.params.centeredSlides)) {
          for (g = [], e = 0; e < u.snapGrid.length; e++)u.snapGrid[e] < u.virtualSize + u.snapGrid[0] && g.push(u.snapGrid[e]);
          u.snapGrid = g
        }
        if (!u.params.centeredSlides) {
          for (g = [], e = 0; e < u.snapGrid.length; e++)u.snapGrid[e] <= u.virtualSize - u.size && g.push(u.snapGrid[e]);
          u.snapGrid = g, Math.floor(u.virtualSize - u.size) > Math.floor(u.snapGrid[u.snapGrid.length - 1]) && u.snapGrid.push(u.virtualSize - u.size)
        }
        0 === u.snapGrid.length && (u.snapGrid = [0]), 0 !== u.params.spaceBetween && u.slides.css(t() ? u.rtl ? {marginLeft: a + "px"} : {marginRight: a + "px"} : {marginBottom: a + "px"}), u.params.watchSlidesProgress && u.updateSlidesOffset()
      }, u.updateSlidesOffset = function () {
        for (var e = 0; e < u.slides.length; e++)u.slides[e].swiperSlideOffset = t() ? u.slides[e].offsetLeft : u.slides[e].offsetTop
      }, u.updateSlidesProgress = function (e) {
        if ("undefined" == typeof e && (e = u.translate || 0), 0 !== u.slides.length) {
          "undefined" == typeof u.slides[0].swiperSlideOffset && u.updateSlidesOffset();
          var a = u.params.centeredSlides ? -e + u.size / 2 : -e;
          u.rtl && (a = u.params.centeredSlides ? e - u.size / 2 : e);
          {
            u.container[0].getBoundingClientRect(), t() ? "left" : "top", t() ? "right" : "bottom"
          }
          u.slides.removeClass(u.params.slideVisibleClass);
          for (var n = 0; n < u.slides.length; n++) {
            var r = u.slides[n], o = u.params.centeredSlides === !0 ? r.swiperSlideSize / 2 : 0, i = (a - r.swiperSlideOffset - o) / (r.swiperSlideSize + u.params.spaceBetween);
            if (u.params.watchSlidesVisibility) {
              var s = -(a - r.swiperSlideOffset - o), l = s + u.slidesSizesGrid[n], p = s >= 0 && s < u.size || l > 0 && l <= u.size || 0 >= s && l >= u.size;
              p && u.slides.eq(n).addClass(u.params.slideVisibleClass)
            }
            r.progress = u.rtl ? -i : i
          }
        }
      }, u.updateProgress = function (e) {
        "undefined" == typeof e && (e = u.translate || 0);
        var a = u.maxTranslate() - u.minTranslate();
        0 === a ? (u.progress = 0, u.isBeginning = u.isEnd = !0) : (u.progress = (e - u.minTranslate()) / a, u.isBeginning = u.progress <= 0, u.isEnd = u.progress >= 1), u.isBeginning && u.emit("onReachBeginning", u), u.isEnd && u.emit("onReachEnd", u), u.params.watchSlidesProgress && u.updateSlidesProgress(e), u.emit("onProgress", u, u.progress)
      }, u.updateActiveIndex = function () {
        var e, a, t, n = u.rtl ? u.translate : -u.translate;
        for (a = 0; a < u.slidesGrid.length; a++)"undefined" != typeof u.slidesGrid[a + 1] ? n >= u.slidesGrid[a] && n < u.slidesGrid[a + 1] - (u.slidesGrid[a + 1] - u.slidesGrid[a]) / 2 ? e = a : n >= u.slidesGrid[a] && n < u.slidesGrid[a + 1] && (e = a + 1) : n >= u.slidesGrid[a] && (e = a);
        (0 > e || "undefined" == typeof e) && (e = 0), t = Math.floor(e / u.params.slidesPerGroup), t >= u.snapGrid.length && (t = u.snapGrid.length - 1), e !== u.activeIndex && (u.snapIndex = t, u.previousIndex = u.activeIndex, u.activeIndex = e, u.updateClasses())
      }, u.updateClasses = function () {
        u.slides.removeClass(u.params.slideActiveClass + " " + u.params.slideNextClass + " " + u.params.slidePrevClass);
        var e = u.slides.eq(u.activeIndex);
        if (e.addClass(u.params.slideActiveClass), e.next("." + u.params.slideClass).addClass(u.params.slideNextClass), e.prev("." + u.params.slideClass).addClass(u.params.slidePrevClass), u.bullets && u.bullets.length > 0) {
          u.bullets.removeClass(u.params.bulletActiveClass);
          var a;
          u.params.loop ? (a = Math.ceil(u.activeIndex - u.loopedSlides) / u.params.slidesPerGroup, a > u.slides.length - 1 - 2 * u.loopedSlides && (a -= u.slides.length - 2 * u.loopedSlides), a > u.bullets.length - 1 && (a -= u.bullets.length)) : a = "undefined" != typeof u.snapIndex ? u.snapIndex : u.activeIndex || 0, u.paginationContainer.length > 1 ? u.bullets.each(function () {
            f(this).index() === a && f(this).addClass(u.params.bulletActiveClass)
          }) : u.bullets.eq(a).addClass(u.params.bulletActiveClass)
        }
        u.params.loop || (u.params.prevButton && (u.isBeginning ? (f(u.params.prevButton).addClass(u.params.buttonDisabledClass), u.params.a11y && u.a11y && u.a11y.disable(f(u.params.prevButton))) : (f(u.params.prevButton).removeClass(u.params.buttonDisabledClass), u.params.a11y && u.a11y && u.a11y.enable(f(u.params.prevButton)))), u.params.nextButton && (u.isEnd ? (f(u.params.nextButton).addClass(u.params.buttonDisabledClass), u.params.a11y && u.a11y && u.a11y.disable(f(u.params.nextButton))) : (f(u.params.nextButton).removeClass(u.params.buttonDisabledClass), u.params.a11y && u.a11y && u.a11y.enable(f(u.params.nextButton)))))
      }, u.updatePagination = function () {
        if (u.params.pagination && u.paginationContainer && u.paginationContainer.length > 0) {
          for (var e = "", a = u.params.loop ? Math.ceil((u.slides.length - 2 * u.loopedSlides) / u.params.slidesPerGroup) : u.snapGrid.length, t = 0; a > t; t++)e += u.params.paginationBulletRender ? u.params.paginationBulletRender(t, u.params.bulletClass) : '<span class="' + u.params.bulletClass + '"></span>';
          u.paginationContainer.html(e), u.bullets = u.paginationContainer.find("." + u.params.bulletClass)
        }
      }, u.update = function (e) {
        function a() {
          n = Math.min(Math.max(u.translate, u.maxTranslate()), u.minTranslate()), u.setWrapperTranslate(n), u.updateActiveIndex(), u.updateClasses()
        }

        if (u.updateContainerSize(), u.updateSlidesSize(), u.updateProgress(), u.updatePagination(), u.updateClasses(), u.params.scrollbar && u.scrollbar && u.scrollbar.set(), e) {
          var t, n;
          u.params.freeMode ? a() : (t = "auto" === u.params.slidesPerView && u.isEnd && !u.params.centeredSlides ? u.slideTo(u.slides.length - 1, 0, !1, !0) : u.slideTo(u.activeIndex, 0, !1, !0), t || a())
        }
      }, u.onResize = function (e) {
        if (u.updateContainerSize(), u.updateSlidesSize(), u.updateProgress(), ("auto" === u.params.slidesPerView || u.params.freeMode || e) && u.updatePagination(), u.params.scrollbar && u.scrollbar && u.scrollbar.set(), u.params.freeMode) {
          var a = Math.min(Math.max(u.translate, u.maxTranslate()), u.minTranslate());
          u.setWrapperTranslate(a), u.updateActiveIndex(), u.updateClasses()
        } else u.updateClasses(), "auto" === u.params.slidesPerView && u.isEnd && !u.params.centeredSlides ? u.slideTo(u.slides.length - 1, 0, !1, !0) : u.slideTo(u.activeIndex, 0, !1, !0)
      };
      var m = ["mousedown", "mousemove", "mouseup"];
      window.navigator.pointerEnabled ? m = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (m = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), u.touchEvents = {
        start: u.support.touch || !u.params.simulateTouch ? "touchstart" : m[0],
        move: u.support.touch || !u.params.simulateTouch ? "touchmove" : m[1],
        end: u.support.touch || !u.params.simulateTouch ? "touchend" : m[2]
      }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === u.params.touchEventsTarget ? u.container : u.wrapper).addClass("swiper-wp8-" + u.params.direction), u.initEvents = function (e) {
        var t = e ? "off" : "on", n = e ? "removeEventListener" : "addEventListener", r = "container" === u.params.touchEventsTarget ? u.container[0] : u.wrapper[0], o = u.support.touch ? r : document, i = u.params.nested ? !0 : !1;
        u.browser.ie ? (r[n](u.touchEvents.start, u.onTouchStart, !1), o[n](u.touchEvents.move, u.onTouchMove, i), o[n](u.touchEvents.end, u.onTouchEnd, !1)) : (u.support.touch && (r[n](u.touchEvents.start, u.onTouchStart, !1), r[n](u.touchEvents.move, u.onTouchMove, i), r[n](u.touchEvents.end, u.onTouchEnd, !1)), !a.simulateTouch || u.device.ios || u.device.android || (r[n]("mousedown", u.onTouchStart, !1), document[n]("mousemove", u.onTouchMove, i), document[n]("mouseup", u.onTouchEnd, !1))), window[n]("resize", u.onResize), u.params.nextButton && (f(u.params.nextButton)[t]("click", u.onClickNext), u.params.a11y && u.a11y && f(u.params.nextButton)[t]("keydown", u.a11y.onEnterKey)), u.params.prevButton && (f(u.params.prevButton)[t]("click", u.onClickPrev), u.params.a11y && u.a11y && f(u.params.prevButton)[t]("keydown", u.a11y.onEnterKey)), u.params.pagination && u.params.paginationClickable && f(u.paginationContainer)[t]("click", "." + u.params.bulletClass, u.onClickIndex), (u.params.preventClicks || u.params.preventClicksPropagation) && r[n]("click", u.preventClicks, !0)
      }, u.attachEvents = function (e) {
        u.initEvents()
      }, u.detachEvents = function () {
        u.initEvents(!0)
      }, u.allowClick = !0, u.preventClicks = function (e) {
        u.allowClick || (u.params.preventClicks && e.preventDefault(), u.params.preventClicksPropagation && u.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
      }, u.onClickNext = function (e) {
        e.preventDefault(), u.slideNext()
      }, u.onClickPrev = function (e) {
        e.preventDefault(), u.slidePrev()
      }, u.onClickIndex = function (e) {
        e.preventDefault();
        var a = f(this).index() * u.params.slidesPerGroup;
        u.params.loop && (a += u.loopedSlides), u.slideTo(a)
      }, u.updateClickedSlide = function (e) {
        var a = r(e, "." + u.params.slideClass), t = !1;
        if (a)for (var n = 0; n < u.slides.length; n++)u.slides[n] === a && (t = !0);
        if (!a || !t)return u.clickedSlide = void 0, void(u.clickedIndex = void 0);
        if (u.clickedSlide = a, u.clickedIndex = f(a).index(), u.params.slideToClickedSlide && void 0 !== u.clickedIndex && u.clickedIndex !== u.activeIndex) {
          var o, i = u.clickedIndex;
          if (u.params.loop)if (o = f(u.clickedSlide).attr("data-swiper-slide-index"), i > u.slides.length - u.params.slidesPerView)u.fixLoop(), i = u.wrapper.children("." + u.params.slideClass + '[data-swiper-slide-index="' + o + '"]').eq(0).index(), setTimeout(function () {
            u.slideTo(i)
          }, 0); else if (i < u.params.slidesPerView - 1) {
            u.fixLoop();
            var s = u.wrapper.children("." + u.params.slideClass + '[data-swiper-slide-index="' + o + '"]');
            i = s.eq(s.length - 1).index(), setTimeout(function () {
              u.slideTo(i)
            }, 0)
          } else u.slideTo(i); else u.slideTo(i)
        }
      };
      var h, g, v, C, Y, S, T, Z, w, L = "input, select, textarea, button", b = Date.now(), y = [];
      u.animating = !1, u.touches = {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0};
      var X, J;
      u.onTouchStart = function (e) {
        if (e.originalEvent && (e = e.originalEvent), X = "touchstart" === e.type, X || !("which"in e) || 3 !== e.which) {
          if (u.params.noSwiping && r(e, "." + u.params.noSwipingClass))return void(u.allowClick = !0);
          if (!u.params.swipeHandler || r(e, u.params.swipeHandler)) {
            if (h = !0, g = !1, C = void 0, J = void 0, u.touches.startX = u.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, u.touches.startY = u.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, v = Date.now(), u.allowClick = !0, u.updateContainerSize(), u.swipeDirection = void 0, u.params.threshold > 0 && (T = !1), "touchstart" !== e.type) {
              var a = !0;
              f(e.target).is(L) && (a = !1), document.activeElement && f(document.activeElement).is(L) && document.activeElement.blur(), a && e.preventDefault()
            }
            u.emit("onTouchStart", u, e)
          }
        }
      }, u.onTouchMove = function (e) {
        if (e.originalEvent && (e = e.originalEvent), !(X && "mousemove" === e.type || e.preventedByNestedSwiper)) {
          if (u.params.onlyExternal)return g = !0, void(u.allowClick = !1);
          if (X && document.activeElement && e.target === document.activeElement && f(e.target).is(L))return g = !0, void(u.allowClick = !1);
          if (u.emit("onTouchMove", u, e), !(e.targetTouches && e.targetTouches.length > 1)) {
            if (u.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, u.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof C) {
              var n = 180 * Math.atan2(Math.abs(u.touches.currentY - u.touches.startY), Math.abs(u.touches.currentX - u.touches.startX)) / Math.PI;
              C = t() ? n > u.params.touchAngle : 90 - n > u.params.touchAngle
            }
            if (C && u.emit("onTouchMoveOpposite", u, e), "undefined" == typeof J && u.browser.ieTouch && (u.touches.currentX !== u.touches.startX || u.touches.currentY !== u.touches.startY) && (J = !0), h) {
              if (C)return void(h = !1);
              if (J || !u.browser.ieTouch) {
                u.allowClick = !1, u.emit("onSliderMove", u, e), e.preventDefault(), u.params.touchMoveStopPropagation && !u.params.nested && e.stopPropagation(), g || (a.loop && u.fixLoop(), S = u.getWrapperTranslate(), u.setWrapperTransition(0), u.animating && u.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), u.params.autoplay && u.autoplaying && (u.params.autoplayDisableOnInteraction ? u.stopAutoplay() : u.pauseAutoplay()), w = !1, u.params.grabCursor && (u.container[0].style.cursor = "move", u.container[0].style.cursor = "-webkit-grabbing", u.container[0].style.cursor = "-moz-grabbin", u.container[0].style.cursor = "grabbing")), g = !0;
                var r = u.touches.diff = t() ? u.touches.currentX - u.touches.startX : u.touches.currentY - u.touches.startY;
                r *= u.params.touchRatio, u.rtl && (r = -r), u.swipeDirection = r > 0 ? "prev" : "next", Y = r + S;
                var o = !0;
                if (r > 0 && Y > u.minTranslate() ? (o = !1, u.params.resistance && (Y = u.minTranslate() - 1 + Math.pow(-u.minTranslate() + S + r, u.params.resistanceRatio))) : 0 > r && Y < u.maxTranslate() && (o = !1, u.params.resistance && (Y = u.maxTranslate() + 1 - Math.pow(u.maxTranslate() - S - r, u.params.resistanceRatio))), o && (e.preventedByNestedSwiper = !0), !u.params.allowSwipeToNext && "next" === u.swipeDirection && S > Y && (Y = S), !u.params.allowSwipeToPrev && "prev" === u.swipeDirection && Y > S && (Y = S), u.params.followFinger) {
                  if (u.params.threshold > 0) {
                    if (!(Math.abs(r) > u.params.threshold || T))return void(Y = S);
                    if (!T)return T = !0, u.touches.startX = u.touches.currentX, u.touches.startY = u.touches.currentY, Y = S, void(u.touches.diff = t() ? u.touches.currentX - u.touches.startX : u.touches.currentY - u.touches.startY)
                  }
                  (u.params.freeMode || u.params.watchSlidesProgress) && u.updateActiveIndex(), u.params.freeMode && (0 === y.length && y.push({
                    position: u.touches[t() ? "startX" : "startY"],
                    time: v
                  }), y.push({
                    position: u.touches[t() ? "currentX" : "currentY"],
                    time: (new window.Date).getTime()
                  })), u.updateProgress(Y), u.setWrapperTranslate(Y)
                }
              }
            }
          }
        }
      }, u.onTouchEnd = function (e) {
        if (e.originalEvent && (e = e.originalEvent), u.emit("onTouchEnd", u, e), h) {
          u.params.grabCursor && g && h && (u.container[0].style.cursor = "move", u.container[0].style.cursor = "-webkit-grab", u.container[0].style.cursor = "-moz-grab", u.container[0].style.cursor = "grab");
          var a = Date.now(), t = a - v;
          if (u.allowClick && (u.updateClickedSlide(e), u.emit("onTap", u, e), 300 > t && a - b > 300 && (Z && clearTimeout(Z), Z = setTimeout(function () {
              u && (u.params.paginationHide && u.paginationContainer.length > 0 && !f(e.target).hasClass(u.params.bulletClass) && u.paginationContainer.toggleClass(u.params.paginationHiddenClass), u.emit("onClick", u, e))
            }, 300)), 300 > t && 300 > a - b && (Z && clearTimeout(Z), u.emit("onDoubleTap", u, e))), b = Date.now(), setTimeout(function () {
              u && (u.allowClick = !0)
            }, 0), !h || !g || !u.swipeDirection || 0 === u.touches.diff || Y === S)return void(h = g = !1);
          h = g = !1;
          var n;
          if (n = u.params.followFinger ? u.rtl ? u.translate : -u.translate : -Y, u.params.freeMode) {
            if (n < -u.minTranslate())return void u.slideTo(u.activeIndex);
            if (n > -u.maxTranslate())return void u.slideTo(u.slides.length < u.snapGrid.length ? u.snapGrid.length - 1 : u.slides.length - 1);
            if (u.params.freeModeMomentum) {
              if (y.length > 1) {
                var r = y.pop(), o = y.pop(), i = r.position - o.position, s = r.time - o.time;
                u.velocity = i / s, u.velocity = u.velocity / 2, Math.abs(u.velocity) < .02 && (u.velocity = 0), (s > 150 || (new window.Date).getTime() - r.time > 300) && (u.velocity = 0)
              } else u.velocity = 0;
              y.length = 0;
              var l = 1e3 * u.params.freeModeMomentumRatio, p = u.velocity * l, c = u.translate + p;
              u.rtl && (c = -c);
              var d, m = !1, C = 20 * Math.abs(u.velocity) * u.params.freeModeMomentumBounceRatio;
              if (c < u.maxTranslate())u.params.freeModeMomentumBounce ? (c + u.maxTranslate() < -C && (c = u.maxTranslate() - C), d = u.maxTranslate(), m = !0, w = !0) : c = u.maxTranslate(); else if (c > u.minTranslate())u.params.freeModeMomentumBounce ? (c - u.minTranslate() > C && (c = u.minTranslate() + C), d = u.minTranslate(), m = !0, w = !0) : c = u.minTranslate(); else if (u.params.freeModeSticky) {
                var T, L = 0;
                for (L = 0; L < u.snapGrid.length; L += 1)if (u.snapGrid[L] > -c) {
                  T = L;
                  break
                }
                c = Math.abs(u.snapGrid[T] - c) < Math.abs(u.snapGrid[T - 1] - c) || "next" === u.swipeDirection ? u.snapGrid[T] : u.snapGrid[T - 1], u.rtl || (c = -c)
              }
              if (0 !== u.velocity)l = Math.abs(u.rtl ? (-c - u.translate) / u.velocity : (c - u.translate) / u.velocity); else if (u.params.freeModeSticky)return void u.slideReset();
              u.params.freeModeMomentumBounce && m ? (u.updateProgress(d), u.setWrapperTransition(l), u.setWrapperTranslate(c), u.onTransitionStart(), u.animating = !0, u.wrapper.transitionEnd(function () {
                u && w && (u.emit("onMomentumBounce", u), u.setWrapperTransition(u.params.speed), u.setWrapperTranslate(d), u.wrapper.transitionEnd(function () {
                  u && u.onTransitionEnd()
                }))
              })) : u.velocity ? (u.updateProgress(c), u.setWrapperTransition(l), u.setWrapperTranslate(c), u.onTransitionStart(), u.animating || (u.animating = !0, u.wrapper.transitionEnd(function () {
                u && u.onTransitionEnd()
              }))) : u.updateProgress(c), u.updateActiveIndex()
            }
            return void((!u.params.freeModeMomentum || t >= u.params.longSwipesMs) && (u.updateProgress(), u.updateActiveIndex()))
          }
          var X, J = 0, P = u.slidesSizesGrid[0];
          for (X = 0; X < u.slidesGrid.length; X += u.params.slidesPerGroup)"undefined" != typeof u.slidesGrid[X + u.params.slidesPerGroup] ? n >= u.slidesGrid[X] && n < u.slidesGrid[X + u.params.slidesPerGroup] && (J = X, P = u.slidesGrid[X + u.params.slidesPerGroup] - u.slidesGrid[X]) : n >= u.slidesGrid[X] && (J = X, P = u.slidesGrid[u.slidesGrid.length - 1] - u.slidesGrid[u.slidesGrid.length - 2]);
          var M = (n - u.slidesGrid[J]) / P;
          if (t > u.params.longSwipesMs) {
            if (!u.params.longSwipes)return void u.slideTo(u.activeIndex);
            "next" === u.swipeDirection && u.slideTo(M >= u.params.longSwipesRatio ? J + u.params.slidesPerGroup : J), "prev" === u.swipeDirection && u.slideTo(M > 1 - u.params.longSwipesRatio ? J + u.params.slidesPerGroup : J)
          } else {
            if (!u.params.shortSwipes)return void u.slideTo(u.activeIndex);
            "next" === u.swipeDirection && u.slideTo(J + u.params.slidesPerGroup), "prev" === u.swipeDirection && u.slideTo(J)
          }
        }
      }, u._slideTo = function (e, a) {
        return u.slideTo(e, a, !0, !0)
      }, u.slideTo = function (e, a, n, r) {
        "undefined" == typeof n && (n = !0), "undefined" == typeof e && (e = 0), 0 > e && (e = 0), u.snapIndex = Math.floor(e / u.params.slidesPerGroup), u.snapIndex >= u.snapGrid.length && (u.snapIndex = u.snapGrid.length - 1);
        var o = -u.snapGrid[u.snapIndex];
        if (!u.params.allowSwipeToNext && o < u.translate && o < u.minTranslate())return !1;
        if (!u.params.allowSwipeToPrev && o > u.translate && o > u.maxTranslate())return !1;
        u.params.autoplay && u.autoplaying && (r || !u.params.autoplayDisableOnInteraction ? u.pauseAutoplay(a) : u.stopAutoplay()), u.updateProgress(o);
        for (var i = 0; i < u.slidesGrid.length; i++)-o >= u.slidesGrid[i] && (e = i);
        if ("undefined" == typeof a && (a = u.params.speed), u.previousIndex = u.activeIndex || 0, u.activeIndex = e, o === u.translate)return u.updateClasses(), !1;
        u.updateClasses(), u.onTransitionStart(n);
        t() ? o : 0, t() ? 0 : o;
        return 0 === a ? (u.setWrapperTransition(0), u.setWrapperTranslate(o), u.onTransitionEnd(n)) : (u.setWrapperTransition(a), u.setWrapperTranslate(o), u.animating || (u.animating = !0, u.wrapper.transitionEnd(function () {
          u && u.onTransitionEnd(n)
        }))), !0
      }, u.onTransitionStart = function (e) {
        "undefined" == typeof e && (e = !0), u.lazy && u.lazy.onTransitionStart(), e && (u.emit("onTransitionStart", u), u.activeIndex !== u.previousIndex && u.emit("onSlideChangeStart", u))
      }, u.onTransitionEnd = function (e) {
        u.animating = !1, u.setWrapperTransition(0), "undefined" == typeof e && (e = !0), u.lazy && u.lazy.onTransitionEnd(), e && (u.emit("onTransitionEnd", u), u.activeIndex !== u.previousIndex && u.emit("onSlideChangeEnd", u)), u.params.hashnav && u.hashnav && u.hashnav.setHash()
      }, u.slideNext = function (e, a, t) {
        if (u.params.loop) {
          if (u.animating)return !1;
          u.fixLoop();
          {
            u.container[0].clientLeft
          }
          return u.slideTo(u.activeIndex + u.params.slidesPerGroup, a, e, t)
        }
        return u.slideTo(u.activeIndex + u.params.slidesPerGroup, a, e, t)
      }, u._slideNext = function (e) {
        return u.slideNext(!0, e, !0)
      }, u.slidePrev = function (e, a, t) {
        if (u.params.loop) {
          if (u.animating)return !1;
          u.fixLoop();
          {
            u.container[0].clientLeft
          }
          return u.slideTo(u.activeIndex - 1, a, e, t)
        }
        return u.slideTo(u.activeIndex - 1, a, e, t)
      }, u._slidePrev = function (e) {
        return u.slidePrev(!0, e, !0)
      }, u.slideReset = function (e, a, t) {
        return u.slideTo(u.activeIndex, a, e)
      }, u.setWrapperTransition = function (e, a) {
        u.wrapper.transition(e), "slide" !== u.params.effect && u.effects[u.params.effect] && u.effects[u.params.effect].setTransition(e), u.params.parallax && u.parallax && u.parallax.setTransition(e), u.params.scrollbar && u.scrollbar && u.scrollbar.setTransition(e), u.params.control && u.controller && u.controller.setTransition(e, a), u.emit("onSetTransition", u, e)
      }, u.setWrapperTranslate = function (e, a, n) {
        var r = 0, o = 0, i = 0;
        t() ? r = u.rtl ? -e : e : o = e, u.params.virtualTranslate || u.wrapper.transform(u.support.transforms3d ? "translate3d(" + r + "px, " + o + "px, " + i + "px)" : "translate(" + r + "px, " + o + "px)"), u.translate = t() ? r : o, a && u.updateActiveIndex(), "slide" !== u.params.effect && u.effects[u.params.effect] && u.effects[u.params.effect].setTranslate(u.translate), u.params.parallax && u.parallax && u.parallax.setTranslate(u.translate), u.params.scrollbar && u.scrollbar && u.scrollbar.setTranslate(u.translate), u.params.control && u.controller && u.controller.setTranslate(u.translate, n), u.emit("onSetTranslate", u, u.translate)
      }, u.getTranslate = function (e, a) {
        var t, n, r, o;
        return "undefined" == typeof a && (a = "x"), u.params.virtualTranslate ? u.rtl ? -u.translate : u.translate : (r = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? o = new window.WebKitCSSMatrix("none" === r.webkitTransform ? "" : r.webkitTransform) : (o = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = o.toString().split(",")), "x" === a && (n = window.WebKitCSSMatrix ? o.m41 : parseFloat(16 === t.length ? t[12] : t[4])), "y" === a && (n = window.WebKitCSSMatrix ? o.m42 : parseFloat(16 === t.length ? t[13] : t[5])), u.rtl && n && (n = -n), n || 0)
      }, u.getWrapperTranslate = function (e) {
        return "undefined" == typeof e && (e = t() ? "x" : "y"), u.getTranslate(u.wrapper[0], e)
      }, u.observers = [], u.initObservers = function () {
        if (u.params.observeParents)for (var e = u.container.parents(), a = 0; a < e.length; a++)o(e[a]);
        o(u.container[0], {childList: !1}), o(u.wrapper[0], {attributes: !1})
      }, u.disconnectObservers = function () {
        for (var e = 0; e < u.observers.length; e++)u.observers[e].disconnect();
        u.observers = []
      }, u.createLoop = function () {
        u.wrapper.children("." + u.params.slideClass + "." + u.params.slideDuplicateClass).remove();
        var e = u.wrapper.children("." + u.params.slideClass);
        u.loopedSlides = parseInt(u.params.loopedSlides || u.params.slidesPerView, 10), u.loopedSlides = u.loopedSlides + u.params.loopAdditionalSlides, u.loopedSlides > e.length && (u.loopedSlides = e.length);
        var a, t = [], n = [];
        for (e.each(function (a, r) {
          var o = f(this);
          a < u.loopedSlides && n.push(r), a < e.length && a >= e.length - u.loopedSlides && t.push(r), o.attr("data-swiper-slide-index", a)
        }), a = 0; a < n.length; a++)u.wrapper.append(f(n[a].cloneNode(!0)).addClass(u.params.slideDuplicateClass));
        for (a = t.length - 1; a >= 0; a--)u.wrapper.prepend(f(t[a].cloneNode(!0)).addClass(u.params.slideDuplicateClass))
      }, u.destroyLoop = function () {
        u.wrapper.children("." + u.params.slideClass + "." + u.params.slideDuplicateClass).remove(), u.slides.removeAttr("data-swiper-slide-index")
      }, u.fixLoop = function () {
        var e;
        u.activeIndex < u.loopedSlides ? (e = u.slides.length - 3 * u.loopedSlides + u.activeIndex, e += u.loopedSlides, u.slideTo(e, 0, !1, !0)) : ("auto" === u.params.slidesPerView && u.activeIndex >= 2 * u.loopedSlides || u.activeIndex > u.slides.length - 2 * u.params.slidesPerView) && (e = -u.slides.length + u.activeIndex + u.loopedSlides, e += u.loopedSlides, u.slideTo(e, 0, !1, !0))
      }, u.appendSlide = function (e) {
        if (u.params.loop && u.destroyLoop(), "object" == typeof e && e.length)for (var a = 0; a < e.length; a++)e[a] && u.wrapper.append(e[a]); else u.wrapper.append(e);
        u.params.loop && u.createLoop(), u.params.observer && u.support.observer || u.update(!0)
      }, u.prependSlide = function (e) {
        u.params.loop && u.destroyLoop();
        var a = u.activeIndex + 1;
        if ("object" == typeof e && e.length) {
          for (var t = 0; t < e.length; t++)e[t] && u.wrapper.prepend(e[t]);
          a = u.activeIndex + e.length
        } else u.wrapper.prepend(e);
        u.params.loop && u.createLoop(), u.params.observer && u.support.observer || u.update(!0), u.slideTo(a, 0, !1)
      }, u.removeSlide = function (e) {
        u.params.loop && (u.destroyLoop(), u.slides = u.wrapper.children("." + u.params.slideClass));
        var a, t = u.activeIndex;
        if ("object" == typeof e && e.length) {
          for (var n = 0; n < e.length; n++)a = e[n], u.slides[a] && u.slides.eq(a).remove(), t > a && t--;

          t = Math.max(t, 0)
        } else a = e, u.slides[a] && u.slides.eq(a).remove(), t > a && t--, t = Math.max(t, 0);
        u.params.loop && u.createLoop(), u.params.observer && u.support.observer || u.update(!0), u.params.loop ? u.slideTo(t + u.loopedSlides, 0, !1) : u.slideTo(t, 0, !1)
      }, u.removeAllSlides = function () {
        for (var e = [], a = 0; a < u.slides.length; a++)e.push(a);
        u.removeSlide(e)
      }, u.effects = {
        fade: {
          setTranslate: function () {
            for (var e = 0; e < u.slides.length; e++) {
              var a = u.slides.eq(e), n = a[0].swiperSlideOffset, r = -n;
              u.params.virtualTranslate || (r -= u.translate);
              var o = 0;
              t() || (o = r, r = 0);
              var i = u.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
              a.css({opacity: i}).transform("translate3d(" + r + "px, " + o + "px, 0px)")
            }
          }, setTransition: function (e) {
            if (u.slides.transition(e), u.params.virtualTranslate && 0 !== e) {
              var a = !1;
              u.slides.transitionEnd(function () {
                if (!a && u) {
                  a = !0, u.animating = !1;
                  for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++)u.wrapper.trigger(e[t])
                }
              })
            }
          }
        }, cube: {
          setTranslate: function () {
            var e, a = 0;
            u.params.cube.shadow && (t() ? (e = u.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = f('<div class="swiper-cube-shadow"></div>'), u.wrapper.append(e)), e.css({height: u.width + "px"})) : (e = u.container.find(".swiper-cube-shadow"), 0 === e.length && (e = f('<div class="swiper-cube-shadow"></div>'), u.container.append(e))));
            for (var n = 0; n < u.slides.length; n++) {
              var r = u.slides.eq(n), o = 90 * n, i = Math.floor(o / 360);
              u.rtl && (o = -o, i = Math.floor(-o / 360));
              var s = Math.max(Math.min(r[0].progress, 1), -1), l = 0, p = 0, c = 0;
              n % 4 === 0 ? (l = 4 * -i * u.size, c = 0) : (n - 1) % 4 === 0 ? (l = 0, c = 4 * -i * u.size) : (n - 2) % 4 === 0 ? (l = u.size + 4 * i * u.size, c = u.size) : (n - 3) % 4 === 0 && (l = -u.size, c = 3 * u.size + 4 * u.size * i), u.rtl && (l = -l), t() || (p = l, l = 0);
              var d = "rotateX(" + (t() ? 0 : -o) + "deg) rotateY(" + (t() ? o : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + c + "px)";
              if (1 >= s && s > -1 && (a = 90 * n + 90 * s, u.rtl && (a = 90 * -n - 90 * s)), r.transform(d), u.params.cube.slideShadows) {
                var m = r.find(t() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"), h = r.find(t() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                0 === m.length && (m = f('<div class="swiper-slide-shadow-' + (t() ? "left" : "top") + '"></div>'), r.append(m)), 0 === h.length && (h = f('<div class="swiper-slide-shadow-' + (t() ? "right" : "bottom") + '"></div>'), r.append(h));
                {
                  r[0].progress
                }
                m.length && (m[0].style.opacity = -r[0].progress), h.length && (h[0].style.opacity = r[0].progress)
              }
            }
            if (u.wrapper.css({
                "-webkit-transform-origin": "50% 50% -" + u.size / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + u.size / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + u.size / 2 + "px",
                "transform-origin": "50% 50% -" + u.size / 2 + "px"
              }), u.params.cube.shadow)if (t())e.transform("translate3d(0px, " + (u.width / 2 + u.params.cube.shadowOffset) + "px, " + -u.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + u.params.cube.shadowScale + ")"); else {
              var g = Math.abs(a) - 90 * Math.floor(Math.abs(a) / 90), v = 1.5 - (Math.sin(2 * g * Math.PI / 360) / 2 + Math.cos(2 * g * Math.PI / 360) / 2), C = u.params.cube.shadowScale, Y = u.params.cube.shadowScale / v, S = u.params.cube.shadowOffset;
              e.transform("scale3d(" + C + ", 1, " + Y + ") translate3d(0px, " + (u.height / 2 + S) + "px, " + -u.height / 2 / Y + "px) rotateX(-90deg)")
            }
            var T = u.isSafari || u.isUiWebView ? -u.size / 2 : 0;
            u.wrapper.transform("translate3d(0px,0," + T + "px) rotateX(" + (t() ? 0 : a) + "deg) rotateY(" + (t() ? -a : 0) + "deg)")
          }, setTransition: function (e) {
            u.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), u.params.cube.shadow && !t() && u.container.find(".swiper-cube-shadow").transition(e)
          }
        }, coverflow: {
          setTranslate: function () {
            for (var e = u.translate, a = t() ? -e + u.width / 2 : -e + u.height / 2, n = t() ? u.params.coverflow.rotate : -u.params.coverflow.rotate, r = u.params.coverflow.depth, o = 0, i = u.slides.length; i > o; o++) {
              var s = u.slides.eq(o), l = u.slidesSizesGrid[o], p = s[0].swiperSlideOffset, c = (a - p - l / 2) / l * u.params.coverflow.modifier, d = t() ? n * c : 0, m = t() ? 0 : n * c, h = -r * Math.abs(c), g = t() ? 0 : u.params.coverflow.stretch * c, v = t() ? u.params.coverflow.stretch * c : 0;
              Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(h) < .001 && (h = 0), Math.abs(d) < .001 && (d = 0), Math.abs(m) < .001 && (m = 0);
              var C = "translate3d(" + v + "px," + g + "px," + h + "px)  rotateX(" + m + "deg) rotateY(" + d + "deg)";
              if (s.transform(C), s[0].style.zIndex = -Math.abs(Math.round(c)) + 1, u.params.coverflow.slideShadows) {
                var Y = s.find(t() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"), S = s.find(t() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                0 === Y.length && (Y = f('<div class="swiper-slide-shadow-' + (t() ? "left" : "top") + '"></div>'), s.append(Y)), 0 === S.length && (S = f('<div class="swiper-slide-shadow-' + (t() ? "right" : "bottom") + '"></div>'), s.append(S)), Y.length && (Y[0].style.opacity = c > 0 ? c : 0), S.length && (S[0].style.opacity = -c > 0 ? -c : 0)
              }
            }
            if (u.browser.ie) {
              var T = u.wrapper[0].style;
              T.perspectiveOrigin = a + "px 50%"
            }
          }, setTransition: function (e) {
            u.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
          }
        }
      }, u.lazy = {
        initialImageLoaded: !1, loadImageInSlide: function (e, a) {
          if ("undefined" != typeof e && ("undefined" == typeof a && (a = !0), 0 !== u.slides.length)) {
            var t = u.slides.eq(e), n = t.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
            !t.hasClass("swiper-lazy") || t.hasClass("swiper-lazy-loaded") || t.hasClass("swiper-lazy-loading") || n.add(t[0]), 0 !== n.length && n.each(function () {
              var e = f(this);
              e.addClass("swiper-lazy-loading");
              var n = e.attr("data-background"), r = e.attr("data-src");
              u.loadImage(e[0], r || n, !1, function () {
                if (n ? (e.css("background-image", "url(" + n + ")"), e.removeAttr("data-background")) : (e.attr("src", r), e.removeAttr("data-src")), e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), t.find(".swiper-lazy-preloader, .preloader").remove(), u.params.loop && a) {
                  var o = t.attr("data-swiper-slide-index");
                  if (t.hasClass(u.params.slideDuplicateClass)) {
                    var i = u.wrapper.children('[data-swiper-slide-index="' + o + '"]:not(.' + u.params.slideDuplicateClass + ")");
                    u.lazy.loadImageInSlide(i.index(), !1)
                  } else {
                    var s = u.wrapper.children("." + u.params.slideDuplicateClass + '[data-swiper-slide-index="' + o + '"]');
                    u.lazy.loadImageInSlide(s.index(), !1)
                  }
                }
                u.emit("onLazyImageReady", u, t[0], e[0])
              }), u.emit("onLazyImageLoad", u, t[0], e[0])
            })
          }
        }, load: function () {
          var e;
          if (u.params.watchSlidesVisibility)u.wrapper.children("." + u.params.slideVisibleClass).each(function () {
            u.lazy.loadImageInSlide(f(this).index())
          }); else if (u.params.slidesPerView > 1)for (e = u.activeIndex; e < u.activeIndex + u.params.slidesPerView; e++)u.slides[e] && u.lazy.loadImageInSlide(e); else u.lazy.loadImageInSlide(u.activeIndex);
          if (u.params.lazyLoadingInPrevNext)if (u.params.slidesPerView > 1) {
            for (e = u.activeIndex + u.params.slidesPerView; e < u.activeIndex + u.params.slidesPerView + u.params.slidesPerView; e++)u.slides[e] && u.lazy.loadImageInSlide(e);
            for (e = u.activeIndex - u.params.slidesPerView; e < u.activeIndex; e++)u.slides[e] && u.lazy.loadImageInSlide(e)
          } else {
            var a = u.wrapper.children("." + u.params.slideNextClass);
            a.length > 0 && u.lazy.loadImageInSlide(a.index());
            var t = u.wrapper.children("." + u.params.slidePrevClass);
            t.length > 0 && u.lazy.loadImageInSlide(t.index())
          }
        }, onTransitionStart: function () {
          u.params.lazyLoading && (u.params.lazyLoadingOnTransitionStart || !u.params.lazyLoadingOnTransitionStart && !u.lazy.initialImageLoaded) && u.lazy.load()
        }, onTransitionEnd: function () {
          u.params.lazyLoading && !u.params.lazyLoadingOnTransitionStart && u.lazy.load()
        }
      }, u.scrollbar = {
        set: function () {
          if (u.params.scrollbar) {
            var e = u.scrollbar;
            e.track = f(u.params.scrollbar), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = f('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = t() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = u.size / u.virtualSize, e.moveDivider = e.divider * (e.trackSize / u.size), e.dragSize = e.trackSize * e.divider, t() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.track[0].style.display = e.divider >= 1 ? "none" : "", u.params.scrollbarHide && (e.track[0].style.opacity = 0)
          }
        }, setTranslate: function () {
          if (u.params.scrollbar) {
            var e, a = u.scrollbar, n = (u.translate || 0, a.dragSize);
            e = (a.trackSize - a.dragSize) * u.progress, u.rtl && t() ? (e = -e, e > 0 ? (n = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (n = a.trackSize + e)) : 0 > e ? (n = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (n = a.trackSize - e), t() ? (a.drag.transform(u.support.transforms3d ? "translate3d(" + e + "px, 0, 0)" : "translateX(" + e + "px)"), a.drag[0].style.width = n + "px") : (a.drag.transform(u.support.transforms3d ? "translate3d(0px, " + e + "px, 0)" : "translateY(" + e + "px)"), a.drag[0].style.height = n + "px"), u.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function () {
              a.track[0].style.opacity = 0, a.track.transition(400)
            }, 1e3))
          }
        }, setTransition: function (e) {
          u.params.scrollbar && u.scrollbar.drag.transition(e)
        }
      }, u.controller = {
        setTranslate: function (e, a) {
          function t(a) {
            e = a.rtl && "horizontal" === a.params.direction ? -u.translate : u.translate, n = (a.maxTranslate() - a.minTranslate()) / (u.maxTranslate() - u.minTranslate()), r = (e - u.minTranslate()) * n + a.minTranslate(), u.params.controlInverse && (r = a.maxTranslate() - r), a.updateProgress(r), a.setWrapperTranslate(r, !1, u), a.updateActiveIndex()
          }

          var n, r, o = u.params.control;
          if (u.isArray(o))for (var i = 0; i < o.length; i++)o[i] !== a && o[i]instanceof Swiper && t(o[i]); else o instanceof Swiper && a !== o && t(o)
        }, setTransition: function (e, a) {
          function t(a) {
            a.setWrapperTransition(e, u), 0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function () {
              r && a.onTransitionEnd()
            }))
          }

          var n, r = u.params.control;
          if (u.isArray(r))for (n = 0; n < r.length; n++)r[n] !== a && r[n]instanceof Swiper && t(r[n]); else r instanceof Swiper && a !== r && t(r)
        }
      }, u.parallax = {
        setTranslate: function () {
          u.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
            i(this, u.progress)
          }), u.slides.each(function () {
            var e = f(this);
            e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
              var a = Math.min(Math.max(e[0].progress, -1), 1);
              i(this, a)
            })
          })
        }, setTransition: function (e) {
          "undefined" == typeof e && (e = u.params.speed), u.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
            var a = f(this), t = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
            0 === e && (t = 0), a.transition(t)
          })
        }
      }, u._plugins = [];
      for (var P in u.plugins) {
        var M = u.plugins[P](u, u.params[P]);
        M && u._plugins.push(M)
      }
      return u.callPlugins = function (e) {
        for (var a = 0; a < u._plugins.length; a++)e in u._plugins[a] && u._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
      }, u.emitterEventListeners = {}, u.emit = function (e) {
        u.params[e] && u.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        var a;
        if (u.emitterEventListeners[e])for (a = 0; a < u.emitterEventListeners[e].length; a++)u.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        u.callPlugins && u.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
      }, u.on = function (e, a) {
        return e = s(e), u.emitterEventListeners[e] || (u.emitterEventListeners[e] = []), u.emitterEventListeners[e].push(a), u
      }, u.off = function (e, a) {
        var t;
        if (e = s(e), "undefined" == typeof a)return u.emitterEventListeners[e] = [], u;
        if (u.emitterEventListeners[e] && 0 !== u.emitterEventListeners[e].length) {
          for (t = 0; t < u.emitterEventListeners[e].length; t++)u.emitterEventListeners[e][t] === a && u.emitterEventListeners[e].splice(t, 1);
          return u
        }
      }, u.once = function (e, a) {
        e = s(e);
        var t = function () {
          a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), u.off(e, t)
        };
        return u.on(e, t), u
      }, u.a11y = {
        makeFocusable: function (e) {
          return e[0].tabIndex = "0", e
        },
        addRole: function (e, a) {
          return e.attr("role", a), e
        },
        addLabel: function (e, a) {
          return e.attr("aria-label", a), e
        },
        disable: function (e) {
          return e.attr("aria-disabled", !0), e
        },
        enable: function (e) {
          return e.attr("aria-disabled", !1), e
        },
        onEnterKey: function (e) {
          13 === e.keyCode && (f(e.target).is(u.params.nextButton) ? (u.onClickNext(e), u.a11y.notify(u.isEnd ? u.params.lastSlideMsg : u.params.nextSlideMsg)) : f(e.target).is(u.params.prevButton) && (u.onClickPrev(e), u.a11y.notify(u.isBeginning ? u.params.firstSlideMsg : u.params.prevSlideMsg)))
        },
        liveRegion: f('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
        notify: function (e) {
          var a = u.a11y.liveRegion;
          0 !== a.length && (a.html(""), a.html(e))
        },
        init: function () {
          if (u.params.nextButton) {
            var e = f(u.params.nextButton);
            u.a11y.makeFocusable(e), u.a11y.addRole(e, "button"), u.a11y.addLabel(e, u.params.nextSlideMsg)
          }
          if (u.params.prevButton) {
            var a = f(u.params.prevButton);
            u.a11y.makeFocusable(a), u.a11y.addRole(a, "button"), u.a11y.addLabel(a, u.params.prevSlideMsg)
          }
          f(u.container).append(u.a11y.liveRegion)
        },
        destroy: function () {
          u.a11y.liveRegion && u.a11y.liveRegion.length > 0 && u.a11y.liveRegion.remove()
        }
      }, u.init = function () {
        u.params.loop && u.createLoop(), u.updateContainerSize(), u.updateSlidesSize(), u.updatePagination(), u.params.scrollbar && u.scrollbar && u.scrollbar.set(), "slide" !== u.params.effect && u.effects[u.params.effect] && (u.params.loop || u.updateProgress(), u.effects[u.params.effect].setTranslate()), u.params.loop ? u.slideTo(u.params.initialSlide + u.loopedSlides, 0, u.params.runCallbacksOnInit) : (u.slideTo(u.params.initialSlide, 0, u.params.runCallbacksOnInit), 0 === u.params.initialSlide && (u.parallax && u.params.parallax && u.parallax.setTranslate(), u.lazy && u.params.lazyLoading && (u.lazy.load(), u.lazy.initialImageLoaded = !0))), u.attachEvents(), u.params.observer && u.support.observer && u.initObservers(), u.params.preloadImages && !u.params.lazyLoading && u.preloadImages(), u.params.autoplay && u.startAutoplay(), u.params.keyboardControl && u.enableKeyboardControl && u.enableKeyboardControl(), u.params.mousewheelControl && u.enableMousewheelControl && u.enableMousewheelControl(), u.params.hashnav && u.hashnav && u.hashnav.init(), u.params.a11y && u.a11y && u.a11y.init(), u.emit("onInit", u)
      }, u.cleanupStyles = function () {
        u.container.removeClass(u.classNames.join(" ")).removeAttr("style"), u.wrapper.removeAttr("style"), u.slides && u.slides.length && u.slides.removeClass([u.params.slideVisibleClass, u.params.slideActiveClass, u.params.slideNextClass, u.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), u.paginationContainer && u.paginationContainer.length && u.paginationContainer.removeClass(u.params.paginationHiddenClass), u.bullets && u.bullets.length && u.bullets.removeClass(u.params.bulletActiveClass), u.params.prevButton && f(u.params.prevButton).removeClass(u.params.buttonDisabledClass), u.params.nextButton && f(u.params.nextButton).removeClass(u.params.buttonDisabledClass), u.params.scrollbar && u.scrollbar && (u.scrollbar.track && u.scrollbar.track.length && u.scrollbar.track.removeAttr("style"), u.scrollbar.drag && u.scrollbar.drag.length && u.scrollbar.drag.removeAttr("style"))
      }, u.destroy = function (e, a) {
        u.detachEvents(), u.stopAutoplay(), u.params.loop && u.destroyLoop(), a && u.cleanupStyles(), u.disconnectObservers(), u.params.keyboardControl && u.disableKeyboardControl && u.disableKeyboardControl(), u.params.mousewheelControl && u.disableMousewheelControl && u.disableMousewheelControl(), u.params.a11y && u.a11y && u.a11y.destroy(), u.emit("onDestroy"), e !== !1 && (u = null)
      }, u.init(), u
    }
  }, Swiper.prototype = {
    isSafari: function () {
      var e = navigator.userAgent.toLowerCase();
      return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
    }(),
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
    isArray: function (e) {
      return "[object Array]" === Object.prototype.toString.apply(e)
    },
    browser: {
      ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
      ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
    },
    device: function () {
      var e = navigator.userAgent, a = e.match(/(Android);?[\s\/]+([\d.]+)?/), t = e.match(/(iPad).*OS\s([\d_]+)/), n = (e.match(/(iPod)(.*OS\s([\d_]+))?/), !t && e.match(/(iPhone\sOS)\s([\d_]+)/));
      return {ios: t || n || t, android: a}
    }(),
    support: {
      touch: window.Modernizr && Modernizr.touch === !0 || function () {
        return !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch)
      }(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
        var e = document.createElement("div").style;
        return "webkitPerspective"in e || "MozPerspective"in e || "OPerspective"in e || "MsPerspective"in e || "perspective"in e
      }(), flexbox: function () {
        for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++)if (a[t]in e)return !0
      }(), observer: function () {
        return "MutationObserver"in window || "WebkitMutationObserver"in window
      }()
    },
    plugins: {}
  }
}(), Framework7.prototype.plugins.swipeMove = function (e, a) {
  function t(e) {
    var a = e.css("-webkit-transform").match(/matrix(?:(3d)\(-{0,1}\d+(?:, -{0,1}\d+)*(?:, (-{0,1}\d+))(?:, (-{0,1}\d+))(?:, (-{0,1}\d+)), -{0,1}\d+\)|\(-{0,1}\d+(?:, -{0,1}\d+)*(?:, (-{0,1}\d+))(?:, (-{0,1}\d+))\))/);
    return a ? "3d" == a[1] ? a.slice(2, 5) : (a.push(0), a.slice(5, 8)) : [0, 0, 0]
  }

  function n(e) {
    T = !1, i = !1, l = void 0, C.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, C.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, s = (new Date).getTime()
  }

  function r(e) {
    var a = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, n = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY;
    if (l = Math.abs(n - C.y) > Math.abs(a - C.x) ? "vertical" : "horizontal", !i) {
      if (S && (c.removeClass("handleTouchEnd"), S = !1), v(e.target).hasClass("swipemove-inner") ? c = v(e.target) : (c = v(e.target).parents(".swipemove-inner"), 0 === c.length && (c = void 0)), !c)return;
      var r = v(e.target).parents(".swipemove-vertical"), o = v(e.target).parents(".swipemove-horizontal");
      if (d = !!r.length, u = !!o.length, "vertical" === l) {
        if (!d)return
      } else if ("horizontal" === l && !u)return;
      u ? (p = o, f = c.outerWidth() - p.outerWidth()) : (p = r, f = c.outerHeight() - p.outerHeight()), 0 > f && (f = 0), h = parseInt(u ? t(c)[0] : t(c)[1])
    }
    i = !0, T = !0, e.preventDefault(), g = "horizontal" === l ? a - C.x : n - C.y, -(g + h) > f ? (m = -f - Math.pow(-(g + h) - f, .8), S = !0) : g + h > 0 ? (m = Math.pow(g + h, .8), S = !0) : m = g + h, "horizontal" === l && u ? c.transform("translate3d(" + m + "px,0,0)") : "vertical" === l && d && c.transform("translate3d(0," + m + "px,0)")
  }

  function o(e) {
    return T && i ? (-g - h > f ? m = -f : g + h > 0 && (m = 0), S && c.addClass("handleTouchEnd").transitionEnd(function () {
      c.removeClass("handleTouchEnd"), S = !1
    }), void c.transform(u ? "translate3d(" + m + "px,0,0)" : "translate3d(0," + m + "px,0)")) : (T = !1, void(i = !1))
  }

  var i, s, l, p, c, d, u, f, m, h, g, v = Dom7, C = {}, Y = !1, S = !1, T = !1;
  return {
    hooks: {
      appInit: function () {
      }, navbarInit: function (e, a) {
      }, pageInit: function (a) {
        Y = v(a.container).hasClass("plugins-swipe-move"), Y && (v(document).on(e.touchEvents.start, n), v(document).on(e.touchEvents.move, r), v(document).on(e.touchEvents.end, o))
      }, pageBeforeInit: function (e) {
      }, pageBeforeAnimation: function (e) {
      }, pageAfterAnimation: function (e) {
      }, pageBeforeRemove: function (a) {
        Y && (v(document).off(e.touchEvents.start, n), v(document).off(e.touchEvents.move, r), v(document).off(e.touchEvents.end, o), Y = !1)
      }, addView: function (e) {
      }, loadPage: function (e, a, t) {
      }, goBack: function (e, a, t) {
      }, swipePanelSetTransform: function (e, a, t) {
      }
    }
  }
}, Framework7.prototype.plugins.showonScrollUp = function (e, a) {
  var t, n, r, o, i, s, l, p, c, d, u, f, m, h, g, v, C = Dom7, Y = !1, S = !1, T = !1, Z = function () {
    w && (w = !1, n || (n = C(".page-on-center").find(".page-content")), o || (o = C(".page-on-center").find(".show-on-scroll-up-inner")), i = n[0].scrollTop, s = n[0].scrollHeight, l = n[0].offsetHeight, p = o[0].offsetHeight, 0 >= i || (S || (g = i, h = f.length ? f[0].offsetHeight : 0, m = u.length && n.hasClass("hide-bars-on-scroll") || n.hasClass("hide-toolbar-on-scroll") ? u[0].offsetHeight : 0, d = r.hasClass("show-on-scroll-end"), S = !0), c = d && i + l >= s - m, g > i || c ? T === !0 && (o.addClass("transitioning").transform("translate3d(0,0px,0)"), T = !1) : i > g && i > h + p && T === !1 && (o.transform("translate3d(0,-" + (h + p) + "px,0)"), T = !0), g = i))
  }, w = !1, L = function () {
    w = !0
  };
  return {
    hooks: {
      appInit: function () {
      }, navbarInit: function (e, a) {
      }, pageInit: function (a) {
        if (t = C(a.container), Y = t.hasClass("plugins-show-on-scroll-up")) {
          if (n = t.find(".page-content"), r = n.find(".show-on-scroll-up"), o = r.find(".show-on-scroll-up-inner"), 0 === t.length || t.hasClass("page-on-left") || 0 === n.length || 0 === r.length || 0 === o.length)return void(Y = !1);
          var i = n.parents("." + e.params.viewClass);
          0 !== i.length && (f = i.find(".navbar"), u = i.find(".toolbar"), f.length && o.addClass("show-on-scroll-up-width-navbar"), t.prepend(o), o.addClass("show-on-scroll-up-ready"), n.on("scroll", L), v = setInterval(Z, 100))
        }
      }, pageBeforeInit: function (e) {
      }, pageBeforeAnimation: function (e) {
      }, pageAfterAnimation: function (e) {
      }, pageBeforeRemove: function (e) {
        Y && (n.off("scroll", L), v && (clearInterval(v), v = null), t = null, n = null, r = null, o = null, Y = !1)
      }, addView: function (e) {
      }, loadPage: function (e, a, t) {
      }, goBack: function (e, a, t) {
        console.log("goBack", e, a, t)
      }, swipePanelSetTransform: function (e, a, t) {
      }
    }
  }
}, Framework7.prototype.plugins.scrollTop = function (e, a) {
  function t(e) {
    i && (clearInterval(i), i = null)
  }

  var n, r, o, i, s, l = Dom7, p = !1, c = function () {
    r.scrollTop(0, 300)
  }, d = function () {
    r[0].scrollTop > 300 && s === !0 ? (o.removeClass("scroll-top-hidden").animationEnd(function () {
      l(this).css("z-index", "999999")
    }), s = !1) : r[0].scrollTop <= 300 && s === !1 && (o.addClass("scroll-top-hidden").animationEnd(function () {
      l(this).css("z-index", "-999999")
    }), s = !0)
  };
  return {
    hooks: {
      appInit: function () {
      }, navbarInit: function (e, a) {
      }, pageInit: function (a) {
        if (n = l(a.container), p = n.hasClass("plugins-scroll-top")) {
          if (r = n.find(".page-content"), o = r.find(".scroll-top"), 0 === n.length || n.hasClass("page-on-left") || 0 === r.length || 0 === o.length)return void(p = !1);
          s = o.hasClass(".scroll-top-hidden"), n.append(o), r.on("scroll", d), o.on("click", c), l(document).on(e.touchEvents.start, t)
        }
      }, pageBeforeInit: function (e) {
      }, pageBeforeAnimation: function (e) {
      }, pageAfterAnimation: function (e) {
      }, pageBeforeRemove: function (a) {
        p && (r.off("scroll", d), o.off("click", c), l(document).off(e.touchEvents.start, t), n = null, r = null, o = null, p = !1)
      }, addView: function (e) {
      }, loadPage: function (e, a, t) {
      }, goBack: function (e, a, t) {
      }, swipePanelSetTransform: function (e, a, t) {
      }
    }
  }
}, Framework7.prototype.plugins.multipleScreen = function (e, a) {
  function t(e) {
    s = !0, o = !1, Y = 0, S = 0, u = void 0, i = void 0, g.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, g.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
    var a = h(e.target);
    a.hasClass("multiple-screen") || 0 !== a.parents(".multiple-screen").length || a.hasClass("multiple-screen-secondary") || 0 !== a.parents(".multiple-screen-secondary").length || (s = !1)
  }

  function n(e) {
    if (s) {
      Z && e.preventDefault();
      var a = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, t = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY;
      if ("undefined" == typeof i && (i = !!(i || Math.abs(t - g.y) > Math.abs(a - g.x))), !i)return void(s = !1);
      if (o || (C = g.y, m && (T ? (p.removeClass("handleTouchEnd"), m = !1) : (c.removeClass("handleTouchEnd"), m = !1))), o = !0, t > C)u = "back"; else {
        if (!(C > t))return void(u = void 0);
        u = "forword"
      }
      (T === !1 && p[0].offsetHeight + p[0].scrollTop === p[0].scrollHeight && ("forword" === u || 0 > Y) || T === !0 && 0 === d[0].scrollTop && ("back" === u || Y > 0)) && (void 0 === f && (f = t), T === !0 ? (Y = Math.pow(Math.abs(t - f + S), .8), ("back" === u || "forword" === u && t - f + S > 0) && (e.preventDefault(), d.transform("translate3d(0," + Y + "px,0)"), C = t, S = Y, Z = Y >= 32 && "back" === u ? !0 : !1)) : T === !1 && (Y = -Math.pow(Math.abs(t - f + S), .8), ("forword" === u || "back" === u && 0 > t - f + S) && (e.preventDefault(), p.transform("translate3d(0," + Y + "px,0)"), C = t, S = Y, Z = -32 >= Y && "forword" === u ? !0 : !1)))
    }
  }

  function r(e) {
    return s && o ? (T === !1 ? (Z && (l.addClass("overflow-hidden"), c.removeClass("display-none"), setTimeout(function () {
      c.addClass("handleTouchEnd").transform("translate3d(0,0,0)"), setTimeout(function () {
        T = !0, d.trigger("in"), Z = !1, c.removeClass("handleTouchEnd"), l.removeClass("overflow-hidden")
      }, 300)
    }, 100)), 0 > Y && (m = !0, p.addClass("handleTouchEnd").transitionEnd(function () {
      p.removeClass("handleTouchEnd"), m = !1
    }), p.transform("translate3d(0,0,0)"))) : (Z && (l.addClass("overflow-hidden"), setTimeout(function () {
      c.addClass("handleTouchEnd").transform("translate3d(0,100%,0)"), setTimeout(function () {
        T = !1, d.trigger("out"), Z = !1, c.removeClass("handleTouchEnd"), c.addClass("display-none"), l.removeClass("overflow-hidden")
      }, 300)
    }, 100)), Y > 0 && (m = !0, d.addClass("handleTouchEnd").transitionEnd(function () {
      d.removeClass("handleTouchEnd"), m = !1
    }), d.transform("translate3d(0,0,0)"))), f = void 0, Y = 0, s = !0, void(o = !1)) : (s = !0, void(o = !1))
  }

  var o, i, s, l, p, c, d, u, f, m, h = Dom7, g = {}, v = !1, C = 0, Y = 0, S = 0, T = !1, Z = !1;
  return {
    hooks: {
      appInit: function () {
      }, navbarInit: function (e, a) {
      }, pageInit: function (a) {
        if (v = h(a.container).hasClass("plugins-multiple-screen")) {
          if (p = h(a.container).find(".multiple-screen"), c = h(a.container).find(".multiple-screen-secondary"), d = h(a.container).find(".multiple-screen-inner"), 0 === p.length || 0 === c.length)return void(v = !1);
          c.addClass("display-none"), l = h(a.container).find(".page-content"), 0 !== l.length && (h(document).on(e.touchEvents.start, t), h(document).on(e.touchEvents.move, n), h(document).on(e.touchEvents.end, r))
        }
      }, pageBeforeInit: function (e) {
      }, pageBeforeAnimation: function (e) {
      }, pageAfterAnimation: function (e) {
      }, pageBeforeRemove: function (a) {
        v && (p = void 0, c = void 0, d = void 0, h(document).off(e.touchEvents.start, t), h(document).off(e.touchEvents.move, n), h(document).off(e.touchEvents.end, r), v = !1)
      }, addView: function (e) {
      }, loadPage: function (e, a, t) {
      }, goBack: function (e, a, t) {
      }, swipePanelSetTransform: function (e, a, t) {
      }
    }
  }
}, Framework7.prototype.plugins.indexedlist = function (e, a) {
  function t(a) {
    function t(e) {
      e.preventDefault(), c = !0;
      var a = n(e.target);
      a.is("li") || (a = a.parents("li")), a.length > 0 && s(a.eq(0).data("index-letter"))
    }

    function r(e) {
      if (c) {
        e.preventDefault();
        var a;
        a = n("mousemove" === e.type ? e.target : document.elementFromPoint(e.touches[0].pageX, e.touches[0].pageY)), a.is("li") || (a = a.parents("li")), 0 !== a.length && (a.length > 0 && !a.is(".list-index li") || s(a.eq(0).data("index-letter")))
      }
    }

    function o(e) {
      c = d = !1
    }

    function i() {
      var e = [], a = "";
      return p.find(".list-group").each(function () {
        var t = n(this).find("ul .list-group-title"), r = t.html().trim().charAt(0).toUpperCase();
        t.attr("data-index-letter", r), a += '<li data-index-letter="' + r + '">' + r + "</li>", e.push(r)
      }), l.html(a), e
    }

    function s(e) {
      var a = p.find('.list-group ul li[data-index-letter="' + e + '"]');
      if (a.length) {
        var t = a.offset().top + p.scrollTop() - (u ? 44 : 0) - (f ? 44 : 0);
        p.scrollTop(t)
      }
    }

    var l = n(a.container).find(".list-index");
    if (0 !== l.length) {
      var p = n(a.container).find(".indexed-list-wrapper");
      i();
      var c, d, u = p.parents(".navbar-fixed").length > 0 || p.parents(".navbar-through").length > 0, f = n(a.container).find(".searchbar").length > 0;
      f && (console.log(l), l.css("margin-top", "44px")), n(a.container).on("click", ".list-index li", function (e) {
        var a = n(e.target);
        a.is("li") || (a = a.parents("li")), a.length > 0 && s(a.eq(0).data("index-letter"))
      }), l.on(e.touchEvents.start, t), l.on(e.touchEvents.move, r), l.on(e.touchEvents.end, o)
    }
  }

  var n = window.Dom7;
  return e.initIndexedList = t, {
    hooks: {
      pageInit: function (e) {
        0 !== n(e.container).find(".list-group").length && 0 !== n(e.container).find(".list-index").length && t(e)
      }
    }
  }
}, function (e) {
  function a(t) {
    if (n[t])return n[t].exports;
    var r = n[t] = {exports: {}, id: t, loaded: !1};
    return e[t].call(r.exports, r, r.exports, a), r.loaded = !0, r.exports
  }

  var t = window.webpackJsonp;
  window.webpackJsonp = function (o, i) {
    for (var s, l, p = 0, c = []; p < o.length; p++)l = o[p], r[l] && c.push.apply(c, r[l]), r[l] = 0;
    for (s in i)e[s] = i[s];
    for (t && t(o, i); c.length;)c.shift().call(null, a);
    return i[0] ? (n[0] = 0, a(0)) : void 0
  };
  var n = {}, r = {2: 0};
  a.e = function (e, t) {
    if (0 === r[e])return t.call(null, a);
    if (void 0 !== r[e])r[e].push(t); else {
      r[e] = [t];
      var n = document.getElementsByTagName("head")[0], o = document.createElement("script");
      o.type = "text/javascript", o.charset = "utf-8", o.async = !0, o.src = a.p + "1.8c63a46f58b7ce8c284b.bundle.js", n.appendChild(o)
    }
  }, a.m = e, a.c = n, a.p = "./js/"
}([]), webpackJsonp([0, 2], [function (e, a, t) {
  function n(e) {
    if (!e || !e.trim())return !1;
    for (var a = "smart-select-".split(" "), t = 0, n = a.length; n > t; t++)if (e.search(a[t]) >= 0)return !0;
    return !1
  }

  function r(e) {
    c(document).on("pageBeforeInit", function (e) {
      var a = e.detail.page;
      n(a.name) || (m._updateTitle(a), o(a, a.name, "init", function (e) {
        var t = function (n) {
          "function" == typeof e && e(), c(a.container).off("pageBeforeRemove", t)
        };
        c(a.container).on("pageBeforeRemove", t)
      }), s(a), h.callFn("setShareMessage", {
        imgUrl: window.shareMessage.imgUrl,
        title: window.shareMessage.title,
        link: window.shareMessage.link,
        ac: window.shareMessage.ac
      }, function (e) {
      }))
    }), c(document).on("pageBeforeRemove", function (e) {
      var a = e.detail.page;
      n(a.name) || (o(a, a.name, "pageBeforeRemove", function (e) {
        var t = function (n) {
          "function" == typeof e && e(), c(a.container).off("pageBeforeRemove", t)
        };
        c(a.container).on("pageBeforeRemove", t)
      }), T.f7.closePanel(), T.f7.closeModal())
    }), c(document).on("pageInit", function (e) {
      var a = e.detail.page;
      n(a.name)
    }), c(document).on("pageAfterBack", function (e) {
      var a = e.detail.page;
      n(a.name) || o(a, a.name, "pageAfterBack", function (e) {
        var t = function (n) {
          "function" == typeof e && e(), c(a.container).off("pageBeforeRemove", t)
        };
        c(a.container).on("pageBeforeRemove", t)
      })
    });
    var a = c(".toolbar .link");
    c(document).on("pageBeforeAnimation", function (e) {
      var t = e.detail.page;
      n(t.name) || (o(t, t.name, "pageBeforeAnimation", function (e) {
        var a = function (n) {
          "function" == typeof e && e(), c(t.container).off("pageBeforeRemove", a)
        };
        c(t.container).on("pageBeforeRemove", a)
      }), !u.webView && t.name && (a.removeClass("active"), c("#" + t.name + "-tab").addClass("active")))
    });
    var t = !0, r = c("#launcher"), i = c("#launcher").length > 0;
    c(document).on("pageAfterAnimation", function (e) {
      if (t === !0 && i && (r.addClass("launcherClosed"), t = !1), u.ios && u.webView) {
        var a = document.createElement("IFRAME");
        a.setAttribute("src", "command://jsReady=true"), document.body.appendChild(a), a.parentNode.removeChild(a), a = null
      }
      var s = e.detail.page;
      n(s.name) || (l(s), o(s, s.name, "pageAfterAnimation", function (e) {
        var a = function (t) {
          "function" == typeof e && e(), c(s.container).off("pageBeforeRemove", a)
        };
        c(s.container).on("pageBeforeRemove", a)
      }))
    }), c(document).on("pageReinit", function (e) {
      var a = e.detail.page;
      n(a.name) || (m._updateTitle(a), o(a, a.name, "pageReinit", function (e) {
        var t = function (n) {
          "function" == typeof e && e(), c(a.container).off("pageBeforeRemove", t)
        };
        c(a.container).on("pageBeforeRemove", t)
      }))
    })
  }

  function o(e, a, n, r) {
    var o = {};
    c(e.container).find('script[type="text/template7"]').each(function () {
      var e = c(this).attr("id"), a = c(this).attr("data-precompile");
      e && (o[e] = "false" === a ? this.innerHTML.trim() : d.compile(c(this).html()))
    });
    var i = c(e.container).attr("data-controller");
    if (i && -1 === i.search("http://") && (i = g.jsRoot + i), a)t.e(1, function (t) {
      var i = [t(9)("./" + a + "/c")];
      (function (a) {
        a[n] && a[n](e, o, r)
      }).apply(null, i)
    }); else if (i && "init" === n) {
      var s = function (e, a) {
        if (e) {
          var t = document.getElementsByTagName("head")[0], n = document.createElement("script");
          n.type = "text/javascript", n.charset = "utf-8", n.async = !0, n.src = e, "function" == typeof a && (n.onload = a), t.appendChild(n)
        }
      };
      "undefined" == typeof jQuery ? s("http://skin.aolaigo.com/js/source/common/jquery1.7.js", function () {
        s(i)
      }) : s(i)
    }
  }

  function i(e) {
    g.updateQuery(e), window.wx.ready(function () {
      window.wx.hideAllNonBaseMenuItem(), window.wx.showMenuItems({menuList: ["menuItem:share:appMessage", "menuItem:share:timeline", "menuItem:profile"]}), l()
    }), window.wx.config({
      debug: !1,
      appId: e.appid,
      timestamp: e.timestamp,
      nonceStr: e.noncestr,
      signature: e.signature,
      jsApiList: ["chooseWXPay", "scanQRCode", "hideAllNonBaseMenuItem", "showMenuItems", "onMenuShareTimeline", "onMenuShareAppMessage", "getNetworkType"]
    })
  }

  function s(e) {
    var a = document.location.href.split("?"), t = a[0] + "?" + a[1], n = a[2];
    n = n ? "?" + n.split("&code=")[0] : "?f=f";
    var r, o, i, s = (c(e.container).attr("data-share-ac"), c(e.container).attr("data-title"));
    switch (u.webView && u.ios && !u.microMessenger ? (i = "http://wx.aolaigo.com/img/favicon.png", Z.link = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxab10ea775ea85f10&redirect_uri=" + encodeURIComponent("http://wx.aolaigo.com/index-app.html#!" + document.location.href.split("#!")[1], "UTF-8") + "&response_type=code&scope=snsapi_userinfo&state=base&connect_redirect=1#wechat_redirect") : u.webView && u.android && !u.microMessenger ? (i = "http://wx.aolaigo.com/img/favicon.png", Z.link = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxab10ea775ea85f10&redirect_uri=" + encodeURIComponent("http://wx.aolaigo.com/index-app.html#!" + document.location.href.split("#!")[1], "UTF-8") + "&response_type=code&scope=snsapi_userinfo&state=base&connect_redirect=1#wechat_redirect") : (u.microMessenger || g.wxDebug) && (i = a[0].split("/index-app.html")[0] + "/img/favicon.png",
      Z.link = "publish" === g.packEnv ? "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxab10ea775ea85f10&redirect_uri=" + encodeURIComponent(t + n, "UTF-8") + "&response_type=code&scope=snsapi_userinfo&state=base&connect_redirect=1#wechat_redirect" : "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb8d285b01e42ae66&redirect_uri=" + encodeURIComponent(t + n, "UTF-8") + "&response_type=code&scope=snsapi_userinfo&state=base#wechat_redirect"), e && e.name || "") {
      case"search-list":
        o = c(e.container).find(".virtual-list ul li img")[0], r = o && (o.getAttribute("src") || o.getAttribute("data-src")) || i, s || (s = "折扣超低的“" + (e.query.keyword || e.query.title) + "”相关的商品任你购！");
        break;
      case"product-detail":
        o = c(e.container).find(".swiper-container img")[0], r = o && (o.getAttribute("src") || o.getAttribute("data-src")) || i, s || (s = c("#wxShareTitle").text());
        break;
      case"activity":
        r = i, s || (s = "奥莱购" + e.query.title);
        break;
      case"channel":
        r = i, s || (s = "奥莱购" + e.query.title);
        break;
      default:
        r = i, s || (s = e && e.query && e.query.title || "名品商城，真正的优惠！")
    }
    Z.imgUrl = r, Z.title = s
  }

  function l(e) {
    (u.microMessenger || g.wxMode) && (window.wx.onMenuShareTimeline({
      title: window.shareMessage.title,
      link: window.shareMessage.link,
      imgUrl: window.shareMessage.imgUrl,
      success: function () {
      },
      cancel: function () {
      }
    }), window.wx.onMenuShareAppMessage({
      title: window.shareMessage.title,
      desc: "",
      link: window.shareMessage.link,
      imgUrl: window.shareMessage.imgUrl,
      type: "link",
      dataUrl: "",
      success: function () {
      },
      cancel: function () {
      }
    }))
  }

  function p() {
    function e(e) {
      var a;
      return e.search("\\&code=") > -1 ? a = e.split("&code=")[1].split("&")[0] : e.search("\\?code=") > -1 && (a = e.split("?code=")[1].split("&")[0]), a
    }

    if (u.microMessenger || g.wxDebug) {
      var a = e(document.location.href), t = localStorage.getItem && localStorage.getItem("wxCode");
      if (t !== a && a)localStorage.setItem("wxCode", a), new f({
        async: !1,
        id: "wxConfig",
        query: {code: a, url: encodeURIComponent(document.location.href.split("#!")[0])},
        success: function (e) {
          m._setLocalStorageItem("wxConfig", e), i(e)
        }
      }); else {
        var n = m._getLocalStorageItem("wxConfig");
        n ? i(n) : g.wxDebug || T.f7.modal({title: "非常抱歉", text: "因为太久没有活动，您已退出登录，请返回重新进入商城。"})
      }
    } else if (!(u.webView && u.ios && !u.microMessenger || u.webView && u.android && !u.microMessenger)) {
      if (!m._isStorageSupported())return;
      var r = m._getLocalStorageItem("wapConfig", s), o = m._getSessionStorageItem("wapConfig", s), s = r || o;
      s && s.session && s.info ? s.info.time_stamp && Date.now() > s.info.time_stamp ? m._removeSessionStorageItem("wapConfig") : (g.info.usercode = s.info.usercode, g.info.username = s.info.username, g.info.code = s.info.code, g.updateQuery(g.info)) : s && s.info && (s.info.date && parseInt(Date.now() / 864e5, 10) > s.info.date ? m._removeLocalStorageItem("wapConfig") : (g.info.usercode = s.info.usercode, g.info.username = s.info.username, g.info.code = s.info.code, g.updateQuery(g.info)))
    }
  }

  var c = Dom7, d = Template7, u = Framework7.prototype.device, f = t(1), m = t(2), h = t(8), g = t(6);
  "publish" !== g.packEnv && (window.onerror = function (e, a, t) {
    return alert("错误信息:" + e + "  发生错误的文件:" + a + "  发生错误的行号:" + t), !1
  }), h.callFn("getNetworkType", {}, function (e) {
    window.networkType = e
  }), m._cssTest();
  var v = new Framework7({
    modalTitle: "奥莱购",
    modalButtonOk: "确定",
    modalButtonCancel: "取消",
    modalPreloaderTitle: "加载中...",
    animateNavBackIcon: !0,
    pushStateSeparator: "#!",
    pushState: !0,
    pushStateNoAnimation: !0,
    init: !0,
    swipeBackPage: !1,
    swipeBackPageActiveArea: 9999999,
    showBarsOnPageScrollEnd: !0,
    uniqueHistory: !0,
    uniqueHistoryIgnoreGetParameters: !0,
    smartSelectBackTemplate: '<div class="left sliding"><a href="#" class="back link"><i class="icon icon-back"></i><span>{{backText}}</span></a></div>',
    smartSelectBackText: "确定",
    smartSelectInPopup: !1,
    smartSelectPopupCloseTemplate: '<div class="left"><a href="#" class="link close-popup"><i class="icon icon-back"></i><span>{{closeText}}</span></a></div>',
    smartSelectPopupCloseText: "关闭",
    smartSelectSearchbar: !1,
    smartSelectBackOnSelect: !1
  });
  r(v);
  var C = v.addView(".view-main", {
    dynamicNavbar: !0,
    domCache: !0
  }), Y = v.addView(".panel-right .view", {dynamicNavbar: !0}), S = "03#248";
  "test" === g.packEnv && v.toast({text: S});
  {
    var T = {f7: v, version: S, mainView: C, panelRightView: Y}, Z = window.shareMessage = {
      link: "",
      imgUrl: "",
      title: "",
      ac: ""
    };
    p()
  }
  window.bridge = h, window.device = u, window.App = T, window.utils = {call: window.bridge.callHandler}, e.exports = T
}, function (e, a, t) {
  function n(e) {
    e.query && "null" === e.query.title && delete e.query.title, this.url = s.sources[e.id].url, this.data = i.merge({}, s.info, s.sources[e.id].query, e.query, e.data), this.method = "local" !== s.sourcesType && "POST" === s.sources[e.id].method ? "POST" : "GET", this.noAlert = s.sources[e.id].noAlert || e.query && e.query.noAlert || !1, this.cbData = s.sources[e.id].cbData || e.query && e.query.cbData || !1, this.paramsPrefix = this.url.indexOf("?") >= 0 ? "&" : "?", this.loaderSym = s.sources[e.id].hideloaderSym || e.query && e.query.hideloaderSym || !1, this.loginNeed = s.sources[e.id].loginNeed || e.query && e.query.loginNeed || !1, this.success = e.success, this.error = e.error, this.global = e.global, this.async = "undefined" == typeof e.async ? !0 : e.async, this.require(38e3), this.active = !0, this.xhrTimeout
  }

  var r = Dom7, o = (Template7, Framework7.prototype.device), i = t(2), s = t(6);
  n.prototype.abort = function (e) {
    var a = this;
    a.active === !0 && a.xhr && (a.xhr.abort(), a.xhrTimeout && clearTimeout(a.xhrTimeout))
  }, n.prototype.joinSymbol = function (e) {
    switch (e) {
      case"attr":
        return "a";
      default:
        return "_"
    }
  }, n.prototype.require = function (e) {
    var a = this;
    e && (a.xhrTimeout = setTimeout(function () {
      window.App ? window.App.f7.alert("网络有点慢，请稍等！") : alert("网络有点慢，请稍等！")
    }, e)), "POST" === a.method && (a.data = JSON.stringify(a.data)), a.xhr = r.ajax({
      url: a.url,
      data: a.data,
      dataType: "json",
      method: a.method,
      cache: !1,
      global: a.global,
      processData: !0,
      async: a.async,
      loaderSym: a.loaderSym,
      loginNeed: a.loginNeed,
      cbData: a.cbData,
      noAlert: a.noAlert,
      beforeSend: function (e) {
        if (!this.loaderSym) {
          var a = window.bridge && window.bridge.callFn("openLoader");
          !a && window.App && window.App.f7.showIndicator()
        }
      },
      success: function (e, t) {
        if (!this.loaderSym) {
          var n = window.bridge && window.bridge.callFn("closeLoader");
          !n && window.App && window.App.f7.hideIndicator()
        }
        a.xhrTimeout && clearTimeout(a.xhrTimeout), "publish" === s.packEnv || "test" === s.packEnv || a.noAlert || (console.log(a.url + ":"), console.log(e)), a.cbData ? a.success(e) : e && e.Code && 0 !== parseInt(e.Code, 10) || e && e.error && 0 !== parseInt(e.error, 10) ? (e.error && "-101" == e.error || e.error && "-1" == e.error || e.Code && "-99999" == e.Code ? (e && e.error && (e.error = "-1", e.Allmsg = e.msg, e.msg = null), a.success(e || ""), a.loginNeed && (window.App ? window.App.f7.confirm("请您先登录噢~", function () {
          o.webView && o.ios && !o.microMessenger || o.webView && o.android && !o.microMessenger ? (window.App.f7.closeModal(".product-detail-popou"), window.App.f7.closeModal(".bs-list"), bridge.loadPage("login", {}, function () {
          })) : (window.App.f7.closeModal(".product-detail-popou"), window.App.f7.closeModal(".bs-list"), App.f7.mainView.router.load({
            url: "views/login.html",
            animatePages: !0,
            pushState: !0
          }))
        }) : o.webView && o.ios && !o.microMessenger || o.webView && o.android && !o.microMessenger ? (window.App.f7.closeModal(".product-detail-popou"), window.App.f7.closeModal(".bs-list"), bridge.loadPage("login", {}, function () {
        })) : (window.App.f7.closeModal(".product-detail-popou"), window.App.f7.closeModal(".bs-list"), App.f7.mainView.router.load({
          url: "views/login.html",
          animatePages: !0,
          pushState: !0
        })))) : a.noAlert || (window.App ? window.App.f7.alert(e.Message || e.msg || "") : alert(e.Message || e.msg || "")), a.error && a.error(t, e.error)) : (e.Data && e.Code && (e.Data.Code = e.Code), e.data && e.msg && (e.data.msg = e.msg), e.Data && e.msg && (e.Data.msg = e.msg), a.success(e && e.Data || e && e.data || e))
      },
      error: function (e, t) {
        if (!this.loaderSym) {
          var n = window.bridge && window.bridge.callFn("closeLoader");
          !n && window.App && window.App.f7.hideIndicator()
        }
        a.xhrTimeout && clearTimeout(a.xhrTimeout), a.noAlert ? console.log(t) : window.App ? window.App.f7.alert(t) : alert(t)
      },
      complete: function (e) {
        a.active = !1
      }
    })
  }, e.exports = n
}, function (e, a, t) {
  function n(e, a) {
    localStorage.setItem(e, JSON.stringify(a))
  }

  function r(e) {
    return JSON.parse(localStorage.getItem && localStorage.getItem(e))
  }

  function o(e) {
    localStorage.getItem(e) && localStorage.removeItem(e)
  }

  function i(e, a) {
    sessionStorage.setItem(e, JSON.stringify(a))
  }

  function s(e) {
    return JSON.parse(sessionStorage.getItem && sessionStorage.getItem(e))
  }

  function l(e) {
    sessionStorage.getItem(e) && sessionStorage.removeItem(e)
  }

  function p() {
  }

  function c(e, a) {
    if (!e || !e.trim())return "";
    var t = "wlan" === g.sourcesType ? "aolaigo.com" : "taolaigo.com", n = ["http://img1." + t + "/group1/", "http://img2." + t + "/group1/", "http://img3." + t + "/group1/", "http://img4." + t + "/group1/", "http://img5." + t + "/group1/"], r = /^http:/i, o = e.split(".")[0].charCodeAt(e.split(".")[0].length - 1) % 5;
    if (r.test(e) || (e = n[o] + e), a) {
      a >= 1 && 8 > a && (a = parseInt(window.innerWidth / a * (window.devicePixelRatio || 1), 10)), window.networkType && "mobile" === window.networkType && (a = parseInt(2 * a / 3, 10)), a = "=" + a + "x" + a;
      var i = /\.[a-z]{1,3}$/i, s = i.exec(e)[0];
      e = e.replace(new RegExp("(=\\d+x\\d+)?\\" + s), a + s)
    }
    return e
  }

  function d(e) {
    if (f.microMessenger || g.wxMode) {
      var a = u(e.container).attr("data-title");
      a = a && a.trim() || "购物专区";
      var t = u("body");
      document.title = a.trim();
      var n = u('<iframe src="img/favicon.png"></iframe>').on("load", function () {
        setTimeout(function () {
          n.off("load").remove()
        }, 0)
      });
      t.append(n)
    }
  }

  var u = Dom7, f = (Template7, Framework7.prototype.device), m = t(3), h = t(5), g = t(6), v = [], C = " -webkit- -moz- -o- -ms- ".split(" "), Y = function (e, a) {
    v.push({name: e, fn: a})
  }, S = function () {
    return "function" != typeof document.createElement ? document.createElement(arguments[0]) : document.createElement.apply(document, arguments)
  };
  Y("not-css-calc", function () {
    var e = "width:", a = "calc(10px);", t = S("div");
    return t.style.cssText = e + C.join(a + e), !!t.style.length
  });
  var T = function () {
    for (var e = 0, a = v.length; a > e; e++)v[e].fn() || u("html").addClass(v[e].name)
  }, Z = function () {
    var e = {}, a = function (t, n, r) {
      var o = r.join(t.separator);
      if (0 === r.length)return {stock: t.stocks, attrs: t.attrs, skuid: "", price: "", logo: ""};
      if (r.length === n.length)return t[o] || {stock: 0, attrs: "", skuid: "", price: "", logo: ""};
      if (e[o])return e[o];
      for (var i, s, l, p = [], c = [], d = 0, u = 0, f = n.length; f > u; u++) {
        for (var h in n[u].value) {
          if (h === r[0]) {
            i = !0;
            break
          }
          i = !1
        }
        if (i === !0)p.push(r.shift()); else for (var h in n[u].value)s = a(t, n, p.concat(h, r)), d += s.stock, l = s.logo, 0 !== s.stock && (c = c.concat(s.attrs))
      }
      return e[o] = {stock: d, attrs: m.uniq(c), skuid: "", price: "", logo: l}, e[o]
    };
    return a
  }(), w = function (e) {
    var a, t = {}, n = e || decodeURIComponent(document.location.href), r = n.split("?"), o = r[0].split("/"), i = o[o.length - 1].split("."), s = i[0], l = r[1] || "";
    if (t.url = e, t.pageName = s, t.query = {}, t.queryString = l, !l)return t;
    for (var p = l.split("&"), c = 0, d = p.length; d > c; c++)a = p[c].split("="), t.query[a[0]] = decodeURIComponent(a[1]).trim();
    return t
  };
  m.mixin({
    _pageQuery: w,
    _cssTest: T,
    _imgsrc: c,
    _checkSku: Z,
    _pinyin: h,
    _setLocalStorageItem: n,
    _getLocalStorageItem: r,
    _removeLocalStorageItem: o,
    _setSessionStorageItem: i,
    _getSessionStorageItem: s,
    _removeSessionStorageItem: l,
    _wxConfig: p,
    _isStorageSupported: function () {
      var e = "test", a = window.sessionStorage;
      try {
        return a.setItem(e, "testValue"), a.removeItem(e), !0
      } catch (t) {
        return !1
      }
    },
    _typeData: function (e, a, t) {
      return "0" === e.Type || "1" === e.Type ? {
        href: "views/product-detail.html?skuId=" + e.skuid,
        title: e.title,
        saleprice: e.seckill_price || null,
        mprice: e.mprice || "",
        sprice: e.sprice || "",
        bname: e.bname || "",
        seconds: e.seconds || 0,
        status: e.ms_status || null,
        stock: parseInt(e.stockNum) || 0,
        startNum: parseInt(e.startNum) || 1,
        img: a,
        skuId: e.skuid || "",
        pId: e.productid || ""
      } : "2" === e.Type ? {
        href: "views/search-list.html?" + e.skuid,
        title: e.title,
        bname: e.bname || "",
        seconds: e.seconds || 0,
        img: a
      } : "3" === e.Type ? {
        href: g.htmlRoot + e.skuid,
        title: e.title,
        bname: e.bname || "",
        seconds: e.seconds || 0,
        status: e.ms_status || 0,
        img: a
      } : "4" === e.Type ? {
        type: "4",
        href: "",
        title: e.title,
        bname: e.bname || "",
        seconds: e.seconds || 0,
        img: a
      } : "6" === e.Type ? {
        href: "",
        title: "",
        ac: e.skuid,
        lt: e.lt || "",
        bname: e.bname || "",
        seconds: e.seconds || 0,
        img: a
      } : "7" === e.Type ? {href: e.href, title: e.title, img: a} : "8" === e.Type ? {
        href: "views/home.html",
        title: e.title,
        bname: e.bname || "",
        img: a
      } : "9" === e.Type ? {
        href: "views/channel.html?title=" + encodeURIComponent(e.title, "UTF-8") + "&id=" + e.skuid,
        title: e.title,
        bname: e.bname || "",
        seconds: e.seconds || 0,
        img: a
      } : "10" === e.Type ? {
        href: "views/activity.html?title=" + encodeURIComponent(e.title, "UTF-8") + "&id=" + e.skuid,
        title: e.title,
        bname: e.bname || "",
        seconds: e.seconds || 0,
        img: a
      } : "16" === e.Type ? {
        href: "views/actnest.html?title=" + encodeURIComponent(e.title, "UTF-8") + "&id=" + e.skuid,
        title: e.title,
        bname: e.bname || "",
        seconds: e.seconds || 0,
        img: a
      } : "11" === e.Type ? (t && u(t.container).attr("data-share-ac", e.skuid), {
        href: "",
        ac: e.skuid,
        img: a
      }) : "12" === e.Type ? {
        href: "views/crazysale.html?title=" + encodeURIComponent(e.title, "UTF-8") + "&id=" + e.skuid,
        title: e.title,
        bname: e.bname || "",
        seconds: e.seconds || 0,
        img: a
      } : "13" === e.Type ? {
        href: "views/seckill.html?title=" + encodeURIComponent(e.title, "UTF-8") + "&id=" + e.skuid,
        title: e.title,
        bname: e.bname || "",
        status: e.ms_status || 0,
        seconds: e.seconds || 0,
        img: a
      } : "14" === e.Type ? {
        href: "views/newarrivals.html?title=" + encodeURIComponent(e.title, "UTF-8") + "&id=" + e.skuid + "&cmd=5&opt=1",
        title: e.title,
        bname: e.bname || "",
        seconds: e.seconds || 0,
        img: a
      } : "15" === e.Type ? {
        href: "views/bundle-sales.html?title=" + encodeURIComponent(e.title, "UTF-8") + "&id=" + e.skuid + "&cmd=5&opt=1&actcode=" + e.bname,
        title: e.title,
        bname: e.bname || "",
        seconds: e.seconds || 0,
        img: a
      } : void 0
    },
    _updateTitle: d
  }), e.exports = m
}, function (e, a, t) {
  var n;
  (function (e, r) {
    (function () {
      function o(e, a) {
        if (e !== a) {
          var t = e === e, n = a === a;
          if (e > a || !t || e === xe && n)return 1;
          if (a > e || !n || a === xe && t)return -1
        }
        return 0
      }

      function i(e, a, t) {
        if (a !== a)return c(e, t);
        for (var n = t - 1, r = e.length; ++n < r;)if (e[n] === a)return n;
        return -1
      }

      function s(e) {
        return "function" == typeof e || !1
      }

      function l(e) {
        return "string" == typeof e ? e : null == e ? "" : e + ""
      }

      function p(e, a) {
        return o(e.criteria, a.criteria) || e.index - a.index
      }

      function c(e, a, t) {
        for (var n = e.length, r = a + (t ? 0 : -1); t ? r-- : ++r < n;) {
          var o = e[r];
          if (o !== o)return r
        }
        return -1
      }

      function d(e) {
        return !!e && "object" == typeof e
      }

      function u(e, a) {
        for (var t, n = -1, r = e.length, o = -1, i = []; ++n < r;) {
          var s = e[n], l = a ? a(s, n, e) : s;
          n && t === l || (t = l, i[++o] = s)
        }
        return i
      }

      function f(e) {
        if (d(e) && !ut(e) && !(e instanceof g)) {
          if (e instanceof h)return e;
          if (Pa.call(e, "__chain__") && Pa.call(e, "__wrapped__"))return fe(e)
        }
        return new h(e)
      }

      function m() {
      }

      function h(e, a, t) {
        this.__wrapped__ = e, this.__actions__ = t || [], this.__chain__ = !!a
      }

      function g(e) {
        this.__wrapped__ = e, this.__actions__ = null, this.__dir__ = 1, this.__dropCount__ = 0, this.__filtered__ = !1, this.__iteratees__ = null, this.__takeCount__ = Va, this.__views__ = null
      }

      function v(e) {
        var a = e ? e.length : 0;
        for (this.data = {hash: Oa(null), set: new Wa}; a--;)this.push(e[a])
      }

      function C(e, a) {
        var t = e.data, n = "string" == typeof a || Se(a) ? t.set.has(a) : t.hash[a];
        return n ? 0 : -1
      }

      function Y(e) {
        var a = this.data;
        "string" == typeof e || Se(e) ? a.set.add(e) : a.hash[e] = !0
      }

      function S(e, a) {
        var t = -1, n = e.length;
        for (a || (a = Array(n)); ++t < n;)a[t] = e[t];
        return a
      }

      function T(e, a) {
        for (var t = -1, n = e.length; ++t < n && a(e[t], t, e) !== !1;);
        return e
      }

      function Z(e, a, t) {
        t || (t = {});
        for (var n = -1, r = a.length; ++n < r;) {
          var o = a[n];
          t[o] = e[o]
        }
        return t
      }

      function w(e, a, t) {
        var n = typeof e;
        return "function" == n ? a === xe ? e : A(e, a, t) : null == e ? Pe : "object" == n ? x(e) : a === xe ? He(e) : B(e, a)
      }

      function L(e, a, t, n, r, o, i) {
        var s;
        if (t && (s = r ? t(e, n, r) : t(e)), s !== xe)return s;
        if (!Se(e))return e;
        var l = ut(e);
        if (l) {
          if (s = ee(e), !a)return S(e, s)
        } else {
          var p = Ma.call(e), c = p == Ee;
          if (p != Ae && p != ke && (!c || r))return ha[p] ? te(e, p, a) : r ? e : {};
          if (wa(e))return r ? e : {};
          if (s = ae(c ? {} : e), !a)return ot(s, e)
        }
        o || (o = []), i || (i = []);
        for (var d = o.length; d--;)if (o[d] == e)return i[d];
        return o.push(e), i.push(s), (l ? T : y)(e, function (n, r) {
          s[r] = L(n, a, t, r, e, o, i)
        }), s
      }

      function b(e, a) {
        return lt(e, a, be)
      }

      function y(e, a) {
        return lt(e, a, ht)
      }

      function X(e, a) {
        for (var t = -1, n = a.length, r = -1, o = []; ++t < n;) {
          var i = a[t];
          ft(e[i]) && (o[++r] = i)
        }
        return o
      }

      function J(e, a, t) {
        if (null != e) {
          e = de(e), t !== xe && t in e && (a = [t]);
          for (var n = -1, r = a.length; null != e && ++n < r;)e = de(e)[a[n]];
          return n && n == r ? e : xe
        }
      }

      function P(e, a, t, n, r, o) {
        if (e === a)return !0;
        var i = typeof e, s = typeof a;
        return "function" != i && "object" != i && "function" != s && "object" != s || null == e || null == a ? e !== e && a !== a : M(e, a, P, t, n, r, o)
      }

      function M(e, a, t, n, r, o, i) {
        var s = ut(e), l = ut(a), p = Ge, c = Ge;
        s || (p = Ma.call(e), p == ke ? p = Ae : p != Ae && (s = we(e))), l || (c = Ma.call(a), c == ke ? c = Ae : c != Ae && (l = we(a)));
        var d = p == Ae && !wa(e), u = c == Ae && !wa(a), f = p == c;
        if (f && !s && !d)return V(e, a, p);
        if (!r) {
          var m = d && Pa.call(e, "__wrapped__"), h = u && Pa.call(a, "__wrapped__");
          if (m || h)return t(m ? e.value() : e, h ? a.value() : a, n, r, o, i)
        }
        if (!f)return !1;
        o || (o = []), i || (i = []);
        for (var g = o.length; g--;)if (o[g] == e)return i[g] == a;
        o.push(e), i.push(a);
        var v = (s ? q : j)(e, a, t, n, r, o, i);
        return o.pop(), i.pop(), v
      }

      function D(e, a, t, n, r) {
        for (var o = -1, i = a.length, s = !r; ++o < i;)if (s && n[o] ? t[o] !== e[a[o]] : !(a[o]in e))return !1;
        for (o = -1; ++o < i;) {
          var l = a[o], p = e[l], c = t[o];
          if (s && n[o])var d = p !== xe || l in e; else d = r ? r(p, c, l) : xe, d === xe && (d = P(c, p, r, !0));
          if (!d)return !1
        }
        return !0
      }

      function H(e, a) {
        var t = -1, n = ne(e) ? Array(e.length) : [];
        return st(e, function (e, r, o) {
          n[++t] = a(e, r, o)
        }), n
      }

      function x(e) {
        var a = ht(e), t = a.length;
        if (!t)return Je(!0);
        if (1 == t) {
          var n = a[0], r = e[n];
          if (le(r))return function (e) {
            return null == e ? !1 : (e = de(e), e[n] === r && (r !== xe || n in e))
          }
        }
        for (var o = Array(t), i = Array(t); t--;)r = e[a[t]], o[t] = r, i[t] = le(r);
        return function (e) {
          return null != e && D(de(e), a, o, i)
        }
      }

      function B(e, a) {
        var t = ut(e), n = ie(e) && le(a), r = e + "";
        return e = ue(e), function (o) {
          if (null == o)return !1;
          var i = r;
          if (o = de(o), !(!t && n || i in o)) {
            if (o = 1 == e.length ? o : J(o, F(e, 0, -1)), null == o)return !1;
            i = he(e), o = de(o)
          }
          return o[i] === a ? a !== xe || i in o : P(a, o[i], null, !0)
        }
      }

      function Q(e, a, t, n, r) {
        if (!Se(e))return e;
        var o = ne(a) && (ut(a) || we(a));
        if (!o) {
          var i = ht(a);
          Ga.apply(i, dt(a))
        }
        return T(i || a, function (s, l) {
          if (i && (l = s, s = a[l]), d(s))n || (n = []), r || (r = []), k(e, a, l, Q, t, n, r); else {
            var p = e[l], c = t ? t(p, s, l, e, a) : xe, u = c === xe;
            u && (c = s), !o && c === xe || !u && (c === c ? c === p : p !== p) || (e[l] = c)
          }
        }), e
      }

      function k(e, a, t, n, r, o, i) {
        for (var s = o.length, l = a[t]; s--;)if (o[s] == l)return void(e[t] = i[s]);
        var p = e[t], c = r ? r(p, l, t, e, a) : xe, d = c === xe;
        d && (c = l, ne(l) && (ut(l) || we(l)) ? c = ut(p) ? p : ne(p) ? S(p) : [] : mt(l) || Ye(l) ? c = Ye(p) ? Le(p) : mt(p) ? p : {} : d = !1), o.push(l), i.push(c), d ? e[t] = n(c, l, r, o, i) : (c === c ? c !== p : p === p) && (e[t] = c)
      }

      function G(e) {
        return function (a) {
          return null == a ? xe : de(a)[e]
        }
      }

      function N(e) {
        var a = e + "";
        return e = ue(e), function (t) {
          return J(t, e, a)
        }
      }

      function F(e, a, t) {
        var n = -1, r = e.length;
        a = null == a ? 0 : +a || 0, 0 > a && (a = -a > r ? 0 : r + a), t = t === xe || t > r ? r : +t || 0, 0 > t && (t += r), r = a > t ? 0 : t - a >>> 0, a >>>= 0;
        for (var o = Array(r); ++n < r;)o[n] = e[n + a];
        return o
      }

      function W(e, a) {
        var t = e.length;
        for (e.sort(a); t--;)e[t] = e[t].value;
        return e
      }

      function E(e, a) {
        var t = -1, n = $(), r = e.length, o = n == i, s = o && r >= 200, l = s ? pt() : null, p = [];
        l ? (n = C, o = !1) : (s = !1, l = a ? [] : p);
        e:for (; ++t < r;) {
          var c = e[t], d = a ? a(c, t, e) : c;
          if (o && c === c) {
            for (var u = l.length; u--;)if (l[u] === d)continue e;
            a && l.push(d), p.push(c)
          } else n(l, d, 0) < 0 && ((a || s) && l.push(d), p.push(c))
        }
        return p
      }

      function K(e, a, t) {
        var n = 0, r = e ? e.length : n;
        if ("number" == typeof a && a === a && $a >= r) {
          for (; r > n;) {
            var o = n + r >>> 1, i = e[o];
            (t ? a >= i : a > i) ? n = o + 1 : r = o
          }
          return r
        }
        return R(e, a, Pe, t)
      }

      function R(e, a, t, n) {
        a = t(a);
        for (var r = 0, o = e ? e.length : 0, i = a !== a, s = a === xe; o > r;) {
          var l = Ba((r + o) / 2), p = t(e[l]), c = p === p;
          if (i)var d = c || n; else d = s ? c && (n || p !== xe) : n ? a >= p : a > p;
          d ? r = l + 1 : o = l
        }
        return qa(o, Ua)
      }

      function A(e, a, t) {
        if ("function" != typeof e)return Pe;
        if (a === xe)return e;
        switch (t) {
          case 1:
            return function (t) {
              return e.call(a, t)
            };
          case 3:
            return function (t, n, r) {
              return e.call(a, t, n, r)
            };
          case 4:
            return function (t, n, r, o) {
              return e.call(a, t, n, r, o)
            };
          case 5:
            return function (t, n, r, o, i) {
              return e.call(a, t, n, r, o, i)
            }
        }
        return function () {
          return e.apply(a, arguments)
        }
      }

      function I(e) {
        return xa.call(e, 0)
      }

      function O(e) {
        return Ce(function (a, t) {
          var n = -1, r = null == a ? 0 : t.length, o = r > 2 && t[r - 2], i = r > 2 && t[2], s = r > 1 && t[r - 1];
          for ("function" == typeof o ? (o = A(o, s, 5), r -= 2) : (o = "function" == typeof s ? s : null, r -= o ? 1 : 0), i && oe(t[0], t[1], i) && (o = 3 > r ? null : o, r = 1); ++n < r;) {
            var l = t[n];
            l && e(a, l, o)
          }
          return a
        })
      }

      function z(e, a) {
        return function (t, n) {
          var r = t ? ct(t) : 0;
          if (!se(r))return e(t, n);
          for (var o = a ? r : -1, i = de(t); (a ? o-- : ++o < r) && n(i[o], o, i) !== !1;);
          return t
        }
      }

      function _(e) {
        return function (a, t, n) {
          for (var r = de(a), o = n(a), i = o.length, s = e ? i : -1; e ? s-- : ++s < i;) {
            var l = o[s];
            if (t(r[l], l, r) === !1)break
          }
          return a
        }
      }

      function q(e, a, t, n, r, o, i) {
        var s = -1, l = e.length, p = a.length, c = !0;
        if (l != p && !(r && p > l))return !1;
        for (; c && ++s < l;) {
          var d = e[s], u = a[s];
          if (c = xe, n && (c = r ? n(u, d, s) : n(d, u, s)), c === xe)if (r)for (var f = p; f-- && (u = a[f], !(c = d && d === u || t(d, u, n, r, o, i)));); else c = d && d === u || t(d, u, n, r, o, i)
        }
        return !!c
      }

      function V(e, a, t) {
        switch (t) {
          case Ne:
          case Fe:
            return +e == +a;
          case We:
            return e.name == a.name && e.message == a.message;
          case Re:
            return e != +e ? a != +a : e == +a;
          case Ie:
          case ze:
            return e == a + ""
        }
        return !1
      }

      function j(e, a, t, n, r, o, i) {
        var s = ht(e), l = s.length, p = ht(a), c = p.length;
        if (l != c && !r)return !1;
        for (var d = r, u = -1; ++u < l;) {
          var f = s[u], m = r ? f in a : Pa.call(a, f);
          if (m) {
            var h = e[f], g = a[f];
            m = xe, n && (m = r ? n(g, h, f) : n(h, g, f)), m === xe && (m = h && h === g || t(h, g, n, r, o, i))
          }
          if (!m)return !1;
          d || (d = "constructor" == f)
        }
        if (!d) {
          var v = e.constructor, C = a.constructor;
          if (v != C && "constructor"in e && "constructor"in a && !("function" == typeof v && v instanceof v && "function" == typeof C && C instanceof C))return !1
        }
        return !0
      }

      function U(e, a, t) {
        var n = f.callback || Xe;
        return n = n === Xe ? w : n, t ? n(e, a, t) : n
      }

      function $(e, a, t) {
        var n = f.indexOf || me;
        return n = n === me ? i : n, e ? n(e, a, t) : n
      }

      function ee(e) {
        var a = e.length, t = new e.constructor(a);
        return a && "string" == typeof e[0] && Pa.call(e, "index") && (t.index = e.index, t.input = e.input), t
      }

      function ae(e) {
        var a = e.constructor;
        return "function" == typeof a && a instanceof a || (a = Object), new a
      }

      function te(e, a, t) {
        var n = e.constructor;
        switch (a) {
          case qe:
            return I(e);
          case Ne:
          case Fe:
            return new n(+e);
          case Ve:
          case je:
          case Ue:
          case $e:
          case ea:
          case aa:
          case ta:
          case na:
          case ra:
            n instanceof n && (n = tt[a]);
            var r = e.buffer;
            return new n(t ? I(r) : r, e.byteOffset, e.length);
          case Re:
          case ze:
            return new n(e);
          case Ie:
            var o = new n(e.source, da.exec(e));
            o.lastIndex = e.lastIndex
        }
        return o
      }

      function ne(e) {
        return null != e && se(ct(e))
      }

      function re(e, a) {
        return e = +e, a = null == a ? at : a, e > -1 && e % 1 == 0 && a > e
      }

      function oe(e, a, t) {
        if (!Se(t))return !1;
        var n = typeof a;
        if ("number" == n ? ne(t) && re(a, t.length) : "string" == n && a in t) {
          var r = t[a];
          return e === e ? e === r : r !== r
        }
        return !1
      }

      function ie(e, a) {
        var t = typeof e;
        if ("string" == t && ia.test(e) || "number" == t)return !0;
        if (ut(e))return !1;
        var n = !oa.test(e);
        return n || null != a && e in de(a)
      }

      function se(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && at >= e
      }

      function le(e) {
        return e === e && !Se(e)
      }

      function pe(e) {
        var a, t = f.support;
        if (!d(e) || Ma.call(e) != Ae || wa(e) || !Pa.call(e, "constructor") && (a = e.constructor, "function" == typeof a && !(a instanceof a)) || !t.argsTag && Ye(e))return !1;
        var n;
        return t.ownLast ? (b(e, function (e, a, t) {
          return n = Pa.call(t, a), !1
        }), n !== !1) : (b(e, function (e, a) {
          n = a
        }), n === xe || Pa.call(e, n))
      }

      function ce(e) {
        for (var a = be(e), t = a.length, n = t && e.length, r = f.support, o = n && se(n) && (ut(e) || r.nonEnumStrings && Ze(e) || r.nonEnumArgs && Ye(e)), i = -1, s = []; ++i < t;) {
          var l = a[i];
          (o && re(l, n) || Pa.call(e, l)) && s.push(l)
        }
        return s
      }

      function de(e) {
        if (f.support.unindexedChars && Ze(e)) {
          for (var a = -1, t = e.length, n = Object(e); ++a < t;)n[a] = e.charAt(a);
          return n
        }
        return Se(e) ? e : Object(e)
      }

      function ue(e) {
        if (ut(e))return e;
        var a = [];
        return l(e).replace(sa, function (e, t, n, r) {
          a.push(n ? r.replace(ca, "$1") : t || e)
        }), a
      }

      function fe(e) {
        return e instanceof g ? e.clone() : new h(e.__wrapped__, e.__chain__, S(e.__actions__))
      }

      function me(e, a, t) {
        var n = e ? e.length : 0;
        if (!n)return -1;
        if ("number" == typeof t)t = 0 > t ? _a(n + t, 0) : t; else if (t) {
          var r = K(e, a), o = e[r];
          return (a === a ? a === o : o !== o) ? r : -1
        }
        return i(e, a, t || 0)
      }

      function he(e) {
        var a = e ? e.length : 0;
        return a ? e[a - 1] : xe
      }

      function ge(e, a, t, n) {
        var r = e ? e.length : 0;
        if (!r)return [];
        null != a && "boolean" != typeof a && (n = t, t = oe(e, a, n) ? null : a, a = !1);
        var o = U();
        return (o !== w || null != t) && (t = o(t, n, 3)), a && $() == i ? u(e, t) : E(e, t)
      }

      function ve(e, a, t) {
        if (null == e)return [];
        t && oe(e, a, t) && (a = null);
        var n = -1;
        a = U(a, t, 3);
        var r = H(e, function (e, t, r) {
          return {criteria: a(e, t, r), index: ++n, value: e}
        });
        return W(r, p)
      }

      function Ce(e, a) {
        if ("function" != typeof e)throw new TypeError(Qe);
        return a = _a(a === xe ? e.length - 1 : +a || 0, 0), function () {
          for (var t = arguments, n = -1, r = _a(t.length - a, 0), o = Array(r); ++n < r;)o[n] = t[a + n];
          switch (a) {
            case 0:
              return e.call(this, o);
            case 1:
              return e.call(this, t[0], o);
            case 2:
              return e.call(this, t[0], t[1], o)
          }
          var i = Array(a + 1);
          for (n = -1; ++n < a;)i[n] = t[n];
          return i[a] = o, e.apply(this, i)
        }
      }

      function Ye(e) {
        return d(e) && ne(e) && Ma.call(e) == ke
      }

      function Se(e) {
        var a = typeof e;
        return "function" == a || !!e && "object" == a
      }

      function Te(e) {
        return null == e ? !1 : Ma.call(e) == Ee ? Da.test(Ja.call(e)) : d(e) && (wa(e) ? Da : ua).test(e)
      }

      function Ze(e) {
        return "string" == typeof e || d(e) && Ma.call(e) == ze
      }

      function we(e) {
        return d(e) && se(e.length) && !!ma[Ma.call(e)]
      }

      function Le(e) {
        return Z(e, be(e))
      }

      function be(e) {
        if (null == e)return [];
        Se(e) || (e = Object(e));
        var a = e.length, t = f.support;
        a = a && se(a) && (ut(e) || t.nonEnumStrings && Ze(e) || t.nonEnumArgs && Ye(e)) && a || 0;
        for (var n = e.constructor, r = -1, o = ft(n) && n.prototype || ya, i = o === e, s = Array(a), l = a > 0, p = t.enumErrorProps && (e === ba || e instanceof Error), c = t.enumPrototypes && ft(e); ++r < a;)s[r] = r + "";
        for (var d in e)c && "prototype" == d || p && ("message" == d || "name" == d) || l && re(d, a) || "constructor" == d && (i || !Pa.call(e, d)) || s.push(d);
        if (t.nonEnumShadows && e !== ya) {
          var u = e === Xa ? ze : e === ba ? We : Ma.call(e), m = nt[u] || nt[Ae];
          for (u == Ae && (o = ya), a = fa.length; a--;) {
            d = fa[a];
            var h = m[d];
            i && h || (h ? !Pa.call(e, d) : e[d] === o[d]) || s.push(d)
          }
        }
        return s
      }

      function ye(e) {
        return e = l(e), e && pa.test(e) ? e.replace(la, "\\$&") : e
      }

      function Xe(e, a, t) {
        return t && oe(e, a, t) && (a = null), d(e) ? Me(e) : w(e, a)
      }

      function Je(e) {
        return function () {
          return e
        }
      }

      function Pe(e) {
        return e
      }

      function Me(e) {
        return x(L(e, !0))
      }

      function De(e, a, t) {
        if (null == t) {
          var n = Se(a), r = n && ht(a), o = r && r.length && X(a, r);
          (o ? o.length : n) || (o = !1, t = a, a = e, e = this)
        }
        o || (o = X(a, ht(a)));
        var i = !0, s = -1, l = ft(e), p = o.length;
        t === !1 ? i = !1 : Se(t) && "chain"in t && (i = t.chain);
        for (; ++s < p;) {
          var c = o[s], d = a[c];
          e[c] = d, l && (e.prototype[c] = function (a) {
            return function () {
              var t = this.__chain__;
              if (i || t) {
                var n = e(this.__wrapped__), r = n.__actions__ = S(this.__actions__);
                return r.push({func: a, args: arguments, thisArg: e}), n.__chain__ = t, n
              }
              var o = [this.value()];
              return Ga.apply(o, arguments), a.apply(e, o)
            }
          }(d))
        }
        return e
      }

      function He(e) {
        return ie(e) ? G(e) : N(e)
      }

      var xe, Be = "3.8.0", Qe = "Expected a function", ke = "[object Arguments]", Ge = "[object Array]", Ne = "[object Boolean]", Fe = "[object Date]", We = "[object Error]", Ee = "[object Function]", Ke = "[object Map]", Re = "[object Number]", Ae = "[object Object]", Ie = "[object RegExp]", Oe = "[object Set]", ze = "[object String]", _e = "[object WeakMap]", qe = "[object ArrayBuffer]", Ve = "[object Float32Array]", je = "[object Float64Array]", Ue = "[object Int8Array]", $e = "[object Int16Array]", ea = "[object Int32Array]", aa = "[object Uint8Array]", ta = "[object Uint8ClampedArray]", na = "[object Uint16Array]", ra = "[object Uint32Array]", oa = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/, ia = /^\w*$/, sa = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g, la = /[.*+?^${}()|[\]\/\\]/g, pa = RegExp(la.source), ca = /\\(\\)?/g, da = /\w*$/, ua = /^\[object .+?Constructor\]$/, fa = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], ma = {};
      ma[Ve] = ma[je] = ma[Ue] = ma[$e] = ma[ea] = ma[aa] = ma[ta] = ma[na] = ma[ra] = !0, ma[ke] = ma[Ge] = ma[qe] = ma[Ne] = ma[Fe] = ma[We] = ma[Ee] = ma[Ke] = ma[Re] = ma[Ae] = ma[Ie] = ma[Oe] = ma[ze] = ma[_e] = !1;
      var ha = {};
      ha[ke] = ha[Ge] = ha[qe] = ha[Ne] = ha[Fe] = ha[Ve] = ha[je] = ha[Ue] = ha[$e] = ha[ea] = ha[Re] = ha[Ae] = ha[Ie] = ha[ze] = ha[aa] = ha[ta] = ha[na] = ha[ra] = !0, ha[We] = ha[Ee] = ha[Ke] = ha[Oe] = ha[_e] = !1;
      var ga = {
        "function": !0,
        object: !0
      }, va = ga[typeof a] && a && !a.nodeType && a, Ca = ga[typeof e] && e && !e.nodeType && e, Ya = va && Ca && "object" == typeof r && r && r.Object && r, Sa = ga[typeof self] && self && self.Object && self, Ta = ga[typeof window] && window && window.Object && window, Za = (Ca && Ca.exports === va && va, Ya || Ta !== (this && this.window) && Ta || Sa || this), wa = function () {
        try {
          Object({toString: 0} + "")
        } catch (e) {
          return function () {
            return !1
          }
        }
        return function (e) {
          return "function" != typeof e.toString && "string" == typeof(e + "")
        }
      }(), La = Array.prototype, ba = Error.prototype, ya = Object.prototype, Xa = String.prototype, Ja = Function.prototype.toString, Pa = ya.hasOwnProperty, Ma = ya.toString, Da = RegExp("^" + ye(Ma).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Ha = Te(Ha = Za.ArrayBuffer) && Ha, xa = Te(xa = Ha && new Ha(0).slice) && xa, Ba = Math.floor, Qa = Te(Qa = Object.getOwnPropertySymbols) && Qa, ka = Te(ka = Object.getPrototypeOf) && ka, Ga = La.push, Na = Te(Na = Object.preventExtensions) && Na, Fa = ya.propertyIsEnumerable, Wa = Te(Wa = Za.Set) && Wa, Ea = La.splice, Ka = Te(Ka = Za.Uint8Array) && Ka, Ra = function () {
        try {
          var e = Te(e = Za.Float64Array) && e, a = new e(new Ha(10), 0, 1) && e
        } catch (t) {
        }
        return a
      }(), Aa = function () {
        var e = Na && Te(e = Object.assign) && e;
        try {
          if (e) {
            var a = Na({1: 0});
            a[0] = 1
          }
        } catch (t) {
          try {
            e(a, "xo")
          } catch (t) {
          }
          return !a[1] && e
        }
        return !1
      }(), Ia = Te(Ia = Array.isArray) && Ia, Oa = Te(Oa = Object.create) && Oa, za = Te(za = Object.keys) && za, _a = Math.max, qa = Math.min, Va = Number.POSITIVE_INFINITY, ja = Math.pow(2, 32) - 1, Ua = ja - 1, $a = ja >>> 1, et = Ra ? Ra.BYTES_PER_ELEMENT : 0, at = Math.pow(2, 53) - 1, tt = {};
      tt[Ve] = Za.Float32Array, tt[je] = Za.Float64Array, tt[Ue] = Za.Int8Array, tt[$e] = Za.Int16Array, tt[ea] = Za.Int32Array, tt[aa] = Za.Uint8Array, tt[ta] = Za.Uint8ClampedArray, tt[na] = Za.Uint16Array, tt[ra] = Za.Uint32Array;
      var nt = {};
      nt[Ge] = nt[Fe] = nt[Re] = {
        constructor: !0,
        toLocaleString: !0,
        toString: !0,
        valueOf: !0
      }, nt[Ne] = nt[ze] = {constructor: !0, toString: !0, valueOf: !0}, nt[We] = nt[Ee] = nt[Ie] = {
        constructor: !0,
        toString: !0
      }, nt[Ae] = {constructor: !0}, T(fa, function (e) {
        for (var a in nt)if (Pa.call(nt, a)) {
          var t = nt[a];
          t[e] = Pa.call(t, e)
        }
      });
      var rt = f.support = {};
      !function (e) {
        var a = function () {
          this.x = e
        }, t = arguments, n = {0: e, length: e}, r = [];
        a.prototype = {valueOf: e, y: e};
        for (var o in new a)r.push(o);
        rt.argsTag = Ma.call(t) == ke, rt.enumErrorProps = Fa.call(ba, "message") || Fa.call(ba, "name"), rt.enumPrototypes = Fa.call(a, "prototype"), rt.funcDecomp = /\bthis\b/.test(function () {
          return this
        }), rt.funcNames = "string" == typeof Function.name, rt.nonEnumStrings = !Fa.call("x", 0), rt.nonEnumShadows = !/valueOf/.test(r), rt.ownLast = "x" != r[0], rt.spliceObjects = (Ea.call(n, 0, 1), !n[0]), rt.unindexedChars = "x"[0] + Object("x")[0] != "xx";
        try {
          rt.nonEnumArgs = !Fa.call(t, 1)
        } catch (i) {
          rt.nonEnumArgs = !0
        }
      }(1, 0);
      var ot = Aa || function (e, a) {
          return null == a ? e : Z(a, dt(a), Z(a, ht(a), e))
        }, it = function () {
        function e() {
        }

        return function (a) {
          if (Se(a)) {
            e.prototype = a;
            var t = new e;
            e.prototype = null
          }
          return t || Za.Object()
        }
      }(), st = z(y), lt = _();
      xa || (I = Ha && Ka ? function (e) {
        var a = e.byteLength, t = Ra ? Ba(a / et) : 0, n = t * et, r = new Ha(a);
        if (t) {
          var o = new Ra(r, 0, t);
          o.set(new Ra(e, 0, t))
        }
        return a != n && (o = new Ka(r, n), o.set(new Ka(e, n))), r
      } : Je(null));
      var pt = Oa && Wa ? function (e) {
        return new v(e)
      } : Je(null), ct = G("length"), dt = Qa ? function (e) {
        return Qa(de(e))
      } : Je([]);
      rt.argsTag || (Ye = function (e) {
        return d(e) && ne(e) && Pa.call(e, "callee") && !Fa.call(e, "callee")
      });
      var ut = Ia || function (e) {
          return d(e) && se(e.length) && Ma.call(e) == Ge
        }, ft = s(/x/) || Ka && !s(Ka) ? function (e) {
        return Ma.call(e) == Ee
      } : s, mt = ka ? function (e) {
        if (!e || Ma.call(e) != Ae || !f.support.argsTag && Ye(e))return !1;
        var a = e.valueOf, t = Te(a) && (t = ka(a)) && ka(t);
        return t ? e == t || ka(e) == t : pe(e)
      } : pe, ht = za ? function (e) {
        var a = null != e && e.constructor;
        return "function" == typeof a && a.prototype === e || ("function" == typeof e ? f.support.enumPrototypes : ne(e)) ? ce(e) : Se(e) ? za(e) : []
      } : ce, gt = O(Q);
      f.prototype = m.prototype, h.prototype = it(m.prototype), h.prototype.constructor = h, g.prototype = it(m.prototype), g.prototype.constructor = g, v.prototype.push = Y, f.callback = Xe, f.constant = Je, f.keys = ht, f.keysIn = be, f.matches = Me, f.merge = gt, f.mixin = De, f.property = He, f.restParam = Ce, f.sortBy = ve, f.toPlainObject = Le, f.uniq = ge, f.iteratee = Xe, f.unique = ge, f.escapeRegExp = ye, f.identity = Pe, f.indexOf = me, f.isArguments = Ye, f.isArray = ut, f.isFunction = ft, f.isNative = Te, f.isObject = Se, f.isPlainObject = mt, f.isString = Ze, f.isTypedArray = we, f.last = he, f.VERSION = Be, Za._ = f, n = function () {
        return f
      }.call(a, t, a, e), !(n !== xe && (e.exports = n))
    }).call(this)
  }).call(a, t(4)(e), function () {
    return this
  }())
}, function (e, a, t) {
  e.exports = function (e) {
    return e.webpackPolyfill || (e.deprecate = function () {
    }, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
  }
}, function (e, a, t) {
  var n = "YDYQSXMWZSSXJBYMGCCZQPSSQBYCDSCDQLDYLYBSSJGYZZJJFKCCLZDHWDWZJLJPFYYNWJJTMYHZWZHFLZPPQHGSCYYYNJQYXXGJHHSDSJNKKTMOMLCRXYPSNQSECCQZGGLLYJLMYZZSECYKYYHQWJSSGGYXYZYJWWKDJHYCHMYXJTLXJYQBYXZLDWRDJRWYSRLDZJPCBZJJBRCFTLECZSTZFXXZHTRQHYBDLYCZSSYMMRFMYQZPWWJJYFCRWFDFZQPYDDWYXKYJAWJFFXYPSFTZYHHYZYSWCJYXSCLCXXWZZXNBGNNXBXLZSZSBSGPYSYZDHMDZBQBZCWDZZYYTZHBTSYYBZGNTNXQYWQSKBPHHLXGYBFMJEBJHHGQTJCYSXSTKZHLYCKGLYSMZXYALMELDCCXGZYRJXSDLTYZCQKCNNJWHJTZZCQLJSTSTBNXBTYXCEQXGKWJYFLZQLYHYXSPSFXLMPBYSXXXYDJCZYLLLSJXFHJXPJBTFFYABYXBHZZBJYZLWLCZGGBTSSMDTJZXPTHYQTGLJSCQFZKJZJQNLZWLSLHDZBWJNCJZYZSQQYCQYRZCJJWYBRTWPYFTWEXCSKDZCTBZHYZZYYJXZCFFZZMJYXXSDZZOTTBZLQWFCKSZSXFYRLNYJMBDTHJXSQQCCSBXYYTSYFBXDZTGBCNSLCYZZPSAZYZZSCJCSHZQYDXLBPJLLMQXTYDZXSQJTZPXLCGLQTZWJBHCTSYJSFXYEJJTLBGXSXJMYJQQPFZASYJNTYDJXKJCDJSZCBARTDCLYJQMWNQNCLLLKBYBZZSYHQQLTWLCCXTXLLZNTYLNEWYZYXCZXXGRKRMTCNDNJTSYYSSDQDGHSDBJGHRWRQLYBGLXHLGTGXBQJDZPYJSJYJCTMRNYMGRZJCZGJMZMGXMPRYXKJNYMSGMZJYMKMFXMLDTGFBHCJHKYLPFMDXLQJJSMTQGZSJLQDLDGJYCALCMZCSDJLLNXDJFFFFJCZFMZFFPFKHKGDPSXKTACJDHHZDDCRRCFQYJKQCCWJDXHWJLYLLZGCFCQDSMLZPBJJPLSBCJGGDCKKDEZSQCCKJGCGKDJTJDLZYCXKLQSCGJCLTFPCQCZGWPJDQYZJJBYJHSJDZWGFSJGZKQCCZLLPSPKJGQJHZZLJPLGJGJJTHJJYJZCZMLZLYQBGJWMLJKXZDZNJQSYZMLJLLJKYWXMKJLHSKJGBMCLYYMKXJQLBMLLKMDXXKWYXYSLMLPSJQQJQXYXFJTJDXMXXLLCXQBSYJBGWYMBGGBCYXPJYGPEPFGDJGBHBNSQJYZJKJKHXQFGQZKFHYGKHDKLLSDJQXPQYKYBNQSXQNSZSWHBSXWHXWBZZXDMNSJBSBKBBZKLYLXGWXDRWYQZMYWSJQLCJXXJXKJEQXSCYETLZHLYYYSDZPAQYZCMTLSHTZCFYZYXYLJSDCJQAGYSLCQLYYYSHMRQQKLDXZSCSSSYDYCJYSFSJBFRSSZQSBXXPXJYSDRCKGJLGDKZJZBDKTCSYQPYHSTCLDJDHMXMCGXYZHJDDTMHLTXZXYLYMOHYJCLTYFBQQXPFBDFHHTKSQHZYYWCNXXCRWHOWGYJLEGWDQCWGFJYCSNTMYTOLBYGWQWESJPWNMLRYDZSZTXYQPZGCWXHNGPYXSHMYQJXZTDPPBFYHZHTJYFDZWKGKZBLDNTSXHQEEGZZYLZMMZYJZGXZXKHKSTXNXXWYLYAPSTHXDWHZYMPXAGKYDXBHNHXKDPJNMYHYLPMGOCSLNZHKXXLPZZLBMLSFBHHGYGYYGGBHSCYAQTYWLXTZQCEZYDQDQMMHTKLLSZHLSJZWFYHQSWSCWLQAZYNYTLSXTHAZNKZZSZZLAXXZWWCTGQQTDDYZTCCHYQZFLXPSLZYGPZSZNGLNDQTBDLXGTCTAJDKYWNSYZLJHHZZCWNYYZYWMHYCHHYXHJKZWSXHZYXLYSKQYSPSLYZWMYPPKBYGLKZHTYXAXQSYSHXASMCHKDSCRSWJPWXSGZJLWWSCHSJHSQNHCSEGNDAQTBAALZZMSSTDQJCJKTSCJAXPLGGXHHGXXZCXPDMMHLDGTYBYSJMXHMRCPXXJZCKZXSHMLQXXTTHXWZFKHCCZDYTCJYXQHLXDHYPJQXYLSYYDZOZJNYXQEZYSQYAYXWYPDGXDDXSPPYZNDLTWRHXYDXZZJHTCXMCZLHPYYYYMHZLLHNXMYLLLMDCPPXHMXDKYCYRDLTXJCHHZZXZLCCLYLNZSHZJZZLNNRLWHYQSNJHXYNTTTKYJPYCHHYEGKCTTWLGQRLGGTGTYGYHPYHYLQYQGCWYQKPYYYTTTTLHYHLLTYTTSPLKYZXGZWGPYDSSZZDQXSKCQNMJJZZBXYQMJRTFFBTKHZKBXLJJKDXJTLBWFZPPTKQTZTGPDGNTPJYFALQMKGXBDCLZFHZCLLLLADPMXDJHLCCLGYHDZFGYDDGCYYFGYDXKSSEBDHYKDKDKHNAXXYBPBYYHXZQGAFFQYJXDMLJCSQZLLPCHBSXGJYNDYBYQSPZWJLZKSDDTACTBXZDYZYPJZQSJNKKTKNJDJGYYPGTLFYQKASDNTCYHBLWDZHBBYDWJRYGKZYHEYYFJMSDTYFZJJHGCXPLXHLDWXXJKYTCYKSSSMTWCTTQZLPBSZDZWZXGZAGYKTYWXLHLSPBCLLOQMMZSSLCMBJCSZZKYDCZJGQQDSMCYTZQQLWZQZXSSFPTTFQMDDZDSHDTDWFHTDYZJYQJQKYPBDJYYXTLJHDRQXXXHAYDHRJLKLYTWHLLRLLRCXYLBWSRSZZSYMKZZHHKYHXKSMDSYDYCJPBZBSQLFCXXXNXKXWYWSDZYQOGGQMMYHCDZTTFJYYBGSTTTYBYKJDHKYXBELHTYPJQNFXFDYKZHQKZBYJTZBXHFDXKDASWTAWAJLDYJSFHBLDNNTNQJTJNCHXFJSRFWHZFMDRYJYJWZPDJKZYJYMPCYZNYNXFBYTFYFWYGDBNZZZDNYTXZEMMQBSQEHXFZMBMFLZZSRXYMJGSXWZJSPRYDJSJGXHJJGLJJYNZZJXHGXKYMLPYYYCXYTWQZSWHWLYRJLPXSLSXMFSWWKLCTNXNYNPSJSZHDZEPTXMYYWXYYSYWLXJQZQXZDCLEEELMCPJPCLWBXSQHFWWTFFJTNQJHJQDXHWLBYZNFJLALKYYJLDXHHYCSTYYWNRJYXYWTRMDRQHWQCMFJDYZMHMYYXJWMYZQZXTLMRSPWWCHAQBXYGZYPXYYRRCLMPYMGKSJSZYSRMYJSNXTPLNBAPPYPYLXYYZKYNLDZYJZCZNNLMZHHARQMPGWQTZMXXMLLHGDZXYHXKYXYCJMFFYYHJFSBSSQLXXNDYCANNMTCJCYPRRNYTYQNYYMBMSXNDLYLYSLJRLXYSXQMLLYZLZJJJKYZZCSFBZXXMSTBJGNXYZHLXNMCWSCYZYFZLXBRNNNYLBNRTGZQYSATSWRYHYJZMZDHZGZDWYBSSCSKXSYHYTXXGCQGXZZSHYXJSCRHMKKBXCZJYJYMKQHZJFNBHMQHYSNJNZYBKNQMCLGQHWLZNZSWXKHLJHYYBQLBFCDSXDLDSPFZPSKJYZWZXZDDXJSMMEGJSCSSMGCLXXKYYYLNYPWWWGYDKZJGGGZGGSYCKNJWNJPCXBJJTQTJWDSSPJXZXNZXUMELPXFSXTLLXCLJXJJLJZXCTPSWXLYDHLYQRWHSYCSQYYBYAYWJJJQFWQCQQCJQGXALDBZZYJGKGXPLTZYFXJLTPADKYQHPMATLCPDCKBMTXYBHKLENXDLEEGQDYMSAWHZMLJTWYGXLYQZLJEEYYBQQFFNLYXRDSCTGJGXYYNKLLYQKCCTLHJLQMKKZGCYYGLLLJDZGYDHZWXPYSJBZKDZGYZZHYWYFQYTYZSZYEZZLYMHJJHTSMQWYZLKYYWZCSRKQYTLTDXWCTYJKLWSQZWBDCQYNCJSRSZJLKCDCDTLZZZACQQZZDDXYPLXZBQJYLZLLLQDDZQJYJYJZYXNYYYNYJXKXDAZWYRDLJYYYRJLXLLDYXJCYWYWNQCCLDDNYYYNYCKCZHXXCCLGZQJGKWPPCQQJYSBZZXYJSQPXJPZBSBDSFNSFPZXHDWZTDWPPTFLZZBZDMYYPQJRSDZSQZSQXBDGCPZSWDWCSQZGMDHZXMWWFYBPDGPHTMJTHZSMMBGZMBZJCFZWFZBBZMQCFMBDMCJXLGPNJBBXGYHYYJGPTZGZMQBQTCGYXJXLWZKYDPDYMGCFTPFXYZTZXDZXTGKMTYBBCLBJASKYTSSQYYMSZXFJEWLXLLSZBQJJJAKLYLXLYCCTSXMCWFKKKBSXLLLLJYXTYLTJYYTDPJHNHNNKBYQNFQYYZBYYESSESSGDYHFHWTCJBSDZZTFDMXHCNJZYMQWSRYJDZJQPDQBBSTJGGFBKJBXTGQHNGWJXJGDLLTHZHHYYYYYYSXWTYYYCCBDBPYPZYCCZYJPZYWCBDLFWZCWJDXXHYHLHWZZXJTCZLCDPXUJCZZZLYXJJTXPHFXWPYWXZPTDZZBDZCYHJHMLXBQXSBYLRDTGJRRCTTTHYTCZWMXFYTWWZCWJWXJYWCSKYBZSCCTZQNHXNWXXKHKFHTSWOCCJYBCMPZZYKBNNZPBZHHZDLSYDDYTYFJPXYNGFXBYQXCBHXCPSXTYZDMKYSNXSXLHKMZXLYHDHKWHXXSSKQYHHCJYXGLHZXCSNHEKDTGZXQYPKDHEXTYKCNYMYYYPKQYYYKXZLTHJQTBYQHXBMYHSQCKWWYLLHCYYLNNEQXQWMCFBDCCMLJGGXDQKTLXKGNQCDGZJWYJJLYHHQTTTNWCHMXCXWHWSZJYDJCCDBQCDGDNYXZTHCQRXCBHZTQCBXWGQWYYBXHMBYMYQTYEXMQKYAQYRGYZSLFYKKQHYSSQYSHJGJCNXKZYCXSBXYXHYYLSTYCXQTHYSMGSCPMMGCCCCCMTZTASMGQZJHKLOSQYLSWTMXSYQKDZLJQQYPLSYCZTCQQPBBQJZCLPKHQZYYXXDTDDTSJCXFFLLCHQXMJLWCJCXTSPYCXNDTJSHJWXDQQJSKXYAMYLSJHMLALYKXCYYDMNMDQMXMCZNNCYBZKKYFLMCHCMLHXRCJJHSYLNMTJZGZGYWJXSRXCWJGJQHQZDQJDCJJZKJKGDZQGJJYJYLXZXXCDQHHHEYTMHLFSBDJSYYSHFYSTCZQLPBDRFRZTZYKYWHSZYQKWDQZRKMSYNBCRXQBJYFAZPZZEDZCJYWBCJWHYJBQSZYWRYSZPTDKZPFPBNZTKLQYHBBZPNPPTYZZYBQNYDCPJMMCYCQMCYFZZDCMNLFPBPLNGQJTBTTNJZPZBBZNJKLJQYLNBZQHKSJZNGGQSZZKYXSHPZSNBCGZKDDZQANZHJKDRTLZLSWJLJZLYWTJNDJZJHXYAYNCBGTZCSSQMNJPJYTYSWXZFKWJQTKHTZPLBHSNJZSYZBWZZZZLSYLSBJHDWWQPSLMMFBJDWAQYZTCJTBNNWZXQXCDSLQGDSDPDZHJTQQPSWLYYJZLGYXYZLCTCBJTKTYCZJTQKBSJLGMGZDMCSGPYNJZYQYYKNXRPWSZXMTNCSZZYXYBYHYZAXYWQCJTLLCKJJTJHGDXDXYQYZZBYWDLWQCGLZGJGQRQZCZSSBCRPCSKYDZNXJSQGXSSJMYDNSTZTPBDLTKZWXQWQTZEXNQCZGWEZKSSBYBRTSSSLCCGBPSZQSZLCCGLLLZXHZQTHCZMQGYZQZNMCOCSZJMMZSQPJYGQLJYJPPLDXRGZYXCCSXHSHGTZNLZWZKJCXTCFCJXLBMQBCZZWPQDNHXLJCTHYZLGYLNLSZZPCXDSCQQHJQKSXZPBAJYEMSMJTZDXLCJYRYYNWJBNGZZTMJXLTBSLYRZPYLSSCNXPHLLHYLLQQZQLXYMRSYCXZLMMCZLTZSDWTJJLLNZGGQXPFSKYGYGHBFZPDKMWGHCXMSGDXJMCJZDYCABXJDLNBCDQYGSKYDQTXDJJYXMSZQAZDZFSLQXYJSJZYLBTXXWXQQZBJZUFBBLYLWDSLJHXJYZJWTDJCZFQZQZZDZSXZZQLZCDZFJHYSPYMPQZMLPPLFFXJJNZZYLSJEYQZFPFZKSYWJJJHRDJZZXTXXGLGHYDXCSKYSWMMZCWYBAZBJKSHFHJCXMHFQHYXXYZFTSJYZFXYXPZLCHMZMBXHZZSXYFYMNCWDABAZLXKTCSHHXKXJJZJSTHYGXSXYYHHHJWXKZXSSBZZWHHHCWTZZZPJXSNXQQJGZYZYWLLCWXZFXXYXYHXMKYYSWSQMNLNAYCYSPMJKHWCQHYLAJJMZXHMMCNZHBHXCLXTJPLTXYJHDYYLTTXFSZHYXXSJBJYAYRSMXYPLCKDUYHLXRLNLLSTYZYYQYGYHHSCCSMZCTZQXKYQFPYYRPFFLKQUNTSZLLZMWWTCQQYZWTLLMLMPWMBZSSTZRBPDDTLQJJBXZCSRZQQYGWCSXFWZLXCCRSZDZMCYGGDZQSGTJSWLJMYMMZYHFBJDGYXCCPSHXNZCSBSJYJGJMPPWAFFYFNXHYZXZYLREMZGZCYZSSZDLLJCSQFNXZKPTXZGXJJGFMYYYSNBTYLBNLHPFZDCYFBMGQRRSSSZXYSGTZRNYDZZCDGPJAFJFZKNZBLCZSZPSGCYCJSZLMLRSZBZZLDLSLLYSXSQZQLYXZLSKKBRXBRBZCYCXZZZEEYFGKLZLYYHGZSGZLFJHGTGWKRAAJYZKZQTSSHJJXDCYZUYJLZYRZDQQHGJZXSSZBYKJPBFRTJXLLFQWJHYLQTYMBLPZDXTZYGBDHZZRBGXHWNJTJXLKSCFSMWLSDQYSJTXKZSCFWJLBXFTZLLJZLLQBLSQMQQCGCZFPBPHZCZJLPYYGGDTGWDCFCZQYYYQYSSCLXZSKLZZZGFFCQNWGLHQYZJJCZLQZZYJPJZZBPDCCMHJGXDQDGDLZQMFGPSYTSDYFWWDJZJYSXYYCZCYHZWPBYKXRYLYBHKJKSFXTZJMMCKHLLTNYYMSYXYZPYJQYCSYCWMTJJKQYRHLLQXPSGTLYYCLJSCPXJYZFNMLRGJJTYZBXYZMSJYJHHFZQMSYXRSZCWTLRTQZSSTKXGQKGSPTGCZNJSJCQCXHMXGGZTQYDJKZDLBZSXJLHYQGGGTHQSZPYHJHHGYYGKGGCWJZZYLCZLXQSFTGZSLLLMLJSKCTBLLZZSZMMNYTPZSXQHJCJYQXYZXZQZCPSHKZZYSXCDFGMWQRLLQXRFZTLYSTCTMJCXJJXHJNXTNRZTZFQYHQGLLGCXSZSJDJLJCYDSJTLNYXHSZXCGJZYQPYLFHDJSBPCCZHJJJQZJQDYBSSLLCMYTTMQTBHJQNNYGKYRQYQMZGCJKPDCGMYZHQLLSLLCLMHOLZGDYYFZSLJCQZLYLZQJESHNYLLJXGJXLYSYYYXNBZLJSSZCQQCJYLLZLTJYLLZLLBNYLGQCHXYYXOXCXQKYJXXXYKLXSXXYQXCYKQXQCSGYXXYQXYGYTQOHXHXPYXXXULCYEYCHZZCBWQBBWJQZSCSZSSLZYLKDESJZWMYMCYTSDSXXSCJPQQSQYLYYZYCMDJDZYWCBTJSYDJKCYDDJLBDJJSODZYSYXQQYXDHHGQQYQHDYXWGMMMAJDYBBBPPBCMUUPLJZSMTXERXJMHQNUTPJDCBSSMSSSTKJTSSMMTRCPLZSZMLQDSDMJMQPNQDXCFYNBFSDQXYXHYAYKQYDDLQYYYSSZBYDSLNTFQTZQPZMCHDHCZCWFDXTMYQSPHQYYXSRGJCWTJTZZQMGWJJTJHTQJBBHWZPXXHYQFXXQYWYYHYSCDYDHHQMNMTMWCPBSZPPZZGLMZFOLLCFWHMMSJZTTDHZZYFFYTZZGZYSKYJXQYJZQBHMBZZLYGHGFMSHPZFZSNCLPBQSNJXZSLXXFPMTYJYGBXLLDLXPZJYZJYHHZCYWHJYLSJEXFSZZYWXKZJLUYDTMLYMQJPWXYHXSKTQJEZRPXXZHHMHWQPWQLYJJQJJZSZCPHJLCHHNXJLQWZJHBMZYXBDHHYPZLHLHLGFWLCHYYTLHJXCJMSCPXSTKPNHQXSRTYXXTESYJCTLSSLSTDLLLWWYHDHRJZSFGXTSYCZYNYHTDHWJSLHTZDQDJZXXQHGYLTZPHCSQFCLNJTCLZPFSTPDYNYLGMJLLYCQHYSSHCHYLHQYQTMZYPBYWRFQYKQSYSLZDQJMPXYYSSRHZJNYWTQDFZBWWTWWRXCWHGYHXMKMYYYQMSMZHNGCEPMLQQMTCWCTMMPXJPJJHFXYYZSXZHTYBMSTSYJTTQQQYYLHYNPYQZLCYZHZWSMYLKFJXLWGXYPJYTYSYXYMZCKTTWLKSMZSYLMPWLZWXWQZSSAQSYXYRHSSNTSRAPXCPWCMGDXHXZDZYFJHGZTTSBJHGYZSZYSMYCLLLXBTYXHBBZJKSSDMALXHYCFYGMQYPJYCQXJLLLJGSLZGQLYCJCCZOTYXMTMTTLLWTGPXYMZMKLPSZZZXHKQYSXCTYJZYHXSHYXZKXLZWPSQPYHJWPJPWXQQYLXSDHMRSLZZYZWTTCYXYSZZSHBSCCSTPLWSSCJCHNLCGCHSSPHYLHFHHXJSXYLLNYLSZDHZXYLSXLWZYKCLDYAXZCMDDYSPJTQJZLNWQPSSSWCTSTSZLBLNXSMNYYMJQBQHRZWTYYDCHQLXKPZWBGQYBKFCMZWPZLLYYLSZYDWHXPSBCMLJBSCGBHXLQHYRLJXYSWXWXZSLDFHLSLYNJLZYFLYJYCDRJLFSYZFSLLCQYQFGJYHYXZLYLMSTDJCYHBZLLNWLXXYGYYHSMGDHXXHHLZZJZXCZZZCYQZFNGWPYLCPKPYYPMCLQKDGXZGGWQBDXZZKZFBXXLZXJTPJPTTBYTSZZDWSLCHZHSLTYXHQLHYXXXYYZYSWTXZKHLXZXZPYHGCHKCFSYHUTJRLXFJXPTZTWHPLYXFCRHXSHXKYXXYHZQDXQWULHYHMJTBFLKHTXCWHJFWJCFPQRYQXCYYYQYGRPYWSGSUNGWCHKZDXYFLXXHJJBYZWTSXXNCYJJYMSWZJQRMHXZWFQSYLZJZGBHYNSLBGTTCSYBYXXWXYHXYYXNSQYXMQYWRGYQLXBBZLJSYLPSYTJZYHYZAWLRORJMKSCZJXXXYXCHDYXRYXXJDTSQFXLYLTSFFYXLMTYJMJUYYYXLTZCSXQZQHZXLYYXZHDNBRXXXJCTYHLBRLMBRLLAXKYLLLJLYXXLYCRYLCJTGJCMTLZLLCYZZPZPCYAWHJJFYBDYYZSMPCKZDQYQPBPCJPDCYZMDPBCYYDYCNNPLMTMLRMFMMGWYZBSJGYGSMZQQQZTXMKQWGXLLPJGZBQCDJJJFPKJKCXBLJMSWMDTQJXLDLPPBXCWRCQFBFQJCZAHZGMYKPHYYHZYKNDKZMBPJYXPXYHLFPNYYGXJDBKXNXHJMZJXSTRSTLDXSKZYSYBZXJLXYSLBZYSLHXJPFXPQNBYLLJQKYGZMCYZZYMCCSLCLHZFWFWYXZMWSXTYNXJHPYYMCYSPMHYSMYDYSHQYZCHMJJMZCAAGCFJBBHPLYZYLXXSDJGXDHKXXTXXNBHRMLYJSLTXMRHNLXQJXYZLLYSWQGDLBJHDCGJYQYCMHWFMJYBMBYJYJWYMDPWHXQLDYGPDFXXBCGJSPCKRSSYZJMSLBZZJFLJJJLGXZGYXYXLSZQYXBEXYXHGCXBPLDYHWETTWWCJMBTXCHXYQXLLXFLYXLLJLSSFWDPZSMYJCLMWYTCZPCHQEKCQBWLCQYDPLQPPQZQFJQDJHYMMCXTXDRMJWRHXCJZYLQXDYYNHYYHRSLSRSYWWZJYMTLTLLGTQCJZYABTCKZCJYCCQLJZQXALMZYHYWLWDXZXQDLLQSHGPJFJLJHJABCQZDJGTKHSSTCYJLPSWZLXZXRWGLDLZRLZXTGSLLLLZLYXXWGDZYGBDPHZPBRLWSXQBPFDWOFMWHLYPCBJCCLDMBZPBZZLCYQXLDOMZBLZWPDWYYGDSTTHCSQSCCRSSSYSLFYBFNTYJSZDFNDPDHDZZMBBLSLCMYFFGTJJQWFTMTPJWFNLBZCMMJTGBDZLQLPYFHYYMJYLSDCHDZJWJCCTLJCLDTLJJCPDDSQDSSZYBNDBJLGGJZXSXNLYCYBJXQYCBYLZCFZPPGKCXZDZFZTJJFJSJXZBNZYJQTTYJYHTYCZHYMDJXTTMPXSPLZCDWSLSHXYPZGTFMLCJTYCBPMGDKWYCYZCDSZZYHFLYCTYGWHKJYYLSJCXGYWJCBLLCSNDDBTZBSCLYZCZZSSQDLLMQYYHFSLQLLXFTYHABXGWNYWYYPLLSDLDLLBJCYXJZMLHLJDXYYQYTDLLLBUGBFDFBBQJZZMDPJHGCLGMJJPGAEHHBWCQXAXHHHZCHXYPHJAXHLPHJPGPZJQCQZGJJZZUZDMQYYBZZPHYHYBWHAZYJHYKFGDPFQSDLZMLJXKXGALXZDAGLMDGXMWZQYXXDXXPFDMMSSYMPFMDMMKXKSYZYSHDZKXSYSMMZZZMSYDNZZCZXFPLSTMZDNMXCKJMZTYYMZMZZMSXHHDCZJEMXXKLJSTLWLSQLYJZLLZJSSDPPMHNLZJCZYHMXXHGZCJMDHXTKGRMXFWMCGMWKDTKSXQMMMFZZYDKMSCLCMPCGMHSPXQPZDSSLCXKYXTWLWJYAHZJGZQMCSNXYYMMPMLKJXMHLMLQMXCTKZMJQYSZJSYSZHSYJZJCDAJZYBSDQJZGWZQQXFKDMSDJLFWEHKZQKJPEYPZYSZCDWYJFFMZZYLTTDZZEFMZLBNPPLPLPEPSZALLTYLKCKQZKGENQLWAGYXYDPXLHSXQQWQCQXQCLHYXXMLYCCWLYMQYSKGCHLCJNSZKPYZKCQZQLJPDMDZHLASXLBYDWQLWDNBQCRYDDZTJYBKBWSZDXDTNPJDTCTQDFXQQMGNXECLTTBKPWSLCTYQLPWYZZKLPYGZCQQPLLKCCYLPQMZCZQCLJSLQZDJXLDDHPZQDLJJXZQDXYZQKZLJCYQDYJPPYPQYKJYRMPCBYMCXKLLZLLFQPYLLLMBSGLCYSSLRSYSQTMXYXZQZFDZUYSYZTFFMZZSMZQHZSSCCMLYXWTPZGXZJGZGSJSGKDDHTQGGZLLBJDZLCBCHYXYZHZFYWXYZYMSDBZZYJGTSMTFXQYXQSTDGSLNXDLRYZZLRYYLXQHTXSRTZNGZXBNQQZFMYKMZJBZYMKBPNLYZPBLMCNQYZZZSJZHJCTZKHYZZJRDYZHNPXGLFZTLKGJTCTSSYLLGZRZBBQZZKLPKLCZYSSUYXBJFPNJZZXCDWXZYJXZZDJJKGGRSRJKMSMZJLSJYWQSKYHQJSXPJZZZLSNSHRNYPZTWCHKLPSRZLZXYJQXQKYSJYCZTLQZYBBYBWZPQDWWYZCYTJCJXCKCWDKKZXSGKDZXWWYYJQYYTCYTDLLXWKCZKKLCCLZCQQDZLQLCSFQCHQHSFSMQZZLNBJJZBSJHTSZDYSJQJPDLZCDCWJKJZZLPYCGMZWDJJBSJQZSYZYHHXJPBJYDSSXDZNCGLQMBTSFSBPDZDLZNFGFJGFSMPXJQLMBLGQCYYXBQKDJJQYRFKZTJDHCZKLBSDZCFJTPLLJGXHYXZCSSZZXSTJYGKGCKGYOQXJPLZPBPGTGYJZGHZQZZLBJLSQFZGKQQJZGYCZBZQTLDXRJXBSXXPZXHYZYCLWDXJJHXMFDZPFZHQHQMQGKSLYHTYCGFRZGNQXCLPDLBZCSCZQLLJBLHBZCYPZZPPDYMZZSGYHCKCPZJGSLJLNSCDSLDLXBMSTLDDFJMKDJDHZLZXLSZQPQPGJLLYBDSZGQLBZLSLKYYHZTTNTJYQTZZPSZQZTLLJTYYLLQLLQYZQLBDZLSLYYZYMDFSZSNHLXZNCZQZPBWSKRFBSYZMTHBLGJPMCZZLSTLXSHTCSYZLZBLFEQHLXFLCJLYLJQCBZLZJHHSSTBRMHXZHJZCLXFNBGXGTQJCZTMSFZKJMSSNXLJKBHSJXNTNLZDNTLMSJXGZJYJCZXYJYJWRWWQNZTNFJSZPZSHZJFYRDJSFSZJZBJFZQZZHZLXFYSBZQLZSGYFTZDCSZXZJBQMSZKJRHYJZCKMJKHCHGTXKXQGLXPXFXTRTYLXJXHDTSJXHJZJXZWZLCQSBTXWXGXTXXHXFTSDKFJHZYJFJXRZSDLLLTQSQQZQWZXSYQTWGWBZCGZLLYZBCLMQQTZHZXZXLJFRMYZFLXYSQXXJKXRMQDZDMMYYBSQBHGZMWFWXGMXLZPYYTGZYCCDXYZXYWGSYJYZNBHPZJSQSYXSXRTFYZGRHZTXSZZTHCBFCLSYXZLZQMZLMPLMXZJXSFLBYZMYQHXJSXRXSQZZZSSLYFRCZJRCRXHHZXQYDYHXSJJHZCXZBTYNSYSXJBQLPXZQPYMLXZKYXLXCJLCYSXXZZLXDLLLJJYHZXGYJWKJRWYHCPSGNRZLFZWFZZNSXGXFLZSXZZZBFCSYJDBRJKRDHHGXJLJJTGXJXXSTJTJXLYXQFCSGSWMSBCTLQZZWLZZKXJMLTMJYHSDDBXGZHDLBMYJFRZFSGCLYJBPMLYSMSXLSZJQQHJZFXGFQFQBPXZGYYQXGZTCQWYLTLGWSGWHRLFSFGZJMGMGBGTJFSYZZGZYZAFLSSPMLPFLCWBJZCLJJMZLPJJLYMQDMYYYFBGYGYZMLYZDXQYXRQQQHSYYYQXYLJTYXFSFSLLGNQCYHYCWFHCCCFXPYLYPLLZYXXXXXKQHHXSHJZCFZSCZJXCPZWHHHHHAPYLQALPQAFYHXDYLUKMZQGGGDDESRNNZLTZGCHYPPYSQJJHCLLJTOLNJPZLJLHYMHEYDYDSQYCDDHGZUNDZCLZYZLLZNTNYZGSLHSLPJJBDGWXPCDUTJCKLKCLWKLLCASSTKZZDNQNTTLYYZSSYSSZZRYLJQKCQDHHCRXRZYDGRGCWCGZQFFFPPJFZYNAKRGYWYQPQXXFKJTSZZXSWZDDFBBXTBGTZKZNPZZPZXZPJSZBMQHKCYXYLDKLJNYPKYGHGDZJXXEAHPNZKZTZCMXCXMMJXNKSZQNMNLWBWWXJKYHCPSTMCSQTZJYXTPCTPDTNNPGLLLZSJLSPBLPLQHDTNJNLYYRSZFFJFQWDPHZDWMRZCCLODAXNSSNYZRESTYJWJYJDBCFXNMWTTBYLWSTSZGYBLJPXGLBOCLHPCBJLTMXZLJYLZXCLTPNCLCKXTPZJSWCYXSFYSZDKNTLBYJCYJLLSTGQCBXRYZXBXKLYLHZLQZLNZCXWJZLJZJNCJHXMNZZGJZZXTZJXYCYYCXXJYYXJJXSSSJSTSSTTPPGQTCSXWZDCSYFPTFBFHFBBLZJCLZZDBXGCXLQPXKFZFLSYLTUWBMQJHSZBMDDBCYSCCLDXYCDDQLYJJWMQLLCSGLJJSYFPYYCCYLTJANTJJPWYCMMGQYYSXDXQMZHSZXPFTWWZQSWQRFKJLZJQQYFBRXJHHFWJJZYQAZMYFRHCYYBYQWLPEXCCZSTYRLTTDMQLYKMBBGMYYJPRKZNPBSXYXBHYZDJDNGHPMFSGMWFZMFQMMBCMZZCJJLCNUXYQLMLRYGQZCYXZLWJGCJCGGMCJNFYZZJHYCPRRCMTZQZXHFQGTJXCCJEAQCRJYHPLQLSZDJRBCQHQDYRHYLYXJSYMHZYDWLDFRYHBPYDTSSCNWBXGLPZMLZZTQSSCPJMXXYCSJYTYCGHYCJWYRXXLFEMWJNMKLLSWTXHYYYNCMMCWJDQDJZGLLJWJRKHPZGGFLCCSCZMCBLTBHBQJXQDSPDJZZGKGLFQYWBZYZJLTSTDHQHCTCBCHFLQMPWDSHYYTQWCNZZJTLBYMBPDYYYXSQKXWYYFLXXNCWCXYPMAELYKKJMZZZBRXYYQJFLJPFHHHYTZZXSGQQMHSPGDZQWBWPJHZJDYSCQWZKTXXSQLZYYMYSDZGRXCKKUJLWPYSYSCSYZLRMLQSYLJXBCXTLWDQZPCYCYKPPPNSXFYZJJRCEMHSZMSXLXGLRWGCSTLRSXBZGBZGZTCPLUJLSLYLYMTXMTZPALZXPXJTJWTCYYZLBLXBZLQMYLXPGHDSLSSDMXMBDZZSXWHAMLCZCPJMCNHJYSNSYGCHSKQMZZQDLLKABLWJXSFMOCDXJRRLYQZKJMYBYQLYHETFJZFRFKSRYXFJTWDSXXSYSQJYSLYXWJHSNLXYYXHBHAWHHJZXWMYLJCSSLKYDZTXBZSYFDXGXZJKHSXXYBSSXDPYNZWRPTQZCZENYGCXQFJYKJBZMLJCMQQXUOXSLYXXLYLLJDZBTYMHPFSTTQQWLHOKYBLZZALZXQLHZWRRQHLSTMYPYXJJXMQSJFNBXYXYJXXYQYLTHYLQYFMLKLJTMLLHSZWKZHLJMLHLJKLJSTLQXYLMBHHLNLZXQJHXCFXXLHYHJJGBYZZKBXSCQDJQDSUJZYYHZHHMGSXCSYMXFEBCQWWRBPYYJQTYZCYQYQQZYHMWFFHGZFRJFCDPXNTQYZPDYKHJLFRZXPPXZDBBGZQSTLGDGYLCQMLCHHMFYWLZYXKJLYPQHSYWMQQGQZMLZJNSQXJQSYJYCBEHSXFSZPXZWFLLBCYYJDYTDTHWZSFJMQQYJLMQXXLLDTTKHHYBFPWTYYSQQWNQWLGWDEBZWCMYGCULKJXTMXMYJSXHYBRWFYMWFRXYQMXYSZTZZTFYKMLDHQDXWYYNLCRYJBLPSXCXYWLSPRRJWXHQYPHTYDNXHHMMYWYTZCSQMTSSCCDALWZTCPQPYJLLQZYJSWXMZZMMYLMXCLMXCZMXMZSQTZPPQQBLPGXQZHFLJJHYTJSRXWZXSCCDLXTYJDCQJXSLQYCLZXLZZXMXQRJMHRHZJBHMFLJLMLCLQNLDXZLLLPYPSYJYSXCQQDCMQJZZXHNPNXZMEKMXHYKYQLXSXTXJYYHWDCWDZHQYYBGYBCYSCFGPSJNZDYZZJZXRZRQJJYMCANYRJTLDPPYZBSTJKXXZYPFDWFGZZRPYMTNGXZQBYXNBUFNQKRJQZMJEGRZGYCLKXZDSKKNSXKCLJSPJYYZLQQJYBZSSQLLLKJXTBKTYLCCDDBLSPPFYLGYDTZJYQGGKQTTFZXBDKTYYHYBBFYTYYBCLPDYTGDHRYRNJSPTCSNYJQHKLLLZSLYDXXWBCJQSPXBPJZJCJDZFFXXBRMLAZHCSNDLBJDSZBLPRZTSWSBXBCLLXXLZDJZSJPYLYXXYFTFFFBHJJXGBYXJPMMMPSSJZJMTLYZJXSWXTYLEDQPJMYGQZJGDJLQJWJQLLSJGJGYGMSCLJJXDTYGJQJQJCJZCJGDZZSXQGSJGGCXHQXSNQLZZBXHSGZXCXYLJXYXYYDFQQJHJFXDHCTXJYRXYSQTJXYEFYYSSYYJXNCYZXFXMSYSZXYYSCHSHXZZZGZZZGFJDLTYLNPZGYJYZYYQZPBXQBDZTZCZYXXYHHSQXSHDHGQHJHGYWSZTMZMLHYXGEBTYLZKQWYTJZRCLEKYSTDBCYKQQSAYXCJXWWGSBHJYZYDHCSJKQCXSWXFLTYNYZPZCCZJQTZWJQDZZZQZLJJXLSBHPYXXPSXSHHEZTXFPTLQYZZXHYTXNCFZYYHXGNXMYWXTZSJPTHHGYMXMXQZXTSBCZYJYXXTYYZYPCQLMMSZMJZZLLZXGXZAAJZYXJMZXWDXZSXZDZXLEYJJZQBHZWZZZQTZPSXZTDSXJJJZNYAZPHXYYSRNQDTHZHYYKYJHDZXZLSWCLYBZYECWCYCRYLCXNHZYDZYDYJDFRJJHTRSQTXYXJRJHOJYNXELXSFSFJZGHPZSXZSZDZCQZBYYKLSGSJHCZSHDGQGXYZGXCHXZJWYQWGYHKSSEQZZNDZFKWYSSTCLZSTSYMCDHJXXYWEYXCZAYDMPXMDSXYBSQMJMZJMTZQLPJYQZCGQHXJHHLXXHLHDLDJQCLDWBSXFZZYYSCHTYTYYBHECXHYKGJPXHHYZJFXHWHBDZFYZBCAPNPGNYDMSXHMMMMAMYNBYJTMPXYYMCTHJBZYFCGTYHWPHFTWZZEZSBZEGPFMTSKFTYCMHFLLHGPZJXZJGZJYXZSBBQSCZZLZCCSTPGXMJSFTCCZJZDJXCYBZLFCJSYZFGSZLYBCWZZBYZDZYPSWYJZXZBDSYUXLZZBZFYGCZXBZHZFTPBGZGEJBSTGKDMFHYZZJHZLLZZGJQZLSFDJSSCBZGPDLFZFZSZYZYZSYGCXSNXXCHCZXTZZLJFZGQSQYXZJQDCCZTQCDXZJYQJQCHXZTDLGSCXZSYQJQTZWLQDQZTQCHQQJZYEZZZPBWKDJFCJPZTYPQYQTTYNLMBDKTJZPQZQZZFPZSBNJLGYJDXJDZZKZGQKXDLPZJTCJDQBXDJQJSTCKNXBXZMSLYJCQMTJQWWCJQNJNLLLHJCWQTBZQYDZCZPZZDZYDDCYZZZCCJTTJFZDPRRTZTJDCQTQZDTJNPLZBCLLCTZSXKJZQZPZLBZRBTJDCXFCZDBCCJJLTQQPLDCGZDBBZJCQDCJWYNLLZYZCCDWLLXWZLXRXNTQQCZXKQLSGDFQTDDGLRLAJJTKUYMKQLLTZYTDYYCZGJWYXDXFRSKSTQTENQMRKQZHHQKDLDAZFKYPBGGPZREBZZYKZZSPEGJXGYKQZZZSLYSYYYZWFQZYLZZLZHWCHKYPQGNPGBLPLRRJYXCCSYYHSFZFYBZYYTGZXYLXCZWXXZJZBLFFLGSKHYJZEYJHLPLLLLCZGXDRZELRHGKLZZYHZLYQSZZJZQLJZFLNBHGWLCZCFJYSPYXZLZLXGCCPZBLLCYBBBBUBBCBPCRNNZCZYRBFSRLDCGQYYQXYGMQZWTZYTYJXYFWTEHZZJYWLCCNTZYJJZDEDPZDZTSYQJHDYMBJNYJZLXTSSTPHNDJXXBYXQTZQDDTJTDYYTGWSCSZQFLSHLGLBCZPHDLYZJYCKWTYTYLBNYTSDSYCCTYSZYYEBHEXHQDTWNYGYCLXTSZYSTQMYGZAZCCSZZDSLZCLZRQXYYELJSBYMXSXZTEMBBLLYYLLYTDQYSHYMRQWKFKBFXNXSBYCHXBWJYHTQBPBSBWDZYLKGZSKYHXQZJXHXJXGNLJKZLYYCDXLFYFGHLJGJYBXQLYBXQPQGZTZPLNCYPXDJYQYDYMRBESJYYHKXXSTMXRCZZYWXYQYBMCLLYZHQYZWQXDBXBZWZMSLPDMYSKFMZKLZCYQYCZLQXFZZYDQZPZYGYJYZMZXDZFYFYTTQTZHGSPCZMLCCYTZXJCYTJMKSLPZHYSNZLLYTPZCTZZCKTXDHXXTQCYFKSMQCCYYAZHTJPCYLZLYJBJXTPNYLJYYNRXSYLMMNXJSMYBCSYSYLZYLXJJQYLDZLPQBFZZBLFNDXQKCZFYWHGQMRDSXYCYTXNQQJZYYPFZXDYZFPRXEJDGYQBXRCNFYYQPGHYJDYZXGRHTKYLNWDZNTSMPKLBTHBPYSZBZTJZSZZJTYYXZPHSSZZBZCZPTQFZMYFLYPYBBJQXZMXXDJMTSYSKKBJZXHJCKLPSMKYJZCXTMLJYXRZZQSLXXQPYZXMKYXXXJCLJPRMYYGADYSKQLSNDHYZKQXZYZTCGHZTLMLWZYBWSYCTBHJHJFCWZTXWYTKZLXQSHLYJZJXTMPLPYCGLTBZZTLZJCYJGDTCLKLPLLQPJMZPAPXYZLKKTKDZCZZBNZDYDYQZJYJGMCTXLTGXSZLMLHBGLKFWNWZHDXUHLFMKYSLGXDTWWFRJEJZTZHYDXYKSHWFZCQSHKTMQQHTZHYMJDJSKHXZJZBZZXYMPAGQMSTPXLSKLZYNWRTSQLSZBPSPSGZWYHTLKSSSWHZZLYYTNXJGMJSZSUFWNLSOZTXGXLSAMMLBWLDSZYLAKQCQCTMYCFJBSLXCLZZCLXXKSBZQCLHJPSQPLSXXCKSLNHPSFQQYTXYJZLQLDXZQJZDYYDJNZPTUZDSKJFSLJHYLZSQZLBTXYDGTQFDBYAZXDZHZJNHHQBYKNXJJQCZMLLJZKSPLDYCLBBLXKLELXJLBQYCXJXGCNLCQPLZLZYJTZLJGYZDZPLTQCSXFDMNYCXGBTJDCZNBGBQYQJWGKFHTNPYQZQGBKPBBYZMTJDYTBLSQMPSXTBNPDXKLEMYYCJYNZCTLDYKZZXDDXHQSHDGMZSJYCCTAYRZLPYLTLKXSLZCGGEXCLFXLKJRTLQJAQZNCMBYDKKCXGLCZJZXJHPTDJJMZQYKQSECQZDSHHADMLZFMMZBGNTJNNLGBYJBRBTMLBYJDZXLCJLPLDLPCQDHLXZLYCBLCXZZJADJLNZMMSSSMYBHBSQKBHRSXXJMXSDZNZPXLGBRHWGGFCXGMSKLLTSJYYCQLTSKYWYYHYWXBXQYWPYWYKQLSQPTNTKHQCWDQKTWPXXHCPTHTWUMSSYHBWCRWXHJMKMZNGWTMLKFGHKJYLSYYCXWHYECLQHKQHTTQKHFZLDXQWYZYYDESBPKYRZPJFYYZJCEQDZZDLATZBBFJLLCXDLMJSSXEGYGSJQXCWBXSSZPDYZCXDNYXPPZYDLYJCZPLTXLSXYZYRXCYYYDYLWWNZSAHJSYQYHGYWWAXTJZDAXYSRLTDPSSYYFNEJDXYZHLXLLLZQZSJNYQYQQXYJGHZGZCYJCHZLYCDSHWSHJZYJXCLLNXZJJYYXNFXMWFPYLCYLLABWDDHWDXJMCXZTZPMLQZHSFHZYNZTLLDYWLSLXHYMMYLMBWWKYXYADTXYLLDJPYBPWUXJMWMLLSAFDLLYFLBHHHBQQLTZJCQJLDJTFFKMMMBYTHYGDCQRDDWRQJXNBYSNWZDBYYTBJHPYBYTTJXAAHGQDQTMYSTQXKBTZPKJLZRBEQQSSMJJBDJOTGTBXPGBKTLHQXJJJCTHXQDWJLWRFWQGWSHCKRYSWGFTGYGBXSDWDWRFHWYTJJXXXJYZYSLPYYYPAYXHYDQKXSHXYXGSKQHYWFDDDPPLCJLQQEEWXKSYYKDYPLTJTHKJLTCYYHHJTTPLTZZCDLTHQKZXQYSTEEYWYYZYXXYYSTTJKLLPZMCYHQGXYHSRMBXPLLNQYDQHXSXXWGDQBSHYLLPJJJTHYJKYPPTHYYKTYEZYENMDSHLCRPQFDGFXZPSFTLJXXJBSWYYSKSFLXLPPLBBBLBSFXFYZBSJSSYLPBBFFFFSSCJDSTZSXZRYYSYFFSYZYZBJTBCTSBSDHRTJJBYTCXYJEYLXCBNEBJDSYXYKGSJZBXBYTFZWGENYHHTHZHHXFWGCSTBGXKLSXYWMTMBYXJSTZSCDYQRCYTWXZFHMYMCXLZNSDJTTTXRYCFYJSBSDYERXJLJXBBDEYNJGHXGCKGSCYMBLXJMSZNSKGXFBNBPTHFJAAFXYXFPXMYPQDTZCXZZPXRSYWZDLYBBKTYQPQJPZYPZJZNJPZJLZZFYSBTTSLMPTZRTDXQSJEHBZYLZDHLJSQMLHTXTJECXSLZZSPKTLZKQQYFSYGYWPCPQFHQHYTQXZKRSGTTSQCZLPTXCDYYZXSQZSLXLZMYCPCQBZYXHBSXLZDLTCDXTYLZJYYZPZYZLTXJSJXHLPMYTXCQRBLZSSFJZZTNJYTXMYJHLHPPLCYXQJQQKZZSCPZKSWALQSBLCCZJSXGWWWYGYKTJBBZTDKHXHKGTGPBKQYSLPXPJCKBMLLXDZSTBKLGGQKQLSBKKTFXRMDKBFTPZFRTBBRFERQGXYJPZSSTLBZTPSZQZSJDHLJQLZBPMSMMSXLQQNHKNBLRDDNXXDHDDJCYYGYLXGZLXSYGMQQGKHBPMXYXLYTQWLWGCPBMQXCYZYDRJBHTDJYHQSHTMJSBYPLWHLZFFNYPMHXXHPLTBQPFBJWQDBYGPNZTPFZJGSDDTQSHZEAWZZYLLTYYBWJKXXGHLFKXDJTMSZSQYNZGGSWQSPHTLSSKMCLZXYSZQZXNCJDQGZDLFNYKLJCJLLZLMZZNHYDSSHTHZZLZZBBHQZWWYCRZHLYQQJBEYFXXXWHSRXWQHWPSLMSSKZTTYGYQQWRSLALHMJTQJSMXQBJJZJXZYZKXBYQXBJXSHZTSFJLXMXZXFGHKZSZGGYLCLSARJYHSLLLMZXELGLXYDJYTLFBHBPNLYZFBBHPTGJKWETZHKJJXZXXGLLJLSTGSHJJYQLQZFKCGNNDJSSZFDBCTWWSEQFHQJBSAQTGYPQLBXBMMYWXGSLZHGLZGQYFLZBYFZJFRYSFMBYZHQGFWZSYFYJJPHZBYYZFFWODGRLMFTWLBZGYCQXCDJYGZYYYYTYTYDWEGAZYHXJLZYYHLRMGRXXZCLHNELJJTJTPWJYBJJBXJJTJTEEKHWSLJPLPSFYZPQQBDLQJJTYYQLYZKDKSQJYYQZLDQTGJQYZJSUCMRYQTHTEJMFCTYHYPKMHYZWJDQFHYYXWSHCTXRLJHQXHCCYYYJLTKTTYTMXGTCJTZAYYOCZLYLBSZYWJYTSJYHBYSHFJLYGJXXTMZYYLTXXYPZLXYJZYZYYPNHMYMDYYLBLHLSYYQQLLNJJYMSOYQBZGDLYXYLCQYXTSZEGXHZGLHWBLJHEYXTWQMAKBPQCGYSHHEGQCMWYYWLJYJHYYZLLJJYLHZYHMGSLJLJXCJJYCLYCJPCPZJZJMMYLCQLNQLJQJSXYJMLSZLJQLYCMMHCFMMFPQQMFYLQMCFFQMMMMHMZNFHHJGTTHHKHSLNCHHYQDXTMMQDCYZYXYQMYQYLTDCYYYZAZZCYMZYDLZFFFMMYCQZWZZMABTBYZTDMNZZGGDFTYPCGQYTTSSFFWFDTZQSSYSTWXJHXYTSXXYLBYQHWWKXHZXWZNNZZJZJJQJCCCHYYXBZXZCYZTLLCQXYNJYCYYCYNZZQYYYEWYCZDCJYCCHYJLBTZYYCQWMPWPYMLGKDLDLGKQQBGYCHJXY", r = function (e) {
    var a = e.charCodeAt(0);
    return a > 40869 || 19968 > a ? e.toUpperCase() : n.charAt(a - 19968)
  };
  e.exports = function (e) {
    "string" != typeof e && (e += "");
    var a = e.charAt(0);
    return r(a)
  }
}, function (e, a, t) {
  function n(e) {
    c.uname = e.username, c.uid = e.usercode, c.crc = l(c.time_stamp + c.imei + c.uid + p)
  }

  var r, o = document.location.href, i = o.split("?")[1];
  r = function (e) {
    var a, t = {};
    if (!e)return t;
    for (var n = e.split("&"), r = 0, o = n.length; o > r; r++)a = n[r].split("="), t[a[0]] = a[1];
    return t
  }(i);
  var s = (Dom7, Template7, Framework7.prototype.device), l = t(7);
  if (s.microMessenger) {
    var p = "Q56GtyNkop97H334TtyturfgErvvv65q", c = {
      loginType: "1",
      app_key: "wer234r2dw",
      OS: "weixin",
      app_version: "1.0",
      time_stamp: Date.now(),
      channel: "",
      imei: "dasd1223423we",
      level: "1",
      crc: "",
      uname: "",
      uid: ""
    };
    c.crc = l(c.time_stamp + c.imei + c.uid + p)
  } else {
    var p = "Q56GtyNkop97H334TtyturfgErvvv65q", c = {
      imei: "dasd1223423we",
      OS: "wap",
      time_stamp: Date.now(),
      channel: "",
      code: "",
      uname: "",
      uid: ""
    };
    c.crc = l(c.time_stamp + c.imei + c.uid + p)
  }
  var d;
  d = {
    sourcesType: "wlan",
    wxMode: "true" === r.wxMode ? !0 : !1,
    packEnv: "publish",
    wxDebug: !1,
    updateQuery: n,
    info: c,
    templates: {
      home: "views/home.html",
      login: "views/login.html",
      member: "views/member.html",
      seckill: "views/seckill.html"
    },
    sources: {
      homeRefresh: {
        url: "http://cms.aolaigo.com/Handler/app_ActivityHandler.ashx",
        query: {opt: 1, cmd: 3},
        method: "POST",
        hideloaderSym: !0,
        noAlert: !0
      },
      register: {url: "http://memberapi.aolaigo.com/appweixinbind.ashx", query: {cmd: "create"}, method: "GET"},
      login: {url: "http://memberapi.aolaigo.com/appweixinbind.ashx", query: {cmd: "bind"}, method: "GET"},
      waplogin: {url: "http://memberapi.aolaigo.com/appmember.ashx", query: {cmd: "1", opt: "2"}, method: "POST"},
      wapGC: {url: "http://memberapi.aolaigo.com/appmember.ashx", query: {opt: 1, cmd: 3}, method: "POST"},
      wapIC: {url: "http://memberapi.aolaigo.com/appmember.ashx", query: {opt: 1, cmd: 4}, method: "POST"},
      identifyingCode: {
        url: "http://memberapi.aolaigo.com/appmember.ashx",
        query: {opt: 1, cmd: 1, uid: ""},
        method: "POST"
      },
      "search-list": {
        url: "http://searchapi.aolaigo.com/appsearch/cmd/GetAppSearchResult",
        query: {cmd: "GetAppSearchResult"},
        method: "GET"
      },
      "product-detail": {
        url: "http://productapi.aolaigo.com/handler/command.ashx?cmd=getsku",
        query: {},
        method: "GET"
      },
      "view-record": {url: "http://memberapi.aolaigo.com/appmember.ashx", query: {opt: "7", cmd: "1"}, method: "POST"},
      category: {url: "http://memberapi.aolaigo.com/appnewcategory.ashx", query: {}, method: "GET"},
      search: {
        url: "http://searchapi.aolaigo.com/appsearch/cmd/GetSuggestWords?cmd=GetSuggestWords",
        query: {psize: 20, page: 1},
        method: "GET"
      },
      quietOne: {
        url: "http://cms.aolaigo.com/Handler/app_ActivityHandler.ashx",
        query: {opt: "1", cmd: "2"},
        method: "POST",
        noAlert: !0,
        hideloaderSym: !0
      },
      home: {
        url: "http://cms.aolaigo.com/Handler/app_ActivityHandler.ashx",
        query: {opt: "1", cmd: "1"},
        method: "POST",
        cbData: !0
      },
      channel: {
        url: "http://cms.aolaigo.com/Handler/app_ActivityHandler.ashx",
        query: {opt: "1", cmd: "1"},
        method: "POST"
      },
      activity: {
        url: "http://cms.aolaigo.com/Handler/app_ActivityHandler.ashx",
        query: {opt: "1", cmd: "1"},
        method: "POST"
      },
      activityAction: {url: "http://activity.aolaigo.com/handler/gainhandler.ashx", query: {}, method: "GET"},
      wxConfig: {url: "http://memberapi.aolaigo.com/appweixin.ashx", query: {}, method: "GET"},
      wxPay: {url: "http://payapi.aolaigo.com/handler/wxpadpaycall.ashx", query: {}, method: "GET"},
      aliPay: {url: "http://payapi.aolaigo.com/handler/wapalipayrequest.ashx", query: {}, method: "POST"},
      abcPay: {url: "http://payapi.aolaigo.com/handler/abcpayapprequest.ashx", query: {}, method: "GET"},
      abcPayCheck: {url: "http://payapi.aolaigo.com/handler/abcqueryorder.ashx", query: {}, method: "GET", cbData: !0},
      orderList: {url: "http://orderapi.aolaigo.com/orderlistapi.ashx", query: {opt: "6", cmd: "2"}, method: "POST"},
      orderStatistics: {
        url: "http://orderapi.aolaigo.com/apporderstatisticsapi.ashx",
        query: {opt: "6", cmd: "19"},
        method: "POST"
      },
      orderListWaitPay: {
        url: "http://orderapi.aolaigo.com/orderlistapi.ashx",
        query: {opt: "6", cmd: "3"},
        method: "POST"
      },
      orderListWaitDelivery: {
        url: "http://orderapi.aolaigo.com/orderlistapi.ashx",
        query: {opt: "6", cmd: "4"},
        method: "POST"
      },
      orderListWaitRecipt: {
        url: "http://orderapi.aolaigo.com/orderlistapi.ashx",
        query: {opt: "6", cmd: "5"},
        method: "POST"
      },
      orderListFinish: {
        url: "http://orderapi.aolaigo.com/orderlistapi.ashx",
        query: {opt: "6", cmd: "7"},
        method: "POST"
      },
      orderListClose: {
        url: "http://orderapi.aolaigo.com/orderlistapi.ashx",
        query: {opt: "6", cmd: "8"},
        method: "POST"
      },
      orderDetail: {
        url: "http://orderapi.aolaigo.com/orderdetailapi.ashx",
        query: {opt: "6", cmd: "11"},
        method: "POST"
      },
      orderRecipt: {
        url: "http://orderapi.aolaigo.com/apporderokapi.ashx",
        query: {opt: "6", cmd: "21"},
        method: "POST"
      },
      orderCancel: {
        url: "http://orderapi.aolaigo.com/appcancelorderapi.ashx",
        query: {opt: "6", cmd: "20"},
        method: "POST"
      },
      finishOrder: {
        url: "http://orderapi.aolaigo.com/appsubmitorderpageapi.ashx",
        query: {opt: "6", cmd: "0"},
        method: "POST"
      },
      submitOrder: {
        url: "http://orderapi.aolaigo.com/appsubmiutorderapi.ashx",
        query: {opt: "6", cmd: "1"},
        method: "POST"
      },
      bundlesales: {
        url: "http://activity.aolaigo.com/handler/appactivity.ashx",
        query: {cmd: "getselectsale"},
        method: "POST"
      },
      addToList: {
        url: "http://activity.aolaigo.com/handler/command.ashx?cmd=addss",
        query: {},
        loginNeed: !0,
        method: "POST"
      },
      getList: {
        url: "http://activity.aolaigo.com/handler/command.ashx?cmd=getss",
        query: {},
        hideloaderSym: !0,
        loginNeed: !0,
        method: "POST"
      },
      deleteList: {url: "http://activity.aolaigo.com/handler/command.ashx?cmd=delss", query: {}, method: "POST"},
      addToCart: {
        url: "http://cartapi.aolaigo.com/handler/mobilecart.ashx",
        query: {opt: "5", cmd: "15"},
        method: "POST"
      },
      getShoppingCartNum: {
        url: "http://cartapi.aolaigo.com/handler/mobilecart.ashx",
        query: {opt: "5", cmd: "8"},
        hideloaderSym: !0,
        method: "POST"
      },
      shoppingCartSelectAll: {
        url: "http://cartapi.aolaigo.com/handler/mobilecart.ashx",
        query: {opt: "5", cmd: "4"},
        method: "POST"
      },
      shoppingCart: {
        url: "http://cartapi.aolaigo.com/handler/mobilecart.ashx",
        query: {opt: "5", cmd: "3"},
        method: "POST"
      },
      addShoppingCart: {
        url: "http://cartapi.aolaigo.com/handler/mobilecart.ashx",
        query: {opt: "5", cmd: "1"},
        loginNeed: !0,
        method: "POST"
      },
      deleteShoppingCart: {
        url: "http://cartapi.aolaigo.com/handler/mobilecart.ashx",
        query: {opt: "5", cmd: "10"},
        method: "POST"
      },
      selectedShoppingCart: {
        url: "http://cartapi.aolaigo.com/handler/mobilecart.ashx",
        query: {opt: "5", cmd: "4"},
        method: "POST"
      },
      deleteSelectedShoppingCart: {
        url: "http://cartapi.aolaigo.com/handler/mobilecart.ashx",
        query: {opt: "5", cmd: "6"},
        method: "POST"
      },
      addExchangeGoods: {
        url: "http://cartapi.aolaigo.com/handler/mobilecart.ashx",
        query: {opt: "5", cmd: "7"},
        method: "POST"
      },
      deleteExchangeGood: {
        url: "http://cartapi.aolaigo.com/handler/mobilecart.ashx",
        query: {opt: "5", cmd: "11"},
        method: "POST"
      },
      footUp: {url: "http://cartapi.aolaigo.com/handler/mobilecart.ashx", query: {opt: "5", cmd: "9"}, method: "POST"},
      address: {url: "http://memberapi.aolaigo.com/appmember.ashx", query: {opt: "3", cmd: "10"}, method: "POST"},
      newdelivery: {url: "http://memberapi.aolaigo.com/appmember.ashx", query: {opt: "3", cmd: "9"}, method: "POST"},
      province: {url: "http://memberapi.aolaigo.com/appmember.ashx", query: {opt: "3", cmd: "91"}, method: "POST"},
      defaultlivery: {
        url: "http://memberapi.aolaigo.com/appmember.ashx",
        query: {opt: "3", cmd: "101"},
        method: "POST"
      },
      deldelivery: {url: "http://memberapi.aolaigo.com/appmember.ashx", query: {opt: "3", cmd: "102"}, method: "POST"},
      coupon_two: {url: "http://memberapi.aolaigo.com/appmember.ashx", query: {opt: "3", cmd: "142"}, method: "POST"},
      coupon_there: {url: "http://memberapi.aolaigo.com/appmember.ashx", query: {opt: "3", cmd: "143"}, method: "POST"},
      coupon: {url: "http://memberapi.aolaigo.com/appmember.ashx", query: {opt: "3", cmd: "141"}, method: "POST"},
      c_xiangq: {url: "http://memberapi.aolaigo.com/appmember.ashx?cmd=DUPAP8BLYYIY", method: "POST"},
      clearhistory: {url: "http://memberapi.aolaigo.com/appmember.ashx", query: {opt: "7", cmd: "5"}, method: "POST"},
      collect: {url: "http://memberapi.aolaigo.com/appmember.ashx", query: {opt: "3", cmd: "12"}, method: "POST"},
      clearcollect: {
        url: "http://memberapi.aolaigo.com/appmember.ashx",
        query: {opt: "3", cmd: "13"},
        loginNeed: !0,
        method: "POST"
      },
      addfavorites: {
        url: "http://memberapi.aolaigo.com/appmember.ashx",
        query: {opt: "5", cmd: "2"},
        loginNeed: !0,
        method: "POST"
      },
      history: {url: "http://memberapi.aolaigo.com/appmember.ashx", query: {opt: "7", cmd: "2"}, method: "POST"}
    }
  }, d.htmlRoot = "http://app.aolaigo.com/", d.jsRoot = "http://skin.aolaigo.com/js/source/h5/", d.imgRoot = "http://skin01.aolaigo.com/app/images/", e.exports = d
}, function (e, a, t) {
  function n(e, a) {
    var t = (65535 & e) + (65535 & a), n = (e >> 16) + (a >> 16) + (t >> 16);
    return (n << 16 | 65535 & t) >>> 0
  }

  function r(e, a) {
    return e << a | e >>> 32 - a
  }

  function o(e, a, t, o, i, s) {
    return n(r(n(n(a, e), n(o, s)), i), t)
  }

  function i(e, a, t, n, r, i, s) {
    return o(a & t | ~a & n, e, a, r, i, s)
  }

  function s(e, a, t, n, r, i, s) {
    return o(a & n | t & ~n, e, a, r, i, s)
  }

  function l(e, a, t, n, r, i, s) {
    return o(a ^ t ^ n, e, a, r, i, s)
  }

  function p(e, a, t, n, r, i, s) {
    return o(t ^ (a | ~n), e, a, r, i, s)
  }

  function c(e, a) {
    var t, r, o, c, d, u = 1732584193, f = -271733879, m = -1732584194, h = 271733878;
    for (e[a >> 5] |= 128 << a % 32, e[(a + 64 >>> 9 << 4) + 14] = a, t = 0; t < e.length; t += 16)r = u, o = f, c = m, d = h, u = i(u, f, m, h, e[t], 7, -680876936), h = i(h, u, f, m, e[t + 1], 12, -389564586), m = i(m, h, u, f, e[t + 2], 17, 606105819), f = i(f, m, h, u, e[t + 3], 22, -1044525330), u = i(u, f, m, h, e[t + 4], 7, -176418897), h = i(h, u, f, m, e[t + 5], 12, 1200080426), m = i(m, h, u, f, e[t + 6], 17, -1473231341), f = i(f, m, h, u, e[t + 7], 22, -45705983), u = i(u, f, m, h, e[t + 8], 7, 1770035416), h = i(h, u, f, m, e[t + 9], 12, -1958414417), m = i(m, h, u, f, e[t + 10], 17, -42063), f = i(f, m, h, u, e[t + 11], 22, -1990404162), u = i(u, f, m, h, e[t + 12], 7, 1804603682), h = i(h, u, f, m, e[t + 13], 12, -40341101), m = i(m, h, u, f, e[t + 14], 17, -1502002290), f = i(f, m, h, u, e[t + 15], 22, 1236535329), u = s(u, f, m, h, e[t + 1], 5, -165796510), h = s(h, u, f, m, e[t + 6], 9, -1069501632), m = s(m, h, u, f, e[t + 11], 14, 643717713), f = s(f, m, h, u, e[t], 20, -373897302), u = s(u, f, m, h, e[t + 5], 5, -701558691), h = s(h, u, f, m, e[t + 10], 9, 38016083), m = s(m, h, u, f, e[t + 15], 14, -660478335), f = s(f, m, h, u, e[t + 4], 20, -405537848), u = s(u, f, m, h, e[t + 9], 5, 568446438), h = s(h, u, f, m, e[t + 14], 9, -1019803690), m = s(m, h, u, f, e[t + 3], 14, -187363961), f = s(f, m, h, u, e[t + 8], 20, 1163531501), u = s(u, f, m, h, e[t + 13], 5, -1444681467), h = s(h, u, f, m, e[t + 2], 9, -51403784), m = s(m, h, u, f, e[t + 7], 14, 1735328473), f = s(f, m, h, u, e[t + 12], 20, -1926607734), u = l(u, f, m, h, e[t + 5], 4, -378558), h = l(h, u, f, m, e[t + 8], 11, -2022574463), m = l(m, h, u, f, e[t + 11], 16, 1839030562), f = l(f, m, h, u, e[t + 14], 23, -35309556), u = l(u, f, m, h, e[t + 1], 4, -1530992060), h = l(h, u, f, m, e[t + 4], 11, 1272893353), m = l(m, h, u, f, e[t + 7], 16, -155497632), f = l(f, m, h, u, e[t + 10], 23, -1094730640), u = l(u, f, m, h, e[t + 13], 4, 681279174), h = l(h, u, f, m, e[t], 11, -358537222), m = l(m, h, u, f, e[t + 3], 16, -722521979), f = l(f, m, h, u, e[t + 6], 23, 76029189), u = l(u, f, m, h, e[t + 9], 4, -640364487), h = l(h, u, f, m, e[t + 12], 11, -421815835), m = l(m, h, u, f, e[t + 15], 16, 530742520), f = l(f, m, h, u, e[t + 2], 23, -995338651), u = p(u, f, m, h, e[t], 6, -198630844), h = p(h, u, f, m, e[t + 7], 10, 1126891415), m = p(m, h, u, f, e[t + 14], 15, -1416354905), f = p(f, m, h, u, e[t + 5], 21, -57434055), u = p(u, f, m, h, e[t + 12], 6, 1700485571), h = p(h, u, f, m, e[t + 3], 10, -1894986606), m = p(m, h, u, f, e[t + 10], 15, -1051523), f = p(f, m, h, u, e[t + 1], 21, -2054922799), u = p(u, f, m, h, e[t + 8], 6, 1873313359), h = p(h, u, f, m, e[t + 15], 10, -30611744), m = p(m, h, u, f, e[t + 6], 15, -1560198380), f = p(f, m, h, u, e[t + 13], 21, 1309151649), u = p(u, f, m, h, e[t + 4], 6, -145523070), h = p(h, u, f, m, e[t + 11], 10, -1120210379), m = p(m, h, u, f, e[t + 2], 15, 718787259), f = p(f, m, h, u, e[t + 9], 21, -343485551), u = n(u, r), f = n(f, o), m = n(m, c), h = n(h, d);
    return [u, f, m, h]
  }

  function d(e) {
    var a, t = "";
    for (a = 0; a < 32 * e.length; a += 8)t += String.fromCharCode(e[a >> 5] >>> a % 32 & 255);
    return t
  }

  function u(e) {
    var a, t = [];
    for (t[(e.length >> 2) - 1] = void 0, a = 0; a < t.length; a += 1)t[a] = 0;
    for (a = 0; a < 8 * e.length; a += 8)t[a >> 5] |= (255 & e.charCodeAt(a / 8)) << a % 32;
    return t
  }

  function f(e) {
    return d(c(u(e), 8 * e.length))
  }

  function m(e) {
    var a, t, n = "0123456789abcdef", r = "";
    for (t = 0; t < e.length; t += 1)a = e.charCodeAt(t), r += n.charAt(a >>> 4 & 15) + n.charAt(15 & a);
    return r
  }

  function h(e) {
    return unescape(encodeURIComponent(e))
  }

  function g(e) {
    return f(h(e))
  }

  function v(e) {
    return m(g(e))
  }

  e.exports = v
}, function (e, a, t) {
  function n() {
  }

  function r() {
  }

  function o(e) {
    window.WebViewJavascriptBridge ? e(WebViewJavascriptBridge) : document.addEventListener("WebViewJavascriptBridgeReady", function () {
      e(WebViewJavascriptBridge)
    }, !1)
  }

  function i() {
  }

  var s = Framework7.prototype.device, l = t(1), p = t(6);
  n.prototype.getNetworkType = function (e, a) {
    p.wxDebug ? a && a("wifi") : window.wx.getNetworkType({
      success: function (e) {
        var t = e.networkType;
        a && a(t)
      }
    })
  }, n.prototype._updateCartNum = function (e, a) {
    var t = this;
    new l({
      id: "getShoppingCartNum", success: function (e) {
        t.setShoppingCart && t.setShoppingCart({cartCount: e}), a && a({cartCount: e})
      }
    })
  }, n.prototype.getShoppingCarNumber = function (e, a) {
    var t = function (e) {
      a(e.cartCount)
    };
    return this._updateCartNum(e, t), !0
  }, n.prototype.getUserId = function (e, a) {
    var t = _._getLocalStorageItem("wxConfig");
    a && a(t && t.usercode || "" || "")
  }, n.prototype.getUserIdNew = function (e, a) {
    var t = _._getLocalStorageItem("wxConfig");
    a && a(t && t.usercode || "" || "")
  }, n.prototype.addShoppingCar = function (e, a) {
    var t = this;
    return new l({
      id: "addShoppingCart", query: {goodsId: e.skuId, goods_amount: e.count}, success: function (n) {
        App.f7.toast({icon: "icon-success", text: "添加购物车成功"}), t._updateCartNum(e, a)
      }
    }), !0
  }, n.prototype.addFavourite = function (e, a, t) {
    var n;
    n = e.flag ? "addfavorites" : "clearcollect", new l({
      id: n,
      query: {collect_goods_id: e.skuId},
      success: function (e) {
        "0" === e.error ? App.f7.toast({icon: "icon-success", text: e.msg}) : e.msg && App.f7.toast({
          icon: "icon-error",
          text: e.msg
        }), a && a({status: "0" === e.error}, function () {
        })
      }
    })
  };
  var c = new n;
  r.prototype._updateCartNum = function (e, a) {
    var t = this;
    new l({
      id: "getShoppingCartNum", success: function (e) {
        t.setShoppingCart && t.setShoppingCart({cartCount: e}), a && a({cartCount: e})
      }
    })
  }, r.prototype.getUserId = function (e, a) {
    var t = p.info;
    a && a(t && t.usercode || t.uid || "" || "")
  }, r.prototype.getUserIdNew = function (e, a) {
    var t = p.info;
    a && a(t && t.usercode || t.uid || "" || "")
  };
  var d = new r, u = {};
  o(function (e) {
    e.init(function (e, a) {
      console.log("已收到消息:" + e);
      var t = {message: "这是收到消息后,返回的数据"};
      a(t)
    }), e.registerHandler("handlers", function (e, a) {
      u[e.action](e.params, a)
    })
  }), i.prototype.registerHandler = function (e, a) {
    return s.webView && s.ios && !s.microMessenger ? (u[e] = a, !0) : s.webView && s.android && !s.microMessenger ? (window[e] = function (e, t) {
      a(e, function (e) {
        t && (e = JSON.stringify(e), window.android[t](e, ""))
      })
    }, !0) : s.microMessenger || p.wxDebug ? (c[e] = a, !0) : (d[e] = a, !0)
  }, i.prototype.callHandler = function (e, a, t, n, r) {
    r = "undefined" == typeof r ? !1 : r;
    var i, l = this;
    if (t = t || {}, n = n || function () {
        }, s.webView && s.ios && !s.microMessenger)return o(function (o) {
      r === !0 && (i = a + "_Async", l.registerHandler(i, n), t.callbackhandler = i, n = null), o.callHandler("handlers", {
        type: e,
        action: a,
        params: t
      }, function (e) {
        n && n.apply(this, arguments)
      })
    }), !0;
    if (s.webView && s.android && !s.microMessenger) {
      if (i = "callbackFnName" + Date.now(), n && (window[i] = function (e) {
          n.apply(this, arguments), delete window[i]
        }), t = JSON.stringify(t), "loadPage" === e)window.android.loadPage(a, t, i); else {
        if (!window.android[a])return !1;
        window.android[a](t, i)
      }
      return !0
    }
    return s.microMessenger || p.wxDebug ? c[a] ? c[a](t, n, r) : !1 : d[a] ? d[a](t, n, r) : !1
  }, i.prototype.callFn = function (e, a, t, n) {
    return this.callHandler("callFn", e, a, t, n)
  }, i.prototype.loadUrl = function (e, a, t, n, r) {
    var o = _._pageQuery(e), i = o.pageName, s = !1;
    return o.query.event_id = t || "", a && (o.query.title = a), o.query.url = e.split("?")[0], s = e.search("views/channel.html") >= 0 || e.search("views/activity.html") >= 0 || e.search("http://") >= 0 || e.search("views/crazysale.html") >= 0 || e.search("views/seckill.html") >= 0 || e.search("views/newarrivals.html") >= 0 || e.search("views/bundle-sales.html") >= 0 || e.search("views/actnest.html") >= 0 ? this.callHandler("loadPage", "activityChannel", o.query, n, r) : 0 === e.search("views/") ? this.callHandler("loadPage", i, o.query, n, r) : !1
  }, i.prototype.loadPage = function (e, a, t, n) {
    return this.callHandler("loadPage", e, a, t, n)
  }, e.exports = new i
}]);
