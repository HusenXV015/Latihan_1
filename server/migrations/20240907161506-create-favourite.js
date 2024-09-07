'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Favourites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      heroId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          models: "Heros",
          key: "id"
        },
        onUpdated: "CASCADE",
        onDeleted: "CASCADE"
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          models: "Users",
          key: "id"
        },
        onUpdated: "CASCADE",
        onDeleted: "CASCADE"
      },
      role: {
        type: Sequelize.STRING
      },
      power: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Favourites');
  }
};