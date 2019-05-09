import React from 'react';
import Header from '../Header/Header.js';
import theme from '../../utils/theme.js';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
    </MuiThemeProvider>
  );
}

export default App;
