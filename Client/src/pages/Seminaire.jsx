import React,{useState} from "react";

import Card from "../components/Seminaires/Card";
import SeminaireButton from "../components/Seminaires/SeminairesButton";
import SideBar from "../components/Menu/SideBar";
import AjouterSeminaire from "../components/Seminaires/AjouterSeminaire";
import AjouterSeminairesButton from "../components/Seminaires/AjouterSeminairesButton";
export default function Seminaire() {


  return (
    <div style={{ display: "flex", flexDirection: "row", position : "relative"}}>
      <SideBar />
<<<<<<< HEAD
      <div style={{ flex: 1, overflowY: "auto" }}>
        <SeminaireButton style={{ marginTop: "20px", margin: "20px" }} />
        <Card style={{ position: "relative", top: 0, left: 0 }} />
=======
      <div style={{ flex: 1, overflowY: "auto", position : "relative"}}>
        <SeminaireButton style={{ marginTop: '20px', margin: "20px" }} />
        <Card />
        <AjouterSeminairesButton style={{ marginTop: '20px', margin: "20px" }} />
        <AjouterSeminaire />
>>>>>>> d1f81ddf7aec16d6a410a6e30d6552a5cb7faff3
      </div>
    </div>
  );
}
