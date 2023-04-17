import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./DoctorantSearch.css";
import axios from "axios";
import ReactPaginate from "react-paginate";

const DoctorantSearch = () => {
  const [Doctorants, setDoctorants] = useState([]);
  const [page, setPage] = useState([0]);
  const [limit, setlimit] = useState([10]);
  const [pages, setPages] = useState([0]);
  const [rows, setRows] = useState([0]);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");

  const [selectedGender, setSelectedGender] = useState("all"); //Gender filter : dropdow list (Male/Female)
  const [selectedStatues, setSelectedStatues] = useState("all"); //Statues filter: dropdown list (radié, abondan, soutenu, reinscri, differe)
  const [selectedMinYear, setSelectedMinYear] = useState(null); //Min inscription year filter : dropdow list (2012 --> recent year)
  const [selectedMaxYear, setSelectedMaxYear] = useState(null); //Max inscription year filter : dropdown list (2012 --> recent year)

  const [searchText, setSearchText] = useState(""); //autocomplete search bar
  const [searchResults, setSearchResults] = useState([]);

  const currentYear = new Date().getFullYear();
  const FirstYearEver = 2012;

  /*  useEffect(() => {
    // Make a request to the backend to get the list of Doctorants
    fetch("/api/Doctorant")
      .then((response) => response.json())
      .then((data) => {
        setDoctorants(data);
        setFilteredDoctorants(data);
      })
      .catch((error) => console.log(error));
  }, []);*/

  useEffect(() => {
    const fetchDoctorants = async () => {
      const response = await axios.get(
        `http://localhost:5000/users?search_query=${keyword}&page=${page}&limit=${limit}`
        //`http://localhost:3000/Doctorants?search_query=${searchText}`
      );
      setDoctorants(response.data.result);
      setPage(response.data.page);
      setPages(response.data.totalPage);
      setRows(response.data.totalRows);
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

  const changePage = ({ selected }) => {
    setPage(selected);
  };

  const searchData = (e) =>{
    e.preventDefault();
    setPage(0);
    setKeyword(query);

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
  /*
  const filterDoctorants = (gender, statues, minyear, maxyear, searchText) => {
    let filtered = Doctorants;

    if (gender)
      filtered = filtered.filter((user) => user.gender === gender.value);

    if (statues)
      filtered = filtered.filter((user) => user.statues === statues.value);


    if (minyear) {
      filtered = filtered.filter(
        (user) => user.anneeinscription >= minyear.value
      );
    }

    if (maxyear) {
      filtered = filtered.filter(
        (user) => user.anneeinscription <= minyear.value
      );
    }

    if (searchText) {
      filtered = filtered.filter((user) =>
        user.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredDoctorants(filtered);
  };
*/

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
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const statuesOptions = [
    { value: "inscrit", label: "inscrit" },
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
      <ul>
        {searchResults.filter(filterDoctorants).map((Doctorant) => (
          <li key={Doctorant.id}>
            {Doctorant.nom} {Doctorant.prenom}
            {Doctorant.id} -{Doctorant.telephone}
          </li>
        ))}
      </ul>
      <div className="container mt-5">
     <div className="columns">
       <div className="column is-centered">
         <form onSubmit={searchData}>
           <div className="field has-addons">
             <div className="control is-expanded">
               <input 
                type="text" 
                className="input"
                value={query}
                onChange={(e)=> setQuery(e.target.value)}
                placeholder='find something here...'
               />
             </div>
             <div className="control">
               <button type="submit" className="button is-info">Search</button>
             </div>
           </div>
           <table className="table is-striped is-bordered is-fullwidth mt-2">
          <thead>
            <tr>
              <th></th>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Date de 1er inscription</th>
              <th>Option</th>
              <th>Titre de thèse</th>
              <th>Status</th>
              <th>Profile</th>
            </tr>
          </thead>
          <tbody>
            {Doctorants.map(Doctorant => (
               <tr key={Doctorant.id}>
               <td>{Doctorant.nom}</td>
               <td>{Doctorant.prenom}</td>
               <td>{Doctorant.status}</td>
               <td>{Doctorant.Premiere_inscription}</td>
             </tr>
            ))}
          </tbody>
         </table>
         <p>Total Rows: {rows} page: {rows ? page + 1 : 0} of {pages}
         </p>
         <nav 
          className="pagination is-centred" 
          role="navigation" 
          aria-label="pagination"
         >
          <ReactPaginate
            previousLabel={"< Prev"}
            nextLabel={"Next >"}
            pageCount={pages}
            onPageChange={changePage}
            containerClassName={"pagination-list"}
            pageLinkClassName={"pagination-link"}
            previousLinkClassName={"pagination-previous"}
            nextLinkClassName={"pagination-next"}
            activeLinkClassName={"pagination-link is-current"}
            disabledLinkClassName={"pagination-link is-disabled"}
          />

         </nav>
         </form>
       </div>
     </div>
   </div>
     </div>
     
  );
};

export default DoctorantSearch;
