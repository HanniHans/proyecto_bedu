const Usuario = require('../models/usuario')
const Libros = require('../models/libros')

function registroUsuario(req,res){
    var usuario =new Usuario(req.body)
    res.status(201).send(usuario)
}

function editarUsuario(req,res){
    var usuario1 = new Usuario(req.params.id, 'Carlos', 'Pardo', 'direccion1','foto1','contraseña1')
    var modificaciones = req.body
    usuario1 = {...usuario1, ...modificaciones}
    res.send(usuario1)
}



function obtenerUsuarios(req, res){
    var usuario1 = new Usuario(1, 'Hannia', 'Rosales', 'direccion')
    var usuario2 = new Usuario(2, 'Ruth', 'Licona', 'direccion')
    res.send([usuario1,usuario2])
}



function banearUsuario(req,res){
    res.status(200).send(`Usuario ${req.params.id} baneado`)
}
//banear a un usuariol

function evaluarUsuarios(req, res){
    var usuario = new Usuario(req.params.id, 'Usuario1', 'apellido')
    usuario.calificacion = req.body.calificacion;
    usuario.comentario = req.body.comentario;
    res.status(200).send('Usuario evaluado')
}


//Funciones que no sabemos si van en este controlador 
function comprar(req, res){
    var libro = new Libros(req.params.id, 'libro1')
    libro.stock--
    res.status(200).send('libro comprado')
}

function intercambiarLibros(req, res){   
    var libro1 =new Libros(1, 'Harry Potter', 'J.K. Rowling')
    var libro2 =new Libros(2, 'El señor de los anillos', 'J.R.R. Tolkien')
}


function evaluarPropuestaDeIntercambio(req, res){
    if(TRUE){
        res.send('Intercambio aceptado')
    }else{
        res.send('Intercambio no aceptado')
    }
}


//
module.export = {
    registroUsuario,
    editarUsuario, 
    obtenerUsuarios,
    intercambiarLibros,
    evaluarPropuestaDeIntercambio,
    banearUsuario,
    comprar,
    evaluarUsuarios
}