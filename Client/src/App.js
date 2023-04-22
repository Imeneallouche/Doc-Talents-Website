import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/Home";
import Connexion from "./pages/Connexion";
import Doctorant from "./pages/Doctorant";
import Inscription from "./pages/Inscription";
import Update from "./pages/Update";
import PVs from "./pages/PVs";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Statistics from "./pages/Statistics";
import Seminaire from "./pages/Seminaire"


import Inscription01 from "./components/Inscription01/Inscription01";

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
          <Route path="/Dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/Inscription" exact>
            <Inscription />
          </Route>
          <Route path="/Statistics" exact>
            <Statistics />
          </Route>
          <Route path="/Update" exact>
            <Update />
          </Route>
          <Route path="/PVs" exact>
            <PVs />
          </Route>
          <Route path="/Users" exact>
            <Users />
          </Route>
          <Route path="/Profile" exact>
            <Profile />
          </Route>
          <Route path="/Seminaire" exact>
            <Seminaire />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
