import 'babel-polyfill'
import { getLogin } from './login'
import iconv from 'iconv-lite'
import rp from 'request-promise'

var login = async function () {
  let options = await getLogin();
  options.uri = 'http://218.64.56.27/eol/welcomepage/student/index.jsp'
  rp(options)
    .then(data => iconv.decode(data,'gb2312'))
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
}

login();