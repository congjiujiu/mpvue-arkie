import {
  INCREMENT,
  DECREMENT
} from './mutation-types.js'

export default {
  [INCREMENT] (state) {
    state.count = state.count + 1
  },
  [DECREMENT] (state) {
    state.count = state.count - 1
  }
}
