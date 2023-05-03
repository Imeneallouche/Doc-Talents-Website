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
        <div className="m-2 flex-1">
          <label
            htmlFor="minYear"
            className="font-normal text-sm text-dark-purple"
          >
            1st year register min
          </label>
          <Select
            className="mt-1"
            placeholder={FirstYearEver}
            id="minYear"
            value={selectedMinYear}
            onChange={handleMinYearChange}
            isClearable
            options={yearsOption}
          ></Select>
        </div>

        <div className="m-2 flex-1 ">
          <label
            htmlFor="maxYear"
            className="font-normal text-sm text-dark-purple"
          >
            1st year register max
          </label>
          <Select
            className="mt-1"
            placeholder={currentYear}
            id="maxYear"
            value={selectedMaxYear}
            onChange={handleMaxYearChange}
            options={yearsOption}
            isClearable
          ></Select>
        </div>

        <div className="flex-1 p-8">
          <input
            className="text-purple font-normal drop-shadow-[2px_2px_2px_#00000043] rounded p-3 w-80 border border-purple focus:border focus:border-green focus:outline-none"
            id="searchBar"
            type="text"
            placeholder="Rechercher"
            value={searchText}
            onChange={handleSearchTextChange}
          />
        </div>
      </div>
      <ul
        className={`mx-2 grow overflow-y-auto`}
        style={{ height: "calc(100vh - 14rem)" }}
      >
        {searchResults.filter(filterDoctorants).map((Doctorant, index) => (
          <li
            key={Doctorant.Id_Doctorant}
            className="bg-white text-purple rounded-lg p-4 m-2 flex justify-between items-center content-center hover:cursor-pointer hover:bg-white-bluish"
            onClick={() => handleOnClickUser(Doctorant.nom + Doctorant.prenom)}
            role="button"
          >
            <img
              className="w-12 mr-5"
              src={require(`../../assets/Avatars/${Doctorant.sexe.toUpperCase()}${
                index % 5
              }.png`)}
              alt="profile"
            />
            <div className="mr-2 flex justify-start w-1/6">
              <span>
                {Doctorant.nom} {Doctorant.prenom}
              </span>
            </div>
            <div className="mr-2 flex justify-start w-1/6">
              <span>{Doctorant.mail}</span>
            </div>

            <div className="flex justify-start w-1/12">
              <span>{Doctorant.Specialite}</span>
            </div>

            <div className="mr-2 flex justify-start flex-1">
              <span>
                {Doctorant.intitule_sujet_bis
                  ? Doctorant.intitule_sujet_bis
                  : Doctorant.intitule_sujet}
              </span>
            </div>

            <div className="flex justify-start ml-2">
              <span>{Doctorant.statut}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users