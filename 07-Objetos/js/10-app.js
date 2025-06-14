"use strict"

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: "1kg",
    medidas:"2mts"
}

console.log(producto)
console.log(medidas)

const resultados = Object.assign(producto, medidas);
console.log(resultados)

//... copiar 
const resultados2 = {...producto, ...medidas}
console.log(resultados2)