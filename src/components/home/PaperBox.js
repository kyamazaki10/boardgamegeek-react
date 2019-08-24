import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './PaperBox.css';

class PaperBox extends React.Component {

  render() {
    return(
      <Grid item xs={4}>
        <Paper className="paper paper-box">
          <Typography variant="h4" component="h3">{this.props.header}</Typography>
        </Paper>
      </Grid>
    );
  }
}

export default PaperBox;
