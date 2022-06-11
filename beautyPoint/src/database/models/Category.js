module.exports = (sequelize, DataTypes) => {
  let alias = 'Category';
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
    tableName: 'categories',
    timestamps: true,
  };

  const Category = sequelize.define(alias, cols, config);

  /* PENDIENTE: agregar la relacion con modelo Product */

  return Category;
};
