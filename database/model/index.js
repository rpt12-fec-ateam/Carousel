<<<<<<< HEAD
var mysql = require('mysql');
var connection = mysql.createConnection({
  user: 'root',
  password: ''
});

=======
const env = require('../../config.js');
>>>>>>> refactor with env in database, server, and config.js
const Sequelize = require('sequelize');
const mysql = require('mysql');

var connection = mysql.createConnection({
  user: env.db_username,
  password: env.db_pwd
});

const sequelize = new Sequelize(env.db, env.db_username, env.db_pwd, {
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


connection.query('CREATE DATABASE IF NOT EXISTS dailyharvest', (error, data)=> {
  if (error) {
    console.log("Failing at database creation", error);
  } else {
    if (data.warningCount == 0) {
      sequelize.sync();
    }
  }
})

module.exports = db;


