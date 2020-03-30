<template>
    <div>
      <router-link to="/">Home</router-link> |
        <Cocina/>
    </div>
</template>
<script>
  import Cocina from '../components/Cocina.vue';
  
  export default {
    name: 'Cocinero',
    components:{
      Cocina,
    },
    created(){
    this.$store.dispatch('getPedidos');
    },
    
  }
</script>