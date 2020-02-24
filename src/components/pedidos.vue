<template>
  <div>
    <h3>Nombre del cliente</h3>
    <p>
      <input v-model="newCliente"> 
      <button @click="addCliente">ok</button>
    </p>
   
 
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
                <button type="button" class="btn btn-outline-success" @click="mostrarPedido()">
                <img :src="getImgUrl(menu.imagen)" v-bind:alt="menu.nombre" class = "img">{{item.Name}}
                ${{item.Price}}</button>
              </li>
          </ul>
      </div>
      <div v-for="cliente in cliente" :key="cliente.id">
        <p> Cliente: <span class="cliente">{{cliente}}</span> <button @click="removeCliente(n)">X</button></p>
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
          <th scope="row">{{$store.state.numero}}</th>
          <td>{{item.Name}}</td>
          <td>{{item.Price}}</td>
          <td>{{item.Price * $store.state.numero}}</td>
          <button @click="$store.commit('aumentar')">+</button>
          <button @click="$store.commit('disminuir')">-</button>
          <button @click="removeMenu(n)">X</button>
        </tr>
      </tbody>
    </table> 
    
    <!-- <li v-for="menu of menus" :key="menu.id">
      
      <h3>{{pedido.cantidad}} - {{pedido.nombre}} - {{pedido.Precio}}
        <button @click="$store.commit('aumentar')">+</button>
        <h1>{{$store.state.numero}}</h1>
        <button @click="$store.commit('disminuir')">-</button>
        <h1>{{$store.state.numero}}</h1>
        <button @click="removeMenu(n)">X</button>
      </h3>
    </li> -->
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
      pedidos:[],
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
        let menu = {nombre: 'Hamburguesa Simple', imagen: 'hamburguesasimple.png', items: []}
        menu.items = this.productos.filter(function(producto){
              return producto.Category == 'Hamburguesas' && producto['Sub-Category'] == 'Simple';
          })
        this.menus.push(menu);        
        menu = {nombre: 'Hamburguesa Doble', imagen: 'hamburguesa-doble.jpg', items: []}
        menu.items = this.productos.filter(function(producto){
              return producto.Category == 'Hamburguesas' && producto['Sub-Category'] == 'Doble';
          })
        this.menus.push(menu);  
        menu = {nombre: 'Sandwich', imagen: 'sandwich.jpg', items: []}
        menu.items = this.productos.filter(function(producto){
              return producto.Category == 'Hamburguesas' && producto['Sub-Category'] == 'Sandwich';
          })
        this.menus.push(menu);       
      }  if (Category === 'bebidas') {
        this.menu = { nombre: 'Gaceosas y Agua', imagen: 'gaseosa.jpg', items: []}
        this.menu.items = this.productos.filter(function(producto){
              return producto.Category == 'Bebidas'&& producto['Sub-Category'] == 'Agua';
          });
        this.menus.push(this.menu);
        this.menu = {nombre: 'Cafe', imagen: 'cafe.jpg', items: []}
        this.menu.items = this.productos.filter(function(producto){
              return producto.Category == 'Bebidas' && producto['Sub-Category'] == 'Caliente';
          });
        this.menus.push(this.menu); 
        this.menu = {nombre: 'Jugo', imagen: 'jugo.jpeg', items: []}
        this.menu.items = this.productos.filter(function(producto){
              return producto.Category == 'Bebidas' && producto['Sub-Category'] == 'Fria';
          });
          this.menus.push(this.menu);
      } if (Category === 'acompañamientos') {
        this.menu = {nombre: 'Papas', imagen: 'acompañamiento.jpg', items: []}
        this.menu.items = this.productos.filter(function(producto){
              return producto.Category == 'Acompañamientos' && producto['Sub-Category'] == 'Papas';
          });
        this.menus.push(this.menu);
        this.menu = {nombre: 'Cebolla', imagen: 'cebolla.jpg', items: []}
        this.menu.items = this.productos.filter(function(producto){
              return producto.Category == 'Acompañamientos' && producto['Sub-Category'] == 'Cebolla';
          });
          this.menus.push(this.menu);
      } if (Category === 'adicionales') {
        this.menu = {nombre: 'Huevo', imagen: 'adicionales.jpg', items: []}
        this.menu.items = this.productos.filter(function(producto){
              return producto.Category == 'Adicionales' && producto['Sub-Category'] == 'Huevo';
          });
        this.menus.push(this.menu);
        this.menu = {nombre: 'Queso', imagen: 'queso.jpg', items: []}
        this.menu.items = this.productos.filter(function(producto){
              return producto.Category == 'Adicionales' && producto['Sub-Category'] == 'Queso';
          });
          this.menus.push(this.menu);
      }
      
    },
    getImgUrl(imagen) {
      return require('../assets/'+imagen);
    },
    mostrarPedido(Name){
       this.pedidos = [];
       if(Name === 'Hamburguesa S. Pollo'){
         let pedido = {cantidad: 1, items:[] }
         pedido.items = this.productos.filter(function(producto){
           return producto.Name == 'Hamburguesa S. Pollo' && producto['Price']== 10;
         })
         this.pedidos.push(pedido);

       }
    },
    /* agregarMenu(){
      this.pedido.push({cantidad: this.item.Name=1})

        this.menu.push({
        nombre: Name, cantidad: this.menu.Name = 1, precio: this.menu.Price,
      })      
    },  */
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
width: 250px;
height: 120px;
padding: 40px ;
margin: 10px;
display: flex;
  align-items: flex-start;
flex-wrap: nowrap;


}
#categorias{
  display: flex;
}
.img{
  width: 70px;
  padding: 2px 0px;
  margin: 2px 0px;
  
  
}
/* p .texto{
  display: flex;
  align-self: flex-end;
  width: 150px;
} 
 */
</style>

