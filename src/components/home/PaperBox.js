import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Search from '../search/Search.js';
import './PaperBox.css';

class PaperBox extends React.Component {
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
      <Grid item xs={4}>
        <Paper className="paper paper-box">
          <Typography variant="h4" component="h3">
            {this.props.header}
          </Typography>

          <Typography variant="body1" className="description">
            {this.props.description}
          </Typography>

          {this.renderSearch()}
          {this.renderButton()}
        </Paper>
      </Grid>
    );
  }
}

export default PaperBox;
