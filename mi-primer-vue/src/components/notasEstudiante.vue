
<script setup>
import { reactive } from 'vue';

const estudiante = reactive({
    nombre: null,
    apellido: null,
    nota: "su nota es: " + null,
    calificacion: null
});

function calcularCalificacion(){
    if(estudiante.nota >= 4){
        estudiante.calificacion = "Insuficiente";
    }else if(estudiante.nota == 5){
        estudiante.calificacion = "Regular";
    } else if(estudiante.nota == 6){
        estudiante.calificacion = "Buena";
    } else if(estudiante.nota == 7){
        estudiante.calificacion = "Muy buena";
    } else if(estudiante.nota == 8){
        estudiante.calificacion = "Distinguido";
    } else if(estudiante.nota == 9){
        estudiante.calificacion = "Excelente";
    } else if(estudiante.nota == 10){
        estudiante.calificacion = "Sobresaliente";
    }
};

</script>

<template>

<h1>Notas de estudiantes</h1>

<div class="form-container">
    <form action="">
        <label for="apellido">Apellido</label>
        <input v-model="estudiante.apellido" type="text" name="" id="apellido">
        
        <label for="nombre">Nombre</label>
        <input v-model="estudiante.nombre" type="text" name="" id="nombre">

        <label for="nota">Nota</label>
        <input v-model="estudiante.nota" type="number" name="" id="nota">

        <input v-on:click="calcularCalificacion()" type="button" class="btn" name="" id="" value="Calificación">
    </form>
    <h2>{{ estudiante.apellido }}, {{ estudiante.nombre }} {{ estudiante.nota }} {{ estudiante.calificacion }}</h2>
</div>
{{ estudiante }}

</template>