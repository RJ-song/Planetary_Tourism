import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Moon from './planets/moon.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Moon' element={<Moon />} />
      </Routes>
      
    </div>
  );
}

export default App;
