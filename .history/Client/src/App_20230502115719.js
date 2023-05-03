import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";


import ProfileDoc from "./pages/Profile";
import Editprofile from "./pages/Editprofile";
import DPGR from "./pages/ProfileDPGR";
import EditDPGR from "./pages/EditDPGR";
import 


export default function App() {
  return (
    <div className="App w-screen h-screen">
      <Router>
        <Switch>
          <Route path="/ProfileDoc" exact>
            <ProfileDoc />
          </Route>
          <Route path="/Editprofile" exact>
            <Editprofile/>
          </Route>
          <Route path="/ProfileDPGR" exact>
            <DPGR/>
          </Route>
          <Route path="/EditprofileDPGR" exact>
            <EditDPGR/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
