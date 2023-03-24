const connected = require("../../../DB/db_config");

const Reinscription = async (req, res) => {
  console.log(req.body);
  const { Id_Doctorant, email, password, passwordConfirm } = req.body;

  const non_soutenu = 0;
  const non_radie = null;
  const non_abandon = null;

  /*
  
  
  
  
  FIRST QUERY : SEARCH THE DOCTORANT ID KNOWING THAT HE DIDN'T ABONDAN, GET EXLUDED or SUSTAINED*/
  const SearchDoctorantQuery =
    "SELECT Nombre_inscriptions FROM Doctorant WHERE Id_Doctorant = ? AND soutenu = ? AND radie = ? AND abondan = ?";

  const SearchDoctorantValues = [
    Id_Doctorant,
    non_soutenu,
    non_radie,
    non_abandon,
  ];

  connected.query(
    SearchDoctorantQuery,
    SearchDoctorantValues,
    async (SearchDoctorantErr, SearchDoctorantResults) => {
      if (SearchDoctorantErr) {
        console.log(SearchDoctorantErr);
        return SearchDoctorantErr;
      } else {
        if (SearchDoctorantResults.length == 0) {
          return res.sendFile(__dirname + "request.html", {
            message: "No such an Id found",
          });
        }
      }

      /*SECOND QUERY: INCREMENT THE NUMBER OF YEARS OF REGISTRATIONS OF THE DOCTORANT*/

      const IncrementInscriptionYearsQuery =
        "UPDATE Doctorant SET Nombre_inscription = ?";

      const NombreInscriptionAncien =
        SearchDoctorantResults[0].nombre_inscriptions;

      const IncrementInscriptionYearsValues = [NombreInscriptionAncien + 1];

      connected.query(
        IncrementInscriptionYearsQuery,
        IncrementInscriptionYearsValues,
        (IncrementInscriptionYearsErr, IncrementInscriptionYearsResult) => {
          if (IncrementInscriptionYearsErr) {
            console.log(IncrementInscriptionYearsErr);
          } else {
            return res.sendFile(__dirname + "request.html", {
              message:
                "Number of registration years has been successfully incremented",
            });
          }
        }
      );
    }
  );
  res.send("Form submitted");
};
