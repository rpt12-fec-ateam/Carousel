
// model for Benefits table
module.exports = (db, DataTypes) => {
  const Benefits = db.define('benefits', {
    benefitType: {
      type: DataTypes.STRING,
      primaryKey: true
    }
  })
  Benefits.associate = (models) => {
    // many to many relationship to currentItem table
    Benefits.belongsToMany(models.CurrentItem, {
      through: 'itemBenefits',
      foreignKey: 'benefitType'
    })
  }
  return Benefits;
}