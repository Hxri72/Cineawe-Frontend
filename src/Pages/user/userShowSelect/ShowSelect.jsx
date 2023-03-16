import React, { Fragment } from 'react'
import Footer from '../../../Components/user/userHome/footer'
import Header from '../../../Components/user/userHome/Header'
import ShowDetails from '../../../Components/user/userShowDetails/ShowDetails'

function ShowSelect() {
  return (
    <Fragment>
        <div className='maindiv'>
            <Header/>
            <ShowDetails/>
            <Footer/>
        </div>
    </Fragment>
  )
}

export default ShowSelect
