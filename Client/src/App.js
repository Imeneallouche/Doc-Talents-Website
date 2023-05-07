import { Route, BrowserRouter as Router, Switch , Redirect} from "react-router-dom";
import "./App.css";

// import Inscription from "./pages/Inscription";





import Doctorant from "./pages/Doctorant";
import Acceuil from './pages/Acceuil';
import Connexion from "./pages/Connexion";
import ProfileDoc from "./pages/Profile";
import Editprofile from "./pages/Editprofile";
import ProfileDPGR from "./pages/ProfileDPGR";
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute";
import Users from "./pages/Users";
import { FormDataProvider } from "./components/Store";
import ConnexionNotSuccessfull from "./pages/ConnexionNotSuccessfull";
import Popuppage from "./components/Popup/Popup";
import Update from "./pages/Update";



export default function App() {
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
          <Route path="/Users" exact>
            <Users />
          </Route>
          <Route path="/ProfileDoc" exact>
            <ProfileDoc />
          </Route>
          <Route path="/Editprofile" exact>
            <Editprofile />
          </Route>
          <Route path="/PDPGR" exact>
            <ProfileDPGR/>
          </Route>
        </Switch> 
      </Router>
    </div>
  );
}


      