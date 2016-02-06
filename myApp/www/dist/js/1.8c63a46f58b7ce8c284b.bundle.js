webpackJsonp([1, 2], [, , , , , , , , , function (e, t, n) {
  function o(e) {
    return n(i(e))
  }

  function i(e) {
    return a[e] || function () {
        throw new Error("Cannot find module '" + e + "'.")
      }()
  }

  var a = {
    "./activity/c": 10,
    "./actnest/c": 12,
    "./address/c": 14,
    "./bundle-sales/c": 17,
    "./cart/c": 19,
    "./category/c": 22,
    "./channels/c": 25,
    "./collect/c": 27,
    "./cone/c": 30,
    "./coupon/c": 33,
    "./crazysale/c": 36,
    "./history/c": 38,
    "./home/c": 41,
    "./login/c": 43,
    "./member/c": 45,
    "./newarrivals/c": 47,
    "./newdelivery/c": 49,
    "./order-list/c": 52,
    "./orderDetail/c": 54,
    "./product-detail/c": 56,
    "./register/c": 58,
    "./search-list/c": 60,
    "./search/c": 62,
    "./seckill/c": 64,
    "./shoppingCart/c": 66,
    "./submitOrder/c": 68
  };
  o.keys = function () {
    return Object.keys(a)
  }, o.resolve = i, e.exports = o, o.id = 9
}, function (e, t, n) {
  function o(e, t, n) {
    new f({
      id: "activity", query: e.query, success: function (o) {
        var a = new u(o, e);
        i(e, t, a, n)
      }
    })
  }

  function i(e, t, n, o) {
    var i = r(e.container);
    if (i.attr("data-title", decodeURIComponent(e.query.title)), d._updateTitle(e), n.banners && n.banners.items && n.banners.items.length) {
      var s = r(e.container).find("#banners");
      s.html(m(t, n.banners))
    }
    if (n.products && n.products.items && n.products.items.length) {
      var u = r(e.container).find("#products");
      u.html(t.productsTpls(n.products));
      var h = r(e.container).find("#subTitles");
      h.html(t.subTitlesTpls(n.products))
    } else {
      var g = r(e.container).find("#subTitles-nav");
      g.css("height", "0px")
    }
    r(".activity").on("click", function () {
      var e, t = r(this).attr("data-ac"), n = r(this).attr("data-lt");
      if (c.webView && c.ios && !c.microMessenger || c.webView && c.android && !c.microMessenger)e = c.os, l.callFn("getUserIdNew", {}, function (o) {
        if (o) {
          var i = "{'ac':'" + t + "','lt':'" + n + "','uc':'" + o + "','os':'" + e + "'}";
          new f({
            id: "activityAction", query: {param: i, callback: ""}, success: function (e) {
              App.f7.alert(e.Message, function () {
              })
            }
          })
        } else window.App.f7.confirm("请您先登录噢~", function () {
          l.loadPage("login", {}, function () {
          })
        })
      }); else {
        e = p.info.OS;
        var o = p.info.usercode || p.info.uid || null, i = "{'ac':'" + t + "','lt':'" + n + "','uc':'" + o + "','os':'" + e + "'}";
        o ? new f({
          id: "activityAction", query: {param: i, callback: "", cbData: !0}, success: function (e) {
            "-999" != e.Code ? App.f7.alert(e.Message, function () {
            }) : window.App.f7.confirm("请您先登录噢~", function () {
              App.f7.mainView.router.load({url: "views/login.html", animatePages: !0, pushState: !0})
            })
          }
        }) : window.App.f7.confirm("请您先登录噢~", function () {
          App.f7.mainView.router.load({url: "views/login.html", animatePages: !0, pushState: !0})
        })
      }
    }), r(".addFavour").on("click", function () {
      var e = r(this).find("i"), t = r(this).attr("data-skuid"), n = e.hasClass("icon-heart-outline");
      c.webView && c.ios && !c.microMessenger || c.webView && c.android && !c.microMessenger ? l.callFn("getUserIdNew", {}, function (o) {
        var i;
        i = n ? "addfavorites" : "clearcollect", o && new f({
          id: i,
          query: {collect_goods_id: t, uid: o},
          success: function (t) {
            "0" === t.error ? (App.f7.toast({
              icon: "icon-success",
              text: t.msg
            }), n === !0 ? e.removeClass("icon-heart-outline").addClass("icon-heart-solid") : e.removeClass("icon-heart-solid").addClass("icon-heart-outline")) : t.msg && App.f7.toast({
              icon: "icon-error",
              text: t.msg
            })
          }
        })
      }) : l.callFn("addFavourite", {skuId: t, flag: n}, function (t, o) {
        t.status === !0 && (n === !0 ? e.removeClass("icon-heart-outline").addClass("icon-heart-solid") : e.removeClass("icon-heart-solid").addClass("icon-heart-outline"))
      }, !0)
    }), i.on("click", ".share", function () {
      l.callFn("share", {}, function (e) {
      })
    }), App.f7.initImagesLazyLoad(e.container), a(e, n, o)
  }

  function a(e, t, n) {
  }

  function s() {
  }

  var r = Dom7, c = (Template7, Framework7.prototype.device), l = n(8), d = n(2), u = n(11), p = n(6), f = n(1), m = function (e, t) {
    var n = "";
    if (t.items) {
      n = '<div class="row">';
      for (var o, i = 0; o = t.items[i++];)n += '<div class="col-' + t.percent + '">', n += m(e, o), n += "</div>";
      n += "</div>"
    } else n += e.bannerTpls(t);
    return n
  };
  e.exports = {init: o, pageReinit: s}
}, function (e, t, n) {
  function o(e, t) {
    this.banners = e[0] && e[0].coms && e[0].coms.length ? function (e) {
      return a(e, 1, !0, t)
    }(e[0]) : [], this.products = e[1] && e[1].coms && e[1].coms.length ? function (e) {
      return a(e, 1, !0, t)
    }(e[1]) : []
  }

  var i = (Dom7, Template7, Framework7.prototype.device, n(8), n(2)), a = function (e, t, n, o) {
    var s, r = {
      percent: "",
      title: e.comTitle && e.comTitle.split("#")[0] || "",
      stitle: e.comTitle && e.comTitle.split("#")[1] || "",
      subTitles: [],
      items: []
    };
    if (e.coms && e.coms.length) {
      n || (t *= e.coms.length);
      for (var c, l = 0; c = e.coms[l++];)r.items.push(a(c, t, !1, o)), r.subTitles.push(c.comTitle && c.comTitle.split("#")[0])
    } else if (e.cons && e.cons.length)for (var c, l = 0; c = e.cons[l++];)s = i._imgsrc(c.src, t), r.items.push(i._typeData(c, s, o));
    return "1" === e.screen_type ? r.percent = parseInt(100 / r.items.length, 10) : "0" === e.screen_type && (r.percent = 100), r
  };
  e.exports = o
}, function (e, t, n) {
  function o(e, t, n) {
    new f({
      id: "activity", query: e.query, success: function (o) {
        var a = new u(o, e);
        i(e, t, a, n)
      }
    })
  }

  function i(e, t, n, o) {
    var i = r(e.container);
    if (i.attr("data-title", decodeURIComponent(e.query.title)), d._updateTitle(e), n.banners && n.banners.items && n.banners.items.length) {
      var s = r(e.container).find("#banners");
      s.html(m(t, n.banners))
    }
    if (n.products && n.products.items && n.products.items.length) {
      var u = r(e.container).find("#products");
      u.html(t.productsTpls(n.products));
      var h = r(e.container).find("#subTitles");
      h.html(t.subTitlesTpls(n.products))
    } else {
      var g = r(e.container).find("#subTitles-nav");
      g.css("height", "0px")
    }
    r(".activity").on("click", function () {
      var e, t = r(this).attr("data-ac"), n = r(this).attr("data-lt");
      if (c.webView && c.ios && !c.microMessenger || c.webView && c.android && !c.microMessenger)e = c.os, l.callFn("getUserIdNew", {}, function (o) {
        if (o) {
          var i = "{'ac':'" + t + "','lt':'" + n + "','uc':'" + o + "','os':'" + e + "'}";
          new f({
            id: "activityAction", query: {param: i, callback: ""}, success: function (e) {
              App.f7.alert(e.Message, function () {
              })
            }
          })
        } else window.App.f7.confirm("请您先登录噢~", function () {
          l.loadPage("login", {}, function () {
          })
        })
      }); else {
        e = p.info.OS;
        var o = p.info.usercode || p.info.uid || null, i = "{'ac':'" + t + "','lt':'" + n + "','uc':'" + o + "','os':'" + e + "'}";
        o ? new f({
          id: "activityAction", query: {param: i, callback: "", cbData: !0}, success: function (e) {
            "-999" != e.Code ? App.f7.alert(e.Message, function () {
            }) : window.App.f7.confirm("请您先登录噢~", function () {
              App.f7.mainView.router.load({url: "views/login.html", animatePages: !0, pushState: !0})
            })
          }
        }) : window.App.f7.confirm("请您先登录噢~", function () {
          App.f7.mainView.router.load({url: "views/login.html", animatePages: !0, pushState: !0})
        })
      }
    }), r(".addFavour").on("click", function () {
      var e = r(this).find("i"), t = r(this).attr("data-skuid"), n = e.hasClass("icon-heart-outline");
      c.webView && c.ios && !c.microMessenger || c.webView && c.android && !c.microMessenger ? l.callFn("getUserIdNew", {}, function (o) {
        var i;
        i = n ? "addfavorites" : "clearcollect", o && new f({
          id: i,
          query: {collect_goods_id: t, uid: o},
          success: function (t) {
            "0" === t.error ? (App.f7.toast({
              icon: "icon-success",
              text: t.msg
            }), n === !0 ? e.removeClass("icon-heart-outline").addClass("icon-heart-solid") : e.removeClass("icon-heart-solid").addClass("icon-heart-outline")) : t.msg && App.f7.toast({
              icon: "icon-error",
              text: t.msg
            })
          }
        })
      }) : l.callFn("addFavourite", {skuId: t, flag: n}, function (t, o) {
        t.status === !0 && (n === !0 ? e.removeClass("icon-heart-outline").addClass("icon-heart-solid") : e.removeClass("icon-heart-solid").addClass("icon-heart-outline"))
      }, !0)
    }), i.on("click", ".share", function () {
      l.callFn("share", {}, function (e) {
      })
    }), App.f7.initImagesLazyLoad(e.container), a(e, n, o)
  }

  function a(e, t, n) {
  }

  function s() {
  }

  var r = Dom7, c = (Template7, Framework7.prototype.device), l = n(8), d = n(2), u = n(13), p = n(6), f = n(1), m = function (e, t) {
    var n = "";
    if (t.items) {
      n = '<div class="row">';
      for (var o, i = 0; o = t.items[i++];)n += '<div class="col-' + t.percent + '">', n += m(e, o), n += "</div>";
      n += "</div>"
    } else n += e.bannerTpls(t);
    return n
  };
  e.exports = {init: o, pageReinit: s}
}, function (e, t, n) {
  function o(e, t) {
    this.banners = e[0] && e[0].coms && e[0].coms.length ? function (e) {
      return a(e, 1, !0, t)
    }(e[0]) : [], this.products = e[1] && e[1].coms && e[1].coms.length ? function (e) {
      return a(e, 1, !0, t)
    }(e[1]) : []
  }

  var i = (Dom7, Template7, Framework7.prototype.device, n(8), n(2)), a = function (e, t, n, o) {
    var s, r = {
      percent: "",
      title: e.comTitle && e.comTitle.split("#")[0] || "",
      stitle: e.comTitle && e.comTitle.split("#")[1] || "",
      subTitles: [],
      items: []
    };
    if (e.coms && e.coms.length) {
      n || (t *= e.coms.length);
      for (var c, l = 0; c = e.coms[l++];)r.items.push(a(c, t, !1, o)), r.subTitles.push(c.comTitle && c.comTitle.split("#")[0])
    } else if (e.cons && e.cons.length)for (var c, l = 0; c = e.cons[l++];)s = i._imgsrc(c.src, t), r.items.push(i._typeData(c, s, o));
    return "1" === e.screen_type ? r.percent = parseInt(100 / r.items.length, 10) : "0" === e.screen_type && (r.percent = 100), r
  };
  e.exports = o
}, function (e, t, n) {
  function o(e, t, n) {
    new c({
      id: e.name, query: e.query, success: function (o) {
        var a = new r(o);
        s.render(e, t, a, i, n)
      }
    })
  }

  function i(e, t, n) {
    a(".rss-shur .rss-shanchu").on("click", function () {
      var t = this, n = a(this).attr("data-id");
      App.f7.confirm("确定要删除地址?", function () {
        new c({
          id: "deldelivery", query: {address_id: n}, success: function (t) {
            App.f7.toast({
              icon: "icon-success",
              text: t.msg
            }), 0 === a(e.container).find(".rss-shur").length && a(e.container).find(".rss-center").append('<div class="full-tips"><i class="icon-search icon-large"></i> 无收货地址！</div>')
          }
        }), a(t).parents(".rss-shur").remove()
      })
    });
    a(".rss-yes").each(function () {
      var e = a(this).attr("data-tps");
      1 == e && (a(this).addClass("rss-moren"), a(this).parents(".rss-t-r").find(".rss-duanluo").show())
    });
    a(".rss-textbox").on("click", function () {
      var t = a(this).find(".rss-yes"), n = t.attr("data-id");
      new c({
        id: "defaultlivery", query: {address_id: n}, success: function (t) {
          "0" === t.error && e.query.pageBack && App.f7.mainView.router.back()
        }
      }), a(".rss-textbox").each(function () {
        a(this).find(".rss-yes").removeClass("rss-moren"), a(this).find(".rss-duanluo").hide()
      }), t.addClass("rss-moren").nextAll(".rss-duanluo").show()
    })
  }

  var a = Dom7, s = (Template7, Framework7.prototype.device, n(8), n(2), n(15)), r = n(16), c = n(1);
  e.exports = {init: o}
}, function (e, t, n) {
  function o(e, t, n, o, a) {
    i(e.container).find("#address").html(t.adda(n)), o(e, n, a)
  }

  {
    var i = Dom7;
    Template7, Framework7.prototype.device, n(8), n(2)
  }
  e.exports = {render: o}
}, function (e, t, n) {
  function o(e) {
    this.address = e || []
  }

  Dom7, Template7, Framework7.prototype.device, n(8), n(2);
  o.prototype.setValues = function () {
  }, e.exports = o
}, function (e, t, n) {
  function o(e, t, n) {
    new g({
      id: "bundlesales", query: {actcode: e.query.actcode}, success: function (o) {
        var i = new h(o, e);
        console.log(i), e.query.bundlesalesId = e.query.actcode, p.webView && p.ios && !p.microMessenger || p.webView && p.android && !p.microMessenger ? f.callFn("getUserIdNew", {}, function (o) {
          e.query.usercode = o, a(e, t, i, n)
        }) : (e.query.usercode = v.info.uid || "", a(e, t, i, n))
      }
    }), n(function () {
      App.f7.closeModal(".product-detail-popou"), App.f7.closeModal(".bs-list")
    })
  }

  function i(e, t, n, o) {
    var i = u("#animate-logo").find("img");
    i.attr("src", n.logo), u(".product-detail-popou .popup-head").html(t.bspopupHead(n)), u(".product-detail-popou .popup-inner").html(t.bspopupCenter(n)), u(".product-detail-popou .popup-footer").html(t.bspopupFooter(n));
    var a, s = u(".skuBtn"), r = u(".pleaseChiose"), c = u("#stocks"), l = u("#price"), d = u("#buyCount"), p = u("#logo");
    s.on("click", function () {
      var e = u(this).parent("div"), t = e.find(".skuBtn"), o = u("." + e.attr("data-tip")), f = u(this).hasClass("selected"), g = e.attr("data-attr-index"), v = u(".popup-center").find(".attr:not(.attr-" + g + ")").find(".skuBtn"), y = m._checkSku(n.skus, n.attrs, []).attrs;
      if (f)u(this).removeClass("selected"), o.removeClass("display-none"), v.each(function () {
        var e = u(this).text().trim();
        -1 !== m.indexOf(y, e) && u(this).removeClass("disabled")
      }); else {
        t.removeClass("selected"), u(this).addClass("selected"), o.addClass("display-none"), v.each(function () {
          var e = u(this).text().trim();
          -1 !== m.indexOf(y, e) && u(this).removeClass("disabled")
        });
        var w = m._checkSku(n.skus, n.attrs, [u(this).text().trim()]).attrs;
        v.each(function () {
          var e = u(this).text().trim();
          -1 === m.indexOf(w, e) && u(this).addClass("disabled")
        })
      }
      var b = [];
      s.each(function () {
        u(this).hasClass("selected") && b.push(u(this).text())
      }), r.text(n.attrs.length === b.length ? "已选 “" + b.join("” “") + "”" : "请选择 "), a = m._checkSku(n.skus, n.attrs, b), h = a.skuid, l.text("" === a.price ? n.alj : a.price), p.attr("src", "" === a.logo ? n.logo : a.logo), i.attr("src", "" === a.logo ? n.logo : a.logo), a.stock < 1 ? (c.text(a.stock + "(库存不足，无法购买)"), c.addClass("color-red"), d.attr("value", 0)) : (c.text(a.stock), c.removeClass("color-red"), parseInt(d.attr("value"), 10) > a.stock ? d.attr("value", a.stock) : 0 === parseInt(d.attr("value"), 10) && d.attr("value", 1))
    }), 0 === n.status ? u(e.container).find(".addCart").addClass("disabled").text("已下架") : 0 === n.stocks && u(e.container).find(".addCart").addClass("disabled").text("已售罄"), u("#substructionBtn").on("click", function () {
      var e = parseInt(d.attr("value"), 10);
      e > 1 && d.attr("value", --e)
    }), u("#addBtn").on("click", function () {
      var e = parseInt(d.attr("value"), 10), t = a && a.stock || n.skus.stocks;
      t > e && d.attr("value", ++e)
    });
    var h = "";
    u(".product-detail-popou").on("opened", function () {
      f.callFn("updateModalStatus", {status: !0})
    }), u(".product-detail-popou").on("closed", function () {
      f.callFn("updateModalStatus", {status: !1})
    }), f.registerHandler("modal", function (e, t) {
      App.f7.closeModal()
    });
    var v = u("#cartCount");
    f.registerHandler("setShoppingCart", function (e, t) {
      v.text(e.cartCount)
    }), f.callFn("getShoppingCarNumber", {}, function (e) {
      v.text(e)
    }), u(".addList").on("click", function () {
      var t = 0 === n.attrs.length && n._skuid || h;
      actcode = e.query.bundlesalesId, "" === t ? u(this).hasClass("addCartBar") ? App.f7.popup(".product-detail-popou") : App.f7.alert("请选择颜色尺码") : new g({
        id: "addToList",
        query: {actcode: actcode, sku: t, qty: parseInt(d.attr("value"), 10), ukey: e.query.usercode || ""},
        success: function (e) {
          var t;
          "0" == e.Code && (t = !0, e.CapacityFull && (u(".bs-sub").hasClass("suc") || u(".bs-sub").addClass("suc")), App.f7.toast({
            icon: "icon-success",
            text: "已加入购物清单"
          }), App.f7.closeModal(".product-detail-popou"), u(".product-detail-popou").on("closed", function () {
            var e = u("#animate-logo"), n = u(".icon-shopping-list"), o = u(".popup")[0].offsetTop;
            t && (e.addClass("animate-logo"), e.css("top", o + "px"), e.addClass("animated zoomOutDown"), setTimeout(function () {
              setTimeout(function () {
                e.removeClass("animate-logo animated zoomOutDown")
              }, 400), n.addClass("animated bounce"), setTimeout(function () {
                n.removeClass("animated bounce")
              }, 1e3)
            }, 600), t = !1)
          }))
        }
      })
    });
    var y = u("#cart");
    y.on("click", function () {
      var e = f.loadPage("shoppingCart");
      return e ? !1 : void 0
    })
  }

  function a(e, t, n, o) {
    var i = u(e.container);
    i.attr("data-title", decodeURIComponent(e.query.title)), m._updateTitle(e);
    u(e.container).find(".page-content");
    if (u("#end").css("margin-bottom", parseInt(u(".foot-btn").css("height").split("px")[0], 10) + "px"), n.banner) {
      var a = u(e.container).find("#bs-banner");
      a.html(t.bannerTpl(n.banner))
    }
    if (n.rule) {
      var s = u(e.container).find("#rule");
      s.html(t.ruleTpl(n.rule))
    }
    if (n.prod && n.prod.length) {
      var c = u(e.container).find("#bs-prod");
      c.html(t.prodTpl(n.prod))
    }
    App.f7.initImagesLazyLoad(e.container), i.on("click", ".share", function () {
      f.callFn("share", {}, function (e) {
      })
    }), App.f7.initImagesLazyLoad(e.container), l(e), r(e, t, n, o)
  }

  function s(e, t, n, o) {
    u("#bs-popover").html(t.bspopover(n)), u(".deleteSwipeout").on("click", function () {
      var o = u(this).attr("data-skuid");
      new g({
        id: "deleteList",
        query: {actcode: e.query.bundlesalesId, ukey: e.query.usercode || "", sku: o},
        success: function (e) {
          e.CapacityFull || u(".bs-sub").hasClass("suc") && u(".bs-sub").removeClass("suc"), App.f7.toast({
            icon: "icon-success",
            text: "商品删除成功"
          }), n = new h(e, "PopOver"), u("#bs-popover").html(t.bspopover(n))
        }
      }), window.App.f7.closeModal(".bs-list")
    }), u(".confirmList").on("click", function () {
      window.App.f7.closeModal(".bs-list")
    });
    var i = u(".bs-list").find(".item-media");
    i.on("click", function () {
      var e = u(this).attr("data-pId");
      window.App.f7.closeModal(".bs-list");
      var t = u("#rule")[0], n = u("#bs-banner")[0], o = u("li[data-pId='" + e + "']")[0], i = u(".pages").find('[data-page="bundle-sales"]').find(".page-content");
      i.scrollTop(o.offsetTop + t.offsetHeight + n.offsetHeight, 300)
    })
  }

  function r(e, t, n, o) {
    u(".sale-item-btn").on("click", function () {
      new g({
        id: "product-detail", query: {skuId: this.getAttribute("data-skuid")}, success: function (n) {
          c(e);
          var a = new h(n, "Modal");
          i(e, t, a, r, o), window.App.f7.popup(".product-detail-popou")
        }
      })
    }), u(".list-btn").on("click", function () {
      c(e), new g({
        id: "getList",
        query: {actcode: e.query.bundlesalesId, sku: this.getAttribute("data-skuid"), ukey: e.query.usercode || ""},
        success: function (n) {
          var i = new h(n, "PopOver");
          s(e, t, i, o), window.App.f7.popover(".bs-list", ".list-btn")
        }
      })
    }), u(".bs-sub").on("click", function () {
      u(this).hasClass("suc") && new g({
        id: "addToCart",
        query: {act_code: e.query.bundlesalesId, uid: e.query.usercode},
        success: function (t) {
          window.App ? p.webView && p.android && !p.microMessenger ? f.callFn("getUserId", {}, function (t) {
            var n = t.split("version")[1];
            if (n) {
              var o = t.replace(/\'/g, '"'), t = JSON.parse(o);
              e.query.androidVersion = parseInt(t.version), e.query.androidVersion >= 182 ? window.App.f7.confirm("加入购物车成功，是否前往结算？", function () {
                u(".bs-sub").hasClass("suc") && u(".bs-sub").removeClass("suc"), f.loadPage("shoppingCart", {}, function () {
                })
              }) : window.App.f7.alert("加入购物车成功，请返回首页前往购物车结算！")
            } else window.App.f7.alert("加入购物车成功，请返回首页前往购物车结算！")
          }) : window.App.f7.confirm("加入购物车成功，是否前往结算？", function () {
            p.webView && p.ios && !p.microMessenger ? (u(".bs-sub").hasClass("suc") && u(".bs-sub").removeClass("suc"), f.loadPage("shoppingCart", {}, function () {
            })) : (u(".bs-sub").hasClass("suc") && u(".bs-sub").removeClass("suc"), App.f7.mainView.router.load({
              url: "views/shoppingCart.html",
              animatePages: !0,
              pushState: !0
            }))
          }) : alert("加入购物车成功，请前往购物车结算！")
        }
      })
    });
    var a = u(".pages").find('[data-page="bundle-sales"]').find(".page-content")[0], l = (document.getElementById("bs-scroll-to-top"), document.getElementById("bs-home-fixed-button"));
    p.webView && p.ios && !p.microMessenger || p.webView && p.android && !p.microMessenger || (document.getElementById("bs-home-fixed-button").style.bottom = "2.5rem"), a.onscroll = function () {
      a.scrollTop > 300 ? (l.style.webkitTransform = "translate3d(0,0,0)", l.style.transform = "translate3d(0,0,0)") : (l.style.webkitTransform = "translate3d(80px,0,0)", l.style.transform = "translate3d(80px,0,0)")
    };
    var d = u(".page-content");
    u("#bs-scroll-to-top").on("click", function () {
      d.scrollTop(0, 300)
    })
  }

  function c(e) {
    e.query.usercode || (p.webView && p.ios && !p.microMessenger || p.webView && p.android && !p.microMessenger ? f.callFn("getUserIdNew", {}, function (t) {
      e.query.usercode = t, l(e)
    }) : (e.query.usercode = v.info.uid || "", l(e)))
  }

  function l(e) {
    new g({
      id: "getList", query: {actcode: e.query.bundlesalesId, ukey: e.query.usercode || ""}, success: function (e) {
        e.CapacityFull && u(".bs-sub").addClass("suc")
      }
    })
  }

  function d() {
  }

  var u = Dom7, p = (Template7, Framework7.prototype.device), f = n(8), m = n(2), h = n(18), g = n(1), v = n(6);
  e.exports = {init: o, pageReinit: d}
}, function (e, t, n) {
  function o(e, t) {
    "Modal" != t && "PopOver" != t ? (this.banner = e ? function (e) {
      var t = {};
      return t.src = i._imgsrc(e.banner_pic, 1), t.start_time = e.start_time, t.end_time = e.end_time, t
    }(e) : [], this.rule = e ? function (e) {
      var t = {};
      return t.text = e.ad_title ? e.ad_title : e.condition || "" + e.coupon || "", t
    }(e) : [], this.end = e && e.remark ? function (e) {
      var t = {};
      return t.remark = e.remark || "", t
    }(e) : [], this.prod = e ? function (e) {
      for (var t, n, o = [], a = 0; n = e[a++];)t = i._imgsrc(n.src, 3), o.push(i._typeData(n, t));
      return o
    }(e.cons) : []) : "PopOver" != t ? (this.name = e.name || "", this.alj = e.p_in_alj || 0, this.scj = e.p_in_scj || 0, this.dis_rate = e.dis_rate || 0, this.cx_rate = e.cx_rate ? function (e) {
      for (var t, n = [], o = 0, i = e.length; i > o; o++)t = {}, t.name = e[o].name, t.content = e[o].content.split("@@"), n.push(t);
      return n
    }(e.cx_rate) : [], this.brand = e.brand || "", this.logo = i._imgsrc(e.logo, 6) || "", this.attrs = [{
      name: "颜色",
      exist: !1,
      value: {}
    }, {name: "尺码", exist: !1, value: {}}], this.skus = {}, this.attrs = function (e, t, n) {
      for (var o = 0, a = [], s = 0, r = e.length; r > s; s++) {
        var c = "___", l = e[s], d = l.Color ? l.Color.trim() : "", u = l.Size ? l.Size.trim() : "", p = l.Stock ? parseInt(l.Stock, 10) : 0, f = l.SKUID || "", m = l.Discount_Price || 0, h = i._imgsrc(l.Logo, 6);
        p > 0 && (n[d + (d && u ? c : "") + u] = {
          skuid: f,
          stock: p,
          price: m,
          attrs: [d, u],
          logo: h
        }, o += p, a = a.concat([d, u])), d && (t[0].exist = !0, t[0].value[d] = t[0].value[d] || p > 0), u && (t[1].exist = !0, t[1].value[u] = t[1].value[u] || p > 0)
      }
      n.stocks = o, n.separator = c, n.attrs = i.uniq(a);
      for (var g = [], s = 0, r = t.length; r > s; s++)t[s].exist === !0 && g.push(t[s]);
      return t = null, g
    }(e.sku, this.attrs, this.skus, this.skuSeparator), this.desc = e.desc && e.desc.length ? function (e) {
      for (var t = [], n = 0, o = e.length; o > n; n++)t.push({
        type: e[n].type,
        value: "img" === e[n].type ? i._imgsrc(e[n].value) : e[n].type
      });
      return t
    }(e.desc) : [], this.spec = e.spec && e.spec.length ? function (e) {
      for (var t = [], n = 0, o = e.length; o > n; n++)t.push({name: e[n].ShowTitle, value: e[n].ShowValue});
      return t
    }(e.spec) : [], this.startCount = 0 === e.start_count ? 1 : e.start_count, this.status = parseInt(e.status, 10), this.stocks = this.skus.stocks, this._skuid = e.sku && e.sku.length && e.sku[0].SKUID) : this.goods = e.SaleSKUs && function (e) {
        goods = [];
        for (var t = 0, n = e.length; n > t; t++)e[t] && 0 === e[t].length || goods.push({
          attr: e[t].ATTRS_DESC || "",
          amount: e[t].BuyQty || "",
          skuId: e[t].SKUID || "",
          pId: e[t].PID || "",
          img: e[t].MainPic ? i._imgsrc(e[t].MainPic, 6) : "",
          price: e[t].SALE_PRICE || 0,
          title: e[t].Product_Name || ""
        });
        return goods
      }(e.SaleSKUs) || []
  }

  var i = (Dom7, Template7, Framework7.prototype.device, n(8), n(2));
  o.prototype.setValues = function () {
  }, e.exports = o
}, function (e, t, n) {
  function o(e, t, n) {
    new c({
      id: "cartList", query: a.merge({}, e.query), success: function (o) {
        var a = new r(o);
        s.render(e, t, a, i, n)
      }
    })
  }

  function i(e, t, n) {
  }

  var a = (Dom7, Template7, Framework7.prototype.device, n(8), n(2)), s = n(20), r = n(21), c = n(1);
  e.exports = {init: o}
}, function (e, t, n) {
  function o(e, t, n, o, a) {
    i(e.container).find("#order").html(t.cart(n))
  }

  {
    var i = Dom7;
    Template7, Framework7.prototype.device, n(8), n(2)
  }
  e.exports = {render: o}
}, function (e, t, n) {
  function o(e) {
    this.order = ["a"]
  }

  Dom7, Template7, Framework7.prototype.device, n(8), n(2);
  o.prototype.setValues = function () {
  }, e.exports = o
}, function (e, t, n) {
  function o(e, t, n) {
    new c({
      id: "category", query: e.query, success: function (o) {
        var a = new r(o);
        s.render(e, t, a, i, n)
      }
    })
  }

  function i(e, t, n) {
    a(".list-block-search").on("search", function (e) {
    }), a("form").on("submit", function (t) {
      t.preventDefault();
      var n = a(e.navbarInnerContainer).find(".searchbar-input input");
      n.blur();
      var o = this.getAttribute("action"), i = n[0].value.trim();
      o && i && App.mainView.router.load({url: o + "?keyword=" + encodeURIComponent(i)})
    }), App.f7.initIndexedList(e);
    var o = a(".list-index");
    a("#brands").on("show", function () {
      o.removeClass("display-none")
    }), a("#brands").on("hide", function () {
      o.addClass("display-none")
    })
  }

  var a = Dom7, s = (Template7, Framework7.prototype.device, n(8), n(2), n(23)), r = n(24), c = n(1);
  e.exports = {init: o}
}, function (e, t, n) {
  function o(e, t, n, o, a) {
    i(e.container).find(".tab-links").html(t.left(n)), i(e.container).find(".tabs").html(t.right(n)), o(e, n, a)
  }

  {
    var i = Dom7;
    Template7, Framework7.prototype.device, n(8), n(2)
  }
  e.exports = {render: o}
}, function (e, t, n) {
  function o(e) {
    this.brands = e.Brand && function (e) {
        var t = {};
        if (e.sub && e.sub.length)for (var n, o = 0, a = e.sub.length; a > o; o++)n = i._pinyin(e.sub[o].name), t[n] || (t[n] = []), t[n].push({
          hash: e.sub[o].hash,
          name: e.sub[o].name
        });
        return t
      }(e.Brand) || {};
    var t = this.categoryName = [];
    this.category = e.Category && function (e) {
        for (var n = [], o = 0, a = e.length; a > o; o++) {
          t.push(e[o].name);
          for (var s = {name: e[o].name || "", sub: []}, r = 0, c = e[o].sub.length; c > r; r++) {
            for (var l = {
              hash: e[o].sub[r].hash || "",
              name: e[o].sub[r].name || "",
              sub: []
            }, d = 0, u = e[o].sub[r].sub.length; u > d; d++)l.sub.push({
              hash: e[o].sub[r].sub[d].hash || "",
              name: e[o].sub[r].sub[d].name || "",
              img: i._imgsrc(e[o].sub[r].sub[d].img || "", 3)
            });
            s.sub.push(l)
          }
          n.push(s)
        }
        return n
      }(e.Category) || []
  }

  var i = (Dom7, Template7, Framework7.prototype.device, n(8), n(2));
  o.prototype.setValues = function () {
  }, e.exports = o
}, function (e, t, n) {
  function o(e, t, n) {
    new d({
      id: "channel", query: e.query, success: function (o) {
        var a = new l(o);
        i(e, t, a, n)
      }
    })
  }

  function i(e, t, n, o) {
    var i = r(e.container);
    if (i.attr("data-title", decodeURIComponent(e.query.title)), c._updateTitle(e), n.links && n.links.length) {
      var s = r(e.container).find("#links");
      s.html(t.tpls(n.links))
    }
    App.f7.initImagesLazyLoad(e.container), a(e, n, o)
  }

  function a(e, t, n) {
  }

  function s() {
  }

  var r = Dom7, c = (Template7, Framework7.prototype.device, n(8), n(2)), l = n(26), d = n(1);
  e.exports = {init: o, pageReinit: s}
}, function (e, t, n) {
  function o(e) {
    this.links = e[0] && e[0].cons && e[0].cons.length ? function (e) {
      for (var t, n, o = [], a = 0; n = e[a++];)t = i._imgsrc(n.src, 3), o.push(i._typeData(n, t));
      return o
    }(e[0].cons) : []
  }

  var i = (Dom7, Template7, Framework7.prototype.device, n(8), n(2));
  e.exports = o
}, function (e, t, n) {
  function o(e, t, n) {
    new c({
      id: e.name, query: e.query, success: function (o) {
        var c = new r(o);
        if (s.render(e, t, c, i, n), null === o.data) {
          a(".icon-delete").hide();
          var l = '<div class="full-tips"><i class="icon-empty-result"></i><p>无收藏记录</p></div>';
          console.log(a(".mf-opj").length), a(".mf-opj").append(l)
        } else a(".icon-delete").show()
      }
    })
  }

  function i(e, t, n) {
    var o = 1;
    a(".mf-xingxing").on("click", function () {
      var e = a(this).parents(".mf-tyew").attr("data-sku-rd");
      o++, o % 2 == 0 ? (a(this).removeClass("xx-yanse").addClass("yy-yanse"), new c({
        id: "clearcollect",
        query: {collect_goods_id: e},
        success: function (e) {
        }
      })) : (a(this).removeClass("yy-yanse").addClass("xx-yanse"), new c({
        id: "addfavorites",
        query: {collect_goods_id: e},
        success: function (e) {
        }
      }))
    });
    var i = 1;
    a("#clearc").on("click", function () {
      if (i++, i % 2 == 0) {
        a(".delbottom").show(), a(".item-media").show(), a(this).removeClass("icon-delete"), document.getElementById("clearc").innerHTML = "完成", a(this).addClass("icons_two");
        var e = a(".mf-abjk li").length;
        console.log(e), 0 == e && a(".delbottom").hide()
      } else a(".delbottom").hide(), a(".item-media").hide(), a(this).removeClass("icons_two"), document.getElementById("clearc").innerHTML = "", a(this).addClass("icon-delete")
    }), a(".item-media").on("click", function () {
      var e = a(this).attr("data-shuzi");
      0 == e ? a(this).attr({"data-shuzi": 1}) : (a(this).attr({"data-shuzi": 0}), a(".qx_chebox").attr("checked", !1), a(".qx_chebox").prop("checked", !1));
      var t = a(".list-block li").length, n = a("div.item-media[data-shuzi='1']").length;
      t == n && (a(".qx_chebox").attr("checked", !0), a(".qx_chebox").prop("checked", !0))
    }), a(".delwarp").on("click", function () {
      var e = [];
      a("div.item-media[data-shuzi='1']").each(function () {
        e.push(a(this).attr("data-skub"))
      }), 0 != e.length && App.f7.confirm("确认删除所选收藏信息吗?", function () {
        new c({
          id: "clearcollect", query: {collect_goods_id: e}, success: function (t) {
            for (var n in e) {
              a("#" + e[n]).remove();
              var o = a(".mf-abjk li").length;
              if (0 == o) {
                var i = '<div class="full-tips"><i class="icon-empty-result"></i><a href="/server/www/html/home.html">去首页逛逛</a></div>';
                a(".mf-opj").append(i), a(".delbottom").hide()
              }
            }
          }
        })
      })
    }), a(".qx_close").on("click", function () {
      var e = a(this).children("input:checked").length;
      1 == e ? (a(".item-media").attr({"data-shuzi": 1}), a(".more").attr("checked", !0), a(".more").prop("checked", !0)) : (a(".item-media").attr({"data-shuzi": 0}), a(".more").attr("checked", !1), a(".more").prop("checked", !1))
    })
  }

  var a = Dom7, s = (Template7, Framework7.prototype.device, n(8), n(2), n(28)), r = n(29), c = n(1);
  e.exports = {init: o}
}, function (e, t, n) {
  function o(e, t, n, o, a) {
    i(e.container).find("#collect").html(t.coll(n)), o(e, n, a)
  }

  {
    var i = Dom7;
    Template7, Framework7.prototype.device, n(8), n(2)
  }
  e.exports = {render: o}
}, function (e, t, n) {
  function o(e) {
    null !== e.data && (this.collect = e, r.each(e, function (e, t) {
      t.collect_goods_img = i(t.collect_goods_img, "=500x500")
    }))
  }

  function i(e, t) {
    return "String" == s(t) && (e = a(e, t, e.lastIndexOf("."))), e.toLowerCase().indexOf("http://") >= 0 ? e : "http://img1.aolaigo.com/group1/" + e
  }

  function a(e, t, n) {
    return e.substring(0, n) + t + e.substring(n)
  }

  function s(e) {
    return Object.prototype.toString.call(e).slice(8, -1)
  }

  {
    var r = Dom7;
    Template7, Framework7.prototype.device, n(8), n(2)
  }
  o.prototype.setValues = function () {
  }, e.exports = o
}, function (e, t, n) {
  function o(e, t, n) {
    var o = localStorage.getItem && JSON.parse(localStorage.getItem && localStorage.getItem("coupon")), r = o.use_channels.join(",");
    "2" == r ? o.use_channelsL = "APP" : "1" == r ? o.use_channels = "PC" : "3" == r ? o.use_channels = "线下" : "1,2" == r ? o.use_channels = "APP,PC" : "1,3" == r ? o.use_channels = "PC,线下" : "2,3" == r && (o.use_channels = "APP,线下"), a("#succson").removeAttr("class"), s.render(e, t, o, i, n), "现金券" == o.coupon_type ? (a(e.container).find(".man-hed").css("background", "#f576ab"), a(e.container).find("#succson").attr({"class": "icon-cash-coupons ty-xianjian ty-xjin-yse"})) : (a(e.container).find(".man-hed").css("background", "#fca845"), a(e.container).find("#succson").attr({"class": "icon-discount-coupons ty-xianjian ty-y-se"})), 2 == o.status && (a(".man-hed").css("background", "#cbcbcb"), a(e.container).find("#succson").css("color", "#cbcbcb"))
  }

  function i(e, t, n) {
  }

  {
    var a = Dom7, s = (Template7, Framework7.prototype.device, n(8), n(2), n(31));
    n(32), n(1)
  }
  e.exports = {init: o}
}, function (e, t, n) {
  function o(e, t, n, o, a) {
    i(e.container).find("#cone").html(t.cp(n)), o(e, n, a)
  }

  {
    var i = Dom7;
    Template7, Framework7.prototype.device, n(8), n(2)
  }
  e.exports = {render: o}
}, function (e, t, n) {
  function o(e) {
  }

  Dom7, Template7, Framework7.prototype.device, n(8), n(2);
  o.prototype.setValues = function () {
  }, e.exports = o
}, function (e, t, n) {
  function o(e, t, n) {
    new d({
      id: e.name, query: "", success: function (o) {
        var i = new l(o);
        if (c.render(e, t, i, s, n), null === o.data) {
          var a = '<div class="full-tips"><i class="icon-empty-result"></i><a href="/server/www/html/home.html">去首页逛逛</a></div>';
          r("#tab1").append(a)
        }
      }
    })
  }

  function a(e) {
    for (var t = [], n = document.getElementsByTagName("*"), o = 0; o < n.length; o++)for (var i = n[o].className.split(/\s+/), a = 0; a < i.length; a++)i[a] == e && t.push(n[o]);
    return t
  }

  function s(e, t, n) {
    r("#tab1 li a").on("click", function () {
      var e = r(this).attr("data-coupon");
      for (var n in t.coupon)if (t.coupon[n].coupon_code == e) {
        var o = t.coupon[n];
        o.status = "1", localStorage.setItem("coupon", JSON.stringify(o));
        break
      }
      App.f7.mainView.router.loadPage("views/cone.html")
    });
    var o = a("ty-trapezoid-one");
    for (i = 0; i < o.length; i++) {
      var s = o[i].innerHTML;
      "2" == s ? o[i].innerHTML = "APP" : "1" == s ? o[i].innerHTML = "PC" : "3" == s ? o[i].innerHTML = "线下" : "1,2" == s ? o[i].innerHTML = "APP,PC" : "1,3" == s ? o[i].innerHTML = "PC,线下" : "2,3" == s && (o[i].innerHTML = "APP,线下")
    }
    var c = a("teshu");
    for (i = 0; i < c.length; i++) {
      var l = c[i].innerHTML;
      "现金券" == l ? (c[i].parentNode.parentNode.parentNode.className = "ty-bg-od", c[i].parentNode.firstChild.className = "icon-cash-coupons ty-xianjian ty-xjin-yse") : (c[i].parentNode.parentNode.parentNode.className = "ty-bg-two", c[i].parentNode.firstChild.className = "icon-discount-coupons ty-xianjian ty-y-se")
    }
    r("#t_two").on("click", function () {
      new d({
        id: "coupon_two", query: "", success: function (e) {
          if (r("#tab2").html(""), null === e.data) {
            var t = '<div class="full-tips "><i class="icon-empty-result"></i><a href="/server/www/html/home.html">去首页逛逛</a></div>';
            r("#tab2").append(t)
          } else r.each(e, function (t, n) {
            var o = '<li class="ty-bg-sad" data-zbdi="1"><a href="#" data-couponone=' + n.coupon_code + '><div class="ty-lghf"><i  class="ty-youhui ty-two-jinse"></i><span class="span2 teshu1">' + n.coupon_type + '</span></div><div class="ty-rgfo"><p>¥' + n.denomination + "</p><p>" + n.range_type_text + '</p></div><div class="ty-trapezoid ty-trapezoid-two">' + n.use_channels + "</div></a></li>";
            r("#tab2").append(o);
            var s = a("ty-trapezoid-two");
            for (i = 0; i < s.length; i++) {
              var c = s[i].innerHTML;
              "2" == c ? s[i].innerHTML = "APP" : "1" == c ? s[i].innerHTML = "PC" : "3" == c ? s[i].innerHTML = "线下" : "1,2" == c ? s[i].innerHTML = "APP,PC" : "1,3" == c ? s[i].innerHTML = "PC,线下" : "2,3" == c && (s[i].innerHTML = "APP,线下")
            }
            var l = a("teshu1");
            for (i = 0; i < l.length; i++) {
              var d = l[i].innerHTML;
              l[i].parentNode.firstChild.className = "现金券" == d ? "icon-cash-coupons ty-xianjian ty-two-jinse" : "icon-discount-coupons ty-xianjian ty-two-jinse"
            }
            r("#tab2 li a").on("click", function () {
              var t = r(this).attr("data-couponone");
              for (var n in e)if (e[n].coupon_code == t) {
                var o = e[n];
                o.status = "2", localStorage.setItem("coupon", JSON.stringify(o));
                break
              }
              App.f7.mainView.router.loadPage("views/cone.html")
            })
          })
        }
      })
    }), r("#t_there").on("click", function () {
      new d({
        id: "coupon_there", query: "", success: function (e) {
          if (r("#tab3").html(""), null === e.data) {
            var t = '<div class="full-tips"><i class="icon-empty-result"></i><a href="/server/www/html/home.html">去首页逛逛</a></div>';
            r("#tab3").append(t)
          } else r.each(e, function (t, n) {
            var o = '<li class="ty-bg-sad"><a href="#" data-couponone=' + n.coupon_code + '><div class="ty-lghf"><i  class="ty-youhui ty-two-jinse"></i><span class="span2 teshu1">' + n.coupon_type + '</span></div><div class="ty-rgfo"><p>¥' + n.denomination + "</p><p>" + n.range_type_text + '</p></div><div class="ty-trapezoid ty-trapezoid-there">' + n.use_channels + "</div></a></li>";
            r("#tab3").append(o);
            var s = a("ty-trapezoid-there");
            for (i = 0; i < s.length; i++) {
              var c = s[i].innerHTML;
              "2" == c ? s[i].innerHTML = "APP" : "1" == c ? s[i].innerHTML = "PC" : "3" == c ? s[i].innerHTML = "线下" : "1,2" == c ? s[i].innerHTML = "APP,PC" : "1,3" == c ? s[i].innerHTML = "PC,线下" : "2,3" == c && (s[i].innerHTML = "APP,线下")
            }
            var l = a("teshu1");
            for (i = 0; i < l.length; i++) {
              var d = l[i].innerHTML;
              l[i].parentNode.firstChild.className = "现金券" == d ? "icon-cash-coupons ty-xianjian ty-two-jinse" : "icon-discount-coupons ty-xianjian ty-two-jinse"
            }
            r("#tab3 li a").on("click", function () {
              var t = r(this).attr("data-couponone");
              for (var n in e)if (e[n].coupon_code == t) {
                var o = e[n];
                o.status = "2", localStorage.setItem("coupon", JSON.stringify(o));
                break
              }
              App.f7.mainView.router.loadPage("views/cone.html")
            })
          })
        }
      })
    })
  }

  var r = Dom7, c = (Template7, Framework7.prototype.device, n(8), n(2), n(34)), l = n(35), d = n(1);
  e.exports = {init: o}
}, function (e, t, n) {
  function o(e, t, n, o, a) {
    i(e.container).find("#coupon").html(t.co(n)), o(e, n, a)
  }

  {
    var i = Dom7;
    Template7, Framework7.prototype.device, n(8), n(2)
  }
  e.exports = {render: o}
}, function (e, t, n) {
  function o(e) {
    null !== e.data && (this.coupon = e)
  }

  Dom7, Template7, Framework7.prototype.device, n(8), n(2);
  o.prototype.setValues = function () {
  }, e.exports = o
}, function (e, t, n) {
  function o(e, t, n) {
    new f({
      id: "activity", query: e.query, success: function (o) {
        var a = new u(o, e);
        i(e, t, a, n)
      }
    })
  }

  function i(e, t, n, o) {
    var i = r(e.container);
    if (i.attr("data-title", decodeURIComponent(e.query.title)), d._updateTitle(e), n.banners && n.banners.items && n.banners.items.length) {
      var s = r(e.container).find("#cs-banners");
      s.html(m(t, n.banners))
    }
    if (n.products && n.products.items && n.products.items.length) {
      var u = r(e.container).find("#cs-products");
      u.html(t.csproductsTpls(n.products));
      var h = r(e.container).find("#cs-subTitles");
      h.html(t.cssubTitlesTpls(n.products))
    } else {
      var g = r(e.container).find("#cs-subTitles-nav");
      g.css("height", "0px")
    }
    r(".activity").on("click", function () {
      var e, t = r(this).attr("data-ac"), n = r(this).attr("data-lt");
      if (c.webView && c.ios && !c.microMessenger || c.webView && c.android && !c.microMessenger)e = c.os, l.callFn("getUserIdNew", {}, function (o) {
        if (o) {
          var i = "{'ac':'" + t + "','lt':'" + n + "','uc':'" + o + "','os':'" + e + "'}";
          new f({
            id: "activityAction", query: {param: i, callback: ""}, success: function (e) {
              App.f7.alert(e.Message, function () {
              })
            }
          })
        } else window.App.f7.confirm("请您先登录噢~", function () {
          l.loadPage("login", {}, function () {
          })
        })
      }); else {
        e = p.info.OS;
        var o = p.info.usercode || p.info.uid || null, i = "{'ac':'" + t + "','lt':'" + n + "','uc':'" + o + "','os':'" + e + "'}";
        o ? new f({
          id: "activityAction", query: {param: i, callback: "", cbData: !0}, success: function (e) {
            "-999" != e.Code ? App.f7.alert(e.Message, function () {
            }) : window.App.f7.confirm("请您先登录噢~", function () {
              App.f7.mainView.router.load({url: "views/login.html", animatePages: !0, pushState: !0})
            })
          }
        }) : window.App.f7.confirm("请您先登录噢~", function () {
          App.f7.mainView.router.load({url: "views/login.html", animatePages: !0, pushState: !0})
        })
      }
    }), r(".addFavour").on("click", function () {
      var e = r(this).find("i"), t = r(this).attr("data-skuid"), n = e.hasClass("icon-heart-outline");
      c.webView && c.ios && !c.microMessenger || c.webView && c.android && !c.microMessenger ? l.callFn("getUserIdNew", {}, function (o) {
        var i;
        i = n ? "addfavorites" : "clearcollect", o && new f({
          id: i,
          query: {collect_goods_id: t, uid: o},
          success: function (t) {
            "0" === t.error ? (App.f7.toast({
              icon: "icon-success",
              text: t.msg
            }), n === !0 ? e.removeClass("icon-heart-outline").addClass("icon-heart-solid") : e.removeClass("icon-heart-solid").addClass("icon-heart-outline")) : t.msg && App.f7.toast({
              icon: "icon-error",
              text: t.msg
            })
          }
        })
      }) : l.callFn("addFavourite", {skuId: t, flag: n}, function (t, o) {
        t.status === !0 && (n === !0 ? e.removeClass("icon-heart-outline").addClass("icon-heart-solid") : e.removeClass("icon-heart-solid").addClass("icon-heart-outline"))
      }, !0)
    }), i.on("click", ".share", function () {
      l.callFn("share", {}, function (e) {
      })
    }), App.f7.initImagesLazyLoad(e.container), a(e, n, o)
  }

  function a(e, t, n) {
  }

  function s() {
  }

  var r = Dom7, c = (Template7, Framework7.prototype.device), l = n(8), d = n(2), u = n(37), p = n(6), f = n(1), m = function (e, t) {
    var n = "";
    if (t.items) {
      n = '<div class="row">';
      for (var o, i = 0; o = t.items[i++];)n += '<div class="col-' + t.percent + '">', n += m(e, o), n += "</div>";
      n += "</div>"
    } else n += e.csbannerTpls(t);
    return n
  };
  e.exports = {init: o, pageReinit: s}
}, function (e, t, n) {
  function o(e, t) {
    this.banners = e[0] && e[0].coms && e[0].coms.length ? function (e) {
      return a(e, 1, !0, t)
    }(e[0]) : [], this.products = e[1] && e[1].coms && e[1].coms.length ? function (e) {
      return a(e, 1, !0, t)
    }(e[1]) : []
  }

  var i = (Dom7, Template7, Framework7.prototype.device, n(8), n(2)), a = function (e, t, n, o) {
    var s, r = {
      percent: "",
      title: e.comTitle && e.comTitle.split("#")[0] || "",
      stitle: e.comTitle && e.comTitle.split("#")[1] || "",
      subTitles: [],
      items: []
    };
    if (e.coms && e.coms.length) {
      n || (t *= e.coms.length);
      for (var c, l = 0; c = e.coms[l++];)r.items.push(a(c, t, !1, o)), r.subTitles.push(c.comTitle && c.comTitle.split("#")[0])
    } else if (e.cons && e.cons.length)for (var c, l = 0; c = e.cons[l++];)s = i._imgsrc(c.src, t), r.items.push(i._typeData(c, s, o));
    return "1" === e.screen_type ? r.percent = parseInt(100 / r.items.length, 10) : "0" === e.screen_type && (r.percent = 100), r
  };
  e.exports = o
}, function (e, t, n) {
  function o(e, t, n) {
    new c({
      id: e.name, query: e.query, success: function (o) {
        var c = new r(o);
        if (s.render(e, t, c, i, n), null === o.data) {
          a(".icon-delete").hide();
          var l = '<div class="full-tips"><i class="icon-empty-result"></i><p>无浏览记录</p></div>';
          a(".mf-opj").append(l)
        } else a(".icon-delete").show()
      }
    })
  }

  function i(e, t, n) {
    a(".clearh").on("click", function () {
      App.f7.confirm("是否清空所有浏览历史?", function () {
        a(".mf-opj").html(""), new c({
          id: "clearhistory", query: "", success: function (e) {
          }
        });
        var e = '<div class="full-tips"><i class="icon-empty-result"></i><p>无浏览记录</p></div>';
        a(".mf-opj").append(e), a(".icon-delete").hide()
      })
    })
  }

  var a = Dom7, s = (Template7, Framework7.prototype.device, n(8), n(2), n(39)), r = n(40), c = n(1);
  e.exports = {init: o}
}, function (e, t, n) {
  function o(e, t, n, o, a) {
    i(e.container).find("#history").html(t.his(n)), o(e, n, a)
  }

  {
    var i = Dom7;
    Template7, Framework7.prototype.device, n(8), n(2)
  }
  e.exports = {render: o}
}, function (e, t, n) {
  function o(e) {
    this.history = e.data, r.each(e.data, function (e, t) {
      t.product_image = i(t.product_image, "=500x500"), console.log(t.product_image)
    })
  }

  function i(e, t) {
    return "String" == s(t) && (e = a(e, t, e.lastIndexOf("."))), e.toLowerCase().indexOf("http://") >= 0 ? e : "http://img1.aolaigo.com/group1/" + e
  }

  function a(e, t, n) {
    return e.substring(0, n) + t + e.substring(n)
  }

  function s(e) {
    return Object.prototype.toString.call(e).slice(8, -1)
  }

  {
    var r = Dom7;
    Template7, Framework7.prototype.device, n(8), n(2)
  }
  o.prototype.setValues = function () {
  }, e.exports = o
}, function (t, n, o) {
  function i(t, n) {
    g(t);
    var o;
    if (o = "wlan" === A.sourcesType ? 95 : 97, x.microMessenger) {
      k && clearInterval(k), w && clearInterval(w);
      var i, a, c;
      localStorage && localStorage.getItem && (i = localStorage.getItem("homeJSON") || null, a = localStorage.getItem("homeVersion") || null, c = q, i && a === c && d(t, n, JSON.parse(i), p, y)), new S({
        id: "home",
        global: !1,
        query: {id: o},
        success: function (l) {
          _ = l.time;
          var u, m = l.data, h = m, l = new M(m);
          if (h = new M(h), u = l.e || null, e = l.i || null, localStorage && localStorage.getItem) {
            for (var g = 0; g < h.e.length; g++)h.e[g].seconds = "0";
            for (var g = 0; g < h.i.length; g++)h.i[g].seconds = "0";
            var v = JSON.stringify(h);
            i !== v || a !== c ? (localStorage.setItem("homeJSON", v), localStorage.setItem("homeVersion", c), console.log("homeVersion:" + localStorage.getItem("homeVersion")), d(t, n, h, p, y), s(e), w = r(t, u, n), k = setInterval(function () {
              new S({
                id: "homeRefresh", global: !1, query: {id: o}, success: function (e) {
                  _ < e.Obj && f()
                }
              })
            }, 6e4)) : (s(e), w = r(t, u, n), k = setInterval(function () {
              new S({
                id: "homeRefresh", global: !1, query: {id: o}, success: function (e) {
                  _ < e.Obj && f()
                }
              })
            }, 6e4))
          } else d(t, n, h, p, y), s(e), w = r(t, u, n), k = setInterval(function () {
            new S({
              id: "homeRefresh", global: !1, query: {id: o}, success: function (e) {
                _ < e.Obj && f()
              }
            })
          }, 6e4)
        }
      })
    } else k && clearInterval(k), w && clearInterval(w), new S({
      id: "home",
      global: !1,
      query: {id: o},
      success: function (i) {
        _ = i.time;
        var a, c = i.data, l = c, i = new M(c);
        l = new M(l), a = i.e, e = i.i;
        for (var u = 0; u < l.e.length; u++)l.e[u].seconds = "0";
        for (var u = 0; u < l.i.length; u++)l.i[u].seconds = "0";
        JSON.stringify(l);
        d(t, n, l, p, y), s(e), 0 !== a.isShow && (w = r(t, a, n)), k = setInterval(function () {
          new S({
            id: "homeRefresh", global: !1, query: {id: o}, success: function (e) {
              _ < e.Obj && f()
            }
          })
        }, 6e4)
      }
    });
    var l = C(t.container).find(".page-content");
    if (l.css("padding-bottom", "0"), !(x.webView && x.ios && !x.microMessenger || x.webView && x.android && !x.microMessenger)) {
      var l = C(t.container).find(".page-content");
      l.css("padding-bottom", "2.216rem"), u()
    }
  }

  function a(e, t) {
    var n;
    n = "wlan" === A.sourcesType ? 329 : 184;
    C(e.container).find(".page-content");
    new S({
      id: "quietOne", global: !1, query: {id: n}, success: function (n) {
        var o = new M(n, "e");
        o && o.e && o.e[0] && o.e[0].seconds && o.e[0].seconds > 0 ? (w && clearInterval(w), w = r(e, o.e, t)) : b = setTimeout(function () {
          a(e, t)
        }, 1e4)
      }
    })
  }

  function s(e) {
    var t = document.getElementsByClassName("Etime");
    if (t)for (var n = 0; n < t.length; n++)e[n].seconds && (t[n].innerHTML = c(e[n].seconds))
  }

  function r(e, t, n) {
    if (t && t[0]) {
      if (w && clearInterval("beforeCountClear:" + w), t && t.length) {
        var o = C(e.container).find("#e");
        o.html(n.eTpl(t));
        var i = C(e.container).find("#count-down");
        "1" == t[0].status ? i.hasClass("wait-bc") && i.removeClass("wait-bc") : i.hasClass("wait-bc") || i.addClass("wait-bc"), clock = t[0].seconds, clockID = setInterval(function () {
          clock--, clock < 0 ? (clearInterval(clockID), setTimeout(function () {
            a(e, n)
          }, 1e3)) : document.getElementById("count-down").innerHTML = l(clock)
        }, 1e3)
      }
      return clockID
    }
    return null
  }

  function c(e) {
    var t = Math.floor(parseInt(e) / 86400), n = Math.floor(parseInt(e) % 86400 / 3600), o = '<b class="icon-clock"></b>' + t + "天" + n + "时";
    return o
  }

  function l(e) {
    function t(e) {
      return 10 > e && (e = "0" + e), e
    }

    var n = parseInt(e), o = t(Math.floor(n / 3600)), i = n % 3600, a = t(Math.floor(i / 60)), s = i % 60, r = t(Math.round(s));
    if (n >= 0)var c = "<span>" + o + "</span>:<span>" + a + "</span>:<span>" + r + "</span>"; else var c = "<span>00</span>:<span>00</span>:<span>00</span>";
    return c
  }

  function d(e, t, n, o, i) {
    var a = C(e.container).find(".page-content");
    if (C("html").hasClass("not-css-calc") && a.hasClass("pull-to-refresh-no-navbar") && a.css("height", parseInt(a.css("height").split("px")[0], 10) + 44 + "px"), n.a && n.a.length) {
      var s = function (e) {
        for (var n = [], o = 0; o < e.length; o++)n.push(t.swiperTpl(e[o]));
        return n
      }(n.a), r = App.f7.swiper(".swiper-container-a", {
        direction: "horizontal",
        speed: 400,
        autoplay: 4e3,
        autoplayDisableOnInteraction: !1,
        pagination: ".swiper-pagination",
        paginationhide: !1,
        lazyLoading: !0,
        preloadImages: !1
      });
      r.removeAllSlides(), r.appendSlide(s), r.autoplaying || r.startAutoplay()
    }
    if (n.b && n.b.length) {
      var c = C(e.container).find("#b");
      c.html(t.bTpl(n.b))
    }
    if (n.c && n.c.length) {
      var s = function (e) {
        for (var n = [], o = 0; o < e.length; o++)n.push(t.cTpl(e[o]));
        return n
      }(n.c), r = App.f7.swiper(".swiper-container-c", {
        direction: "vertical",
        speed: 300,
        autoplay: 3e3,
        autoplayDisableOnInteraction: !1,
        paginationhide: !0,
        spaceBetween: 30,
        loop: !0
      });
      r.removeAllSlides(), r.appendSlide(s), r.autoplaying || r.startAutoplay()
    }
    if (n.d && n.d.length) {
      var l = C(e.container).find("#d");
      l.html(t.dTpl(n.d))
    }
    if (n.e && n.e.length) {
      var d = C(e.container).find("#e");
      d.html(t.eTpl(n.e))
    }
    if (n.f && n.f.length) {
      var u = C(e.container).find("#f1");
      u.html(t.f1Tpl(n.f[0]));
      var p = C(e.container).find("#f2");
      p.html(t.f2Tpl(n.f[1]))
    }
    if (n.g && n.g.length) {
      var f = C(e.container).find("#g");
      f.html(t.gTpl(n.g))
    }
    if (n.h && n.h.length) {
      var m = C(e.container).find("#h1");
      m.html(t.h1Tpl(n.h));
      var h = C(e.container).find("#h2");
      h.html(t.h2Tpl(n.h))
    }
    if (n.i && n.i.length) {
      var g = C(e.container).find("#i");
      g.html(t.iTpl(n.i))
    }
    if (n.j && n.j.length) {
      var v = C(e.container).find("#j");
      v.html(t.jTpl(n.j))
    }
    if (n.l && n.l.length) {
      var y = C(e.container).find("#l");
      y.html(t.lTpl(n.l))
    }
    if (App.f7.initImagesLazyLoad(e.container), n.k && n.k.length) {
      var w = C(e.container).find("#k"), b = document.getElementById("recommend"), _ = document.getElementById("loading"), e = document.getElementsByClassName("page-content")[0];
      w.html(t.kTpl(n.k)), document.getElementById("k-bk").style.display = "none", b.style.display = "block"
    } else n.k && n.k.length || (document.getElementById("k-bk").style.display = "none", document.getElementById("recommend").style.display = "none");
    o(e, n, i), document.getElementById("home-fixed-button").style.display = "block", x.webView && x.ios && !x.microMessenger || x.webView && x.android && !x.microMessenger || (document.getElementById("home-fixed-button").style.bottom = "2.5rem", document.getElementById("phone").style.visibility = "visible", C(e.container).find("#phone").on("click", function () {
      var e = C(this).attr("data-phone-number");
      return window.location.href = "tel://" + e, !1
    })), C(".addFavour").on("click", function () {
      var e = C(this).find("i"), t = C(this).attr("data-skuid"), n = e.hasClass("icon-heart-outline");
      x.webView && x.ios && !x.microMessenger || x.webView && x.android && !x.microMessenger ? T.callFn("getUserIdNew", {}, function (o) {
        var i;
        i = n ? "addfavorites" : "clearcollect", o && new S({
          id: i,
          query: {collect_goods_id: t, uid: o},
          success: function (t) {
            "0" === t.error ? (App.f7.toast({
              icon: "icon-success",
              text: t.msg
            }), n === !0 ? e.removeClass("icon-heart-outline").addClass("icon-heart-solid") : e.removeClass("icon-heart-solid").addClass("icon-heart-outline")) : t.msg && App.f7.toast({
              icon: "icon-error",
              text: t.msg
            })
          }
        })
      }) : T.callFn("addFavourite", {skuId: t, flag: n}, function (t, o) {
        t.status === !0 && (n === !0 ? e.removeClass("icon-heart-outline").addClass("icon-heart-solid") : e.removeClass("icon-heart-solid").addClass("icon-heart-outline"))
      }, !0)
    });
    var k = C("#home-page-content"), I = (document.getElementById("scroll-to-top"), document.getElementById("home-fixed-button")), b = document.getElementById("bottom-tag"), _ = document.getElementById("loading"), A = "0";
    k.on("scroll", function () {
      k[0].scrollTop > 300 ? (I.style.webkitTransform = "translate3d(0,0,0)", I.style.transform = "translate3d(0,0,0)") : (I.style.webkitTransform = "translate3d(80px,0,0)", I.style.transform = "translate3d(80px,0,0)"), n.k && n.k.length && "0" == A && k[0].scrollTop >= b.offsetTop + b.offsetHeight - document.body.clientHeight - 30 && (_.style.display = "block", setTimeout(function () {
        A = "1", _.style.display = "none", document.getElementById("k-bk").style.display = "block"
      }, 400))
    });
    var M = C(".page-content");
    C("#scroll-to-top").on("click", function () {
      M.scrollTop(0, 300)
    }), "4" == C(".category").attr("data-Type") && C(".category").on("click", function () {
      x.webView && x.ios && !x.microMessenger || x.webView && x.android && !x.microMessenger ? T.loadPage("category", {}, function () {
      }) : App.f7.mainView.router.load({url: "views/category.html", animatePages: !0, pushState: !0})
    })
  }

  function u() {
    var e = document.getElementById("memberbtn") || null;
    if (!A.info.uid && e)e.setAttribute("href", "views/login.html"); else {
      if (!e)return null;
      e.setAttribute("href", "views/member.html")
    }
  }

  function p(e, t, n) {
    C(".pull-to-refresh-content").on("refresh", function (e) {
      f()
    }), m(), x.webView && x.ios && !x.microMessenger || x.webView && x.android && !x.microMessenger || u()
  }

  function f() {
    w && clearInterval(w), k && clearInterval(k), b && clearTimeout(b), setTimeout(function () {
      App.mainView.router.load({url: A.templates.home, animatePages: !1, pushState: !1, ignoreCache: !0, reload: !0})
    }, 0)
  }

  function m() {
    new S({
      id: "getShoppingCartNum", success: function (e) {
        C("#cartNum").html(e)
      }
    })
  }

  function h(e, t) {
    if (t += "-1", "0" == e)var n = '<div style="font-size:0.55rem; line-height:1rem; color:#333; margin-bottom:0.2rem;"><i class="icon-success" style="font-size:2.1rem;color:rgba(0, 122, 255, 0.7);margin:0.35rem;"></i></br><span style="font-size:0.8rem;line-height:1.2rem;display:block;margin-bottom:0.6rem;">支付成功</span>您的订单已支付成功, </br>将尽快为您安排发货！</div>', o = [{
      text: "继续选购",
      close: !0
    }, {
      text: "查看订单", onClick: function () {
        w && clearInterval(w), App.f7.mainView.router.load({
          url: "views/order-detail.html?orderId=" + t,
          animatePages: !0,
          pushState: !0
        })
      }
    }]; else var n = '<div style="font-size:0.55rem; line-height:1rem; color:#333; margin-bottom:0.2rem;"><i class="icon-error" style="font-size:2.1rem;color:rgb(251, 103, 56);margin:0.35rem;"></i></br><span style="font-size:0.8rem;line-height:1.2rem;display:block;margin-bottom:0.6rem;">支付失败</span>您的订单支付不成功, </br>请查看订单重新支付！</div>', o = [{
      text: "放弃支付",
      close: !0
    }, {
      text: "查看订单", onClick: function () {
        w && clearInterval(w), App.f7.mainView.router.load({
          url: "views/order-detail.html?orderId=" + t,
          animatePages: !0,
          pushState: !0
        })
      }
    }];
    window.App.f7.modal({afterText: n, buttons: o})
  }

  function g(e) {
    if (e.query && e.query.calltype) {
      if ("rss" == e.query.calltype)window.App.f7.modal({
        text: "欢迎光临奥莱购",
        afterText: '<div style="font-size:0.53rem; line-height:0.8rem; color:#333; margin:0.2rem 0.8rem;">请您下载app"奥莱购"，或关注公众号"华盛奥特莱斯购物中心"，享受更完美的购物体验！</div>',
        buttons: [{text: "我知道啦", close: !0}]
      }); else if ("paycb" == e.query.calltype) {
        var t, n = e.query.order_code, o = e.query.paytype;
        t = x.microMessenger && !e.query.auth ? "publish" !== A.packEnv && "test" !== A.packEnv ? "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb8d285b01e42ae66&redirect_uri=http%3A%2F%2Fcarvinlo.oicp.net%2Fapp%2Findex-app.html%3ffixStart=fixed%23!views/home.html%3Fcalltype%3Dpaycb%26payType%3D" + o + "%26order_code%3D" + n + "%26auth%3D1%3ffixEnd=fixed&response_type=code&scope=snsapi_base&state=base#wechat_redirect" : "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxab10ea775ea85f10&redirect_uri=http%3a%2f%2fwx.aolaigo.com%2findex-app.html%3fweixinStart%3dhacker%23!views%2fhome.html%3Fcalltype%3Dpaycb%26payType%3D" + o + "%26order_code%3D" + n + "%26auth%3D1%3fhackEnd%3dhacker&response_type=code&scope=snsapi_base&scope=snsapi_userinfo&connect_redirect=1#wechat_redirect" : x.microMessenger ? location.href : location.href.split("?")[0], location.href = t, "29" == o || "30" == o ? new S({
          id: "abcPayCheck",
          global: !1,
          query: {order_code: n},
          success: function (e) {
            console.log(e), h(e.Code, n)
          }
        }) : h("0", n)
      } else if ("h5game" == e.query.calltype) {
        {
          e.query.num
        }
        t = x.microMessenger ? location.href.replace("?calltype=h5game", "") : location.href.split("?")[0], window.App.f7.modal({afterText: '<div style="font-size:0.55rem; line-height:1rem; color:#333; margin-bottom:0.2rem;"><i class="icon-success" style="font-size:2.1rem;color:rgba(0, 122, 255, 0.7);margin:0.35rem;"></i></br><span style="font-size:0.6rem;line-height:1.2rem;display:block;margin-bottom:0.6rem;">欢迎光临奥莱购</span>稍后即将进入游戏</br>授权跳转中...</div>'});
        var i = I._getLocalStorageItem("wxConfig"), a = i.usercode;
        setTimeout(function () {
          if ("alg01" == e.query.num)var t = "http://project.xingkecgame.com/shijinbi/wecha/call.php?usercode=" + a; else if ("alg02" == e.query.num)var t = "http://h5.xingkech5.com/algjump/wecha/call.php?usercode=" + a;
          window.location.href = t
        }, 1e3)
      }
    } else e.query && e.query.calltype
  }

  function v() {
    m(), x.webView && x.ios && !x.microMessenger || x.webView && x.android && !x.microMessenger || u()
  }

  function y(e, t, n) {
    w && clearInterval(w)
  }

  var w, b, _, k, C = Dom7, x = (Template7, Framework7.prototype.device), T = o(8), I = o(2), A = o(6), M = o(42), S = o(1), q = "03#237";
  t.exports = {init: i, pageReinit: v, pageBeforeRemove: y}
}, function (e, t, n) {
  function o(e, t) {
    t ? t && "e" == t && (this.e = e[0] && e[0].cons && e[0].cons.length ? function (e) {
      for (var t, n, o = [], a = 0; n = e.cons[a++];)t = i._imgsrc(n.src, 2), o.push(i._typeData(n, t));
      return o.isShow = e.isShow, o
    }(e[0]) : []) : (this.a = e[0] && e[0].cons && e[0].cons.length ? function (e) {
      for (var t, n, o = [], a = 0; n = e[a++];)t = i._imgsrc(n.src, 1), o.push(i._typeData(n, t));
      return o
    }(e[0].cons) : [], this.b = e[1] && e[1].cons && e[1].cons.length && 0 !== e[1].isShow ? function (e) {
      for (var t, n, o = [], n = {}, a = parseInt(100 / e.length, 10), s = 0; n = e[s++];)t = i._imgsrc(n.src, e.length / 2), n = i._typeData(n, t), n.percent = a, o.push(n);
      return o
    }(e[1].cons) : [], this.c = e[2] && e[2].cons && e[2].cons.length ? function (e) {
      for (var t, n = [], o = 0; t = e[o++];)n.push(i._typeData(t));
      return n
    }(e[2].cons) : [], this.d = e[3] && e[3].cons && e[3].cons.length && 0 !== e[3].isShow ? function (e) {
      for (var t, n, o = [], a = 0; n = e[a++];)t = i._imgsrc(n.src, 1), o.push(i._typeData(n, t));
      return o
    }(e[3].cons) : [], this.e = e[4] && e[4].cons && e[4].cons.length ? function (e) {
      for (var t, n, o = [], a = 0; n = e.cons[a++];)t = i._imgsrc(n.src, 2), o.push(i._typeData(n, t));
      return o.isShow = e.isShow, o
    }(e[4]) : [], this.f = e[5] && e[5].cons && e[5].cons.length ? function (e) {
      for (var t, n, o = [], a = 0; n = e[a++];)t = i._imgsrc(n.src, 2), o.push(i._typeData(n, t));
      return o
    }(e[5].cons) : [], this.g = e[6] && e[6].cons && e[6].cons.length && 0 !== e[6].isShow ? function (e) {
      for (var t, n, o = [], a = 0; n = e[a++];)t = i._imgsrc(n.src, 1), o.push(i._typeData(n, t));
      return o
    }(e[6].cons) : [], this.h = e[7] && e[7].cons && e[7].cons.length ? function (e) {
      for (var t, n, o = [], a = 0; n = e[a++];)t = i._imgsrc(n.src), o.push(i._typeData(n, t));
      return o
    }(e[7].cons) : [], this.i = e[8] && e[8].cons && e[8].cons.length ? function (e) {
      for (var t, n, o = [], a = 0; n = e[a++];)t = i._imgsrc(n.src, 1), o.push(i._typeData(n, t));
      return o
    }(e[8].cons) : [], this.j = e[9] && e[9].cons && e[9].cons.length ? function (e) {
      for (var t, n, o = [], a = 0; n = e[a++];)t = i._imgsrc(n.src, 3), o.push(i._typeData(n, t));
      return o
    }(e[9].cons) : [], this.k = e[10] && e[10].cons && e[10].cons.length && 0 !== e[10].isShow ? function (e) {
      for (var t, n, o = [], a = 0; n = e[a++];)t = i._imgsrc(n.src, 3), o.push(i._typeData(n, t));
      return o
    }(e[10].cons) : [], this.l = e[11] && e[11].cons && e[11].cons.length && 0 !== e[11].isShow ? function (e) {
      for (var t, n, o = [], n = {}, a = parseInt(100 / e.length, 10), s = 0; n = e[s++];)t = i._imgsrc(n.src, e.length / 2), n = i._typeData(n, t), n.percent = a, o.push(n);
      return o
    }(e[11].cons) : [])
  }

  var i = (Dom7, Template7, Framework7.prototype.device, n(8), n(2));
  e.exports = o
}, function (e, t, n) {
  function o(e, t, n) {
    var o = l(e.container).find("#username"), s = l(e.container).find("#password");
    d.microMessenger || l(e.container).find("#loginMsg").html("请先登录奥莱购账号，尽享正品低价，就在奥莱购！"), l(e.container).find("#submit").on("click", function () {
      var e = o[0].value;
      if (r(e)) {
        var t = s[0].value;
        if (c(t)) {
          var n, m = u._getLocalStorageItem("wxConfig");
          m && (n = m.openid), new f(d.microMessenger ? {
            id: "login",
            query: {openid: n, bindUserName: e, bindPassword: t},
            success: function (e) {
              App.f7.toast({
                icon: "icon-success",
                text: e.msg
              }), m.usercode = e.usercode, m.username = e.username, p.updateQuery(m), u._setLocalStorageItem("wxConfig", m);
              u._getLocalStorageItem("wxConfig");
              App.mainView.router.back(function () {
                App.mainView.router.refreshPage()
              })
            }
          } : {
            id: "waplogin", query: {name: e, password: t}, success: function (t) {
              if (t.msg) {
                var n = t;
                p.info.usercode = t.uid, p.info.username = e, p.info.code = t.code, p.info.time_stamp = parseInt(Date.now() / 864e5, 10), p.info.date = parseInt(Date.now() / 864e5, 10) + 14, p.updateQuery(p.info), u._isStorageSupported() && t.mobile ? window.App.f7.modal({
                  text: "您已绑定手机,建议进入安全验证",
                  afterText: "安全验证后您可享受14天免登录",
                  buttons: [{
                    text: "不验证", close: !0, onClick: function () {
                      i(t, "session", e), App.mainView.router.back(function () {
                        App.mainView.router.refreshPage()
                      })
                    }
                  }, {
                    text: "免登录验证", onClick: function () {
                      var o = t.mobile.substring(-1, 3) + "****" + t.mobile.substring(7, 11), s = '<div class="popup popup-IC" style="height:100%;"><div class="content-block list-block"><p class="content-block color-gray">已给您的手机号' + o.replace() + '发送验证码，请注意查收！</p></div><div class="content-block list-block" id="ICbk"><div class="row row-2"><div class="col-66"><input id="identifyingCode" class="input-border" type="text" name="identifying_code" placeholder="请输入短信验证码" maxlength="6"></div><div class="col-33"><a id="getCode" href="#" class="btn btn-large btn-full">获取验证码</a></div></div></div><div class="content-block list-block" style="margin-top:0.45rem;"><div class="row row-2"><div class="col-50"><a href="#" id="confirmIC" class="btn btn-large btn-red btn-full" style="font-size:0.67rem;">确认</a></div><div class="col-50"><a href="#" id="cancelIC" class="btn btn-large btn-red btn-full" style="font-size:0.67rem;">取消</a></div></div></div></div>';
                      window.App.f7.popup(s);
                      var r = l("#getCode");
                      a(t, r), r.on("click", function () {
                        var e = l(this);
                        new f({
                          id: "wapGC", query: {name: t.mobile}, success: function (e) {
                            console.log(e), responseIdentifyingCode = e.identifying_code, "publish" !== p.packEnv && (console.log(responseIdentifyingCode), App.f7.toast({text: responseIdentifyingCode}))
                          }
                        });
                        var n = 60;
                        e.text(n + "s"), e.addClass("disabled");
                        var o = setInterval(function () {
                          n > 0 && n--, 0 === n ? (e.text("重新获取"), e.removeClass("disabled"), clearInterval(o)) : e.text(n + "s")
                        }, 1e3)
                      }), l("#confirmIC").on("click", function () {
                        var t = l("#identifyingCode")[0].value;
                        return t ? void new f({
                          id: "wapIC", query: {name: e, identifying_code: t}, success: function (t) {
                            console.log(t), App.f7.toast({
                              icon: "icon-success",
                              text: t.msg.split("|")[1] || t.msg
                            }), i(n, "local", e), App.mainView.router.back(function () {
                              App.mainView.router.refreshPage()
                            })
                          }
                        }) : (App.f7.toast({icon: "icon-problem", text: "请输入验证码"}), !1)
                      }), l("#cancelIC").on("click", function () {
                        App.f7.confirm("确认放弃？", function () {
                          i(n, "session", e), App.mainView.router.back(function () {
                            App.mainView.router.refreshPage()
                          })
                        }, function () {
                        })
                      })
                    }
                  }]
                }) : App.f7.toast({icon: "icon-success", text: t.msg.split("|")[1]})
              } else App.f7.toast({icon: "icon-error", text: t.Allmsg && t.Allmsg.split("|")[1] || "验证失败，请重新登录！"})
            }
          })
        }
      }
    })
  }

  function i(e, t, n) {
    if ("local" == t) {
      var o = {info: {usercode: e.uid, username: n, date: p.info.date + 13, code: e.code}};
      u._setLocalStorageItem("wapConfig", o)
    } else if ("session" == t) {
      var o = {info: {usercode: e.uid, username: n, time_stamp: p.info.time_stamp + 144e5, code: e.code}, session: !0};
      u._setSessionStorageItem("wapConfig", o)
    }
  }

  function a(e, t) {
    var n = t;
    new f({
      id: "wapGC", query: {name: e.mobile}, success: function (e) {
        responseIdentifyingCode = e.identifying_code, "publish" !== p.packEnv && (console.log(e), App.f7.toast({text: responseIdentifyingCode}))
      }
    });
    var o = 60;
    n.text(o + "s"), n.addClass("disabled");
    var i = setInterval(function () {
      o > 0 && o--, 0 === o ? (n.text("重新获取"), n.removeClass("disabled"), clearInterval(i)) : n.text(o + "s")
    }, 1e3)
  }

  function s(e, t, n) {
    return e && 0 === e.trim().search(t) ? !0 : (App.f7.toast({icon: "icon-problem", text: n}), !1)
  }

  function r(e) {
    return s(e, "^(((13[0-9])|(147)|(145)|(15[0-9])|(18[^4]))\\d{8})|([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4})$", "请输入有效的账号")
  }

  function c(e) {
    return s(e, "^[@A-Za-z0-9!#$%^&*.~-]{6,22}$", "密码格式错误")
  }

  var l = Dom7, d = (Template7, Framework7.prototype.device), u = (n(8), n(2)), p = (n(44), n(6)), f = n(1);
  e.exports = {init: o}
}, function (e, t, n) {
  function o(e) {
    this.orderStatusValue = e.order_status_value || "", this.orderStatusName = e.order_status || "", this.orderId = e.child_code || "", this.startTime = e.Order_stime || "", this.endTime = e.Order_etime || "", this.payStyle = e.Pay_style || "", this.payCountDown = e.pay_end_time || 0, this.payCountDownHour = Math.floor(this.payCountDown / 3600), this.payCountDownMinute = Math.floor(this.payCountDown % 3600 / 60), this.payCountDownSecond = Math.floor(this.payCountDown % 60), this._timeStamp = (new Date).valueOf(), this.receiptLeaveTime = e.receipt_end_time || 0;
    var t = e.order_consignee_name && e.order_consignee_name.split(",") || [];
    this.consigneeName = t[0], this.consigneePhone = t[1], this.consigneeAddress = e.order_consignee_addre || "", this.totalPay = e.original_money || "0.00", this.freight = e.freight || "0.00", this.preferential = e.preferential || "0.00", this.finalPay = e.paid || "0.00", this.goods = e.goods && function (e) {
        for (var t, n = [], o = 0, a = e.length; a > o; o++)t = {}, t.skuId = e[o].order_goods_id || "", t.img = i._imgsrc(e[o].order_goods_img, 4) || "", t.title = e[o].order_goods_title || "", t.attr = e[o].order_goods_attr || "", t.price = e[o].order_goods_pice || "0.00", t.amount = e[o].order_goods_amount || 0, t.gift = e[o].order_goods_gift || "", n.push(t);
        return n
      }(e.goods) || [], this.giftAmount = e.gift_amount || 0, this.goodsAmount = e.goods_amount || 0, this.leaveMessage = e.leavemsg || "", this.invoiceTitle = e.invoice_title || "", this.invoiceContent = e.invoice_content || "", this.parentOrderId = e.parent_code || ""
  }

  var i = (Dom7, Template7, Framework7.prototype.device, n(8), n(2));
  e.exports = o
}, function (e, t, n) {
  function o(e, t, n) {
    new p({
      id: "orderStatistics", query: {}, success: function (o) {
        var s = new d(o);
        i(e, t, s, a, n)
      }
    });
    var o, f, m = l._getLocalStorageItem("wxConfig"), h = /@aolaigo.com$/;
    if (r.microMessenger)f = m && m.username ? m.username : null, m && m.nickname ? o = m.nickname : c.callFn("getUserIdNew", {}, function (e) {
      o = e
    }), s(e.container).find("#nickname").html(o || m && m.username), s(e.container).find("#accountInfo").html(h.test(f) ? '<a href="views/login.html">登录奥莱购账号 ></a>' : "已绑定奥莱购账号"); else if (!(r.webView && r.ios && !r.microMessenger || r.webView && r.android && !r.microMessenger || r.microMessenger)) {
      if (u.info.username) {
        f = u.info.username;
        var g = /@/;
        f = g.test(f) ? f : f.substring(-1, 3) + "****" + f.substring(7, 11)
      }
      s(e.container).find("#nickname").html(f ? "您好，" + f : '<a href="">您好，请先登录</a>'), s(e.container).find("#accountInfo").html(f ? '<a id="logout" href="">退出登录</a>' : '<a href="views/login.html">登录奥莱购账号 ></a>')
    }
  }

  function i(e, t, n, o, i) {
    s(e.container).find("#waitRecipt").text(n.waitRecipt), s(e.container).find("#waitPay").text(n.waitPay), s(e.container).find("#waitDelivery").text(n.waitDelivery), s(e.container).find("#collectCount").text(n.collectCount), s(e.container).find("#viewCount").text(n.viewCount), o(e, n, i)
  }

  function a(e, t, n) {
    s(e.container).find("#logout").on("click", function () {
      u.info.username = "", u.info.usercode = "", u.info.uid = "", u.info.uname = "", u.info.code = "", l._isStorageSupported() && (l._removeLocalStorageItem("wapConfig"), l._removeSessionStorageItem("wapConfig")), App.f7.toast({
        icon: "icon-success",
        text: "成功退出登录！"
      }), setTimeout(function () {
        App.mainView.router.load({
          url: u.templates.member,
          animatePages: !1,
          pushState: !1,
          ignoreCache: !0,
          reload: !0
        })
      }, 1e3)
    })
  }

  var s = Dom7, r = (Template7, Framework7.prototype.device), c = n(8), l = n(2), d = n(46), u = n(6), p = n(1);
  e.exports = {init: o}
}, function (e, t, n) {
  function o(e) {
    this.waitPay = e.WaitPay || 0, this.waitDelivery = e.WaitDelivery || 0, this.waitRecipt = e.WaitRecipt || 0, this.collectCount = e.CollectCount || 0, this.viewCount = e.ViewCount || 0
  }

  Dom7, Template7, Framework7.prototype.device, n(8), n(2);
  o.prototype.setValues = function () {
  }, e.exports = o
}, function (e, t, n) {
  function o(e, t, n) {
    console.log("start to init!"), new p({
      id: "activity", query: {id: e.query.id}, success: function (o) {
        var a = new u(o, e);
        i(e, t, a, n)
      }
    })
  }

  function i(e, t, n, o) {
    var i = r(e.container);
    i.attr("data-title", decodeURIComponent(e.query.title)), d._updateTitle(e);
    var s = r(e.container).find(".page-content");
    if (r("html").hasClass("not-css-calc") && s.hasClass("pull-to-refresh-no-navbar") && s.css("height", parseInt(s.css("height").split("px")[0], 10) + 44 + "px"), n.banner && n.banner.length) {
      var c = r(e.container).find("#banner");
      c.html(t.bannerTpl(n.banner))
    }
    if (n.prod && n.prod.length) {
      var u = r(e.container).find("#prod");
      u.html(t.prodTpl(n.prod))
    }
    App.f7.initImagesLazyLoad(e.container), i.on("click", ".share", function () {
      l.callFn("share", {}, function (e) {
      })
    }), App.f7.initImagesLazyLoad(e.container), a(e, n, o)
  }

  function a(e, t, n) {
    r(".addFavour").on("click", function () {
      var e = r(this).find("i"), t = r(this).attr("data-skuid"), n = e.hasClass("icon-heart-outline");
      c.webView && c.ios && !c.microMessenger || c.webView && c.android && !c.microMessenger ? l.callFn("getUserIdNew", {}, function (o) {
        var i;
        i = n ? "addfavorites" : "clearcollect", o && new p({
          id: i,
          query: {collect_goods_id: t, uid: o},
          success: function (t) {
            "0" === t.error ? (App.f7.toast({
              icon: "icon-success",
              text: t.msg
            }), n === !0 ? e.removeClass("icon-heart-outline").addClass("icon-heart-solid") : e.removeClass("icon-heart-solid").addClass("icon-heart-outline")) : t.msg && App.f7.toast({
              icon: "icon-error",
              text: t.msg
            })
          }
        })
      }) : l.callFn("addFavourite", {skuId: t, flag: n}, function (t, o) {
        t.status === !0 && (n === !0 ? e.removeClass("icon-heart-outline").addClass("icon-heart-solid") : e.removeClass("icon-heart-solid").addClass("icon-heart-outline"))
      }, !0)
    });
    var e = r(".pages").find('[data-page="newarrivals"]').find(".page-content")[0], o = (document.getElementById("na-scroll-to-top"), document.getElementById("na-home-fixed-button"));
    c.webView && c.ios && !c.microMessenger || c.webView && c.android && !c.microMessenger || (document.getElementById("na-home-fixed-button").style.bottom = "2.5rem"), e.onscroll = function () {
      e.scrollTop > 300 ? (o.style.webkitTransform = "translate3d(0,0,0)", o.style.transform = "translate3d(0,0,0)") : (o.style.webkitTransform = "translate3d(80px,0,0)", o.style.transform = "translate3d(80px,0,0)")
    };
    var i = r(".page-content");
    r("#na-scroll-to-top").on("click", function () {
      i.scrollTop(0, 300)
    })
  }

  function s() {
  }

  var r = Dom7, c = (Template7, Framework7.prototype.device), l = n(8), d = n(2), u = n(48), p = n(1);
  e.exports = {init: o, pageReinit: s}
}, function (e, t, n) {
  function o(e, t) {
    this.banner = e[0] && e[0].cons && e[0].cons.length && 0 !== e[0].isShow ? function (e) {
      for (var t, n, o = [], a = 0; n = e[a++];)t = i._imgsrc(n.src, 1), o.push(i._typeData(n, t));
      return o
    }(e[0].cons) : [], this.prod = e[1] && e[1].cons && e[1].cons.length ? function (e) {
      for (var t, n, o = [], a = 0; n = e[a++];)t = i._imgsrc(n.src, 3), o.push(i._typeData(n, t));
      return o
    }(e[1].cons) : []
  }

  var i = (Dom7, Template7, Framework7.prototype.device, n(8), n(2));
  e.exports = o
}, function (e, t, n) {
  function o(e, t, n) {
    new c({
      id: "province", query: {address_parent_code: 0}, success: function (o) {
        var a = new r(o);
        s.render(e, t, a, i, n)
      }
    })
  }

  function i(e, t, n) {
    a(".nh-province-pop").on("change", function () {
      var e = this.value, t = (a(".nh-province").attr("data-a", e), this.value.split("@")[0]);
      new c({
        id: "province", query: {address_parent_code: t}, success: function (e) {
          a("#nh-ada").html("").append('<option value="-999">请选择</option>'), a("#nh-cd").html("").append('<option value="-999">请选择</option>'), a("#nh-jiedao").html("").append('<option value="-999">请选择</option>'), a.each(e, function (e, t) {
            var n = '<option value="' + t.address_code + "@" + t.address_name + '" data-ic=' + t.address_code + " data-city=" + t.address_name + ">" + t.address_name + "</option>";
            a("#nh-ada").append(n)
          })
        }
      })
    }), a("#nh-ada").on("change", function () {
      var e = this.value, t = (a(".nh-city").attr("data-city", e), this.value.split("@")[0]);
      new c({
        id: "province", query: {address_parent_code: t}, success: function (e) {
          a("#nh-cd").html("").append('<option value="-999">请选择</option>'), a("#nh-jiedao").html("").append('<option value="-999">请选择</option>'), a.each(e, function (e, t) {
            var n = '<option value="' + t.address_code + "@" + t.address_name + '" data-zz=' + t.address_code + " data-counties=" + t.address_name + ">" + t.address_name + "</option>";

            a("#nh-cd").append(n)
          })
        }
      })
    }), a(".hide_street").hide(), a("#nh-cd").on("change", function () {
      var e = this.value, t = (a(".nh-counties").attr("data-district", e), this.value.split("@")[0]);
      new c({
        id: "province", query: {address_parent_code: t}, success: function (e) {
          e ? (a("#nh-jiedao").html("").append('<option value="-999">请选择</option>'), a.each(e, function (e, t) {
            a(".hide_street").attr({"data-show": !0}).show();
            var n = '<option  value="' + t.address_code + "@" + t.address_name + '" data-zz=' + t.address_code + " data-counties=" + t.address_name + ">" + t.address_name + "</option>";
            a("#nh-jiedao").append(n)
          })) : a(".hide_street").attr({"data-show": !1}).hide()
        }
      })
    }), a(".nh-street").on("change", function () {
      {
        var e = this.value;
        a(".nh-street").attr("data-street", e)
      }
    });
    var o = 1;
    a(".nh-bottom-efault").on("click", function () {
      o++;
      var e = 1, t = 0;
      o % 2 == 0 ? (a(".nh-sd").attr("checked", !0), a(".nh-sd").prop("checked", !0), a(".nh-sd").attr("data-isDefault", t)) : (a(".nh-sd").removeAttr("checked", !1), a(".nh-sd").prop("checked", !1), a(".nh-sd").attr("data-isDefault", e))
    }), a(e.container).on("click", ".nh-bottom-save", function () {
      if ("-999" == a("#nh_shen").val())return void App.f7.toast({icon: "icon-problem", text: "请选择省份"});
      if ("-999" == a("#nh-ada").val())return void App.f7.toast({icon: "icon-problem", text: "请选择城市"});
      var e = a(".n_name").val();
      a(".n_name").attr("data-name", e);
      var t = a(".n_name").data("name"), n = a(".db-phone").val(), o = "^((13[0-9])|(14[5,7])|(15[^4,\\D])|17[0,6,7,8]|(18[0-9]))\\d{8}$", i = n.search(o);
      -1 == i && App.f7.toast({icon: "icon-problem", text: "请输入正确的手机号码"}), a(".db-phone").attr("data-phone", n);
      var s = a(".db-phone").data("phone"), r = a(".nh_detailAddress").val();
      a(".nh_detailAddress").attr("data-detailAddress", r);
      var l = a(".nh_detailAddress").data("detailAddress"), d = a(".nh_postCode").val();
      a(".nh_postCode").attr("data-postCode", d);
      var u = a(".nh_postCode").data("postCode") || "", p = a(".nh-province").data("a").split("@")[2], f = a(".nh-province").data("a").split("@")[0], m = a(".nh-city").data("city").split("@")[1], h = a(".nh-city").data("city").split("@")[0], g = "", v = "";
      "" === a(".nh-counties").attr("data-district") ? App.f7.alert("请输入正确的县/区") : (g = a(".nh-counties").data("district").split("@")[1], v = a(".nh-counties").data("district").split("@")[0]);
      var y = "", w = "";
      "true" == a(".hide_street").attr("data-show") && (y = a(".nh-street").data("street").split("@")[1], w = a(".nh-street").data("street").split("@")[0]);
      var b = a(".nh-sd").data("isDefault"), _ = {
        name: t,
        phone: s,
        province: p,
        pCode: f,
        city: m,
        cCode: h,
        district: g,
        dCode: v,
        street: y,
        sCode: w,
        detailAddress: l,
        postCode: u,
        isDefault: b
      };
      new c({
        id: "newdelivery", query: {address: _}, success: function (e) {
          App.f7.mainView.router.back(function () {
            App.f7.mainView.router.refreshPage()
          })
        }
      })
    })
  }

  var a = Dom7, s = (Template7, Framework7.prototype.device, n(8), n(2), n(50)), r = n(51), c = n(1);
  e.exports = {init: o}
}, function (e, t, n) {
  function o(e, t, n, o, a) {
    i(e.container).find("#newdelivery").html(t.newd(n)), o(e, n, a)
  }

  {
    var i = Dom7;
    Template7, Framework7.prototype.device, n(8), n(2)
  }
  e.exports = {render: o}
}, function (e, t, n) {
  function o(e) {
    this.newdelivery = e
  }

  Dom7, Template7, Framework7.prototype.device, n(8), n(2);
  o.prototype.setValues = function () {
  }, e.exports = o
}, function (e, t, n) {
  function o(e, t, n) {
    e.query.igs ? (c = e.query.igs, delete e.query.igs) : c = "orderList", e.query.pageindex = 1, e.query.pagesize = 999;
    var o = l(e.container).find(".active-link");
    o.each(function () {
      var e = l(this).attr("href");
      c === e && l(this).addClass("active")
    }), a(e, t, n, c), o.on("show", function (o) {
      var i = o.detail;
      a(e, t, n, i)
    })
  }

  function i(e, t, n, o) {
  }

  function a(e, t, n, o) {
    new p({
      id: o, query: d.merge({}, e.query), success: function (o) {
        var a = new u(o);
        s(e, t, a, i, n)
      }
    })
  }

  function s(e, t, n, o, i) {
    l(e.container).find(".virtual-list").html(t.order(n)), o(e, t, n, i)
  }

  function r(e, t, n) {
  }

  var c, l = Dom7, d = (Template7, Framework7.prototype.device, n(8), n(2)), u = n(53), p = n(1);
  e.exports = {init: o, pageReinit: r}
}, function (e, t, n) {
  function o(e) {
    this.orders = e ? function (e) {
      for (var t, n, o = [], a = 0, s = e.length; s > a; a++) {
        var r = 0;
        t = {
          _amount: 0,
          _style: "待支付" === e[a].order_status || "待收货" === e[a].order_status ? 0 : 1,
          id: e[a].orderId || "",
          time: e[a].order_Time || "",
          status: e[a].order_status || "",
          price: e[a].order_total_value || "",
          goods: []
        }, "待支付" === t.status && (t.status = "立即支付"), "待收货" === t.status && (t.status = "确认收货");
        for (var c = 0, l = e[a].goods.length; l > c; c++)n = {}, n.amount = parseInt(e[a].goods[c].order_goods_amount, 10) || 0, r += n.amount, n.attr = e[a].goods[c].order_goods_attr || "", n.price = e[a].goods[c].order_goods_pice || 0, n.name = e[a].goods[c].order_goods_title || "", n.img = e[a].goods[c].order_goods_img ? i._imgsrc(e[a].goods[c].order_goods_img, 4) : "", t.goods.push(n);
        t._amount = r, o.push(t)
      }
      return o
    }(e) : []
  }

  var i = (Dom7, Template7, Framework7.prototype.device, n(8), n(2));
  o.prototype.setValues = function () {
  }, e.exports = o
}, function (e, t, n) {
  function o(e, t, n) {
    e.query && e.query.paystatus && "checking" == e.query.paystatus && e.query.paytype, i(e, t, n, e.name)
  }

  function i(e, t, n, o) {
    new g({
      id: o, query: f.merge({}, e.query), cdData: !0, success: function (o) {
        u = new m(o), a(e, t, u, n)
      }
    })
  }

  function a(e, t, n, o) {
    p(e.container).find(".page-content").html(t.orderDetail(n)), 2 === n.orderStatusValue ? p(e.container).append(t.toolbar2(n)) : 8 === n.orderStatusValue && p(e.container).append(t.toolbar8(n)), s(e, t, n, o)
  }

  function s(e, t, n, o) {
    function i() {
      l = n.payCountDown - ((new Date).valueOf() - n._timeStamp) / 1e3, "orderDetail" === App.mainView.activePage.name && l > 0 ? (c = new m({pay_end_time: l}), d.html(t.payCountDown(c))) : "orderDetail" === App.mainView.activePage.name && 0 >= l ? (d.html(t.payCountDown({pay_end_time: 0})), p(e.container).find(".toolbar").addClass("display-none"), p(e.container).removeClass("toolbar-fixed"), clearInterval(u)) : clearInterval(u)
    }

    if ((4 === n.orderStatusValue || 32 === n.orderStatusValue || -1 === n.orderStatusValue || -2 === n.orderStatusValue) && p(e.container).removeClass("toolbar-fixed"), 8 === n.orderStatusValue && p(e.container).find("#recipt").on("click", function () {
        var e = p(this).attr("data-order-id"), t = [{text: "确认收货？", label: !0}, {
          text: "确定",
          color: "red",
          onClick: function () {
            new g({
              id: "orderRecipt", query: {orderId: e}, success: function (e) {
                "0" === e.error && App.f7.mainView.router.back(function () {
                  App.mainView.router.refreshPage()
                })
              }
            })
          }
        }], n = [{text: "取消"}];
        App.f7.actions([t, n])
      }), 2 === n.orderStatusValue) {
      var a, s = p(e.container).find("#payType");
      p(".accordion-item-payType").find("li").on("click", function () {
        a = p(this).find("input")[0].value;
        var e = p(this).find(".item-title")[0].innerHTML;
        App.f7.accordionClose(".accordion-item-payType"), s[0].innerHTML = e
      }), p(e.container).find("#orderCancel").on("click", function () {
        var e = p(this).attr("data-parent-order-id"), t = [{text: "取消订单？", label: !0}, {
          text: "确定",
          color: "red",
          onClick: function () {
            new g({
              id: "orderCancel", query: {orderId: e}, success: function (e) {
                "0" === e.error && App.mainView.router.back(function () {
                  App.mainView.router.refreshPage()
                })
              }
            })
          }
        }], n = [{text: "取消"}];
        App.f7.actions([t, n])
      });
      var c, l, d = p(e.container).find("div#payCountDown");
      i();
      var u = setInterval(function () {
        i()
      }, 1e3);
      p(e.container).find("#wxPay").on("click", function () {
        var e = p(this).attr("data-parent-order-id");
        r(e, a)
      })
    }
  }

  function r(e, t) {
    if (t) {
      var n, o, i = f._getLocalStorageItem("wxConfig") || null;
      "wxPay" == t ? (n = {
        orderID: e,
        openid: i.openid
      }, o = l) : "aliPay" == t ? (n = {
        user_code: h.info.usercode || h.info.uid,
        user_name: h.info.username || h.info.uname,
        order_code: e,
        pay_type: 26
      }, o = c) : "abcPay" == t && (n = {order_code: e}, o = d), new g({
        id: t, query: n, success: function (e) {
          o(e)
        }
      })
    }
  }

  function c(e) {
    if ("0" === e.Code) {
      var t = (e.Url, p("<form action='" + e.Url + "' method='get' ></form>"));
      for (var n in e.Dic)t.append(p("<input type='hidden' name='" + n + "' value='" + e.Dic[n] + "'/>"));
      t.submit()
    }
  }

  function l(e) {
    window.wx.chooseWXPay({
      timestamp: e.timeStamp,
      nonceStr: e.nonceStr,
      "package": e["package"],
      signType: "MD5",
      paySign: e.sign,
      success: function (e) {
        "chooseWXPay:ok" === e.errMsg && App.f7.mainView.router.refreshPage()
      }
    })
  }

  function d(e) {
    if ("0" === e.Code) {
      var t = p("<a href='" + e.Url + "' ></a>");
      t.trigger("click")
    }
  }

  var u, p = Dom7, f = (Template7, Framework7.prototype.device, n(8), n(2)), m = n(55), h = n(6), g = n(1);
  e.exports = {init: o}
}, function (e, t, n) {
  function o(e) {
    this.microMessenger = i.microMessenger || !1, this.orderStatusValue = e.order_status_value || "", this.orderStatusName = e.order_status || "", this.orderId = e.child_code || "", this.startTime = e.Order_stime || "", this.endTime = e.Order_etime || "", this.payStyle = e.Pay_style || "", this.payCountDown = e.pay_end_time || 0, this.payCountDownHour = Math.floor(this.payCountDown / 3600), this.payCountDownMinute = Math.floor(this.payCountDown % 3600 / 60), this.payCountDownSecond = Math.floor(this.payCountDown % 60), this._timeStamp = (new Date).valueOf(), this.receiptLeaveTime = e.receipt_end_time || 0;
    var t = e.order_consignee_name && e.order_consignee_name.split(",") || [];
    this.consigneeName = t[0], this.consigneePhone = t[1], this.consigneeAddress = e.order_consignee_addre || "", this.totalPay = e.original_money || "0.00", this.freight = e.freight || "0.00", this.preferential = e.preferential || "0.00", this.finalPay = e.paid || "0.00", this.goods = e.goods && function (e) {
        for (var t, n = [], o = 0, i = e.length; i > o; o++)t = {}, t.skuId = e[o].order_goods_id || "", t.img = a._imgsrc(e[o].order_goods_img, 4) || "", t.title = e[o].order_goods_title || "", t.attr = e[o].order_goods_attr || "", t.price = e[o].order_goods_pice || "0.00", t.amount = e[o].order_goods_amount || 0, t.gift = e[o].order_goods_gift || "", n.push(t);
        return n
      }(e.goods) || [], this.giftAmount = e.gift_amount || 0, this.goodsAmount = e.goods_amount || 0, this.leaveMessage = e.leavemsg || "", this.invoiceTitle = e.invoice_title || "", this.invoiceContent = e.invoice_content || "", this.parentOrderId = e.parent_code || ""
  }

  var i = (Dom7, Template7, Framework7.prototype.device), a = (n(8), n(2));
  e.exports = o
}, function (e, t, n) {
  function o(e, t, n, o, i) {
    s(e.container).find(".multiple-screen").append(t.slide(n)), s(".product-detail-popou .popup-head").html(t.popupHead(n)), s(".product-detail-popou .popup-inner").html(t.popupCenter(n)), s(".product-detail-popou .popup-footer").html(t.popupFooter(n)), o && o(e, t, n, i)
  }

  function i(e, t, n) {
    new p({
      id: "product-detail", query: e.query, success: function (i) {
        var s = new d(i);
        o(e, t, s, a, n)
      }
    }), (!r.microMessenger && u.info.username || r.microMessenger) && new p({
      id: "view-record",
      query: {sku: e.query.skuId},
      success: function (e) {
      }
    }), n(function () {
      App.f7.closeModal(".product-detail-popou")
    })
  }

  function a(e, t, n, o) {
    var i = s(e.container).find(".swiper-container");
    App.f7.swiper(i, {
      direction: "horizontal",
      autoplay: !1,
      pagination: s(e.container).find(".swiper-pagination"),
      paginationHide: !1,
      lazyLoading: !0,
      preloadImages: !1,
      lazyLoadingInPrevNext: !0,
      lazyLoadingOnTransitionStart: !0
    });
    var a, d = s(".skuBtn"), u = s(".pleaseChiose"), f = s("#stocks"), m = s("#price"), h = s("#buyCount"), g = s("#logo");
    d.on("click", function () {
      var e = s(this).parent("div"), t = e.find(".skuBtn"), o = s("." + e.attr("data-tip")), i = s(this).hasClass("selected"), r = e.attr("data-attr-index"), c = s(".popup-center").find(".attr:not(.attr-" + r + ")").find(".skuBtn"), p = l._checkSku(n.skus, n.attrs, []).attrs;
      if (i)s(this).removeClass("selected"), o.removeClass("display-none"), c.each(function () {
        var e = s(this).text().trim();
        -1 !== l.indexOf(p, e) && s(this).removeClass("disabled")
      }); else {
        t.removeClass("selected"), s(this).addClass("selected"), o.addClass("display-none"), c.each(function () {
          var e = s(this).text().trim();
          -1 !== l.indexOf(p, e) && s(this).removeClass("disabled")
        });
        var v = l._checkSku(n.skus, n.attrs, [s(this).text().trim()]).attrs;
        c.each(function () {
          var e = s(this).text().trim();
          -1 === l.indexOf(v, e) && s(this).addClass("disabled")
        })
      }
      var w = [];
      d.each(function () {
        s(this).hasClass("selected") && w.push(s(this).text())
      }), u.text(n.attrs.length === w.length ? "已选 “" + w.join("” “") + "”" : "请选择 "), a = l._checkSku(n.skus, n.attrs, w), y = a.skuid, m.text("" === a.price ? n.alj : a.price), g.attr("src", "" === a.logo ? n.logo : a.logo), n.startCount > a.stock ? (f.text(a.stock + "(低于起售数，无法购买)"), f.addClass("color-red"), h.attr("value", 0)) : (f.text(a.stock), f.removeClass("color-red"), parseInt(h.attr("value"), 10) > a.stock ? h.attr("value", a.stock) : 0 === parseInt(h.attr("value"), 10) && h.attr("value", n.startCount))
    }), 0 === n.status ? s(e.container).find(".addCart").addClass("disabled").text("已下架") : 0 === n.stocks ? s(e.container).find(".addCart").addClass("disabled").text("已售罄") : n.stocks < n.startCount && s(e.container).find(".addCart").addClass("disabled").text("库存不足"), s("#substructionBtn").on("click", function () {
      var e = parseInt(h.attr("value"), 10), t = n.startCount;
      e > t && h.attr("value", --e)
    }), s("#addBtn").on("click", function () {
      var e = parseInt(h.attr("value"), 10), t = a && a.stock || n.skus.stocks;
      t > e && h.attr("value", ++e)
    });
    var v, y = "", w = s(e.container).find(".multiple-screen-inner");
    w.on("in", function () {
      s(this).html(t.multipleScreenInner(n)), App.f7.initImagesLazyLoad(e.container)
    }).on("out", function () {
      s(this).html(""), v && (v = null)
    }).on("scroll", function () {
      v || (v = w.find(".lazy")), v.trigger("lazy")
    });
    var b = s(e.container).find(".addFavourite"), _ = b.find("i");
    b.on("click", function () {
      var e = _.hasClass("icon-daishoucang");
      c.callFn("addFavourite", {skuId: n._skuid, flag: e}, function (t, n) {
        t.status === !0 && b.addClass("flip animated").animationEnd(e === !0 ? function () {
          b.removeClass("flip animated"), _.removeClass("icon-daishoucang").addClass("color-red icon-yishoucang")
        } : function () {
          b.removeClass("flip animated"), _.removeClass("icon-yishoucang color-red").addClass("icon-daishoucang")
        })
      }, !0)
    }), s(".product-detail-popou").on("opened", function () {
      c.callFn("updateModalStatus", {status: !0})
    }), s(".product-detail-popou").on("closed", function () {
      c.callFn("updateModalStatus", {status: !1})
    }), c.registerHandler("modal", function (e, t) {
      App.f7.closeModal()
    });
    var k = s("#cartCount");
    c.registerHandler("setShoppingCart", function (e, t) {
      k.text(e.cartCount)
    }), c.callFn("getShoppingCarNumber", {}, function (e) {
      k.text(e)
    });
    var C = s("#goPay");
    C.on("click", function () {
      var e = 0 === n.attrs.length && n._skuid || y;
      "" === e ? c.callFn("alert", {info: "请选择颜色尺码"}) : c.loadPage("pay", {skuId: e, count: h[0].value})
    }), s(".addCart").on("click", function () {
      var t = 0 === n.attrs.length && n._skuid || y;
      "" === t ? s(this).hasClass("addCartBar") ? App.f7.popup(".product-detail-popou") : c.callFn("alert", {info: "请选择颜色尺码"}) : r.wx ? c.callFn("addShoppingCar", {
        skuId: t,
        count: h[0].value
      }, function (e) {
        App.f7.closeModal(".product-detail-popou")
      }) : new p({
        id: "addShoppingCart", query: {goodsId: t, goods_amount: h[0].value}, success: function (t) {
          "-1" != t.error && (App.f7.toast({icon: "icon-success", text: "添加购物车成功"}), new p({
            id: "getShoppingCartNum",
            success: function (t) {
              s(e.container).find("#cartCount").html(t)
            }
          })), App.f7.closeModal(".product-detail-popou")
        }
      })
    }), i.on("click", "img", function () {
      var e = parseInt(s(this).attr("data-imgindex"), 10);
      c.callFn("showPics", {pics: n.slides, imgindex: e})
    }), c.registerHandler("sliderIndex", function (e, t) {
      i[0].swiper.slideTo(e.imgindex, 0)
    });
    var x = s("#cart");
    x.on("click", function () {
      var e = c.loadPage("shoppingCart");
      return e ? !1 : void 0
    })
  }

  var s = Dom7, r = (Template7, Framework7.prototype.device), c = n(8), l = n(2), d = n(57), u = n(6), p = n(1);
  e.exports = {init: i}
}, function (e, t, n) {
  function o(e) {
    this.slides = e.imgUrls ? function (e) {
      for (var t = [], n = 0, o = e.length; o > n; n++)t.push(i._imgsrc(e[n], 1));
      return t
    }(e.imgUrls) : [], this.name = e.name || "", this.alj = e.p_in_alj || 0, this.scj = e.p_in_scj || 0, this.dis_rate = e.dis_rate || 0, this.cx_rate = e.cx_rate ? function (e) {
      for (var t, n = [], o = 0, i = e.length; i > o; o++)t = {}, t.name = e[o].name, t.content = e[o].content.split("@@"), n.push(t);
      return n
    }(e.cx_rate) : [], this.brand = e.brand || "", this.logo = i._imgsrc(e.logo, 6) || "", this.attrs = [{
      name: "颜色",
      exist: !1,
      value: {}
    }, {name: "尺码", exist: !1, value: {}}], this.skus = {}, this.attrs = function (e, t, n) {
      for (var o = 0, a = [], s = 0, r = e.length; r > s; s++) {
        var c = "___", l = e[s], d = l.Color ? l.Color.trim() : "", u = l.Size ? l.Size.trim() : "", p = l.Stock ? parseInt(l.Stock, 10) : 0, f = l.SKUID || "", m = l.Discount_Price || 0, h = i._imgsrc(l.Logo, 6);
        p > 0 && (n[d + (d && u ? c : "") + u] = {
          skuid: f,
          stock: p,
          price: m,
          attrs: [d, u],
          logo: h
        }, o += p, a = a.concat([d, u])), d && (t[0].exist = !0, t[0].value[d] = t[0].value[d] || p > 0), u && (t[1].exist = !0, t[1].value[u] = t[1].value[u] || p > 0)
      }
      n.stocks = o, n.separator = c, n.attrs = i.uniq(a);
      for (var g = [], s = 0, r = t.length; r > s; s++)t[s].exist === !0 && g.push(t[s]);
      return t = null, g
    }(e.sku, this.attrs, this.skus, this.skuSeparator), this.desc = e.desc && e.desc.length ? function (e) {
      for (var t = [], n = 0, o = e.length; o > n; n++)t.push({
        type: e[n].type,
        value: "img" === e[n].type ? i._imgsrc(e[n].value) : e[n].type
      });
      return t
    }(e.desc) : [], this.spec = e.spec && e.spec.length ? function (e) {
      for (var t = [], n = 0, o = e.length; o > n; n++)t.push({name: e[n].ShowTitle, value: e[n].ShowValue});
      return t
    }(e.spec) : [], this.startCount = 0 === e.start_count ? 1 : e.start_count, this.status = parseInt(e.status, 10), this.stocks = this.skus.stocks, this._skuid = e.sku && e.sku.length && e.sku[0].SKUID
  }

  var i = (Dom7, Template7, Framework7.prototype.device, n(8), n(2));
  o.prototype.setValues = function () {
  }, e.exports = o
}, function (e, t, n) {
  function o(e, t, n) {
    var o = l(e.container).find("#username"), i = l(e.container).find("#password"), m = l(e.container).find("#identifyingCode");
    l(e.container).find("#submit").on("click", function () {
      var e = o[0].value;
      if (a(e)) {
        var t = i[0].value;
        if (s(t)) {
          var n = m[0].value;
          if (r(n)) {
            var c, l = u._getLocalStorageItem("wxConfig");
            l && (c = l.openid), new f(d.microMessenger ? {
              id: "register",
              query: {openid: c, code: n, bindUserName: e, bindPassword: t},
              success: function (e) {
                App.f7.toast({
                  icon: "icon-success",
                  text: e.msg
                }), l.usercode = e.usercode, l.username = e.username, p.updateQuery(l), u._setLocalStorageItem("wxConfig", l);
                u._getLocalStorageItem("wxConfig");
                App.mainView.router.back(function () {
                  App.mainView.router.back(function () {
                    App.mainView.router.refreshPage()
                  })
                })
              }
            } : {
              id: "identifyingCode",
              query: {opt: 1, cmd: 2, identifying_code: n, name: e, password: t},
              success: function (t) {
                App.f7.toast({
                  icon: "icon-success",
                  text: t.msg
                }), p.info.usercode = t.uid, p.info.uid = t.uid, p.info.uname = t.username, p.info.username = e, p.updateQuery(p.info), App.mainView.router.back(function () {
                  App.mainView.router.back(function () {
                    App.mainView.router.refreshPage()
                  })
                })
              }
            })
          }
        }
      }
    }), d.microMessenger ? l(e.container).find("#getCode").on("click", function () {
      var e = l(this), t = o[0].value;
      if (a(t)) {
        new f({
          id: "identifyingCode", query: {name: t, uid: ""}, success: function (e) {
            c = e.identifying_code
          }
        });
        var n = 60;
        e.text(n + "s"), e.addClass("disabled");
        var i = setInterval(function () {
          n > 0 && n--, 0 === n ? (e.text("重新获取"), e.removeClass("disabled"), clearInterval(i)) : e.text(n + "s")
        }, 1e3)
      }
    }) : l(e.container).find("#getCode").on("click", function () {
      var e = l(this), t = o[0].value;
      if (a(t)) {
        new f({
          id: "identifyingCode", query: {name: t, uid: "", OS: "wap"}, success: function (e) {
            c = e.identifying_code, App.f7.toast({text: c})
          }
        });
        var n = 60;
        e.text(n + "s"), e.addClass("disabled");
        var i = setInterval(function () {
          n > 0 && n--, 0 === n ? (e.text("重新获取"), e.removeClass("disabled"), clearInterval(i)) : e.text(n + "s")
        }, 1e3)
      }
    })
  }

  function i(e, t, n) {
    return e && 0 === e.trim().search(t) ? !0 : (App.f7.toast({icon: "icon-problem", text: n}), !1)
  }

  function a(e) {
    return i(e, "^((13[0-9])|(147)|(145)|(15[0-9])|(18[0-3,5-9]))\\d{8}", "请输入有效的手机号")
  }

  function s(e) {
    return i(e, "^[@A-Za-z0-9!#$%^&*.~-]{6,22}$", "请输入6-22位密码")
  }

  function r(e) {
    return e ? c ? e !== c ? (App.f7.toast({
      icon: "icon-problem",
      text: "验证码错误"
    }), !1) : !0 : (App.f7.toast({icon: "icon-problem", text: "请获取手机验证码"}), !1) : (App.f7.toast({
      icon: "icon-problem",
      text: "请输入手机验证码"
    }), !1)
  }

  var c, l = Dom7, d = (Template7, Framework7.prototype.device), u = (n(8), n(2)), p = (n(59), n(6)), f = n(1);
  e.exports = {init: o}
}, function (e, t, n) {
  function o(e) {
    this.orderStatusValue = e.order_status_value || "", this.orderStatusName = e.order_status || "", this.orderId = e.child_code || "", this.startTime = e.Order_stime || "", this.endTime = e.Order_etime || "", this.payStyle = e.Pay_style || "", this.payCountDown = e.pay_end_time || 0, this.payCountDownHour = Math.floor(this.payCountDown / 3600), this.payCountDownMinute = Math.floor(this.payCountDown % 3600 / 60), this.payCountDownSecond = Math.floor(this.payCountDown % 60), this._timeStamp = (new Date).valueOf(), this.receiptLeaveTime = e.receipt_end_time || 0;
    var t = e.order_consignee_name && e.order_consignee_name.split(",") || [];
    this.consigneeName = t[0], this.consigneePhone = t[1], this.consigneeAddress = e.order_consignee_addre || "", this.totalPay = e.original_money || "0.00", this.freight = e.freight || "0.00", this.preferential = e.preferential || "0.00", this.finalPay = e.paid || "0.00", this.goods = e.goods && function (e) {
        for (var t, n = [], o = 0, a = e.length; a > o; o++)t = {}, t.skuId = e[o].order_goods_id || "", t.img = i._imgsrc(e[o].order_goods_img, 4) || "", t.title = e[o].order_goods_title || "", t.attr = e[o].order_goods_attr || "", t.price = e[o].order_goods_pice || "0.00", t.amount = e[o].order_goods_amount || 0, t.gift = e[o].order_goods_gift || "", n.push(t);
        return n
      }(e.goods) || [], this.giftAmount = e.gift_amount || 0, this.goodsAmount = e.goods_amount || 0, this.leaveMessage = e.leavemsg || "", this.invoiceTitle = e.invoice_title || "", this.invoiceContent = e.invoice_content || "", this.parentOrderId = e.parent_code || ""
  }

  var i = (Dom7, Template7, Framework7.prototype.device, n(8), n(2));
  e.exports = o
}, function (e, t, n) {
  function o(e, t, n) {
    e.query.psize = 20, new u({
      id: "search-list", query: c.merge({}, e.query), success: function (o) {
        var s = new l(o);
        i(e, t, s, a, n)
      }
    });
    var o = s(e.navbarInnerContainer).find(".searchbar-input input"), r = decodeURIComponent(e.query.keyword ? e.query.keyword : e.query.title);
    o.attr("placeholder", r)
  }

  function i(e, t, n, o, i) {
    s(".panel-right .view .navbar").html(t.panelRightNavbar(n)), s(".panel-right .view .pages").html(t.panelRightContainer()), o(e, t, n, i)
  }

  function a(e, t, n, o) {
    function i() {
      q.hasClass("display-none") ? (D.addClass("list-view").removeClass("large-view"), M.params.cols = 1) : (D.removeClass("list-view").addClass("large-view"), M.params.cols = 2), M.params.height = D.find("li").eq(0).height(), M.update()
    }

    var a, p, f, m = n, h = n, g = {page: 1, order: e.query.order || "5_2"};
    p = t.filterOne(n), f = t.filterTwo(n), s(".panel-right .view .page-content #filter-one").html(p), s(".panel-right .view .page-content #filter-two").html(f);
    var v = {lock: !1, scrollend: !1, total: m.total};
    App.f7.initInfiniteScroll(e.container);
    var y = s(e.container).find(".tips");
    v.scrollend = e.query.psize * g.page >= v.total, y.html(t.tips(v));
    var w = function (n) {
      v.lock || v.scrollend || !v.total || (v.lock = !0, g.page++, new u({
        id: e.name,
        query: c.merge({}, e.query, a, g),
        success: function (n) {
          var o = "local" !== d.sourcesType ? new l(n) : n;
          v.scrollend = e.query.psize * g.page >= v.total, y.html(t.tips(v)), v.lock = !1, M.appendItems(o.list)
        }
      }))
    };
    s(e.container).find(".infinite-scroll").on("infinite", w), o(function () {
      s(e.container).find(".infinite-scroll").off("infinite", w)
    });
    var b = function (n) {
      new u({
        id: e.name,
        query: e.query,
        data: {pcid: this.value.split("&cid=")[0], cid: this.value.split("&cid=")[1]},
        success: function (e) {
          var n = "local" !== d.sourcesType ? new l(e) : e;
          s(".panel-right .view .page-content #filter-two").html(t.filterTwo(n))
        }
      })
    };
    s(".panel-right").on("change", "#pcid", b);
    var _ = s(".panel-right .view .page-content #filter-form"), k = function (n) {
      a = App.f7.formToJSON(_[0]);
      for (var o in a)a[o].length || delete a[o];
      var i;
      a && a.pcid && a.pcid.search("&cid=") >= 0 && (i = a.pcid, a.pcid = i.split("&cid=")[0], a.cid = i.split("&cid=")[1]), g = {
        page: 1,
        order: g.order
      }, new u({
        id: e.name, query: e.query, data: c.merge({}, a, g), success: function (n) {
          var o = "local" !== d.sourcesType ? new l(n) : n;
          h = o, p = s(".panel-right .view .page-content #filter-one").html(), f = s(".panel-right .view .page-content #filter-two").html(), v = {
            lock: !1,
            scrollend: e.query.psize >= o.total,
            total: o.total
          }, y.html(t.tips(v)), M.deleteAllItems(), M.appendItems(o.list)
        }
      })
    }, C = s(".panel-right .view .navbar-inner #filter-form-submit").on("click", k);
    o(function () {
      C.off("click", k)
    });
    {
      var x = function (e) {
        s(".panel-right .view .page-content #filter-one").html(t.filterOne(m)), s(".panel-right .view .page-content #filter-two").html(t.filterTwo(m))
      };
      s(".panel-right .view .navbar-inner #filter-form-reset").on("click", x)
    }
    o(function () {
      C.off("click", x)
    });
    var T = s(e.container).find("#order li"), I = T.find("i"), A = g.order.split("_");
    T.each(function () {
      var e = s(this).data("value");
      parseInt(e, 10) === parseInt(A[0], 10) && (s(this).find("a").addClass("active"), 2 === parseInt(A[1], 10) ? s(this).find(".icon-desc").removeClass("display-none") : s(this).find(".icon-asc").removeClass("display-none"))
    }), T.on("click", function () {
      s(".panel-right .view .page-content #filter-one").html(p), s(".panel-right .view .page-content #filter-two").html(f);
      var n = s(this).find("i.icon-asc"), o = s(this).find("i.icon-desc"), i = s(this).data("value");
      1 === n.length && n.hasClass("display-none") ? (I.addClass("display-none"), n.removeClass("display-none"), g.order = i + "_1") : (I.addClass("display-none"), o.removeClass("display-none"), g.order = i + "_2"), T.find("a").removeClass("active"), s(this).find("a").addClass("active"), g = {
        page: 1,
        order: g.order
      }, a = App.f7.formToJSON(_[0]);
      for (var r in a)a[r].length || delete a[r];
      var m;
      a && a.pcid && a.pcid.search("&cid=") >= 0 && (m = a.pcid, a.pcid = m.split("&cid=")[0], a.cid = m.split("&cid=")[1]), new u({
        id: e.name,
        query: e.query,
        data: c.merge({}, a, g),
        success: function (n) {
          var o = "local" !== d.sourcesType ? new l(n) : n;
          v = {
            lock: !1,
            scrollend: e.query.psize >= o.total,
            total: o.total
          }, y.html(t.tips(v)), M.deleteAllItems(), M.appendItems(o.list)
        }
      })
    });
    var M, S = s(e.navbarInnerContainer).find("#view-mode"), q = S.children(".icon-liebiaomoshi"), D = s(e.container).find(".virtual-list");
    M = App.f7.virtualList(D[0], {
      items: m.list,
      template: t.virtualList,
      rowsBefore: 14,
      rowsAfter: 8
    }), o(function () {
      M.destroy()
    }), S.on("click", function () {
      s(this).children("i").toggleClass("display-none"), i()
    }), i(), r.registerHandler("viewMode", function (e, t) {
      "list" === e.modeType ? D.addClass("list-view").removeClass("large-view") : "block" === e.modeType && D.removeClass("list-view").addClass("large-view")
    }), r.registerHandler("toggleFilterPanel", function (e, t) {
      App.f7.togglePanel("right")
    }), s(".panel").on("opened", function () {
      r.callFn("updateModalStatus", {status: !0})
    }), s(".panel").on("closed", function () {
      r.callFn("updateModalStatus", {status: !1})
    }), r.registerHandler("modal", function (e, t) {
      App.f7.closePanel()
    }), s(".addFavourite").on("click", function () {
      var e = s(this).attr("data-skuid");
      r.callFn("addFavourite", {skuId: e, flag: !0})
    }), o(function () {
      App.f7.closePanel()
    })
  }

  var s = Dom7, r = (Template7, Framework7.prototype.device, n(8)), c = n(2), l = n(61), d = n(6), u = n(1);
  e.exports = {init: o}
}, function (e, t, n) {
  function o(e) {
    this.list = e.MainOutputVM && e.MainOutputVM.OutputSkuInfoVMs ? function (e) {
      for (var t, n = [], o = 0, a = e.length; a > o; o++)e[o].wskus && (t = {}, t.img = e[o].wmimg && e[o].wmimg.url ? i._imgsrc(e[o].wmimg.url, 2) : "", t.scount = Math.round(e[o].sprice / e[o].mprice * 100) / 10 || 0, t.name = e[o].wname || "", t.skuId = e[o].wskus[0] && e[o].wskus[0].sku_id ? e[o].wskus[0].sku_id : "", t.tips = e[o].tips || "", t.sprice = e[o].sprice || 0, t.mprice = e[o].mprice || 0, n.push(t));
      return n
    }(e.MainOutputVM.OutputSkuInfoVMs) : [], this.total = e.MainOutputVM && e.MainOutputVM.TotalCount ? parseInt(e.MainOutputVM.TotalCount, 10) : 0, this.category = e.MenuVMs ? function (e) {
      var t = [];
      t.push({id: "", name: "全部", selected: !0});
      for (var n = 0, o = e.length; o > n; n++)for (var i = 0, a = e[n].subs.length; a > i; i++)t.push({
        id: e[n].subs[i].pcid + "&cid=" + e[n].subs[i].cid,
        name: e[n].cname + "/" + e[n].subs[i].cname + "(" + e[n].subs[i].pcount + ")"
      });
      return t
    }(e.MenuVMs) : [], this.brand = e.MainVM && e.MainVM.Sbvms ? function (e) {
      var t, n = [];
      n.push({id: "", name: "全部", selected: !0});
      for (var o = 0, i = e.length; i > o; o++)t = {}, t.name = e[o].bname, t.id = e[o].bid, n.push(t);
      return n
    }(e.MainVM.Sbvms) : [], this.price = e.MainVM && e.MainVM.Bpufvm && e.MainVM.Bpufvm.Bspfvms ? function (e) {
      var t, n = [];
      n.push({id: "", name: "全部", selected: !0});
      for (var o = 0, i = e.length; i > o; o++)t = {}, t.name = e[o].RangeValue, t.id = e[o].RangeID, n.push(t);
      return n
    }(e.MainVM.Bpufvm.Bspfvms) : [], this.attrs = e.MainVM && e.MainVM.Bpufvm && e.MainVM.Bpufvm.Bpafvms ? function (e) {
      for (var t, n, o = {}, i = 0, a = e.length; a > i; i++)t = e[i].aname.trim(), o[t] || (o[t] = [], o[t].push({
        id: "",
        name: "全部",
        selected: !0
      })), n = {}, n.name = e[i].avcap, n.id = e[i].aid + "_" + e[i].avid, o[t].push(n);
      return o
    }(e.MainVM.Bpufvm.Bpafvms) : []
  }

  var i = (Dom7, Template7, Framework7.prototype.device, n(8), n(2));
  o.prototype.setValues = function () {
  }, e.exports = o
}, function (e, t, n) {
  function o(e, t, n) {
    i(e, t, {}, a, n)
  }

  function i(e, t, n, o, i) {
    o(e, t, n, i)
  }

  function a(e, t, n, o) {
    var i = c(e.container).find(".searchbar-input input");
    c("form").on("submit", function (e) {
      e.preventDefault(), i.blur();
      var t = this.getAttribute("action"), n = i[0].value.trim();
      t && n && (App.mainView.router.load({url: t + "?keyword=" + encodeURIComponent(n)}), a.push(n), a = l.uniq(a), localStorage.setItem("searchKeywords", a.join("@#$")))
    });
    var a = localStorage.getItem("searchKeywords") && localStorage.getItem("searchKeywords").split("@#$") || [];
    c(".list-block-search").on("click", "#clearHistory", function (e) {
      a = [], localStorage.setItem("searchKeywords", a.join("@#$")), s.html(t.historyTpl(a))
    });
    var s = c(e.container).find(".searchbar-found");
    r = App.f7.searchbar(c(e.container).find(".searchbar")[0], {
      searchList: ".list-block-search",
      searchIn: ".item-title",
      customSearch: !0
    });
    var p;
    c(".list-block-search").on("search", function (e) {
      e.detail.query ? (p && p.abort(), p = new u({
        id: "search",
        global: !1,
        query: {keyword: e.detail.query},
        success: function (e) {
          var n = new d(e);
          s.html(t.suggestTpl(n.suggestKeywords))
        }
      })) : s.html(t.historyTpl(a))
    }), r.enable(), s.html(t.historyTpl(a))
  }

  function s() {
    r && r.enable()
  }

  var r, c = Dom7, l = (Template7, Framework7.prototype.device, n(8), n(2)), d = n(63), u = n(1);
  e.exports = {init: o, pageReinit: s}
}, function (e, t, n) {
  function o(e) {
    this.suggestKeywords = e.SuggestVMs && function (e) {
        for (var t, n = [], o = 0; t = e[o++];)n.push({
          keyword: t.chnw,
          count: t.numfd,
          cid: t.cid,
          cname: t.cname,
          iscat: t.iscat,
          bid: t.bid,
          bname: t.bname,
          isbrd: t.isbrd,
          issch: t.issch
        });
        return n
      }(e.SuggestVMs) || []
  }

  Dom7, Template7, Framework7.prototype.device, n(8), n(2);
  e.exports = o
}, function (e, t, n) {
  function o(e, t, n) {
    new h({
      id: "activity", query: e.query, success: function (o) {
        var a = o, o = new m(o);
        a = new m(a), r(e, t, a, n), MorgenClock = i(e, o, t, 0), NachtClock = i(e, o, t, 1)
      }
    });
    var o = u(".pages").find('[data-page="seckill"]').find(".page-content")[0], a = (document.getElementById("sk-scroll-to-top"), document.getElementById("sk-home-fixed-button"));
    o.onscroll = function () {
      o.scrollTop > 300 ? (a.style.webkitTransform = "translate3d(0,0,0)", a.style.transform = "translate3d(0,0,0)") : (a.style.webkitTransform = "translate3d(80px,0,0)", a.style.transform = "translate3d(80px,0,0)")
    };
    var s = u(".page-content");
    u("#sk-scroll-to-top").on("click", function () {
      s.scrollTop(0, 300)
    })
  }

  function i(e, t, n, o) {
    var r = u(e.container);
    if (t && t.Morgen && t.Nacht) {
      0 == o && l ? clearInterval(l) : 1 == o && d && clearInterval(d);
      var c = 0 == o ? t.Morgen[0].seconds : t.Nacht[0].seconds;
      if ("0" == c)return null;
      var p = setInterval(function () {
        if (c--, 0 > c)new h({
          id: "activity", query: e.query, success: function (t) {
            var a = new m(t), c = a[0 == o ? "Morgen" : "Nacht"][0].seconds, p = u(e.container).find("#" + (0 == o ? "Morgen" : "Nacht")).find(".grab");
            c > 0 ? (p.removeClass("wait_grab"), p.text("马上抢购"), 0 == o ? l = i(e, a, n, o) : d = i(e, a, n, o)) : (p.addClass("wait_grab"), p.text("已抢光")), 0 == o ? (console.log(0), s("Morgen", r, a, n)) : 1 == o && (console.log(111), s("Nacht", r, a, n))
          }
        }), clearInterval(p); else {
          var t = document.getElementsByClassName("salecountdown")[o] || null;
          t ? t.innerHTML = a(c) : p && clearInterval(p)
        }
      }, 1e3);
      return p
    }
    return console.log("data" + o + "wrong!"), null
  }

  function a(e) {
    function t(e) {
      return 10 > e && (e = "0" + e), e
    }

    var n = parseInt(e), o = t(Math.floor(n / 3600)), i = n % 3600, a = t(Math.floor(i / 60)), s = i % 60, r = t(Math.round(s));
    if (n >= 0)var c = "<span>" + o + "</span><span>:</span><span>" + a + "</span><span>:</span><span>" + r + "</span>"; else var c = "<span>00</span><span>:</span><span>00</span><span>:</span><span>00</span>";
    return c
  }

  function s(e, t, n, o) {
    var i = t.find("#" + e + "Time");
    i.html(o.timeTpl(n[e][0]));
    var a = t.find("#" + e + "Tag");
    a.html(o[e + "TagTpl"](n[e][0]))
  }

  function r(e, t, n, o) {
    var i = u(e.container);
    i.attr("data-title", decodeURIComponent(e.query.title)), f._updateTitle(e);
    var a = u(e.container).find(".page-content");
    if (u("html").hasClass("not-css-calc") && a.hasClass("pull-to-refresh-no-navbar") && a.css("height", parseInt(a.css("height").split("px")[0], 10) + 44 + "px"), n.banner && n.banner.length) {
      var r = u(e.container).find("#banner");
      r.html(t.bannerTpl(n.banner))
    }
    var c;
    if (n.Morgen && n.Morgen.length && n.Nacht && n.Nacht.length && (c = "1" == n.Nacht[0].status ? 20 : "0" == n.Morgen[0].status || "1" == n.Morgen[0].status ? 8 : 20), n.Morgen && n.Morgen.length) {
      var l = u(e.container).find("#Morgen");
      l.html(t.prod1Tpl(n.Morgen)), s("Morgen", i, n, t)
    }
    if (n.Nacht && n.Nacht.length) {
      var d = u(e.container).find("#Nacht");
      d.html(t.prod2Tpl(n.Nacht)), s("Nacht", i, n, t)
    }
    i.on("click", ".share", function () {
      p.callFn("share", {}, function (e) {
      })
    }), App.f7.initImagesLazyLoad(e.container);
    var m = document.getElementById("prod-content"), h = u("#prod-content");
    8 == c ? (u("#NachtTag").find(".saletime").removeClass("focus"), u("#MorgenTag").find(".saletime").addClass("focus"), m.style.webkitTransform = "translate3d(0,0,0)", m.style.Transform = "translate3d(0,0,0)") : 20 == c && (u("#MorgenTag").find(".saletime").removeClass("focus"), u("#NachtTag").find(".saletime").addClass("focus"), m.style.webkitTransform = "translate3d(-50%,0,0)", m.style.Transform = "translate3d(-50%,0,0)"), u("#NachtTag").on("click", function () {
      u("#MorgenTag").find(".saletime").removeClass("focus"), u("#NachtTag").find(".saletime").addClass("focus"),
      h.hasClass("tran") || h.addClass("tran"), m.style.webkitTransform = "translate3d(-50%,0,0)", m.style.Transform = "translate3d(-50%,0,0)"
    }), u("#MorgenTag").on("click", function () {
      u("#NachtTag").find(".saletime").removeClass("focus"), u("#MorgenTag").find(".saletime").addClass("focus"), h.hasClass("tran") || h.addClass("tran"), m.style.webkitTransform = "translate3d(0,0,0)", m.style.Transform = "translate3d(0,0,0)"
    })
  }

  function c() {
  }

  var l, d, u = Dom7, p = (Template7, Framework7.prototype.device, n(8)), f = n(2), m = n(65), h = (n(6), n(1));
  e.exports = {init: o, pageReinit: c}
}, function (e, t, n) {
  function o(e) {
    this.banner = e[0] && e[0].cons && e[0].cons.length ? function (e) {
      for (var t, n, o = [], a = 0; n = e[a++];)t = i._imgsrc(n.src, 1), o.push(i._typeData(n, t));
      return o
    }(e[0].cons) : [], this.Morgen = e[1] && e[1].cons && e[1].cons.length ? function (e) {
      for (var t, n, o = [], a = 0; n = e[a++];)t = i._imgsrc(n.src, 4), o.push(i._typeData(n, t));
      return o
    }(e[1].cons) : [], this.Nacht = e[2] && e[2].cons && e[2].cons.length ? function (e) {
      for (var t, n, o = [], a = 0; n = e[a++];)t = i._imgsrc(n.src, 4), o.push(i._typeData(n, t));
      return o
    }(e[2].cons) : []
  }

  var i = (Dom7, Template7, Framework7.prototype.device, n(8), n(2));
  e.exports = o
}, function (e, t, n) {
  function o(e, t, n) {
    function o() {
      var e = l(this).parents(".popup-inner").find("input[type=checkbox]");
      this.checked && (e.each(function () {
        this.checked = !1
      }), this.checked = !0)
    }

    function s() {
      var o = l(this).attr("data-exchangeSelectedSkuid"), i = l(this).parents(".exchange-popup").find("input[type=checkbox]"), s = i.attr("data-main-code"), r = l(this).parents(".exchange-popup").find("input[type=checkbox]:checked"), p = r.attr("data-skuid"), f = this;
      o !== p ? p ? new u({
        id: "addExchangeGoods", query: {cart_main_code: s, list_id: [p]}, success: function (o) {
          l(f).attr("data-exchangeSelectedSkuid", p), App.f7.closeModal(), App.f7.toast({
            icon: "icon-success",
            text: "换购商品添加成功"
          }), c = new d(o), a(e, t, c, n)
        }
      }) : o && new u({
        id: "deleteExchangeGood", query: {cart_main_code: s, sku_code: o}, success: function (o) {
          l(f).attr("data-exchangeSelectedSkuid", ""), App.f7.closeModal(), App.f7.toast({
            icon: "icon-success",
            text: "换购商品删除成功"
          }), c = new d(o), a(e, t, c, n)
        }
      }) : App.f7.closeModal()
    }

    i(e, t, n, e.name), l(e.container).on("click", ".closeSwipeout", function () {
      App.f7.swipeoutClose(l(this).parents(".swipeout"))
    }), l("body").on("change", ".exchange-popup .popup-inner label input[type=checkbox]", o), n(function () {
      l("body").off("change", o)
    }), l(e.container).on("click", ".exchange-popup .popup-footer .exchangeSave", s), n(function () {
      l("body").off("click", s)
    }), l(e.container).on("click", "#multiDelete", function () {
      var o = l(e.container).find(".swipeout label input[type=checkbox]:checked").length;
      if (!o)return void App.f7.toast({text: "无可删商品"});
      var i = [{text: "确认删除这" + o + "种商品？", label: !0}, {
        text: "确定", color: "red", onClick: function () {
          new u({
            id: "deleteSelectedShoppingCart",
            query: {cart_main_code: l(this).attr("data-main-code"), cart_detail_code: l(this).attr("data-detail-code")},
            success: function (o) {
              App.f7.toast({icon: "icon-success", text: "商品删除成功"}), c = new d(o), a(e, t, c, n)
            }
          })
        }
      }], s = [{text: "取消"}];
      App.f7.actions([i, s])
    }), l(e.container).on("click", ".deleteSwipeout", function () {
      var o = l(this).attr("data-exchange"), i = l(this).attr("data-main-code"), s = l(this).attr("data-detail-code"), r = l(this).attr("data-skuid");
      new u("true" === o ? {
        id: "deleteExchangeGood", query: {cart_main_code: i, sku_code: r}, success: function (o) {
          App.f7.toast({icon: "icon-success", text: "商品删除成功"}), c = new d(o), a(e, t, c, n)
        }
      } : {
        id: "deleteShoppingCart", query: {cart_main_code: i, cart_detail_code: s}, success: function (o) {
          App.f7.toast({icon: "icon-success", text: "商品删除成功"}), c = new d(o), a(e, t, c, n)
        }
      })
    }), l(e.container).on("click", ".swipeout label", function () {
      var o = l(this).find("input[type=checkbox]"), i = o.attr("checked");
      new u({
        id: "selectedShoppingCart",
        query: {
          goods_code: [{
            cart_main_code: o.attr("data-main-code"),
            cart_detail_code: o.attr("data-detail-code"),
            goods_selected: i ? "0" : "1"
          }]
        },
        success: function (o) {
          c = new d(o), a(e, t, c, n)
        }
      })
    }), l(e.container).on("click", "label.selectAll", function () {
      var o = l(this).find("input[type=checkbox]"), i = o.attr("checked"), s = [];
      i ? (l(e.container).find(".swipeout label").each(function () {
        var e = l(this).find("input[type=checkbox]");
        s.push({
          cart_main_code: e.attr("data-main-code"),
          cart_detail_code: e.attr("data-detail-code"),
          goods_selected: "0"
        })
      }), new u({
        id: "selectedShoppingCart", query: {goods_code: s}, success: function (o) {
          c = new d(o), a(e, t, c, n)
        }
      })) : (l(e.container).find(".swipeout label").each(function () {
        var e = l(this).find("input[type=checkbox]");
        s.push({
          cart_main_code: e.attr("data-main-code"),
          cart_detail_code: e.attr("data-detail-code"),
          goods_selected: "1"
        })
      }), new u({
        id: "shoppingCartSelectAll", query: {goods_code: s}, success: function (o) {
          c = new d(o), a(e, t, c, n)
        }
      }))
    }), l(e.container).on("click", "#footUp", function () {
      var t = l(e.container).find(".swipeout label input[type=checkbox]:checked").length;
      return t ? void new u({
        id: "footUp", success: function (e) {
          App.f7.mainView.router.load({url: "views/submitOrder.html", animatePages: !0, pushState: !0})
        }
      }) : void App.f7.toast({text: "请选择商品"})
    })
  }

  function i(e, t, n, o) {
    new u({
      id: "shoppingCart", query: {is_change_checked: "1"}, success: function (o) {
        c = new d(o), a(e, t, c, n), s(e, t, c, n)
      }
    }), n(function () {
      App.f7.closeModal(".exchange-popup")
    })
  }

  function a(e, t, n, o) {
    l(e.container).find(".page-content").html(t.cart(n)), l(".exchange-popup").remove(), l("body").append(t.exchange(n)), l(e.container).find(".toolbar").remove(), l(e.container).append(t.toolbar(n))
  }

  function s(e, t, n, o) {
  }

  function r(e, t, n) {
    i(e, t, n, e.name)
  }

  var c, l = Dom7, d = (Template7, Framework7.prototype.device, n(8), n(2), n(67)), u = n(1);
  e.exports = {init: o, pageReinit: r}
}, function (e, t, n) {
  function o(e) {
    this.checkedAll = "0" === e.checked_all ? !1 : !0, this.totalPrice = e.total_price || 0, this.preferential = e.youhui_price || 0, this.finalPay = e.real_price || 0, this.amount = e.checked_count && e.checked_count || 0, this.shipFreeInfo = e.ship_free_info || "购物满一定额度免运费噢～", this.groups = e.list && function (e) {
        for (var t, n = [], o = 0, a = e.length; a > o; o++)if (!e[o].goods || 0 !== e[o].goods.length) {
          t = {}, t.code = e[o].cart_main_code || "", t.offerInfo = e[o].goods_group || "", t.exchangeInfo = e[o].huangou_title || "", t.exchangeSelectedSkuid = "";
          var s = "";
          t.exchangeGoods = e[o].exchange_goods && function (e) {
              for (var n = [], o = 0, a = e.length; a > o; o++)s = "1" === e[o].goods_checked ? !0 : !1, s && (t.exchangeSelectedSkuid = e[o].goods_id), n.push({
                attr: e[o].goods_attr || "",
                selected: s,
                skuId: e[o].goods_id || "",
                img: e[o].goods_img ? i._imgsrc(e[o].goods_img, 6) : "",
                price: e[o].goods_pice || 0,
                title: e[o].goods_title || "",
                store: e[o].store && parseInt(e[o].store, 10) || 0
              });
              return n
            }(e[o].exchange_goods) || [], t.goods = e[o].goods && function (e) {
              for (var t = [], n = 0, o = e.length; o > n; n++)t.push({
                code: e[n].cart_detail_code || "",
                amount: e[n].goods_amount || "",
                attr: e[n].goods_attr || "",
                giftAmount: e[n].goods_gift && parseInt(e[n].goods_gift, 10) || 0,
                skuId: e[n].goods_id || "",
                img: e[n].goods_img ? i._imgsrc(e[n].goods_img, 6) : "",
                price: e[n].goods_pice || 0,
                selected: "1" === e[n].goods_selected ? !0 : !1,
                title: e[n].goods_title || "",
                exchange: "0" === e[n].is_huangou ? !1 : !0,
                outOfStore: "0" === e[n].is_out_of_store ? !1 : !0,
                store: e[n].store && parseInt(e[n].store, 10) || 0,
                subPay: e[n].sub_total || 0
              });
              return t
            }(e[o].goods) || [], n.push(t)
        }
        return n
      }(e.list) || []
  }

  var i = (Dom7, Template7, Framework7.prototype.device, n(8), n(2));
  e.exports = o
}, function (e, t, n) {
  function o(e, t, n) {
    i(e, t, n, e.name)
  }

  function i(e, t, n, o) {
    new m({
      id: "finishOrder", success: function (o) {
        l = new f(o), a(e, t, l, n), s(e, t, l, n)
      }
    })
  }

  function a(e, t, n, o) {
    u(e.container).find("div#defaultAddress").html(t.defaultAddress(n)), u(e.container).find(".page-content").append(t.orderDetail(n)), u(e.container).find("#finalPay").html(t.finalPay(n))
  }

  function s(e, t, n, o) {
    d = n.consigneeName ? !1 : !0;
    var i = u(e.container).find("#finalPay span"), a = u(e.container).find("#preferential");
    u(e.container).find("#couponCode").on("change", function () {
      var e = n.couponKeyValue[this.value], t = parseInt(n.finalPay, 10) - e, o = parseFloat(n.preferential, 10) + parseFloat(e, 10);
      a.html(parseFloat(o > n.totalPay ? n.totalPay : o).toFixed(2)), 0 > +t && (t = 0), i.html(parseFloat(t).toFixed(2))
    }), o(function () {
      App.f7.closeModal()
    }), u(e.container).find("#submitOrder").on("click", function () {
      var t = App.f7.formToJSON(u(e.container).find("form"));
      return d ? void App.f7.alert("还没收货地址哦～") : void new m({
        id: "submitOrder", query: t, success: function (e) {
          {
            var t, n = {
              1: "系统错误",
              2: "没有选择收货信息（默认选择的收货信息被删）",
              3: "商品（下架，库存不足）",
              4: "优惠活动（结束，不满足活动条件）",
              5: "优惠券（失效/不满足使用条件/已被使用）",
              6: "积分（不足）",
              7: "需要支付的订单",
              8: "不需要支付的订单"
            };
            p._getLocalStorageItem("wxConfig")
          }
          7 === e[0].dtype ? (t = e[0].msg + "-1", App.f7.mainView.router.reloadPage("views/order-detail.html?orderId=" + t)) : 8 === e[0].dtype ? (t = e[0].msg + "-1", App.f7.alert("恭喜下单成功，会尽快为您安排配送货"), App.f7.mainView.router.reloadPage("views/order-detail.html?orderId=" + t)) : App.f7.alert(n[e[0].dtype] + e[0].msg)
        }
      })
    }), u(e.container).find("#invoice").on("close", function () {
      u(this).find(".accordion-item-content input")[0].value = ""
    })
  }

  function r(e, t, n) {
    new m({
      id: "address", success: function (n) {
        var o = c(n);
        u(e.container).find("div#defaultAddress").html(t.defaultAddress(o))
      }
    })
  }

  function c(e) {
    for (var t = {}, n = 0, o = e.length; o > n; n++)if ("1" === e[n].isDefault) {
      t.consigneeName = e[n].name, t.consigneePhone = e[n].phone, t.consigneeAddress = e[n].province + e[n].city + e[n].district + e[0].street + e[n].detailAddress;
      break
    }
    return !t.consigneeAddress && e && e.length && (t.consigneeName = e[0].name, t.consigneePhone = e[0].phone, t.consigneeAddress = e[0].province + e[0].city + e[0].district + e[0].street + e[0].detailAddress), d = t.consigneeName ? !1 : !0, t
  }

  var l, d, u = Dom7, p = (Template7, Framework7.prototype.device, n(8), n(2)), f = n(69), m = n(1);
  e.exports = {init: o, pageReinit: r}
}, function (e, t, n) {
  function o(e) {
    var t = e.address_name && e.address_name.split("，") || [];
    this.consigneeName = t[0] || "", this.consigneePhone = t[1] || "", this.consigneeAddress = e.address_detail || "", this.coupons = [], this.couponKeyValue = {}, e.coupons && !function (e, t, n) {
      if (0 !== e.length) {
        t.push({value: "", name: "不使用"}), n[""] = 0;
        for (var o = 0, i = e.length; i > o; o++)t.push({
          value: e[o].code,
          name: e[o].name
        }), n[e[o].code] = e[o].pref_money
      }
    }(e.coupons, this.coupons, this.couponKeyValue), this.freight = e.total_money - e.pref_money - e.freefreight >= 0 ? "0.00" : e.freight && parseFloat(e.freight).toFixed(2) || "0.00", this.preferential = e.pref_money && parseFloat(e.pref_money).toFixed(2) || "0.00", this.totalPay = e.total_money && parseFloat(e.total_money).toFixed(2) || "0.00", this.finalPay = parseFloat(+this.totalPay - this.preferential + +this.freight).toFixed(2), this.giftAmount = e.gift_num || 0, this.goodsAmount = e.goods_num || 0, this.goods = e.goods && function (e) {
        for (var t, n = [], o = 0, a = e.length; a > o; o++)t = {}, t.skuId = e[o].skuid || "", t.type = e[o].buy_type || 1, t.img = i._imgsrc(e[o].img, 2) || "", t.title = e[o].name || "", t.attr = e[o].attrs || "", t.price = e[o].price || "0.00", t.amount = e[o].num || 0, n.push(t);
        return n
      }(e.goods) || []
  }

  var i = (Dom7, Template7, Framework7.prototype.device, n(8), n(2));
  e.exports = o
}]);
