<script setup>

const numA = 25;
let numB = 30;

let suma = numA + numB;
console.log(suma)

// crear una lista de operaciones +, -, /, *, 30% de 25, prom
let resta = numA - numB;
let mult = numA * numB;
let div = numA / numB;
let porc = 25 * 0.3;
let prom = (numA + numB) / 2;


</script>

<template>

    <div class="container">
        <h1>Hola mundo!!!</h1>
        <h1>titulo aqui!</h1>
        <br>
        <p>
            Estamos en el Favaloro
        </p>
        <p>
            hoy programamos mucho
        </p>
        <p class="cansado">
            Mañana es viernes
        </p>
        <br>
        <img src="../assets/OIP.jpeg" alt="">
        <br>
        <button type="submit"> press me </button>
        <input type="button" value="not press me">
        <input type="text" value="nombre">

    </div>

    <div class="container">
        <table border="1" cellspacing="0" cellpadding="8" style="border-collapse: collapse; width: 100%;">
            <thead class="fila1">
                <tr>
                    <th style="border: 1px solid #ddd;">ID</th>
                    <th style="border: 1px solid #ddd;">Producto</th>
                    <th style="border: 1px solid #ddd;">Precio</th>
                    <th style="border: 1px solid #ddd;">Stock</th>
                </tr>
            </thead>
            <tbody>
                <tr class="fila2">
                    <td style="border: 1px solid #ddd;">1</td>
                    <td style="border: 1px solid #ddd;">Laptop HP</td>
                    <td style="border: 1px solid #ddd; text-align: right;">$850.00</td>
                    <td style="border: 1px solid #ddd; text-align: center;">15</td>
                </tr>
                <tr class="fila3">
                    <td style="border: 1px solid #ddd;">2</td>
                    <td style="border: 1px solid #ddd;">Teclado mecánico</td>
                    <td style="border: 1px solid #ddd; text-align: right;">$75.50</td>
                    <td style="border: 1px solid #ddd; text-align: center;">23</td>
                </tr>
                <tr class="fila4">
                    <td style="border: 1px solid #ddd;">4</td>
                    <td style="border: 1px solid #ddd;">Monitor 24"</td>
                    <td style="border: 1px solid #ddd; text-align: right;">$189.00</td>
                    <td style="border: 1px solid #ddd; text-align: center;">5</td>
                </tr>
            </tbody>
        </table>
    </div>
    <br>
    <div>
        <table>
            <tr>
                <td class="c1">
                    <p>celda1</p>
                </td>
                <td class="c2">
                    <p>celda2</p>
                </td>
            </tr>
            <tr>
                <td class="c3">
                    <p>celda3</p>
                </td>
                <td class="c4">
                    <p>celda4</p>
                </td>
            </tr>
        </table>
    </div>

    <h1> el resultado de la suma es es: {{ suma }}</h1>
    <h1> el resultado de la resta es es: {{ resta }}</h1>
    <h1> el resultado de la mult es es: {{ mult }}</h1>
    <h1> el resultado de la div es es: {{ div }}</h1>
    <h1> el resultado de la porc es es: {{ porc }}</h1>
    <h1> el resultado de la prom es es: {{ prom }}</h1>

</template>

<style scoped>
body {
    display: flex;
    justify-content: center;
    align-items: center;
    /* min-height: 100%; */
    margin: 0;
    font-family: 'Times New Roman', Times, serif;
}

h1 {
    color: red;
    font-size: xx-large;
    font-weight: bolder;
}

p {
    color: blue;
    font-size: 24pt;
}

.cansado {
    color: green;
    font-size: large;
}

.container {
    margin: auto;

}

.fila1 {
    background-color: green;
}

.fila2 {
    background-color: blue;
}

.fila3 {
    background-color: violet;
}

.fila4 {
    background-color: orange;
}

table {
    border: 5px solid white;
    width: 100%;

}

.c1 {
    background-color: yellow;
    border: 5px solid white;
}

.c2 {
    background-color: green;
    border: 5px solid white;
}

.c3 {
    background-color: red;
    border: 5px solid white;
}

.c4 {
    background-color: blue;
    border: 5px solid white;
}
</style>
