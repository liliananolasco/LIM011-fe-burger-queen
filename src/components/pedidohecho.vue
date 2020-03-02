<template>
  <div>
    <!-- <div v-for="cliente in cliente" :key="cliente.id"> 
        <p> Cliente: <span class="cliente">{{total}}</span> <button @click="removeCliente(n)">X</button></p>
      </div> -->
<h1> numero: {{total}}</h1>

    <table class = "table">
      <thead>
        <tr>
          <th scope="col">Cantidad</th>
          <th scopne="col">Nombre</th>
          <th scope="col">Precio Und.</th>
          <th scope="col">Precio Total</th>
        </tr>
      </thead>
     <tbody v-for="orden in $store.state.pedido.items" :key="orden.id">
        <tr>
          <th scope="row">{{orden.cantidad}}</th>
          <td>{{orden.nombre}}</td>
          <td>{{orden.precio}}</td>
          <td>{{orden.precio * orden.cantidad}}</td>
          <button @click="$store.commit('aumentar')">+</button>
          <button @click="$store.commit('disminuir')">-</button>
          <button @click="removeMenu(n)">X</button>
        </tr>
      </tbody> 
    </table> 
    

    <!-- <h4> TOTAL : {{sumarMenu}}</h4> -->
    
  </div>
</template>

<script>
export default {
  name: 'pedidohecho',
  components:{

  },
  data(){
    return{
      cantidad: 1,
    }
    
  }, 
  props:['total'],
  methods:{
    removeCliente(x) {
      this.cliente.splice(x,1);
      this.saveCliente();
    },
    seleccionarProducto(producto){
      const orden = {
        cantidad: 1,
        nombre: producto.nombre,
        precio: producto.precio,
      };
      
      this.$store.state.pedido.items.push(orden)
    }
  }
}
</script>>
