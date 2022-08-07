USE laca_db;

/* INSERTS EN TABLA: categories */;
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