import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ShowCaseCard() {
  const RUNNING_URL = "http://localhost:5000";
  const ENDPOINT = "/DPGR";

  const [DPGRnumber, setDPGRNumber] = useState(0);

  useEffect(() => {
    const fetchDPGR = async () => {
      const response = await axios.get(RUNNING_URL + ENDPOINT);
      console.log(response);
      setDPGRNumber(response.data.length);
    };

    fetchDPGR();
  }, []);

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-80 h-[22rem] rounded-xl mt-44 flex justify-between flex-col items-center">
      <img
        src={require("../../assets/Statistics3D.png")}
        alt="statistics"
        className="relative bottom-48"
      />
      <div className="relative bottom-48 flex flex-col justify-evenly items-center h-full">
        <h1 className="text-5xl font-bold">{DPGRnumber} Users</h1>
        <h2 className="mt-5 font-thin">Gestion des doctorants</h2>
        <h2 className="font-thin">Gestion des PVs</h2>
        <h2 className="font-thin">statistiques</h2>
        <div className="flex flex-1">
          <button className=" bg-black text-white px-5 py-2 rounded-2xl mx-5 mt-5">
            <Link to={"/Statistics"}>Statistics</Link>
          </button>
          <button className=" bg-white text-black px-5 py-2 rounded-2xl mx-5 mt-5">
            <Link to={"/Doctorant"}>Doctorants</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowCaseCard;
