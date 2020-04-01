<template>
  <div>
     <div>
      <p>
        <span> Cliente : {{pedido.clientePedido}}</span> <button @click="borrarCliente()">X</button>
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
     <tbody>
        <tr  v-for="(el, index) in pedido.items" :key="el.id">
          <td>{{el.cantidad}}</td>
          <td>{{el.nombre}}</td>
          <td>{{el.precio}}</td>
          <td>{{el.precio * el.cantidad}}</td>
          <button @click="aumentar(index), sumarMenu()">+</button>
          <button @click="disminuir(index), sumarMenu()">-</button>
          <button @click="borrarMenu(), sumarMenu()">X</button>
        </tr>
      </tbody> 
    </table> 
    <h4> TOTAL : {{pedido.total}}</h4>
    <button @click= "setPedidos()">Enviar</button>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex';

export default {
  name: 'pedidohecho',
  methods: {
  ...mapMutations(['aumentar', 'disminuir', 'borrarCliente', 'borrarMenu', 'sumarTodo' ]), 
  ...mapActions(['setPedidos', 'sumarMenu']),
  
  },
  computed: {
    ...mapState(['pedido'])
  },
  created(){
    this.$store.dispatch('getPedidos');
    
  },
}
</script>>
