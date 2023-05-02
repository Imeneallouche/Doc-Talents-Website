import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

// import HomePage from "./pages/Home";
// import Inscription from "./pages/Inscription";
import Doctorant from "./pages/Doctorant";
import Popup from './components/popupMiseajour/popupMiseajour';
import Acceuil from './pages/Acceuil';
import Connexion from "./pages/Connexion";
// import Update from "./pages/Update";
// import PVs from "./pages/PVs";
// import Users from "./pages/Users";
// import Profile from "./pages/Profile";
// import Editprofile from "./pages/Editprofile";
// import Dashboard from "./pages/Dashboard";
// import Statistics from "./pages/Statistics";
// import Seminaire from "./pages/Seminaire";
// import InscriptionStep1 from "./pages/InscriptionStep1";
// import InscriptionStep2 from "./pages/InscriptionStep2";
// import InscriptionStep3 from "./pages/InscriptionStep3";
// import ConfirmEndacrant from "./pages/ConfirmEndacrant";
// import SeminaireLirePlus from "./pages/SeminaireLirePlus";



export default function App() {
  return (
    <div className="App w-screen h-screen">
      <Router>
        <Switch>
          <Route path="/" exact>
          <Acceuil/>    
          </Route>
          <Route path="/Connexion" exact>
            <Connexion />
          </Route>
          <Route path="/Doctorant" exact>
            <Doctorant/>
          </Route>
          <Route path="/Doctorant" exact>
            <Doctorant/>
          </Route>
          {/* <Route path="/Doctorant" exact>
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
          </Route>
            
          <Route path="/Editprofile" exact>
            <Editprofile />
          </Route>
          <Route path="/Seminaire" exact>
            <Seminaire />
          </Route>
          <Route path="/SeminaireLirePlus/:title" exact component={SeminaireLirePlus} /> */}
        </Switch>
      </Router>
    </div>
  );
}