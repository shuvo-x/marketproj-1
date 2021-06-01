import React from 'react';
import './Navigation.css';


function Navigation () {
  return(
    <>
    <div className='checkFloat'>
      <button className='btn-s'>Getcode</button>
    </div>
    <div className='container'>
     <nav className='navbar navbar-expand-md navbar-light'>
      <a href='#'className='navbar-brand'>
        <img src=''/>
        <span>Bootstrap 5</span>
      </a>
      <button className='navbar-toggler'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#toggleMobileMenu'
      aria-controls='toggleMobileMenu'
      aria-expanded='false'
      aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse'id='toggleMobileMenu'>
        <ul className='navbar-nav m-auto text-center'>
          <li>
            <a className='nav-link'href='/'>Home</a>
          </li>
          <li>
            <a className='nav-link'href='/About'>About</a>
          </li>
          <li>
            <a className='nav-link'href='/Services'>Services</a>
          </li>
          <li>
            <a className='nav-link'href='#'>Pricing</a>
          </li>
          <li>
            <a className='nav-link'href='#'>Contact</a>
          </li>
          <li>
            <a className='nav-link'href='#'>Feedback</a>
          </li>
          <li>
            <a className='nav-link'href='#'>Rating</a>
          </li>
          <button className='btn-help'>Signup</button>
        </ul>
      </div>
     </nav>


    </div>
    </>
  )
}
export default Navigation