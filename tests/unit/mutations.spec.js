import * as mutations from '@/store/mutations.js'

test('setState', () => {
  const payload = {
    state: 'cliente',
    value: 'Lili'
  }
  const state = {
    cliente: 'Lili'
  }
  mutations.setState(state, payload)
  expect(state.cliente).toBe('Lili')
});
test('llenarOrden ', () => {
  const state = {
    pedido: {
      items: [],
      ingresoTotal: 0
    }
  }
  const item = {
    cliente: 'Antonio',
    id: '10001',
  }
  mutations.llenarOrden(state, item)
  expect(state.pedido.items.length).toBe(1)
});
test('aumentar ', () => {
  const state = {
    pedido:{
      items:[
        {
          cantidad: 1,
        }
      ]
    }
    
  }
  const index = 0;
  mutations.aumentar(state, index)
  expect(state.pedido.items[index].cantidad).toBe(2)
});
test('disminuir ', () => {
  const state = {
    pedido:{
      items:[
        {
          cantidad: 2,
        }
      ]
    }
    
  }
  const index = 0;
  mutations.disminuir(state, index)
  expect(state.pedido.items[index].cantidad).toBe(1)
});
test('borrarCliente ', () => {
  const state = {
    pedido:{
      clientePedido: 'Lili'
    }
  }
  mutations.borrarCliente(state)
  expect(state.pedido.clientePedido).toBe(null)
});
test('borrarMenu ', () => {
  const state = {
    pedido:{
      items:[
        {
          cantidad: 2,
        },
        {
          cantidad: 2,
        }
      ]
    }
    
  }
  mutations.borrarMenu(state, 1)
  expect(state.pedido.items.length).toBe(1)
});
test('sumarTodo', () => {
  const payload = {
    value: 2
  }
  const state = {
    pedido:{
      total: 0
    }
  }
  mutations.sumarTodo(state, payload)
  expect(state.pedido.total).toBe(2)
});
test('mostrarCliente', () => {
  const payload = {
    value: 'anjely'
  }
  const state = {
    pedido:{
      clientePedido: ''
    }
  }
  mutations.mostrarCliente(state, payload)
  expect(state.pedido.clientePedido).toBe('anjely')
});
test('mostrarPedido ', () => {
  
  const state = {
    dataPedido:[
      {
        clientePedido:'lili',
        total:10,
        items: []
      },
      {
        clientePedido:'anjely',
        total:50,
        items: []
      }
    ],
    pedidoSeleccionado: null
  }
  const index = 1;
  mutations.mostrarPedido(state, index)
  expect(state.pedidoSeleccionado.clientePedido).toBe('anjely')
});
