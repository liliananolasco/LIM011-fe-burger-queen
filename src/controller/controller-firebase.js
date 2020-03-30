export const listaAcompañamientos = (db, callback) => {
  db.collection('Acompañamientos')
  .get()
  .then((querySnapshot) => {
    const acompañamiento = [];
    querySnapshot.forEach((doc) => {
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
    })
    callback(acompañamiento)
  })
};
export const listaAdicionales = (db, callback) => {
  db.collection('Adicionales')
  .get()
  .then((querySnapshot) => {
    const adicional = [];
    querySnapshot.forEach((doc) => {
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
    })
    callback (adicional)
  })
};
export const listaHamburguesas = (db, callback) => {
  db.collection('Hamburguesas')
  .get()
  .then((querySnapshot) => {
    const hamburguesa = [];
    querySnapshot.forEach((doc) => {
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
    })
    callback(hamburguesa)
  })  
};
export const listaBebidas = (db, callback) => {
  db.collection('Bebidas')
  .get()
  .then((querySnapshot) => {
    const bebida = [];
    querySnapshot.forEach((doc) => {
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
    callback(bebida)
  })
};
export const crearPedidos = (db, state) => {
  db.collection("Pedidos").add({
    cliente: state.pedido.clientePedido,
    fecha:new Date(),
    pedido: state.pedido.items,
    total: state.pedido.total,
    check: false
    })
  .then(function(docRef) {
    // eslint-disable-next-line no-console
    console.log(" Documento escrito con ID: ", docRef.id);
  })
};
export const listaPedidos = (db, callback) => {
  db.collection('Pedidos')
  .where("check", "==", false).orderBy('fecha')
  .get()
  .then((querySnapshot) => {
    const pedido = [];
    querySnapshot.forEach((doc) => {
      /* console.log(`${doc.id} => ${doc.data().pedido}`); */
      let eventoData = {
        id: doc.id,
        cliente: doc.data().cliente,
        itemsPedido: doc.data().pedido,
      }
      pedido.push(eventoData)
    });
    callback(pedido)
  })
};
export const editarPedido = (db, state) =>{
  var washingtonRef = db.collection("Pedidos").doc(state.pedidoSeleccionado.id);
  // Set the "capital" field of the city 'DC'
  return washingtonRef.update({
    check:true,
    itemsPedido: state.pedidoSeleccionado.itemsPedido
  })
  .then(function() {
      // eslint-disable-next-line no-console
      console.log("Document successfully updated!");
  })
  .catch(function(error) {
      // eslint-disable-next-line no-console
      console.error("Error updating document: ", error);
  });
}