import React from 'react';
import Hot from '../hot/Hot.js';
import FindUser from './FindUser.js';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <FindUser />
        <Hot />
      </div>
    );
  }
}

export default Home;
