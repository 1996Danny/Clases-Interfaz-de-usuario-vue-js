<script setup>
import { ref } from "vue";
// import { reactive } from "vue";

let provincias = ref(["Chaco"]);

function insertar(nombre) {
    if (provincias.value.includes(nombre)) {
        console.log("Nombre existente")
    } else {
        provincias.value.push(nombre);
    }
}

function eliminar(nombre) {
    let pos = provincias.value.indexOf(nombre);
    if (pos !== -1) {
        provincias.value.splice(pos, 1);
    } else {
        console.log("Nombre no encontrado");
    }
}

function modificar(nombre) {
    let pos = provincias.value.indexOf(nombre);
    let nuevoNombre;
    if (pos !== -1) {
        nuevoNombre = prompt("Ingrese el nuevo nombre:", nuevoNombre);
    } else {
        console.log("Nombre no encontrado");
    }
    provincias.value[pos] = nuevoNombre;
}

</script>

<template>
    <div>
        <tr v-for="i in provincias" style="border: 1;">
            <td>{{ i }}</td>
        </tr>
        <hr>
        <form action="">
            <input type="text" v-model="nombre">
            <input class="btn btn--insertar" type="button" value="Agregar" v-on:click="insertar(nombre)">
            <input class="btn btn--eliminar btn--sm" type="button" value="Eliminar" v-on:click="eliminar(nombre)">
            <input class="btn btn--modificar" type="button" value="Modificar" v-on:click="modificar(nombre)">

        </form>
    </div>

</template>

<style scoped>
/* Variables de color */
:root {
    --color-insertar: #42b983;
    --color-modificar: #ffc107;
    --color-eliminar: #ff4444;
    --color-texto: #fff;
}

/* Estructura base para botones */
.btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    margin: 0.25rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

/* Estados hover y active */
.btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.btn:active {
    transform: translateY(0);
    box-shadow: none;
}

/* Variantes específicas */
.btn--insertar {
    background-color: var(--color-insertar);
    color: var(--color-texto);
}

.btn--modificar {
    background-color: var(--color-modificar);
    color: #333;
}

.btn--eliminar {
    background-color: var(--color-eliminar);
    color: var(--color-texto);
}

/* Iconos (usando Unicode o importa Font Awesome) */
.btn__icon {
    font-size: 1.1em;
}

/* Versión pequeña para tablas */
.btn--sm {
    padding: 0.25rem 0.5rem;
    font-size: 0.8rem;
}

/* Efecto de deshabilitado */
.btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
}
</style>