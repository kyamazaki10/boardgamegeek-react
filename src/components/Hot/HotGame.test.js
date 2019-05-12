import React from 'react';
import ReactDOM from 'react-dom';
import HotGame from './HotGame.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HotGame />, div);
});
