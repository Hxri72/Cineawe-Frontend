import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Fragment } from 'react'
import { getBannerMovie } from '../../../api_Integration/Movie/Movie'
import bannerImage from '../../../Assets/user/userHome/johnwick.jpg'


function Banner() {
  const [bannerMovie,setBannerMovie] = useState()

  useEffect(()=>{
      const fetchdata = async()=>{
        const response = await getBannerMovie()
        setBannerMovie(response.results[13])
      }
      fetchdata();
  },[])

  return (
    <Fragment>
    <div>
      <div className='bannerdiv'>
            <div className='p-4  w-full h-full '>
                <img className='w-full h-full rounded-xl object-cover' src={bannerImage} alt=''/>
            </div>
      </div>
    </div>
    </Fragment>
  )
}

export default Banner
