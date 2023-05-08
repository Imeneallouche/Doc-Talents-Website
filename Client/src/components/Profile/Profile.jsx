import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Profile() {
  const { username } = useParams();

  const RUNNING_URL = "http://localhost:5000";
  const ENDPOINT = "/Doctorant/";

  const [Doctorant, setDoctorant] = useState({});
  const [formData, setFormData] = useState({});
  const [Editable, setEditable] = useState(false);

  const [nom, setnom] = useState('');
  const [prenom, setprenom] = useState('');
  const [Id_Doctorant, setId_Doctorant] = useState('');
  const [Date_naissance, setDate_naissance] = useState('');
  const [sexe, setsexe] = useState('');
  const [Premiere_inscription, setPremiere_inscription] = useState('');
  const [Specialite, setSpecialite] = useState('');
  const [telephone, settelephone] = useState('');
  const [TypeDoctorat, setTypeDoctorat] = useState('');
  const [laboratoire, setlaboratoire] = useState('');
  const [status, setstatus] = useState('');
  const [date_soutenance, setdate_soutenance] = useState('');
  const [Encadreur, setEncadreur] = useState('');
  const [CoEncadreur, setCoEncadreur] = useState('');
  const [Etablissement_origine_Master, setEtablissement_origine_Master] = useState('');
  const [Etablissement_origine_ingeniorat, setEtablissement_origine_ingeniorat] = useState('');
  const [Etablissement_origine_Magister, setEtablissement_origine_Magister] = useState('');
  const [Date_fichier_central, setDate_fichier_central] = useState('');
  const [Nombre_inscriptions, setNombre_inscriptions] = useState('');
  const [intitule_sujet_bis, setintitule_sujet_bis] = useState('');
  const [intitule_sujet, setintitule_sujet] = useState('');

  useEffect(() => {
    axios
      .get(RUNNING_URL + ENDPOINT + username)
      .then((response) => setDoctorant(response.data))
      .catch((error) => console.log(error));
  }, [username]);

  const handleEdit = () => {
    setEditable(true);
  };
  
  const handlenomChange = (event) => {
  
        setnom(event.target.value); 
  };
  const handleprenomChange = (event) => {
  
    setprenom(event.target.value);
    
  };
  const handletelChange = (event) => {
  
      settelephone(event.target.value); // set the name to the new value
      
  };
  const handlesexChange = (event) => {
    setsexe(event.target.value);
  };
  const handleId_DoctorantChange = (event) => {
    setId_Doctorant(event.target.value);
  };
  const handleDate_naissanceChange = (event) => {
    setDate_naissance(event.target.value);
  };
  const handlePremiere_inscriptionChange = (event) => {
    setPremiere_inscription(event.target.value);
  };
  const handleSpecialiteChange = (event) => {
  
    setSpecialite(event.target.value); 
};
const handleTypeDoctoratChange = (event) => {

  setTypeDoctorat(event.target.value);

};
const handledate_soutenanceChange = (event) => {

  setdate_soutenance(event.target.value); // set the name to the new value
  
};
const handleEtablissement_origine_MagisterChange = (event) => {
setEtablissement_origine_Magister(event.target.value);
};
const handleEtablissement_origine_ingenioratChange = (event) => {
  setEtablissement_origine_ingeniorat(event.target.value);
};
const handleEtablissement_origine_MasterChange = (event) => {
  setEtablissement_origine_Master(event.target.value);
};
const handleDate_fichier_centralChange = (event) => {
  setDate_fichier_central(event.target.value);
};
const handleintitule_sujet_bisChange = (event) => {
  
  setintitule_sujet_bis(event.target.value); 
};
const handleintitule_sujetChange = (event) => {

  setintitule_sujet(event.target.value);

};
const handlelaboratoireChange = (event) => {

setlaboratoire(event.target.value); // set the name to the new value

};
const handlestatusChange = (event) => {
setstatus(event.target.value);
};
const handleencaderantChange = (event) => {
setEncadreur(event.target.value);
};
const handlecoencadrantChange = (event) => {
setCoEncadreur(event.target.value);
};
const handleNombre_inscriptionsChange = (event) => {
setNombre_inscriptions(event.target.value);
};
  
  
  const handleSaveChanges = (event) => {
    event.preventDefault();
    setEditable(false);
  
    if (nom.trim() === '' || email.trim() === '' || prenom.trim() === '' || telephone.trim() === '' || sexe.trim() === '' || role.trim() === '' || email.trim() === '' || password.trim() === '') {
      setErrorMessage('Name and email are required fields.');
      return;
    }
    axios.post(`http://localhost:5000/EditDPGR/${useremail}`, {
      nom : nom,
      prenom : prenom,
      telephone : telephone,
      Specialite : Specialite,
      sexe : sexe,
      Id_Doctorant : Id_Doctorant,
      TypeDoctorat : TypeDoctorat,
      Etablissement_origine_Magister : Etablissement_origine_Magister,
      Etablissement_origine_Master : Etablissement_origine_Master,
      Etablissement_origine_ingeniorat : Etablissement_origine_ingeniorat,
      Nombre_inscriptions : Nombre_inscriptions,
      date_soutenance : date_soutenance,
      Date_naissance : Date_naissance,
      Date_fichier_central : Date_fichier_central,
      laboratoire : laboratoire,
      status : status,
      Premiere_inscription : Premiere_inscription,
      Encadreur : Encadreur,
      CoEncadreur : CoEncadreur,
      intitule_sujet : intitule_sujet,
      intitule_sujet_bis : intitule_sujet_bis,
    })
      .then((response) => {
        console.log(response.data);
        alert('Les modifications ont été enregistrées avec succès!');
      })
      .catch((error) => {
        console.error(error);
        alert('Erreur lors de l\'enregistrement des modifications.');
      });
  };

  return (
    <div className={`bg-white-bluish w-full h-full flex flex-col flex-1`}>
      <div className="flex flex-col items-center text-purple font-semibold text-2xl">
        <h1>Votre Doctorant: {Doctorant.nom + " " + Doctorant.prenom}</h1>
      </div>
      <form
        className="grid grid-cols-3 gap-10 bg-white border border-black rounded-lg py-4 px-10 ml-5 transform scale-90"
        onSubmit={handleSaveChanges}
      >
        <div className="flex flex-col">
          <label className="ml-5 mt-5 text-black font-bold" htmlFor="nom">
            Nom du doctorant:
          </label>
          {Editable ?
           <input
           class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent"
           type="text"
           placeholder={Doctorant.nom}
           name="nom"
           id="nom"
           value={nom}
           onChange={handlenomChange}
         />
         :
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent"
            type="text"
            placeholder="/"
            name="nom"
            id="nom"
            value={Doctorant.nom}
            disabled
          />
}
          <label className="ml-5 mt-5 text-black font-bold" htmlFor="prenom">
            Prénom du doctorant:
          </label>
           {Editable ?
           <input
           class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
           type="text"
           placeholder={Doctorant.prenom}
           name="prenom"
           id="prenom"
           value={prenom}
           onChange={handleprenomChange}
         />
           :
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="prenom"
            id="prenom"
            value={Doctorant.prenom}
            disabled
          />
           }
          <label className="ml-5 mt-5 text-black font-bold" htmlFor="Matricule">
            ID du doctorant:
          </label>
          {Editable ?
          <input
          class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
          type="text"
          id="Matricule"
          placeholder={Doctorant.Id_Doctorant}
          name="Matricule"
          value={Id_Doctorant}
          onChange={handleId_DoctorantChange}
        />
:
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            id="Matricule"
            placeholder="/"
            name="Matricule"
            value={Doctorant.Id_Doctorant}
            disabled
          />
          }
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
          {Editable ?
           <input
           class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
           type="text"
           placeholder={Doctorant.sexe}
           name="sexe"
           id="sexe"
           value={sexe}
           onChange={handlesexChange}
         />
         :
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="sexe"
            id="sexe"
            value={Doctorant.sexe}
            disabled
          />
}

          <label className="ml-5 mt-5 text-black font-bold" htmlFor="id_pv">
            ID du PV de la 1ère inscription:
          </label>
          {Editable ?
          <input
          class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
          type="text"
          id="id_pv"
          placeholder={Doctorant.Premiere_inscription}
          name="id_pv"
          value={Premiere_inscription}
          onChange={handlePremiere_inscriptionChange}
        />
        :
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            id="id_pv"
            placeholder="/"
            name="id_pv"
            value={Doctorant.Premiere_inscription}
            disabled
          />
}
{Editable ?
  <button
            class="text-white bg-teal-500 p-5 mb-5 rounded-lg"
            onClick={handleSaveChanges}
            type="button"
          >
            Enregister
          </button>
          :
          <button
            class="text-white bg-teal-500 p-5 mb-5 rounded-lg"
            type="button"
            onClick={handleEdit}
          >
            Modifier
          </button>
}
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
          {Editable ?
          <input
          class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
          type="text"
          placeholder={Doctorant.telephone}
          name="Numero_telephone"
          id="Numero_telephone"
          value={telephone}
          onChange={handletelChange}
        />
        :
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="Numero_telephone"
            id="Numero_telephone"
            value={Doctorant.telephone}
            disabled
          />
}

          <label className="ml-5 mt-5 text-black font-bold" htmlFor="Option">
            Option:
          </label>
          {Editable ?
          <input
          class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
          type="text"
          placeholder={Doctorant.Specialite}
          name="Option"
          id="Option"
          value={Specialite}
          onChange={handleSpecialiteChange}
        />
        :
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="Option"
            id="Option"
            value={Doctorant.Specialite}
            disabled
          />
}

          <label
            className="ml-5 mt-5 text-black font-bold"
            htmlFor="Type_Doctorat"
          >
            Type du doctorat:
          </label>
          {Editable ?
          <input
          class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
          type="text"
          placeholder={Doctorant.TypeDoctorat}
          name="Type_Doctorat"
          id="Type_Doctorat"
          value={TypeDoctorat}
          onChange={handleTypeDoctoratChange}
        />
        :
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="Type_Doctorat"
            id="Type_Doctorat"
            value={Doctorant.TypeDoctorat}
            disabled
          />
}
          <label className="ml-5 mt-5 text-black font-bold" htmlFor="statut">
            Statut du doctorant:
          </label>
          {Editable ?
           <input
           class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
           type="text"
           placeholder={Doctorant.statut}
           name="statut"
           id="statut"
           value={status}
           onChange={handlestatusChange}
           
         />
         :
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="statut"
            id="statut"
            value={Doctorant.statut}
            disabled
          />
}
          <label
            className="ml-5 mt-5 text-black font-bold"
            htmlFor="Laboratoire"
          >
            Laboratoire:
          </label>
          {Editable ?
          <input
          class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
          type="text"
          placeholder={Doctorant.laboratoire}
          name="laboratoire"
          id="Laboratoire"
          value={laboratoire}
          onChange={handlelaboratoireChange}
        />
        :
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="laboratoire"
            id="Laboratoire"
            value={Doctorant.laboratoire}
            disabled
          />
}
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
          {Editable ?
          <input
          class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
          type="text"
          placeholder={Doctorant.Encadreur}
          name="Encadreur"
          id="Encadreur"
          value={Encadreur}
          onChange={handleencaderantChange}
        />
        :
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="Encadreur"
            id="Encadreur"
            value={Doctorant.Encadreur}
            disabled
          />
}
          <label
            className="ml-5 mt-5 text-black font-bold"
            htmlFor="Co-encadreur"
          >
            Co-encadreur:
          </label>
          {Editable ?
           <input
           class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
           type="text"
           placeholder={Doctorant.CoEncadreur}
           name="Co-encadreur"
           id="Co-encadreur"
           defaultValue={CoEncadreur}
           onChange={handlecoencadrantChange}
         />
         :
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="Co-encadreur"
            id="Co-encadreur"
            defaultValue={Doctorant.CoEncadreur}
            disabled
          />
}
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
          {Editable ?
           <input
           class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
           type="text"
           placeholder={Doctorant.Etablissement_origine_Master}
           name="etablissement_master"
           id="etablissement_master"
           value={Etablissement_origine_Master}
           onChange={handleEtablissement_origine_MasterChange}
         />
         :
          <input
            class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="etablissement_master"
            id="etablissement_master"
            value={Doctorant.Etablissement_origine_Master}
            disabled
          />
}
          <label
            className="mr-5 mt-5 text-black font-bold"
            htmlFor="etablissement_ingeniorat"
          >
            Etablissement d'origine Ingéniorat:
          </label>
          {Editable ?
           <input
           class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
           type="text"
           placeholder="/"
           name="etablissement_ingeniorat"
           id="etablissement_ingeniorat"
           value={Etablissement_origine_ingeniorat}
           onChange={handleEtablissement_origine_ingenioratChange}
           
         />
         :
          <input
            class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="etablissement_ingeniorat"
            id="etablissement_ingeniorat"
            value={Doctorant.Etablissement_origine_ingeniorat}
            disabled
          />
}
          <label
            className="mr-5 mt-5 text-black font-bold"
            htmlFor="etablissement_magestere"
          >
            Etablissement d'origine Magestere:
          </label>
          {Editable ?
          <input
          class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
          type="text"
          placeholder="/"
          name="etablissement_magestere"
          id="etablissement_magestere"
          value={Etablissement_origine_Magister}
          onChange={handleEtablissement_origine_MagisterChange}
        />
        :
          <input
            class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="etablissement_magestere"
            id="etablissement_magestere"
            value={Doctorant.Etablissement_origine_Magister}
            disabled
          />
}
          <label
            className="mr-5 mt-5 text-black font-bold"
            htmlFor="annee_inscription"
          >
            Première année d'inscription:
          </label>
          {Editable ?
           <input
           class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
           type="text"
           id="annee_inscription"
           placeholder="/"
           name="annee_inscription"
           value={Premiere_inscription}
           onChange={handlePremiere_inscriptionChange}
         />
         :
          <input
            class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            id="annee_inscription"
            placeholder="/"
            name="annee_inscription"
            value={Doctorant.Premiere_inscription}
          />
}
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
          {Editable ?
           <input
           class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
           type="text"
           placeholder="/"
           name="nombre_inscriptions"
           id="nombre_inscriptions"
           value={Nombre_inscriptions}
           onChange={handleNombre_inscriptionsChange}
         />
         :
          <input
            class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="nombre_inscriptions"
            id="nombre_inscriptions"
            value={Doctorant.Nombre_inscriptions}
            disabled
          />
}

          <label
            className="mr-5 mt-5 text-black font-bold"
            htmlFor="Intitule_these"
          >
            Intitulé de thèse:
          </label>
          {Editable ?
           <input
           class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
           type="text"
           placeholder="/"
           name="Intitule_these"
           id="Intitule_these"
           value={intitule_sujet}
           onChange={handleintitule_sujetChange}
         />
         :
          <input
            class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="Intitule_these"
            id="Intitule_these"
            value={Doctorant.intitule_sujet}
            disabled
          />
}
          <label
            className="mr-5 mt-5 text-black font-bold"
            htmlFor="Intitule_sujet_bis"
          >
            Intitulé sujet bis:
          </label>
          {Editable ?
           <input
           class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
           type="text"
           placeholder="/"
           name="Intitule_sujet_bis"
           id="Intitule_sujet_bis"
           defaultValue={intitule_sujet_bis}
           onChange={handleintitule_sujet_bisChange}
         />
         :
          <input
            class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="Intitule_sujet_bis"
            id="Intitule_sujet_bis"
            defaultValue={Doctorant.intitule_sujet_bis}
            disabled
          />
}
        </div>
      </form>
    </div>
  );
}

export default Profile;
