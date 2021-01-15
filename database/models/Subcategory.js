const { Model, DataTypes } = require('sequelize');
const Category = require('./Category');
const connection = require('../connection');

class Subcategory extends Model {}

Subcategory.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: 'id',
    },
  },
}, {
  sequelize: connection,
  modelName: 'Subcategory',
});

// Subcategory.sync()
//   .catch((err) => {
//     console.error(`error syncing Subcategories: ${err}`);
//   });

module.exports = Subcategory;
