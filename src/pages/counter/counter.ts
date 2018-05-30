import { Component, Emit, Vue } from 'vue-property-decorator'
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'
import { AppUrls } from '@/utils/consts.ts'

const debug = require('debug')('log:Page/Counter')

@Component
export default class Counter extends Vue {
  AppUrls = AppUrls
}
