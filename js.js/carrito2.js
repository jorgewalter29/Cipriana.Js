const urlProducts = "https://6491fe3f2f2c7ee6c2c94480.mockapi.io/products";
const productos = [];
let carrito = [];
let carritoVisible = false;

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

function ready() {
    let botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for (let i = 0; i < botonesEliminarItem.length; i++) {
        let button = botonesEliminarItem[i];
        button.addEventListener('click', eliminarItemCarrito);
    }

    let botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
    for (let i = 0; i < botonesSumarCantidad.length; i++) {
        let button = botonesSumarCantidad[i];
        button.addEventListener('click', sumarCantidad);
    }

    let botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
    for (let i = 0; i < botonesRestarCantidad.length; i++) {
        let button = botonesRestarCantidad[i];
        button.addEventListener('click', restarCantidad);
    }

    let botonesAgregarAlCarrito = document.getElementsByClassName('boton-item');
    for (let i = 0; i < botonesAgregarAlCarrito.length; i++) {
        let button = botonesAgregarAlCarrito[i];
        button.addEventListener('click', agregarAlCarritoClicked);
    }

    document.getElementsByClassName('btn-pagar')[0].addEventListener('click', pagarClicked)
}

function agregarAlCarritoClicked(event) {
    let button = event.target;
    let item = button.parentElement;
    let titulo = item.getElementsByClassName('titulo-item')[0].innerText;
    let precio = item.getElementsByClassName('precio-item')[0].innerText;
    let imagenSrc = item.getElementsByClassName('img-item')[0].src;
    agregarItemAlCarrito(titulo, precio, imagenSrc);
    hacerVisibleCarrito();
}

function hacerVisibleCarrito() {
    carritoVisible = true;
    let carrito = document.getElementsByClassName('carrito')[0];
    carrito.style.marginRight = '0';
    carrito.style.opacity = '1';
    let items = document.getElementsByClassName('contenedor-items')[0];
    items.style.width = '60%';
}

function agregarItemAlCarrito(titulo, precio, imagenSrc) {
    let item = document.createElement('div');
    item.classList.add('item');
    let itemsCarrito = document.getElementsByClassName('carrito-items')[0];
    let nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');

    for (let i = 0; i < nombresItemsCarrito.length; i++) {
        if (nombresItemsCarrito[i].innerText == titulo) {
            Swal.fire({
                text: 'El producto ya se encuentra en el carrito'});
            return;
        }
    }

    let itemCarritoContenido = `
        <div class="carrito-item">
            <img src="${imagenSrc}" width="80px" alt="">
            <div class="carrito-item-detalles">
                <span class="carrito-item-titulo">${titulo}</span>
                <div class="selector-cantidad">
                    <i class="fa-solid fa-minus restar-cantidad"></i>
                    <input type="text" value="1" class="carrito-item-cantidad" disabled>
                    <i class="fa-solid fa-plus sumar-cantidad"></i>
                </div>
                <span class="carrito-item-precio">${precio}</span>
            </div>
            <button class="btn-eliminar">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `;

    item.innerHTML = itemCarritoContenido;
    itemsCarrito.append(item);
    item.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemCarrito);
    let botonRestarCantidad = item.getElementsByClassName('restar-cantidad')[0];
    botonRestarCantidad.addEventListener('click', restarCantidad);
    let botonSumarCantidad = item.getElementsByClassName('sumar-cantidad')[0];
    botonSumarCantidad.addEventListener('click', sumarCantidad);
    actualizarTotalCarrito();

    // Agregar producto al carrito
    carrito.push({ titulo, precio, imagenSrc });
}

async function comprarClicked(event) {
    let carritoItems = document.getElementsByClassName('carrito-item');
    let productosAComprar = [];

    for (let i = 0; i < carritoItems.length; i++) {
        let item = carritoItems[i];
        let titulo = item.getElementsByClassName('carrito-item-titulo')[0].innerText;
        let precio = item.getElementsByClassName('carrito-item-precio')[0].innerText;
        let imagenSrc = item.getElementsByTagName('img')[0].src;

        let producto = {
            nombre: titulo,
            precio: precio,
        };
        productosAComprar.push(producto);
    }

    for (let i = 0; i < productosAComprar.length; i++) {
        await comprarProductoAsync(productosAComprar[i]);
    }
}

async function comprarProductoAsync(producto) {
    const resp = await fetch(urlProducts, {
        method: "POST",
        body: JSON.stringify(producto),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await resp.json();
    console.log(data);
}

document.getElementsByClassName('btn-pagar')[0].addEventListener('click', comprarClicked);


function pagarClicked() {
    
    Swal.fire({
        title: 'Compra exitosa',
        text: 'Gracias por tu compra',
        icon: 'success'
    }).then(() => {
        window.location.href = '../pages/pago.html';
    });

    carrito = [];
    vaciarCarrito();
    ocultarCarrito();
}




function vaciarCarrito() {
    let carritoItems = document.getElementsByClassName('carrito-items')[0];
    carritoItems.innerHTML = "";
    actualizarTotalCarrito();
}

function mostrarCompraExitosa() {
    Swal.fire({
        title: 'Compra Exitosa',
        text: 'Gracias por tu compra. ¡Disfruta de tus productos!',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
}

function ocultarCarrito() {
    let carritoItems = document.getElementsByClassName('carrito-items')[0];
    if (carritoItems.childElementCount == 0) {
        let carrito = document.getElementsByClassName('carrito')[0];
        carrito.style.marginRight = '-100%';
        carrito.style.opacity = '0';
        carritoVisible = false;
        let items = document.getElementsByClassName('contenedor-items')[0];
        items.style.width = '100%';
    }
}

function sumarCantidad(event) {
    let buttonClicked = event.target;
    let selector = buttonClicked.parentElement;
    let cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual++;
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
    actualizarTotalCarrito();
}

function restarCantidad(event) {
    let buttonClicked = event.target;
    let selector = buttonClicked.parentElement;
    let cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual--;
    if (cantidadActual >= 1) {
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
        actualizarTotalCarrito();
    }
}

function eliminarItemCarrito(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    actualizarTotalCarrito();
    ocultarCarrito();
}

function actualizarTotalCarrito() {
    let carritoContenedor = document.getElementsByClassName('carrito')[0];
    let carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    let total = 0;

    for (let i = 0; i < carritoItems.length; i++) {
        let item = carritoItems[i];
        let precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
        let precio = parseFloat(precioElemento.innerText.replace('$', '').replace('.', ''));
        let cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
        let cantidad = cantidadItem.value;
        total = total + (precio * cantidad);
    }

    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$' + total.toLocaleString("es") + ",00";
}
