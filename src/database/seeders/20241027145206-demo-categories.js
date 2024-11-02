'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('categories', [
      {
        title: 'Romance',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Policial',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Terror',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
