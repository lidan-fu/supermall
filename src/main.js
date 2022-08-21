import Vue from 'vue'
import App from '@/App.vue'
import axios from 'axios'
import store from '@/store/index.js'
import router from '@/router/index.js'
import JsppUI from '@/libs/jspp-ui'

import toast from '@/components/content/toast'

Vue.config.productionTip = false
Vue.use(JsppUI)

// console.dir(Vue)
Vue.use(toast)

new Vue({
  el:"#app",
  store,
  router,
  render: h => h(App)
})
