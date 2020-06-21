import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Search from '../../search/Search.js';
import './PaperSurface.css';

class PaperSurface extends React.Component {
  renderSearch() {
    const search  = this.props.search;
    const type = this.props.type;

    return (
      <>  
        {search &&
          <Search type={type} />
        }
      </>
    );
  }

  renderButton() {
    const buttonText = this.props.buttonText;

    return(
      <>
        {buttonText &&
          <Button variant="contained">{buttonText}</Button>
        }
      </>
    );
  }

  render() {
    return(
      <Paper className="paper paper-surface">
        <Typography variant="h3" gutterBottom={true}>
          {this.props.header}
        </Typography>

        <Typography variant="body1" gutterBottom={true} className="description">
          {this.props.description}
        </Typography>

        {this.renderSearch()}
        {this.renderButton()}
      </Paper>
    );
  }
}

export default PaperSurface;
