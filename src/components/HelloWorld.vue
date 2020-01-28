
<template>
  <div  class="hello">
    <h1>{{ msg }}</h1>
    <button type="button" class="btn btn-lg btn-pill btn-primary" @click="agregarMenu('Hamburguesa Simple')"><img alt="Vue logo" src="../assets/hamburguesasimple.png" width="100px">Hamburgesa Simple</button>
    <button class="btn btn-lg btn-pill btn-secondary" @click="agregarMenu('Hamburguesa Doble')"><img alt="Vue logo" src="../assets/hamburguesa-doble.jpg" width="100px">Hamburguesa doble</button>

    <li v-for="menu of menu" :key="menu.id">
        {{menu.cantidad}} - {{menu.nombre}}
        <span v-if="menu.cantidad === 0"></span>
      </li>
   <!--  <input type="text" v-model="NameCientele"/>
        <button type="button" class="btn btn-lg btn-pill btn-primary" @:click="pedido">pedido</button>
        <button type="button" class="btn btn-lg btn-pill btn-primary" v-on:click="saludo" >{{saludo}}</button>
      <ul>
      <button >Desayuno</button>
      <button>Menu</button>
      <button>Acompañamiento</button>
      <button>Bebidas</button>
      <button>Adicionales</button>
    </ul>
    <h3>Desayuno</h3>
    <ul>
      <button value = "5.00">Cafe Americano $ 5.00</button>
      <button value = "7.00">cafe con Leche $7.00</button>
      <button value = "10.00">Sandwich de Jamon y Queso $10.00</button>
      <button value = "7.00">Jugos de Frutas Frescas $ 7.00</button>
    </ul>
    <h3>Hamburguesas</h3>
    
      
      <router-view class="view"></router-view> -->
    
  </div>
</template>




<script>


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      menu:[
        {nombre:'hamburguesa', cantidad :1},
      ],
      newMenu:''
    }
},
methods:{
    agregarMenu(alimento){
      this.menu.push({
        nombre: alimento, cantidad:1
      })
    },
}
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: flex;
  margin: 0 10px;
}
button {
  margin: 30px;
}
</style>
