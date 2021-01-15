const { Model, DataTypes } = require('sequelize');
const Item = require('./Item');
const connection = require('../connection');

class Image extends Model {}

Image.init({
  item_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Item,
      key: 'id',
    },
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: connection,
  modelName: 'Image',
});

// Image.sync()
//   .catch((err) => {
//     console.error(`error syncing Images: ${err}`);
//   });

module.exports = Image;
