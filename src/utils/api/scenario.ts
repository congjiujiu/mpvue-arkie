import http from './http'

class Scenario {
  scenarioList() {
    return http.get('/v2/scenario?platform=wxapp')
  }
}

export default new Scenario()