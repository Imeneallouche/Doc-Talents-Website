import React, { useState } from "react";
import "./AddButtonstyles.css";

const AddButton = (props) => {
  

  return (
    <div style={{ position: "relative" }}>
      <button
        style={{
          width: "350px",
          height: "55px",
          fontSize: "20px",
          marginTop: "50px",
          marginLeft: "1110px",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        <span onClick={props.handleAddClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
            />
          </svg>
          Ajouter un séminaire
        </span>
      </button>
    </div>
  );
};

export default AddButton;
