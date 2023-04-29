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
       >
         Nom :
        </label>
        <input type="text" />
       </div>
    </form>
 </div>
    </div>
   
    
  )
}

export default DPGR