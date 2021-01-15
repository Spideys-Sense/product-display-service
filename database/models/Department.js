const { DataTypes } = require('sequelize');
const db = require('../connection');

const Department = db.define('Department', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Department.sync()
//   .catch((err) => {
//     console.error(`error syncing Departments: ${err}`);
//   });

module.exports = Department;
