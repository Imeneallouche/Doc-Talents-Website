import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "../components/Menu/SideBar";
import ProfileDPGR from "../components/DPGR/DPGR";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";
<<<<<<< HEAD
function dpgr() {
  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <div className="grow flex flex-col justify-between">
        <div className="flex justify-end">
          <ProfileIcon />
=======
function dpgr({nom}) {
    return (
      <div className={`bg-white-bluish w-full flex `}>
        <SideBar/>
        <div className="grow flex flex-col justify-between">
        <div className="flex justify-end">
          <ProfileIcon/>
         </div>
         <ProfileDPGR/>
>>>>>>> d1f81ddf7aec16d6a410a6e30d6552a5cb7faff3
        </div>
        <Dpgr />
      </div>
    </div>
  );
}

export default dpgr;
