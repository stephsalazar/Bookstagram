const express = require("express"); // Facilita crear el servidor y realizar llamadas HTTP.
const bodyParser = require('body-parser'); // Extrae los datos del body y los convierte en json
const app = express(); // Inicializar express

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Cuando el cliente haga una petición, indicará la cabecera Content-Type: application/json

let user = {
  name:'',
  lastname: ''
};

let response = {
  error: false,
  code: 200,
  message: ''
};

app.get('/', function(req, res) {
  response = {
    error: true,
    code: 200,
    message: 'Punto de inicio'
  };

  res.send(response);
});

app.get('/user', function (req, res) {
  response = {
    error: false,
    code: 200,
    message: ''
  };
  
  if(user.name === '' || user.lastname === '') {
    response = {
      error: true,
      code: 501,
      message: 'El usuario no ha sido creado'
    };
  } else {
    response = {
      error: false,
      code: 200,
      message: 'Respuesta del usuario',
      response: user
    };
  }

  res.send(response);
});

app.post('/user', function (req, res) {
  if(!req.body.name || !req.body.lastname) {
    response = {
      error: true,
      code: 502,
      message: 'El campo name y lastname son requeridos'
    };
  } else {
    if(user.name !== '' || user.lastname !== '') {
      response = {
        error: true,
        code: 503,
        message: 'El usuario ya fue creado previamente'
      };
    } else {
      user = {
        name: req.body.name,
        lastname: req.body.lastname
      };
      response = {
        error: false,
        code: 200,
        message: 'Usuario creado',
        response: user
      };
    }
  }
 
  res.send(response);
});

app.put('/user', function (req, res) {
  if(!req.body.name || !req.body.lastname) {
    response = {
      error: true,
      code: 502,
      message: 'El campo name y lastname son requeridos'
    };
  } else {
    if(user.name === '' || user.lastname === '') {
      response = {
        error: true,
        code: 501,
        message: 'El usuario no ha sido creado'
      };
    } else {
      user = {
        name: req.body.name,
        lastname: req.body.lastname
      };
      response = {
        error: false,
        code: 200,
        message: 'Usuario actualizado',
        response: user
      };
    }
  }

  res.send(response);
});

app.delete('/user', function (req, res) {
  if(user.name === '' || user.lastname === '') {
    response = {
      error: true,
      code: 501,
      message: 'El usuario no ha sido creado'
    };
  } else {
    response = {
      error: false,
      code: 200,
      message: 'Usuario eliminado'
    };
    user = { 
      name: '', 
      lastname: '' 
    };
  }

  res.send(response);
});

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