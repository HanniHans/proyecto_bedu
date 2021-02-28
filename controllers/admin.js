const Admin = require('../models/admin')

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

module.exports= {
    registrarAdmin,
    obtenerAdmin,
    obtenerAdmins,
    editarAdmin
}