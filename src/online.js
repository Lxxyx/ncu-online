import 'babel-polyfill'
import { getLogin } from './login'
import iconv from 'iconv-lite'
import rp from 'request-promise'

var login = async function () {
  let options = await getLogin();
  options.uri = 'http://218.64.56.27/eol/welcomepage/student/index.jsp'
  let data = iconv.decode(await rp(options), 'gb2312')
  console.log(data)
}

login();