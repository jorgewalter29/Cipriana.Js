
let piedrasAlVapor = 1500;
let aceiteCorporal = 800;
let cremaDeEucalipto = 1100;
let carrito = [];
let masajeCorporalMasJacuzzi = 5500;
let masajeCoporalMasBanioDeLodo = 8000;
let masajeCoporalMasAguasTermales = 10000;

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

while (opcionMenu !== 6) {
  opcionMenu = parseInt(prompt("Bienvenido a Spa Cipriana en que podemos Ayudarte? \n 1- Productos \n 2- Promociones \n 3- Vauchers \n 4- Turnos \n 5- Contactanos \n 6- ESC para salir"));

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
  }

}




/*let nombre = prompt("Cual es tu nombre?");

if (nombre != "") {
  console.log("Bienvenido " + nombre);
} else {
  console.log("No ingresaste tu nombre");
  nombre = prompt("Cual es tu nombre?");
}

let opcionMenu = 0;

let piedrasAlVapor = 1500;

let aceiteCorporal = 800;

let cremaDeEucalipto = 1100;

let cremaFacial = 500;

let ceraDepilatoria = 1450;

let carrito = [];

let masajeCorporalMasJacuzzi = 5500;

let masajeCoporalMasBanioDeLodo = 8000;

let masajeCoporalMasAguasTermales = 10000;

let productos = true;
let promociones = true;


function carritoCompra() {
  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    total += carrito[i].precio;
  }
  console.log(`El total de la compra de ${nombre} es: $${total}`);
}

function comprarFinalizarProductos() {
  opcionMenu = prompt("Muy bien! ¿qué deseas hacer? \n 1- Seguir comprando \n 2- Menu Principal \n 6- Finalizar");

  while (opcionMenu != 6) {
    if (opcionMenu == 1) {
      productos = parseInt(prompt("1- Piedras al vapor: $1500 \n 2- Aceite corporal: $800 \n 3- Crema de eucalipto: $1100 \n 0- Volver al menu"));

      switch (productos) {
        case 1:
          let cantidadPiedras = parseInt(prompt("¿Cuántas piedras al vapor quieres?"));
          carrito.push({ nombre: "Piedras al vapor", cantidad: cantidadPiedras, precio: piedrasAlVapor * cantidadPiedras });
          console.log("Has agregado " + cantidadPiedras + " piedras al vapor a tu carrito.");
          break;

        case 2:
          let cantidadAceite = parseInt(prompt("¿Cuánto aceite corporal quieres?"));
          carrito.push({ nombre: "Aceite corporal", cantidad: cantidadAceite, precio: aceiteCorporal * cantidadAceite });
          console.log("Has agregado " + cantidadAceite + " aceite corporal a tu carrito.");
          break;

        case 3:
          let cantidadEucalipto = parseInt(prompt("¿Cuánta crema de eucalipto quieres?"));
          carrito.push({ nombre: "Crema de eucalipto", cantidad: cantidadEucalipto, precio: cremaDeEucalipto * cantidadEucalipto });
          console.log("Has agregado " + cantidadEucalipto + " crema de eucalipto a tu carrito.");
          break;

        case 0:
          break;

        default:
          alert("Opción inválida. Por favor ingrese una opción válida.");
          break;
      }

    } else if (opcionMenu == 2) {
      menuPrincipal();
    } else {
      opcionMenu = parseInt(prompt("Opción inválida. Por favor ingrese una opción válida."));
    }
  }

  console.log("Este es tu carrito actualizado: ", carrito);
  carritoCompra();
  prompt("¡Muchas gracias por tu compra!!");
}


function comprarFinalizarPromociones() {
  opcionMenu = parseInt(prompt("Muy bien! ¿qué deseas hacer? \n 1- Seguir comprando \n 2- Menu Principal \n 6- Finalizar"));

  while (opcionMenu != 6) {
    if (opcionMenu == 1) {
      promociones = parseInt(prompt("1- masaje corpoal + jacuzzi: $5500 \n 2- masaje corporal + banio de lodo: $8000 \n 3- masaje coporal + aguas termales: $10000 \n 0- volver al menu"));

      switch (promociones) {
        case 1:
          let cantidadJacuzzi = parseInt(prompt("¿Cuántas personas son?"));
          carrito.push({ nombre: "Masaje corpoal + jacuzzi", cantidad: cantidadJacuzzi, precio: masajeCorporalMasJacuzzi * cantidadJacuzzi });
          carritoCompra();
          break;

        case 2:
          let cantidadLodo = parseInt(prompt("¿Cuántas personas son?"));
          carrito.push({ nombre: "Masaje coporal + banio de lodo", cantidad: cantidadLodo, precio: masajeCoporalMasBanioDeLodo * cantidadLodo });
          carritoCompra();
          break;

        case 3:
          let cantidadAguas = parseInt(prompt("¿Cuántas personas son?"));
          carrito.push({ nombre: "Masaje coporal + aguas termales", cantidad: cantidadAguas, precio: masajeCoporalMasAguasTermales * cantidadAguas });
          carritoCompra();
          break;

        default:
          alert("Opción inválida. Por favor ingrese una opción válida.");
          break;

      }
    }
    else {
      opcionMenu = parseInt(prompt("Bienvenido a Spa Cipriana en que podemos Ayudarte? \n 1- Productos \n 2- Promociones \n 3- Vauchers \n 4- Turnos \n 5- Contactanos \n 6- ESC para salir"));
    }
    promociones = parseInt(prompt("1- masaje corpoal + jacuzzi: $5500 \n 2- masaje corporal + banio de lodo: $8000 \n 3- masaje coporal + aguas termales: $10000 \n 0- volver al menu"));
  }
  console.log("Este es tu carrito actualizado: ", carrito);
  carritoCompra();
  prompt("¡Muchas gracias por tu compra!!");
}


// Este son los Poductos



while (opcionMenu != 6) {
        opcion = parseInt(prompt("Bienvenido a Spa Cipriana en que podemos Ayudarte? \n 1- Productos \n 2- Promociones \n 3- Vauchers \n 4- Turnos \n 5- Contactanos \n 6- ESC para salir"));

        switch (opcion) {
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

              case 6:
                break;

              default:
                alert("Opción inválida. Por favor ingrese una opción válida.");
                break;
            }

        }
      }

// Este son las Pomociones

*/

