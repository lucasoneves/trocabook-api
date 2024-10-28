'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const userId = 1;
    const bookId = 1;

    await queryInterface.bulkInsert('UserBooks', [
      {
        user_id: userId,
        book_id: bookId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Remove a associação específica na tabela UserBooks
    await queryInterface.bulkDelete('UserBooks', {
      user_id: 1, // ID do usuário
      book_id: 1, // ID do livro que foi adicionado
    });
  },
};
