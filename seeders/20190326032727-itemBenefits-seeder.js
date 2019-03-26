'use strict';
const mockItemBenefits = require('../script/dummyData').mockItemBenefits;

module.exports = {
  up: (queryInterface, Sequelize) => {

   let dummyData = mockItemBenefits();
  //  console.log(dummyData);
   return queryInterface.bulkInsert('itemBenefits', dummyData, {});
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('itemBenefits', null, {});
  }
};
