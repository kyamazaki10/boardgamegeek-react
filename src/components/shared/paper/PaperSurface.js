import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Search from '../../search/Search.js';
import './PaperSurface.css';

class PaperSurface extends React.Component {
  renderSearch() {
    if (this.props.search) {
      return (
        <Search type={this.props.type} />
      );
    }
  }

  renderButton() {
    const buttonText = this.props.buttonText;

    if (buttonText) {
      return (
        <Button variant="contained">{buttonText}</Button>
      );
    }
  }

  render() {
    return(
      <Grid item xs={this.props.size}>
        <Paper className="paper paper-surface">
          <Typography variant="h3" gutterBottom={true}>
            {this.props.header}
          </Typography>

          <Typography variant="body1" gutterBottom={true}>
            {this.props.description}
          </Typography>

          {this.renderSearch()}
          {this.renderButton()}
        </Paper>
      </Grid>
    );
  }
}

export default PaperSurface;
