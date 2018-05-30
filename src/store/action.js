import scenarioApi from '@/utils/api/scenario'

import {
  SCENARIO_INIT
} from './mutation-types.js'

export default {
  scenarioAll ({ commit }) {
    scenarioApi.scenarioList().then(res => {
      commit(SCENARIO_INIT, res.data.scenarios)
    })
  }
}
