const router = require('express').Router()
const users = require('./users')
const test = require('./test')

router.use('/users', users)
router.use('/test', test)

router.get('/', function (req, res) {
  res.status(200).json({ message: 'Conexión exitosa a API' })
})


module.exports = router