import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import { MetaMaskProvider } from "metamask-react";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <BrowserRouter>
      <MetaMaskProvider>
        <App />
      </MetaMaskProvider>
      </BrowserRouter>
    </Provider>
);
