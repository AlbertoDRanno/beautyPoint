module.exports = (sequelize, DataTypes) => {
    let alias = "ProductHistory";
    let cols = {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(50),
      },
     
      quantity: {
        type: DataTypes.SMALLINT,
      },
      price: {
        type: DataTypes.FLOAT,
      },
      buy_history_id: {
        type: DataTypes.INTEGER,
        references: {
            
            model: "BuyHistory",
            key: "id",
          },
      },
      description: {
        type: DataTypes.TEXT,
      },
 
 
 
    };
    let config = {
      tableName: "product_history",
      timestamps: true,
    };
  
    const ProductHistory = sequelize.define(alias, cols, config);
  
  
  
    return ProductHistory;
  };