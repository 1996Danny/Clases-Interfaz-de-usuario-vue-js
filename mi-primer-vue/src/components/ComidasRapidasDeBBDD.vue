<script setup>
import { ref } from 'vue';

const listaClientes = ref([]);

async function fetchClientes() {
    // hacer la solicitud fetch
    console.log("haciendo cpeticion al back")
    const respuesta = await fetch('http://127.0.0.1:8000/clientes');
    // almacenar los resultados dentro de una variable
    console.log(respuesta)
    listaClientes.value = await respuesta.json();
}
</script>

<template>
    <h1>Comidas Rapidas</h1>
    <button @click="fetchClientes()">obtener clientes</button>
    <input type="button" v-on:click="fetchClientes()" value="obtener clientes">
    {{ listaClientes }}
</template>