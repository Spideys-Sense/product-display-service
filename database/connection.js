const { Sequelize } = require('sequelize');

// This file is responsible for initiating the Sequelize connection

const sequelize = new Sequelize('product_displays', 'student', 'student', {
  host: 'localhost',
  dialect: 'mysql',
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
