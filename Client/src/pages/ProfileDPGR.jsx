import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "../components/Menu/SideBar";
import DPGR from "../components/DPGR/DPGR";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";

function ProfileDPGR() {
  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <div className="grow flex flex-col justify-between">
        <div className="flex justify-end">
          <ProfileIcon />
        </div>
        <DPGR />
      </div>
     
    </div>
  );
}

export default ProfileDPGR;

