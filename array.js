let productosArr = []
let promocionesArr = []
let vauchersArr = []
let trueOFalse = true

let carrito = [];

let producto = {
    nombre: "Camiseta",
    precio: 20,
    cantidad: 1
};

carrito.push(producto);

// Agregar otro producto al carrito
let otroProducto = {
    nombre: "Pantalón",
    precio: 40,
    cantidad: 1
};

carrito.push(otroProducto);

// Actualizar la cantidad de un producto en el carrito
carrito[0].cantidad = 2;




class Producto {
    constructor(nombre, precio) {
        this.nombre = obj.nombre.ToUpperCase();
        this.precio = Number(obj.precio);
        this.cantidad = parseInt(obj.cantidad);
        this.vendido = false;
    }

    sumaIva = () => this.precio = this.ptrcio * 1.21


    total = () => this.precio * this.cantidad

    verProducto = () => {
        return `Nombre: ${this.nombre} Cantidad: ${this.cantidad} Precio: ${this.precio}`
    }

}

function initProgram() {
    let opcionMenu = parseInt(prompt("Bienvenido a Spa Cipriana en que podemos Ayudarte? \n 1- Productos \n 2- Promociones \n 3- Vauchers \n 4- Contacto \n 5- ESC para salir"));

    while (trueOFalse) {
        switch (opcionMenu) {
            case "1":
                piedrasAlVapor()
                break;

        }
    }
}
