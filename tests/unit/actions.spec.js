import * as actions from '@/store/actions'
import * as firebase from '@/controller/controller-firebase'

jest.mock('@/controller/controller-firebase', () => ({
  listaAcompañamientos: jest.fn(),
  listaAdicionales: jest.fn(),
  listaHamburguesas: jest.fn(),
  listaBebidas: jest.fn(),
  listaPedidos: jest.fn(),
  crearPedidos: jest.fn(),
  editarPedido: jest.fn()
}))

describe('Acciones con llamadas a ApiDb', () => {
  it('Listar acompañamientos', async (done) => {
    const commit = jest.fn()
    const Acompañamientos = [
      {
        id: '1000021',
        itemsPedido: []
      }
    ]
    const payload = {
      state: 'Acompañamientos',
      value: Acompañamientos
    }
    firebase.listaAcompañamientos.mockImplementation((db, callback) => { callback(Acompañamientos) })
    await actions.getAcompañamientos({ commit })
    expect(commit).toHaveBeenCalledWith('setState', payload)
    done()
  })
});

describe('Acciones con llamadas a ApiDb', () => {
  it('Listar adicionales', async (done) => {
    const commit = jest.fn()
    const Adicionales = [
      {
        id: '1000021',
        itemsPedido: []
      }
    ]
    const payload = {
      state: 'Adicionales',
      value: Adicionales
    }
    firebase.listaAdicionales.mockImplementation((db, callback) => { callback(Adicionales) })
    await actions.getAdicionales({ commit })
    expect(commit).toHaveBeenCalledWith('setState', payload)
    done()
  })
});

describe('Acciones con llamadas a ApiDb', () => {
  it('Listar Hamburguesas', async (done) => {
    const commit = jest.fn()
    const Hamburguesas = [
      {
        id: '1000021',
        itemsPedido: []
      }
    ]
    const payload = {
      state: 'Hamburguesas',
      value: Hamburguesas
    }
    firebase.listaHamburguesas.mockImplementation((db, callback) => { callback(Hamburguesas) })
    await actions.getHamburguesas({ commit })
    expect(commit).toHaveBeenCalledWith('setState', payload)
    done()
  })
});

describe('Acciones con llamadas a ApiDb', () => {
  it('Listar Bebidas', async (done) => {
    const commit = jest.fn()
    const Bebidas = [
      {
        id: '1000021',
        itemsPedido: []
      }
    ]
    const payload = {
      state: 'Bebidas',
      value: Bebidas
    }
    firebase.listaBebidas.mockImplementation((db, callback) => { callback(Bebidas) })
    await actions.getBebidas({ commit })
    expect(commit).toHaveBeenCalledWith('setState', payload)
    done()
  })
});

describe('Acciones con llamadas a ApiDb', () => {
  it('Listar Pedidos', async (done) => {
    const commit = jest.fn()
    const Pedidos = [
      {
        id: '1000021',
        itemsPedido: []
      }
    ]
    const payload = {
      state: 'dataPedido',
      value: Pedidos
    }
    firebase.listaPedidos.mockImplementation((db, callback) => { callback(Pedidos) })
    await actions.getPedidos({ commit })
    expect(commit).toHaveBeenCalledWith('setState', payload)
    expect(firebase.listaPedidos.mockImplementation()).toHaveBeenCalled()
    done()
  })
});

describe('Acciones con llamadas a ApiDb', () => {
  it('crear Pedidos', async (done) => {
    const context = jest.fn()
    firebase.crearPedidos.mockImplementation()
    await actions.setPedidos(context)
    expect(firebase.crearPedidos.mockImplementation()).toHaveBeenCalled()
    done()
  })
});

describe('Acciones con llamadas a ApiDb', () => {
  it('editar Check', async (done) => {
    const context = jest.fn()
    firebase.editarPedido.mockImplementation()
    await actions.editarCheck(context)
    done()
    expect(context).toHaveBeenCalledWith('state')
  }, 20000)
});

test('mostrar cliente', () => {
  const newCliente =  {
    value:'lili'
  }

  const context = {
    state:{
      newCliente:''
    },
    commit: jest.fn()
  }
  
  actions.addCliente(context, newCliente)
  expect(context.commit).toHaveBeenCalledWith('mostrarCliente', newCliente)
});

test('seleccionar Producto', () => {
  const payload = {
    cantidad: 6,
    nombre: 'Gaseosa',
  };
  const context={
    state:{
      pedido: {
        items:''
      }
    },
    
    commit: jest.fn()
  };
    
  actions.seleccionarProducto(payload)
  expect(context.commit).toHaveBeenCalledWith('llenarOrden', context.state.pedido.items)
});

test('sumar Menu', () => {
  const payload =  {
    value: 17
  }
  const context = {
    state: {
      pedido:{
        total:0,
        items:[
          {
            cantidad:2,
            precio: 5
          },
          {
            cantidad:1,
            precio: 7
          }
        ]
      }
    },
    commit: jest.fn()
  }
  actions.sumarMenu(context)
  expect(context.commit).toHaveBeenCalledWith('sumarTodo',payload)
});





