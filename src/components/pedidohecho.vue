<template>
  <div>
    <div v-for="cliente in $store.state.pedido.clientePedido" :key="cliente.id">
      <p>
        <span class="cliente"> Cliente : {{cliente}}</span> <button @click="removeCliente">X</button>
      </p>
    </div>

    <table class = "table">
      <thead>
        <tr>
          <th scope="col">Cantidad</th>
          <th scopne="col">Nombre</th>
          <th scope="col">Precio Und.</th>
          <th scope="col">Precio Total</th>
        </tr>
      </thead>
     <tbody v-for="(el, index) in $store.state.pedido.items" :key="el.id">
        <tr>
          <th scope="row">{{el.cantidad}}</th>
          <td>{{el.nombre}}</td>
          <td>{{el.precio}}</td>
          <td>{{el.precio * el.cantidad}}</td>
          <button @click="aumentar(index), $store.dispatch('sumarMenu')">+</button>
          <button @click="disminuir(index), $store.dispatch('sumarMenu')">-</button>
          <button @click="removeMenu">X</button>
        </tr>
      </tbody> 
    </table> 
    <h4> TOTAL : {{$store.state.pedido.total}}</h4>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'pedidohecho',
  methods: {
  ...mapMutations(['aumentar', 'disminuir', 'removeCliente', 'removeMenu', 'sumarTodo' ]), 
  },
}
</script>>
