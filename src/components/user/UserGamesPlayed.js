import React from 'react';
import PaperSurface from '../shared/paper/PaperSurface.js';
import Progress from '../shared/progress/Progress.js';
import { xmlApiFetch } from '../../utils/api.js';
import './UserGamesPlayed.css';

class UserGamesPlayed extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      plays: {}
    };
  }

  componentDidMount() {
    this.fetchPlays(this.props.id);
  }

  fetchPlays(id) {
    const url = `https://www.boardgamegeek.com/xmlapi2/plays?username=${id}`;

    xmlApiFetch(url)
      .then(
        (json) => {
          this.setState({
            plays: json.plays,
            isLoaded: true
          });
        },
        (error) => {
          this.setState({ error: error });
        }
      )
  }

  render() {
    const {
      error,
      isLoaded,
      plays
    } = this.state;

    return(
      <>
        {isLoaded
          ? <PaperSurface
              header={plays.$.total}
              description="Games Played"
            />
          : <Progress error={error} />
        }
      </>
    );
  }
}

export default UserGamesPlayed;
