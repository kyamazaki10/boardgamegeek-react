import React from 'react';
import Grid from '@material-ui/core/Grid';
import UserInfo from './UserInfo.js';
import UserGamesOwned from './UserGamesOwned.js';
import UserGamesPlayed from './UserGamesPlayed.js';
import Progress from '../shared/progress/Progress.js';
import { xmlApiFetch } from '../../utils/api.js';
import './User.css';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: {},
      error: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    this.fetchCollection(this.props.match.params.id);
  }

  fetchCollection(id) {
    const url = `https://www.boardgamegeek.com/xmlapi2/collection?username=${id}`;

    xmlApiFetch(url)
      .then(
        (json) => {
          this.setState({
            collection: json.items,
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
      collection,
      error,
      isLoaded
    } = this.state;

    const id = this.props.match.params.id;

    return (
      <Grid container spacing={2} className="user">
        <Grid item xs={4}>
          <UserInfo id={id} />
        </Grid>

        <Grid item xs={4}>
          {isLoaded
            ? <UserGamesOwned collection={collection.item} />
            : <Progress error={error} />
          }
        </Grid>

        <Grid item xs={4}>
          <UserGamesPlayed id={id} />
        </Grid>
      </Grid>
    );
  }
}

export default User;
