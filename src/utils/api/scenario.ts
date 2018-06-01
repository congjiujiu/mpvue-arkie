import http from './http'

class Scenario {
  scenarioList() {
    return http.get('/v2/scenario?platform=wxapp').then(res => res.data)
  }
  configuration() {
    return http.get('/v0/configuration').then(res => res.data)
  }
}

export default new Scenario()