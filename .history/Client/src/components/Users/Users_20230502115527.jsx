import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Users = () => {
    const [DPGR, setDPGR] = useState([]);
    const history = useHistory();

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
      <div className="text-gray-600 flex items-center justify-evenly">
        <div className="m-2 flex-1">
          <label
            htmlFor="Sexe"
            className="font-normal text-sm text-dark-purple"
          >
            Sexe
          </label>
          <Select
            className="mt-1"
            placeholder="Male"
            id="Sexe"
            options={genderOptions}
            value={selectedGender}
            onChange={handleGenderChange}
            isClearable
          />
        </div>
        <div className="m-2 flex-1">
          <label
            htmlFor="Statue"
            className="font-normal text-sm text-dark-purple"
          >
            Statut
          </label>
          <Select
            className="mt-1"
            placeholder="Inscrit"
            id="Statue"
            options={statuesOptions}
            value={selectedStatues}
            onChange={handleStatuesChange}
            isClearable
          />
        </div>

      
      </div>
      <ul
        className={`mx-2 grow overflow-y-auto`}
        style={{ height: "calc(100vh - 14rem)" }}
      >
          <li
            key={DPGR.email}
            className="bg-white text-purple rounded-lg p-4 m-2 flex justify-between items-center content-center hover:cursor-pointer hover:bg-white-bluish"
            onClick={() => handleOnClickUser(DPGR.nom + DPGR.prenom)}
            role="button"
          >
            <img
              className="w-12 mr-5"
              src={require(`../../assets/Avatars/${DPGR.sexe.toUpperCase()}${
                index % 5
              }.png`)}
              alt="profile"
            />
            <div className="mr-2 flex justify-start w-1/6">
              <span>
                {DPGR.nom} {DPGR.prenom}
              </span>
            </div>
            <div className="flex justify-start w-1/12">
              <span>{DPGR.Role}</span>
            </div>
            <div className="flex justify-start w-1/12">
              <span>{DPGR.sexe}</span>
            </div>
            <div className="mr-2 flex justify-start w-1/6">
              <span>{DPGR.email}</span>
            </div>
            <div className="flex justify-start w-1/12">
              <span>{DPGR.telephone}</span>
            </div>
          </li>
      </ul>
    </div>
  );
}

export default Users