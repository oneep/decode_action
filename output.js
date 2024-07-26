const proenv_0x5ed5b0 = require("axios");
async function proenv_0x491a56(_0xc10536) {
  return new Promise((_0x43a765, _0x208b09) => {
    setTimeout(() => {
      _0x43a765(_0xc10536);
    }, _0xc10536);
  });
}
async function proenv_0x160406(_0x22be13, _0x2afbec, _0x33da30) {
  if (_0x22be13) {
    let _0x69e3ab = _0x2afbec.pin || "null";
    if (_0x2afbec.pin) {
      delete _0x2afbec.pin;
    }
    let _0x4326fa = {
      version: "4.7.4",
      pin: _0x69e3ab,
      ua: _0x33da30 || "jdapp;android;12.2.0;;;M/5.0;appBuild/98990;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A1698650417505%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22CNG5DtLrZWG3YwG5DNVsDq%3D%3D%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22CNG5DtLrZWG3YwG5DNVsDq%3D%3D%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 9; ONEPLUS A3000 Build/PKQ1.181203.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046269 Mobile Safari/537.36",
      body: _0x2afbec,
      h5st: "20240725040043008;6ytmgy6y9n5izyt2;" + _0x22be13 + ";tk03wab331c5a18nD40gIL4TYnyTOQwwlvdqMZgrXsBtSC9Z8XJiLIhVX_3-n2Oj0UONcWGA9uodxKGAvImos21qkfXY;915af7c343ae01aad13bbc462bca0048;4.7;1721851243008;UO2F0srrfp3crBL61Xey_WTmLbAah1yfDkkBEmXfqhNKY_2L85YIKd1Ri1yTyEAJDqVnD7pz3LtIkrklcu3dNROWUKJavOuF-5kOdupun77A71b8kDQre6GHMTxp0Vf7bP9zcmAbDrqri31IOVOjmvBClZLQqMdM5q_sUHYtxc_COkZ1x_KJaRi_yFSKMn3LuaqYhtXJpnI-Hntyft1qR17_Pc1k6tqVOlMqOGIwfbYpaWlv1RX1b0Vx0q1RxX0RDf3L6-R5cotMLOws-Htf0cimik6aG2zNYN0KKUWRuIcvjeXX5FmrVAdMZ_Q6db16zznv9Jm_3yekif5gf0pVZWzx0movJFKvl8OU5M93-dfYjYsFaDpOUzoDAZZfPiDPIMUEKMLsjqY7KysdM8iC851e0yDzhNbGQ-s25hhve7MHz4aM7i9CeLA4AXI_do6RnIRwIq9i6SdMtJRHmUmaTZr8;75ca9d6372773d18f80040b4b88acd0b"
    };
    _0x4326fa = JSON.stringify(_0x4326fa);
    let _0xe2ba9a = "http://hz.feverrun.top:7470/h5st";
    let _0x144234 = {
      Accept: "*/*",
      Connection: "keep-alive",
      "Content-Type": "application/json",
      "User-Agent": "jdapp;android;11.4.7;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; PCCM0o470 Build/QKQ1.191021.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046011 Mobile Safari/537.36"
    };
    const _0x2d0bff = {
      headers: _0x144234,
      timeout: 60000
    };
    return proenv_0x5ed5b0.post(_0xe2ba9a, _0x4326fa, _0x2d0bff).then(function (_0x2c0952) {
      if (_0x2c0952.data.code == 200 && _0x2c0952.data) {
        _0x2c0952 = _0x2c0952.data;
        if (typeof _0x2c0952 == "object") {
          try {
            return _0x2c0952.body.h5st.h5st || null;
          } catch (_0x3e40e0) {
            return null;
          }
        } else {
          _0x2c0952 = JSON.parse(_0x2c0952);
          try {
            return _0x2c0952.body.h5st.h5st || null;
          } catch (_0xb4aaf2) {
            return null;
          }
          return null;
        }
      } else {
        return null;
      }
    }).catch(async function (_0x280e74) {
      return null;
    });
  } else {
    return null;
  }
}
exports.h5st471 = async function (_0x2fa662, _0x774c32, _0x64f139) {
  r = await proenv_0x160406(_0x2fa662, _0x774c32, _0x64f139);
  return r || "";
};