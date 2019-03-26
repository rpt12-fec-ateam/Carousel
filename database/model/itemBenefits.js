// model for CurrentItem table
module.exports = (db, DataTypes) => {
  const itemBenefits = db.define('itemBenefits', {
    benefitsId: DataTypes.STRING,
    itemId: DataTypes.INTEGER
  });

  return itemBenefits;
}