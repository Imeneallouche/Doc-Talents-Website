import React, { useState, useEffect } from "react";
import Select from "react-select";
import PVcard from "./PVcard";
import axios from "axios";
import { Link } from "react-router-dom";
import PVformulaire from "../../pages/PVformulaire";

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
      const response = await axios.get(`http://localhost:5000/PV/${year}`);
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
    <div style={{ flex: 1, flexDirection: "row", margin: "3rem" }}>
      <p class="text-5xl font-bold text-black"> PVs </p>
      <button className="rounded-md text-white px-4 py-2 text-xl font-regular bg-dark-purple">
        <Link to="./PV/ajouter">+ Ajouter un PV</Link>
      </button>

      <div className="m-2 flex-1 ">
        <Select
          className="mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder={startYear}
          id="Year"
          value={selectedYear}
          onChange={handleYearChange}
          isClearable
          options={years}
          styles={{
            control: (base) => ({ ...base, width: "200px" }),
            option: (provided, state) => ({
              ...provided,
              color: "grey",
            }),
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
            menu: (base) => ({
              ...base,
              width: "200px",
            }),
          }}
          menuPortalTarget={document.body}
          menuPortalZIndex={9998}
        ></Select>

        <div style={{ height: "400px", overflowY: "scroll" }}>
          {PVs?.length > 0 ? (
            <div className="grid grid-cols-2 gap-5 mt-4 ">
              {PVs.map((pv) => (
                <PVcard pv1={pv} />
              ))}
            </div>
          ) : (
            <div className="text-1xl font-normal text-black">
              <h2>No PVs found</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PVsAffich;
