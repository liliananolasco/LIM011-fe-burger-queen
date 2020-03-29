<template>
  <div id="app">
   <router-view/>
  </div>
</template>

<script>
import bootstrap from '../node_modules/bootstrap/dist/js/bootstrap.js'

export default {
  name:'app',
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

