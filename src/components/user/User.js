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
      error: null,
      isUserLoaded: false,
      isUserCollectionLoaded: false,
      isUserPlaysLoaded: false,
      user: {},
      userCollection: {},
      userPlays: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    this.fetchUser(id);
    this.fetchUserCollection(id);
    this.fetchUserPlays(id);
  }

  fetchUser(id) {
    const url = `https://www.boardgamegeek.com/xmlapi2/user?name=${id}`;

    xmlApiFetch(url)
      .then(
        (json) => {
          this.setState({
            user: json.user,
            isUserLoaded: true
          });
        },
        (error) => {
          this.setState({ error: error });
        }
      )
  }

  fetchUserCollection(id) {
    const url = `https://www.boardgamegeek.com/xmlapi2/collection?username=${id}`;

    xmlApiFetch(url)
      .then(
        (json) => {
          this.setState({
            userCollection: json.items,
            isUserCollectionLoaded: true
          });
        },
        (error) => {
          this.setState({ error: error });
        }
      )
  }

  fetchUserPlays(id) {
    const url = `https://www.boardgamegeek.com/xmlapi2/plays?username=${id}`;

    xmlApiFetch(url)
      .then(
        (json) => {
          this.setState({
            userPlays: json.plays,
            isUserPlaysLoaded: true
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
      isUserLoaded,
      isUserCollectionLoaded,
      isUserPlaysLoaded,
      user,
      userCollection,
      userPlays
    } = this.state;

    return (
      <Grid container spacing={2} className="user">
        <Grid item xs={4}>
          {isUserLoaded
            ? <UserInfo user={user}></UserInfo>
            : <Progress error={error} />
          }
        </Grid>

        <Grid item xs={4}>
          {isUserCollectionLoaded
            ? <UserGamesOwned collection={userCollection}></UserGamesOwned>
            : <Progress error={error}></Progress>
          }
        </Grid>

        <Grid item xs={4}>
          {isUserPlaysLoaded
            ? <UserGamesPlayed plays={userPlays}></UserGamesPlayed>
            : <Progress error={error}></Progress>
          }
        </Grid>
      </Grid>
    );
  }
}

export default User;
