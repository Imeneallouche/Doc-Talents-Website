import React from "react";
import "./Popup.css"


export default function Popup(){
    return(
        <div className="popup bg-white-bluish h-[25%]">
            <h3 className="text-dark-purple font-bold">Veuillez insérer le numéro du pv d'inscription</h3>
            {/* <input 
            type="text" 
            placeholder="Numéro du pv inscription"
            />
            <button className="confirm">Confirmer</button> */}
        </div>
    )
}