/*

while (opcion != 6) {
  switch (opcion) {
    case 1:
      let promociones = parseInt(prompt("1- masaje corpoal + jacuzzi: $5500 \n 2- masaje corporal + banio de lodo: $8000 \n 3- masaje coporal + aguas termales: $10000 \n 0- volver al menu"));

      switch (promociones) {

        case 1:
          let cantidadJacuzzi = parseInt(prompt("¿Cuántas personas son?"));
          carrito.push({ nombre: "Masaje corpoal + jacuzzi", cantidad: cantidadJacuzzi, precio: masajeCorporalMasJacuzzi * cantidadJacuzzi });
          carritoCompra();
          comprarFinalizarPromociones();
          break;

        case 2:
          let cantidadLodo = parseInt(prompt("¿Cuántas personas son?"));
          carrito.push({ nombre: "Masaje coporal + banio de lodo", cantidad: cantidadLodo, precio: masajeCoporalMasBanioDeLodo * cantidadLodo });
          carritoCompra();
          comprarFinalizarPromociones();
          break;

        case 3:
          let cantidadAguas = parseInt(prompt("¿Cuántas personas son?"));
          carrito.push({ nombre: "Masaje coporal + aguas termales", cantidad: cantidadAguas, precio: masajeCoporalMasAguasTermales * cantidadAguas });
          carritoCompra();
          comprarFinalizarPromociones();
          break;

        default:
          alert("Opción inválida. Por favor ingrese una opción válida.");
          break;
      }
      promociones = parseInt(prompt("1- masaje corpoal + jacuzzi: $5500 \n 2- masaje corporal + banio de lodo: $8000 \n 3- masaje coporal + aguas termales: $10000 \n 0- volver al menu"));
  }
}





case 2:

      let promociones = parseInt(prompt("1- masaje corpoal + jacuzzi: $5500 \n 2- masaje corporal + banio de lodo: $8000 \n 3- masaje coporal + aguas termales: $10000 \n 6- volver al menu"));

      switch (promociones) {

        case 1:
          let cantidadJacuzzi = parseInt(prompt("¿Cuántas personas son?"));
          carrito.push({ nombre: "Masaje corpoal + jacuzzi", cantidad: cantidadJacuzzi, precio: masajeCorporalMasJacuzzi * cantidadJacuzzi });
          carritoCompra();
          comprarFinalizarPromociones();
          break;

        case 2:
          let cantidadLodo = parseInt(prompt("¿Cuántas personas son?"));
          carrito.push({ nombre: "Masaje coporal + banio de lodo", cantidad: cantidadLodo, precio: masajeCoporalMasBanioDeLodo * cantidadLodo });
          carritoCompra();
          comprarFinalizarPromociones();
          break;

        case 3:
          let cantidadAguas = parseInt(prompt("¿Cuántas personas son?"));
          carrito.push({ nombre: "Masaje coporal + aguas termales", cantidad: cantidadAguas, precio: masajeCoporalMasAguasTermales * cantidadAguas });
          carritoCompra();
          comprarFinalizarPromociones();
          break;

        default:
          alert("Opción inválida. Por favor ingrese una opción válida.");
          break;
      }




let masajeCorporalMasJacuzzi = 5500;

  let masajeCoporalMasBanioDeLodo = 8000;

  let masajeCoporalMasAguasTermales = 10000;

promociones = parseInt(prompt("1- masaje corpoal + jacuzzi: $5500 \n 2- masaje corporal + banio de lodo: $8000 \n 3- masaje coporal + aguas termales: $10000 \n 0- volver al menu"));
  switch (promociones) {
    case 1:
          let cantidadJacuzzi = parseInt(prompt("¿Cuántas personas son?"));
          carrito.push({ nombre: "Masaje corpoal + jacuzzi", cantidad: cantidadJacuzzi, precio: masajeCorporalMasJacuzzi * cantidadJacuzzi });
          carritoCompra();
          comprarFinalizar();
          break;

        case 2:
          let cantidadLodo = parseInt(prompt("¿Cuántas personas son?"));
          carrito.push({ nombre: "Masaje coporal + banio de lodo", cantidad: cantidadLodo, precio: masajeCoporalMasBanioDeLodo * cantidadLodo });
          carritoCompra();
          comprarFinalizar();
          break;

        case 3:
          let cantidadAguas = parseInt(prompt("¿Cuántas personas son?"));
          carrito.push({ nombre: "Masaje coporal + aguas termales", cantidad: cantidadAguas, precio: masajeCoporalMasAguasTermales * cantidadAguas });
          carritoCompra();
          comprarFinalizar();
          break;
*/




