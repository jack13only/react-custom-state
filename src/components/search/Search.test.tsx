import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Search from './Search';
import Main from '../../pages/main/Main';

describe('test Input', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('render Input', () => {
    render(
      <Search value="" inputHandler={() => {}} onKeyPress={() => {}} onFetchCards={() => {}} />
    );
    expect(screen.getByRole('searchbox') as HTMLInputElement).toBeInTheDocument();
  });

  // it('test localStorage', () => {
  //   localStorage.clear();
  //   expect(localStorage).toHaveLength(0);
  //   localStorage.setItem('j13o-input', 'qwerty');
  //   expect(localStorage).toHaveLength(1);
  //   const { unmount } = render(<Main />);
  //   expect(screen.getByDisplayValue(/qwerty/i)).toBeInTheDocument();
  //   unmount();
  //   render(<Main />);
  //   expect(screen.getByDisplayValue(/qwerty/i)).toBeInTheDocument();
  // });

  // it('test input value change', () => {
  //   const searchBar = render(<Main />);
  //   const input = searchBar.getByRole('searchbox') as HTMLInputElement;
  //   fireEvent.change(input, { target: { value: 'whiskey' } });
  //   expect(input.value).toBe('whiskey');
  // });
});
