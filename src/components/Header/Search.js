import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import './Search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  }

  handleSearch() {
    console.log('search');
  }

  render() {
    return(
      <div className="search">
        <div className="search-icon">
          <SearchIcon />
        </div>

        <InputBase
          onKeyPress={this.handleKeyPress}
          placeholder="Search..."
          inputProps={{'aria-label': 'Search'}}
          className="search-input" />
      </div>
    );
  }
}

export default Search;
