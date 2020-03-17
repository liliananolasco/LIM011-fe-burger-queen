
<template>
  <div  class="hello">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Cantidad</th>
          <th scope="col">Nombre</th>
          <th scope="col">Chekin</th>
        </tr>
        <tbody v-for="producto in productos" :key="producto.id">
        <tr>
          <th scope="row">{{producto.Category}}</th>
          <td>{{producto.Name}}</td>
          <td>{{producto.Type}}</td>
          <td>{{producto.Price}}</td>
        </tr>
      </tbody> 
      </thead>
    </table>
  </div>
</template>
<script>
export default {
  name: 'Cocina',
  props: {
    msg: String
  }
}

</script>
