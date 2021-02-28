const { Module } = require("module")

const router = require("express").Router();

const{
    intercambiarLibros,
    cancelarIntercambio
}

router.post("/", intercambiarLibros);
router.delete("/:id", cancelarIntercambio);

module.exports = router;