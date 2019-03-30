const express = require('express');
const app = express();
const path = require('path');
const db = require('./database/model/index')

console.log('this is database ', db);
app.use('/', express.static(path.join(__dirname, './dist')));

const port = 3000;

app.get('/items', (req, res) => {
  db.CurrentItem.findAll()
  .then((data) => {
    res.json(data);
  })
})

app.get('/images', (req, res) => {
  db.Images.findAll()
  .then((data) => {
    res.json(data);
  })
})

app.get('/benefits', (req, res) => {
  db.Benefits.findAll()
  .then((data) => {
    res.json(data);
  })
})

app.get('/item-benefits', (req, res) => {
  db.ItemBenefits.findAll()
  .then((data) => {
    res.json(data);
  })
})

app.listen(port, () => {
  console.log('listening from port', port);
})