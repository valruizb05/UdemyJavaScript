const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        peso: "1kg",
        medida: "1m"
    }
}

//acceder al objeto
console.log(producto.informacion.medida);