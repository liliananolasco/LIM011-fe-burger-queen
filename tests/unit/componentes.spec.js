import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import pedidohecho from '@/components/pedidohecho'
import Hamburguesas from '@/components/Hamburguesas'
import complementos from '@/components/complementos'
import bebidas from '@/components/bebidas'
import adicionales from '@/components/adicionales'

const localVue = createLocalVue()
localVue.use(Vuex)

describe(('Hamburguesas','complementos', 'bebidas', 'adicionales'), () => {
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

describe('pedidohecho.vue', () => {
  let actions
  let store
  let mutations

  beforeEach(() => {
    actions = {
      setPedidos: jest.fn(),
      sumarMenu: jest.fn(),
      getPedidos: jest.fn()
    },
    mutations = {
      aumentar: jest.fn(),
      disminuir: jest.fn(),
      borrarCliente: jest.fn(),
      borrarMenu: jest.fn(),
      sumarTodo: jest.fn(),
    },
    store = new Vuex.Store({
      state: {
        pedido:{
          clientePedido: 'lili',
          items:[
            {
              nombre:'agua',
              cantidad: 1
            }
          ]
        }
      },
      actions,
      mutations
    })
  })
  it('si fue setPedidos fue llamada', () => {
    const wrapper = shallowMount(pedidohecho, { store, localVue })
    wrapper.find({ ref: 'enviar' }).trigger('click')
    expect(actions.setPedidos).toHaveBeenCalled()
  });
  it('si fue aumentar fue llamada', () => {
    const wrapper = shallowMount(pedidohecho, { store, localVue })
    wrapper.find({ref: 'aumentar'}).trigger('click')
    expect(mutations.aumentar).toHaveBeenCalled()
    expect(actions.sumarMenu).toHaveBeenCalled()
  });
  it('si fue disminuir fue llamada', () => {
    const wrapper = shallowMount(pedidohecho, { store, localVue })
    wrapper.find({ref: 'disminuir'}).trigger('click')
    expect(mutations.disminuir).toHaveBeenCalled()
    expect(actions.sumarMenu).toHaveBeenCalled()
  });
  it('si fue borrarMenu fue llamada', () => {
    const wrapper = shallowMount(pedidohecho, { store, localVue })
    wrapper.find({ref: 'borrarMenu'}).trigger('click')
    expect(mutations.borrarMenu).toHaveBeenCalled()
    expect(actions.sumarMenu).toHaveBeenCalled()
  })
})
