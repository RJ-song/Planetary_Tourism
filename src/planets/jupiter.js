import { Link } from 'react-router-dom';
import React, { useState } from "react";  
import 'bootstrap/dist/css/bootstrap.min.css';
import Attraction from '../attraction';

function Jupiter(){
    
      const SantaCruz = `
        NASA's Perseverance Mars rover snapped this view of a hill in Mars' Jezero Crater called "Santa Cruz" on April 29, 2021, the 68th Martian day, or sol, of the mission. About 20 inches (50 centimeters) across on average, the boulders in the foreground are among the type of rocks the rover team has named "Ch'al" (the Navajo term for "frog" and pronounced "chesh"). Perseverance will return to the area in the next week or so.

        Composed of multiple images, this enhanced-color mosaic was created using the left- and right-eye views of Perseverance's Mastcam-Z camera system, merging the scene into a single, wider view. Santa Cruz hill is a possible eroded remnant of Jezero Crater's western delta. The hill is about 164 feet (50 meters) tall and was roughly 1.6 miles (2.5 kilometers) east of the rover when the photo was taken, viewed from "Van Zyl Overlook."
      `;
      const EosChasma = `This image shows a crater on the floor of Eos Chasma, part of the Valles Marineris canyon system. Craters on Mars are useful for geologists because they provide cross-sections into the subsurface. The south wall of this crater shows evidence of several different types of rock, with diverse colors.

      In the black and white parts of the image, it appears that there are two types of rock: one relatively light and one dark. However, in the 1.1 kilometer-wide color swath we can see that the dark rocks are more complicated, as some have a greenish tint and others are purple.
      
      Note that these are not the colors your eyes would see if you were there! In enhanced color, the HiRISE near-infrared data appears as red, the red is shown as green, and the blue-green data is shown as blue, allowing us to see more information at once.`
      ;
      const GedizVallis = `NASA's Curiosity Mars rover used its Mastcam to capture this mosaic of Gediz Vallis on Nov. 7, 2022, the 3,646th Martian day, or sol, of the mission. In the center of the valley in this image is a pile of boulders and debris that may have been swept there by flowing water billions of years ago.
      Wind is thought to have carved the larger valley, which starts much higher up on Mount Sharp, the 3-mile-tall (5-kilometer-tall) Martian mountain whose foothills Curiosity has been ascending since 2014. The mountain is made up of layers, with the oldest at the bottom and the youngest at the top. Approaching this debris in the valley's interior channel is thought to be the only way that Curiosity will be able to study younger material that originated higher on the mountain than the rover will ever go
  `;
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
    <h4 className='pb-4' style={{ borderBottom: '3px solid #000' }} >From Earth to Mars, we  </h4>
           
    </div> 
      
    <Attraction
        title="Gediz Vallis"
        image="https://photojournal.jpl.nasa.gov/figures/PIA25733_figA_thumb.jpg"
        description = {`${GedizVallis}`}
        audio = {process.env.PUBLIC_URL + '/audio/gediz.mp3'}
      />

      <Attraction
        title="Santa Cruz"
        image="https://photojournal.jpl.nasa.gov/browse/PIA25075.jpg"
        description = {`${SantaCruz}`}
        audio = {process.env.PUBLIC_URL + '/audio/santa.mp3'}
      />

      <Attraction
        title="Eos Chasma"
        image="https://photojournal.jpl.nasa.gov/browse/PIA25182.jpg"
        description = {`${EosChasma}`}
        audio={process.env.PUBLIC_URL + '/audio/eos.mp3'}
      />
       
       
    </div>
    )
}
export default Jupiter;

