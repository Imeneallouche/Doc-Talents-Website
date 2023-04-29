import React from "react";


function Popup{
    return(
        <div className="popup">
            <h3>Veuillez insérer le numéro du pv d'inscription</h3>
            <input 
            type="text" 
            placeholder="Numéro du pv inscription"
            />
            <button className="confirm">Confirmer</button>
        </div>
    )
}

export default Popup; 