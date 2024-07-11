const $ = new Env("玩一玩-翻翻乐");
const bdy_0x56949d = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0xa5b6ed = $.isNode() ? require("./sendNotify") : "",
  bdy_0x5ed78e = require("./function/dylans"),
  bdy_0xd14f1c = require("./function/dylib.js"),
  bdy_0x53d1bf = process.env.WYW_DBNUM ? process.env.WYW_DBNUM : "100",
  bdy_0x298b77 = process.env.WYW_DBCOUNT ? process.env.WYW_DBCOUNT : "1";
let bdy_0x4abbcb = "",
  bdy_0x584d11 = {};
if (process.env.DY_PROXY) {
  try {
    require("https-proxy-agent");
    bdy_0x584d11 = require("./function/proxy.js");
    $.dget = bdy_0x584d11.intoRequest($.get.bind($));
    $.dpost = bdy_0x584d11.intoRequest($.post.bind($));
  } catch {
    $.log("未安装https-proxy-agent依赖，无法启用代理");
    $.dget = $.get;
    $.dpost = $.post;
  }
} else {
  $.dpost = $.post;
  $.dget = $.get;
}
let bdy_0x4c0c18 = [],
  bdy_0x5ec6ee = "",
  bdy_0x4913a7 = 0;
if ($.isNode()) {
  Object.keys(bdy_0x56949d).forEach(_0x4a18d8 => {
    bdy_0x4c0c18.push(bdy_0x56949d[_0x4a18d8]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x4c0c18 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0xf68cd1 => _0xf68cd1.cookie)].filter(_0x3fbb93 => !!_0x3fbb93);
}
$.helpId = [];
$.fullId = [];
!(async () => {
  if (!bdy_0x4c0c18[0]) {
    const _0x7c248f = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x7c248f);
    return;
  }
  console.log("当前版本：20240621 ");
  console.log("问题建议：https://t.me/dylan_jdpro");
  console.log("环境变量：\n    WYW_DBNUM='200' 翻翻乐投注多少奖票，默认100\n    WYW_DBCOUNT='2' 翻倍次数，默认1");
  console.log("\n每天可参与10次，每次投注最大100");
  $.total_join = 0;
  $.total_suc = 0;
  for (let _0x2a4c4c = 0; _0x2a4c4c < bdy_0x4c0c18.length; _0x2a4c4c++) {
    bdy_0x5ec6ee = bdy_0x4c0c18[_0x2a4c4c];
    originCookie = bdy_0x4c0c18[_0x2a4c4c];
    if (bdy_0x5ec6ee) {
      $.UserName = decodeURIComponent(bdy_0x5ec6ee.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x5ec6ee.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x2a4c4c + 1;
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      $.outFlag = false;
      $.isban = false;
      $.hasRisk = false;
      bdy_0x4abbcb = bdy_0x53d1bf;
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      bdy_0x111e80();
      if (!$.isLogin) {
        const _0xcbb29 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0xcbb29);
        $.isNode() && (await bdy_0xa5b6ed.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      $.index != 1 && bdy_0x584d11.swip && (await bdy_0x584d11.swip());
      await bdy_0x2a705b();
      if ($.outFlag) {
        break;
      }
    }
  }
  console.log("\n以上执行账号今日总战绩：" + $.total_suc + "/" + $.total_join + " 胜率：" + ($.total_suc / $.total_join * 100).toFixed(2) + "%");
})().catch(_0xa35011 => {
  return $.logErr(_0xa35011);
}).finally(() => {
  return $.done();
});
async function bdy_0x2931e3() {
  for (let _0x583246 = 0; _0x583246 < bdy_0x4c0c18.length; _0x583246++) {
    bdy_0x5ec6ee = bdy_0x4c0c18[_0x583246];
    if (bdy_0x5ec6ee) {
      $.UserName = decodeURIComponent(bdy_0x5ec6ee.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x5ec6ee.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x583246 + 1;
      console.log("\n-------开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "------\n");
      bdy_0x111e80();
      $.nonum = false;
      $.hphotflag = false;
      $.fullId.length != 0 && ($.helpId = $.helpId.filter(_0x2f06ec => !$.fullId.includes(_0x2f06ec)), $.fullId = []);
      for (let _0x5be75c of $.helpId) {
        $.itemId = _0x5be75c;
        console.log("去助力 --> " + $.itemId);
        await bdy_0x57de9c("wanyiwan_assist");
        if ($.nonum || $.hphotflag) {
          break;
        }
        await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
      }
      if ($.outFlag) {
        break;
      }
    }
  }
}
async function bdy_0x2a705b() {
  try {
    $.taskList = [];
    await bdy_0x57de9c("wanyiwan_home");
    if (!$.isLogin) {
      console.log("未登录");
      return;
    }
    await $.wait(parseInt(Math.random() * 500 + 500, 10));
    await bdy_0x57de9c("turnHappyHome");
    if ($.joinTimes === "") {
      return;
    }
    if (parseInt(bdy_0x4abbcb) > 100) {
      bdy_0x4abbcb = 100;
    }
    if ($.joinTimes == 10) {
      console.log("\n今日已翻10次，明日再来吧！");
    } else {
      if ($.leftTime == 0) {
        console.log("\n去翻翻乐(投注" + bdy_0x4abbcb + "奖票,翻倍" + bdy_0x298b77 + "次)...");
        $.dbsuc = false;
        for (let _0x4b3c6f = 0; _0x4b3c6f < bdy_0x298b77; _0x4b3c6f++) {
          console.log("开始" + (_0x4b3c6f + 1) + "次翻倍...");
          if (_0x4b3c6f > 0) {
            bdy_0x4abbcb = -1;
          }
          await bdy_0x57de9c("turnHappyDouble");
          if (!$.dbsuc) {
            break;
          }
          await $.wait(parseInt(Math.random() * 1000 + 1500, 10));
        }
        $.dbsuc && (await bdy_0x57de9c("turnHappyReceive"));
      } else {
        console.log("\n" + bdy_0xd14f1c.SecToTime(parseInt($.leftTime / 1000)) + "后可参与翻翻乐");
      }
    }
    await $.wait(parseInt(Math.random() * 500 + 500, 10));
    await bdy_0x57de9c("turnHappyDetailList");
    if ($.detailList.length != 0) {
      let _0x553025 = new Date().getDate(),
        _0x57d384 = $.detailList.filter(_0x5ac61c => new Date(_0x5ac61c.time).getDate() == _0x553025 && _0x5ac61c.operateType == 1),
        _0x1b4299 = $.detailList.filter(_0x33d756 => new Date(_0x33d756.time).getDate() == _0x553025 && _0x33d756.operateType == 3);
      console.log("\n今日翻倍战绩：" + _0x57d384.length + "/" + _0x1b4299.length + " " + (_0x1b4299.length > 0 ? "胜率：" + (_0x57d384.length / _0x1b4299.length * 100).toFixed(2) + "%" : ""));
      let _0xf491f8 = new Date().getDate() - 1,
        _0x1f5a9a = $.detailList.filter(_0x45470b => new Date(_0x45470b.time).getDate() == _0xf491f8 && _0x45470b.operateType == 1),
        _0x4503ca = $.detailList.filter(_0x1ba41f => new Date(_0x1ba41f.time).getDate() == _0xf491f8 && _0x1ba41f.operateType == 3);
      console.log("昨日翻倍战绩：" + _0x1f5a9a.length + "/" + _0x4503ca.length + " " + (_0x4503ca.length > 0 ? "胜率：" + (_0x1f5a9a.length / _0x4503ca.length * 100).toFixed(2) + "%" : ""));
      $.total_join += _0x1b4299.length;
      $.total_suc += _0x57d384.length;
    } else {
      console.log("\n没有历史翻倍战绩");
    }
    await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
  } catch (_0x54b68d) {
    console.log(_0x54b68d);
  }
}
async function bdy_0x57de9c(_0x568501) {
  if ($.outFlag || $.isban) {
    return;
  }
  let _0x29974e = "",
    _0x33597f,
    _0x3e49b6,
    _0x39876f = "post",
    _0x5290bd = "https://api.m.jd.com/client.action",
    _0x125288 = "signed_wh5";
  switch (_0x568501) {
    case "wanyiwan_sign":
      const _0x184ada = {
        version: 1
      };
      _0x29974e = _0x184ada;
      _0x33597f = "d12dd";
      _0x3e49b6 = "wanyiwan_sign";
      break;
    case "wanyiwan_home":
      const _0x50c1ee = {
        outsite: 0,
        firstCall: 1,
        version: 1,
        lbsSwitch: true
      };
      _0x29974e = _0x50c1ee;
      _0x33597f = "c81ad";
      _0x3e49b6 = "wanyiwan_home";
      break;
    case "apTaskList":
      _0x5290bd = "https://api.m.jd.com/api?functionId=apTaskList&body=%7B%22linkId%22%3A%22Fl1LmxG_f0poD7w1ycZqnw%22%7D&t=1715170975269&appid=activities_platform&client=android&clientVersion=6.24.0&loginType=2&loginWQBiz=wegame&h5st=null&build=22779&screen=393*873&networkType=wifi&eufv=1&cthr=1";
      _0x39876f = "get";
      break;
    case "startTask":
      const _0x1877d2 = {
        itemId: $.itemId,
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        actionType: 1,
        version: 1
      };
      _0x29974e = _0x1877d2;
      _0x33597f = "89db2";
      _0x3e49b6 = "wanyiwan_do_task";
      break;
    case "endTask":
      const _0x56ef8c = {
        itemId: $.itemId,
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        actionType: 0,
        version: 1
      };
      _0x29974e = _0x56ef8c;
      _0x33597f = "89db2";
      _0x3e49b6 = "wanyiwan_do_task";
      break;
    case "award":
      const _0x1ad380 = {
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        version: 1
      };
      _0x29974e = _0x1ad380;
      _0x3e49b6 = "wanyiwan_task_receive_award";
      break;
    case "wanyiwan_assist":
      const _0xdc657 = {
        inviteCode: $.itemId,
        version: 1
      };
      _0x29974e = _0xdc657;
      _0x33597f = "ba505";
      _0x3e49b6 = "wanyiwan_assist";
      break;
    case "turnHappyHome":
      _0x5290bd = "https://api.m.jd.com/api";
      const _0x4c3718 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x29974e = _0x4c3718;
      _0x125288 = "activities_platform";
      _0x3e49b6 = "turnHappyHome";
      break;
    case "turnHappyDouble":
      _0x5290bd = "https://api.m.jd.com/api";
      _0x29974e = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ",
        turnNum: parseInt(bdy_0x4abbcb)
      };
      _0x33597f = "614f1";
      _0x125288 = "activities_platform";
      _0x3e49b6 = "turnHappyDouble";
      break;
    case "turnHappyReceive":
      _0x5290bd = "https://api.m.jd.com/api";
      const _0x23dbc0 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x29974e = _0x23dbc0;
      _0x33597f = "25fac";
      _0x125288 = "activities_platform";
      _0x3e49b6 = "turnHappyReceive";
      break;
    case "turnHappyDetailList":
      _0x5290bd = "https://api.m.jd.com/api";
      const _0x1d2678 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ",
        pageNum: 1,
        pageSize: 30
      };
      _0x29974e = _0x1d2678;
      _0x125288 = "activities_platform";
      _0x3e49b6 = "turnHappyDetailList";
      break;
    case "superRedBagHome":
      _0x5290bd = "https://api.m.jd.com/api";
      const _0x1083dc = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x29974e = _0x1083dc;
      _0x33597f = "5be1b";
      _0x125288 = "activity_platform_se";
      _0x3e49b6 = "superRedBagHome";
      break;
    case "superRedBagDraw":
      _0x5290bd = "https://api.m.jd.com/api";
      const _0x3951be = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x29974e = _0x3951be;
      _0x33597f = "89cfe";
      _0x125288 = "activity_platform_se";
      _0x3e49b6 = "superRedBagDraw";
      break;
    default:
      console.log("错误" + _0x568501);
  }
  if (_0x33597f) {
    let _0x255990 = {
      appId: _0x33597f,
      functionId: _0x3e49b6,
      body: _0x29974e,
      appid: _0x125288,
      clientVersion: $.UA.split(";")[2],
      client: "ios",
      user: $.UserName,
      t: Date.now(),
      ua: $.UA
    };
    _0x29974e = await bdy_0x5ed78e.getbody(_0x255990);
    if (!_0x29974e) {
      return;
    }
  } else {
    _0x29974e && (_0x29974e = "functionId=" + _0x3e49b6 + "&body=" + encodeURIComponent(JSON.stringify(_0x29974e)) + "&t=" + Date.now() + "&appid=" + _0x125288 + "&client=ios&" + $.UA.split(";")[2] + "&cthr=1&networkType=wifi");
  }
  let _0x188947 = bdy_0x240d78(_0x5290bd, _0x29974e);
  return new Promise(async _0x4963c4 => {
    $["d" + _0x39876f](_0x188947, async (_0x373531, _0x162462, _0x4157cb) => {
      try {
        if (_0x373531) {
          if (_0x162462 && typeof _0x162462.statusCode != "undefined") {
            if (_0x162462.statusCode == 493) {
              if (bdy_0x4913a7 < 6) {
                bdy_0x4913a7++;
                await bdy_0x57de9c(_0x568501);
                return;
              }
              console.log("ip可能被限制，过10分钟后再执行脚本\n");
              $.outFlag = true;
            }
          }
          console.log("" + $.toStr(_0x373531, _0x373531));
        } else {
          if (_0x4157cb.includes("doctype") && bdy_0x4913a7 < 6) {
            bdy_0x4913a7++;
            await bdy_0x57de9c(_0x568501);
            return;
          }
          bdy_0x4913a7 = 0;
          bdy_0x181ccb(_0x568501, _0x4157cb);
        }
      } catch (_0x5f105a) {
        console.log(_0x5f105a, _0x162462);
      } finally {
        _0x4963c4();
      }
    });
  });
}
function bdy_0x54d7b3(_0x18dae3) {
  let _0x2e1f2c = "";
  switch (type) {
    case [_0x2e1f2c]:
      const _0x49a02b = {
        ed: ed
      };
      _0xf1f6le = _0x49a02b;
      break;
    case [_0x2e1f2c]:
      const _0x581ef0 = {
        bd: bd
      };
      _0xf1f6lc = _0x581ef0;
      break;
    case [_0x2e1f2c]:
      const _0x1f4d58 = {
        ed: ed
      };
      _0xf1f6lf = _0x1f4d58;
      break;
    case [_0x2e1f2c]:
      const _0x55b46b = {
        ed: ed
      };
      _0xf1f6lg = _0x55b46b;
      break;
    case [_0x2e1f2c]:
      const _0x40b64f = {
        ed: ed
      };
      _0xf1f6lv = _0x40b64f;
      break;
  }
}
async function bdy_0x181ccb(_0x2e787f, _0x313efc) {
  let _0x539fbe = "";
  try {
    _0x539fbe = JSON.parse(_0x313efc);
  } catch (_0xfd0812) {
    console.log(_0x2e787f + " 执行任务异常");
  }
  try {
    switch (_0x2e787f) {
      case "award":
        _0x539fbe.code == 0 ? _0x539fbe.data.bizCode == 0 ? console.log("任务完成，获得" + _0x539fbe.data.result.rewardCount + "奖票 🎫") : console.log(_0x539fbe.data.bizMsg) : console.log(_0x539fbe.message);
        break;
      case "wanyiwan_sign":
        _0x539fbe.code == 0 ? _0x539fbe.data.bizCode == 0 ? console.log("签到成功,获得" + _0x539fbe.data.result.getScore + "奖票 🎫") : console.log(_0x539fbe.data.bizMsg) : console.log(_0x539fbe.message);
        break;
      case "wanyiwan_assist":
        if (_0x539fbe.code == 0) {
          if (_0x539fbe.data.bizCode == 0) {
            console.log("✔️ 助力成功");
            $.nonum = true;
          } else {
            if (_0x539fbe.data.bizMsg.includes("太多人") || _0x539fbe.data.bizMsg.includes("重复")) {
              console.log("❌", _0x539fbe.data.bizCode, _0x539fbe.data.bizMsg);
              $.nonum = true;
            } else {
              if (_0x539fbe.data.bizMsg.includes("已经完成")) {
                console.log("❌", _0x539fbe.data.bizCode, _0x539fbe.data.bizMsg);
                $.fullId.push($.itemId);
              } else {
                _0x539fbe.data.bizMsg.includes("火爆") ? (console.log("❌", _0x539fbe.data.bizCode, _0x539fbe.data.bizMsg), $.hphotflag = true) : console.log("❌", _0x539fbe.data.bizCode, _0x539fbe.data.bizMsg);
              }
            }
          }
        } else {
          console.log(_0x539fbe.message);
          _0x539fbe.message.includes("火爆") && ($.hphotflag = true);
        }
        break;
      case "wanyiwan_home":
        _0x539fbe.code == 0 ? _0x539fbe.data.bizCode == 0 ? (_0x539fbe.data.result.popWindows.length != 0 && console.log("获得新手奖励：", _0x539fbe.data.result.popWindows[0].getScore, "奖票 🎫"), console.log("当前奖票总量：" + _0x539fbe.data.result.score + " 🎫"), $.isLogin = _0x539fbe.data?.["result"]?.["isLogin"], $.taskList = _0x539fbe.data?.["result"]?.["taskBoard"] || [], $.signstatus = _0x539fbe.data?.["result"]?.["signBoard"]?.["status"] || 0) : console.log(_0x539fbe.data.bizMsg) : console.log(_0x539fbe.message);
        break;
      case "turnHappyHome":
        _0x539fbe.success ? ($.leftTime = _0x539fbe.data.leftTime, $.joinTimes = _0x539fbe.data.joinTimes, $.logIn = _0x539fbe.data.logIn) : (console.log(_0x539fbe.errMsg), $.leftTime = "", $.joinTimes = "");
        break;
      case "turnHappyDouble":
        if (_0x539fbe.success) {
          if (_0x539fbe.data.rewardState == 1) {
            console.log("翻倍成功，获得 " + _0x539fbe.data.rewardValue + "奖票 🎫");
            $.dbsuc = true;
          } else {
            $.dbsuc = false;
            console.log("叼了，翻倍失败！再接再厉！");
          }
        } else {
          console.log(_0x539fbe.errMsg);
          $.dbsuc = false;
        }
        break;
      case "turnHappyDouble":
        _0x539fbe.success ? _0x539fbe.data.rewardState == 1 ? (console.log("翻倍成功，获得 " + _0x539fbe.data.rewardValue + "奖票 🎫"), $.dbsuc = true) : ($.dbsuc = false, console.log("叼了，翻倍失败！再接再厉！")) : (console.log(_0x539fbe.errMsg), $.dbsuc = false);
        break;
      case "turnHappyDetailList":
        _0x539fbe.success ? $.detailList = _0x539fbe.data.result.detailList || [] : (console.log(_0x539fbe.errMsg), $.detailList = []);
        break;
      case "superRedBagHome":
        _0x539fbe.success ? ($.sceneStatus = _0x539fbe.data.sceneStatus, $.nextLeftTime = _0x539fbe.data.nextLeftTime) : console.log(_0x539fbe.errMsg);
        break;
      case "superRedBagDraw":
        if (_0x539fbe.success) {
          $.shakeLeftTime = _0x539fbe.data.shakeLeftTime;
          const {
            prizeDrawVo = ""
          } = _0x539fbe.data;
          if (prizeDrawVo) {
            switch (prizeDrawVo.prizeType) {
              case 24:
                console.log("获得：" + prizeDrawVo.amount + "票奖 🎫");
                $.sucdraw++;
                break;
              case 1:
                console.log("获得:" + prizeDrawVo.prizeConfigName);
                break;
              default:
                console.log(prizeDrawVo);
                break;
            }
          } else {
            console.log(_0x313efc);
          }
        } else {
          console.log(_0x539fbe.errMsg);
        }
        break;
      case "startTask":
      case "turnHappyReceive":
      case "endTask":
        break;
      default:
        console.log(_0x2e787f + " -> " + _0x313efc);
    }
    if (typeof _0x539fbe == "object") {
      _0x539fbe.errorMessage && _0x539fbe.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
    }
  } catch (_0x38d2c7) {
    console.log(_0x2e787f + " " + _0x38d2c7);
  }
}
function bdy_0x240d78(_0x57b085, _0x255de3) {
  let _0x249014 = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    Cookie: bdy_0x5ec6ee,
    "User-Agent": $.UA
  };
  const _0xfdd416 = {
    url: _0x57b085,
    headers: _0x249014,
    timeout: 30000,
    ...(_0x255de3 ? {
      body: _0x255de3
    } : {})
  };
  return _0xfdd416;
}
async function bdy_0x111e80() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + bdy_0x1dfca7(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function bdy_0x1dfca7(_0x12a45e) {
  _0x12a45e = _0x12a45e || 32;
  let _0x1758b5 = "abcdef0123456789",
    _0x4ee8cf = _0x1758b5.length,
    _0x4f8def = "";
  for (i = 0; i < _0x12a45e; i++) {
    _0x4f8def += _0x1758b5.charAt(Math.floor(Math.random() * _0x4ee8cf));
  }
  return _0x4f8def;
}
function bdy_0x271177(_0x3fa5b0) {
  if (typeof _0x3fa5b0 == "string") {
    try {
      return JSON.parse(_0x3fa5b0);
    } catch (_0xf06a9b) {
      console.log(_0xf06a9b);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function bdy_0x2102d7() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x145d21 => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    let _0x44b440 = {
      venderId: "" + $.joinVenderId + "",
      shopId: "" + $.joinVenderId + "",
      bindByVerifyCodeFlag: 1,
      registerExtend: {},
      writeChildFlag: 0,
      channel: 406
    };
    $.shopactivityId == "" && delete _0x44b440.activityId;
    let _0xf8e9ee = {
      appId: "27004",
      fn: "bindWithVender",
      body: _0x44b440,
      apid: "shopmember_m_jd_com",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: $.UA
    };
    _0x44b440 = await dyy.getbody(_0xf8e9ee);
    const _0x5976fa = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x5ec6ee,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x29e6d5 = {
      url: "https://api.m.jd.com/client.action?" + _0x44b440 + "&uuid=88888",
      headers: _0x5976fa,
      timeout: 30000
    };
    $.dget(_0x29e6d5, async (_0x32e572, _0x1c2591, _0x4f43da) => {
      try {
        _0x4f43da = _0x4f43da && _0x4f43da.match(/jsonp_.*?\((.*?)\);/) && _0x4f43da.match(/jsonp_.*?\((.*?)\);/)[1] || _0x4f43da;
        let _0x942959 = $.toObj(_0x4f43da, _0x4f43da);
        if (_0x942959 && typeof _0x942959 == "object") {
          if (_0x942959 && _0x942959.success === true) {
            console.log("    " + _0x942959.message);
            $.errorJoinShop = _0x942959.message;
            if (_0x942959.result && _0x942959.result.giftInfo) {
              for (let _0x8e1979 of _0x942959.result.giftInfo.giftList) {
                console.log("入会获得:" + _0x8e1979.discountString + _0x8e1979.prizeName + _0x8e1979.secondLineDesc);
              }
            }
          } else {
            _0x942959 && typeof _0x942959 == "object" && _0x942959.message ? ($.errorJoinShop = _0x942959.message, console.log("" + (_0x942959.message || ""))) : console.log(_0x4f43da);
          }
        } else {
          console.log(_0x4f43da);
        }
      } catch (_0x2c898a) {
        $.logErr(_0x2c898a, _0x1c2591);
      } finally {
        _0x145d21();
      }
    });
  });
}
async function bdy_0x397edd() {
  return new Promise(async _0x5ea719 => {
    let _0x4feff4 = {
      venderId: $.joinVenderId,
      payUpShop: true,
      queryVersion: "10.5.2",
      appid: "ef79a",
      needSecurity: true,
      bizId: "shop_view_app",
      channel: 406
    };
    let _0x349bfe = {
      appId: "ef79a",
      fn: "getShopOpenCardInfo",
      body: _0x4feff4,
      apid: "jd_shop_member",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    _0x4feff4 = await dyy.getbody(_0x349bfe);
    const _0x55acda = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x5ec6ee,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    const _0x2372bc = {
      url: "https://api.m.jd.com/client.action?" + _0x4feff4 + "&uuid=88888",
      headers: _0x55acda,
      timeout: 60000
    };
    $.get(_0x2372bc, async (_0x1b7d61, _0x4b3fd8, _0x358583) => {
      try {
        _0x358583 = _0x358583 && _0x358583.match(/jsonp_.*?\((.*?)\);/) && _0x358583.match(/jsonp_.*?\((.*?)\);/)[1] || _0x358583;
        let _0x318fca = $.toObj(_0x358583, _0x358583);
        if (_0x318fca && typeof _0x318fca == "object") {
          _0x318fca && _0x318fca.success == true && (console.log("去加入 -> " + (_0x318fca.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x318fca.result[0].interestsRuleList && _0x318fca.result[0].interestsRuleList[0] && _0x318fca.result[0].interestsRuleList[0].interestsInfo && _0x318fca.result[0].interestsRuleList[0].interestsInfo.activityId || "");
        } else {
          console.log(_0x358583);
        }
      } catch (_0x2fe629) {
        $.logErr(_0x2fe629, _0x4b3fd8);
      } finally {
        _0x5ea719();
      }
    });
  });
}
function bdy_0x3cf464(_0x2143f5, _0x1985e4) {
  return Math.floor(Math.random() * (_0x1985e4 - _0x2143f5)) + _0x2143f5;
}
function bdy_0x1fd7b6(_0x47f367 = +new Date()) {
  var _0x133c55 = new Date(_0x47f367 + 28800000);
  return _0x133c55.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function bdy_0x54434b() {
  return new Promise(_0x340993 => {
    const _0x3160f1 = {
      Cookie: bdy_0x5ec6ee,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x5ac226 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x3160f1,
      timeout: 10000
    };
    $.get(_0x5ac226, (_0x40fe1a, _0x3c1a2f, _0x7475fe) => {
      try {
        if (_0x7475fe) {
          _0x7475fe = JSON.parse(_0x7475fe);
          if (!(_0x7475fe.islogin === "1")) {
            _0x7475fe.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x44ee5a) {
        console.log(_0x44ee5a);
      } finally {
        _0x340993();
      }
    });
  });
}
function Env(o, t) {
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
      return new Promise((r, i) => {
        s.call(this, t, (t, e, s) => {
          t ? i(t) : r(e);
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
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
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
      return new Promise(r => {
        this.get({
          url: t
        }, (t, e, s) => r(s));
      });
    }
    runScript(a, o) {
      return new Promise(r => {
        let t = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        t = t && t.replace(/\n/g, "").trim();
        var e = (e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout")) ? +e : 20,
          [s, i] = (e = o && o.timeout ? o.timeout : e, t.split("@"));
        this.post({
          url: `http://${i}/v1/scripting/evaluate`,
          body: {
            script_text: a,
            mock_type: "cron",
            timeout: e
          },
          headers: {
            "X-Key": s,
            Accept: "*/*"
          },
          timeout: e
        }, (t, e, s) => r(s));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      this.fs = this.fs || require("fs");
      this.path = this.path || require("path");
      var t = this.path.resolve(this.dataFile),
        e = this.path.resolve(process.cwd(), this.dataFile),
        s = this.fs.existsSync(t),
        r = !s && this.fs.existsSync(e);
      if (!s && !r) {
        return {};
      }
      r = s ? t : e;
      try {
        return JSON.parse(this.fs.readFileSync(r));
      } catch (t) {
        return {};
      }
    }
    writedata() {
      var t, e, s, r, i;
      this.isNode() && (this.fs = this.fs || require("fs"), this.path = this.path || require("path"), t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), r = !(s = this.fs.existsSync(t)) && this.fs.existsSync(e), i = JSON.stringify(this.data), !s && r ? this.fs.writeFileSync(e, i) : this.fs.writeFileSync(t, i));
    }
    lodash_get(t, e, s) {
      let r = t;
      for (const t of e.replace(/\[(\d+)\]/g, ".$1").split(".")) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, r, e) {
      Object(t) === t && ((r = Array.isArray(r) ? r : r.toString().match(/[^.[\]]+/g) || []).slice(0, -1).reduce((t, e, s) => Object(t[e]) === t[e] ? t[e] : t[e] = Math.abs(r[s + 1]) >> 0 == +r[s + 1] ? [] : {}, t)[r[r.length - 1]] = e);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        var [, s, r] = /^@(.*?)\.(.*?)$/.exec(t);
        if (s = s ? this.getval(s) : "") {
          try {
            const t = JSON.parse(s);
            e = t ? this.lodash_get(t, r, "") : e;
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
        var [, r, i] = /^@(.*?)\.(.*?)$/.exec(e),
          a = this.getval(r),
          a = r ? "null" === a ? null : a || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, i, t);
          s = this.setval(JSON.stringify(e), r);
        } catch (e) {
          this.lodash_set(a = {}, i, t);
          s = this.setval(JSON.stringify(a), r);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got || require("got");
      this.cktough = this.cktough || require("tough-cookie");
      this.ckjar = this.ckjar || new this.cktough.CookieJar();
      t && (t.headers = t.headers || {}, t) && (t.headers = t.headers || {}, void 0 === t.headers.cookie) && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar);
    }
    tmout() {
      return new Promise((t, e) => {
        this.tmoutId = setTimeout(() => {
          this.prms.cancel();
          e({
            message: "timemout",
            response: ""
          });
        }, 50000);
      });
    }
    get(t, a = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, e, s) => {
            !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode);
            a(t, e, s);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            var {
              statusCode: t,
              statusCode: e,
              headers: s,
              body: r,
              bodyBytes: i
            } = t;
            a(null, {
              status: t,
              statusCode: e,
              headers: s,
              body: r,
              bodyBytes: i
            }, r, i);
          }, t => a(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          this.initGotEnv(t);
          this.prms = this.got(t).on("redirect", (t, e) => {
            try {
              var s;
              t.headers["set-cookie"] && ((s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString()) && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar);
            } catch (t) {
              this.logErr(t);
            }
          });
          Promise.race([this.prms, this.tmout()]).then(t => {
            var {
              statusCode: t,
              statusCode: e,
              headers: s,
              rawBody: r,
              body: i
            } = t;
            a(null, {
              status: t,
              statusCode: e,
              headers: s,
              rawBody: r,
              body: i
            }, i);
            clearTimeout(this.tmoutId);
          }, t => {
            var {
              message: t,
              response: e
            } = t;
            clearTimeout(this.tmoutId);
            a(t, e, e && e.body);
          });
      }
    }
    post(t, a = () => {}) {
      var e = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[e](t, (t, e, s) => {
            !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode);
            a(t, e, s);
          });
          break;
        case "Quantumult X":
          t.method = e;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            var {
              statusCode: t,
              statusCode: e,
              headers: s,
              body: r,
              bodyBytes: i
            } = t;
            a(null, {
              status: t,
              statusCode: e,
              headers: s,
              body: r,
              bodyBytes: i
            }, r, i);
          }, t => a(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          this.initGotEnv(t);
          var {
            url: s,
            ...r
          } = t;
          this.prms = this.got[e](s, r);
          Promise.race([this.prms, this.tmout()]).then(t => {
            var {
              statusCode: t,
              statusCode: e,
              headers: s,
              rawBody: r,
              body: i
            } = t;
            a(null, {
              status: t,
              statusCode: e,
              headers: s,
              rawBody: r,
              body: i
            }, i);
            clearTimeout(this.tmoutId);
          }, t => {
            var {
              message: t,
              response: e
            } = t;
            clearTimeout(this.tmoutId);
            a(t, e, e && e.body);
          });
      }
    }
    time(t, e = null) {
      var s,
        r = {
          "M+": (e = e ? new Date(e) : new Date()).getMonth() + 1,
          "d+": e.getDate(),
          "H+": e.getHours(),
          "m+": e.getMinutes(),
          "s+": e.getSeconds(),
          "q+": Math.floor((e.getMonth() + 3) / 3),
          S: e.getMilliseconds()
        };
      for (s in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), r) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[s] : ("00" + r[s]).substr(("" + r[s]).length)));
      return t;
    }
    queryStr(e) {
      let s = "";
      for (const r in e) {
        let t = e[r];
        null != t && "" !== t && ("object" == typeof t && (t = JSON.stringify(t)), s += `${r}=${t}&`);
      }
      return s = s.substring(0, s.length - 1);
    }
    msg(t = o, e = "", s = "", r = {}) {
      var i,
        a = r => {
          const {
            $open: t,
            $copy: e,
            $media: i,
            $mediaMime: a
          } = r;
          switch (typeof r) {
            case void 0:
              return r;
            case "string":
              switch (this.getEnv()) {
                case "Surge":
                case "Stash":
                default:
                  return {
                    url: r
                  };
                case "Loon":
                case "Shadowrocket":
                  return r;
                case "Quantumult X":
                  return {
                    "open-url": r
                  };
                case "Node.js":
                  return;
              }
            case "object":
              switch (this.getEnv()) {
                case "Surge":
                case "Stash":
                case "Shadowrocket":
                default:
                  var o = {},
                    s = r.openUrl || r.url || r["open-url"] || t;
                  if (s && Object.assign(o, {
                    action: "open-url",
                    url: s
                  }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(o, {
                    action: "clipboard",
                    text: s
                  }), i) {
                    let t, e, s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [r] = i.split(";"),
                          [, a] = i.split(",");
                        e = a;
                        s = r.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          var e,
                            s = {
                              JVBERi0: "application/pdf",
                              R0lGODdh: "image/gif",
                              R0lGODlh: "image/gif",
                              iVBORw0KGgo: "image/png",
                              "/9j/": "image/jpg"
                            };
                          for (e in s) if (0 === t.indexOf(e)) {
                            return s[e];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(o, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": a ?? s
                    });
                  }
                  Object.assign(o, {
                    "auto-dismiss": r["auto-dismiss"],
                    sound: r.sound
                  });
                  return o;
                case "Loon":
                  {
                    const e = {};
                    (s = r.openUrl || r.url || r["open-url"] || t) && Object.assign(e, {
                      openUrl: s
                    });
                    var n = r.mediaUrl || r["media-url"];
                    (n = i?.startsWith("http") ? i : n) && Object.assign(e, {
                      mediaUrl: n
                    });
                    console.log(JSON.stringify(e));
                    return e;
                  }
                case "Quantumult X":
                  {
                    const a = {};
                    (o = r["open-url"] || r.url || r.openUrl || t) && Object.assign(a, {
                      "open-url": o
                    });
                    n = r["media-url"] || r.mediaUrl;
                    (n = i?.startsWith("http") ? i : n) && Object.assign(a, {
                      "media-url": n
                    });
                    (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(a, {
                      "update-pasteboard": s
                    });
                    console.log(JSON.stringify(a));
                    return a;
                  }
                case "Node.js":
                  return;
              }
            default:
              return;
          }
        };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(t, e, s, a(r));
            break;
          case "Quantumult X":
            $notify(t, e, s, a(r));
            break;
          case "Node.js":
        }
      }
      this.isMuteLog || ((i = ["", "==============📣系统通知📣=============="]).push(t), e && i.push(e), s && i.push(s), console.log(i.join("\n")), this.logs = this.logs.concat(i));
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.debug + t.map(t => t ?? String(t)).join(this.logSeparator)));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.info + t.map(t => t ?? String(t)).join(this.logSeparator)));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.warn + t.map(t => t ?? String(t)).join(this.logSeparator)));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.error + t.map(t => t ?? String(t)).join(this.logSeparator)));
    }
    log(...t) {
      0 < t.length && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, void 0 !== t.message ? t.message : t);
      }
    }
    wait(e) {
      return new Promise(t => setTimeout(t, e));
    }
    done(t = {}) {
      var e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(o, t);
}