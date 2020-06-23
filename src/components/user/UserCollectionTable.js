import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './UserCollectionTable.css';

class UserCollectionTable extends React.Component {

  showRank(rank) {
    return rank === 'Not Ranked' ? '' : rank;
  }

  showStatus(status) {
    return status === '0' ? '' : 'Owned';
  }

  render() {
    const collection = this.props.collection;

    return(
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Game</TableCell>
              <TableCell align="center">Rank</TableCell>
              <TableCell align="center">Your Rating</TableCell>
              <TableCell align="center">Geek Rating</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Plays</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {collection.map(game => (
              <TableRow key={game.$.objectid}>

                <TableCell>
                  {game.name[0]._}
                </TableCell>

                <TableCell align="center">
                  {this.showRank(game.stats[0].rating[0].ranks[0].rank[0].$.value)}
                </TableCell>

                <TableCell align="center">
                  {game.stats[0].rating[0].$.value}
                </TableCell>

                <TableCell align="center">
                  {Math.floor(game.stats[0].rating[0].average[0].$.value * 1000) / 1000}
                </TableCell>

                <TableCell align="center">
                  {this.showStatus(game.status[0].$.own)}
                </TableCell>

                <TableCell align="center">
                  {game.numplays[0]}
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default UserCollectionTable;
