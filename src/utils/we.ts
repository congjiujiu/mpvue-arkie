import { promisify } from 'es6-promisify'

export default {
  checkSession: promisify(wx.checkSession),
  login: promisify(wx.login)
}