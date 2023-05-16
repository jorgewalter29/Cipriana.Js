
let piedrasAlVapor = 1500;
let aceiteCorporal = 800;
let cremaDeEucalipto = 1100;
let cremaEsfoliante = 1250;
let esenciasAromaticas = 550;
let masajeCorporalMasJacuzzi = 5500;
let masajeCoporalMasBanioDeLodo = 8000;
let masajeCoporalMasAguasTermales = 10000;
let banioDeLodoMasAguasTermales = 12300;
let BanioDeLodoMasJacuzzi = 7800;
let aguaTermalesMasJacuzzi = 9500;
let especialDiaDeLaMadre = 7500;
let especialSanValentin = 9000;
let especialFelizCumple = 560;



let carrito = [];

class Producto {
    constructor(nombre, precio) {
        this.nombre = obj.nombre.ToUpperCase();
        this.cantidad = parseInt(obj.cantidad);
        this.precio = Number(obj.precio);
        this.vendido = false;
    }

    sumaIva = () => this.precio = this.ptrcio * 1.21


    total = () => this.precio * this.cantidad

    verProducto = () => {
        return `Nombre: ${this.nombre} Cantidad: ${this.cantidad} Precio: ${this.precio}`
    }

}

function carritoCompra() {
    let total = 0;
    let mensaje = "Su compra actual es:\nProducto - Cantidad - Precio\n";
    for (let i = 0; i < carrito.length; i++) {
        mensaje += carrito[i].nombre + " - " + carrito[i].cantidad + " - $" + carrito[i].precio + "\n";
        total += carrito[i].precio;
    }
    mensaje += "TOTAL: $" + total;
    console.log(mensaje);
    alert(mensaje);
}

function calcularTotalCarrito() {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio * carrito[i].cantidad;
    }
    return total;
}



function comprarFinalizarProductos() {
    let mensaje = "El contenido de tu carrito es:\n";
    for (let i = 0; i < carrito.length; i++) {
        mensaje += `\n${i + 1}. ${carrito[i].nombre} - Cantidad: ${carrito[i].cantidad} - Precio: $${carrito[i].precio}`;
    }

    mensaje += "\nTOTAL: $" + calcularTotalCarrito();

    let opcionCompra = parseInt(prompt(mensaje + "\n\nSeleccione una opción:\n1-Seguir comprando \n2- Eliminar producto \n3- Finalizar compra"));

    switch (opcionCompra) {
        case 1:
            console.log("Continuando con la compra...");
            break;

        case 2:
            let productoAEliminar = parseInt(prompt("Ingrese el número del producto que desea eliminar del carrito:"));

            if (productoAEliminar > 0 && productoAEliminar <= carrito.length) {
                let productoEliminado = carrito.splice(productoAEliminar - 1, 1)[0];
                alert(`Producto eliminado del carrito: ${productoEliminado.nombre}`);
            } else {
                alert("Ingrese un número de producto válido.");
            }
            comprarFinalizarProductos();
            break;


        case 3:
            alert("Gracias por su compra. Vuelva pronto!");
            console.log("Gracias por su compra. Vuelva pronto!");
            opcionMenu = 6;
            break;

        default:
            console.log("Ingrese una opción válida.");
            comprarFinalizarProductos();
            break;
    }
}

let opcionMenu = 0;

