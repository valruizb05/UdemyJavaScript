const producto = "Monitor de 20 pulgadas";

//?repeat te va a permitir repetir una cadena de texto
const texto = " en promoción".repeat(3);

console.log(texto);
console.log(`${producto} ${texto}!!!!`);

//?split dividir un string
const actividad = "Estoy aprendiendo JavaScript moderno";
console.log(actividad.split(" "));

const ingredientes = "huevo, harina, leche";
console.log(ingredientes.split(","));

let nombres = "Juan,Valeria,Pedro";
let resultado = nombres.split(",");
// Resultado: ["Juan", "Valeria", "Pedro"]
