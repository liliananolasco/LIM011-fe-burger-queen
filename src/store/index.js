import Vue from 'vue'
import Vuex from 'vuex'
/* import { vuexFireMutations,  firestoreAction  } from 'vuexfire/'; */
 import {db} from '../db' 

import VueRouter from 'vue-router'



Vue.use(Vuex)
Vue.use(VueRouter)
Vue.config.productionTip = false

export default new Vuex.Store({
  el: '#dynamic-component-demo',
  state: {
    hamburguesas: [],
    acompañamientos:[],
    adicionales: [],
    bebidas: [],
    newCliente:null,
    pedido: {
      clientePedido:null,
      total:0,
      items: []
    },
  },
    
  mutations:  {
    setState(state,payload){
      state[payload.state] = payload.value
    },
    llenarOrden(state, {value}){
      // eslint-disable-next-line no-console
      console.log(value)
      state.pedido.items.push(value)
    },
    aumentar(state,index){
      state.pedido.items[index].cantidad++
    },
    disminuir(state,index){
      state.pedido.items[index].cantidad--
    },
    borrarCliente(state) {
      state.pedido.clientePedido = null;
      }, 
    borrarMenu(state, x){
      state.pedido.items.splice(x,1)
    },
    sumarTodo(state, {value}){
      state.pedido.total= value
    },
    mostrarCliente(state, {value}){
      state.pedido.clientePedido = value
      // eslint-disable-next-line no-console
      console.log(state.pedido.clientePedido)
    },
  }, 
  
  actions: {
    getAcompañamientos(context){
      try{
        const acompañamiento = [];
        db.collection('Acompañamientos')
          .get()
          .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // eslint-disable-next-line no-console
            /* console.log(`${doc.id} => ${doc.data().Nombre}`); */
            let eventoData = {
              id: doc.id,
              cantidad: doc.data().quantity,
              nombre: doc.data().Nombre,
              precio: doc.data().Precio,
              img: doc.data().Img,
              categoria: doc.data().Categoria,
            }
            acompañamiento.push(eventoData)
          });
          context.commit('setState',{
            state: 'acompañamientos',
            value: acompañamiento
          })
      })
      } catch(error){
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
    getAdicionales(context){
      try{
        const adicional = [];
        db.collection('Adicionales')
          .get()
          .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // eslint-disable-next-line no-console
            /* console.log(`${doc.id} => ${doc.data().Nombre}`); */
            let eventoData = {
              id: doc.id, 
              cantidad: doc.data().quantity,
              nombre: doc.data().Nombre,
              precio: doc.data().Precio,
              img: doc.data().Img,
              categoria: doc.data().Categoria,
            }
            adicional.push(eventoData)
          });
          context.commit('setState',{
            state: 'adicionales',
            value: adicional
          })
        })
      } catch(error){
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
    getHamburguesas(context){
      try{
        const hamburguesa = [];
        db.collection('Hamburguesas')
          .get()
          .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // eslint-disable-next-line no-console
            /* console.log(`${doc.id} => ${doc.data().Nombre}`); */
            let eventoData = {
              id: doc.id,
              cantidad: doc.data().quantity,
              nombre: doc.data().Nombre,
              precio: doc.data().Precio,
              img: doc.data().Img,
              categoria: doc.data().Categoria,
            }
            hamburguesa.push(eventoData)
          });
          context.commit('setState',{
            state: 'Hamburguesas',
            value: hamburguesa
          })
        })
      } catch(error){
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
    getBebidas(context){
      try{
        const bebida = [];
        db.collection('Bebidas')
          .get()
          .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // eslint-disable-next-line no-console
           /*  console.log(`${doc.id} => ${doc.data().Nombre}`); */
            let eventoData = {
              id: doc.id,
              cantidad: doc.data().quantity,
              nombre: doc.data().Nombre,
              precio: doc.data().Precio,
              img: doc.data().Img,
              categoria: doc.data().Categoria,
            }
            bebida.push(eventoData)
          });
          context.commit('setState',{
            state: 'Bebidas',
            value: bebida
          })
        })
      } catch(error){
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
    seleccionarProducto(context, producto){
      const orden = {
        cantidad: producto.cantidad,
        nombre: producto.nombre,
        precio: producto.precio,
        
      };
      const payload = {value: orden}

      context.commit('llenarOrden', payload)
      context.dispatch('sumarMenu')
    },
    sumarMenu(context) {
      let totales = 0;
      context.state.pedido.items.forEach((item) => {
        totales += item.precio*item.cantidad;
      });
      const payload = {value: totales}
      context.commit('sumarTodo', payload);
    },
    addCliente(context,payload) {
      let cliente = null;
      if(!context.newCliente){
        cliente = context.newCliente;
        context.newCliente = '';
      } 
      context.commit('mostrarCliente',payload)
      // eslint-disable-next-line no-console
      console.log(cliente);
    }, 
  },
  modules: {
  }
})
