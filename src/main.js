import Vue from 'vue'
import './commons/plugins/axios'
import App from './App.vue'
import router from './router'
import store from './commons/store'
import vuetify from './commons/plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
