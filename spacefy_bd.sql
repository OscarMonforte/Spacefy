-- MySQL Administrator dump 1.4
--
-- ------------------------------------------------------
-- Server version	5.0.45-community-nt


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


--
-- Create schema bd_comunidad
--

CREATE DATABASE IF NOT EXISTS bd_comunidad;
USE bd_comunidad;

--
-- Definition of table `booking`
--

DROP TABLE IF EXISTS `booking`;
CREATE TABLE `booking` (
  `idBooking` int(10) unsigned NOT NULL auto_increment,
  `idUser` int(10) unsigned NOT NULL,
  `idSpace` int(10) unsigned NOT NULL,
  `dateBooked` datetime NOT NULL,
  `dateRequest` datetime NOT NULL,
  PRIMARY KEY  (`idBooking`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `booking`
--

/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` (`idBooking`,`idUser`,`idSpace`,`dateBooked`,`dateRequest`) VALUES 
 (46,3,2,'2018-12-05 12:00:00','2019-07-05 18:20:20'),
 (60,3,2,'2019-07-05 09:00:00','2019-07-05 19:18:50'),
 (62,3,1,'2019-07-05 09:00:00','2019-07-05 19:19:20'),
 (63,3,2,'2019-07-05 13:00:00','2019-07-05 19:19:40'),
 (64,3,2,'2019-07-05 10:00:00','2019-07-05 19:20:24');
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;


--
-- Definition of table `community`
--

DROP TABLE IF EXISTS `community`;
CREATE TABLE `community` (
  `idCommunity` int(10) unsigned NOT NULL auto_increment,
  `idTypeComm` varchar(45) NOT NULL,
  `nameComm` varchar(45) NOT NULL,
  `streetAddress` varchar(45) NOT NULL,
  `numAddress` int(10) unsigned NOT NULL,
  `postalCode` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `bankAccountComm` varchar(45) NOT NULL,
  PRIMARY KEY  (`idCommunity`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `community`
--

/*!40000 ALTER TABLE `community` DISABLE KEYS */;
INSERT INTO `community` (`idCommunity`,`idTypeComm`,`nameComm`,`streetAddress`,`numAddress`,`postalCode`,`city`,`country`,`bankAccountComm`) VALUES 
 (1,'1','CP Reinosa 55','Calle Reinosa',55,'28010','Madrid','España','ES4531004536890600456372');
/*!40000 ALTER TABLE `community` ENABLE KEYS */;


--
-- Definition of table `spacescomm`
--

DROP TABLE IF EXISTS `spacescomm`;
CREATE TABLE `spacescomm` (
  `idSpace` int(10) unsigned NOT NULL auto_increment,
  `idTypeSpace` int(10) unsigned NOT NULL,
  `nameSpace` varchar(45) NOT NULL,
  `description` varchar(90) NOT NULL,
  `idCommunity` int(10) unsigned NOT NULL,
  `escrow` double NOT NULL,
  `rules` varchar(45) NOT NULL,
  PRIMARY KEY  (`idSpace`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `spacescomm`
--

/*!40000 ALTER TABLE `spacescomm` DISABLE KEYS */;
INSERT INTO `spacescomm` (`idSpace`,`idTypeSpace`,`nameSpace`,`description`,`idCommunity`,`escrow`,`rules`) VALUES 
 (1,1,'Sala Comunitaria Edificio Reinosa','Local en planta baja del edificio para uso de los residentes',1,60,'5'),
 (2,2,'Padel Bloque Norte','Pista de padel bloque Norte para uso de los residentes y autorizados',1,3,'1'),
 (3,2,'Padel Bloque Sur','Pista de padel bloque Sur para uso de los residentes y autorizados',1,3,'1');
/*!40000 ALTER TABLE `spacescomm` ENABLE KEYS */;


--
-- Definition of table `typecommunity`
--

DROP TABLE IF EXISTS `typecommunity`;
CREATE TABLE `typecommunity` (
  `idTypeComm` int(10) unsigned NOT NULL auto_increment,
  `nameTypeComm` varchar(45) NOT NULL,
  PRIMARY KEY  (`idTypeComm`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `typecommunity`
--

/*!40000 ALTER TABLE `typecommunity` DISABLE KEYS */;
INSERT INTO `typecommunity` (`idTypeComm`,`nameTypeComm`) VALUES 
 (1,'Comunidad Proietarios uso Privado'),
 (2,'Club Deportivo'),
 (3,'Centro Cultural'),
 (4,'Conservatorio');
/*!40000 ALTER TABLE `typecommunity` ENABLE KEYS */;


--
-- Definition of table `typespace`
--

DROP TABLE IF EXISTS `typespace`;
CREATE TABLE `typespace` (
  `idTypeSpace` int(10) unsigned NOT NULL auto_increment,
  `nameTypeSpace` varchar(45) NOT NULL,
  `use` varchar(45) NOT NULL,
  PRIMARY KEY  (`idTypeSpace`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `typespace`
--

/*!40000 ALTER TABLE `typespace` DISABLE KEYS */;
INSERT INTO `typespace` (`idTypeSpace`,`nameTypeSpace`,`use`) VALUES 
 (1,'Sala Comunitaria ','Social'),
 (2,'Pista Padel','Deportivo'),
 (3,'Garaje','Parking'),
 (4,'Piscina','Deportivo');
/*!40000 ALTER TABLE `typespace` ENABLE KEYS */;


--
-- Definition of table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `idUser` int(10) unsigned NOT NULL auto_increment,
  `idCommunity` int(10) unsigned NOT NULL,
  `idTypeUser` char(1) NOT NULL,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `dni` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `bankAccountUser` varchar(45) NOT NULL,
  `phone` int(10) unsigned NOT NULL,
  PRIMARY KEY  (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`idUser`,`idCommunity`,`idTypeUser`,`firstName`,`lastName`,`dni`,`email`,`password`,`bankAccountUser`,`phone`) VALUES 
 (1,1,'A','Carlos','Perez','23567349Y','c.perez@administracion.com','1234','ES7821006785892341676453',912203040),
 (2,1,'A','Rafael','Lopez','45785990A','r.lopez@administracion.com','1234','ES7821006785892341676453',912203040),
 (3,1,'C','Pepe','Gutierrez','2222','root@root.es','1234','9876543219',1111),
 (4,1,'C','Manuel','Serra','05564821T','m.serra@gmail.com','1234','ES7821006785892341676453',654321320),
 (5,1,'C','Cristina ','Rodriguez','23456123J','c.rodriguez@gmail.com','1234','ES7821006785892341676453',652987190),
 (6,1,'C','Rosa','Flor','08359774F','r.flor@gmail.com','1234','ES7821006785892341676453',609231553),
 (7,1,'C','Eloy','Terrasa','40787655P','e.terrasa@gmail.com','1234','ES7821006785892341676453',620886633),
 (8,1,'C','José','Lucas','21855332L','j.lucas@gmail.com','1234','ES7821006785892341676453',664893751),
 (9,1,'C','Noelia','Sanchez','45377830K','n.sanchez@gmail.com','1234','ES7821006785892341676453',687443225),
 (10,1,'C','Marcos','Muñoz','38788234N','m.munoz@gmail.com','1234','ES7821006785892341676453',692111670),
 (11,1,'C','Oscar','Monforte','16539000D','o.monforte@gmail.com','1234','ES7821006785892341676453',681479032),
 (12,1,'C','Pilar','Denia','5567833F','p.denia@gmail.com','1234','ES7821006785892341676453',644339873);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;




/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
