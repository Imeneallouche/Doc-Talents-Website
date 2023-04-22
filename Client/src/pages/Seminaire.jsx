import React from "react";
import Card from "../components/Seminaires/Card";
import SeminaireButton from "../components/Seminaires/SeminairesButton";
import SideBar from "../components/Menu/SideBar";

function Seminaire() {
  return (
    <div>
      <SideBar />
      <SeminaireButton />
      <Card />
    </div>
  );
}

export default Seminaire;
