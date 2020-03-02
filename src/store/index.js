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
    cantidad: 1,
    hamburguesas: [],
    acompañamientos:[],
    adicionales: [],
    bebidas: [],
    pedido: {
      cliente: '',
      total:0,
      items: []
    },
  },
    
  mutations:  {
    aumentar(state){
      state.cantidad++
    },
    disminuir(state){
      state.cantidad--
    },
    setState(state,payload){
      state[payload.state] = payload.value
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
            console.log(`${doc.id} => ${doc.data().Nombre}`);
            let eventoData = {
              id: doc.id,
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
          // eslint-disable-next-line no-console
          console.log(acompañamiento)
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
            console.log(`${doc.id} => ${doc.data().Nombre}`);
            let eventoData = {
              id: doc.id, 
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
          // eslint-disable-next-line no-console
          console.log(adicional)
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
            console.log(`${doc.id} => ${doc.data().Nombre}`);
            let eventoData = {
              id: doc.id,
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
          // eslint-disable-next-line no-console
          console.log(hamburguesa)
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
            console.log(`${doc.id} => ${doc.data().Nombre}`);
            let eventoData = {
              id: doc.id,
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
          // eslint-disable-next-line no-console
          console.log(bebida)
      })
      } catch(error){
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
  
  
  },
  modules: {
  }
})
