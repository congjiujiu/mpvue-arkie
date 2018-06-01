import { Vue, Component, Prop } from 'vue-property-decorator'
import _ from 'lodash'

@Component
class ScenarioList extends Vue {
  @Prop() list
  @Prop() configuration

  get scenarios() {
    return this.init(this.list)
  }

  init(scenarios) {
    scenarios = scenarios.sort((s1, s2) => s1.orderInWXAPP - s2.orderInWXAPP)

    scenarios = scenarios.concat([
      {
        isContactCard: true
      },
      {
        isMywork: true
      }
    ])

    const configuration = this.configuration
    const scenarioCategory = _.find(configuration, r => r.key === 'scenario-category')
    if (!scenarioCategory) return []

    const _scenarios = _.chain(scenarios)
        .cloneDeep()
        .groupBy(s => {
          let category = _.get(s, 'commonConfig.category', 'default')

          if (!category.trim()) {
            category = 'default'
          }

          return category
        })
        .flatMap((v, k) => {
          return {
            listA: v.filter((v, k) => k % 2 === 0),
            listB: v.filter((v, k) => k % 2 !== 0),
            categoryId: k
          }
        })
        .map(s => {
          const { categoryId } = s
          const defaultCategory = {
            code: 'default',
            name: '其他',
            priority: 65536
          }
          let category = _.find(
            scenarioCategory.values,
            v => v.code === categoryId
          )
          if (!category) category = defaultCategory

          return {
            ...s,
            name: category.name,
            priority: category.priority
          }
        })
        .sortBy('priority')
        .value()
        return _scenarios
  }

}

export default ScenarioList