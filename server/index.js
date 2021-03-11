const express = require("express"); // Facilita crear el servidor y realizar llamadas HTTP.
const bodyParser = require('body-parser'); // Extrae los datos del body y los convierte en json
const router = require('./routes')
require('./db')

const app = express(); // Inicializar express

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Cuando el cliente haga una petición, indicará la cabecera Content-Type: application/json
app.use('/api', router)

app.use(function(req, res, next) { // Manejo de error para ruta que no existe
  response = {
    error: true, 
    code: 404, 
    message: 'URL no encontrada'
  };
  
  res.status(404).send(response);
});


app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});

