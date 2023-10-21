import { Link } from 'react-router-dom';
import React, { useState } from "react";  
import 'bootstrap/dist/css/bootstrap.min.css';
import Attraction from '../components/attraction';
import Jupitermodel from '../models/jupitermodel';

function Jupiter(){
    
      const moonShadow = `
      An observer at Jupiter's cloud tops within the oval shadow would experience a total eclipse of the Sun. Total eclipses are more common on Jupiter than Earth for several reasons. Jupiter has four major moons (Galilean satellites) that often pass between Jupiter and the Sun: in seven days, Ganymede transits once; Europa, twice; and Io, four times. And since Jupiter's moons orbit in a plane close to Jupiter's orbital plane, the moon shadows are often cast upon the planet. `;
      const Atmosphere = `This view of Jupiter's turbulent atmosphere from NASA's Juno spacecraft includes several of the planet's southern jet streams. Using data from Juno's instruments, scientists discovered that Jupiter's powerful atmospheric jet streams extend far deeper than previously imagined. Evidence from Juno shows the jet streams and belts penetrate about 1,800 miles (3,000 kilometers) down into the planet.

      The storm known as the Great Red Spot is also visible on the horizon, nearly rotated out of view as Juno sped away from Jupiter at about 30 miles per second (48 kilometers per second), which is more than 100,000 mph (160,900 kilometers per hour).`
      ;
      const BA = `A JunoCam image of Jupiter's storm "Oval BA", taken on Juno's 26th perijove (PJ) pass, inspired this work of art, suitable for framing. Oval BA can be seen near the top of the image, a storm approximately the same size as Earth. The bright storm below and to the right of Oval BA is one of Jupiter's anticyclonic (counterclockwise-rotating) white ovals, common at this latitude, dubbed the string of pearls. `;
    return(
        <div>
      <header>
      <div
        className='p-5 text-center bg-image'
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1635349429385-201ee3a51b88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60")`,
          height: 300,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Welcome to Jupiter!</h1>
              <h4 className='mb-3'>behold the greatness of this beatiful planet</h4>
            </div>
          </div>
        </div>
      </div>
    </header>
    
    <div className="container" style={{ position: 'relative', overflow: 'hidden' }} >
    <Link className='pt-3 pb-3' to={"/"}  style={{ marginLeft: '85%' }}>Checkout Other Planets!</Link>
    <h4 className='pb-4' style={{ borderBottom: '3px solid #000' }} >Jupiter  </h4>
           
    </div> 
      
    <Attraction
        title="Oval BA"
        image="https://photojournal.jpl.nasa.gov/jpegMod/PIA24292_modest.jpg"
        description = {`${BA}`}
        audio = {process.env.PUBLIC_URL + '/audio/gediz.mp3'}
      />

      <Attraction
        title="Jupiter's Atmosphere"
        image="https://photojournal.jpl.nasa.gov/browse/PIA23809.jpg"
        description = {`${Atmosphere}`}
        audio = {process.env.PUBLIC_URL + '/audio/santa.mp3'}
      />

      <Attraction
        title="Moon Shadow on Jupiter"
        image="https://photojournal.jpl.nasa.gov/browse/PIA25015.jpg"
        description = {`${moonShadow}`}
        audio={process.env.PUBLIC_URL + '/audio/eos.mp3'}
      />

      <div className='container pt-3'>
          <h3>Jupiter Animation Demonstration</h3>
      </div>
       
       <div className='container pt-5'>
            <Jupitermodel/>
       </div>
    </div>
    )
}
export default Jupiter;

