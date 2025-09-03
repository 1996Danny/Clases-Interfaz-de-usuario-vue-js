<script setup>
import { reactive } from 'vue'
// nota del estudiante si aprobó o no aprobó
let formCalificacion = reactive(
    {
        "calificacion1": null,
        "calificacion2": null,
        "calificacion3": null,
        "resultado": null
    }
)

function obtenerPromedio(){
    formCalificacion.resultado=(formCalificacion.calificacion1 +formCalificacion.calificacion2+formCalificacion.calificacion3)/3
}

</script>

<template>

    
    <div class="form-container">
        <h1>Ejercicio 4: promedio de 3 calificaciones.</h1>
        <form >
            <label for="calificacion1">Ingrese la calificación 1: </label>
            <input v-model="formCalificacion.calificacion1" id="calificacion1" type="number">

            <label for="calificacion2">Ingrese la calificación 2: </label>
            <input v-model="formCalificacion.calificacion2" id="calificacion2" type="number">

            <label for="calificacion3">Ingrese la calificación 3: </label>
            <input v-model="formCalificacion.calificacion3" id="calificacion3" type="number">

            <input v-on:click="obtenerPromedio()" type="button" name="" id="" value="Obtener promedio"> 
        </form>
        <h1>{{ formCalificacion.resultado }}</h1>
    </div>
</template>