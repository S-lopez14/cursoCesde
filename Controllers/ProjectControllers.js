'use strict'
// se crea un objeto controller tipo JSON
let Project = require('../Models/ProjectModel');
let controller = {
    home: function (req, res) {
        return res.status(200).send({
            mensaje: 'Soy la home'
        });
    },
    test: function (req, res) {
        return res.status(200).send({
            mensaje: 'soy el método test del controlador'
        });
    },
    inicio: function (req, res) {
        return res.status(200).send({
            mensaje: 'Todo bien inicio'
        });
    },
    saveProject: function (req, res) {
        let project = new Project();
        let params = req.body;
        project.nombre = params.nombre;
        project.apellido = params.apellido;
        project.ciudad = params.ciudad;
        project.edad = params.edad;
        project.fruta = params.fruta;
        project.save((err, projectStored) => {
            if (err) {
                return res.status(500).send({
                    mensaje: 'no se ha podido guardar el documento'
                });
            }
            if (!projectStored){
                return res.status(404).send({
                    mensaje: 'no se ha podido guardar el proyecto'
                });
            }
            return res.status(200).send({
                project:projectStored,
                mensaje: 'no se ha podido guardar el proyecto'
            });
                

        });
        
    }
};

module.exports = controller;