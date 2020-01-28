<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.jpeg" width="300px">
    <HelloWorld msg="seleccionar "/>
    <input type="text" v-model="newMenu" placeholder="escribe"/><button @click="agregarMenu">ok</button>
    <ul>
      <li v-for="menu of menu" :key="menu.id">
        {{menu.cantidad}} - {{menu.nombre}}
        <span v-if="menu.cantidad === 0"> sin estock</span>
        
      </li>
    </ul>
    
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
      menu:[
    {nombre:'hambuerguesa', cantidad :1},
    {nombre:'bebidas', cantidad:4},
    {nombre:'adicionales', cantidad:8}
  ],
  newMenu:''
  }
  },
  methods:{
agregarMenu(){
  this.menu.push({
    nombre: this.newMenu, cantidad:0
  })
},

  }
  

    /* data() {
    return {
      saludo: 'pizza',
      name: 'orden'
    }
  },
    methods: {
     /*  alerta() {
        this.pedido = 'papas';
      } 
    } */
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
