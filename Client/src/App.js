import { Route } from "react-router-dom";
import "./App.css";
import "bulma/css/bulma.css";

import HomePage from "./pages/Home";
import Connexion from "./pages/Connexion";
import Doctorant from "./pages/Doctorant";
import Inscription from "./pages/Inscription";
import DoctorantSearch from "./components/DoctorantSearch/DoctorantSearch";


export default function App() {
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


  return (
    <div className="app">
      <DoctorantSearch />
    </div>
  );
}
