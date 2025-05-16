<script setup>
let saludo = "Hola";
let temperaturas = [19, 21, 28, 33, 40];

let clubes = ["river", "boca", "racing", "colon"];
clubes[1] = "indendiente";
clubes.splice(2, 0);
clubes.shift();
clubes.pop();
let datos = [25, "lunes", 30, true, 48, "viernes"];
// otra clase

let paises = ["argentina", "brasil", "chile"];
paises.push("uruguay") // inserta uruguay al final de la lista
paises.unshift("peru") // inserta peru al principio de la lista
paises.splice(3,0, "bolivia") //inserta bolivia en el indice 3

paises.sort() // ordenar lista de a-z
paises.reverse() // ordenar la lista de z-a

let paisescopia = paises.slice()

</script>

<template>
    <h1>EjerciciosListas Template</h1>
    <h2>{{ saludo }}</h2>
    <h2>{{ temperaturas }}</h2>
    <h2>{{ clubes }}</h2>
    <ol>
        <li>{{ clubes[1] }}</li>
        <li>{{ clubes[2] }}</li>
        <li>{{ clubes[3] }}</li>
    </ol>
    <h2>{{ datos }}</h2>
    <ol>
        <li v-for="item in datos">
            {{ item }}
        </li>
    </ol>

    <h2>Update boca a</h2>

    <h1>Lista de Paises</h1>
   <h2>{{ paises }}</h2> 
   <h2>{{ paisescopia }}</h2> 

</template>

<style scoped>

</style>