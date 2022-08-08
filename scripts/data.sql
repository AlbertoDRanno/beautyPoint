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
(6, 'Presentacion de test 6', NULL, NULL, 1),
(7, 'Presentacion de test 7', NULL, NULL, 1),
(8, 'Presentacion de test 8', NULL, NULL, 1);
UNLOCK TABLES;

/* en proceso: users y products... */
/* INSERTS EN TABLA: users */
/* password default: '12345678' */
LOCK TABLES `users` WRITE;
INSERT INTO `users` (`id`, `first_name`, `last_name`, `dni`, `email`, `categoria`, `avatar`, `password`, `createdAt`, `updatedAt`, `status`, `phone`) VALUES
(1, 'Rick', 'Sanchez', 20123456, 'rick@laca.com.ar', 0, '/images/dataset/avatar_prueba_01.jpg', '$2a$10$RLvCG1TvBVfgc.tXaTdbVe/1wD7/mlk1dMPhhI.SIWOQYemmTteDG', NULL, NULL, 1, '1234-5678');
UNLOCK TABLES;

/* INSERTS EN TABLA: products */
LOCK TABLES `products` WRITE;
INSERT INTO `products`
(`id`, `name`, `price`, `description`, `discount`, `package_id`, `category_id`, `image`, `stock`, `createdAt`, `updatedAt`, `status`, `vendedor_id`) VALUES
(1, 'Dermopulido gel con extractos frutales', 1994, 'Microparticulas pulidoras para pulir todo tipo de piel', 0, 2, 1, '/images/dataset/producto_prueba_01.jpg', 1000, NULL, NULL, 1, 1),
(3,'Higrogel',2995,'Contiene una combinaciòn de fitoactivos antiage que favorecen la regeneraciòn de los tejidos',10.00,1,2,'/images/products/product-1659703427284.png',15,NULL,'2022-08-05 09:43:47',1,1),
(4,'Crema Humectante al aceite de Palta',3985,'Contiene una combinaciòn de fitoactivos antiage que favorecen la regeneraciòn de los tejidos',10.00,1,2,'/images/products/product-1659703498618.png',15,NULL,'2022-08-05 09:44:58',1,1),
(5,'Detox',3200,'Contiene una combinaciòn de fitoactivos antiage que favorecen la regeneraciòn de los tejidos',10.00,2,4,'/images/products/product-1659703970295.png',15,NULL,'2022-08-05 09:52:50',1,1),
(6,'Monodosis Reestructurantes',3265,'Contiene una combinaciòn de fitoactivos antiage que favorecen la regeneraciòn de los tejidos',10.00,1,1,'/images/products/product-1659649284579.png',15,NULL,'2022-08-04 18:41:24',1,1),
(7,'Bálsamo After Shave',3400,'Contiene una combinaciòn de fitoactivos antiage que favorecen la regeneraciòn de los tejidos',10.00,1,3,'/images/products/product-1659703721930.png',15,NULL,'2022-08-05 09:48:41',1,1),
(8,'Filler Diamond',4650,'Contiene una combinaciòn de fitoactivos antiage que favorecen la regeneraciòn de los tejidos',10.00,5,4,'/images/products/product-1659704057537.png',15,NULL,'2022-08-05 09:54:17',1,1),
(13,'Hialurón',4380,'Contiene una combinaciòn de fitoactivos antiage que favorecen la regeneraciòn de los tejidos',NULL,1,1,'/images/products/product-1659649428901.png',0,'2022-07-07 17:31:38','2022-08-04 18:43:48',1,1),
(16,'Piel Firm',3444,'Contiene una combinaciòn de fitoactivos antiage que favorecen la regeneraciòn de los tejidos',NULL,1,1,'/images/products/product-1659649482058.png',0,'2022-07-07 17:56:18','2022-08-04 18:44:42',1,1),
(18,'Restaurador Epidérmico',3620,'Contiene una combinaciòn de fitoactivos antiage que favorecen la regeneraciòn de los tejidos',NULL,1,1,'/images/products/product-1659649522073.png',0,'2022-07-07 17:57:11','2022-08-04 18:45:22',1,1),
(19,'Monodosis Descongestivas',555,'Contiene una combinaciòn de fitoactivos antiage que favorecen la regeneraciòn de los tejidos',NULL,2,1,'/images/products/product-1659649563473.png',0,'2022-07-26 23:19:19','2022-08-04 18:46:03',1,1),
(20,'Emulsión Herbal',2840,'Contiene una combinaciòn de fitoactivos antiage que favorecen la regeneraciòn de los tejidos',NULL,5,2,'/images/products/product-1659703599057.png',0,'2022-08-03 19:43:10','2022-08-05 09:46:39',1,1),
(25,'Celullar Diamond',4730,'Contiene una combinaciòn de fitoactivos antiage que favorecen la regeneraciòn de los tejidos',10.00,1,4,'/images/products/product-1659704193571.png',15,NULL,'2022-08-05 09:56:33',1,1),
(27,'Emulsión Energía Vital',3250,'Contiene una combinaciòn de fitoactivos antiage que favorecen la regeneraciòn de los tejidos',10.00,1,3,'/images/products/product-1659703763996.png',15,NULL,'2022-08-05 09:49:24',1,1),
(31,'Serum Reparador',2300,'Contiene una combinaciòn de fitoactivos antiage que favorecen la regeneraciòn de los tejidos',NULL,8,3,'/images/products/product-1659703876087.png',0,'2022-08-05 09:51:16','2022-08-05 09:51:16',1,1);

UNLOCK TABLES;
