import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import './registerServiceWorker'
import firebase from 'firebase'

Vue.use(VueRouter)
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBGBD3EK_RUcwGt5gBNUAmjf7gPRtgraw8",
  authDomain: "burger-b4f13.firebaseapp.com",
  databaseURL: "https://burger-b4f13.firebaseio.com",
  projectId: "burger-b4f13",
  storageBucket: "burger-b4f13.appspot.com",
  messagingSenderId: "165448603267",
  appId: "1:165448603267:web:15a63fe4cf3f21094aedb6",
  measurementId: "G-TNZS7K2KLN"
};
let app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();

import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin);


new Vue({
  render: h => h(App),
  store,
  
}).$mount('#app')

/* const hello = new Vue({
  el: '#hello',
  Cliente: '',
}) */

