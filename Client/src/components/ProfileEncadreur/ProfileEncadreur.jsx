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
    <div className="mr-20 ml-20 mb-0 bg-white border scale-90 border-dark-purple rounded-lg">
    <div>

       <form onSubmit={handleSaveChanges} className="m-10 grow flex flex-col justify-center  grid grid-cols-2 gap-50 p-50 ">
          
          <div className="m-4 mb-0 flex mt-0 flex-col flex-1">
          <label htmlFor="Nom"
          className={`font-bold text-purple focus:text-green mb-3`}>
            Nom : 
           </label>
           {Editable ?
            <input
            className={`bg-white mb-4 border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
            id="nom"
            name="nom"
            placeholder={Encadreur.nom}
            value={nom}
            onChange={handlenomChange}
            required
            
          />
          :
           <input className={`bg-white border border-dark-purple mb-5 text-purple placeholder-black text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
               type="text"
               id="Nom"
               name="Nom"
               placeholder={Encadreur.nom} 
               disabled
               
           />
         }
               <label htmlFor="Role"
          className={`font-bold text-purple focus:text-green mb-3`}>
            ID Encadreur : 
           </label>
           {Editable ?
            <input
            className={`bg-white mb-4 border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
            id="role"
            name="role"
            placeholder={Encadreur.Id_Encadreur}
            value={Id_Encadreur}
         onChange={handleId_EncadreurChange}
         required
        
          />
          :
           <input className={`bg-white border mb-5 border-dark-purple text-purple placeholder-black text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
               type="text"
               id="Role"
               name="Role"
               placeholder={Encadreur.Id_Encadreur}
               disabled />
}
               <label htmlFor="telephone"
          className={`font-bold text-purple focus:text-green mb-3`}>
            Numero de telephone :
           </label>
           {Editable ?
            <input
            className={`bg-white mb-4 border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="tel"
            id="telephone"
            name="telephone"
            placeholder={Encadreur.telephone}
            value={telephone}
         onChange={handletelChange}
         required
        
          />
          :
           <input className={`bg-white border mb-5 border-dark-purple text-purple placeholder-black text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
               type="tel"
               id="telephone"
               name="telephone"
               placeholder={Encadreur.telephone}
               disabled
               />
           }
            <label htmlFor="grade"
          className={`font-bold text-purple focus:text-green mt-0 mb-3`}>
            Grade :  
           </label>
           {Editable ?
            <input
            className={`bg-white mb-4 border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
               id="grade"
               name="grade"
               placeholder={Encadreur.grade}
            value={grade}
         onChange={handlegradeChange}
         required
        
          />
          :
           <input className={`bg-white border mb-4 border-dark-purple text-purple placeholder-black text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
               type="text"
               id="grade"
               name="grade"
               placeholder={Encadreur.grade}
               disabled />
           }
             <label htmlFor="grade"
          className={`font-bold text-purple focus:text-green mt-0 mb-3`}>
            Laboratoire :  
           </label>
           {Editable ?
            <input
            className={`bg-white mb-4 border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
               id="laboratoire"
               name="laboratoire"
               placeholder={Encadreur.laboratoire}
            value={laboratoire}
         onChange={handlelaboratoireChange}
         required
        
          />
          :
           <input className={`bg-white border mb-4 border-dark-purple text-purple placeholder-black text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
               type="text"
               id="laboratoire"
               name="laboratoire"
               placeholder={Encadreur.laboratoire}
               disabled />
           }
           <label htmlFor="grade"
          className={`font-bold text-purple focus:text-green mt-0 mb-3`}>
            Sujets d'interet :  
           </label>
           {Editable ?
            <input
            className={`bg-white mb-4 border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
               id="Sujets_interet"
               name="Sujets_interet"
               placeholder={Encadreur.Sujets_interet}
            value={Sujets_interet}
         onChange={handleSujets_interetChange}
         required
        
          />
          :
           <input className={`bg-white border mb-4 border-dark-purple text-purple placeholder-black text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
               type="text"
               id="Sujets_interet"
               name="Sujets_interet"
               placeholder={Encadreur.Sujets_interet}
               disabled />
           }
          </div>
          <div className="m-4 mb-0 mt-0 flex flex-col flex-1">
          <label htmlFor="Prenom"
          className={`font-bold text-purple  focus:text-green mb-3`}>
            Prenom : 
           </label>
           {Editable ?
            <input
            className={`bg-white mb-4 border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
            id="prenom"
            name="prenom"
            placeholder={Encadreur.prenom}
            value={prenom}
         onChange={handleprenomChange}
         required
          />
          :
           <input className={`bg-white mb-4 border border-dark-purple text-purple placeholder-black text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
               type="text"
               id="Prenom"
               name="Prenom"
               placeholder={Encadreur.prenom}
               disabled/>
           }
               <label htmlFor="specialite" className={`font-bold text-purple mb-3`}>
               Specialite :
             </label>
             {Editable ?
            <input
            className={`bg-white mb-4 border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
            id="specialite"
            name="specialite"
            placeholder={Encadreur.specialite}
            value={specialite}
         onChange={handlespecialiteChange}
         required
         
          />
          :
             <input className={`bg-white mb-4 border border-dark-purple text-purple placeholder-black text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
               type="text"
               id="specialite"
               name="specialite"
               placeholder={Encadreur.specialite}
               disabled/>
             }
             <label htmlFor="specialite" className={`font-bold text-purple mb-3`}>
             Diplome :
             </label>
             {Editable ?
            <input
            className={`bg-white mb-4 border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
            id="diplome"
            name="diplome"
            placeholder={Encadreur.diplome}
            value={diplome}
         onChange={handlediplomeChange}
         required
         
          />
          :
             <input className={`bg-white mb-4 border border-dark-purple text-purple placeholder-black text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
               type="text"
               id="diplome"
               name="diplome"
               placeholder={Encadreur.diplome}
               disabled/>
             }
             <label htmlFor="specialite" className={`font-bold text-purple mb-3`}>
             Etablissement :
             </label>
             {Editable ?
            <input
            className={`bg-white mb-4 border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
            id="Etablissement"
            name="Etablissement"
            placeholder={Encadreur.Etablissement}
            value={Etablissement}
         onChange={handleEtablissementChange}
         required
         
          />
          :
             <input className={`bg-white mb-4 border border-dark-purple text-purple placeholder-black text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
               type="text"
               id="Etablissement"
               name="Etablissement"
               placeholder={Encadreur.Etablissement}
               disabled/>
             }
               <label htmlFor="Email"
          className={`font-bold text-purple focus:text-green mb-3`}>
            Email :  
           </label>
           {Editable ?
            <input
            className={`bg-white mb-4 border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
            id="Email"
            name="Email"
            placeholder={Encadreur.mail}
            value={mail}
         onChange={handlemailChange}
         required
        
          />
          :
           <input className={`bg-white border mb-5 border-dark-purple text-purple placeholder-black text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
               type="email"
               id="Email"
               name="Email"
               placeholder={Encadreur.mail}
               disabled />
           }
          
          </div>
          {Editable ?
           <button className="bg-green text-white py-4 px-6 rounded float-right mr-20 mt-0 mb-0"
           onClick={handleSaveChanges}
             type="button">
               
             Enregister
             </button>
         :
         <button
           className="bg-green text-white py-4 px-6 rounded float-left m-5"
           onClick={handleEdit}
           type="button"
         >
           Mettre à Jour
         </button>
       }
       </form>
       </div>
       </div>
  );
}

export default Profile;
