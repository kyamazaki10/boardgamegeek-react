import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { redirectUrl } from '../../utils/utils.js';
import './HotGame.css';

class HotGame extends React.Component {
  render() {
    const { key, game } = this.props;
    let title = game.name[0].$.value;

    return (
      <GridListTile
        key={key}
        style={{...this.props.style}}
        onClick={() => redirectUrl('games', game.$.id)}
        className="tile"
      >
        <img src={game.thumbnail[0].$.value} alt={title} />
        <GridListTileBar
          title={title}
          className="tilebar"
        />
      </GridListTile>
    );
  }
}

export default HotGame;
