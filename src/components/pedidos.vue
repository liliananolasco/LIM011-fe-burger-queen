<template>
  <div>
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
    <button type="button" class="btn btn-lg btn-pill btn-primary" @click="agregarMenu('Hamburguesa Simple')" >
      <img alt="Vue logo" src="../assets/hamburguesasimple.png" width="100px">Hamburgesa Simple</button>
    <button  class="btn btn-lg btn-pill btn-secondary" @click="agregarMenu('Hamburguesa Doble')">
      <img alt="Vue logo" src="../assets/hamburguesa-doble.jpg" width="100px">Hamburguesa doble</button>
    <li v-for="menu of menu" :key="menu.id">
      <h3>{{menu.cantidad}} - {{menu.nombre}} - {{menu.precio}}
      <button @click="menu.cantidad++, menu.precio=menu.precio+10">+</button>
      <button @click="menu.cantidad--, menu.precio=menu.precio-10">-</button>
      <button @click="removeMenu(n)">X</button></h3>
    </li>
    <!-- <h4> TOTAL : {{sumarMenu}}</h4> -->
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Categoria</th>
          <th scope="col">nombre</th>
          <th scope="col">Tipo</th>
          <th scope="col">precio</th>
        </tr>
      </thead>
      <tbody v-for="producto in productos" :key="producto.id">
        <tr>
          <th scope="row">{{producto.Category}}</th>
          <td>{{producto.Name}}</td>
          <td>{{producto.Type}}</td>
          <td>{{producto.Price}}</td>
        </tr>
      </tbody>
    </table> 
  </div>
</template>
<script>
import {db} from '../db'

export default {
name: 'pedidos',
props: {
    msg: String
  },
firebase:{
  clientes:'',
},
data(){
    return {
      /* cliente:{
        name:'',
      }, */
      cliente:[],
      newCliente:null,
      productos:[],
      menu:[],
      newMenu:null,
      alimento:0,
      total: 0,
      category:null,
      name:null,
      type:null,
      price:null,     
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
    this.getProducts();
  },
  methods: {
    async getProducts(){
      try{
        const producto = [];
        db.collection('Products').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // eslint-disable-next-line no-console
            console.log(`${doc.id} => ${doc.data().Price}`);
            let eventoData = doc.data();
            eventoData.id = doc.id;
            producto.push(eventoData)
          });
      })
      this.productos = producto;    
      } catch(error){
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
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
  },
  /* computed:{
    sumarMenu() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.total = 0;
      this.menu.forEach((menu) => {
        // eslint-disable-next-line no-console
        console.log(menu);
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.total = this.total + menu.precio;
      });
      return this.total;
    },
  } */
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

