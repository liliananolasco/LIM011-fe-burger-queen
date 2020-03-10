<template>
  <div>
    <h3>Nombre del cliente</h3>
    <p>
      <input v-model="$store.state.newCliente"> 
      <button @click="$store.dispatch('addCliente', {value: $store.state.newCliente})">ok</button>
    </p>
    <div id="dynamic-component-demo" class="demo">
      <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { active: currentTab === tab }]"
        v-on:click="currentTab = tab"
      class="btn btn-light">{{ tab }}</button>
    <component
      v-bind:is="currentTabComponent"
      class="tab"
    ></component>
    <pedidohecho/>
    </div>
  </div>
</template>

<script>
import Pedidohecho from './pedidohecho.vue';
import Hamburguesas from './Hamburguesas.vue';
import Bebidas from './bebidas.vue';
import Adicionales from './adicionales.vue';
import Complementos from './complementos'
import { mapMutations } from 'vuex'

export default {
  name: 'Opciones',
  props: {
      msg: String
  },
  components:{
    Pedidohecho, 
    Hamburguesas,
    Bebidas,
    Adicionales,
    Complementos,
  }, 
  data(){
    return {
      currentTab: 'Adicionales',
      tabs: ['Hamburguesas', 'Bebidas', 'Adicionales', 'Complementos'],
      
    }
  }, 
  computed: {
    currentTabComponent: function () {
      return this.currentTab;
    },
  },
  methods:{
    ...mapMutations(['mostrarCliente'])
    
  }
}
</script>


