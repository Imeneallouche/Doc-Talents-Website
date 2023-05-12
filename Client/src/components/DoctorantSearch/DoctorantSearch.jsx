import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import { useHistory } from "react-router-dom";

const DoctorantSearch = () => {
  const [Doctorants, setDoctorants] = useState([]);

  const [selectedGender, setSelectedGender] = useState(null); //Gender filter : dropdow list (Male/Female)
  const [selectedStatues, setSelectedStatues] = useState(null); //Statues filter: dropdown list (radié, abondan, soutenu, reinscri, differe)
  const [selectedMinYear, setSelectedMinYear] = useState(null); //Min inscription year filter : dropdow list (2012 --> recent year)
  const [selectedMaxYear, setSelectedMaxYear] = useState(null); //Max inscription year filter : dropdown list (2012 --> recent year)

  const [searchText, setSearchText] = useState(""); //autocomplete search bar
  const [searchResults, setSearchResults] = useState([]);

  const currentYear = new Date().getFullYear();
  const FirstYearEver = 2012;

  const history = useHistory();

  const RUNNING_URL = "http://localhost:5000";
  const ENDPOINT = "/Doctorant";

  useEffect(() => {
    const fetchDoctorants = async () => {
      const response = await axios.get(RUNNING_URL + ENDPOINT);
      console.log(response);
      setDoctorants(response.data);
    };

    fetchDoctorants();
  }, []);

  useEffect(() => {
    const results = Doctorants.filter((Doctorant) =>
      (
        Doctorant.nom.toLowerCase() +
        " " +
        Doctorant.prenom.toLowerCase()
      ).includes(searchText.toLowerCase())
    );
    setSearchResults(results);
  }, [searchText, Doctorants]);

  function handleOnClickUser(username, usernameId) {
    const usernamerouter = username.toLowerCase().replace(" ", "");
    history.push({
      pathname: `/Doctorant/${usernamerouter}`,
      state: { usernameId },
    });
  }

  const years = [];
  for (let year = FirstYearEver; year <= currentYear; year++) {
    years.push(year);
  }

  const handleGenderChange = (selectedOption) => {
    setSelectedGender(selectedOption);
    filterDoctorants(
      selectedGender,
      selectedStatues,
      selectedMinYear,
      selectedMaxYear,
      searchText
    );
  };

  const handleStatuesChange = (selectedOption) => {
    setSelectedStatues(selectedOption);
    filterDoctorants(
      selectedGender,
      selectedStatues,
      selectedMinYear,
      selectedMaxYear,
      searchText
    );
  };

  const handleMinYearChange = (selectedOption) => {
    setSelectedMinYear(selectedOption);
    filterDoctorants(
      selectedGender,
      selectedStatues,
      selectedMinYear,
      selectedMaxYear,
      searchText
    );
  };

  const handleMaxYearChange = (selectedOption) => {
    setSelectedMaxYear(selectedOption);
    filterDoctorants(
      selectedGender,
      selectedStatues,
      selectedMinYear,
      selectedMaxYear,
      searchText
    );
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
    filterDoctorants(
      selectedGender,
      selectedStatues,
      selectedMinYear,
      selectedMaxYear,
      event.target.value
    );
  };

  const filterDoctorants = (doctorant) => {
    if (
      (!selectedGender || doctorant.sexe === selectedGender.value) &&
      (!selectedStatues || doctorant.statut === selectedStatues.value) &&
      (!selectedMinYear ||
        doctorant.Premiere_inscription >= selectedMinYear.value) &&
      (!selectedMaxYear ||
        doctorant.Premiere_inscription <= selectedMaxYear.value)
    ) {
      return true;
    }
    return false;
  };

  const genderOptions = [
    { value: "M", label: "Homme" },
    { value: "F", label: "Femme" },
  ];

  const statuesOptions = [
    { value: "inscrit", label: "inscrit" },
    { value: "radié", label: "radié" },
    { value: "soutenu", label: "soutenu" },
    { value: "différé", label: "différé" },
  ];

  const yearsOption = [];
  for (let i = FirstYearEver; i <= currentYear; i++) {
    let obj = { value: i, label: i };
    yearsOption.push(obj);
  }

  /*










  */
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "white",
      borderColor: "#19202E",
      color: "#1E2959",
      placeholderColor: "#35468E",
      fontSize: "1rem",
      borderRadius: "0.375rem",
      padding: "0.4rem",

      "&:focus": {
        outline: "none",
        boxShadow: "none",
        borderColor: "#51BCA2",
        placeholderColor: "#51BCA2",
      },
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: "#35468E",
    }),
  };

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
            placeholder="Homme"
            id="Sexe"
            options={genderOptions}
            value={selectedGender}
            onChange={handleGenderChange}
            isClearable
            styles={customStyles}
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
            styles={customStyles}
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
            styles={customStyles}
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
            styles={customStyles}
          ></Select>
        </div>

        <div className="flex-1 p-8">
          <label
            htmlFor="searchBar"
            className="font-normal text-sm text-dark-purple"
          >
            {" "}
            Recherche par nom et prnom
          </label>
          <input
            className="text-purple font-normal drop-shadow-[2px_2px_2px_#00000043] rounded p-4 mt-1 w-96 border border-purple focus:border focus:border-green focus:outline-none"
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
        style={{ height: "calc(100vh - 16rem)" }}
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

            <div className="mr-2 text-sm flex justify-start flex-1">
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
};
export default DoctorantSearch;
