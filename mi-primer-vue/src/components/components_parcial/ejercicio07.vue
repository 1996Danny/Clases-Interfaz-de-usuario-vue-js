<script setup>
import { reactive } from 'vue'

let formCompra = reactive(
    {
        "compraTotal": null,
        "cantidadProductos": null,
        "resultado": null,
        "mensaje": null
    }
)

function calcularDescuento(){
    if(formCompra.cantidadProductos > 20){
        formCompra.resultado = formCompra.compraTotal - 1000
        formCompra.mensaje = "El total a pagar con descuento es de : " + formCompra.resultado
    }else{
        formCompra.mensaje = "Su compra no supera los 100000 debe pagar: " + formCompra.compraTotal
    }
}
</script>

<template>

        <div class="form-container">
        <h1>Ejercicio 7: descuento compra 1000</h1>
        <form >
            <label for="compraTotal">Ingrese el total de la compra: </label>
            <input v-model="formCompra.compraTotal" id="compraTotal" type="number">
            <label for="cantidadProductos">Ingrese la cantidad de productos: </label>
            <input v-model="formCompra.cantidadProductos" id="cantidadProductos" type="number">

            <input v-on:click="calcularDescuento()" type="button" name="" id="" value="Calcular"> 
        </form>
        <h1>{{ formCompra.mensaje }}</h1>
    </div>

</template>