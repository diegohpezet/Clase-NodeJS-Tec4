const express = require('express');
const router = express.Router()
const promiseQuery = require('../config/db')

// /productos

// localhost:3000/productos/
router.get('/', async (req, res) => {
  try {
    const query = "SELECT * FROM productos";

    const productos =  await promiseQuery(query)
    res.json(productos)
  } catch (error) {
    throw err
  }
})

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id
    const query = "SELECT * FROM productos WHERE id = ?"
  
    const producto = await promiseQuery(query, [id])
    res.json(producto) 
  } catch (error) {
    throw err
  }
})

router.post('/', async (req, res) => {
  try {
    const { nombre, precio, stock } = req.body
    const query = "INSERT INTO productos (nombre, precio, stock) VALUES (?, ?, ?)"

    await promiseQuery(query, [nombre, precio, stock])
    res.json({message: "Producto creado!!!"})
  } catch (error) {
    throw error
  }
})


module.exports = router