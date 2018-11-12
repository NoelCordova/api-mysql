const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { handleError } = require('../../../config/functions');
const db = require('../../../config/db');


// URL /api/auth
// POST: /login -> Se realiza el proceso de validaciones para un login
// ----------------------------------------

router.post('/login', (req, res) => {

  db.query(`select * from tbl_usuario where(username='${req.body.username}')`, (error, results) => {
    if(error) return handleError(res, 400, error);
    else if(results.length === 0) return handleError(res, 400, 'Error en el login [usuario]');
    else {

      if(!bcrypt.compareSync(req.body.password, results[0].password)) {
        return handleError(res, 400, 'Error en el login [contraseña]');
      } else {
        res.json({
          ok: true,
          status: 200,
          message: 'Inicio de sesión correcto'
        });
      }

    }
  });

});


module.exports = router;