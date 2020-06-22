import React from 'react';
import PaperSurface from '../shared/paper/PaperSurface.js';
import './FindUser.css';

class FindUser extends React.Component {
  render() {
    return (
      <PaperSurface
        header="Find a User"
        description="View stats for a specific BoardGameGeek user."
        search={true}
        type="users"
      />
    );
  }
}

export default FindUser;
