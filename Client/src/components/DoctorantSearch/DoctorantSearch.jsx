import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./DoctorantSearch.css";
import axios from "axios";

const DoctorantSearch = () => {
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
        //`http://localhost:5000/users?search_query=${searchText}&page=${page}&limit=${limit}`
        `http://localhost:3000/Update`
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
      (selectedGender === "all" || doctorant.sexe === selectedGender) &&
      (selectedStatues === "all" || doctorant.status === selectedStatues) &&
      (!selectedMinYear || doctorant.Premiere_inscription >= selectedMinYear) &&
      (!selectedMaxYear || doctorant.Premiere_inscription <= selectedMaxYear)
    ) {
      return true;
    }
    return false;
  };

  const genderOptions = [
    { value: "M", label: "Male" },
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

  return (
    <div className="Search-Doctorant">
      <div className="SearchBar-Filters-Doctorant">
        <div className="Filter-Doctorant">
          <label htmlFor="Sexe">Sexe </label>
          <Select
            placeholder="Male"
            id="Sexe"
            options={genderOptions}
            value={selectedGender}
            onChange={handleGenderChange}
            isClearable
          />
        </div>
        <div className="Filter-Doctorant">
          <label htmlFor="Statue">Statue </label>
          <Select
            placeholder="Inscrit"
            id="Statue"
            options={statuesOptions}
            value={selectedStatues}
            onChange={handleStatuesChange}
            isClearable
          />
        </div>
        <div className="Filter-Doctorant">
          <label htmlFor="minYear">Min Year </label>
          <Select
            placeholder={FirstYearEver}
            id="minYear"
            value={selectedMinYear}
            onChange={handleMinYearChange}
            isClearable
            options={yearsOption}
          ></Select>
        </div>

        <div className="Filter-Doctorant">
          <label htmlFor="maxYear">Max Year </label>
          <Select
            placeholder={currentYear}
            id="maxYear"
            value={selectedMaxYear}
            onChange={handleMaxYearChange}
            options={yearsOption}
            isClearable
          ></Select>
        </div>

        <div className="Filter-Doctorant Search">
          <label htmlFor="searchBar">Search: </label>
          <input
            id="searchBar"
            type="text"
            value={searchText}
            onChange={handleSearchTextChange}
          />
        </div>
      </div>
      <ul className="Search-Results">
        {searchResults.filter(filterDoctorants).map((Doctorant, index) => (
          <li key={Doctorant.Id_Doctorant}>
            <img
              className="w-12"
              src={require(`../../assets/Avatars/${Doctorant.sexe.toUpperCase()}${
                index % 3
              }.png`)}
              alt="profile"
            />
            <span>
              {Doctorant.nom} {Doctorant.prenom}
            </span>
            <span>{Doctorant.mail}</span>
            <span>{Doctorant.Specialite}</span>
            <span>{Doctorant.intitule_sujet}</span>
            <span>{ Doctorant.statut}</span>
            <button>Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorantSearch;
