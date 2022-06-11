module.exports = (sequelize, DataTypes) => {
  let cols = {};

  let config = {
    tableName: 'publications',
    timestamps: true,
  };

  const Publication = sequelize.define('Publication', cols, config);

  return Publication;
};
