
<script setup>

import { reactive } from 'vue';

let formTerremoto = reactive({
    "magnitud": null,

    "mensaje": ""
});

function calcular() { 
    if (formTerremoto.magnitud <= 0) {
        formTerremoto.mensaje= "Magnitud inválida";
    } else if (formTerremoto.magnitud < 2){
        formTerremoto.mensaje= "Magnitud micro"
    } else if (formTerremoto.magnitud >= 2 && formTerremoto.magnitud < 4){
        formTerremoto.mensaje= "Magnitud menor"
    } else if (formTerremoto.magnitud >= 4 && formTerremoto.magnitud < 5){
        formTerremoto.mensaje= "Magnitud ligera"
    } else if (formTerremoto.magnitud >= 5 && formTerremoto.magnitud < 6){
        formTerremoto.mensaje= "Magnitud moderada"
    } else if (formTerremoto.magnitud >= 6 && formTerremoto.magnitud < 7){
        formTerremoto.mensaje= "magnitud fuerte"
    } else if (formTerremoto.magnitud >= 7 && formTerremoto.magnitud < 8){
        formTerremoto.mensaje= "Magnitud mayor"
    } else if (formTerremoto.magnitud >= 8 && formTerremoto.magnitud <= 12){ 
        formTerremoto.mensaje= "Gran magnitud"
    }else{
        formTerremoto.mensaje= "Magnitud inválida"
    }
}
</script>

<template>

<div class="form-container">
    <h1>Ejercicio 14: Calculadora de magnitud de terremotos</h1>
    <form action="">
        <label for="magnitud">Ingrese la Magnitud del terremoto</label>
        <input v-model.number="formTerremoto.magnitud" type="number" id="magnitud" name="magnitud">

        <input v-on:click="calcular()" type="button" class="btn" value="Calcular" id="">

    </form>
    <h1>  {{ formTerremoto.mensaje }}</h1>
</div>

</template>