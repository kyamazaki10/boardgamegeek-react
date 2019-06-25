import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Game from '../game/Game.js';
import Header from '../header/Header.js';
import Hot from '../hot/Hot.js';
import theme from '../../utils/theme.js';
import './App.css';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />

      <div className="content">
        <Router>
          <Route path="/" exact component={Hot} />
          <Route path="/games/:id" component={Game} />
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
