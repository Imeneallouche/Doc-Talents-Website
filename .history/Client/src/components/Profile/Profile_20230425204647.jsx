import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile(props) {
  const [Doc, setDoctorant] = useState({});

  useEffect(() => {
    axios.get(`/Doctorant/${props.nomm}`)
      .then(res => setDoctorant(res.data))
      .catch(err => console.log(err));
  }, [props.nomm]);

  return (
    <div>
      <h1 className="colore">Nom: {Doc.nom}</h1>
      <p>Email: {Doc.prenom}</p>
      <p>Address: {Doc.sexe}</p>
    </div>
  );
}

export default Profile;
