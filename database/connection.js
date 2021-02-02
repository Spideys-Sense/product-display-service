const { Sequelize } = require('sequelize');

// This file is responsible for initiating the Sequelize connection

const sequelize = new Sequelize('product_displays', 'root', 'pineapple', {
  host: '3.14.193.52',
  dialect: 'mysql',
  logging: false,
});

sequelize.sync()
  .then(() => {
    console.log('\n-Completed Database Sync-\n');
  })
  .catch((err) => {
    console.error(err);
  });

// And exporting it

module.exports = sequelize;
