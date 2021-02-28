const Intercambio = require("../models/intercambio");
const Usuario = require('../models/usuario');
const Libros = require('../models/libros');

function intercambiarLibros(req, res){
    var usuario1 = new Usuario(req.params.id, 'Carlos', 'Pardo', 'direccion1','foto1','contraseña1');
    var usuario2 = new Usuario(req.params.id, 'Sebastian', 'Neri', 'direccion2','foto2','contraseña2');
    var libro1 = new Libros(1, 'Harry Potter', 'J.K. Rowling');
    var libro2 = new Libros(2, 'El señor de los anillos', 'J.R.R. Tolkien');
    var intercambio = new Intercambio(usuario1, usuario2, libro1, libro2, true, true, "La Roma");
    if (intercambio.status_general){
        res.status(200).send(`Intercambio Realizado\nEl punto de encuentro es: ${intercambio.punto_medio}`)
    }else{
        res.status(200).send("Lamentablemente el intercambio aún no se ha realizado.")
    }
}

function cancelarIntercambio(req, res){
    var usuario1 = new Usuario(req.params.id, 'Carlos', 'Pardo', 'direccion1','foto1','contraseña1');
    var usuario2 = new Usuario(req.params.id, 'Sebastian', 'Neri', 'direccion2','foto2','contraseña2');
    var libro1 = new Libros(1, 'Harry Potter', 'J.K. Rowling');
    var libro2 = new Libros(2, 'El señor de los anillos', 'J.R.R. Tolkien');
    var intercambio = new Intercambio(usuario1, usuario2, libro1, libro2, true, true, "La Roma");
    intercambio.status_general = false;
    res.status(200).send("Se ha cancelado el intercambio exitosamente");
}

function verIntercambio(req, res){
    var usuario1 = new Usuario(req.params.id, 'Carlos', 'Pardo', 'direccion1','foto1','contraseña1');
    var usuario2 = new Usuario(req.params.id, 'Sebastian', 'Neri', 'direccion2','foto2','contraseña2');
    var libro1 = new Libros(1, 'Harry Potter', 'J.K. Rowling');
    var libro2 = new Libros(2, 'El señor de los anillos', 'J.R.R. Tolkien');
    var intercambio = new Intercambio(usuario1, usuario2, libro1, libro2, true, true, "La Roma");
    res.status(200).send({...intercambio})
}

function cambiarIntercambio(req, res){
    var usuario1 = new Usuario(req.params.id, 'Carlos', 'Pardo', 'direccion1','foto1','contraseña1');
    var usuario2 = new Usuario(req.params.id, 'Sebastian', 'Neri', 'direccion2','foto2','contraseña2');
    var libro1 = new Libros(1, 'Harry Potter', 'J.K. Rowling');
    var libro2 = new Libros(2, 'El señor de los anillos', 'J.R.R. Tolkien');
    var intercambio = new Intercambio(usuario1, usuario2, libro1, libro2, true, true, "La Roma");
    intercambio.status_general = req.params.status 
    intercambio.punto_medio = req.params.punto_medio
    res.status(200).send("Intercambio actualizado")
}

module.export = {
    intercambiarLibros,
    cancelarIntercambio,
    verIntercambio,
    cambiarIntercambio
}