import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { parseXML } from '../../utils/utils.js';
import './Search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.search = this.search.bind(this);
  }

  handleKeyPress(e) {
    const input = e.target.value;

    if (input && e.key === 'Enter') {
      this.search(input);
    }
  }

  search(query) {
    const url = `https://www.boardgamegeek.com/xmlapi2/search?type=boardgame&query=${query}`;

    fetch(url)
      .then(response => response.text())
      .then((xmlResponse) => {
        const json = parseXML(xmlResponse);

        this.setState({
          results: json.items.item,
          isLoaded: true
        });
      })
      .catch(error => this.setState({ hasError: true }));
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
