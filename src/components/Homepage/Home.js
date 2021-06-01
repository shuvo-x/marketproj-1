import React, { Component } from 'react';
import HeroSection from '../../Services';
import Pricing from'../../Pricing';
import Services from'../../Services';
import Contact from'../../Contact';
import About from '../../About';
import './Home.css';





function Home() {
    return(
        <>
          <div className='home-p text-center mt-3'>
		       <p>Welecome</p>
               <p className='hi'>controloless</p>
               <h4> Breviter</h4>
            </div>
            

            <div className=" d-flex justify-content-center align-items-center"id='div-images'>
          <div className='banner-text '>
        <h3>Premium handcrafted Wordpress<br/>theme for your blog or site</h3>

        <p>eiusmod tempor incididunt ut labore et dolore magna labore et dolore magna <br/> aliqua. 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit labore et dolore magna,<br/>    
            eiusmod tempor incididunt ut  
        
            ."</p>
            <button className='btx'>GetStarted</button>
        </div>
    </div>
            
    <About />
    <Services />
    <Pricing />
  
     
       
        </>
    )
}
export default Home