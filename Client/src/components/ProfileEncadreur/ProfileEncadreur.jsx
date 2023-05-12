import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Profile() {
  const { usernamee } = useParams();

  const RUNNING_URL = "http://localhost:5000";
  const ENDPOINT = "/Encadreurs/";

  const [Encadreur, setEncadreur] = useState({});
  const [Editable, setEditable] = useState(false);
  const [nom, setnom] = useState('');
  const [prenom, setprenom] = useState('');
  const [Id_Encadreur, setId_Encadreur] = useState('');
  const [grade, setgrade] = useState('');
  const [Etablissement, setEtablissement] = useState('');
  const [specialite, setspecialite] = useState('');
  const [diplome, setdiplome] = useState('');
  const [telephone, settelephone] = useState('');
  const [laboratoire, setlaboratoire] = useState('');
  const [Sujets_interet, setSujets_interet] = useState('');
  const [mail, setmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  

  useEffect(() => {
    axios
      .get(RUNNING_URL + ENDPOINT + usernamee)
      .then((response) => setEncadreur(response.data))
      .catch((error) => console.log(error));
  }, [usernamee]);

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
 
  const handleId_EncadreurChange = (event) => {
    setId_Encadreur(event.target.value);
  };
  const handleEtablissementChange = (event) => {
    setEtablissement(event.target.value);
  };
  const handlegradeChange = (event) => {
    setgrade(event.target.value);
  };
  const handlespecialiteChange = (event) => {
  
    setspecialite(event.target.value); 
};
const handlediplomeChange = (event) => {

  setdiplome(event.target.value);

};
const handleSujets_interetChange = (event) => {

  setSujets_interet(event.target.value); // set the name to the new value
  
};
const handlemailChange = (event) => {
setmail(event.target.value);
};
const handlelaboratoireChange = (event) => {

setlaboratoire(event.target.value); // set the name to the new value

};

  
  const handleSaveChanges = (event) => {
    event.preventDefault();
    setEditable(false);
/*
    const variablesToCheck = [Id_Encadreur, nom, prenom, grade, Etablissement, specialite, diplome, mail, telephone, laboratoire, Sujets_interet];
    if (variablesToCheck.some(variable => variable.trim().length === 0)) {
      setErrorMessage('Vous êtes OBLIGÉ de remplir les cases vides!');
      return;
    }
   */ 
    axios.post(`http://localhost:5000/EditEnc/${usernamee}`, {
      nom : nom,
      prenom : prenom,
      telephone : telephone,
      specialite : specialite,
      mail : mail,
      Id_Encadreur : Id_Encadreur,
      grade : grade,
      diplome : diplome,
      laboratoire : laboratoire,
      Etablissement:Etablissement,
      Sujets_interet:Sujets_interet,
     
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
        <h1>Votre Encadreur: {Encadreur.nom + " " + Encadreur.prenom}</h1>
      </div>
      <form
        className="grid grid-cols-3 gap-10 bg-white border border-black rounded-lg py-4 px-10 ml-5 transform scale-90"
        onSubmit={handleSaveChanges}
      >
        <div className="flex flex-col">
          <label className="ml-5 mt-5 text-black font-bold" htmlFor="nom">
            Nom du Encadreur:
          </label>
          {Editable ?
           <input
           class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent"
           type="text"
           placeholder={Encadreur.nom}
           name="nom"
           id="nom"
           value={nom}
           onChange={handlenomChange}
           required
         />
         :
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="nom"
            id="nom"
            value={Encadreur.nom}
            disabled
          />
}
          <label className="ml-5 mt-5 text-black font-bold" htmlFor="prenom">
            Prénom du Encadreur:
          </label>
           {Editable ?
           <input
           class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
           type="text"
           placeholder={Encadreur.prenom}
           name="prenom"
           id="prenom"
           value={prenom}
           onChange={handleprenomChange}
           required
         />
           :
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="prenom"
            id="prenom"
            value={Encadreur.prenom}
            disabled
          />
           }
          <label className="ml-5 mt-5 text-black font-bold" htmlFor="Matricule">
            ID du Encadreur:
          </label>
          {Editable ?
          <input
          class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
          type="text"
          id="Matricule"
          placeholder={Encadreur.Id_Encadreur}
          name="Matricule"
          value={Id_Encadreur}
          onChange={handleId_EncadreurChange}
          required
        />
:
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            id="Matricule"
            placeholder="/"
            name="Matricule"
            value={Encadreur.Id_Encadreur}
            disabled
          />
          }
          <label
            className="ml-5 mt-5 text-black font-bold"
            htmlFor="Date_De_Naissance"
          >
            Telephone:
          </label>
          {Editable ?
          <input
          class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
          type="text"
          placeholder={Encadreur.telephone}
          name="Numero_telephone"
          id="Numero_telephone"
          value={telephone}
          onChange={handletelChange}
          required
        />
        :
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="Numero_telephone"
            id="Numero_telephone"
            value={Encadreur.telephone}
            disabled
          />
}

          <label className="ml-5 mt-5 text-black font-bold" htmlFor="id_pv">
           Email:
          </label>
          {Editable ?
          <input
          class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
          type="text"
          id="id_pv"
          placeholder={Encadreur.mail}
          name="id_pv"
          value={mail}
          onChange={handlemailChange}
          required
        />
        :
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            id="id_pv"
            placeholder="/"
            name="id_pv"
            value={Encadreur.mail}
            disabled
          />
}
<label
            className="ml-5 mt-5 text-black font-bold"
            htmlFor="Type_Doctorat"
          >
            Grade de l'encadreur:
          </label>
          {Editable ?
          <input
          class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
          type="text"
          placeholder={Encadreur.grade}
          name="Type_Doctorat"
          id="Type_Doctorat"
          value={grade}
          onChange={handlegradeChange}
          required
        />
        :
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="Type_Doctorat"
            id="Type_Doctorat"
            value={Encadreur.grade}
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
          <div className='float-left ml-20 font-bold text-red-500'>
           {errorMessage && <p>{errorMessage}</p>}
           </div>
        </div>
       

        {/*
        
        
        
        
        
        
        
        
        
        
        */}
        <div className="flex flex-col">
         
          <label className="ml-5 mt-5 text-black font-bold" htmlFor="Option">
          Etablissement:
          </label>
          {Editable ?
          <input
          class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
          type="text"
          placeholder={Encadreur.Etablissement}
          name="Option"
          id="Option"
          value={Etablissement}
          onChange={handleEtablissementChange}
          required
        />
        :
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="Option"
            id="Option"
            value={Encadreur.Etablissement}
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
          placeholder={Encadreur.laboratoire}
          name="laboratoire"
          id="Laboratoire"
          value={laboratoire}
          onChange={handlelaboratoireChange}
          required
        />
        :
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="laboratoire"
            id="Laboratoire"
            value={Encadreur.laboratoire}
            disabled
          />
}
          <label
            className="ml-5 mt-5 text-black font-bold"
            htmlFor="Date_soutenance"
          >
            Specialite:
          </label>
          {Editable ?
          <input
          class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
          type="text"
          id="specialite"
          value={specialite}
          placeholder={Encadreur.specialite}
          name="specialite"
          onChange={handlespecialiteChange}
          required
        />
        :
        <input
        class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
        type="text"
        placeholder="/"
        name="specialite"
        id="specialite"
        value={Encadreur.specialite}
        disabled
      />
          
          }
          <label
            className="ml-5 mt-5 text-black font-bold"
            htmlFor="Co-encadreur"
          >
            Diplome:
          </label>
          {Editable ?
           <input
           class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
           type="text"
           placeholder={Encadreur.diplome}
           name="Co-encadreur"
           id="Co-encadreur"
           defaultValue={diplome}
           onChange={handlediplomeChange}
           required
         />
         :
          <input
            class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="Co-encadreur"
            id="Co-encadreur"
            defaultValue={Encadreur.diplome}
            disabled
          />
}
<label
            className="mr-5 mt-5 text-black font-bold"
            htmlFor="etablissement_master"
          >
            Sujets_interet :
          </label>
          {Editable ?
           <input
           class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
           type="text"
           placeholder={Encadreur.Sujets_interet}
           name="etablissement_master"
           id="etablissement_master"
           value={Sujets_interet}
           onChange={handleSujets_interetChange}
           required
         />
         :
          <input
            class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="/"
            name="etablissement_master"
            id="etablissement_master"
            value={Encadreur.Sujets_interet}
            disabled
          />
}
        </div>
      </form>
    </div>
  );
}

export default Profile;
