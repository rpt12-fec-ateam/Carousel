'use strict';
const mockBenefits = require('../script/dummyData').mockBenefits;
// console.log(mockBenefits());
module.exports = {
  up: (queryInterface, Sequelize) => {
   let mockData = mockBenefits();
   return queryInterface.bulkInsert('benefits', mockData, {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      run 'sequelize db:seed:undo:all' to revert all seeds
    */
   return queryInterface.bulkDelete('benefits', null, {});
  }
};
