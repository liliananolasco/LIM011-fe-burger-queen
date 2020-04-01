import * as apiDb from '../controller/controller-firebase'
import {db} from '../db' 

export const getAcompañamientos = (context) => {
  apiDb.listaAcompañamientos(db,(acompañamiento) =>{
    context.commit('setState',{
      state: 'Acompañamientos',
      value: acompañamiento
    })
  })
};  
export const getAdicionales = (context) => {
  apiDb.listaAdicionales(db,(adicional) => {
    context.commit('setState',{
      state: 'Adicionales',
      value: adicional
    })
  })
}; 
export const getHamburguesas = (context) => {
  apiDb.listaHamburguesas(db, (hamburguesa) => {
    context.commit('setState',{
      state: 'Hamburguesas',
      value: hamburguesa
    })
  })

};
export const getBebidas = (context) => {
  apiDb.listaBebidas(db,(bebida) =>{
    context.commit('setState',{
      state: 'Bebidas',
      value: bebida
    })
  })
};
export const addCliente = (context,payload) => {
  // eslint-disable-next-line no-console
  console.log(payload.value)
  if(payload.value != ''){
    context.state.newCliente = '';
    context.commit('mostrarCliente',payload)
    return true
  } else {
    return false
  }
}; 
export const seleccionarProducto = (context, producto) => {
  const productos = context.state.pedido.items.filter(item => item.nombre
    === producto.nombre)
  if (productos.length === 0) {
    const orden = {
      cantidad: producto.cantidad,
      nombre: producto.nombre,
      precio: producto.precio,
      checkUnd: false
    };
    const payload = { value: orden }
    context.commit('llenarOrden', payload)
    context.dispatch('sumarMenu')
  }
};
export const sumarMenu = (context) => {
  let totales = 0;
  context.state.pedido.items.forEach((item) => {
    totales += item.precio * item.cantidad;
  });
  const payload = { value: totales }
  context.commit('sumarTodo', payload);
};
export const setPedidos = (context) => {
  apiDb.crearPedidos(db, context.state)
};
export const getPedidos = (context) => {
  apiDb.listaPedidos(db, (pedido) =>{
    context.commit('setState',{
      state: 'dataPedido',
      value: pedido
    })
  })
};
export const editarCheck = (context) => {
  apiDb.editarPedido(db, context.state)
};