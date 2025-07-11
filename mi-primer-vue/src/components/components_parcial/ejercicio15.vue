

<script setup>

import { reactive } from 'vue';

let formTemperatura = reactive({
    "temperatura": null,

    "mensaje": ""
});

function calcular() { 
    if (formTemperatura.temperatura < 17) {
        formTemperatura.mensaje= "Hipotermia muy profunda";
    } else if (formTemperatura.temperatura >= 17 && formTemperatura.temperatura < 28) {
        formTemperatura.mensaje= "Hipotermia profunda"
    } else if (formTemperatura.temperatura >= 28 && formTemperatura.temperatura < 36){
        formTemperatura.mensaje= "Hipotermia ligera"
    } else if (formTemperatura.temperatura >= 36 && formTemperatura.temperatura < 37.4){
        formTemperatura.mensaje= "Temperatura normal"
    } else if (formTemperatura.temperatura >= 37.4 && formTemperatura.temperatura < 38){
        formTemperatura.mensaje= "Fabricula"
    } else if (formTemperatura.temperatura >= 38 && formTemperatura.temperatura < 39){
        formTemperatura.mensaje= "Fiebre moderada"
    } else if (formTemperatura.temperatura >= 39 && formTemperatura.temperatura < 40){
        formTemperatura.mensaje= "Fiebre alta"
    } else if (formTemperatura.temperatura >= 40 && formTemperatura.temperatura <= 41.5){ 
        formTemperatura.mensaje= "Fiebre muy alta"
    }else{
        formTemperatura.mensaje= "Hiperpirexia"
    }
}
</script>

<template>

<div class="form-container">
    <h1>Ejercicio 15: Temperatura corporal</h1>
    <form action="">
        <label for="temperatura"> Ingrese su temperatura corporal en °C</label>
        <input v-model.number="formTemperatura.temperatura" type="number" id="temperatura" name="temperatura">

        <input v-on:click="calcular()" type="button" class="btn" value="Calcular" id="">

    </form>
    <h1>  {{ formTemperatura.mensaje }}</h1>
</div>

</template>