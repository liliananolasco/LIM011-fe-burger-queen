import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import './registerServiceWorker'

Vue.use(VueRouter)
Vue.config.productionTip = false

const Foo = { template: '<div>foo</div>' }

const routes = [
  { path: '/foo', name: 'nameFoo', component: Foo }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

/* const hello = new Vue({
  el: '#hello',
  Cliente: '',
}) */