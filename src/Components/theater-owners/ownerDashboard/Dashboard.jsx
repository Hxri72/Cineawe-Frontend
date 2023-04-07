import React,{PureComponent} from 'react'
import '../../../stylesheets/theater_owners/ownerDashboard.css'
import {BarChart,Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Dashboard() {

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  //Barchart
  const data2 = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className='dashboardDiv'>
      <div className='dashboardHead'>
        <h1 className='text-2xl font-bold'>Dashboard</h1>
      </div>

      <div className='flex flex-col items-center'>
      <div className='dashboardMain'>
        <div className='revenueDiv'>
            <h1 className='text-white p-5'>Total Revenue</h1>
            <div>
                <h1 className='text-white pl-5'> $17,623</h1>
            </div>
        </div>

        <div className='revenueDiv'>
            <h1 className='text-white p-5'>Total Users</h1>
            <div>
                <h1 className='text-white pl-5'> 522</h1>
            </div>
        </div>

        <div className='revenueDiv'>
            <h1 className='text-white p-5'>Total Profit</h1>
            <div>
                <h1 className='text-white pl-5'> $9833</h1>
            </div>
        </div>
      </div>

      <div className='flex w-full justify-center'>
        <div className='barGraphDiv pr-5'>
        <ResponsiveContainer width="100%" height="100%" className='text-sm'>
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
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
            {/* <img className='w-full h-full rounded-xl' alt='bargraph' src='https://www.amcharts.com/wp-content/uploads/2020/02/demo_15137_none-1024x690.png'/> */}
        </div>

        <div className='barGraphDiv p-3'> 
        <ResponsiveContainer width="100%" height="100%">
        <BarChart width={140} height={40} data={data2}>
          <Bar dataKey="uv" fill="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis />
        </BarChart>
        </ResponsiveContainer>
        {/* <img className='w-full h-full rounded-xl object-cover' alt='bargraph' src='https://datavizproject.com/wp-content/uploads/types/Multi-level-Donut-Chart.png'/> */}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Dashboard
