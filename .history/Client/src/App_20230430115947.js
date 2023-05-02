import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";


import Profile from "./pages/Profile";
import Editprofile from "./pages/Editprofile";
import Prodpgr from "./pages/ProfileDPGR";



export default function App() {
  return (
    <div className="App w-screen h-screen">
      <Router>
        <Switch>
          <Route path="/Profile" exact>
            <Profile />
          </Route>
          <Route path="/Editprofile" exact>
            <Editprofile/>
          </Route>
          <Route path="/ProfileDPGR" exact>
            <Prodpgr/>
          </Route>
          <Route path="/" exact>
            <Prodpgr/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
