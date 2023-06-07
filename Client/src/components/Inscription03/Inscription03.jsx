import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

function Inscription03() {
  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [Etablissement, setEtablissement] = useState("");

  const [Diplome, setDiplome] = useState("");
  const [Grade, setGrade] = useState("");
  const [Telephone, setTelephone] = useState("");

  const [Email, setEmail] = useState("");
  const [Specialite, setSpecialite] = useState("");
  const [SujetInteret, setSujetInteret] = useState("");

  const history = useHistory();
  const location = useLocation();
  let { info } = location.state;
  console.log(info);

  const RUNNING_URL = "http://localhost:5000";
  const ENDPOINT = "/RegisterEncadrant";

  const handleNext = async (event) => {
    event.preventDefault();
    const EncadrantData = {
      Nom,
      Prenom,
      Etablissement,
      Diplome,
      Grade,
      Telephone,
      Email,
      Specialite,
      SujetInteret,
    };

    const response = await axios.post(RUNNING_URL + ENDPOINT, EncadrantData);
    console.log(response);

    if (info.type == 2) {
      console.log(`again to register : ${info.name2}`); //co encadreur

      let name = info.name2;
      info = { type: 1, name };
      let encadreur = EncadrantData;

      history.push({
        pathname: "/Inscription/Step3",
        state: { encadreur, info }, //not defined yet
      });
    } else {
      if (info.type == 0) {
        const encadreur = EncadrantData;
        const { coencadreur } = location.state;
        history.push({
          pathname: "/Inscription/ConfirmEncadrant",
          state: { encadreur, coencadreur }, //not defined yet
        });
      } else {
        let coencadreur = EncadrantData;
        let { encadreur } = location.state;
        history.push({
          pathname: "/Inscription/ConfirmEncadrant",
          state: { encadreur, coencadreur }, //not defined yet
        });
      }
    }
  };

  const handlePrevious = (event) => {
    event.preventDefault();
    history.goBack();
  };

  /*


















  */

  return (
    <form
      className="m-10 grow flex flex-col justify-center items-center"
      onSubmit={handleNext}
    >
      <section className="flex w-full">
        <div className="m-4 flex flex-col flex-1">
          <label
            htmlFor="Nom"
            className={`font-medium text-dark-purple focus:text-green`}
          >
            Nom de l'encadreur
          </label>
          <input
            className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
            id="Nom"
            name="Nom"
            value={Nom}
            placeholder="ex : Si Tayeb"
            onChange={(event) => setNom(event.target.value)}
            required
          />
        </div>
        <div className="m-4 flex flex-col flex-1">
          {" "}
          <label htmlFor="Prenom" className={`font-medium text-dark-purple`}>
            Prénom de l'encadreur
          </label>
          <input
            className="bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0"
            type="text"
            id="Prenom"
            name="Prenom"
            placeholder="exemple : Fatima"
            value={Prenom}
            onChange={(event) => setPrenom(event.target.value)}
            required
          />
        </div>

        <div className="m-4 flex flex-col flex-1">
          {" "}
          <label
            htmlFor="Etablissement"
            className={`font-medium text-dark-purple`}
          >
            Etablissement de l'encadreur
          </label>
          <input
            className="bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0"
            type="text"
            id="Etablissement"
            name="Etablissement"
            value={Etablissement}
            placeholder="exemple : FabLab"
            onChange={(event) => setEtablissement(event.target.value)}
            required
          />
        </div>
      </section>

      <section className="flex w-full">
        <div className="m-4 flex flex-col flex-1">
          <label
            htmlFor="Diplome"
            className={`font-medium text-dark-purple focus:text-green`}
          >
            Diplôme
          </label>
          <input
            className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
            id="Diplome"
            name="Diplome"
            value={Diplome}
            placeholder="exemple : Doctorat en génie mécanique"
            onChange={(event) => setDiplome(event.target.value)}
            required
          />
        </div>
        <div className="m-4 flex flex-col flex-1">
          {" "}
          <label htmlFor="Grade" className={`font-medium text-dark-purple`}>
            Grade
          </label>
          <input
            className="bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0"
            type="text"
            id="Grade"
            name="Grade"
            placeholder="exemple : Proffesseur"
            value={Grade}
            onChange={(event) => setGrade(event.target.value)}
            required
          />
        </div>

        <div className="m-4 flex flex-col flex-1">
          {" "}
          <label htmlFor="Tel" className={`font-medium text-dark-purple`}>
            Numéro de téléphone
          </label>
          <input
            className="bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0"
            type="tel"
            id="Tel"
            name="Tel"
            value={Telephone}
            placeholder="exemple : 0699240858"
            onChange={(event) => setTelephone(event.target.value)}
            required
          />
        </div>
      </section>

      <section className="flex w-full">
        <div className="m-4 flex flex-col flex-1">
          <label
            htmlFor="Email"
            className={`font-medium text-dark-purple focus:text-green`}
          >
            E-mail
          </label>
          <input
            className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="email"
            id="Email"
            name="Email"
            value={Email}
            placeholder="exemple : youremail@gmail.com"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="m-4 flex flex-col flex-1">
          {" "}
          <label
            htmlFor="Specialite"
            className={`font-medium text-dark-purple`}
          >
            Spécialité
          </label>
          <input
            className="bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0"
            type="text"
            id="Specialite"
            name="Specialite"
            placeholder="exemple : Génie mécanique"
            value={Specialite}
            onChange={(event) => setSpecialite(event.target.value)}
            required
          />
        </div>

        <div className="m-4 flex flex-col flex-1">
          {" "}
          <label
            htmlFor="SujetsInteret"
            className={`font-medium text-dark-purple`}
          >
            Sujets d'intérêt
          </label>
          <input
            className="bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0"
            type="text"
            id="SujetsInteret"
            name="SujetsInteret"
            value={SujetInteret}
            placeholder="exemple : Machine learning, Cybersecurity, ..."
            onChange={(event) => setSujetInteret(event.target.value)}
            required
          />
        </div>
      </section>
      <div>
        <button
          className="submit-form suivant m-5 px-8 py-4 w-fit bg-dark-purple rounded-md text-white"
          type="button"
          onClick={handlePrevious}
        >
          Précédant
        </button>

        <button
          className="submit-form suivant m-5 px-8 py-4 w-fit bg-dark-purple rounded-md text-white"
          type="submit"
        >
          Confirmer
        </button>
      </div>
    </form>
  );
}

export default Inscription03;
