import React from 'react';
import UserInfo from './UserInfo.js';
import UserGamesOwned from './UserGamesOwned.js';
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
      user: {},
      userCollection: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    this.fetchUser(id);
    this.fetchUserCollection(id);
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

  render() {
    const {
      error,
      isUserLoaded,
      isUserCollectionLoaded,
      user,
      userCollection
    } = this.state;

    return (
      <div className="user">
        {isUserLoaded
          ? <UserInfo user={user}></UserInfo>
          : <Progress error={error} />
        }

        {isUserCollectionLoaded
          ? <>
              <UserGamesOwned collection={userCollection}></UserGamesOwned>
            </>
          : <Progress error={error}></Progress>
        }
      </div>
    );
  }
}

export default User;
