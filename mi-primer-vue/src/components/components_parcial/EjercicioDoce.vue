
<script setup>
import { reactive } from 'vue'

let formCalificacion = reactive(
    {
        "nota": null,
        "mensaje": null
    }
)

function calificar(){
    if(formCalificacion.nota < 1){

        formCalificacion.mensaje = formCalificacion.nota + " Es una nota inválida"
    }else if(formCalificacion.nota <= 4){
        formCalificacion.mensaje = formCalificacion.nota + " Es una nota insuficiente"
    }else if(formCalificacion.nota == 5){
        formCalificacion.mensaje = formCalificacion.nota + " Es una nota regular"
    }else if(formCalificacion.nota <= 7){
        formCalificacion.mensaje = formCalificacion.nota + " Es una nota buena"
    }else if(formCalificacion.nota <= 8){
        formCalificacion.mensaje = formCalificacion.nota + " Es una nota muy buena"
    }else if(formCalificacion.nota <= 9){
        formCalificacion.mensaje = formCalificacion.nota + " Es una nota distinguida"
    }else if(formCalificacion.nota <= 10){
        formCalificacion.mensaje = formCalificacion.nota + " Es una nota sobresaliente"
    }else{
        formCalificacion.mensaje = formCalificacion.nota + " Es una nota inválida"
    }
}
</script>

<template>

        <div class="form-container">
        <h1>Ejercicio 12: calificación(R-B-MB)</h1>
        <form >
            <label for="nota">Ingrese la nota: </label>
            <input v-model="formCalificacion.nota" id="nota" type="number">

            <input v-on:click="calificar()" type="button" name="" id="" value="Calificar"> 
        </form>
        <h1>{{ formCalificacion.mensaje }}</h1>

    </div>


</template>