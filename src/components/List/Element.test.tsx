import React from 'react';
import ReactDOM from 'react-dom';
import Element from './Element';
import { User } from '../../services/api';

it('renders with no element', () => {
  const users: User[] = [];

  const div = document.createElement('div');
  ReactDOM.render(
    <table><Element users={users} /></table>, div
  );

  expect(div.textContent).not.toContain('Seattle');
  expect(div.textContent).not.toContain('Miami');
  ReactDOM.unmountComponentAtNode(div)
});
;

it('renders with one element', () => {
  const users: User[] = [{
    address: {
      city: "Seattle"
    },
    id: 1,
    name: "Peter",
    status: "non-available"
  }];

  const div = document.createElement('div');
  ReactDOM.render(
    <table><Element users={users} /></table>, div
  );

  expect(div.textContent).toContain('Seattle');
  expect(div.textContent).not.toContain('Miami');
  ReactDOM.unmountComponentAtNode(div)
});

it('renders with two elements', () => {
  const users: User[] = [{
    address: {
      city: "Seattle"
    },
    id: 1,
    name: "Peter",
    status: "non-available"
  }, {
    address: {
      city: "Miami"
    },
    id: 2,
    name: "Tess",
    status: "available"
  }];

  const div = document.createElement('div');
  ReactDOM.render(
    <table><Element users={users} /></table>, div
  );

  expect(div.textContent).toContain('Seattle');
  expect(div.textContent).toContain('Miami');
  ReactDOM.unmountComponentAtNode(div)
});
