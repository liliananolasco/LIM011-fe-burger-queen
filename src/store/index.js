import Vue from 'vue'
import Vuex from 'vuex'

import VueRouter from 'vue-router'
/* import {db} from '../db'
import { vuexFireMutations, firestoreAction } from 'vuexfire'; */


Vue.use(Vuex)
Vue.use(VueRouter)
Vue.config.productionTip = false

export default new Vuex.Store({
  state: {
    numero: 1,
    /* products: [], */
  },
  mutations: {
    aumentar(state){
      state.numero++
    },
    disminuir(state){
      state.numero--
    }
  },
  /* vuexFireMutations, */
  actions: {
    /* bindProducts:  firestoreAction(({bindFirestoreRef}) => bindFirestoreRef('products', db.collection('Products'))), */
  
    
  },
  modules: {
  }
})
