import React from 'react';
import Hot from '../hot/Hot.js';
import Welcome from './Welcome.js';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Welcome />
        <Hot />
      </div>
    );
  }
}

export default Home;
