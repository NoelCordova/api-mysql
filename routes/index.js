const express = require('express');
const api = require('./api');

const app = express();

// Declaración de rutas
app.use('/api', api);

// Ruta 404
app.get('**', (req, res) => {
  res.send('<h1>404: Ruta no encontrada</h1>')
});


module.exports = app;