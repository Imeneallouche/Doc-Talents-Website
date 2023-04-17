import { Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/Home";
import Connexion from "./pages/Connexion";
import Doctorant from "./pages/Doctorant";
import Inscription from "./pages/Inscription";

export default function App() {
  return (
    <div className={`App flex h-screen`}>
        <Doctorant/>
    </div>
  );
}
