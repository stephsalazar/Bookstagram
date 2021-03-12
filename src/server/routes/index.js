const router = require('express').Router();
const users = require('./users');

router.use('/users', users);

router.get('/', function (req, res) {
  res.status(200).json({ message: 'Conexión exitosa a API' });
});


module.exports = router