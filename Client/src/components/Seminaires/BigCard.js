import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./BigCardstyles.css";
import axios from 'axios';

const BigCard = ({ match }) => {
  const { doc, title } = useParams();
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

  const data = seminaireData?.find((item) => item.titre === title);

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
          fontSize: "28px",
          color: "#35468e",
          fontWeight: "bold",
        }}
      >
        {data?.titre}
      </div>
      <div
        style={{
          position: "absolute",
          top: "60px",
          left: "20px",
          right: "20px",
          fontSize: "18px",
          color: "black",
          textAlign: "left",
        }}
      >
        {data?.resume}
      </div>
    </div>
  );
};

export default BigCard;
