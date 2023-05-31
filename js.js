let carritoVisible = false;

document.addEventListener('DOMContentLoaded', ready);

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

    document.getElementsByClassName('btn-pagar')[0].addEventListener('click', pagarClicked);

    // Leer los productos almacenados en el almacenamiento local o en una cookie
    let carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
    carritoGuardado.forEach((producto) => {
        agregarItemAlCarrito(producto.titulo, producto.precio, producto.imagenSrc);
    });

    // Actualiza el total del carrito
    actualizarTotalCarrito();
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
        let precio = parseFloat(precioElemento.innerText.replace('$', '').replace(',', '.'));
        let cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
        let cantidad = parseInt(cantidadItem.value);
        total = total + precio * cantidad;
    }

    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('carrito-precio-total')[0].innerText =
        '$' + total.toLocaleString('es') + ',00';
}

function ocultarCarrito() {
    let carritoItems = document.getElementsByClassName('carrito-items')[0];
    if (carritoItems.childElementCount === 0) {
        let carrito = document.getElementsByClassName('carrito')[0];
        carrito.style.marginRight = '-100px';
        carrito.style.opacity = '0';
        carritoVisible = false;
    }
}

function sumarCantidad(event) {
    let buttonClicked = event.target;
    let selector = buttonClicked.parentElement;
    let cantidadActual = parseInt(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
    cantidadActual++;
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
    actualizarTotalCarrito();
}

function restarCantidad(event) {
    let buttonClicked = event.target;
    let selector = buttonClicked.parentElement;
    let cantidadActual = parseInt(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
    cantidadActual--;

    if (cantidadActual >= 1) {
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
        actualizarTotalCarrito();
    } else {
        selector.parentElement.remove();
        actualizarTotalCarrito();
        ocultarCarrito();
    }
}

function agregarItemAlCarrito(titulo, precio, imagenSrc) {
    let item = document.createElement('div');
    item.classList.add('item');
    let itemsCarrito = document.getElementsByClassName('carrito-items')[0];

    let nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
    for (let i = 0; i < nombresItemsCarrito.length; i++) {
        if (nombresItemsCarrito[i].innerText === titulo) {
            let cantidadItem = nombresItemsCarrito[i].closest('.carrito-item').getElementsByClassName('carrito-item-cantidad')[0];
            let cantidad = parseInt(cantidadItem.value);
            cantidadItem.value = cantidad + 1;
            actualizarTotalCarrito();
            ocultarCarrito();
            mostrarCarrito();
            return;
        }
    }

    let itemCarritoContenido = `
        <div class="carrito-item">
          <img src="${imagenSrc}" alt="" width="80px">
          <div class="carrito-item-detalles">
            <span class="carrito-item-titulo">${titulo}</span>
            <div class="selector-cantidad">
              <i class="fa-solid fa-minus restar-cantidad"></i>
              <input type="text" value="1" class="carrito-item-cantidad" disabled>
              <i class="fa-solid fa-plus sumar-cantidad"></i>
            </div>
            <span class="carrito-item-precio">$${precio}</span>
          </div>
          <span class="btn-eliminar">
            <i class="fa-solid fa-trash"></i>
          </span>
        </div>
      `;

    item.innerHTML = itemCarritoContenido;
    itemsCarrito.appendChild(item);

    item.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemCarrito);

    let botonesSumarCantidad = item.getElementsByClassName('sumar-cantidad')[0];
    botonesSumarCantidad.addEventListener('click', sumarCantidad);

    let botonesRestarCantidad = item.getElementsByClassName('restar-cantidad')[0];
    botonesRestarCantidad.addEventListener('click', restarCantidad);
}

function agregarAlCarritoClicked(event) {
    let buttonClicked = event.target;
    let titulo = buttonClicked.dataset.productName;
    let precio = buttonClicked.dataset.productPrice;
    let imagenSrc = buttonClicked.dataset.productImage;

    let productosCarrito = document.getElementsByClassName('carrito-item-titulo');
    for (let i = 0; i < productosCarrito.length; i++) {
        if (productosCarrito[i].innerText === titulo) {
            return;
        }
    }

    let producto = {
        titulo: titulo,
        precio: precio,
        imagenSrc: imagenSrc
    };

    let carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
    carritoGuardado.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carritoGuardado));

    agregarItemAlCarrito(producto.titulo, producto.precio, producto.imagenSrc);
}

function pagarClicked() {
    let carritoItems = document.getElementsByClassName('carrito-item');
    let productos = [];

    for (let i = 0; i < carritoItems.length; i++) {
        let item = carritoItems[i];
        let titulo = item.getElementsByClassName('carrito-item-titulo')[0].innerText;
        let precio = item.getElementsByClassName('carrito-item-precio')[0].innerText;
        let cantidad = item.getElementsByClassName('carrito-item-cantidad')[0].value;
        let imagenSrc = item.getElementsByTagName('img')[0].src;

        let producto = {
            titulo: titulo,
            precio: precio,
            cantidad: cantidad,
            imagenSrc: imagenSrc
        };

        productos.push(producto);
    }

    // Aquí puedes hacer algo con los productos, por ejemplo, enviarlos a un servidor o procesar el pago

    // Limpiar el carrito y el almacenamiento local
    let carritoContenedor = document.getElementsByClassName('carrito')[0];
    carritoContenedor.innerHTML = '';
    localStorage.removeItem('carrito');

    // Actualizar el total del carrito
    actualizarTotalCarrito();

    // Ocultar el carrito
    ocultarCarrito();

    // Mostrar mensaje de pago exitoso
    alert('Pago realizado con éxito. Gracias por su compra!');
}

document.addEventListener('DOMContentLoaded', () => {
    let botonesAgregarAlCarrito = document.getElementsByClassName('boton-item');
    for (let i = 0; i < botonesAgregarAlCarrito.length; i++) {
        let button = botonesAgregarAlCarrito[i];
        button.addEventListener('click', agregarAlCarritoClicked);
    }

    document.getElementsByClassName('btn-pagar')[0].addEventListener('click', pagarClicked);

    let carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
    carritoGuardado.forEach((producto) => {
        agregarItemAlCarrito(producto.titulo, producto.precio, producto.imagenSrc);
    });

    actualizarTotalCarrito();
});

