const express = require("express"); // Facilita crear el servidor y realizar llamadas HTTP.
const bodyParser = require('body-parser'); // Extrae los datos del body y los convierte en json
const path = require("path");
const router = require('./routes');
require('./db')

const app = express(); // Inicializar express

const PORT = 3000;
const STATIC_ASSETS_PATH = path.resolve(`${__dirname}/../../static`);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Cuando el cliente haga una petición, indicará la cabecera Content-Type: application/json
app.use('/api', router)

// Sirve los recursos del frontend que han sido construidos por webpack
app.use("/static", express.static(STATIC_ASSETS_PATH));

app.get("/", (request, response) => {
	response.send(`
    <!DOCTYPE html>
    <html>
      <body>
        <div id="container"></div>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
	`);
});

// Manejo de error para ruta que no existe
// Va casi al final para no interferir con las rutas que si existen
app.use((req, res, next) => { 
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
