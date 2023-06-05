import React from "react";
import SideBarConnexion from "../components/sideBarConnexion/sideBarConnexion";
import LoginForm from "../components/Connexion/LoginForm";

export default function Connexion() {
  return (
    <div className="flex">
      <SideBarConnexion />
      <LoginForm />
    </div>
  );
}
