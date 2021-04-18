import React from 'react';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import withWidth from '@material-ui/core/withWidth';
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
      games: [],
      error: null,
      isExpanded: false,
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
            games: json.items.item,
            isLoaded: true
          });
        },
        (error) => {
          this.setState({ error: error });
        }
      )
  }

  calculateColumnWidth() {
    switch(this.props.width) {
      case 'xs': return 1;
      case 'sm': return 2;
      default: return 4;
    }
  }

  showMore() {
    this.setState({
      isExpanded: true
    });
  }

  renderGameGrid(games) {
    return(
      games.map((game, i) => (
        <HotGame key={i} game={game} />
      ))
    );
  }

  renderGames() {
    let games = this.state.games;
    const topGames = games.slice(0,20);
    const isExpanded = this.state.isExpanded;

    return (
      <>
        <GridList cellHeight={150} cols={this.calculateColumnWidth()} spacing={20}>
          {this.renderGameGrid(topGames)}
          {isExpanded && (this.renderGameGrid(games))}
        </GridList>

        {!isExpanded && (
          <Button variant="contained" color="primary" className="more" onClick={() => this.showMore()}>
            Show More
          </Button>
        )}
      </>
    );
  }

  render() {
    const {
      error,
      isLoaded
    } = this.state;

    return (
      <Paper className="paper hot">
        <Typography variant="h4" component="h2" gutterBottom={true}>
          What’s Hot?
        </Typography>

        {isLoaded
          ? this.renderGames()
          : <Progress error={error}></Progress>
        }
      </Paper>
    );
  }
}

export default withWidth()(Hot);
