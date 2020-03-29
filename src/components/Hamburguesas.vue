<template>
  <div>
    <section v-for="el in Hamburguesas" :key="el.id" class="btn btn-outline-success">
      <button type="button" class="boton" @click="seleccionarProducto(el)" >
      <img :src="getImgUrl(el.img)" v-bind:alt="el.nombre" class = "img">
      <p class="card-title">{{el.nombre}} <br> $ {{el.precio}}</p>
    </button>  
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Hamburguesas',
  props: {
    msg: String
  },
  methods:{
    getImgUrl(img) {
      return img ? require('../assets/'+img) : "";
    },
    ...mapActions(['seleccionarProducto'])
  },
  computed: {
     ...mapState(['Hamburguesas'])
  }
}
</script>

<style>

</style>
