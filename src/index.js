import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './app/Router';
import { EventContextProvider } from './contexts/EventContext';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/defaultTheme';
import { GlobalStyle } from './styles/globals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EventContextProvider>
      <ThemeProvider theme={defaultTheme}>

      <GlobalStyle />
      <Router />

      </ThemeProvider>
    </EventContextProvider>
  </React.StrictMode>
);


