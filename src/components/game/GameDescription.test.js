import React from 'react';
import ReactDOM from 'react-dom';
import GameDescription from './GameDescription';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GameDescription />, div);
  ReactDOM.unmountComponentAtNode(div);
});
