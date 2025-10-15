'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'John',
        email: 'john@example.com',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'auzan',
        email: 'auzan@example.com',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'jane',
        email: 'jane@example.com',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
