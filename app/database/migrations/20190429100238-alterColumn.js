'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('appointed_slots', ['id'], {
      type: 'foreign key',
      name: 'slot_id',
      references: {
        table: 'slots',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('appointed_slots', 'slot_id');
  }
};
