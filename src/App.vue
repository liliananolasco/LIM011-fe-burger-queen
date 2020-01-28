<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.jpeg" width="300px" />
    
    <h3>Nombre del cliente</h3>
    <input type="text" v-model="nombreCliente" placeholder="nombre" />
    <button @click="guardarCliente()">ok</button>
    <!-- <ul>
      <li:key="cliente.id">
        {{cliente.nombre}}
v-for="cliente of cliente"       
       
      </li>
    </ul> -->
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
      cliente:''
      
    }
  },
  methods:{
    guardarCliente(){
      this.cliente = nombreCliente,
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