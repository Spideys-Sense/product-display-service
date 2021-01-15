const { Model, DataTypes } = require('sequelize');
const Subcategory = require('./Subcategory');
const connection = require('../connection');

class Item extends Model {}

Item.init({
  name: {
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
  subcategory_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Subcategory,
      key: 'id',
    },
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: connection,
  modelName: 'Item',
});

// Item.sync({ logging: console.log })
//   .catch((err) => {
//     console.error(`error syncing Items: ${err}`);
//   });

module.exports = Item;
