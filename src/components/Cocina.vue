
<template>
  <div  class="hello">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Cantidad</th>
          <th scope="col">Nombre</th>
          <th scope="col">Chekin</th>
        </tr>
        <tbody v-for="(el) in $store.state.dataPedido" :key="el.id">
        <tr>
          <th scope="row">{{el.cliente}}</th>

          <td v-for="(item) in el.pedido" :key="item.id">
<p>{{item.nombre}}</p>

          </td>
          
        </tr>
      </tbody> 
      </thead>
    </table>
  </div>
</template>
<script>
export default {
  name: 'Cocina',
  props: {
    msg: String
  },
  created(){
    this.$store.dispatch('getPedidos');
    
  },
}

</script>
