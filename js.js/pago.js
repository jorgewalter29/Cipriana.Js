const formulario = document.getElementById('formularioPago');

formulario.addEventListener('submit', async function (e) {
    e.preventDefault(); // Evita el envío del formulario

    const nombreApellido = document.getElementById('nombre_apellido').value;
    const numeroTarjeta = document.getElementById('numero_tarjeta').value;
    const fechaExpiracion = document.getElementById('fecha_expiracion').value;
    const cvv = document.getElementById('cvv').value;
    const monto = document.getElementById('monto').value;
    const moneda = document.getElementById('moneda').value;

    // Crea un objeto de pago con los datos del formulario
    const pago = {
        nombreApellido: nombreApellido,
        numeroTarjeta: numeroTarjeta,
        fechaExpiracion: fechaExpiracion,
        cvv: cvv,
        monto: monto,
        moneda: moneda
    };

    // Muestra una alerta SweetAlert antes de procesar el pago
    Swal.fire({
        title: '¿Confirmar pago?',
        text: 'Esta acción realizará el pago. ¿Deseas continuar?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Realizar Pago',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            realizarPago(pago);
        }
    });
});

async function realizarPago(pago) {
    try {
        // Realiza el proceso de pago aquí (puedes enviar la solicitud a tu URL de Mock API o implementar la lógica de pago)

        // Ejemplo de solicitud a la URL de Mock API
        const response = await fetch('https://6491fe3f2f2c7ee6c2c94480.mockapi.io/contacto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pago)
        });

        if (response.ok) {
            const data = await response.json();
            Swal.fire('Pago exitoso', 'El pago se ha procesado correctamente.', 'success').then(() => {
                // Redirecciona al usuario a la página de productos después del pago exitoso
                window.location.href = '../pages/Productos.html';
            });
            console.log('Pago procesado:', data);
            // Aquí puedes realizar cualquier acción adicional después del procesamiento del pago exitoso
        } else {
            Swal.fire('Error', 'Hubo un problema al procesar el pago.', 'error');
            console.log('Error al procesar el pago');
        }
    } catch (error) {
        Swal.fire('Error', 'Hubo un problema al procesar el pago.', 'error');
        console.log('Error de conexión:', error);
    }
}