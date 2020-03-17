<template>
  <div id="app" class="container">
    <div>
      <img alt="Vue logo" src="./assets/logo.jpeg" width="300px" />
    </div>
    <div id="dynamic-component-demo" class="demo">
      <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { active: currentTab === tab }]"
        v-on:click="currentTab = tab"
      class="btn btn-light">{{ tab }}<img src="@/assets/cocina.png"  class = "img">
      </button>
      <component
        v-bind:is="currentTabComponent"
        class="tab">
      </component>
    </div>
  </div>
</template>

<script>
import Mesero from '@/components/Opciones.vue';
import Cocina from '@/components/Cocina.vue';
export default {
  name:'app',

  components: {
    Mesero,
    Cocina,
  },
data(){
    return {
      currentTab: '',
      tabs: ['Mesero', 'Cocina'],
      
    }
  }, 
  computed: {
    currentTabComponent: function () {
      return this.currentTab;
    },
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
.salas{
  display: flex;
  justify-content: center;
}
.tipos{
  margin: 50px;
  height: 60%;
}


.imgen{
  width: 80px;
  padding: 2px 0px;
  margin: 2px 0px;
}

</style>

