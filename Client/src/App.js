import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

import { FormDataProvider } from "./components/Store";

import Acceuil from "./pages/Acceuil";
import Connexion from "./pages/Connexion";

import Dashboard from "./pages/Dashboard";
import Doctorant from "./pages/Doctorant";
import Update from "./pages/Update";

import InscriptionStep1 from "./pages/InscriptionStep1";
import InscriptionStep2 from "./pages/InscriptionStep2";
import InscriptionStep3 from "./pages/InscriptionStep3";
import ConfirmEndacrant from "./pages/ConfirmEndacrant";

import ProfileDoc from "./pages/Profile";

import PVs from "./pages/PVs";
import PVformulaire from "./pages/PVformulaire";

import Statistics from "./pages/Statistics";
import Users from "./pages/Users";

import Seminaire from "./pages/Seminaire";
import SeminaireLirePlus from "./pages/SeminaireLirePlus";

import Editprofile from "./pages/Editprofile";
import Dpgr from "./pages/ProfileDPGR";
import EditDPGR from "./pages/EditDPGR";
import Prodpgr from "./pages/ProfileDPGR";

import ImportExcelFile from "./pages/ImportExcelFile";

export default function App() {
  return (
    <div className="App w-screen h-screen">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Acceuil />
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
          <Route path="/Update" exact>
            <Update />
          </Route>
          <Route path="/Statistics" exact>
            <Statistics />
          </Route>

          <Route path="/PVs" exact>
            <PVs />
          </Route>
          <Route path="/Users" exact>
            <Users />
          </Route>
          <Route path="/Doctorant/:username">
            <ProfileDoc />
          </Route>
          <Route path="/Editprofile" exact>
            <Editprofile />
          </Route>
          <Route path="/ProfileDPGR" exact>
            <Prodpgr />
          </Route>
          <Route path="/PDPGR" exact>
            <Dpgr />
          </Route>
          <Route path="/EditprofileDPGR" exact>
            <EditDPGR />
          </Route>
          <Route path="/PV/ajouter" exact>
            <PVformulaire />
          </Route>
          <Route path="/ImportFile" exact>
            <ImportExcelFile />
          </Route>
          <Route
            exact
            path={`/Doctorant/:doc/Seminaire`}
            component={Seminaire}
          />
          <Route
            path={`/Doctorant/:doc/Seminaire/SeminaireLirePlus/:title`}
            exact
            component={SeminaireLirePlus}
          />
          <FormDataProvider>
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
          </FormDataProvider>
        </Switch>
      </Router>
    </div>
  );
}
