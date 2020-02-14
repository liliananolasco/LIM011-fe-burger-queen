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
    <ul>
      <button @click="mostrarMenu('hamburguesas')">Hamburguesas</button>
      <button @click="mostrarMenu('bebidas')">Bebidas</button>
      <button @click="mostrarMenu('acompañamientos')">Acompañamientos</button>
      <button @click="mostrarMenu('adicionales')">Adicionales</button>

      <div id = "hamburguesa">
          <ul v-for="menu in menus" :key="menu.id">
            <!-- <button type="button" class="btn btn-lg btn-pill btn-primary">
              <img :src="getImgUrl(menu.imagen)" v-bind:alt="menu.nombre" width="80px">{{menu.nombre}}</button> -->
              <li v-for="item in menu.items" :key="item.id">
                <button type="button" class="btn btn-outline-success" @click="agregarMenu()">
                <img :src="getImgUrl(menu.imagen)" v-bind:alt="menu.nombre" class = "img"> {{item.Name}}
                {{item.Price}}</button>
              </li>
          </ul>
      </div>

    </ul>
    <table class = "table">
      <thead>
        <tr>
          <th scope="col">Cantidad</th>
          <th scopne="col">Nombre</th>
          <th scope="col">Precio Und.</th>
          <th scope="col">Precio Total</th>
        </tr>
      </thead>
      <tbody v-for="item in menu.items" :key="item.id">
        <tr>
          <th scope="row">{{item.cantidad}}</th>
          <td>{{item.Name}}</td>
          <td>{{item.Price}}</td>
          <td>{{item.Price * item.cantidad}}</td>
          <button @click="item.cantidad++, item.precio+=item.precio">+</button>
          <button @click="item.cantidad--, item.precio-=item.precio">-</button>
          <button @click="removeMenu(n)">X</button>
        </tr>
      </tbody>
    </table> 
    
    <li v-for="menu of menus" :key="menu.id">
      
      <h3>{{pedido.cantidad}} - {{pedido.nombre}} - {{pedido.Precio}}
      <button @click="pedido.cantidad++, pedido.precio+=pedido.precio">+</button>
      <button @click="pedido.cantidad--, pedido.precio-=pedido.precio">-</button>
      <button @click="removeMenu(n)">X</button></h3>
    </li>
    <!-- <h4> TOTAL : {{sumarMenu}}</h4> -->
    <!-- <table class="table">
      <thead>
        <tr>
          <th scope="col">Categoria</th>
          <th scope="col">nombre</th>
          <th scope="col">precio</th>
        </tr>
      </thead>
      <tbody v-for="producto in productos" :key="producto.id">
        <tr>
          <th scope="row">{{producto.Category}}</th>
          <td>{{producto.Name}}</td>
          <td>{{producto.Price}}</td>
        </tr>
      </tbody>
    </table>  -->
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
      menus:[],
      menu:[],
      alimento:0,
      total: 0,
      pedido:[],
      /* category:null,
      name:null,
      type:null,
      price:null,  */ 
     
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
    },
    mostrarMenu(Category) {
      this.menus = [];
      if (Category === 'hamburguesas') {
        let menu = {id : 1, nombre: 'Hamburguesa Simple', imagen: 'hamburguesasimple.png', items: []}
        menu.items = this.productos.filter(function(producto){
              return producto.Category == 'Hamburguesas';
          })
        this.menus.push(menu);        
      }  if (Category === 'bebidas') {
        this.menu = {id : 2, nombre: 'Hamburguesa Doble', imagen: 'bebidas.jpg', items: []}
        this.menu.items = this.productos.filter(function(producto){
              return producto.Category == 'Bebidas';
          });
        this.menus.push(this.menu);
      } if (Category === 'acompañamientos') {
        this.menu = {id : 2, nombre: 'Hamburguesa Doble', imagen: 'hamburguesa-doble.jpg', items: []}
        this.menu.items = this.productos.filter(function(producto){
              return producto.Category == 'Acompañamientos';
          });
        this.menus.push(this.menu);
      } if (Category === 'adicionales') {
        this.menu = {id : 2, nombre: 'Hamburguesa Doble', imagen: 'hamburguesa-doble.jpg', items: []}
        this.menu.items = this.productos.filter(function(producto){
              return producto.Category == 'Adicionales';
          });
        this.menus.push(this.menu);
      }
      
    },
    getImgUrl(imagen) {
      return require('../assets/'+imagen);
    },
    agregarMenu(){
      this.pedido.push({cantidad: this.item.Name=1})

        /* this.menu.push({
        nombre: Name, cantidad: this.menu.Name = 1, precio: this.menu.Price,
      })      */ 
    }, 
    removeMenu(x) {
      this.menu.splice(x,1);
      this.saveMenu();
    },
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
li {
  display: flex;
  margin: 0 10px;
}
button {
  margin: 10px;
  
}
.btn-outline-success{
width: 200px;
height: 100px;
padding: 0;
margin: 10px;
}
#categorias{
  display: flex;
}
.img{
  width: 50px;
  padding: 0;
  margin: 0;
}
</style>

