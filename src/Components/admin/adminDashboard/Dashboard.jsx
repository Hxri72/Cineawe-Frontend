import React, { Fragment } from "react";
import { Line } from 'react-chartjs-2';

function Maindiv() {
  
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3, 11],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };
  
  const options = {
    scales: {
      y: {
        type: 'logarithmic',
        ticks: {
          beginAtZero: true,
          stepSize: 10,
        },
      },
    },
  };

  return (
    <Fragment>
      <div className="mainDiv">
        <div className="maindivInside">
          
          <div className="chart3 flex">
                <div className="text-center col-span-1 w-1/2 pt-5">
                  <h1 className="font-medium text-2xl ">Income</h1>
                  <div className="flex flex-col justify-center h-3/4">
                  <h1 className="text-lg font-thin ">4566</h1>
                  </div>
                </div>

                <div className="text-center col-span-2 w-1/2 pt-5">
                  <h1 className="font-medium text-2xl ">Profit</h1>
                  <div className="flex flex-col justify-center h-3/4">
                  <h1 className="text-lg">4566</h1>
                  </div>
                </div>

                <div className="text-center col-span-2 w-1/2 pt-5">
                  <h1 className="font-medium text-2xl ">Theaters</h1>
                  <div className="flex flex-col justify-center h-3/4">
                  <h1 className="text-lg">13</h1>
                  </div>
                </div>

                <div className="text-center col-span-2 w-1/2 pt-5">
                  <h1 className="font-medium text-2xl">Shows</h1>
                  <div className="flex flex-col justify-center h-3/4">
                  <h1 className="text-lg">35</h1>
                  </div>
                </div>
          </div>

          <div className="maincharts flex">
            <div className="chart1">
            
              <div className="flex justify-start text-slate-500 text-sm col-span-3 w-full h-full">
                {/* <Line data={data} options={options} /> */}
                {/* <img src="https://www.tibco.com/sites/tibco/files/media_entity/2022-01/doughnut-chart-example.svg" alt="graph1"/> */}
              </div>
            </div>

            <div className="chart2 ">
              <img
                className="w-full h-full rounded-3xl"
                alt="graph "
                src="https://www.tableau.com/sites/default/files/2021-09/Line%20Chart%201%20-%20Good%20-%20900x650.png"
              />
              {/* <CChart type="line" datasets={chartData.datasets} options={chartOptions} style={{ width: '100%', height: '100px' }} /> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Maindiv;
