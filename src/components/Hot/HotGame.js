import React from 'react';
import './HotGame.css';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

class HotGame extends React.Component {
  render() {
    const { key, game } = this.props;
    let title = game.name[0].$.value;

    return (
      <GridListTile key={key} style={{...this.props.style}}>
        <img src={game.thumbnail[0].$.value} alt={title} />
        <GridListTileBar
          className="tilebar"
          title={title}
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
