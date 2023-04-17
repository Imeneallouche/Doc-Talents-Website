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

  <ul>
    {searchResults.filter(filterDoctorants).map((Doctorant, index) => (
      <li key={Doctorant.Id_Doctorant}>
        <img
          src={require(`../../assets/Avatars/${Doctorant.sexe}${
            index % 3
          }.png`)}
          alt=""
        />
        <span>{Doctorant.Id_Doctorant}</span>
        <span>{Doctorant.nom} </span>
        <span>{Doctorant.prenom}</span>
        <span>{Doctorant.telephone}</span>
      </li>
    ))}
  </ul>
</div>;
