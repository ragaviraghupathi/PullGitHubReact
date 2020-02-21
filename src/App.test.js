import React from 'react';
import {render , fireEvent} from '@testing-library/react';
import App from './App';
import NavBar from './Components/NavBar';

test('renders header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Github Repositories/);
  expect(linkElement).toBeInTheDocument();
});

test('render to match App Component', () => {
  const { asFragment } = render(<App/>);
  expect(asFragment()).toMatchSnapshot();
});

test('test the search functionality', () => {
  const { getByText, asFragment } = render(<NavBar onSearch={() => { }} />)
  const firstRender = asFragment()
  fireEvent.click(getByText(/Search/))
  expect(firstRender).toMatchSnapshot(asFragment())
});





