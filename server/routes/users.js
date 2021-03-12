const users = require('express').Router()
const userController = require('../controllers/usersController');

// Usando users.route(), puedo agrupar distintos métodos que responden a una misma URL

users.route('/')
  .get(userController.findAllUsers)
  .post(userController.addUser);


users.route('/:id')
  .get(userController.findById)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = users
