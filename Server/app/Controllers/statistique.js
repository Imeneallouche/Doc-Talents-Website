const express = require('express');
const app = express();
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const optionBD = {
    host: 'bi8rqfiqnirh9lxoqlvx-mysql.services.clever-cloud.com',
    user: 'us8pi6zpi1yugtqt',
    password: 'RMueTG5ErjBW3lCO21ix',
    database: 'bi8rqfiqnirh9lxoqlvx',
    port: 3306
}
let nbDoctorants;
let moyenne;
let max;
let min;
let list = [];
const currentYear = new Date().getFullYear();


app.use(express.urlencoded({ extended: false }))

app.use(myConnection(mysql, optionBD, 'pool'))


app.get("/statistique",(req, res) => {
  
  res.send({nbDoctorants,moyenne,max,min,list})
})


 


app.post("/statistiqueForm", (req, res) => {
    const { critere1, critere2, première_année, dernière_année } =
        req.body;
    if (dernière_année === "") { dernière_année = currentYear }
    if ((critere1 === "Femme") && (critere2 === "aucun")) { reqsql = "SELECT * FROM Doctorant WHERE sexe='F'AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?" }
    if ((critere1 === "Homme") && (critere2 === "aucun")) { reqsql = "SELECT * FROM Doctorant WHERE sexe='M'AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?" }
    if ((critere1 === "soutenu") && (critere2 === "aucun")) { reqsql = "SELECT * FROM Doctorant WHERE soutenu IS NOT NULL  AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?" }
    if ((critere1 === "radié") && (critere2 === "aucun")) { reqsql = "SELECT * FROM Doctorant WHERE radie IS NOT NULL AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?" }
    if ((critere1 === "inf5") && (critere2 === "aucun")) { reqsql = "SELECT * FROM Doctorant WHERE Nombre_inscriptions<5 AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?" }
    if ((critere1 === "entre5_10") && (critere2 === "aucun")) { reqsql = "SELECT * FROM Doctorant WHERE 5<Nombre_inscriptions AND Nombre_inscriptions<10 AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?" }
    if ((critere1 === "sup10") && (critere2 === "aucun")) { reqsql = "SELECT * FROM Doctorant WHERE Nombre_inscriptions>10 AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?" }
    if (((critere1 === "Femme") && (critere2 === "soutenu")) || ((critere1 === "soutenu") && (critere2 === "Femme"))) {
        reqsql = "SELECT * FROM Doctorant WHERE sexe='F' AND soutenu IS NOT NULL AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?";
      }
      if (((critere1 === "Homme") && (critere2 === "soutenu")) || ((critere1 === "soutenu") && (critere2 === "Homme"))) {
        reqsql = "SELECT * FROM Doctorant WHERE sexe='M' AND soutenu IS NOT NULL AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?";
      }

      if (((critere1 === "Femme") && (critere2 === "radié")) || ((critere1 === "radié") && (critere2 === "Femme"))) {
        reqsql = "SELECT * FROM Doctorant WHERE sexe='F' AND radie IS NOT NULL AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?";
      }
      if (((critere1 === "Homme") && (critere2 === "radié")) || ((critere1 === "radié") && (critere2 === "Homme"))) {
        reqsql = "SELECT * FROM Doctorant WHERE sexe='M' AND radie IS NOT NULL AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?";
      }
      if (((critere1 === "Femme") && (critere2 === "inscrit")) || ((critere1 === "inscrit") && (critere2 === "Femme"))) {
        reqsql = "SELECT * FROM Doctorant WHERE sexe='F' AND statut ='inscrit' AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?";
      }
      if (((critere1 === "Homme") && (critere2 === "inscrit")) || ((critere1 === "inscrit") && (critere2 === "Homme"))) {
        reqsql = "SELECT * FROM Doctorant WHERE sexe='M' AND statut ='inscrit' AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?";
      }
      if (((critere1 === "Femme") && (critere2 === "différé")) || ((critere1 === "différé") && (critere2 === "Femme"))) {
        reqsql = "SELECT * FROM Doctorant WHERE sexe='F' AND statut ='différé' AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?";
      }
      if (((critere1 === "Homme") && (critere2 === "différé")) || ((critere1 === "différé") && (critere2 === "Homme"))) {
        reqsql = "SELECT * FROM Doctorant WHERE sexe='M' AND statut ='différé' AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?";
      }
      if (((critere1 === "Femme") && (critere2 === "inf5")) || ((critere1 === "inf5") && (critere2 === "Femme"))) {
        reqsql = "SELECT * FROM Doctorant WHERE sexe='F' AND Nombre_inscriptions < 5 AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?";
      }
      if (((critere1 === "Homme") && (critere2 === "inf5")) || ((critere1 === "inf5") && (critere2 === "Homme"))) {
        reqsql = "SELECT * FROM Doctorant WHERE sexe='M' AND Nombre_inscriptions < 5 AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?";
      }
      if (((critere1 === "Femme") && (critere2 === "entre5_10")) || ((critere1 === "entre5_10") && (critere2 === "Femme"))) {
        reqsql = "SELECT * FROM Doctorant WHERE sexe='F' AND Nombre_inscriptions >= 5 AND Nombre_inscriptions =< 10 AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?";
     }
     if (((critere1 === "Homme") && (critere2 === "entre5_10")) || ((critere1 === "entre5_10") && (critere2 === "Homme"))) {
        reqsql = "SELECT * FROM Doctorant WHERE sexe='M' AND Nombre_inscriptions >= 5 AND Nombre_inscriptions =< 10 AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?";
     }
     if (((critere1 === "Femme") && (critere2 === "sup10")) || ((critere1 === "sup10") && (critere2 === "Femme"))) {
        reqsql = "SELECT * FROM Doctorant WHERE sexe='F'  AND Nombre_inscriptions > 10 AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?";
     }
     if (((critere1 === "Homme") && (critere2 === "sup10")) || ((critere1 === "sup10") && (critere2 === "Homme"))) {
        reqsql = "SELECT * FROM Doctorant WHERE sexe='M' AND Nombre_inscriptions > 10 AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?";
     }
     if (((critere1 === "radié") && (critere2 === "sup10")) || ((critere1 === "sup10") && (critere2 === "radié"))) {
      reqsql = "SELECT * FROM Doctorant WHERE radie IS NOT NULL AND Nombre_inscriptions > 10 AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?";
    }
    if (((critere1 === "soutenu") && (critere2 === "sup10")) || ((critere1 === "sup10") && (critere2 === "soutenu"))) {
      reqsql = "SELECT * FROM Doctorant WHERE soutenu IS NOT NULL AND Nombre_inscriptions > 10 AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?";
    }
    if (((critere1 === "inscrit") && (critere2 === "sup10")) || ((critere1 === "sup10") && (critere2 === "inscrit"))) {
      reqsql = "SELECT * FROM Doctorant WHERE statut ='inscrit' AND Nombre_inscriptions > 10 AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?";
    }
    if (((critere1 === "différé") && (critere2 === "sup10")) || ((critere1 === "sup10") && (critere2 === "différé"))) {
      reqsql = "SELECT * FROM Doctorant WHERE statut ='différé' AND Nombre_inscriptions > 10 AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?";
    }
    if (((critere1 === "radié") && (critere2 === "entre5_10")) || ((critere1 === "entre5_10") && (critere2 === "radié"))) {
      reqsql = "SELECT * FROM Doctorant WHERE radie IS NOT NULL AND Nombre_inscriptions >= 5 AND Nombre_inscriptions =< 10 AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?";
   }
   if (((critere1 === "soutenu") && (critere2 === "entre5_10")) || ((critere1 === "entre5_10") && (critere2 === "soutenu"))) {
      reqsql = "SELECT * FROM Doctorant WHERE soutenu IS NOT NULL AND Nombre_inscriptions >= 5 AND Nombre_inscriptions =< 10 AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?";
   }
   if (((critere1 === "inscrit") && (critere2 === "entre5_10")) || ((critere1 === "entre5_10") && (critere2 === "inscrit"))) {
    reqsql = "SELECT * FROM Doctorant WHERE statut ='inscrit' AND Nombre_inscriptions >= 5 AND Nombre_inscriptions =< 10 AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?";
 }
 if (((critere1 === "différé") && (critere2 === "entre5_10")) || ((critere1 === "entre5_10") && (critere2 === "différé"))) {
    reqsql = "SELECT * FROM Doctorant WHERE statut ='différé' AND Nombre_inscriptions >= 5 AND Nombre_inscriptions =< 10 AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?";
 }
   if (((critere1 === "radié") && (critere2 === "inf5")) || ((critere1 === "inf5") && (critere2 === "radié"))) {
    reqsql = "SELECT * FROM Doctorant WHERE radie IS NOT NULL AND Nombre_inscriptions < 5 AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?";
  }
  if (((critere1 === "soutenu") && (critere2 === "inf5")) || ((critere1 === "inf5") && (critere2 === "soutenu"))) {
    reqsql = "SELECT * FROM Doctorant WHERE soutenu IS NOT NULL  AND Nombre_inscriptions < 5 AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?";
  }
  if (((critere1 === "inscrit") && (critere2 === "inf5")) || ((critere1 === "inf5") && (critere2 === "inscrit"))) {
    reqsql = "SELECT * FROM Doctorant WHERE statut ='inscrit' AND Nombre_inscriptions < 5 AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?";
  }
  if (((critere1 === "différé") && (critere2 === "inf5")) || ((critere1 === "inf5") && (critere2 === "différé"))) {
    reqsql = "SELECT * FROM Doctorant WHERE statut ='différé'  AND Nombre_inscriptions < 5 AND (Nombre_inscriptions + Premiere_inscription) =< ? AND Premiere_inscription >= ?";
  }

     req.getConnection((err, connection) => {
        if(err){
            console.log(err);
        }else{
    connection.query(reqsql, [dernière_année, première_année], (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).send('Error generating statistiques');}
        else 
        {
            nbDoctorants=results.length;
            let maxi=0;
            let mini=results.length;
            moyenne=results.length/(dernière_année-première_année +1 );
            for(let i=première_année;i<=dernière_année;i++){
                let cpt=0;
                for(let j=0;j<nbDoctorants;j++){
                    if((results[j].Premiere_inscription <= i) && ((results[j].Premiere_inscription + results[j].Nombre_inscriptions) >= i)){
                        cpt++
                    }
                    list[i-première_année]=cpt;
                    if (cpt>maxi){maxi=cpt;max=i};
                    if(cpt<mini){mini=cpt;min=i};
                }
            }
            res.send({nbDoctorants,moyenne,max,min,list})
            
        }
        })
}
})


})



app.listen(5000,()=>{
    console.log('Server listening on port 5000')
})
