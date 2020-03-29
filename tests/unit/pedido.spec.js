import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    pedido: {
      __doc__: {
        123: {
          check: true,
          Cliente: 'liliana',
          fecha: '25 Marzo 2020',
          itemsPedido:{
            cantidad:3,
            checkUnd:true,
            nombre: 'Aros de cebolla',
            precio: 5
          }
        },
      }
    },
  }
  
}

global.firebase = new MockFirebase(fixtureData, { isNainveSnapshotListenerEnabled:true});
/* import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import pedidohecho from '@/components/pedidohecho.vue'  */
import { setPedidos, getAcompañamientos } from '@/store'

describe('setPedidos', () => {
  it('deberia de poder agredar un pedido', (done) => {
    return setPedidos('pan con pollo').then((data) =>{
      const callback = (pedidos) => {
        console.log(pedidos)
        done()
      }

      getAcompañamientos(callback)
    })
  })
})

/* const localVue = createLocalVue()
localVue.use(Vuex)
describe('pedidohecho.vue', () => {
  let actions 
  let store
  /* let mutations 

  beforeEach(() => {
    actions = {
      setPedidos: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })
  it('si sumarMenu fue llamada', () => {
      const wrapper = shallowMount(pedidohecho, { store, localVue })
      wrapper.find('button').trigger('click')
      expect(actions.setPedidos).toHaveBeenCalled()
    })
    
}); */


/* import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from '@/store-config'
import { cloneDeep } from 'lodash'

test('borrarCliente "count" value when "borrarCliente" is committed', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const store = new Vuex.Store(cloneDeep(storeConfig))
  expect(store.state.pedido.clientePedido).toBe(!null)
  store.commit('borrarCliente')
  expect(store.state.pedido.clientePedido).toBe(null)
}) */

/* test('updates "evenOrOdd" getter when "increment" is committed', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const store = new Vuex.Store(cloneDeep(storeConfig))
  expect(store.getters.evenOrOdd).toBe('even')
  store.commit('increment')
  expect(store.getters.evenOrOdd).toBe('odd')
}) */