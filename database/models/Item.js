const { DataTypes } = require('sequelize');
const Department = require('./Department');
const db = require('../connection');

const Item = db.define('Item', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  variantName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  discount: {
    type: DataTypes.INTEGER,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Each item belongs to a department, and has many variants
Item.belongsTo(Department);
Item.belongsToMany(Item, { as: 'Variants', through: 'ItemVariants' });

module.exports = Item;
