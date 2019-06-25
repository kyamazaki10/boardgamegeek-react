import React from 'react';
import ReactDOM from 'react-dom';
import Progress from './Progress.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Progress />, div);
});
