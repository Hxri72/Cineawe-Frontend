import React, { Fragment } from 'react'
import '../../../stylesheets/user/userError.css'

function NotFound() {
  return (
    <Fragment>
      <div className='noShowsHeadError'>
        <h1 className='text-3xl font-bold text-white animate-pulse'>404 Error</h1>
        <h1 className='text-xl font-semibold mt-2 text-white '>The page is you looking for is does not exist</h1>
      </div>
    </Fragment>
  )
}

export default NotFound;
