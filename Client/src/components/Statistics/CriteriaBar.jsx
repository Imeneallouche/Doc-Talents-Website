import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import { useHistory } from "react-router-dom";

const CriteriaBar = (props) => {
  const [critere1, setCritere1] = useState('Femme');
  const [critere2, setCritere2] = useState('inscrit');
  const [premiere_annee, setPremiereAnnee] = useState('2010');
  const [derniere_annee, setDerniereAnnee] = useState('2023');
  const onCriteriaChange = props.onCriteriaChange;
  const handleCritere1Change = (event) => {
    setCritere1(event.target.value);
    onCriteriaChange(critere1, critere2, premiere_annee, derniere_annee);
  };

  const handleCritere2Change = (event) => {
    setCritere2(event.target.value);
    onCriteriaChange(critere1, critere2, premiere_annee, derniere_annee);
  };

  const handlePremiereAnneeChange = (event) => {
    setPremiereAnnee(event.target.value);
    onCriteriaChange(critere1, critere2, premiere_annee, derniere_annee);
  };

  const handleDerniereAnneeChange = (event) => {
    setDerniereAnnee(event.target.value);
    onCriteriaChange(critere1, critere2, premiere_annee, derniere_annee);
  };
  console.log(critere1, critere2, premiere_annee, derniere_annee);
  
    return (
      <div className="CriteriaBar">
        <div  className="flex items-center gap-24    ">
        <div>
        <label for="critere1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">1ere critère</label>
        <select
             id="critere1" className="bg-dark-black border  text-black text-sm rounded-lg focus:ring-dark-green focus:border-black block w-full p-2.5 dark:bg-dark-green dark:border-black dark:placeholder-blackdark:text-black dark:focus:ring-black dark:focus:border-black"
             onChange={handleCritere1Change}
        >
        <optgroup label="Sexe" >
                <option value="Femme">Femme</option>
                <option value="Homme">Homme</option>
              </optgroup>
              <optgroup label="Situation">
                <option value="soutenu">Soutenu</option>
                <option value="abondon">Abondon</option>
                <option value="radie">Radié</option>
                <option value="inscrit">Inscrit</option>
              </optgroup>        
              <optgroup label="Nbr d'année d'inscription">
                <option value="inf5">inferieur à 5 ans</option>
                <option value="entre5_10">Entre 5 et 10 ans</option>
                <option value="sup10">Supérieur à 10 ans</option>
              </optgroup>      
        </select>
        </div>
        <div>
        <label for="critere2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">2ème critère</label>
        <select
             id="critere2" className="bg-dark-green border border-black text-gray-900 text-sm rounded-lg focus:ring-dark-green focus:border-dark-green block w-full p-2.5 dark:bg-dark-green dark:border-black dark:placeholder-black dark:text-black dark:focus:ring-blackdark:focus:border-black"
             onChange={handleCritere2Change}
        >
        <optgroup label="Sexe">
                <option value="Femme">Femme</option>
                <option value="Homme">Homme</option>
              </optgroup>
              <optgroup label="Situation">
                <option value="soutenu">Soutenu</option>
                <option value="abondon">Abondon</option>
                <option value="radie">Radié</option>
                <option value="inscrit">Inscrit</option>
              </optgroup>        
              <optgroup label="Nbr d'année d'inscription">
                <option value="inf5">inferieur à 5 ans</option>
                <option value="entre5_10">Entre 5 et 10 ans</option>
                <option value="sup10">Supérieur à 10 ans</option>
              </optgroup>      
        </select>
        </div>
        <div>
        <button
            className="bg-green hover:bg-purple text-white font-bold py-2 px-4 rounded mt-24"
            onClick={() => onCriteriaChange(critere1, critere2, premiere_annee, derniere_annee)}
          >
          Appliquer
        </button>

        </div>
        <div>
          <label for="premiere_annee" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Dernière année d'inscription
          </label>
          <input
            name="premiere_annee"
            type="text"
            id="premiere_annee"
            value = {premiere_annee}
            className="bg-gray-90 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-dark-green dark:placeholder-dark-green dark:text-black dark:focus:ring-black dark:focus:border-black"
            onChange={handlePremiereAnneeChange}  
          />
        </div> 
        <div>
          <label for="derniere_annee" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Dernière année d'inscription
          </label>
          <input
            name="derniere_annee"
            type="text"
            value = {derniere_annee}
            id="derniere_annee"
            className="bg-gray-90 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-dark-green dark:placeholder-dark-green dark:text-black dark:focus:ring-black dark:focus:border-black"
            onChange={handleDerniereAnneeChange}
          />
        </div>
 
        </div>
       

  
        
      </div>
    );
  };

export default CriteriaBar;