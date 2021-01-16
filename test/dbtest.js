/* eslint-disable no-undef */
const { expect } = require('chai');
const Sequelize = require('sequelize');

// Use test db

const db = new Sequelize('product_displays_test', 'student', 'student', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

// Define models:

const Department = db.define('Department', {
  name: {
    type: Sequelize.STRING,
  },
});

const Item = db.define('Item', {
  name: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.INTEGER,
  },
  discount: {
    type: Sequelize.INTEGER,
  },
  stock: {
    type: Sequelize.INTEGER,
  },
});

const Image = db.define('Image', {
  url: {
    type: Sequelize.STRING,
  },
});

// Define relationships and sync

Item.belongsTo(Department);
Item.belongsToMany(Item, { as: 'Variants', through: 'ItemVariants' });
Image.belongsTo(Item);

Department.sync();
Item.sync();
Image.sync();

// Set up seed

const createItem = () => Item.create({
  name: 'test',
})
  .catch((err) => console.error(err));
const createDepartment = () => Department.create({})
  .catch((err) => console.error(err));
const createImage = (i) => Image.create({ name: i })
  .catch((err) => console.error(err));

const seed = async () => {
  for (let i = 1; i < 11; i += 1) {
    await createDepartment();
  }

  for (let i = 1; i < 101; i += 1) {
    await createItem();
  }

  for (let i = 1; i < 101; i += 1) {
    await createImage(i);
  }
};

//
// Actual test suite starts here
//

const models = { Department, Item, Image };

describe('Database', async () => {
  before(async () => {
    await db.drop();
    await db.sync();
  });

  it('Should have Item, ItemVariant, Image, and Department tables', () => {
    Promise.resolve(db.isDefined('Departments'))
      .then((defined) => {
        expect(defined).to.be(true);
        return db.isDefined('Items');
      })
      .then((defined) => {
        expect(defined).to.be(true);
        return db.isDefined('ItemVariangs');
      })
      .then((defined) => {
        expect(defined).to.be(true);
        return db.isDefined('Images');
      });
  });

  it('Should have 100 Item entries seeded', async function () {
    this.timeout(10000);
    await seed();
    return Item.findAll()
      .then((resultsArray) => {
        expect(resultsArray.length).to.equal(100);
      });
  });
});
