import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import ApexCharts from 'apexcharts'

import VueMq from 'vue-mq'
Vue.use(VueMq, {
  breakpoints: {
    mobile: 500,
    // tablet: 1024,
    pc: Infinity,
  }
})

import { rtdbPlugin } from 'vuefire'
Vue.use(rtdbPlugin)

// import firebase from 'firebase/compat/app' // eslint-disable-line no-unused-vars
import '@/assets/firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  ApexCharts,


  render: h => h(App)
}).$mount('#app')
