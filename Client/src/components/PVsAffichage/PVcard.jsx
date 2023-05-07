import React from "react";

const PVcard = ({ pv1 }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 h-600" >
            <div className="flex justify-between">
                <div className="flex flex-col px-4">
                    <p className="text-2xl font-medium text-black"> Numéro </p>
                    <p className="text-0.5xl font-light text-black"> {pv1.Id_PV} </p>
                </div>
                <div className="flex flex-col px-4">
                    <p className="text-2xl font-medium text-black"> Date </p>
                    <p className="text-0.5xl font-light text-black"> {pv1.Date_PV.substring(0, 10)}</p>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <a href={pv1.Link_PV}>
                    <button className="bg-teal-400 text-white py-2 px-7 rounded hover:bg-teal-500">Lien</button>
                </a>
            </div>
        </div>
    )
}

export default PVcard