import React from "react";
import "./Popup.css"


export default function Popup(){
    return(
        <div className="popup bg-white-bluish h-[55%] w-[35%] rounded-[10px] absolute flex flex-col items-center justify-center p-4">
            <h3 className="text-dark-purple font-semibold text-[1.7em] text-center">Veuillez insérer le numéro du pv d'inscription</h3>
            <div className="mt-12 w-[100%] flex justify-between pl-12 pr-12">
                <input 
                type="text" 
                placeholder="Numéro du PV inscription (ex: 2018)"
                className="w-[70%] h-[40px] rounded"
                />
                <button 
                className="confirm bg-dark-purple"
                type="submit"
                >
                
                    Confirmer
                </button>
            </div>
        </div>
    )
}