import React, { useState , useRef, useEffect, useContext } from "react";
import "./Connexion.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:3000/Connexion`,
        { email, password }
      );

      if (response.status === 200) {
        history.push(response.data.redirect);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="connexion flex flex-col items-center h-[100vh] w-[60%] p-16 bg-white-bluish">
      <h1 className="text-dark-purple font-black text-[2.5em] mb-12">
        Content de vous revoir!
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col relative pb-8">
          <label className="mb-4 text-dark-purple font-normal" htmlFor="email">
            Nom Utilisateur
          </label>
          <input
            className="input border rounded-[7px] mb-12 p-4 opacity-75 w-[400px]"
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
            className="input border rounded-[7px]  p-4 opacity-75 w-[400px]"
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
        >
          Connexion
        </button>
      </form>
    </div>
  );
}