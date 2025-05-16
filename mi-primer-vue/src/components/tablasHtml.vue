<script setup>
const personas = [
  { nombre: 'Ana', edad: 25, pais: 'Argentina' },
  { nombre: 'Juan', edad: 30, pais: 'España' },
  { nombre: 'Sofía', edad: 22, pais: 'México' },
  { nombre: 'Luis', edad: 28, pais: 'Chile' },
  { nombre: 'María', edad: 35, pais: 'Colombia' },
  { nombre: 'Carlos', edad: 40, pais: 'Perú' },
  { nombre: 'Elena', edad: 27, pais: 'Brasil' }
];


let numA = parseFloat(prompt("Ingrese numero: "));
let numB = parseFloat(prompt("Ingrese numero: "));
let total = 0;

total = sumar(numA, numB);

alert(total);

console.log("El resultado es: ", total);

function sumar(nA, nB) {
  return nA + nB;
}

</script>
<template>
  <center>
    <div class="contenedor">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Pais</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in personas">
            <td>{{ i.nombre }}</td>
            <td>{{ i.edad }}</td>
            <td>{{ i.pais }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </center>
</template>

<style scoped>
.contenedor {
  /* background-color: rgb(199, 180, 180); */
  width: 80%;
  height: 300px;
  padding: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
}

th :nth-child(even) {
  background-color: grey !important;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: rgb(125, 201, 139);
  font-weight: bold;
}

tr :hover {
  background-color: blue;
  transition: all 5s ease;
}
</style>
