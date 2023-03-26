"use strict";

// Declaración de constantes y variables
const colorA = document.getElementById("color-a")
const colorB = document.getElementById("color-b")
const outputCode = document.getElementById("code")
let currentDirection = 'to bottom'

// Función para establecer la dirección del gradiente
function setDirection(v, button) {
  const directionButtons = document.querySelectorAll(".buttons button")
  for (let i of directionButtons) {
    i.classList.remove("active")
  }
  button.classList.add("active")
  currentDirection = v
  generateCode()
}

// Función para generar el código del gradiente y aplicarlo al body
function generateCode() {
  outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colorA.value}, ${colorB.value})`
  document.querySelector("body").style.backgroundImage = `linear-gradient(${currentDirection}, ${colorA.value}, ${colorB.value})`
}

// Función para copiar el código del gradiente generado al portapapeles
function copyText() {
  outputCode.select();
  document.execCommand('copy')
  alert("Gradient Copied");
}

// Llamada inicial a la función generateCode()
generateCode()