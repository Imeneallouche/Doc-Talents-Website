import { useState } from "react";

import "./Card.css";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

import { ExapandedCardData } from "../../Data/Data";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div layout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </motion.div>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      className={`flex flex-1 m-5 rounded-lg p-8 relative cursor-pointer hover:shadow-none`}
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="flex flex-1 flex-col justify-end gap-4">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span className={`text-base font-bold text-white`}>{param.title}</span>
      </div>
      <div className="flex flex-1 flex-col items-end justify-between">
        <Png className="fill-white" />
        <span className="text-white">{param.value} inscrits</span>
        <span className="text-white">statistiques mises à jour</span>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {
  return (
    <motion.div
      className="ExpandedCard absolute w-3/5 rounded-lg flex flex-col items-center justify-around p-4"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart
          options={ExapandedCardData.options}
          series={param.series}
          type="area"
        />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
}

export default Card;
