<template>
    <div>
      <router-link to="/">Home</router-link> |
      <Menu />
    </div>
</template>
<script>
  import Menu from '../components/Opciones.vue';

  export default {

    name:'Mesero',
    components:{
      Menu
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


</style>