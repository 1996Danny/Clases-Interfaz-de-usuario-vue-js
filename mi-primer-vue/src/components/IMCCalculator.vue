
<script setup>

import { reactive } from 'vue';

const calcularIMC = reactive({
    peso: null,
    altura: null,
    imc: null,
    mensaje: ""
});

// calcular el imc
function calcular() { 
    calcularIMC.imc = calcularIMC.peso / (calcularIMC.altura * calcularIMC.altura);
        if (calcularIMC.imc < 16) {
        calcularIMC.mensaje= "Delgadez Severa";
    } else if (calcularIMC.imc >= 16.0 && calcularIMC.imc <= 16.9){
        calcularIMC.mensaje= "Delgadez Moderada"
    } else if (calcularIMC.imc >= 17.0 && calcularIMC.imc <= 18.4){
        calcularIMC.mensaje= "Delgadez Leve"
    } else if (calcularIMC.imc >= 18.5 && calcularIMC.imc <= 24.9){
        calcularIMC.mensaje= "Normal"
    } else if (calcularIMC.imc >= 25.0 && calcularIMC.imc <= 29.9){
        calcularIMC.mensaje= "Sobrepeso"
    } else if (calcularIMC.imc >= 30.0 && calcularIMC.imc <= 34.9){
        calcularIMC.mensaje= "Obesidad Grado I"
    } else if (calcularIMC.imc >= 35.0 && calcularIMC.imc <= 39.9){
        calcularIMC.mensaje= "Obesidad Grado II"
    } else if (calcularIMC.imc >= 40.0){ 
        calcularIMC.mensaje= "Obesidad Grado III"
    }
}
</script>

<template>

<div class="form-container">
    <form action="">
        <label for="altura">Altura (m)</label>
        <input v-model.number="calcularIMC.altura" type="number" id="altura" name="altura" placeholder="Altura (m)">

        <label for="peso">Peso (kg)</label>
        <input v-model.number="calcularIMC.peso" type="number" id="peso" name="peso" placeholder="Peso (kg)">

        <input v-on:click="calcular()" type="button" class="btn" value="Calcular" id="">

    </form>
    <h1> {{ calcularIMC.imc }} {{ calcularIMC.mensaje }}</h1>
</div>

</template>