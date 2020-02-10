<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.jpeg" width="300px" />
    <pedidos msg="seleccionar "/>
  </div>
  
</template>

<script>
import pedidos from './components/pedidos.vue'

export default {
  name:'app',
  firebase:{
    clientes:'',
    /* clientesRef */
  },
  components: {
    pedidos
  },
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

