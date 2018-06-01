import { Vue, Component } from 'vue-property-decorator'
import { State, Action, Getter } from 'vuex-class'

import { SCENARIO_INIT } from '@/store/mutation-types'

import { AppUrls } from '@/utils/consts.ts'
import loginApi from '@/utils/api/login'
import scenarioApi from '@/utils/api/scenario'

import scenarioList from '@/components/scenario-list'

// 必须使用装饰器的方式来指定component
@Component({
  components: {
    scenarioList
  }
})
class Index extends Vue {
  AppUrls = AppUrls
  @Getter('indexScenarios') indexScenarios
  @State('configuration') configuration
  @Action('scenarioAll') getScenarioList
  @Action('getConfiguration') getConfiguration

  created() {
    this.login()
  }

  mounted() {}

  async login() {
    await loginApi.login()

    this.getScenarioList()
    this.getConfiguration()
  }
}

export default Index
