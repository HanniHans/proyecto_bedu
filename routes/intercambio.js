const { Module } = require("module")

const router = require("express").Router();

const{
    intercambiarLibros,
    cancelarIntercambio,
    verIntercambio,
    cambiarIntercambio
}

router.post("/", intercambiarLibros);
router.get("/:id", verIntercambio);
router.delete("/:id", cancelarIntercambio);
router.put("/:id", cambiarIntercambio);

module.exports = router;