import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from "../components/Menu/SideBar";
import Profilee from "../components/Profile/Profile";
import Profile

function Profile() {
  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <div className="grow flex flex-col justify-between">
        <div className="flex justify-end">
          <ProfileIcon />
          <Profilee/>
        </div>
      </div>
    </div>
  );
}

export default Profile;
