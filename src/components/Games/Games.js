import React from 'react';
import Progress from '../Progress/Progress.js';
import { parseXML, decodeHTML } from '../../utils/utils.js';
import './Games.css';
import Typography from '@material-ui/core/Typography';

class Games extends React.Component {
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
        <div className="game-content">
          <img src={game.image[0]} alt={title} />

          <Typography variant="h3" component="h1">
            {title}
          </Typography>

          {decodeHTML(game.description)}

          {game.minplayers[0].$.value}
          {game.maxplayers[0].$.value}
          {game.minplaytime[0].$.value}
          {game.maxplaytime[0].$.value}
          {game.yearpublished[0].$.value}
        </div>
      );
    } else {
      return <Progress hasError={this.state.hasError} />;
    }
  }

  render() {
    return(
      <div className="game">
        {this.renderGame()}
      </div>
    );
  }
}

export default Games;
