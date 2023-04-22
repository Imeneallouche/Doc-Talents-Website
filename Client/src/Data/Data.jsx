import { UilVenus, UilMars, UilBookReader } from "@iconscout/react-unicons";

export const CardsData = [
  {
    title: "Doctorants",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },

    barValue: 100,

    value: "64",

    png: UilBookReader,

    series: [
      {
        name: "Doctorant",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },

  /*







  */

  {
    title: "Femmes",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 60,

    value: "40",

    png: UilVenus,

    series: [
      {
        name: "Femmes",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },

  /*










  */

  {
    title: "Hommes",

    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },

    barValue: 40,

    value: "32",

    png: UilMars,

    series: [
      {
        name: "Hommes",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

/*























*/

export const ExapandedCardData = {
  options: {
    chart: {
      type: "area",
      height: "auto",
    },

    dropShadow: {
      enabled: false,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: "#000",
      opacity: 0.35,
    },

    fill: {
      colors: ["#fff"],
      type: "gradient",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["white"],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: true,
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
  },
};