/*
while (opcion != 6) {
  opcion = parseInt(prompt("Bienvenido a Spa Cipriana en que podemos Ayudarte? \n 1- Productos \n 2- Promociones \n 3- Vauchers \n 4- Turnos \n 5- Contactanos \n 6- ESC para salir"));

  switch (opcion) {
    case 1:

      let promociones = parseInt(prompt("1- masaje corpoal + jacuzzi: $5500 \n 2- masaje corporal + banio de lodo: $8000 \n 3- masaje coporal + aguas termales: $10000 \n 0- volver al menu"));

      switch (promociones) {

        case 1:
          let cantidadJacuzzi = parseInt(prompt("¿Cuántas personas son?"));
          carrito.push({ nombre: "Masaje corpoal + jacuzzi", cantidad: cantidadJacuzzi, precio: masajeCorporalMasJacuzzi * cantidadJacuzzi });
          carritoCompra();
          comprarFinalizar();
          break;

        case 2:
          let cantidadLodo = parseInt(prompt("¿Cuántas personas son?"));
          carrito.push({ nombre: "Masaje coporal + banio de lodo", cantidad: cantidadLodo, precio: masajeCoporalMasBanioDeLodo * cantidadLodo });
          carritoCompra();
          comprarFinalizar();
          break;

        case 3:
          let cantidadAguas = parseInt(prompt("¿Cuántas personas son?"));
          carrito.push({ nombre: "Masaje coporal + aguas termales", cantidad: cantidadAguas, precio: masajeCoporalMasAguasTermales * cantidadAguas });
          carritoCompra();
          comprarFinalizar();
          break;

        case 0:
          break;
        default:
          alert("Opción inválida. Por favor ingrese una opción válida.");
          break;
      }
  }
}
*/

/*
break;
case 2:
console.log("Promociones:");
console.log("1- descontracturante + masaje corporal");
console.log("2- baño de lodo + jacuzzi");
console.log("3- masaje relax + aguas termales");
console.log("4-


/*
let nombre = prompt("Cual es tu nombre?");
if (nombre != "") {
console.log("Bienvenido " + nombre);
} else {
console.log("No ingresaste tu nombre");
nombre = prompt("Cual es tu nombre?");
}



let opcion = 0;
let piedrasAlVapor = 1500;
let aceiteCorporal = 800;
let cremaDeEucalipto = 1100;
let cremaFacial = 500
let ceraDepilatoria = 1450;




while (opcion != 6) {
opcion = parseInt(prompt("Bienvenido a Spa Cipriana en que podemos Ayudarte? \n 1- Productos \n 2- Promociones \n 3- Vauchers \n 4- Turnos \n 5- Contactanos \n 6- ESC para salir"));

switch (opcion) {
case 1:
alert('que producto te interesa? ' + nombre);
Poductos = Number(prompt("1- piedras al vapor \n 2- aceite corporal \n 3- crema de eucalipto \n 4- crema facial  \n  5- cera depilatoria \n 0- volver al menu"))
if (opcion == 1) {
parseInt (prompt("cuantas piedras al vapor quieres?"))
} else {
alert ("no tenemops ese producto")
}
opcion = prompt ("Muy bien! que deceas hacer? \n 1- Seguir comprando \n 2- finalizar")
console.log("2- aceite corporal");
console.log("3- crema de eucalipto");
console.log("4- crema facial");
console.log("5- cera depilatoria");
console.log("0- volver al menu");
break;
case 2:
console.log("Promociones:");
console.log("1- descontracturante + masaje corporal");
console.log("2- baño de lodo + jacuzzi");
console.log("3- masaje relax + aguas termales");
console.log("4- volver al menu");
break;
case 3:
console.log("Vauchers:");
console.log("1- especial dia de la madre");
console.log("2- especial relax pareja");
console.log("3- feliz cumpleanios");
console.log("4- volver al menu anterior");
break;
case 4:
console.log("Turnos:");
console.log("1- solicitar turno");
console.log("2- cancelar turno");
console.log("3- volver al menu anterior");
break;
case 5:
console.log("Contactanos:");
console.log("1- dejanos tu consulta");
console.log("2- dejanos tu reclamo");
console.log("3- volver al menu anterior");
break;
case 6:
console.log("Gracias por visitar Spa Cipriana.");
break;
default:
console.log("Opción inválida. Por favor ingrese una opción válida.");
break;
}
}

*/

