<template>
  <div>
    <h3>Nombre del cliente</h3>
    <p>
      <input v-model= "$store.state.newCliente" /> 
      <button v-on:click="show = !show" @click="addCliente({value: newCliente})">
        ok
      </button>
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
      class="tab">
    </component>
    </div>
    <transition name="fade">
      <p v-if="show"><pedidohecho/></p>
    </transition>
  </div>
</template>

<script>
import Pedidohecho from './pedidohecho.vue';
import Hamburguesas from './Hamburguesas.vue';
import Bebidas from './bebidas.vue';
import Adicionales from './adicionales.vue';
import Complementos from './complementos'
import { mapActions, mapState } from 'vuex'

export default {
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
      currentTab: '',
      tabs: ['Hamburguesas', 'Bebidas', 'Adicionales', 'Complementos'],
      show: false
      
    }
  }, 
  computed: {
    currentTabComponent: function () {
      return this.currentTab;
    },
        ...mapState(['newCliente'])

  },
  methods:{
    ...mapActions(['addCliente']),

    
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
