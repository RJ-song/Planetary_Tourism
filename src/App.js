import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Planet from './planets/planet.js';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Moon' element={<Planet />} />
        <Route path='/Mars' element={<Planet planetObj={"Mars.obj"} planetTexture={"mars.jpg"} />} />        
      </Routes>
      
    </div>
  );
}

export default App;
