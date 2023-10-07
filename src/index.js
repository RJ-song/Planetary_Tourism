import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
);

reportWebVitals();
// basename="/planetary_tourism"