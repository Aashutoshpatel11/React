import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Temp from './temp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Temp />
  </React.StrictMode>
);
