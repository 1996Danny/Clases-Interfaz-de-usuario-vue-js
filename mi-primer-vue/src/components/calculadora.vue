
<script setup>
import { reactive } from 'vue';

const formCalculadora = {
    num1: 0,
    num2: 0,
    resultado: 0
};

function sumar(){
    formCalculadora.resultado = formCalculadora.num1 + formCalculadora.num2;
}

</script>

<template>
  <div class="calculadora-container">
    <h1 class="titulo">Calculadora Científica</h1>
    <div class="contenedor">
      <form class="formulario">
        <div class="grupo-input">
          <label for="num1" class="etiqueta">Ingrese un número:</label>
          <input v-model.number="num1" type="number" id="num1" class="entrada-numero" placeholder="Primer valor">
        </div>
        
        <div class="grupo-input">
          <label for="num2" class="etiqueta">Ingrese un número:</label>
          <input v-model.number="num2" type="number" id="num2" class="entrada-numero" placeholder="Segundo valor">
        </div>

        <div class="contenedor-botones">
          <input v-on:click="sumar()" type="button" value="Sumar" class="boton operacion">
          <input type="button" value="Restar" class="boton operacion">
          <input type="button" value="Multiplicar" class="boton operacion">
          <input type="button" value="Dividir" class="boton operacion">
        </div>

        <div class="grupo-input">
          <label class="etiqueta">Resultado: </label>
          <input type="text" id="resultado" class="entrada-resultado" readonly v-bind:value="{{ formCalculadora.resultado }}">
        </div>
      </form>
    </div>
  </div>

</template>

<style scoped>
/* Estilos generales */
.calculadora-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(145deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.titulo {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.2rem;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

/* Contenedor principal */
.contenedor {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

/* Formulario */
.formulario {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.grupo-input {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.etiqueta {
  color: #34495e;
  font-weight: 500;
  font-size: 1rem;
}

/* Campos de entrada */
.entrada-numero, .entrada-resultado {
  padding: 0.8rem 1rem;
  border: 2px solid #dfe6e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.entrada-numero:focus {
  border-color: #3498db;
  outline: none;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
}

.entrada-resultado {
  background-color: #f8f9fa;
  font-weight: bold;
  color: #2c3e50;
}

/* Botones */
.contenedor-botones {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 1rem 0;
}

.boton {
  padding: 0.8rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.operacion {
  background-color: #3498db;
  color: white;
}

.operacion:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

.operacion:active {
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 480px) {
  .calculadora-container {
    padding: 1rem;
  }
  
  .contenedor-botones {
    grid-template-columns: 1fr;
  }
}
</style>