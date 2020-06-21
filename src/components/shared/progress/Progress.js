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
    const error = this.props.error;

    return(
      <>
        {error
          ? this.renderError()
          : this.renderProgress()
        }
      </>
    );
  }
}

export default Progress;
