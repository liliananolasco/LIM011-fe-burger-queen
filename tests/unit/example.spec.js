import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Opciones from '@/components/Opciones.vue'
import {seleccionarProducto} from '@/store/index.js'


const localVue = createLocalVue()
localVue.use(Vuex)

describe('Opciones.vue', () => {
  let actions 
  let store
  /* let mutations */

  beforeEach(() => {
    actions = {
      addCliente: jest.fn(),
    }
    store = new Vuex.Store({
      actions
    })
  })
  it('si addCliente fue llamada', () => {
      const wrapper = shallowMount(Opciones, { store, localVue })
      wrapper.find('button').trigger('click')
      expect(actions.addCliente).toHaveBeenCalled()
    })
});
