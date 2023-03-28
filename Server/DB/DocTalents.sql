CREATE TABLE `Doctorant` (
  `Id_Doctorant` varchar(255),
  `nom` varchar(255),
  `prenom` varchar(255),
  `Date_naissance` date,
  `sexe` char,
  `mail` varchar(255),
  `telephone` varchar(255),
  `TypeDoctorat` varchar(255),
  `Etablissement_origine_Master` TEXT,
  `Etablissement_origine_ingeniorat` TEXT,
  `Etablissement_origine_Magistere` TEXT,
  `Specialite` varchar(255),
  `intitule_sujet` TEXT,
  `intitule_sujet_bis` TEXT,
  `PV_changement_these` varchar(255),
  `Premiere_inscription` date,
  `Nombre_inscriptions` SMALLINT,
  `Date_fichier_central` date,
  `Id_Encadreur` int,
  `Id_CoEncadreur` int,
  `laboratoire` TEXT,
  `soutenu` varchar(255),
  `date_soutenance` date,
  `radie` varchar(255),
  `differe` varchar(255),
  `abandon` varchar(255)
);

CREATE TABLE `DPGR` (
  `Role` varchar(255),
  `nom` varchar(255),
  `prenom` varchar(255),
  `Date_naissance` date,
  `telephone` varchar(255),
  `sexe` char,
  `mail` varchar(255),
  `password` varchar(255)
);

CREATE TABLE `Encadrant` (
  `Id_Encadreur` int PRIMARY KEY AUTO_INCREMENT,
  `nom` varchar(255),
  `prenom` varchar(255),
  `grade` TEXT,
  `Etablissement` TEXT,
  `specialite` TEXT,
  `diplome` TEXT,
  `mail` varchar(255),
  `telephone` int,
  `laboratoire` TEXT,
  `Sujets_interet` TEXT
);

CREATE TABLE `PV` (
  `Id_PV` varchar(255),
  `Link_PV` TEXT
);

CREATE TABLE `Inscription` (
  `Id_Doctorant` varchar(255),
  `Id_PV` varchar(255)
);

CREATE TABLE `Seminaire` (
  `Id_Doctorant` varchar(255),
  `titre` varchar(255),
  `resume` TEXT
);

ALTER TABLE `Doctorant` ADD FOREIGN KEY (`Id_Encadreur`) REFERENCES `Encadrant` (`Id_Encadreur`);

ALTER TABLE `Doctorant` ADD FOREIGN KEY (`Id_CoEncadreur`) REFERENCES `Encadrant` (`Id_Encadreur`);

ALTER TABLE `Inscription` ADD FOREIGN KEY (`Id_PV`) REFERENCES `PV` (`Id_PV`);

ALTER TABLE `Inscription` ADD FOREIGN KEY (`Id_Doctorant`) REFERENCES `Doctorant` (`Id_Doctorant`);

ALTER TABLE `Doctorant` ADD FOREIGN KEY (`soutenu`) REFERENCES `PV` (`Id_PV`);

ALTER TABLE `Doctorant` ADD FOREIGN KEY (`radie`) REFERENCES `PV` (`Id_PV`);

ALTER TABLE `PV` ADD FOREIGN KEY (`Id_PV`) REFERENCES `Doctorant` (`abandon`);

ALTER TABLE `Doctorant` ADD FOREIGN KEY (`PV_changement_these`) REFERENCES `PV` (`Id_PV`);

ALTER TABLE `Seminaire` ADD FOREIGN KEY (`Id_Doctorant`) REFERENCES `Doctorant` (`Id_Doctorant`);
