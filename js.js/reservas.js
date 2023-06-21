// Array de productos
const productos = [
    {
        id: 1,
        nombre: "HIDRATACION FACIAL",
        precio: "$9000",
        imagen: "/img/img1",
        reservaBtnId: "reservaBtn1",
        turnosListId: "turnosList1"
    },
    {
        id: 2,
        nombre: "HIGIENE PROFUNDA",
        precio: "$9000",
        imagen: "/img/img1",
        reservaBtnId: "reservaBtn2",
        turnosListId: "turnosList2"
    },
    {
        id: 3,
        nombre: "HIDRATACION FACIAL",
        precio: "$9000",
        imagen: "/img/img1",
        reservaBtnId: "reservaBtn8",
        turnosListId: "turnosList8"
    },
    {
        id: 4,
        nombre: "REVITALIZANTE",
        precio: "$9000",
        imagen: "/img/img1",
        reservaBtnId: "reservaBtn3",
        turnosListId: "turnosList3"
    },
    {
        id: 5,
        nombre: "ANTI-AGE",
        precio: "$9000",
        imagen: "/img/img1",
        reservaBtnId: "reservaBtn4",
        turnosListId: "turnosList4"
    },
    {
        id: 6,
        nombre: "EFECTO LIFTING",
        precio: "$9000",
        imagen: "/img/img1",
        reservaBtnId: "reservaBtn5",
        turnosListId: "turnosList5"
    },
    {
        id: 7,
        nombre: "REJUVENECEDOR",
        precio: "$9000",
        imagen: "/img/img1",
        reservaBtnId: "reservaBtn6",
        turnosListId: "turnosList6"
    },
    {
        id: 8,
        nombre: "PEELING ENZIMATICO",
        precio: "$9000",
        imagen: "/img/img1",
        reservaBtnId: "reservaBtn7",
        turnosListId: "turnosList7"
    }
    // Resto de los productos
];


// Iterar sobre el array de productos
productos.forEach(function (producto) {
    // Obtener el botón de reserva y la lista de turnos del producto actual
    var reservaBtn = document.getElementById(producto.reservaBtnId);
    var turnosList = document.getElementById(producto.turnosListId);

    // Agregar el evento de clic al botón de reserva
    reservaBtn.addEventListener("click", function () {
        mostrarFormularioReserva(producto, turnosList);
    });
});


// Obtener la referencia al botón de reservar turno
var reservaBtn = document.getElementById("reservaBtn");

// Agregar un controlador de eventos al botón
reservaBtn.addEventListener("click", mostrarFormularioReserva);

function mostrarFormularioReserva(producto, turnosList) {
    Swal.fire({
        title: 'Reservar turno',
        html:
            '<input id="fechaInput" class="swal2-input" placeholder="Fecha (Formato: DD-MM-AAAA)">' +
            '<input id="horaInput" class="swal2-input" placeholder="Hora (Formato: HH:MM)">',
        showCancelButton: true,
        confirmButtonText: 'Reservar',
        cancelButtonText: 'Cancelar',
        preConfirm: function () {
            return new Promise(function (resolve) {
                resolve([
                    document.getElementById('fechaInput').value,
                    document.getElementById('horaInput').value
                ]);
            });
        },
        allowOutsideClick: false
    }).then(function (result) {
        if (result.isConfirmed) {
            var fechaInput = result.value[0];
            var horaInput = result.value[1];

            // Validar que se hayan ingresado valores de fecha y hora
            if (fechaInput && horaInput) {
                // Crear un nuevo elemento de lista
                var nuevoTurno = document.createElement("li");

                // Establecer el texto del nuevo turno con la fecha y la hora seleccionadas
                nuevoTurno.textContent = "Turno reservado para el " + fechaInput + " a las " + horaInput;

                // Agregar el nuevo turno a la lista
                turnosList.appendChild(nuevoTurno);

                // Guardar la fecha y la hora en el localStorage
                localStorage.setItem("fechaReserva", fechaInput);
                localStorage.setItem("horaReserva", horaInput);

                // Mostrar una notificación de éxito con SweetAlert
                Swal.fire({
                    icon: 'success',
                    title: 'Turno reservado exitosamente',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                // Mostrar una notificación de error con SweetAlert
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Debe ingresar la fecha y la hora para reservar el turno'
                });
            }
        }
    });
}

