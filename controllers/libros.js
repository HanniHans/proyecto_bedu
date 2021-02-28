const Libros = require('../models/libros')


function registroLibros(req, res){
    var libro = new Libros(req.body)
    res.status(201).send(libro)
}

function visualizarlibros(req, res){
    var libro1 = new Libros(1, 'Harry Potter', 'J.K. Rowling')
    var libro2 = new Libros(2, 'El señor de los anillos', 'J.R.R. Tolkien')
    res.send([libro1, libro2])
}

function editarLibro(req, res){
    var libro = new Libros(req.params.id ,'Harry Potter', 'J.K. Rowling', '9Edicion', 'Trillas')
    var modificaciones = req.body;
    libro = {...libro, ...modificaciones}
    res.send(libro)
}


function evaluarLibro(req,res){
    var libro = new Libros(req.params.id, 'libro1', 'autor1')
    libro.calificacion = req.body.calificacion;
    libro.comentario = req.body.comentario;
    res.status(200).send('Libro evaluado')

}

function editarStock(req, res){
    var libro = new Libro(req.params.id, 'Harry Potter', 'J.K Rowling', '2a. Edición', 'Trillas', 'Ficción', 400, 'Español', 4)
    libro.stock = req.body;
    res.status(200).send(`Stock actualizado`)
}
// Actualizar stock

module.exports= {
    registroLibros,
    editarLibro,
    editarStock,
    evaluarLibro,
    visualizarlibros
}
