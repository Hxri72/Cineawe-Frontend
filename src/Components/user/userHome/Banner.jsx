import React from 'react'
import bannerImage from '../../../Assets/user/userHome/movieBanner.jpg'

function Banner() {
  return (
    <div>
      <div className='bannerdiv'>
            <div className='p-4  w-full h-full '>
                <img className='w-full h-full rounded-xl object-cover' src={bannerImage} alt=''/>
            </div>
      </div>
    </div>
  )
}

export default Banner
