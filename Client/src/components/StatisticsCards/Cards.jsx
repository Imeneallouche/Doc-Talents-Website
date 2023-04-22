import React from "react";
import { CardsData } from "../../Data/Data";
import Card from "./Card";
import "./Cards.css";

function Cards() {
  return (
    <div className="flex ">
      {CardsData.map((card, index) => {
        return (
          <div className="w-full" key={index}>
            <Card className="text-white"
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
