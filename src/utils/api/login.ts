const { API_URL } = require('env')

class Login {
  login() {
    console.log(API_URL)
  }
}

export default new Login()
