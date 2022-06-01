import React from 'react';
import { cleanup } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import ReactDOM from 'react-dom';

afterEach(cleanup);

// jest.mock will mock all the function using jest.fn() that is present inside the react-dom library
jest.mock('react-dom');

describe('Testing Application Root', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
    require('./index');
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>,
      div
    );
  });

  it('should render the app inside div which has root id', () => {
    expect(document.getElementById('root')).toBeDefined();
  });

  it('should render App component', () => {
    expect(App).toBeDefined();
  });
});
