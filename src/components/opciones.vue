<template>
  <div>
    <h3>Nombre del cliente</h3>
    <p>
      <input v-model="newCliente"> 
      <button @click="addCliente">ok</button>
    </p>
    <button @click="total++">+</button>
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
    <pedidohecho :total="total"/>
    </div>
  </div>
</template>

<script>
import Pedidohecho from './pedidohecho.vue';
import Hamburguesas from './Hamburguesas.vue';
import Bebidas from './bebidas.vue';
import Adicionales from './adicionales.vue';
import Complementos from './complementos'
import { mapState } from 'vuex'

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

computed: {
  currentTabComponent: function () {
    return this.currentTab;
  },
  ...mapState([ 'hamburguesas']),
},
data(){
  return {
    currentTab: 'Hamburguesas',
    tabs: ['Hamburguesas', 'Bebidas', 'Adicionales', 'Complementos'],
    cliente:[],
    newCliente:null,
    total: 1, 
  }
}, 
mounted(){
  if(localStorage.getItem('cliente')) {
    try {
      this.cliente = JSON.parse(localStorage.getItem('cliente'));
    } catch(e) {
      localStorage.removeItem('cliente');
    }
  }
},
methods: {
  /* addCliente(){
  clienteRef.Push(this.newCliente);
  this.newCliente.name = '';
  }, */
  addCliente() {
    if(!this.newCliente) return;
    this.cliente.push(this.newCliente);
    this.newCliente = '';
    this.saveCliente();
  },
  /* removeCliente(x) {
  this.cliente.splice(x,1);
  this.saveCliente();
  }, */
  saveCliente() {
    let parsed = JSON.stringify(this.cliente);
    localStorage.setItem('cliente', parsed);
  },
  removeMenu(x) {
      this.menu.splice(x,1);
      this.saveMenu();
    }
  },
}
</script>

<style>

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li {
  display: flex;
  margin: 0 10px;
}
button {
  margin: 10px;
  
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
#categorias{
  display: flex;
}
.img{
  width: 70px;
  padding: 2px 0px;
  margin: 2px 0px;
}
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
.posts-tab {
  display: flex;
}
.posts-sidebar {
  max-width: 40vw;
  margin: 0;
  padding: 0 10px 0 0;
  list-style-type: none;
  border-right: 1px solid #ccc;
}
.posts-sidebar li {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
}
.posts-sidebar li:hover {
  background: #eee;
}
.posts-sidebar li.selected {
  background: lightblue;
}
.selected-post-container {
  padding-left: 10px;
}
.selected-post > :first-child {
  margin-top: 0;
  padding-top: 0;
}

</style>

