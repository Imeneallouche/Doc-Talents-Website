import React from "react";
import "./Cardstyles.css";
import map from "lodash/map";
import range from "lodash/range";

const CardContainer = () => {
  const currentDate = new Date().toLocaleDateString();
  const title = "Titre";
  const paragraph =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo sulaborum...  ";
  return (
    <div
      style={{
        height: "200px",
        width: "280px",
        margin: "10px 20px",
        position: "relative",
        borderRadius: "36px",
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
          fontSize: "34px",
          color: "#35468e",
          fontWeight: "bold",
        }}
      >
        {title}
      </div>
      <div
        style={{
          position: "absolute",
          top: "40px",
          right: "20px",
          fontSize: "12px",
          color: "#35468e",
          fontFamily: "Poppins Extra Bold",
        }}
      >
        {currentDate}
      </div>
      <div
        style={{
          position: "absolute",
          top: "80px",
          left: "20px",
          right: "20px",
          fontSize: "12px",
          textAlign: "left",
        }}
      >
        {paragraph}
        <span
          style={{
            textDecoration: "underline",
            cursor: "pointer",
            color: "#35468e",
          }}
        >
          {" Lire plus"}
        </span>
      </div>
    </div>
  );
};

function Card() {
  return (
    <div className="Card">
      <div
        style={{
          width: "100%",
          overflow: "auto",
          display: "flex",
          //justifyContent: "center",
        }}
      >
        {map(range(50), (index) => (
          <div key={index}>
            <CardContainer />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
