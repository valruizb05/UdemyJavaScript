const carrito = [];
 
const producto = {
    nombre: "leche",
    precio: 40
}

const producto2 = {
    nombre: "huevo",
    precio: 45
}

const producto3 = {
    nombre: "galletas",
    precio: 30
}

let resultado;

resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];

console.table(resultado);

//eliminar ultimo elemento de un arreglo
resultado.pop();
console.table(resultado);

let frutas = ["manzana", "banana", "naranja"];
let ultima = frutas.pop();

console.log(ultima); // "naranja"
console.log(frutas); // ["manzana", "banana"]
