'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hero = require(`../heroes.json`)
    hero.forEach(e => {
      e.updatedAt = e.createdAt = new Date()
    })
    await queryInterface.bulkInsert("Heros", hero, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Heros", null, {})
  }
};
