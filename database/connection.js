const mysql = require('mysql2');
const { Sequelize } = require('sequelize');

// This file is responsible for initiating mySQL/Sequelize connections

// First we init our database with mysql:

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
});

connection.promise().query(
  'CREATE DATABASE IF NOT EXISTS Bitey;',
)
  .then(() => {
    console.log('Bitey Database confirmed to exist');
  })
  .catch((err) => {
    console.error(`Error creating Bitey Database: ${err}`);
  });

// Now we build our sequelize instance

const sequelize = new Sequelize('Bitey', 'student', 'student', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => {
    console.log('Established sequelize connection');
  })
  .catch((err) => {
    console.error(`Unable to connect to database: ${err}`);
  });

// And export it

module.exports = sequelize;
