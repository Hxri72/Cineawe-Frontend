import React, { Fragment, useEffect, useRef, useState } from "react";
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';
import { getAllBookings, getAllDashboardData } from "../../../api_Integration/Admin/admin";

function Maindiv() {
  const chartRef = useRef(null);
  const [bookingsData,setBookingsData] = useState([])
  console.log(bookingsData.lastweekDates);
  const [chartOptions, setChartOptions] = useState({
    chart: {
      toolbar:{
        show:false
      },
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Product Trends by Month',
      align: 'left',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['jan','feb','mar','apr','may','june','july','aug','sep']
    }
  });

  const [chartSeries, setChartSeries] = useState([{
    name: 'My Series',
    data: [10, 20, 30, 40, 45, 60, 50, 80, 90],
  }]);

  useEffect(() => {
    const chart = new ApexCharts(chartRef.current, chartOptions);
    chart.render();

    const fetchData = async() => {
      const response = await getAllDashboardData();
      setBookingsData(response.data)
    }
    fetchData();
   
  }, [chartOptions]);

  let totalSales = 0;
    

  return (
    <Fragment>
      <div className="mainDiv">
        <div className="maindivInside">
          
          <div className="chart3 flex">
                <div className="text-center col-span-1 w-1/2 pt-5">
                  <h1 className="font-medium text-2xl ">Total Sales</h1>
                  <div className="flex flex-col justify-center h-3/4">
                  <h1 className="text-lg font-thin ">{bookingsData.totalSales}</h1>
                  </div>
                </div>

                <div className="text-center col-span-2 w-1/2 pt-5">
                  <h1 className="font-medium text-2xl ">Profit</h1>
                  <div className="flex flex-col justify-center h-3/4">
                  <h1 className="text-lg">{bookingsData.totalProfit}</h1>
                  </div>
                </div>

                <div className="text-center col-span-2 w-1/2 pt-5">
                  <h1 className="font-medium text-2xl ">Users</h1>
                  <div className="flex flex-col justify-center h-3/4">
                  <h1 className="text-lg">{bookingsData.totalUsers}</h1>
                  </div>
                </div>

                <div className="text-center col-span-2 w-1/2 pt-5">
                  <h1 className="font-medium text-2xl">Shows</h1>
                  <div className="flex flex-col justify-center h-3/4">
                  <h1 className="text-lg">{bookingsData.totalTheaters}</h1>
                  </div>
                </div>
          </div>

          <div className="maincharts flex">
            <div className="chart1">
            
              <div className="flex justify-start  text-sm col-span-3 w-full h-full mt-3">
              <Chart options={chartOptions} series={chartSeries} type="line" height={400} width={450} ref={chartRef} />
              </div>
            </div>

            <div className="chart2 ">
              <Chart options={chartOptions} series={chartSeries} type="bar" height={400} width={450} ref={chartRef} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Maindiv;
