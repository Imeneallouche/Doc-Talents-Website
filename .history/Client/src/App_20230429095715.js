import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";


import Profile from "./pages/Profile";
import Editprofile from "./pages/Editprofile";
import Inscription from "./pages/InscriptionStep1";
import Prod



export default function App() {
  return (
    <div className="App w-screen h-screen">
      <Router>
        <Switch>
          <Route path="/Editprofile" exact>
            <Editprofile/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}