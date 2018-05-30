import { Vue, Component, Prop } from 'vue-property-decorator'

const debug = require('debug')('log:Comp/Card')

// 必须使用装饰器的方式来指定component
@Component
class Card extends Vue {
  @Prop({ default: 0 }) //注意用法！
  num: number

  onShow() {
    debug('onShow')
  }

  onHide() {
    debug('onHide')
  }

  mounted() { // vue hook
    debug('mounted')
  }
}

export default Card
