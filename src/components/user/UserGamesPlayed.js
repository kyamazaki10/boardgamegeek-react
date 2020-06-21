import React from 'react';
import PaperSurface from '../shared/paper/PaperSurface.js';
import './UserGamesPlayed.css';

class UserGamesPlayed extends React.Component {

  render() {
    const { plays } = this.props;

    return(
      <PaperSurface
        header={plays.$.total}
        description="Games Played"
        size={4}
      />
    );
  }
}

export default UserGamesPlayed;
