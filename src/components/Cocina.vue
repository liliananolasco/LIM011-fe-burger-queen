
<template>
  <div  class="hello">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Cliente</th>
          <th scope="col">Orden</th>
        </tr>
        <tbody v-for="(el,  index) in $store.state.dataPedido" :key="el.id">
          <th scope="row">{{el.cliente}}</th>
          <td>{{index+1}}</td>
        <tr v-for="(item) in el.pedido" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.nombre}}</td>
          
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
