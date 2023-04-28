import React from "react";
import "./Popup.css"


export default function Popup(){
    return(
        <div className="popup bg-white-bluish h-[55%] w-[35%] rounded-[10px] absolute flex flex-col items-center justify-center p-4 border-3 border-dark-">
            <h3 className="text-dark-purple font-semibold text-[1.7em] text-center">Veuillez insérer le numéro du pv d'inscription</h3>
            <form className="mt-12 w-[100%] flex justify-between pl-12 pr-12">
                <input 
                type="number"
                required 
                placeholder="Numéro du PV inscription (ex: 20181112)"
                className="w-[70%] rounded p-4 text-[0.8em] focus:outline-dark-purple"
                />
                <button 
                className="confirm bg-dark-purple p-4 rounded"
                type="submit"
                >
                    Confirmer
                </button>
            </form>
        </div>
    )
}