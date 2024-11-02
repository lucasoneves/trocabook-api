'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Books', 'name', 'title')
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Books', 'title', 'name')
  }
};
