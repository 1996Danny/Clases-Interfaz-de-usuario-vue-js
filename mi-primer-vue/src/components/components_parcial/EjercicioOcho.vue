

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
    if(formCompra.compraTotal > 100000){
        formCompra.resultado = formCompra.compraTotal - (formCompra.compraTotal * 0.1)
        formCompra.mensaje = "El total a pagar con descuento es de : " + formCompra.resultado
    }else{
        formCompra.mensaje = "Su compra no supera los 100000 debe pagar: " + formCompra.compraTotal
    }
}
</script>

<template>

        <div class="form-container">
        <h1>Ejercicio 8: descuento 10%</h1>
        <form >
            <label for="compraTotal">Ingrese el total de la compra: </label>
            <input v-model="formCompra.compraTotal" id="compraTotal" type="number">

            <input v-on:click="calcularDescuento()" type="button" name="" id="" value="Calcular"> 
        </form>
        <h1>{{ formCompra.mensaje }}</h1>
    </div>

</template>