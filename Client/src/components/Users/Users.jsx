import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [DPGR, setDPGR] = useState([]);
  const RUNNING_URL = "http://localhost:5000";
  const ENDPOINT = "/DPGR";

  useEffect(() => {
    const fetchDPGR = async () => {
      const response = await axios.get(RUNNING_URL + ENDPOINT);
      console.log(response);
      setDPGR(response.data);
    };

    fetchDPGR();
  }, []);

  return (
    <div className={`bg-white-bluish w-full flex flex-col`}>
      <div className="bg-gradient-to-l from-blue-900 to-indigo-700 w-50 mr-20 mb-5 h-20 rounded-3xl flex justify-start items-center text-white text-lg ml-20 font-bold poppins shadow-md pl-10">
        LIST DES UTILISATEURS
      </div>
      <ul
        className={`mx-2 grow overflow-y-auto`}
        style={{ height: "calc(100vh - 14rem)" }}
      >
        {DPGR.map((DPGRm, index) => (
          <li
            key={DPGRm.email}
            className="bg-white text-purple rounded-lg p-4 m-2 flex justify-between items-center content-center hover:cursor-pointer hover:bg-white-bluish"
            onClick={() => handleOnClickUser(DPGRm.nom + DPGRm.prenom)}
            role="button"
          >
            <img
              className="w-12 mr-5"
              src={require(`../../assets/Avatars/${DPGRm.sexe.toUpperCase()}${
                index % 5
              }.png`)}
              alt="profile"
            />
            <div className="flex justify-start w-1/12">
              <span>{DPGRm.Role}</span>
            </div>
            <div className="mr-2 flex justify-start w-1/6">
              <span>
                {DPGRm.nom} {DPGRm.prenom}
              </span>
            </div>

            <div className="flex justify-start w-1/12">
              <span>{DPGRm.sexe}</span>
            </div>
            <div className="mr-2 flex justify-start w-1/6">
              <span>{DPGRm.email}</span>
            </div>
            <div className="flex justify-start w-1/12">
              <span>{DPGRm.telephone}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
