import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ShowCaseCard2() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-72 h-[20rem] rounded-xl mt-44 flex justify-between flex-col items-center">
      <img
        src={require("../../assets/DataTransfer.png")}
        alt="statistics"
        className="relative bottom-24"
      />
      <div className="relative bottom-12 flex flex-col justify-evenly items-center h-full">
        <h1 className="text-4xl font-bold">Importer</h1>
        <p className="mt-5 font-thin">Inscrivez plusieurs</p>
        <p className="font-thin">doctorants à la fois</p>
        <p className="font-thin">à travers un fichier excel</p>
        <div className="flex flex-1">
          <button className=" bg-black text-white px-5 py-2 rounded-2xl mx-5 mt-5">
            <Link to={"/ImportFile"}>Importer fichier</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowCaseCard2;
