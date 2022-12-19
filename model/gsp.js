module.exports = (sequelize, Sequelize) => {
  const GSP = sequelize.define(
    "GSPs",
    {
      id: { type: Sequelize.INTEGER, primaryKey: true, allowNull: false },
      NBO_Number: { type: Sequelize.STRING },
      Program: { type: Sequelize.STRING },
      Production_Brand: { type: Sequelize.STRING },
      Product_Line: { type: Sequelize.STRING },
      LPA_SOP: { type: Sequelize.STRING },
      COP: { type: Sequelize.BOOLEAN, allowNull: true },
      Base_Product: { type: Sequelize.STRING },
      OEM_Engineering_Region: { type: Sequelize.STRING },
      EOP: { type: Sequelize.DATE },
    },
    {
      modelName: "GSPs",
      freezeTableName: true,
    }
  );
  return GSP;
};
