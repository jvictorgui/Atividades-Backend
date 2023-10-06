'use strict';
/** @type { import('sequelize-cli').Migration } */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('books', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      author: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      pageQuantity: { // Use snake_case here
        type: Sequelize.INTEGER, // Adjust column name as needed
        allowNull: false,
        field: 'page_quantity'
      },
      createdAt: { // Use snake_case here
        type: Sequelize.DATE, // Adjust column name as needed
        allowNull: false,
        defaultValue: Sequelize.NOW,
        field: 'created_at'
      },
      updatedAt: { // Use snake_case here
        type: Sequelize.DATE, // Adjust column name as needed
        allowNull: false,
        defaultValue: Sequelize.NOW,
        field: 'updated_at'
      },
    }, {
      underscored: true, // Define underscored: true para a tabela
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('books');
  }
};
