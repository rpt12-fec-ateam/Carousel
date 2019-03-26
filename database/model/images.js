//model for Images table
module.exports = (db, DataTypes) => {
  const Images = db.define('images', {
    url: DataTypes.STRING,
  })
  return Images;
}