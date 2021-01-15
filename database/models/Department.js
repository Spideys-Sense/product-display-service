const { Model, DataTypes } = require('sequelize');
const connection = require('../connection');

class Department extends Model {}

Department.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: connection,
  modelName: 'Department',
});

// Department.sync()
//   .catch((err) => {
//     console.error(`error syncing Departments: ${err}`);
//   });

module.exports = Department;
