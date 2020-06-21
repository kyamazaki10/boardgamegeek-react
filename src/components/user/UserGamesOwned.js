import React from 'react';
import PaperSurface from '../shared/paper/PaperSurface.js';
import './UserGamesOwned.css';

class UserGamesOwned extends React.Component {

  calculateOwned(games) {
    return games.filter(game => game.status[0].$.own === '1').length;
  }

  render() {
    const { collection } = this.props;

    return(
      <PaperSurface
        header={this.calculateOwned(collection.item)}
        description="Games Owned"
        size={4}
      />
    );
  }
}

export default UserGamesOwned;
