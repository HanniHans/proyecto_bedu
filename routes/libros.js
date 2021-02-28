const router = require('express').Router();

const{
    registroLibros,
    editarLibro,
    editarStock,
    evaluarLibro,
    visualizarlibros
} = require('../controllers/libros')

router.get('/', visualizarlibros)
router.put('/:id', editarLibro)
router.put('/stock:id', editarStock)
router.put('/evaluar:id', evaluarLibro)
router.post('/', registroLibros)