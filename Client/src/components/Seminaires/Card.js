import React, { useState,useEffect } from "react";
import "./Cardstyles.css";
import map from "lodash/map";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const CardContainer = ({ title, paragraph }) => {
  const history = useHistory();
const { doc } = useParams();

const handleReadMoreClick = () => {
  history.push({
    pathname: `/Doctorant/${doc}/Seminaire/SeminaireLirePlus/${title}`,
    state: {
      title: title,
    },
  });
};


  return (
    <div
      style={{
        height: "220px",
        width: "320px",
        margin: "10px 20px",
        position: "relative",
        borderRadius: "18px",
        backgroundColor: "#fdfdff",
        border: "2px solid #ffffff",
        boxShadow:
          "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          fontSize: "16px",
          color: "#35468e",
          fontWeight: 900,
        }}
      >
        {title}
      </div>
      <div
        style={{
          marginTop: "10px",
          position: "absolute",
          top: "60px",
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
          onClick={handleReadMoreClick}
        >
          {" Lire plus"}
        </span>
      </div>
    </div>
  );
};

function Card( ) {
  
  const [seminaireData, setSeminareData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/Doctorant/Seminaire", {
        params: {
          ID_DOCTORANT: "21/0010",
        },
      })
      .then((res) => {
        if (Array.isArray(res.data)) {
          setSeminareData(res.data);
        } else {
          throw new Error("Unexpected response data format");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Card">
      <div
        style={{
          width: "100%",
          overflow: "auto",
          display: "flex",
          color: "black",
          justifyContent: "left",
        }}
      >
        {map(seminaireData, (data, index) => (
          <div key={index}>
            <CardContainer title={data.titre} paragraph={data.resume} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
