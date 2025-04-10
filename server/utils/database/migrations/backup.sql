-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: aps
-- ------------------------------------------------------
-- Server version	11.1.2-MariaDB-1:11.1.2+maria~ubu2204

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `aceptacionaceptada`
--

DROP TABLE IF EXISTS `aceptacionaceptada`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aceptacionaceptada` (
  `idNotificacion` int(11) NOT NULL,
  `idPartenariado` int(11) NOT NULL,
  `idNotificacionAceptada` int(11) NOT NULL,
  PRIMARY KEY (`idNotificacion`),
  KEY `aceptacionaceptada_ibfk_2` (`idPartenariado`),
  CONSTRAINT `aceptacionaceptada_ibfk_1` FOREIGN KEY (`idNotificacion`) REFERENCES `notificaciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `aceptacionaceptada_ibfk_2` FOREIGN KEY (`idPartenariado`) REFERENCES `partenariado` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aceptacionaceptada`
--

LOCK TABLES `aceptacionaceptada` WRITE;
/*!40000 ALTER TABLE `aceptacionaceptada` DISABLE KEYS */;
INSERT INTO `aceptacionaceptada` VALUES (1,1,1),(2,2,2),(3,3,3);
/*!40000 ALTER TABLE `aceptacionaceptada` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `aceptacionrechazado`
--

DROP TABLE IF EXISTS `aceptacionrechazado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aceptacionrechazado` (
  `idNotificacion` int(11) NOT NULL,
  `idNotificacionOferta` int(11) NOT NULL,
  PRIMARY KEY (`idNotificacion`,`idNotificacionOferta`),
  KEY `aceptacionrechazado_ibfk_2` (`idNotificacionOferta`),
  CONSTRAINT `aceptacionrechazado_ibfk_1` FOREIGN KEY (`idNotificacion`) REFERENCES `notificaciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `aceptacionrechazado_ibfk_2` FOREIGN KEY (`idNotificacionOferta`) REFERENCES `ofertaaceptada` (`idNotificacion`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aceptacionrechazado`
--

LOCK TABLES `aceptacionrechazado` WRITE;
/*!40000 ALTER TABLE `aceptacionrechazado` DISABLE KEYS */;
INSERT INTO `aceptacionrechazado` VALUES (1,1),(2,2),(2,3);
/*!40000 ALTER TABLE `aceptacionrechazado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `datos_personales_Id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_datos_interno` (`datos_personales_Id`),
  CONSTRAINT `FKEY_Admin` FOREIGN KEY (`id`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_datos_interno` FOREIGN KEY (`datos_personales_Id`) REFERENCES `datos_personales_interno` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `anuncio_servicio`
--

DROP TABLE IF EXISTS `anuncio_servicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `anuncio_servicio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(200) NOT NULL,
  `descripcion` varchar(1200) NOT NULL,
  `imagen` varchar(200) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `dummy` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `anuncio_servicio`
--

LOCK TABLES `anuncio_servicio` WRITE;
/*!40000 ALTER TABLE `anuncio_servicio` DISABLE KEYS */;
INSERT INTO `anuncio_servicio` VALUES (1,'Servicio de Dise├▒o Gr├ífico','Ofrecemos dise├▒o gr├ífico profesional para empresas y emprendedores.','prueba1.jpg','2025-03-27 17:38:44','2025-03-27 17:38:44',0),(2,'Consultor├¡a en Marketing Digital','Asesoramos en estrategias digitales para potenciar tu negocio en redes sociales.','prueba2.jpg','2025-03-27 17:38:44','2025-03-27 17:38:44',0),(3,'Desarrollo de Aplicaciones Web','Creamos aplicaciones web a medida con las ├║ltimas tecnolog├¡as.','prueba3.jpg','2025-03-27 17:38:44','2025-03-27 17:38:44',0);
/*!40000 ALTER TABLE `anuncio_servicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `area_conocimiento`
--

DROP TABLE IF EXISTS `area_conocimiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `area_conocimiento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=191 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area_conocimiento`
--

LOCK TABLES `area_conocimiento` WRITE;
/*!40000 ALTER TABLE `area_conocimiento` DISABLE KEYS */;
INSERT INTO `area_conocimiento` VALUES (1,'Programacion'),(2,'Calculo'),(3,'Algebra');
/*!40000 ALTER TABLE `area_conocimiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `area_servicio`
--

DROP TABLE IF EXISTS `area_servicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `area_servicio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area_servicio`
--

LOCK TABLES `area_servicio` WRITE;
/*!40000 ALTER TABLE `area_servicio` DISABLE KEYS */;
INSERT INTO `area_servicio` VALUES (1,'Programacion'),(2,'Calculo'),(3,'Algebra');
/*!40000 ALTER TABLE `area_servicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `areaconocimiento_profesor`
--

DROP TABLE IF EXISTS `areaconocimiento_profesor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `areaconocimiento_profesor` (
  `id_area` int(11) NOT NULL,
  `id_profesor` int(11) NOT NULL,
  PRIMARY KEY (`id_area`,`id_profesor`) USING BTREE,
  CONSTRAINT `area_conoc` FOREIGN KEY (`id_area`) REFERENCES `area_conocimiento` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `areaconocimiento_profesor`
--

LOCK TABLES `areaconocimiento_profesor` WRITE;
/*!40000 ALTER TABLE `areaconocimiento_profesor` DISABLE KEYS */;
INSERT INTO `areaconocimiento_profesor` VALUES (1,1),(1,140),(1,146),(1,148),(1,149),(1,150),(2,2),(2,140),(2,146),(2,147),(3,3),(3,140),(3,146);
/*!40000 ALTER TABLE `areaconocimiento_profesor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `areaservicio_anuncioservicio`
--

DROP TABLE IF EXISTS `areaservicio_anuncioservicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `areaservicio_anuncioservicio` (
  `id_area` int(11) NOT NULL,
  `id_anuncio` int(11) NOT NULL,
  PRIMARY KEY (`id_area`,`id_anuncio`),
  KEY `area_servicio-anuncio_servicio_ibfk_1` (`id_anuncio`),
  CONSTRAINT `area_servicio` FOREIGN KEY (`id_area`) REFERENCES `area_servicio` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `area_servicio-anuncio_servicio_ibfk_1` FOREIGN KEY (`id_anuncio`) REFERENCES `anuncio_servicio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `areaservicio_anuncioservicio`
--

LOCK TABLES `areaservicio_anuncioservicio` WRITE;
/*!40000 ALTER TABLE `areaservicio_anuncioservicio` DISABLE KEYS */;
INSERT INTO `areaservicio_anuncioservicio` VALUES (1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `areaservicio_anuncioservicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `areaservicio_iniciativa`
--

DROP TABLE IF EXISTS `areaservicio_iniciativa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `areaservicio_iniciativa` (
  `id_area` int(11) NOT NULL,
  `id_iniciativa` int(11) NOT NULL,
  PRIMARY KEY (`id_area`,`id_iniciativa`),
  KEY `area_servicio-iniciativa_ibfk_2` (`id_iniciativa`),
  CONSTRAINT `area_servicio-iniciativa_ibfk_1` FOREIGN KEY (`id_area`) REFERENCES `area_servicio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `area_servicio-iniciativa_ibfk_2` FOREIGN KEY (`id_iniciativa`) REFERENCES `iniciativa` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `areaservicio_iniciativa`
--

LOCK TABLES `areaservicio_iniciativa` WRITE;
/*!40000 ALTER TABLE `areaservicio_iniciativa` DISABLE KEYS */;
INSERT INTO `areaservicio_iniciativa` VALUES (1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `areaservicio_iniciativa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asignatura`
--

DROP TABLE IF EXISTS `asignatura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asignatura` (
  `id_oferta` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  KEY `id_oferta` (`id_oferta`),
  CONSTRAINT `asignatura_ibfk_1` FOREIGN KEY (`id_oferta`) REFERENCES `oferta_servicio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asignatura`
--

LOCK TABLES `asignatura` WRITE;
/*!40000 ALTER TABLE `asignatura` DISABLE KEYS */;
INSERT INTO `asignatura` VALUES (1,'ASOR'),(2,'TP'),(3,'FAL'),(1,'FAL'),(2,'TP'),(3,'ASOR'),(1,'FAL'),(2,'TP'),(3,'ASOR'),(1,'FAL'),(2,'TP'),(3,'ASOR');
/*!40000 ALTER TABLE `asignatura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache`
--

LOCK TABLES `cache` WRITE;
/*!40000 ALTER TABLE `cache` DISABLE KEYS */;
INSERT INTO `cache` VALUES ('homepage_cache','<html><body>Contenido en cach├®</body></html>',1743098924),('site_settings','{\"theme\":\"dark\",\"language\":\"es\"}',1743701924),('user_123_token','{\"token\":\"abcdef123456\",\"expires_in\":3600}',1743100724);
/*!40000 ALTER TABLE `cache` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache_locks`
--

DROP TABLE IF EXISTS `cache_locks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache_locks`
--

LOCK TABLES `cache_locks` WRITE;
/*!40000 ALTER TABLE `cache_locks` DISABLE KEYS */;
INSERT INTO `cache_locks` VALUES ('lock_process_1','system',1743097724),('lock_process_2','user_123',1743097424),('lock_process_3','admin',1743098024);
/*!40000 ALTER TABLE `cache_locks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colaboracion`
--

DROP TABLE IF EXISTS `colaboracion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colaboracion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(200) NOT NULL,
  `descripcion` varchar(1200) NOT NULL,
  `imagen` varchar(200) DEFAULT NULL,
  `admite_externos` tinyint(1) NOT NULL DEFAULT 0,
  `responsable` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `responsable` (`responsable`) USING BTREE,
  CONSTRAINT `colaboracion_ibfk_1` FOREIGN KEY (`responsable`) REFERENCES `profesor` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colaboracion`
--

LOCK TABLES `colaboracion` WRITE;
/*!40000 ALTER TABLE `colaboracion` DISABLE KEYS */;
INSERT INTO `colaboracion` VALUES (1,'Titulo1','Descripcion1','prueba1.jpg',0,1),(2,'Titulo2','Descripcion2','prueba2.jpg',0,2),(3,'Titulo3','Descripcion3','prueba3.jpg',0,3);
/*!40000 ALTER TABLE `colaboracion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colaborador`
--

DROP TABLE IF EXISTS `colaborador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colaborador` (
  `id` int(11) NOT NULL,
  `universidad` int(11) NOT NULL,
  `facultad` varchar(200) NOT NULL,
  `datos_personales_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colaborador`
--

LOCK TABLES `colaborador` WRITE;
/*!40000 ALTER TABLE `colaborador` DISABLE KEYS */;
/*!40000 ALTER TABLE `colaborador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `datos_personales_externo`
--

DROP TABLE IF EXISTS `datos_personales_externo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `datos_personales_externo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `correo` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `apellidos` varchar(200) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `telefono` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_i` (`correo`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datos_personales_externo`
--

LOCK TABLES `datos_personales_externo` WRITE;
/*!40000 ALTER TABLE `datos_personales_externo` DISABLE KEYS */;
INSERT INTO `datos_personales_externo` VALUES (1,'ejemplo1@ejemplo.com','1234','Apellido1 Apellido2','Nombre1',123456789),(2,'ejemplo2@ejemplo.com','1234','Apellido3 Apellido2','Nombre1',223456789),(3,'ejemplo3@ejemplo.com','1234','Apellido3 Apellido3','Nombre1',323456789),(30,'alumno1@escuela.com','$2a$10$qocuwzfgC2B2t8b0lJq22uRRb1ak3ivfeVXBBh2DkK2sl6ulY4zhO','P├®rez','Carlos',600123456),(31,'alumno2@escuela.com','$2a$10$CFFghAdwzmQW3XcACWVQ6OJC9yYem.LG6kvD67kYQSeQ2cDqbxt0.','L├│pez','Ana',600123457),(32,'alumno3@escuela.com','$2a$10$jZp6JsiIHkc8PZpLrGzdQ.XMdN9x9zd/Gb.j/XxdOE9D9NFKpGFQK','Mart├¡nez','Carlos',600123458),(33,'alumno4@escuela.com','$2a$10$uXDpe8dotEww7h2gkPZgg.mwcAQEnVP3xS1Xi47Zc9DNXKAdlnwxm','Garc├¡a','Lucia',600123459),(34,'alumno5@escuela.com','$2a$10$SoVSiZwKkOHLmJDo7THPZ.Gpm1FO3cXudrgtZ0b.NGUyTkDxPAhKK','Fern├índez','Pedro',600123450),(35,'profesor1@escuela.com','$2a$10$mk0eTl3QncyP.1iGMme0Jeiyl4UJgAMCcR1Uo8kGuX6fKB1aQ2Igq','Gonz├ílez','Mar├¡a',601123456),(36,'profesor2@escuela.com','$2a$10$CCq1vpH6hyUly3mjdKS2ZO15byB9.n6g7IbWd.E5Lr3rVzqdf1QZq','Ruiz','Javier',601123457),(37,'profesor3@escuela.com','$2a$10$Xq8/Oo1NsWBdsEmFVuY3dObWTxYyGyy53dPU9X4l2clBM1McePntK','D├¡az','Laura',601123458),(38,'profesor4@escuela.com','$2a$10$4yRmZw6J0kx4K0EiO4NhM.9K31CArXDDVmqnT9rx9R3hgmssz8JP2','Hern├índez','Sergio',601123459),(39,'profesor5@escuela.com','$2a$10$b898Sv8JVgO5tlbLNwod0unqSBEPdg0nTuus14F7CCGCNFhydaKpu','Jim├®nez','Elena',601123450),(40,'socio1@ejemplo.com','$2a$10$AxlaWMUCLNLlvGbpXjxP0O4xcli5We37lYDrX0mlR0R3e/OmO/RfG','P├®rez','Mar├¡aa',600123456),(41,'socio2@ejemplo.com','$2a$10$aEjRD.eqfAjjcfzjDhDdBOYHV0JVzSsr0bIkb.L6TVvorjpxI448q','G├│mez','Juan',600123457),(42,'socio3@ejemplo.com','$2a$10$/LXWu1P3ldZe4n62lIkMA.66RitiiEnMekeU.8DOwZT88qfZGY2k2','Torres','Carlos',600123458),(43,'socio4@ejemplo.com','$2a$10$IsBUQaOp8LRaY24HZU/aouIpTAB1FikVhgiNkXy1Yo.ds.jSbk2Im','Ram├¡rez','Andr├®s',600123459),(44,'socio5@ejemplo.com','$2a$10$/Uy0uu5dNG129J3eQFhhGeuGvFFdo16SZoGzc/C7He77.Yh33cf7C','Ruiz','Laura',600123450);
/*!40000 ALTER TABLE `datos_personales_externo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `datos_personales_interno`
--

DROP TABLE IF EXISTS `datos_personales_interno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `datos_personales_interno` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `correo` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `apellidos` varchar(200) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `telefono` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniqu` (`correo`)
) ENGINE=InnoDB AUTO_INCREMENT=119 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datos_personales_interno`
--

LOCK TABLES `datos_personales_interno` WRITE;
/*!40000 ALTER TABLE `datos_personales_interno` DISABLE KEYS */;
INSERT INTO `datos_personales_interno` VALUES (1,'ejemploo1@ejemplo.com','1234','Apellido1 Apellido1','Nombre1',123456789),(2,'ejemploo2@ejemplo.com','1234','Apellido2 Apellid2','Nombre1',223456789),(3,'ejemploo3@ejemplo.com','1234','Apellido3 Apellido3','Nombree3',323456789);
/*!40000 ALTER TABLE `datos_personales_interno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `demanda_servicio`
--

DROP TABLE IF EXISTS `demanda_servicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `demanda_servicio` (
  `id` int(11) NOT NULL,
  `creador` int(11) NOT NULL,
  `ciudad` varchar(200) NOT NULL,
  `finalidad` varchar(200) NOT NULL,
  `periodo_definicion_ini` date DEFAULT NULL,
  `periodo_definicion_fin` date DEFAULT NULL,
  `periodo_ejecucion_ini` date DEFAULT NULL,
  `periodo_ejecucion_fin` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `observaciones_temporales` varchar(1200) DEFAULT NULL,
  `necesidad_social` int(11) NOT NULL,
  `comunidad_beneficiaria` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `creador` (`creador`) USING BTREE,
  KEY `necesidad_social` (`necesidad_social`) USING BTREE,
  CONSTRAINT `demanda_anuncio` FOREIGN KEY (`id`) REFERENCES `anuncio_servicio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `demanda_servicio_ibfk_1` FOREIGN KEY (`necesidad_social`) REFERENCES `necesidad_social` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `demanda_servicio_ibfk_2` FOREIGN KEY (`creador`) REFERENCES `socio_comunitario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `demanda_servicio`
--

LOCK TABLES `demanda_servicio` WRITE;
/*!40000 ALTER TABLE `demanda_servicio` DISABLE KEYS */;
INSERT INTO `demanda_servicio` VALUES (1,1,'Madrid','Apoyo educativo para ni├▒os desfavorecidos','2025-02-25','2025-04-26','2025-03-12','2025-04-16','2025-04-28','Se necesita disponibilidad por las tardes',1,'Ni├▒os en situaci├│n de vulnerabilidad BAJA'),(2,2,'Madrid','Apoyo educativo para ni├▒os superdotados','2025-02-25','2025-04-26','2025-03-12','2025-04-16','2025-04-28','Se necesita disponibilidad por las ma├▒anas',2,'Ni├▒os en situaci├│n de vulnerabilidad MEDIA'),(3,3,'Madrid','Apoyo educativo para ni├▒os en adolescencia','2025-02-25','2025-04-26','2025-03-12','2025-04-16','2025-04-28','Se necesita disponibilidad por las noches',3,'Ni├▒os en situaci├│n de vulnerabilidad ALTA');
/*!40000 ALTER TABLE `demanda_servicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `demandarespalda`
--

DROP TABLE IF EXISTS `demandarespalda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `demandarespalda` (
  `idNotificacion` int(11) NOT NULL,
  `idPartenariado` int(11) NOT NULL,
  PRIMARY KEY (`idNotificacion`),
  KEY `demandarespalda_ibfk_2` (`idPartenariado`),
  CONSTRAINT `demandarespalda_ibfk_1` FOREIGN KEY (`idNotificacion`) REFERENCES `notificaciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `demandarespalda_ibfk_2` FOREIGN KEY (`idPartenariado`) REFERENCES `partenariado` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `demandarespalda`
--

LOCK TABLES `demandarespalda` WRITE;
/*!40000 ALTER TABLE `demandarespalda` DISABLE KEYS */;
INSERT INTO `demandarespalda` VALUES (1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `demandarespalda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudiante`
--

DROP TABLE IF EXISTS `estudiante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estudiante` (
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `FKEY_Estudiante` FOREIGN KEY (`id`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudiante`
--

LOCK TABLES `estudiante` WRITE;
/*!40000 ALTER TABLE `estudiante` DISABLE KEYS */;
INSERT INTO `estudiante` VALUES (1),(2),(3),(139),(141),(142),(143),(144),(145);
/*!40000 ALTER TABLE `estudiante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudiante_externo`
--

DROP TABLE IF EXISTS `estudiante_externo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estudiante_externo` (
  `id` int(11) NOT NULL,
  `universidad` int(11) NOT NULL,
  `titulacion` varchar(200) NOT NULL,
  `datos_personales_Id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `universidad` (`universidad`) USING BTREE,
  KEY `FK_datos_p_e` (`datos_personales_Id`),
  CONSTRAINT `FKEY_Estudiante_externo` FOREIGN KEY (`id`) REFERENCES `estudiante` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_datos_p_e` FOREIGN KEY (`datos_personales_Id`) REFERENCES `datos_personales_externo` (`id`),
  CONSTRAINT `est_uni` FOREIGN KEY (`universidad`) REFERENCES `universidad` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudiante_externo`
--

LOCK TABLES `estudiante_externo` WRITE;
/*!40000 ALTER TABLE `estudiante_externo` DISABLE KEYS */;
INSERT INTO `estudiante_externo` VALUES (1,1,'Ingenieria Informatica',1),(2,2,'ADE',2),(3,3,'Ingenieria Quimica',3),(139,1,'INFORMATICA',28),(141,1,'Grado en Derecho',30),(142,2,'Quimica',31),(143,3,'Fisica',32),(144,1,'Psicolog├¡a',33),(145,2,'ADE',34);
/*!40000 ALTER TABLE `estudiante_externo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudiante_interno`
--

DROP TABLE IF EXISTS `estudiante_interno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estudiante_interno` (
  `id` int(11) NOT NULL,
  `titulacion_local` int(11) NOT NULL,
  `datos_personales_Id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_datos_p_interno2` (`datos_personales_Id`),
  KEY `FK_est_int` (`titulacion_local`),
  CONSTRAINT `FKEY_Estudiante_interno` FOREIGN KEY (`id`) REFERENCES `estudiante` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_datos_p_interno2` FOREIGN KEY (`datos_personales_Id`) REFERENCES `datos_personales_interno` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_est_int` FOREIGN KEY (`titulacion_local`) REFERENCES `titulacion_local` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudiante_interno`
--

LOCK TABLES `estudiante_interno` WRITE;
/*!40000 ALTER TABLE `estudiante_interno` DISABLE KEYS */;
INSERT INTO `estudiante_interno` VALUES (1,1,1),(2,2,2),(3,3,3);
/*!40000 ALTER TABLE `estudiante_interno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudiante_proyecto`
--

DROP TABLE IF EXISTS `estudiante_proyecto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estudiante_proyecto` (
  `id_estudiante` int(11) NOT NULL,
  `id_proyecto` int(11) NOT NULL,
  PRIMARY KEY (`id_estudiante`,`id_proyecto`),
  KEY `id_proyecto` (`id_proyecto`),
  CONSTRAINT `estudiante_proyecto_ibfk_1` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiante` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `estudiante_proyecto_ibfk_2` FOREIGN KEY (`id_proyecto`) REFERENCES `proyecto` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudiante_proyecto`
--

LOCK TABLES `estudiante_proyecto` WRITE;
/*!40000 ALTER TABLE `estudiante_proyecto` DISABLE KEYS */;
INSERT INTO `estudiante_proyecto` VALUES (1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `estudiante_proyecto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
INSERT INTO `failed_jobs` VALUES (1,'1','','','','','2025-03-27 17:38:44'),(2,'2','','','','','2025-03-27 17:38:44'),(3,'3','','','','','2025-03-27 17:38:44');
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `iniciativa`
--

DROP TABLE IF EXISTS `iniciativa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `iniciativa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(200) NOT NULL,
  `descripcion` varchar(1200) NOT NULL,
  `id_estudiante` int(11) NOT NULL,
  `id_demanda` int(11) DEFAULT NULL,
  `necesidad_social` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_demanda` (`id_demanda`) USING BTREE,
  KEY `id_estudiante` (`id_estudiante`) USING BTREE,
  KEY `necesidad_social` (`necesidad_social`) USING BTREE,
  CONSTRAINT `iniciativa_ibfk_1` FOREIGN KEY (`necesidad_social`) REFERENCES `necesidad_social` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `iniciativa_ibfk_2` FOREIGN KEY (`id_demanda`) REFERENCES `demanda_servicio` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `iniciativa_ibfk_3` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiante` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `iniciativa`
--

LOCK TABLES `iniciativa` WRITE;
/*!40000 ALTER TABLE `iniciativa` DISABLE KEYS */;
INSERT INTO `iniciativa` VALUES (1,'Ingenieria informatica','Descripcion1',1,1,1),(2,'Ingenieria quimica','Descripcion2',2,2,2),(3,'ADE','Descripcion3',3,3,3);
/*!40000 ALTER TABLE `iniciativa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_batches`
--

DROP TABLE IF EXISTS `job_batches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_batches`
--

LOCK TABLES `job_batches` WRITE;
/*!40000 ALTER TABLE `job_batches` DISABLE KEYS */;
INSERT INTO `job_batches` VALUES ('1','name1',1,1,1,'fail1','',1,1,1),('2','name2',2,2,2,'fail2','',2,2,2),('3','name3',3,3,3,'fail1','',3,3,3);
/*!40000 ALTER TABLE `job_batches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) unsigned NOT NULL,
  `reserved_at` int(10) unsigned DEFAULT NULL,
  `available_at` int(10) unsigned NOT NULL,
  `created_at` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
INSERT INTO `jobs` VALUES (1,'','',0,1,1,1),(2,'','',0,2,2,2),(3,'','',0,3,3,3);
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knex_migrations`
--

DROP TABLE IF EXISTS `knex_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `knex_migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knex_migrations`
--

LOCK TABLES `knex_migrations` WRITE;
/*!40000 ALTER TABLE `knex_migrations` DISABLE KEYS */;
/*!40000 ALTER TABLE `knex_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knex_migrations_lock`
--

DROP TABLE IF EXISTS `knex_migrations_lock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `knex_migrations_lock` (
  `index` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `is_locked` int(11) DEFAULT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knex_migrations_lock`
--

LOCK TABLES `knex_migrations_lock` WRITE;
/*!40000 ALTER TABLE `knex_migrations_lock` DISABLE KEYS */;
INSERT INTO `knex_migrations_lock` VALUES (1,0);
/*!40000 ALTER TABLE `knex_migrations_lock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mail`
--

DROP TABLE IF EXISTS `mail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mail_to` varchar(200) NOT NULL,
  `type` varchar(200) NOT NULL,
  `mail_name` varchar(200) NOT NULL,
  `mail_from` varchar(200) NOT NULL,
  `subject` varchar(1200) NOT NULL,
  `html` varchar(1200) NOT NULL,
  `_to` varchar(200) NOT NULL,
  `usuario` varchar(200) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mail`
--

LOCK TABLES `mail` WRITE;
/*!40000 ALTER TABLE `mail` DISABLE KEYS */;
INSERT INTO `mail` VALUES (1,'pepito@email.com','','','','','','','pepe','2025-03-12 17:38:44','2025-03-14 17:38:44'),(2,'pepito1@email.com','','','','','','','luis','2025-03-14 17:38:44','2025-03-16 17:38:44'),(3,'pepito2@email.com','','','','','','','oscar','2025-03-16 17:38:44','2025-03-18 17:38:44');
/*!40000 ALTER TABLE `mail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matching`
--

DROP TABLE IF EXISTS `matching`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `matching` (
  `id_oferta` int(11) NOT NULL,
  `id_demanda` int(11) NOT NULL,
  `procesado` tinyint(1) NOT NULL,
  `emparejamiento` decimal(5,2) NOT NULL,
  PRIMARY KEY (`id_oferta`,`id_demanda`),
  KEY `id_demanda` (`id_demanda`),
  KEY `id_oferta` (`id_oferta`),
  CONSTRAINT `matching_ibfk_1` FOREIGN KEY (`id_demanda`) REFERENCES `demanda_servicio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `matching_ibfk_2` FOREIGN KEY (`id_oferta`) REFERENCES `oferta_servicio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matching`
--

LOCK TABLES `matching` WRITE;
/*!40000 ALTER TABLE `matching` DISABLE KEYS */;
INSERT INTO `matching` VALUES (1,1,0,0.00),(2,2,1,2.00),(3,3,0,6.00);
/*!40000 ALTER TABLE `matching` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matching_areas`
--

DROP TABLE IF EXISTS `matching_areas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `matching_areas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `area_conocimiento` varchar(200) NOT NULL,
  `area_servicio` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=473 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matching_areas`
--

LOCK TABLES `matching_areas` WRITE;
/*!40000 ALTER TABLE `matching_areas` DISABLE KEYS */;
INSERT INTO `matching_areas` VALUES (1,'',''),(2,'',''),(3,'','');
/*!40000 ALTER TABLE `matching_areas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matching_areaservicio_titulacion`
--

DROP TABLE IF EXISTS `matching_areaservicio_titulacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `matching_areaservicio_titulacion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `area_servicio` varchar(200) NOT NULL,
  `titulacion` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=328 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matching_areaservicio_titulacion`
--

LOCK TABLES `matching_areaservicio_titulacion` WRITE;
/*!40000 ALTER TABLE `matching_areaservicio_titulacion` DISABLE KEYS */;
INSERT INTO `matching_areaservicio_titulacion` VALUES (1,'ECONOMIA','ADE'),(2,'INDUSTRIA','Industria├▒es'),(3,'ARQUITECTURA','Arquitectura');
/*!40000 ALTER TABLE `matching_areaservicio_titulacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mensaje`
--

DROP TABLE IF EXISTS `mensaje`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mensaje` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `texto` varchar(1200) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `usuario` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario` (`usuario`),
  CONSTRAINT `mensaje_ibfk_1` FOREIGN KEY (`usuario`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mensaje`
--

LOCK TABLES `mensaje` WRITE;
/*!40000 ALTER TABLE `mensaje` DISABLE KEYS */;
INSERT INTO `mensaje` VALUES (1,'nombre','2025-03-22 17:38:44',1),(2,'nombre1','2025-03-20 17:38:44',2),(3,'nombre2','2025-03-16 17:38:44',3);
/*!40000 ALTER TABLE `mensaje` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mensaje_anuncioservicio`
--

DROP TABLE IF EXISTS `mensaje_anuncioservicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mensaje_anuncioservicio` (
  `id_mensaje` int(11) NOT NULL,
  `id_anuncio` int(11) NOT NULL,
  PRIMARY KEY (`id_mensaje`,`id_anuncio`),
  KEY `id_anuncio` (`id_anuncio`),
  CONSTRAINT `mensaje_anuncioservicio_ibfk_1` FOREIGN KEY (`id_anuncio`) REFERENCES `anuncio_servicio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `mensaje_anuncioservicio_ibfk_2` FOREIGN KEY (`id_mensaje`) REFERENCES `mensaje` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mensaje_anuncioservicio`
--

LOCK TABLES `mensaje_anuncioservicio` WRITE;
/*!40000 ALTER TABLE `mensaje_anuncioservicio` DISABLE KEYS */;
INSERT INTO `mensaje_anuncioservicio` VALUES (1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `mensaje_anuncioservicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mensaje_colaboracion`
--

DROP TABLE IF EXISTS `mensaje_colaboracion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mensaje_colaboracion` (
  `id_mensaje` int(11) NOT NULL,
  `id_colaboracion` int(11) NOT NULL,
  PRIMARY KEY (`id_mensaje`,`id_colaboracion`),
  KEY `id_colaboracion` (`id_colaboracion`),
  CONSTRAINT `mensaje_colaboracion_ibfk_1` FOREIGN KEY (`id_colaboracion`) REFERENCES `colaboracion` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `mensaje_colaboracion_ibfk_2` FOREIGN KEY (`id_mensaje`) REFERENCES `mensaje` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mensaje_colaboracion`
--

LOCK TABLES `mensaje_colaboracion` WRITE;
/*!40000 ALTER TABLE `mensaje_colaboracion` DISABLE KEYS */;
INSERT INTO `mensaje_colaboracion` VALUES (1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `mensaje_colaboracion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'nombre',1),(2,'nombre',2),(3,'nombre',3);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `necesidad_social`
--

DROP TABLE IF EXISTS `necesidad_social`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `necesidad_social` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `necesidad_social`
--

LOCK TABLES `necesidad_social` WRITE;
/*!40000 ALTER TABLE `necesidad_social` DISABLE KEYS */;
INSERT INTO `necesidad_social` VALUES (1,'nombre'),(2,'nombre2'),(3,'nombre3');
/*!40000 ALTER TABLE `necesidad_social` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `newsletter`
--

DROP TABLE IF EXISTS `newsletter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `newsletter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mail_to` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `newsletter_unique_mail_to` (`mail_to`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `newsletter`
--

LOCK TABLES `newsletter` WRITE;
/*!40000 ALTER TABLE `newsletter` DISABLE KEYS */;
INSERT INTO `newsletter` VALUES (1,'nombre','2025-03-27 17:38:44','2025-03-27 17:38:44'),(2,'nombre1','2025-03-27 17:38:44','2025-03-27 17:38:44'),(3,'nombre2','2025-03-27 17:38:44','2025-03-27 17:38:44'),(4,'dragosic12@gmail.com','2025-03-12 19:26:02','2025-03-12 19:26:02');
/*!40000 ALTER TABLE `newsletter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notas`
--

DROP TABLE IF EXISTS `notas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_estudiante` int(11) NOT NULL,
  `id_proyecto` int(11) NOT NULL,
  `nota` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_estudiante` (`id_estudiante`) USING BTREE,
  KEY `proyecto_notas` (`id_proyecto`) USING BTREE,
  CONSTRAINT `FKEY_Estudiante_notas` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiante` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FKEY_proyecto_notas` FOREIGN KEY (`id_proyecto`) REFERENCES `proyecto` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notas`
--

LOCK TABLES `notas` WRITE;
/*!40000 ALTER TABLE `notas` DISABLE KEYS */;
INSERT INTO `notas` VALUES (1,1,1,7),(2,2,2,4),(3,3,3,5);
/*!40000 ALTER TABLE `notas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notificaciones`
--

DROP TABLE IF EXISTS `notificaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notificaciones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idDestino` int(11) NOT NULL,
  `leido` tinyint(1) NOT NULL DEFAULT 0,
  `titulo` varchar(200) NOT NULL,
  `mensaje` varchar(1200) NOT NULL,
  `fecha_fin` date NOT NULL DEFAULT '2023-10-17',
  `pendiente` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `notificaciones_ibfk_1` (`idDestino`),
  CONSTRAINT `notificaciones_ibfk_1` FOREIGN KEY (`idDestino`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=200 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notificaciones`
--

LOCK TABLES `notificaciones` WRITE;
/*!40000 ALTER TABLE `notificaciones` DISABLE KEYS */;
INSERT INTO `notificaciones` VALUES (1,1,0,'Bienvenido','Mensaje de bienvenida','2025-07-31',1),(2,2,0,'Bienvenido','Mensaje de bienvenida','2025-12-31',1),(3,3,0,'Bienvenido','Mensaje de bienvenida','2025-12-31',1);
/*!40000 ALTER TABLE `notificaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notificacionmatching`
--

DROP TABLE IF EXISTS `notificacionmatching`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notificacionmatching` (
  `idNotificacion` int(11) NOT NULL,
  `idOferta` int(11) NOT NULL,
  `idDemanda` int(11) NOT NULL,
  PRIMARY KEY (`idNotificacion`),
  KEY `notificacionmatching_ibfk_2` (`idOferta`),
  KEY `notificacionmatching_ibfk_3` (`idDemanda`),
  CONSTRAINT `notificacionmatching_ibfk_1` FOREIGN KEY (`idNotificacion`) REFERENCES `notificaciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `notificacionmatching_ibfk_2` FOREIGN KEY (`idOferta`) REFERENCES `matching` (`id_oferta`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `notificacionmatching_ibfk_3` FOREIGN KEY (`idDemanda`) REFERENCES `matching` (`id_demanda`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notificacionmatching`
--

LOCK TABLES `notificacionmatching` WRITE;
/*!40000 ALTER TABLE `notificacionmatching` DISABLE KEYS */;
INSERT INTO `notificacionmatching` VALUES (1,1,1),(2,2,2),(3,3,3);
/*!40000 ALTER TABLE `notificacionmatching` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oferta_demanda_tags`
--

DROP TABLE IF EXISTS `oferta_demanda_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oferta_demanda_tags` (
  `object_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL,
  `tipo` varchar(8) NOT NULL,
  PRIMARY KEY (`object_id`,`tag_id`,`tipo`),
  KEY `tag_id_fg` (`tag_id`),
  CONSTRAINT `tag_id_fg` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oferta_demanda_tags`
--

LOCK TABLES `oferta_demanda_tags` WRITE;
/*!40000 ALTER TABLE `oferta_demanda_tags` DISABLE KEYS */;
INSERT INTO `oferta_demanda_tags` VALUES (1,1,''),(2,2,''),(3,3,'');
/*!40000 ALTER TABLE `oferta_demanda_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oferta_servicio`
--

DROP TABLE IF EXISTS `oferta_servicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oferta_servicio` (
  `id` int(11) NOT NULL,
  `cuatrimestre` int(11) DEFAULT NULL,
  `anio_academico` int(11) DEFAULT NULL,
  `fecha_limite` date DEFAULT NULL,
  `observaciones_temporales` varchar(1200) DEFAULT NULL,
  `creador` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `creador` (`creador`) USING BTREE,
  CONSTRAINT `oferta-anuncio` FOREIGN KEY (`id`) REFERENCES `anuncio_servicio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `oferta_servicio_creator_fk` FOREIGN KEY (`creador`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oferta_servicio`
--

LOCK TABLES `oferta_servicio` WRITE;
/*!40000 ALTER TABLE `oferta_servicio` DISABLE KEYS */;
INSERT INTO `oferta_servicio` VALUES (1,2,3,'2025-04-26','ninguna',1),(2,2,3,'2025-04-26','ninguna',2),(3,1,3,'2025-04-26','ninguna',2);
/*!40000 ALTER TABLE `oferta_servicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ofertaaceptada`
--

DROP TABLE IF EXISTS `ofertaaceptada`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ofertaaceptada` (
  `idNotificacion` int(11) NOT NULL,
  `idOferta` int(11) NOT NULL,
  `idSocio` int(11) NOT NULL,
  PRIMARY KEY (`idNotificacion`,`idOferta`),
  KEY `ofertaaceptada_ibfk_2` (`idOferta`),
  CONSTRAINT `ofertaaceptada_ibfk_1` FOREIGN KEY (`idNotificacion`) REFERENCES `notificaciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ofertaaceptada_ibfk_2` FOREIGN KEY (`idOferta`) REFERENCES `oferta_servicio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ofertaaceptada`
--

LOCK TABLES `ofertaaceptada` WRITE;
/*!40000 ALTER TABLE `ofertaaceptada` DISABLE KEYS */;
INSERT INTO `ofertaaceptada` VALUES (1,2,2),(2,2,2),(3,3,3);
/*!40000 ALTER TABLE `ofertaaceptada` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oficinaaps`
--

DROP TABLE IF EXISTS `oficinaaps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oficinaaps` (
  `id` int(11) NOT NULL,
  `datos_personales_Id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_datos_inter` (`datos_personales_Id`),
  CONSTRAINT `FKEY_Oficina` FOREIGN KEY (`id`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_datos_inter` FOREIGN KEY (`datos_personales_Id`) REFERENCES `datos_personales_interno` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oficinaaps`
--

LOCK TABLES `oficinaaps` WRITE;
/*!40000 ALTER TABLE `oficinaaps` DISABLE KEYS */;
INSERT INTO `oficinaaps` VALUES (1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `oficinaaps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partenariado`
--

DROP TABLE IF EXISTS `partenariado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partenariado` (
  `id` int(11) NOT NULL,
  `id_demanda` int(11) DEFAULT NULL,
  `id_oferta` int(11) NOT NULL,
  `estado` enum('EN_NEGOCIACION','ACORDADO','SUSPENDIDO','EN_CREACION') NOT NULL DEFAULT 'EN_CREACION',
  PRIMARY KEY (`id`),
  KEY `id_demanda` (`id_demanda`) USING BTREE,
  KEY `id_oferta` (`id_oferta`) USING BTREE,
  CONSTRAINT `partenariado-colaboracion` FOREIGN KEY (`id`) REFERENCES `colaboracion` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `partenariado-demanda` FOREIGN KEY (`id_demanda`) REFERENCES `demanda_servicio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `partenariado-oferta` FOREIGN KEY (`id_oferta`) REFERENCES `oferta_servicio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partenariado`
--

LOCK TABLES `partenariado` WRITE;
/*!40000 ALTER TABLE `partenariado` DISABLE KEYS */;
INSERT INTO `partenariado` VALUES (1,2,3,'EN_CREACION'),(2,1,1,'EN_CREACION'),(3,3,2,'EN_CREACION');
/*!40000 ALTER TABLE `partenariado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partenariadorellenado`
--

DROP TABLE IF EXISTS `partenariadorellenado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partenariadorellenado` (
  `idNotificacion` int(11) NOT NULL,
  `idPartenariado` int(11) NOT NULL,
  PRIMARY KEY (`idNotificacion`),
  KEY `partenariadorellenado_ibfk_2` (`idPartenariado`),
  CONSTRAINT `partenariadorellenado_ibfk_1` FOREIGN KEY (`idNotificacion`) REFERENCES `notificaciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `partenariadorellenado_ibfk_2` FOREIGN KEY (`idPartenariado`) REFERENCES `partenariado` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partenariadorellenado`
--

LOCK TABLES `partenariadorellenado` WRITE;
/*!40000 ALTER TABLE `partenariadorellenado` DISABLE KEYS */;
INSERT INTO `partenariadorellenado` VALUES (2,1),(1,2),(3,3);
/*!40000 ALTER TABLE `partenariadorellenado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
INSERT INTO `password_reset_tokens` VALUES ('email1@ejemplo.com','','2025-03-26 17:38:44'),('email2@ejemplo.com','','2025-03-22 17:38:44'),('email3@ejemplo.com','','2025-03-16 17:38:44');
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `previo_partenariado`
--

DROP TABLE IF EXISTS `previo_partenariado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `previo_partenariado` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_demanda` int(11) NOT NULL,
  `id_oferta` int(11) NOT NULL,
  `completado_profesor` tinyint(1) NOT NULL DEFAULT 0,
  `completado_socioComunitario` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `id_demanda_2` (`id_demanda`,`id_oferta`),
  KEY `id_oferta` (`id_oferta`),
  CONSTRAINT `previo_partenariado_ibfk_1` FOREIGN KEY (`id_demanda`) REFERENCES `demanda_servicio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `previo_partenariado_ibfk_2` FOREIGN KEY (`id_oferta`) REFERENCES `oferta_servicio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `previo_partenariado`
--

LOCK TABLES `previo_partenariado` WRITE;
/*!40000 ALTER TABLE `previo_partenariado` DISABLE KEYS */;
INSERT INTO `previo_partenariado` VALUES (1,1,1,0,0),(2,2,2,0,0),(3,3,3,0,0);
/*!40000 ALTER TABLE `previo_partenariado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profesor`
--

DROP TABLE IF EXISTS `profesor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profesor` (
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `FKEY_Profesor` FOREIGN KEY (`id`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesor`
--

LOCK TABLES `profesor` WRITE;
/*!40000 ALTER TABLE `profesor` DISABLE KEYS */;
INSERT INTO `profesor` VALUES (1),(2),(3),(140),(146),(147),(148),(149),(150);
/*!40000 ALTER TABLE `profesor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profesor_colaboracion`
--

DROP TABLE IF EXISTS `profesor_colaboracion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profesor_colaboracion` (
  `id_profesor` int(11) NOT NULL,
  `id_colaboracion` int(11) NOT NULL,
  PRIMARY KEY (`id_profesor`,`id_colaboracion`),
  KEY `profesor_colaboracion_ibfk_1` (`id_colaboracion`),
  CONSTRAINT `FKEY_Profesor_colaboracion1` FOREIGN KEY (`id_profesor`) REFERENCES `profesor` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `profesor_colaboracion_ibfk_1` FOREIGN KEY (`id_colaboracion`) REFERENCES `colaboracion` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesor_colaboracion`
--

LOCK TABLES `profesor_colaboracion` WRITE;
/*!40000 ALTER TABLE `profesor_colaboracion` DISABLE KEYS */;
INSERT INTO `profesor_colaboracion` VALUES (1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `profesor_colaboracion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profesor_externo`
--

DROP TABLE IF EXISTS `profesor_externo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profesor_externo` (
  `id` int(11) NOT NULL,
  `universidad` int(11) NOT NULL,
  `facultad` varchar(200) NOT NULL,
  `datos_personales_Id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `universidad` (`universidad`) USING BTREE,
  KEY `FK_datos_p_ex` (`datos_personales_Id`),
  CONSTRAINT `FK_datos_p_ex` FOREIGN KEY (`datos_personales_Id`) REFERENCES `datos_personales_externo` (`id`) ON DELETE CASCADE,
  CONSTRAINT `profesor_externo_ibfk_1` FOREIGN KEY (`id`) REFERENCES `profesor` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `uni_prof` FOREIGN KEY (`universidad`) REFERENCES `universidad` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesor_externo`
--

LOCK TABLES `profesor_externo` WRITE;
/*!40000 ALTER TABLE `profesor_externo` DISABLE KEYS */;
INSERT INTO `profesor_externo` VALUES (1,1,'Turismo',1),(2,2,'Informatica',2),(3,3,'Economicas',3),(140,1,'informatica',29),(146,1,'Fisicas',35),(147,2,'Ciencias de la informaci├│n',36),(148,3,'Biologia',37),(149,1,'Derecho',38),(150,2,'Turismo',39);
/*!40000 ALTER TABLE `profesor_externo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profesor_interno`
--

DROP TABLE IF EXISTS `profesor_interno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profesor_interno` (
  `id` int(11) NOT NULL,
  `datos_personales_Id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_datos_internos` (`datos_personales_Id`),
  CONSTRAINT `FKEY_Profesor_interno` FOREIGN KEY (`id`) REFERENCES `profesor` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_datos_internos` FOREIGN KEY (`datos_personales_Id`) REFERENCES `datos_personales_interno` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesor_interno`
--

LOCK TABLES `profesor_interno` WRITE;
/*!40000 ALTER TABLE `profesor_interno` DISABLE KEYS */;
INSERT INTO `profesor_interno` VALUES (1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `profesor_interno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profesorinterno_oferta`
--

DROP TABLE IF EXISTS `profesorinterno_oferta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profesorinterno_oferta` (
  `id_profesor` int(11) NOT NULL,
  `id_oferta` int(11) NOT NULL,
  PRIMARY KEY (`id_profesor`,`id_oferta`),
  KEY `id_profesor` (`id_profesor`),
  KEY `id_oferta` (`id_oferta`),
  CONSTRAINT `profesorinterno_oferta_ibfk_1` FOREIGN KEY (`id_profesor`) REFERENCES `profesor_interno` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `profesorinterno_oferta_ibfk_2` FOREIGN KEY (`id_oferta`) REFERENCES `oferta_servicio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesorinterno_oferta`
--

LOCK TABLES `profesorinterno_oferta` WRITE;
/*!40000 ALTER TABLE `profesorinterno_oferta` DISABLE KEYS */;
INSERT INTO `profesorinterno_oferta` VALUES (1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `profesorinterno_oferta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proyecto`
--

DROP TABLE IF EXISTS `proyecto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proyecto` (
  `id` int(11) NOT NULL,
  `id_partenariado` int(11) NOT NULL,
  `estado` enum('EN_CREACION','ABIERTO_PROFESORES','ABIERTO_ESTUDIANTES','EN_CURSO','CERRADO') NOT NULL DEFAULT 'EN_CREACION',
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_partenariado` (`id_partenariado`) USING BTREE,
  CONSTRAINT `proyecto-colaboracion` FOREIGN KEY (`id`) REFERENCES `colaboracion` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `proyecto-partenariado` FOREIGN KEY (`id_partenariado`) REFERENCES `partenariado` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proyecto`
--

LOCK TABLES `proyecto` WRITE;
/*!40000 ALTER TABLE `proyecto` DISABLE KEYS */;
INSERT INTO `proyecto` VALUES (1,1,'ABIERTO_ESTUDIANTES',''),(2,2,'ABIERTO_ESTUDIANTES',''),(3,3,'ABIERTO_ESTUDIANTES','');
/*!40000 ALTER TABLE `proyecto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('session_1',1,'192.168.1.1','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/88.0.4324.150 Safari/537.36','{\"data\":\"ejemplo1\"}',1741801124),('session_2',2,'192.168.1.2','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 Safari/605.1.15','{\"data\":\"ejemplo2\"}',1742233124),('session_3',3,'192.168.1.3','Mozilla/5.0 (Linux; Android 10; SM-G970F) AppleWebKit/537.36 Chrome/87.0.4280.141 Mobile Safari/537.36','{\"data\":\"ejemplo3\"}',1742665124);
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `socio_comunitario`
--

DROP TABLE IF EXISTS `socio_comunitario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `socio_comunitario` (
  `id` int(11) NOT NULL,
  `sector` varchar(200) NOT NULL,
  `nombre_socioComunitario` varchar(200) NOT NULL,
  `datos_personales_Id` int(11) NOT NULL,
  `url` varchar(200) NOT NULL,
  `mision` varchar(500) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_datos_int` (`datos_personales_Id`),
  CONSTRAINT `FKEY_Entidad` FOREIGN KEY (`id`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_datos_int` FOREIGN KEY (`datos_personales_Id`) REFERENCES `datos_personales_externo` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `socio_comunitario`
--

LOCK TABLES `socio_comunitario` WRITE;
/*!40000 ALTER TABLE `socio_comunitario` DISABLE KEYS */;
INSERT INTO `socio_comunitario` VALUES (1,'','socio1',1,'',''),(2,'','socio2',2,'',''),(3,'','socio3',3,'',''),(151,'Educaci├│n','Instituto Ejemplo 1',40,'https://www.ine.es/','Fomentar la educaci├│n inclusiva'),(152,'Medio Ambiente','Fundaci├│n EcoVida',41,'https://ecovida.es/?srsltid=AfmBOoqghLHbx-RWlGBz3LBGLfyFT2CEq52lB1hmVtrXLnCVCO5hPPxR','Promover la sostenibilidad'),(153,'Salud','Centro de Salud Bienestar',42,'https://www.sanitas.es/sanitas/seguros/es/particulares/medicosycentros/centros-bienestar/index.html','Brindar acceso a la salud'),(154,'Cultura','Asociaci├│n Cultura Viva',43,'https://culturaviva.org/','Difundir el arte y la cultura'),(155,'Deporte','Club Deportivo Movimiento Vital',44,'https://movimientovitalg.com/','Impulsar la actividad f├¡sica');
/*!40000 ALTER TABLE `socio_comunitario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'clave ',
  `nombre` varchar(32) NOT NULL COMMENT 'nombre del tag',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'tag1'),(2,'tag2'),(3,'tag3');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `titulacion_local`
--

DROP TABLE IF EXISTS `titulacion_local`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `titulacion_local` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `titulacion_local`
--

LOCK TABLES `titulacion_local` WRITE;
/*!40000 ALTER TABLE `titulacion_local` DISABLE KEYS */;
INSERT INTO `titulacion_local` VALUES (1,'Pepe'),(2,'Luis'),(3,'Alfredo');
/*!40000 ALTER TABLE `titulacion_local` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `titulacionlocal_demanda`
--

DROP TABLE IF EXISTS `titulacionlocal_demanda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `titulacionlocal_demanda` (
  `id_titulacion` int(11) NOT NULL,
  `id_demanda` int(11) NOT NULL,
  PRIMARY KEY (`id_titulacion`,`id_demanda`),
  KEY `titulacion_local-demanda_ibfk_2` (`id_demanda`),
  CONSTRAINT `titulacion_local-demanda_ibfk1` FOREIGN KEY (`id_titulacion`) REFERENCES `titulacion_local` (`id`),
  CONSTRAINT `titulacion_local-demanda_ibfk_2` FOREIGN KEY (`id_demanda`) REFERENCES `demanda_servicio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `titulacionlocal_demanda`
--

LOCK TABLES `titulacionlocal_demanda` WRITE;
/*!40000 ALTER TABLE `titulacionlocal_demanda` DISABLE KEYS */;
INSERT INTO `titulacionlocal_demanda` VALUES (1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `titulacionlocal_demanda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `titulacionlocal_profesor`
--

DROP TABLE IF EXISTS `titulacionlocal_profesor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `titulacionlocal_profesor` (
  `id_titulacion` int(11) NOT NULL,
  `id_profesor` int(11) NOT NULL,
  PRIMARY KEY (`id_titulacion`,`id_profesor`),
  KEY `titulacion_local-profesor` (`id_profesor`),
  CONSTRAINT `titulacion_local-profesor` FOREIGN KEY (`id_profesor`) REFERENCES `profesor_interno` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `titulacionlocal_profesor_ibfk_1` FOREIGN KEY (`id_titulacion`) REFERENCES `titulacion_local` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `titulacionlocal_profesor`
--

LOCK TABLES `titulacionlocal_profesor` WRITE;
/*!40000 ALTER TABLE `titulacionlocal_profesor` DISABLE KEYS */;
INSERT INTO `titulacionlocal_profesor` VALUES (1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `titulacionlocal_profesor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tutor`
--

DROP TABLE IF EXISTS `tutor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tutor` (
  `id` int(11) NOT NULL,
  `datos_personales_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tutor`
--

LOCK TABLES `tutor` WRITE;
/*!40000 ALTER TABLE `tutor` DISABLE KEYS */;
INSERT INTO `tutor` VALUES (1,1),(2,2),(3,3),(1,1),(2,2),(3,3),(1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `tutor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `universidad`
--

DROP TABLE IF EXISTS `universidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `universidad` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `provincia` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `universidad`
--

LOCK TABLES `universidad` WRITE;
/*!40000 ALTER TABLE `universidad` DISABLE KEYS */;
INSERT INTO `universidad` VALUES (1,'UCM','Barcelona'),(2,'RJC','Madrid'),(3,'UNED','Madrid');
/*!40000 ALTER TABLE `universidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `upload`
--

DROP TABLE IF EXISTS `upload`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `upload` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `almacenamiento` varchar(200) NOT NULL,
  `tipo` varchar(200) NOT NULL,
  `campo` varchar(200) NOT NULL,
  `tipo_id` varchar(200) NOT NULL,
  `path` varchar(200) NOT NULL,
  `client_name` varchar(200) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `creador` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `_v` double NOT NULL,
  PRIMARY KEY (`id`),
  KEY `creador` (`creador`),
  CONSTRAINT `upload_ibfk_1` FOREIGN KEY (`creador`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `upload`
--

LOCK TABLES `upload` WRITE;
/*!40000 ALTER TABLE `upload` DISABLE KEYS */;
INSERT INTO `upload` VALUES (1,'','','','','','','nombre',1,'2025-03-12 17:38:44','2025-03-14 17:38:44',1),(2,'','','','','','','nombre2',2,'2025-03-14 17:38:44','2025-03-16 17:38:44',1),(3,'','','','','','','nombre3',3,'2025-03-16 17:38:44','2025-03-18 17:38:44',1),(15,'local','usuarios','avatar','141','4b3dabf7-fbe6-47b0-b711-da4b59e0d0d2.webp','file','4b3dabf7-fbe6-47b0-b711-da4b59e0d0d2',141,'2025-03-26 18:03:57','2025-03-26 18:03:57',0),(19,'local','usuarios','avatar','151','a7bdc773-75b5-4a27-8057-a688548eb33b.webp','file','a7bdc773-75b5-4a27-8057-a688548eb33b',151,'2025-03-26 18:22:27','2025-03-26 18:22:27',0);
/*!40000 ALTER TABLE `upload` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `upload_anuncioservicio`
--

DROP TABLE IF EXISTS `upload_anuncioservicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `upload_anuncioservicio` (
  `id_upload` int(11) NOT NULL,
  `id_anuncio` int(11) NOT NULL,
  PRIMARY KEY (`id_upload`,`id_anuncio`),
  KEY `id_upload` (`id_upload`),
  KEY `id_anuncio` (`id_anuncio`),
  CONSTRAINT `upload_anuncioservicio_ibfk_1` FOREIGN KEY (`id_upload`) REFERENCES `upload` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `upload_anuncioservicio_ibfk_2` FOREIGN KEY (`id_anuncio`) REFERENCES `anuncio_servicio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `upload_anuncioservicio`
--

LOCK TABLES `upload_anuncioservicio` WRITE;
/*!40000 ALTER TABLE `upload_anuncioservicio` DISABLE KEYS */;
INSERT INTO `upload_anuncioservicio` VALUES (1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `upload_anuncioservicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `uploads_colaboracion`
--

DROP TABLE IF EXISTS `uploads_colaboracion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `uploads_colaboracion` (
  `id_upload` int(11) NOT NULL,
  `id_colaboracion` int(11) NOT NULL,
  PRIMARY KEY (`id_upload`,`id_colaboracion`),
  KEY `id_upload` (`id_upload`),
  KEY `id_colaboracion` (`id_colaboracion`),
  CONSTRAINT `uploads_colaboracion_ibfk_1` FOREIGN KEY (`id_upload`) REFERENCES `upload` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `uploads_colaboracion_ibfk_2` FOREIGN KEY (`id_colaboracion`) REFERENCES `colaboracion` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `uploads_colaboracion`
--

LOCK TABLES `uploads_colaboracion` WRITE;
/*!40000 ALTER TABLE `uploads_colaboracion` DISABLE KEYS */;
INSERT INTO `uploads_colaboracion` VALUES (1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `uploads_colaboracion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `origin_login` varchar(200) NOT NULL,
  `origin_img` varchar(200) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `terminos_aceptados` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=156 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'','','2025-03-27 17:38:44','2025-03-27 17:38:44',1),(2,'','','2025-03-27 17:38:44','2025-03-27 17:38:44',1),(3,'','','2025-03-27 17:38:44','2025-03-27 17:38:44',1),(141,'Portal ApS','4b3dabf7-fbe6-47b0-b711-da4b59e0d0d2','2025-03-22 12:41:09','2025-03-26 18:03:57',1),(142,'Portal ApS',NULL,'2025-03-22 12:45:01','2025-03-22 12:45:01',1),(143,'Portal ApS',NULL,'2025-03-22 12:47:03','2025-03-22 12:47:03',1),(144,'Portal ApS',NULL,'2025-03-22 13:10:11','2025-03-22 13:10:11',1),(145,'Portal ApS',NULL,'2025-03-22 13:15:00','2025-03-22 13:15:00',1),(146,'Portal ApS',NULL,'2025-03-22 13:23:03','2025-03-22 13:23:03',1),(147,'Portal ApS',NULL,'2025-03-23 10:55:14','2025-03-23 10:55:14',1),(148,'Portal ApS',NULL,'2025-03-25 19:25:11','2025-03-25 19:25:11',1),(149,'Portal ApS',NULL,'2025-03-25 19:26:45','2025-03-25 19:26:45',1),(150,'Portal ApS',NULL,'2025-03-25 19:54:45','2025-03-25 19:54:45',1),(151,'Portal ApS','a7bdc773-75b5-4a27-8057-a688548eb33b','2025-03-25 20:03:45','2025-03-26 18:22:27',1),(152,'Portal ApS',NULL,'2025-03-25 20:06:20','2025-03-25 20:06:20',1),(153,'Portal ApS',NULL,'2025-03-25 20:08:07','2025-03-25 20:08:07',1),(154,'Portal ApS',NULL,'2025-03-25 20:09:48','2025-03-25 20:09:48',1),(155,'Portal ApS',NULL,'2025-03-25 20:10:47','2025-03-25 20:10:47',1);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `view_demand`
--

DROP TABLE IF EXISTS `view_demand`;
/*!50001 DROP VIEW IF EXISTS `view_demand`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_demand` AS SELECT 
 1 AS `id`,
 1 AS `city`,
 1 AS `purpose`,
 1 AS `periodDefinitionStart`,
 1 AS `periodDefinitionEnd`,
 1 AS `periodEjecutionStart`,
 1 AS `periodEjecutionEnd`,
 1 AS `periodDeadline`,
 1 AS `temporaryObservations`,
 1 AS `beneficiaryCommunity`,
 1 AS `title`,
 1 AS `description`,
 1 AS `createdAt`,
 1 AS `updatedAt`,
 1 AS `image`,
 1 AS `socialNeedId`,
 1 AS `socialNeedName`,
 1 AS `creatorId`,
 1 AS `creatorName`,
 1 AS `creatorMission`,
 1 AS `creatorSector`,
 1 AS `creatorUrl`,
 1 AS `creatorAvatar`,
 1 AS `serviceAreas`,
 1 AS `degrees`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_notification`
--

DROP TABLE IF EXISTS `view_notification`;
/*!50001 DROP VIEW IF EXISTS `view_notification`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_notification` AS SELECT 
 1 AS `id`,
 1 AS `userId`,
 1 AS `read`,
 1 AS `title`,
 1 AS `message`,
 1 AS `endDate`,
 1 AS `pending`,
 1 AS `data`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_notification_confirmation_accepted`
--

DROP TABLE IF EXISTS `view_notification_confirmation_accepted`;
/*!50001 DROP VIEW IF EXISTS `view_notification_confirmation_accepted`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_notification_confirmation_accepted` AS SELECT 
 1 AS `id`,
 1 AS `userId`,
 1 AS `read`,
 1 AS `title`,
 1 AS `message`,
 1 AS `endDate`,
 1 AS `pending`,
 1 AS `data`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_notification_confirmation_rejected`
--

DROP TABLE IF EXISTS `view_notification_confirmation_rejected`;
/*!50001 DROP VIEW IF EXISTS `view_notification_confirmation_rejected`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_notification_confirmation_rejected` AS SELECT 
 1 AS `id`,
 1 AS `userId`,
 1 AS `read`,
 1 AS `title`,
 1 AS `message`,
 1 AS `endDate`,
 1 AS `pending`,
 1 AS `data`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_notification_demand_backed`
--

DROP TABLE IF EXISTS `view_notification_demand_backed`;
/*!50001 DROP VIEW IF EXISTS `view_notification_demand_backed`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_notification_demand_backed` AS SELECT 
 1 AS `id`,
 1 AS `userId`,
 1 AS `read`,
 1 AS `title`,
 1 AS `message`,
 1 AS `endDate`,
 1 AS `pending`,
 1 AS `data`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_notification_matching_notification`
--

DROP TABLE IF EXISTS `view_notification_matching_notification`;
/*!50001 DROP VIEW IF EXISTS `view_notification_matching_notification`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_notification_matching_notification` AS SELECT 
 1 AS `id`,
 1 AS `userId`,
 1 AS `read`,
 1 AS `title`,
 1 AS `message`,
 1 AS `endDate`,
 1 AS `pending`,
 1 AS `data`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_notification_offer_accepted`
--

DROP TABLE IF EXISTS `view_notification_offer_accepted`;
/*!50001 DROP VIEW IF EXISTS `view_notification_offer_accepted`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_notification_offer_accepted` AS SELECT 
 1 AS `id`,
 1 AS `userId`,
 1 AS `read`,
 1 AS `title`,
 1 AS `message`,
 1 AS `endDate`,
 1 AS `pending`,
 1 AS `data`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_notification_partnership_filled`
--

DROP TABLE IF EXISTS `view_notification_partnership_filled`;
/*!50001 DROP VIEW IF EXISTS `view_notification_partnership_filled`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_notification_partnership_filled` AS SELECT 
 1 AS `id`,
 1 AS `userId`,
 1 AS `read`,
 1 AS `title`,
 1 AS `message`,
 1 AS `endDate`,
 1 AS `pending`,
 1 AS `data`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_partnership`
--

DROP TABLE IF EXISTS `view_partnership`;
/*!50001 DROP VIEW IF EXISTS `view_partnership`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_partnership` AS SELECT 
 1 AS `id`,
 1 AS `title`,
 1 AS `description`,
 1 AS `image`,
 1 AS `acceptsExternals`,
 1 AS `managerId`,
 1 AS `status`,
 1 AS `url`,
 1 AS `partnershipStatus`,
 1 AS `offerTemporaryObservations`,
 1 AS `offerDeadline`,
 1 AS `offerQuarter`,
 1 AS `offerAcademicYear`,
 1 AS `offerCreatorId`,
 1 AS `offerCreatorName`,
 1 AS `demandTemporaryObservations`,
 1 AS `demandCreatorId`,
 1 AS `demandCity`,
 1 AS `demandPurpose`,
 1 AS `demandBeneficiaryCommunity`,
 1 AS `demandDefinitionPeriodStart`,
 1 AS `demandDefinitionPeriodEnd`,
 1 AS `demandExecutionPeriodStart`,
 1 AS `demandExecutionPeriodEnd`,
 1 AS `demandEndDate`,
 1 AS `demandSocialNeedId`,
 1 AS `students`,
 1 AS `professors`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_service_offer`
--

DROP TABLE IF EXISTS `view_service_offer`;
/*!50001 DROP VIEW IF EXISTS `view_service_offer`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_service_offer` AS SELECT 
 1 AS `id`,
 1 AS `academicYear`,
 1 AS `remarks`,
 1 AS `quarter`,
 1 AS `deadline`,
 1 AS `image`,
 1 AS `title`,
 1 AS `description`,
 1 AS `createdAt`,
 1 AS `updatedAt`,
 1 AS `creator`,
 1 AS `services`,
 1 AS `subjects`,
 1 AS `tags`,
 1 AS `professors`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_user`
--

DROP TABLE IF EXISTS `view_user`;
/*!50001 DROP VIEW IF EXISTS `view_user`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_user` AS SELECT 
 1 AS `id`,
 1 AS `createdAt`,
 1 AS `avatar`,
 1 AS `firstName`,
 1 AS `lastName`,
 1 AS `phone`,
 1 AS `email`,
 1 AS `data`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_user_admin`
--

DROP TABLE IF EXISTS `view_user_admin`;
/*!50001 DROP VIEW IF EXISTS `view_user_admin`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_user_admin` AS SELECT 
 1 AS `id`,
 1 AS `createdAt`,
 1 AS `avatar`,
 1 AS `firstName`,
 1 AS `lastName`,
 1 AS `phone`,
 1 AS `email`,
 1 AS `role`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_user_aps_office`
--

DROP TABLE IF EXISTS `view_user_aps_office`;
/*!50001 DROP VIEW IF EXISTS `view_user_aps_office`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_user_aps_office` AS SELECT 
 1 AS `id`,
 1 AS `createdAt`,
 1 AS `avatar`,
 1 AS `firstName`,
 1 AS `lastName`,
 1 AS `phone`,
 1 AS `email`,
 1 AS `role`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_user_collaborator`
--

DROP TABLE IF EXISTS `view_user_collaborator`;
/*!50001 DROP VIEW IF EXISTS `view_user_collaborator`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_user_collaborator` AS SELECT 
 1 AS `id`,
 1 AS `createdAt`,
 1 AS `avatar`,
 1 AS `firstName`,
 1 AS `lastName`,
 1 AS `phone`,
 1 AS `email`,
 1 AS `role`,
 1 AS `university`,
 1 AS `faculty`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_user_community_partner`
--

DROP TABLE IF EXISTS `view_user_community_partner`;
/*!50001 DROP VIEW IF EXISTS `view_user_community_partner`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_user_community_partner` AS SELECT 
 1 AS `id`,
 1 AS `createdAt`,
 1 AS `avatar`,
 1 AS `firstName`,
 1 AS `lastName`,
 1 AS `phone`,
 1 AS `email`,
 1 AS `role`,
 1 AS `mission`,
 1 AS `name`,
 1 AS `sector`,
 1 AS `url`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_user_external_professor`
--

DROP TABLE IF EXISTS `view_user_external_professor`;
/*!50001 DROP VIEW IF EXISTS `view_user_external_professor`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_user_external_professor` AS SELECT 
 1 AS `id`,
 1 AS `createdAt`,
 1 AS `avatar`,
 1 AS `firstName`,
 1 AS `lastName`,
 1 AS `phone`,
 1 AS `email`,
 1 AS `role`,
 1 AS `university`,
 1 AS `faculty`,
 1 AS `knowledgeAreas`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_user_external_student`
--

DROP TABLE IF EXISTS `view_user_external_student`;
/*!50001 DROP VIEW IF EXISTS `view_user_external_student`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_user_external_student` AS SELECT 
 1 AS `id`,
 1 AS `createdAt`,
 1 AS `avatar`,
 1 AS `firstName`,
 1 AS `lastName`,
 1 AS `phone`,
 1 AS `email`,
 1 AS `role`,
 1 AS `degree`,
 1 AS `university`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_user_internal_professor`
--

DROP TABLE IF EXISTS `view_user_internal_professor`;
/*!50001 DROP VIEW IF EXISTS `view_user_internal_professor`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_user_internal_professor` AS SELECT 
 1 AS `id`,
 1 AS `createdAt`,
 1 AS `avatar`,
 1 AS `firstName`,
 1 AS `lastName`,
 1 AS `phone`,
 1 AS `email`,
 1 AS `role`,
 1 AS `knowledgeAreas`,
 1 AS `degrees`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_user_internal_student`
--

DROP TABLE IF EXISTS `view_user_internal_student`;
/*!50001 DROP VIEW IF EXISTS `view_user_internal_student`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_user_internal_student` AS SELECT 
 1 AS `id`,
 1 AS `createdAt`,
 1 AS `avatar`,
 1 AS `firstName`,
 1 AS `lastName`,
 1 AS `phone`,
 1 AS `email`,
 1 AS `role`,
 1 AS `degree`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_user_privileged`
--

DROP TABLE IF EXISTS `view_user_privileged`;
/*!50001 DROP VIEW IF EXISTS `view_user_privileged`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_user_privileged` AS SELECT 
 1 AS `id`,
 1 AS `avatar`,
 1 AS `email`,
 1 AS `firstName`,
 1 AS `lastName`,
 1 AS `password`,
 1 AS `role`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_user_tutor`
--

DROP TABLE IF EXISTS `view_user_tutor`;
/*!50001 DROP VIEW IF EXISTS `view_user_tutor`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_user_tutor` AS SELECT 
 1 AS `id`,
 1 AS `createdAt`,
 1 AS `avatar`,
 1 AS `firstName`,
 1 AS `lastName`,
 1 AS `phone`,
 1 AS `email`,
 1 AS `role`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `view_demand`
--

/*!50001 DROP VIEW IF EXISTS `view_demand`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `view_demand` AS select `demanda`.`id` AS `id`,`demanda`.`ciudad` AS `city`,`demanda`.`finalidad` AS `purpose`,`demanda`.`periodo_definicion_ini` AS `periodDefinitionStart`,`demanda`.`periodo_definicion_fin` AS `periodDefinitionEnd`,`demanda`.`periodo_ejecucion_ini` AS `periodEjecutionStart`,`demanda`.`periodo_ejecucion_ini` AS `periodEjecutionEnd`,`demanda`.`fecha_fin` AS `periodDeadline`,`demanda`.`observaciones_temporales` AS `temporaryObservations`,`demanda`.`comunidad_beneficiaria` AS `beneficiaryCommunity`,`anuncio`.`titulo` AS `title`,`anuncio`.`descripcion` AS `description`,`anuncio`.`created_at` AS `createdAt`,`anuncio`.`updated_at` AS `updatedAt`,`anuncio`.`imagen` AS `image`,`ns`.`id` AS `socialNeedId`,`ns`.`nombre` AS `socialNeedName`,`sc`.`id` AS `creatorId`,`sc`.`nombre_socioComunitario` AS `creatorName`,`sc`.`mision` AS `creatorMission`,`sc`.`sector` AS `creatorSector`,`sc`.`url` AS `creatorUrl`,`u`.`origin_img` AS `creatorAvatar`,(select coalesce(json_arrayagg(`sa`.`nombre`),json_array()) from (`areaservicio_anuncioservicio` `sa_sa` join `area_servicio` `sa` on(`sa_sa`.`id_area` = `sa`.`id`)) where `sa_sa`.`id_anuncio` = `anuncio`.`id`) AS `serviceAreas`,(select coalesce(json_arrayagg(`tl`.`nombre`),json_array()) from (`titulacionlocal_demanda` `degree` join `titulacion_local` `tl` on(`degree`.`id_titulacion` = `tl`.`id`)) where `degree`.`id_demanda` = `demanda`.`id`) AS `degrees` from ((((`demanda_servicio` `demanda` join `anuncio_servicio` `anuncio` on(`demanda`.`id` = `anuncio`.`id`)) join `necesidad_social` `ns` on(`demanda`.`necesidad_social` = `ns`.`id`)) join `socio_comunitario` `sc` on(`demanda`.`creador` = `sc`.`id`)) join `usuario` `u` on(`sc`.`id` = `u`.`id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_notification`
--

/*!50001 DROP VIEW IF EXISTS `view_notification`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `view_notification` AS select `n`.`id` AS `id`,`n`.`idDestino` AS `userId`,`n`.`leido` AS `read`,`n`.`titulo` AS `title`,`n`.`mensaje` AS `message`,`n`.`fecha_fin` AS `endDate`,`n`.`pendiente` AS `pending`,case when `aa`.`idNotificacion` is not null then json_object('type','ConfirmationAccepted','accepted',`aa`.`idNotificacionAceptada`,'partnership',json_object('id',`aa_p`.`id`,'offerId',`aa_p`.`id_oferta`,'demandId',`aa_p`.`id_demanda`,'status',`aa_p`.`estado`)) when `ar`.`idNotificacion` is not null then json_object('type','ConfirmationRejected','associateId',`oa`.`idSocio`,'offer',json_object('id',`oa_os`.`id`,'creatorId',`oa_os`.`creador`,'quarter',`oa_os`.`cuatrimestre`,'academicYear',`oa_os`.`anio_academico`,'deadline',`oa_os`.`fecha_limite`,'temporaryRemarks',`oa_os`.`observaciones_temporales`)) when `dr`.`idNotificacion` is not null then json_object('type','DemandBacked','partnership',json_object('id',`dr_p`.`id`,'offerId',`dr_p`.`id_oferta`,'demandId',`dr_p`.`id_demanda`,'status',`dr_p`.`estado`)) when `nm`.`idNotificacion` is not null then json_object('type','MatchingNotification','demand',json_object('id',`nm_dm`.`id_demanda`,'processed',`nm_dm`.`procesado`,'score',`nm_dm`.`emparejamiento`),'offer',json_object('id',`nm_om`.`id_demanda`,'processed',`nm_om`.`procesado`,'score',`nm_om`.`emparejamiento`)) when `oa`.`idNotificacion` is not null then json_object('type','OfferAccepted','associateId',`oa`.`idSocio`,'offer',json_object('id',`oa_os`.`id`,'creatorId',`oa_os`.`creador`,'quarter',`oa_os`.`cuatrimestre`,'academicYear',`oa_os`.`anio_academico`,'deadline',`oa_os`.`fecha_limite`,'temporaryRemarks',`oa_os`.`observaciones_temporales`)) when `pr`.`idNotificacion` is not null then json_object('type','PartnershipFilled','partnership',json_object('id',`pr_p`.`id`,'offerId',`pr_p`.`id_oferta`,'demandId',`pr_p`.`id_demanda`,'status',`pr_p`.`estado`)) end AS `data` from ((((((`notificaciones` `n` left join (`aceptacionaceptada` `aa` join `partenariado` `aa_p` on(`aa`.`idPartenariado` = `aa_p`.`id`)) on(`n`.`id` = `aa`.`idNotificacion`)) left join `aceptacionrechazado` `ar` on(`n`.`id` = `ar`.`idNotificacion`)) left join (`demandarespalda` `dr` join `partenariado` `dr_p` on(`dr`.`idPartenariado` = `dr_p`.`id`)) on(`n`.`id` = `dr`.`idNotificacion`)) left join ((`notificacionmatching` `nm` join `matching` `nm_dm` on(`nm`.`idDemanda` = `nm_dm`.`id_demanda`)) join `matching` `nm_om` on(`nm`.`idOferta` = `nm_om`.`id_oferta`)) on(`n`.`id` = `nm`.`idNotificacion`)) left join (`ofertaaceptada` `oa` join `oferta_servicio` `oa_os` on(`oa`.`idOferta` = `oa_os`.`id`)) on(`n`.`id` = `oa`.`idNotificacion`)) left join (`partenariadorellenado` `pr` join `partenariado` `pr_p` on(`pr`.`idPartenariado` = `pr_p`.`id`)) on(`n`.`id` = `pr`.`idNotificacion`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_notification_confirmation_accepted`
--

/*!50001 DROP VIEW IF EXISTS `view_notification_confirmation_accepted`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `view_notification_confirmation_accepted` AS select `notification`.`id` AS `id`,`notification`.`idDestino` AS `userId`,`notification`.`leido` AS `read`,`notification`.`titulo` AS `title`,`notification`.`mensaje` AS `message`,`notification`.`fecha_fin` AS `endDate`,`notification`.`pendiente` AS `pending`,json_object('type','ConfirmationAccepted','accepted',`confirmation_accepted`.`idNotificacionAceptada`,'partnership',json_object('id',`partnership`.`id`,'offerId',`partnership`.`id_oferta`,'demandId',`partnership`.`id_demanda`,'status',`partnership`.`estado`)) AS `data` from ((`aceptacionaceptada` `confirmation_accepted` join `notificaciones` `notification` on(`confirmation_accepted`.`idNotificacion` = `notification`.`id`)) join `partenariado` `partnership` on(`confirmation_accepted`.`idPartenariado` = `partnership`.`id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_notification_confirmation_rejected`
--

/*!50001 DROP VIEW IF EXISTS `view_notification_confirmation_rejected`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `view_notification_confirmation_rejected` AS select `notification`.`id` AS `id`,`notification`.`idDestino` AS `userId`,`notification`.`leido` AS `read`,`notification`.`titulo` AS `title`,`notification`.`mensaje` AS `message`,`notification`.`fecha_fin` AS `endDate`,`notification`.`pendiente` AS `pending`,json_object('type','ConfirmationRejected','associateId',`accepted_offer`.`idSocio`,'offer',json_object('id',`offer`.`id`,'creatorId',`offer`.`creador`,'quarter',`offer`.`cuatrimestre`,'academicYear',`offer`.`anio_academico`,'deadline',`offer`.`fecha_limite`,'temporaryRemarks',`offer`.`observaciones_temporales`)) AS `data` from (((`aceptacionrechazado` `confirmation_rejected` join `notificaciones` `notification` on(`confirmation_rejected`.`idNotificacion` = `notification`.`id`)) join `ofertaaceptada` `accepted_offer` on(`confirmation_rejected`.`idNotificacionOferta` = `accepted_offer`.`idNotificacion`)) join `oferta_servicio` `offer` on(`accepted_offer`.`idOferta` = `offer`.`id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_notification_demand_backed`
--

/*!50001 DROP VIEW IF EXISTS `view_notification_demand_backed`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `view_notification_demand_backed` AS select `notification`.`id` AS `id`,`notification`.`idDestino` AS `userId`,`notification`.`leido` AS `read`,`notification`.`titulo` AS `title`,`notification`.`mensaje` AS `message`,`notification`.`fecha_fin` AS `endDate`,`notification`.`pendiente` AS `pending`,json_object('type','DemandBacked','partnership',json_object('id',`partnership`.`id`,'offerId',`partnership`.`id_oferta`,'demandId',`partnership`.`id_demanda`,'status',`partnership`.`estado`)) AS `data` from ((`demandarespalda` `demand_backed` join `notificaciones` `notification` on(`demand_backed`.`idNotificacion` = `notification`.`id`)) join `partenariado` `partnership` on(`demand_backed`.`idPartenariado` = `partnership`.`id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_notification_matching_notification`
--

/*!50001 DROP VIEW IF EXISTS `view_notification_matching_notification`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `view_notification_matching_notification` AS select `notification`.`id` AS `id`,`notification`.`idDestino` AS `userId`,`notification`.`leido` AS `read`,`notification`.`titulo` AS `title`,`notification`.`mensaje` AS `message`,`notification`.`fecha_fin` AS `endDate`,`notification`.`pendiente` AS `pending`,json_object('type','MatchingNotification','demand',json_object('id',`matching_demand`.`id_demanda`,'processed',`matching_demand`.`procesado`,'score',`matching_demand`.`emparejamiento`),'offer',json_object('id',`matching_offer`.`id_demanda`,'processed',`matching_offer`.`procesado`,'score',`matching_offer`.`emparejamiento`)) AS `data` from (((`notificacionmatching` `matching_notification` join `notificaciones` `notification` on(`matching_notification`.`idNotificacion` = `notification`.`id`)) join `matching` `matching_demand` on(`matching_notification`.`idDemanda` = `matching_demand`.`id_demanda`)) join `matching` `matching_offer` on(`matching_notification`.`idOferta` = `matching_offer`.`id_oferta`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_notification_offer_accepted`
--

/*!50001 DROP VIEW IF EXISTS `view_notification_offer_accepted`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `view_notification_offer_accepted` AS select `notification`.`id` AS `id`,`notification`.`idDestino` AS `userId`,`notification`.`leido` AS `read`,`notification`.`titulo` AS `title`,`notification`.`mensaje` AS `message`,`notification`.`fecha_fin` AS `endDate`,`notification`.`pendiente` AS `pending`,json_object('type','OfferAccepted','associateId',`offer_accepted`.`idSocio`,'offer',json_object('id',`offer`.`id`,'creatorId',`offer`.`creador`,'quarter',`offer`.`cuatrimestre`,'academicYear',`offer`.`anio_academico`,'deadline',`offer`.`fecha_limite`,'temporaryRemarks',`offer`.`observaciones_temporales`)) AS `data` from ((`ofertaaceptada` `offer_accepted` join `notificaciones` `notification` on(`offer_accepted`.`idNotificacion` = `notification`.`id`)) join `oferta_servicio` `offer` on(`offer_accepted`.`idOferta` = `offer`.`id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_notification_partnership_filled`
--

/*!50001 DROP VIEW IF EXISTS `view_notification_partnership_filled`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `view_notification_partnership_filled` AS select `notification`.`id` AS `id`,`notification`.`idDestino` AS `userId`,`notification`.`leido` AS `read`,`notification`.`titulo` AS `title`,`notification`.`mensaje` AS `message`,`notification`.`fecha_fin` AS `endDate`,`notification`.`pendiente` AS `pending`,json_object('type','PartnershipFilled','partnership',json_object('id',`partnership`.`id`,'offerId',`partnership`.`id_oferta`,'demandId',`partnership`.`id_demanda`,'status',`partnership`.`estado`)) AS `data` from ((`partenariadorellenado` `partnership_filled` join `notificaciones` `notification` on(`partnership_filled`.`idNotificacion` = `notification`.`id`)) join `partenariado` `partnership` on(`partnership_filled`.`idPartenariado` = `partnership`.`id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_partnership`
--

/*!50001 DROP VIEW IF EXISTS `view_partnership`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `view_partnership` AS select `colaboracion`.`id` AS `id`,`colaboracion`.`titulo` AS `title`,`colaboracion`.`descripcion` AS `description`,`colaboracion`.`imagen` AS `image`,`colaboracion`.`admite_externos` AS `acceptsExternals`,`colaboracion`.`responsable` AS `managerId`,`p`.`estado` AS `status`,`p`.`url` AS `url`,`pa`.`estado` AS `partnershipStatus`,`os`.`observaciones_temporales` AS `offerTemporaryObservations`,`os`.`fecha_limite` AS `offerDeadline`,`os`.`cuatrimestre` AS `offerQuarter`,`os`.`anio_academico` AS `offerAcademicYear`,`sc`.`id` AS `offerCreatorId`,`sc`.`nombre_socioComunitario` AS `offerCreatorName`,`ds`.`observaciones_temporales` AS `demandTemporaryObservations`,`ds`.`creador` AS `demandCreatorId`,`ds`.`ciudad` AS `demandCity`,`ds`.`finalidad` AS `demandPurpose`,`ds`.`comunidad_beneficiaria` AS `demandBeneficiaryCommunity`,`ds`.`periodo_definicion_ini` AS `demandDefinitionPeriodStart`,`ds`.`periodo_definicion_fin` AS `demandDefinitionPeriodEnd`,`ds`.`periodo_ejecucion_ini` AS `demandExecutionPeriodStart`,`ds`.`periodo_ejecucion_fin` AS `demandExecutionPeriodEnd`,`ds`.`fecha_fin` AS `demandEndDate`,`ds`.`necesidad_social` AS `demandSocialNeedId`,(select json_arrayagg(json_object('id',`e`.`id`,'firstName',coalesce(`dpi`.`nombre`,`dpe`.`nombre`),'lastName',coalesce(`dpi`.`apellidos`,`dpe`.`apellidos`))) from (((`estudiante_proyecto` `ep` join `estudiante` `e` on(`ep`.`id_estudiante` = `e`.`id`)) left join (`estudiante_interno` `ei` join `datos_personales_interno` `dpi` on(`ei`.`datos_personales_Id` = `dpi`.`id`)) on(`e`.`id` = `ei`.`id`)) left join (`estudiante_externo` `ee` join `datos_personales_externo` `dpe` on(`ee`.`datos_personales_Id` = `dpe`.`id`)) on(`e`.`id` = `ee`.`id`)) where `ep`.`id_proyecto` = `p`.`id`) AS `students`,(select json_arrayagg(json_object('id',`pf`.`id`,'firstName',coalesce(`dpi`.`nombre`,`dpe`.`nombre`),'lastName',coalesce(`dpi`.`apellidos`,`dpe`.`apellidos`))) from (((`profesor_colaboracion` `pc` join `profesor` `pf` on(`pc`.`id_profesor` = `p`.`id`)) left join (`profesor_interno` `pi` join `datos_personales_interno` `dpi` on(`pi`.`datos_personales_Id` = `dpi`.`id`)) on(`pf`.`id` = `pi`.`id`)) left join (`profesor_externo` `pe` join `datos_personales_externo` `dpe` on(`pe`.`datos_personales_Id` = `dpe`.`id`)) on(`pf`.`id` = `pe`.`id`)) where `pc`.`id_colaboracion` = `colaboracion`.`id`) AS `professors` from (((((`colaboracion` join `proyecto` `p` on(`colaboracion`.`id` = `p`.`id`)) join `partenariado` `pa` on(`colaboracion`.`id` = `pa`.`id`)) join `oferta_servicio` `os` on(`pa`.`id_oferta` = `os`.`id`)) join `demanda_servicio` `ds` on(`pa`.`id_demanda` = `ds`.`id`)) join `socio_comunitario` `sc` on(`ds`.`creador` = `sc`.`id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_service_offer`
--

/*!50001 DROP VIEW IF EXISTS `view_service_offer`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `view_service_offer` AS select `so`.`id` AS `id`,`so`.`anio_academico` AS `academicYear`,`so`.`observaciones_temporales` AS `remarks`,`so`.`cuatrimestre` AS `quarter`,`so`.`fecha_limite` AS `deadline`,`sa`.`imagen` AS `image`,`sa`.`titulo` AS `title`,`sa`.`descripcion` AS `description`,`sa`.`created_at` AS `createdAt`,`sa`.`updated_at` AS `updatedAt`,json_object('id',`creator`.`id`,'firstName',`creator`.`firstName`,'lastName',`creator`.`lastName`,'avatar',`creator`.`avatar`) AS `creator`,(select coalesce(json_arrayagg(`service`.`nombre`),json_array()) from (`areaservicio_anuncioservicio` `service_sa` join `area_servicio` `service` on(`service_sa`.`id_area` = `service`.`id`)) where `service_sa`.`id_anuncio` = `sa`.`id`) AS `services`,(select coalesce(json_arrayagg(`a`.`nombre`),json_array()) from `asignatura` `a` where `a`.`id_oferta` = `so`.`id`) AS `subjects`,(select coalesce(json_arrayagg(`t`.`nombre`),json_array()) from (`oferta_demanda_tags` `so_tags` join `tags` `t` on(`so_tags`.`tag_id` = `t`.`id`)) where `so_tags`.`object_id` = `so`.`id`) AS `tags`,(select coalesce(json_arrayagg(json_object('id',`dpi`.`id`,'firstName',`dpi`.`nombre`,'lastName',`dpi`.`apellidos`,'avatar',`u`.`origin_img`)),json_array()) from ((((`profesorinterno_oferta` `ip_so` join `profesor_interno` `ip` on(`ip_so`.`id_profesor` = `ip`.`id`)) join `profesor` `p` on(`ip`.`id` = `p`.`id`)) join `usuario` `u` on(`p`.`id` = `u`.`id`)) join `datos_personales_interno` `dpi` on(`ip`.`datos_personales_Id` = `dpi`.`id`)) where `ip_so`.`id_oferta` = `so`.`id`) AS `professors` from ((`oferta_servicio` `so` join `anuncio_servicio` `sa` on(`sa`.`id` = `so`.`id`)) join `view_user` `creator` on(`creator`.`id` = `so`.`creador`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_user`
--

/*!50001 DROP VIEW IF EXISTS `view_user`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `view_user` AS select `user`.`id` AS `id`,`user`.`createdAt` AS `createdAt`,`user`.`origin_img` AS `avatar`,coalesce(`dpi`.`nombre`,`dpe`.`nombre`) AS `firstName`,coalesce(`dpi`.`apellidos`,`dpe`.`apellidos`) AS `lastName`,coalesce(`dpi`.`telefono`,`dpe`.`telefono`) AS `phone`,coalesce(`dpi`.`correo`,`dpe`.`correo`) AS `email`,case when `a`.`id` is not null then json_object('role','Admin') when `pi`.`id` is not null then json_object('role','InternalProfessor','knowledgeAreas',coalesce((select json_arrayagg(`acp`.`id_area`) from `areaconocimiento_profesor` `acp` where `acp`.`id_profesor` = `p`.`id`),json_array()),'degrees',coalesce((select json_arrayagg(`tl_pi`.`id_titulacion`) from `titulacionlocal_profesor` `tl_pi` where `tl_pi`.`id_profesor` = `p`.`id`),json_array())) when `pe`.`id` is not null then json_object('role','ExternalProfessor','university',`pe`.`universidad`,'faculty',`pe`.`facultad`,'knowledgeAreas',coalesce((select json_arrayagg(`acp`.`id_area`) from `areaconocimiento_profesor` `acp` where `acp`.`id_profesor` = `p`.`id`),json_array())) when `ei`.`id` is not null then json_object('role','InternalStudent','degree',`ei`.`titulacion_local`) when `ee`.`id` is not null then json_object('role','ExternalStudent','degree',`ee`.`titulacion`,'university',`ee`.`universidad`) when `oa`.`id` is not null then json_object('role','ApSOffice') when `sc`.`id` is not null then json_object('role','CommunityPartner','mission',`sc`.`mision`,'name',`sc`.`nombre_socioComunitario`,'sector',`sc`.`sector`,'url',`sc`.`url`) when `t`.`id` is not null then json_object('role','Tutor') when `c`.`id` is not null then json_object('role','Collaborator','university',`c`.`universidad`,'faculty',`c`.`facultad`) end AS `data` from (((((((((((((`usuario` `user` left join `admin` `a` on(`user`.`id` = `a`.`id`)) left join `profesor` `p` on(`user`.`id` = `p`.`id`)) left join `profesor_interno` `pi` on(`p`.`id` = `pi`.`id`)) left join `profesor_externo` `pe` on(`p`.`id` = `pe`.`id`)) left join `estudiante` `e` on(`user`.`id` = `e`.`id`)) left join `estudiante_interno` `ei` on(`e`.`id` = `ei`.`id`)) left join `estudiante_externo` `ee` on(`e`.`id` = `ee`.`id`)) left join `oficinaaps` `oa` on(`user`.`id` = `oa`.`id`)) left join `socio_comunitario` `sc` on(`user`.`id` = `sc`.`id`)) left join `tutor` `t` on(`user`.`id` = `t`.`id`)) left join `colaborador` `c` on(`user`.`id` = `c`.`id`)) left join `datos_personales_interno` `dpi` on(coalesce(`a`.`datos_personales_Id`,`pi`.`datos_personales_Id`,`ei`.`datos_personales_Id`,`oa`.`datos_personales_Id`,`t`.`datos_personales_Id`) = `dpi`.`id`)) left join `datos_personales_externo` `dpe` on(coalesce(`pe`.`datos_personales_Id`,`ee`.`datos_personales_Id`,`sc`.`datos_personales_Id`,`c`.`datos_personales_Id`) = `dpe`.`id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_user_admin`
--

/*!50001 DROP VIEW IF EXISTS `view_user_admin`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `view_user_admin` AS select `user`.`id` AS `id`,`user`.`createdAt` AS `createdAt`,`user`.`origin_img` AS `avatar`,`user_data`.`nombre` AS `firstName`,`user_data`.`apellidos` AS `lastName`,`user_data`.`telefono` AS `phone`,`user_data`.`correo` AS `email`,'Admin' AS `role` from ((`admin` join `usuario` `user` on(`admin`.`id` = `user`.`id`)) join `datos_personales_interno` `user_data` on(`admin`.`datos_personales_Id` = `user_data`.`id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_user_aps_office`
--

/*!50001 DROP VIEW IF EXISTS `view_user_aps_office`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `view_user_aps_office` AS select `user`.`id` AS `id`,`user`.`createdAt` AS `createdAt`,`user`.`origin_img` AS `avatar`,`user_data`.`nombre` AS `firstName`,`user_data`.`apellidos` AS `lastName`,`user_data`.`telefono` AS `phone`,`user_data`.`correo` AS `email`,'ApSOffice' AS `role` from ((`oficinaaps` `office` join `usuario` `user` on(`office`.`id` = `user`.`id`)) join `datos_personales_interno` `user_data` on(`office`.`datos_personales_Id` = `user_data`.`id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_user_collaborator`
--

/*!50001 DROP VIEW IF EXISTS `view_user_collaborator`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `view_user_collaborator` AS select `user`.`id` AS `id`,`user`.`createdAt` AS `createdAt`,`user`.`origin_img` AS `avatar`,`user_data`.`nombre` AS `firstName`,`user_data`.`apellidos` AS `lastName`,`user_data`.`telefono` AS `phone`,`user_data`.`correo` AS `email`,'Collaborator' AS `role`,`collaborator`.`universidad` AS `university`,`collaborator`.`facultad` AS `faculty` from (((`colaborador` `collaborator` join `profesor` `professor` on(`collaborator`.`id` = `professor`.`id`)) join `usuario` `user` on(`professor`.`id` = `user`.`id`)) join `datos_personales_externo` `user_data` on(`collaborator`.`datos_personales_Id` = `user_data`.`id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_user_community_partner`
--

/*!50001 DROP VIEW IF EXISTS `view_user_community_partner`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `view_user_community_partner` AS select `user`.`id` AS `id`,`user`.`createdAt` AS `createdAt`,`user`.`origin_img` AS `avatar`,`dpe`.`nombre` AS `firstName`,`dpe`.`apellidos` AS `lastName`,`dpe`.`telefono` AS `phone`,`dpe`.`correo` AS `email`,'CommunityPartner' AS `role`,`sc`.`mision` AS `mission`,`sc`.`nombre_socioComunitario` AS `name`,`sc`.`sector` AS `sector`,`sc`.`url` AS `url` from ((`usuario` `user` join `socio_comunitario` `sc` on(`user`.`id` = `sc`.`id`)) join `datos_personales_externo` `dpe` on(`sc`.`datos_personales_Id` = `dpe`.`id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_user_external_professor`
--

/*!50001 DROP VIEW IF EXISTS `view_user_external_professor`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `view_user_external_professor` AS select `user`.`id` AS `id`,`user`.`createdAt` AS `createdAt`,`user`.`origin_img` AS `avatar`,`user_data`.`nombre` AS `firstName`,`user_data`.`apellidos` AS `lastName`,`user_data`.`telefono` AS `phone`,`user_data`.`correo` AS `email`,'ExternalProfessor' AS `role`,`external_professor`.`universidad` AS `university`,`external_professor`.`facultad` AS `faculty`,coalesce((select json_arrayagg(`acp`.`id_area`) from `areaconocimiento_profesor` `acp` where `acp`.`id_profesor` = `professor`.`id`),json_array()) AS `knowledgeAreas` from (((`profesor_externo` `external_professor` join `profesor` `professor` on(`external_professor`.`id` = `professor`.`id`)) join `usuario` `user` on(`professor`.`id` = `user`.`id`)) join `datos_personales_externo` `user_data` on(`external_professor`.`datos_personales_Id` = `user_data`.`id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_user_external_student`
--

/*!50001 DROP VIEW IF EXISTS `view_user_external_student`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `view_user_external_student` AS select `user`.`id` AS `id`,`user`.`createdAt` AS `createdAt`,`user`.`origin_img` AS `avatar`,`user_data`.`nombre` AS `firstName`,`user_data`.`apellidos` AS `lastName`,`user_data`.`telefono` AS `phone`,`user_data`.`correo` AS `email`,'ExternalStudent' AS `role`,`external_student`.`titulacion` AS `degree`,`external_student`.`universidad` AS `university` from (((`estudiante_externo` `external_student` join `estudiante` `student` on(`external_student`.`id` = `student`.`id`)) join `usuario` `user` on(`student`.`id` = `user`.`id`)) join `datos_personales_externo` `user_data` on(`external_student`.`datos_personales_Id` = `user_data`.`id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_user_internal_professor`
--

/*!50001 DROP VIEW IF EXISTS `view_user_internal_professor`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `view_user_internal_professor` AS select `user`.`id` AS `id`,`user`.`createdAt` AS `createdAt`,`user`.`origin_img` AS `avatar`,`user_data`.`nombre` AS `firstName`,`user_data`.`apellidos` AS `lastName`,`user_data`.`telefono` AS `phone`,`user_data`.`correo` AS `email`,'InternalProfessor' AS `role`,coalesce((select json_arrayagg(`acp`.`id_area`) from `areaconocimiento_profesor` `acp` where `acp`.`id_profesor` = `professor`.`id`),json_array()) AS `knowledgeAreas`,coalesce((select json_arrayagg(`tl_pi`.`id_titulacion`) from `titulacionlocal_profesor` `tl_pi` where `tl_pi`.`id_profesor` = `internal_professor`.`id`),json_array()) AS `degrees` from (((`profesor_interno` `internal_professor` join `profesor` `professor` on(`internal_professor`.`id` = `professor`.`id`)) join `usuario` `user` on(`professor`.`id` = `user`.`id`)) join `datos_personales_interno` `user_data` on(`internal_professor`.`datos_personales_Id` = `user_data`.`id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_user_internal_student`
--

/*!50001 DROP VIEW IF EXISTS `view_user_internal_student`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `view_user_internal_student` AS select `user`.`id` AS `id`,`user`.`createdAt` AS `createdAt`,`user`.`origin_img` AS `avatar`,`user_data`.`nombre` AS `firstName`,`user_data`.`apellidos` AS `lastName`,`user_data`.`telefono` AS `phone`,`user_data`.`correo` AS `email`,'InternalStudent' AS `role`,`internal_student`.`titulacion_local` AS `degree` from (((`estudiante_interno` `internal_student` join `estudiante` `student` on(`internal_student`.`id` = `student`.`id`)) join `usuario` `user` on(`student`.`id` = `user`.`id`)) join `datos_personales_interno` `user_data` on(`internal_student`.`datos_personales_Id` = `user_data`.`id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_user_privileged`
--

/*!50001 DROP VIEW IF EXISTS `view_user_privileged`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `view_user_privileged` AS select `user`.`id` AS `id`,`user`.`origin_img` AS `avatar`,coalesce(`dpi`.`correo`,`dpe`.`correo`) AS `email`,coalesce(`dpi`.`nombre`,`dpe`.`nombre`) AS `firstName`,coalesce(`dpi`.`apellidos`,`dpe`.`apellidos`) AS `lastName`,coalesce(`dpi`.`password`,`dpe`.`password`) AS `password`,case when `a`.`id` is not null then 'Admin' when `pi`.`id` is not null then 'InternalProfessor' when `pe`.`id` is not null then 'ExternalProfessor' when `ei`.`id` is not null then 'InternalStudent' when `ee`.`id` is not null then 'ExternalStudent' when `oa`.`id` is not null then 'ApSOffice' when `sc`.`id` is not null then 'CommunityPartner' when `t`.`id` is not null then 'Tutor' when `c`.`id` is not null then 'Collaborator' end AS `role` from (((((((((((((`usuario` `user` left join `admin` `a` on(`user`.`id` = `a`.`id`)) left join `profesor` `p` on(`user`.`id` = `p`.`id`)) left join `profesor_interno` `pi` on(`p`.`id` = `pi`.`id`)) left join `profesor_externo` `pe` on(`p`.`id` = `pe`.`id`)) left join `estudiante` `e` on(`user`.`id` = `e`.`id`)) left join `estudiante_interno` `ei` on(`e`.`id` = `ei`.`id`)) left join `estudiante_externo` `ee` on(`e`.`id` = `ee`.`id`)) left join `oficinaaps` `oa` on(`user`.`id` = `oa`.`id`)) left join `socio_comunitario` `sc` on(`user`.`id` = `sc`.`id`)) left join `tutor` `t` on(`user`.`id` = `t`.`id`)) left join `colaborador` `c` on(`user`.`id` = `c`.`id`)) left join `datos_personales_interno` `dpi` on(coalesce(`a`.`datos_personales_Id`,`pi`.`datos_personales_Id`,`ei`.`datos_personales_Id`,`oa`.`datos_personales_Id`,`t`.`datos_personales_Id`) = `dpi`.`id`)) left join `datos_personales_externo` `dpe` on(coalesce(`pe`.`datos_personales_Id`,`ee`.`datos_personales_Id`,`sc`.`datos_personales_Id`,`c`.`datos_personales_Id`) = `dpe`.`id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_user_tutor`
--

/*!50001 DROP VIEW IF EXISTS `view_user_tutor`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `view_user_tutor` AS select `user`.`id` AS `id`,`user`.`createdAt` AS `createdAt`,`user`.`origin_img` AS `avatar`,`user_data`.`nombre` AS `firstName`,`user_data`.`apellidos` AS `lastName`,`user_data`.`telefono` AS `phone`,`user_data`.`correo` AS `email`,'Tutor' AS `role` from (((`tutor` join `profesor` `professor` on(`tutor`.`id` = `professor`.`id`)) join `usuario` `user` on(`professor`.`id` = `user`.`id`)) join `datos_personales_interno` `user_data` on(`tutor`.`datos_personales_Id` = `user_data`.`id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-05 17:25:20
