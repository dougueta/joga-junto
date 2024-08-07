import React from 'react';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './app/app';
import './index.css';
import theme from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
