'use strict'
let express = require('express');
//importo el controlador project
let projectControllers = require('../Controllers/ProjectControllers');
//método router de express
let router = express.Router();
// se crea una ruta por get ('ruta a crear','metodo del controlador')
router.get('/home',projectControllers.home);
//se crea una nueva ruta
router.get('/test',projectControllers.test);
router.post('/inicio',projectControllers.inicio);
router.post('/saveproject',projectControllers.saveProject);

module.exports = router;
