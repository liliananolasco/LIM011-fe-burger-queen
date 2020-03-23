
<template>
  <div  class="hello">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Cliente</th>
          <th scope="col">Orden</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody v-for="(el, index) in $store.state.dataPedido" :key="el.id">
        <tr>
          <th scope="row">{{el.cliente}}</th>
          <td>{{index+1}}</td>
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            ver Pedido
          </button>
        </tr>
        <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
               <thead>
              <tr>
                <th scope="col">Cantidad</th>
                <th scope="col">Orden</th>
                <th scope="col">Check</th>
              </tr>
            </thead>
            <tr  v-for="item in el.pedido" :key="item.id">
              <td>{{item.cantidad}}</td>
              <td>{{item.nombre}}</td>
              <td>
                <input type="checkbox" aria-label="Checkbox for following text input">  
              </td>
            </tr>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Listo</button>
            </div>
          </div>
        </div>
      </div>
      </tbody> 
    </table>
    




  </div>
</template>
<script>
export default {
  name: 'Cocina',
  props: {
    msg: String
  },
  
  
  created(){
    this.$store.dispatch('getPedidos');
  },
  
  
}

</script>



