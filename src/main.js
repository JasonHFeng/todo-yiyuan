import Vue from 'vue'
import App from './App'
import router from './router/router'

Vue.config.productionTip = false

import { AlertPlugin, ToastPlugin } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

// 移除移动端点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
