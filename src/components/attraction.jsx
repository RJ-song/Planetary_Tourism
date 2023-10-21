import React, { useState, useRef } from "react";  
import 'bootstrap/dist/css/bootstrap.min.css';

function Attraction({title, image, description, audio}){
    const containerStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      };
    
    const imageStyles = {
        width: '800px',
        height: '450px',    
        transition: 'transform 0.3s ease',
      };
      const [isHovered, setIsHovered] = useState(false);
      const audioRef = useRef(null);

      const handleMouseEnter = () => {
        setIsHovered(true);
        audioRef.current.play();
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
        audioRef.current.pause(); 
        audioRef.current.currentTime = 0;
      };
      const handleDescriptionMouseEnter = () => {
        setIsHovered(true);
    };

    const handleDescriptionMouseLeave = () => {
        setIsHovered(false);
    };
      const enlargedImageStyles = {
        transform: isHovered ? 'scale(1.5)' : 'scale(1)', 
      };

      const descriptionStyles = {
        display: 'none',
        position: 'absolute',
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '10px',
        textAlign: 'center',
      };

    return (
            <div className="container pt-5" style={{ ...containerStyles, position: 'relative', overflow: 'hidden' }}>
                <h2 className='pb-4'>{title}</h2>  
                <div style={{ display: 'flex', alignItems: 'center' }}>       
                    <img
                        src={image}
                        alt="Your Image"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{ ...imageStyles, ...enlargedImageStyles }}
                    />
                    <div
                        className="image-description"
                        onMouseEnter={handleDescriptionMouseEnter}
                        onMouseLeave={handleDescriptionMouseLeave}
                        style={isHovered ? { ...descriptionStyles, display: 'block' } : descriptionStyles}
                    >
                    <h4>{description}</h4>
                    </div> 
                    <audio ref={audioRef} src={audio}></audio>
                </div>        
            </div>        
    )
}
export default Attraction;