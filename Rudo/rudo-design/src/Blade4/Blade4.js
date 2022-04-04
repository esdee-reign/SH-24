import React from 'react';
import './Blade4.css';
import star from '../assets/Blade 4/Star 2.png';
import circle from '../assets/Blade 4/Vector 1178.png'

function Blade4() {
  return (
    <div className='blade4-container'>

      <div className='heading'>

        <p className='referral'>Referral Offers</p>
        <div className='images row justify-content-center'>
          <div className='star col-3'>
            <img src={star} alt='star' />
          </div>
          <div className='circle col-3'>
            <img src={circle} alt='circle' />
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Blade4