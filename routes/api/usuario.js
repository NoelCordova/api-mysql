const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { handleError } = require('../../config/functions');
const db = require('../../config/db');


// URL: /api/usuario
// GET: /:id -> Regresa todos los valores del usuario seleccionado
// POST: / -> Crea a un usuario en la base de datos
// ----------------------------------------

// GET: /:id
router.get('/:id', (req, res) => {
  const id = req.params.id;

  db.query(`select * from tbl_usuario where(id=${id})`, (error, results) => {
    if(error) return handleError(res, 400, error);
    else if(results.length == 0) return handleError(res, 400, 'Busqueda sin resultados');
    else {
      res.json({
        ok: true,
        status: 200,
        data: results
      });
    }
  });
});


// POST: /
router.post('/', (req, res) => {
  if(req.body.password.length < 5) {
    return handleError(res, 400, 'La contraseña es muy corta.');
  }

  const username = req.body.username.toLowerCase();
  const password = bcrypt.hashSync(req.body.password, 10);

  db.query(`insert into tbl_usuario(username, password) values('${username}','${password}')`, (error, results) => {
    if(error) return handleError(res, 400, error);
    else {
      res.json({
        ok: true,
        status: 200,
        data: results
      });
    }
  });
});


module.exports = router;