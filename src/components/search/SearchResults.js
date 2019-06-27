import React from 'react';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Progress from '../shared/progress/Progress.js';
import { parseXML } from '../../utils/utils.js';
import './SearchResults.css';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      isLoaded: false,
      results: []
    };

    this.fetchSearch = this.fetchSearch.bind(this);
  }

  componentDidMount() {
    this.fetchSearch(this.props.match.params.query);
  }

  fetchSearch(query) {
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

  renderSearchResultsRow() {
    const results = this.state.results;

    return results.map((result, i) => {
      let name = result.name && result.name[0].$.value;
      let year = result.yearpublished && result.yearpublished[0].$.value;

      return(
        <TableRow key={i}>
          <TableCell>
            <Link to={`/games/${result.$.id}`}>{name}</Link>
          </TableCell>
          <TableCell>{year}</TableCell>
        </TableRow>
      );
    });
  }

  renderSearchResultsTable() {
    if (this.state.isLoaded) {
      return (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Game</TableCell>
              <TableCell>Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.renderSearchResultsRow()}
          </TableBody>
        </Table>
      );
    } else {
      return <Progress hasError={this.state.hasError} />;
    }
  }

  render() {
    return (
      <div className="search-results">
        {this.renderSearchResultsTable()}
      </div>
    );
  }
}

export default SearchResults;
