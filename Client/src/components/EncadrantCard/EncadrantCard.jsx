import React from "react";

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
          <span className="flex-1">{username.Nom}</span>
        </div>

        <div className="mx-2 my-4 flex">
          <span className="flex-1">Prénom: </span>
          <span className="flex-1">{username.Prenom}</span>
        </div>

        <div className="mx-2 my-4 flex">
          <span className="flex-1">Etablissement: </span>
          <span className="flex-1">{username.Etablissement}</span>
        </div>

        <div className="mx-2 my-4 flex">
          <span className="flex-1">Dipolome: </span>
          <span className="flex-1">{username.Diplome}</span>
        </div>

        <div className="mx-2 my-4 flex">
          <span className="flex-1">Grade: </span>
          <span className="flex-1">{username.Grade}</span>
        </div>

        <div className="mx-2 my-4 flex">
          <span className="flex-1">Téléphone: </span>
          <span className="flex-1">{username.Telephone}</span>
        </div>

        <div className="mx-2 my-4 flex">
          <span className="flex-1">Email: </span>
          <span className="flex-1">{username.Email}</span>
        </div>

        <div className="mx-2 my-4 flex">
          <span className="flex-1">Specialité: </span>
          <span className="flex-1">{username.Specialite}</span>
        </div>

        <div className="mx-2 my-4 flex">
          <span className="flex-1">Sujets d'interet: </span>
          <span className="flex-1">{username.SujetInteret}</span>
        </div>
      </div>
    </div>
  );
}

export default EncadrantCard;
