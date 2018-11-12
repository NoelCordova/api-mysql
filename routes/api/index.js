const router = require('express').Router();

// Declaración de las rutas de la API
const auth = require('./auth');
const tabla = require('./tabla');
const tablas = require('./tablas');
const usuario = require('./usuario');
const usuarios = require('./usuarios');

router.use('/auth', auth);
router.use('/tabla', tabla);
router.use('/tablas', tablas);
router.use('/usuario', usuario);
router.use('/usuarios', usuarios);

router.get('**', (req, res) => {
  res.send('<h1>Ruta de API no encontrada</h1>')
});


module.exports = router;