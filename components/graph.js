"use client"

import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  const chartData = [
    { category: 'Category 1', value: 30 },
    { category: 'Category 2', value: 25 },
    { category: 'Category 3', value: 15 },
    { category: 'Category 4', value: 20 },
  ];

  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'pie',
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
      },
    },
    series: [],
  });

  useEffect(() => {
    setChartOptions((prevOptions) => ({
      ...prevOptions,
      series: chartData.map((item) => item.value),
      labels: chartData.map((item) => item.category),
    }));
  }, []);

  return (
    <div>
      <h1>My Pie Chart</h1>
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="pie"
        width="400"
      />
    </div>
  );
};

export default PieChart;