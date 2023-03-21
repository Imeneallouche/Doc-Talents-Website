import React, { useState } from "react";
import "./App.css";

import Connexion from "./components/Connexion/Connexion";
import Menu from "./components/Menu/Menu";
import HomePage from "./pages/Home";
import Inscription01 from "./components/Inscription01/Inscription01";

export default function App() {
  /*
  const [UsernameReg, setUsernameReg] = useState("");
  const [PaswwordReg, setPasswordReg] = useState("");

  return (
    <div className="App">
      <div className="registration">
        <h1>registration</h1>

        <label>username</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />

        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />

        <button> Register</button>
      </div>

      <div className="login">
        <h1>login</h1>

        <input type="text" placeholder="Username..." />
        <input type="text" placeholder="Password..." />
        <button> login</button>
      </div>
    </div>
  );
  */

  return (
    <div className="app">
      <Menu />
    </div>
  );
}
