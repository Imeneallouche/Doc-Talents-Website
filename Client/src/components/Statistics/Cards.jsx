import React from "react";

export default function Cards(props) {
  return (
    <div className="cardSatistics flex-col text-dark-purple bg-white shadow-md w-[270px] h-[120px] rounded-[12px] p-4">
      <h3
        className="font-bold text-2xl text-dark-purple mb-6"
        style={{ fontSize: "16px", color: "#35468e", fontWeight: 900 }}
      >
        {props.title}
      </h3>
      <p className="text-xl">{props.count}</p>
    </div>
  );
}
