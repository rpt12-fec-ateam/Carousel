var mysql = require('mysql');
var connection = mysql.createConnection({
  user: 'root',
  password: ''
});

const Sequelize = require('sequelize');
const sequelize = new Sequelize('dailyharvest', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const db = {
  // sequelize has 'import' method to import model from the other file
  ItemBenefits: sequelize.import('./itemBenefits'),
  CurrentItem: sequelize.import('./currentItem'),
  Images: sequelize.import('./images'),
  Benefits: sequelize.import('./benefitsType')
}
// below responsible for association of each models
Object.keys(db).forEach((modelName)=> {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
})
// this will sync the database
// ##note##
// added force property to delete existing db, and will remove in future
connection.query('CREATE DATABASE IF NOT EXISTS dailyharvest1', (error, data)=> {
  if (error) {
    console.log("Failing at database creation", error);
  } else {
    sequelize.sync();
  }
})

module.exports = db;


