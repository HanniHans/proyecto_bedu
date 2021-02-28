const router = require('express').Router();

const{
    registroUsuario,
    editarUsuario, 
    obtenerUsuarios,
    intercambiarLibros,
    evaluarPropuestaDeIntercambio,
    banearUsuario,
    comprar,
    evaluarUsuarios
} = require('../controllers/usuario')

router.get('/', obtenerUsuarios )
router.post('/', registroUsuario)
router.put('/:id', editarUsuario)
router.delete('/:id', banearUsuario)
router.put('/evaluarUsuario:id', evaluarUsuarios)

module.exports = router;