import React from 'react';
import ReactDOM from 'react-dom';
import UserGamesOwned from './UserGamesOwned.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserGamesOwned />, div);
});
