const { DataTypes } = require('sequelize');
const Item = require('./Item');
const db = require('../connection');

const Image = db.define('Image', {
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Each image belongs to an item
Image.belongsTo(Item);

module.exports = Image;
