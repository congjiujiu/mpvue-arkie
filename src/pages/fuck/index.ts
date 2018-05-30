import { Component, Emit, Vue } from 'vue-property-decorator'
import { AppUrls } from '@/utils/consts.ts'

@Component
export default class Fuck extends Vue {
  AppUrls: Object
  count: number

  constructor() {
    super()
    this.AppUrls = AppUrls
    this.count = 0
  }
}
