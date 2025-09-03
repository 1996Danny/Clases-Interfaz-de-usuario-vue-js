<script setup>
import { reactive } from 'vue'
// nota del estudiante si aprobó o no aprobó
let formVehiculo = reactive(
    {
        "peso": null,
        "resultado": null
    }
)

function comprobarPeso(){
    if(formVehiculo.peso > 400){
        formVehiculo.resultado = "No puede pasar el puente"
    } else { 
        formVehiculo.resultado = "Puede pasar el puente"
    }
}

</script>

<template>

    
    <div class="form-container">
        <h1>Ejercicio 3: Vehículo Puente</h1>
        <form >
            <label for="peso">Ingrese el peso del vehículo</label>
            <input v-model="formVehiculo.peso" id="peso" type="number">

            <input v-on:click="comprobarPeso()" type="button" name="" id="" value="Comprobar peso"> 
        </form>
        <h1>{{ formVehiculo.resultado }}</h1>
    </div>
</template>