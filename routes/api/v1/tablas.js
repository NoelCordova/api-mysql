const express = require('express');
const router = express.Router();
const { handleError } = require('../../../config/functions');
const db = require('../../../config/db');


// URL: /api/tablas
// GET: / -> Regresa todas las tablas existentes en la base de datos
// ----------------------------------------

// GET: /
router.get('/', (req, res) => {
  db.query(`show tables`, (error, results) => {
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