import React from 'react'
import './Notification.css';
import CloseButton from 'react-bootstrap/CloseButton'

function hidePopup() {
  console.log('button pressed')
  document.getElementById('container').classList.add('hide');
  document.getElementById('close').classList.add('hide')
}

function Navbar() {
  return (
    <div className='notification-container row'>
        <div className='header col-12' id='header'>
          <p className='header-text'>Get A Chance To Win Up To <b><u>AED 50,000</u></b> Every Month!</p>
        </div>

        <div className='close-btn'>
          <CloseButton id='close' variant='white'/>
        </div>
    </div>
  )
}

export default Navbar;