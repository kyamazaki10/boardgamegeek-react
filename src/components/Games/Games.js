import React from 'react';
import './Games.css';
import * as xml2js from 'xml2js';

class Games extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: {},
      isLoaded: false
    };
  }

  componentDidMount() {
    this.fetchGame();
  }

  fetchGame() {
    const url = `https://www.boardgamegeek.com/xmlapi2/thing?id=${this.props.match.params.id}`;
    let json = {};

    fetch(url)
      .then(response => response.text())
      .then((xmlResponse) => {
        xml2js.parseString(xmlResponse, function (error, result) {
          json = result;
        });

        this.setState({
          hot: json.items.item[0],
          isLoaded: true
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return(
      <div>{this.props.match.params.id}</div>
    );
  }
}

export default Games;
