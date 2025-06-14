const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
       medidas: {
        peso: "1kg",
        medida:"2mts"
       },
       fabricacion: {
        pais: "china"
       }
    }
}

const {informacion: {fabricacion: {pais} } } = producto;
console.log(pais);
console.log(producto);

