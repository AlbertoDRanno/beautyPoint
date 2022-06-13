module.exports = (sequelize, DataTypes) => {
  let alias = "Category";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING(50),
    } /*
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },*/,
  };
  let config = {
    tableName: "categories",
    timestamps: true,
  };

  const Category = sequelize.define(alias, cols, config);

  Category.associate = function (models) {
    // recibe todos los modelos que tenemos
    //aquí defino cómo son esas asociaciones
    Category.hasMany(models.Product, {
      // 1 a Muchos
      //una categoría tiene muchos productos./ Le digo con que tabla se relaciona
      as: "productos", // un alias para llamar la relación,
      foreignKey: "category_id", // Cuál es la columna de la bbdd que une a éstas 2 tablas
    });
  };

  return Category;
};
