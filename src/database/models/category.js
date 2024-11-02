'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // Associação um para muitos com Book
      Category.hasMany(models.Book, {
        foreignKey: 'category_id',
        as: 'books',
      });
    }
  }

  Category.init({
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'categories',
    paranoid: true
  });

  return Category;
};
