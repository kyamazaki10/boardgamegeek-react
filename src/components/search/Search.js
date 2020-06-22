import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { redirectUrl } from '../../utils/utils.js';
import './Search.css';

const SEARCH_PLACEHOLDER = 'Search...';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleBlur(e) {
    const target = e.target;

    if (!target.value) {
      target.placeholder = SEARCH_PLACEHOLDER;
    }
  }

  handleFocus(e) {
    e.target.placeholder = '';
  }

  handleKeyPress(e) {
    const input = e.target.value;

    if (input && e.key === 'Enter') {
      e.target.value='';
      redirectUrl(this.props.type, input);
    }
  }

  render() {
    return (
      <div className="search">
        <div className="search-icon">
          <SearchIcon />
        </div>

        <InputBase
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onKeyPress={this.handleKeyPress}
          placeholder={SEARCH_PLACEHOLDER}
          inputProps={{'aria-label': 'Search'}}
          className="search-input" />
      </div>
    );
  }
}

export default Search;
