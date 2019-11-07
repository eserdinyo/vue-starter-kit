import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from './http'
import mixins from './mixins'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@/assets/style/main.scss'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.mixin(mixins)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
