const dbconnected = require('../../../DB/db_config')


    //Champs inserted successfully
    var sql = "INSERT INTO Doctorant (Id_Doctorant,nom,prenom,Date_naissance,sexe,mail,telephone,TypeDoctorant,Etablissement_origine_Master,Etablissement_origine_ingeniorat,Etablissement_origine_Magestere,Specialite,intitule_sujet,intitule_sujet_bis,PV_changement_these,Premiere_inscription,Nombre_inscriptions,Date_fichier_central,Id_Encadreur,Id_CoEncadreur,laboratoire,soutenu,date_soutenance,radie,differe,abandon) VALUES ?";
    var values = [
    [5000 , "Saidi" , "Hamid" , "04-06-1999", 'H' , 'li_saidi@esi.dz' , 8 , 'LMD' , 'ESI' , null, null, 'SID' , 'Deep Learning' , null , null , "2020-02-13" , 3 , "2017-01-01 ", 3020 , 3022 , 'FabLab' , 1 , null , 1 , 1 , 1], 
    [5001 , "Louni" , "Imene" , "07-06-1998", 'F' , 'li_louni@esi.dz' , 8 , 'LMD' , 'ESI' , null, null, 'SID' , 'Deep Learning' , null , null , "2020-02-13" , 3 , "2017-01-01 ", 3020 , 3022 , 'FabLab' , 1 , null , 1 , 1 , 1], 
    ] 

    

    dbconnected.query(sql , [values]); 
    console.log("Record(s) inserted successfully"); 