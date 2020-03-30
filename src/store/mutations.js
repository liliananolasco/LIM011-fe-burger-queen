export const setState = (state, payload) => {
  state[payload.state] = payload.value
};
export const llenarOrden = (state, { value }) => {
  state.pedido.items.push(value)
};
export const aumentar = (state, index) => {
  state.pedido.items[index].cantidad++
};
export const disminuir = (state, index) => {
  state.pedido.items[index].cantidad--
};
export const borrarCliente = (state) => {
  state.pedido.clientePedido = null;
};
export const borrarMenu = (state, x) => {
  state.pedido.items.splice(x,1)
};
export const sumarTodo = (state, {value}) =>{
  state.pedido.total= value
};
export const mostrarCliente = (state, {value}) => {
  state.pedido.clientePedido = value
};
export const mostrarPedido = (state,index) => {
  state.pedidoSeleccionado = state.dataPedido[index]
  state.pedidoSeleccionado.index = index
};
