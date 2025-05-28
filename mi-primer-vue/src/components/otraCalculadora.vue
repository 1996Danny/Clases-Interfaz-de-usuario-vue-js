
<script setup>
import { reactive } from 'vue';

const formCalculadora = reactive({
    num1: null,
    num2: null,
    resultado: null,
    mensaje: ""
});

function sumar(){
    formCalculadora.resultado = formCalculadora.num1 + formCalculadora.num2;
    formCalculadora.mensaje = "La suma es: " + formCalculadora.resultado;
}
function restar(){
    formCalculadora.resultado = formCalculadora.num1 - formCalculadora.num2;
    formCalculadora.mensaje = "La resta es: " + formCalculadora.resultado;
}
function multiplicar(){
    formCalculadora.resultado = formCalculadora.num1 * formCalculadora.num2;
    formCalculadora.mensaje = "La multiplicación es: " + formCalculadora.resultado
}
function dividir(){
    if(formCalculadora.num2 != 0){
    formCalculadora.resultado = formCalculadora.num1 / formCalculadora.num2;
    formCalculadora.mensaje = "La división es: " + formCalculadora.resultado
    } else {
        alert("No se puede dividir por cero bola!!!☠️")
    }
}

</script>

<template>

    <h1>Calculadora</h1>
    <div class="form-container">
        <form action="">
            <label for="num1" class="etiqueta">Ingrese un número:</label>
          <input v-model.number="formCalculadora.num1" type="number" id="num1" class="entrada-numero" placeholder="Primer valor">

            <label for="num2" class="etiqueta">Ingrese un número:</label>
          <input v-model.number="formCalculadora.num2" type="number" id="num2" class="entrada-numero" placeholder="Primer valor">

          <input v-on:click="sumar()" type="button" class="btn" value="sumar" name="" id="">
          <input v-on:click="restar()" type="button" class="btn" value="restar" name="" id="">
          <input v-on:click="multiplicar()" type="button" class="btn" value="multiplicar" name="" id="">
          <input v-on:click="dividir()" type="button" class="btn" value="dividir" name="" id="">
        </form>
    </div>
    <h1>
       {{ formCalculadora.mensaje }}
    </h1>
</template>

