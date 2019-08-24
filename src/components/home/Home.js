import React from 'react';
import Grid from '@material-ui/core/Grid';
import PaperBox from './PaperBox.js';
import Hot from '../hot/Hot.js';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Hot />

        <Grid container spacing={3}>
          <PaperBox header="Find a Game" />
          <PaperBox header="Find a User" />
          <PaperBox header="About" />
        </Grid>
      </div>
    );
  }
}

export default Home;
