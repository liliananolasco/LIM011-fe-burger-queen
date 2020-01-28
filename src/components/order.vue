<template>
  <div class="order">
    <h1>{{ msg }}</h1>
    <h3>Nombre del cliente</h3>
    <input type="text" v-model="NameCientele"/><button>ok</button>
    
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
    <ul>
      
      <button class="btn btn-lg btn-pill btn-secondary"><img alt="Vue logo" src="../assets/hamburguesasimple.png" width="100px">Hamburguesa simple</button>
      <button class="btn btn-lg btn-pill btn-secondary"><img alt="Vue logo" src="../assets/hamburguesa-doble.jpg" width="100px">Hamburguesa doble</button>
    </ul>
    <h3>Acompañamiento</h3>
      <ul>
      <button>Papas fritas</button>
      <button>Aros de cebolla</button>
      </ul>
    <h3>Bebidas</h3>
      <ul>
      <button>Agua 500ml</button>
      <button>Agua 750ml</button>
      <button>Bebida/gaseosa 500ml</button>
      <button>Bebida/gaseosa 750ml</button>
    </ul>
    <h3>Adicionales</h3>
      <ul>
      <button value = "1.00">queso $ 1.00</button>
      <button value = "1.00">huevo $ 1.00</button>
      </ul>
    
  </div>
</template>

<script>
export default {
  name: "order",
  props: {
    msg: String
  }
}
</script>

<button type="button" class="btn btn-lg btn-pill btn-primary" v-on:click="saludo += 1" >{{saludo}}</button>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
/* import order from './components/order.vue' */
export default {
  data() {
    return {
      saludo: 0
    }
  },
  name: 'app',
  components: {
    HelloWorld
    },
    methods: {
      alerta() {
        this.saludo = 'papas';
      }
    }