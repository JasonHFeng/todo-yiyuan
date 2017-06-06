import Vue from 'vue'
import App from './App'
import router from './router/router'
import { AjaxPlugin } from 'vux'

Vue.config.productionTip = false

import { AlertPlugin, ToastPlugin } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

Vue.use(AjaxPlugin)

// 移除移动端点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)

// 注册导航全局钩子，检查是否已登录
// router.beforeEach((to, from, next) => {
//     let token = null
//     if (token != null && to.path == '/login') {
//         // 已登录不能进入登录页
//         // next('/sellment')
//     }
//     if (token === null && to.path !== '/login' && to.path !== '/404') {
//         // 未登录
//         next('/login')
//     } else {
//         next()
//     }
// })

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
