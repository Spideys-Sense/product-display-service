const Chance = require('chance');
const { db, models } = require('../index');
const images = require('./images.js');

const ItemVariant = db.model('ItemVariants');

const chance = new Chance();
const foodAdjectives = ['Canned', 'Wet', 'Dry', 'Home-cooked', 'Artisanal', 'Raw', 'Bulk', 'Premium'];
const petTypes = ['Cat', 'Dog', 'Ferret', 'Zebra', 'Parrot', 'Horse', 'Snake'];
const foodTypes = ['Kibble', 'Feed', 'Pellets', 'Meal', 'Snacks', 'Treats'];
const variantSizes = ['2-lb', '3.5-lb', '7-lb', '10-lb', '15-lb', '50-lb', '50 gallon'];
const variantTypes = ['bin', 'bag', 'drum', 'container', 'pouch', 'box', 'crate', 'bottle'];

// Chance's mixin function allows you to create your own data randomizers.
// The object returned in each function definition is what calling chance.mixinName() will return.
// E.G. chance.biteyDepartment() will return:
// {name: 'random petType string', createdAt: date, updatedAt: date}

chance.mixin({
  biteyDepartment() {
    const name = `${chance.pickone(petTypes)} > Food > ${chance.pickone(foodAdjectives)}`;
    return {
      name,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  },
  biteyFoodItem(linkedDepartment) {
    const name = (`${chance.pickone(foodAdjectives)} ${chance.pickone(petTypes)} ${chance.pickone(foodTypes)}`);
    const price = chance.integer({ min: 0, max: 10000 });
    const discount = chance.integer({ min: 0, max: price });
    const variantName = (`${chance.pickone(variantSizes)} ${chance.pickone(variantTypes)}`);
    return {
      name,
      variantName,
      price,
      discount,
      stock: 10,
      DepartmentId: linkedDepartment,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  },
  biteyImage(linkedItem) {
    const randomIndex = chance.integer({ min: 0, max: images.all.length - 1 });
    const randomImage = images.all[randomIndex];
    return {
      ItemId: linkedItem,
      url: randomImage,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  },
  biteyVariant(ItemId, VariantId) {
    return {
      ItemId,
      VariantId,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  },
});

const seed = () => {
  db.sync({ force: true })
    .then(() => db.sync({ force: true }))
    .then(() => new Promise((resolve) => {
      setTimeout((() => resolve('Start seeding!')), 1000);
    }))
    .then(() => {
      for (let i = 1; i < 11; i += 1) {
        models.Department.create(chance.biteyDepartment());
      }

      for (let i = 1; i < 101; i += 1) {
        const dptId = chance.integer({ min: 1, max: 10 });
        const newItem = chance.biteyFoodItem(dptId);
        models.Item.create(newItem);
      }

      for (let i = 1; i < 101; i += 1) {
        const totalVariants = chance.integer({ min: 2, max: 5 });
        for (let v = 1; v <= totalVariants; v += 1) {
          const randomItem = chance.integer({ min: 1, max: 101 });
          ItemVariant.create(chance.biteyVariant(i, randomItem));
        }
      }

      for (let i = 1; i < 101; i += 1) {
        const imageCount = chance.integer({ min: 5, max: 15 });
        for (let j = 1; j <= imageCount; j += 1) {
          models.Image.create(chance.biteyImage(i));
        }
      }
      return Promise.resolve('Test');
    })
    .catch((err) => {
      console.log(err);
    });
};

seed(db, models);

module.exports = seed;
