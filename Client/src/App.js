import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/Home";
import Connexion from "./pages/Connexion";
import Doctorant from "./pages/Doctorant";
import Inscription from "./pages/Inscription";

export default function App() {
  return (
    <div className="App flex h-screen">
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/Connexion" exact>
          <Connexion />
        </Route>
        <Route path="/Doctorant" exact>
          <Doctorant />
        </Route>
        <Route path="/Inscription" exact>
          <Inscription />
        </Route>
      </Switch>
    </div>
  );
}
