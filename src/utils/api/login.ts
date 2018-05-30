const { BACKEND_URL } = require('env')
import we from 'minapp-api-promise'
import http from './http'

class Login {
  async login() {
    const { code } = await we.login()
    const userSetting = await we.getUserInfo({
      withCredentials: true,
      lang: 'zh_CN'
    })

    const headers = {
      'x-wx-code': code,
      'x-wx-encrypted-data': userSetting.encryptedData,
      'x-wx-iv': userSetting.iv,
      'x-wx-version': 'v2.8.2',
      'x-arkie-source': 'wxapp'
    }

    const { data } = await http.get(`${BACKEND_URL}/api/v0/login`, null, {
      headers
    })

    we.setStorageSync('token', data.token)
    http.config.headers = {
      token: data.token,
      'x-wx-version': 'v2.8.2',
      'x-arkie-source': 'wxapp'
    }
  }
}

export default new Login()
