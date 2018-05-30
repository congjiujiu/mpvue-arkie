import { Vue, Component } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'

import { SCENARIO_INIT } from '@/store/mutation-types'

import { AppUrls } from '@/utils/consts.ts'
import loginApi from '@/utils/api/login'
import scenarioApi from '@/utils/api/scenario'

import CompB from '@/components/compb.vue'
import Number from '@/components/number'

const debug = require('debug')('log:Index')

// 必须使用装饰器的方式来指定component
@Component({
  components: {
    CompB, //注意，vue的组件在template中的用法，`CompB` 会被转成 `comp-b`
    Number,
  }
})
class Index extends Vue {
  AppUrls = AppUrls
  @State('scenarioList') scenarioList
  @Action('scenarioAll') getScenarioList

  created() {
    this.login()
  }

  mounted() {}

  async login() {
    await loginApi.login()

    this.getScenarioList()
  }
}

export default Index
