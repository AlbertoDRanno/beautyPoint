module.exports = (sequelize, DataTypes) => {
  let alias = 'User';
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING(50),
    },
    last_name: {
      type: DataTypes.STRING(50),
    },
    dni: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING(320),
    },
    genero: {
      type: DataTypes.TINYINT(1),
    },
    avatar: {
      type: DataTypes.STRING(400),
    },
    password: {
      type: DataTypes.STRING(400),
    } /*
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },*/,
  };
  let config = {
    tableName: 'users',
    timestamps: true,
  };

  const User = sequelize.define(alias, cols, config);

  //Cada vez que quiero hablar de una relación lo haré luego de define. Como una "asociación"
  User.associate = function (models) {
    // recibe todos los modelos que tenemos
    //aquí defino cómo son esas asociaciones:

    /* Pelicula.belongsTo(models.Generos, {
      // Muchos a 1
      //la película pertenece a un género que sale de los modelos./ Le digo con que tabla se relaciona
      as: "generos", // un alias para llamar la relación,
      foreignKey: "genre_id", // Cuál es la columna de la bbdd que une a éstas 2 tablas
    });*/

    User.belongsToMany(models.Product, {
      // Muchos a Muchos
      // 1er parámetro, el modelo al que asocio
      as: 'products', //alias
      through: 'cart', //el nombre de la tabla pivot que une ambos modelos
      foreignKey: 'user_id', //nombre de la columna en la tabla pivot, que hace referencia al modelo actual (Pelicula)
      otherKey: 'product_id', //nombre de la columna en la tabla pivot, que hace referencia al modelo con el que se conecta (Actores)
      timestamps: false, //False en caso de que, la tabla pivot, no tenga createdAt y updatedAt
    });
  };

  return User;
};
