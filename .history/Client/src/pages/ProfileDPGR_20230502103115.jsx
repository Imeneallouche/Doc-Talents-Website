import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from "../components/Menu/SideBar";
import ProfileDPGR from "../components/DPGR/DPGR";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";
function dpgr({nom}) {
    return (
      <div className={`bg-white-bluish w-full flex `}>
        Side
        <div className="grow flex flex-col justify-between">
        <div className="flex justify-end">
         </div>
         <ProfileDPGR nom={nom} />
        </div>
      </div>
    );
  }
  
  export default dpgr;