'use strict';
const mockItemBenefits = require('../script/dummyData').mockItemBenefits;

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   let dummyData = mockItemBenefits();
  //  console.log(dummyData);
   return queryInterface.bulkInsert('itemBenefits', dummyData, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('itemBenefits', null, {});
  }
};
