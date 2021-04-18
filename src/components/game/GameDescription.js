import React from 'react';
import Typography from '@material-ui/core/Typography';
import { decodeHTML } from '../../utils/utils.js';
import './GameDescription.css';

class GameDescription extends React.Component {
  render() {
    return (
      <Typography variant="body1" className="description">
        {decodeHTML(this.props.description)}
      </Typography>
    );
  }
}

export default GameDescription;
