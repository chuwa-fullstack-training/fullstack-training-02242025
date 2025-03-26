import React from 'react'; // Importing React to use JSX
import ReactDOM from 'react-dom/client'; // Importing ReactDOM to render the app into the DOM

import App from './App'; 

import './index.css'; 

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode> 
    <App />  
  </React.StrictMode>
);