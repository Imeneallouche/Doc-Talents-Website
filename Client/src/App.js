import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/Home";
import Doctorant from "./pages/Doctorant";
import Inscription from "./pages/Inscription";
import popup from "./pages/popup";
import Acceuil from './pages/Acceuil';
import Connexion from "./pages/Connexion";


export default function App() {
  return (
    <div>
      <Router>

        <Switch>

          <Route path="/" exact>
            <Acceuil/>
          </Route>

          <Route path="/Connexion" exact>
            <Connexion/>
          </Route>

        </Switch>

      </Router>
    </div>
  );
}
