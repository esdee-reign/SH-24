import React from 'react'
import './MarqueeFooter.css'
import star3 from '../../assets/HeroSection/Star 3.png'

function MarqueeFooter() {
  return (
    <div className='marquee-section'>
          <div className='marquee-container'>
          <marquee loop='infinte' behavior="scroll" height='46px' direction="left" scrollamount="6">
            <span className='marquee-star'>
              <img src={star3} alt='star'/>
            </span>
            Get a chance to win up to<span className='marquee-highlighted-text-1'> AED 50,000</span> every month!
            <span className='marquee-star'>
              <img src={star3} alt='star'/>
            </span>
            Get a chance to win up to<span className='marquee-highlighted-text-2'> AED 50,000</span> every month!
            <span className='marquee-star'><img src={star3} alt='star'/>
            </span>
          </marquee>
          </div>
        </div>
  )
}

export default MarqueeFooter