import React from "react";
import "./Popup.css"


export default function Popup(){
    return(
        <div className="popup bg-white-bluish h-[50%] w-[30%] rounded-[10px] absolute flex flex-col items-center justify-center">
            <h3 className="text-dark-purple font-bold text-[1.8em]">Veuillez insérer le numéro du pv d'inscription</h3>
            {/* <input 
            type="text" 
            placeholder="Numéro du pv inscription"
            className=""
            /> */}
            <button className="confirm">Confirmer</button>
        </div>
    )
}