import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { redirectUrl } from '../../utils/utils.js';
import './Search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    const input = e.target.value;

    if (input && e.key === 'Enter') {
      redirectUrl('search', input);
    }
  }

  render() {
    return (
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
