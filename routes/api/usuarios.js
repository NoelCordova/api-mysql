const express = require('express');
const router = express.Router();
const { handleError } = require('../../config/functions');
const db = require('../../config/db');


// URL: /api/usuarios
// GET: / -> Regresa todos los valores de la tabla usuarios
// ----------------------------------------

// GET: /
router.get('/', (req, res) => {
  db.query(`select * from tbl_usuario`, (error, results) => {
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