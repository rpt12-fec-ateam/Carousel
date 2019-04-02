const faker = require('faker');
const aws = require('aws-sdk');
const s3 = new aws.S3();
// var config = require('../config');

const type = ['Anti-inflammatory', 'Beautifying', 'Cleansing', 'Digestive Support',
              'Energizing','Immunity Boosting', 'Stress Relief', 'Workout Recovery'];

const images = ['https://s3.amazonaws.com/dailyharvest.images/images/image-1ncreased-1Shk_PkNkNw.jpg',
'https://s3.amazonaws.com/dailyharvest.images/images/image-alexischloe-tDcOX3rOC_M.jpg',
'https://s3.amazonaws.com/dailyharvest.images/images/image-christine_siracusa-bypcCMcIoVE.jpg'];

// helper function, which return a single benefitType randomily.
var generateBenefitType = () => {
  let random = Math.floor(Math.random() * 8);
  return type[random];
}
// mock data for Benefits Model(table)
var mockBenefits = function(){
  let tempArray = [];
  let benefitTypeArray = [];
  benefitTypeArray.push(generateBenefitType());
  benefitTypeArray.push(generateBenefitType());
  benefitTypeArray.push(generateBenefitType());

  for (var i = 0; i < 7; i++) {
    var count = i + 1;
    tempArray.push({
      id: count,
      benefitType: JSON.stringify(benefitTypeArray),
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
      benefitsId: faker.random.number({
        'min': 1,
        'max': 100
      }),
      itemId: faker.random.number({
        'min': 1,
        'max': 100
      }),
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }
  return tempArray;
}

var mockImages = () => {
  let tempArray = [];
  var imageString = JSON.stringify(images);
  for (var i = 0; i < 100; i++) {
    var count = i + 1;
    tempArray.push({
      id: count,
      url: imageString,
      itemId: faker.random.number({
        'min': 1,
        'max': 100
      }),
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }
  return tempArray;
}

// s3.config.update({
//   accessKeyId: config.accessKeyId,
//   secretAccessKey: config.secretAccessKey,
//   region: config.region
// });
// var param = {
//   Bucket: "dailyharvest.images",
//   MaxKeys: 4
// }
// var test = function(i, callback) {
//   return function() {
//     return callback(i);
//   }
// };
// s3.listObjectsV2(param, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     test = data;
//     console.log(data);
//   }
// })
// console.log(test);




module.exports = {
  mockBenefits : mockBenefits,
  mockCurrentItem : mockCurrentItem,
  mockItemBenefits : mockItemBenefits,
  mockImages: mockImages
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



