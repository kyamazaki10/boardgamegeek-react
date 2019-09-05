import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Progress from '../shared/progress/Progress.js';
import { parseXML, filterAndJoinArray } from '../../utils/utils.js';
import './User.css';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      isLoaded: false,
      user: {}
    };
  }

  componentDidMount() {
    this.fetchUser(this.props.match.params.id);
  }

  fetchUser(id) {
    const url = `https://www.boardgamegeek.com/xmlapi2/user?name=${id}`;

    fetch(url)
      .then(response => response.text())
      .then((xmlResponse) => {
        const json = parseXML(xmlResponse);

        this.setState({
          user: json.user,
          isLoaded: true
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

  renderUser() {
    if (this.state.isLoaded) {
      const user = this.state.user;

      return (
        <Paper>
          <Typography variant="h4" component="h2">
            {user.$.name}
          </Typography>

          <Typography variant="subtitle1">
            {this.getName(user)} - {this.getLocation(user)}
          </Typography>

          <Typography variant="body1">
            Last Login: {user.lastlogin[0].$.value}
          </Typography>

          <Typography variant="body1">
            Year Registered: {user.yearregistered[0].$.value}
          </Typography>
        </Paper>
      );
    } else {
      return <Progress hasError={this.state.hasError} />;
    }
  }

  render() {
    return (
      <div className="user">
        {this.renderUser()}
      </div>
    );
  }
}

export default User;
