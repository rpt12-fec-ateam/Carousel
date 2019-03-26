'use strict';
const mockCurrentItems = require('../script/dummyData').mockCurrentItem;
// console.log(mockCurrentItems());
module.exports = {
  up: (queryInterface, Sequelize) => {
   let dummyData = mockCurrentItems();
   return queryInterface.bulkInsert('currentItems', dummyData, {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('currentItems', null, {});
  }
};
