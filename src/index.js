import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

console.log("INDEX.JS ACCESSED")
ReactDOM.render(
  <React.StrictMode> 
     {console.log("ReactDOM RENDER APP START")}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
