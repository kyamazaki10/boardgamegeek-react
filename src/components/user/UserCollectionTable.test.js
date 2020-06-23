import React from 'react';
import ReactDOM from 'react-dom';
import UserCollectionTable from './UserCollectionTable.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserCollectionTable />, div);
});
