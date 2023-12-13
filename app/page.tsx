import Image from "next/image";
import React from "react";
import { Button, Flex } from "antd";
import BarChartComponent from '../components/BarChartComponent'
import GraphComponent from '../components/GraphComponent'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>earny</h1>

      <div
        className=" flex w-screen 
			h-screen flex-col justify-center 
			gap-1 items-center"
      >
        <h1 className="text-green-500 font-bold">GeeksforGeeks</h1>

        <Button className="bg-[#1677ff]" type="primary">
          Primary Button
        </Button>
        <Flex gap="small" wrap="wrap">
          <Button className="text-green-500 font-bold" type="primary">Primary Button</Button>
          
        </Flex>
        <BarChartComponent />
       <GraphComponent/>
      </div>
      
    </main>
  );
}
// "use client"
// import React from "react";
// import Chart from "react-apexcharts";

// const App = () => {
//   const options = {
//     chart: {
//       id: "basic-bar"
//     },
//     xaxis: {
//       categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
//     }
//   };

//   const series = [
//     {
//       name: "series-1",
//       data: [30, 40, 45, 50, 49, 60, 70, 91]
//     }
//   ];

//   return (
//     <div className="app">
//       <div className="row">
//         <div className="mixed-chart">
//           <Chart options={options} series={series} type="bar" width="500" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
// import React, { Component } from "react";
// import Chart from "react-apexcharts";

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {
//         chart: {
//           id: "basic-bar"
//         },
//         xaxis: {
//           categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
//         }
//       },
//       series: [
//         {
//           name: "series-1",
//           data: [30, 40, 45, 50, 49, 60, 70, 91]
//         }
//       ]
//     };
//   }

//   render() {
//     return (
//       <div className="app">
//         <div className="row">
//           <div className="mixed-chart">
//             <Chart
//               options={this.state.options}
//               series={this.state.series}
//               type="bar"
//               width="500"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;