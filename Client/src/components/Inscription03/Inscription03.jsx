import React, { useState } from "react";

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

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(`Email: ${email}, Password: ${password}`);
  };

  /*


















  */

  return (
    <form
      className="m-10 grow flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <section className="flex w-full">
        <div className="m-4 flex flex-col flex-1">
          <label
            htmlFor="Nom"
            className={`font-bold text-dark-purple focus:text-green`}
          >
            Nom d'encadreur
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
          <label htmlFor="Prenom" className={`font-bold text-dark-purple`}>
            Prénom d'encadreur
          </label>
          <input
            className="bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0"
            type="text"
            id="Prenom"
            name="Prenom"
            placeholder="ex : Fatima"
            value={Prenom}
            onChange={(event) => setPrenom(event.target.value)}
            required
          />
        </div>

        <div className="m-4 flex flex-col flex-1">
          {" "}
          <label
            htmlFor="Etablissement"
            className={`font-bold text-dark-purple`}
          >
            Etablissement d'encadreur
          </label>
          <input
            className="bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0"
            type="text"
            id="Etablissement"
            name="Etablissement"
            value={Etablissement}
            placeholder="ex : FabLab"
            onChange={(event) => setEtablissement(event.target.value)}
            required
          />
        </div>
      </section>

      <section className="flex w-full">
        <div className="m-4 flex flex-col flex-1">
          <label
            htmlFor="Diplome"
            className={`font-bold text-dark-purple focus:text-green`}
          >
            Diplome
          </label>
          <input
            className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
            id="Diplome"
            name="Diplome"
            value={Diplome}
            placeholder="ex : Doctorat en génie mécanique"
            onChange={(event) => setDiplome(event.target.value)}
            required
          />
        </div>
        <div className="m-4 flex flex-col flex-1">
          {" "}
          <label htmlFor="Grade" className={`font-bold text-dark-purple`}>
            Grade
          </label>
          <input
            className="bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0"
            type="text"
            id="Grade"
            name="Grade"
            placeholder="ex : Proffesseur"
            value={Grade}
            onChange={(event) => setGrade(event.target.value)}
            required
          />
        </div>

        <div className="m-4 flex flex-col flex-1">
          {" "}
          <label htmlFor="Tel" className={`font-bold text-dark-purple`}>
            Numéro du téléphone
          </label>
          <input
            className="bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0"
            type="tel"
            id="Tel"
            name="Tel"
            value={Telephone}
            placeholder="ex : 0699240858"
            onChange={(event) => setTelephone(event.target.value)}
            required
          />
        </div>
      </section>

      <section className="flex w-full">
        <div className="m-4 flex flex-col flex-1">
          <label
            htmlFor="Email"
            className={`font-bold text-dark-purple focus:text-green`}
          >
            Email
          </label>
          <input
            className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="email"
            id="Email"
            name="Email"
            value={Email}
            placeholder="ex : youremail@gmail.com"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="m-4 flex flex-col flex-1">
          {" "}
          <label htmlFor="Specialite" className={`font-bold text-dark-purple`}>
            Spécialité
          </label>
          <input
            className="bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0"
            type="text"
            id="Specialite"
            name="Specialite"
            placeholder="ex : Génie mécanique"
            value={Specialite}
            onChange={(event) => setSpecialite(event.target.value)}
            required
          />
        </div>

        <div className="m-4 flex flex-col flex-1">
          {" "}
          <label
            htmlFor="SujetsInteret"
            className={`font-bold text-dark-purple`}
          >
            Sujets d'interet
          </label>
          <input
            className="bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0"
            type="text"
            id="SujetsInteret"
            name="SujetsInteret"
            value={SujetInteret}
            placeholder="ex : Machine learning, Cybersecurity, ..."
            onChange={(event) => setSujetInteret(event.target.value)}
            required
          />
        </div>
      </section>
      <div>
        <button
          className="submit-form suivant m-5 px-8 py-4 w-fit bg-dark-purple rounded-md text-white"
          type="button"
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
