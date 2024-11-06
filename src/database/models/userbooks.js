'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserBooks extends Model {
    static associate(models) {
      UserBooks.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
      });
      UserBooks.belongsTo(models.Book, {
        foreignKey: 'book_id',
        as: 'book',
      });
    }
  }

  UserBooks.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'books',
        key: 'id',
      },
    }
  }, {
    sequelize,
    modelName: 'UserBooks',
    tableName: 'userbooks',
  });

  return UserBooks;
};
