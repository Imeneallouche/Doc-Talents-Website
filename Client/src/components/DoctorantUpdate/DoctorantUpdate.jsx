import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Popup from "../Popup/Popup";

const DoctorantUpdate = () => {
  const [Doctorants, setDoctorants] = useState([]);
  const [searchText, setSearchText] = useState(""); //autocomplete search bar
  const [searchResults, setSearchResults] = useState([]);

  const [showPopup, setShowPopup] = useState(false);

  const [checkedIds, setCheckedIds] = useState([]);

  const [action, setAction] = useState(null);

  const history = useHistory();
  const RUNNING_URL = "http://localhost:5000";
  const ENDPOINT = "/Update";

  const RADIATION_ENDPOINT = "/Radiation";
  const SOUTENANCE_ENDPOINT = "/Soutenance";
  const REINSCRIPTION_ENDPOINT = "/Reinscription";
  const REINSCRIPTIONDIFFERE = "/RegisterDiffere";

  let PV_ID;
  let PV_DATE;
  let PV_LINK;

  const handleSubmitPopup = (FormData) => {
    PV_ID = FormData.text;
    PV_DATE = FormData.date;
    PV_LINK = FormData.Link;

    setShowPopup(false);

    if (action == 1) {
      handleAction(SOUTENANCE_ENDPOINT);
    } else if (action == 2) {
      handleAction(REINSCRIPTION_ENDPOINT);
    } else if (action == 3) {
      handleAction(RADIATION_ENDPOINT);
    } else if (action == 4) {
      handleAction(REINSCRIPTIONDIFFERE);
    }
  };

  function handleOnClickUser(username, usernameId) {
    const usernamerouter = username.toLowerCase().replace(" ", "");

    history.push({
      pathname: `/Doctorant/${usernamerouter}`,
      state: { usernameId },
    });
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

  const handleCheckAll = (event) => {
    if (event.target.checked) {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((checkbox) => {
        checkbox.checked = true;
        if (!checkedIds.includes(checkbox.id)) {
          setCheckedIds((prevState) => [...prevState, checkbox.id]);
        }
      });
    }
  };

  const handleAction = (ACTION_ENDPOINT) => {
    axios
      .post(RUNNING_URL + ACTION_ENDPOINT, {
        ids: checkedIds,
        pv_id: PV_ID,
        date_pv: PV_DATE,
        lien_pv: PV_LINK,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.reload();
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
            onChange={handleCheckAll}
          />
          <label className="ml-2 font-normal" htmlFor="selectionner-tout">
            Selectionner tout
          </label>
        </div>

        <button
          className="py-3 px-5 bg-dark-purple rounded-md text-white hover:bg-light-purple"
          onClick={(e) => {
            if (checkedIds.length > 0) {
              setAction(2);
              setShowPopup(true);
            }
          }}
        >
          Reinscription
        </button>

        <button
          className="py-3 px-5 bg-dark-purple rounded-md text-white hover:bg-light-purple"
          onClick={(e) => {
            if (checkedIds.length > 0) {
              setAction(4);
              setShowPopup(true);
            }
          }}
        >
          Reinscription Différé
        </button>

        <button
          className="py-3 px-5 bg-dark-purple rounded-md text-white hover:bg-light-purple"
          onClick={(e) => {
            if (checkedIds.length > 0) {
              setAction(1);
              setShowPopup(true);
            }
          }}
        >
          Soutenance
        </button>

        <button
          className="py-3 px-5 bg-dark-purple rounded-md text-white hover:bg-light-purple"
          onClick={(e) => {
            if (checkedIds.length > 0) {
              setAction(3);
              setShowPopup(true);
            }
          }}
        >
          Radiation
        </button>

        <div className="p-2 ">
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
        className="mx-2 my-5 overflow-y-scroll"
        style={{ height: "calc(100vh - 13rem)" }}
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
                handleOnClickUser(
                  Doctorant.nom + Doctorant.prenom,
                  Doctorant.Id_Doctorant
                )
              }
              role="button"
            >
              Details
            </button>
          </li>
        ))}
      </ul>

      {showPopup && <Popup onSubmit={handleSubmitPopup} />}
    </div>
  );
};
export default DoctorantUpdate;
