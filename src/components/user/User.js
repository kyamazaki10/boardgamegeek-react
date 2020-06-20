import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PaperSurface from '../shared/paper/PaperSurface.js';
import Progress from '../shared/progress/Progress.js';
import { filterAndJoinArray } from '../../utils/utils.js';
import { xmlApiFetch } from '../../utils/api.js';
import './User.css';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
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
      .then((json) => {
        this.setState({
          user: json.user,
          isUserLoaded: true
        });
      })
      .catch(error => this.setState({ hasError: true }));
  }

  fetchUserCollection(id) {
    const url = `https://www.boardgamegeek.com/xmlapi2/collection?username=${id}`;

    xmlApiFetch(url)
      .then((json) => {
        this.setState({
          userCollection: json.items,
          isUserCollectionLoaded: true
        });
      })
      .catch(error => this.setState({ hasError: true }));
  }

  getName(user) {
    return filterAndJoinArray([user.firstname[0].$.value, user.lastname[0].$.value]);
  }

  getLocation(user) {
    return filterAndJoinArray([user.stateorprovince[0].$.value, user.country[0].$.value], ', ');
  }

  renderUserCollection(userCollection) {
    if (this.state.isUserCollectionLoaded) {

      return(
        <Grid container spacing={2}>
          <PaperSurface
            header={this.state.userCollection.$.totalitems + " Owned Games"}
            size={4}
          />
        </Grid>
      );
    } else {
      return <Progress hasError={this.state.hasError} />;
    }
  }

  renderUserInfo(user) {
    return (
      <div>
        <Typography variant="body1">{this.getName(user) + " - " + this.getLocation(user)}</Typography>
        <Typography variant="body1">Last Login: {user.lastlogin[0].$.value}</Typography>
        <Typography variant="body1">Year Registered: {user.yearregistered[0].$.value}</Typography>
      </div>
    )
  }

  renderUser(user) {
    if (this.state.isUserLoaded) {
      return (
        <Grid container spacing={2}>
          <PaperSurface
            header={user.$.name}
            description={this.renderUserInfo(user)}
            size={4}
          />
        </Grid>
      );
    } else {
      return <Progress hasError={this.state.hasError} />;
    }
  }

  render() {
    return (
      <div className="user">
        {this.renderUser(this.state.user)}
        {this.renderUserCollection(this.state.userCollection)}
      </div>
    );
  }
}

export default User;
