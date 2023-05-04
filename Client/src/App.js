import { Route, BrowserRouter as Router, Switch , Redirect} from "react-router-dom";
import "./App.css";

<<<<<<< HEAD
// import Inscription from "./pages/Inscription";
import Doctorant from "./pages/Doctorant";
import Acceuil from './pages/Acceuil';
import Connexion from "./pages/Connexion";
import Popuppage from "./pages/Popuppage";
import Update from "./pages/Update";
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute"
import PVformulaire from "./pages/PVformulaire";
import PVs from "./pages/PVs";
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
//import HomePage from "./pages/Home";
//import popup from "./pages/popup";




=======
import Prodpgr from "./pages/ProfileDPGR";
import Doctorant from "./pages/Doctorant";
import Acceuil from './pages/Acceuil';
import Connexion from "./pages/Connexion";
import Update from "./pages/Update";
import PVformulaire from "./pages/PVformulaire";
import PVs from "./pages/PVs";
import Dashboard from "./pages/Dashboard";
import Statistics from "./pages/Statistics";
import Seminaire from "./pages/Seminaire";
import InscriptionStep1 from "./pages/InscriptionStep1";
import InscriptionStep2 from "./pages/InscriptionStep2";
import InscriptionStep3 from "./pages/InscriptionStep3";
import ConfirmEndacrant from "./pages/ConfirmEndacrant";
import SeminaireLirePlus from "./pages/SeminaireLirePlus";
>>>>>>> e0a9b2ca8c7ba2fa7706b2e43596b40d3436adba
import ProfileDoc from "./pages/Profile";
import Editprofile from "./pages/Editprofile";
import DPGR from "./pages/ProfileDPGR";
import EditDPGR from "./pages/EditDPGR";
import Users from "./pages/Users";
import { FormDataProvider } from "./components/Store";


<<<<<<< HEAD
export default function App(){
=======

              /* */
export default function App() {
>>>>>>> e0a9b2ca8c7ba2fa7706b2e43596b40d3436adba
  return (
    <div className="App w-screen h-screen">
      <Router>
        <Switch>
          <Route path="/" exact><Acceuil/></Route>
          <Route path="/Connexion" exact><Connexion /></Route>
          <PrivateRoute path="/ConnexionNotSuccessfull" component={ConnexionNotSuccessfull} />
          <PrivateRoute path="/Popuppage" component={Popuppage} />
          <PrivateRoute path="/Update" component={Update} />
          <PrivateRoute path="/Doctorant" component={Doctorant} />
          {/* <Route path="/Dashboard" exact>
        <Route path="/" exact>
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
          <Route path="/ProfileDoc" exact>
            <ProfileDoc />
          </Route>
          <Route path="/Editprofile" exact>
            <Editprofile />
          </Route>
          <Route path="/ProfileDPGR" exact>
            <Prodpgr />
            </Route>
          <Route path="/PDPGR" exact>
            <DPGR/>
          </Route>
<<<<<<< HEAD
          <Route path="/SeminaireLirePlus/:title" exact component={SeminaireLirePlus} /> 
        */}</Switch> 
      </Router>
    </div>
  );
}


=======
          <Route path="/EditprofileDPGR" exact>
            <EditDPGR/>
          </Route>
          <Route path="/PV/ajouter" exact>
            <PVformulaire />
          </Route>          
          <Route exact path={`/Doctorant/:doc/Seminaire`} component={Seminaire} />
          <Route path={`/Doctorant/:doc/Seminaire/SeminaireLirePlus/:title`} exact component={SeminaireLirePlus} /> 
        </Switch>
      </Router>
    </div>
  )
} 
>>>>>>> e0a9b2ca8c7ba2fa7706b2e43596b40d3436adba
