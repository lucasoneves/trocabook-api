'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('books', [
      {
        title: 'Morte',
        description: '',
        pages: 203,
        category_id: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'A Hora da Estrela',
        description: '',
        pages: 123,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
