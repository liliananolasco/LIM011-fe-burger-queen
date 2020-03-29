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
test(' selecciona Producto', () => {
  const orden = {
    cantidad: 1,
    nombre: 'lili',
    precio: 5,
    checkUnd: false
  };

  const commit = jest.fn()
  seleccionarProducto({ commit }, orden)

  expect(commit).toHaveBeenCalledWith('llenarOrden', orden)
})


/* describe('Opciones.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Opciones, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})  */

