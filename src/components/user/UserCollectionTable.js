import React from 'react';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import './UserCollectionTable.css';

const COLUMN_DEFAULT = 'game';
const SORT_ASCENDING = 'asc';
const SORT_DESCENDING = 'desc';

class UserCollectionTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      column: COLUMN_DEFAULT,
      direction: SORT_ASCENDING
    };
  }

  showStatus(status) {
    return (status === 0) ? '' : 'Owned';
  }

  alignColumn(column) {
    return (column === COLUMN_DEFAULT) ? 'left' : 'center';
  }

  sortCollection(columnId) {
    if (this.state.column === columnId) {
      this.setState({
        direction: this.flipSortDirection()
      });
    } else {
      this.setState({
        column: columnId,
        direction: SORT_ASCENDING
      });
    }
  }

  flipSortDirection() {
    return (this.state.direction === SORT_ASCENDING)
      ? SORT_DESCENDING : SORT_ASCENDING;
  }

  compareValues(columnId, direction) {
    return function innerSort(a, b) {
      const compareA = (typeof a[columnId] === 'string') ? a[columnId].toUpperCase() : a[columnId];
      const compareB = (typeof b[columnId] === 'string') ? b[columnId].toUpperCase() : b[columnId];

      let compare = 0;

      if (compareA > compareB) {
        compare = 1;
      }

      if (compareA < compareB) {
        compare = -1;
      }

      return (direction === SORT_ASCENDING) ? compare : compare * -1;
    };
  }

  renderTableHead() {
    const columns = [
      { id: 'game', display: 'Game' },
      { id: 'rank', display: 'Rank' },
      { id: 'your_rating', display: 'Your Rating' },
      { id: 'geek_rating', display: 'Geek Rating' },
      { id: 'status', display: 'Status' },
      { id: 'plays', display: 'Plays' }
    ];

    return (
      <TableRow>
        {columns.map((column, i) => {
          const columnId = column.id;

          return (
            <TableCell
              key={i}
              align={this.alignColumn(columnId)}
            >
              <TableSortLabel
                active={this.state.column === columnId}
                direction={this.state.direction}
                onClick={() => this.sortCollection(columnId)}
              >
                {column.display}
              </TableSortLabel>
            </TableCell>
          );
        })}
      </TableRow>
    );
  }

  render() {
    const collection = this.props.collection;

    return (
      <Paper>
        <Table>
          <TableHead>
            {this.renderTableHead()}
          </TableHead>

          <TableBody>
            {collection
              .sort(this.compareValues(this.state.column, this.state.direction))
              .map(game => (
                <TableRow key={game.id}>

                  <TableCell>
                    <Link href={`https://boardgamegeek.com/boardgame/${game.id}`}>
                      {game.game}
                    </Link>
                  </TableCell>

                  <TableCell align="center">
                    {game.rank}
                  </TableCell>

                  <TableCell align="center">
                    {game.your_rating}
                  </TableCell>

                  <TableCell align="center">
                    {game.geek_rating}
                  </TableCell>

                  <TableCell align="center">
                    {this.showStatus(game.status)}
                  </TableCell>

                  <TableCell align="center">
                    {game.plays}
                  </TableCell>

                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default UserCollectionTable;
