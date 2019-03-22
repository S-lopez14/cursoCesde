'use strict'
//importamos bibliotecas para manejos de peticiones http y archivos json
let express = require('express');
let bodyParser = require('body-parser')
//ejecuto express
let app = express();
// Cargar archivos de rutas
let projectRoutes = require('./Routes/ProjectRoutes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//rutas
app.use('/api',projectRoutes);
module.exports = app;