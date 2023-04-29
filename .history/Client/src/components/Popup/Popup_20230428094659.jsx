import React from "react";
import "./Popup.css"


export default function Popup(){
    return(
        <div className="popup bg-white-bluish h-[50%] w-[50%] rounded-[10px] absolute flex">
            <h3 className="text-dark-purple font-bold">Veuillez insérer le numéro du pv d'inscription</h3>
            <input 
            type="text" 
            placeholder="Numéro du pv inscription"
            className=""
            />
            <button className="confirm">Confirmer</button>
        </div>
    )
}