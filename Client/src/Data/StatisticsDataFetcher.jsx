import { useEffect, useState } from "react";
import axios from "axios";

export default function StatisticsDatafetcher() {
  const RUNNING_URL = "http://localhost:5000";
  const ENDPOINT = "/Dashboard";
  const [StatisticsData, setStatisticsData] = useState({
    nbDoctorants: 0,
    nbDoctorantsHomme: 0,
    nbDoctorantsFemme: 0,
    moyDoctorantsHomme: 0,
    moyDoctorantsFemme: 0,
    lisDoctorants: [],
    lisDoctorantsHomme: [],
    lisDoctorantsFemme: [],
  });

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get(RUNNING_URL + ENDPOINT);
        setStatisticsData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStatistics();
  }, []);

  return StatisticsData;
}
