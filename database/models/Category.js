const { Model, DataTypes } = require('sequelize');
const Department = require('./Department');
const connection = require('../connection');

class Category extends Model {}

Category.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Department,
      key: 'id',
    },
  },
}, {
  sequelize: connection,
  modelName: 'Category',
});

// Category.sync()
//   .catch((err) => {
//     console.error(`error syncing Categories: ${err}`);
//   });

module.exports = Category;
