const Chance = require('chance');
const { db, models } = require('./index');

const chance = new Chance();
const foodAdjectives = ['Canned', 'Wet', 'Dry', 'Home-cooked', 'Artisanal', 'Raw', 'Bulk', 'Premium'];
const petTypes = ['cat', 'dog', 'ferret', 'zebra', 'parrot', 'horse', 'snake'];
const foodTypes = ['kibble', 'feed', 'pellets', 'meal', 'snacks', 'treats'];

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
    return {
      name,
      price,
      discount,
      stock: 10,
      DepartmentId: linkedDepartment,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  },
  biteyImage(linkedItem) {
    return {
      ItemId: linkedItem,
      url: 'placeimg.com/640/480',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  },
});

const seed = async (database) => {
  await database.drop();
  await database.sync();

  for (let i = 1; i < 11; i += 1) {
    models.Department.create(chance.biteyDepartment());
  }

  for (let i = 1; i < 101; i += 1) {
    const dptId = chance.integer({ min: 1, max: 10 });
    const newItem = chance.biteyFoodItem(dptId);
    models.Item.create(newItem);
  }

  for (let i = 1; i < 101; i += 1) {
    const imageCount = chance.integer({ min: 4, max: 13 });
    for (let j = 1; j < imageCount; j += 1) {
      models.Image.create(chance.biteyImage(i));
    }
  }
};

seed(db);

module.exports = seed;
