const producto = "Monitor de 20 pulgadas ";
const precio = "30 USD";

console.log(producto.concat(precio));
console.log(producto.concat("En descuento"));
console.log("El producto " + producto + "con un precio de: " +precio);
console.log("El producto ", producto , "con un precio de: " ,precio);
console.log(`El producto ${producto}tiene un precio de $ ${precio}`);

let frutas1 = ["manzana", "pera"];
let frutas2 = ["plátano", "sandía"];

let todasLasFrutas = frutas1.concat(frutas2);
console.log(todasLasFrutas); 
// Resultado: ["manzana", "pera", "plátano", "sandía"]
