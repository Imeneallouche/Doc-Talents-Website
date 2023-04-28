import React from "react";
import "./Popup.css"


export default function Popup(){
    return(
        <div className="popup bg-white-bluish h-[55%] w-[35%] rounded-[10px] absolute flex flex-col items-center justify-center p-4">
            <h3 className="text-dark-purple font-semibold text-[1.8em] text-center">Veuillez insérer le numéro du pv d'inscription</h3>
            <div>
                <input 
                type="text" 
                placeholder="Numéro du pv inscription"
                className=""
                />
                <button className="confirm">Confirmer</button>
            </div>
        </div>
    )
}