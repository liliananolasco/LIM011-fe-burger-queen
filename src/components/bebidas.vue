<template>
  <div>
    <li v-for="el in $store.state.Bebidas" :key="el.id" class="bebidas">
      <button type="button" class="btn btn-outline-success" @click="$store.dispatch('seleccionarProducto', el)">
        <img :src="getImgUrl(el.img)" v-bind:alt="el.nombre" class = "img">
        <h5 class="card-title">{{el.nombre}}</h5>
        <p class="card-text">$ {{el.precio}}</p>
      </button>
    </li>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'bebidas',
  props: {
    msg: String
  },
  methods:{
    getImgUrl(img) {
      return img ? require('../assets/'+img) : "";
    },
    ...mapActions(['llenarOrden']),
    
  }
}
</script>

<style>
.bebidas{
  display: inline;
}
.btn-outline-success{
  width: 200px;
  height: 280px;
}
</style>
