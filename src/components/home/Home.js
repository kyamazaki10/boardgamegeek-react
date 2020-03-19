import React from 'react';
import Grid from '@material-ui/core/Grid';
import PaperSurface from '../shared/paper/PaperSurface.js';
import Hot from '../hot/Hot.js';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Grid container spacing={2}>
          <PaperSurface
            header="About"
            description="Learn more about..."
            buttonText="Learn More"
            buttonUrl="about"
            size={6}
          />

          <PaperSurface
            header="Find a User"
            description="View stats for a specific BoardGameGeek user."
            search={true}
            type="users"
            size={6}
          />
        </Grid>

        <Hot />
      </div>
    );
  }
}

export default Home;
