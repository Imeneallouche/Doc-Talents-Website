import { Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/Home";
import Connexion from "./pages/Connexion";
import Doctorant from "./pages/Doctorant";
import Inscription from "./pages/Inscription";

export default function App() {
  return (
    <div className="app">
      <div className="App">
        <Route path="/" component={HomePage} exact />
        <Route path="/Connexion" component={Connexion} />
        <Route path="/Doctorant" component={Doctorant} />
        <Route path="/Inscription" component={Inscription} />
      </div>
    </div>
  );
}
