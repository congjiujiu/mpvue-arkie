import {
  SCENARIO_INIT
} from './mutation-types.js'

export default {
  [SCENARIO_INIT] (state, data) {
    state.scenarioList = data
  }
}
