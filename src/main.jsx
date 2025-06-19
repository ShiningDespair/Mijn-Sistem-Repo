import React from 'react'; // Changed from { StrictMode } to React for full module
import ReactDOM from 'react-dom/client'; // Changed from { createRoot } for standard import
import './styles/global.css'; // Added global styles
// import './index.css'; // Removed index.css as per instructions
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
