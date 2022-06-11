module.exports = (sequelize, DataTypes) => {
  let alias = 'Product';
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
    },
    price: {
      type: DataTypes.FLOAT,
    },
    discount: {
      type: DataTypes.FLOAT,
    },
    package_id: {
      type: DataTypes.INTEGER,
    },
    category_id: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING(50),
    },
    stock: {
      type: DataTypes.INTEGER,
    } /*
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },*/,
  };
  let config = {
    tableName: 'products',
    timestamps: true,
  };

  const Product = sequelize.define(alias, cols, config);

  //Cada vez que quiero hablar de una relación lo haré luego de define. Como una "asociación"
  Product.associate = function (models) {
    // recibe todos los modelos que tenemos
    //aquí defino cómo son esas asociaciones:

    /*Pelicula.belongsTo(models.Generos, {
      // Muchos a 1
      //la película pertenece a un género que sale de los modelos./ Le digo con que tabla se relaciona
      as: "generos", // un alias para llamar la relación,
      foreignKey: "genre_id", // Cuál es la columna de la bbdd que une a éstas 2 tablas
    });*/

    Product.belongsToMany(models.User, {
      // Muchos a Muchos  // 1er parámetro, el modelo al que asocio
      as: 'users', //alias
      through: 'cart', //el nombre de la tabla pivot que une ambos modelos
      foreignKey: 'product_id', //nombre de la columna en la tabla pivot, que hace referencia al modelo actual (Product)
      otherKey: 'user_id', //nombre de la columna en la tabla pivot, que hace referencia al modelo con el que se conecta (User)
      timestamps: false, //False en caso de que, la tabla pivot, no tenga createdAt y updatedAt
    });
  };

  return Product;
};
