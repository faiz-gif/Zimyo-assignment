// src/models/index.js
const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Product = require('./product');
const User = require('./user');

const models = {
  Product: Product(sequelize, Sequelize.DataTypes),
  User: User(sequelize, Sequelize.DataTypes),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
