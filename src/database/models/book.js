'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.belongsToMany(models.User, {
        through: models.UserBooks,
        foreignKey: 'book_id',
        as: 'users'
      });

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
    paranoid: true,
  });

  return Book;
};
