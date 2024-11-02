'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Atualiza todos os usuários para `active: true`
    await queryInterface.bulkUpdate('users', { active: true }, { active: NULL });
  },

  down: async (queryInterface, Sequelize) => {
    // Reverte a atualização, definindo `active` como null
    await queryInterface.bulkUpdate('users', { active: NULL }, { active: true });
  }
};
