import React from 'react';
import './HeroSection.css';
import logo from '../assets/HeroSection/logo.png';
import arrow from '../assets/HeroSection/Arrow.png';
import banner2 from '../assets/HeroSection/Banner 2.png'
import banner3 from '../assets/HeroSection/Banner 3.png'

function HeroSection() {
  return (
    <div className='hero-container'>

      <div className='nav-bar row justify-content-around'>
        <div className='col-6 logo-container'>
          <img id='logo' src={logo} alt='logo' />
        </div>
        <div className='col-6 sign-up-btn-container'>
          <button className='btn-sign-up'>Sign Up Now</button>
        </div>
      </div>

      <div className='hero-section'>

        <div className='statement-container row'>
          <p className='statement'>Making Saving and<br />Investing&nbsp;<span className='text-fun'>Fun</span></p>
          <img src={arrow} alt="arrow" className='arrow'/>
        </div>

        <div className='hero-banner-section row justify-content-around'>

          <div className='col-6 banner-left'>
            <img src={banner3} alt="banner3" style={{ margin: '0' }} />
          </div>

          <div className='col-6 banner-right'>
            <img src={banner2} alt="banner2" style={{ margin: '0' }} />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default HeroSection