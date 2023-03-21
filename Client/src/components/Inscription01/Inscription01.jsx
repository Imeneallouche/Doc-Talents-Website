import "./Inscription01.css";
import React, { useState, useEffect } from "react";

function Inscription01() {
  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [Id_Doctorant, setIdDoctorant] = useState("");
  const [Id_PV, setIdPV] = useState("");
  const [Numero_tel, setNumeroTel] = useState("");
  const [days, setDays] = useState([]);
  const [months, setMonths] = useState([]);
  const [years, setYears] = useState([]);

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
      <div>
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

      <div>
        <label htmlFor="Id_Doctorant">ID Doctorant:</label>
        <input
          type="text"
          id="Id_Doctorant"
          name="Id_Doctorant"
          value={Id_Doctorant}
          placeholder="ID du doctorant"
          onChange={(event) => setIdDoctorant(event.target.value)}
          required
        />

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

      <div>
        <label htmlFor="day">Day:</label>
        <select id="day">
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <br />

        <label htmlFor="month">Month:</label>
        <select id="month">
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <br />

        <label htmlFor="year">Year:</label>
        <select id="year">
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="Id_Doctorant">ID Doctorant:</label>

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

      <button type="submit" className="submit-form suivant">
        Suivant
      </button>
    </form>
  );
}

export default Inscription01;
