
<script setup>
import { reactive } from 'vue'

let formCompra = reactive(
    {
        "compraTotal": null,
        "resultado": null,
        "mensaje": null
    }
)

function calcularDescuento(){
    if(formCompra.compraTotal > 50000){
        formCompra.resultado = formCompra.compraTotal - (formCompra.compraTotal * 0.1)
        formCompra.mensaje = "El total a pagar con descuento por compra mayor a 50000: " + formCompra.resultado
    }else{
        formCompra.mensaje = "El total a pagas es de: " + formCompra.compraTotal
    }
}
</script>

<template>

        <div class="form-container">
        <h1>Ejercicio 10: 10% para 50mil</h1>
        <form >
            <label for="compraTotal">Ingrese el total de la compra: </label>
            <input v-model="formCompra.compraTotal" id="compraTotal" type="number">

            <input v-on:click="calcularDescuento()" type="button" name="" id="" value="Calcular"> 
        </form>
        <h1>{{ formCompra.mensaje }}</h1>
    </div>


</template>