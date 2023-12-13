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

  const customColors = ['black', '#FFC300', '#33FF57', '#339DFF'];

  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'donut',
      
    },
    colors: customColors,
    plotOptions: {
      pie: {
        expandOnClick: false,
      },
    },
    toopltip: {
      onDatasetHover: {
        highlightDataSeries: false,
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
      <h1>My Donut Chart</h1>
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="donut"
        width="400"
      />
    </div>
  );
};

export default PieChart;


// "use client"

//  import React, { useEffect, useState } from 'react';
//  import ReactApexChart from 'react-apexcharts';
 
//  const PieChart = () => {
//    const chartData = [
//      { category: 'Category 1', value: 30 },
//      { category: 'Category 2', value: 25 },
//      { category: 'Category 3', value: 15 },
//      { category: 'Category 4', value: 20 },
//    ];
 
//    const [chartOptions, setChartOptions] = useState({
//      chart: {
//        type: 'donut',
//      },
//      plotOptions: {
//        pie: {
//          expandOnClick: false,
//        },
//      },
//      series: [],
//    });
 
//    useEffect(() => {
//      setChartOptions((prevOptions) => ({
//        ...prevOptions,
//        series: chartData.map((item) => item.value),
//        labels: chartData.map((item) => item.category),
//      }));
//    }, []);
 
//    return (
//      <div>
//       {/* <h1>My Donut Chart</h1> */}
//       <ReactApexChart
//          options={chartOptions}
//          series={chartOptions.series}
//          type="donut"
//          width="400"
//        />
//     </div>
//    );
//  };
 
//  export default PieChart;

// import React, { useEffect, useState } from 'react';
// import ReactApexChart from 'react-apexcharts';

// const PieChart = () => {
//   const chartData = [
//     { category: 'Category 1', value: 30 },
//     { category: 'Category 2', value: 25 },
//     { category: 'Category 3', value: 15 },
//     { category: 'Category 4', value: 20 },
//     { category: 'Category 5', value: 20 },

//     { category: 'Category 6', value: 20 },

//   ];

//   const [chartOptions, setChartOptions] = useState({
//     chart: {
//       type: 'donut',
//     },
//     series: [],
//     labels: [],
//   });

//   useEffect(() => {
//     setChartOptions({
//       ...chartOptions,
//       series: chartData.map((item) => item.value),
//       labels: chartData.map((item) => item.category),
//     });
//   }, []);

//   // Event handler triggered on slice hover
//   const handleSliceHover = (event, chartContext, { dataPointIndex }) => {
//     const chart = chartContext.w.globals.comboCharts[0];
//     const { hoveredDataPoints } = chart;

//     hoveredDataPoints.push(dataPointIndex);

//     chart.updateOptions({
//       annotations: {
//         points: hoveredDataPoints.map((index) => {
//           return {
//             x: 0,
//             y: 0,
//             offsetY: -40, // Adjust the offsetY based on your requirement
//             marker: {
//               size: 8, // Adjust the size of the expanded slice
//             },
//           };
//         }),
//       },
//     });
//   };

//   // Event handler triggered when mouse leaves the slice
//   const handleSliceLeave = (event, chartContext, { dataPointIndex }) => {
//     const chart = chartContext.w.globals.comboCharts[0];
//     const { hoveredDataPoints } = chart;

//     const index = hoveredDataPoints.indexOf(dataPointIndex);
//     if (index !== -1) {
//       hoveredDataPoints.splice(index, 1);
//     }

//     chart.updateOptions({
//       annotations: {
//         points: hoveredDataPoints.map((index) => {
//           return {
//             x: 0,
//             y: 0,
//             offsetY: -40, // Adjust the offsetY based on your requirement
//             marker: {
//               size: 8, // Adjust the size of the expanded slice
//             },
//           };
//         }),
//       },
//     });
//   };

//   return (
//     <div>
//       <h1>My Donut Chart</h1>
//       <ReactApexChart
//         options={chartOptions}
//         series={chartOptions.series}
//         type="donut"
//         width="400"
//         events={{
//           dataPointMouseEnter: handleSliceHover,
//           dataPointMouseLeave: handleSliceLeave,
//         }}
//       />
//     </div>
//   );
// };

// export default PieChart;














































