import React from 'react';
import { decodeHTML, truncateText } from '../../utils/utils.js';
import './GameDescription.css';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

class GameDescription extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false
    };

    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    this.setState({
      isExpanded: true
    });
  }

  renderShowMoreButton() {
    if (!this.state.isExpanded) {
      return(
        <Link component="button" color="secondary" onClick={this.showMore}>More ▼</Link>
      );
    }
  }

  renderDescription() {
    const decodedDesc = decodeHTML(this.props.description);

    if (!this.state.isExpanded) {
      return truncateText(decodedDesc);
    }

    return decodedDesc;
  }

  render() {
    return(
      <Typography variant="body1" className="description">
        {this.renderDescription()}
        {this.renderShowMoreButton()}
      </Typography>
    );
  }
}

export default GameDescription;
