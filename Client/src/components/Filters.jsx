import React, { useState, useEffect } from "react";
import axios from "axios";

const DataList = () => {
  const [Sexe, setSexe] = useState("");
  const [statue, setstatue] = useState("");
  const [Doctorants, setDoctorant] = useState([]);

  useEffect(() => {
    const fetchDoctorants = async () => {
      const response = await axios.get(
        `http://localhost:3000/data?sexe=${Sexe}&statue=${statue}`
      );

      setDoctorant(response.Doctorants);
    };

    fetchDoctorants();
  }, [Sexe, statue]);

  return (
    <div>
      <select value={Sexe} onChange={(e) => setSexe(e.target.value)}>
        <option value="">Select filter 1</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
      <select value={statue} onChange={(e) => setstatue(e.target.value)}>
        <option value="">Select filter 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
      </select>
      <ul>
        {Doctorants.map((Doctorant) => (
          <li key={Doctorant.id}>{Doctorant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
