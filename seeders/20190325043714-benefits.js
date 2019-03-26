'use strict';
var {mockBenefits} = require('../script/dummyData')
// console.log(mockBenefits());
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
   var data = mockBenefits();
  //  var test = [{
  //   benefitType: 'testing1',
  //   createdAt: new Date(),
  //   updatedAt: new Date()
  // }];
   return queryInterface.bulkInsert('benefits', data, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
