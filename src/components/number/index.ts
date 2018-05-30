import { Vue, Component, Prop } from 'vue-property-decorator'
import Card from '@/components/card'

const debug = require('debug')('log:Comp/CompB')

// 必须使用装饰器的方式来指定component
@Component({
  components: {
    Card
  }
})
class Number extends Vue {
  @Prop({ default: [] }) // 注意用法！
  numList: Object[]

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

export default Number
