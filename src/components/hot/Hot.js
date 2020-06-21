import React from 'react';
import GridList from '@material-ui/core/GridList';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import HotGame from './HotGame.js';
import Progress from '../shared/progress/Progress.js';
import { xmlApiFetch } from '../../utils/api.js';
import './Hot.css';

class Hot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hotGames: [],
      error: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    this.fetchHotGames();
  }

  fetchHotGames() {
    const url = 'https://www.boardgamegeek.com/xmlapi2/hot';

    xmlApiFetch(url)
      .then(
        (json) => {
          this.setState({
            hotGames: json.items.item,
            isLoaded: true
          });
        },
        (error) => {
          this.setState({ error: error });
        }
      )
  }

  renderHotGames(games) {
    return (
      <GridList cellHeight={180} cols={6} spacing={15}>
        {games.map((game, i) => (
          <HotGame key={i} game={game} />
        ))};
      </GridList>
    );
  }

  render() {
    const {
      hotGames,
      isLoaded,
      error
    } = this.state;

    return (
      <Paper className="paper paper-hot">
        <Typography variant="h4" component="h2">
          What’s Hot?
        </Typography>

        {isLoaded
          ? this.renderHotGames(hotGames)
          : <Progress error={error}></Progress>
        }
      </Paper>
    );
  }
}

export default Hot;
