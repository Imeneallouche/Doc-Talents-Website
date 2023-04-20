import React, { useState, useEffect } from "react";
import "./DoctorantUpdate.css";
import axios from "axios";

const DoctorantUpdate = () => {
  const [Doctorants, setDoctorants] = useState([]);

  const [selectedGender, setSelectedGender] = useState("all"); //Gender filter : dropdow list (Male/Female)
  const [selectedStatues, setSelectedStatues] = useState("all"); //Statues filter: dropdown list (radié, abondan, soutenu, reinscri, differe)
  const [selectedMinYear, setSelectedMinYear] = useState(null); //Min inscription year filter : dropdow list (2012 --> recent year)
  const [selectedMaxYear, setSelectedMaxYear] = useState(null); //Max inscription year filter : dropdown list (2012 --> recent year)

  const [searchText, setSearchText] = useState(""); //autocomplete search bar
  const [searchResults, setSearchResults] = useState([]);

  const currentYear = new Date().getFullYear();
  const FirstYearEver = 2012;

  useEffect(() => {
    const fetchDoctorants = async () => {
      const response = await axios.get(
        //`http://localhost:5000/users?search_query=${keyword}&page=${page}&limit=${limit}`
        `http://localhost:3000/Doctorant`
      );
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
      (selectedGender === "all" || doctorant.sexe === selectedGender.value) &&
      (selectedStatues === "all" ||
        doctorant.statut === selectedStatues.value) &&
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
    { value: "H", label: "Male" },
    { value: "F", label: "Female" },
  ];

  const statuesOptions = [
    { value: "reinscrit", label: "inscrit" },
    { value: "radie", label: "radié" },
    { value: "soutenu", label: "soutenu" },
    { value: "abandon", label: "abandon" },
  ];

  const yearsOption = [];
  for (let i = FirstYearEver; i <= currentYear; i++) {
    let obj = { value: i, label: i };
    yearsOption.push(obj);
  }

  const handleAbondan = () => {
    console.log("abondan");
  };

  const handleRadiation = () => {
    console.log("raide");
  };

  const handleReinscription = () => {
    console.log("reinscrit");
  };

  const handleSoutenane = () => {
    console.log("soutenu");
  };

  return (
    <div className={`Search-Doctorant flex flex-col flex-1`}>
      <div className="Search p-8 ">
        <label htmlFor="searchBar"></label>
        <input
          className="h-25 rounded p-3 "
          id="searchBar"
          type="text"
          placeholder="Rechercher"
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </div>

      <div className="SearchBar-Filters-Doctorant">
        <div>
          <input
            type="checkbox"
            id="selectionner-tout"
            name="selectionner-tout"
            value="selectionner-tout"
          />
          <label for="selectionner-tout"> Selectionner tout</label>
        </div>

        <button
          className="m-2 p-3 bg-dark-purple rounded-md text-white"
          onClick={handleReinscription}
        >
          Reinscription
        </button>

        <button
          className="m-2 p-3 bg-dark-purple rounded-md text-white"
          onClick={handleSoutenane}
        >
          Soutenance
        </button>

        <button
          className="m-2 p-3 bg-dark-purple rounded-md text-white"
          onClick={handleRadiation}
        >
          Radiation
        </button>

        <button
          className="m-2 p-3 bg-dark-purple rounded-md text-white"
          onClick={handleAbondan}
        >
          Abandon
        </button>
      </div>
      <ul className="Search-Results">
        {searchResults.filter(filterDoctorants).map((Doctorant, index) => (
          <li
            key={Doctorant.Id_Doctorant}
            className={`bg-white rounded-lg p-4 m-2 flex`}
          >
            <input type="checkbox" />
            <img
              className="w-12"
              src={require(`../../assets/Avatars/${Doctorant.sexe.toUpperCase()}${
                index % 5
              }.png`)}
              alt="profile"
            />
            <span className="f">
              {Doctorant.nom} {Doctorant.prenom}
            </span>
            <span className="">{Doctorant.mail}</span>
            <span className="">{Doctorant.Specialite}</span>
            <span className="">{Doctorant.intitule_sujet}</span>
            <span className="">{Doctorant.statut}</span>
            <button>Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DoctorantUpdate;
