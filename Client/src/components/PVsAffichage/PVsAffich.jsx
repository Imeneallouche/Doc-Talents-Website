import React, { useState, useEffect } from "react";
import Select from "react-select";
import PVcard from "./PVcard";
import axios from "axios";
import { Link } from "react-router-dom";
//import PVformulaire from "../../pages/PVformulaire";


const PVsAffich = () => {

    const [selectedYear, setSelectedYear] = useState(null);
    const [filteredPVs, setFilteredPVs] = useState([]);
    const [PVs, setPVs] = useState([]);
    const [year, setYear] = useState("2012");

    const startYear = 2012; // Starting year
    const endYear = new Date().getFullYear(); // Current year

    const years = [];
    for (let i = startYear; i <= endYear; i++) {
        let obj = { value: i, label: i };
        years.push(obj);
    }

    useEffect(() => {
        const fetchPVs = async () => {
            const response = await axios.get(
                `http://localhost:5000/PV/${year}`
            );
            setPVs(response.data);
            setFilteredPVs(response.data);
        };
        fetchPVs();
    }, [year]);

    const handleYearChange = (selectedOption) => {
        setSelectedYear(selectedOption);
        setYear(selectedOption.value);
        console.log(selectedOption);
        console.log(year);
    };

    return (
        <div style={{ flex: 1, flexDirection: 'row', marginLeft: '2rem' }}>
            <div style={{ margin: '2rem' }}>
                <h1 className="text-4xl font-bold text-black"> PVs </h1>
                <button className="rounded-md text-white px-2 py-1 text-sm font-regular bg-dark-purple">
                    <Link to="./PV/ajouter">+</Link>
                </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                <div style={{ marginBottom: '2rem' }}>
                    <Select
                        className="mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder={startYear}
                        id="Year"
                        value={selectedYear}
                        onChange={handleYearChange}
                        isClearable
                        options={years}
                        styles={{
                            control: base => ({ ...base, width: '200px' }),
                            option: (provided, state) => ({
                                ...provided,
                                color: 'grey'
                            }),
                            menuPortal: base => ({ ...base, zIndex: 9999 }),
                            menu: base => ({
                                ...base,
                                width: '200px'
                            })
                        }}
                        menuPortalTarget={document.body}
                        menuPortalZIndex={9998}
                    ></Select>
                </div>
                <div style={{ height: "400px", width: '700px', overflowY: "scroll", marginBottom: '2rem' }}>
                    {PVs?.length > 0
                        ? (
                            <div className="grid grid-cols-2 gap-9">
                                {PVs.map((pv) => (
                                    <PVcard pv1={pv} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-1xl font-normal text-black" style={{ display: 'flex', marginLeft: '30rem' }}>
                                <h2>No PVs found</h2>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default PVsAffich;
