import React from 'react';
import Grid from '@material-ui/core/Grid';
import PaperSurface from '../shared/paper/PaperSurface.js';
import { filterAndJoinArray } from '../../utils/utils.js';
import './UserInfo.css';

class UserInfo extends React.Component {

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
    const { user } = this.props;

    return (
      <Grid container spacing={2}>
        <PaperSurface
          header={user.$.name}
          description={this.renderUserAdditionalInfo(user)}
          size={4}
        />
      </Grid>
    );
  }
}

export default UserInfo;
