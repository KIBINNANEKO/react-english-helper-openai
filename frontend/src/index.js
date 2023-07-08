import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesWindow from './RoutesWindow';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/themeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <RoutesWindow />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

