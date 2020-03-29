<template>
  <div >
    <section v-for="el in Adicionales" :key="el.id" class="btn btn-outline-success">
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
  name: 'adicionales',
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
    ...mapState(['Adicionales'])
  }
}
</script>

<style scoped>

.btn-outline-success {
  width: 20%;
  height: 10%;
}

</style>
