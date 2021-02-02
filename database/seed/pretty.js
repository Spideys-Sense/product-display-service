const { db, models } = require('../index');
const images = require('./images.js');

const ItemVariant = db.model('ItemVariants');

const seed = () => {
  db.sync({ force: true })
    .then(() => db.sync({ force: true }))
    .then(() => new Promise((resolve) => {
      setTimeout((() => resolve('Start seeding!')), 1000);
    }))
    .then(() => models.Department.create({
      name: 'Cat > Food > Dry Food',
      createdAt: new Date(),
      updatedAt: new Date(),
    }))
    .catch((err) => console.error(`error in seeding Department: ${err}`))
    .then(() => models.Item.create({
      name: 'Hill\'s Science Diet Indoor Kitten Dry Cat Food',
      variantName: '3.5-lb bag',
      price: 1699,
      discount: 100,
      stock: 10,
      DepartmentId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }))
    .catch((err) => console.error(`error in seeding first item: ${err}`))
    .then(() => models.Item.create({
      name: 'Hill\'s Science Diet Indoor Kitten Dry Cat Food',
      variantName: '7-lb bag',
      price: 2499,
      discount: 100,
      stock: 10,
      DepartmentId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }))
    .catch((err) => console.error(`error in seeding second item: ${err}`))
    .then(() => ItemVariant.create({
      ItemId: 1,
      VariantId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }))
    .catch((err) => console.error(`error in seeding variant: ${err}`))
    .then(() => {
      const imagePromises = [];
      for (let i = 0; i < images.s3.length; i++) {
        imagePromises.push(models.Image.create({
          ItemId: 0,
          url: images.s3[i],
          createdAt: new Date(),
          updatedAt: new Date(),
        }));
        imagePromises.push(models.Image.create({
          ItemId: 1,
          url: images.s3[i],
          createdAt: new Date(),
          updatedAt: new Date(),
        }));
      }
      return Promise.all(imagePromises);
    })
    .catch((err) => console.error(`error in seeding images: ${err}`));
};

seed(db, models);

module.exports = seed;
