import "./Inscription01.css";
import React, { useState } from "react";

function Inscription01() {
  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [Id_Doctorant, setIdDoctorant] = useState("");
  const [Id_PV, setIdPV] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
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

      <div></div>
      <div></div>

      <button type="submit" className="submit-form suivant">
        Suivant
      </button>
    </form>
  );
}

export default LoginForm;
