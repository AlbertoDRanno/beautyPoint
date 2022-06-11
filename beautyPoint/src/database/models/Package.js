module.exports = (sequelize, DataTypes) => {
  let alias = 'Package';
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
    tableName: 'packages',
    timestamps: true,
  };

  const Package = sequelize.define(alias, cols, config);

  /* PENDIENTE: agregar la relacion con modelo Product */

  return Package;
};
