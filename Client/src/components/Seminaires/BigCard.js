import React from "react";
import { useParams } from 'react-router-dom';
import seminaireData from "../../Data/seminaireData.json";
import "./BigCardstyles.css";

const BigCard = ({ match }) => {
  const { title } = useParams();
  const data = seminaireData.find((item) => item.title === title);


  return (
    <div
      style={{
        height: "320px",
        width: "700px",
        margin: "10px 20px",
        position: "relative",
        borderRadius: "18px",
        marginTop: "60px",
        marginLeft: "120px",
        backgroundColor: "#fdfdff",
        border: "2px solid #ffffff", // Add border CSS property
        boxShadow:
          "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)", // Add boxShadow CSS property
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          fontSize: "28px",
          color: "#35468e",
          fontWeight: "bold",
        }}
      >
        {data.title}
      </div>
      <div
        style={{
          position: "absolute",
          top: "60px",
          left: "20px",
          right: "20px",
          fontSize: "18px",
          textAlign: "left",
        }}
      >
        {data.paragraph}
      </div>
    </div>
  );
};

export default BigCard;
