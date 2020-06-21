import React from 'react';
import PaperSurface from '../shared/paper/PaperSurface.js';
import './UserGamesPlayed.css';

class UserGamesPlayed extends React.Component {

  render() {
    const plays = this.props.plays;

    return(
      <PaperSurface
        header={plays.$.total}
        description="Games Played"
      />
    );
  }
}

export default UserGamesPlayed;
