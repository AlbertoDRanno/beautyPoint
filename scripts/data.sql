USE laca_db;

/* INSERTS EN TABLA: categories */
LOCK TABLES `categories` WRITE;
INSERT INTO `categories` (`id`, `description`, `createdAt`, `updatedAt`, `status`) VALUES
(1, 'Cuidados basicos', NULL, NULL, 1),
(2, 'Antiage', NULL, NULL, 1),
(3, 'Fragancias', NULL, NULL, 1),
(4, 'Renovacion celular', NULL, NULL, 1),
(5, 'Proteccion solar', NULL, NULL, 1),
(6, 'Linea sensorial', NULL, NULL, 1),
(7, 'Proteccion solar', NULL, NULL, 1),
(8, 'Corporales', NULL, NULL, 1),
(9, 'Linea teens', NULL, NULL, 1),
(10, 'Hidratacion', NULL, NULL, 1);
UNLOCK TABLES;

/* INSERTS EN TABLA: packages */
LOCK TABLES `packages` WRITE;
INSERT INTO `packages` (`id`, `description`, `createdAt`, `updatedAt`, `status`) VALUES
(1, 'Presentacion de test 1', NULL, NULL, 1),
(2, 'Presentacion de test 2', NULL, NULL, 1),
(3, 'Presentacion de test 3', NULL, NULL, 1),
(4, 'Presentacion de test 4', NULL, NULL, 1),
(5, 'Presentacion de test 5', NULL, NULL, 1),
(6, 'Presentacion de test 6', NULL, NULL, 1);
UNLOCK TABLES;

/* en proceso: users y products... */
/* INSERTS EN TABLA: users */
LOCK TABLES `users` WRITE;
INSERT INTO `users` (`id`, `first_name`, `last_name`, `dni`, `email`, `categoria`, `avatar`, `password`, `createdAt`, `updatedAt`, `status`, `phone`) VALUES
(1, 'Rick', 'Sanchez', 20123456, 'rick@laca.com.ar', 1, '/images/dataset/avatar_prueba_01.jpg', '$2a$10$RLvCG1TvBVfgc.tXaTdbVe/1wD7/mlk1dMPhhI.SIWOQYemmTteDG', NULL, NULL, 1, '1234-5678');
UNLOCK TABLES;

/* INSERTS EN TABLA: products */
LOCK TABLES `products` WRITE;
INSERT INTO `products`
(`id`, `name`, `price`, `description`, `discount`, `package_id`, `category_id`, `image`, `stock`, `createdAt`, `updatedAt`, `status`, `vendedor_id`) VALUES
(1, 'Dermopulido gel con extractos frutales', 1994, 'Microparticulas pulidoras para pulir todo tipo de piel', 0, 2, 1, '/images/dataset/producto_prueba_01.jpg', 1000, NULL, NULL, 1, 1);
UNLOCK TABLES;
