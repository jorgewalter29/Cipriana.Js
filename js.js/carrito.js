const urlProducts = "https://6491fe3f2f2c7ee6c2c94480.mockapi.io/products";


function traerProductos() {
    fetch(urlProducts).then((res) => res.json()).then((data) => {
        console.log(data);
    });
}

traerProductos();

async function comprarProductoAsync(producto) {
    const resp = await fetch(urlProducts, {
        method: "POST",
        body: JSON.stringify(producto),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await resp.json();
    traerProductos();
    console.log(data);
}

// Array de productos
const productos = [
    {
        nombre: "ACEITE CORPORAL",
        precio: "$15000",
        descripcion: "prueba1"
    },
    {
        id: 2,
        nombre: "CREMA CORPORAL",
        precio: "$25000",
        descripcion: "prueba2"
    },
    // Resto de los productos
];


