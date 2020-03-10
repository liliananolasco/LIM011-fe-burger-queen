
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import pedidoHecho from '@/components/pedidoHecho.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
describe('pedidoHecho.vue', () => {
    let actions 
    let store
    let state
    /* let mutations */
  
    beforeEach(() => {
      actions = {
        sumarMenu: jest.fn()
      }
      store = new Vuex.Store({
        actions
      })
      state = {
        clientePedido: 'lili'
      }
    })
  
    it('si sumarMenu fue llamada', () => {
        const wrapper = shallowMount(pedidoHecho, { store, localVue })
        wrapper.find('button').trigger('click')
        expect(actions.sumarMenu).toHaveBeenCalled()
      })
  })