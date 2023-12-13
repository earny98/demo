"use client";
import React from "react";
import Chart from "react-apexcharts";

const App = () => {
  const options = {
    chart: {
      id: "basic-bar",
    },
    colors: ["black"], // Use an array for colors
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    plotOptions: {
      bar: {
        // barWidth: 20, 
        // columnWidth: 80, 
      },
    },
    toopltip: {
      onDatasetHover: {
        highlightDataSeries: false,
    },
    },
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={series} type="bar" width="800" />
        </div>
      </div>
    </div>
  );
};

export default App;

