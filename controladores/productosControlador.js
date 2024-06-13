const promiseQuery = require('../config/db')

// Controlador de productos

const obtenerTodos = async (req, res) => {
  // Obtiene todos los usuarios de la base de datos
  try {
    const query = "SELECT * FROM productos";

    const productos =  await promiseQuery(query)
    // const productos = await Productos.findAll()
    
    res.json(productos)
  } catch (error) {
    throw err
  }
}

const obtener = async (req, res) => {
  try {
    const id = req.params.id
    const query = "SELECT * FROM productos WHERE id = ?"
  
    const producto = await promiseQuery(query, [id])
    res.json(producto) 
  } catch (error) {
    throw err
  }
}

const crear = async (req, res) => {
  try {
    const { nombre, precio, stock } = req.body
    const query = "INSERT INTO productos (nombre, precio, stock) VALUES (?, ?, ?)"

    await promiseQuery(query, [nombre, precio, stock])
    res.json({message: "Producto creado!!!"})
  } catch (error) {
    throw error
  }
}

const actualizar = async (req, res) => {
  try {
    const {nombre, precio, stock} = req.body
    const query = "UPDATE productos SET nombre = ?, precio = ?, stock = ? WHERE id = ?"
    
    await promiseQuery(query, [nombre, precio, stock, req.params.id])
    res.json({message: "Producto actualizado exitosamente"})
  } catch (error) {
    throw error
  }
}

const borrar = async (req, res) => {
  try {
    const query = "DELETE FROM productos WHERE id = ?"

    await promiseQuery(query, [req.params.id])
    res.json({message: "Producto borrado"})
  } catch (error) {
    throw error
  }
}

module.exports = {
  obtenerTodos,
  obtener,
  crear,
  actualizar,
  borrar
}
