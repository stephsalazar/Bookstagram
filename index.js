const express = require("express"); // Facilita crear el servidor y realizar llamadas HTTP.
const bodyParser = require('body-parser'); // Extrae los datos del body y los convierte en json
const app = express(); // Inicializar express

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Cuando el cliente haga una petición, indicará la cabecera Content-Type: application/json

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});