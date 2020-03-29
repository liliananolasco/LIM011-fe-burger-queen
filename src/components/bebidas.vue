<template>
  <div >
    <section v-for="el in Bebidas" :key="el.id" class="btn btn-outline-success">
      <button class="boton" @click="seleccionarProducto(el)">
        <img :src="getImgUrl(el.img)" v-bind:alt="el.nombre" class = "img">
        <p class="card-title">{{el.nombre}} <br> $ {{el.precio}}</p>
      </button>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'bebidas',
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
    ...mapState(['Bebidas'])
  }
}
</script>

<style>

</style>
