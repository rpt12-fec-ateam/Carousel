const dotenv = require('dotenv');
dotenv.config();

module.exports =  {
  db: process.env.DB_Name,
  db_pwd: process.env.DB_Password,
  db_username: process.env.DB_Username,
  port: process.env.PORT
}