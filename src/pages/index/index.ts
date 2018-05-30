import { Vue, Component } from 'vue-property-decorator'
import { AppUrls } from '@/utils/consts.ts'
import loginApi from '@/utils/api/login'
import CompB from '@/components/compb.vue' // mpvue目前只支持的单文件组件
import Number from '@/components/number' // mpvue目前只支持的单文件组件

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
  ver: number = 123
  array: Object[] = [
    {
      data: {
        num: 0
      }
    }, {
      data: {
        num: 1
      }
    }, {
      data: {
        num: 2
      }
    }
  ]

  onShow() { // 小程序 hook
    debug('onShow')
    loginApi.login()
  }

  mounted() { // vue hook
    debug('mounted')
  }
}

export default Index
