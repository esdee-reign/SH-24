import React from 'react'
import './BannerSection.css'
import image1 from '../assets/Banner Section/Banner illustration01.png'

function BannerSection() {
    return (
        <div className='banner-container'>

            <div className='banner banner-1'>
                <div className='text-container'>

                    <p className='text-1'>Saving and investing was never<br />so fun and breeeezyyyy!</p>
                    <p className='text-2'>Invest to load your treasure<br />chest in a fun way!</p>

                </div>
                <div className='sign-up-btn-container'>
                    <button className='btn-sign-up-1'>Sign Up Now</button>
                </div>

                <div className='banner-number-container'>
                    <p className='banner-number-1'>01</p>
                </div>

                <div className='image-container'>
                    <img className='image1' src={image1} alt="illustration 1" />
                </div>
            </div>

            <div className='banner banner-2'>
                <div className='banner-number-container'>
                    <p className='banner-number-2'>02</p>
                </div>
            </div>
            <div className='banner banner-3'>
                <div className='banner-number-container'>
                    <p className='banner-number-3'>03</p>
                </div>
            </div>

        </div>
    )
}

export default BannerSection