<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.jpeg" width="300px" />
    <h3>Nombre del cliente</h3>
    <p>
      <input v-model="newCliente"> 
      
      <button @click="addCliente">ok</button>
    </p>
    <div v-for="cliente in cliente" :key="cliente.id">
      <p>
        <span class="cliente">{{cliente}}</span> <button @click="removeCliente(n)">X</button>
      </p>
    </div>
    <HelloWorld msg="seleccionar "/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Firebase from 'firebase';
import config from './config';
let app = Firebase.initializeApp(config);
let db = app.database();
let clientesRef = db.ref('Clientes');

export default {
  name:'app',
  firebase:{
    clientes:clientesRef
  },
  components: {
    HelloWorld
    },
  data(){
    return {
      /* cliente:{
        name:'',
      }, */
      cliente:[],
      newCliente:null      
    }
  },
  mounted() {
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
      // ensure they actually typed something
      if(!this.newCliente) return;
      this.cliente.push(this.newCliente);
      this.newCliente = '';
      this.saveCliente();
    },
    removeCliente(x) {
      this.cliente.splice(x,1);
      this.saveCliente();
    },
    saveCliente() {
      let parsed = JSON.stringify(this.cliente);
      localStorage.setItem('cliente', parsed);
    }
  }
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

