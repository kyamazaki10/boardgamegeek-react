import React from 'react';
import HotGame from './HotGame.js';
import Progress from '../Progress/Progress.js';
import './Hot.css';
import GridList from '@material-ui/core/GridList';
import Typography from '@material-ui/core/Typography';
import * as xml2js from 'xml2js';

class Hot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hot: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    this.fetchHotGames();
  }

  fetchHotGames() {
    const url = 'https://www.boardgamegeek.com/xmlapi2/hot';
    let json = {};

    fetch(url)
      .then(response => response.text())
      .then((xmlResponse) => {
        xml2js.parseString(xmlResponse, function (error, result) {
          json = result;
        });

        this.setState({
          hot: json.items.item,
          isLoaded: true
        });
      })
      .catch(error => console.log(error));
  }

  renderHotGames() {
    if (this.state.isLoaded) {
      let games = this.state.hot;

      return (
        <React.Fragment>
          <Typography variant="h4" className="headline">
            What’s Hot?
          </Typography>
          <GridList cellHeight={180} cols={5} spacing={8}>
            {games.map((game, i) => (
              <HotGame key={i} game={game} />
            ))};
          </GridList>
        </React.Fragment>
      );
    } else {
      return <Progress />;
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
