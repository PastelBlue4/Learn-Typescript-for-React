import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { Theme } from "./theme";


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
 

// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
