// Se requiere un archivo de configuración
require('./config/config');
require('./config/db');

// Librerias
const express = require('express');
const bodyParser = require('body-parser');
const volleyball = require('volleyball');
const cors = require('cors');

// Archivos
const routes = require('./routes');

const app = express();

// Declaración de middlewares
app.use(volleyball);
app.use(bodyParser.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log('Server running on port: ', process.env.PORT);
});
