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
]

)
</script>

<template>
    <div class="cuerpo">
        <div class="formContainer">
            <h2>Registro de datos</h2>
            <form action="">
                <label for="apellidos">apellidos</label>
                <input type="text" id="apellidos">

                <label for="nombres">nombres</label>
                <input type="text" id="nombres">

                <label for="dni">dni</label>
                <input type="text" id="dni">

                <input class="btn" type="button" value="Agregar Persona">
                <input class="btn" type="button" value="Modificar Persona">
            </form>

        </div>

        <div class="listaCointainer">

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