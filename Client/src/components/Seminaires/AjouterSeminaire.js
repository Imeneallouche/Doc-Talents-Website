import React, { useState } from "react";
import "./AjouterSeminairestyles.css";

function AjouterSeminaire() {
  const [titre, setTitre] = useState("");
  const [resume, setResume] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const ID_DOCTORANT = '21/0010';
    try {
      const response = await fetch(`http://localhost:5000/Doctorant/AjouterSeminaire?ID_DOCTORANT=${ID_DOCTORANT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ titre, resume }),
      });
      if (!response.ok) {
        throw new Error("Failed to add seminaire");
      }
      alert("Seminar added successfully!");
      // clear form fields
      setTitre("");
      setResume("");
    } catch (error) {
      console.error(error);
      alert("Failed to add seminar. Please try again.");
    }
  };
  
  

  return (
    <div className="aspopup" style={{ position: "absolute" }}>
      <form className="form" onSubmit={handleSubmit}>
        <div className="group">
          <input
            placeholder="‎"
            type="text"
            required=""
            value={titre}
            onChange={(event) => setTitre(event.target.value)}
          />
          <label>Titre</label>
        </div>

        <div className="group">
          <textarea
            placeholder="‎"
            id="description"
            name="comment"
            rows="5"
            required=""
            value={resume}
            onChange={(event) => setResume(event.target.value)}
          ></textarea>
          <label>Resume</label>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button type="submit">Ajouter un séminaire</button>
        </div>
      </form>
    </div>
  );
}

export default AjouterSeminaire;