while (opcionMenu !== 5) {
    opcionMenu = parseInt(prompt("Bienvenido a Spa Cipriana en que podemos Ayudarte? \n 1- Productos \n 2- Promociones \n 3- Vauchers \n 4- Contacto \n 5- ESC para salir \n  Ingresa el numero de la opción deseada"));

    switch (opcionMenu) {
        case 1:
            let productos = parseInt(prompt("1- piedras al vapor: $1500 \n 2- aceite corporal: $800 \n 3- crema de eucalipto: $1100  \n  4- crema esfoliante $1250 \n 5- esencias aromaticas: $550 \n  0- volver al menu \n  Ingresa el numero de la opción deseada"));

            switch (productos) {

                case 1:
                    let cantidadPiedras = parseInt(prompt("¿Cuántas piedras al vapor quieres?"));
                    carrito.push({ nombre: "Piedras al vapor", cantidad: cantidadPiedras, precio: piedrasAlVapor * cantidadPiedras });
                    carritoCompra();

                    comprarFinalizarProductos();
                    break;

                case 2:
                    let cantidadAceite = parseInt(prompt("¿Cuánto aceite corporal quieres?"));
                    carrito.push({ nombre: "Aceite corporal", cantidad: cantidadAceite, precio: aceiteCorporal * cantidadAceite });
                    carritoCompra();
                    comprarFinalizarProductos();
                    break;

                case 3:
                    let cantidadEucalipto = parseInt(prompt("¿Cuánta crema de eucalipto quieres?"));
                    carrito.push({ nombre: "Crema de eucalipto", cantidad: cantidadEucalipto, precio: cremaDeEucalipto * cantidadEucalipto });
                    carritoCompra();
                    comprarFinalizarProductos();
                    break;

                case 4:
                    let cantidadEsfoliante = parseInt(prompt("¿Cuánta crema esfoliante quieres?"));
                    carrito.push({ nombre: "Crema Esfoliante", cantidad: cantidadEsfoliante, precio: cremaEsfoliante * cantidadEsfoliante });
                    carritoCompra();
                    comprarFinalizarProductos();
                    break;

                case 5:
                    let cantidadEsencias = parseInt(prompt("¿Cuánta esencias aromatias quieres?"));
                    carrito.push({ nombre: "Esencias Aromaticas", cantidad: cantidadEsencias, precio: esenciasAromaticas * cantidadEsencias });
                    carritoCompra();
                    comprarFinalizarProductos();
                    break;

                case 0:
                    break;

                default:
                    alert("Opción inválida. Por favor ingrese una opción válida.");
                    break;
            }
            break;

        case 2:
            let promociones = parseInt(prompt("1- masaje corpoal + jacuzzi: $5500 \n 2- masaje corporal + banio de lodo: $8000 \n 3- masaje coporal + aguas termales: $10000 \n 4- banio de lodo + jacuzzi: $7800 \n 5- banio de lodo + aguas termales: $12300 \n 6- aguas termales + jacuzzi: $9500 \n 0- volver al menu \n  Ingresa el numero de la opción deseada"));

            switch (promociones) {

                case 1:
                    let cantidadJacuzzi = parseInt(prompt("¿Cuántas personas son?"));
                    carrito.push({ nombre: "Masaje corpoal + jacuzzi", cantidad: cantidadJacuzzi, precio: masajeCorporalMasJacuzzi * cantidadJacuzzi });
                    carritoCompra();
                    comprarFinalizarProductos();
                    break;

                case 2:
                    let cantidadLodo = parseInt(prompt("¿Cuántas personas son?"));
                    carrito.push({ nombre: "Masaje coporal + banio de lodo", cantidad: cantidadLodo, precio: masajeCoporalMasBanioDeLodo * cantidadLodo });
                    carritoCompra();
                    comprarFinalizarProductos();
                    break;

                case 3:
                    let cantidadAguas = parseInt(prompt("¿Cuántas personas son?"));
                    carrito.push({ nombre: "Masaje coporal + aguas termales", cantidad: cantidadAguas, precio: masajeCoporalMasAguasTermales * cantidadAguas });
                    carritoCompra();
                    comprarFinalizarProductos();
                    break;

                case 4:
                    let cantidadBanioMasJacu = parseInt(prompt("¿Cuántas personas son?"));
                    carrito.push({ nombre: "Banio de lodo + Jacuzzi", cantidad: cantidadBanioMasJacu, precio: BanioDeLodoMasJacuzzi * cantidadBanioMasJacu });
                    carritoCompra();
                    comprarFinalizarProductos();
                    break;

                case 5:
                    let cantidadBanioMasAgua = parseInt(prompt("¿Cuántas personas son?"));
                    carrito.push({ nombre: "Banio de lodo + aguas termales", cantidad: cantidadBanioMasAgua, precio: banioDeLodoMasAguasTermales * cantidadBanioMasAgua });
                    carritoCompra();
                    comprarFinalizarProductos();
                    break;

                case 6:
                    let cantidadAguaMasJacu = parseInt(prompt("¿Cuántas personas son?"));
                    carrito.push({ nombre: "Aguas termales + Jacuzzi", cantidad: cantidadAguaMasJacu, precio: aguaTermalesMasJacuzzi * cantidadAguaMasJacu });
                    carritoCompra();
                    comprarFinalizarProductos();
                    break;

                case 0:

                default:
                    alert("Opción inválida. Por favor ingrese una opción válida.");
                    break;
            }
            break;

        case 3:
            let vauchers = parseInt(prompt("1- especial dia de la madre: 7500 \n 2- especial san valentin: 9000 \n 3- feliz cumpleanios: 5600 \n 0- volver al menu \n  Ingresa el numero de la opción deseada"));

            switch (vauchers) {
                //quede aca.. definir variables
                case 1:
                    let cantidadMadre = parseInt(prompt("Cuántos vauchers del dia de la Madre desea?"));
                    carrito.push({ nombre: "especial dia de la madre", cantidad: cantidadMadre, precio: especialDiaDeLaMadre * cantidadMadre });
                    carritoCompra();
                    comprarFinalizarProductos();
                    break;

                case 2:
                    let cantidadValentin = parseInt(prompt("Cuántos vauchers de San Valentin desea?"));
                    carrito.push({ nombre: "especial  san valentin", cantidad: cantidadValentin, precio: especialSanValentin * cantidadValentin });
                    carritoCompra();
                    comprarFinalizarProductos();
                    break;

                case 3:
                    let cantidadCumpleanios = parseInt(prompt("Cuántos vauchers de Feliz cumple desea?"));
                    carrito.push({ nombre: "especial  feliz cumple", cantidad: cantidadCumpleanios, precio: especialFelizCumple * cantidadCumpleanios });
                    carritoCompra();
                    comprarFinalizarProductos();
                    break;
            }
            break;


        case 4:
            let contacto = parseInt(prompt("1- dejanos tu mensaje \n 0- volver al menu"));
            let nombre = prompt("ingresa tu nombre y apellido");
            console.log("hola " + nombre + " ingresa tu correo");
            let email = prompt("ingresa tu correo");
            console.log(email + " por ultimo dejanos tu mensaje");
            let mensaje = prompt("escribe aqui tu mensaje");
            console.log("este es tu mensaje\n" + mensaje);
            alert("muchas gracias " + nombre + " por tu mensaje");
            console.log("muchas gracias " + nombre + " nos pondremos en contacto contigo ");
    }
}