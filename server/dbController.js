const { db, models } = require('../database');

const ItemVariants = db.model('ItemVariants');

// Get item data
module.exports.retrieveItem = (ItemId) => models.Item.findByPk(ItemId, {
  raw: true,
})
  .then((itemData) => {
    const item = itemData;
    delete item.createdAt;
    delete item.updatedAt;
    return ItemVariants.findAll({
      where: {
        ItemId,
      },
    })
      .then((variantResults) => {
        if (variantResults.length > 0) {
          const variantIds = variantResults.map((v) => v.VariantId);
          item.variants = variantIds;
        }
        return item.DepartmentId;
      })
      .then((departmentId) => {
        delete item.DepartmentId;
        return models.Department.findByPk(departmentId, {
          raw: true,
        });
      })
      .then((departmentResults) => {
        item.Department = departmentResults.name;
        return item;
      });
  });

// Returns
// {
//   “id”: number,
//   “name”: string,
//   “price”: number,
//   “discount”: string,
//   “subcategory”: string,
//   “category”: string,
//   “department”: string,
//   “stock”: number,
//   “variants”: [
//     “item_id”: number,
//     “Item_id”: number...
//   ]
// }

// Get images
module.exports.retrieveImage = (ItemId, amount) => models.Image.findAll({
  where: {
    ItemId,
  },
  raw: true,
})
  .then((imageResults) => imageResults.map((resultObj) => resultObj.url))
  .then((urlList) => ({ imageUrls: urlList }));

// Returns
// {
// “imageUrls”: [urlStrings...]
// }

// Post to cart
module.exports.addToCart = (ItemId) => Promise.resolve(`This is where I would add item ${ItemId} to a shopping cart, if I had one.`);
