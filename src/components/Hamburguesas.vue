<template>
  <div >
    <li v-for="el in $store.state.Hamburguesas" :key="el.id" class = "hamburguesas">
      <button type="button" class="btn btn-outline-success" @click="$store.dispatch('seleccionarProducto', el)" >
      <img :src="getImgUrl(el.img)" v-bind:alt="el.nombre" class = "img">
      <h5 class="card-title">{{el.nombre}}</h5>
      <p class="card-text">$ {{el.precio}}</p>
    </button>  
    </li>
  </div>
</template>

<script>

export default {
  name: 'Hamburguesas',
  props: {
    msg: String
  },
  methods:{
    getImgUrl(img) {
      return img ? require('../assets/'+img) : "";
    },
  }
}
</script>

<style>
.hamburguesas{
  display: inline;
}
.btn-outline-success{
  width: 200px;
  height: 200px;
}
.img{
  width: 70px;
  padding: 2px 0px;
  margin: 2px 0px;
}
.btn-outline-success{
  width: 250px;
  height: 120px;
  padding: 40px ;
  margin: 10px;
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
}
</style>
