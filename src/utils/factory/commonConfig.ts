import {
  get,
  isEmpty,
  flatMap,
  cloneDeep
} from 'lodash'
import ICONS from '@/utils/icons'
// import PagesFactory from '@/utils/factory/pages'
// import UserInputsFactory from '@/utils/factory/userInputs'

export default class CommonConfig {
  id: string
  background: string
  background4Work: string
  category: number
  color: string
  fontColor: string
  icon: string
  size: string
  nextIcon: string

  constructor(scenario) {
    const commonConfig = get(scenario, 'commonConfig', {})
    if (isEmpty(commonConfig)) {
      return
    }
    this.id = get(scenario, 'id')
    this._init(commonConfig)
  }

  _init(_commonConfig) {
    this.background4Work = get(_commonConfig, 'background4Work')
    this.category = get(_commonConfig, 'category')
    this.color = get(_commonConfig, 'color')
    this.fontColor = get(_commonConfig, 'fontColor')
    this.icon = get(_commonConfig, 'icon')
    this.size = get(_commonConfig, 'size')

    const backgroundBig = get(_commonConfig, 'backgroundBig')
    const backgroundSmall = get(_commonConfig, 'backgroundSmall')

    this.background =
      this.size === 'big' ? backgroundBig : backgroundSmall
    this.nextIcon =
      this.fontColor.toUpperCase() === '#3C3C3C'
        ? ICONS.ICON_ARROW_RIGHT_BLACK
        : ICONS.ICON_ARROW_RIGHT_WHITE
  }
}
