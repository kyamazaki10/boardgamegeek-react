import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Progress.css';

class Progress extends React.Component {
  renderError() {
    return <div>This item could not be loaded.</div>;
  }

  renderProgress() {
    return <CircularProgress className="progress" />;
  }

  render() {
    if (this.props.hasError) {
      return this.renderError();
    }

    return this.renderProgress();
  }
}

export default Progress;
