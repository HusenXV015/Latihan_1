'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const favourite = require(`../Favorite.json`)
    favourite.forEach(e =>{
      e.updatedAt = e.createdAt = new Date()
    })
    await queryInterface.bulkInsert(`Favourites`, favourite, {})
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.BulkDelete(`Favourites`, null, {})
  }
};
