import { Vue, Component, Prop } from 'vue-property-decorator'
import ICONS from '@/utils/icons'

@Component
class ScenarioCard extends Vue {
  defaultBg = ICONS.IMAGE_ME_DEFAULT
  @Prop() scenario

  get commonConfig() {
    return this.scenario.commonConfig
  }

  get cardBackground() {
    const bgImage = `background-image: url(${this.commonConfig.background || this.defaultBg});`
    const bgColor = `background-color: ${this.commonConfig.color }`

    return bgImage + bgColor
  }
}

export default ScenarioCard