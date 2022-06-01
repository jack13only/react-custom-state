import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { createMemoryHistory, MemoryHistory } from 'history';
import { MemoryRouter, Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Header } from './components';

test('render App', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/main/i)).toBeInTheDocument();
});

const createRouterWrapper =
  (history: MemoryHistory): React.ComponentType =>
  ({ children }) =>
    (
      <Router navigator={history} location={''}>
        {children}
      </Router>
    );

describe('test routes', () => {
  it('navigation to about', () => {
    const history = createMemoryHistory();
    render(<Header />, { wrapper: createRouterWrapper(history) });
    fireEvent.click(screen.getByText(/about/i));
    expect(history.location.pathname).toBe('/about');
  });

  it('navigation to main', () => {
    const history = createMemoryHistory();
    render(<Header />, { wrapper: createRouterWrapper(history) });
    fireEvent.click(screen.getByText(/main/i));
    expect(history.location.pathname).toBe('/');
  });

  it('navigation to forms', () => {
    const history = createMemoryHistory();
    render(<Header />, { wrapper: createRouterWrapper(history) });
    fireEvent.click(screen.getByText(/forms/i));
    expect(history.location.pathname).toBe('/forms');
  });
});

test('navigation to a bad page', () => {
  const history = createMemoryHistory();
  history.push('/ffff');
  render(
    <MemoryRouter initialEntries={['/sada/ffff']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Not found/i)).toBeInTheDocument();
});
