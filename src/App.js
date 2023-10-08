import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Moon from './planets/moon.js';
import Mars from './planets/mars.js';
import Jupiter from './planets/jupiter';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Moon' element={<Moon />} />
        <Route path='/Mars' element={<Mars />} />
        <Route path='/Jupiter' element={<Jupiter />} />
      </Routes>
      
    </div>
  );
}

export default App;
