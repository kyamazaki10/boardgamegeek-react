import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hot from '../hot/Hot.js';
import FindUser from './FindUser.js';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FindUser />
        </Grid>

        <Grid item xs={12}>
          <Hot />
        </Grid>
      </Grid>
    );
  }
}

export default Home;
