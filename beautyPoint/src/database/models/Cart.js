module.exports = (sequelize, DataTypes) => {
  let cols = {};

  let config = {
    tableName: 'cart',
    timestamps: true,
  };

  const Cart = sequelize.define('Cart', cols, config);

  return Cart;
};
