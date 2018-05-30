const { API_URL } = require('env')
const Fly = require("flyio/dist/npm/wx")
const http = new Fly

http.config.baseURL = `${API_URL}/api`

export default http
