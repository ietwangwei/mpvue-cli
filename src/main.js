import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'
import App from '@/App'
import store from '@/store'
import './styles/index'
import * as queryService from './service/queryService'

Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
Vue.prototype.$http = {
  ...queryService
}

const app = new Vue({
  mpType: 'app',
  store,
  ...App
})
app.$mount()
