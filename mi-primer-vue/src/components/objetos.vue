<script setup>
import { ref } from 'vue';

let Persona = {
    apellido:"Perez", 
    nombre:"Ariel horacio", 
    dni:27999222, 
    fechaNacimeinto:"1986-03-25", 
    edad: 25, 
    sexo: "Masculino",
};

// crear un objeto auto, 
let automovil = {
    marca: "Toyota",
    modelo: "Corolla",
    color: "Blanco",
    año: 2010,
    
}

// crear un metodo de automovil
function mostrarInfo(){
    // This method returns a string with the car info
    return `El auto es un ${automovil.color} ${automovil.marca} ${automovil.modelo} del año ${automovil.año}`;
}

// reactive variable to hold info string
const info = ref('');

// method to call mostrarInfo and update info variable
function mostrarInfoHandler(){
    info.value = mostrarInfo();
}

// _______________Listas de Objetos_______________________
let Personas = [ 
    {
        ape:"Diaz", nom:"Juan",
    },
    {
        ape:"Perez", nom:"Ariel",
    },
    {
        ape:"Rojas", nom:"Ana",
    }
];



</script>

<template>
    <div class="continuous-background">
        <h1>{{ Persona }}</h1>
        <h2>{{ Persona.apellido }}</h2>

        <h1>Tabla del objeto persona</h1>
        <table>
            <tr>
                <td class="c1">
                    <p>Nombre</p>
                </td>
                <td class="c">
                    <p>{{ Persona.nombre}}</p>
                </td>
            </tr>
            <tr>
                <td class="c1">
                    <p>Apellido</p>
                </td>
                <td class="c">
                    <p>{{Persona.apellido}}</p>
                </td>
            </tr>
            <tr>
                <td class="c1">
                    <p>DNI</p>
                </td>
                <td class="c">
                    <p>{{Persona.dni}}</p>
                </td>
            </tr>
            <tr>
                <td class="c1">
                    <p>Fecha de Nacimiento</p>
                </td>
                <td class="c">
                    <p>{{Persona.fechaNacimeinto}}</p>
                </td>
            </tr>
        </table>
        <h1>{{ automovil.marca }}</h1>

        <!-- Button to call the method -->
        <button @click="mostrarInfoHandler">Mostrar Info del Auto</button>

        <!-- Display the info returned by the method -->
        <p>{{ info }}</p><br>

<hr><br>
<h1>Listas de Objetos</h1>

    </div>
</template>

<style scoped>
.continuous-background {
  background: linear-gradient(to bottom, black, black);
  min-height: 100vh;
  width: 1080px;
}
table{
    border-collapse: collapse;
}

.c1 {
   border: 2px solid pink;
   text-align: center;
   color: green;
   font-size: xx-large;
   font-weight: bold;
   width: 1080px;

}

.c {
   border: 2px solid pink;
   text-align: center;
   color: white;
   font-size: xx-large;
   font-weight: bold;
   width: 1080px;

}

button {
  font-size: large;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
}
</style>
