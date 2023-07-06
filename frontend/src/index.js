import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesWindow from './RoutesWindow';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesWindow />
    </BrowserRouter>
  </React.StrictMode>
);

