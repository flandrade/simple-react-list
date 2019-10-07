import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

it('renders with sucesfull request', () => {
  const sucessfulFn = () => (Promise.resolve([]));

  const div = document.createElement('div');
  ReactDOM.render(<List getUsers={sucessfulFn}/>, div);

  expect(div.textContent).toContain('City');
  ReactDOM.unmountComponentAtNode(div);
});
