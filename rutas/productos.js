const express = require('express');
const router = express.Router()

// Importamos controlador
const productosController = require('../controladores/productosControlador')

// /productos

// localhost:3000/productos/
router.get('/', productosController.obtenerTodos);
router.get("/:id", productosController.obtener);
router.post('/', productosController.crear);
router.put('/:id', productosController.actualizar);
router.delete('/:id', productosController.borrar);

module.exports = router