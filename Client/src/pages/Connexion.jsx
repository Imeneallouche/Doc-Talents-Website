import React, {useState} from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';
import SideBarConnexion from "../components/sideBarConnexion/sideBarConnexion";


export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  var mail =  localStorage.getItem("Email");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/Connexion",{email,password});
  
        if (response.status == 401){
          localStorage.setItem('isLoggedIn', false); 
          setErrorMessage("Email ou mot de passe invalide");
          return;
        }
        
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('Email' , email);
        history.push("/Doctorant");
    }catch{
      localStorage.setItem('isLoggedIn', false); 
      setErrorMessage("Email ou mot de passe invalide");
      return;
    }



  }  

  return(
    <div className="flex">
      <SideBarConnexion/>
      <div className="connexion flex flex-col justify-center items-center h-[100vh] w-[60%] p-16 bg-white-bluish">
      <h1 className="text-dark-purple font-black text-[2.5em] mb-12">
        Content de vous revoir!
      </h1>
      {errorMessage && (
        <p className="text-red-500 mb-4">{errorMessage}</p>
      )}
      <form onSubmit={handleSubmit} method="POST">
        <div className="flex flex-col relative pb-8">
          <label className="mb-4 text-dark-purple font-normal" htmlFor="email">
            Nom Utilisateur
          </label>
          <input
            className="input rounded-[7px] mb-12 p-4 opacity-75 w-[400px] border rounded-lg border-purple text-dark-puple"
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            className="mb-4 text-dark-purple font-normal"
            htmlFor="password"
          >
            Mot de passe
          </label>
          <input
            className="input rounded-[7px] mb-12 p-4 opacity-75 w-[400px] border rounded-lg border-purple text-dark-puple"           
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a
            href="#"
            className="absolute bottom-0 right-0 text-green font-light text-[0.9em]"
          >
            Mot de passe oublié
          </a>
        </div>
        <button
          type="submit"
          className="bg-purple text-white font-semibold pt-4 pb-4 mt-20 w-[400px] rounded-[8px] cursor-pointer"
          // disabled={isLoading}
        >
          Connexion
          {/* {isLoading ? "Connexion en cours..." : "Connexion"} */}
        </button>
      </form>
    </div>
    </div>
  );
}
















