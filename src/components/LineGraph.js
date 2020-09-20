import React, { useState, useEffect } from "react";
import "./LineGraph.css";
import { Line } from "react-chartjs-2";

const LineGraph = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
        .then((response) => {
          return response.json();
        })
        .then((data) => {});
    };

    fetchData();
  }, []);

  return <div>{/* <Line data options /> */}</div>;
};

export default LineGraph;
