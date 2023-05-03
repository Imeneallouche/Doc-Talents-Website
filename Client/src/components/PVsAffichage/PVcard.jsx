import React from "react";
//import "./PVsAffich.css";

const PVcard = ({pv1}) => {
    return (
        <div className="bg-white h-350 w-1.5/2 shadow-md rounded-lg p-4 ">
            <div /*className='titre'*/>
                    <p className="text-2xl font-medium text-black"> Num_PV </p>
                    <p className="text-0.5xl font-light text-black"> {pv1.Id_PV} </p>
                    <p className="text-2xl font-medium text-black"> Date_PV </p>
                    <p className="text-0.5xl font-light text-black"> {pv1.Date_PV.substring(0,10)}</p>
            </div> 
            <a href={pv1.Link_PV}>
                <button className="bg-teal-400 text-white py-2 px-7 rounded hover:bg-teal-500">Lien</button> 
            </a>
        </div>
    )
} 

export default PVcard