/*0- volver al menu
let opcion = true;

while (opcion) {
  let Productos = parseInt(prompt("Bienvenido a Spa Cipriana \n 1- Productos \n 2- Promociones \n 3- Vauchers \n 4- Turnos \n 5- Contactanos \n 6- Salir "));

  switch (Productos) {
    case 1:
      console.log("PRODUCTOS");
      console.log("1- Piedras al vapor");
      console.log("2- Aceite corporal");
      console.log("3- Crema de eucalipto");
      console.log("4- Crema facial");
      console.log("5- Cera depilatoria");
      console.log("6- Volver al menú principal");
      break;

    case 2:
      console.log("PROMOCIONES");
      console.log("1- Descontracturante + Masaje corporal");
      console.log("2- Baño de lodo + Jacuzzi");
      console.log("3- Masaje relax + Aguas termales");
      console.log("4- Volver al menú principal");
      break;

    case 3:
      console.log("VAUCHERS");
      console.log("1- Especial Día de la Madre");
      console.log("2- Especial Relax Pareja");
      console.log("3- Feliz Cumpleaños");
      console.log("4- Volver al menú principal");
      break;

    case 4:
      console.log("TURNOS");
      console.log("1- Solicitar turno");
      console.log("2- Cancelar turno");
      console.log("3- Volver al menú principal");
      break;

    case 5:
      console.log("CONTACTANOS");
      console.log("1- Dejanos tu consulta");
      console.log("2- Dejanos tu reclamo");
      console.log("3- Volver al menú principal");
      break;

    case 6:
      console.log("Adios! Gracias por visitarnos.");
      opcion = false;
      break;

    default:
      console.log("La opcion ingresada es incorrecta");
  }
}
*/


/*
let Productos = true;

while (Productos) {
  let opcion = parseInt(
    prompt(
      "Bienvenido a Spa Cipriana \n 1- Productos \n 2- Promociones \n 3- Vauchers \n 4- Turnos \n 5- Contactanos \n 6- ESC para salir "
    )
  );

  switch (opcion) {
    case 1:
      console.log(
        "1- piedras al vapor \n 2- aceite corporal \n 3- crema de eucalipto \n 4- crema facial \n 5- cera depilatoria \n 6- volver al menu"
      );
      break;
    case 2:
      console.log(
        "1- descontracturante +masaje corporal \n 2- baño de lodo + jacussi \n 3- masaje relax + aguas termales \n 4-volver al menu"
      );
      break;
    case 3:
      console.log(
        "1- especial dia de la madre \n 2- especial relax pareja \n 3- feliz cumpleanios \n 4- volver al menu anterior"
      );
      break;
    case 4:
      console.log(
        "1- solicitar turno \n 2- cancelar turno \n 3- volver al menu anterior"
      );
      break;
    case 5:
      console.log(
        "1- dejanos tu consulta \n 2- dejanos tu reclamo \n 3- volver al menu anterior"
      );
      break;
    case 6:
      console.log("Saliendo del programa...");
      Productos = false; // se sale del ciclo while
      break;
    default:
      console.log("La opcion ingresada es incorrecta");
  }
}
*/
/*
let nombre = prompt ("Cual es tu nombre?");

// si nombre es distinto a vacio
if (nombre != "") {
//pasa esto
    console.log ("Hola " + nombre);
}
else {
    console.log ("No ingresaste tu nombre");
    nombre = prompt ("Cual es tu nombre?");
}

function holaMundo () {
    alert ("hola mundo");
}

holaMundo ();  //llamada a la funcion
*/

//function returnNombre (nombre)

//function calculadora (a, b, operacion) {
//    switch (operacion) {
//      case 'suma':
//        return a + b;
//  }
//case 'resta':
//  return a - b;
//}
