
// model for Benefits table
module.exports = (db, DataTypes) => {
  const Benefits = db.define('benefits', {
    benefitType: {
      type: DataTypes.STRING
    }
  })
  Benefits.associate = (models) => {
    // many to many relationship to currentItem table
    // Benefits.belongsToMany(models.CurrentItem, {
    //   through: 'itemBenefits',
    //   foreignKey: 'benefitType',
    //   constraints: false
    // })
    // Benefits.hasMany(models.ItemBenefits, {
    //   foreignKey: 'benefitsId',
    // });
  }
  return Benefits;
}