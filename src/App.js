import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Moon from './planets/moon.js';
import SolarSystem from './Pages/SolarSystem';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Moon' element={<Moon />} />
        <Route path='/SolarSystem' element={<SolarSystem />} />
      </Routes>
      
    </div>
  );
}

export default App;
