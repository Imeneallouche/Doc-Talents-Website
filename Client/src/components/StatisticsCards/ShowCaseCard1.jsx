import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ShowCaseCard1() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-72 h-[20rem] rounded-xl mt-44 flex justify-between flex-col items-center">
      <img
        src={require("../../assets/InscrireDoctorant.png")}
        alt="statistics"
        className="relative bottom-48"
      />
      <div className="relative bottom-48 flex flex-col justify-evenly items-center h-full">
        <h1 className="text-4xl font-bold">Inscription</h1>
        <p className="mt-5 font-thin">Inscrire un nouveau</p>
        <p className="font-thin">doctorant</p>
        <p className="font-thin">à travers un formulaire</p>
        <div className="flex flex-1">
          <button className=" bg-black text-white px-5 py-2 rounded-2xl mx-5 mt-5">
            <Link to={"/Inscription/Step1"}>Inscrire Doctorant</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowCaseCard1;
