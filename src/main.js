import Vue from 'vue'
import App from './App.vue'
import VueHighlightJS from 'vue-highlightjs'
import coverflow from '../lib'

Vue.use(VueHighlightJS)
Vue.use(coverflow)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
