import React from "react";
import "./Connexion.css";
import axios from "axios";
import { useState } from "react";


export default function LoginForm() {
  // const [mail, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("../../../../Server/app/Controllers/Authentification/loginController", {
  //       mail,
  //       password,
  //     });
  //     console.log(response.data);
  //     // redirect to home page or handle login success
  //   } catch (error) {
  //     console.error(error.response.data);
  //     // handle login failure
  //   }
  // };

  return (
    <div className="connexion flex flex-col items-center h-[100vh] w-[60%] p-16 bg-white-bluish">
      <h1 className="text-dark-purple font-black text-[2.5em] mb-12">
        Content de vous revoir!
      </h1>
      <form>
        
        <div className="flex flex-col relative pb-8">
          <label className="mb-4 text-dark-purple font-normal" htmlFor="email">
            Nom Utilisateur
          </label>
          <input
            className="border rounded-[7px] mb-12 p-4 opacity-75 w-[400px]"
            type="email"
            name="email"
            id="email"
            required
            // value={mail}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <label
            className="mb-4 text-dark-purple font-normal"
            htmlFor="password"
          >
            Mot de passe
          </label>
          <input
            className="border rounded-[7px]  p-4 opacity-75 w-[400px]"
            type="password"
            name="password"
            id="password"
            required
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
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







