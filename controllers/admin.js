const Admin = require('../models/admin')
const Usuario = require('../models/usuario')
const Libro = require('../models/libros')


function registrarAdmin(req, res){
    var admin = new Admin(req.body)
    res.status(201).send(admin)
}
//Registrar un usuario Admin

function obtenerAdmins(req, res){
    var admin1 = new Admin(1, 'Hannia', 'Rosales', 'admin@admin.com','ContraseñaSegura')
    var admin2 = new Admin(2, 'Ruth', 'Licona', 'admin2@admin.com', 'ContraseñaMasegura')
    res.send([admin1,admin2])
}

function obtenerAdmin(req,res){
    var admin = new Admin(1, 'Hannia', 'Rosales', 'admin@admin','ContraseñaSegura')
    if(req.params.id == admin.id){
        res.send(`Admin ${admin.name}`)
    }else{
        res.send('Ese Admin no existe')
    }
}

function editarAdmin(req, res){
    var admin = new Admin(req.params.id ,'Ruth', 'Licona', 'admin2@admin.com', 'ContraseñaMasegura')
    var modificaciones = req.body;
    admin = {...admin, ...modificaciones}
    res.send(admin)
};
//Editar la informacion de un Admin

function editarUsuario(req, res){
    var usuario = new Usuario(req.params.id, 'Sebastiam', 'Neri', 'admin3@admin.com', 'ContraseñaSegura')
    var modificaciones = req.body;
    usuario = {...usuario, ... modificaciones}
    res.send(usuario)
}
// Gestionar la informacion de un usuario

function banearUsuario(req,res){
    res.status(200).send(`Usuario ${req.params.id} baneado`)
}
//banear a un usuariol

function editarStock(req, res){
    var libro = new Libro(req.params.id, 'Harry Potter', 'J.K Rowling', '2a. Edición', 'Trillas', 'Ficción', 400, 'Español', 4)
    libro.stock = req.body;
    res.status(200).send(`Stock actualizado`)
}
// Actualizar stock
