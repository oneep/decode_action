api_proxy_open = false;
global_agent_http_proxy_isopen = false;
const proenv_0x7e0828 = $.isNode() ? require("./jdCookie.js") : "";
const proenv_0x36a58d = require("axios");
const proenv_0xa98ed1 = require("./utils/proenv/proenv.js");
const proenv_0xa899b7 = require("./utils/proenv/pro420.js");
let proenv_0x3310b9 = [],
  proenv_0x30967 = "",
  proenv_0x2854ca;
let proenv_0x167e8d = process.argv[1];
let proenv_0x17546d = true;
if ($.isNode()) {
  Object.keys(proenv_0x7e0828).forEach(_0x409774 => {
    proenv_0x3310b9.push(proenv_0x7e0828[_0x409774]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  proenv_0x3310b9 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...proenv_0x5c8365($.getdata("CookiesJD") || "[]").map(_0x4d541e => _0x4d541e.cookie)].filter(_0x458544 => !!_0x458544);
}
!(async () => {
  if (!proenv_0x3310b9[0]) {
    console.log("未检测到cookie");
    process.exit(1);
    return;
  }
  if (!(proenv_0x167e8d.indexOf("feverrun") > -1)) {
    console.log("请去拉取完整库: https://t.me/proenvc");
    process.exit(1);
  }
  await proenv_0xa98ed1.needAl(true);
  await proenv_0xa98ed1.getTG();
  for (let _0x5a4f1c = 0; _0x5a4f1c < proenv_0x3310b9.length; _0x5a4f1c++) {
    if (proenv_0x3310b9[_0x5a4f1c]) {
      proenv_0x30967 = proenv_0x3310b9[_0x5a4f1c];
      $.UserName = decodeURIComponent(proenv_0x30967.match(/pt_pin=([^; ]+)(?=;?)/) && proenv_0x30967.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x5a4f1c + 1;
      $.isLogin = true;
      $.nickName = "";
      $.UUID = proenv_0x486558("xxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxx");
      $.eu = $.UUID.split("-")[0];
      $.fv = $.UUID.split("-")[1];
      $.eid = "eidAfea" + parseInt(Math.random() * 666666 + 100000) + "ds3r6vxnUdvS3yU8Zjjeu4jBq+r8yDlNMAWdRVBOHn+wcf7a1qGnYVfQ2xpIn4AYEaNjd1I4P2qmkDGd+F8PBSUlEZ4/RMU83wPmSBH";
      $.UA = await proenv_0xa98ed1.getUA($.UserName);
      proenv_0x2854ca = "";
      console.log("******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********");
      await proenv_0x22e682();
      await $.wait(parseInt(Math.random() * 2500 + 2500, 10));
    }
  }
  process.exit(1);
})().catch(_0x3bf00f => $.logErr(_0x3bf00f)).finally(() => $.done());
async function proenv_0x22e682() {
  try {
    $.ERR_BAD_REQUEST = 0;
    $.hotFlag = false;
    $.hasLogin = true;
    $.commlist = [];
    $.commlist = "100105920038,,1,100105920038,1,,0,skuUuid:F2Ke1E1341377622968393728@@useUuid:0";
    await proenv_0x3e191c("deal_mshopcart_rmvcmdy_m");
    await $.wait(parseInt(Math.random() * 2500 + 2500, 10));
    if ($.hasLogin == false) {
      console.log("未登录");
      return;
    }
    if ($.commlist.length >= 1) {
      $.commlist = $.commlist.slice(0, 99);
      $.commlist = $.commlist.join("$");
      console.log("去清理购物车: ");
      await proenv_0x3e191c("deal_mshopcart_rmvcmdy_m");
      await $.wait(parseInt(Math.random() * 1000 + 500, 10));
    } else {
      console.log("清理购物车: 有 " + $.commlist.length + "件商品待清理");
    }
  } catch (_0x2d5f82) {
    console.log(_0x2d5f82.message);
  }
}
async function proenv_0x3e191c(_0x36e123) {
  let _0x2c675c = "";
  let _0x310c09 = "";
  let _0x235cc7 = "POST";
  switch (_0x36e123) {
    case "deal_mshopcart_cartview":
      _0x235cc7 = "get";
      const _0x3b9f37 = {
        fckr: 0,
        templete: 1,
        locationid: "0-0-0-0",
        isOnPullRefresh: true,
        pingouchannel: 0,
        tabMenuType: "1",
        traceid: "",
        referer: "http://wq.jd.com/wxapp/pages/cart/cart/index",
        appType: 1,
        bizType: "2",
        platform: 2,
        externalLoginType: 1,
        source: "wxapp",
        djrh: 1,
        pageId: "W_jdgwxcx_cart",
        cartVersion: "1.0.0",
        sourceType: "wx-tabbar"
      };
      bo = _0x3b9f37;
      bb = await proenv_0x373951(_0x36e123, "6f459", "wx_cart_new", bo);
      h5st = await proenv_0xa899b7.h5st420("6f459", bb, $.UA);
      _0x2c675c = "https://api.m.jd.com/client.action/deal/mshopcart/cartview?loginType=2&clientType=wxapp&client=" + bb.client + "&clientVersion=" + bb.clientVersion + "&build=&osVersion=Windows%2010%20x64&screen=414*676&networkType=wifi&d_brand=microsoft&d_model=microsoft&lang=zh_CN&uuid=" + $.UUID + "&functionId=" + bb.functionId + "&t=" + bb.t + "&body=" + encodeURIComponent(JSON.stringify(bo)) + "&appid=wx_cart_new&d_name=&h5st=" + encodeURIComponent(h5st) + "&_ste=2";
      break;
    case "deal_mshopcart_rmvCmdy":
      const _0x4181f0 = {
        templete: 1,
        commlist: $.commlist,
        type: 0,
        checked: 0,
        locationid: "0-0-0-0",
        reg: 1,
        t: 0,
        pingouchannel: 0,
        tabMenuType: "1",
        traceid: "",
        referer: "http://wq.jd.com/wxapp/pages/cart/cart/index",
        appType: 1,
        bizType: "2",
        platform: 2,
        externalLoginType: 1,
        source: "wxapp",
        djrh: 1,
        pageId: "W_jdgwxcx_cart",
        cartVersion: "1.0.0",
        sourceType: "wx-tabbar"
      };
      bo = _0x4181f0;
      bb = await proenv_0x373951(_0x36e123, "62c74", "wx_cart_new", bo);
      h5st = await proenv_0xa899b7.h5st420("62c74", bb, $.UA);
      _0x2c675c = "https://api.m.jd.com/client.action/deal/mshopcart/rmvCmdy?g_ty=ls&g_tk=234645483?loginType=2&clientType=wxapp&client=" + bb.client + "&clientVersion=" + bb.clientVersion + "&build=&osVersion=Windows%2010%20x64&screen=414*676&networkType=wifi&d_brand=microsoft&d_model=microsoft&lang=zh_CN&uuid=" + $.UUID + "&functionId=" + bb.functionId + "&t=" + bb.t + "&body=" + encodeURIComponent(JSON.stringify(bo)) + "&appid=wx_cart_new&d_name=&h5st=" + encodeURIComponent(h5st) + "&_ste=2&x-api-eid-token=";
      break;
    case "deal_mshopcart_rmvcmdy_m":
      const _0x471a22 = {
        tenantCode: "jgm",
        bizModelCode: "1",
        bizModeClientType: "M",
        externalLoginType: 1,
        platform: 3,
        pingouchannel: 0,
        commlist: $.commlist,
        type: 0,
        checked: 0,
        locationid: "1-72-2819-0",
        templete: 1,
        reg: 1,
        scene: 0,
        version: "20190418",
        traceid: "",
        sceneval: 2,
        pageId: "MShopcart_Main"
      };
      bo = _0x471a22;
      bb = await proenv_0x373951(_0x36e123, "59365", "m_core", bo);
      h5st = await proenv_0xa899b7.h5st420("59365", bb, $.UA);
      h5st = null;
      _0x2c675c = "https://api.m.jd.com/client.action/deal/mshopcart/rmvcmdy/m?sceneval=2&g_login_type=2&g_tk=1488846048&g_ty=ajax&appCode=ms0ca95114&body=" + encodeURIComponent(JSON.stringify(bo)) + "&x-api-eid-token=" + $.x_api_eid_token + "&loginType=2&loginWQBiz=golden-trade&appid=m_core&platform=3&functionId=" + _0x36e123 + "&uuid=" + $.uuid + "&osVersion=&screen=jdm&d_brand=&d_model=&lang=zh_CN&h5st=" + encodeURIComponent(h5st) + "&client=" + bb.client + "&clientVersion=" + bb.clientVersion + "&t=" + bb.t;
      break;
    default:
      console.log("错误: " + _0x36e123);
      break;
  }
  let _0x5dd0fb = proenv_0x377ae5(_0x36e123, _0x2c675c, _0x310c09, _0x235cc7);
  await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
  const _0x4ebbfa = {
    headers: _0x5dd0fb.headers,
    timeout: _0x5dd0fb.timeout
  };
  options = _0x4ebbfa;
  if (_0x235cc7.toLowerCase().includes("post")) {
    return proenv_0x36a58d.post(_0x2c675c, _0x310c09, options).then(function (_0x21bf9d) {
      _0x21bf9d = proenv_0x53ef3a(_0x21bf9d);
      if (_0x21bf9d) {
        proenv_0x135b4f(_0x36e123, _0x21bf9d);
      }
    }).catch(async function (_0x491c9b) {
      if (_0x491c9b.response) {
        console.log(_0x491c9b.response.status);
        if (!(api_proxy_open == true || global_agent_http_proxy_isopen == true)) {
          if (_0x491c9b.response.status == "493") {
            console.log("ip可能已经被限制， 过十分钟再来！！！");
            $.outFlag = true;
            process.exit(1);
          }
        }
        _0x491c9b.response.status == "403";
      }
      console.log("错误码1: " + _0x36e123 + " - " + _0x491c9b.code);
      if (_0x491c9b.code == "ECONNABORTED" || _0x491c9b.code == "ERR_BAD_REQUEST" && !["isvObfuscator", "getCk"].includes(_0x36e123) || _0x491c9b.code == "ERR_BAD_RESPONSE" || _0x491c9b.code == "EAI_AGAIN" || _0x491c9b.code == "ETIMEDOUT") {
        if ($.ERR_BAD_REQUEST >= 1) {
          $.ERR_BAD_REQUEST = 0;
        } else {
          $.ERR_BAD_REQUEST += 1;
          await $.wait(parseInt(Math.random() * 500 + 500, 10));
          await proenv_0x3e191c(_0x36e123);
        }
      }
      if (_0x491c9b.code == "ECONNRESET" || _0x491c9b.code == "ECONNREFUSED") {
        await $.wait(parseInt(Math.random() * 500 + 500, 10));
        if (api_proxy_open == true) {
          await setIp();
          await proenv_0x3e191c(_0x36e123);
        }
      }
    });
  } else {
    if (_0x235cc7 == "get" || _0x235cc7 == "GET") {
      return proenv_0x36a58d.get(_0x2c675c, options).then(function (_0x357cd7) {
        _0x357cd7 = proenv_0x53ef3a(_0x357cd7);
        if (_0x357cd7) {
          proenv_0x135b4f(_0x36e123, _0x357cd7);
        }
      }).catch(async function (_0x37e1c6) {
        if (_0x37e1c6.response) {
          console.log(_0x37e1c6.response.status);
          if (!(api_proxy_open == true || global_agent_http_proxy_isopen == true)) {
            if (_0x37e1c6.response.status == "493") {
              console.log("ip可能已经被限制， 过十分钟再来！！！");
              $.outFlag = true;
              process.exit(1);
            }
          }
          _0x37e1c6.response.status == "403";
        }
        console.log("错误码2: " + _0x36e123 + " - " + _0x37e1c6.code);
        if (_0x37e1c6.code == "ECONNABORTED" || _0x37e1c6.code == "ERR_BAD_REQUEST" && !["isvObfuscator", "getCk"].includes(_0x36e123) || _0x37e1c6.code == "ERR_BAD_RESPONSE" || _0x37e1c6.code == "EAI_AGAIN" || _0x37e1c6.code == "ETIMEDOUT") {
          if ($.ERR_BAD_REQUEST >= 1) {
            $.ERR_BAD_REQUEST = 0;
          } else {
            $.ERR_BAD_REQUEST += 1;
            await $.wait(parseInt(Math.random() * 500 + 500, 10));
            await proenv_0x3e191c(_0x36e123);
          }
        }
        if (_0x37e1c6.code == "ECONNRESET" || _0x37e1c6.code == "ECONNREFUSED") {
          await $.wait(parseInt(Math.random() * 500 + 500, 10));
          if (api_proxy_open == true) {
            await setIp();
            await proenv_0x3e191c(_0x36e123);
          }
        }
      });
    }
  }
}
function proenv_0x135b4f(_0x404797 = "", _0x48ba27 = "") {
  return new Promise(async _0x53e2f3 => {
    let _0x1c436e = "";
    try {
      if (!["accessLog", "attendLog", "getCk", "drawContent", "accessLogWithAD", "accessLog"].includes(_0x404797)) {
        if (_0x48ba27) {
          _0x1c436e = JSON.parse(_0x48ba27);
        }
      }
    } catch (_0xc8e068) {
      console.log(_0x404797 + " 执行任务异常");
      await $.wait(parseInt(Math.random() * 500 + 500, 10));
      console.log("重试" + _0x404797);
      await proenv_0x3e191c(_0x404797);
    }
    try {
      switch (_0x404797) {
        case "deal_mshopcart_cartview":
          $.commlist = [];
          if (_0x48ba27.indexOf("未登录") > -1) {
            $.hasLogin = false;
          }
          if (_0x1c436e.cart) {
            for (let _0x1d6ad4 of _0x1c436e.cart.venderCart) {
              for (let _0x74e2e2 of _0x1d6ad4.sortedItems) {
                for (let _0xd7f857 of _0x74e2e2.polyItem.products) {
                  try {
                    let _0xa47bba = JSON.stringify(_0x74e2e2.polyItem);
                    if (_0xa47bba.indexOf("promotion") > -1) {
                      promotion = _0x74e2e2.polyItem.promotion || "";
                      if (JSON.stringify(_0x74e2e2.polyItem.promotion).indexOf("pid") > -1) {
                        if (_0x74e2e2.polyType == "4") {
                          $.commlist.push(_0xd7f857.mainSku.id + ",," + _0xd7f857.num + "," + _0xd7f857.mainSku.id + ",13," + promotion.pid + ",0,skuUuid:" + _0xd7f857.skuUuid + "@@useUuid:0@@isJingXi:0,,,,");
                        } else {
                          $.commlist.push(_0xd7f857.mainSku.id + ",," + _0xd7f857.num + "," + _0xd7f857.mainSku.id + ",11," + promotion.pid + ",0,skuUuid:" + _0xd7f857.skuUuid + "@@useUuid:0@@isJingXi:0,,,,");
                        }
                      } else {
                        $.commlist.push(_0xd7f857.mainSku.id + ",," + _0xd7f857.num + "," + _0xd7f857.mainSku.id + ",1,,0,skuUuid:" + _0xd7f857.skuUuid + "@@useUuid:0@@isJingXi:0,,,,");
                      }
                    } else {
                      $.commlist.push(_0xd7f857.mainSku.id + ",," + _0xd7f857.num + "," + _0xd7f857.mainSku.id + ",1,,0,skuUuid:" + _0xd7f857.skuUuid + "@@useUuid:0@@isJingXi:0,,,,");
                    }
                  } catch (_0x41920c) {}
                }
              }
            }
          }
          break;
        case "deal_mshopcart_rmvCmdy":
          if (_0x1c436e.cart) {
            console.log("当前还剩 " + _0x1c436e.cart.currentCount + "件");
          } else {
            console.log(_0x48ba27);
          }
          break;
        case "deal_mshopcart_rmvcmdy_m":
          $.commlist = [];
          if (_0x48ba27.indexOf("未登录") > -1) {
            $.hasLogin = false;
          }
          if (_0x1c436e.errId == 0) {
            console.log("购物车: 当前还剩 " + _0x1c436e.cart.currentCount + " 件商品");
            venderCart = _0x1c436e.cart.venderCart || [];
            if (venderCart.length >= 1) {
              for (let _0x213a30 of venderCart) {
                for (let _0x52f64a of _0x213a30.sortedItems) {
                  for (let _0x1e5303 of _0x52f64a.polyItem.products) {
                    try {
                      let _0x3f1ae3 = JSON.stringify(_0x52f64a.polyItem);
                      if (_0x3f1ae3.indexOf("promotion") > -1) {
                        promotion = _0x52f64a.polyItem.promotion || "";
                        if (JSON.stringify(_0x52f64a.polyItem.promotion).indexOf("pid") > -1) {
                          if (_0x52f64a.polyType == "4") {
                            $.commlist.push(_0x1e5303.mainSku.id + ",," + _0x1e5303.num + "," + _0x1e5303.mainSku.id + ",13," + promotion.pid + ",0,skuUuid:" + _0x1e5303.skuUuid + "@@useUuid:0");
                          } else {
                            $.commlist.push(_0x1e5303.mainSku.id + ",," + _0x1e5303.num + "," + _0x1e5303.mainSku.id + ",11," + promotion.pid + ",0,skuUuid:" + _0x1e5303.skuUuid + "@@useUuid:0");
                          }
                        } else {
                          $.commlist.push(_0x1e5303.mainSku.id + ",," + _0x1e5303.num + "," + _0x1e5303.mainSku.id + ",1,,0,skuUuid:" + _0x1e5303.skuUuid + "@@useUuid:0");
                        }
                      } else {
                        $.commlist.push(_0x1e5303.mainSku.id + ",," + _0x1e5303.num + "," + _0x1e5303.mainSku.id + ",1,,0,skuUuid:" + _0x1e5303.skuUuid + "@@useUuid:0");
                      }
                    } catch (_0x5c8aa3) {}
                  }
                }
              }
            }
          }
          break;
        default:
          console.log(_0x404797 + "-> " + _0x48ba27);
          break;
      }
    } catch (_0x49d432) {
      console.log(_0x404797 + " 执行任务异常！！！");
      await $.wait(parseInt(Math.random() * 500 + 500, 10));
    }
    _0x53e2f3(_0x48ba27 || "");
  });
}
function proenv_0x377ae5(_0xfe0cd8, _0x21c7ec, _0x4b87d2, _0x3df714 = "post") {
  let _0x58eb1f = {
    host: "api.m.jd.com",
    accept: "application/json, text/plain, */*",
    "content-type": "application/x-www-form-urlencoded",
    wqreferer: "http://wq.jd.com/wxapp/pages/marketing/entry_task/index",
    "x-referer-page": "/pages/marketing/entry_task/index",
    "x-referer-package": "wx91d27dbf599dff74",
    referer: "https://servicewechat.com/wx91d27dbf599dff74/740/page-frame.html",
    "x-rp-client": "mini_2.0.0",
    "User-Agent": $.UA,
    "accept-language": "zh-CN,zh;q=0.9",
    "Accept-Encoding": "gzip, deflate, br",
    cookie: proenv_0x30967
  };
  if (["deal_mshopcart_rmvcmdy_m"].includes(_0xfe0cd8)) {
    const _0x24e255 = {
      accept: "application/json, text/plain, */*",
      "content-type": "application/x-www-form-urlencoded",
      referer: "https://p.m.jd.com/",
      origin: "https://p.m.jd.com",
      "User-Agent": $.UA,
      "accept-language": "zh-CN,zh;q=0.9",
      "Accept-Encoding": "gzip, deflate, br",
      cookie: proenv_0x30967
    };
    _0x58eb1f = _0x24e255;
  }
  if (_0x3df714.toLowerCase().includes("get")) {
    const _0x2e129f = {
      url: _0x21c7ec,
      method: _0x3df714,
      headers: _0x58eb1f,
      timeout: 30000
    };
    return _0x2e129f;
  } else {
    if (_0x3df714.toLowerCase().includes("post")) {
      const _0x30e752 = {
        url: _0x21c7ec,
        method: _0x3df714,
        headers: _0x58eb1f,
        body: _0x4b87d2,
        timeout: 30000
      };
      return _0x30e752;
    }
  }
}
function proenv_0x5c092c(_0xf81e30) {
  try {
    if (typeof JSON.parse(_0xf81e30) == "object") {
      return true;
    }
  } catch (_0x190926) {
    console.log("京东服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function proenv_0x5c8365(_0x29931b) {
  if (typeof _0x29931b == "string") {
    try {
      return JSON.parse(_0x29931b);
    } catch (_0x2ec650) {
      console.log(_0x2ec650);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
function proenv_0x3c5f92(_0x3b2a1c) {
  _0x3b2a1c = _0x3b2a1c || 32;
  let _0x58395e = "abcdef0123456789",
    _0x3199af = _0x58395e.length,
    _0x341287 = "";
  for (i = 0; i < _0x3b2a1c; i++) {
    _0x341287 += _0x58395e.charAt(Math.floor(Math.random() * _0x3199af));
  }
  return _0x341287;
}
function proenv_0x486558(_0x5712bd = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", _0x4832e3 = 0) {
  return _0x5712bd.replace(/[xy]/g, function (_0x11d6b3) {
    var _0x4b79f1 = 16 * Math.random() | 0,
      _0x1a7d35 = "x" == _0x11d6b3 ? _0x4b79f1 : 3 & _0x4b79f1 | 8;
    uuid = _0x4832e3 ? _0x1a7d35.toString(36).toUpperCase() : _0x1a7d35.toString(36);
    return uuid;
  });
}
function proenv_0x3908a2(_0xc5240c) {
  var _0x484693 = new Date(_0xc5240c + 28800000);
  return _0x484693.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, ".");
}
function proenv_0x53ef3a(_0x290f30) {
  if (_0x290f30.status == 200 && _0x290f30.data) {
    _0x290f30 = _0x290f30.data;
    if (typeof _0x290f30 == "object") {
      return JSON.stringify(_0x290f30);
    } else {
      return _0x290f30;
    }
  } else {
    return "";
  }
}
function proenv_0x373951(_0x2f1437, _0x1b5cf5, _0x55bc55, _0x45a446) {
  const _0x14bdb9 = {
    appid: _0x55bc55,
    functionId: _0x2f1437,
    clientVersion: "12.2.0",
    client: "android",
    body: _0x45a446,
    t: Date.now()
  };
  bb = _0x14bdb9;
  return bb;
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.taskStatus = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          taskStatus: s,
          taskStatus: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          taskStatus: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          taskStatus: s,
          taskStatus: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          taskStatus: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.taskStatus = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              taskStatus: s,
              taskStatus: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              taskStatus: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                taskStatus: s,
                taskStatus: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                taskStatus: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}