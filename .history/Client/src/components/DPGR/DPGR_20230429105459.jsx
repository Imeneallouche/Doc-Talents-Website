import React, { useState } from "react";
import Select from "react-select";
import "./DPGR.css";


const DPGR = () => {
    
  return (
    <div>
 <div className="Title">Profile DPGR</div>
 <div>
    <form className="m-10 grow flex flex-col justify-center items-center">
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