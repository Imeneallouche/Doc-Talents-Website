const connection = require("../../DB/db_config");

const DashboardStatistics = (req, res) => {
  let nbDoctorants;
  let nbDoctorantsHomme;
  let nbDoctorantsFemme;
  let moyDoctorantsHomme;
  let moyDoctorantsFemme;
  let lisDoctorants = [];
  let lisDoctorantsHomme = [];
  let lisDoctorantsFemme = [];

  const currentYear = new Date().getFullYear();

  connection.query("SELECT * FROM Doctorant", [], (err, res1) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    } else {
      nbDoctorants = res1.length;
      for (let i = 2012; i <= currentYear; i++) {
        let cpt = 0;
        for (let j = 0; j < res1.length; j++) {
          if (
            res1[j].Premiere_inscription <= i &&
            res1[j].Premiere_inscription + res1[j].Nombre_inscriptions >= i
          ) {
            cpt++;
          }
        }
        lisDoctorants[i - 2012] = cpt;
      }
      connection.query(
        "SELECT * FROM Doctorant where sexe = 'M'",
        [],
        (err, res2) => {
          if (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
          } else {
            nbDoctorantsHomme = res2.length;
            moyDoctorantsHomme = res2.length / nbDoctorants;
            for (let i = 2012; i <= currentYear; i++) {
              let cpt = 0;
              for (let j = 0; j < res2.length; j++) {
                if (
                  res2[j].Premiere_inscription <= i &&
                  res2[j].Premiere_inscription + res2[j].Nombre_inscriptions >=
                    i
                ) {
                  cpt++;
                }
              }
              lisDoctorantsHomme[i - 2012] = cpt;
            }
            connection.query(
              "SELECT * FROM Doctorant where sexe = 'F'",
              [],
              (err, res3) => {
                if (err) {
                  console.log(err);
                  res.status(500).send("Internal Server Error");
                } else {
                  nbDoctorantsFemme = res3.length;
                  moyDoctorantsFemme = res3.length / nbDoctorants;
                  for (let i = 2012; i <= currentYear; i++) {
                    let cpt = 0;
                    for (let j = 0; j < res3.length; j++) {
                      if (
                        res3[j].Premiere_inscription <= i &&
                        res3[j].Premiere_inscription +
                          res3[j].Nombre_inscriptions >=
                          i
                      ) {
                        cpt++;
                      }
                    }
                    lisDoctorantsFemme[i - 2012] = cpt;
                  }
                  // send response to the frontend
                  res.send({
                    nbDoctorants,
                    nbDoctorantsHomme,
                    nbDoctorantsFemme,
                    moyDoctorantsHomme,
                    moyDoctorantsFemme,
                    lisDoctorants,
                    lisDoctorantsHomme,
                    lisDoctorantsFemme,
                  });
                }
              }
            );
          }
        }
      );
    }
  });
};

module.exports = DashboardStatistics;
