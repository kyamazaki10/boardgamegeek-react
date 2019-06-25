import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import './HotGame.css';

class HotGame extends React.Component {
  constructor(props) {
    super(props);

    this.goToGame = this.goToGame.bind(this);
  }

  goToGame() {
    window.location = `/games/${this.props.game.$.id}`;
  }

  render() {
    const { key, game } = this.props;
    let title = game.name[0].$.value;

    return (
      <GridListTile
        key={key}
        style={{...this.props.style}}
        onClick={this.goToGame}
        className="tile"
      >
        <img src={game.thumbnail[0].$.value} alt={title} />
        <GridListTileBar
          title={title}
          className="tilebar"
          actionIcon={
            <IconButton aria-label="Info">
              <InfoIcon className="info" />
            </IconButton>
          }
        />
      </GridListTile>
    );
  }
}

export default HotGame;
