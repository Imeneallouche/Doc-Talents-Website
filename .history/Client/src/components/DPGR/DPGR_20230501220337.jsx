import React, { useEffect, useState } from 'react';
import axios from 'axios';


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from "react-select";
import "./DPGR.css";

function ProfileDPGR({ nom }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
  
      const result = await axios.get(`http://localhost:5000/profile/${nom}`);
      setData(result.data);
    };

    fetchData();
  }, [nom]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data.nom}</h1>
      <p>{data.prenom}</p>
    </div>
  );
}

export default ProfileDPGR;


/*
function DPGR() {
  const [nom, setName] = useState('');
  const [userInformation, setUserInformation] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a GET request to the Node.js backend to retrieve user information by name
      const response = await axios.get(`/DPGR?nom=${nom}`);

      // Update the state with the user information
      setUserInformation(response.data);
    } catch (error) {
      console.error(error);
    }
  };
   
    const [Sex, setSex] = useState([]);
    const genderOptions = [
      { value: "M", label: "Male" },
      { value: "F", label: "Female" },
    ];
    const customStyles = {
        control: (provided, state) => ({
          ...provided,
          backgroundColor: "white",
          borderColor: "#19202E",
          color: "#1E2959",
          placeholderColor: "#35468E",
          fontSize: "1rem",
          borderRadius: "0.375rem",
          padding: "0.5rem",
    
          "&:focus": {
            outline: "none",
            boxShadow: "none",
            borderColor: "#51BCA2",
            placeholderColor: "#51BCA2",
          },
        }),
        placeholder: (provided, state) => ({
          ...provided,
          color: "#35468E",
        }),
      };
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" value={nom} onChange={(event) => setName(event.target.value)} />
            </label>
            <button type="submit">Submit</button>
          </form>
    
          {userInformation && (
            <div>
              <h2>User Information</h2>
              <ul>
              <li>Name: {userInformation.nom}</li>
            <li>Email: {userInformation.email}</li>
            <li>Prenom: {userInformation.prenom}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DPGR;
      /*
      
  return (
    <div>
 <div className="Title">Profile DPGR</div>
 <div>
    <form className="m-10 grow flex flex-col justify-center items-center form-cont">
       <div className="m-4 flex flex-col flex-1">
       <label htmlFor="Nom"
       className={`font-bold text-dark-purple focus:text-green`}>
         Nom :
        </label>
        <input className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
            id="Nom"
            name="Nom"
            placeholder="ex : DERBAL" 
            
        />
            <label htmlFor="Role"
       className={`font-bold text-dark-purple focus:text-green`}>
         Role :
        </label>
        <input className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
            id="Role"
            name="Role"
            placeholder="ex : ADMIN" />
        
            <label htmlFor="telephone"
       className={`font-bold text-dark-purple focus:text-green`}>
         Numero de telephone :
        </label>
        <input className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="teL"
            id="telephone"
            name="telephone"
            placeholder="ex : 0798502217" />
             <label htmlFor="password"
       className={`font-bold text-dark-purple focus:text-green`}>
         Password :
        </label>
        <input className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="password"
            id="password"
            name="password"
            placeholder="ex : ******** " />
       </div>
       <div className="m-4 flex flex-col flex-1">
       <label htmlFor="Prenom"
       className={`font-bold text-dark-purple focus:text-green`}>
         Prenom :
        </label>
        <input className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
            id="Prenom"
            name="Prenom"
            placeholder="ex : RAYHANE" />
            <label htmlFor="Sexe" className={`font-bold text-dark-purple`}>
            Sexe :
          </label>
          <Select
            placeholder="Male"
            className="selected"
            id="Sexe"
            styles={customStyles}
            options={genderOptions}
            value={Sex}
            onChange={(event) => setSex(event)}
            isClearable
            required
            />
            <label htmlFor="Email"
       className={`font-bold text-dark-purple focus:text-green`}>
         Email :
        </label>
        <input className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="email"
            id="Email"
            name="Email"
            placeholder="ex : DPGR@esi.dz" />
             <label htmlFor="confirmepassword"
       className={`font-bold text-dark-purple focus:text-green`}>
         Password confirmation :
        </label>
        <input className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="password"
            id="confirmepassword"
            name="confirmepassword"
            placeholder="ex : ********" />
       
       </div>
    </form>
    <div>
        <button className="submit-form suivant m-5 px-8 py-4 w-fit rounded-md text-white buttonn"
          type="submit">Mettre a jour</button>
    </div>
   </div>
    </div>
   
    
  )
  */
  