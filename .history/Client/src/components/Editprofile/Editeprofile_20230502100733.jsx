import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link,  useParams } from 'react-router-dom';

function Edituser({ DoctorantId }) {
  
 
  const [date1, setDate] = useState("");
  const [date2, setDatee] = useState("");
  const [date3, setDateee] = useState("");

  function handleDateChange(e) {
    setDate(e.target.value);
  }
  function handleDateeChange(e) {
    setDatee(e.target.value);
  }
  function handleDateeeChange(e) {
    setDateee(e.target.value);
  }

  const [Doctorant, setDoctorant] = useState({});
  const [formData, setFormData] = useState({});

  useEffect(() => {
    axios
      .get(`/Doctorant/${DoctorantId}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  }, [DoctorantId]);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`/Doctorant/${DoctorantId}`, formData)
      .then((response) => {
        console.log("User updated successfully");
        // optionally redirect to a success page or refresh the user data
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className={`bg-white-bluish w-full h-full flex flex-col flex-1`}>
      <form className="grid grid-cols-3 gap-10 bg-white border border-black rounded-lg p-10 ml-5 transform scale-90" onSubmit={handleSubmit}>
        <div  className="flex flex-col"> 
        <label className="ml-5 mt-5 text-black font-bold" htmlFor="Nom">Nom:</label>
        <input class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black" type="text" placeholder="Derbal" name="nom" defaultValue={Doctorant.nom} onChange={handleInputChange} />
        <label 
        className="ml-5 mt-5 text-black font-bold"
        htmlFor="Prénom">Prénom:</label>
        <input class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black" type="text" placeholder="Rayhane" name="prenom" defaultValue={Doctorant.prenom} onChange={handleInputChange}/>
        <label
        className="ml-5 mt-5 text-black font-bold"
         htmlFor="Matricule">Matricule:</label>
        <input class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black" type="text" placeholder="20/0046" name="Matricule" defaultValue={Doctorant.matricule} onChange={handleInputChange}/>
          <button class="text-white bg-teal-500 p-5 mb-5 rounded-lg" type="submit">
            <Link to="/ProfileDoc">
            Enregistrer
            </Link>
            </button>
         
         
        
        </div>
        <div className="flex flex-col">
          <label 
          className="ml-5 mt-5 text-black font-bold"
          htmlFor="Date de naissance">Date de naissance:</label>
          <input
          class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            placeholder="13/03/2003"
            name="Date_naissance"
            defaultValue={Doctorant.Date_naissance}
            type="date"
            id="date-input"
            value={date1}
            onChange={handleDateChange}
          />
          <label 
          className="ml-5 mt-5 text-black font-bold"
          htmlFor="sexe">Sexe:</label>
          <input
          class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="Femme"
            name="sexe"
            defaultValue={Doctorant.sexe}
            onChange={handleInputChange}
          />
          <label
          className="ml-5 mt-5 text-black font-bold"
           htmlFor="Option">Option:</label>
          <input
          class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="SIL"
            name="Specialite"
            defaultValue={Doctorant.Specialite}
            onChange={handleInputChange}
          />
          <label
          className="ml-5 mt-5 text-black font-bold"
           htmlFor="Numero de telephone">Numero de telephone:</label>
          <input
          class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="tel"
            placeholder="0568134937"
            name="telephone"
            defaultValue={Doctorant.telephone}
            onChange={handleInputChange}
          />
          <label 
          className="ml-5 mt-5 text-black font-bold"
          htmlFor="Situation">Situation:</label>
          <input
          class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="Soutenu"
            name="statut"
            defaultValue={Doctorant.statut}
            onChange={handleInputChange}
            disabled
          />
          <label 
          className="ml-5 mt-5 text-black font-bold"
          htmlFor="Laboratoire">Laboratoire:</label>
          <input
          class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="idk"
            name="laboratoire"
            defaultValue={Doctorant.laboratoire}
            onChange={handleInputChange}
          />
          <label
          className="ml-5 mt-5 text-black font-bold"
           htmlFor="Date de soutenance">Date de soutenance:</label>
          <input
          class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="date"
            id="date-inputtt"
            value={date2}
            onChange={handleDateeChange}
            placeholder="16/09/2026"
            name="date_soutenance"
            defaultValue={Doctorant.date_soutenance}
          />
          <label
          className="ml-5 mt-5 text-black font-bold"
           htmlFor="id_pv">ID PV:</label>
          <input
          class="mb-5 ml-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="id_pv"
            id="id_pv"
            onChange={handleDateChange}
            placeholder="001"
            name="id_pv"
            defaultValue={Doctorant.PV_changement_these}
          />
        </div>
        <div className="flex flex-col">
          <label 
          className="mr-5 mt-5 text-black font-bold"
          htmlFor="etablissement">Etablissement d'origin Master:</label>
          <input
          class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="mn3ref"
            name="Etablissement_origine_Master"
            defaultValue={Doctorant.Etablissement_origine_Master}
            onChange={handleInputChange}
          />
          <label 
          className="mr-5 mt-5 text-black font-bold"
          htmlFor="etablissement">Etablissement d'origin Ingéniorat:</label>
          <input
          class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="mn3ref"
            name="Etablissement_origine_Master"
            defaultValue={Doctorant.Etablissement_origine_ingeniorat}
            onChange={handleInputChange}
          />
          <label 
          className="mr-5 mt-5 text-black font-bold"
          htmlFor="etablissement">Etablissement d'origin Magister:</label>
          <input
          class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="mn3ref"
            name="Etablissement_origine_Master"
            defaultValue={Doctorant.Etablissement_origine_Magister}
            onChange={handleInputChange}
          />
          <label 
          className="mr-5 mt-5 text-black font-bold"
          htmlFor="Date de fichier centrale">
            Date de fichier centrale:
          </label>
          <input
          class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="date"
            id="date-inputt"
            value={date3}
            onChange={handleDateeeChange}
            placeholder="13/03/2026"
            name="Date de fichier centrale"
            defaultValue={Doctorant.Date_fichier_central}
          />
          <label
          className="mr-5 mt-5 text-black font-bold"
           htmlFor="Nombre d'inscriptions">Nombre d'inscriptions:</label>
          <input
          class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="1"
            name="Nombre_inscriptions"
            defaultValue={Doctorant.Nombre_inscriptions}
            onChange={handleInputChange}
          />
          <label 
          className="mr-5 mt-5 text-black font-bold"
          htmlFor="Encadreur">Encadreur:</label>
          <input
          class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="mn3ref"
            name="Id_Encadreur"
            defaultValue={Doctorant.Id_Encadreur}
            onChange={handleInputChange}
          />
          <label className="mr-5 mt-5 text-black font-bold"
          htmlFor="Co-encadreur">Co-encadreur:</label>
          <input
          class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="mn3ref"
            name="Id_CoEncadreur"
            defaultValue={Doctorant.Id_CoEncadreur}
            onChange={handleInputChange}
          />
          <label className="mr-5 mt-5 text-black font-bold" htmlFor="Intitulé de thèse">Intitulé de thèse:</label>
          <input
          class="mb-5 mr-5 border-b-1 border-solid border-gray-300 outline-none bg-transparent text-black"
            type="text"
            placeholder="mn3ref"
            name="intitule_sujet"
            defaultValue={Doctorant.intitule_sujet_bis
              ? Doctorant.intitule_sujet_bis
              : Doctorant.intitule_sujet}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
}

export default Edituser;
