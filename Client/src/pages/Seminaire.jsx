import React from "react";
import Card from "../components/Seminaires/Card";
import SeminaireButton from "../components/Seminaires/SeminairesButton";
import SideBar from "../components/Menu/SideBar";

export default function Seminaire() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar />
      <div style={{ flex: 1, overflowY: "auto" }}>
        <SeminaireButton style={{ marginTop: '20px', margin: "20px" }} />
        <Card style={{ position: "relative", top: 0, left: 0 }} />
      </div>
      
    </div>
  );
};
