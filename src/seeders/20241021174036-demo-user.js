'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Lucas',
        email: 'lucas@example.com',
        password: 'senhaSegura123',
        cpf: '123.456.789-00', // Exemplo de CPF
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Maria',
        email: 'maria@example.com',
        password: 'senhaSegura456',
        cpf: '987.654.321-00', // Exemplo de CPF
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'João',
        email: 'joao@example.com',
        password: 'senhaSegura789',
        cpf: '456.789.123-00', // Exemplo de CPF,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
