import React from 'react';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Progress from '../shared/progress/Progress.js';
import { xmlApiFetch } from '../../utils/api.js';
import './SearchResults.css';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
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

    xmlApiFetch(url)
      .then(
        (json) => {
          this.setState({
            results: json.items.item,
            isLoaded: true
          });
        },
        (error) => {
          this.setState({ error: error });
        }
      )
  }

  renderNoResults() {
    return (
      <Typography variant="body1">
        No results found.
      </Typography>
    );
  }

  renderSearchResultsRow(results) {
    return results.map((result, i) => {
      let name = result.name && result.name[0].$.value;
      let year = result.yearpublished && result.yearpublished[0].$.value;

      return (
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
      const results = this.state.results;

      if (results) {
        return (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Game</TableCell>
                <TableCell>Year</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.renderSearchResultsRow(results)}
            </TableBody>
          </Table>
        );
      } else {
        return this.renderNoResults();
      }
    } else {
      return <Progress error={this.state.error} />;
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
