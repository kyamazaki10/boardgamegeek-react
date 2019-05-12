import React from 'react';
import Games from '../Games/Games.js';
import Header from '../Header/Header.js';
import Hot from '../Hot/Hot.js';
import theme from '../../utils/theme.js';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />

      <Router>
        <Route path="/" exact component={Hot} />
        <Route path="/games/:id" component={Games} />
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
