import React from 'react'
import applogo from "../../../Assets/user/userSignup/Cineawe.png";

function Footer() {
  return (
    <div className='userFooterDiv'>
        <div className='w-full h-16 bg-slate-900'>

        </div>

      <div className='userFooter flex'>
            <div className='footerLogo'>
                <img className='w-72 -mt-3' src={applogo} alt='applogo'/>
                <div className='about-app -mt-10 ml-20'>
                    <h1 className='text-slate-400 text-sm font-thin'>Cineawe is a convenient and user-friendly movie booking app that lets you browse and book tickets for the latest movies at your favorite cinemas. </h1>
                </div>
            </div>

            <div className='footer-Things flex justify-end'>
                <div className='footerBox w-2/3 h-64 flex '>
                    <div className='footer-Details'>
                        <h1 className='footer-head'>Menu</h1>
                        <h2>Account</h2>
                        <h2>Aboutus</h2>
                        
                    </div>

                    <div className='footer-Details'>
                        <h1 className='footer-head'>Contact Us</h1>
                        <h1 className='text-slate-400 font-medium '>Phone :-</h1>
                        <p>+91 8848576772</p>

                        <h1 className='text-slate-400 font-medium '>Address :-</h1>
                        <p>Kinfra Techno industrial park, Kozhikode</p>
                    </div>

                    <div className='footer-Details'>
                        <h1 className='footer-head'>FollowUsOn</h1>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Footer
