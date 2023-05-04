import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Profile.css";
import { Link,  useParams } from 'react-router-dom';

function Edituser({ DoctorantId }) {
  
 
  const [date, setDate] = useState("");
  const [datee, setDatee] = useState("");
  const [dateee, setDateee] = useState("");

  function handleDateChange(e) {
    setDate(e.target.value);
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
      <form className="grid-template-columns: repeat(3, 1fr); gap: 20px; border: 1px solid black; border-radius: 1%;transform: scale(0.9);" onSubmit={handleSubmit}>
        <div  className="form-column"> 
        <label htmlFor="Nom">Nom:</label>
        <input type="text" placeholder="Derbal" name="nom" defaultValue={Doctorant.nom} onChange={handleInputChange} />
        <label htmlFor="Prénom">Prénom:</label>
        <input type="text" placeholder="Rayhane" name="prenom" defaultValue={Doctorant.prenom} onChange={handleInputChange}/>
        <label htmlFor="Matricule">Matricule:</label>
        <input type="text" placeholder="20/0046" name="Matricule" defaultValue={Doctorant.matricule} onChange={handleInputChange}/>
          <button className="button" type="submit">
            <Link to="/Editprofile">
            Modifier
            </Link>
            </button>
          <button className="button" type="submit">Séminaire</button>
         
        
        </div>
        <div className="form-column">
          <label htmlFor="Date de naissance">Date de naissance:</label>
          <input
            placeholder="13/03/2003"
            name="Date_naissance"
            defaultValue={Doctorant.Date_naissance}
            type="date"
            id="date-input"
            value={date}
            onChange={handleDateChange}
          />
          <label htmlFor="sexe">Sexe:</label>
          <input
            type="text"
            placeholder="Femme"
            name="sexe"
            defaultValue={Doctorant.sexe}
            onChange={handleInputChange}
          />
          <label htmlFor="Option">Option:</label>
          <input
            type="text"
            placeholder="SIL"
            name="Specialite"
            defaultValue={Doctorant.Specialite}
            onChange={handleInputChange}
          />
          <label htmlFor="Numero de telephone">Numero de telephone:</label>
          <input
            type="tel"
            placeholder="0568134937"
            name="telephone"
            defaultValue={Doctorant.telephone}
            onChange={handleInputChange}
          />
          <label htmlFor="Situation">Situation:</label>
          <input
            type="text"
            placeholder="Soutenu"
            name="statut"
            defaultValue={Doctorant.statut}
            onChange={handleInputChange}
          />
          <label htmlFor="Laboratoire">Laboratoire:</label>
          <input
            type="text"
            placeholder="idk"
            name="laboratoire"
            defaultValue={Doctorant.laboratoire}
            onChange={handleInputChange}
          />
          <label htmlFor="Date de soutenance">Date de soutenance:</label>
          <input
            type="date"
            id="date-inputtt"
            value={datee}
            onChange={handleDateChange}
            placeholder="16/09/2026"
            name="date_soutenance"
            defaultValue={Doctorant.date_soutenance}
          />
        </div>
        <div className="form-column">
          <label htmlFor="etablissement">Etablissement:</label>
          <input
            type="text"
            placeholder="mn3ref"
            name="Etablissement_origine_Master"
            defaultValue={Doctorant.Etablissement_origine_Master}
            onChange={handleInputChange}
          />
          <label htmlFor="Date de premiere inscription">
            Date de premiere inscription:
          </label>
          <input
            type="date"
            id="date-inputt"
            value={dateee}
            onChange={handleDateChange}
            placeholder="13/03/2026"
            name="Premiere_inscriptionm"
            defaultValue={Doctorant.Premiere_inscription}
          />
          <label htmlFor="Nombre d'inscriptions">Nombre d'inscriptions:</label>
          <input
            type="text"
            placeholder="1"
            name="Nombre_inscriptions"
            defaultValue={Doctorant.Nombre_inscriptions}
            onChange={handleInputChange}
          />
          <label htmlFor="Encadreur">Encadreur:</label>
          <input
            type="text"
            placeholder="mn3ref"
            name="Id_Encadreur"
            defaultValue={Doctorant.Id_Encadreur}
            onChange={handleInputChange}
          />
          <label htmlFor="Co-encadreur">Co-encadreur:</label>
          <input
            type="text"
            placeholder="mn3ref"
            name="Id_CoEncadreur"
            defaultValue={Doctorant.Id_CoEncadreur}
            onChange={handleInputChange}
          />
          <label htmlFor="Intitulé de thèse">Intitulé de thèse:</label>
          <input
            type="text"
            placeholder="mn3ref"
            name="intitule_sujet"
            defaultValue={Doctorant.intitule_sujet}
            onChange={handleInputChange}
          />
          <label htmlFor="Intitulé sujet bis">Intitulé sujet bis:</label>
          <input
            type="text"
            placeholder="mn3ref"
            name="intitule_sujet_bis"
            defaultValue={Doctorant.intitule_sujet_bis}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
}

export default Edituser;
