/**
 * 路由各项配置
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 全局使用路由
Vue.use(VueRouter)

const routes = [
    // {
    //     name: 'home',
    //     path: '/',
    //     redirect: '/sellment'
    // },
    {
        name: 'login',
        path: '/login',
        component: require('../components/account/login.vue')
    },
    {
        name: 'notfound',
        path: '/404',
        component: require('../components/common/notfound.vue')
    },
    { // 404页面路由必须放最后,引导所有未知链接跳转404
        path: '*',
        redirect: '/404'
    }
]

// 路由配置
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: routes
})

export  default router