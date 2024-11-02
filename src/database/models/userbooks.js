'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserBooks extends Model {
    static associate(models) {
      // Não há necessidade de definir associações diretas aqui, pois elas já estão nos modelos Book e User
    }
  }

  UserBooks.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    bookId: {
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
    timestamps: false, // Desative timestamps para tabela intermediária
  });

  return UserBooks;
};
