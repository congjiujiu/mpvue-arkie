import _ from 'lodash'
import {
} from './mutation-types.js'
import store from './index'

export default {
  scenarioWithCommonConfig (state) {
    console.log('in getter indexScnario')
    const scenarioList = state.scenarioList
    const commonConfigList = state.commonConfigList

    return _.mergeWith(scenarioList, commonConfigList, (s, c) => ({
      ...s,
      commonConfig: c
    }))
  },

  indexScenarios (state, getters) {
    let scenarios = getters.scenarioWithCommonConfig
    scenarios = scenarios.sort((s1, s2) => s1.orderInWXAPP - s2.orderInWXAPP)

    scenarios = scenarios.concat([
      {
        isContactCard: true
      },
      {
        isMywork: true
      }
    ])

    console.log(store)

    return scenarios
  }
}
