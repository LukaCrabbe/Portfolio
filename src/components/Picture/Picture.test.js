import React from 'react';
import ReactDOM from 'react-dom';
import Picture from './Picture';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Picture />, div);
  ReactDOM.unmountComponentAtNode(div);
});