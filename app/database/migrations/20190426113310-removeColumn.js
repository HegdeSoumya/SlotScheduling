'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('slots', 'slot_id');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('slots', 'slot_id', {
      type: Sequelize.INTEGER
    });
  }
};
