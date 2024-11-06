'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('UserBooks', 'bookId', 'book_id')
    await queryInterface.renameColumn('UserBooks', 'userId', 'user_id')
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('UserBooks', 'book_id', 'bookId')
    await queryInterface.renameColumn('UserBooks', 'user_id', 'userId')
  }
};
