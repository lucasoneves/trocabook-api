'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      // Associação muitos para muitos com User
      Book.belongsToMany(models.User, {
        through: 'UserBooks',
        foreignKey: 'book_id',
        as: 'users',
      });

      // Associação muitos para um com Category
      Book.belongsTo(models.Category, {
        foreignKey: 'category_id',
        as: 'category',
      });
    }
  }

  Book.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    pages: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Book',
    tableName: 'books',
  });

  return Book;
};
