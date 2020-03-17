import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import pedidohecho from '@/components/pedidohecho.vue'
/* import storeConfig from './store-config'
import { cloneDeep } from 'lodash' */
import MockFirebase from 'mock-cloud-firestore'


const fixtureData = {
  __collection__: {
    Hamburguesas: {
      __doc__: {
        123: {
          Categoria: "Hamburguesa Simple",
          Nombre: 'Hamburguesa S. de Pollo',
          Precio: 10,
          Cantidad:1
        },
      }
    },
    Bebidas: {
      __doc__: {
        234: {
          Categoria: 'Bebidas',
          Nombre: 'Agua 500ml',
          Precio: 5,
          Cantidad:1
        },
      }
    },
    Adicionales: {
      __doc__: {
        345: {
          Categoria: 'Adicionales',
          Nombre: 'Huevo',
          Precio: 1,
          Cantidad:1
        },
      }
    },
    Acompañamientos: {
      __doc__: {
        456: {
          Categoria: 'acompañamiento',
          Nombre: 'Aros de cebolla',
          Precio: 5,
          Cantidad:1
        },
      }
    }
  }
  
}

global.firebase = new MockFirebase(fixtureData, { isNainveSnapshotListenerEnabled:true});

const localVue = createLocalVue()
localVue.use(Vuex)
describe('pedidohecho.vue', () => {
  let actions 
  let store
  /* let mutations */

  beforeEach(() => {
    actions = {
      sumarMenu: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })
  it('si sumarMenu fue llamada', () => {
      const wrapper = shallowMount(pedidohecho, { store, localVue })
      wrapper.find('button').trigger('click')
      expect(actions.sumarMenu).toHaveBeenCalled()
    })
    
});


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