import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Game from '../game/Game.js';
import Header from '../header/Header.js';
import Home from '../home/Home.js';
import SearchResults from '../search/SearchResults.js';
import User from '../user/User.js';
import theme from '../../utils/theme.js';
import './App.css';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />

      <Grid container spacing={10} justify="center">
        <Grid item xs={12} sm={10}>
          <Router>
            <Route path="/" exact component={Home} />
            <Route path="/games/:id" component={Game} />
            <Route path="/users/:id" component={User} />
            <Route path="/search/:query" component={SearchResults} />
          </Router>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
