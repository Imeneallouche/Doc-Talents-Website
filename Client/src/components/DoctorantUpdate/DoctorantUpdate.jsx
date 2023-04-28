import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const DoctorantUpdate = () => {
  const [Doctorants, setDoctorants] = useState([]);
  const [searchText, setSearchText] = useState(""); //autocomplete search bar
  const [searchResults, setSearchResults] = useState([]);
  const [checkedIds, setCheckedIds] = useState([]);

  const history = useHistory();
  const RUNNING_URL = "http://localhost:5000";
  const ENDPOINT = "/Update";
  const RADIATION_ENDPOINT = "/Radiation";
  const SOUTENANCE_ENDPOINT = "/Soutenance";
  const REINSCRIPTION_ENDPOINT = "/Reinscription";

  const PV_ID = "2021/12/30";
  const PV_DATE = "2021-12-30";

  function handleOnClickUser(username) {
    const usernamerouter = username.toLowerCase().replace(" ", "");
    history.push(`/Doctorant/${usernamerouter}`);
  }

  useEffect(() => {
    const fetchDoctorants = async () => {
      const response = await axios.get(RUNNING_URL + ENDPOINT);
      setDoctorants(response.data);
    };

    fetchDoctorants();
  }, []);

  useEffect(() => {
    const results = Doctorants.filter(
      (Doctorant) =>
        Doctorant.nom.toLowerCase().includes(searchText.toLowerCase()) ||
        Doctorant.prenom.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(results);
  }, [searchText, Doctorants]);

  /*








  */

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleCheck = (event) => {
    const id = event.target.id;
    console.log(id);
    if (event.target.checked) {
      setCheckedIds((prevIds) => [...prevIds, id]);
    } else {
      setCheckedIds((prevIds) => prevIds.filter((prevId) => prevId !== id));
    }
  };

  const handleRadiation = () => {
    if (checkedIds.length > 0) {
      axios
        .post(RUNNING_URL + RADIATION_ENDPOINT, {
          ids: checkedIds,
          pv_id: PV_ID,
          date_pv: PV_DATE,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      window.location.reload();
    }
  };

  const handleReinscription = () => {
    if (checkedIds.length > 0) {
      axios
        .post(RUNNING_URL + REINSCRIPTION_ENDPOINT, {
          ids: checkedIds,
          pv_id: PV_ID,
          date_pv: PV_DATE,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      window.location.reload();
    }
  };

  const handleSoutenane = () => {
    if (checkedIds.length > 0) {
      axios
        .post(RUNNING_URL + SOUTENANCE_ENDPOINT, {
          ids: checkedIds,
          pv_id: PV_ID,
          pv_date: PV_DATE,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      window.location.reload();
    }
  };

  /*

















  */

  return (
    <div className={`bg-white-bluish w-full flex flex-col flex-1`}>
      <div className="text-purple flex items-center justify-evenly">
        <div className="flex items-center justify-items-center">
          <input
            className="w-5 h-5"
            type="checkbox"
            id="selectionner-tout"
            name="selectionner-tout"
            value="selectionner-tout"
          />
          <label className="ml-2 font-normal" htmlFor="selectionner-tout">
            Selectionner tout
          </label>
        </div>

        <button
          className="m-2 py-3 px-5 bg-dark-purple rounded-md text-white hover:bg-light-purple"
          onClick={handleReinscription}
        >
          Reinscription
        </button>

        <button
          className="m-2 py-3 px-5 bg-dark-purple rounded-md text-white hover:bg-light-purple"
          onClick={handleSoutenane}
        >
          Soutenance
        </button>

        <button
          className="m-2 py-3 px-5 bg-dark-purple rounded-md text-white hover:bg-light-purple"
          onClick={handleRadiation}
        >
          Radiation
        </button>

        <div className="p-8 ">
          <label htmlFor="searchBar"></label>
          <input
            className="drop-shadow-[2px_2px_2px_#00000043] rounded p-3 w-80 border border-purple focus:border focus:border-green focus:outline-none"
            id="searchBar"
            type="text"
            placeholder="Rechercher"
            value={searchText}
            onChange={handleSearchTextChange}
          />
        </div>
      </div>

      <ul
        className="mx-8 overflow-y-scroll"
        style={{ height: "calc(100vh - 15rem)" }}
      >
        {searchResults.map((Doctorant, index) => (
          <li
            key={Doctorant.Id_Doctorant}
            className="bg-white text-purple rounded-lg p-4 m-2 flex justify-between items-center content-center"
          >
            <input
              type="checkbox"
              onChange={handleCheck}
              id={Doctorant.Id_Doctorant}
              className="w-5 h-5 mr-5"
            />
            <img
              className="w-12 mr-4"
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
                {" "}
                {Doctorant.intitule_sujet_bis
                  ? Doctorant.intitule_sujet_bis
                  : Doctorant.intitule_sujet}
              </span>
            </div>

            <div className="flex justify-start">
              <span>{Doctorant.statut}</span>
            </div>
            <button
              className={`ml-5 p-2 bg-purple rounded-md text-white hover:bg-green`}
              onClick={() =>
                handleOnClickUser(Doctorant.nom + Doctorant.prenom)
              }
              role="button"
            >
              Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DoctorantUpdate;
