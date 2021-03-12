const router = require('express').Router();
const {
    registrarAdmin,
    obtenerAdmin,
    obtenerAdmins,
    editarAdmin,
    banearAdmin
} = require('../controllers/admin')

router.get('/:id', obtenerAdmin)
router.get('/', obtenerAdmins)
router.post('/', registrarAdmin)
router.put('/:id', editarAdmin)
router.delete('/:id',banearAdmin)



