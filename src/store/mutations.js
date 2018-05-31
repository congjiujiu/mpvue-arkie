import _ from 'lodash'
import {
  SCENARIO_INIT,
  COMMON_CONFIG_INIT
} from './mutation-types.js'

export default {
  [SCENARIO_INIT] (state, data) {
    state.scenarioList = _.keyBy(data, 'id')
  },
  [COMMON_CONFIG_INIT] (state, data) {
    state.commonConfigList = _.keyBy(data, 'id')
  }
}
