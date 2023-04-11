import React, { Fragment, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  getAllBookings,
  getAllBookingsByDay,
  getAllDashboardData,
  getDailyShows,
} from "../../../api_Integration/Admin/admin";

function Maindiv() {
  const [bookingsData, setBookingsData] = useState("");
  const [totalSales,setTotalSales] = useState([])
  const [allShows,setAllShows] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllDashboardData()
      setBookingsData(response.data);
      const response2 = await getAllBookingsByDay()
      setTotalSales(response2.data)
      const response3 = await getDailyShows()
      setAllShows(response3.data)
    };
    fetchData();
  },[]);

  const data = totalSales.map((item) => ({
    name: item.date,
    pv: item.totalPrice,
  }));

  const data2 = allShows.map((item) => ({
    name: item.date,
    uv: item.totalShows,
  }));



  return (
    <Fragment>
      <div className="mainDiv">
        <div className="maindivInside">
          <div className="chart3 flex">
            <div className="text-center col-span-1 w-1/2 pt-5">
              <h1 className="font-medium text-2xl ">Total Sales</h1>
              <div className="flex flex-col justify-center h-3/4">
                <h1 className="text-lg font-thin ">
                  {bookingsData.totalSales}
                </h1>
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
            <div className="chart1 p-2">
            <lable className='pl-10 text-base font-semibold'>TotalSales per day</lable>
              <div className="flex justify-start  text-sm col-span-3 w-full h-full mt-3">
                
                {/* <Chart options={chartOptions} series={chartSeries} type="line" height={400} width={450} ref={chartRef} /> */}
                <ResponsiveContainer
                  width="90%"
                  height="90%"
                  className="text-sm"
                >
                  <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="chart2 text-sm p-2">  
              <lable className='pl-10 text-base font-semibold'>TotalShows per day</lable>
              <ResponsiveContainer width="90%" height="90%">
                <BarChart width={140} height={40} data={data2}>
                  <Bar dataKey="uv" fill="#8884d8" />
                  <XAxis className="text-sm" dataKey="name" />
                  <YAxis />
                </BarChart>
              </ResponsiveContainer>
              {/* <Chart options={chartOptions} series={chartSeries} type="bar" height={400} width={450} ref={chartRef} /> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Maindiv;
