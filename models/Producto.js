const { Sequelize } = require('sequelize');
const sequelize = require('../config/db_sequelize');

// Definir la estructura del producto
const Producto = sequelize.define('Producto', {
  nombre: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  precio: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
    }
  },
  stock: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  /* Suponiendo que queramos una FK
  vendedor: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Vendedores',
      key: 'id'
    }
  }
  */
}, {
  timestamps: false
})

Producto.sync();
// Producto.sync({alter: true}) | Producto.sync({force: true})

module.exports = Producto;