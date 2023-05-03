import React from "react";
//import { CardsData } from "../../Data/Data";
import Card from "./Card";
import "./Cards.css";
import { UilVenus, UilMars, UilBookReader } from "@iconscout/react-unicons";
import StatisticsDatafetcher from "../../Data/StatisticsDataFetcher";

function Cards() {
  const data = StatisticsDatafetcher();
  console.log(data);

  const CardsData = [
    {
      title: "Doctorants",
      color: {
        backGround: "linear-gradient(180deg, #35468E 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },

      barValue: 100,

      value: data.nbDoctorants,

      png: UilBookReader,

      series: [
        {
          name: "Doctorant",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },

    {
      title: "Femmes",
      color: {
        backGround: "linear-gradient(180deg, #D96B7F 0%, #FFA4B6 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: Math.floor(data.moyDoctorantsFemme * 100),

      value: data.nbDoctorantsFemme,

      png: UilVenus,

      series: [
        {
          name: "Femmes",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },

    {
      title: "Hommes",

      color: {
        //backGround: "linear-gradient(#274046  -146.42%, #E6DADA -46.42%)"
        backGround: "linear-gradient(#274046 , #E6DADA)",
        boxShadow: "0px 10px 20px 0px #CCC",
      },

      barValue: Math.floor(data.moyDoctorantsHomme * 100),

      value: data.nbDoctorantsHomme,

      png: UilMars,

      series: [
        {
          name: "Hommes",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];

  if (data && CardsData.length == 3) {
    return (
      <div className="flex ">
        {CardsData.map((card, index) => {
          return (
            <div className="w-full" key={index}>
              <Card
                className="text-white"
                title={card.title}
                color={card.color}
                barValue={card.barValue || 0}
                value={card.value || 0}
                png={card.png}
                series={card.series}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Cards;
