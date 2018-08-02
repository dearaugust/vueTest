import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import axios from 'axios'
Vue.prototype.$ajax = axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
