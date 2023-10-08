import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './cards'
import { Link } from 'react-router-dom';
import SolarSystem from './Components/SolarSystem';

function Home() {
  return (
    <div>
      <header>
        <div
          className='p-5 text-center bg-image'
          style={{ backgroundImage: `url("https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")`, height: 300 , backgroundSize: 'cover',backgroundPosition: 'center'}}
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <h1 className='mb-3'>Planetary Tourism</h1>
                <h4 className='mb-3'>To Infinity and Beyond!</h4>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <div className="container">
      <h1 className='pt-3 pb-3'>Browse the planet you wish to visit</h1>
      
        <div className='pt-3 pb-3' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Cards 
            image = "https://images.unsplash.com/photo-1639382575211-e1959050f0fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
            title="Moon"
            description="Go to Moon"
          />
          <Cards 
            image = "https://images.unsplash.com/photo-1639393455114-84df73f758cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
            title="Venus"
            description="Go to Venus"
          />
          <Cards 
            image = "https://images.unsplash.com/photo-1639477734993-44982980229e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
            title="Jupiter"
            description="Go to Jupiter  "
          />
          <Cards 
            image = "https://images.unsplash.com/photo-1639477735279-c36dda1f7ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
            title="Mars"
            description="Go to Mars"
          />
        </div>
        <div className='pt-3 pb-3' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Cards 
            image = "https://images.unsplash.com/photo-1639477878754-4119b60fb02a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
            title="Neputune"
            description="Go to Neputune"
          />
          <Cards 
            image = "https://images.unsplash.com/photo-1639548206689-1a5238f8d5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
            title="Uranus"
            description="Go to Uranus"
          />
          <Cards 
            image = "https://images.unsplash.com/photo-1639548206755-b20081a7cadc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
            title="Saturn"
            description="Go to Saturn"
          />
          <Cards 
            image = "https://images.unsplash.com/photo-1639548206689-1a5238f8d5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
            title="Uranus"
            description="Go to Mars"
          />
        </div>
      </div>
      <SolarSystem />
    </div>
  );
}

export default Home;
