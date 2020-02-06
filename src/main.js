import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import { firestorePlugin } from 'vuefire'
import './registerServiceWorker'

Vue.use(VueRouter)
Vue.config.productionTip = false

Vue.use(firestorePlugin);


new Vue({
  render: h => h(App),
  store,
  
}).$mount('#app')

/* const hello = new Vue({
  el: '#hello',
  Cliente: '',
}) */