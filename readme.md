## 介绍
用于登录网络教学平台，进行爬虫操作。
## 运行方式
```javascript
npm install ncu-online --save
npm install request --save
```
### 使用：
```javascript
var nol = require('ncu-online')
// 函数内填JSON文件地址
nol.getLogin({
  username: '' // 你的用户名
  password: '' // 你的密码
})
  .then(options => {
    // 设置登录后，获取页面的地址：
    options.uri = // 要获取的网址
    request(options,(err,res,body) => {
      // 这个进行获取到页面的操作
      // 需要有使用request的基础
    })  
    // data为request的option，已包含登录后的cookies
  })
  .catch(err => {
    //处理错误
    console.log(err)
  })
  
```
## 开发
```
git clone https://github.com/Lxxyx/ncu-online
cd ncu-online
npm install
gulp
```