import React from "react";
import SideBarConnexionPic from "../../assets/SideBarConnexionPic.svg";
import logo from "../../assets/Logo.svg";
import "./sideBarConnexion.css";

export default function SideBarConnexion() {
  return (
    <div className="sidebarconnexion w-[40%] h-[100vh] flex flex-col items-center pt-12">
      <h3 className=" text text-white font-bold text-[1.5em] p-12">
        Connectez-vous et commencez à gérer vos doctorants!
      </h3>
      <img src={SideBarConnexionPic} alt="" />
      <img
        className="absolute bottom-0 left-0 w-[90px] p-4"
        src={logo}
        alt=""
      />
    </div>
  );
}
