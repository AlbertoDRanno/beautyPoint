CREATE DATABASE `laca_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `description` varchar(50) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `packages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `description` varchar(50) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `dni` int(10) unsigned NOT NULL,
  `email` varchar(320) NOT NULL,
  `categoria` tinyint(1) NOT NULL DEFAULT 0,
  `avatar` varchar(400) NOT NULL,
  `password` varchar(400) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  `phone` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `price` float unsigned NOT NULL,
  `description` text NOT NULL,
  `discount` decimal(4,2) unsigned DEFAULT NULL,
  `package_id` int(10) unsigned NOT NULL,
  `category_id` int(10) unsigned NOT NULL,
  `image` varchar(50) NOT NULL,
  `stock` decimal(7,0) unsigned NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  `vendedor_id` int(10) unsigned NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `fk_productCategory_idx` (`category_id`),
  KEY `fk_productPackage_idx` (`package_id`),
  KEY `fk_productVendedor_idx` (`vendedor_id`),
  CONSTRAINT `fk_productCategory` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `fk_productPackage` FOREIGN KEY (`package_id`) REFERENCES `packages` (`id`),
  CONSTRAINT `fk_productVendedor` FOREIGN KEY (`vendedor_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `cart` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `comprador_id` int(10) unsigned NOT NULL,
  `product_id` int(10) unsigned NOT NULL,
  `quantity` decimal(7,0) unsigned NOT NULL,
  `price` float NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_productCart_idx` (`product_id`),
  KEY `fk_userCart_idx` (`comprador_id`),
  CONSTRAINT `fk_productCart` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `fk_userCart` FOREIGN KEY (`comprador_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE `product_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `price` float unsigned DEFAULT NULL,
  `quantity` smallint(5) unsigned DEFAULT NULL,
  `buy_history_id` int(11) unsigned DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_buy_product_history_idx` (`buy_history_id`),
  CONSTRAINT `fk_buy_product_history` FOREIGN KEY (`buy_history_id`) REFERENCES `buy_history` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
CREATE TABLE `buy_history` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `comprador_id` int(10) unsigned NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_history_buy_idx` (`comprador_id`),
  CONSTRAINT `fk_history_buy` FOREIGN KEY (`comprador_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;


