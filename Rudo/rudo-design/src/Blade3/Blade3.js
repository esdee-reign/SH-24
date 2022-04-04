import React from 'react'
import './Blade3.css'
import topImage from '../assets/Blade 3/Group 190.png'
import bottomImage from '../assets/Blade 3/Group 191.png'
import illustration1 from '../assets/Blade 3/Illustration01.png'
import arrow from '../assets/Arrow 1.png'


function Blade3() {
    return (
        <div className='blade3-container row'>
            <div className='row top-image-container justify-content-end'>
                <img src={topImage} alt='top img' className='top-image' />
            </div>

            <div className='row justify-content-end'>

                <div className='col-4 card card-1'>
                    <div className='txt'>
                        <p className='txt-1'>Keep that change. <br />No, literally!</p>
                        <p className='txt-2'>Your money, our brains! <br />Choose a portfolio strategy <br />tailored just for you!</p>
                    </div>
                    
                    <div className='bottom-img-container'>
                        <img src={illustration1} alt='illustration 1'/>
                    </div>

                </div>

                <div className='col-3 card card-2'>
                    <div className='txt-1 invest-smart-container'>
                        <div className='invest-smart'>
                            Invest Smart!
                        </div>
                        <div className='arrow1'>
                            <img src={arrow} alt='arrow' id='arr'/>
                        </div>
                    </div>
                </div>
                <div className='col-3 card card-3'>
                <div className='txt-1 salary-container'>
                        <div className='salary'>
                            Salary Credited.<br/>
                            Salary Debited.                            
                        </div>
                        <div className='arrow2'>
                            <img src={arrow} alt='arrow' id='arr'/>
                        </div>
                    </div>
                </div>

            </div>

            <div className='row bottom-image-container justify-content-start'>
                <img src={bottomImage} alt='bottom img' className='bottom-image' />
            </div>
        </div>
    )
}

export default Blade3