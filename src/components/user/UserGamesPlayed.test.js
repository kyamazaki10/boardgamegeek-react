import React from 'react';
import ReactDOM from 'react-dom';
import UserGamesPlayed from './UserGamesPlayed.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserGamesPlayed />, div);
});
