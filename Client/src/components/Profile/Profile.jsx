import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Profile() {
  const { username } = useParams();

  const RUNNING_URL = "http://localhost:5000";
  const ENDPOINT = "/Doctorant/";

  const [Doctorant, setDoctorant] = useState({});
  const [formData, setFormData] = useState({});

  /*





  */

  useEffect(() => {
    axios
      .get(RUNNING_URL + ENDPOINT + username)
      .then((response) => setDoctorant(response.data))
      .catch((error) => console.log(error));
  }, [username]);

  /*



  */

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`/Doctorant/${username}`, formData)
      .then((response) => {
        console.log("User updated successfully");
        // optionally redirect to a success page or refresh the user data
      })
      .catch((error) => console.log(error));
  };

  /*











  */

  return (
    <div className={`bg-white-bluish w-full h-full flex flex-col flex-1`}>
      <div className="flex flex-col items-center text-purple font-semibold text-2xl">
        <h1>Votre Doctorant: {Doctorant.nom + " " + Doctorant.prenom}</h1>
      </div>
      <form
        className="grid grid-cols-3 gap-10 bg-white border border-black rounded-lg py-4 px-10 ml-5 transform scale-90"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label className="ml-5 mt-5 text-black font-bold" htmlFor="nom">
            Nom du doctorant:
          </label>
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent"
            type="text"
            placeholder="/"
            name="nom"
            id="nom"
            value={Doctorant.nom}
            disabled
          />
          <label className="ml-5 mt-5 text-black font-bold" htmlFor="prenom">
            Prénom du doctorant:
          </label>
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="prenom"
            id="prenom"
            value={Doctorant.prenom}
            disabled
          />
          <label className="ml-5 mt-5 text-black font-bold" htmlFor="Matricule">
            ID du doctorant:
          </label>
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            id="Matricule"
            placeholder="/"
            name="Matricule"
            value={Doctorant.Id_Doctorant}
            disabled
          />

          <label
            className="ml-5 mt-5 text-black font-bold"
            htmlFor="Date_De_Naissance"
          >
            Date de naissance:
          </label>
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            placeholder="/"
            name="Date_De_Naissance"
            id="Date_De_Naissance"
            value={new Date(Doctorant.Date_naissance).toLocaleDateString(
              "en-CA"
            )}
            type="date"
            disabled
          />
          <label className="ml-5 mt-5 text-black font-bold" htmlFor="sexe">
            Sexe du doctorant:
          </label>
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="sexe"
            id="sexe"
            value={Doctorant.sexe}
            disabled
          />

          <label className="ml-5 mt-5 text-black font-bold" htmlFor="id_pv">
            ID du PV de la 1ère inscription:
          </label>
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            id="id_pv"
            placeholder="/"
            name="id_pv"
            value={Doctorant.Premiere_inscription}
            disabled
          />
          <button
            class="text-white bg-teal-500 p-5 mb-5 rounded-lg"
            type="submit"
          >
            <Link to="/Editprofile">Modifier</Link>
          </button>
          <button class="text-white bg-teal-500 p-5  rounded-lg" type="submit">
            Séminaires
          </button>
        </div>

        {/*
        
        
        
        
        
        
        
        
        
        
        */}
        <div className="flex flex-col">
          <label
            className="ml-5 mt-5 text-black font-bold"
            htmlFor="Numero_telephone"
          >
            Numero de telephone:
          </label>
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="Numero_telephone"
            id="Numero_telephone"
            value={Doctorant.telephone}
            disabled
          />

          <label className="ml-5 mt-5 text-black font-bold" htmlFor="Option">
            Option:
          </label>
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="Option"
            id="Option"
            value={Doctorant.Specialite}
            disabled
          />

          <label
            className="ml-5 mt-5 text-black font-bold"
            htmlFor="Type_Doctorat"
          >
            Type du doctorat:
          </label>
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="Type_Doctorat"
            id="Type_Doctorat"
            value={Doctorant.TypeDoctorat}
            disabled
          />
          <label className="ml-5 mt-5 text-black font-bold" htmlFor="statut">
            Statut du doctorant:
          </label>
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="statut"
            id="statut"
            value={Doctorant.statut}
            disabled
          />
          <label
            className="ml-5 mt-5 text-black font-bold"
            htmlFor="Laboratoire"
          >
            Laboratoire:
          </label>
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="laboratoire"
            id="Laboratoire"
            value={Doctorant.laboratoire}
            disabled
          />
          <label
            className="ml-5 mt-5 text-black font-bold"
            htmlFor="Date_soutenance"
          >
            Date de soutenance:
          </label>
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="date"
            id="Date_soutenance"
            value={new Date(Doctorant.date_soutenance).toLocaleDateString(
              "en-CA"
            )}
            placeholder="/"
            name="date_soutenance"
            disabled
          />

          <label className="ml-5 mt-5 text-black font-bold" htmlFor="Encadreur">
            Encadreur:
          </label>
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="Encadreur"
            id="Encadreur"
            value={Doctorant.Encadreur}
            disabled
          />
          <label
            className="ml-5 mt-5 text-black font-bold"
            htmlFor="Co-encadreur"
          >
            Co-encadreur:
          </label>
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="Co-encadreur"
            id="Co-encadreur"
            defaultValue={Doctorant.CoEncadreur}
            disabled
          />
        </div>

        {/*
        
        
        
        
        
        
        
        
        
        
        
        
        */}

        <div className="flex flex-col">
          <label
            className="mr-5 mt-5 text-black font-bold"
            htmlFor="etablissement_master"
          >
            Etablissement d'origine Master:
          </label>
          <input
            class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="etablissement_master"
            id="etablissement_master"
            value={Doctorant.Etablissement_origine_Master}
            disabled
          />
          <label
            className="mr-5 mt-5 text-black font-bold"
            htmlFor="etablissement_ingeniorat"
          >
            Etablissement d'origine Ingéniorat:
          </label>
          <input
            class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="etablissement_ingeniorat"
            id="etablissement_ingeniorat"
            value={Doctorant.Etablissement_origine_ingeniorat}
            disabled
          />
          <label
            className="mr-5 mt-5 text-black font-bold"
            htmlFor="etablissement_magestere"
          >
            Etablissement d'origine Magestere:
          </label>
          <input
            class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="etablissement_magestere"
            id="etablissement_magestere"
            value={Doctorant.Etablissement_origine_Magister}
            disabled
          />
          <label
            className="mr-5 mt-5 text-black font-bold"
            htmlFor="annee_inscription"
          >
            Première année d'inscription:
          </label>
          <input
            class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            id="annee_inscription"
            placeholder="/"
            name="annee_inscription"
            value={Doctorant.Premiere_inscription}
          />
          <label
            className="mr-5 mt-5 text-black font-bold"
            htmlFor="date_fichier_cnetral"
          >
            Date du fichier centrale:
          </label>
          <input
            class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="date"
            id="date_fichier_cnetral"
            placeholder="/"
            name="date_fichier_cnetral"
            value={new Date(Doctorant.Date_fichier_central).toLocaleDateString(
              "en-CA"
            )}
            disabled
          />
          <label
            className="mr-5 mt-5 text-black font-bold"
            htmlFor="nombre_inscriptions"
          >
            Nombre d'inscriptions:
          </label>
          <input
            class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="nombre_inscriptions"
            id="nombre_inscriptions"
            value={Doctorant.Nombre_inscriptions}
            disabled
          />

          <label
            className="mr-5 mt-5 text-black font-bold"
            htmlFor="Intitule_these"
          >
            Intitulé de thèse:
          </label>
          <input
            class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="Intitule_these"
            id="Intitule_these"
            value={Doctorant.intitule_sujet}
            disabled
          />
          <label
            className="mr-5 mt-5 text-black font-bold"
            htmlFor="Intitule_sujet_bis"
          >
            Intitulé sujet bis:
          </label>
          <input
            class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="Intitule_sujet_bis"
            id="Intitule_sujet_bis"
            defaultValue={Doctorant.intitule_sujet_bis}
            disabled
          />
        </div>
      </form>
    </div>
  );
}

export default Profile;
