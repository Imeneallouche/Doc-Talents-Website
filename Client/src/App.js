import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";

import { FormDataProvider } from "./components/Store";
import Acceuil from "./pages/Acceuil";
import Connexion from "./pages/Connexion";
import ConnexionNotSuccessfull from "./pages/ConnexionNotSuccessfull";
import Dashboard from "./pages/Dashboard";
import Doctorant from "./pages/Doctorant";
import Update from "./pages/Update";
import Statistics from "./pages/Statistics";

import Users from "./pages/Users";
import ImportExcelFile from "./pages/ImportExcelFile";
import profileenc from "./pages/ProfileEncadrant";

import InscriptionStep1 from "./pages/InscriptionStep1";
import InscriptionStep2 from "./pages/InscriptionStep2";
import InscriptionStep3 from "./pages/InscriptionStep3";
import ConfirmEndacrant from "./pages/ConfirmEndacrant";

import Profile from "./pages/Profile";
import Encadreurs from "./pages/Encadreurs";
import Dpgr from "./pages/ProfileDPGR";

import PVs from "./pages/PVs";
import PVformulaire from "./pages/PVformulaire";

import Seminaire from "./pages/Seminaire";
import SeminaireLirePlus from "./pages/SeminaireLirePlus";

export default function App() {
  return (
    <div className="App w-screen h-screen">
      <Router>
        <Switch>
          <Route path="/" component={Acceuil} exact />
          <Route path="/Connexion" component={Connexion} exact />
          <Route
            path="/ConnexionNotSuccessfull"
            component={ConnexionNotSuccessfull}
            exact
          />
          <Route path="/Update" component={Update} exact />
          <Route path="/Doctorant" component={Doctorant} exact />
          <Route path="/Dashboard" component={Dashboard} exact />
          <Route path="/Statistics" component={Statistics} exact />
          <Route path="/PVs" component={PVs} exact />
          <Route path="/Users" component={Users} exact />
          <Route path="/Doctorant/:username" component={Profile} exact />

          <Route path="/PDPGR" component={Dpgr} exact />
          <Route path="/Encadreurs" component={Encadreurs} exact />
          <Route path="/Encadreurs/:usernamee" component={profileenc} exact />

          <Route path="/PV/ajouter" component={PVformulaire} exact />
          <Route path="/ImportFile" component={ImportExcelFile} exact />

          <FormDataProvider>
            <Route path="/Inscription/Step1" component={InscriptionStep1} />
            <Route path="/Inscription/Step2" component={InscriptionStep2} />
            <Route path="/Inscription/Step3" component={InscriptionStep3} />
            <Route
              path="/Inscription/ConfirmEncadrant"
              component={ConfirmEndacrant}
            />
          </FormDataProvider>
        </Switch>
      </Router>
    </div>
  );
}
