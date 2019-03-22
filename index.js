'use strict'
//importo bibloteca para conexión para mongoo db
let mongoose = require('mongoose');
let app = require("./app");
let port = 27017;
//la promesa se usa para conexion a mongo db
//
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/cosita", { useNewUrlParser: true })
    .then(() => {
        console.log("Conexión a la base de datos establecida con exito");
        app.listen(port, () => {
            console.log("servidor corriendo correctamente");
        })
    })
    .catch((err) => {
        console.log(err);
    });


//console.log("prueba");