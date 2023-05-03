import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from "../components/Menu/SideBar";
import EditrofileDPGR from "../components/EditDPGR/EditDPGR";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";
function dpgr({nom}) {
    return (
      <div className={`bg-white-bluish w-full flex `}>
        <SideBar/>
        <div className="grow flex flex-col justify-between">
        <div className="flex justify-end">
          <ProfileIcon/>
         </div>
         <rofileDPGR/>
        </div>
      </div>
    );
  }
  
  export default dpgr;