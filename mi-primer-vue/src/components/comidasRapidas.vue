
<script setup>
import {reactive} from 'vue';

let pedidosComidas = reactive(
    [
	{
		"fecha" : null,
		"apellido" : "Gómez",
		"nombre" : "Juan",
		"telefono" : "11-1234-5678",
		"comida" : "Hamburgueza Común",
		"cantidad" : 1,
		"precio" : 10000,
		"total" : 10000
	},
	{
		"fecha" : null,
		"apellido" : "Pérez",
		"nombre" : "María",
		"telefono" : "11-2345-6789",
		"comida" : "Hamburgueza Común",
		"cantidad" : 3,
		"precio" : 10000,
		"total" : 30000
	},
	{
		"fecha" : null,
		"apellido" : "Gómez",
		"nombre" : "Juan",
		"telefono" : "11-1234-5678",
		"comida" : "Hamburgueza Especial",
		"cantidad" : 1,
		"precio" : 15000,
		"total" : 15000
	},
	{
		"fecha" : null,
		"apellido" : "López",
		"nombre" : "Carlos",
		"telefono" : "11-3456-7890",
		"comida" : "Hamburgueza Especial",
		"cantidad" : 5,
		"precio" : 15000,
		"total" : 75000
	},
	{
		"fecha" : null,
		"apellido" : "Rodríguez",
		"nombre" : "Ana",
		"telefono" : "11-4567-8901",
		"comida" : "Lomito",
		"cantidad" : 2,
		"precio" : 7500,
		"total" : 15000
	},
	{
		"fecha" : null,
		"apellido" : "Pérez",
		"nombre" : "María",
		"telefono" : "11-2345-6789",
		"comida" : "Pizza Común",
		"cantidad" : 2,
		"precio" : 8000,
		"total" : 16000
	}
])

const formPedidos = reactive(
    {
        "fecha" : null,
        "apellido" : "",
        "nombre" : "",
        "telefono" : "",
        "comida" : "",
        "cantidad" : 0,
        "precio" : 0
    }
);


// cargar formulario a la lista de objetos

function cargar(){
    let pedidoNuevo = Object.assign({}, formPedidos);
    //metodo para cargar el formulario ingresado en el objeto pedidosComidas
    pedidosComidas.push(pedidoNuevo);
    // console.log("datos cargados")
}

</script>

<template>
    <div class="cuerpo">
        <div class="listaCointainer">
                <h1>Información del Cliente</h1>
    <table>
      <thead>
        <tr>
          <th>Apellido</th>
          <th>Nombre</th>
          <th>Teléfono</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pedidosComida, index in pedidosComidas" :key="index">
                    <td>{{ pedidosComida.nombre }}</td>
                    <td>{{ pedidosComida.apellido }}</td>
                    <td>{{ pedidosComida.telefono }}</td>
                    <td>{{ pedidosComida.fecha }}</td>
        </tr>
      </tbody>
    </table>

    <h1>Detalle del Pedido</h1>
    <table>
      <thead>
        <tr>
          <th>Comida</th>
          <th>Cantidad</th>
          <th>Precio Unitario</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
                <tr v-for="pedidosComida, index in pedidosComidas" :key="index">
                    <td>{{ pedidosComida.comida }}</td>
                    <td>{{ pedidosComida.cantidad }}</td>
                    <td>{{ pedidosComida.precio }}</td>
                    <td>{{ pedidosComida.precio * pedidosComida.cantidad }}</td>
                </tr>
      </tbody>
    </table>
  </div>
  <div class="container">
    <h2>Registro de datos</h2>
    {{ formPedidos }}
    <form action="">
        <label for="fecha">fecha del pedido</label>
        <input type="date" name="" id="fecha" v-model="formPedidos.fecha">

        <label for="nombre" >Nombre</label>
        <input type="text" name="" id="nombre" v-model="formPedidos.nombre" placeholder="Ingrese su nombre">

        <label for="apellido">Apellido</label>
        <input type="text" name="" id="apellido" v-model="formPedidos.apellido" placeholder="Ingrese su apellido">

        <label for="telefono" >Telefono</label>
        <input type="text" name="" id="telefono" v-model="formPedidos.telefono" placeholder="Ingrese su telefono">

        <label for="comida" >Comida</label>
        <input type="text" name="" id="comida"  v-model="formPedidos.comida" placeholder="Ingrese la comida que desea pedir">

        <label for="cantidad" >cantidad</label>
        <input type="number" name="" id="cantidad" v-model.number="formPedidos.cantidad" placeholder="cantidad">

        <label for="precio" >Precio unitario</label>
        <input type="number" name="" id="precio" v-model.number="formPedidos.precio" placeholder="Precio unitario">

        <label for="total" >Precio Total</label>
        <input type="number" name="" id="number" disabled v-bind:value="formPedidos.cantidad * formPedidos.precio">       

        <input type="button" value="Agregar" v-on:click="cargar()">
    </form>
    
  </div>
  </div>



</template>

<style scoped>
    label{
        font-weight: bold;
        display: block;
        margin-top: 10px;
    }

    input{
        width: 100%;
        padding: 8px;
        margin-top: 5px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .btn {
        margin-top: 15px;
        padding: 10px;
        width: 100%;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover{
        background-color: #3e8e41;
        
    }
</style>