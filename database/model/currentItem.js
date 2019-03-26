// model for CurrentItem table
module.exports = (db, DataTypes) => {
  const CurrentItem = db.define('currentItem', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    itemName: {
      type: DataTypes.STRING
      // unique: true
    }
  })
  CurrentItem.associate = (models) => {
    // one to many relationship to Images table
    CurrentItem.hasMany(models.Images, {
      foreignKey: 'itemId'
    });
    // many to many relationship to CurrentItem table
    // CurrentItem.belongsToMany(models.Benefits, {
    //   through: 'itemBenefits',
    //   foreignKey: 'itemId',
    //   constraints: false,
    //   unique: false
    // })
    CurrentItem.hasMany(models.ItemBenefits);
  }

  return CurrentItem;
}