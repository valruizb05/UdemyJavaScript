//const producto = "Monitor 20 pulgadas";

//!Remplazar
console.log(producto);
console.log(producto.replace("pulgadas", "''"));
console.log(producto.replace("Monitor", "Monitor Curvo"));

//!Cortar el 1er número debe ser mayor al 2do
console.log(producto.slice(0, 10));
console.log(producto.substring(2, 1)); 

console.log(producto.slice(8)); 
// → "20 pulgadas" (desde la posición 8 hasta el final)

console.log(producto.slice(-8)); 
// → "pulgadas" (corte desde el final)
//?substring es mas inteligente si le pasas el 1er numero mayor al 2do
//?substring asume que te equivocaste y lo invierte



const usuario = "Valeria";

console.log(usuario.charAt(0)); // → "V"
console.log(usuario.charAt(3));  // → "e"
