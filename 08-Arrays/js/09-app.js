const carrito = [
    {nombre: "monitor de 25 pulgadas", precio: 400},
    {nombre: "televisión", precio: 500},
    {nombre: "celular", precio: 600},
    {nombre: "tablet", precio: 200},
    {nombre: "monitor de 15 pulgadas", precio: 100}
]

carrito.forEach( function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio}`)
}) 

let animales = ["gato", "perro", "loro"];

animales.forEach(function(animal) {
  console.log(animal);
});
// Resultado:
// gato
// perro
// loro
