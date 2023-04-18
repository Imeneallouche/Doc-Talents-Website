import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/Home";
import Connexion from "./pages/Connexion";
import Doctorant from "./pages/Doctorant";
import Inscription from "./pages/Inscription";
import Update from "./pages/Update";

export default function App() {
  return (
    <div className="App w-screen h-screen">
      <Router>
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
          <Route path="/Update" exact>
            <Update />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
