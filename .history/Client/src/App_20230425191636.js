import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/Home";
import Connexion from "./pages/Connexion";
import Doctorant from "./pages/Doctorant";
import Update from "./pages/Update";
import PVs from "./pages/PVs";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import Editprofile from "./pages/Editprofile";



export default function App() {
  return (
    <div className="App w-screen h-screen">
      <Router>
        <Switch>
          <Route path="/Profile" exact>
            <Profile />
          </Route>
          <Route path="/Editprofile" exact>
            <Editprofile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}