import {
  get,
  isEmpty,
  flatMap,
  cloneDeep
} from 'lodash'
// import ICONS from '@/utils/icons'
// import PagesFactory from '@/utils/factory/pages'
// import UserInputsFactory from '@/utils/factory/userInputs'

export default class Scenario {
  id: string
  name: string
  internalCode: string
  orderInWXAPP: number
  status: string
  type: string

  constructor(scenario) {
    this._init(scenario)
  }

  _init(_scenario) {
    this.id = get(_scenario, 'id')
    this.name = get(_scenario, 'name')
    this.internalCode = get(_scenario, 'internalCode', '')
    this.orderInWXAPP = get(_scenario, 'orderInWXAPP') // 排序
    this.status = get(_scenario, 'status') // ['online', 'testing'] 上线场景 or 测试场景
    this.type = get(_scenario, 'type')
  }

  _initChannels(channelGroup) {
    let allChannel = channelGroup

    // 按优先级排序
    allChannel = allChannel.sort((a, b) => a.order - b.order)

    // 格式化数据
    allChannel = allChannel.map(channel => {
      return {
        id: channel.channelId,
        uniqueId: channel.uniqueId,
        chlName: channel.channelName,
        displayName: channel.displayName,
        isEssential: channel.isEssential,
        isMainChannel: channel.isMainChannel,
        selected: channel.selected || channel.isMainChannel,
        type: channel.channelType,
        bizType: channel.bizType,
        priority: channel.priority,
        autoSelected: channel.autoSelected || false,
        plh: this._getPlh(channel),
        isShowChange: !channel.plh,
        content: this._getContent(channel),
        contents: channel.contents,
        devTag: channel.devTag || ''
      }
    })

    // 特殊处理 image
    allChannel.filter(ch => ch.type === 'image').map(ch => {
      delete ch.content
      return ch
    })

    // 添加 logo 的 category
    const logo = allChannel.find(ch => ch.chlName === 'logo')
    if (logo) logo.category = 'logo'

    // 添加 QR 的 category
    const qr = allChannel.find(ch => ch.chlName === 'QR')
    if (qr) qr.category = 'QR'

    // 从缓存读上次的数据
    // const saved = wepy.getStorageSync(`${this.id}_mb_info`) || {}
    // allChannel = allChannel.map(channel => {
    //   return saved[channel.chlName] ? Object.assign({}, channel, saved[channel.chlName]) : channel
    // })

    return allChannel
    // this.checkQuickSelect()
  }

  _getPlh(channel) {
    let plh = ''
    if (channel.plh) {
      plh = channel.plh
    } else if (channel.contents && channel.contents.length) {
      const _length = channel.contents.length
      const _randomIndex = Math.floor(Math.random() * _length)
      plh = channel.contents[_randomIndex]
      channel.$randomIndex = _randomIndex
    }

    return plh
  }

  _getContent(channel) {
    let content = ''
    if (channel.plh) {
      return content
    } else if (channel.contents && channel.contents.length) {
      if (channel.$randomIndex) {
        content = channel.contents[channel.$randomIndex]
      } else {
        content = channel.contents[0]
      }
    }

    return content
  }
}
