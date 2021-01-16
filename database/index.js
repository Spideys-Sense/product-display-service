const db = require('./connection');
const models = require('./models');

// This file is responsible for syncing all models in the db

db.sync();

module.exports.db = db;
module.exports.models = models;
