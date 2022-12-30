import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './_index.scss';
import App from './App';
import "./fonts/AvenierNext/AvenirNextLTPro-Regular.otf"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


