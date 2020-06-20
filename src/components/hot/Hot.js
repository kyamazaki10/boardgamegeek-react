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
      hot: [],
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
            hot: json.items.item,
            isLoaded: true
          });
        },
        (error) => {
          this.setState({ error: error });
        }
      )
  }

  renderHotGames() {
    if (this.state.isLoaded) {
      const games = this.state.hot;

      return (
        <Paper className="paper paper-hot">
          <Typography variant="h4" component="h2">
            What’s Hot?
          </Typography>

          <GridList cellHeight={180} cols={6} spacing={15}>
            {games.map((game, i) => (
              <HotGame key={i} game={game} />
            ))};
          </GridList>
        </Paper>
      );
    } else {
      return <Progress error={this.state.error} />;
    }
  }

  render() {
    return (
      <div className="hot">
        {this.renderHotGames()}
      </div>
    );
  }
}

export default Hot;
