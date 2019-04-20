const express = require('express');
const app = express();
const path = require('path');
const db = require('./database/model/index');
const port = require('./config.js').port;
// var config = require('./config/config.js/index.js');

// console.log(config);
console.log('this is database ', db);
app.use('/', express.static(path.join(__dirname, './dist')));

app.get('/items', (req, res) => {
  db.CurrentItem.findAll()
  .then((data) => {
    res.json(data[0]);
  })
})

app.get('/images', (req, res) => {
  db.Images.findAll()
  .then((data) => {
    res.json(data[0]);
  })
})

app.get('/benefits', (req, res) => {
  db.Benefits.findAll()
  .then((data) => {
    res.json(data[0]);
  })
})

app.get('/item-benefits', (req, res) => {
  db.ItemBenefits.findAll()
  .then((data) => {
    res.json(data[0]);
  })
})

app.listen(port, (err, data) => {
  if (err) {
    console.log("error in connecting port", err);
  } else {
    console.log('listening from port', port);
  }
})