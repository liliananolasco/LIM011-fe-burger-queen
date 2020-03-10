<template>
  <div>
     <div>
      <p>
        <span> Cliente : {{$store.state.pedido.clientePedido}}</span> <button @click="borrarCliente()">X</button>
      </p>
    </div>

    <table class="table table-bordered">
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
          <button @click="borrarMenu(), $store.dispatch('sumarMenu')">X</button>
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
  ...mapMutations(['aumentar', 'disminuir', 'borrarCliente', 'borrarMenu', 'sumarTodo' ]), 
  },
}
</script>>
