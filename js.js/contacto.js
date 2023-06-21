const nombreInput = document.querySelector('input[name="Nombre"]');
const correoInput = document.querySelector('input[name="Correo"]');
const telefonoInput = document.querySelector('input[name="Telefono"]');
const mensajeTextarea = document.querySelector('textarea[name="Mensaje"]');
const enviarButton = document.getElementById('boton');

enviarButton.addEventListener('click', enviarFormulario);

function enviarFormulario(event) {
    event.preventDefault();

    const nombre = nombreInput.value;
    const correo = correoInput.value;
    const telefono = telefonoInput.value;
    const mensaje = mensajeTextarea.value;

    localStorage.setItem('nombre', nombre);
    localStorage.setItem('correo', correo);
    localStorage.setItem('telefono', telefono);
    localStorage.setItem('mensaje', mensaje);

    nombreInput.value = '';
    correoInput.value = '';
    telefonoInput.value = '';
    mensajeTextarea.value = '';

    alert('Formulario enviado con éxito');
}

const nombreGuardado = localStorage.getItem('nombre');
console.log(nombreGuardado); // Mostrará el nombre guardado en el Local Storage



const formularioNewsletter = document.getElementById('Newsletter');

formularioNewsletter.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir envío del formulario por defecto

    const emailInput = document.getElementById('email_newf');
    const categoriaInputs = document.querySelectorAll('input[name="categoria[]"]:checked');

    const email = emailInput.value;
    const categorias = Array.from(categoriaInputs).map(input => input.value);

    // Guardar los datos en el Local Storage
    localStorage.setItem('email', email);
    localStorage.setItem('categorias', JSON.stringify(categorias));

    emailInput.value = '';
    categoriaInputs.forEach(input => input.checked = false);

    alert('Formulario de Newsletter enviado con éxito');
});





function procesarCompra() {
    let carritoItems = document.getElementsByClassName('carrito-item');

    // Crear un array para almacenar los detalles de cada item en el carrito
    let itemsCompra = [];

    for (let i = 0; i < carritoItems.length; i++) {
        let item = carritoItems[i];
        let titulo = item.getElementsByClassName('carrito-item-titulo')[0].innerText;
        let precio = item.getElementsByClassName('carrito-item-precio')[0].innerText;
        let cantidad = item.getElementsByClassName('carrito-item-cantidad')[0].value;

        // Agregar los detalles del item al array de itemsCompra
        itemsCompra.push({
            titulo: titulo,
            precio: precio,
            cantidad: cantidad
        });
    }

    // Crear el objeto con los detalles de la compra
    let compra = {
        items: itemsCompra
    };

    // Realizar la solicitud POST a la API de Mercado Pago
    fetch('https://api.mercadopago.com/v1/compras', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer tu_token_de_acceso'
        },
        body: JSON.stringify(compra)
    })
        .then(response => {
            if (response.ok) {
                // La compra se procesó correctamente
                Swal.fire('¡Compra realizada con éxito!');
                // Aquí puedes realizar acciones adicionales, como vaciar el carrito
            } else {
                // Hubo un error al procesar la compra
                Swal.fire('Error al procesar la compra');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire('Error al procesar la compra');
        });
}
