'use strict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
//esuqema de la bd
let projectSchema = Schema({
    nombre: String,
    apellido: String,
    ciudad: String,
    edad: Number,
    fruta: String
});
// Mongoose.Models('nombre colección','esquema de la colección ')
module.exports = mongoose.model('curso',projectSchema);