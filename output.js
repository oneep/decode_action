const $ = new Env("带图评价晒单");
const bdy_0xdcddc5 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x1c5855 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0xc7027f = require("./function/dylanx"),
  bdy_0x1d8b36 = require("./USER_AGENTS");
if (process.env.DY_PROXY) {
  try {
    require("https-proxy-agent");
    ccc = require("./function/proxy.js");
    $.dget = ccc.intoRequest($.get.bind($));
    $.dpost = ccc.intoRequest($.post.bind($));
  } catch {
    $.log("未安装https-proxy-agent依赖，无法启用代理");
    $.dget = $.get;
    $.dpost = $.post;
  }
} else {
  $.dpost = $.post;
  $.dget = $.get;
}
let bdy_0x13c4d0 = [],
  bdy_0x4384d2 = "";
if ($.isNode()) {
  var bdy_0x46b411 = new Buffer.from("64796C616E", "Hex").toString("utf8");
  Object.keys(bdy_0x1c5855).forEach(_0x49a7aa => {
    bdy_0x13c4d0.push(bdy_0x1c5855[_0x49a7aa]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  let bdy_0x62eca9 = $.getdata("CookiesJD") || "[]";
  bdy_0x62eca9 = jsonParse(bdy_0x62eca9);
  bdy_0x13c4d0 = bdy_0x62eca9.map(_0x193ef4 => _0x193ef4.cookie);
  bdy_0x13c4d0.reverse();
  bdy_0x13c4d0.push(...[$.getdata("CookieJD2"), $.getdata("CookieJD")]);
  bdy_0x13c4d0.reverse();
  bdy_0x13c4d0 = bdy_0x13c4d0.filter(_0x3fbdee => _0x3fbdee !== "" && _0x3fbdee !== null && _0x3fbdee !== undefined);
}
if (process.env.DY_PROXY) {
  const bdy_0x1a4bd0 = require("./function/proxy.js");
  $.get = bdy_0x1a4bd0.intoRequest($.get.bind($));
  $.post = bdy_0x1a4bd0.intoRequest($.post.bind($));
}
const bdy_0x220130 = process.env.EVALNUM ? process.env.EVALNUM : undefined;
let bdy_0x28a074 = process.env.EVAL_WORD_COUNT ?? 10,
  bdy_0x1b9fad = process.env.ONEVAL ?? false,
  bdy_0x17e845 = ["垃圾", "质量差", "评价内容", "差评", "好差"],
  bdy_0x3a934a = ["非常满意的购物体验！商品质量很好，价格实惠。物流迅速，包装严密。非常感谢商家的耐心解答和及时发货，给予8分好评。", "商品质量非常好，价格实惠，物流速度很快。包装完好，没有损坏。非常感谢商家的耐心解答和热情服务，下次还会再来购买。", "这是一次愉快的购物体验，商品质量非常好，价格也很实惠。物流速度快，包装严密。非常感谢商家的耐心服务和及时回复，给予8分好评。", "商品收到了，非常满意！质量可以，价格也还合理。感谢商家客服的热情服务和及时发货，好的话会推荐给朋友们。", "这次购物真是太棒了！商品质量很好，与描述一致。包装仔细，没有损坏。非常感谢商家的认真态度和及时发货，下次还会再来购买。", "质量非常好,与卖家描述的完全一致,真的很喜欢,完全超出期望值,发货速度非常快,物流公司服务态度很好,运送速度很快,店主态度特好,很好很好!质量好而价低廉，很热情的客服，下次还来祝你生意兴隆质量非常好，出乎我的意料包装非常仔细。", "我为什么喜欢在京东买东西，因为今天买明天就可以送到。我为什么每个商品的评价都一样，因为在京东买的东西太多太多了，导致积累了很多未评价的订单，所以我统一用段话作为评价内容。京东购物这么久，有买到很好的产品，也有买到比较坑的产品，如果我用这段话来评价，说明这款产品没问题，至少85分以上，而比较垃圾的产品，我绝对不会偷懒到复制粘贴评价，我绝对会用心的差评，这样其他消费者在购买的时候会作为参考，会影响该商品销量，而商家也会因此改进商品质量。", "感觉物超所值 服务态度还是可以的，没什么太多可挑剔的，再接再厉，祝老板生意兴隆", "这是一条好评段子，花钱的评价，麻烦你们认真点!先说商品质量：产品总体不错，包装严实。再说商家服务：点赞啦。最后点评快递：发货很快。其他就是感谢店家打折送券活动，毕竟便宜好货更实在。希望店家多多优惠，及时通知老客户，促成回购。祝生意兴隆。", "滴滴滴，我来汇报了，东西还行，客服节能有待提高哈，一贯好评啦，快递是真的快，后面再来追评吧，就这样"],
  bdy_0x166c15 = ["赠品", "权益", "非实物", "非卖品", "增值服务", "服务", "券包", "只换不修"],
  bdy_0x4084e4 = ["送的没花钱哈哈", "东西还还不错", "现在的购物体验越来越好", "以前还没有这么多贴心的赠品、增值服务、权益等服务", "给赞", "算不算白嫖"],
  bdy_0x2f1547 = ["以上是我购物感受和体验，仅供参考，也不要只看好评，适合我的不一定适合你。。。。", "总的来说，还可以，我的评价供大家参考借鉴，根据自己情况。。。。", "总之还行，买不了吃亏，买的了上当，嘿嘿！！！！", "就这样，一惯好评啦，不是非常烂一般不会差评", "最后，希望京东越来越好，感恩"],
  bdy_0x221c6b = [],
  bdy_0x2a3d5b = "",
  bdy_0x557df5 = true;
!__filename.includes(bdy_0x46b411) && (bdy_0x557df5 = false);
!(async () => {
  if (!bdy_0x13c4d0[0]) {
    const _0x2aaa25 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x2aaa25);
    return;
  }
  console.log("当前版本：20240623 支持彩蛋评价");
  console.log("每次运行最多20个账号，每个账号最多评价10个商品");
  console.log("问题反馈：https://t.me/dylan_jdpro");
  if (bdy_0x1b9fad === false) {
    console.log("\n\n默认不执行, 请设置变量 ONEVAL='true'");
    return;
  }
  let _0x10bd94 = 0;
  bdy_0x13c4d0.length > 20 ? _0x10bd94 = bdy_0x220130 ?? 20 : _0x10bd94 = bdy_0x13c4d0.length;
  await bdy_0x28e096();
  for (let _0x312874 = 0; _0x312874 < _0x10bd94; _0x312874++) {
    if (bdy_0x13c4d0[_0x312874]) {
      bdy_0x4384d2 = bdy_0x13c4d0[_0x312874];
      $.UserName = decodeURIComponent(bdy_0x4384d2.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x4384d2.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x312874 + 1;
      $.isLogin = true;
      $.nickName = "";
      $.commentWareList = "";
      $.commentInfoList = "";
      $.UA = bdy_0x1d8b36.UARAM ? bdy_0x1d8b36.UARAM(1) : bdy_0x1d8b36.USER_AGENT;
      $.UA = "okhttp/3.12.16;jdmall;android;version/12.4.2;build/99108;";
      await bdy_0x4a24b0();
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      if (!$.isLogin) {
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        });
        $.isNode() && (await bdy_0xdcddc5.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      await bdy_0x270667();
      console.log("\n等待10秒...");
      await $.wait(10000);
    }
  }
})().catch(_0x2bd420 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x2bd420 + "!", "");
}).finally(() => {
  $.done();
});
async function bdy_0x270667() {
  try {
    $.commentWareList = [];
    $.caidanList = [];
    await bdy_0x3094dc();
    if (!$.maxPage) {
      console.log("获取待评价数据失败");
      return;
    }
    if ($.maxPage > 1) {
      await $.wait(2000);
      await bdy_0x3094dc($.maxPage);
      $.commentWareList.length == 0 && (await $.wait(2000), await bdy_0x3094dc($.maxPage - 1));
    }
    await $.wait(1000);
    await bdy_0x3094dc("1", "4");
    if ($.caidanList.length != 0) {
      console.log("有" + $.caidanList.length + "个彩蛋评价！");
      $.commentWareList = $.commentWareList.concat($.caidanList);
    }
    console.log("当前有" + Number($.sdnum) + "个待评价晒单，开始评价最后一页的" + $.commentWareList.length + "个商品...");
    for (let _0x489d20 of $.commentWareList.reverse()) {
      let _0x1e56ec = [],
        _0x2a111b = [],
        _0x417fd0 = "",
        _0x162e10 = [];
      bdy_0x221c6b = [];
      $.log("\n去评价 👉 " + _0x489d20.wname);
      if (_0x489d20.commentRewardStatus == "1") {
        await bdy_0x5f381b(_0x489d20.orderId, _0x489d20.wareId);
        console.log($.rewardInfo);
        console.log("要求至少" + $.wnezi + "字," + $.saitu + "图");
      } else {
        _0x489d20.estJingBean > 0 && $.log("评价完成最多可得 " + _0x489d20.estJingBean + " 豆 🥔");
      }
      if (bdy_0x166c15.filter(_0x46ad15 => _0x489d20.wname.includes(_0x46ad15)).length == 0) {
        console.log("\n开始获取商品好评和图片...");
        await $.wait(5000);
        await bdy_0x3006ab(_0x489d20.wareId);
        $.maxPage > 1 && (await $.wait(1000), await bdy_0x3006ab(_0x489d20.wareId, Math.floor(Math.random() * Math.min.apply(null, [$.maxPage, 10]) + 2)));
        await $.wait(2000);
        for (const _0x7c6be3 of bdy_0x221c6b) {
          if (_0x7c6be3.commentInfo.pictureInfoList) {
            for (const _0x359058 of _0x7c6be3.commentInfo.pictureInfoList || {}) {
              if (_0x359058.mediaType != "2") {
                let _0x298521 = "";
                if (_0x359058.picURL.indexOf("dpg") !== -1) {
                  _0x298521 = _0x359058.picURL.replace(/s[0-9]{3}x[0-9]{3}_(.*).dpg/g, "$1");
                } else {
                  if (_0x359058.picURL.indexOf("webp") !== -1) {
                    _0x298521 = _0x359058.picURL.replace(/s[0-9]{3}x[0-9]{3}_(.*).webp/g, "$1");
                  } else {
                    _0x359058.picURL.indexOf("avif") !== -1 && (_0x298521 = _0x359058.picURL.replace(/s[0-9]{3}x[0-9]{3}_(.*).avif/g, "$1"));
                  }
                }
                _0x298521 != "" && _0x1e56ec.push(_0x298521);
              }
            }
          }
          _0x7c6be3.commentInfo.commentScore === "5" && _0x7c6be3.commentInfo.commentData.length > bdy_0x28a074 && _0x2a111b.push(_0x7c6be3.commentInfo.commentData);
        }
        for (let _0x4286ee of bdy_0x17e845) {
          _0x2a111b = _0x2a111b.filter(_0x479be1 => !_0x479be1.includes(_0x4286ee));
        }
        _0x2a111b.length > 2 ? _0x417fd0 = bdy_0x5addd9(_0x2a111b) : _0x417fd0 = bdy_0x5addd9(bdy_0x3a934a);
        if (_0x1e56ec.length >= 2) {
          let _0x3a9d43 = bdy_0x1b3fc0(_0x1e56ec, 2);
          _0x162e10 = _0x3a9d43.slice(0, _0x3a9d43.length).map(_0x37f359 => ({
            picUrl: _0x37f359
          }));
        }
      } else {
        console.log("赠品权益，只发布文字评价");
        _0x417fd0 += bdy_0x5e3cb3(bdy_0x4084e4);
      }
      _0x417fd0 = _0x417fd0.replace(/\*/gi, "");
      _0x489d20.estJingBean > 0 && _0x417fd0.length < 60 && ($.log("评价有豆，字数不够，我在凑点..."), _0x417fd0 += " " + bdy_0x5addd9(bdy_0x2f1547));
      if (_0x489d20.commentRewardStatus == "1") {
        if (_0x417fd0.length < Number($.wnezi)) {
          _0x417fd0 += " " + bdy_0x5addd9(bdy_0x2f1547);
        }
        let _0x1a028a = bdy_0x1b3fc0(_0x1e56ec, Math.max(2, Number($.saitu)));
        _0x162e10 = _0x1a028a.slice(0, _0x1a028a.length).map(_0x51940c => ({
          picUrl: _0x51940c
        }));
      }
      if (_0x162e10.length != 0 && _0x2a111b.length > 2) {
        console.log("成功获取到图片和评价，去发布✍️✍️✍️...\n");
        const _0x18e2b5 = {
          mediasExt: "[{\"VideoIsEditCover\":\"0\",\"ImagePropId\":\"0\",\"ImageTakePhotoFilterId\":\"0\",\"ImageIsCrop\":\"0\",\"VideoIsEditCrop\":\"0\",\"VideoEditFilterId\":\"0\",\"VideoMusicId\":\"0\",\"ImageEditFilterId\":\"0\",\"VideoPropId\":\"0\",\"TakeRate\":\"0\",\"VideoRecordIsMakup\":\"0\",\"ImageTakePhotoIsMakup\":\"0\",\"VideoRecordFilterId\":\"0\",\"ImageFontId\":\"0\",\"FromType\":\"1\",\"ImageStrickId\":\"0\"},{\"VideoIsEditCover\":\"0\",\"ImagePropId\":\"0\",\"ImageTakePhotoFilterId\":\"0\",\"ImageIsCrop\":\"0\",\"VideoIsEditCrop\":\"0\",\"VideoEditFilterId\":\"0\",\"VideoMusicId\":\"0\",\"ImageEditFilterId\":\"0\",\"VideoPropId\":\"0\",\"TakeRate\":\"0\",\"VideoRecordIsMakup\":\"0\",\"ImageTakePhotoIsMakup\":\"0\",\"VideoRecordFilterId\":\"0\",\"ImageFontId\":\"0\",\"FromType\":\"1\",\"ImageStrickId\":\"0\"}]"
        };
        await bdy_0x51486a("pubComment", {
          productId: _0x489d20.wareId,
          kocSynFlag: "0",
          categoryList: _0x489d20.categoryList,
          voucherStatus: "0",
          extInfo: _0x18e2b5,
          officerScore: "1699",
          anonymousFlag: "1",
          commentScore: "5",
          shopType: "0",
          orderId: _0x489d20.orderId,
          shopId: _0x489d20.shopId,
          addPictureFlag: "0",
          commentData: _0x417fd0,
          pictureInfoList: _0x162e10,
          officerLevel: "3",
          isCommentTagContent: "0"
        });
      } else {
        if (_0x162e10.length != 0 && _0x2a111b.length <= 2) {
          console.log("成功获取到图片，但没有获取到评价内容，使用内置评价，去发布✍️✍️✍️...\n");
          const _0x1cc0ec = {
            mediasExt: "[{\"VideoIsEditCover\":\"0\",\"ImagePropId\":\"0\",\"ImageTakePhotoFilterId\":\"0\",\"ImageIsCrop\":\"0\",\"VideoIsEditCrop\":\"0\",\"VideoEditFilterId\":\"0\",\"VideoMusicId\":\"0\",\"ImageEditFilterId\":\"0\",\"VideoPropId\":\"0\",\"TakeRate\":\"0\",\"VideoRecordIsMakup\":\"0\",\"ImageTakePhotoIsMakup\":\"0\",\"VideoRecordFilterId\":\"0\",\"ImageFontId\":\"0\",\"FromType\":\"1\",\"ImageStrickId\":\"0\"},{\"VideoIsEditCover\":\"0\",\"ImagePropId\":\"0\",\"ImageTakePhotoFilterId\":\"0\",\"ImageIsCrop\":\"0\",\"VideoIsEditCrop\":\"0\",\"VideoEditFilterId\":\"0\",\"VideoMusicId\":\"0\",\"ImageEditFilterId\":\"0\",\"VideoPropId\":\"0\",\"TakeRate\":\"0\",\"VideoRecordIsMakup\":\"0\",\"ImageTakePhotoIsMakup\":\"0\",\"VideoRecordFilterId\":\"0\",\"ImageFontId\":\"0\",\"FromType\":\"1\",\"ImageStrickId\":\"0\"}]"
          };
          await bdy_0x51486a("pubComment", {
            productId: _0x489d20.wareId,
            kocSynFlag: "0",
            categoryList: _0x489d20.categoryList,
            voucherStatus: "0",
            extInfo: _0x1cc0ec,
            officerScore: "1699",
            anonymousFlag: "1",
            commentScore: "5",
            shopType: "0",
            orderId: _0x489d20.orderId,
            shopId: _0x489d20.shopId,
            addPictureFlag: "0",
            commentData: _0x417fd0,
            pictureInfoList: _0x162e10,
            officerLevel: "3",
            isCommentTagContent: "0"
          });
        } else {
          if (_0x162e10.length == 0 && _0x2a111b.length > 2) {
            console.log("没有获取到图片，但获取到评价，去发布✍️✍️✍️...\n");
            const _0x430980 = {
              productId: _0x489d20.wareId,
              kocSynFlag: "0",
              categoryList: _0x489d20.ategoryList,
              voucherStatus: "0",
              officerScore: "1699",
              anonymousFlag: "1",
              commentScore: "5",
              shopType: "0",
              orderId: _0x489d20.orderId,
              shopId: _0x489d20.shopId,
              addPictureFlag: "0",
              commentData: _0x417fd0,
              pictureInfoList: "",
              officerLevel: "3",
              isCommentTagContent: "0"
            };
            await bdy_0x51486a("pubComment", _0x430980);
          } else {
            if (bdy_0x221c6b.length <= 1) {
              console.log("没有获取到评价和图片,使用内置文字评价，去发布✍️✍️✍️...\n");
              const _0x138c9f = {
                productId: _0x489d20.wareId,
                kocSynFlag: "0",
                categoryList: _0x489d20.ategoryList,
                voucherStatus: "0",
                officerScore: "1699",
                anonymousFlag: "1",
                commentScore: "5",
                shopType: "0",
                orderId: _0x489d20.orderId,
                shopId: _0x489d20.shopId,
                addPictureFlag: "0",
                commentData: _0x417fd0,
                pictureInfoList: "",
                officerLevel: "3",
                isCommentTagContent: "0"
              };
              await bdy_0x51486a("pubComment", _0x138c9f);
            }
          }
        }
      }
      console.log("评价内容(" + _0x417fd0.length + "字) ：" + _0x417fd0);
      _0x162e10.length != 0 && (console.log("晒图详情："), _0x162e10.forEach(_0x366683 => console.log(_0x366683.picUrl)));
      await $.wait(1000);
    }
  } catch (_0x270462) {
    console.log(_0x270462);
    console.log("出错了，反馈作者修！！！");
  }
}
switch ($.type) {
  case "nb":
    const bdy_0x57f61e = {
      nb: nb
    };
    _0xf1f6le = bdy_0x57f61e;
    break;
}
async function bdy_0x3006ab(_0xf034f7, _0x1289d7 = 1) {
  const _0x580c61 = {
    sortType: "5",
    isCurrentSku: false,
    sku: "" + _0xf034f7,
    pictureCommentType: "A",
    shieldCurrentComment: "1",
    shopType: "0",
    type: "4",
    shadowMainSku: "0",
    num: "10",
    offset: "" + _0x1289d7,
    pageNum: "" + _0x1289d7,
    pageSize: "10"
  };
  s = await bdy_0x51486a("getCommentListWithCard", _0x580c61);
  bdy_0x221c6b = bdy_0x221c6b.concat(s.commentInfoList);
  $.maxPage = s.maxPage;
}
async function bdy_0x262f90(_0x203dab, _0x332650 = 1) {
  const _0x25d5e6 = {
    bbtf: ""
  };
  const _0x135669 = {
    category: "",
    extInfo: _0x25d5e6,
    isCurrentSku: true,
    num: "21",
    offset: "" + _0x332650,
    shadowMainSku: "0",
    shopType: "0",
    sku: "" + _0x203dab
  };
  s = await bdy_0x51486a("getShowPictures", _0x135669);
  $.commentInfoList = s.commentShowPicInfoList;
  $.maxPage = s.maxPage;
}
async function bdy_0x3f48a3(_0x461343, _0x3d1692 = 1) {
  const _0x10fa37 = {
    bbtf: ""
  };
  const _0xae7a28 = {
    category: "",
    extInfo: _0x10fa37,
    isCurrentSku: false,
    num: "10",
    offset: "" + _0x3d1692,
    shopType: "0",
    sku: "" + _0x461343,
    type: "4"
  };
  s = await bdy_0x51486a("getFoldCommentList", _0xae7a28);
  bdy_0x221c6b = bdy_0x221c6b.concat(s.commentInfoList);
  $.maxPage = s.maxPage;
}
async function bdy_0x5f381b(_0x6de0a4, _0xbdd537) {
  const _0x120db1 = {
    allFloorsFlag: null,
    business: "1",
    evaAuraVersion: "120602",
    lowSaleQuantity: null,
    orderId: _0x6de0a4,
    qrType: "1",
    sku: _0xbdd537
  };
  s = await bdy_0x51486a("commentEditInfo", _0x120db1);
  $.rewardInfo = s.commentFloorList[0].productCommentFloor.newCommentRewardMap.bannerInfo;
  $.wnezi = JSON.stringify(s).match(new RegExp("(\\d+)字")) ? JSON.stringify(s).match(new RegExp("(\\d+)字"))[1] : 60;
  $.saitu = JSON.stringify(s).match(new RegExp("(\\d+)晒图")) ? JSON.stringify(s).match(new RegExp("(\\d+)晒图"))[1] : 2;
}
async function bdy_0x3094dc(_0x153aee = "1", _0x1d3015 = "1") {
  const _0x1f9ea5 = {
    pageIndex: _0x153aee,
    pageSize: "10",
    planType: "1",
    status: _0x1d3015
  };
  s = await bdy_0x51486a("getCommentWareList", _0x1f9ea5);
  $.maxPage = s.commentWareListInfo?.["maxPage"];
  $.sdnum = s.commentWareListInfo?.["wait4CommentCount"];
  _0x1d3015 == "4" ? $.caidanList = s.commentWareListInfo?.["commentWareList"] : $.commentWareList = s.commentWareListInfo?.["commentWareList"];
}
async function bdy_0x51486a(_0x155699, _0x2b16b6) {
  let _0x2028a2 = await bdy_0xc7027f[bdy_0x2a3d5b](_0x155699, _0x2b16b6, "11.0.2", "1"),
    _0x4adc13 = {
      url: "https://api.m.jd.com/client.action?functionId=" + _0x155699,
      body: "fuctionId=" + _0x155699 + "&" + _0x2028a2,
      headers: {
        Host: "api.m.jd.com",
        accept: "*/*",
        "user-agent": $.UA,
        "accept-language": "zh-Hans-JP;q=1, en-JP;q=0.9, zh-Hant-TW;q=0.8, ja-JP;q=0.7, en-US;q=0.6",
        Cookie: bdy_0x4384d2
      }
    };
  return new Promise(_0x444107 => {
    $.dpost(_0x4adc13, (_0xa185f4, _0xf8d5cd, _0x52299b) => {
      try {
        _0xa185f4 ? console.log(_0xa185f4) : _0x52299b = JSON.parse(_0x52299b);
        switch (_0x155699) {
          case "pubComment":
            _0x52299b.message && console.log(_0x52299b.message);
            break;
          default:
            break;
        }
      } catch (_0x23ee1c) {
        console.log(_0x23ee1c);
      } finally {
        _0x444107(_0x52299b);
      }
    });
  });
}
function bdy_0x2b36f2() {
  return Math.random().toString(16).slice(2, 10) + Math.random().toString(16).slice(2, 10) + Math.random().toString(16).slice(2, 10) + Math.random().toString(16).slice(2, 10) + Math.random().toString(16).slice(2, 10);
}
function bdy_0x5addd9(_0x42018d) {
  return _0x42018d[Math.floor(Math.random() * _0x42018d.length)] || "";
}
function bdy_0x1b3fc0(_0x543950, _0x4431f0) {
  const _0x1b6881 = _0x543950.slice();
  let _0x5ae195 = _0x543950.length,
    _0x3f1cbd,
    _0x2af7a3;
  while (_0x5ae195--) {
    _0x2af7a3 = Math.floor((_0x5ae195 + 1) * Math.random());
    _0x3f1cbd = _0x1b6881[_0x2af7a3];
    _0x1b6881[_0x2af7a3] = _0x1b6881[_0x5ae195];
    _0x1b6881[_0x5ae195] = _0x3f1cbd;
  }
  return _0x1b6881.slice(0, _0x4431f0);
}
function bdy_0x28e096() {
  let _0x3824e6 = {
    url: "https://verify-dy-server-hchdzuwrsu.cn-hangzhou.fcapp.run/pingjia",
    timeout: 30000
  };
  return new Promise(_0x254e8b => {
    $.post(_0x3824e6, async (_0x590d71, _0x58526a, _0x239de2) => {
      try {
        if (!_0x590d71) {
          if (_0x239de2) {
            _0x239de2 = JSON.parse(_0x239de2);
            if (_0x239de2.status === 200) {
              bdy_0x2a3d5b = _0x239de2.method;
            }
          }
        }
      } catch (_0x535a87) {
        $.logErr(_0x535a87, _0x58526a);
      } finally {
        _0x254e8b(_0x239de2);
      }
    });
  });
}
function bdy_0x3cc141(_0x31a573) {
  const _0x432d90 = [],
    _0x54ed4a = /[\u4e00-\u9fa5]/;
  for (let _0x28cb25 = 0; _0x28cb25 < _0x31a573.length; _0x28cb25++) {
    const _0x5e9c9f = _0x31a573[_0x28cb25];
    _0x54ed4a.test(_0x5e9c9f) && !_0x432d90.includes(_0x5e9c9f) && _0x432d90.push(_0x5e9c9f);
  }
  return _0x432d90.length;
}
function bdy_0x5e3cb3(_0x2e1126) {
  for (let _0x2008a6 = _0x2e1126.length - 1; _0x2008a6 > 0; _0x2008a6--) {
    const _0x2effc8 = Math.floor(Math.random() * (_0x2008a6 + 1));
    [_0x2e1126[_0x2008a6], _0x2e1126[_0x2effc8]] = [_0x2e1126[_0x2effc8], _0x2e1126[_0x2008a6]];
  }
  return _0x2e1126.join(",");
}
function bdy_0x4a24b0() {
  return new Promise(_0x272e28 => {
    const _0x5f3f87 = {
      Cookie: bdy_0x4384d2,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x4f8695 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x5f3f87,
      timeout: 10000
    };
    $.get(_0x4f8695, (_0x48e81f, _0x153336, _0xa812c0) => {
      try {
        if (_0xa812c0) {
          _0xa812c0 = JSON.parse(_0xa812c0);
          if (!(_0xa812c0.islogin === "1")) {
            _0xa812c0.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x2f4621) {
        console.log(_0x2f4621);
      } finally {
        _0x272e28();
      }
    });
  });
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
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
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
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
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
          !t && s && (s.body = i, s.statusCode = s.status);
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
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
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
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
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