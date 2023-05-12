import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import { useHistory } from "react-router-dom";

const CriteriaBar = (props) => {
    // Extract the criteria props
    const { critere1, critere2, premiere_annee, derniere_annee } = props;
    
    const handleCriteriaChange  = (event) => {
        // Update the criteria values based on user selection
        // Call a callback function provided by the parent component to notify about the changes
      };
    // Handle user interactions and trigger updates
    const handleCriteria1Change = (event) => {
      // Update the criteria values based on user selection
      // Call a callback function provided by the parent component to notify about the changes
    };
    const handleCriteria2Change = (event) => {
        // Update the criteria values based on user selection
        // Call a callback function provided by the parent component to notify about the changes
    };
  
    return (
      <div className="CriteriaBar">
        {/* Render the Select inputs for criteria */}
        <div  className="flex items-center gap-24    ">
        <div>
        <label for="critere1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">1ere critère</label>
        <select
             id="critere1" class="bg-dark-black border  text-black text-sm rounded-lg focus:ring-dark-green focus:border-black block w-full p-2.5 dark:bg-dark-green dark:border-black dark:placeholder-blackdark:text-black dark:focus:ring-black dark:focus:border-black"
             onChange={handleCriteria1Change}
        >
        <optgroup label="Sexe" >
                <option value="femme">femme</option>
                <option value="homme">homme</option>
              </optgroup>
              <optgroup label="Situation">
                <option value="soutenu">Soutenu</option>
                <option value="abondon">Abondon</option>
                <option value="radié">Radié</option>
              </optgroup>        
              <optgroup label="Nbr d'année d'inscription">
                <option value="inf5">inferieur à 5 ans</option>
                <option value="entre5_10">Entre 5 et 10 ans</option>
                <option value="sup10">Supérieur à 10 ans</option>
              </optgroup>      
        </select>
        </div>
        <div>
        <label for="critere2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">2ème critère</label>
        <select
             id="critere2" class="bg-dark-green border border-black text-gray-900 text-sm rounded-lg focus:ring-dark-green focus:border-dark-green block w-full p-2.5 dark:bg-dark-green dark:border-black dark:placeholder-black dark:text-black dark:focus:ring-blackdark:focus:border-black"
             onChange={handleCriteria2Change}
        >
        <optgroup label="Sexe">
                <option value="femme">femme</option>
                <option value="homme">homme</option>
              </optgroup>
              <optgroup label="Situation">
                <option value="soutenu">Soutenu</option>
                <option value="abondon">Abondon</option>
                <option value="radié">Radié</option>
              </optgroup>        
              <optgroup label="Nbr d'année d'inscription">
                <option value="inf5">inferieur à 5 ans</option>
                <option value="entre5_10">Entre 5 et 10 ans</option>
                <option value="sup10">Supérieur à 10 ans</option>
              </optgroup>      
        </select>
        </div>
        <div>
        <button class="bg-green hover:bg-orange text-white font-bold py-2 px-4 rounded mt-24   ">
             Appliquer
        </button>
        </div>
        <div>
         <label for="premiere_annee" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">1ère année d’inscription</label>
         <input
             type="text"
             id="premiere_annee"
             className="bg-dark-green border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-dark-green block w-full p-2.5 dark:bg-dark-green dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-black dark:focus:border-black"
            />
        </div>  
        <div>
         <label for="derniere_annee" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Dernière année d’inscription</label>
         <input
             type="text"
             id="derniere_annee"
             className="bg-gray-90 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-dark-green dark:placeholder-dark-green dark:text-black dark:focus:ring-black dark:focus:border-black"
            />
        </div>  
        </div>
       

  
        
      </div>
    );
  };

export default CriteriaBar;
