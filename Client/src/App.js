import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

//import HomePage from "./pages/Home";
//import Doctorant from "./pages/Doctorant";
//import Inscription from "./pages/Inscription";
//import popup from "./pages/popup";
import Acceuil from './pages/Acceuil';
//import Connexion from "./pages/Connexion";
//import Update from "./pages/Update";
import PVformulaire from "./pages/PVformulaire";
import PVs from "./pages/PVs";
//import Users from "./pages/Users";
//import Profile from "./pages/Profile";
//import Editprofile from "./pages/Editprofile";
//import Dashboard from "./pages/Dashboard";
//import Statistics from "./pages/Statistics";
//import Seminaire from "./pages/Seminaire";
//import InscriptionStep1 from "./pages/InscriptionStep1";
//import InscriptionStep2 from "./pages/InscriptionStep2";
//import InscriptionStep3 from "./pages/InscriptionStep3";
//import ConfirmEndacrant from "./pages/ConfirmEndacrant";
//import SeminaireLirePlus from "./pages/SeminaireLirePlus";

import ProfileDoc from "./pages/Profile";
import Editprofile from "./pages/Editprofile";
import DPGR from "./pages/ProfileDPGR";
import EditDPGR from "./pages/EditDPGR";
import Users from "./pages/Users";


export default function App() {
  return (
    <div className="App w-screen h-screen">
      <Router>
        <Switch>
        <Route path="/" exact>
          <Acceuil/>    
          </Route>
         {/* <Route path="/" exact>
          <Acceuil/>    
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
          <Route path="/Inscription/Step1">
            <InscriptionStep1 />
          </Route>
          <Route path="/Inscription/Step2">
            <InscriptionStep2 />
          </Route>
          <Route path="/Inscription/Step3">
            <InscriptionStep3 />
          </Route>
          <Route path="/Inscription/ConfirmEncadrant">
            <ConfirmEndacrant />
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
          <Route path="/ProfileDoc" exact>
            <ProfileDoc />
          </Route>
          <Route path="/Editprofile" exact>
            <Editprofile/>
          </Route>
          <Route path="/PDPGR" exact>
            <DPGR/>
          </Route>
          <Route path="/EditprofileDPGR" exact>
            <EditDPGR/>
          </Route>
          <Route path="/DPGR" exact>
            <Users/>
          </Route>
          <Route exact path={`/Doctorant/:doc/Seminaire`} component={Seminaire} />
          <Route path={`/Doctorant/:doc/Seminaire/SeminaireLirePlus/:title`} exact component={SeminaireLirePlus} /> */}
          <Route path="/PV" exact>
            <PVs />
          </Route>

          <Route path="/PV/ajouter" exact>
            <PVformulaire />
          </Route>

  </Switch>
  </Router>

</div>
  );
}
