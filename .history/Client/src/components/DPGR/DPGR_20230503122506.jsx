import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from "react-select";
import { Link,  useParams } from 'react-router-dom';
import Image from "../ProfileIcon/ProfileIcon"

function DPGR() {
    const [userName, setUserName] = useState('');
    const [userData, setUserData] = useState(null);
    const history = useHistory();

  const RUNNING_URL = "http://localhost:5000";
  const ENDPOINT = "/Doctorant";
  
  useEffect(() => {
    const fetchDoctorants = async () => {
      const response = await axios.get(RUNNING_URL + ENDPOINT);
      console.log(response);
      setDoctorants(response.data);
    };

    fetchDoctorants();
  }, []);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.get(`/PDPGR?name=${userName}`);
        setUserData(response.data);
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
      const handleInputChange = (event) => {
        setUserName(event.target.value);
      };
    
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" value={userName} onChange={handleInputChange} />
            </label>
            <button type="submit">Submit</button>
          </form>
          {userData && (
        <div>
          <p>Name: {userData.nom}</p>
          <p>Email: {userData.email}</p>
          <p> {userData.prenom}</p>
        </div>
      )}
    </div>
     /*
     <div>
     <div style={{
        background: "linear-gradient(to left, #19202E, #35468E)",
        width: "350px",
        height: "55px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "flex-start", // align text to the center left
        alignItems: "center",
        color: "#ffffff",
        fontSize: "20px",
        marginTop: '10px', 
        marginLeft: "60px",
        fontWeight: "bold",
        fontFamily: "sans-serif",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // Add box shadow CSS property
        paddingLeft: "30px", // Add left padding to align text with left edge of button
      }}>
        Profile DPGR</div>
     <div>
        <form className="m-10 mt-0 mb-0 grow flex flex-col justify-center items-center grid grid-cols-2 gap-50 p-55 ">
           <div className="m-4 flex flex-col flex-1">
           <label htmlFor="Nom"
           className={`font-bold text-dark-purple focus:text-green mb-5`}>
             Nom :
            </label>
            <input className={`bg-white border border-dark-purple mb-5 text-purple placeholder-black text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
                type="text"
                id="Nom"
                name="Nom"
                placeholder="ex : DERBAL" 
                disabled
                
            />
                <label htmlFor="Role"
           className={`font-bold text-dark-purple focus:text-green mb-5`}>
             Role :
            </label>
            <input className={`bg-white border mb-5 border-dark-purple text-purple placeholder-black text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
                type="text"
                id="Role"
                name="Role"
                placeholder="ex : ADMIN"
                disabled />
            
                <label htmlFor="telephone"
           className={`font-bold text-dark-purple focus:text-green mb-5`}>
             Numero de telephone :
            </label>
            <input className={`bg-white border mb-5 border-dark-purple text-purple placeholder-black text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
                type="teL"
                id="telephone"
                name="telephone"
                placeholder="ex : 0798502217" 
                disabled/>
                 <label htmlFor="password"
           className={`font-bold text-dark-purple focus:text-green mb-5`}>
             Password :
            </label>
            <input className={`bg-white border border-dark-purple text-purple placeholder-black text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
                type="password"
                id="password"
                name="password"
                placeholder="ex : ******** " 
                disabled/>
           </div>
           <div className="m-4 flex flex-col flex-1">
           <label htmlFor="Prenom"
           className={`font-bold text-dark-purple focus:text-green mb-5`}>
             Prenom : 
            </label>
            <input className={`bg-white mb-4 border border-dark-purple text-purple placeholder-black text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
                type="text"
                id="Prenom"
                name="Prenom"
                placeholder="ex : RAYHANE" 
                disabled/>
                <label htmlFor="Sexe" className={`font-bold text-dark-purple mb-5`}>
                Sexe :
              </label>
              <Select
                placeholder="Male"
                id="Sexe"
                className="mb-5 placeholder-black"
                styles={customStyles}
                options={genderOptions}
                value={Sex}
                onChange={(event) => setSex(event)}
                isClearable
                required
                />
                <label htmlFor="Email"
           className={`font-bold text-dark-purple focus:text-green mb-5`}>
             Email :  
            </label>
            <input className={`bg-white border mb-5 border-dark-purple text-purple placeholder-black text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
                type="email"
                id="Email"
                name="Email"
                placeholder="ex : DPGR@esi.dz"
                disabled />
                 <label htmlFor="confirmepassword"
           className={`font-bold text-dark-purple focus:text-green mb-5`}>
             Password confirmation :
            </label>
            <input className={`bg-white border border-dark-purple text-purple placeholder-black text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
                type="password"
                id="confirmepassword"
                name="confirmepassword"
                placeholder="ex : ********" 
                disabled/>
           
           </div>
        </form>
        <div>
            <button className="bg-green text-white py-4 px-6 rounded float-right mr-20 mt-0 mb-5"
              type="submit">
                <Link to="/EditprofileDPGR">
              Mettre à Jour
              </Link></button>
        </div>
       </div>
        </div>
        */
       
      
       
        
      );
}

export default DPGR;
    