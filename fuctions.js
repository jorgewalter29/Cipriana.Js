function verProducto(nombre, precio, imagen) {
    let card = document.querySelector('.card');
    let productPage = document.getElementById('product-page');
    let buyBtn = document.getElementById('buy-btn');

    // Ocultar la tarjeta
    card.style.display = 'none';

    // Mostrar la vista del producto
    productPage.style.display = 'block';

    // Establecer el nombre y precio del producto en la vista
    let productName = document.getElementById('product-name');
    let productPrice = document.getElementById('product-price');
    productName.textContent = nombre;
    productPrice.textContent = `$${precio}`;

    // Establecer la imagen del producto en la vista
    let productImage = document.getElementById('product-image');
    productImage.src = imagen;
}

// Agregar evento click al botón de compra
document.getElementById('buy-btn').addEventListener('click', function () {
    // Obtener el nombre y precio del producto seleccionado
    let productName = document.getElementById('product-name').textContent;
    let productPrice = parseInt(document.getElementById('product-price').textContent.replace('$', ''));

    // Agregar el producto al carrito
    let product = { nombre: productName, precio: productPrice };
    carrito.push(product);

    // Guardar el carrito en el localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Mostrar mensaje de confirmación
    alert('¡Producto Agregado Al Carrito!');

    // Cerrar la vista del producto después de la compra
    cerrarProducto();
});


function cerrarProducto() {
    let card = document.querySelector('.card');
    let productPage = document.getElementById('product-page');

    // Mostrar la tarjeta
    card.style.display = 'block';

    // Ocultar la vista del producto
    productPage.style.display = 'none';
}

// Agregar evento click a cada producto en la tarjeta
const productosTarjeta = document.getElementsByClassName('card__link');
Array.from(productosTarjeta).forEach((enlace, index) => {
    enlace.addEventListener('click', function () {
        verProducto(
            productos[index].nombre,
            productos[index].precio,
            productos[index].imagen
        );
    });
});