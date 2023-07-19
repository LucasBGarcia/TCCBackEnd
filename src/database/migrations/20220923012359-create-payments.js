'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      PaymentMethod_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'PaymentMethods', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      machine_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'Machines', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Payments');
  }
};
