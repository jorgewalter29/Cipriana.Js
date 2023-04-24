
function carritoCompra(){
    let total = 0;
for (let i = 0; i < carrito.length; i++) {
    total += carrito[i].precio;
}
console.log(`El total de la compra de ${nombre} es: $${total}`);
}

