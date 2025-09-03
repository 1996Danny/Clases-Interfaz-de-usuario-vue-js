<script setup>
import { reactive } from 'vue'
// nota del estudiante si aprobó o no aprobó
let formEdad = reactive(
    {
        "edad": null,
        "resultado": null
    }
)

function comprobarEdad(){
    if(formEdad.edad >= 18){
        formEdad.resultado = "Puede entrar al boliche"
    } else { 
        formEdad.resultado = "No puede entrar al boliche"
    }
}

</script>

<template>
    <div class="form-container">
        <h1>Ejercicio 2: Entrada al boliche</h1>
        <form >
            <label for="edad">Ingrese su edad: </label>
            <input v-model="formEdad.edad" id="edad" type="number">

            <input v-on:click="comprobarEdad()" type="button" name="" id="" value="Enviar"> 
        </form>
        <h1>{{ formEdad.resultado }}</h1>
    </div>
</template>