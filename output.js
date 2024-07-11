var encode_version = "jsjiami.com.v5";
let platform = GetImType();
let userId = GetUserID();
let userName = GetUsername();
let msg = GetContent();
console.log("消息平台：" + platform + "\n用户ID：" + userId + "\n用户名称：" + userName);
let xjkurl = "https://jdsms.zack.xin/api/sms_vip.php?vkey=32fbb0a503118543e86f826a5e73d5b2";
main();
function main() {
  sendText("用户:" + userName + "\n短请输入京东登陆手机号码(回复q退出)：");
  let _0x184b60 = ts("手机号码", 11);
  if (_0x184b60 == "q") {
    return "";
  }
  let _0x51b0f9 = sendFirstRequest(_0x184b60);
  if (_0x51b0f9.status === 200) {
    sendText(_0x51b0f9.msg);
    sendText("用户:" + userName + "\n短请输入验证码：");
    let _0x3c7445;
    for (let _0x11a767 = 0; _0x11a767 < 5; _0x11a767++) {
      let _0x4e9f5e = ts("验证码", 6);
      if (_0x4e9f5e == "q") {
        return "";
      }
      _0x3c7445 = sendSecondRequest(_0x184b60, _0x51b0f9.data.guid, _0x51b0f9.data.lsid, _0x4e9f5e);
      if (_0x3c7445.status === 200) {
        break;
      } else {
        if (_0x3c7445.status === 25) {
          sendText(_0x3c7445.msg + "\n请重新输入");
          continue;
        } else {
          sendText(_0x3c7445.msg + "\n退出短信登录，请用其他方式登录");
          return "";
        }
      }
    }
    let _0x26fcc2 = _0x3c7445.cookie;
    let _0x3f3a9f = _0x3c7445.cookie.match(/(?<=pin=)[^;]+/)[0];
    bangdi(_0x3f3a9f);
    breakIn(_0x26fcc2);
  } else {
    sendText("获取验证码失败");
    sendText(_0x51b0f9.msg);
    return;
  }
}
function ts(_0xebef5d, _0x564edf) {
  let _0x5d4586 = input(60000, 10);
  if (_0x5d4586 == null) {
    sendText("用户:" + userName + "\n输入超时，请重新登陆");
    return "q";
  } else {
    if (_0x5d4586 == "q") {
      sendText("用户:" + userName + "\n已退出短信登陆");
      return "q";
    } else {
      if (_0x5d4586.length != _0x564edf) {
        sendText("用户:" + userName + "\n" + _0xebef5d + "错误，请重新登陆");
        return "q";
      }
    }
  }
  return _0x5d4586;
}
function sendFirstRequest(_0x278572) {
  let _0x52070f;
  request({
    url: xjkurl,
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      mobile: _0x278572
    })
  }, function (_0x2525b7, _0x158718, _0x3b9962, _0x27c91d) {
    _0x52070f = JSON.parse(_0x158718.body);
  });
  return _0x52070f;
}
function sendSecondRequest(_0x334195, _0x5d759b, _0x9a084a, _0x5be31f) {
  let _0x5260d3;
  request({
    url: xjkurl,
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      smsCode: _0x5be31f,
      mobile: _0x334195,
      guid: _0x5d759b,
      lsid: _0x9a084a
    })
  }, function (_0xbccf2f, _0x5b546d, _0x3d83d1, _0x3bf090) {
    _0x5260d3 = JSON.parse(_0x5b546d.body);
  });
  return _0x5260d3;
}
function bangdi(_0x357625) {
  platform = platform.toUpperCase();
  let _0x4ce86c = bucketGet("pin" + platform, _0x357625);
  bucketSet("pin" + platform, _0x357625, userId);
  if (platform == "WB") {
    bucketSet("pinWX", _0x357625, userId);
  }
  tishi(_0x357625, _0x4ce86c);
}
function tishi(_0x5bd1ab, _0x5ffa8c) {
  sendText("用户名称：" + userName + "\n狗东用户：" + _0x5bd1ab + " \n✅成功上车! 正在缓存中...\n\n————重要提示————\n1、请5分钟后再查询\n2、请关闭京东免密支付\n3、账号需要三天重新登陆一次\n4、新上车的次日开始正常跑任务\n****一定要开启二验密*****" + image("http://ludd.fun/img/2222.png"));
  if (_0x5ffa8c == "") {
    notifyMasters("报告老板，[ " + _0x5bd1ab + " ]添加账号！\n绑定客户：" + userId + "(" + platform + ")\n登陆方式：" + msg);
  } else {
    notifyMasters("报告老板，[ " + _0x5bd1ab + " ]更新账号！\n绑定客户：" + userId + "(" + platform + ")\n登陆方式：" + msg);
  }
  return;
}
(function (_0x1d8537, _0x20b24a, _0x230d8f) {
  _0x230d8f = "al";
  try {
    _0x230d8f += "ert";
    _0x20b24a = encode_version;
    if (!(typeof _0x20b24a !== "undefined" && _0x20b24a === "jsjiami.com.v5")) {
      _0x1d8537[_0x230d8f]("删除版本号，js会定期弹窗，还请支持我们的工作");
    }
  } catch (_0x3b686e) {
    _0x1d8537[_0x230d8f]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";