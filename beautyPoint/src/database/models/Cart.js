module.exports = (sequelize, DataTypes) => {
  let alias = "Cart";
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
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Product",
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    status: {
      type: DataTypes.INTEGER,
    },
  };
  let config = {
    tableName: "cart",
    timestamps: true,
  };

  const Cart = sequelize.define(alias, cols, config);

  //OJO!! ESTA TABLA ES INTERMEDIA. PARA EVITAR EL MUCHOS A MUCHOS
  Cart.associate = function (models) {
    // recibe todos los modelos que tenemos
    //aquí defino cómo son esas asociaciones
    Cart.belongsTo(models.Product, {
      // Product porque es el apodo de la tabla, que le puse en el modelo
      // belongsTo: un registro puede estar asociado a uno más de otra tabla 
      // un carrito puede contener uno o varios productos (1 a 1 ó 1 a N) (porque la relación, considera de a un carrito por registro)
      as: "productosCart", // un alias para llamar la relación,
      foreignKey: "product_id", // Cuál es la columna de la bbdd que une a éstas 2 tablas. No importa donde estamos parados
    });
    Cart.belongsTo(models.User, {
      // User porque es el apodo de la tabla, que le puse en el modelo
      // un registro de carrito va a pertenecer a un solo usuario. (1 a 1)
      as: "userCart", // un alias para llamar la relación,
      foreignKey: "comprador_id", // Cuál es la columna de la bbdd que une a éstas 2 tablas. No importa donde estamos parados
    });
  };

  return Cart;
};