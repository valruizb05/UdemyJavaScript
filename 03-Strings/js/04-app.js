
const producto = "            Monitor de 20 pulgadas          ";

console.log(producto);
console.log(producto.length);

//!elimina los espacios en blanco ocupan espacio
console.log(producto.trimStart()); //inicio
console.log(producto.trimEnd()); //final
console.log(producto.trimStart().trimEnd()); //ambos
console.log(producto.trim()); //ambos
