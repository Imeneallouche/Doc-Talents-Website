import React from "react";
import BigCard from "../components/Seminaires/BigCard";
import BackButton from "../components/Seminaires/BackButton";
import SideBar from "../components/Menu/SideBar";

export default function Seminaire() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar />
      <div style={{ flex: 1, overflowY: "auto" }}>
      <BackButton style={{ marginTop: '20px', margin: "20px" }} />
        <BigCard />
      </div>
      
    </div>
  );
};


