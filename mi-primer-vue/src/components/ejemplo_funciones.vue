<script setup>
import { ref } from "vue";
let numA = 0;
let numB = 0;
let total = ref(0);

// total = sumar(numA, numB);
// alert(total);

// console.log(total);  

function sumar() {
    total.value = numA + numB;
}
</script>

<template>
    <form action="">
        <input type="number" name="" id="" v-model.number="numA">
        <input type="number" name="" id="" v-model.number="numB">
        <input type="button" name="" id="" value="calcular" v-on:click="sumar()">
    </form>

    <h1>Total: {{ total }}</h1>

</template>
