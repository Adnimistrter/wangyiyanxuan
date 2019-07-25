import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import './mock/mock-server.js'
import  store from './vuex/store'

new Vue({
  el: '#app',  // el元素会被<App/>
  render: h => h(App),
  router,
  store
})
