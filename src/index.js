import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import { DAppProvider, Config, TestBNB } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import { getDefaultProvider } from 'ethers'

const config: Config = {
  readOnlyChainId: TestBNB.chainId,
  readOnlyUrls: {
    [TestBNB.chainId]: getDefaultProvider('mainnet'),
  },
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <DAppProvider config={config}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    </DAppProvider>
  </React.StrictMode>,
);
