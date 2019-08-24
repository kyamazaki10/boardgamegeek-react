import React from 'react';
import GridList from '@material-ui/core/GridList';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import HotGame from './HotGame.js';
import Progress from '../shared/progress/Progress.js';
import { parseXML } from '../../utils/utils.js';
import './Hot.css';

class Hot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hot: [],
      hasError: false,
      isLoaded: false
    };
  }

  componentDidMount() {
    this.fetchHotGames();
  }

  fetchHotGames() {
    const url = 'https://www.boardgamegeek.com/xmlapi2/hot';

    fetch(url)
      .then(response => response.text())
      .then((xmlResponse) => {
        const json = parseXML(xmlResponse);

        this.setState({
          hot: json.items.item,
          isLoaded: true
        });
      })
      .catch(error => this.setState({ hasError: true }));
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
      return <Progress hasError={this.state.hasError} />;
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
