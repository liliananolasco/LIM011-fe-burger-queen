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
    <ul name="slide-fade" mode="out-in">
    <div id = "hamburguesa">
      <button @click="show = !show">Hamburguesas</button>
      <transition name="slide-fade">
        <li v-if="show">
          <button type="button" class="btn btn-lg btn-pill btn-primary" @click="agregarMenu('Hamburguesa Simple')" >
            <img alt="Vue logo" src="../assets/hamburguesasimple.png" width="100px">Hamburgesa Simple</button>
          <button  class="btn btn-lg btn-pill btn-primary" @click="agregarMenu('Hamburguesa Doble')">
            <img alt="Vue logo" src="../assets/hamburguesa-doble.jpg" width="100px">Hamburguesa doble</button>
        </li>
      </transition>
    </div>
    <div id = "bebida">
      <button @click="show1 = !show1">Bebidas</button>
      <transition name="slide-fade">
        <li v-if="show1">
          <button type="button" class="btn btn-lg btn-pill btn-primary" @click="agregarMenu('Hamburguesa Simple')" >
            <img alt="Vue logo" src="../assets/hamburguesasimple.png" width="100px">Hamburgesa Simple</button>
          <button  class="btn btn-lg btn-pill btn-primary" @click="agregarMenu('Hamburguesa Doble')">
            <img alt="Vue logo" src="../assets/hamburguesa-doble.jpg" width="100px">Hamburguesa doble</button>
        </li>
      </transition>
    </div>
    <div id = "acompañamiento">
      <button @click="show2 = !show2">Acompañamientos</button>
      <transition name="slide-fade">
        <li v-if="show2">
          <button type="button" class="btn btn-lg btn-pill btn-primary" @click="agregarMenu('Hamburguesa Simple')" >
            <img alt="Vue logo" src="../assets/hamburguesasimple.png" width="100px">Hamburgesa Simple</button>
          <button  class="btn btn-lg btn-pill btn-primary" @click="agregarMenu('Hamburguesa Doble')">
            <img alt="Vue logo" src="../assets/hamburguesa-doble.jpg" width="100px">Hamburguesa doble</button>
        </li>
      </transition>
    </div>
    <div id = "adicionales">
      <button @click="show3 = !show3">Adicionales</button>
      <transition name="slide-fade">
        <li v-if="show3">
          <button type="button" class="btn btn-lg btn-pill btn-primary" @click="agregarMenu('Hamburguesa Simple')" >
            <img alt="Vue logo" src="../assets/hamburguesasimple.png" width="100px">Hamburgesa Simple</button>
          <button  class="btn btn-lg btn-pill btn-primary" @click="agregarMenu('Hamburguesa Doble')">
            <img alt="Vue logo" src="../assets/hamburguesa-doble.jpg" width="100px">Hamburguesa doble</button>
        </li>
      </transition>
    </div>
    </ul>
    
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
el: '#hamburguesa',

  
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
      show: null,   
      show1: null,
      show2: null,
      show3: null,
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
    showCategory(){
      if(this.show === true){
        this.show1 = false, 
        this.show2 = false,
        this.show3 = false
      } /* if (this.show1 === true) {
        this.show = false,
        this.show1 = false,
        this.show3 = false
      } if (this.show2 === true) {
        this.show = false,
        this.show1 = false,
        this.show3 = false;
      }if (this.show3 === true) {
        this.show = false,
        this.show1 = false,
        this.show2 = false;
      } else {
        // eslint-disable-next-line no-console
        console.log('error');
      } */
      
      
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
li {
  display: flex;
  margin: 0 10px;
}
button {
  margin: 10px;
  
}
.btn-primary{
margin: 30px;
}

/* .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
 /*  transform: translateX(10px);
  opacity: 0;
} */ 
.slide-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.slide-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#categorias{
  display: flex;
}
</style>

     <div id="list-demo">
    <button v-on:click="add">
      <img src="@/assets/mesero.png" class ="imgen">
      <p>Mesero</p></button>
    <button v-on:click="remove">
      <img src="@/assets/cocina.png" class = "imgen">
      <p>Cocina</p>
    </button>
    <transition-group name="list" tag="p">
      <span v-for="item in items" v-bind:key="item" class="list-item">
        {{ item }}
      </span>
    </transition-group>
  </div>
    <!-- <section class = "salas">
      <div id="demo">
        <button v-on:click="show = !show" class = "tipos">
          <img src="@/assets/mesero.png" class ="imgen">
          <p>Mesero</p>
        </button>
        <transition name="fade">
          <section v-if="show">
            <Opciones/>
          </section>
          <section v-if="show">
            <Opciones/>
          </section>
        </transition>
    </div>
    <div id="demo">
      <button v-on:click="show1 = !show1" class = "tipos">
        <img src="@/assets/cocina.png" class = "imgen">
        <p>Cocina</p>
      </button>
      <transition name="fade1">
        <section v-if="show1">
          <Cocina/>
        </section>
        <section v-if="show1">
          <Cocina/>
        </section>
      </transition>
    </div>
    </section> -->
    /* el: '#demo',
  data() {
    return{
      show: false,
      show1: false,
    }
    
  }, */

