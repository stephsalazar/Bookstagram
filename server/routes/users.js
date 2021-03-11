// const mongoose = require('mongoose');
const users = require('express').Router()

let user = {
  name:'ANA',
  lastname: 'Steph'
};

let response = {
  error: false,
  code: 200,
  message: ''
};


// Usando users.route(), puedo agrupar distintos métodos que responden a una misma URL
users.route('/user')
  .get(function (req, res) {
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
        message: 'Respuesta del usuario, segundo intento',
        response: user
      };
    }

    res.send(response);
  })
  .post(function (req, res) {
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
  })
  .put(function (req, res) {
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
  })
  .delete(function (req, res) {
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

module.exports = users
