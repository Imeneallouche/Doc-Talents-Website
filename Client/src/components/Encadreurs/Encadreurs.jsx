import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Encadreurs = () => {
  const [Encadreur, setEncadreur] = useState([]);
  const RUNNING_URL = "http://localhost:5000";
  const ENDPOINT = "/Encadreurs";
  const history = useHistory();

  useEffect(() => {
    const fetchEncadreur = async () => {
      const response = await axios.get(RUNNING_URL + ENDPOINT);
      console.log(response);
      setEncadreur(response.data);
    };

    fetchEncadreur();
  }, []);

  function handleOnClickUser(username, usernameId) {
    const usernamerouter = username.toLowerCase().replace(" ", "");
    history.push({
      pathname: `/Encadreurs/${usernamerouter}`,
      state: { usernameId },
    });
  }

  return (
    <div className={`bg-white-bluish w-full flex flex-col`}>
       <div className="bg-gradient-to-l from-blue-900 to-indigo-700 w-50 mr-20 mb-5 h-20 rounded-3xl flex justify-start items-center text-white text-lg ml-20 font-bold poppins shadow-md pl-10">
       LIST DES ENCADREURS</div>
      <ul
        className={`mx-2 grow overflow-y-auto`}
        style={{ height: "calc(100vh - 14rem)" }}
      >
        {Encadreur.map((Encadreur, index) => (
          <li
            key={Encadreur.Id_Encadreur}
            className="bg-white text-purple rounded-lg p-4 m-2 flex justify-between items-center content-center hover:cursor-pointer hover:bg-white-bluish"
            onClick={() => handleOnClickUser(Encadreur.nom + Encadreur.prenom)}
            role="button"
          >
            <img
              className="w-12 mr-5"
              src={require(`../../assets/Avatars/F${index % 5}.png`)}
              alt="profile"
            />
            <div className="mr-2 flex justify-start w-1/6">
              <span>
                {Encadreur.nom} {Encadreur.prenom}
              </span>
            </div>
            <div className="flex justify-start w-1/12">
              <span>{Encadreur.grade}</span>
            </div>
            <div className="flex justify-start w-1/8">
              <span>{Encadreur.specialite}</span>
            </div>
            <div className="mr-2 flex justify-start w-1/12">
              <span>{Encadreur.mail}</span>
            </div>
            <div className="flex justify-start w-1/12">
              <span>{Encadreur.telephone}</span>
            </div>
            <div className="flex justify-start w-1/12">
              <span>{Encadreur.laboratoire}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Encadreurs;
