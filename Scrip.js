
let piedrasAlVapor = 1500;
let aceiteCorporal = 800;
let cremaDeEucalipto = 1100;
let carrito = [];
let masajeCorporalMasJacuzzi = 5500;
let masajeCoporalMasBanioDeLodo = 8000;
let masajeCoporalMasAguasTermales = 10000;
let especialDiaDeLaMadre = 7500;
let especialSanValentin = 9000;
let especialFelizCumple = 560;






function carritoCompra() {
  let total = 0;
  console.log("Su compra actual es:");
  console.log("Producto - Cantidad - Precio");
  for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre + " - " + carrito[i].cantidad + " - $" + carrito[i].precio);
    total += carrito[i].precio;
  }
  console.log("TOTAL: $" + total);
}

function comprarFinalizarProductos() {
  let opcionCompra = parseInt(prompt("¿Desea seguir comprando?\n1- Si\n2- No"));

  if (opcionCompra === 2) {
    console.log("Gracias por su compra. Vuelva pronto!");
    opcionMenu = 6;
  }
}

let opcionMenu = 0;

while (opcionMenu !== 5) {
  opcionMenu = parseInt(prompt("Bienvenido a Spa Cipriana en que podemos Ayudarte? \n 1- Productos \n 2- Promociones \n 3- Vauchers \n 4- Contacto \n 5- ESC para salir"));

  switch (opcionMenu) {
    case 1:
      let productos = parseInt(prompt("1- piedras al vapor: $1500 \n 2- aceite corporal: $800 \n 3- crema de eucalipto: $1100  \n 0- volver al menu"));

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

        case 0:
          break;

        default:
          alert("Opción inválida. Por favor ingrese una opción válida.");
          break;
      }
      break;

    case 2:
      let promociones = parseInt(prompt("1- masaje corpoal + jacuzzi: $5500 \n 2- masaje corporal + banio de lodo: $8000 \n 3- masaje coporal + aguas termales: $10000 \n 0- volver al menu"));

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

        case 0:

        default:
          alert("Opción inválida. Por favor ingrese una opción válida.");
          break;
      }
      break;

    case 3:
      let vauchers = parseInt(prompt("1- especial dia de la madre: 7500 \n 2- especial san valentin: 9000 \n 3- feliz cumpleanios: 5600 \n 0- volver al menu"));

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
      let nombre = prompt ("ingresa tu nombre y apellido");
      console.log ("hola " + nombre + " ingresa tu correo");
      let email = prompt ("ingresa tu correo");
      console.log (email + " por ultimo dejanos tu mensaje");
      let mensaje = prompt ("escribe aqui tu mensaje");
      console.log ("este es tu mensaje\n" + mensaje );
      alert ("muchas gracias " + nombre + " por tu mensaje");
      console.log ("muchas gracias " + nombre + " por tu mensaje");
  }
}