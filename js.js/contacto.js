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




