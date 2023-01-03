import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { GlobalStateProvider } from './context/GlobalState';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalStateProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
