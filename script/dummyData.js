const faker = require('faker');

var generateBenefitType = () => {
  const type = ['Anti-inflammatory', 'Beautifying', 'Cleansing', 'Digestive Support',
                'Energizing','Immunity Boosting', 'Stress Relief', 'Workout Recovery'];
  let random = Math.floor(Math.random() * 8);
  return type[random];
}
// mock data for Benefits Model(table)
var mockBenefits = function(){
  let tempArray = [];
  for (var i = 0; i < 100; i++) {
    tempArray.push({
      benefitType: generateBenefitType(),
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }
  return tempArray;
}
// console.log(faker.commerce.productAdjective());

var mockCurrentItem = () => {
  let tempArray = [];
  for (var i = 0; i < 100; i++) {
    tempArray.push({
      benefitType: faker.commerce.product(),
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }
  return tempArray;
}
// console.log(mockCurrentItem());

module.exports.mockBenefits = mockBenefits;

/*
  keyBenefits

  Anti-inflammatory
  Beautifying
  Cleansing
  Digestive Support
  Energizing
  Immunity Boosting
  Stress Relief
  Workout Recovery
*/



