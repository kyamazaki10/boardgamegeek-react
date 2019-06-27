import React from 'react';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import GameDescription from './GameDescription.js';
import Progress from '../shared/progress/Progress.js';
import { parseXML } from '../../utils/utils.js';
import './Game.css';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: {},
      hasError: false,
      isLoaded: false
    };
  }

  componentDidMount() {
    this.fetchGame();
  }

  fetchGame() {
    const url = `https://www.boardgamegeek.com/xmlapi2/thing?id=${this.props.match.params.id}`;

    fetch(url)
      .then(response => response.text())
      .then((xmlResponse) => {
        const json = parseXML(xmlResponse);

        this.setState({
          game: json.items.item[0],
          isLoaded: true
        });
      })
      .catch(error => this.setState({ hasError: true }));
  }

  renderGame() {
    if (this.state.isLoaded) {
      const game = this.state.game;
      const title = game.name[0].$.value;

      return (
        <Paper className="paper game-content">
          <img src={game.image[0]} alt={title} />

          <Typography variant="h4" component="h1">
            {title}
          </Typography>

          <Typography variant="subtitle2">
            ({game.yearpublished[0].$.value})
          </Typography>

          <div className="gameplay-details">
            <div>
              <Typography variant="caption">
                Players: {game.minplayers[0].$.value}-{game.maxplayers[0].$.value}
              </Typography>
            </div>

            <div>
              <Typography variant="caption">
                Playing Time: {game.minplaytime[0].$.value}-{game.maxplaytime[0].$.value} minutes
              </Typography>
            </div>
          </div>

          <GameDescription description={game.description} />
        </Paper>
      );
    } else {
      return <Progress hasError={this.state.hasError} />;
    }
  }

  render() {
    return (
      <div className="game">
        {this.renderGame()}
      </div>
    );
  }
}

export default Game;
