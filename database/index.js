const sequelize = require('./connection');
const {
  Item,
  Image,
  ItemVariant,
  Subcategory,
  Category,
  Department,
} = require('./models');

sequelize.sync();
// Use sequelize Model methods with all imported models^

// module.exports.getItem = function (itemId) {
//
// };
// module.exports.getImages = function(itemId, amount = 10) {
//
// }
// module.exports.addToCart = function(itemId, amount = 1) {
//
// };
