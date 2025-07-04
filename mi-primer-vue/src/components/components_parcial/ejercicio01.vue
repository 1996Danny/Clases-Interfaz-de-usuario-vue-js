<script setup>
import { reactive } from 'vue'
// nota del estudiante si aprobó o no aprobó
let formCalificacion = reactive(
    {
        "calificacion": null,
        "resultado": null
    }
)

function calificar(){
    if(formCalificacion.calificacion >= 6){
        formCalificacion.resultado = "Aprobado"
    } else { 
        formCalificacion.resultado = "Desaprobado"
    }
}

</script>

<template>

    
    <div class="form-container">
        <h1>Ejercicio 1: Aprobado/Desaprobado</h1>
        <form >
            <label for="calificacion">Ingrese la calificación: </label>
            <input v-model="formCalificacion.calificacion" id="calificacion" type="number">

            <input v-on:click="calificar()" type="button" name="" id="" value="Calificar"> 
        </form>
        <h1>{{ formCalificacion.resultado }}</h1>
    </div>
</template>