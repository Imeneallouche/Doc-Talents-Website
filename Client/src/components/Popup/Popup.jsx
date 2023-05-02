import React from "react";
import "./Popup.css";
import { useState } from "react";

export default function Popup({ onSubmit, action }) {
  const [date, setDate] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date && text) {
      onSubmit({ text, date });
    }
  };

  return (
    <div className="popup bg-white-bluish rounded-lg absolute flex flex-col items-center justify-center p-10 border-3 border-dark-purple">
      <h3 className="text-dark-purple font-semibold text-2xl text-center m-5">
        Veuillez insérer le numéro du PV
      </h3>
      <form
        className=" w-full flex justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col flex-1 m-5">
          <input
            type="Text"
            required
            placeholder="Numéro du PV (ex: 20181112)"
            className="rounded p-4 text-base text-purple focus:outline-dark-purple"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="date"
            required
            placeholder="Date du PV (ex: 2018-11-12)"
            className="rounded p-4 text-base text-purple focus:outline-dark-purple"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button
          className="confirm bg-dark-purple rounded m-5 px-10 py-5 h-fit"
          type="submit"
        >
          Confirmer
        </button>
      </form>
    </div>
  );
}
