<template>
  <div>
    <li v-for="el in $store.state.acompañamientos" :key="el.id" class="complementos">
      <button type="button" class="btn btn-outline-success" @click="seleccionarProducto(el)">
        <img :src="getImgUrl(el.img)" v-bind:alt="el.nombre" class = "img">
        <h5 class="card-title">{{el.nombre}}</h5>
        <p class="card-text">$ {{el.precio}}</p>
        <!-- <button  class="btn btn-primary" @click="$store.dispatch('getHamburguesas')" href="#">Comprar</button> -->
      </button>
    </li>
  </div>
</template>

<script>
export default {
  name: 'complementos',
  props: {
    msg: String
  },
  methods:{
    getImgUrl(img) {
      return img ? require('../assets/'+img) : "";
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
</script>

<style>
.complementos{
  display: inline;
}
.btn-outline-success{
  width: 200px;
  height: 280px;
}
</style>


