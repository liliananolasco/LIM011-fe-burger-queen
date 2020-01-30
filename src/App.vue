<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.jpeg" width="300px" />
    
    <h3>Nombre del cliente</h3>
    <div v-for="cliente in cliente" :key="cliente.id">
    <p>
    <span class="cat">{{cliente}}</span> <button @click="removeCliente(n)">Remove</button>
    </p>
    </div>
    <p>
    <input v-model="newCliente"> 
    <button @click="addCliente">ok</button>
  </p>
    <HelloWorld msg="seleccionar "/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name:'app',
  components: {
    HelloWorld
    },
  data(){
    return {
      cliente:[],
      newCliente:null      
    }
  },
  mounted() {
    if(localStorage.getItem('cliente')) {
      try {
        this.cliente = JSON.parse(localStorage.getItem('clientes'));
      } catch(e) {
        localStorage.removeItem('cliente');
      }
    }
  },
  methods: {
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

/* data(){
    return {
      cliente:[
        {nombre:'cliente'}
      ],
      newCliente:''
    }
  },
  methods:{
    agregarCliente(){
      this.cliente.push({
        nombre:this.newCliente
      })
      this.newCliente= ''
    }
  },
} */



const app = new Vue({
  el:'#app',
  data: {
    cats:[],
    newCat:null
  },
  
})

