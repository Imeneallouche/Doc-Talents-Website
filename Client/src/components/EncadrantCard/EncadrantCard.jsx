import React from "react";
import axios from "axios";

const Data = axios.get(`http://localhost:3000/Encadrant`);

function EncadrantCard() {
  return (
    <div className="bg-light-purple border rounded-lg m-7 p-10">
      <h1 className="text-white">votre Encadrant</h1>

    </div>
  );
}

export default EncadrantCard;
