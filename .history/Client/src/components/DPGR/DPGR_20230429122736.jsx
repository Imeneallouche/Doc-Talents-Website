import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from "react-select";
import "./DPGR.css";


const DPGR = () => {
    const [dpgr, setdpgr] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [Sex, setSex] = useState([]);
    useEffect(() => {
        axios.get('/DPGR')
        .then(response => setdpgr(response.data))
        .catch(error => console.log(error));
    }, []);
    const handleEditClick = dpgr => {
        setEditingUser(dpgr);
        };

    const handleSaveClick = updatedUser => {
            axios.put(/users/${updatedUser.id}, updatedUser)
            .then(response => {
    const updatedUsers = users.map(user => user.id === updatedUser.id ? response.data : user);
            setUsers(updatedUsers);
            setEditingUser(null);
            })
            .catch(error => console.log(error));
            };
            
    const handleCancelClick = () => {
            setEditingUser(null);
            };

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
        <div>
        <h1>User Profile</h1>
        <table>
        <thead>
        <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>
        <th>Actions</th>
        </tr>
</thead>
<tbody>
{users.map(user => (
<tr key={user.id}>
<td>{user.name}</td>
<td>{user.email}</td>
<td>{user.password}</td>
<td>
{editingUser === user ? (
<>
<button onClick={() => handleSaveClick(editingUser)}>Save</button>
<button onClick={handleCancelClick}>Cancel</button>


 
}

export default DPGR