module.exports = (sequelize, DataTypes) => {
    let alias = "BuyHistory";
    let cols = {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      comprador_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
 
    };
    let config = {
      tableName: "buy_history",
      timestamps: true,
    };
  
    const BuyHistory = sequelize.define(alias, cols, config);
    BuyHistory.associate = function (models) {
    BuyHistory.hasMany (models.ProductHistory, {as:"products"})
    }
    return BuyHistory;
  };