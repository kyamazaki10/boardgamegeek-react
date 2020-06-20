import React from 'react';
import Grid from '@material-ui/core/Grid';
import PaperSurface from '../shared/paper/PaperSurface.js';
import './FindUser.css';

class FindUser extends React.Component {
  render() {
    return (
      <div className="find-user">
        <Grid container spacing={2}>
          <PaperSurface
            header="Find a User"
            description="View stats for a specific BoardGameGeek user."
            search={true}
            type="users"
            size={12}
          />
        </Grid>
      </div>
    );
  }
}

export default FindUser;
