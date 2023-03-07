import React from 'react'
import '../../../stylesheets/theater_owners/ownerDashboard.css'

function Dashboard() {
  return (
    <div className='dashboardDiv'>
      <div className='dashboardHead'>
        <h1 className='text-2xl font-bold'>Dashboard</h1>
      </div>

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

      <div className='flex w-full'>
        <div className='barGraphDiv'>
            <img className='w-full h-full rounded-xl' alt='bargraph' src='https://www.amcharts.com/wp-content/uploads/2020/02/demo_15137_none-1024x690.png'/>
        </div>

        <div className='barGraphDiv'>
        <img className='w-full h-full rounded-xl object-cover' alt='bargraph' src='https://datavizproject.com/wp-content/uploads/types/Multi-level-Donut-Chart.png'/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
