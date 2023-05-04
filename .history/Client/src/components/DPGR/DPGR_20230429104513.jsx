import React from 'react';
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
        <label htmlFor="Prenom"
       className={`font-bold text-dark-purple focus:text-green`}>
         Prenom :
        </label>
        <input className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
            id="Prenom"
            name="Prenom"
            placeholder="ex : ALLOUCHE" />
       </div>

       <div className="m-4 flex flex-col flex-1">
       <label htmlFor="Role"
       className={`font-bold text-dark-purple focus:text-green`}>
         Role :
        </label>
        <input className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
            id="Role"
            name="Role"
            placeholder="ex : ALLOUCHE" />
       </div>
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
       </div>
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
       </div>
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
       </div>
      
      
    </form>
 </div>
    </div>
   
    
  )
}

export default DPGR