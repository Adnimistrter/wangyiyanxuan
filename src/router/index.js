

// 引入路由
import Vue from 'vue'

import VueRouter from 'vue-router'
import routes from './routes'

// 声明式使用插件
Vue.use(VueRouter)


export default new VueRouter({
  // 配置所有的路由
  routes

})
