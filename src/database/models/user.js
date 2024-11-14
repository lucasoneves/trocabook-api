'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Book, {
        through: models.UserBooks,
        foreignKey: 'user_id',
        as: 'books'
      });
    }
  }

  User.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email is invalid'
        }
      }
    },
    cpf: DataTypes.STRING,
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    paranoid: true,
    defaultScope: {
      where: {
        active: true,
      }
    },
    scopes: {
      allRegisters: { where: {} }
    }
  });

  return User;
};
