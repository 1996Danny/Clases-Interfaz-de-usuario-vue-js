<script setup>
    import { ref } from 'vue';
    const listaCliente = ref([]);
    async function clientesIndex(){
        try{
            const respuesta = await fetch('http://127.0.0.1:8000/api/clientes/', 
                
            {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'}
            });
            
            listaCliente.value = await respuesta.json();
            // const resultado = await respuesta.json();
            // console.log(resultado);
            
        }
        catch(error) {
            console.error("Error al solicitar la lista de clientes", error);
        }
    }
</script>

<template>
    
    <h1>Clientes</h1>
    <input type="button" value="Cargar clientes" @click="clientesIndex()">

    <div class="lista-container">
        <table>
            <thead>
                    <th>
                        ID
                    </th> 
                    <th>
                        Apellido
                    </th> 
                    <th>
                        Nombre
                    </th> 
                    <th>
                        Dni
                    </th> 
                    <th>
                        Direccion
                    </th> 
                    <th>
                        <input type="button" value="Nuevo cliente" @click="agregarCliente()">
                    </th> 
            </thead>
            <tbody>
                <tr v-for="i in listaCliente">
                    <td>{{ i.id }}</td>
                    <td>{{ i.apellido }}</td>
                    <td>{{ i.nombre }}</td>
                    <td>{{ i.dni }}</td>
                    <td>{{ i.direccion }}</td>
                    <td><input type="button" value="Eliminar" @click="eliminarCliente(i.id)" style="background-color: red;">
                    <input type="button" value="Modificar" @click="modificarCliente(i.id)" style="background-color: blue;">
                    <input type="button" value="Ver" @click="verCliente(i.id)" style="background-color: green;"></td>
                </tr>
            </tbody>
        </table>
    <!-- <h3>{{ listaCliente}}</h3> -->
    </div>
</template>