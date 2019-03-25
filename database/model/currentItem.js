// model for CurrentItem table
module.exports = (db, DataTypes) => {
  const CurrentItem = db.define('currentItem', {
    itemName: DataTypes.STRING
  })
  CurrentItem.associate = (models) => {
    // one to many relationship to Images table
    CurrentItem.hasMany(models.Images, {
      foreignKey: 'itemId'
    });
    // many to many relationship to CurrentItem table
    CurrentItem.belongsToMany(models.Benefits, {
      through: 'itemBenefits',
      foreignKey: 'itemId'
    })
  }

  return CurrentItem;
}