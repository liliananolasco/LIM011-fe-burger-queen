<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.jpeg" width="300px" />
    <Opciones/>
  </div>
</template>

<script>
import Opciones from '@/components/Opciones.vue';

export default {
  name:'app',
  firebase:{
    clientes:'',
  },
  components: {
    Opciones,
  },
  created(){
    this.$store.dispatch('getHamburguesas');
    this.$store.dispatch('getBebidas');
    this.$store.dispatch('getAcompañamientos');
    this.$store.dispatch('getAdicionales');
    
  },
  
  }
</script>

<style>
@import'../node_modules/bootstrap/dist/css/bootstrap.css';
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

