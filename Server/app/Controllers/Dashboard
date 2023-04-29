const express = require('express');
const app = express();
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const optionBD ={
    host: 'bi8rqfiqnirh9lxoqlvx-mysql.services.clever-cloud.com',
    user: 'us8pi6zpi1yugtqt',
    password: 'RMueTG5ErjBW3lCO21ix',
    database: 'bi8rqfiqnirh9lxoqlvx',
    port : 3306
}

let nbDoctorants;
let nbDoctorantsHomme;
let nbDoctorantsFemme;
let moyDoctorantsHomme;
let moyDoctorantsFemme;
let lisDoctorants = [];
let lisDoctorantsHomme = [];
let lisDoctorantsFemme = [];
const currentYear = new Date().getFullYear();

app.use(express.urlencoded({ extended:false}))

app.use(myConnection(mysql, optionBD,'pool'))

app.get("/dashboard",(req,res)=>{
    req.getConnection((err,connection)=>{
        if(err){
            console.log(err);
        }else{
            connection.query("SELECT * FROM Doctorant",[],(err,res1)=>{
                if(err){
                    console.log(err);
                }else{

                    nbDoctorants = res1.length;
                    for (let i = 2012; i <= currentYear; i++) {
                      let cpt = 0;
                      for (let j = 0; j < res1.length; j++) {
                        if ((res1[j].Premiere_inscription <= i) && ((res1[j].Premiere_inscription + res1[j].Nombre_inscriptions) >= i)) {
                            cpt++;
                        }
                      }
                      lisDoctorants[i-2012] = cpt;
                    }
                    console.log(1,nbDoctorants);
                    console.log(lisDoctorants);
                }
            });
            connection.query("SELECT * FROM Doctorant where sexe = 'M'",[],(err,res2)=>{
                if(err){
                    console.log(err);
                }else{
                    nbDoctorantsHomme = res2.length;
                    moyDoctorantsHomme = res2.length/(currentYear-2011)
                    for (let i = 2012; i <= currentYear; i++) {
                      let cpt = 0;
                      for (let j = 0; j < res2.length; j++) {
                        if ((res2[j].Premiere_inscription <= i) && ((res2[j].Premiere_inscription + res2[j].Nombre_inscriptions) >= i)) {
                            cpt++;
                        }
                      }
                      lisDoctorantsHomme[i-2012] = cpt;
                    }
                    console.log(2,nbDoctorantsHomme);
                    console.log(moyDoctorantsHomme)
                    console.log(lisDoctorantsHomme);
                }
            });
            connection.query("SELECT * FROM Doctorant where sexe = 'F'",[],(err,res3)=>{
                if(err){
                    console.log(err);
                }else{
                    nbDoctorantsFemme = res3.length;
                    moyDoctorantsFemme = res3.length/(currentYear-2011)
                    for (let i = 2012; i <= currentYear; i++) {
                      let cpt = 0;
                      for (let j = 0; j < res3.length; j++) {
                        if ((res3[j].Premiere_inscription <= i) && ((res3[j].Premiere_inscription + res3[j].Nombre_inscriptions) >= i)) {
                            cpt++;
                        }
                      }
                      lisDoctorantsFemme[i-2012] = cpt;
                    }
                    console.log(3,nbDoctorantsFemme);
                    console.log(moyDoctorantsFemme)
                    console.log(lisDoctorantsFemme);
                }
            });

            
        }
    })

})

    
app.listen(5000,()=>{
    console.log('Server listening on port 5000')
})
