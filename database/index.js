const Sequelize = require('sequelize');

const sequelize = new Sequelize('products', 'student', 'student', {
  host: 'localhost',
  dialect: 'sqlite',
});

sequelize.authenticate()
  .then(() => {
    console.log('Established database connection');
  })
  .catch((err) => {
    console.error(`Unable to connect to database: ${err}`);
  });
