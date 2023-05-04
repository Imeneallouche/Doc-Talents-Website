import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from "../components/Menu/SideBar";
import Profilee from "../components/Profile/Profile";

function Profile() {
  return (

     
    <Profilee/>
      
     
=======
import SideBar from "../components/Menu/SideBar";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";

function Profile() {
  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <div className="grow flex flex-col justify-between">
        <div className="flex justify-end">
          <ProfileIcon />
        </div>
      </div>
    </div>
>>>>>>> 65005224a46b7511afa245e7432ceefe60b14b7a
  );
}

export default Profile;
