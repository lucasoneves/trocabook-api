'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // Associação um para muitos com Book
      Category.hasMany(models.Book, {
        foreignKey: 'categoryId',
        as: 'books',
      });
    }
  }

  Category.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'categories',
  });

  return Category;
};
