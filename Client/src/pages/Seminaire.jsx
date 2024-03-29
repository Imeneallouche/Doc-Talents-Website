import React, { useState } from "react";

import Card from "../components/Seminaires/Card";
import SeminaireButton from "../components/Seminaires/SeminairesButton";
import SideBar from "../components/Menu/SideBar";
import AjouterSeminaire from "../components/Seminaires/AjouterSeminaire";
import AjouterSeminairesButton from "../components/Seminaires/AjouterSeminairesButton";
export default function Seminaire() {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", position: "relative" }}
    >
      <SideBar />
      <div style={{ flex: 1, overflowY: "auto", position: "relative" }}>
        <SeminaireButton style={{ marginTop: "20px", margin: "20px" }} />
        <Card />
        <AjouterSeminairesButton
          style={{ marginTop: "20px", margin: "20px" }}
        />
        <AjouterSeminaire />
      </div>
    </div>
  );
}
