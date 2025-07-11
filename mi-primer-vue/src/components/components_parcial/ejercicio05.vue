<script setup>
import { reactive } from 'vue'
// nota del estudiante si aprobó o no aprobó
let formIMC = reactive(
    {
        "altura": null,
        "peso": null,
        "resultado": null,
        "mensaje": null
    }
)

function calcularIMC(){
    formIMC.resultado= formIMC.peso / (formIMC.altura * formIMC.altura)
    if(formIMC.resultado < 18.5){
        formIMC.mensaje = "Bajo de peso"
    } else if(formIMC.resultado < 25){
        formIMC.mensaje = "Peso normal"
    } else if(formIMC.resultado < 30){
        formIMC.mensaje = "Sobrepeso"
    } else {
        formIMC.mensaje = "Obesidad"
        }
}
</script>

<template>

        <div class="form-container">
        <h1>Ejercicio 5: IMC</h1>
        <form >
            <label for="altura">Ingrese su altura(m): </label>
            <input v-model="formIMC.altura" id="altura" type="number">

            <label for="peso">Ingrese su peso(kg): </label>
            <input v-model="formIMC.peso" id="peso" type="number">

            <input v-on:click="calcularIMC()" type="button" name="" id="" value="Calcular"> 
        </form>
        <h1> Su IMC es de {{ formIMC.resultado }}</h1>
        <h1> Usted tiene {{ formIMC.mensaje }}</h1>
    </div>

</template>