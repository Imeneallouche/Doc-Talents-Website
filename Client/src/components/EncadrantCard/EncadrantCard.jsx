import React from "react";
import axios from "axios";

const Data = axios.get(`http://localhost:3000/Encadrant`);

function EncadrantCard({ type, username, color }) {
  return (
    <div
      className="bg-light-purple border rounded-lg my-5 mx-10 p-6 w-96 flex flex-col justify-start"
      style={{ background: color.backGround, boxShadow: color.boxShadow }}
    >
      <div className="flex justify-center m-5">
        <h1 className="text-white">votre {type}</h1>
      </div>
      <div>
        <div className="mx-2 my-4 flex">
          <span className="flex-1">Nom: </span>
          <span className="flex-1">Si Tayeb</span>
        </div>

        <div className="mx-2 my-4 flex">
          <span className="flex-1">Prénom: </span>
          <span className="flex-1">Fatima</span>
        </div>

        <div className="mx-2 my-4 flex">
          <span className="flex-1">Etablissement: </span>
          <span className="flex-1">ESI Alger</span>
        </div>

        <div className="mx-2 my-4 flex">
          <span className="flex-1">Dipolome: </span>
          <span className="flex-1">Doctorat en ALSDS</span>
        </div>

        <div className="mx-2 my-4 flex">
          <span className="flex-1">Grade: </span>
          <span className="flex-1">Professeur</span>
        </div>

        <div className="mx-2 my-4 flex">
          <span className="flex-1">Téléphone: </span>
          <span className="flex-1">0699240858</span>
        </div>

        <div className="mx-2 my-4 flex">
          <span className="flex-1">Email: </span>
          <span className="flex-1">ens_sitayeb@esi.dz</span>
        </div>

        <div className="mx-2 my-4 flex">
          <span className="flex-1">Specialité: </span>
          <span className="flex-1">ALSDS</span>
        </div>

        <div className="mx-2 my-4 flex" >
          <span className="flex-1">Sujets d'interet: </span>
          <span className="flex-1">problem solving, machine learning, data structures</span>
        </div>
      </div>
    </div>
  );
}

export default EncadrantCard;
