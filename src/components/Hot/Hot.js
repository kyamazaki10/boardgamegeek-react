import React from 'react';
import Progress from '../Progress/Progress.js';
import './Hot.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
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
          <GridList cellHeight={180} cols={5} spacing={5}>
            {games.map((game, i) => (
              <GridListTile key={i}>
                <img src={game.thumbnail[0].$.value} alt={game.name[0].$.value} />
              </GridListTile>
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
