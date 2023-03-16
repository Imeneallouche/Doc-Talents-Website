DROP DATABASE IF EXISTS `DPGR`;
CREATE DATABASE `DPGR`;
USE DPGR; 

SET NAMES UTF8;


CREATE TABLE IF NOT EXISTS Doctorant(
    `Id_Doctorant` INT(5),
    `Nom` VARCHAR(9) CHARACTER SET utf8,
    `Prenom` VARCHAR(7) CHARACTER SET utf8,
    `Date_de_naissance` VARCHAR(12),
    `Etablissement_d_origine_Master` VARCHAR(3) CHARACTER SET utf8,
    `Telephone` INT(9),
    `Sexe` VARCHAR(1) CHARACTER SET utf8,
    `Option` VARCHAR(3) CHARACTER SET utf8,
    `Etablissement_dorigine_du_doctorant` VARCHAR(3) CHARACTER SET utf8,
    `Premiere_inscription` INT(5),
    `Nombre_d_inscriptions` INT(13),
    `Intitul_du_sujet` VARCHAR(15) CHARACTER SET utf8,
    `Id_Encadreur` INT(3),
    `Id_CoEncadreur` INT(3),
    `Date_enregistrement_fichier_central_des_theses` VARCHAR(12),
    `Laboratoire` VARCHAR(4) CHARACTER SET utf8,
    `Type_Doc` VARCHAR(9) CHARACTER SET utf8,
    `Situation` VARCHAR(8) CHARACTER SET utf8
);
INSERT INTO Doctorant VALUES 
	(1,'Louni','Imene','2004-04-06','ESI',94746454,'F','SIC','ESI',2023,5,'DEEP LEARNING ',11,21,'2023-05-06','LMCS','Doctorant','Inscrite'),
	(2,'Choukrane','Yasmine','2004-04-06','ESI',94746454,'F','SIC','ESI',2023,2,'DEEP LEARNING ',12,22,'2023-05-06','LMCS','Doctorant','Inscrite'),
	(3,'Allouche','Imene','2004-04-06','ESI',94746454,'F','SIC','ESI',2023,5,'CYBER SECURITY ',13,23,'2023-05-06','LMCS','Doctorant','Inscrite'),
	(4,'Louni','Imene','2004-04-06','ESI',94746454,'F','SIC','ESI',2023,3,'DEEP LEARNING ',14,24,'2023-05-06','LMCS','Doctorant','Inscrite'),
	(5,'Louni','Imene','2004-04-06','ESI',94746454,'F','SIC','ESI',2023,5,'DEEP LEARNING ',15,25,'2023-05-06','LMCS','Doctorant','Inscrite');


CREATE TABLE IF NOT EXISTS Encadrant(
    `Id_Encadreur` INT(5),
    `Nom` VARCHAR(9) CHARACTER SET utf8,
    `Prenom` VARCHAR(6) CHARACTER SET utf8,
    `Grade_de_l_encadreur_a_l_inscription_doctorant` VARCHAR(12) CHARACTER SET utf8,
    `Etabl` VARCHAR(3) CHARACTER SET utf8
);
INSERT INTO Encadrant VALUES 
	(11,'Louni','Said','Maitre ConfA','ESI'),
	(12,'khelifati','Said','Maitre ConfB','ESI'),
	(13,'Si tayeb','Nora','Maitre ConfA','ESI'),
	(14,'Khelouat','Said','Maitre ConfC','ESI'),
	(15,'Chachoua','Djamel','Enseignant','ESI');
    
    
CREATE TABLE IF NOT EXISTS PVs(
    `Id_pv` INT(30),
    `Link_to_PV` VARCHAR(30) CHARACTER SET utf8
);
INSERT INTO PVs VALUES 
	(21 , 'Link1'),
    (22 , 'Link2'),
	(23 , 'Link3'),
    (24 , 'Link4'),
	(25 , 'Link5'),
    (26 , 'Link6');
    

CREATE TABLE IF NOT EXISTS Inscription (
    `Id_Doctorant` INT(5),
    `Id_PV_annee` INT(20)
);
INSERT INTO Inscription VALUES 
	(1,31),
	(2,31),
	(3,31),
	(4,31),
	(5,31),
	(1,32);    