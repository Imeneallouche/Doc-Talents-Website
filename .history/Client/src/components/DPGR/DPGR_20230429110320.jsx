import React, { useState } from "react";
import Select from "react-select";
import "./DPGR.css";


const DPGR = () => {
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
            placeholder="ex : ALLOUCHE" />
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
            type="text"
            id="telephone"
            name="telephone"
            placeholder="ex : ALLOUCHE" />
             <label htmlFor="password"
       className={`font-bold text-dark-purple focus:text-green`}>
         Password :
        </label>
        <input className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
            id="password"
            name="password"
            placeholder="ex : ********" />
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
            placeholder="ex : ALLOUCHE" />
            <label htmlFor="Sexe" className={`font-bold text-dark-purple`}>
            Sexe
          </label>
          <Select
            placeholder="Male"
            styles={customStyles}
            id="Sexe"
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
            type="text"
            id="Email"
            name="Email"
            placeholder="ex : ALLOUCHE" />
             <label htmlFor="confirmepassword"
       className={`font-bold text-dark-purple focus:text-green`}>
         Password confirmation :
        </label>
        <input className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
            id="confirmepassword"
            name="confirmepassword"
            placeholder="ex : ALLOUCHE" />
       
       </div>
    </form>
 </div>
    </div>
   
    
  )
}

export default DPGR