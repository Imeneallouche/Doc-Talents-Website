import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from "react-select";
import "./DPGR.css";
/*
function ProfileDPGR({ nom }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
  
      const result = await axios.get(`http://localhost:5000/profile/${nom}`);
      setData(result.data);
    };

    fetchData();
  }, [nom]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data.nom}</h1>
      <p>{data.prenom}</p>
    </div>
  );
}

export default ProfileDPGR;


*/
function DPGR() {
  const [nom, setName] = useState('');
  const [userInformation, setUserInformation] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a GET request to the Node.js backend to retrieve user information by name
      const response = await axios.get(`/DPGR?nom=${nom}`);

      // Update the state with the user information
      setUserInformation(response.data);
    } catch (error) {
      console.error(error);
    }
  };
   
    const [Sex, setSex] = useState([]);
    const genderOptions = [
      { value: "M", label: "Male" },
      { value: "F", label: "Female" },
    ];
    const customStyles = {
        control: (provided, state) => ({
          ...provided,
          backgroundColor: "white",
          borderColor: "#19202E",
          color: "#1E2959",
          placeholderColor: "#35468E",
          fontSize: "1rem",
          borderRadius: "0.375rem",
          padding: "0.5rem",
    
          "&:focus": {
            outline: "none",
            boxShadow: "none",
            borderColor: "#51BCA2",
            placeholderColor: "#51BCA2",
          },
        }),
        placeholder: (provided, state) => ({
          ...provided,
          color: "#35468E",
        }),
      };
      return (
       div
        </div>
       
        
      );
}

export default DPGR;
    