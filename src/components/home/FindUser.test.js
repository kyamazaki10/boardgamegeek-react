import React from 'react';
import ReactDOM from 'react-dom';
import FindUser from './FindUser.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FindUser />, div);
});
