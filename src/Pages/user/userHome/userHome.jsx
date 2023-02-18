import React from 'react'
import Banner from '../../../Components/user/userHome/Banner'
import Header from '../../../Components/user/userHome/Header'
import Posters from '../../../Components/user/userHome/posters'
import '../../../stylesheets/user/userHome.css'

function Home() {
  return (
    <div className='maindiv'>
      <Header/>
      <Banner/>
      <Posters/>
    </div>
  )
}

export default Home
