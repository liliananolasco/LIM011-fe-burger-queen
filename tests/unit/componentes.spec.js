import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Opciones from '@/components/Opciones'
import Hamburguesas from '@/components/Hamburguesas.vue'
import complementos from '@/components/complementos'
import bebidas from '@/components/bebidas'
import adicionales from '@/components/adicionales'

const localVue = createLocalVue()
localVue.use(Vuex)

describe(('Hamburguesas.vue','complementos.vue'), () => {
  let actions 
  let store
  
  beforeEach(() => {
    actions = {
      seleccionarProducto: jest.fn(),
    }
    store = new Vuex.Store({
      state:{
        Hamburguesas:[
          {
            nombre:'hamburguesa',
            precio: 5,
            img:'gaseosa.jpg'
          }
        ],
        Acompañamientos:[
          {
            nombre: 'aros de cebolla',
            Precio:1,
            img:'cebolla.jpg'
          }
        ],
        Adicionales:[
          {
            nombre: 'huevo',
            Precio:1,
            img:'adicionales.jpg'
          }
        ],
        Bebidas:[
          {
            nombre:'gaseosa',
            precio: 5,
            img:'gaseosa.jpg'
          }
        ]
      },
      actions
    })
  })
  it('si Hamburguesas -> seleccionarProducto fue llamada', () => {
    const wrapper = shallowMount(Hamburguesas, { store, localVue })
    wrapper.find('button').trigger('click')
    expect(actions.seleccionarProducto).toHaveBeenCalled()
  });
  it('si complementos -> seleccionarProducto fue llamada', () => {
    const wrapper = shallowMount(complementos, { store, localVue })
    wrapper.find('button').trigger('click')
    expect(actions.seleccionarProducto).toHaveBeenCalled()
  });
  it('si adicionales -> seleccionarProducto fue llamada', () => {
    const wrapper = shallowMount(adicionales, { store, localVue })
    wrapper.find('button').trigger('click')
    expect(actions.seleccionarProducto).toHaveBeenCalled()
  });
  it('si bebidas -> seleccionarProducto fue llamada', () => {
    const wrapper = shallowMount(bebidas, { store, localVue })
    wrapper.find('button').trigger('click')
    expect(actions.seleccionarProducto).toHaveBeenCalled()
  });
});


// it('si addCliente fue llamada', () => {
    //   const wrapper = shallowMount(Opciones, { store, localVue })
    //   wrapper.find('button').trigger('click')
    //   expect(actions.addCliente).toHaveBeenCalled()
    // });
