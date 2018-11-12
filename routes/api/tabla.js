const express = require('express');
const router = express.Router();
const { handleError } = require('../../config/functions');
const db = require('../../config/db');


// URL /api/tabla
// GET: /:nombre -> Proporcionar nombre de una tabla y obtener todo su contenido
// POST: /usuario -> Crea una tabla predefinida llama tbl_usuario
// ----------------------------------------

// GET: /:nombre
router.get('/:nombre', (req, res) => {
  const nombreTabla = req.params.nombre;

  db.query(`select * from ${nombreTabla}`, (error, results) => {
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


// POST: /usuario
router.post('/usuario', (req, res) => {
  const query = 'create table tbl_usuario(id int not null auto_increment, username varchar(50) not null unique, password longtext not null, primary key(id))';

  db.query(query, (error, results) => {
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