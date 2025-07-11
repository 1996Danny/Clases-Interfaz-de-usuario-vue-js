
<script setup>
import { reactive } from 'vue'

let formCompra = reactive(
    {
        "compraTotal": null,
        "metodo": null,
        "resultado": null,
        "mensaje": null
    }
)

function calcularDescuento(){
    if(formCompra.metodo == "efectivo" && formCompra.compraTotal > 100000){
        formCompra.resultado = formCompra.compraTotal - (formCompra.compraTotal * 0.15)
        formCompra.mensaje = "El total a pagar con descuento en efectivo : " + formCompra.resultado
    }else{
        formCompra.mensaje = "El total a pagas es de: " + formCompra.compraTotal
    }
}
</script>

<template>

        <div class="form-container">
        <h1>Ejercicio 11: 15% en efectivo y 100mil</h1>
        <form >
            <label for="compraTotal">Ingrese el total de la compra: </label>
            <input v-model="formCompra.compraTotal" id="compraTotal" type="number">
            <h3>Método de Pago</h3>
            
                Efectivo<input v-model="formCompra.metodo" type="radio" name="paymentMethod" value="efectivo" > 
           
                Otro<input v-model="formCompra.metodo" type="radio" name="paymentMethod" value="otro">
                <br>
            <input v-on:click="calcularDescuento()" type="button" name="" id="" value="Calcular"> 
        </form>
        <h1>{{ formCompra.mensaje }}</h1>
    </div>


</template>