import React from "react";
import Card from "../components/Seminaires/Card";
import SeminaireButton from "../components/Seminaires/SeminairesButton";
import SideBar from "../components/Menu/SideBar";

export default function S ()  {
  return (
    <div>
      <SideBar />
      <SeminaireButton />
      <Card />
    </div>
  );
}; 