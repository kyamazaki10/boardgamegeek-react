import React from 'react';
import PaperSurface from '../shared/paper/PaperSurface.js';
import Progress from '../shared/progress/Progress.js';
import { xmlApiFetch } from '../../utils/api.js';
import { filterAndJoinArray } from '../../utils/utils.js';
import './UserInfo.css';

class UserInfo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      user: {}
    };
  }

  componentDidMount() {
    this.fetchUser(this.props.id);
  }

  fetchUser(id) {
    const url = `https://www.boardgamegeek.com/xmlapi2/user?name=${id}`;

    xmlApiFetch(url)
      .then(
        (json) => {
          this.setState({
            user: json.user,
            isLoaded: true
          });
        },
        (error) => {
          this.setState({ error: error });
        }
      )
  }

  getName(user) {
    return filterAndJoinArray(
      [
        user.firstname[0].$.value,
        user.lastname[0].$.value
      ]
    );
  }

  getLocation(user) {
    return filterAndJoinArray(
      [
        user.stateorprovince[0].$.value,
        user.country[0].$.value
      ],
      ', '
    );
  }

  renderUserAdditionalInfo(user) {
    return (
      <>
        <span>{this.getName(user) + " - " + this.getLocation(user)}</span>
        <span>Last Login: {user.lastlogin[0].$.value}</span>
        <span>Year Registered: {user.yearregistered[0].$.value}</span>
      </>
    );
  }

  render() {
    const {
      error,
      isLoaded,
      user
    } = this.state;

    return (
      <>
        {isLoaded
          ? <PaperSurface
              header={user.$.name}
              description={this.renderUserAdditionalInfo(user)}
            />
          : <Progress error={error} />
        }
      </>
    );
  }
}

export default UserInfo;
