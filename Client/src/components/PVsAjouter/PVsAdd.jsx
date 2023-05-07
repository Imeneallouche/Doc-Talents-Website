import React, { useState, useEffect } from "react";
import axios from "axios";


const PVsAdd = () => {

    const [showPopup, setShowPopup] = useState(false);

    const [nbPV, setNbPV] = useState('');
    const [date, setDate] = useState('');
    const [link, setLink] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            Id_PV: nbPV,
            Date_PV: date,
            Link_PV: link,
        };
        try {
            const response = await axios.post('http://localhost:5000/PV/Ajouter', formData);
            console.log(response.data);
            setShowPopup(true);
            // Handle the response from the server
        } catch (error) {
            console.error(error);
            // Handle any errors that occurred during the request
        }
    };

    const handleReset = () => {
        setNbPV('');
        setDate('');
        setLink('');
        setShowPopup(false);
    };


    return (
        <div style={{ flex: 1, flexDirection: 'row', margin: '2rem' }}>
            <button onClick={() => window.history.back()} className="text-lg font-semibold text-gray-700 mb-6">
                &lt; Retour
            </button>
            <h2 className="text-3xl font-bold text-black">Ajouter un PV</h2>
            <div className="p-10 max-w-lg mx-auto bg-white rounded-xl shadow-md">
                <form onSubmit={handleSubmit}>
                    <div className="mb-10">
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="num">
                            Numéro
                        </label>
                        <input
                            className="border border-gray-300 p-2 w-full rounded-md text-gray-900 bg-gray-100"
                            type="text"
                            id="Numéro de PV"
                            value={nbPV}
                            onChange={(e) => setNbPV(e.target.value)}
                        />
                    </div>
                    <div className="mb-10">
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="Date">
                            Date
                        </label>
                        <input
                            className="border border-gray-300 p-2 w-full rounded-md text-gray-900 bg-gray-100"
                            type="date"
                            id="Date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className="mb-10">
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="Link">
                            Lien
                        </label>
                        <input
                            className="border border-gray-300 p-2 w-full rounded-md text-gray-900 bg-gray-100"
                            id="Lien"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </div>
                    <div className="text-center">
                        <button
                            className="bg-teal-400 hover:bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg text-xl"
                            type="submit"
                        >
                            Ajouter
                        </button>
                    </div>
                </form>

                {showPopup && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <p className="text-gray-800">PV est ajouté.</p>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4"
                                onClick={handleReset}
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PVsAdd;
