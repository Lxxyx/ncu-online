import request from 'request'

let j = request.jar()

let getSession = {
  uri: 'http://online.ncu.edu.cn/eol/homepage/common/',
  jar: j
}

let getLogin = function () {
  return new Promise(function (reslove, reject) {
    request(getSession, () => {
      let cookies = j.getCookieString(getSession.uri);

      let login = {
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
          "IPT_LOGINUSERNAME": '',
          // 填你的密码
          "IPT_LOGINPASSWORD": ''
        }
      };

      request(login, (err, res, body) => {

        let loginOptions = {
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
            'Referer': 'http://online.ncu.edu.cn/eol/homepage/common/',
          }
        };

        if (res.statusCode === 302) {
          reslove(loginOptions)
        }
        reject('Err')
      })
    })
  })
};

export {
  getLogin
}