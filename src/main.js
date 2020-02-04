import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import './registerServiceWorker'

Vue.use(VueRouter)
Vue.config.productionTip = false

import VueFire from 'vuefire';
Vue.use(VueFire);


new Vue({
  render: h => h(App),
  store,
  
}).$mount('#app')

/* const hello = new Vue({
  el: '#hello',
  Cliente: '',
}) */