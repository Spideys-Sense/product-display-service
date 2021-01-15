const { Model, DataTypes } = require('sequelize');
const Item = require('./Item');
const connection = require('../connection');

class ItemVariant extends Model {}

ItemVariant.init({
  item1_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Item,
      key: 'id',
    },
  },
  item2_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Item,
      key: 'id',
    },
  },
}, {
  sequelize: connection,
  modelName: 'ItemVariant',
});

// ItemVariant.sync()
//   .catch((err) => {
//     console.error(`error syncing ItemVariants: ${err}`);
//   })

module.exports = ItemVariant;
