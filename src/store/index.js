import Vue from 'vue'
import Vuex from 'vuex'
/* import VueRouter from 'vue-router' */
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)
/* Vue.use(VueRouter)
Vue.config.productionTip = false */
export default new Vuex.Store({
  state: {
    Hamburguesas: [],
    Acompañamientos:[],
    Adicionales: [],
    Bebidas: [],
    newCliente:'',
    pedido: {
      clientePedido:null,
      total:0,
      items: []
    },
    dataPedido:[],
    pedidoSeleccionado: {
      cliente: '',
      index: 0,
      itemsPedido: []
    }
  },
  mutations,
  actions,
  modules: {
  }
})
