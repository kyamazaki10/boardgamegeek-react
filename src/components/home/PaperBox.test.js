import React from 'react';
import ReactDOM from 'react-dom';
import PaperBox from './PaperBox.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PaperBox />, div);
});
