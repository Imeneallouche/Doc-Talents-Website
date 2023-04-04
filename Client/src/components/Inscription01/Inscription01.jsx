import "./Inscription01.css";
import React, { useState, useEffect } from "react";
import Select from "react-select";

function Inscription01() {
  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [Id_Doctorant, setIdDoctorant] = useState("");

  const [Id_PV, setIdPV] = useState("");
  const [Numero_tel, setNumeroTel] = useState("");
  const [Email, setEmail] = useState("");

  const [days, setDays] = useState([]);
  const [months, setMonths] = useState([]);
  const [years, setYears] = useState([]);
  const [Sex, setSex] = useState([]);

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const daysOption = [];
  for (let i = 1; i <= 31; i++) {
    let obj = { value: i, label: i };
    daysOption.push(obj);
  }

  const monthsOption = [
    { value: "Janvier", label: "Janvier" },
    { value: "Février", label: "Février" },
    { value: "Mars", label: "Mars" },
    { value: "Avril", label: "Avril" },
    { value: "Mai", label: "Mai" },
    { value: "Juin", label: "Juin" },
    { value: "Juillet", label: "Juillet" },
    { value: "Aout", label: "Aout" },
    { value: "Septembre", label: "Septembre" },
    { value: "Octobre", label: "Octobre" },
    { value: "Novembre", label: "Novembre" },
    { value: "Décembre", label: "Décembre" },
  ];

  const currentYear = new Date().getFullYear();
  const FirstYearEver = 1970;
  const yearsOption = [];
  for (let i = FirstYearEver; i <= currentYear; i++) {
    let obj = { value: i, label: i };
    yearsOption.push(obj);
  }

  useEffect(() => {
    const daysInMonth = new Date(years[0], months[0], 0).getDate();
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    setDays(daysArray);
  }, [months, years]);

  useEffect(() => {
    const monthsArray = Array.from({ length: 12 }, (_, i) => i + 1);
    setMonths(monthsArray);
  }, []);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearsArray = Array.from({ length: 120 }, (_, i) => currentYear - i);
    setYears(yearsArray);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <form className="Inscription01-form" onSubmit={handleSubmit}>
      <section className="form-row">
        <div className="form-information">
          <label htmlFor="Nom">Nom:</label>
          <input
            type="text"
            id="Nom"
            name="Nom"
            value={Nom}
            placeholder="Nom du doctorant"
            onChange={(event) => setNom(event.target.value)}
            required
          />
        </div>
        <div className="form-information">
          {" "}
          <label htmlFor="Prenom">Password:</label>
          <input
            type="text"
            id="Prenom"
            name="Prenom"
            placeholder="Prenom du doctorant"
            value={Prenom}
            onChange={(event) => setPrenom(event.target.value)}
            required
          />
        </div>

        <div className="form-information">
          {" "}
          <label htmlFor="Id_Doctorant">ID du doctorant</label>
          <input
            type="text"
            id="Id_Doctorant"
            name="Id_Doctorant"
            value={Id_Doctorant}
            placeholder="21/0022"
            onChange={(event) => setIdDoctorant(event.target.value)}
            required
          />
        </div>
      </section>

      <section className="form-row">
        <div className="form-information">
          {" "}
          <label htmlFor="day">Day:</label>
          <Select
            id="day"
            placeholder="01"
            value={days}
            onChange={(event) => setDays(event.target.value)}
            options={daysOption}
            isClearable
          />
        </div>
        <div className="form-information">
          {" "}
          <label htmlFor="month">Month:</label>
          <Select
            id="month"
            placeholder="Janvier"
            value={months}
            onChange={(event) => setMonths(event.target.value)}
            options={monthsOption}
            isClearable
          />
        </div>
        <div className="form-information">
          {" "}
          <label htmlFor="year">Year:</label>
          <Select
            id="year"
            placeholder={currentYear}
            value={years}
            onChange={(event) => setYears(event.target.value)}
            options={yearsOption}
            isClearable
          />
        </div>

        <div className="form-information">
          <label htmlFor="Sexe">Sexe </label>
          <Select
            placeholder="Male"
            id="Sexe"
            options={genderOptions}
            value={Sex}
            onChange={(event) => setSex(event.target.value)}
            isClearable
          />
        </div>
      </section>

      <section className="form-row">
        <div className="form-information">
          {" "}
          <label htmlFor="Id_PV">ID du PV</label>
          <input
            type="text"
            id="Id_PV"
            name="Id_PV"
            placeholder="ID du PV du CS"
            value={Id_PV}
            onChange={(event) => setIdPV(event.target.value)}
            required
          />
        </div>

        <div className="form-information">
          {" "}
          <label htmlFor="Numero_telephone">Numero du telephone</label>
          <input
            type="text"
            id="Numero_telephone"
            name="Numero_telephone"
            placeholder="0699240858"
            value={Numero_tel}
            onChange={(event) => setNumeroTel(event.target.value)}
            required
          />
        </div>

        <div className="form-information">
          {" "}
          <label htmlFor="Email">Email du doctorant</label>
          <input
            type="text"
            id="Email"
            name="Email"
            placeholder="0699240858"
            value={Email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
      </section>

      <button type="submit" className="submit-form suivant">
        Suivant
      </button>
    </form>
  );
}

export default Inscription01;
