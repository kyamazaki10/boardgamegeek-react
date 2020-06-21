import React from 'react';
import Grid from '@material-ui/core/Grid';
import PaperSurface from '../shared/paper/PaperSurface.js';
import './UserGamesOwned.css';

class UserGamesOwned extends React.Component {

  calculateOwned(games) {
    return games.filter(game => game.status[0].$.own === '1').length;
  }

  render() {
    const { collection } = this.props;

    return(
      <Grid container spacing={2}>
        <PaperSurface
          header={this.calculateOwned(collection.item) + ' Games Owned'}
          size={4}
        />
      </Grid>
    );
  }
}

export default UserGamesOwned;
