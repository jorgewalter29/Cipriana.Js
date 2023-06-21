const express = require("express");
const bodyParser = require("body-parser");
const repository = require("repository");
const mercadopago = require("mercadopago");
const app = express();
const port = process.env.PORT || 3000;


    mercadopago.configure({
        access_token: "TEST-8341474600204226-062014-1192ebf066de14002b761df36a2e1a81-142078513"
    });


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get("/api/products", async (req, res) => {
    res.send(await repository.read());
});

app.post("api/pay", async (reg, res) => {
    const ids = req.body;
    const porductsCopy = await repository.read();



    let preference = {
        items: [],
        back_urls: {
            success: 'https://localhost:3000/feedback',
            failure: 'https://localhost:3000/feedback',
            pending: 'https://localhost:3000/feedback',
        },
        auto_return: 'approved',
    };

    let error = false;
    ids.forEach((id) => {
        const product = porductsCopy.find ((p) => p.id === id);
        if (product.stock > 0) {
            product.stock--;
            preference.items.push({
                title: product.name,
                unit_price: product.price,
                quantity: 1,
            });

        } else {
            error = true
        }
    });

    if (error) {
        res.send("Sin stock").statusCode(400);
    }
    else {
        const response = await mercadopago.preferences.create(preference);
        const preferenceId = response.body.id;
        await repository.write(porductsCopy);
        res.send(preferenceId);
    }
});

app.get('/feedback', function (request, response) {
    response.json ({
        Payment: request.query.payment_id,
        Status: request.query.status,
        MerchantOrder: request.query
    })
})

app.use("/", express.static("fe"));

app.listen(port, () => {
    console.log(`Example app listening at http:localhost:${port}`);
});





mercadopago.preferences
    .create(preference)
    .then(function (response) {
        const preferenceId = response.body.id;

        // Aquí puedes utilizar el valor de preferenceId para realizar la redirección o generar el botón de pago
        console.log("ID de preferencia: " + preferenceId);
    })
    .catch(function (error) {
        console.log(error);
    });
