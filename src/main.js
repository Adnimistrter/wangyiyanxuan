import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'

new Vue({
  el: '#app',  // el元素会被<App/>
  render: h => h(App),
  router
})
