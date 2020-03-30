import * as actions from '@/store/actions'
import * as firebase from '@/controller/controller-firebase'

jest.mock('@/controller/controller-firebase', () => ({
  listaAcompañamientos: jest.fn(),
  listaAdicionales: jest.fn(),
  listaHamburguesas: jest.fn(),
  listaBebidas: jest.fn(),
  listaPedidos: jest.fn(),
  crearPedidos: jest.fn(),
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
    done()
    expect(commit).toHaveBeenCalledWith('setState', payload)
  }, 20000)
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
    done()
    expect(commit).toHaveBeenCalledWith('setState', payload)
  }, 20000)
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
    done()
    expect(commit).toHaveBeenCalledWith('setState', payload)
  }, 20000)
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
    done()
    expect(commit).toHaveBeenCalledWith('setState', payload)
  }, 20000)
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
      state: 'Pedidos',
      value: Pedidos
    }
    firebase.listaPedidos.mockImplementation((db, callback) => { callback(Pedidos) })
    await actions.getPedidos({ commit })
    done()
    expect(commit).toHaveBeenCalledWith('setState', payload)
  }, 20000)
});

describe('Acciones con llamadas a ApiDb', () => {
  it('crear Pedidos', async (done) => {
    const context = jest.fn()
    firebase.crearPedidos.mockImplementation()
    await actions.setPedidos(context)
    done()
    expect(context).toHaveBeenCalledWith('state')
  }, 20000)
});



