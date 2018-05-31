import { Vue, Component } from 'vue-property-decorator'
import { State, Action, Getter } from 'vuex-class'

import { SCENARIO_INIT } from '@/store/mutation-types'

import { AppUrls } from '@/utils/consts.ts'
import loginApi from '@/utils/api/login'
import scenarioApi from '@/utils/api/scenario'

// 必须使用装饰器的方式来指定component
@Component({
  components: {
  }
})
class Index extends Vue {
  AppUrls = AppUrls
  @Getter('indexScenarios') indexScenarios
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
