import Vue from 'vue'
import App from './App.vue'

import './styles/quasar.styl'
import iconSet from 'quasar-framework/icons/fontawesome'
import 'quasar-extras/fontawesome'
import Quasar from 'quasar'

Vue.use(Quasar, {
  config: {}, iconSet: iconSet
 })

Vue.config.productionTip = false

new Vue({
  
  render: h => h(App)
}).$mount('#app')
