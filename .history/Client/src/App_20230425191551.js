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



import Dashboard from "./pages/Dashboard";
import Statistics from "./pages/Statistics";
import Seminaire from "./pages/Seminaire";
import InscriptionStep1 from "./pages/InscriptionStep1";
import InscriptionStep2 from "./pages/InscriptionStep2";
import InscriptionStep3 from "./pages/InscriptionStep3";
import ConfirmEndacrant from "./pages/ConfirmEndacrant";
import SeminaireLirePlus from "./pages/SeminaireLirePlus";



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