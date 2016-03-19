'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLogin = undefined;

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var j = _request2.default.jar();

var getSession = {
  uri: 'http://online.ncu.edu.cn/eol/homepage/common/',
  jar: j
};

var getLogin = function getLogin() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var username = _ref.username;
  var password = _ref.password;

  return new Promise(function (reslove, reject) {
    (0, _request2.default)(getSession, function () {
      var cookies = j.getCookieString(getSession.uri);

      var login = {
        method: 'POST',
        uri: 'http://online.ncu.edu.cn/eol/homepage/common/login.jsp',
        encoding: null,
        headers: {
          'Host': 'online.ncu.edu.cn',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'zh-cn',
          'Accept-Encoding': 'gzip,deflate',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Origin': 'http://online.ncu.edu.cn',
          'Content-Length': 56,
          'Connection': 'keep-alive',
          'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_10_5)AppleWebKit/601.4.4(KHTML,likeGecko)Version/9.0.3Safari/601.4.4',
          'Referer': 'http://online.ncu.edu.cn/eol/homepage/common/',
          'Cookie': cookies
        },
        form: {
          // 填你的账号
          "IPT_LOGINUSERNAME": username,
          // 填你的密码
          "IPT_LOGINPASSWORD": password
        }
      };

      (0, _request2.default)(login, function (err, res, body) {

        var loginOptions = {
          method: 'GET',
          uri: null,
          encoding: null,
          headers: {
            'Host': 'online.ncu.edu.cn',
            'Origin': 'http://online.ncu.edu.cn',
            'Cookie': cookies,
            'Connection': 'keep-alive',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_10_5)AppleWebKit/601.4.4(KHTML,likeGecko)Version/9.0.3Safari/601.4.4',
            'Accept-Encoding': 'gzip,deflate',
            'Accept-Language': 'zh-cn',
            'Referer': 'http://online.ncu.edu.cn/eol/homepage/common/'
          }
        };

        if (res.statusCode === 302) {
          reslove(loginOptions);
        }
        reject('Err');
      });
    });
  });
};

exports.getLogin = getLogin;