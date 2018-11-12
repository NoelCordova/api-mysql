const router = require('express').Router();

// Declaración de las rutas de la API
const auth = require('./v1/auth');
const tabla = require('./v1/tabla');
const tablas = require('./v1/tablas');
const usuario = require('./v1/usuario');
const usuarios = require('./v1/usuarios');

router.use('/v1/auth', auth);
router.use('/v1/tabla', tabla);
router.use('/v1/tablas', tablas);
router.use('/v1/usuario', usuario);
router.use('/v1/usuarios', usuarios);

router.get('**', (req, res) => {
  res.send('<h1>Ruta de API no encontrada</h1>')
});


module.exports = router;