import React from 'react';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GameDescription from './GameDescription.js';
import Progress from '../shared/progress/Progress.js';
import { xmlApiFetch } from '../../utils/api.js';
import './Game.css';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: {},
      error: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    this.fetchGame();
  }

  fetchGame() {
    const url = `https://www.boardgamegeek.com/xmlapi2/thing?id=${this.props.match.params.id}`;

    xmlApiFetch(url)
      .then(
        (json) => {
          this.setState({
            game: json.items.item[0],
            isLoaded: true
          });
        },
        (error) => {
          this.setState({ error: error });
        }
      )
  }

  renderGame(game) {
    const title = game.name[0].$.value;

    return (
      <Paper className="paper">
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <img src={game.image[0]} alt={title} />
          </Grid>

          <Grid item xs={9}>
            <Typography variant="h4" component="h1" gutterBottom={true}>
              {title} ({game.yearpublished[0].$.value})
            </Typography>

            <div className="details">
              <Typography variant="body1">
                Players: {game.minplayers[0].$.value}-{game.maxplayers[0].$.value}
              </Typography>

              <Typography variant="body1">
                Playing Time: {game.minplaytime[0].$.value}-{game.maxplaytime[0].$.value} minutes
              </Typography>
            </div>
          </Grid>

          <GameDescription description={game.description} />
        </Grid>
      </Paper>
    );
  }

  render() {
    const {
      error,
      game,
      isLoaded
    } = this.state;

    return (
      <Grid container spacing={2} className="game">
        <Grid item xs={12}>
          {isLoaded
            ? this.renderGame(game)
            : <Progress error={error} />
          }
        </Grid>
      </Grid>
    );
  }
}

export default Game;
