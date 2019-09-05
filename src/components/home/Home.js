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
          <PaperBox
            header="Find a Game"
            description="Looking for a game? Enter the title below."
            search={true}
            type="search"
          />

          <PaperBox
            header="Find a User"
            description="View stats for a specific BoardGameGeek user."
            search={true}
            type="users"
          />

          <PaperBox
            header="About"
            description="Learn more about..."
            buttonText="Learn More"
            buttonUrl="about"
          />
        </Grid>
      </div>
    );
  }
}

export default Home;
