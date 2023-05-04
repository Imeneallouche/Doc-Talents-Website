import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from "../components/Menu/SideBar";
import Dpgr from "../components/DPGR/DPGR";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";
function dpgr() {
    return (
      <div className={`bg-white-bluish w-full flex `}>
        <SideBar />
        <div >
        <div className="flex justify-end">
         <ProfileIcon />
         </div>
         <Dpgr/>
        </div>
      </div>
    );
  }
  
  export default dpgr;