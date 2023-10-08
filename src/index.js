import React from 'react';
import { HashRouter,BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter basename="/planetary_tourism">
        <App />
      </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
// basename="/planetary_tourism"