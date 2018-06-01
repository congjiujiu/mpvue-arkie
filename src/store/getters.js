import _ from 'lodash'
import {
} from './mutation-types.js'

export default {
  scenarioWithCommonConfig (state) {
    const scenarioList = state.scenarioList
    const commonConfigList = state.commonConfigList

    return _.mergeWith(scenarioList, commonConfigList, (s, c) => ({
      ...s,
      commonConfig: c
    }))
  },

  indexScenarios (state, getters) {
    let scenarios = _.values(getters.scenarioWithCommonConfig)

    return scenarios
  }
}
