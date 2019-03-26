const faker = require('faker');
const type = ['Anti-inflammatory', 'Beautifying', 'Cleansing', 'Digestive Support',
              'Energizing','Immunity Boosting', 'Stress Relief', 'Workout Recovery'];

// helper function, which return a single benefitType randomily.
var generateBenefitType = () => {
  let random = Math.floor(Math.random() * 8);
  return type[random];
}
// mock data for Benefits Model(table)
var mockBenefits = function(){
  let tempArray = [];
  for (var i = 0; i < 7; i++) {
    var count = i + 1;
    tempArray.push({
      id: count,
      benefitType: type[i],
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }
  return tempArray;
}

// mock data for CurrentItem Model
var mockCurrentItem = () => {
  let tempArray = [];
  for (var i = 0; i < 100; i++) {
    count = i + 1;
    tempArray.push({
      id: count,
      itemName: faker.commerce.productName(),
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }
  return tempArray;
}
// mock data for itemBenefits Model
var mockItemBenefits = () => {
  let tempArray = [];
  for (var i = 0; i < 100; i++) {
    var count = i + 1;
    tempArray.push({
      id: count,
      benefitId: faker.random.number({
        'min': 1,
        'max': 100
      }),
      currentItemId: faker.random.number({
        'min': 1,
        'max': 100
      }),
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }
  return tempArray;
}

module.exports = {
  mockBenefits : mockBenefits,
  mockCurrentItem : mockCurrentItem,
  mockItemBenefits : mockItemBenefits
}

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



