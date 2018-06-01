import scenarioApi from '@/utils/api/scenario'

import ScenarioFactory from '@/utils/factory/scenario'
import CommonConfigFactory from '@/utils/factory/commonConfig'

import {
  SCENARIO_INIT,
  COMMON_CONFIG_INIT,
  CONFIGURATION_INIT
} from './mutation-types.js'

export default {
  scenarioAll ({ dispatch, commit }) {
    scenarioApi.scenarioList().then(res => {
      let scenario = res.data.scenarios
      dispatch('initCommonConfig', scenario)
      scenario = scenario.map(s => new ScenarioFactory(s))
      commit(SCENARIO_INIT, scenario)
    })
  },
  initCommonConfig ({ commit }, data) {
    let scenario = data.map(s => new CommonConfigFactory(s))
    commit(COMMON_CONFIG_INIT, scenario)
  },
  getConfiguration ({ commit }) {
    scenarioApi.configuration().then(res => {
      commit(CONFIGURATION_INIT, res.data)
    })
  }
}
